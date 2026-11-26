# UX Masterclass (SVCB3003)

Static course site, served at `/ux-masterclass/`. Open `index.html`, or serve this folder (GitHub Pages works as is).

- Motion: GSAP and ScrollTrigger for scroll animation, Lenis for smooth scroll. Both are vendored in `vendor/`, so nothing loads from a CDN except Google Fonts.
- Content: `slides/` (50 slide images and thumbnails), `files/` (PPTX, PDF, contact sheet, references).
- Reduced motion, missing scripts and no-JS all fall back to a fully visible static page.

## Rebuild
Edit `src/style.css`, `src/body.html` or `src/app.js`, then:

```bash
python3 src/build_site.py
```

This writes `index.html` (standalone) and `artifact.html` (fragment for the Claude Artifact viewer, which loads the libraries from a CDN). After changing the deck, refresh slide images and data first with `python3 src/build_data.py <folder of s-NN.jpg renders>`.
