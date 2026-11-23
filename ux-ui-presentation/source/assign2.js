// Assignment brief slides, Apple-style: soft lavender glow, frosted tiles, one big numeral.
const { K, S } = require('./lib');
const { G, mk, tile } = require('./kit');
module.exports = function assign(pres, o) {
  const s = mk(pres, { sec: o.sec, tone: 'lav', v: 'top', eyebrow: o.eyebrow, title: o.title });
  const c = S(s);
  tile(c, G.x, G.y, 3.9, G.h, 'lav');
  c.t('ASSIGNMENT', G.x + 0.35, G.y + 0.3, 3, 0.25, { size: 11, bold: true, color: K.blueD, cs: 2 });
  c.t(o.num, G.x + 0.3, G.y + 0.55, 3.3, 1.5, { size: 92, bold: true, color: K.ink });
  c.t(o.tag, G.x + 0.35, G.y + 2.2, 3.25, 0.9, { size: 16, bold: true, color: K.ink, ls: 1.05 });
  c.t(o.think, G.x + 0.35, G.y + 3.15, 3.25, 0.7, { size: 13, color: '47426B', ls: 1.05 });
  const n = o.steps.length, gap = 0.14, h = (G.h - gap * (n - 1)) / n, x = 5.1, w = 12.433 - x;
  o.steps.forEach((st, i) => {
    const y = G.y + i * (h + gap);
    tile(c, x, y, w, h, 'lav', { r: 0.22 });
    c.box(x + 0.25, y + (h - 0.44) / 2, 0.44, 0.44, String(i + 1), { shape: 'ellipse', fill: i === n - 1 ? K.blueD : K.ink, color: K.white, size: 14, bold: true });
    if (h >= 0.62) { c.t(st[0], x + 0.95, y + 0.08, w - 1.2, 0.34, { size: 16, bold: true, color: K.ink, valign: 'middle' }); c.t(st[1], x + 0.95, y + 0.4, w - 1.2, h - 0.46, { size: 12.5, color: '47426B', valign: 'top' }); }
    else c.t(st[0], x + 0.95, y, w - 1.2, h, { size: 16, bold: true, color: K.ink, valign: 'middle' });
  });
};
