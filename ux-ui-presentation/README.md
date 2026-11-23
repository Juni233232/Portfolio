# UI/UX Design: Understanding the Experience (SVCB3003)

A 50-slide, 16:9 teaching deck in an Apple-inspired design language (large two-tone headlines, generous whitespace, frosted-glass bento tiles, soft glow backgrounds). It covers all five units of SVCB3003 UI & UX Design, built around one continuous example: a university event registration platform ("Gather").

| File | What it is |
|---|---|
| `UX-UI-Design-Understanding-the-Experience.pptx` | Editable deck. Native text, shapes, theme, layouts, sections and speaker notes on every slide |
| `UX-UI-Design-Understanding-the-Experience.pdf` | 50-page PDF (Inter embedded) |
| `UX-UI-Design-contact-sheet.png` / `.jpg` | All 50 slides on one sheet |
| `References-and-Verification-Notes.docx` / `.md` | References, verification log, content-integrity and design-language notes |
| `source/` | Generator (pptxgenjs). `kit.js` design system, `lib.js` mockups, `slidesA-E.js` content, `build2.js` build, `assets/` backgrounds and notes, `v1-original/` the earlier layout |

Install the free Inter font before presenting. To rebuild: `cd source && npm install && NODE_PATH=$PWD/node_modules node build2.js`.

### Overlap audit
`source/audit2.py`, `audit3.py` and `audit4.py` read the exported PDF and report words touching words, strokes crossing words, text spilling over shape edges, and lines crossing lines. Run `python3 source/audit2.py UX-UI-Design-Understanding-the-Experience.pdf` (and the others) after any edit.
