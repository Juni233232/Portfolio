// Slides 01-13 (Apple-style redesign): Introduction + Unit 1
const L = require('./lib');
const { K, S, phone, gatherHome, gatherDetail, gatherRegister, browser } = L;
const { G, mk, tile, iconTile, pill } = require('./kit');
const assign = require('./assign2');

const DM = 'A9ACB4'; // muted text on dark

module.exports = function (pres) {
  // ------------------------------------------------------------ 01 COVER
  {
    const s = mk(pres, { sec: 'intro', cover: true, eyebrow: 'SVCB3003  ·  UI & UX DESIGN', title: 'UI/UX Design' });
    const c = S(s);
    c.t('Understanding the Experience', 0.9, 2.55, 11.53, 0.7, { size: 30, bold: true, color: K.lav, align: 'center' });
    const p = phone(s, 2.35, 3.55, 3.95);
    gatherHome(p, false);
    const b = browser(s, 5.05, 3.95, 6.0, 600, { dark: false });
    b.rect(0, 0, 1000, 54, { fill: 'FFFFFF' });
    b.rect(28, 16, 22, 22, { fill: K.blue, r: 7 }); b.t('Gather', 58, 14, 120, 26, { size: 16, bold: true, color: K.ink, valign: 'middle' });
    ['Events', 'Clubs', 'My tickets', 'Help'].forEach((tx, i) => b.t(tx, 420 + i * 82, 14, 80, 26, { size: 11, color: i === 0 ? K.ink : '6B6E78', bold: i === 0, valign: 'middle' }));
    b.pill(850, 14, 70, 26, 'Sign in', { fill: K.blue, color: K.white, size: 10 }); b.ell(956, 27, 13, { fill: K.lav });
    b.t('Find your next campus event', 40, 84, 700, 44, { size: 32, bold: true, color: K.ink });
    b.t('Talks, workshops and socials from every faculty.', 40, 136, 700, 22, { size: 14, color: '6B6E78' });
    b.rect(40, 176, 520, 42, { fill: 'EEEDF3', r: 21 }); b.t('Search events, clubs, talks', 68, 176, 400, 42, { size: 12, color: '6B6E78', valign: 'middle' });
    [[K.blue, K.lav], [K.lav, K.blue], [K.ink, K.lav]].forEach((cl, i) => { const x = 40 + i * 316; b.rect(x, 250, 296, 380, { fill: cl[0], r: 22 }); b.ell(x + 236, 312, 42, { fill: cl[1], tr: 45 }); });
  }

  // ------------------------------------------------------------ 02 WHAT WILL YOU LEARN
  {
    const s = mk(pres, { sec: 'intro', eyebrow: 'WHAT WILL YOU LEARN?', title: ['By the end,', 'you will build real experiences.'] });
    const c = S(s);
    const outs = [
      ['FiBookOpen', 'Explain what UX and UI are, and why both matter', 'Unit 1'],
      ['FiEye', 'Apply UX laws and accessibility practice', 'Units 1–2'],
      ['FiCompass', 'Plan with design thinking and sprints', 'Unit 2'],
      ['FiUsers', 'Research users and build personas', 'Unit 3'],
      ['FiLayers', 'Use hierarchy, Gestalt, type and colour', 'Unit 4'],
      ['FiSmartphone', 'Create mobile and web wireframes and working prototypes', 'Units 4–5'],
    ];
    const w = G.col(4), h = (G.h - G.gap) / 2;
    outs.forEach((o, i) => {
      const x = G.x + (i % 3) * (w + G.gap), y = G.y + Math.floor(i / 3) * (h + G.gap), hero = i === 5;
      tile(c, x, y, w, h, 'light', { fill: hero ? K.blueD : undefined });
      iconTile(c, x + 0.32, y + 0.3, 0.62, o[0], hero ? 'FFFFFF' : [K.blueD, K.ink, K.blue, K.ink, K.blueD][i], hero ? 'blueD' : 'white');
      c.t(o[2].toUpperCase(), x + w - 2.3, y + 0.42, 1.98, 0.3, { size: 11, bold: true, color: hero ? K.lav : K.mute, cs: 1.5, align: 'right' });
      c.t(o[1], x + 0.32, y + 0.96, w - 0.55, 0.8, { size: 15.5, bold: true, color: hero ? K.white : K.ink, ls: 1.05 });
    });
  }

  // ------------------------------------------------------------ 03 DESIGN IS EVERYWHERE
  {
    const s = mk(pres, { sec: 'intro', tone: 'dark', eyebrow: 'DESIGN IS EVERYWHERE', title: ['Good design is invisible.', 'Bad design is a mystery.'] });
    const c = S(s);
    const w = G.col(3), h = 3.3;
    const cards = [['The door that lies', 'A pull handle with a push sign.'], ['Which knob?', 'Controls do not map to burners.'], ['Is it on or off?', 'State, or the action it will take?'], ['“Invalid input”', 'What was invalid? How to fix it?']];
    cards.forEach((cd, i) => {
      const x = G.x + i * (w + G.gap), y = G.y;
      tile(c, x, y, w, h, 'dark');
      const d = c.sub(x + (w - 2.85 * 0.9) / 2, y + 0.2, 0.9), ox = 1.425, oy = 1.1;
      if (i === 0) {
        d.rect(ox - 0.55, oy - 0.8, 1.1, 1.75, { fill: K.paper2, r: 0.05 }); d.rect(ox - 0.42, oy - 0.68, 0.84, 1.5, { fill: 'D9D7CE', r: 0.04 });
        d.rect(ox + 0.18, oy - 0.2, 0.09, 0.62, { fill: K.ink3, r: 0.04 }); d.box(ox - 0.36, oy - 0.56, 0.58, 0.26, 'PUSH', { fill: K.ink, color: K.paper, size: 10, bold: true, r: 0.04 });
        d.line(ox + 0.85, oy - 0.1, ox + 0.45, oy - 0.1, { color: K.lav, w: 1.75, arrow: true });
      } else if (i === 1) {
        [[-0.42, -0.5], [0.42, -0.5], [-0.42, 0.18], [0.42, 0.18]].forEach((p) => { d.ell(ox + p[0], oy + p[1] + 0.2, 0.3, { fill: K.ink3, line: K.grey, lw: 1 }); d.ell(ox + p[0], oy + p[1] + 0.2, 0.14, { fill: K.ink2 }); });
        for (let j = 0; j < 4; j++) { d.ell(ox - 0.95 + j * 0.63, oy + 0.9, 0.14, { fill: K.paper }); d.line(ox - 0.95 + j * 0.63, oy + 0.9, ox - 0.95 + j * 0.63, oy + 0.82, { color: K.ink, w: 2 }); }
        d.t('?', ox - 0.2, oy - 0.45, 0.4, 0.5, { size: 28, bold: true, color: K.lav, align: 'center' });
      } else if (i === 2) {
        d.rect(ox - 0.62, oy - 0.5, 1.24, 0.58, { fill: K.blue, r: 0.29 }); d.ell(ox - 0.33, oy - 0.21, 0.23, { fill: K.white });
        d.t('Dark mode', ox - 0.8, oy + 0.18, 1.6, 0.28, { size: 13, color: K.paper, align: 'center' }); d.t('Is that ON?', ox - 0.8, oy + 0.5, 1.6, 0.28, { size: 13, color: K.lav, bold: true, align: 'center' });
      } else {
        d.t('Email', ox - 1.05, oy - 0.7, 1.5, 0.22, { size: 11, color: K.grey });
        d.rect(ox - 1.05, oy - 0.45, 2.1, 0.5, { fill: K.ink3, line: K.red, lw: 1.5, r: 0.1 }); d.t('aisha@uni', ox - 0.92, oy - 0.45, 1.8, 0.5, { size: 13, color: K.paper, valign: 'middle' });
        d.t('Invalid input', ox - 1.05, oy + 0.14, 2.1, 0.28, { size: 13, bold: true, color: K.red }); d.t('No reason. No fix.', ox - 1.05, oy + 0.45, 2.1, 0.26, { size: 12, color: K.grey });
      }
      c.t(cd[0], x + 0.3, y + 2.2, w - 0.6, 0.32, { size: 17, bold: true, color: K.paper }); c.t(cd[1], x + 0.3, y + 2.57, w - 0.6, 0.55, { size: 13, color: DM, ls: 1.05 });
    });
    const px = 2.2, pw = 8.93;
    pill(c, px, 6.1, pw, 0.5, '', { fill: 'FFFFFF', tr: 90, line: 'FFFFFF', ltr: 85, lw: 0.75 });
    c.t([{ text: 'Pause and reflect   ', options: { bold: true, color: K.lav } }, { text: 'What object or app confused you this week?', options: { color: K.paper } }], px, 6.1, pw, 0.5, { size: 15, align: 'center', valign: 'middle' });
  }

  // ------------------------------------------------------------ 04 LEARNING JOURNEY
  {
    const s = mk(pres, { sec: 'intro', eyebrow: 'THE LEARNING JOURNEY', title: ['Five units.', 'One continuous process.'] });
    const c = S(s);
    const units = [['UNIT 1', 'Understand', 'Introduction of UX/UI Design', 'Audit an existing app', 1.75, K.lavL, K.ink], ['UNIT 2', 'Plan', 'A Strategy Plan', 'Find gaps, plan solutions', 2.2, K.lav, K.ink], ['UNIT 3', 'Research', 'Applied Design Fundamentals', 'Research and persona', 2.65, '9A92FF', K.ink], ['UNIT 4', 'Design', 'Emphasis in UX Design', 'Flows and wireframes', 3.1, K.blueD, K.white], ['UNIT 5', 'Test', 'User Testing', 'Prototype, test, revise', 3.55, '1F38B0', K.white]];
    const w = 2.1, gap = (G.w - 5 * w) / 4, base = 6.55;
    units.forEach((u, i) => {
      const x = G.x + i * (w + gap), h = u[4], y = base - h;
      c.rect(x, y, w, h, { fill: u[5], r: 0.3, shadow: { o: 0.1, b: 24, d: 7, a: 90 } });
      c.t(u[0], x + 0.26, y + 0.26, 1.6, 0.25, { size: 11, bold: true, color: u[6], cs: 2 });
      c.t(u[1], x + 0.26, y + 0.52, w - 0.3, 0.45, { size: 20, bold: true, color: u[6] });
      c.t(u[2], x + 0.26, y + 1.0, w - 0.45, 0.6, { size: 12.5, color: u[6], ls: 1.0 });
      if (h > 2.3) c.t(u[3], x + 0.26, base - 0.62, w - 0.45, 0.5, { size: 12.5, bold: true, color: u[6], ls: 1.0, valign: 'bottom' });
    });
    c.t('Every test sends you back to learn more.', G.x, 2.62, 5.2, 0.3, { size: 14, color: K.mute });
  }

  // ------------------------------------------------------------ 05 UX VS UI
  {
    const s = mk(pres, { sec: 'u1', tone: 'dark', eyebrow: 'UNIT 1  ·  UX VS UI', title: ['Same product.', 'Two different questions.'] });
    const c = S(s);
    const p = phone(s, 5.64, G.y, 4.0, { frame: K.ink3 });
    gatherRegister(p, false);
    c.t('UX', G.x, 2.55, 0.7, 0.4, { size: 24, bold: true, color: K.blue }); c.t('User experience', G.x + 0.75, 2.55, 3, 0.4, { size: 14, color: DM, valign: 'middle' });
    const ux = [['Can I finish in two steps?', 20, 97], ['Does it save me effort?', 16, 178], ['Do I know where my data goes?', 16, 444]];
    ux.forEach((u) => { const ty = p.Y(u[2]), tx = p.X(u[1]); c.t(u[0], G.x, ty - 0.2, 3.5, 0.4, { size: 16, bold: true, color: K.white, valign: 'middle' }); c.line(4.55, ty, tx, ty, { color: K.blue, w: 1.25 }); c.ell(tx, ty, 0.06, { fill: K.blue }); });
    c.t('UI', 12.433 - 0.7, 2.55, 0.7, 0.4, { size: 24, bold: true, color: K.lav, align: 'right' }); c.t('User interface', 12.433 - 3.75, 2.55, 3, 0.4, { size: 14, color: DM, valign: 'middle', align: 'right' });
    const ui = [['Rounded fields, clear borders', 284, 244], ['Familiar checkbox and labels', 210, 358], ['One strong action colour', 284, 523]];
    ui.forEach((u) => { const ty = p.Y(u[2]), tx = p.X(u[1]); c.t(u[0], 9.0, ty - 0.2, 3.43, 0.4, { size: 16, bold: true, color: K.white, valign: 'middle', align: 'right' }); c.line(tx, ty, 8.85, ty, { color: K.lav, w: 1.25 }); c.ell(tx, ty, 0.06, { fill: K.lav }); });
  }

  // ------------------------------------------------------------ 06 WHY UI/UX MATTERS
  {
    const s = mk(pres, { sec: 'u1', eyebrow: 'WHY UI/UX MATTERS', title: ['Design decides', 'whether people succeed.'] });
    const c = S(s);
    const rows = [['FiUsers', 'For people', 'Saves time, effort and keeps people safe.', K.blueD], ['FiBriefcase', 'For organisations', 'Builds trust, cuts support cost, earns loyalty.', K.ink], ['FiGlobe', 'For society', 'Decides who can access a service and take part.', K.blue]];
    rows.forEach((r, i) => {
      const y = G.y + 0.1 + i * 1.35;
      iconTile(c, G.x, y, 0.8, r[0], r[3]);
      c.t(r[1], G.x + 1.1, y - 0.02, 4.2, 0.4, { size: 21, bold: true, color: K.ink }); c.t(r[2], G.x + 1.1, y + 0.4, 4.0, 0.7, { size: 14.5, color: K.mute, ls: 1.05 });
    });
    const ph = 3.35, pw = ph * 316 / 616, xs = [6.55, 8.6, 10.65];
    const caps = [['Clarity', 'Guidance at a glance'], ['Reassurance', 'Status you can trust'], ['Confidence', 'Total and exit are clear']];
    xs.forEach((x, i) => {
      const p = phone(s, x, G.y, ph);
      if (i === 0) {
        p.rect(0, 0, 300, 600, { fill: 'E9EFE6', r: 32 }); p.rect(0, 150, 300, 40, { fill: 'FFFFFF' }); p.rect(120, 110, 36, 490, { fill: 'FFFFFF' }); p.rect(0, 380, 300, 30, { fill: 'FFFFFF' });
        p.rect(170, 220, 100, 110, { fill: 'D7E5D0', r: 10 }); p.rect(20, 220, 80, 120, { fill: 'D7E5D0', r: 10 });
        p.path([[138, 570], [138, 395], [225, 395], [225, 170], [138, 170], [138, 112]], { color: K.blue, w: 5 });
        p.rect(14, 36, 272, 74, { fill: K.ink, r: 16 }); p.icon('FiArrowLeft', 44, 73, 28, 'white');
        p.t('200 m', 76, 46, 150, 26, { size: 20, bold: true, color: K.white }); p.t('Turn left onto Campus Rd', 76, 76, 200, 28, { size: 10.5, color: K.lav });
        p.rect(14, 520, 272, 62, { fill: K.white, r: 18, shadow: { o: 0.2, b: 8, d: 2 } }); p.t('12 min', 34, 530, 140, 28, { size: 20, bold: true, color: K.green }); p.t('arrive 9:41', 34, 558, 140, 16, { size: 10, color: K.mute });
      } else if (i === 1) {
        p.rect(0, 0, 300, 600, { fill: 'EFEAE2', r: 32 }); p.rect(0, 30, 300, 56, { fill: K.ink3 }); p.ell(30, 58, 14, { fill: K.lav }); p.t('Study group', 54, 40, 180, 36, { size: 14, bold: true, color: K.white, valign: 'middle' });
        [[40, 'Where is the event?', 0], [118, 'Hall B at 10', 1], [196, 'Registered ✓', 0], [274, 'See you there', 1]].forEach((m) => { const mine = m[2] === 1, w2 = 150, yy = 110 + (m[0] - 40) * 0.9; p.rect(mine ? 286 - w2 : 14, yy, w2, 48, { fill: mine ? 'DCF2D2' : K.white, r: 14 }); p.t(m[1], (mine ? 286 - w2 : 14) + 14, yy, w2 - 28, 48, { size: 11, color: K.ink, valign: 'middle' }); if (mine) p.t('✓✓', 258, yy + 30, 24, 14, { size: 9, bold: true, color: K.blue, align: 'right' }); });
        p.rect(14, 540, 272, 38, { fill: K.white, r: 19 }); p.t('Message', 34, 540, 200, 38, { size: 11, color: K.grey, valign: 'middle' });
      } else {
        p.t('Review order', 20, 44, 260, 26, { size: 18, bold: true, color: K.ink });
        [['Workshop pass', '$12.00'], ['Booking fee', '$0.00']].forEach((r, j) => { p.rect(16, 94 + j * 60, 268, 52, { fill: K.paper, r: 12 }); p.t(r[0], 30, 94 + j * 60, 160, 52, { size: 12, color: K.ink, valign: 'middle' }); p.t(r[1], 190, 94 + j * 60, 80, 52, { size: 12, bold: true, color: K.ink, align: 'right', valign: 'middle' }); });
        p.line(20, 232, 280, 232, { color: K.line, w: 1 }); p.t('Total', 30, 246, 120, 24, { size: 13, color: K.mute }); p.t('$12.00', 150, 240, 120, 32, { size: 24, bold: true, color: K.ink, align: 'right' });
        p.box(16, 470, 268, 50, 'Pay $12.00', { r: 25, fill: K.blueD, color: K.white, size: 15, bold: true }); p.t('Back to edit order', 16, 532, 268, 20, { size: 11, color: K.blueD, bold: true, align: 'center' });
      }
      c.t(caps[i][0], x, G.y + ph + 0.15, pw + 0.3, 0.3, { size: 14, bold: true, color: K.ink }); c.t(caps[i][1], x, G.y + ph + 0.45, pw + 0.35, 0.3, { size: 12, color: K.mute });
    });
    c.t('Simplified original schematics for teaching, not official screenshots.', 6.55, 6.68, 5.9, 0.22, { size: 10, color: K.mute });
  }

  // ------------------------------------------------------------ 07 FUNDAMENTALS
  {
    const s = mk(pres, { sec: 'u1', eyebrow: 'FUNDAMENTALS OF USER EXPERIENCE', title: ['Five qualities', 'of a good experience.'] });
    const c = S(s);
    const q = [['FiTarget', 'Usability', 'Can people finish tasks without struggle?', 'Register in two steps'], ['FiZap', 'Usefulness', 'Does it solve a real need?', 'Students find events they care about'], ['FiGlobe', 'Accessibility', 'Can everyone use it, in any situation?', 'Works with screen readers and large text'], ['FiEye', 'Clarity', 'Is the next step obvious?', 'One clear button per screen'], ['FiSmile', 'Satisfaction', 'Does it feel good to use?', 'Instant QR ticket, no guesswork']];
    const w = 2.1, gap = (G.w - 5 * w) / 4;
    q.forEach((it, i) => {
      const x = G.x + i * (w + gap);
      tile(c, x, G.y, w, G.h, 'light');
      iconTile(c, x + 0.28, G.y + 0.3, 0.66, it[0], [K.blueD, K.ink, K.blue, K.ink, K.blueD][i]);
      c.t(it[1], x + 0.28, G.y + 1.15, w - 0.4, 0.35, { size: 17, bold: true, color: K.ink }); c.t(it[2], x + 0.28, G.y + 1.58, w - 0.5, 0.95, { size: 14, color: K.mute, ls: 1.05 });
      c.t('IN GATHER', x + 0.28, G.y + 2.75, w - 0.4, 0.22, { size: 9.5, bold: true, color: K.blueD, cs: 1.5 }); c.t(it[3], x + 0.28, G.y + 3.02, w - 0.5, 0.8, { size: 13.5, bold: true, color: K.ink, ls: 1.05 });
    });
  }

  // ------------------------------------------------------------ 08 FIVE PLANES
  {
    const s = mk(pres, { sec: 'u1', tone: 'dark', eyebrow: 'THE FIVE PLANES OF UX', title: ['Five planes.', 'Abstract to concrete.'] });
    const c = S(s);
    const planes = [['Surface', 'Visual design', 'How it looks and feels. Gather: colour, type, imagery.', K.lav], ['Skeleton', 'Interface, navigation and information design', 'Where controls sit. Gather: Register button, fields, tabs.', 'A9A2FF'], ['Structure', 'Interaction design and information architecture', 'How it fits together. Gather: Browse, Details, Register, Ticket.', '8197FF'], ['Scope', 'Functional specs and content requirements', 'What is included. Gather: search, filters, QR ticket.', '5E7FFF'], ['Strategy', 'User needs and product objectives', 'Why we build it. Gather: help students find events.', K.blue]];
    planes.forEach((p, i) => {
      const y = G.y + 0.05 + i * 0.8;
      c.shape('parallelogram', G.x, y, 4.7, 0.62, { fill: p[3] });
      c.t(p[0], G.x + 0.6, y, 3.6, 0.62, { size: 21, bold: true, color: i < 3 ? K.ink : K.white, valign: 'middle' });
      c.t(p[1], 6.3, y - 0.04, 6.1, 0.34, { size: 16, bold: true, color: K.white, valign: 'middle' }); c.t(p[2], 6.3, y + 0.3, 6.1, 0.32, { size: 13, color: DM, valign: 'top' });
    });
  }

  // ------------------------------------------------------------ 09 LAWS OF UX
  {
    const s = mk(pres, { sec: 'u1', eyebrow: 'LAWS OF UX', title: ['Psychology', 'you can design with.'] });
    const c = S(s);
    const w = G.col(4), h = (G.h - G.gap) / 2;
    const laws = [['Jakob’s Law', 'Users expect the familiar.'], ['Fitts’s Law', 'Bigger, closer is faster.'], ['Hick’s Law', 'More choices, slower decisions.'], ['Miller’s Law', 'Chunk information into groups.'], ['Doherty Threshold', 'Respond within about 400 ms.'], ['Peak–End Rule', 'People recall the peak and end.']];
    laws.forEach((lw, i) => {
      const x = G.x + (i % 3) * (w + G.gap), y = G.y + Math.floor(i / 3) * (h + G.gap);
      tile(c, x, y, w, h, 'light');
      const d = c.sub(x + (w - 3.44 * 0.82) / 2, y + 0.24, 0.82);
      if (i === 0) { [0, 1].forEach((k) => { const bx = 0.2 + k * 1.0; d.rect(bx, 0, 0.62, 1.0, { fill: K.paper, line: K.line, r: 0.07 }); d.rect(bx + 0.06, 0.08, 0.5, 0.1, { fill: k ? K.blue : K.grey, r: 0.05 }); d.bars(bx + 0.06, 0.3, 0.5, 3, { h: 0.05, gap: 0.12, fill: 'D5D3CB' }); d.rect(bx + 0.06, 0.86, 0.5, 0.1, { fill: k ? K.blue : K.grey, r: 0.05 }); }); d.t('=', 0.82, 0.3, 0.3, 0.4, { size: 20, bold: true, color: K.blueD, align: 'center', valign: 'middle' }); d.t('Same places', 2.2, 0.3, 1.3, 0.4, { size: 14, bold: true, color: K.blueD, valign: 'middle' }); }
      if (i === 1) { d.ell(0.15, 0.25, 0.09, { fill: K.ink }); d.ell(0.15, 0.78, 0.09, { fill: K.ink }); d.rect(0.65, 0.02, 1.1, 0.46, { fill: K.blue, r: 0.23 }); d.line(0.28, 0.25, 0.62, 0.25, { color: K.green, w: 1.5, arrow: true }); d.rect(2.9, 0.65, 0.35, 0.26, { fill: K.red, r: 0.13 }); d.line(0.28, 0.78, 2.87, 0.78, { color: K.red, w: 1.5, arrow: true, dash: 'dash' }); d.t('near + big', 1.9, 0.1, 1.5, 0.3, { size: 13, bold: true, color: K.green }); }
      if (i === 2) { [[2, 'Easy'], [8, 'Slower']].forEach((m, k) => { const bx = 0.2 + k * 1.75; d.rect(bx, 0, 1.3, 1.0, { fill: K.paper, line: K.line, r: 0.07 }); for (let j = 0; j < m[0]; j++) d.rect(bx + 0.1, 0.1 + j * (0.8 / m[0]), 1.1, 0.8 / m[0] - 0.05, { fill: k ? 'D5D3CB' : K.lav, r: 0.03 }); }); }
      if (i === 3) { d.t('0123456789', 0.1, -0.05, 3.4, 0.5, { size: 26, bold: true, color: K.grey, valign: 'middle' }); d.t('012 345 6789', 0.1, 0.5, 3.4, 0.5, { size: 26, bold: true, color: K.blueD, valign: 'middle' }); }
      if (i === 4) { d.rect(0, 0.3, 3.3, 0.24, { fill: K.paper2, r: 0.12 }); d.rect(0, 0.3, 1.6, 0.24, { fill: K.green, r: 0.12 }); d.rect(1.6, 0.3, 1.7, 0.24, { fill: K.amber, r: 0.12 }); d.t('instant', 0, 0.62, 1.4, 0.3, { size: 13, bold: true, color: K.green }); d.t('show progress', 1.6, 0.62, 1.8, 0.3, { size: 13, bold: true, color: '9A6A00' }); }
      if (i === 5) { const pts = [[0.1, 0.8], [0.7, 0.6], [1.2, 0.2], [1.8, 0.65], [2.4, 0.75], [3.1, 0.35]]; d.path(pts, { color: K.blueD, w: 2.5 }); [2, 5].forEach((k) => d.ell(pts[k][0], pts[k][1], 0.07, { fill: K.blue })); d.t('peak', 1.0, -0.05, 0.8, 0.25, { size: 13, bold: true, color: K.blueD }); d.t('end', 2.8, -0.02, 0.6, 0.25, { size: 13, bold: true, color: K.blueD }); }
      c.t(lw[0], x + 0.3, y + 1.12, w - 0.6, 0.32, { size: 17, bold: true, color: K.ink }); c.t(lw[1], x + 0.3, y + 1.45, w - 0.5, 0.3, { size: 12.5, color: K.mute });
    });
  }

  // ------------------------------------------------------------ 10 PDLC
  {
    const s = mk(pres, { sec: 'u1', eyebrow: 'PRODUCT DEVELOPMENT LIFE CYCLE', title: ['UX takes part', 'in every stage.'] });
    const c = S(s);
    const st = [['Discover', 'Interview and observe', 'Student interviews'], ['Define', 'Write personas and the problem', 'Persona and problem'], ['Design', 'Flows, wireframes, prototypes', 'Prototype'], ['Develop', 'Specs and design checks', 'Hand-off specs'], ['Test', 'Usability tests and triage', 'Test report'], ['Launch & learn', 'Read feedback, iterate', 'Usage data']];
    const w = (G.w - 5 * 0.2) / 6;
    st.forEach((t, i) => {
      const x = G.x + i * (w + 0.2);
      tile(c, x, G.y, w, G.h, 'light', { fill: i === 2 ? K.blueD : undefined });
      const dk = i === 2, fg = dk ? K.white : K.ink, mu = dk ? K.lavL : K.mute;
      c.t(String(i + 1).padStart(2, '0'), x + 0.25, G.y + 0.28, 1, 0.25, { size: 12, bold: true, color: dk ? K.lav : K.blueD });
      c.t(t[0], x + 0.25, G.y + 0.58, w - 0.4, 0.65, { size: 18, bold: true, color: fg, ls: 1.0 });
      c.t('UX DESIGN', x + 0.25, G.y + 1.5, w - 0.4, 0.22, { size: 9.5, bold: true, color: mu, cs: 1.5 }); c.t(t[1], x + 0.25, G.y + 1.78, w - 0.45, 1.0, { size: 14, bold: true, color: fg, ls: 1.05 });
      c.t('GATHER', x + 0.25, G.y + 3.0, w - 0.4, 0.22, { size: 9.5, bold: true, color: mu, cs: 1.5 }); c.t(t[2], x + 0.25, G.y + 3.27, w - 0.45, 0.6, { size: 13, color: dk ? K.white : K.blueD, bold: true, ls: 1.0 });
    });
  }

  // ------------------------------------------------------------ 11 DESIGNER'S ROLE
  {
    const s = mk(pres, { sec: 'u1', tone: 'dark', eyebrow: 'THE UX DESIGNER’S ROLE', title: ['Be deep in one thing.', 'Curious about many.'] });
    const c = S(s);
    const w = G.col(4), h = 2.7;
    const cols = [['Specialist', 'Deep expertise in one craft, such as research.'], ['Generalist', 'Broad skills across research, design and prototyping.'], ['T-shaped', 'Deep in one area, able to work across many.']];
    cols.forEach((cl, i) => {
      const x = G.x + i * (w + G.gap), cx = x + w / 2;
      tile(c, x, G.y, w, h, 'dark');
      if (i === 0) c.rect(cx - 0.17, G.y + 0.3, 0.34, 1.15, { fill: K.blue, r: 0.08 });
      if (i === 1) c.rect(cx - 1.1, G.y + 0.72, 2.2, 0.32, { fill: K.lav, r: 0.08 });
      if (i === 2) { c.rect(cx - 1.1, G.y + 0.3, 2.2, 0.32, { fill: K.lav, r: 0.08 }); c.rect(cx - 0.17, G.y + 0.3, 0.34, 1.15, { fill: K.blue, r: 0.08 }); }
      c.t(cl[0], x + 0.3, G.y + 1.65, w - 0.6, 0.38, { size: 20, bold: true, color: K.paper, align: 'center' }); c.t(cl[1], x + 0.4, G.y + 2.05, w - 0.8, 0.55, { size: 13.5, color: DM, align: 'center', ls: 1.05 });
    });
    c.t('ROLES YOU COULD GROW INTO', G.x, 5.62, 5, 0.25, { size: 11, bold: true, color: K.lav, cs: 2 });
    let rx = G.x; ['UX researcher', 'Interaction designer', 'UI designer', 'Information architect', 'Product designer'].forEach((r) => { const w2 = 0.5 + r.length * 0.098; pill(c, rx, 6.0, w2, 0.44, r, { fill: 'FFFFFF', tr: 90, line: 'FFFFFF', ltr: 80, color: K.paper, size: 13.5 }); rx += w2 + 0.15; });
  }

  // ------------------------------------------------------------ 12 GOOD UX IS GOOD BUSINESS
  {
    const s = mk(pres, { sec: 'u1', eyebrow: 'GOOD UX IS GOOD BUSINESS', title: ['Every point of friction', 'has a cost.'] });
    const c = S(s);
    const stages = [['Browse events', 4.4], ['View details', 3.8], ['Start the form', 3.2], ['Submit', 2.6], ['Attend', 2.0]], cx = G.x + 2.2;
    stages.forEach((st, i) => {
      const y = G.y + 0.05 + i * 0.74, w = st[1], nw = i < 4 ? stages[i + 1][1] : w - 0.5;
      c.poly([[cx - w / 2, y], [cx + w / 2, y], [cx + nw / 2, y + 0.64], [cx - nw / 2, y + 0.64]], { fill: ['1F38B0', K.blueD, '3A5CF0', '9A92FF', K.lav][i] });
      c.t(st[0], cx - w / 2, y, w, 0.64, { size: 15, bold: true, color: i < 3 ? K.white : K.ink, align: 'center', valign: 'middle' });
    });
    ['Hard to find events?', 'Unclear details?', 'Long, repetitive form?', 'No reminder or ticket?'].forEach((f, i) => { const y = G.y + 0.05 + (i + 1) * 0.74 - 0.05; c.ell(G.x + 4.85, y, 0.06, { fill: K.red }); c.t(f, G.x + 5.0, y - 0.17, 2.4, 0.34, { size: 13.5, bold: true, color: K.red, valign: 'middle' }); });
    c.t('Illustrative funnel shape, not real data', G.x, 6.4, 4.5, 0.25, { size: 10.5, color: K.mute });
    const m = [['FiTrendingUp', 'Engagement', 'Return visits, feature use'], ['FiCheck', 'Conversion', 'Completion rate, drop-off'], ['FiShield', 'Trust', 'Drop-off at sensitive steps'], ['FiHeart', 'Satisfaction', 'SUS, NPS, support tickets']];
    const mw = 1.8, mg = 0.2, mx = 8.65;
    m.forEach((it, i) => {
      const x = mx + (i % 2) * (mw + mg), y = G.y + Math.floor(i / 2) * (1.9 + mg);
      tile(c, x, y, mw, 1.9, 'light', { r: 0.26 });
      iconTile(c, x + 0.22, y + 0.24, 0.5, it[0], [K.blueD, K.ink, K.blue, K.ink][i]);
      c.t(it[1], x + 0.22, y + 0.9, mw - 0.3, 0.3, { size: 16, bold: true, color: K.ink }); c.t(it[2], x + 0.22, y + 1.22, mw - 0.35, 0.55, { size: 12, color: K.mute, ls: 1.0 });
    });
  }

  // ------------------------------------------------------------ 13 UNIT 1 ASSIGNMENT
  assign(pres, {
    sec: 'u1', eyebrow: 'UNIT 1  ·  ASSIGNMENT', title: ['Audit an app', 'you already use.'], num: '01',
    tag: 'Look closely at one existing product, as a designer would.', think: 'Back every judgement with evidence from the interface.',
    steps: [['Choose an existing application', 'Pick an app you can screenshot and use freely.'], ['Identify its key features', 'List what it lets people do, screen by screen.'], ['Describe the intended users', 'Who is it for? What goals and contexts?'], ['Infer the design intentions', 'What problem is each choice solving?'], ['Evaluate strengths and weaknesses', 'Support every judgement with evidence.']],
  });
};
