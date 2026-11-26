"""Build slide images, slides.json and download files from the course deck PDF.

Usage: python3 src/build_data.py path/to/deck.pdf
Text (tag, two-part headline, subtitle) is read from the PDF itself. Speaker notes come from
ux-ui-presentation/source/assets/notes.json, with sentences that described the earlier
visuals replaced (see NOTE_FIXES).
"""
import json, os, re, shutil, subprocess, sys, tempfile
import pdfplumber
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
DECK_SRC = os.path.join(SITE, '..', 'ux-ui-presentation')
PDF = sys.argv[1]
PDF_NAME = 'UI-UX-Design-Understanding-the-Experience.pdf'


def clean(s):
    return re.sub(r'\s+', ' ', s.replace('ﬁ', 'fi').replace('ﬂ', 'fl')).strip()


def text_of(chars):
    chars = sorted(chars, key=lambda c: (round(c['top'] / 4), c['x0']))
    s, prev = '', None
    for c in chars:
        if prev is not None and (abs(c['top'] - prev['top']) > 3 or c['x0'] - prev['x1'] > c['size'] * .18):
            s += ' '
        s += c['text']
        prev = c
    return clean(s)


# Headlines where tile words are set larger than the headline, read by eye from the slides
TITLE_FIX = {1: ['UI/UX Design', 'Understanding the Experience'], 3: ['Everyday', 'Design Problems'],
             6: ['Design', 'Decides'], 11: ['UX Design', 'Roles'], 28: ['Say. Think.', 'Do. Feel.']}
SUB_FIX = {1: 'SVCB3003 UI and UX Design, a Visual Communication course. One product, Gather, follows you through every unit.',
           30: 'Use a method that fits your people, setting and decision.'}
TAG_FIX = {1: 'Course introduction'}

# Note sentences that described visuals from the earlier deck design
NOTE_FIXES = {
    1: [("Point to the cover: the phone and the browser window are the same product, a university event registration platform we will call Gather.",
         "Introduce the running example: a university event registration platform we will call Gather, designed for both phone and web.")],
    6: [("The three schematic screens on the right show moments where UX is felt.",
         "The three words on the right sum up what good design gives each group: clarity for people, trust for organisations and access for society.")],
    10: [("Bottom row shows what Gather would produce at each stage.", "Each row gives one Gather example of UX work at that stage.")],
    13: [("The hypothetical audit card on this slide shows the level of detail expected; the format and length of submission are set by the instructor.",
          "Show one worked example of your own to set the level of detail expected; the format and length of submission are set by the instructor.")],
    17: [("The ratios in the contrast card are calculated from this deck's own palette. ", ""),
         ("Notice that white text on our electric blue reaches only 4.36:1, so we use it only for large, bold labels and use a deeper blue for small text.",
          "Measure contrast with a checker rather than by eye: light grey text on white often looks fine but falls below the minimum.")],
    18: [("The return arrow on the slide represents that loop, and you can jump to any stage when needed.",
          "The slide states the rule: return to any stage as the evidence changes."),
         ("The Gather row shows one small example per stage.", "Each row gives one small Gather example per mode.")],
    22: [("The mini grid on this slide is a hypothetical illustration of format.",
          "If you show an example grid, label it as a hypothetical illustration of format.")],
    44: [("Check the screens against your flow and run the checklist on the right before moving to prototyping.",
          "Check the screens against your flow before moving to prototyping.")],
}

notes = json.load(open(os.path.join(DECK_SRC, 'source/assets/notes.json')))
pdf = pdfplumber.open(PDF)
slides = []
for i, pg in enumerate(pdf.pages, 1):
    ch = [c for c in pg.chars if c['text'].strip()]
    tag = text_of([c for c in ch if 8.5 <= c['size'] <= 9.5 and c['top'] < 40])
    big = max(c['size'] for c in ch if c['top'] < 200)
    title = [c for c in ch if abs(c['size'] - big) < 1 and c['top'] < 200]
    cols = {}
    for c in title:
        cols.setdefault(str(c['non_stroking_color']), []).append(c)
    parts = [text_of(p) for p in sorted(cols.values(), key=lambda cs: min(c['top'] for c in cs))]
    sub = text_of([c for c in ch if 12.5 <= c['size'] <= 13.5])
    parts = TITLE_FIX.get(i, parts)
    note = notes[str(i)].replace('—', ',').replace('–', '-')
    for a, b in NOTE_FIXES.get(i, []):
        assert a in note, (i, a[:40])
        note = note.replace(a, b)
    slides.append({'n': i, 'tag': TAG_FIX.get(i, tag), 't1': parts[0], 't2': ' '.join(parts[1:]),
                   'title': ' '.join(parts), 'idea': SUB_FIX.get(i, sub), 'notes': note})
assert len(slides) == 50
json.dump(slides, open(os.path.join(HERE, 'slides.json'), 'w'), ensure_ascii=False, indent=0)

# slide images: 1280 px for the viewer, 480 px thumbnails
tmp = tempfile.mkdtemp()
subprocess.run(['pdftoppm', '-png', '-scale-to', '1280', PDF, os.path.join(tmp, 's')], check=True)
out = os.path.join(SITE, 'slides')
os.makedirs(out, exist_ok=True)
for i in range(1, 51):
    im = Image.open(os.path.join(tmp, f's-{i:02d}.png')).convert('RGB')
    im.save(os.path.join(out, f'{i:02d}.jpg'), quality=84, optimize=True, progressive=True)
    t = im.resize((480, round(im.height * 480 / im.width)), Image.LANCZOS)
    t.save(os.path.join(out, f'{i:02d}-t.jpg'), quality=80, optimize=True)

# contact sheet
ims = [Image.open(os.path.join(out, f'{i:02d}-t.jpg')) for i in range(1, 51)]
w, h = ims[0].size
cols, g = 5, 16
sheet = Image.new('RGB', (cols * w + (cols + 1) * g, 10 * h + 11 * g), '#d7d7d7')
for k, im in enumerate(ims):
    sheet.paste(im, (g + (k % cols) * (w + g), g + (k // cols) * (h + g)))
files = os.path.join(SITE, 'files')
os.makedirs(files, exist_ok=True)
sheet.save(os.path.join(files, 'UI-UX-Design-contact-sheet.jpg'), quality=86, optimize=True)
shutil.copy(PDF, os.path.join(files, PDF_NAME))
shutil.rmtree(tmp)
print('slides', len(slides))
