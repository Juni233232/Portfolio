# UI/UX Design: Understanding the Experience (SVCB3003)

A 50-slide, 16:9 teaching deck covering all five units of SVCB3003 UI & UX Design, built around one continuous example: a university event registration platform ("Gather").

| File | What it is |
|---|---|
| `UX-UI-Design-Understanding-the-Experience.pptx` | Editable deck. Native text, shapes, theme, layouts, sections and speaker notes on every slide |
| `UX-UI-Design-Understanding-the-Experience.pdf` | 50-page PDF (Inter embedded) |
| `UX-UI-Design-contact-sheet.png` / `.jpg` | All 50 slides on one sheet |
| `References-and-Verification-Notes.docx` / `.md` | References, verification log and content-integrity notes |
| `source/` | Generator (pptxgenjs). `lib.js` design system, `slides1-5.js` content, `build.js` to build, `render.sh` to render |

Install the free Inter font before presenting. To rebuild: `cd source && npm install && NODE_PATH=$PWD/node_modules node build.js`.
