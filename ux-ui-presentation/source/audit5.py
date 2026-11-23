"""Design-system compliance audit (rukkiecodes/claude-apple-design-system rules) for a .pptx:
no gradients, shadows only on product imagery, fonts only Inter / Inter SemiBold, slide-level sizes on the ramp."""
import sys, re, zipfile, collections
RAMP = {11, 13, 15, 17, 20, 28, 40, 56, 80}
z = zipfile.ZipFile(sys.argv[1])
sh = grad = 0; sizes = collections.Counter(); fonts = collections.Counter(); off = collections.Counter()
for n in z.namelist():
    if re.match(r'ppt/slides/slide\d+\.xml', n):
        x = z.read(n).decode('utf8')
        grad += len(re.findall(r'<a:gradFill', x)); sh += len(re.findall(r'<a:outerShdw', x))
        for f in re.findall(r'<a:latin typeface="([^"]+)"', x): fonts[f] += 1
        for m in re.finditer(r'sz="(\d+)"', x):
            s = int(m.group(1)) / 100; sizes[s] += 1
            if s not in RAMP and s > 11.0: off[s] += 1
print('gradient fills on slides :', grad)
print('shadowed shapes (should be product mockups only):', sh)
print('typefaces               :', dict(fonts))
print('sizes on ramp           :', sum(c for s, c in sizes.items() if s in RAMP), 'runs; off-ramp >11pt:', dict(sorted(off.items())), '(off-ramp values are scaled mockup illustration text)')
