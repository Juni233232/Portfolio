// Slides 41-50 (Apple-style redesign): Unit 5 - User Testing + Conclusion
const L = require('./lib');
const { K, S, phone, gatherHome, gatherDetail, gatherRegister, gatherSuccess, browser, gatherWebDetail } = L;
const { G, mk, tile, iconTile, pill } = require('./kit');
const assign = require('./assign2');
const DM = 'A9ACB4';

function person(c, x, base, h, col, head = 0.2) { c.rect(x - 0.2, base - h, 0.4, h, { fill: col, r: 0.15 }); c.ell(x, base - h - head - 0.04, head, { fill: col }); }

module.exports = function (pres) {
  // ------------------------------------------------------------ 41 PROBLEM AND HYPOTHESIS
  {
    const s = mk(pres, { sec: 'u5', tone: 'dark', eyebrow: 'UNIT 5  ·  PROBLEM AND HYPOTHESIS STATEMENTS', title: ['Define the problem.', 'Make a testable bet.'] });
    const c = S(s);
    const w = 5.62;
    [['PROBLEM STATEMENT', [['[User]', 1], [' needs ', 0], ['[need]', 1], [' because ', 0], ['[insight]', 1], ['.', 0]], 'First-year students need a quick way to see which events are open to them, because they find events in many places and miss deadlines.'], ['HYPOTHESIS', [['We believe ', 0], ['[change]', 1], [' for ', 0], ['[users]', 1], [' will ', 0], ['[outcome]', 1], ['. We will know when ', 0], ['[measure]', 1], ['.', 0]], 'We believe a one-tap Register button with pre-filled details will raise completed registrations. We will know when 4 of 5 test participants register unaided.']].forEach((cd, i) => {
      const x = G.x + i * (w + 0.29);
      tile(c, x, G.y, w, 2.65, 'dark');
      c.t(cd[0], x + 0.3, G.y + 0.25, 4, 0.22, { size: 10.5, bold: true, color: K.lav, cs: 2 });
      c.t(cd[1].map((r) => ({ text: r[0], options: { color: r[1] ? K.lav : DM, bold: !!r[1] } })), x + 0.3, G.y + 0.58, w - 0.6, 0.55, { size: 13, ls: 1.1 });
      c.t(cd[2], x + 0.3, G.y + 1.25, w - 0.6, 1.3, { size: 15, bold: true, color: K.paper, ls: 1.12 });
    });
    [['FiX', 'WEAK', '“Make registration better.”', 'No user, no change, no measure.', K.red], ['FiCheck', 'STRONG', 'Specific user, change and measure.', 'You can test it, and be proved wrong.', K.green]].forEach((d, i) => {
      const x = G.x + i * (w + 0.29), y = 5.45;
      c.rect(x, y, w, 1.15, { fill: 'FFFFFF', tr: 92, line: d[4], lw: 1.25, r: 0.26 });
      c.icon(d[0], x + 0.42, y + 0.3, 0.22, i ? 'green' : 'red'); c.t(d[1], x + 0.7, y + 0.18, 2, 0.25, { size: 10.5, bold: true, color: d[4], cs: 2, valign: 'middle' });
      c.t(d[2], x + 0.3, y + 0.46, w - 0.6, 0.35, { size: 17, bold: true, color: K.paper }); c.t(d[3], x + 0.3, y + 0.8, w - 0.6, 0.28, { size: 12.5, color: DM });
    });
  }

  // ------------------------------------------------------------ 42 COMPETITIVE SCOPE + DECEPTIVE PATTERNS
  {
    const s = mk(pres, { sec: 'u5', eyebrow: 'COMPETITIVE SCOPE AND DECEPTIVE PATTERNS', title: ['Draw the boundary.', 'Stay honest.'] });
    const c = S(s);
    const cx = 3.05, cy = 4.58;
    c.ell(cx, cy, 2.0, { fill: K.paper2 }); c.ell(cx, cy, 1.4, { fill: K.lavL }); c.ell(cx, cy, 0.88, { fill: K.lav }); c.ell(cx, cy, 0.3, { fill: K.blueD });
    c.t('Gather', cx - 0.3, cy - 0.15, 0.6, 0.3, { size: 9, bold: true, color: K.white, align: 'center', valign: 'middle' });
    [['Alternatives', 'Posters, word of mouth', -1.9], ['Indirect', 'Web page, group chat', -1.36], ['Direct', 'Other event apps', -0.86]].forEach((r) => { c.t(r[0], cx - 1.1, cy + r[2], 2.2, 0.24, { size: 12.5, bold: true, color: K.ink, align: 'center' }); c.t(r[1], cx - 1.2, cy + r[2] + 0.23, 2.4, 0.2, { size: 10.5, color: K.mute, align: 'center' }); });
    const dp = [['Confirmshaming', 'No thanks, I don’t like free tickets', 'Maybe later'], ['Pre-ticked opt-in', '☑ Send me sponsor offers', '☐ Send me sponsor offers'], ['Fake urgency', 'Only 2 left! Ends in 04:59', 'Registration closes Friday, 5 pm'], ['Roach motel', 'Join in one tap. Cancel: email us.', 'Cancel where you joined']];
    const dw = 3.2, dh = 1.9;
    dp.forEach((d, i) => {
      const x = 6.0 + (i % 2) * (dw + 0.23), y = G.y + Math.floor(i / 2) * (dh + 0.2);
      tile(c, x, y, dw, dh, 'light', { r: 0.26 });
      c.t(d[0], x + 0.25, y + 0.15, dw - 0.5, 0.3, { size: 14.5, bold: true, color: K.ink });
      c.rect(x + 0.2, y + 0.58, dw - 0.4, 0.5, { fill: 'FDECEA', r: 0.14 }); c.icon('FiAlertTriangle', x + 0.4, y + 0.83, 0.18, 'red'); c.t(d[1], x + 0.62, y + 0.58, dw - 0.9, 0.5, { size: 11, bold: true, color: K.red, valign: 'middle', ls: 1.0 });
      c.rect(x + 0.2, y + 1.22, dw - 0.4, 0.5, { fill: 'E7F6EF', r: 0.14 }); c.icon('FiCheck', x + 0.4, y + 1.47, 0.18, 'green'); c.t(d[2], x + 0.62, y + 1.22, dw - 0.9, 0.5, { size: 11, bold: true, color: '1E7B57', valign: 'middle', ls: 1.0 });
    });
  }

  // ------------------------------------------------------------ 43 LOW VS HIGH FIDELITY
  {
    const s = mk(pres, { sec: 'u5', eyebrow: 'LOW-FIDELITY VS HIGH-FIDELITY WIREFRAMES', title: ['Fidelity:', 'how finished should it look?'] });
    const c = S(s);
    const ph = 4.0, pw = ph * 316 / 616;
    const lo = phone(s, G.x, G.y, ph, { frame: '9A9A98' }); gatherDetail(lo, true);
    const hi = phone(s, 12.433 - pw, G.y, ph, { frame: K.ink }); gatherDetail(hi, false);
    const x0 = 3.45, lw = 1.15, cw = 2.6;
    pill(c, x0 + lw, G.y, cw - 0.1, 0.4, 'LOW-FIDELITY', { fill: '9A9A98', color: K.white, size: 11.5, cs: 1.5 }); pill(c, x0 + lw + cw, G.y, cw - 0.1, 0.4, 'HIGH-FIDELITY', { fill: K.blueD, color: K.white, size: 11.5, cs: 1.5 });
    [['PURPOSE', 'Explore structure and layout', 'Show the near-final look and feel'], ['DETAIL', 'Greys, boxes, placeholders', 'Real type, colour, images'], ['SPEED', 'Minutes to change', 'Slower to change'], ['USE WHEN', 'Early ideas, team talks', 'Reviews, tests, hand-off']].forEach((r, i) => {
      const y = G.y + 0.55 + i * 0.86;
      c.t(r[0], x0, y, lw, 0.74, { size: 9.5, bold: true, color: K.mute, cs: 1.5, valign: 'middle' });
      c.rect(x0 + lw, y, cw - 0.1, 0.74, { fill: K.paper2, r: 0.2 }); c.t(r[1], x0 + lw + 0.2, y, cw - 0.5, 0.74, { size: 13.5, color: K.ink, valign: 'middle', ls: 1.05 });
      c.rect(x0 + lw + cw, y, cw - 0.1, 0.74, { fill: K.lavL, r: 0.2 }); c.t(r[2], x0 + lw + cw + 0.2, y, cw - 0.5, 0.74, { size: 13.5, bold: true, color: K.ink, valign: 'middle', ls: 1.05 });
    });
  }

  // ------------------------------------------------------------ 44 MOBILE WIREFRAMING
  {
    const s = mk(pres, { sec: 'u5', eyebrow: 'MOBILE WIREFRAMING', title: ['Four screens carry', 'the whole registration.'] });
    const c = S(s);
    const ph = 3.2, pw = ph * 316 / 616, y = 2.95, pitch = 3.25;
    [[gatherHome, 'Home', 'Browse and filter'], [gatherDetail, 'Details', 'Facts and one action'], [gatherRegister, 'Register', 'Short form, clear labels'], [(p, l) => L.gatherSuccess(p, l), 'Confirm', 'QR ticket, next steps']].forEach((sc, i) => {
      const x = G.x + i * pitch;
      const p = phone(s, x, y, ph, { frame: '9A9A98' }); sc[0](p, true);
      c.box(x, 2.5, 0.32, 0.32, String(i + 1), { shape: 'ellipse', fill: K.blueD, color: K.white, size: 12, bold: true });
      if (i < 3) c.line(x + pw + 0.2, y + ph / 2, x + pitch - 0.2, y + ph / 2, { color: K.blueD, w: 2, arrow: true });
      c.t(sc[1], x, y + ph + 0.1, pw + 1.2, 0.3, { size: 15, bold: true, color: K.ink }); c.t(sc[2], x, y + ph + 0.4, 2.9, 0.26, { size: 12.5, color: K.mute });
    });
  }

  // ------------------------------------------------------------ 45 WEB WIREFRAMING
  {
    const s = mk(pres, { sec: 'u5', tone: 'dark', eyebrow: 'WEB WIREFRAMING', title: ['The same experience,', 'rebuilt for a wide screen.'] });
    const c = S(s);
    const b = browser(s, G.x, G.y, 6.6, 560); gatherWebDetail(b, true);
    const bp = [['Desktop', 'Side by side. Hover and focus states.', 3], ['Tablet', 'Two columns. Touch and mouse.', 2], ['Mobile', 'One column. Thumb reach.', 1]];
    bp.forEach((r, i) => {
      const y = G.y + i * 1.42, x = 7.8, w = 12.433 - x;
      tile(c, x, y, w, 1.2, 'dark', { r: 0.26 });
      const bw2 = [1.4, 1.05, 0.65][i], dx = x + 0.3 + (1.4 - bw2) / 2, dy = y + 0.2;
      c.rect(dx, dy, bw2, 0.8, { fill: K.ink3, line: K.grey, lw: 1, r: 0.07 }); c.rect(dx + 0.05, dy + 0.05, bw2 - 0.1, 0.08, { fill: K.grey, r: 0.03 });
      if (r[2] === 3) { c.rect(dx + 0.07, dy + 0.2, 0.85, 0.52, { fill: K.lav, r: 0.04 }); c.rect(dx + 1.0, dy + 0.2, 0.33, 0.52, { fill: K.blue, r: 0.04 }); }
      if (r[2] === 2) { c.rect(dx + 0.07, dy + 0.2, 0.6, 0.52, { fill: K.lav, r: 0.04 }); c.rect(dx + 0.73, dy + 0.2, 0.25, 0.52, { fill: K.blue, r: 0.04 }); }
      if (r[2] === 1) { c.rect(dx + 0.07, dy + 0.2, 0.5, 0.32, { fill: K.lav, r: 0.04 }); c.rect(dx + 0.07, dy + 0.56, 0.5, 0.16, { fill: K.blue, r: 0.04 }); }
      c.t(r[0], x + 2.0, y + 0.22, w - 2.2, 0.35, { size: 17, bold: true, color: K.paper }); c.t(r[1], x + 2.0, y + 0.6, w - 2.2, 0.5, { size: 12.5, color: DM, ls: 1.05 });
    });
  }

  // ------------------------------------------------------------ 46 PROTOTYPING
  {
    const s = mk(pres, { sec: 'u5', eyebrow: 'PROTOTYPING', title: ['A prototype tests', 'behaviour, not pictures.'] });
    const c = S(s);
    const lw = 7.1, th = 2.65;
    tile(c, G.x, G.y, lw, th, 'light'); tile(c, G.x + lw + 0.25, G.y, G.w - lw - 0.25, th, 'light');
    c.t('NAVIGATION AND TRANSITIONS', G.x + 0.3, G.y + 0.2, 5, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    const ph = 2.0, pw = ph * 316 / 616, xs = [G.x + 0.4, G.x + 2.85, G.x + 5.3];
    [[gatherHome, [30, 282, 88, 26]], [gatherDetail, [16, 500, 268, 46]], [gatherSuccess, null]].forEach((sd, i) => {
      const p = phone(s, xs[i], G.y + 0.5, ph); sd[0](p, false); if (sd[1]) p.rect(sd[1][0] - 3, sd[1][1] - 3, sd[1][2] + 6, sd[1][3] + 6, { line: K.blue, lw: 2.5, dash: 'dash', r: 8 });
      if (i < 2) { c.line(xs[i] + pw + 0.1, G.y + 1.5, xs[i + 1] - 0.1, G.y + 1.5, { color: K.blueD, w: 2, arrow: true }); c.box(xs[i] + pw + 0.1, G.y + 1.62, 1.1, 0.32, ['Tap: slide in', 'Tap: confirm'][i], { r: 0.16, fill: K.lavL, color: K.ink, size: 10.5, bold: true }); }
    });
    const fx = G.x + lw + 0.55;
    c.t('FIDELITY LADDER', fx, G.y + 0.2, 3, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    [['Paper', 0.25], ['Clickable wireframe', 0.5], ['Hi-fi interactive', 0.78], ['Coded', 1.0]].forEach((f, i) => { const y = G.y + 0.65 + i * 0.48; c.t(f[0], fx, y, 1.7, 0.36, { size: 12.5, bold: true, color: K.ink, valign: 'middle' }); c.rect(fx + 1.75, y + 0.13, 1.7, 0.1, { fill: 'E4E2DB', r: 0.05 }); c.rect(fx + 1.75, y + 0.13, 1.7 * f[1], 0.1, { fill: K.blueD, r: 0.05 }); });
    tile(c, G.x, G.y + th + 0.2, G.w, 1.15, 'light');
    c.t('INTERACTION STATES OF ONE BUTTON', G.x + 0.3, G.y + th + 0.34, 6, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    [['Default', K.blueD, K.white, null], ['Hover', '3A5CF0', K.white, null], ['Focus', K.blueD, K.white, K.ink], ['Pressed', '1F38B0', K.white, null], ['Disabled', 'D5D3CB', K.grey, null], ['Loading', K.blueD, K.white, null], ['Error', K.white, K.red, K.red], ['Success', K.green, K.white, null]].forEach((b, i) => {
      const x = G.x + 0.3 + i * 1.34, y = G.y + th + 0.62;
      c.box(x, y, 1.14, 0.34, b[0] === 'Loading' ? '···' : (b[0] === 'Success' ? '✓ Done' : 'Register'), { r: 0.17, fill: b[1], color: b[2], size: 11, bold: true, line: b[3] === K.red ? K.red : undefined, lw: 1.5 });
      if (b[3] === K.ink) c.rect(x - 0.05, y - 0.05, 1.24, 0.44, { line: K.ink, lw: 2, r: 0.22 });
      c.t(b[0], x, y + 0.4, 1.14, 0.2, { size: 10.5, bold: true, color: K.mute, align: 'center' });
    });
  }

  // ------------------------------------------------------------ 47 USABILITY TESTING
  {
    const s = mk(pres, { sec: 'u5', tone: 'dark', eyebrow: 'USABILITY TESTING', title: ['Watch real people', 'try real tasks.'] });
    const c = S(s);
    const lw = 5.5, th = 2.95;
    tile(c, G.x, G.y, lw, th, 'dark');
    c.t('Think aloud. Do not help.', G.x + 0.3, G.y + 0.25, 4, 0.3, { size: 14, bold: true, color: K.lav });
    const ty = G.y + 2.35;
    c.rect(G.x + 0.4, ty, lw - 0.8, 0.12, { fill: K.grey, r: 0.04 });
    person(c, G.x + 1.4, ty, 1.0, K.paper, 0.22); c.rect(G.x + 1.75, ty - 0.65, 0.45, 0.75, { fill: K.ink3, r: 0.06 }); c.rect(G.x + 1.79, ty - 0.6, 0.37, 0.65, { fill: K.blue, r: 0.04 });
    person(c, G.x + 4.4, ty, 1.0, K.lav, 0.22); c.rect(G.x + 2.95, ty - 0.8, 0.95, 0.62, { fill: K.ink3, line: K.grey, lw: 1, r: 0.05 }); c.t('Observer notes', G.x + 2.8, ty - 1.15, 1.3, 0.22, { size: 10.5, color: DM, align: 'center' });
    c.t('Participant', G.x + 0.75, ty + 0.2, 1.3, 0.22, { size: 11, bold: true, color: K.paper, align: 'center' }); c.t('Facilitator', G.x + 3.75, ty + 0.2, 1.3, 0.22, { size: 11, bold: true, color: K.lav, align: 'center' });
    const pw2 = (lw - 4 * 0.1) / 5;
    ['Recruit', 'Brief', 'Tasks', 'Observe', 'Measure'].forEach((t, i) => c.box(G.x + i * (pw2 + 0.1), G.y + th + 0.25, pw2, 0.42, t, { r: 0.21, fill: i === 4 ? K.blueD : K.ink3, color: K.white, size: 12, bold: true }));
    const rx = 6.7, rw = 12.433 - rx;
    c.rect(rx, G.y, rw, 1.5, { fill: K.blueD, r: 0.28 });
    c.t('SCENARIO AND TASK', rx + 0.3, G.y + 0.2, 4, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 }); c.t('You are a first-year student. Find the Design Week keynote and register for it.', rx + 0.3, G.y + 0.5, rw - 0.6, 0.9, { size: 15.5, bold: true, color: K.white, ls: 1.1 });
    tile(c, rx, G.y + 1.7, rw, 1.2, 'dark');
    c.t('SINGLE EASE QUESTION, AFTER EACH TASK', rx + 0.3, G.y + 1.85, 5, 0.22, { size: 10, bold: true, color: K.lav, cs: 1.5 });
    for (let i = 0; i < 7; i++) c.box(rx + 0.3 + i * 0.72, G.y + 2.15, 0.5, 0.5, String(i + 1), { shape: 'ellipse', line: K.grey, color: K.paper, size: 12, bold: true });
    c.t('Very difficult', rx + 0.3, G.y + 2.68, 1.5, 0.2, { size: 10, color: DM }); c.t('Very easy', rx + rw - 1.8, G.y + 2.68, 1.5, 0.2, { size: 10, color: DM, align: 'right' });
    tile(c, rx, G.y + 3.1, rw, 0.9, 'dark', { r: 0.24 });
    c.t('MEASURES', rx + 0.3, G.y + 3.22, 2, 0.2, { size: 10, bold: true, color: K.lav, cs: 2 });
    let mxx = rx + 0.3; ['Task success', 'Time on task', 'Errors', 'SEQ', 'SUS'].forEach((m) => { const w2 = m.length * 0.082 + 0.32; pill(c, mxx, G.y + 3.5, w2, 0.3, m, { line: K.lav, color: K.lav, size: 10.5 }); mxx += w2 + 0.1; });
  }

  // ------------------------------------------------------------ 48 FEEDBACK, CRITIQUE, ITERATION
  {
    const s = mk(pres, { sec: 'u5', eyebrow: 'FEEDBACK, DESIGN CRITIQUE AND ITERATION', title: ['Turn feedback into', 'the next, better version.'] });
    const c = S(s);
    const mx = G.x, mw = 5.5, cw = (mw - 0.14) / 2, chh = 1.7;
    c.t('HIGH IMPACT', mx, G.y - 0.02, 2, 0.22, { size: 9.5, bold: true, color: K.mute, cs: 1.5 });
    [[0, 0, K.lavL, 'QUICK WINS'], [1, 0, K.white, 'MAJOR PROJECTS'], [0, 1, K.white, 'FILL-INS'], [1, 1, K.white, 'RECONSIDER']].forEach((q) => { const x = mx + q[0] * (cw + 0.14), y = G.y + 0.27 + q[1] * (chh + 0.14); c.rect(x, y, cw, chh, { fill: q[2], r: 0.24, shadow: q[2] === K.white ? { o: 0.07, b: 20, d: 5, a: 90 } : undefined }); c.t(q[3], x + 0.22, y + 0.15, 2.2, 0.2, { size: 9.5, bold: true, color: K.blueD, cs: 1.5 }); });
    [['Register button below the fold', 0, 0, K.lav], ['Ticket not offline', 1, 0, K.lavL], ['Unclear filter icon', 0, 1, 'EEEDF3'], ['Add dark mode', 1, 1, 'EEEDF3']].forEach((n) => { const x = mx + n[1] * (cw + 0.14) + 0.2, y = G.y + 0.27 + n[2] * (chh + 0.14) + 0.55; c.box(x, y, cw - 0.4, 0.8, n[0], { r: 0.12, fill: n[3], color: K.ink, size: 13, bold: true, ls: 1.05, pad: 6 }); });
    c.t('LOW EFFORT  →  HIGH EFFORT', mx + 2.4, 6.5, mw - 2.4, 0.22, { size: 11, bold: true, color: K.mute, cs: 0.5, align: 'right' }); c.t('Hypothetical findings', mx, 6.5, 2.4, 0.22, { size: 11, color: K.mute });
    const rx = 6.85, rw = 12.433 - rx;
    c.t('THE ITERATION LOOP', rx, G.y - 0.02, 4, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    ['Observe', 'Prioritise', 'Redesign', 'Retest'].forEach((t, i) => c.box(rx + i * ((rw - 0.3) / 4 + 0.1), G.y + 0.3, (rw - 0.3) / 4, 0.6, t, { r: 0.3, fill: [K.ink, K.blueD, '1F38B0', K.lav][i], color: i === 3 ? K.ink : K.white, size: 13, bold: true }));
    c.t('DESIGN CRITIQUE', rx, G.y + 1.3, 4, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    [['I like', 'The ticket is instantly clear.', K.blueD, K.white], ['I wish', 'The form asked less of me.', K.lav, K.ink], ['What if', 'Details came from my ID?', K.lavL, K.ink]].forEach((n, i) => { const w2 = (rw - 0.3) / 3; c.rect(rx + i * (w2 + 0.15), G.y + 1.65, w2, 1.55, { fill: n[2], r: 0.22 }); c.t(n[0], rx + i * (w2 + 0.15) + 0.2, G.y + 1.8, w2 - 0.3, 0.3, { size: 15, bold: true, color: n[3] }); c.t(n[1], rx + i * (w2 + 0.15) + 0.2, G.y + 2.15, w2 - 0.35, 0.95, { size: 13, color: n[3], ls: 1.08 }); });
    c.t([{ text: 'Before  ', options: { bold: true, color: K.mute } }, { text: 'Register below the fold', options: { color: K.mute } }, { text: '   →   ', options: { bold: true, color: K.blueD } }, { text: 'sticky button', options: { bold: true, color: K.ink } }], rx, G.y + 3.5, rw, 0.4, { size: 14, valign: 'middle' });
  }

  // ------------------------------------------------------------ 49 UNIT 5 ASSIGNMENT
  assign(pres, {
    sec: 'u5', eyebrow: 'UNIT 5  ·  ASSIGNMENT', title: ['Prototype it. Test it.', 'Improve it with evidence.'], num: '05',
    tag: 'The capstone: build, test and revise a complete experience.', think: 'Do not invent data. A modest real test beats a polished fake one.',
    steps: [['Create low- and high-fidelity wireframes', 'Mobile and web, for your proposed experience.'], ['Build an interactive prototype', 'Link screens, add transitions and key states.'], ['Conduct usability testing', 'Recruit users, set tasks, observe and measure.'], ['Document your findings', 'Tasks, measures, observations and issues.'], ['Revise the design from the evidence', 'Show which finding caused each change.']],
  });

  // ------------------------------------------------------------ 50 FROM IDEA TO EXPERIENCE
  {
    const s = mk(pres, { sec: 'end', tone: 'dark', eyebrow: 'CONCLUSION  ·  FROM IDEA TO EXPERIENCE', title: ['From idea', 'to experience.'] });
    const c = S(s);
    const cx = 3.75, cy = 4.55, R = 1.6, nr = 0.5;
    const steps = ['Research', 'Define', 'Ideate', 'Structure', 'Wireframe', 'Prototype', 'Test', 'Iterate'], cols = [K.lavL, K.lav, 'B6A8FF', '9A92FF', '7D8DFF', K.blue, '3A5CF0', K.blueD];
    const pos = steps.map((_, i) => [cx + R * Math.cos(-Math.PI / 2 + i * Math.PI / 4), cy + R * Math.sin(-Math.PI / 2 + i * Math.PI / 4)]);
    pos.forEach((p, i) => { const q = pos[(i + 1) % 8], dx = q[0] - p[0], dy = q[1] - p[1], d = Math.hypot(dx, dy); c.line(p[0] + dx / d * (nr + 0.05), p[1] + dy / d * (nr + 0.05), q[0] - dx / d * (nr + 0.09), q[1] - dy / d * (nr + 0.09), { color: K.grey, w: 1.5, arrow: true }); });
    pos.forEach((p, i) => { c.ell(p[0], p[1], nr, { fill: cols[i] }); c.t(steps[i], p[0] - nr, p[1] - 0.15, nr * 2, 0.3, { size: 10.5, bold: true, color: i < 5 ? K.ink : K.white, align: 'center', valign: 'middle' }); });
    c.t('Gather', cx - 0.8, cy - 0.38, 1.6, 0.4, { size: 20, bold: true, color: K.paper, align: 'center' }); c.t('one example, one process', cx - 0.9, cy + 0.02, 1.8, 0.45, { size: 11.5, color: DM, align: 'center', ls: 1.0 });
    c.t('KEY TAKEAWAYS', 7.3, G.y - 0.02, 4, 0.22, { size: 10.5, bold: true, color: K.lav, cs: 2 });
    ['UX is the whole experience. UI is one layer.', 'Start with people, research and inclusion.', 'Structure comes before surface.', 'Test early. Evidence beats opinion.', 'Design is never finished, only iterated.'].forEach((t, i) => { const y = G.y + 0.3 + i * 0.5; c.t(String(i + 1), 7.3, y, 0.4, 0.45, { size: 20, bold: true, color: K.blue, valign: 'middle' }); c.t(t, 7.8, y, 4.63, 0.45, { size: 14.5, bold: true, color: K.paper, valign: 'middle' }); });
    c.rect(7.3, 5.6, 5.133, 1.0, { fill: K.blue, r: 0.28 });
    c.t('COURSE OUTCOME', 7.6, 5.7, 4, 0.2, { size: 9.5, bold: true, color: K.lav, cs: 2 }); c.t('You can create mobile and web wireframes and working prototypes.', 7.6, 5.93, 4.6, 0.65, { size: 15.5, bold: true, color: K.white, ls: 1.05 });
  }
};
