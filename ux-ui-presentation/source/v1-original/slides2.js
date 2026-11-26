// Slides 14-22: Unit 2 - A Strategy Plan
const L = require('./lib');
const { K, S, mkSlide, ratio } = L;
const assignSlide = require('./assign');

function tag(c, x, y, ok, r = 0.13) { c.ell(x, y, r, { fill: ok ? K.green : K.red }); c.icon(ok ? 'FiCheck' : 'FiX', x, y, r * 1.3, 'white'); }
function person(c, x, ground, bodyH, blockH, col) {
  if (blockH > 0) c.rect(x - 0.3, ground - blockH, 0.6, blockH, { fill: K.lav, r: 0.03 });
  c.rect(x - 0.17, ground - blockH - bodyH, 0.34, bodyH, { fill: col, r: 0.12 });
  c.ell(x, ground - blockH - bodyH - 0.17, 0.17, { fill: col });
}

module.exports = function (pres) {
  // ---------------------------------------------------------------- 14 DESIGN FOR EVERYONE
  {
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'dark', eyebrow: 'UNIT 2  ·  DESIGN FOR EVERYONE', title: 'Three ways to open the door',
      notes: `Universal, inclusive and equity-focused design are related but different, and students often mix them up.

Universal design aims for one design usable by as many people as possible without special adaptation. The Center for Universal Design at North Carolina State University published seven principles in 1997, such as equitable use, flexibility in use, and simple and intuitive use.

Inclusive design is a practice and a process. Microsoft's Inclusive Design toolkit frames three ideas: recognise exclusion, solve for one and extend to many, and learn from human diversity. The aim is multiple ways in, such as registering by app, QR code or at a desk.

Equity-focused design recognises that people start from different places. Equal access is not always fair, so we give more support where barriers are greater, for example a low-data mode for students with weak connections.

Ask: "Which of these would you choose first for Gather, and why?"`,
    });
    const c = S(s);
    const cols = [
      ['Universal design', 'One design that works for as many people as possible, without special adaptation. Seven principles from the Center for Universal Design.', 'Large tap targets and plain language for every student.'],
      ['Inclusive design', 'A practice: design with people who have diverse needs, recognise exclusion, and solve for one to extend to many.', 'Register by app, QR code or at the desk. Captions on every video.'],
      ['Equity-focused design', 'Provide more support where barriers are greater, so outcomes are fair, not just access identical.', 'Low-data mode and reserved places for students facing barriers.'],
    ];
    cols.forEach((cl, i) => {
      const x = 0.6 + i * 4.115, w = 3.9, y = 1.95, cx = x + w / 2;
      c.rect(x, y, w, 4.75, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.16 });
      if (i === 0) {
        const wy = y + 0.85;
        c.rect(x + 0.4, wy, cx - 0.8 - x - 0.4, 0.16, { fill: K.grey, r: 0.04 }); c.rect(cx + 0.8, wy, x + w - 0.4 - cx - 0.8, 0.16, { fill: K.grey, r: 0.04 });
        c.icon('FiStar', cx, wy - 0.35, 0.34, 'lav');
        for (let k = 0; k < 5; k++) { const dx = cx - 1.2 + k * 0.6; c.line(dx, y + 1.78, cx + (dx - cx) * 0.3, wy + 0.2, { color: K.lav, w: 1 }); c.ell(dx, y + 1.85, 0.12, { fill: K.paper }); }
      } else if (i === 1) {
        const wy = y + 0.85;
        [[x + 0.4, cx - 1.3], [cx - 0.7, cx - 0.3], [cx + 0.3, cx + 0.7], [cx + 1.3, x + w - 0.4]].forEach((sg) => c.rect(sg[0], wy, sg[1] - sg[0], 0.16, { fill: K.grey, r: 0.04 }));
        c.icon('FiStar', cx, wy - 0.35, 0.34, 'lav');
        [['App', -1.0], ['QR code', 0], ['Desk', 1.0]].forEach((p) => { c.line(cx + p[1], y + 1.78, cx + p[1], wy + 0.2, { color: K.lav, w: 1 }); c.ell(cx + p[1], y + 1.85, 0.12, { fill: K.paper }); c.t(p[0], cx + p[1] - 0.5, y + 2.03, 1.0, 0.2, { size: 10.5, bold: true, color: K.lav, align: 'center' }); });
      } else {
        const g = y + 2.0, goal = y + 0.62;
        c.line(x + 0.4, goal, x + w - 0.4, goal, { color: K.lav, w: 1.25, dash: 'dash' });
        c.t('same outcome', x + 0.4, goal - 0.3, 1.6, 0.22, { size: 10.5, bold: true, color: K.lav });
        c.line(x + 0.4, g, x + w - 0.4, g, { color: K.grey, w: 1.5 });
        person(c, cx - 1.1, g, 0.6, 0.5, K.paper); person(c, cx, g, 0.8, 0.3, K.paper); person(c, cx + 1.1, g, 1.1, 0, K.paper);
      }
      c.t(cl[0], x + 0.25, y + 2.4, w - 0.5, 0.4, { size: 20, bold: true, color: K.paper });
      c.t(cl[1], x + 0.25, y + 2.85, w - 0.5, 1.05, { size: 13, color: K.grey, ls: 1.05 });
      c.t('IN GATHER', x + 0.25, y + 3.95, 2, 0.2, { size: 9, bold: true, color: K.lav, cs: 2 });
      c.t(cl[2], x + 0.25, y + 4.18, w - 0.5, 0.5, { size: 12.5, bold: true, color: K.paper, ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 15 USER-CENTRED VS BUSINESS-CENTRED
  {
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'light', eyebrow: 'USER-CENTRED AND BUSINESS-CENTRED DESIGN', title: 'Great products balance two sets of needs',
      notes: `User-centred design starts from people: their goals, tasks, contexts and limitations. Business-centred thinking starts from the organisation: revenue, brand, risk, cost and strategy. Neither is wrong. Problems appear when one side dominates. A product that serves only business goals feels manipulative; one that ignores business realities may never be built or sustained.

The overlap is the sweet spot, where meeting user needs also creates organisational value. Christian Kraft's User Experience Innovation discusses how UX and business strategy can reinforce each other.

The sliders show three real trade-offs in Gather. Collecting more data helps reporting but slows sign-up. Sponsor visibility helps funding but can clutter the interface. More reminders may raise attendance but can annoy. Good designers do not pretend trade-offs do not exist; they make a decision, record the reasoning, and test it.

Discussion: whose needs does your favourite app serve first?`,
    });
    const c = S(s);
    c.ell(2.6, 4.3, 1.95, { fill: K.lav, tr: 25 }); c.ell(4.95, 4.3, 1.95, { fill: '9FB2FF', tr: 25 });
    c.t('User needs', 0.95, 3.0, 2.0, 0.35, { size: 16, bold: true, color: K.ink });
    c.t('Quick registration\nPrivacy and control\nClear information', 0.95, 3.4, 1.9, 1.3, { size: 12.5, color: K.ink, ls: 1.15 });
    c.t('Business goals', 5.05, 3.0, 2.0, 0.35, { size: 16, bold: true, color: K.ink });
    c.t('Participation data\nSponsor visibility\nLower admin cost', 5.05, 3.4, 1.9, 1.3, { size: 12.5, color: K.ink, ls: 1.15 });
    c.t('Sweet spot', 3.3, 3.95, 1.3, 0.3, { size: 12, bold: true, color: K.blueD, align: 'center' });
    c.t('Easy sign-up and accurate attendance', 3.3, 4.25, 1.3, 0.9, { size: 11.5, color: K.ink, align: 'center', ls: 1.0 });
    c.t('USER-CENTRED', 0.95, 6.35, 2.6, 0.22, { size: 9, bold: true, color: K.mute, cs: 2 }); c.t('BUSINESS-CENTRED', 4.6, 6.35, 2.6, 0.22, { size: 9, bold: true, color: K.mute, cs: 2, align: 'right' });
    c.t('TRADE-OFFS IN GATHER', 7.75, 1.98, 4.9, 0.25, { size: 10, bold: true, color: K.blueD, cs: 2 });
    const tr = [
      ['Collect more data', 'Faster sign-up', 0.72, 'Ask only for what the event needs.'],
      ['Sponsor visibility', 'Clean interface', 0.62, 'Show sponsors after registering, never as a blocker.'],
      ['Many reminders', 'Fewer interruptions', 0.45, 'Let each student choose their reminders.'],
    ];
    tr.forEach((t, i) => {
      const y = 2.4 + i * 1.5, x = 7.75, w = 4.98;
      c.t(t[0], x, y, 2.4, 0.3, { size: 12.5, bold: true, color: K.ink }); c.t(t[1], x + w - 2.4, y, 2.4, 0.3, { size: 12.5, bold: true, color: K.ink, align: 'right' });
      c.rect(x, y + 0.5, w, 0.07, { fill: K.line, r: 0.035 }); c.rect(x, y + 0.5, w * t[2], 0.07, { fill: K.blueD, r: 0.035 });
      c.ell(x + w * t[2], y + 0.535, 0.15, { fill: K.blueD, line: K.white, lw: 2 });
      c.t([{ text: 'Decision: ', options: { bold: true, color: K.blueD } }, { text: t[3], options: { color: K.ink } }], x, y + 0.82, w, 0.5, { size: 12.5, ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 16 ACCESSIBILITY IN UX
  {
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'light', eyebrow: 'ACCESSIBILITY IN UX', title: 'Anyone can be disabled by a design',
      notes: `Accessibility means designing so people with different abilities can perceive, understand, navigate and interact with a product. The key idea on this slide, from Microsoft's Inclusive Design toolkit, is that disability is not only permanent. It is a mismatch between a person and their environment.

Read across a row. Someone with one arm has a permanent touch limitation; someone with an arm injury has a temporary one; a person holding a baby has a situational one. The same solution, such as one-handed use, helps all three. This is why accessible design benefits everyone.

The bottom strip shows the four principles of the Web Content Accessibility Guidelines, WCAG: content must be Perceivable, Operable, Understandable and Robust. We apply them in the next slide.

Ask: "When was the last time you were temporarily or situationally limited when using your phone?"`,
    });
    const c = S(s);
    const colX = [2.0, 5.55, 9.1], cw = 3.5, y0 = 1.95;
    ['PERMANENT', 'TEMPORARY', 'SITUATIONAL'].forEach((h, i) => c.t(h, colX[i], y0, cw, 0.28, { size: 10, bold: true, color: K.blueD, cs: 2, valign: 'middle' }));
    const rows = [['FaHandPaper', 'Touch', ['One arm', 'Arm injury', 'Holding a baby']], ['FiEye', 'See', ['Blind', 'Cataract', 'Bright sunlight']], ['FiVolume2', 'Hear', ['Deaf', 'Ear infection', 'Noisy café']], ['FiMic', 'Speak', ['Non-verbal', 'Laryngitis', 'Second language']]];
    rows.forEach((r, i) => {
      const y = 2.35 + i * 0.9;
      c.box(0.6, y + 0.08, 0.58, 0.58, '', { shape: 'ellipse', fill: K.ink }); c.icon(r[0], 0.89, y + 0.37, 0.28, 'white');
      c.t(r[1], 1.3, y, 0.7, 0.74, { size: 14, bold: true, color: K.ink, valign: 'middle' });
      r[2].forEach((tx, j) => {
        c.rect(colX[j], y, cw, 0.74, { fill: K.card, line: K.line, lw: 0.75, r: 0.12 });
        c.ell(colX[j] + 0.3, y + 0.37, 0.09, { fill: [K.blueD, K.blue, K.lav][j] });
        c.t(tx, colX[j] + 0.55, y, cw - 0.7, 0.74, { size: 15, bold: true, color: K.ink, valign: 'middle' });
      });
    });
    c.t('After Microsoft Inclusive Design', 9.1, 1.95, 3.63, 0.28, { size: 10, color: K.mute, align: 'right', valign: 'middle' });
    c.t("WCAG'S FOUR PRINCIPLES (POUR): CONTENT MUST BE", 0.6, 6.0, 8, 0.2, { size: 9, bold: true, color: K.mute, cs: 1 });
    const pour = [['Perceivable', 'see or hear'], ['Operable', 'control'], ['Understandable', 'follow'], ['Robust', 'assistive tech']];
    pour.forEach((p, i) => {
      const x = 0.6 + i * 3.06;
      c.rect(x, 6.25, 2.95, 0.55, { fill: K.blueD, r: 0.12 });
      c.t([{ text: p[0], options: { bold: true, size: 12.5 } }, { text: '  ' + p[1], options: { size: 10.5 } }], x + 0.15, 6.25, 2.7, 0.55, { size: 12, color: K.white, valign: 'middle', ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 17 ACCESSIBILITY IN PRACTICE
  {
    const rat = (a, b) => ratio(a, b);
    const r1 = rat(K.grey, K.paper), r2 = rat(K.mute, K.paper), r3 = rat(K.white, K.blue), r4 = rat(K.white, K.blueD);
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'light', eyebrow: 'ACCESSIBILITY IN PRACTICE', title: 'Five checks you can run today',
      notes: `Turn principles into habits with five practical checks.

Readable text: use body text of at least 16 px, generous line spacing, and short lines. Colour contrast: WCAG AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text and user-interface components. The ratios in the contrast card are calculated from this deck's own palette. Notice that white text on our electric blue reaches only ${r3.toFixed(2)}:1, so we use it only for large, bold labels and use a deeper blue for small text.

Keyboard navigation: everything should work with Tab, Enter and arrow keys, with a visible focus ring. Labels: never rely on a placeholder alone; it disappears. Interactions: make touch targets comfortably large (Apple suggests 44 points, Material Design 48 dp) and never communicate error by colour alone.

Activity: test one screen of your own work against all five checks.`,
    });
    const c = S(s);
    const cw = 3.88, ch = 2.3, y1 = 1.95, y2 = 4.4, gx = 0.245;
    const cardAt = (x, y, w, title) => { c.rect(x, y, w, ch, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 }); c.t(title, x + 0.22, y + 0.14, w - 0.4, 0.3, { size: 15, bold: true, color: K.ink }); };
    // A readable text
    { const x = 0.6, y = y1; cardAt(x, y, cw, '1  Readable text');
      c.rect(x + 0.22, y + 0.78, 1.6, 0.9, { fill: K.paper2, r: 0.08 }); c.t('Registration closes Friday at noon. Bring your student card.', x + 0.3, y + 0.84, 1.45, 0.8, { size: 7.5, color: K.grey, ls: 0.9 }); tag(c, x + 1.7, y + 0.64, false);
      c.rect(x + 2.0, y + 0.78, 1.66, 0.9, { fill: K.paper2, r: 0.08 }); c.t('Registration closes Friday at noon. Bring your student card.', x + 2.08, y + 0.84, 1.5, 0.8, { size: 10, color: K.ink, ls: 1.25 }); tag(c, x + 3.54, y + 0.64, true);
      c.t('Body text 16 px or larger, line height around 1.5, short lines.', x + 0.22, y + 1.78, cw - 0.4, 0.48, { size: 11.5, color: K.mute, ls: 1.0 }); }
    // B contrast
    { const x = 0.6 + cw + gx, y = y1; cardAt(x, y, cw, '2  Colour contrast');
      const rows = [[K.grey, K.paper, r1], [K.mute, K.paper, r2], [K.white, K.blue, r3], [K.white, K.blueD, r4]];
      rows.forEach((r, i) => { const yy = y + 0.55 + i * 0.35;
        c.box(x + 0.22, yy, 0.95, 0.29, 'Aa Event', { fill: r[1], color: r[0], size: 10.5, bold: true, r: 0.05, line: K.line });
        c.t(r[2].toFixed(2) + ' : 1', x + 1.3, yy, 0.9, 0.29, { size: 12, bold: true, color: K.ink, valign: 'middle' });
        tag(c, x + 3.0, yy + 0.145, r[2] >= 4.5, 0.11);
        c.t(r[2] >= 4.5 ? 'AA' : (r[2] >= 3 ? 'large only' : 'fails'), x + 3.17, yy, 0.65, 0.29, { size: 10.5, bold: true, color: r[2] >= 4.5 ? K.green : (r[2] >= 3 ? K.red : K.red), valign: 'middle' }); });
      c.t('AA: 4.5:1 for body text, 3:1 for large text. Ratios computed from this deck.', x + 0.22, y + 1.92, cw - 0.4, 0.34, { size: 10, color: K.mute, ls: 1.0 }); }
    // C keyboard
    { const x = 0.6 + 2 * (cw + gx), y = y1; cardAt(x, y, cw, '3  Keyboard navigation');
      c.rect(x + 0.22, y + 0.88, 1.5, 0.4, { fill: K.white, line: K.grey, r: 0.06 }); c.t('Name', x + 0.32, y + 0.88, 1.2, 0.4, { size: 10, color: K.mute, valign: 'middle' });
      c.rect(x + 1.85, y + 0.98, 0.2, 0.2, { fill: K.white, line: K.grey, r: 0.04 });
      c.rect(x + 2.4, y + 0.85, 1.2, 0.46, { fill: K.blueD, r: 0.23 }); c.t('Register', x + 2.4, y + 0.85, 1.2, 0.46, { size: 12, bold: true, color: K.white, align: 'center', valign: 'middle' });
      c.rect(x + 2.34, y + 0.79, 1.32, 0.58, { line: K.ink, lw: 2.25, r: 0.29 });
      [[x + 0.97, 1], [x + 1.95, 2], [x + 3.0, 3]].forEach((n) => { c.box(n[0] - 0.12, y + 0.52, 0.24, 0.24, String(n[1]), { shape: 'ellipse', fill: K.ink, color: K.white, size: 10, bold: true }); });
      c.box(x + 0.22, y + 1.58, 0.6, 0.3, 'Tab', { fill: K.paper2, line: K.line, r: 0.06, size: 10.5, bold: true, color: K.ink });
      c.t('Everything works without a mouse. Focus is visible and order is logical.', x + 0.95, y + 1.5, cw - 1.1, 0.7, { size: 11.5, color: K.mute, ls: 1.0 }); }
    // D labels
    { const x = 0.6, y = y2; cardAt(x, y, cw, '4  Labels');
      c.rect(x + 0.22, y + 0.7, 1.55, 0.42, { fill: K.white, line: K.grey, r: 0.06 }); c.t('Full name', x + 0.32, y + 0.7, 1.3, 0.42, { size: 10, color: K.grey, valign: 'middle' }); tag(c, x + 1.7, y + 0.62, false, 0.11);
      c.t('Full name', x + 2.0, y + 0.5, 1.6, 0.2, { size: 9.5, bold: true, color: K.ink });
      c.rect(x + 2.0, y + 0.72, 1.66, 0.42, { fill: K.white, line: K.grey, r: 0.06 }); c.t('Aisha Rahman', x + 2.1, y + 0.72, 1.4, 0.42, { size: 10, color: K.ink, valign: 'middle' }); tag(c, x + 3.58, y + 0.62, true, 0.11);
      c.t('Placeholders vanish as you type. Keep a visible label above every field.', x + 0.22, y + 1.5, cw - 0.4, 0.6, { size: 11.5, color: K.mute, ls: 1.0 }); }
    // E interactions (wide)
    { const x = 0.6 + cw + gx, w = 12.73 - x, y = y2; cardAt(x, y, w, '5  Accessible interactions');
      c.t('Target size', x + 0.22, y + 0.55, 2, 0.22, { size: 10, bold: true, color: K.blueD, cs: 1.5 });
      [0, 1, 2, 3].forEach((k) => c.ell(x + 0.35 + k * 0.28, y + 1.02, 0.1, { fill: K.red })); tag(c, x + 1.5, y + 0.9, false, 0.11);
      [0, 1, 2].forEach((k) => c.ell(x + 2.0 + k * 0.62, y + 1.0, 0.23, { fill: K.blueD })); tag(c, x + 3.85, y + 0.9, true, 0.11);
      c.t('Aim for targets about 44 pt (Apple) or 48 dp (Material) with space between.', x + 0.22, y + 1.45, 3.9, 0.6, { size: 11.5, color: K.mute, ls: 1.0 });
      c.line(x + 4.4, y + 0.6, x + 4.4, y + 2.1, { color: K.line, w: 1 });
      c.t('Do not rely on colour alone', x + 4.65, y + 0.55, 3, 0.22, { size: 10, bold: true, color: K.blueD, cs: 1 });
      c.rect(x + 4.65, y + 0.88, 1.3, 0.4, { fill: K.white, line: K.red, lw: 1.5, r: 0.06 }); tag(c, x + 6.12, y + 1.08, false, 0.11);
      c.rect(x + 6.45, y + 0.88, 1.25, 0.4, { fill: K.white, line: K.red, lw: 1.5, r: 0.06 }); tag(c, x + 7.84, y + 1.08, true, 0.11);
      c.icon('FiAlertTriangle', x + 6.1, y + 1.48, 0.17, 'red'); c.t('Enter a valid email', x + 6.28, y + 1.37, 1.6, 0.22, { size: 10, bold: true, color: K.red, valign: 'middle' });
      c.t('Add an icon and a message to every error.', x + 4.65, y + 1.75, 3.2, 0.5, { size: 11.5, color: K.mute, ls: 1.0 }); }
  }

  // ---------------------------------------------------------------- 18 DESIGN THINKING
  {
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'light', eyebrow: 'DESIGN THINKING', title: 'Five modes, and you will loop through them',
      notes: `Design thinking is a human-centred approach to solving problems. The version taught by the Stanford d.school has five modes: Empathise, Define, Ideate, Prototype and Test. IDEO and the Interaction Design Foundation describe similar sequences.

Empathise: understand people by observing and interviewing them. Define: synthesise what you learned into a clear problem statement. Ideate: generate many possible solutions before choosing. Prototype: make quick, inexpensive versions to think with. Test: put prototypes in front of users and learn.

The key message is that the process is iterative, not linear. Testing often reveals that you misunderstood the problem and sends you back to empathise. The return arrow on the slide represents that loop, and you can jump to any stage when needed.

The Gather row shows one small example per stage. Ask students to propose a different example for each stage.`,
    });
    const c = S(s);
    const ph = [
      ['Empathise', 'Observe and interview the people you design for.', 'Interview students who skip events.', K.blueD, K.white],
      ['Define', 'State the problem and the user need.', 'Students cannot tell which events are open to them.', K.blue, K.white],
      ['Ideate', 'Generate many ideas, then choose.', 'Sketch eight registration screens in eight minutes.', '9A92FF', K.ink],
      ['Prototype', 'Make quick, cheap models to think with.', 'Build a clickable three-screen flow.', K.lav, K.ink],
      ['Test', 'Try it with real users and learn.', 'Five students try to register for an event.', K.lavL, K.ink],
    ];
    const bw = 2.3, gap = 0.158;
    ph.forEach((p, i) => {
      const x = 0.6 + i * (bw + gap);
      c.rect(x, 1.95, bw, 1.75, { fill: p[3], r: 0.14 });
      c.t(String(i + 1), x + 0.2, 2.07, 0.5, 0.3, { size: 12, bold: true, color: p[4] });
      c.t(p[0], x + 0.2, 2.33, bw - 0.3, 0.4, { size: 20, bold: true, color: p[4] });
      c.t(p[1], x + 0.2, 2.8, bw - 0.35, 0.85, { size: 12.5, color: p[4], ls: 1.0 });
      if (i < 4) c.t('›', x + bw - 0.02, 2.55, gap + 0.04, 0.4, { size: 20, bold: true, color: K.grey, align: 'center', valign: 'middle' });
      c.rect(x, 4.45, bw, 2.2, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
      c.t('IN GATHER', x + 0.2, 4.6, 1.6, 0.2, { size: 9, bold: true, color: K.blueD, cs: 2 });
      c.t(p[2], x + 0.2, 4.9, bw - 0.4, 1.6, { size: 14, bold: true, color: K.ink, ls: 1.05 });
    });
    const lx0 = 0.6 + bw / 2, lx1 = 0.6 + 4 * (bw + gap) + bw / 2;
    c.path([[lx1, 3.7], [lx1, 4.0], [8.55, 4.0]], { color: K.grey, w: 1.5, dash: 'dash' }); c.path([[4.8, 4.0], [lx0, 4.0], [lx0, 3.72]], { color: K.grey, w: 1.5, arrow: true, dash: 'dash' });
    c.box(4.95, 3.86, 3.45, 0.28, 'Iterate: learn, then loop back to any stage', { fill: K.paper, color: K.mute, size: 11.5, bold: true });
  }

  // ---------------------------------------------------------------- 19 DIVERGENT VS CONVERGENT
  {
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'dark', eyebrow: 'DIVERGENT VS CONVERGENT THINKING', title: 'Widen the field, then narrow it',
      notes: `Great design alternates between two modes of thinking. Divergent thinking opens up possibilities: you generate many ideas, defer judgement and value quantity. Convergent thinking narrows: you compare ideas against criteria, combine the best, and decide.

The British Design Council's Double Diamond (2004) shows this twice. The first diamond is about the problem: Discover widens what you know through research, then Define narrows to a clear problem. The second diamond is about the solution: Develop widens by exploring ideas and prototypes, then Deliver narrows to a tested solution.

A common mistake is converging too early, picking the first good idea. Another is never converging, endlessly brainstorming. Good facilitators name the mode out loud: "For the next ten minutes we are diverging, no criticism."

In Gather, the team might sketch 20 registration ideas, then shortlist three using an impact versus effort comparison.`,
    });
    const c = S(s);
    const dia = (x0, x1, lbl1, lbl2, sp) => {
      const yc = 3.85, hh = 1.2, xm = (x0 + x1) / 2;
      c.poly([[x0, yc], [xm, yc - hh], [x1, yc], [xm, yc + hh]], { fill: K.ink2, line: K.grey, lw: 1.25 });
      c.line(xm, yc - hh - 0.1, xm, yc + hh + 0.1, { color: K.ink3, w: 1, dash: 'dash' });
      c.t(lbl1, x0, 1.95, xm - x0, 0.3, { size: 14, bold: true, color: K.lav, align: 'center', cs: 2 }); c.t(lbl2, xm, 1.95, x1 - xm, 0.3, { size: 14, bold: true, color: K.blue, align: 'center', cs: 2 });
      c.t('DIVERGE', x0, 2.28, xm - x0, 0.22, { size: 10, color: K.grey, align: 'center', cs: 2 }); c.t('CONVERGE', xm, 2.28, x1 - xm, 0.22, { size: 10, color: K.grey, align: 'center', cs: 2 });
      [0.1, 0.22, 0.34, 0.46, 0.58, 0.7, 0.82, 0.92].forEach((f, k) => {
        const hx = x0 + (xm - x0) * f, half = hh * f, n = 1 + Math.round(f * 5);
        for (let j = 0; j < n; j++) { const t = n === 1 ? 0 : (j / (n - 1)) * 2 - 1; const jit = Math.sin(k * 7 + j * 3) * 0.12; c.ell(hx, yc + (t * 0.78 + jit) * half, 0.055, { fill: K.lav }); }
      });
      [0.12, 0.28, 0.44, 0.6, 0.76, 0.9].forEach((f, k) => {
        const hx = xm + (x1 - xm) * f, half = hh * (1 - f), n = Math.max(1, 5 - Math.round(f * 5));
        for (let j = 0; j < n; j++) { const t = n === 1 ? 0 : (j / (n - 1)) * 2 - 1; const jit = Math.sin(k * 5 + j * 2) * 0.08; c.ell(hx, yc + (t * 0.75 + jit) * half, f > 0.85 ? 0.1 : 0.055, { fill: f > 0.85 ? K.blue : K.paper }); }
      });
      c.t(sp, x0, 5.15, x1 - x0, 0.25, { size: 10, bold: true, color: K.lav, align: 'center', cs: 2 });
    };
    dia(0.7, 6.4, 'DISCOVER', 'DEFINE', 'PROBLEM SPACE'); dia(6.9, 12.6, 'DEVELOP', 'DELIVER', 'SOLUTION SPACE');
    [['Divergent thinking', 'Generate many options. Defer judgement. Quantity before quality.', K.lav], ['Convergent thinking', 'Compare against criteria. Combine, vote and decide.', K.blue]].forEach((d, i) => {
      const x = 0.6 + i * 6.15;
      c.rect(x, 5.65, 5.95, 1.05, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.14 });
      c.ell(x + 0.35, 6.17, 0.12, { fill: d[2] });
      c.t(d[0], x + 0.65, 5.75, 5, 0.32, { size: 16, bold: true, color: K.paper }); c.t(d[1], x + 0.65, 6.1, 5.1, 0.5, { size: 12.5, color: K.grey, ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 20 FIVE-DAY DESIGN SPRINT
  {
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'light', eyebrow: 'THE FIVE-DAY DESIGN SPRINT', title: 'Months of debate, compressed into one week',
      notes: `The design sprint was developed by Jake Knapp at Google Ventures and described in the book Sprint (Knapp, Zeratsky and Kowitz, 2016). It is a structured five-day process for answering critical questions through design and testing with real customers.

Monday, Map: agree a long-term goal, map the challenge and choose a target. Tuesday, Sketch: gather inspiration and sketch solutions individually. Wednesday, Decide: review the sketches, vote and storyboard the winning idea. Thursday, Prototype: build a realistic prototype, a facade just good enough to test. Friday, Test: interview about five users while the team watches and notes patterns.

Benefits: fast decisions, learning before heavy investment, a shared understanding in the team and early evidence from users. Limitations: it needs commitment of the whole team and works best for focused questions.

For Gather, imagine a sprint goal: any student can register for an event without help.`,
    });
    const c = S(s);
    const days = [
      ['MON', 'Map', ['Set a long-term goal', 'Map the user journey', 'Interview experts, pick a target']],
      ['TUE', 'Sketch', ['Lightning demos for inspiration', 'Sketch alone: Crazy 8s', 'Draw a detailed solution']],
      ['WED', 'Decide', ['Review sketches in silence', 'Vote for the strongest ideas', 'Storyboard the prototype']],
      ['THU', 'Prototype', ['Build a realistic facade', 'Split the work, one screen each', 'Do a trial run']],
      ['FRI', 'Test', ['Interview five users', 'Watch them react', 'Spot patterns, decide next steps']],
    ];
    const bw = 2.3, gap = 0.158, cols = [K.blueD, K.blue, '9A92FF', K.lav, K.lavL];
    days.forEach((d, i) => {
      const x = 0.6 + i * (bw + gap), dark = i < 2;
      c.rect(x, 1.95, bw, 3.05, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
      c.shape('round2SameRect', x, 1.95, bw, 0.95, { fill: cols[i] });
      c.t(d[0], x + 0.2, 2.05, 1, 0.22, { size: 10, bold: true, color: dark ? K.white : K.ink, cs: 2 });
      c.t(d[1], x + 0.2, 2.28, bw - 0.3, 0.5, { size: 22, bold: true, color: dark ? K.white : K.ink });
      d[2].forEach((a, j) => { c.ell(x + 0.28, 3.28 + j * 0.62, 0.05, { fill: K.blueD }); c.t(a, x + 0.42, 3.07 + j * 0.62, bw - 0.55, 0.45, { size: 12.5, color: K.ink, valign: 'top', ls: 1.0 }); });
    });
    c.rect(0.6, 5.2, 12.13, 0.5, { fill: K.ink, r: 0.25 });
    c.t([{ text: 'GATHER SPRINT GOAL   ', options: { bold: true, color: K.lav, size: 10 } }, { text: 'Any student can register for an event without help.', options: { color: K.white, size: 13, bold: true } }], 0.9, 5.2, 11.6, 0.5, { valign: 'middle' });
    const ben = [['FiZap', 'Decide in days, not months'], ['FiTarget', 'Test before you build'], ['FiUsers', 'Align the whole team'], ['FiMessageCircle', 'Hear real users on Friday']];
    ben.forEach((b, i) => {
      const x = 0.6 + i * 3.06;
      c.box(x, 6.05, 0.5, 0.5, '', { shape: 'ellipse', fill: K.lav }); c.icon(b[0], x + 0.25, 6.3, 0.26, 'ink');
      c.t(b[1], x + 0.62, 6.05, 2.3, 0.5, { size: 13, bold: true, color: K.ink, valign: 'middle', ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 21 COMPETITIVE ANALYSIS
  {
    const s = mkSlide(pres, {
      sec: 'u2', tone: 'dark', eyebrow: 'COMPETITIVE ANALYSIS', title: 'Compare the options, find the gaps',
      notes: `Competitive analysis means studying similar products to understand what they do well, where they cause problems and where opportunities remain. Competitors are not only direct rivals. For event registration, indirect alternatives include a group chat announcement or a campus web page.

The method: choose a set of competitors, define criteria from real user tasks, test the same tasks on each product, record evidence such as screenshots and task times, then look for gaps. Gaps become opportunities.

The grid on the slide is an illustrative example to show the technique. The ratings are hypotheses, not research findings, and the Gather column shows a design target, not a measured result. In your own assignment, you must base ratings on evidence from your own testing.

Warn against copying competitors blindly. The goal is to understand patterns, avoid known problems, and find where you can offer something better for your users.`,
    });
    const c = S(s);
    const cols = ['Group chat', 'Campus web page', 'Ticketing app', 'Gather (target)'];
    const rows = [['Finding events', [1, 2, 3, 3]], ['Few steps to register', [1, 2, 2, 3]], ['Reminders and ticket', [1, 1, 3, 3]], ['Accessibility support', [1, 2, 2, 3]], ['Works well on a phone', [3, 1, 3, 3]]];
    const x0 = 0.6, lw = 2.5, cw = 1.45, y0 = 1.95, hh = 0.62, rh = 0.72;
    cols.forEach((t, i) => {
      const x = x0 + lw + i * cw;
      if (i === 3) c.rect(x, y0, cw - 0.06, hh + rh * 5, { fill: K.blueD, tr: 25, r: 0.12 });
      c.t(t, x, y0, cw - 0.06, hh, { size: 12, bold: true, color: i === 3 ? K.white : K.lav, align: 'center', valign: 'middle', ls: 1.0 });
    });
    rows.forEach((r, i) => {
      const y = y0 + hh + i * rh;
      c.line(x0, y, x0 + lw + 4 * cw - 0.06, y, { color: K.ink3, w: 0.75 });
      c.t(r[0], x0, y, lw, rh, { size: 13, bold: true, color: K.paper, valign: 'middle' });
      r[1].forEach((v, j) => { const cx = x0 + lw + j * cw + (cw - 0.06) / 2; for (let k = 0; k < 3; k++) c.ell(cx - 0.3 + k * 0.3, y + rh / 2, 0.095, { fill: k < v ? (j === 3 ? K.white : K.lav) : undefined, line: k < v ? undefined : (j === 3 ? K.white : K.grey), lw: 1 }); });
    });
    c.t('Illustrative ratings to demonstrate the method. Verify every rating by testing the same tasks.', 0.6, 6.5, 8, 0.4, { size: 11, color: K.grey, ls: 1.0 });
    c.rect(9.35, 1.95, 3.38, 4.75, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.16 });
    c.t('HOW TO RUN IT', 9.6, 2.12, 3, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    ['Choose direct and indirect competitors', 'Define criteria from user tasks', 'Test the same tasks on each', 'Record evidence: screens, times, quotes', 'Mark the gaps: they are your opportunities'].forEach((t, i) => {
      const y = 2.5 + i * 0.84;
      c.box(9.6, y + 0.04, 0.4, 0.4, String(i + 1), { shape: 'ellipse', fill: i === 4 ? K.blue : K.ink3, color: K.white, size: 12, bold: true });
      c.t(t, 10.15, y, 2.4, 0.5, { size: 12.5, color: K.paper, valign: 'middle', ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 22 UNIT 2 ASSIGNMENT
  assignSlide(pres, {
    sec: 'u2', eyebrow: 'UNIT 2  ·  ASSIGNMENT', title: 'Find what is broken, then fix it creatively', num: '02', tag: 'Turn analysis of existing products into new, user-focused ideas.',
    exTitle: 'COMPETITOR GRID  ·  HYPOTHETICAL',
    steps: [
      ['Identify disadvantages in an existing product', 'Note usability problems and unmet needs, with evidence.'],
      ['Select relevant competitors', 'Include direct rivals and indirect alternatives.'],
      ['Perform a competitor analysis', 'Compare the same tasks and criteria on every product.'],
      ['Find the problems and opportunities', 'Show where all products fail users and where one excels.'],
      ['Propose creative, user-focused solutions', 'Explain how each idea solves a real user problem.'],
    ],
    notes: `Unit 2 assignment: identify disadvantages in an existing product, perform a competitor analysis, and propose creative, user-focused solutions.

Remind students that the strongest submissions start from evidence, not opinions. Each disadvantage should be backed by a screenshot, a task attempt or a user comment. The competitor analysis should compare the same tasks across products, with clear criteria. The proposed solutions must link back to the problems found; avoid adding features simply because they are fashionable.

Encourage students to apply ideas from the unit: design thinking, divergent and convergent thinking, inclusive design, and the balance between user and business needs. A short sketch of each proposed solution helps the instructor see the thinking.

The mini grid on this slide is a hypothetical illustration of format. The exact submission format is set by the instructor.`,
    visual: (c, x, y, w) => {
      const hdr = ['', 'A', 'B', 'C'];
      hdr.forEach((h, i) => c.t(h, x + 1.6 + (i - 1) * 0.7 - 0.3, y - 0.02, 0.6, 0.25, { size: 11, bold: true, color: K.blueD, align: 'center' }));
      [['Task speed', [1, 2, 3]], ['Clear errors', [1, 1, 3]], ['Accessible', [2, 1, 3]]].forEach((r, i) => {
        const yy = y + 0.3 + i * 0.4;
        c.t(r[0], x, yy, 1.5, 0.3, { size: 11.5, bold: true, color: K.ink, valign: 'middle' });
        r[1].forEach((v, j) => { for (let k = 0; k < 3; k++) c.ell(x + 1.6 + j * 0.7 - 0.2 + k * 0.2, yy + 0.15, 0.06, { fill: k < v ? K.blueD : undefined, line: k < v ? undefined : K.grey, lw: 0.75 }); });
      });
      c.box(x, y + 1.5, w, 0.38, 'Gap: no product explains errors clearly. Idea: inline hints.', { fill: K.lavL, color: K.ink, size: 10.5, bold: true, r: 0.08 });
    },
  });
};
