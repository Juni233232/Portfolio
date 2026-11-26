# UI/UX Design: Understanding the Experience (SVCB3003)

A 50-slide, 16:9 teaching deck in an Apple-inspired design language that follows the rukkiecodes Apple design system (large two-tone headlines, generous whitespace, flat surfaces, hairline cards, one accent, no shadows except under device mockups). It covers all five units of SVCB3003 UI & UX Design, built around one continuous example: a university event registration platform ("Gather").

| File | What it is |
|---|---|
| `UX-UI-Design-Understanding-the-Experience.pptx` | Editable deck. Native text, shapes, theme, layouts, sections and speaker notes on every slide |
| `UX-UI-Design-Understanding-the-Experience.pdf` | 50-page PDF (Inter embedded) |
| `UX-UI-Design-contact-sheet.png` / `.jpg` | All 50 slides on one sheet |
| `References-and-Verification-Notes.docx` / `.md` | References, verification log, content-integrity and design-language notes |
| `source/` | Generator (pptxgenjs). `kit.js` layouts and tiles, `lib.js` design tokens and mockups, `slidesA-E.js` content, `build2.js` build, `assets/` notes, `v1-original/` the earlier layout |

Install the free Inter font before presenting. To rebuild: `cd source && npm install && NODE_PATH=$PWD/node_modules node build2.js`.

### Overlap audit
`source/audit2.py`, `audit3.py` and `audit4.py` read the exported PDF and report words touching words, strokes crossing words, text spilling over shape edges, and lines crossing lines. Run `python3 source/audit2.py UX-UI-Design-Understanding-the-Experience.pdf` (and the others) after any edit.

### Design-system audit
`source/audit5.py` checks the .pptx against the Apple design-system rules: no gradient fills, shadows only on device mockups, one typeface family, slide text on the type ramp.

## Website
The course site now lives at `/ux-masterclass/` in the repository root (live at `/ux-masterclass/` on the portfolio domain). It is built from this deck: preloader, smooth scroll, a pinned sideways journey, split-text reveals, a hover preview on every topic, an interactive Gather prototype, four labs, a 50-slide viewer with teaching notes, downloads, references and verification. See `ux-masterclass/README.md`.
