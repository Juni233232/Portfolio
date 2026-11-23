#!/bin/bash
# usage: render.sh file.pptx outdir   -> PDF, per-slide JPGs (s-NN.jpg), montages (m-N.jpg)
SK=/root/.claude/skills/synced/c6c0c4d7-702e-4c0d-98a9-ac8783e7452b_e512e4b4-bd29-46cb-bf57-7b61456ffddb/pptx
F=$1; D=$2; mkdir -p "$D"; cd "$D"
python3 $SK/scripts/office/soffice.py --headless --convert-to pdf "$F" >/dev/null 2>&1
B=$(basename "$F" .pptx)
rm -f s-*.jpg m-*.jpg
pdftoppm -jpeg -r ${DPI:-90} $B.pdf s 2>/dev/null
python3 - <<'PY'
import glob
from PIL import Image
fs = sorted(glob.glob('s-*.jpg'))
for i in range(0, len(fs), 4):
    ims = [Image.open(f) for f in fs[i:i+4]]
    w, h = ims[0].size
    sheet = Image.new('RGB', (w*2+10, h*2+10), (60,60,60))
    for j, im in enumerate(ims): sheet.paste(im, ((j%2)*(w+10), (j//2)*(h+10)))
    sheet.save('m-%02d.jpg' % (i//4+1), quality=88)
print(len(fs), 'slides')
PY
