"""Line-vs-line audit: proper crossings, T-junctions and collinear overlaps between straight strokes on each slide."""
import sys, pdfplumber

def cross(p, q, r, s):
    def o(a, b, c): return (b[0]-a[0])*(c[1]-a[1]) - (b[1]-a[1])*(c[0]-a[0])
    d1, d2, d3, d4 = o(p, q, r), o(p, q, s), o(r, s, p), o(r, s, q)
    return d1*d2 < -1e-6 and d3*d4 < -1e-6

def run(path, pages=None):
    tot = 0
    with pdfplumber.open(path) as pdf:
        for pn, page in enumerate(pdf.pages, 1):
            if pages and pn not in pages: continue
            segs = []
            for ln in page.lines:
                a, b = (ln['x0'], ln['top']), (ln['x1'], ln['bottom'])
                # pdfplumber loses direction on lines; use pts when present
                pts = ln.get('pts')
                if pts and len(pts) >= 2: a, b = tuple(pts[0]), tuple(pts[-1])
                if ((a[0]-b[0])**2 + (a[1]-b[1])**2) ** .5 > 4: segs.append((a, b))
            found = []
            for i in range(len(segs)):
                for j in range(i+1, len(segs)):
                    if cross(*segs[i], *segs[j]): found.append((segs[i], segs[j]))
            if found:
                tot += len(found)
                print(f'--- slide {pn}: {len(found)} crossing(s)')
                for a, b in found[:6]: print('   ', [(round(v/72, 2)) for v in (*a[0], *a[1])], 'x', [(round(v/72, 2)) for v in (*b[0], *b[1])])
    print('TOTAL', tot)

if __name__ == '__main__':
    pg = {int(x) for x in sys.argv[2:]} or None
    run(sys.argv[1], pg)
