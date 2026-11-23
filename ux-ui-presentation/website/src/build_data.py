import json, os, shutil, subprocess, sys
from pptx import Presentation
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
SITE = os.path.join(ROOT, 'website')
SRC_IMG = sys.argv[1]  # dir with s-NN.jpg
notes = json.load(open(os.path.join(ROOT, 'source/assets/notes.json')))

IDEAS = {
1:"One product, two screens: a phone and a browser. Gather will follow you through every unit.",
2:"Six outcomes, from explaining UX and UI to building working mobile and web prototypes.",
3:"When design works you do not notice it. When it fails, people blame themselves.",
4:"Five units move from understanding, to strategy, research, craft and testing.",
5:"UX asks how it works for a person. UI asks how it looks and responds.",
6:"Design decides whether people finish the task or give up.",
7:"Usability, usefulness, accessibility, clarity and satisfaction: five questions to ask of any product.",
8:"Garrett's planes: Strategy, Scope, Structure, Skeleton, Surface. Decide the abstract first.",
9:"Jakob, Fitts, Hick, Miller, Doherty and Peak-End: psychology you can apply on a screen.",
10:"Discover, define, design, develop, test, launch and learn: UX has a job at every stage.",
11:"A T-shaped designer goes deep in one skill and stays curious about the rest.",
12:"Every confusing step loses some people. An illustrative funnel shows where.",
13:"Audit an existing app: features, users, intentions, strengths and weaknesses, with evidence.",
14:"Universal, inclusive and equity-focused design: three ways to open the door.",
15:"Users need to succeed and the business needs to sustain. Good products serve both.",
16:"Disability can be permanent, temporary or situational. Design can disable anyone.",
17:"Five checks: readable text, contrast, keyboard, labels and touch targets.",
18:"Empathise, define, ideate, prototype, test. Expect to loop back.",
19:"Diverge to generate many options, then converge to choose with reasons.",
20:"Map, sketch, decide, prototype, test: five days from question to evidence.",
21:"Compare the same tasks across products to find gaps and chances.",
22:"Assignment 2: find disadvantages, analyse competitors, propose solutions.",
23:"A storyboard shows the sequence. A mood board sets tone and feeling.",
24:"A journey map follows one person through a task, including how they feel.",
25:"Process, functional, financial and support pain points. Fixing one often helps many people.",
26:"A user flow shows steps and decisions from start to success, here for registering.",
27:"Attitudinal or behavioural, qualitative or quantitative: pick the method that answers your question.",
28:"An empathy map captures what people say, think, do and feel.",
29:"Group users by behaviour, then write one persona grounded in what you found.",
30:"Usability testing, heuristic review and field testing each catch different problems.",
31:"Assignment 3: plan research, recruit, segment users and write a persona.",
32:"Scale, contrast and weight tell people what matters first.",
33:"Keep patterns consistent so the product feels like one thing, then vary with purpose.",
34:"Type, colour, icons and layout are four decisions that shape every screen.",
35:"Proximity, similarity, continuity, closure, figure-ground and common region.",
36:"Early on sketches, in the middle on prototypes, late on the live product.",
37:"A teaching read of a familiar music app home screen. Observations to test, not facts.",
38:"A user story, its acceptance criteria and a use case, all written from the user's side.",
39:"Group, label and link content so people can find it without thinking.",
40:"Assignment 4: choose a method, map a flow, then wireframe at two fidelities.",
41:"Name the problem, then state a hypothesis you can actually test.",
42:"Map direct, indirect and alternative competitors, and spot four deceptive patterns.",
43:"Low fidelity is fast and cheap to change. High fidelity looks real and tests detail.",
44:"Four mobile screens carry Gather registration: home, detail, form, success.",
45:"The same task redesigned for a wide screen with a different layout.",
46:"Prototypes test behaviour: can a person finish the task?",
47:"Give people real tasks, watch quietly, and record what happens.",
48:"Critique with I like, I wish, What if. Prioritise by impact and effort, then iterate.",
49:"Assignment 5, the capstone: wireframes, prototype, test, document and revise.",
50:"From idea to experience: the whole process in one loop.",
}

def sanitize(s): return s.replace('—', ',').replace('–','-')

pres = Presentation(os.path.join(ROOT, 'UX-UI-Design-Understanding-the-Experience.pptx'))
slides = []
for i, s in enumerate(pres.slides, 1):
    eb = ti = ''
    for sh in s.shapes:
        if sh.is_placeholder and sh.has_text_frame:
            ty = str(sh.placeholder_format.type); t = sh.text_frame.text.strip().replace('\n', ' ')
            if 'TITLE' in ty or 'CENTER' in ty: ti = t
            elif 'BODY' in ty and not eb: eb = t
    if i == 1: ti = 'UI/UX Design: Understanding the Experience'
    slides.append({'n': i, 'eyebrow': eb.title() if False else eb, 'title': ti, 'idea': IDEAS[i], 'notes': sanitize(notes[str(i)])})

# images
os.makedirs(os.path.join(SITE, 'slides'), exist_ok=True)
for i in range(1, 51):
    im = Image.open(os.path.join(SRC_IMG, f's-{i:02d}.jpg')).convert('RGB')
    w = 1280; h = round(im.height * w / im.width)
    im.resize((w, h), Image.LANCZOS).save(os.path.join(SITE, 'slides', f'{i:02d}.jpg'), quality=80, optimize=True, progressive=True)
    w = 480; h = round(im.height * w / im.width)
    im.resize((w, h), Image.LANCZOS).save(os.path.join(SITE, 'slides', f'{i:02d}-t.jpg'), quality=78, optimize=True)

# downloads
os.makedirs(os.path.join(SITE, 'files'), exist_ok=True)
for f in ['UX-UI-Design-Understanding-the-Experience.pptx', 'UX-UI-Design-Understanding-the-Experience.pdf',
          'References-and-Verification-Notes.docx', 'References-and-Verification-Notes.md']:
    shutil.copy(os.path.join(ROOT, f), os.path.join(SITE, 'files', f))
Image.open(os.path.join(ROOT, 'UX-UI-Design-contact-sheet.png')).convert('RGB').save(
    os.path.join(SITE, 'files', 'UX-UI-Design-contact-sheet.jpg'), quality=85, optimize=True)

json.dump(slides, open(os.path.join(SITE, 'src', 'slides.json'), 'w'), ensure_ascii=False, indent=0)
print('ok', len(slides))
