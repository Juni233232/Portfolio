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
`website/` is a static course site built from the deck: hero with an interactive Gather phone prototype, six outcomes, five unit sections with all 50 topics and assignments, four labs (contrast checker, touch target sizer, Hick's law, SUS calculator), a 50-slide viewer with teaching notes, the design-system summary, downloads, references and verification.

- Open `website/index.html` in a browser, or serve the `website/` folder (for example with GitHub Pages). Downloads are plain links in that mode.
- `website/artifact.html` is the same page as a fragment for the Claude Artifact viewer, where files are saved through the downloads capability.
- To rebuild after changing the deck: `python3 website/src/build_data.py <folder of s-NN.jpg renders>` then `python3 website/src/build_site.py`. Page markup lives in `website/src/template.html`.
