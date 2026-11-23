// Slides 14-22 (Apple-style redesign): Unit 2 - A Strategy Plan
const L = require('./lib');
const { K, S, ratio } = L;
const { G, mk, tile, iconTile, pill } = require('./kit');
const assign = require('./assign2');
const DM = 'A9ACB4';

function tag(c, x, y, ok, r = 0.13) { c.ell(x, y, r, { fill: ok ? K.green : K.red }); c.icon(ok ? 'FiCheck' : 'FiX', x, y, r * 1.3, 'white'); }
function person(c, x, ground, bodyH, blockH, col) {
  if (blockH > 0) c.rect(x - 0.3, ground - blockH, 0.6, blockH, { fill: K.lav, r: 0.04 });
  c.rect(x - 0.17, ground - blockH - bodyH, 0.34, bodyH, { fill: col, r: 0.12 });
  c.ell(x, ground - blockH - bodyH - 0.17, 0.17, { fill: col });
}

module.exports = function (pres) {
  // ------------------------------------------------------------ 14 DESIGN FOR EVERYONE
  {
    const s = mk(pres, { sec: 'u2', tone: 'dark', eyebrow: 'UNIT 2  ·  DESIGN FOR EVERYONE', title: ['Three ways', 'to open the door.'] });
    const c = S(s);
    const w = G.col(4);
    const cols = [['Universal design', 'One design for as many people as possible, with no special adaptation.', 'Large tap targets and plain language.'], ['Inclusive design', 'A practice: design with diverse people, recognise exclusion, solve for one and extend to many.', 'Register by app, QR code or at the desk.'], ['Equity-focused design', 'More support where barriers are greater, so outcomes are fair, not just access identical.', 'Low-data mode and reserved places.']];
    cols.forEach((cl, i) => {
      const x = G.x + i * (w + G.gap), y = G.y;
      tile(c, x, y, w, G.h, 'dark');
      const d = c.sub(x + (w - 3.9 * 0.8) / 2, y + 0.3, 0.8), cx = 1.95, wy = 0.85;
      if (i === 0) {
        d.rect(0.4, wy, cx - 0.8 - 0.4, 0.16, { fill: K.grey, r: 0.04 }); d.rect(cx + 0.8, wy, 3.5 - cx - 0.8, 0.16, { fill: K.grey, r: 0.04 }); d.icon('FiStar', cx, wy - 0.38, 0.38, 'lav');
        for (let k = 0; k < 5; k++) { const dx = cx - 1.2 + k * 0.6; d.line(dx, 1.78, cx + (dx - cx) * 0.3, wy + 0.2, { color: K.lav, w: 1.2 }); d.ell(dx, 1.85, 0.12, { fill: K.paper }); }
      } else if (i === 1) {
        [[0.4, cx - 1.3], [cx - 0.7, cx - 0.3], [cx + 0.3, cx + 0.7], [cx + 1.3, 3.5]].forEach((sg) => d.rect(sg[0], wy, sg[1] - sg[0], 0.16, { fill: K.grey, r: 0.04 })); d.icon('FiStar', cx, wy - 0.38, 0.38, 'lav');
        [['App', -1.0], ['QR code', 0], ['Desk', 1.0]].forEach((p) => { d.line(cx + p[1], 1.78, cx + p[1], wy + 0.2, { color: K.lav, w: 1.2 }); d.ell(cx + p[1], 1.85, 0.12, { fill: K.paper }); d.t(p[0], cx + p[1] - 0.5, 2.03, 1.0, 0.25, { size: 12.5, bold: true, color: K.lav, align: 'center' }); });
      } else {
        const g = 2.0, goal = 0.62;
        d.line(0.4, goal, 3.5, goal, { color: K.lav, w: 1.4, dash: 'dash' }); d.t('same outcome', 0.4, goal - 0.32, 1.9, 0.26, { size: 12.5, bold: true, color: K.lav });
        d.line(0.4, g, 3.5, g, { color: K.grey, w: 1.5 });
        person(d, cx - 1.1, g, 0.6, 0.5, K.paper); person(d, cx, g, 0.8, 0.3, K.paper); person(d, cx + 1.1, g, 1.1, 0, K.paper);
      }
      c.t(cl[0], x + 0.3, y + 2.15, w - 0.5, 0.36, { size: 17, bold: true, color: K.paper });
      c.t(cl[1], x + 0.3, y + 2.57, w - 0.55, 0.8, { size: 13, color: DM, ls: 1.05 });
      c.t(cl[2], x + 0.3, y + 3.42, w - 0.55, 0.45, { size: 12.5, bold: true, color: K.lav, ls: 1.0 });
    });
  }

  // ------------------------------------------------------------ 15 USER-CENTRED VS BUSINESS-CENTRED
  {
    const s = mk(pres, { sec: 'u2', eyebrow: 'USER-CENTRED AND BUSINESS-CENTRED DESIGN', title: ['Great products balance', 'two sets of needs.'] });
    const c = S(s);
    c.ell(2.75, 4.5, 1.5, { fill: K.lav, tr: 25 }); c.ell(4.6, 4.5, 1.5, { fill: '9FB2FF', tr: 25 });
    c.t('User needs', 1.4, 3.9, 1.5, 0.3, { size: 15, bold: true, color: K.ink }); c.t('Quick sign-up\nPrivacy\nClear info', 1.4, 4.25, 1.5, 0.9, { size: 12.5, color: K.ink, ls: 1.15 });
    c.t('Business goals', 4.35, 3.9, 1.6, 0.3, { size: 15, bold: true, color: K.ink }); c.t('Attendance data\nSponsor reach\nLow admin cost', 4.35, 4.25, 1.6, 0.9, { size: 12.5, color: K.ink, ls: 1.15 });
    c.t('Sweet spot', 3.25, 4.1, 1.0, 0.28, { size: 12, bold: true, color: K.blueD, align: 'center' });
    c.t('USER-CENTRED', 1.25, 6.15, 2.4, 0.25, { size: 10.5, bold: true, color: K.mute, cs: 1.5 }); c.t('BUSINESS-CENTRED', 3.9, 6.15, 2.4, 0.25, { size: 10.5, bold: true, color: K.mute, cs: 1.5, align: 'right' });
    const tr = [['Collect more data', 'Faster sign-up', 0.72, 'Ask only for what the event needs.'], ['Sponsor visibility', 'Clean interface', 0.62, 'Show sponsors after registering.'], ['Many reminders', 'Fewer interruptions', 0.45, 'Let each student choose.']];
    tr.forEach((t, i) => {
      const y = G.y + 0.05 + i * 1.3, x = 7.0, w = 5.43;
      c.t(t[0], x, y, 2.6, 0.3, { size: 13.5, bold: true, color: K.ink }); c.t(t[1], x + w - 2.6, y, 2.6, 0.3, { size: 13.5, bold: true, color: K.ink, align: 'right' });
      c.rect(x, y + 0.5, w, 0.08, { fill: 'DAD8CF', r: 0.04 }); c.rect(x, y + 0.5, w * t[2], 0.08, { fill: K.blueD, r: 0.04 }); c.ell(x + w * t[2], y + 0.54, 0.16, { fill: K.blueD, line: K.white, lw: 2.5 });
      c.t([{ text: 'Decision  ', options: { bold: true, color: K.blueD } }, { text: t[3], options: { color: K.ink } }], x, y + 0.82, w, 0.3, { size: 13.5 });
    });
  }

  // ------------------------------------------------------------ 16 ACCESSIBILITY IN UX
  {
    const s = mk(pres, { sec: 'u2', eyebrow: 'ACCESSIBILITY IN UX', title: ['Anyone can be disabled', 'by a design.'] });
    const c = S(s);
    const colX = [2.75, 6.0, 9.25], cw = 3.18;
    ['PERMANENT', 'TEMPORARY', 'SITUATIONAL'].forEach((h, i) => c.t(h, colX[i] + 0.05, G.y - 0.02, cw, 0.3, { size: 11, bold: true, color: K.blueD, cs: 1.5, valign: 'middle' }));
    const rows = [['FaHandPaper', 'Touch', ['One arm', 'Arm injury', 'Holding a baby']], ['FiEye', 'See', ['Blind', 'Cataract', 'Bright sunlight']], ['FiVolume2', 'Hear', ['Deaf', 'Ear infection', 'Noisy café']], ['FiMic', 'Speak', ['Non-verbal', 'Laryngitis', 'Second language']]];
    rows.forEach((r, i) => {
      const y = G.y + 0.4 + i * 0.72;
      iconTile(c, G.x, y, 0.56, r[0], K.ink); c.t(r[1], G.x + 0.72, y, 1.0, 0.56, { size: 15, bold: true, color: K.ink, valign: 'middle' });
      r[2].forEach((tx, j) => { tile(c, colX[j], y, cw, 0.56, 'light', { r: 0.2 }); c.ell(colX[j] + 0.3, y + 0.28, 0.08, { fill: [K.blueD, K.blue, K.lav][j] }); c.t(tx, colX[j] + 0.55, y, cw - 0.7, 0.56, { size: 14.5, bold: true, color: K.ink, valign: 'middle' }); });
    });
    c.t("WCAG'S FOUR PRINCIPLES: CONTENT MUST BE", G.x, 6.0, 7, 0.22, { size: 10.5, bold: true, color: K.mute, cs: 1.5 }); c.t('Spectrum after Microsoft Inclusive Design', 8.0, 6.0, 4.43, 0.22, { size: 10.5, color: K.mute, align: 'right' });
    [['Perceivable', 'see or hear'], ['Operable', 'control'], ['Understandable', 'follow'], ['Robust', 'assistive tech']].forEach((p, i) => {
      const x = G.x + i * 2.92; c.rect(x, 6.28, 2.7, 0.44, { fill: K.blueD, r: 0.22 });
      c.t([{ text: p[0], options: { bold: true, size: 13 } }, { text: '  ' + p[1], options: { size: 11 } }], x, 6.28, 2.7, 0.44, { color: K.white, align: 'center', valign: 'middle' });
    });
  }

  // ------------------------------------------------------------ 17 ACCESSIBILITY IN PRACTICE
  {
    const r1 = ratio(K.grey, K.paper), r2 = ratio(K.mute, K.paper), r3 = ratio(K.white, K.blue), r4 = ratio(K.white, K.blueD);
    const s = mk(pres, { sec: 'u2', eyebrow: 'ACCESSIBILITY IN PRACTICE', title: ['Five accessibility checks', 'you can run today.'] });
    const c = S(s);
    const w = 2.1, gap = (G.w - 5 * w) / 4;
    const T = ['Readable text', 'Contrast', 'Keyboard use', 'Labels', 'Interactions'];
    const cap = ['Body text 16 px or larger, roomy leading.', 'AA: 4.5:1 for body text, 3:1 for large.', 'No mouse needed. Focus stays visible.', 'Placeholders vanish. Keep a label.', 'Targets near 44 pt. Never colour alone.'];
    T.forEach((t, i) => {
      const x = G.x + i * (w + gap), y = G.y, ix = x + 0.25, iw = w - 0.5;
      tile(c, x, y, w, G.h, 'light');
      c.t(t, ix, y + 0.35, iw, 0.35, { size: 17, bold: true, color: K.ink });
      const vy = y + 1.1;
      if (i === 0) {
        c.rect(ix, vy, iw, 0.62, { fill: K.paper2, r: 0.1 }); c.t('Registration closes Friday.', ix + 0.1, vy, iw - 0.2, 0.62, { size: 8, color: K.grey, valign: 'middle' }); tag(c, ix + iw - 0.1, vy, false, 0.12);
        c.rect(ix, vy + 0.8, iw, 0.78, { fill: K.paper2, r: 0.1 }); c.t('Registration closes Friday.', ix + 0.1, vy + 0.8, iw - 0.2, 0.78, { size: 13, color: K.ink, valign: 'middle', ls: 1.2 }); tag(c, ix + iw - 0.1, vy + 0.8, true, 0.12);
      }
      if (i === 1) [[K.grey, K.paper, r1], [K.mute, K.paper, r2], [K.white, K.blue, r3], [K.white, K.blueD, r4]].forEach((r, k) => {
        const yy = vy + k * 0.4; c.box(ix, yy, 0.62, 0.32, 'Aa', { fill: r[1], color: r[0], size: 12, bold: true, r: 0.08, line: K.line }); c.t(r[2].toFixed(2), ix + 0.72, yy, 0.6, 0.32, { size: 12.5, bold: true, color: K.ink, valign: 'middle' });
        tag(c, ix + iw - 0.12, yy + 0.16, r[2] >= 4.5, 0.11);
      });
      if (i === 2) {
        c.rect(ix, vy + 0.15, iw, 0.4, { fill: K.white, line: K.grey, r: 0.08 }); c.t('Name', ix + 0.12, vy + 0.15, 1, 0.4, { size: 11, color: K.mute, valign: 'middle' });
        c.box(ix, vy + 0.85, iw, 0.46, 'Register', { r: 0.23, fill: K.blueD, color: K.white, size: 13, bold: true }); c.rect(ix - 0.06, vy + 0.79, iw + 0.12, 0.58, { line: K.ink, lw: 2.25, r: 0.29 });
        c.box(ix, vy + 1.6, 0.6, 0.3, 'Tab', { fill: K.paper2, line: K.line, r: 0.06, size: 11, bold: true, color: K.ink });
      }
      if (i === 3) {
        c.rect(ix, vy, iw, 0.45, { fill: K.white, line: K.grey, r: 0.08 }); c.t('Full name', ix + 0.12, vy, iw - 0.2, 0.45, { size: 11, color: K.grey, valign: 'middle' }); tag(c, ix + iw - 0.05, vy, false, 0.12);
        c.t('Full name', ix, vy + 0.75, iw, 0.25, { size: 11, bold: true, color: K.ink }); c.rect(ix, vy + 1.02, iw, 0.45, { fill: K.white, line: K.grey, r: 0.08 }); c.t('Aisha Rahman', ix + 0.12, vy + 1.02, iw - 0.2, 0.45, { size: 11.5, color: K.ink, valign: 'middle' }); tag(c, ix + iw - 0.05, vy + 0.75, true, 0.12);
      }
      if (i === 4) {
        [0, 1, 2, 3].forEach((k) => c.ell(ix + 0.12 + k * 0.22, vy + 0.15, 0.08, { fill: K.red })); tag(c, ix + iw - 0.1, vy + 0.15, false, 0.12);
        [0, 1].forEach((k) => c.ell(ix + 0.25 + k * 0.62, vy + 0.82, 0.22, { fill: K.blueD })); tag(c, ix + iw - 0.1, vy + 0.82, true, 0.12);
        c.rect(ix, vy + 1.18, iw, 0.38, { fill: K.white, line: K.red, lw: 1.5, r: 0.08 }); c.icon('FiAlertTriangle', ix + 0.08, vy + 1.76, 0.15, 'red'); c.t('Enter a valid email', ix + 0.22, vy + 1.64, iw - 0.2, 0.24, { size: 10.5, bold: true, color: K.red, valign: 'middle' });
      }
      c.t(cap[i], ix, y + 3.1, iw, 0.8, { size: 12.5, color: K.mute, ls: 1.05 });
    });
  }

  // ------------------------------------------------------------ 18 DESIGN THINKING
  {
    const s = mk(pres, { sec: 'u2', eyebrow: 'DESIGN THINKING', title: ['Five modes.', 'You will loop through them.'] });
    const c = S(s);
    const ph = [['Empathise', 'Observe and interview your users.', 'Interview students who skip events.', K.blueD, K.white], ['Define', 'State the problem and the need.', 'Students cannot tell which events are open to them.', K.blue, K.white], ['Ideate', 'Generate many ideas, then choose.', 'Sketch eight screens in eight minutes.', '9A92FF', K.ink], ['Prototype', 'Make quick, cheap models.', 'Build a clickable three-screen flow.', K.lav, K.ink], ['Test', 'Try it with real users.', 'Five students try to register.', K.lavL, K.ink]];
    const w = 2.1, gap = (G.w - 5 * w) / 4, h = 3.6;
    ph.forEach((p, i) => {
      const x = G.x + i * (w + gap);
      tile(c, x, G.y, w, h, 'light');
      c.rect(x, G.y, w, 1.3, { fill: p[3], r: 0.3 }); c.rect(x, G.y + 0.9, w, 0.4, { fill: p[3] });
      c.t(String(i + 1), x + 0.25, G.y + 0.2, 0.5, 0.25, { size: 12, bold: true, color: p[4] }); c.t(p[0], x + 0.25, G.y + 0.5, w - 0.4, 0.45, { size: 22, bold: true, color: p[4] });
      c.t(p[1], x + 0.25, G.y + 1.55, w - 0.45, 0.8, { size: 13.5, color: K.ink, ls: 1.05 });
      c.t('IN GATHER', x + 0.25, G.y + 2.45, w - 0.4, 0.22, { size: 9.5, bold: true, color: K.blueD, cs: 1.5 }); c.t(p[2], x + 0.25, G.y + 2.72, w - 0.45, 0.8, { size: 13, bold: true, color: K.ink, ls: 1.05 });
    });
    const lx0 = G.x + w / 2, lx1 = G.x + 4 * (w + gap) + w / 2, ly = 6.42;
    c.path([[lx1, G.y + h], [lx1, ly], [8.55, ly]], { color: K.grey, w: 1.5, dash: 'dash' }); c.path([[4.8, ly], [lx0, ly], [lx0, G.y + h + 0.03]], { color: K.grey, w: 1.5, arrow: true, dash: 'dash' });
    c.t('Iterate: learn, then loop back to any stage', 4.85, ly - 0.15, 3.65, 0.3, { size: 12, bold: true, color: K.mute, align: 'center', valign: 'middle' });
  }

  // ------------------------------------------------------------ 19 DIVERGENT VS CONVERGENT
  {
    const s = mk(pres, { sec: 'u2', tone: 'dark', eyebrow: 'DIVERGENT VS CONVERGENT THINKING', title: ['Widen the field.', 'Then narrow it.'] });
    const c = S(s);
    const dia = (x0, x1, lbl1, lbl2, sp) => {
      const yc = 4.25, hh = 1.05, xm = (x0 + x1) / 2;
      c.poly([[x0, yc], [xm, yc - hh], [x1, yc], [xm, yc + hh]], { fill: 'FFFFFF', tr: 92, line: K.grey, lw: 1.25 });
      c.t(lbl1, x0, 2.55, xm - x0, 0.3, { size: 14, bold: true, color: K.lav, align: 'center', cs: 2 }); c.t(lbl2, xm, 2.55, x1 - xm, 0.3, { size: 14, bold: true, color: K.blue, align: 'center', cs: 2 });
      c.t('diverge', x0, 2.87, xm - x0, 0.26, { size: 12, color: DM, align: 'center' }); c.t('converge', xm, 2.87, x1 - xm, 0.26, { size: 12, color: DM, align: 'center' });
      [0.1, 0.22, 0.34, 0.46, 0.58, 0.7, 0.82, 0.92].forEach((f, k) => { const hx = x0 + (xm - x0) * f, half = hh * f, n = 1 + Math.round(f * 5); for (let j = 0; j < n; j++) { const t = n === 1 ? 0 : (j / (n - 1)) * 2 - 1; c.ell(hx, yc + (t * 0.78 + Math.sin(k * 7 + j * 3) * 0.12) * half, 0.055, { fill: K.lav }); } });
      [0.12, 0.28, 0.44, 0.6, 0.76, 0.9].forEach((f, k) => { const hx = xm + (x1 - xm) * f, half = hh * (1 - f), n = Math.max(1, 5 - Math.round(f * 5)); for (let j = 0; j < n; j++) { const t = n === 1 ? 0 : (j / (n - 1)) * 2 - 1; c.ell(hx, yc + (t * 0.75 + Math.sin(k * 5 + j * 2) * 0.08) * half, f > 0.85 ? 0.1 : 0.055, { fill: f > 0.85 ? K.blue : K.paper }); } });
      c.t(sp, x0, 5.4, x1 - x0, 0.25, { size: 10.5, bold: true, color: K.lav, align: 'center', cs: 2 });
    };
    dia(G.x, 6.15, 'DISCOVER', 'DEFINE', 'PROBLEM SPACE'); dia(7.28, 12.433, 'DEVELOP', 'DELIVER', 'SOLUTION SPACE');
    [['Divergent thinking', 'Generate many options. Defer judgement.'], ['Convergent thinking', 'Compare against criteria. Decide.']].forEach((d, i) => {
      const x = G.x + i * 5.92; tile(c, x, 5.8, 5.61, 0.8, 'dark', { r: 0.22 });
      c.t(d[0], x + 0.3, 5.88, 5, 0.34, { size: 16, bold: true, color: K.paper }); c.t(d[1], x + 0.3, 6.22, 5, 0.3, { size: 13, color: DM });
    });
  }

  // ------------------------------------------------------------ 20 FIVE-DAY DESIGN SPRINT
  {
    const s = mk(pres, { sec: 'u2', eyebrow: 'THE FIVE-DAY DESIGN SPRINT', title: ['Months of debate,', 'compressed into one week.'] });
    const c = S(s);
    const days = [['MON', 'Map', ['Set a long-term goal', 'Map the user journey', 'Pick a target']], ['TUE', 'Sketch', ['Lightning demos', 'Sketch alone: Crazy 8s', 'Draw a solution']], ['WED', 'Decide', ['Review in silence', 'Vote on ideas', 'Storyboard it']], ['THU', 'Prototype', ['Build a realistic facade', 'One screen each', 'Do a trial run']], ['FRI', 'Test', ['Interview five users', 'Watch them react', 'Spot patterns']]];
    const w = 2.1, gap = (G.w - 5 * w) / 4, cols = [K.blueD, K.blue, '9A92FF', K.lav, K.lavL];
    days.forEach((d, i) => {
      const x = G.x + i * (w + gap), dark = i < 2;
      tile(c, x, G.y, w, 3.05, 'light');
      c.rect(x, G.y, w, 0.95, { fill: cols[i], r: 0.3 }); c.rect(x, G.y + 0.6, w, 0.35, { fill: cols[i] });
      c.t(d[0], x + 0.25, G.y + 0.18, 1, 0.22, { size: 10.5, bold: true, color: dark ? K.white : K.ink, cs: 2 }); c.t(d[1], x + 0.25, G.y + 0.4, w - 0.4, 0.45, { size: 22, bold: true, color: dark ? K.white : K.ink });
      d[2].forEach((a, j) => c.t(a, x + 0.25, G.y + 1.15 + j * 0.62, w - 0.45, 0.55, { size: 13.5, color: K.ink, ls: 1.05 }));
    });
    [['FiZap', 'Decide in days, not months'], ['FiTarget', 'Test before you build'], ['FiUsers', 'Align the whole team'], ['FiMessageCircle', 'Hear real users on Friday']].forEach((b, i) => {
      const x = G.x + i * 2.9; iconTile(c, x, 5.95, 0.5, b[0], K.lav, 'ink'); c.t(b[1], x + 0.65, 5.95, 2.1, 0.5, { size: 13.5, bold: true, color: K.ink, valign: 'middle', ls: 1.0 });
    });
  }

  // ------------------------------------------------------------ 21 COMPETITIVE ANALYSIS
  {
    const s = mk(pres, { sec: 'u2', tone: 'dark', eyebrow: 'COMPETITIVE ANALYSIS', title: ['Compare the options.', 'Find the gaps.'] });
    const c = S(s);
    const cols = ['Group chat', 'Campus web page', 'Ticketing app', 'Gather (target)'];
    const rows = [['Finding events', [1, 2, 3, 3]], ['Few steps to register', [1, 2, 2, 3]], ['Reminders and ticket', [1, 1, 3, 3]], ['Accessibility support', [1, 2, 2, 3]], ['Works well on a phone', [3, 1, 3, 3]]];
    tile(c, G.x, G.y, 8.0, 3.7, 'dark');
    const x0 = G.x + 0.3, lw = 2.3, cw = 1.25, y0 = G.y + 0.15, hh = 0.55, rh = 0.6;
    c.rect(x0 + lw + 3 * cw - 0.02, y0, cw, hh + rh * 5 + 0.04, { fill: K.blueD, tr: 20, r: 0.2 });
    cols.forEach((t, i) => c.t(t, x0 + lw + i * cw, y0, cw - 0.04, hh, { size: 12, bold: true, color: i === 3 ? K.white : K.lav, align: 'center', valign: 'middle', ls: 1.0 }));
    rows.forEach((r, i) => {
      const y = y0 + hh + i * rh;
      c.t(r[0], x0, y, lw, rh, { size: 14, bold: true, color: K.paper, valign: 'middle' });
      r[1].forEach((v, j) => { const cx = x0 + lw + j * cw + (cw - 0.04) / 2; for (let k = 0; k < 3; k++) c.ell(cx - 0.3 + k * 0.3, y + rh / 2, 0.09, { fill: k < v ? (j === 3 ? K.white : K.lav) : undefined, line: k < v ? undefined : (j === 3 ? K.white : K.grey), lw: 1 }); });
    });
    c.t('Illustrative ratings to show the method. Verify every rating by testing the same tasks.', G.x, 6.42, 8.0, 0.3, { size: 11, color: DM });
    tile(c, 9.2, G.y, 3.233, 3.7, 'dark');
    c.t('HOW TO RUN IT', 9.5, G.y + 0.25, 2.7, 0.25, { size: 10.5, bold: true, color: K.lav, cs: 2 });
    ['Pick direct and indirect competitors', 'Define criteria from user tasks', 'Test the same tasks on each', 'Record evidence', 'Mark the gaps: opportunities'].forEach((t, i) => {
      const y = G.y + 0.65 + i * 0.58;
      c.box(9.5, y + 0.05, 0.34, 0.34, String(i + 1), { shape: 'ellipse', fill: i === 4 ? K.blueD : K.ink3, color: K.white, size: 11.5, bold: true }); c.t(t, 10.0, y, 2.3, 0.44, { size: 13, color: K.paper, valign: 'middle', ls: 1.0 });
    });
  }

  // ------------------------------------------------------------ 22 UNIT 2 ASSIGNMENT
  assign(pres, {
    sec: 'u2', eyebrow: 'UNIT 2  ·  ASSIGNMENT', title: ['Find what is broken.', 'Fix it creatively.'], num: '02',
    tag: 'Turn analysis of existing products into new, user-focused ideas.', think: 'Start from evidence, not opinion.',
    steps: [['Identify disadvantages in a product', 'Usability problems and unmet needs, with evidence.'], ['Select relevant competitors', 'Direct rivals and indirect alternatives.'], ['Perform a competitor analysis', 'Compare the same tasks on every product.'], ['Find problems and opportunities', 'Where all fail users, where one excels.'], ['Propose creative, user-focused solutions', 'Explain which user problem each solves.']],
  });
};
