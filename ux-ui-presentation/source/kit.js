// Apple-inspired design kit: layouts (top / split / center), tones, glass + bento tiles, type scale.
const fs = require('fs'), path = require('path');
const L = require('./lib');
const { K, SECS } = L;
const NOTES = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/notes.json'), 'utf8'));
const img = (n) => 'image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', n)).toString('base64');

// Grid: 0.9in side margins, 12 columns, 0.3in gutters. Content zone for 'top' layouts: y 2.6 to 6.6.
const G = { x: 0.9, w: 11.533, y: 2.6, h: 4.0, gap: 0.3, r: 0.3 };
G.col = (n) => (G.w - 11 * 0.3) / 12 * n + (n - 1) * 0.3;     // width of n columns
G.cx = (i) => G.x + i * ((G.w - 11 * 0.3) / 12 + 0.3);         // x of column i (0-based)

const TONE = {
  light: { bg: { color: K.paper }, fg: K.ink, mute: K.mute, eyebrow: K.blueD, accent: K.blueD },
  dark: { bg: 'bg_dark.jpg', fg: K.paper, mute: 'A9ACB4', eyebrow: K.lav, accent: K.lav },
  lav: { bg: 'bg_lav.jpg', fg: K.ink, mute: '47426B', eyebrow: K.blueD, accent: K.blueD },
};

function defineLayouts(pres) {
  const mkBg = (t, sec) => (typeof t.bg === 'object' ? t.bg : { data: img(['u2', 'u4', 'end'].includes(sec) && t.bg === 'bg_dark.jpg' ? 'bg_dark2.jpg' : t.bg) });
  for (const [sk, sec] of Object.entries(SECS)) {
    for (const [tk, t] of Object.entries(TONE)) {
      for (const v of ['top', 'split', 'center']) {
        const eb = v === 'top' ? { x: 0.9, y: 0.58, w: 9, h: 0.3, align: 'left' } : v === 'split' ? { x: 0.9, y: 1.15, w: 4.7, h: 0.3, align: 'left' } : { x: 1.2, y: 0.9, w: 10.93, h: 0.3, align: 'center' };
        const ti = v === 'top' ? { x: 0.9, y: 0.95, w: 11.53, h: 1.4, fontSize: 40, align: 'left' } : v === 'split' ? { x: 0.9, y: 1.5, w: 4.7, h: 3.4, fontSize: 38, align: 'left' } : { x: 0.9, y: 1.3, w: 11.53, h: 1.8, fontSize: 56, align: 'center' };
        pres.defineSlideMaster({
          title: `${sk}-${tk}-${v}`,
          background: mkBg(t, sk),
          slideNumber: { x: 11.43, y: 6.95, w: 1.0, h: 0.3, fontSize: 10, color: t.mute, align: 'right' },
          objects: [
            { text: { text: `SVCB3003  ·  ${sec.foot}`, options: { x: 0.9, y: 6.98, w: 8, h: 0.26, fontSize: 9.5, color: t.mute, margin: 0, valign: 'middle' } } },
            { placeholder: { options: { name: 'eyebrow', type: 'body', ...eb, fontSize: 12, bold: true, color: t.eyebrow, charSpacing: 2, margin: 0, valign: 'middle' }, text: '' } },
            { placeholder: { options: { name: 'title', type: 'title', ...ti, bold: true, color: t.fg, charSpacing: -0.8, lineSpacingMultiple: 0.93, margin: 0, valign: 'top' }, text: '' } },
          ],
        });
      }
    }
  }
  pres.defineSlideMaster({
    title: 'cover', background: { data: img('bg_hero.jpg') },
    objects: [
      { placeholder: { options: { name: 'eyebrow', type: 'body', x: 1.2, y: 0.75, w: 10.93, h: 0.3, align: 'center', fontSize: 12, bold: true, color: K.lav, charSpacing: 3, margin: 0, valign: 'middle' }, text: '' } },
      { placeholder: { options: { name: 'title', type: 'title', x: 0.9, y: 1.1, w: 11.53, h: 1.5, align: 'center', fontSize: 84, bold: true, color: K.paper, charSpacing: -2, margin: 0, valign: 'top' }, text: '' } },
    ],
  });
}

let counter = 0, curSec = null;
function mk(pres, o) {
  counter++;
  if (curSec !== o.sec) { pres.addSection({ title: SECS[o.sec].title }); curSec = o.sec; }
  const tone = o.tone || 'light', v = o.v || 'top', T = TONE[tone];
  const s = pres.addSlide({ masterName: o.cover ? 'cover' : `${o.sec}-${tone}-${v}`, sectionTitle: SECS[o.sec].title });
  s.addText(o.eyebrow, { placeholder: 'eyebrow' });
  const runs = Array.isArray(o.title)
    ? [{ text: o.title[0], options: { breakLine: true } }, { text: o.title[1], options: { color: T.mute } }]
    : [{ text: o.title, options: {} }];
  s.addText(runs, { placeholder: 'title' });
  const note = NOTES[String(counter)];
  if (note) s.addNotes(note);
  s._n = counter; s._tone = tone;
  return s;
}
const reset = () => { counter = 0; curSec = null; };

// ---- components ----
// tile: light = white card with a soft shadow, dark = frosted glass, lav = frosted white
function tile(c, x, y, w, h, tn, o = {}) {
  const r = o.r === undefined ? G.r : o.r;
  if (o.fill) return c.rect(x, y, w, h, { fill: o.fill, r, shadow: tn === 'light' && !o.flat ? { o: 0.1, b: 26, d: 7, a: 90 } : undefined });
  if (tn === 'light') return c.rect(x, y, w, h, { fill: 'FFFFFF', r, shadow: o.flat ? undefined : { o: 0.075, b: 26, d: 7, a: 90 } });
  if (tn === 'dark') return c.rect(x, y, w, h, { fill: 'FFFFFF', tr: 91, line: 'FFFFFF', ltr: 86, lw: 0.75, r });
  return c.rect(x, y, w, h, { fill: 'FFFFFF', tr: 42, r, shadow: { o: 0.05, b: 20, d: 5, a: 90 } });
}
function iconTile(c, x, y, sz, icon, fill, ic = 'white') {
  c.rect(x, y, sz, sz, { fill, r: sz * 0.28 });
  c.icon(icon, x + sz / 2, y + sz / 2, sz * 0.5, ic);
}
function pill(c, x, y, w, h, text, o = {}) {
  c.box(x, y, w, h, text, { r: h / 2, fill: o.fill, tr: o.tr, line: o.line, ltr: o.ltr, lw: o.lw || 1, color: o.color || K.ink, size: o.size || 12.5, bold: o.bold !== false, cs: o.cs });
}
const TEXT = {
  h2: (c, t, x, y, w, col, size = 20) => c.t(t, x, y, w, size / 72 * 1.35, { size, bold: true, color: col, valign: 'top' }),
};

module.exports = { G, TONE, defineLayouts, mk, reset, tile, iconTile, pill, TEXT };
