"""Text vs shape audit: words straddling a filled shape's edge (text overflowing its container) and words over icons/images."""
import sys, pdfplumber
from audit import inter

def bbox(o): return (o['x0'], o['top'], o['x1'], o['bottom'])

def audit(path, pages=None):
    res = {}
    with pdfplumber.open(path) as pdf:
        for pn, page in enumerate(pdf.pages, 1):
            if pages and pn not in pages: continue
            W, H = page.width, page.height
            words = page.extract_words(x_tolerance=1.5)
            shapes = []
            for o in list(page.rects) + list(page.curves):
                if not (o.get('fill') or o.get('stroke')): continue
                b = bbox(o); w, h = b[2]-b[0], b[3]-b[1]
                if w > W*0.97 and h > H*0.97: continue          # slide background
                if w < 14 or h < 10: continue                    # dots, thin rules
                shapes.append((b, o))
            hits = []
            for wd in words:
                wb = (wd['x0'], wd['top'], wd['x1'], wd['bottom']); wa = (wb[2]-wb[0])*(wb[3]-wb[1])
                if wb[2] > W-0.3*72 or wb[0] < 0.3*72 or wb[3] > H-0.1*72: hits.append(('EDGE', wd['text'], [round(v/72, 2) for v in wb]))
                for sb, o in shapes:
                    ia = inter(wb, sb)
                    if ia <= 0: continue
                    frac = ia/wa
                    if 0.12 < frac < 0.88 and (sb[2]-sb[0]) > (wb[2]-wb[0])*0.9 - 1:
                        hits.append(('STRADDLE', wd['text'], [round(v/72, 2) for v in wb], round(frac, 2), [round(v/72, 2) for v in sb]))
                for im in page.images:
                    ib = (im['x0'], im['top'], im['x1'], im['bottom'])
                    if (ib[2]-ib[0]) > 40 or (ib[3]-ib[1]) > 40: continue   # skip shadow bitmaps; keep icons
                    if inter(wb, ib)/wa > 0.1: hits.append(('IMAGE', wd['text'], [round(v/72, 2) for v in wb]))
            if hits: res[pn] = hits
    return res

if __name__ == '__main__':
    pg = {int(x) for x in sys.argv[2:]} or None
    r = audit(sys.argv[1], pg); n = 0
    for pn, v in r.items():
        print(f'--- slide {pn}: {len(v)}')
        seen = set()
        for h in v:
            k = (h[0], h[1], tuple(h[2]))
            if k in seen: continue
            seen.add(k); print('   ', h)
        n += len(v)
    print('TOTAL', n)
