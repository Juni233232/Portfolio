# UX Masterclass (SVCB3003)

Static course site, served at `/ux-masterclass/`. Open `index.html`, or serve this folder (GitHub Pages works as is).

- Content comes from the current deck (Google Slides PDF, 50 slides): slide images, tags, two-tone headlines and subtitles are read from the PDF. Teaching notes come from `ux-ui-presentation/source/assets/notes.json`, with sentences about earlier visuals rewritten in `src/build_data.py`.
- Design follows the deck: monochrome, Anton headlines in two tones (with a darker, accessible grey), grey tiles and pill labels.
- Motion: reveals run on IntersectionObserver and CSS, so they work without libraries and as fades under reduced motion. GSAP, ScrollTrigger and Lenis (in `vendor/`) add the pinned journey, parallax and smooth scroll. Anton and Inter are self-hosted in `vendor/fonts/` (SIL Open Font License).
- Content: `slides/` (50 slide images and thumbnails), `files/` (PPTX, PDF, contact sheet, references).
- Reduced motion, missing scripts and no-JS all fall back to a fully visible static page.

## Rebuild
Edit `src/style.css`, `src/body.html` or `src/app.js`, then:

```bash
python3 src/build_site.py
```

This writes `index.html` (standalone) and `artifact.html` (fragment for the Claude Artifact viewer, which loads the libraries from a CDN). After changing the deck, export it as PDF and run `python3 src/build_data.py path/to/deck.pdf` first. It re-renders the slides, rebuilds `src/slides.json`, the contact sheet and the PDF download.
