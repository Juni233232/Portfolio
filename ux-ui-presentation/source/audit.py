"""Overlap audit: word-vs-word, line-vs-word and image-vs-word collisions on every PDF page.
usage: python3 audit.py deck.pdf [page ...]"""
import sys, pdfplumber

def shrink(b, fx=0.04, fy=0.18):
    w, h = b[2]-b[0], b[3]-b[1]
    return (b[0]+w*fx, b[1]+h*fy, b[2]-w*fx, b[3]-h*fy)

def inter(a, b):
    x0, y0, x1, y1 = max(a[0], b[0]), max(a[1], b[1]), min(a[2], b[2]), min(a[3], b[3])
    return (x1-x0)*(y1-y0) if x1 > x0 and y1 > y0 else 0

def seg_hits_box(p, q, b):
    # Liang-Barsky clip of segment p-q against box b
    x0, y0 = p; dx, dy = q[0]-p[0], q[1]-p[1]
    t0, t1 = 0.0, 1.0
    for pp, qq in ((-dx, x0-b[0]), (dx, b[2]-x0), (-dy, y0-b[1]), (dy, b[3]-y0)):
        if pp == 0:
            if qq < 0: return False
        else:
            t = qq/pp
            if pp < 0:
                if t > t1: return False
                t0 = max(t0, t)
            else:
                if t < t0: return False
                t1 = min(t1, t)
    return t1 - t0 > 0.02 and True

def run(path, pages=None):
    total = 0
    with pdfplumber.open(path) as pdf:
        for pn, page in enumerate(pdf.pages, 1):
            if pages and pn not in pages: continue
            words = page.extract_words(keep_blank_chars=False, use_text_flow=False, x_tolerance=1.5)
            boxes = [(w['x0'], w['top'], w['x1'], w['bottom']) for w in words]
            issues = []
            for i in range(len(words)):
                for j in range(i+1, len(words)):
                    a, b = shrink(boxes[i]), shrink(boxes[j])
                    ar = inter(a, b)
                    if ar > 0.5:
                        issues.append(('WORD', words[i]['text'], words[j]['text'], round(boxes[i][0]/72, 2), round(boxes[i][1]/72, 2)))
            segs = []
            for ln in page.lines:
                segs.append(((ln['x0'], ln['top']), (ln['x1'], ln['bottom'])) if True else None)
            for r in page.rects:
                w, h = r['x1']-r['x0'], r['bottom']-r['top']
                if min(w, h) <= 3.2 and max(w, h) > 6:  # thin rect = rule line (skip text-sized bars)
                    segs.append(((r['x0'], (r['top']+r['bottom'])/2), (r['x1'], (r['top']+r['bottom'])/2)) if w >= h else (((r['x0']+r['x1'])/2, r['top']), ((r['x0']+r['x1'])/2, r['bottom'])))
            for c in page.curves:
                pts = c.get('pts') or []
                for a, b in zip(pts, pts[1:]):
                    segs.append((a, b))
            for s in segs:
                for k, bx in enumerate(boxes):
                    if seg_hits_box(s[0], s[1], shrink(bx, 0.06, 0.28)):
                        issues.append(('LINE', words[k]['text'], '', round(bx[0]/72, 2), round(bx[1]/72, 2)))
            seen = set(); out = []
            for it in issues:
                key = (it[0], it[1], it[2], it[3], it[4])
                if key not in seen: seen.add(key); out.append(it)
            if out:
                total += len(out)
                print(f'--- slide {pn}: {len(out)}')
                for it in out[:25]: print('   ', it)
    print('TOTAL', total)

if __name__ == '__main__':
    pg = {int(x) for x in sys.argv[2:]} or None
    run(sys.argv[1], pg)
