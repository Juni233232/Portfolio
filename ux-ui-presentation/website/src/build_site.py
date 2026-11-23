import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
t = open(os.path.join(HERE, 'template.html')).read()
slides = json.load(open(os.path.join(HERE, 'slides.json')))


def sz(p):
    b = os.path.getsize(os.path.join(SITE, 'files', p))
    return f'{b / 1024 / 1024:.1f} MB' if b > 1024 * 1024 else f'{round(b / 1024)} KB'


F = [
    ('UX-UI-Design-Understanding-the-Experience.pptx', 'PPTX', 'Presentation, 50 slides', 'Editable PowerPoint with speaker notes on every slide.'),
    ('UX-UI-Design-Understanding-the-Experience.pdf', 'PDF', 'Presentation, 50 pages', 'The same deck as a PDF, ready to share or print.'),
    ('UX-UI-Design-contact-sheet.jpg', 'JPG', 'Contact sheet', 'All 50 slides on one image, for a quick overview.'),
    ('References-and-Verification-Notes.docx', 'DOCX', 'References and verification', 'Sources, what was checked, and content integrity notes.'),
    ('References-and-Verification-Notes.md', 'MD', 'References, plain text', 'The same notes as a Markdown file.'),
]
files = [{'file': f, 'ext': e, 'label': l, 'desc': d, 'size': sz(f), **({'b64': 'files/' + f + '.b64.txt'} if f.endswith(('.pptx', '.docx')) else {})} for f, e, l, d in F]


def js(o):
    return json.dumps(o, ensure_ascii=False).replace('</', '<\\/')


t = t.replace('/*__SLIDES__*/[]', js(slides)).replace('/*__FILES__*/[]', js(files))
a = t.index('<!--HEAD-->')
b = t.index('<!--/HEAD-->')
head = t[a + 11:b]
body = t[b + 12:]
open(os.path.join(SITE, 'artifact.html'), 'w').write(head.strip() + '\n' + body)
std_head = head.replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '')
doc = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
       '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
       + std_head + '</head>\n<body>\n' + body + '</body>\n</html>\n')
open(os.path.join(SITE, 'index.html'), 'w').write(doc)
print('built', len(t))

# staging folder for the Artifact publish (office files travel as base64 text)
import base64, shutil
STG = os.environ.get('STAGE')
if STG:
    shutil.rmtree(STG, ignore_errors=True)
    os.makedirs(STG + '/files')
    shutil.copytree(os.path.join(SITE, 'slides'), STG + '/slides')
    for f in os.listdir(os.path.join(SITE, 'files')):
        if f.endswith(('.pptx', '.docx')):
            open(STG + '/files/' + f + '.b64.txt', 'w').write(base64.b64encode(open(os.path.join(SITE, 'files', f), 'rb').read()).decode())
        else:
            shutil.copy(os.path.join(SITE, 'files', f), STG + '/files/' + f)
    shutil.copy(os.path.join(SITE, 'artifact.html'), STG + '/artifact.html')
    print('staged', STG)
