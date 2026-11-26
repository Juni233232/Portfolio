"""Stroke-aware overlap audit. Flags: WORD (words overlapping words) and STROKE (any visible stroked line/outline crossing a word)."""
import sys, json, pdfplumber
from audit import shrink, inter, seg_hits_box

def strokes(page):
    segs = []
    for ln in page.lines:
        segs.append(((ln['x0'], ln['top']), (ln['x1'], ln['bottom']), 'line'))
    for r in page.rects:
        w, h = r['x1']-r['x0'], r['bottom']-r['top']
        if r.get('stroke'):
            x0, y0, x1, y1 = r['x0'], r['top'], r['x1'], r['bottom']
            segs += [((x0, y0), (x1, y0), 'rect'), ((x1, y0), (x1, y1), 'rect'), ((x1, y1), (x0, y1), 'rect'), ((x0, y1), (x0, y0), 'rect')]
        elif min(w, h) <= 3.2 and max(w, h) > 6:
            segs.append(((r['x0'], (r['top']+r['bottom'])/2), (r['x1'], (r['top']+r['bottom'])/2), 'bar') if w >= h else (((r['x0']+r['x1'])/2, r['top']), ((r['x0']+r['x1'])/2, r['bottom']), 'bar'))
    for c in page.curves:
        if c.get('stroke') and not (c.get('fill') and not c.get('stroking_color')):
            pts = c.get('pts') or []
            for a, b in zip(pts, pts[1:]): segs.append((a, b, 'curve'))
    return segs

def audit(path, pages=None, out=None):
    res = {}
    with pdfplumber.open(path) as pdf:
        for pn, page in enumerate(pdf.pages, 1):
            if pages and pn not in pages: continue
            words = page.extract_words(x_tolerance=1.5)
            boxes = [(w['x0'], w['top'], w['x1'], w['bottom']) for w in words]
            hits = {}
            for i in range(len(words)):
                for j in range(i+1, len(words)):
                    if inter(shrink(boxes[i]), shrink(boxes[j])) > 0.5:
                        hits[('WORD', words[i]['text'], words[j]['text'])] = (boxes[i][0], boxes[i][1], boxes[i][2], boxes[i][3])
            for a, b, kind in strokes(page):
                for k, bx in enumerate(boxes):
                    if seg_hits_box(a, b, shrink(bx, 0.06, 0.28)):
                        hits[('STROKE', words[k]['text'], kind)] = bx
            if hits:
                res[pn] = [(k, [round(v/72, 2) for v in bb]) for k, bb in hits.items()]
    return res

if __name__ == '__main__':
    pg = {int(x) for x in sys.argv[2:]} or None
    r = audit(sys.argv[1], pg)
    n = 0
    for pn, v in r.items():
        print(f'--- slide {pn}: {len(v)}')
        for k, bb in v[:30]: print('   ', k, bb)
        n += len(v)
    print('TOTAL', n)
