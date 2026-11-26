// Shared layout for the five assignment-brief slides (lavender tone).
const { K, S, mkSlide, Cv } = require('./lib');

module.exports = function assignSlide(pres, o) {
  const s = mkSlide(pres, { sec: o.sec, tone: 'lav', eyebrow: o.eyebrow, title: o.title, notes: o.notes });
  const c = S(s);
  // left column
  c.t('ASSIGNMENT', 0.6, 2.0, 3, 0.25, { size: 11, bold: true, color: K.ink, cs: 3 });
  c.t(o.num, 0.6, 2.2, 4, 1.2, { size: 80, bold: true, color: K.ink });
  c.t(o.tag, 0.6, 3.5, 4.2, 0.5, { size: 14, color: '3B3566', ls: 1.1 });
  // example card
  c.rect(0.6, 4.2, 4.3, 2.5, { fill: K.white, r: 0.16, shadow: { o: 0.1, b: 12, d: 3 } });
  c.t(o.exTitle, 0.85, 4.35, 3.8, 0.25, { size: 10, bold: true, color: K.blueD, cs: 2 });
  o.visual(c, 0.85, 4.7, 3.8, 1.9);
  // steps
  const n = o.steps.length; const gap = 0.1; const h = (4.8 - gap * (n - 1)) / n;
  o.steps.forEach((st, i) => {
    const y = 1.95 + i * (h + gap);
    c.rect(5.3, y, 7.43, h, { fill: K.white, r: 0.14 });
    c.box(5.52, y + (h - 0.5) / 2, 0.5, 0.5, String(i + 1), { shape: 'ellipse', fill: i === n - 1 ? K.blueD : K.ink, color: K.white, size: 15, bold: true });
    const tight = h < 0.8;
    c.t(st[0], 6.25, y + (tight ? 0.05 : 0.1), 6.3, 0.34, { size: tight ? 15 : 16, bold: true, color: K.ink, valign: 'middle' });
    c.t(st[1], 6.25, y + (tight ? 0.37 : 0.43), 6.3, h - 0.45, { size: 12.5, color: K.mute, ls: 1.0 });
  });
};
