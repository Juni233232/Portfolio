// Shared design system, drawing helpers and reusable UI mockups for the deck.
const pptxgen = require('pptxgenjs');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const fi = require('react-icons/fi');
const fa = require('react-icons/fa');

// ---------- Palette ----------
const K = {
  ink: '101114', ink2: '1A1C21', ink3: '2A2D34', paper: 'F6F5F1', paper2: 'ECEAE3', card: 'FFFFFF',
  line: 'DAD8CF', blue: '476BFF', blueD: '2B4BDB', lav: 'C8B9FF', lavL: 'E6E0FF', grey: '8D9098',
  mute: '5C5F69', red: 'E5584B', green: '2FA877', amber: 'F2B544', white: 'FFFFFF',
};

const THEME = {
  name: 'UX Masterclass',
  headFontFace: 'Inter',
  bodyFontFace: 'Inter',
  colors: {
    dk1: K.ink, lt1: K.paper, dk2: K.ink2, lt2: K.paper2,
    accent1: K.blue, accent2: K.lav, accent3: K.grey, accent4: K.red, accent5: K.green, accent6: K.amber,
    hlink: K.blueD, folHlink: K.mute,
  },
};

// ---------- Sections / layouts ----------
const SECS = {
  intro: { title: 'Introduction', foot: 'Introduction', unit: 0 },
  u1: { title: 'Unit 1 · Introduction of UX/UI Design', foot: 'Unit 1 · Introduction of UX/UI Design', unit: 1 },
  u2: { title: 'Unit 2 · A Strategy Plan', foot: 'Unit 2 · A Strategy Plan', unit: 2 },
  u3: { title: 'Unit 3 · Applied Design Fundamentals', foot: 'Unit 3 · Applied Design Fundamentals', unit: 3 },
  u4: { title: 'Unit 4 · Emphasis in UX Design', foot: 'Unit 4 · Emphasis in UX Design', unit: 4 },
  u5: { title: 'Unit 5 · User Testing', foot: 'Unit 5 · User Testing', unit: 5 },
  end: { title: 'Conclusion', foot: 'Conclusion', unit: 6 },
};
const TONES = {
  light: { bg: K.paper, fg: K.ink, mute: K.mute, eyebrow: K.blueD },
  dark: { bg: K.ink, fg: K.paper, mute: K.grey, eyebrow: K.lav },
  lav: { bg: K.lav, fg: K.ink, mute: '3B3566', eyebrow: K.ink },
};

function defineLayouts(pres) {
  for (const [sk, sec] of Object.entries(SECS)) {
    for (const [tk, tone] of Object.entries(TONES)) {
      let pips = '';
      for (let i = 1; i <= 5; i++) { const on = sec.unit === 6 || i <= sec.unit; pips += (on ? '●' : '○') + (i < 5 ? '  ' : ''); }
      pres.defineSlideMaster({
        title: `${sk}-${tk}`,
        background: { color: tone.bg },
        slideNumber: { x: 11.93, y: 6.98, w: 0.8, h: 0.3, fontSize: 10, color: tone.mute, align: 'right', bold: true },
        objects: [
          { text: { text: 'SVCB3003  UI & UX Design', options: { x: 0.6, y: 7.0, w: 2.6, h: 0.26, fontSize: 9, color: tone.mute, bold: true, margin: 0, valign: 'middle' } } },
          { text: { text: sec.foot, options: { x: 3.2, y: 7.0, w: 5.6, h: 0.26, fontSize: 9, color: tone.mute, margin: 0, valign: 'middle' } } },
          { text: { text: pips, options: { x: 9.3, y: 7.0, w: 1.6, h: 0.26, fontSize: 8, color: tk === 'dark' ? K.lav : (tk === 'lav' ? K.ink : K.blueD), margin: 0, valign: 'middle', align: 'right' } } },
          { placeholder: { options: { name: 'eyebrow', type: 'body', x: 0.6, y: 0.5, w: 12.1, h: 0.3, fontSize: 11, bold: true, color: tone.eyebrow, charSpacing: 3, margin: 0, valign: 'middle', align: 'left' }, text: '' } },
          { placeholder: { options: { name: 'title', type: 'title', x: 0.6, y: 0.88, w: 12.13, h: 0.85, fontSize: 32, bold: true, color: tone.fg, margin: 0, valign: 'top', align: 'left' }, text: '' } },
        ],
      });
    }
  }
  pres.defineSlideMaster({
    title: 'cover',
    background: { color: K.ink },
    objects: [
      { placeholder: { options: { name: 'eyebrow', type: 'body', x: 0.7, y: 0.9, w: 6, h: 0.3, fontSize: 12, bold: true, color: K.lav, charSpacing: 4, margin: 0, valign: 'middle', align: 'left' }, text: '' } },
      { placeholder: { options: { name: 'title', type: 'title', x: 0.7, y: 2.1, w: 6.3, h: 3.2, fontSize: 68, bold: true, color: K.paper, margin: 0, valign: 'top', align: 'left' }, text: '' } },
    ],
  });
}

// ---------- Icons ----------
const ICON_COLORS = { paper: K.paper, ink: K.ink, blue: K.blue, lav: K.lav, white: '#FFFFFF', grey: K.grey, blueD: K.blueD, mute: K.mute, red: K.red, green: K.green };
const ICON_NAMES = [
  'FiHome', 'FiSearch', 'FiUser', 'FiCalendar', 'FiMapPin', 'FiClock', 'FiCheck', 'FiX', 'FiArrowRight', 'FiArrowLeft', 'FiStar', 'FiHeart',
  'FiEye', 'FiEar', 'FiMic', 'FaHandPaper', 'FiType', 'FiLayers', 'FiGrid', 'FiTarget', 'FiUsers', 'FiMessageCircle', 'FiCompass', 'FiMap',
  'FiBookOpen', 'FiEdit3', 'FiLock', 'FiBell', 'FiSettings', 'FiShield', 'FiTrendingUp', 'FiZap', 'FiSmile', 'FiFrown', 'FiMeh', 'FaTicketAlt',
  'FiBriefcase', 'FiCode', 'FiPenTool', 'FiSmartphone', 'FiMonitor', 'FiPlay', 'FiMusic', 'FiShare2', 'FiAlertTriangle', 'FiHelpCircle', 'FiList',
  'FiCreditCard', 'FiDollarSign', 'FiRefreshCw', 'FiFlag', 'FiMessageSquare', 'FiClipboard', 'FiSliders', 'FiMousePointer', 'FiMenu', 'FiInfo', 'FiPlus', 'FiVolume2',
  'FiImage', 'FaHome', 'FaRegCalendarAlt', 'FaUser', 'FiAward', 'FiHeadphones', 'FiCamera', 'FiDownload', 'FiBarChart2', 'FiPieChart', 'FiAnchor', 'FiGlobe', 'FiWifiOff', 'FiRepeat', 'FiSun', 'FiMoon', 'FiThumbsUp', 'FiScissors', 'FiTool',
];
const ICON_CACHE = {};
async function warmIcons() {
  const jobs = [];
  for (const n of ICON_NAMES) {
    const C = fi[n] || fa[n];
    if (!C) { continue; }
    for (const [ck, hex] of Object.entries(ICON_COLORS)) {
      const svg = RDS.renderToStaticMarkup(React.createElement(C, { color: hex.startsWith('#') ? hex : '#' + hex, size: '256' }));
      jobs.push(sharp(Buffer.from(svg)).resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer().then((b) => { ICON_CACHE[n + ck] = 'image/png;base64,' + b.toString('base64'); }));
    }
  }
  await Promise.all(jobs);
}

// ---------- Contrast ----------
function lum(h) { const c = [0, 2, 4].map((i) => parseInt(h.substr(i, 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4))); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
function ratio(a, b) { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }

// ---------- Apple design-system tokens (rukkiecodes/claude-apple-design-system) mapped onto the course palette ----------
// Type ramp (micro, caption, callout, body, headline, title3, title2, title1, hero), radius scale (sm, md, lg, xl, pill),
// weight ladder 400 / 600 / 700 (500 is banned), no shadows except the single soft drop under product imagery.
const DS = {
  ramp: [11, 13, 15, 17, 20, 28, 40, 56, 80],
  radius: [0.08, 0.14, 0.22, 0.3],
  semi: 'Inter SemiBold',
  semiBelow: 19.5, // text under this size uses weight 600 for emphasis, headlines at or above use 700
  productShadow: { o: 0.22, b: 30, d: 5, a: 45 }, // rgba(0,0,0,.22) 3px 5px 30px
};
const snapSize = (v) => DS.ramp.reduce((b, r) => (Math.abs(r - v) < Math.abs(b - v) - 1e-9 ? r : b), DS.ramp[0]);
const snapRadius = (r, w, h) => (r >= Math.min(w, h) / 2 * 0.95 ? r : (r < 0.07 ? r : DS.radius.reduce((b, v) => (Math.abs(v - r) < Math.abs(b - r) - 1e-9 ? v : b), DS.radius[0])));

// ---------- Canvas: draws in scaled "design units" ----------
class Cv {
  constructor(slide, x, y, s, k) { this.sl = slide; this.x = x; this.y = y; this.s = s; this.k = k === undefined ? s * 72 : k; }
  X(v) { return this.x + v * this.s; }
  Y(v) { return this.y + v * this.s; }
  W(v) { return v * this.s; }
  sub(ox, oy, sc = 1) { return new Cv(this.sl, this.X(ox), this.Y(oy), this.s * sc, this.k * sc); }
  _fill(o) { return o.fill ? { color: o.fill, transparency: o.tr || 0 } : undefined; }
  // text options with design-system type rules: ramp snapping (slide-level), weight ladder, size-dependent tracking
  _txt(o, runBase) {
    const slideLevel = this.k === 1;
    const raw = (o.size || 14) * this.k, pt = slideLevel ? snapSize(raw) : raw;
    const semi = !!o.bold && pt < DS.semiBelow;
    return { pt, semi, slideLevel };
  }
  _runs(text, o, pt0) {
    return text.map((r) => {
      const ro = r.options || {};
      const rawSize = ro.size ? ro.size * this.k : (o.size || 14) * this.k;
      const size = this.k === 1 ? snapSize(rawSize) : rawSize;
      const bold = ro.bold !== undefined ? ro.bold : !!o.bold;
      const semi = bold && size < DS.semiBelow;
      const out = { ...ro, fontSize: size, size: undefined };
      if (semi) { out.bold = false; out.fontFace = DS.semi; } else out.bold = bold;
      return { text: r.text, options: out };
    });
  }
  _line(o) { return o.line ? { color: o.line, width: o.lw || 1, dashType: o.dash || 'solid', transparency: o.ltr || 0 } : undefined; }
  rect(x, y, w, h, o = {}) {
    const opt = { x: this.X(x), y: this.Y(y), w: this.W(w), h: this.W(h) };
    const f = this._fill(o); if (f) opt.fill = f; else opt.fill = { type: 'none' };
    const l = this._line(o); if (l) opt.line = l; else opt.line = { type: 'none' };
    if (o.r) opt.rectRadius = Math.min(this.s >= 0.99 ? snapRadius(this.W(o.r), opt.w, opt.h) : this.W(o.r), Math.min(opt.w, opt.h) / 2);
    if (o.shadow && o.product) opt.shadow = { type: 'outer', color: '000000', opacity: DS.productShadow.o, blur: DS.productShadow.b, offset: DS.productShadow.d, angle: DS.productShadow.a };
    if (o.rot) opt.rotate = o.rot;
    if (o.name) opt.objectName = o.name;
    this.sl.addShape(o.r ? 'roundRect' : (o.shape || 'rect'), opt);
  }
  ell(cx, cy, r, o = {}) { this.shape('ellipse', cx - r, cy - r, 2 * r, 2 * r, o); }
  shape(type, x, y, w, h, o = {}) {
    const opt = { x: this.X(x), y: this.Y(y), w: this.W(w), h: this.W(h) };
    const f = this._fill(o); opt.fill = f || { type: 'none' };
    const l = this._line(o); opt.line = l || { type: 'none' };
    if (o.rot) opt.rotate = o.rot; if (o.flipH) opt.flipH = true; if (o.flipV) opt.flipV = true;
    if (o.shadow && o.product) opt.shadow = { type: 'outer', color: '000000', opacity: DS.productShadow.o, blur: DS.productShadow.b, offset: DS.productShadow.d, angle: DS.productShadow.a };
    if (o.name) opt.objectName = o.name;
    this.sl.addShape(type, opt);
  }
  poly(pts, o = {}) { // pts in design units, absolute within canvas
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const mnx = Math.min(...xs), mny = Math.min(...ys), mxx = Math.max(...xs), mxy = Math.max(...ys);
    const points = pts.map((p, i) => ({ x: (p[0] - mnx) * this.s, y: (p[1] - mny) * this.s, moveTo: i === 0 })); points.push({ close: true });
    const opt = { x: this.X(mnx), y: this.Y(mny), w: Math.max(0.01, (mxx - mnx) * this.s), h: Math.max(0.01, (mxy - mny) * this.s), points };
    opt.fill = this._fill(o) || { type: 'none' }; opt.line = this._line(o) || { type: 'none' };
    this.sl.addShape('custGeom', opt);
  }
  line(x1, y1, x2, y2, o = {}) {
    const opt = { x: this.X(Math.min(x1, x2)), y: this.Y(Math.min(y1, y2)), w: this.W(Math.abs(x2 - x1)), h: this.W(Math.abs(y2 - y1)), line: { color: o.color || K.grey, width: o.w || 1.25, dashType: o.dash || 'solid' } };
    if (o.arrow) opt.line.endArrowType = 'triangle';
    if (o.arrow2) opt.line.beginArrowType = 'triangle';
    if (x1 > x2) opt.flipH = true; if (y1 > y2) opt.flipV = true;
    this.sl.addShape('line', opt);
  }
  // elbow polyline of segments with optional arrow on the last one
  path(pts, o = {}) { for (let i = 0; i < pts.length - 1; i++) this.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], { ...o, arrow: o.arrow && i === pts.length - 2, arrow2: false }); }
  t(text, x, y, w, h, o = {}) {
    const T = this._txt(o);
    const opt = { x: this.X(x), y: this.Y(y), w: this.W(w), h: this.W(h), margin: 0, isTextBox: true, fontSize: T.pt, color: o.color || K.ink, align: o.align || 'left', valign: o.valign || 'top', bold: !!o.bold && !T.semi, italic: !!o.italic };
    if (T.semi) opt.fontFace = DS.semi;
    if (o.cs !== undefined) opt.charSpacing = o.cs; else if (T.pt >= 17 && T.slideLevel) opt.charSpacing = -0.012 * T.pt;
    if (o.ls) opt.lineSpacingMultiple = o.ls; if (o.psa !== undefined) opt.paraSpaceAfter = o.psa; if (o.font) opt.fontFace = o.font;
    if (o.name) opt.objectName = o.name;
    if (o.fit) opt.fit = o.fit;
    if (Array.isArray(text)) text = this._runs(text, o);
    this.sl.addText(text, opt);
  }
  // shape with embedded text
  box(x, y, w, h, text, o = {}) {
    const T = this._txt(o);
    const opt = { x: this.X(x), y: this.Y(y), w: this.W(w), h: this.W(h), margin: o.pad !== undefined ? o.pad * this.k : 0, fontSize: T.pt, color: o.color || K.ink, align: o.align || 'center', valign: o.valign || 'middle', bold: !!o.bold && !T.semi, italic: !!o.italic, shape: o.r ? 'roundRect' : (o.shape || 'rect') };
    if (T.semi) opt.fontFace = DS.semi;
    const f = this._fill(o); opt.fill = f || { type: 'none' }; const l = this._line(o); opt.line = l || { type: 'none' };
    if (o.r) opt.rectRadius = Math.min(this.s >= 0.99 ? snapRadius(this.W(o.r), opt.w, opt.h) : this.W(o.r), Math.min(opt.w, opt.h) / 2);
    if (o.cs !== undefined) opt.charSpacing = o.cs; else if (T.pt >= 17 && T.slideLevel) opt.charSpacing = -0.012 * T.pt;
    if (o.ls) opt.lineSpacingMultiple = o.ls; if (o.psa !== undefined) opt.paraSpaceAfter = o.psa;
    if (o.name) opt.objectName = o.name;
    if (Array.isArray(text)) text = this._runs(text, o);
    this.sl.addText(text, opt);
  }
  icon(name, cx, cy, size, color = 'ink') {
    const d = ICON_CACHE[name + color]; if (!d) { console.warn('missing icon', name, color); return; }
    this.sl.addImage({ data: d, x: this.X(cx - size / 2), y: this.Y(cy - size / 2), w: this.W(size), h: this.W(size), altText: name.replace(/^Fi/, '') + ' icon' });
  }
  // grey skeleton text bars
  bars(x, y, w, n, o = {}) {
    const h = o.h || 6, gap = o.gap || 10, widths = o.widths || [1, 0.92, 0.7, 0.85, 0.6];
    for (let i = 0; i < n; i++) this.rect(x, y + i * gap, w * widths[i % widths.length], h, { fill: o.fill || 'D5D3CB', r: h / 2 });
  }
  // image placeholder (wireframe X box)
  img(x, y, w, h, o = {}) {
    this.rect(x, y, w, h, { fill: o.fill || 'E6E4DC', line: o.line || 'B9B7AE', lw: 0.75, r: o.r });
    if (!o.noX) this.icon('FiImage', x + w / 2, y + h / 2, Math.min(w, h) * 0.26, 'grey');
  }
  pill(x, y, w, h, text, o = {}) { this.box(x, y, w, h, text, { r: h / 2, fill: o.fill, line: o.line, color: o.color, size: o.size || 11, bold: o.bold !== false }); }
  dot(cx, cy, r, fill) { this.ell(cx, cy, r, { fill }); }
}
const S = (slide) => new Cv(slide, 0, 0, 1, 1); // inch canvas, font sizes in pt

// ---------- Slide factory ----------
let counter = 0, curSec = null;
function mkSlide(pres, o) {
  counter++;
  if (curSec !== o.sec) { pres.addSection({ title: SECS[o.sec].title }); curSec = o.sec; }
  const s = pres.addSlide({ masterName: o.cover ? 'cover' : `${o.sec}-${o.tone}`, sectionTitle: SECS[o.sec].title });
  const nn = String(counter).padStart(2, '0');
  s.addText(o.cover ? o.eyebrow : `${nn}   ${o.eyebrow}`, { placeholder: 'eyebrow' });
  s.addText(o.title, { placeholder: 'title' });
  if (o.notes) s.addNotes(o.notes.trim());
  s._n = counter;
  return s;
}
const resetCounter = () => { counter = 0; curSec = null; };

// ---------- Layout constants ----------
const L = { x: 0.6, w: 12.13, y0: 1.95, y1: 6.75 };

// ---------- Reusable UI: Gather event app (mobile screens, 300x600 units) ----------
function theme(lo) {
  return lo
    ? { bg: 'FFFFFF', ink: '4A4A4A', sub: '8A8A8A', chip: 'E8E8E6', chipOn: '9A9A98', chipOnT: 'FFFFFF', card: 'EFEFED', primary: '9A9A98', primaryT: 'FFFFFF', accent: 'BDBDBB', line: 'C9C9C6', pale: 'F4F4F2' }
    : { bg: 'FFFFFF', ink: K.ink, sub: '6B6E78', chip: 'EEEDF3', chipOn: K.ink, chipOnT: K.white, card: K.paper, primary: K.blue, primaryT: K.white, accent: K.lav, line: 'E2E0E8', pale: 'F3F1FA' };
}

function phone(slide, x, y, h, o = {}) {
  // returns canvas of the 300x600 screen. total body = 316x616 units
  const s = h / 616;
  const body = new Cv(slide, x, y, s);
  body.rect(0, 0, 316, 616, { fill: o.frame || K.ink, r: 40, shadow: !o.noShadow, product: true });
  const c = new Cv(slide, x + 8 * s, y + 8 * s, s);
  c.rect(0, 0, 300, 600, { fill: o.bg || 'FFFFFF', r: 32 });
  c.rect(112, 8, 76, 18, { fill: o.frame || K.ink, r: 9 });
  return c;
}
function navBar(c, th, active, lo) {
  c.rect(14, 544, 272, 46, { fill: lo ? 'F0F0EE' : K.ink, r: 23, line: lo ? 'C9C9C6' : undefined, lw: 0.75 });
  const items = [['FiHome', 'Home'], ['FiSearch', 'Explore'], ['FaTicketAlt', 'Tickets'], ['FiUser', 'Profile']];
  items.forEach((it, i) => {
    const cx = 14 + 34 + i * 68;
    const on = i === active;
    if (lo) { c.ell(cx, 561, 8, { fill: on ? '8A8A8A' : 'D2D2D0' }); c.t(it[1], cx - 30, 573, 60, 12, { size: 8, color: '6A6A6A', align: 'center', bold: on }); }
    else { c.icon(it[0], cx, 561, 16, on ? 'lav' : 'grey'); c.t(it[1], cx - 30, 573, 60, 12, { size: 8, color: on ? K.lav : K.grey, align: 'center', bold: on }); }
  });
}
function gatherHome(c, lo) {
  const th = theme(lo);
  c.t('Good morning, Aisha', 16, 40, 200, 14, { size: 10, color: th.sub });
  c.t('Find your next event', 16, 56, 230, 28, { size: 20, bold: true, color: th.ink });
  c.ell(268, 66, 15, { fill: lo ? 'D2D2D0' : K.lav }); c.t('A', 253, 56, 30, 20, { size: 12, bold: true, align: 'center', valign: 'middle', color: lo ? '6A6A6A' : K.ink });
  c.rect(16, 98, 268, 34, { fill: th.chip, r: 17 });
  if (!lo) c.icon('FiSearch', 36, 115, 14, 'mute'); else c.ell(36, 115, 6, { line: '9A9A98' });
  c.t('Search events, clubs, talks', 52, 107, 200, 16, { size: 10, color: th.sub, valign: 'middle' });
  ['All', 'Talks', 'Workshops', 'Social'].forEach((tx, i) => {
    const xs = [16, 62, 114, 190], ws = [38, 44, 68, 52];
    c.pill(xs[i], 144, ws[i], 24, tx, { fill: i === 0 ? th.chipOn : th.chip, color: i === 0 ? th.chipOnT : th.ink, size: 10 });
  });
  if (lo) { c.img(16, 182, 268, 136, { r: 12, noX: true }); } else {
    c.rect(16, 182, 268, 136, { fill: K.blue, r: 16 });
    c.ell(250, 215, 44, { fill: K.lav, tr: 55 }); c.ell(222, 300, 30, { fill: K.lav, tr: 70 });
  }
  c.t('FEATURED', 30, 194, 120, 12, { size: 8, bold: true, color: lo ? '6A6A6A' : K.lav, cs: 1.5 });
  c.t('Design Week Keynote', 30, 210, 200, 48, { size: 19, bold: true, color: lo ? '4A4A4A' : K.white, ls: 0.95 });
  c.t('Thu 14 Nov  ·  Hall B', 30, 262, 180, 14, { size: 10, color: lo ? '6A6A6A' : 'DDE4FF' });
  c.pill(30, 282, 88, 26, 'Register', { fill: lo ? '8A8A8A' : K.white, color: lo ? K.white : K.blueD, size: 11 });
  c.t('Happening soon', 16, 330, 200, 16, { size: 12, bold: true, color: th.ink });
  [['14', 'NOV', 'Portfolio Review Night', 'Studio 3  ·  Open'], ['16', 'NOV', 'Intro to Figma Workshop', 'Lab 2  ·  Few spots']].forEach((r, i) => {
    const y = 354 + i * 62;
    c.rect(16, y, 268, 54, { fill: th.card, r: 12 });
    c.rect(26, y + 8, 38, 38, { fill: lo ? 'DCDCDA' : K.lavL, r: 8 });
    c.t(r[0], 26, y + 12, 38, 18, { size: 14, bold: true, align: 'center', color: th.ink });
    c.t(r[1], 26, y + 31, 38, 10, { size: 7, bold: true, align: 'center', color: th.sub });
    c.t(r[2], 76, y + 11, 200, 16, { size: 11, bold: true, color: th.ink });
    c.t(r[3], 76, y + 29, 200, 14, { size: 9, color: th.sub });
  });
  navBar(c, th, 0, lo);
}
function gatherDetail(c, lo) {
  const th = theme(lo);
  if (lo) c.img(0, 0, 300, 190, { r: 0 }); else { c.rect(0, 0, 300, 190, { fill: K.blue, r: 32 }); c.rect(0, 120, 300, 70, { fill: K.blue }); c.ell(235, 70, 60, { fill: K.lav, tr: 55 }); c.ell(70, 160, 40, { fill: K.lav, tr: 75 }); }
  c.ell(30, 48, 14, { fill: lo ? 'FFFFFF' : K.white, tr: lo ? 0 : 0 }); c.icon('FiArrowLeft', 30, 48, 14, 'ink');
  c.t('Design Week Keynote', 16, 204, 268, 30, { size: 20, bold: true, color: th.ink });
  [['FiCalendar', 'Thu 14 Nov  ·  10:00 to 11:30'], ['FiMapPin', 'Hall B, Arts Building'], ['FiUsers', 'Open to all students']].forEach((r, i) => {
    c.ell(28, 254 + i * 28, 11, { fill: lo ? 'E4E4E2' : K.lavL });
    if (lo) c.ell(28, 254 + i * 28, 4, { fill: '9A9A98' }); else c.icon(r[0], 28, 254 + i * 28, 12, 'blueD');
    c.t(r[1], 46, 246 + i * 28, 240, 16, { size: 11, color: th.ink, valign: 'middle' });
  });
  c.t('About', 16, 346, 100, 14, { size: 11, bold: true, color: th.ink });
  c.bars(16, 368, 268, 4, { gap: 13, h: 6, fill: lo ? 'D4D4D2' : 'D9D7E3' });
  c.rect(16, 440, 130, 44, { fill: th.card, r: 10 }); c.t('Spots left', 26, 448, 100, 12, { size: 9, color: th.sub }); c.t('Plenty', 26, 462, 100, 16, { size: 13, bold: true, color: th.ink });
  c.rect(154, 440, 130, 44, { fill: th.card, r: 10 }); c.t('Cost', 164, 448, 100, 12, { size: 9, color: th.sub }); c.t('Free', 164, 462, 100, 16, { size: 13, bold: true, color: th.ink });
  c.box(16, 500, 268, 46, 'Register for this event', { r: 23, fill: th.primary, color: th.primaryT, size: 13, bold: true });
}
function gatherRegister(c, lo) {
  const th = theme(lo);
  c.ell(30, 50, 14, { fill: th.chip }); c.icon('FiArrowLeft', 30, 50, 14, 'ink');
  c.t('Register', 54, 40, 200, 20, { size: 16, bold: true, color: th.ink, valign: 'middle' });
  c.t('Step 1 of 2', 16, 76, 100, 12, { size: 9, bold: true, color: lo ? '6A6A6A' : K.blueD });
  c.rect(16, 94, 268, 5, { fill: th.chip, r: 3 }); c.rect(16, 94, 134, 5, { fill: th.primary, r: 3 });
  c.t('Your details', 16, 114, 200, 20, { size: 15, bold: true, color: th.ink });
  [['Full name', 'Aisha Rahman'], ['Student ID', 'SV2024-0142'], ['Campus email', 'aisha@uni.edu']].forEach((f, i) => {
    const y = 144 + i * 66;
    c.t(f[0], 16, y, 200, 12, { size: 9, bold: true, color: th.sub });
    c.rect(16, y + 16, 268, 36, { fill: 'FFFFFF', line: lo ? 'B9B9B6' : 'CFCDD8', lw: 1, r: 8 });
    c.t(f[1], 28, y + 16, 240, 36, { size: 11, color: th.ink, valign: 'middle' });
  });
  c.rect(16, 350, 16, 16, { fill: lo ? 'FFFFFF' : K.blue, line: lo ? '9A9A98' : undefined, r: 4 });
  if (!lo) c.icon('FiCheck', 24, 358, 11, 'white');
  c.t('I need accessibility support', 40, 350, 220, 16, { size: 10, color: th.ink, valign: 'middle' });
  c.rect(16, 376, 16, 16, { fill: 'FFFFFF', line: lo ? '9A9A98' : 'CFCDD8', r: 4 });
  c.t('Remind me one day before', 40, 376, 220, 16, { size: 10, color: th.ink, valign: 'middle' });
  c.rect(16, 416, 268, 56, { fill: th.pale, r: 10 });
  c.t('Your details are only shared with the event organiser.', 28, 424, 244, 40, { size: 9, color: th.sub, valign: 'middle' });
  c.box(16, 500, 268, 46, 'Confirm registration', { r: 23, fill: th.primary, color: th.primaryT, size: 13, bold: true });
}
function gatherSuccess(c, lo) {
  const th = theme(lo);
  c.ell(150, 100, 34, { fill: lo ? 'D8D8D6' : K.green }); c.icon('FiCheck', 150, 100, 34, lo ? 'ink' : 'white');
  c.t("You're in!", 16, 146, 268, 28, { size: 22, bold: true, align: 'center', color: th.ink });
  c.t('Show this ticket at the door', 16, 178, 268, 16, { size: 11, align: 'center', color: th.sub });
  c.rect(30, 210, 240, 232, { fill: th.card, r: 18 });
  c.t('Design Week Keynote', 44, 224, 212, 18, { size: 13, bold: true, color: th.ink });
  c.t('Thu 14 Nov  ·  Hall B', 44, 244, 212, 14, { size: 10, color: th.sub });
  c.rect(90, 274, 120, 120, { fill: 'FFFFFF', r: 8 });
  for (let i = 0; i < 7; i++) for (let j = 0; j < 7; j++) if (((i * 7 + j) * 5 + i) % 3 !== 0 || (i < 2 && j < 2) || (i < 2 && j > 4) || (i > 4 && j < 2)) c.rect(100 + j * 14, 284 + i * 14, 11, 11, { fill: lo ? '8A8A8A' : K.ink, r: 2 });
  c.t('Ticket ID  GX-0142', 44, 408, 212, 14, { size: 9, color: th.sub, align: 'center' });
  c.box(30, 462, 116, 38, 'Add to calendar', { r: 19, fill: th.chip, color: th.ink, size: 10, bold: true });
  c.box(154, 462, 116, 38, 'View ticket', { r: 19, fill: th.primary, color: th.primaryT, size: 10, bold: true });
  navBar(c, th, 2, lo);
}

// ---------- Browser window (1000 units wide) ----------
function browser(slide, x, y, w, hContent, o = {}) {
  const s = w / 1000; const chrome = 34;
  const b = new Cv(slide, x, y, s);
  b.rect(0, 0, 1000, hContent + chrome, { fill: o.dark ? K.ink2 : 'FFFFFF', r: 14, line: o.dark ? K.ink3 : 'D3D1C8', lw: 1, shadow: !o.noShadow, product: true });
  b.rect(0, 0, 1000, chrome, { fill: o.bar || 'ECEAE3', r: 14 }); b.rect(0, 16, 1000, chrome - 16, { fill: o.bar || 'ECEAE3' });
  [K.red, K.amber, K.green].forEach((cl, i) => b.ell(18 + i * 16, 17, 4.5, { fill: cl }));
  b.rect(110, 8, 500, 18, { fill: 'FFFFFF', r: 9 }); b.t(o.url || 'gather.uni.edu/events', 124, 8, 460, 18, { size: 9, color: K.mute, valign: 'middle' });
  const c = new Cv(slide, x, y + chrome * s, s);
  c.H = hContent;
  return c;
}
function gatherWebList(c, lo) {
  const th = theme(lo);
  c.rect(0, 0, 1000, 54, { fill: 'FFFFFF' }); c.line(0, 54, 1000, 54, { color: lo ? 'D0D0CE' : 'E2E0E8', w: 0.75 });
  c.rect(28, 16, 22, 22, { fill: lo ? 'A8A8A6' : K.blue, r: 7 }); c.t('Gather', 58, 14, 120, 26, { size: 16, bold: true, color: th.ink, valign: 'middle' });
  ['Events', 'Clubs', 'My tickets', 'Help'].forEach((tx, i) => c.t(tx, 420 + i * 82, 14, 80, 26, { size: 11, color: i === 0 ? th.ink : th.sub, bold: i === 0, valign: 'middle' }));
  c.pill(850, 14, 70, 26, 'Sign in', { fill: lo ? 'A8A8A6' : K.blue, color: K.white, size: 10 }); c.ell(956, 27, 13, { fill: lo ? 'D2D2D0' : K.lav });
  c.t('Find your next campus event', 40, 78, 600, 40, { size: 30, bold: true, color: th.ink });
  c.t('Talks, workshops and socials from every faculty, in one place.', 40, 124, 600, 20, { size: 13, color: th.sub });
  c.rect(40, 156, 520, 40, { fill: th.chip, r: 20 }); c.t('Search events, clubs, talks', 66, 156, 400, 40, { size: 11, color: th.sub, valign: 'middle' });
  ['All', 'Talks', 'Workshops', 'Social'].forEach((tx, i) => c.pill(580 + i * 72 + (i > 1 ? 14 : 0), 163, i === 2 ? 86 : 62, 26, tx, { fill: i === 0 ? th.chipOn : th.chip, color: i === 0 ? th.chipOnT : th.ink, size: 10 }));
  const cards = [['Design Week Keynote', 'Thu 14 Nov  ·  Hall B'], ['Portfolio Review Night', 'Thu 14 Nov  ·  Studio 3'], ['Intro to Figma Workshop', 'Sat 16 Nov  ·  Lab 2']];
  cards.forEach((cd, i) => {
    const x = 40 + i * 316;
    c.rect(x, 222, 296, 300, { fill: 'FFFFFF', line: lo ? 'C9C9C6' : 'E2E0E8', r: 14 });
    if (lo) c.img(x + 12, 234, 272, 150, { r: 8 }); else { c.rect(x + 12, 234, 272, 150, { fill: [K.blue, K.lav, K.ink][i], r: 10 }); c.ell(x + 230, 270, 36, { fill: i === 1 ? K.blue : K.lav, tr: 50 }); }
    c.t(cd[0], x + 14, 398, 268, 22, { size: 14, bold: true, color: th.ink }); c.t(cd[1], x + 14, 424, 268, 16, { size: 10, color: th.sub });
    c.pill(x + 14, 466, 96, 28, 'Register', { fill: lo ? 'A8A8A6' : K.blue, color: K.white, size: 10 });
  });
}
function gatherWebDetail(c, lo) {
  const th = theme(lo);
  c.rect(0, 0, 1000, 54, { fill: 'FFFFFF' }); c.line(0, 54, 1000, 54, { color: lo ? 'D0D0CE' : 'E2E0E8', w: 0.75 });
  c.rect(28, 16, 22, 22, { fill: lo ? 'A8A8A6' : K.blue, r: 7 }); c.t('Gather', 58, 14, 120, 26, { size: 16, bold: true, color: th.ink, valign: 'middle' });
  ['Events', 'Clubs', 'My tickets', 'Help'].forEach((tx, i) => c.t(tx, 420 + i * 82, 14, 80, 26, { size: 11, color: i === 0 ? th.ink : th.sub, bold: i === 0, valign: 'middle' }));
  c.ell(956, 27, 13, { fill: lo ? 'D2D2D0' : K.lav });
  c.t('Events  /  Talks  /  Design Week Keynote', 40, 70, 500, 16, { size: 9, color: th.sub });
  if (lo) c.img(40, 96, 560, 250, { r: 12 }); else { c.rect(40, 96, 560, 250, { fill: K.blue, r: 16 }); c.ell(500, 160, 70, { fill: K.lav, tr: 55 }); c.ell(120, 330, 50, { fill: K.lav, tr: 75 }); }
  c.t('Design Week Keynote', 40, 362, 560, 36, { size: 28, bold: true, color: th.ink });
  c.t('Thu 14 Nov  ·  10:00 to 11:30  ·  Hall B, Arts Building', 40, 404, 560, 18, { size: 12, color: th.sub });
  c.bars(40, 440, 540, 4, { gap: 16, h: 7, fill: lo ? 'D4D4D2' : 'D9D7E3' });
  c.rect(640, 96, 320, 330, { fill: 'FFFFFF', line: lo ? 'C9C9C6' : 'E2E0E8', r: 16 });
  c.t('Reserve your place', 664, 114, 280, 24, { size: 16, bold: true, color: th.ink });
  c.t('Free  ·  Plenty of spots left', 664, 142, 280, 16, { size: 10, color: th.sub });
  c.rect(664, 176, 272, 38, { fill: 'FFFFFF', line: lo ? 'B9B9B6' : 'CFCDD8', r: 8 }); c.t('Full name', 678, 176, 240, 38, { size: 10, color: th.sub, valign: 'middle' });
  c.rect(664, 224, 272, 38, { fill: 'FFFFFF', line: lo ? 'B9B9B6' : 'CFCDD8', r: 8 }); c.t('Campus email', 678, 224, 240, 38, { size: 10, color: th.sub, valign: 'middle' });
  c.rect(664, 274, 14, 14, { fill: 'FFFFFF', line: lo ? '9A9A98' : 'CFCDD8', r: 3 }); c.t('I need accessibility support', 686, 272, 240, 18, { size: 10, color: th.ink, valign: 'middle' });
  c.box(664, 308, 272, 44, 'Register', { r: 22, fill: th.primary, color: th.primaryT, size: 13, bold: true });
  c.t('Add to calendar after registering', 664, 366, 272, 14, { size: 9, color: th.sub, align: 'center' });
}

// ---------- Small helpers for slide-level layout (inch units) ----------
function card(cv, x, y, w, h, o = {}) {
  cv.rect(x, y, w, h, { fill: o.fill || K.card, line: o.line === undefined ? K.line : o.line, lw: 0.75, r: o.r === undefined ? 0.14 : o.r, shadow: o.shadow });
}

module.exports = { DS, snapSize, pptxgen, K, THEME, SECS, defineLayouts, warmIcons, Cv, S, mkSlide, resetCounter, L, theme, phone, gatherHome, gatherDetail, gatherRegister, gatherSuccess, browser, gatherWebList, gatherWebDetail, card, ratio, TONES };
