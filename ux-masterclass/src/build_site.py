"""Assemble ux-masterclass/index.html (standalone) and artifact.html (Claude Artifact fragment)."""
import base64, json, os, shutil

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)


def read(n):
    return open(os.path.join(HERE, n), encoding='utf-8').read()


def sz(p):
    b = os.path.getsize(os.path.join(SITE, 'files', p))
    return f'{b / 1024 / 1024:.1f} MB' if b > 1024 * 1024 else f'{round(b / 1024)} KB'


F = [
    ('UI-UX-Design-Understanding-the-Experience.pdf', 'PDF', 'Presentation, 50 slides', 'The current deck as a PDF, ready to share, print or present.'),
    ('UI-UX-Design-contact-sheet.jpg', 'JPG', 'Contact sheet', 'All 50 slides on one image, for a quick overview.'),
    ('References-and-Verification-Notes.docx', 'DOCX', 'References and verification', 'Sources, what was checked, and content integrity notes.'),
    ('References-and-Verification-Notes.md', 'MD', 'References, plain text', 'The same notes as a Markdown file.'),
]
files = [{'file': f, 'ext': e, 'label': l, 'desc': d, 'size': sz(f),
          **({'b64': 'files/' + f + '.b64.txt'} if f.endswith(('.pptx', '.docx')) else {})} for f, e, l, d in F]
slides = json.load(open(os.path.join(HERE, 'slides.json'), encoding='utf-8'))


def js(o):
    return json.dumps(o, ensure_ascii=False).replace('</', '<\\/')


app = read('app.js').replace('/*__SLIDES__*/[]', js(slides)).replace('/*__FILES__*/[]', js(files))
css = read('style.css')
body = read('body.html')
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;700;800&display=swap">\n')
DESC = 'SVCB3003 UI and UX Design: 50 slides with teaching notes, five units and assignments, interactive labs and downloads.'

VENDOR = ['<script src="vendor/gsap.min.js"></script>', '<script src="vendor/ScrollTrigger.min.js"></script>', '<script src="vendor/lenis.min.js"></script>']
CDN = ['<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>',
       '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>',
       '<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js"></script>']

# standalone page
std = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
       '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
       '<title>UX Masterclass</title>\n<meta name="description" content="' + DESC + '">\n'
       '<meta name="theme-color" content="#080808">\n' + FONTS + '<style>\n' + css + '</style>\n</head>\n<body>\n'
       + body + '\n' + '\n'.join(VENDOR) + '\n<script>\n' + app + '</script>\n</body>\n</html>\n')
open(os.path.join(SITE, 'index.html'), 'w', encoding='utf-8').write(std)

# artifact fragment
frag = ('<title>UX Masterclass</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n' + FONTS
        + '<style>\n' + css + '</style>\n' + body + '\n' + '\n'.join(CDN) + '\n<script>\n' + app + '</script>\n')
open(os.path.join(SITE, 'artifact.html'), 'w', encoding='utf-8').write(frag)
print('built', len(std), len(frag))

# staging folder for the Artifact publish (office files travel as base64 text)
STG = os.environ.get('STAGE')
if STG:
    shutil.rmtree(STG, ignore_errors=True)
    os.makedirs(STG + '/files')
    shutil.copytree(os.path.join(SITE, 'slides'), STG + '/slides')
    shutil.copytree(os.path.join(SITE, 'vendor', 'fonts'), STG + '/vendor/fonts')
    for f in os.listdir(os.path.join(SITE, 'files')):
        if f.endswith(('.pptx', '.docx')):
            open(STG + '/files/' + f + '.b64.txt', 'w').write(base64.b64encode(open(os.path.join(SITE, 'files', f), 'rb').read()).decode())
        else:
            shutil.copy(os.path.join(SITE, 'files', f), STG + '/files/' + f)
    shutil.copy(os.path.join(SITE, 'artifact.html'), STG + '/artifact.html')
    print('staged', STG)
