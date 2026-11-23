// Slides 32-40 (Apple-style redesign): Unit 4 - Emphasis in UX Design
const L = require('./lib');
const { K, S, phone, gatherDetail } = L;
const { G, mk, tile, iconTile, pill } = require('./kit');
const assign = require('./assign2');
const DM = 'A9ACB4';

module.exports = function (pres) {
  // ------------------------------------------------------------ 32 VISUAL HIERARCHY
  {
    const s = mk(pres, { sec: 'u4', tone: 'dark', eyebrow: 'UNIT 4  ·  VISUAL HIERARCHY, SCALE AND PROPORTION', title: ['Make the important thing', 'look important.'] });
    const c = S(s);
    const h = 3.7, y = 2.9, pw = h * 316 / 616;
    pill(c, G.x, 2.55, 0.85, 0.26, 'BEFORE', { fill: K.red, color: K.white, size: 9, cs: 1.5 }); pill(c, G.x + pw + 0.35, 2.55, 0.85, 0.26, 'AFTER', { fill: K.green, color: K.white, size: 9, cs: 1.5 });
    const b = phone(s, G.x, y, h, { frame: K.ink3 });
    b.t('Design Week Keynote', 16, 50, 268, 16, { size: 11, color: K.ink }); b.t('Thursday 14 Nov  Hall B  10:00', 16, 74, 268, 16, { size: 11, color: K.ink }); b.t('Open to all students', 16, 98, 268, 16, { size: 11, color: K.ink });
    b.t('Join us for talks and discussion about design. Speakers share their work and answer questions.', 16, 126, 268, 50, { size: 11, color: K.ink, ls: 1.1 });
    b.t('Spots left: plenty    Cost: free', 16, 196, 268, 16, { size: 11, color: K.ink }); b.t('Register', 16, 226, 80, 16, { size: 11, color: K.blueD }); b.t('Add to calendar', 110, 226, 120, 16, { size: 11, color: K.blueD }); b.t('Share', 240, 226, 50, 16, { size: 11, color: K.blueD });
    b.t('Related events', 16, 270, 268, 16, { size: 11, color: K.ink }); b.bars(16, 296, 268, 4, { gap: 18, h: 6, fill: 'DDDBD3' });
    const a = phone(s, G.x + pw + 0.35, y, h, { frame: K.ink3 }); gatherDetail(a, false);
    const rx = 5.9, rw = 12.433 - rx;
    [['SCALE', 'Size signals importance'], ['CONTRAST', 'Weight and colour separate levels'], ['PROPORTION', 'Consistent ratios feel orderly']].forEach((p, i) => {
      const yy = G.y + i * 1.35;
      tile(c, rx, yy, rw, 1.15, 'dark', { r: 0.26 });
      c.t(p[0], rx + 0.3, yy + 0.24, 2.6, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 }); c.t(p[1], rx + 0.3, yy + 0.5, 2.9, 0.55, { size: 15, bold: true, color: K.paper, ls: 1.05 });
      const sx = rx + 3.5;
      if (i === 0) [[2.7, K.blue, 0.34], [1.8, K.lav, 0.22], [1.0, K.grey, 0.14]].forEach((r, j) => c.rect(sx, yy + 0.22 + j * 0.3, r[0] * 0.95, r[2], { fill: r[1], r: 0.05 }));
      if (i === 1) { c.t('Date and place', sx, yy + 0.2, 2.8, 0.4, { size: 20, bold: true, color: K.paper }); c.t('Date and place', sx, yy + 0.66, 2.8, 0.3, { size: 12.5, color: DM }); }
      if (i === 2) [['32', 30], ['24', 22], ['16', 16], ['12', 12]].forEach((t, k) => { c.t('Aa', sx + k * 0.7, yy + 0.18, 0.66, 0.6, { size: t[1], bold: true, color: K.paper, valign: 'bottom' }); c.t(t[0], sx + k * 0.7, yy + 0.84, 0.6, 0.22, { size: 10, color: DM }); });
    });
  }

  // ------------------------------------------------------------ 33 UNITY AND VARIETY
  {
    const s = mk(pres, { sec: 'u4', eyebrow: 'UNITY AND VARIETY', title: ['Be consistent.', 'Then vary on purpose.'] });
    const c = S(s);
    const w = 5.62, h = 3.8, x2 = G.x + w + 0.29;
    tile(c, G.x, G.y, w, h, 'light'); tile(c, x2, G.y, w, h, 'light');
    c.t('UNITY', G.x + 0.35, G.y + 0.28, 2, 0.25, { size: 11, bold: true, color: K.blueD, cs: 2 }); c.t('VARIETY', x2 + 0.35, G.y + 0.28, 2, 0.25, { size: 11, bold: true, color: K.blueD, cs: 2 });
    c.t('Inconsistent', G.x + 0.35, G.y + 0.75, 2.2, 0.25, { size: 12.5, bold: true, color: K.red }); c.t('Consistent', G.x + 3.0, G.y + 0.75, 2.2, 0.25, { size: 12.5, bold: true, color: K.green });
    const bx = G.x + 0.35, by = G.y + 1.15;
    c.box(bx, by, 1.6, 0.4, 'Register', { r: 0.2, fill: '3A5CF0', color: K.white, size: 12, bold: true }); c.box(bx, by + 0.5, 1.2, 0.32, 'Save', { r: 0.03, fill: K.green, color: K.white, size: 10, bold: true });
    c.box(bx, by + 0.92, 1.75, 0.46, 'Share', { r: 0.1, line: K.red, color: K.red, size: 13, bold: true }); c.box(bx, by + 1.48, 1.1, 0.38, 'JOIN', { r: 0.19, fill: K.ink, color: K.amber, size: 11, bold: true });
    ['Register', 'Save', 'Share', 'Join'].forEach((t, i) => c.box(G.x + 3.0, by + i * 0.52, 1.8, 0.4, t, { r: 0.2, fill: K.blueD, color: K.white, size: 12, bold: true }));
    c.t('One colour, one shape, one type style.', G.x + 0.35, G.y + 3.25, w - 0.7, 0.3, { size: 13.5, color: K.mute });
    [0, 1, 2, 3].forEach((i) => {
      const x = x2 + 0.35 + i * 1.2, feat = i === 2, y = feat ? G.y + 0.85 : G.y + 1.0, hh = feat ? 1.95 : 1.75;
      c.rect(x, y, 1.08, hh, { fill: feat ? K.blueD : K.paper, r: 0.16, shadow: feat ? { o: 0.2, b: 10, d: 3, a: 90 } : undefined });
      c.rect(x + 0.1, y + 0.1, 0.88, 0.7, { fill: feat ? K.lav : 'DCDAE6', r: 0.1 }); c.rect(x + 0.1, y + 0.95, 0.65, 0.09, { fill: feat ? K.white : K.grey, r: 0.045 }); c.bars(x + 0.1, y + 1.14, 0.88, 2, { h: 0.06, gap: 0.14, fill: feat ? 'AEBBFF' : 'D5D3CB' });
    });
    c.t('Repetition makes rhythm. One change signals importance.', x2 + 0.35, G.y + 3.25, w - 0.7, 0.3, { size: 13.5, color: K.mute });
  }

  // ------------------------------------------------------------ 34 TYPOGRAPHY, COLOUR, ICONS, LAYOUT
  {
    const s = mk(pres, { sec: 'u4', eyebrow: 'TYPOGRAPHY, COLOUR, ICONOGRAPHY AND LAYOUT', title: ['Four decisions behind', 'every interface.'] });
    const c = S(s);
    const w = 5.62, h = 1.85;
    [['Typography', 'One or two typefaces, one scale.'], ['Colour', 'Define roles first, then swatches.'], ['Iconography', 'One style, paired with labels.'], ['Layout', 'A grid and an 8-point rhythm.']].forEach((t, i) => {
      const x = G.x + (i % 2) * (w + 0.29), y = G.y + Math.floor(i / 2) * (h + 0.3);
      tile(c, x, y, w, h, 'light'); c.t(t[0], x + 0.3, y + 0.3, 1.9, 0.35, { size: 18, bold: true, color: K.ink }); c.t(t[1], x + 0.3, y + 0.72, 1.8, 0.8, { size: 12.5, color: K.mute, ls: 1.05 });
      const vx = x + 2.3, vy = y + 0.28;
      if (i === 0) [['Heading', 24, 0], ['Subheading', 16, 0.5], ['Body text, 16 px', 12.5, 0.88], ['Caption, 12 px', 10, 1.16]].forEach((r, k) => c.t(r[0], vx, vy + r[2], 3.1, 0.36, { size: r[1], bold: k < 2, color: K.ink, valign: 'middle' }));
      if (i === 1) { [[K.blue, 'Primary'], [K.lav, ''], [K.ink, ''], [K.paper2, ''], [K.green, ''], [K.red, '']].forEach((r, k) => c.rect(vx + k * 0.5, vy, 0.42, 0.5, { fill: r[0], r: 0.11, line: r[0] === K.paper2 ? K.line : undefined })); c.t('60 · 30 · 10', vx, vy + 0.68, 1.6, 0.28, { size: 13, bold: true, color: K.blueD }); c.rect(vx + 1.4, vy + 0.76, 0.95, 0.14, { fill: K.paper2, r: 0.05 }); c.rect(vx + 2.35, vy + 0.76, 0.45, 0.14, { fill: K.lav, r: 0.05 }); c.rect(vx + 2.8, vy + 0.76, 0.14, 0.14, { fill: K.blue, r: 0.05 }); }
      if (i === 2) { ['FiHome', 'FiSearch', 'FiCalendar', 'FiUser'].forEach((n, k) => { c.rect(vx + k * 0.6, vy, 0.5, 0.5, { fill: K.paper, r: 0.14 }); c.icon(n, vx + k * 0.6 + 0.25, vy + 0.25, 0.26, 'ink'); }); c.t('Consistent', vx + 2.4, vy, 0.95, 0.5, { size: 11.5, bold: true, color: K.green, valign: 'middle' }); ['FaHome', 'FiSearch', 'FaRegCalendarAlt', 'FaUser'].forEach((n, k) => { c.rect(vx + k * 0.6, vy + 0.72, 0.5, 0.5, { fill: K.paper, r: 0.14 }); c.icon(n, vx + k * 0.6 + 0.25, vy + 0.97, 0.26, 'ink'); }); c.t('Mixed', vx + 2.4, vy + 0.72, 0.95, 0.5, { size: 11.5, bold: true, color: K.red, valign: 'middle' }); }
      if (i === 3) { for (let k = 0; k < 4; k++) c.rect(vx + k * 0.82, vy, 0.7, 1.28, { fill: K.lavL }); c.rect(vx, vy + 0.1, 3.18, 0.26, { fill: K.blueD, r: 0.05 }); c.rect(vx, vy + 0.5, 1.54, 0.64, { fill: K.white, line: K.blueD, lw: 1, r: 0.06 }); c.rect(vx + 1.64, vy + 0.5, 1.54, 0.64, { fill: K.white, line: K.blueD, lw: 1, r: 0.06 }); }
    });
  }

  // ------------------------------------------------------------ 35 GESTALT
  {
    const s = mk(pres, { sec: 'u4', tone: 'dark', eyebrow: 'GESTALT PRINCIPLES', title: ['The brain groups', 'what it sees.'] });
    const c = S(s);
    const w = G.col(4), h = (G.h - G.gap) / 2;
    const items = [['Proximity', 'A label sits close to its field.'], ['Similarity', 'Links share one look.'], ['Continuity', 'Partial cards invite a swipe.'], ['Closure', 'Rings imply whole shapes.'], ['Figure–ground', 'A dialog stands out on a dim page.'], ['Common region', 'A card boundary groups content.']];
    items.forEach((it, i) => {
      const x = G.x + (i % 3) * (w + G.gap), y = G.y + Math.floor(i / 3) * (h + G.gap);
      tile(c, x, y, w, h, 'dark');
      const d = c.sub(x + (w - 3.4 * 0.8) / 2, y + 0.22, 0.8), cx = 1.7, cy = 0.55;
      if (i === 0) for (let g = 0; g < 2; g++) for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++) d.ell(cx - 1.25 + g * 1.5 + q * 0.32, cy - 0.45 + r * 0.32, 0.075, { fill: K.lav });
      if (i === 1) for (let r = 0; r < 3; r++) for (let q = 0; q < 7; q++) d.ell(cx - 0.96 + q * 0.32, cy - 0.35 + r * 0.35, 0.1, { fill: (r === 1 || (r === 2 && q === 3)) ? K.blue : K.grey });
      if (i === 2) { for (let q = 0; q < 14; q++) d.ell(cx - 1.45 + q * 0.22, cy + Math.sin(q * 0.55) * 0.42, 0.07, { fill: K.lav }); d.line(cx - 1.5, cy + 0.45, cx + 1.5, cy - 0.45, { color: K.grey, w: 1, dash: 'dash' }); }
      if (i === 3) { const R = 0.5; for (let k = 0; k < 12; k++) { if (k % 4 === 3) continue; const a1 = k * Math.PI / 6, a2 = (k + 1) * Math.PI / 6; d.line(cx - 0.9 + R * Math.cos(a1), cy + R * Math.sin(a1), cx - 0.9 + R * Math.cos(a2), cy + R * Math.sin(a2), { color: K.lav, w: 3 }); } [[0, -0.5, 0.45, 0.28], [0.45, 0.28, -0.45, 0.28], [-0.45, 0.28, 0, -0.5]].forEach((e) => { const m = [(e[0] + e[2]) / 2, (e[1] + e[3]) / 2]; d.line(cx + 0.9 + e[0] + (m[0] - e[0]) * 0.25, cy + e[1] + (m[1] - e[1]) * 0.25, cx + 0.9 + e[0] + (m[0] - e[0]) * 0.85, cy + e[1] + (m[1] - e[1]) * 0.85, { color: K.lav, w: 3 }); d.line(cx + 0.9 + m[0] + (e[2] - m[0]) * 0.15, cy + m[1] + (e[3] - m[1]) * 0.15, cx + 0.9 + e[2] - (e[2] - m[0]) * 0.25, cy + e[3] - (e[3] - m[1]) * 0.25, { color: K.lav, w: 3 }); }); }
      if (i === 4) { d.rect(cx - 1.3, cy - 0.55, 2.6, 1.1, { fill: K.grey, r: 0.08 }); d.bars(cx - 1.15, cy - 0.4, 2.3, 4, { h: 0.06, gap: 0.2, fill: '6C6F78' }); d.rect(cx - 1.3, cy - 0.55, 2.6, 1.1, { fill: K.ink, tr: 45, r: 0.08 }); d.rect(cx - 0.7, cy - 0.32, 1.4, 0.66, { fill: K.paper, r: 0.1, shadow: { o: 0.3, b: 8, d: 2 } }); d.rect(cx - 0.55, cy - 0.18, 0.7, 0.07, { fill: K.ink, r: 0.03 }); d.box(cx - 0.55, cy + 0.02, 0.5, 0.22, 'OK', { r: 0.11, fill: K.blueD, color: K.white, size: 10, bold: true }); }
      if (i === 5) [[-1.35], [0.05]].forEach((g, k) => { d.rect(cx + g[0], cy - 0.5, 1.3, 1.0, { fill: K.ink3, line: K.lav, lw: 1.25, r: 0.12 }); for (let q = 0; q < 3; q++) d.ell(cx + g[0] + 0.3 + q * 0.35, cy, 0.09, { fill: k ? K.blue : K.paper }); });
      c.t(it[0], x + 0.3, y + 1.12, w - 0.6, 0.32, { size: 17, bold: true, color: K.paper }); c.t(it[1], x + 0.3, y + 1.46, w - 0.5, 0.3, { size: 12.5, color: DM });
    });
  }

  // ------------------------------------------------------------ 36 UX EVALUATION METHODS
  {
    const s = mk(pres, { sec: 'u4', eyebrow: 'UX EVALUATION METHODS', title: ['Evaluate early, again,', 'and after launch.'] });
    const c = S(s);
    const w = G.col(4), ph = [['EARLY', 'Sketches and concepts', K.lavL, K.ink], ['MIDDLE', 'Prototypes', K.lav, K.ink], ['LATE', 'Live product', K.blueD, K.white]];
    const meth = [[['Heuristic evaluation', 'Experts review against principles'], ['Cognitive walkthrough', 'Step through as a new user'], ['Concept interviews', 'Does the idea make sense?']], [['Usability testing', 'Users attempt realistic tasks'], ['First-click test', 'Do they start in the right place?'], ['Card sort and tree test', 'Check grouping and labels']], [['A/B testing', 'Compare two versions live'], ['Analytics and surveys', 'Behaviour at scale, SUS, NPS'], ['Field studies', 'Observe real-world use']]];
    ph.forEach((p, i) => {
      const x = G.x + i * (w + G.gap);
      tile(c, x, G.y, w, 3.0, 'light');
      c.rect(x + 0.25, G.y + 0.25, w - 0.5, 0.42, { fill: p[2], r: 0.21 }); c.t([{ text: p[0] + '   ', options: { bold: true, size: 10.5 } }, { text: p[1], options: { bold: true, size: 13 } }], x + 0.25, G.y + 0.25, w - 0.5, 0.42, { color: p[3], align: 'center', valign: 'middle' });
      meth[i].forEach((m, j) => { const yy = G.y + 0.92 + j * 0.68; c.t(m[0], x + 0.3, yy, w - 0.6, 0.3, { size: 14.5, bold: true, color: K.ink }); c.t(m[1], x + 0.3, yy + 0.3, w - 0.6, 0.28, { size: 12.5, color: K.mute }); });
    });
    c.t('TULLIS AND ALBERT: FOUR FAMILIES OF METRICS', G.x, 5.82, 8, 0.22, { size: 10.5, bold: true, color: K.blueD, cs: 1.5 });
    ['Performance', 'Self-reported', 'Behavioural', 'Issue-based'].forEach((m, i) => { const pw = (G.w - 3 * 0.2) / 4; c.box(G.x + i * (pw + 0.2), 6.15, pw, 0.45, m, { r: 0.225, fill: K.ink, color: K.white, size: 13.5, bold: true }); });
  }

  // ------------------------------------------------------------ 37 UX CASE STUDY
  {
    const s = mk(pres, { sec: 'u4', tone: 'dark', eyebrow: 'UX CASE STUDY', title: ['Reading a familiar interface:', 'a music app home.'] });
    const c = S(s);
    const p = phone(s, G.x, G.y, 4.0, { frame: K.ink3, bg: '15161A' });
    p.t('Good evening', 16, 42, 200, 24, { size: 19, bold: true, color: K.paper });
    for (let i = 0; i < 6; i++) { const x = 16 + (i % 2) * 138, y = 82 + Math.floor(i / 2) * 48; p.rect(x, y, 130, 40, { fill: K.ink3, r: 6 }); p.rect(x, y, 40, 40, { fill: [K.blue, K.lav, K.grey, K.blueD, K.lav, K.blue][i], r: 6 }); p.bars(x + 50, y + 12, 70, 2, { h: 5, gap: 11, fill: '5C5F69' }); }
    p.t('Made for you', 16, 236, 200, 18, { size: 13, bold: true, color: K.paper });
    for (let i = 0; i < 3; i++) { p.rect(16 + i * 96, 262, 86, 86, { fill: [K.blue, K.lav, K.blueD][i], r: 8 }); p.bars(16 + i * 96, 356, 70, 2, { h: 5, gap: 10, fill: '5C5F69' }); }
    p.t('Jump back in', 16, 390, 200, 18, { size: 13, bold: true, color: K.paper }); for (let i = 0; i < 3; i++) p.rect(16 + i * 96, 416, 86, 60, { fill: [K.lav, K.grey, K.blue][i], r: 8 });
    p.rect(10, 486, 280, 46, { fill: K.ink3, r: 8 }); p.rect(18, 492, 34, 34, { fill: K.lav, r: 5 }); p.t('Now playing', 62, 494, 130, 14, { size: 10, bold: true, color: K.paper }); p.t('Artist', 62, 510, 130, 12, { size: 8.5, color: K.grey }); p.icon('FiPlay', 262, 509, 16, 'white');
    p.rect(14, 544, 272, 46, { fill: K.ink3, r: 23 }); [['FiHome', 'Home', 1], ['FiSearch', 'Search', 0], ['FiMusic', 'Library', 0]].forEach((t, i) => { const cx = 14 + 45 + i * 91; p.icon(t[0], cx, 561, 16, t[2] ? 'white' : 'grey'); p.t(t[1], cx - 30, 573, 60, 12, { size: 8, color: t[2] ? K.white : K.grey, align: 'center', bold: !!t[2] }); });
    [[p.Y(566), 1], [p.Y(106), 2], [p.Y(300), 3], [p.Y(509), 4], [p.Y(52), 5]].forEach((n) => c.box(3.3 - 0.14, n[0] - 0.14, 0.28, 0.28, String(n[1]), { shape: 'ellipse', fill: K.lav, color: K.ink, size: 10.5, bold: true }));
    const x0 = 3.85, w = 12.433 - x0;
    c.t('DESIGN DECISION', x0 + 0.75, G.y - 0.02, 2.2, 0.25, { size: 9.5, bold: true, color: K.lav, cs: 1.5 }); c.t('WHY IT MAY WORK', x0 + 3.1, G.y - 0.02, 2.4, 0.25, { size: 9.5, bold: true, color: K.lav, cs: 1.5 }); c.t('QUESTION TO TEST', x0 + 6.0, G.y - 0.02, 2.4, 0.25, { size: 9.5, bold: true, color: K.lav, cs: 1.5 });
    [['Bottom tab bar', 'Thumb reach (Fitts). Familiar place (Jakob).', 'Are icons and labels clear?'], ['Shortcut tiles', 'Quick return to recent items.', 'Do users know why they appear?'], ['Horizontal shelves', 'Many categories in little space.', 'Is it too much choice (Hick)?'], ['Persistent mini-player', 'Playback status always visible.', 'Does it shrink content or targets?'], ['Dark theme, grey text', 'Content art stands out.', 'Does grey text pass 4.5:1?']].forEach((r, i) => {
      const y = G.y + 0.32 + i * 0.73;
      tile(c, x0, y, w, 0.64, 'dark', { r: 0.2 });
      c.box(x0 + 0.15, y + 0.17, 0.3, 0.3, String(i + 1), { shape: 'ellipse', fill: K.lav, color: K.ink, size: 11, bold: true });
      c.t(r[0], x0 + 0.6, y, 2.4, 0.64, { size: 13.5, bold: true, color: K.paper, valign: 'middle', ls: 1.0 }); c.t(r[1], x0 + 3.1, y, 2.8, 0.64, { size: 12, color: DM, valign: 'middle', ls: 1.0 }); c.t(r[2], x0 + 6.0, y, 2.5, 0.64, { size: 12, color: K.paper, valign: 'middle', ls: 1.0 });
    });
    c.t('Original schematic of a common pattern, not official artwork. Observations are interpretations to test.', x0, 6.62, w, 0.22, { size: 10, color: DM });
  }

  // ------------------------------------------------------------ 38 USER STORIES AND USE CASES
  {
    const s = mk(pres, { sec: 'u4', eyebrow: 'USER STORIES AND USE CASES', title: ['Write requirements', 'from the user’s side.'] });
    const c = S(s);
    const lw = 5.5;
    tile(c, G.x, G.y, lw, 1.8, 'light');
    c.t('USER STORY', G.x + 0.3, G.y + 0.22, 3, 0.22, { size: 10.5, bold: true, color: K.blueD, cs: 2 });
    c.t([{ text: 'As a ', options: { color: K.mute } }, { text: 'first-year student', options: { bold: true, color: K.blueD } }, { text: ', I want to ', options: { color: K.mute } }, { text: 'register in two taps', options: { bold: true, color: K.ink } }, { text: ', so that ', options: { color: K.mute } }, { text: 'I never miss the deadline.', options: { bold: true, color: K.blueD } }], G.x + 0.3, G.y + 0.55, lw - 0.6, 1.1, { size: 17, ls: 1.15 });
    tile(c, G.x, G.y + 1.95, lw, 2.05, 'light');
    c.t('ACCEPTANCE CRITERIA', G.x + 0.3, G.y + 2.15, 4, 0.22, { size: 10.5, bold: true, color: K.blueD, cs: 2 });
    [['GIVEN', 'I am signed in and seats remain'], ['WHEN', 'I tap Register and confirm'], ['THEN', 'I see a QR ticket and get an email']].forEach((g, i) => { const y = G.y + 2.58 + i * 0.46; c.box(G.x + 0.3, y, 0.85, 0.3, g[0], { r: 0.15, fill: [K.ink, K.blueD, K.green][i], color: K.white, size: 9.5, bold: true, cs: 1 }); c.t(g[1], G.x + 1.3, y - 0.02, lw - 1.6, 0.34, { size: 13.5, color: K.ink, valign: 'middle' }); });
    const rx = 6.7, rw = 12.433 - rx;
    tile(c, rx, G.y, rw, G.h, 'light');
    c.t('USE CASE', rx + 0.3, G.y + 0.22, 3, 0.22, { size: 10.5, bold: true, color: K.blueD, cs: 2 }); c.t('Register for an event', rx + 0.3, G.y + 0.5, rw - 0.6, 0.45, { size: 21, bold: true, color: K.ink });
    [['ACTOR', 'Student', 1.1, 0.35], ['PRECONDITION', 'Signed in. Event is open.', 1.5, 0.35], ['MAIN FLOW', '1  Student selects an event\n2  System shows details and seats\n3  Student confirms details\n4  System issues a QR ticket', 1.95, 1.1], ['ALTERNATE', 'Event full: offer the waitlist', 3.12, 0.35], ['POSTCONDITION', 'Student holds a valid ticket', 3.52, 0.35]].forEach((r) => { c.t(r[0], rx + 0.3, G.y + r[2], 1.6, r[3], { size: 9.5, bold: true, color: K.blueD, cs: 1, valign: r[0] === 'MAIN FLOW' ? 'top' : 'middle' }); c.t(r[1], rx + 1.95, G.y + r[2], rw - 2.2, r[3], { size: 13, color: K.ink, valign: r[0] === 'MAIN FLOW' ? 'top' : 'middle', ls: 1.2 }); });
  }

  // ------------------------------------------------------------ 39 INFORMATION ARCHITECTURE
  {
    const s = mk(pres, { sec: 'u4', eyebrow: 'INFORMATION ARCHITECTURE', title: ['Organise content', 'so people can find it.'] });
    const c = S(s);
    const nw = 1.45, nh = 0.38, X = [0.9, 2.85, 4.8, 6.75, 8.7];
    const Gy = { color: K.grey, w: 1.25 }, Bl = { color: K.blueD, w: 3 };
    const seg = (x1, y1, x2, y2, hl) => c.line(x1, y1, x2, y2, hl ? Bl : Gy);
    const bracket = (px, py, cx2, kids, hlIdx) => {
      const mid = (px + cx2) / 2, ys = [py, ...kids].sort((u, v) => u - v), hy = hlIdx === undefined ? null : kids[hlIdx];
      seg(px, py, mid, py, hy !== null);
      for (let i = 0; i < ys.length - 1; i++) { const lo = ys[i], hi = ys[i + 1]; if (hi - lo < 1e-6) continue; const on = hy !== null && Math.min(py, hy) <= lo + 1e-6 && Math.max(py, hy) >= hi - 1e-6; seg(mid, lo, mid, hi, on); }
      kids.forEach((ky, i) => seg(mid, ky, cx2, ky, i === hlIdx));
    };
    const node = (x, cy, t, hl) => c.box(x, cy - nh / 2, nw, nh, t, { r: 0.14, fill: hl ? K.blueD : K.white, line: hl ? undefined : K.grey, lw: 1, color: hl ? K.white : K.ink, size: 11.5, bold: true });
    bracket(X[0] + nw, 3.85, X[1], [2.85, 3.35, 3.85, 4.35, 4.85], 1);
    bracket(X[1] + nw, 3.35, X[2], [3.0, 3.55], 1); bracket(X[1] + nw, 3.85, X[2], [4.1]); bracket(X[1] + nw, 4.35, X[2], [4.6]); bracket(X[1] + nw, 4.85, X[2], [5.1]);
    seg(X[2] + nw, 3.55, X[3], 3.55, true); seg(X[3] + nw, 3.55, X[4], 3.55, true);
    node(X[0], 3.85, 'Gather', true);
    [['Home', 2.85], ['Events', 3.35, true], ['My tickets', 3.85], ['Clubs', 4.35], ['Profile', 4.85]].forEach((n) => node(X[1], n[1], n[0], n[2]));
    [['Browse and filter', 3.0], ['Event details', 3.55, true], ['QR ticket', 4.1], ['Club page', 4.6], ['Settings', 5.1]].forEach((n) => node(X[2], n[1], n[0], n[2]));
    node(X[3], 3.55, 'Register', true); node(X[4], 3.55, 'Confirmation', true);
    tile(c, 10.45, G.y, 1.983, 1.75, 'light', { r: 0.22 }); c.t('ROUTE MAP', 10.65, G.y + 0.2, 1.6, 0.22, { size: 9.5, bold: true, color: K.blueD, cs: 1.5 }); c.t('The blue path is one task’s route.', 10.65, G.y + 0.5, 1.65, 1.1, { size: 13, color: K.ink, ls: 1.1 });
    const pats = [['Hierarchy', 'Deep content'], ['Flat tabs', 'A few main areas'], ['Hub and spoke', 'Return to a home'], ['Sequence', 'Steps in order']], pw = (G.w - 3 * 0.19) / 4;
    pats.forEach((p, i) => {
      const x = G.x + i * (pw + 0.19), y = 5.6;
      tile(c, x, y, pw, 0.95, 'light', { r: 0.22 });
      const dx = x + 0.2, dy = y + 0.2;
      if (i === 0) { c.rect(dx + 0.3, dy, 0.24, 0.16, { fill: K.blueD, r: 0.04 }); [0, 0.34].forEach((o) => { c.line(dx + 0.42, dy + 0.16, dx + 0.12 + o, dy + 0.4, { color: K.grey, w: 1 }); c.rect(dx + o, dy + 0.4, 0.24, 0.16, { fill: K.lav, r: 0.04 }); }); }
      if (i === 1) [0, 1, 2].forEach((o) => c.rect(dx + o * 0.28, dy + 0.1, 0.22, 0.4, { fill: o === 0 ? K.blueD : K.lav, r: 0.05 }));
      if (i === 2) { c.rect(dx + 0.3, dy + 0.18, 0.24, 0.2, { fill: K.blueD, r: 0.04 }); [[0, 0], [0.6, 0], [0, 0.5], [0.6, 0.5]].forEach((o) => { c.line(dx + 0.42, dy + 0.28, dx + 0.1 + o[0], dy + 0.05 + o[1], { color: K.grey, w: 1 }); c.ell(dx + 0.1 + o[0], dy + 0.05 + o[1], 0.07, { fill: K.lav }); }); }
      if (i === 3) [0, 1, 2].forEach((o) => { c.ell(dx + 0.1 + o * 0.32, dy + 0.3, 0.09, { fill: o === 0 ? K.blueD : K.lav }); if (o < 2) c.line(dx + 0.2 + o * 0.32, dy + 0.3, dx + 0.32 + o * 0.32, dy + 0.3, { color: K.grey, w: 1, arrow: true }); });
      c.t(p[0], x + 1.15, y + 0.2, pw - 1.2, 0.3, { size: 13.5, bold: true, color: K.ink }); c.t(p[1], x + 1.15, y + 0.5, pw - 1.2, 0.3, { size: 12, color: K.mute });
    });
  }

  // ------------------------------------------------------------ 40 UNIT 4 ASSIGNMENT
  assign(pres, {
    sec: 'u4', eyebrow: 'UNIT 4  ·  ASSIGNMENT', title: ['Map the experience.', 'Then wireframe it.'], num: '04',
    tag: 'Structure your idea, then design it at two levels of fidelity.', think: 'Trace every wireframe back to a step in your flow.',
    steps: [['Choose a method', 'Card sorting, user flow, journey or route map.'], ['Create a route map or user flow', 'Show the main task path and key decisions.'], ['Design low-fidelity wireframes', 'Layout and priority in greys. Fast to change.'], ['Design high-fidelity wireframes', 'Add type, colour, imagery and real content.'], ['Walk through your own flow', 'Check that every screen supports the path.']],
  });
};
