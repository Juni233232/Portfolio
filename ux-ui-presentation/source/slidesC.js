// Slides 23-31 (Apple-style redesign): Unit 3 - Applied Design Fundamentals
const L = require('./lib');
const { K, S } = L;
const { G, mk, tile, iconTile, pill } = require('./kit');
const assign = require('./assign2');
const DM = 'A9ACB4';

module.exports = function (pres) {
  // ------------------------------------------------------------ 23 STORYBOARDS + MOOD BOARDS
  {
    const s = mk(pres, { sec: 'u3', tone: 'dark', eyebrow: 'UNIT 3  ·  STORYBOARDING AND MOOD BOARDS', title: ['Storyboards tell it.', 'Mood boards feel it.'] });
    const c = S(s);
    const w = 5.62, h = 3.6;
    tile(c, G.x, G.y, w, h, 'dark'); tile(c, G.x + w + 0.29, G.y, w, h, 'dark');
    c.t('STORYBOARD', G.x + 0.3, G.y + 0.25, 3, 0.25, { size: 11, bold: true, color: K.lav, cs: 2 });
    c.t('MOOD BOARD', G.x + w + 0.59, G.y + 0.25, 3, 0.25, { size: 11, bold: true, color: K.lav, cs: 2 });
    const cap = ['Sees a poster', 'Finds the event', 'Registers in two taps', 'Scans her ticket'];
    for (let i = 0; i < 4; i++) {
      const px = G.x + 0.3 + i * 1.29, py = G.y + 0.7;
      c.rect(px, py, 1.14, 1.5, { fill: K.paper, r: 0.14 });
      const d = c.sub(px, py, 0.78), pw = 1.45;
      if (i === 0) { d.rect(0.3, 0.5, 0.62, 0.75, { fill: K.blue, r: 0.04 }); d.rect(0.38, 0.6, 0.46, 0.08, { fill: K.white, r: 0.03 }); d.ell(1.1, 1.0, 0.13, { fill: K.ink }); d.rect(0.99, 1.15, 0.22, 0.55, { fill: K.ink, r: 0.1 }); }
      if (i === 1) { d.ell(0.45, 0.85, 0.14, { fill: K.ink }); d.rect(0.33, 1.0, 0.24, 0.6, { fill: K.ink, r: 0.1 }); d.rect(0.75, 0.45, 0.5, 0.9, { fill: K.ink3, r: 0.06 }); d.rect(0.79, 0.52, 0.42, 0.76, { fill: K.blue, r: 0.04 }); d.line(0.58, 1.1, 0.75, 0.95, { color: K.ink, w: 2 }); }
      if (i === 2) { d.rect(0.45, 0.35, 0.55, 1.0, { fill: K.ink3, r: 0.07 }); d.rect(0.5, 0.43, 0.45, 0.84, { fill: K.white, r: 0.05 }); d.ell(0.725, 0.75, 0.17, { fill: K.green }); d.icon('FiCheck', 0.725, 0.75, 0.2, 'white'); d.rect(0.56, 1.05, 0.33, 0.1, { fill: K.blue, r: 0.05 }); }
      if (i === 3) { d.rect(0.15, 0.5, 0.55, 1.1, { fill: K.grey, r: 0.03 }); d.rect(0.9, 0.5, 0.4, 0.4, { fill: K.white, line: K.ink, r: 0.03 }); [[0, 0], [1, 0], [0, 1], [1, 1]].forEach((q) => d.rect(0.95 + q[0] * 0.2, 0.55 + q[1] * 0.2, 0.1, 0.1, { fill: K.ink })); d.ell(0.95, 1.05, 0.12, { fill: K.ink }); d.rect(0.85, 1.2, 0.2, 0.5, { fill: K.ink, r: 0.08 }); }
      c.box(px + 0.08, py + 0.08, 0.26, 0.26, String(i + 1), { shape: 'ellipse', fill: K.ink, color: K.paper, size: 10, bold: true });
      c.t(cap[i], px - 0.04, py + 1.58, 1.22, 0.45, { size: 11.5, color: K.paper, ls: 1.0 });
    }
    const mx = G.x + w + 0.59, my = G.y + 0.7;
    c.rect(mx, my, 2.0, 1.5, { fill: K.blueD, r: 0.18 }); c.t('Energetic', mx + 0.22, my + 1.0, 1.6, 0.4, { size: 17, bold: true, color: K.white });
    c.rect(mx + 2.1, my, 1.3, 0.72, { fill: K.lav, r: 0.18 }); c.t('Aa', mx + 2.1, my, 1.3, 0.72, { size: 26, bold: true, color: K.ink, align: 'center', valign: 'middle' });
    c.rect(mx + 2.1, my + 0.78, 1.3, 0.72, { fill: K.ink3, r: 0.18 }); c.t('Inter Bold', mx + 2.1, my + 0.78, 1.3, 0.72, { size: 12, bold: true, color: K.paper, align: 'center', valign: 'middle' });
    c.rect(mx + 3.5, my, 1.52, 1.5, { fill: K.paper, r: 0.18 }); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) c.ell(mx + 3.8 + i * 0.3, my + 0.32 + j * 0.3, 0.07, { fill: (i + j) % 3 === 0 ? K.blue : K.lav });
    [K.ink2, K.paper, K.grey, K.blueD].forEach((cl, i) => c.rect(mx + i * 1.28, my + 1.62, 1.18, 0.3, { fill: cl, line: K.ink3, lw: 0.75, r: 0.1 }));
    c.t('Aligns the team on the user’s context and story.', G.x + 0.3, G.y + 2.95, w - 0.6, 0.5, { size: 13, color: DM, ls: 1.05 });
    c.t('Agrees tone, colour and imagery so choices are intentional.', mx, G.y + 2.95, w - 0.6, 0.5, { size: 13, color: DM, ls: 1.05 });
  }

  // ------------------------------------------------------------ 24 USER JOURNEY MAPPING
  {
    const s = mk(pres, { sec: 'u3', eyebrow: 'USER JOURNEY MAPPING', title: ['See the whole experience,', 'including the feelings.'] });
    const c = S(s);
    const lx = G.x, lw = 1.5, x0 = 2.5, gap = 0.12, cw = (12.433 - x0 - 5 * gap) / 6;
    const cx = (i) => x0 + i * (cw + gap);
    const st = ['Discover', 'Decide', 'Register', 'Confirm', 'Attend', 'Follow up'];
    st.forEach((t, i) => c.box(cx(i), G.y, cw, 0.4, t, { r: 0.2, fill: i === 2 ? K.blueD : K.ink, color: K.white, size: 13, bold: true }));
    c.t('AISHA\n(HYPOTHESIS)', lx, G.y, lw, 0.4, { size: 11, bold: true, color: K.mute, cs: 0.3, valign: 'middle', ls: 0.95 });
    const rows = [['ACTIONS', 3.12, 0.74, ['Sees a poster, hears from friends', 'Compares events and times', 'Fills in her details', 'Waits for confirmation', 'Shows her ticket at the door', 'Shares photos, looks for more']], ['TOUCHPOINTS', 3.96, 0.42, ['Poster, chat', 'App, website', 'Mobile form', 'Email, app', 'QR ticket', 'App feed']]];
    rows.forEach((r) => { c.t(r[0], lx, r[1], lw, r[2], { size: 11, bold: true, color: K.mute, cs: 0.5, valign: 'middle' }); r[3].forEach((t, i) => { c.rect(cx(i), r[1], cw, r[2], { fill: K.white, r: 0.16 }); c.t(t, cx(i) + 0.12, r[1], cw - 0.22, r[2], { size: 12, color: K.ink, valign: 'middle', ls: 1.0 }); }); });
    const ey = 4.48, eh = 1.1;
    c.t('EMOTION', lx, ey, lw, eh, { size: 11, bold: true, color: K.mute, cs: 0.5, valign: 'middle' });
    c.rect(x0, ey, 12.433 - x0, eh, { fill: K.paper2, r: 0.2 });
    c.icon('FiSmile', x0 + 0.22, ey + 0.2, 0.2, 'green'); c.icon('FiFrown', x0 + 0.22, ey + eh - 0.2, 0.2, 'red');
    const lv = [0.58, 0.52, 0.15, 0.38, 0.72, 0.92], pts = lv.map((v, i) => [cx(i) + cw / 2, ey + eh - 0.17 - v * (eh - 0.34)]);
    c.path(pts, { color: K.blueD, w: 2.75 }); pts.forEach((p, i) => c.ell(p[0], p[1], 0.09, { fill: i === 2 ? K.red : K.blueD, line: K.white, lw: 1.5 }));
    c.t('lowest point', pts[2][0] - 0.6, pts[2][1] - 0.42, 1.2, 0.2, { size: 10.5, bold: true, color: K.red, align: 'center' });
    c.t('OPPORTUNITIES', lx, 5.7, lw, 0.78, { size: 11, bold: true, color: K.blueD, cs: 0.5, valign: 'middle' });
    ['Clear, inviting poster', 'Relevance tags on events', 'Pre-fill saved details', 'Instant confirmation', 'Simple directions', 'Suggest next events'].forEach((t, i) => { c.rect(cx(i), 5.7, cw, 0.78, { fill: i === 2 ? K.lav : K.lavL, r: 0.16 }); c.t(t, cx(i) + 0.12, 5.7, cw - 0.22, 0.78, { size: 12, bold: true, color: K.ink, valign: 'middle', ls: 1.0 }); });
  }

  // ------------------------------------------------------------ 25 PAIN POINTS + CURB-CUT
  {
    const s = mk(pres, { sec: 'u3', tone: 'dark', eyebrow: 'USER PAIN POINTS AND THE CURB-CUT EFFECT', title: ['Fix a pain point.', 'Many people benefit.'] });
    const c = S(s);
    const pp = [['FiList', 'Process', 'Too many steps or an unclear path'], ['FiAlertTriangle', 'Functional', 'Something is broken or slow'], ['FiDollarSign', 'Financial', 'Costs, fees or surprises'], ['FiHelpCircle', 'Support', 'Hard to get help']];
    const tw = 2.7, th = 1.85;
    pp.forEach((p, i) => {
      const x = G.x + (i % 2) * (tw + 0.25), y = G.y + Math.floor(i / 2) * (th + 0.3);
      tile(c, x, y, tw, th, 'dark');
      iconTile(c, x + 0.3, y + 0.3, 0.56, p[0], [K.blueD, K.blue, K.lav, K.paper][i], i > 1 ? 'ink' : 'white');
      c.t(p[1], x + 0.3, y + 1.0, tw - 0.5, 0.32, { size: 18, bold: true, color: K.paper }); c.t(p[2], x + 0.3, y + 1.35, tw - 0.5, 0.45, { size: 12.5, color: DM, ls: 1.0 });
    });
    const rx = 6.9, rw = 5.533;
    tile(c, rx, G.y, rw, G.h, 'dark');
    c.t('THE CURB-CUT EFFECT', rx + 0.3, G.y + 0.22, 4, 0.25, { size: 10.5, bold: true, color: K.lav, cs: 2 });
    ['Wheelchairs', 'Strollers', 'Luggage', 'Bicycles'].forEach((t, i) => { const px = rx + 0.3 + i * 1.28; pill(c, px, G.y + 0.62, 1.16, 0.32, t, { fill: 'FFFFFF', tr: 88, color: K.paper, size: 11 }); c.line(px + 0.58, G.y + 0.96, rx + 0.9 + 1.5 + i * 0.3, G.y + 1.5, { color: K.grey, w: 0.75 }); });
    const by = G.y + 1.95, ax = rx + 0.3;
    c.rect(ax, by, 1.9, 0.26, { fill: K.grey }); c.rect(ax + 2.8, by - 0.5, 2.13, 0.76, { fill: K.lav });
    c.poly([[ax + 1.9, by], [ax + 2.8, by - 0.5], [ax + 2.8, by]], { fill: K.blue });
    c.t('Built for wheelchair users, used by almost everyone', rx + 0.3, G.y + 2.35, rw - 0.6, 0.3, { size: 13.5, bold: true, color: K.paper });
    c.t('DIGITAL CURB CUTS', rx + 0.3, G.y + 2.82, 4, 0.25, { size: 10.5, bold: true, color: K.lav, cs: 2 });
    [['Captions', 'also help in noisy places'], ['Large tap targets', 'also help one-handed use'], ['Dark mode', 'also helps at night']].forEach((d, i) => c.t([{ text: d[0] + '  ', options: { bold: true, color: K.paper } }, { text: d[1], options: { color: DM } }], rx + 0.3, G.y + 3.12 + i * 0.27, rw - 0.6, 0.26, { size: 12.5, valign: 'middle' }));
  }

  // ------------------------------------------------------------ 26 USER FLOWS
  {
    const s = mk(pres, { sec: 'u3', eyebrow: 'USER FLOWS', title: ['Map the path:', 'registering for an event.'] });
    const c = S(s);
    const bw = 1.4, bh = 0.8, X = (i) => G.x + i * 2.0;
    const arrow = (pts) => c.path(pts, { color: K.grey, w: 1.5, arrow: true });
    const proc = (x, y, t, alt) => c.box(x, y, bw, bh, t, { r: 0.16, fill: alt ? K.lavL : K.blueD, color: alt ? K.ink : K.white, size: 12, bold: true, ls: 1.0 });
    const dec = (x, y, t) => { c.shape('diamond', x, y - 0.15, bw, bh + 0.3, { fill: K.white, line: K.ink, lw: 1.5 }); c.t(t, x + 0.2, y - 0.15, bw - 0.4, bh + 0.3, { size: 11.5, bold: true, color: K.ink, align: 'center', valign: 'middle', ls: 1.0 }); };
    const term = (x, y, t) => c.box(x, y, bw, bh * 0.7, t, { r: 0.28, fill: K.ink, color: K.white, size: 12, bold: true });
    const r1 = 2.7, cy1 = r1 + bh / 2, cy2 = 4.4, cy3 = 5.7;
    term(X(0), r1 + 0.12, 'Start'); proc(X(1), r1, 'Browse or search events'); proc(X(2), r1, 'View event details'); dec(X(3), r1, 'Logged in?'); proc(X(4), r1, 'Choose session and ticket'); proc(X(5), r1, 'Fill in details');
    [0, 1, 2, 3, 4].forEach((i) => arrow([[X(i) + bw, cy1], [X(i + 1), cy1]]));
    c.t('Yes', X(3) + bw + 0.05, cy1 - 0.3, 0.5, 0.22, { size: 11, bold: true, color: K.green });
    proc(X(3), cy2 - bh / 2, 'Sign in with campus ID', true);
    arrow([[X(3) + bw / 2, cy1 + bh / 2 + 0.15], [X(3) + bw / 2, cy2 - bh / 2]]); c.t('No', X(3) + bw / 2 + 0.08, cy1 + bh / 2 + 0.2, 0.4, 0.22, { size: 11, bold: true, color: K.red });
    arrow([[X(3) + 0.35, cy2 - bh / 2], [X(3) + 0.35, cy1 + 0.285]]);
    dec(X(5), cy2 - bh / 2, 'Seats available?'); arrow([[X(5) + bw / 2, r1 + bh], [X(5) + bw / 2, cy2 - bh / 2 - 0.15]]);
    proc(X(4), cy2 - bh / 2, 'Join the waitlist', true); arrow([[X(5), cy2], [X(4) + bw, cy2]]); c.t('No', X(4) + bw + 0.08, cy2 - 0.3, 0.4, 0.22, { size: 11, bold: true, color: K.red });
    proc(X(5), cy3 - bh / 2, 'Confirmation and QR ticket'); arrow([[X(5) + bw / 2, cy2 + bh / 2 + 0.15], [X(5) + bw / 2, cy3 - bh / 2]]); c.t('Yes', X(5) + bw / 2 + 0.08, cy2 + bh / 2 + 0.2, 0.5, 0.22, { size: 11, bold: true, color: K.green });
    proc(X(4), cy3 - bh / 2, 'Reminder or seat alert', true); arrow([[X(5), cy3], [X(4) + bw, cy3]]); arrow([[X(4) + bw / 2, cy2 + bh / 2], [X(4) + bw / 2, cy3 - bh / 2]]);
    term(X(3), cy3 - bh * 0.35, 'End'); arrow([[X(4), cy3], [X(3) + bw, cy3]]);
    c.box(G.x, 6.52, 0.45, 0.24, '', { r: 0.12, fill: K.ink }); c.t('Start / end', G.x + 0.55, 6.52, 1.1, 0.24, { size: 11, color: K.mute, valign: 'middle' });
    c.box(2.7, 6.52, 0.45, 0.24, '', { r: 0.06, fill: K.blueD }); c.t('Main step', 3.25, 6.52, 1, 0.24, { size: 11, color: K.mute, valign: 'middle' });
    c.box(4.4, 6.52, 0.45, 0.24, '', { r: 0.06, fill: K.lavL }); c.t('Alternate path', 4.95, 6.52, 1.3, 0.24, { size: 11, color: K.mute, valign: 'middle' });
    c.shape('diamond', 6.6, 6.5, 0.45, 0.28, { fill: K.white, line: K.ink, lw: 1.25 }); c.t('Decision', 7.15, 6.52, 1, 0.24, { size: 11, color: K.mute, valign: 'middle' });
  }

  // ------------------------------------------------------------ 27 UX RESEARCH METHODS
  {
    const s = mk(pres, { sec: 'u3', tone: 'dark', eyebrow: 'UX RESEARCH METHODS', title: ['Choose the method that', 'answers your question.'] });
    const c = S(s);
    const qw = 2.72, qh = 1.7, qx = G.x, qy = 3.0;
    c.t('ATTITUDINAL', qx, 2.5, qw, 0.22, { size: 11, bold: true, color: K.lav, cs: 1, align: 'center' }); c.t('what people say', qx, 2.72, qw, 0.22, { size: 11, color: DM, align: 'center' }); c.t('BEHAVIOURAL', qx + qw + 0.2, 2.5, qw, 0.22, { size: 11, bold: true, color: K.lav, cs: 1, align: 'center' }); c.t('what people do', qx + qw + 0.2, 2.72, qw, 0.22, { size: 11, color: DM, align: 'center' });
    for (let i = 0; i < 4; i++) tile(c, qx + (i % 2) * (qw + 0.2), qy + Math.floor(i / 2) * (qh + 0.2), qw, qh, 'dark', { r: 0.24 });
    c.t('QUALITATIVE', qx + 0.22, qy + 0.14, 2, 0.2, { size: 9, bold: true, color: DM, cs: 1 }); c.t('QUANTITATIVE', qx + 0.22, qy + qh + 0.34, 2, 0.2, { size: 9, bold: true, color: DM, cs: 1 });
    [[0, 0, 'Interviews', 0.25, 0.5], [0, 0, 'Focus groups', 0.5, 1.05], [1, 0, 'Usability tests', 0.2, 0.5], [1, 0, 'Field observation', 0.4, 1.05], [0, 1, 'Surveys', 0.8, 0.8], [1, 1, 'Analytics, A/B', 0.5, 0.8]].forEach((ch) => { const w2 = ch[2].length * 0.088 + 0.38; pill(c, qx + ch[0] * (qw + 0.2) + ch[3], qy + ch[1] * (qh + 0.2) + ch[4], w2, 0.38, ch[2], { fill: ch[1] ? K.blue : K.lav, color: ch[1] ? K.white : K.ink, size: 12 }); });
    const lm = [['Interviews', 'Qual', 'Why people act as they do.'], ['Surveys', 'Quant', 'What many people think.'], ['Observation', 'Qual', 'What people really do.'], ['Usability studies', 'Both', 'Where a design fails.'], ['Card sort, diary, analytics', 'Mixed', 'Grouping, habits, usage.']];
    lm.forEach((m, i) => {
      const y = G.y + i * 0.8, x = 7.0, w = 5.433;
      tile(c, x, y, w, 0.7, 'dark', { r: 0.2 });
      c.t(m[0], x + 0.25, y + 0.06, 3.6, 0.32, { size: 15, bold: true, color: K.paper }); c.t(m[2], x + 0.25, y + 0.38, 4, 0.26, { size: 12.5, color: DM });
      pill(c, x + w - 1.05, y + 0.2, 0.8, 0.3, m[1], { line: K.lav, color: K.lav, size: 10.5 });
    });
  }

  // ------------------------------------------------------------ 28 EMPATHY TOOLS
  {
    const s = mk(pres, { sec: 'u3', eyebrow: 'EMPATHY TOOLS', title: ['What people say, think,', 'do and feel.'] });
    const c = S(s);
    const qw = 2.75, qh = 1.85, g = 0.25;
    [['SAYS', ['“I never know which events are for me.”'], 0, 0], ['THINKS', ['Will I know anyone there?'], 1, 0], ['DOES', ['Asks friends in the group chat'], 0, 1], ['FEELS', ['Anxious about missing out'], 1, 1]].forEach((it) => {
      const x = G.x + it[2] * (qw + g), y = G.y + it[3] * (qh + g);
      tile(c, x, y, qw, qh, 'light', { fill: (it[2] + it[3]) % 2 === 0 ? K.lavL : undefined });
      c.t(it[0], x + 0.3, y + 0.25, 2, 0.25, { size: 11, bold: true, color: K.blueD, cs: 2 }); c.t(it[1][0], x + 0.3, y + 0.75, qw - 0.6, 0.9, { size: 15, bold: true, color: K.ink, ls: 1.08, italic: it[0] === 'SAYS' });
    });
    c.ell(G.x + qw + g / 2, G.y + qh + g / 2, 0.42, { fill: K.ink }); c.t('Aisha', G.x + qw + g / 2 - 0.42, G.y + qh + g / 2 - 0.15, 0.84, 0.3, { size: 13, bold: true, color: K.white, align: 'center', valign: 'middle' });
    c.t('Hypothesis to validate with research', G.x, 6.62, 5.6, 0.22, { size: 10.5, color: K.mute });
    const rx = 7.3, rw = 5.133;
    c.t('INTERVIEW LIKE A DESIGNER', rx, G.y, 5, 0.25, { size: 11, bold: true, color: K.blueD, cs: 2 });
    tile(c, rx, G.y + 0.4, rw, 0.62, 'light', { r: 0.2 }); c.icon('FiX', rx + 0.3, G.y + 0.71, 0.22, 'red'); c.t('Do you like events?', rx + 0.65, G.y + 0.4, rw - 0.9, 0.62, { size: 15, color: K.mute, valign: 'middle' });
    c.rect(rx, G.y + 1.15, rw, 0.9, { fill: K.blueD, r: 0.2 }); c.icon('FiCheck', rx + 0.3, G.y + 1.6, 0.22, 'white'); c.t('Tell me about the last event you went to.', rx + 0.65, G.y + 1.15, rw - 0.9, 0.9, { size: 15.5, bold: true, color: K.white, valign: 'middle', ls: 1.05 });
    [['FiMessageCircle', 'Ask “why?”', 'Keep going until you find the real reason.'], ['FiEye', 'Watch, don’t only ask', 'Observe what people actually do.']].forEach((t, i) => {
      const y = G.y + 2.4 + i * 0.85; iconTile(c, rx, y, 0.56, t[0], K.ink); c.t(t[1], rx + 0.78, y - 0.02, rw - 0.8, 0.3, { size: 15.5, bold: true, color: K.ink }); c.t(t[2], rx + 0.78, y + 0.3, rw - 0.8, 0.28, { size: 12.5, color: K.mute });
    });
  }

  // ------------------------------------------------------------ 29 SEGMENTATION AND PERSONAS
  {
    const s = mk(pres, { sec: 'u3', tone: 'dark', eyebrow: 'USER SEGMENTATION AND PERSONAS', title: ['From groups of users', 'to one clear persona.'] });
    const c = S(s);
    [['High engagement', '4 or more events last semester', K.blueD, K.white, 'DDE4FF'], ['Moderate engagement', '1 to 3 events', K.lav, K.ink, '3B3566'], ['Low engagement', 'No events yet', null, K.paper, DM]].forEach((sg, i) => {
      const y = G.y + i * 1.4;
      if (sg[2]) c.rect(G.x, y, 3.6, 1.2, { fill: sg[2], r: 0.26 }); else tile(c, G.x, y, 3.6, 1.2, 'dark', { r: 0.26 });
      c.t(sg[0], G.x + 0.3, y + 0.25, 3.1, 0.35, { size: 18, bold: true, color: sg[3] }); c.t(sg[1], G.x + 0.3, y + 0.66, 3.1, 0.3, { size: 13.5, color: sg[4] });
    });
    const px = 4.85, pw = 12.433 - px;
    c.rect(px, G.y, pw, G.h, { fill: K.paper, r: 0.3, shadow: { o: 0.3, b: 30, d: 8, a: 90 } });
    c.ell(px + 0.75, G.y + 0.75, 0.4, { fill: K.lav }); c.t('A', px + 0.35, G.y + 0.35, 0.8, 0.8, { size: 24, bold: true, color: K.ink, align: 'center', valign: 'middle' });
    c.t('Aisha Rahman', px + 1.35, G.y + 0.3, 3.6, 0.4, { size: 22, bold: true, color: K.ink }); c.t('20  ·  Year 2  ·  Visual Communication', px + 1.35, G.y + 0.72, 4.6, 0.3, { size: 13, color: K.mute });
    pill(c, px + 1.35, G.y + 1.08, 2.0, 0.3, 'Moderate engagement', { fill: K.lav, color: K.ink, size: 11 }); pill(c, px + pw - 2.45, G.y + 0.3, 2.15, 0.3, 'FICTIONAL EXAMPLE', { line: K.red, color: K.red, size: 11, cs: 0.5 });
    [['GOALS', ['Join events that help her portfolio', 'Register between classes']], ['FRUSTRATIONS', ['Events announced in many places', 'Long forms, repeated sign-ins']], ['BEHAVIOURS', ['Checks her phone between lectures', 'Asks friends before deciding']]].forEach((b, i) => {
      const x = px + 0.35 + i * 2.38;
      c.t(b[0], x, G.y + 1.7, 2.2, 0.25, { size: 10, bold: true, color: K.blueD, cs: 1.5 });
      b[1].forEach((t, j) => { c.ell(x + 0.05, G.y + 2.12 + j * 0.55, 0.04, { fill: K.blueD }); c.t(t, x + 0.18, G.y + 1.98 + j * 0.55, 2.0, 0.5, { size: 12.5, color: K.ink, ls: 1.0 }); });
    });
    c.rect(px + 0.35, G.y + 3.2, pw - 0.7, 0.55, { fill: K.lavL, r: 0.16 }); c.t('“If it takes more than a minute, I will just ask a friend.”  (hypothesis)', px + 0.55, G.y + 3.2, pw - 1.1, 0.55, { size: 12.5, italic: true, color: K.ink, valign: 'middle' });
  }

  // ------------------------------------------------------------ 30 USABILITY, HEURISTIC, FIELD
  {
    const s = mk(pres, { sec: 'u3', eyebrow: 'USABILITY, HEURISTIC ANALYSIS AND FIELD TESTING', title: ['Three ways to find', 'usability problems.'] });
    const c = S(s);
    const w = G.col(4), h = 2.7;
    [['FiUsers', 'Usability testing', [['WHO', 'Real users'], ['WHERE', 'Lab or remote'], ['OUTPUT', 'Success, time, errors']]], ['FiClipboard', 'Heuristic evaluation', [['WHO', 'Experts'], ['AGAINST', 'Nielsen’s ten heuristics'], ['OUTPUT', 'Issues with severity']]], ['FiMapPin', 'Field testing', [['WHO', 'Real users, real life'], ['WHERE', 'Their own context'], ['OUTPUT', 'Interruptions, workarounds']]]].forEach((cl, i) => {
      const x = G.x + i * (w + G.gap);
      tile(c, x, G.y, w, h, 'light'); iconTile(c, x + 0.3, G.y + 0.28, 0.54, cl[0], [K.blueD, K.ink, K.blue][i]); c.t(cl[1], x + 1.0, G.y + 0.28, w - 1.2, 0.54, { size: 17, bold: true, color: K.ink, valign: 'middle' });
      cl[2].forEach((r, j) => { const yy = G.y + 1.15 + j * 0.5; c.t(r[0], x + 0.3, yy, 0.95, 0.4, { size: 9.5, bold: true, color: K.blueD, cs: 1, valign: 'middle' }); c.t(r[1], x + 1.25, yy, w - 1.5, 0.4, { size: 13.5, color: K.ink, valign: 'middle' }); });
    });
    c.t("NIELSEN'S TEN USABILITY HEURISTICS", G.x, 5.5, 6, 0.22, { size: 10.5, bold: true, color: K.blueD, cs: 1.5 });
    ['Visibility of system status', 'Match with the real world', 'User control and freedom', 'Consistency and standards', 'Error prevention', 'Recognition over recall', 'Flexibility and efficiency', 'Aesthetic, minimal design', 'Help users fix errors', 'Help and documentation'].forEach((t, i) => {
      const cw2 = (G.w - 4 * 0.12) / 5, x = G.x + (i % 5) * (cw2 + 0.12), y = 5.82 + Math.floor(i / 5) * 0.46;
      c.box(x, y, cw2, 0.38, t, { r: 0.19, fill: K.white, color: K.ink, size: 11, bold: true });
    });
  }

  // ------------------------------------------------------------ 31 UNIT 3 ASSIGNMENT
  assign(pres, {
    sec: 'u3', eyebrow: 'UNIT 3  ·  ASSIGNMENT', title: ['Research real users.', 'Build a persona.'], num: '03',
    tag: 'Plan, run and analyse your own research. Evidence first.', think: 'Write segment criteria before you recruit: high, moderate, low.',
    steps: [['Create a user research plan'], ['Recruit respondents'], ['Prepare questions and task scenarios'], ['Record the answers'], ['Segment: high, moderate, low, with explicit criteria'], ['Develop a persona from the findings']],
  });
};
