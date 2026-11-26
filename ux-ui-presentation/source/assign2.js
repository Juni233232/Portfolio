// Assignment brief slides, Apple-style: soft lavender glow, frosted tiles, one big numeral.
const { K, S } = require('./lib');
const { G, mk, tile } = require('./kit');
module.exports = function assign(pres, o) {
  const s = mk(pres, { sec: o.sec, tone: 'lav', v: 'top', eyebrow: o.eyebrow, title: o.title });
  const c = S(s);
  tile(c, G.x, G.y, 3.9, G.h, 'lav');
  c.t('Assignment ' + o.num.replace(/^0/, '') + ' of 5', G.x + 0.35, G.y + 0.35, 3.2, 0.3, { size: 15, bold: true, color: K.blueD });
  c.t(o.tag, G.x + 0.35, G.y + 0.85, 3.2, 1.9, { size: 20, bold: true, color: K.ink, ls: 1.1 });
  c.t(o.think, G.x + 0.35, G.y + 2.95, 3.2, 0.8, { size: 13, color: '47426B', ls: 1.1 });
  const n = o.steps.length, gap = 0.14, h = (G.h - gap * (n - 1)) / n, x = 5.1, w = 12.433 - x;
  o.steps.forEach((st, i) => {
    const y = G.y + i * (h + gap);
    tile(c, x, y, w, h, 'lav', { r: 0.22 });
    c.box(x + 0.25, y + (h - 0.44) / 2, 0.44, 0.44, String(i + 1), { shape: 'ellipse', fill: i === n - 1 ? K.blueD : K.ink, color: K.white, size: 14, bold: true });
    if (h >= 0.62) { c.t(st[0], x + 0.95, y + 0.08, w - 1.2, 0.34, { size: 16, bold: true, color: K.ink, valign: 'middle' }); c.t(st[1], x + 0.95, y + 0.4, w - 1.2, h - 0.46, { size: 12.5, color: '47426B', valign: 'top' }); }
    else c.t(st[0], x + 0.95, y, w - 1.2, h, { size: 16, bold: true, color: K.ink, valign: 'middle' });
  });
};
