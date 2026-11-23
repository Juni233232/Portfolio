// Slides 41-50: Unit 5 - User Testing + Conclusion
const L = require('./lib');
const { K, S, mkSlide, phone, gatherHome, gatherDetail, gatherRegister, gatherSuccess, browser, gatherWebDetail } = L;
const assignSlide = require('./assign');

function person(c, x, base, h, col, head = 0.2) { c.rect(x - 0.2, base - h, 0.4, h, { fill: col, r: 0.15 }); c.ell(x, base - h - head - 0.04, head, { fill: col }); }

module.exports = function (pres) {
  // ---------------------------------------------------------------- 41 PROBLEM AND HYPOTHESIS
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'dark', eyebrow: 'UNIT 5  ·  PROBLEM AND HYPOTHESIS STATEMENTS', title: 'Define the problem, then make a testable bet',
      notes: `Before testing anything, you need to know what you are testing and what would count as success.

A problem statement describes who has a need and why, based on research insight. A common structure is: [User] needs [need] because [insight]. It is not a solution in disguise. A related tool is the How Might We question, which turns the problem into an invitation to ideate, such as "How might we help students register without missing deadlines?"

A hypothesis is a testable prediction: We believe that [change] for [users] will [outcome]. We will know we are right when [measure]. It must be specific and falsifiable. If the test result could not prove you wrong, it is not a hypothesis.

The weak statement "Make registration better" has no user, no change and no measure. The strong version can be tested in a usability session. The criterion of four of five participants is an example of a planned success criterion you set in advance, not a finding.

Ask students to rewrite a vague goal as a hypothesis.`,
    });
    const c = S(s);
    const cards = [
      ['PROBLEM STATEMENT', [['[User]', K.lav], [' needs ', K.grey], ['[need]', K.lav], [' because ', K.grey], ['[insight]', K.lav], ['.', K.grey]], 'First-year students need a quick way to see which events are open to them, because today they find events in many places and miss deadlines.'],
      ['HYPOTHESIS', [['We believe that ', K.grey], ['[change]', K.lav], [' for ', K.grey], ['[users]', K.lav], [' will ', K.grey], ['[outcome]', K.lav], ['. We will know we are right when ', K.grey], ['[measure]', K.lav], ['.', K.grey]], 'We believe that a one-tap Register button with pre-filled details for first-year students will increase completed registrations. We will know we are right when at least 4 of 5 test participants register unaided.'],
    ];
    cards.forEach((cd, i) => {
      const x = 0.6 + i * 6.15, y = 1.95;
      c.rect(x, y, 5.98, 2.9, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.16 });
      c.t(cd[0], x + 0.28, y + 0.18, 4, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
      c.t(cd[1].map((r) => ({ text: r[0], options: { color: r[1], bold: r[1] === K.lav } })), x + 0.28, y + 0.5, 5.4, 0.7, { size: 13.5, ls: 1.05 });
      c.line(x + 0.28, y + 1.3, x + 5.7, y + 1.3, { color: K.ink3, w: 1 });
      c.t('IN GATHER', x + 0.28, y + 1.42, 2, 0.2, { size: 9, bold: true, color: K.blue, cs: 2 });
      c.t(cd[2], x + 0.28, y + 1.68, 5.4, 1.15, { size: 14.5, bold: true, color: K.paper, ls: 1.1 });
    });
    const y = 5.1;
    c.rect(0.6, y, 5.98, 1.6, { fill: K.ink2, line: K.red, lw: 1, r: 0.16 });
    c.icon('FiX', 0.95, y + 0.4, 0.26, 'red'); c.t('WEAK', 1.2, y + 0.28, 2, 0.25, { size: 10, bold: true, color: K.red, cs: 2, valign: 'middle' });
    c.t('“Make registration better.”', 0.9, y + 0.62, 5.4, 0.4, { size: 18, bold: true, color: K.paper });
    c.t('No user, no change, no measure. It can never be proved wrong.', 0.9, y + 1.05, 5.4, 0.45, { size: 12.5, color: K.grey, ls: 1.0 });
    c.rect(6.75, y, 5.98, 1.6, { fill: K.ink2, line: K.green, lw: 1, r: 0.16 });
    c.icon('FiCheck', 7.1, y + 0.4, 0.26, 'green'); c.t('STRONG', 7.35, y + 0.28, 2, 0.25, { size: 10, bold: true, color: K.green, cs: 2, valign: 'middle' });
    c.t('Specific user, change and measure.', 7.05, y + 0.62, 5.5, 0.4, { size: 18, bold: true, color: K.paper });
    c.t('You can test it in a usability session and be proved wrong.', 7.05, y + 1.05, 5.5, 0.45, { size: 12.5, color: K.grey, ls: 1.0 });
  }

  // ---------------------------------------------------------------- 42 COMPETITIVE SCOPE + DECEPTIVE PATTERNS
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'light', eyebrow: 'COMPETITIVE SCOPE AND DECEPTIVE PATTERNS', title: 'Draw the boundary, and stay honest',
      notes: `Two ideas about boundaries.

First, competitive scope. You cannot analyse everything, so decide where to draw the line and say why. Direct competitors solve the same problem for the same users; indirect competitors solve it differently, such as a campus web page; alternatives are non-digital substitutes like posters and word of mouth. Document your scope and reasons so others can challenge it.

Second, ethics. Deceptive patterns, also called dark patterns, are interface tricks that push people into choices they did not intend. Harry Brignull coined the term dark patterns in 2010 and maintains the site deceptive.design. Examples shown: confirmshaming (guilt-trip wording on the decline button), pre-ticked opt-ins, fake urgency, and roach motels where joining is easy but leaving is hard.

Designers are responsible for the effects of their work. Ethical UX respects user autonomy, is honest, and makes consequences clear. Ask: would this still work if the user fully understood what we are doing?`,
    });
    const c = S(s);
    const cx = 2.95, cy = 4.2;
    c.ell(cx, cy, 2.2, { fill: K.paper2, line: K.line }); c.ell(cx, cy, 1.55, { fill: K.lavL }); c.ell(cx, cy, 0.95, { fill: K.lav });
    c.ell(cx, cy, 0.45, { fill: K.blueD }); c.t('Gather', cx - 0.45, cy - 0.15, 0.9, 0.3, { size: 11, bold: true, color: K.white, align: 'center', valign: 'middle' });
    c.t('Alternatives', cx - 1, cy - 2.12, 2, 0.25, { size: 12, bold: true, color: K.ink, align: 'center' }); c.t('Posters, word of mouth', cx - 1.2, cy - 1.86, 2.4, 0.22, { size: 10.5, color: K.mute, align: 'center' });
    c.t('Indirect', cx - 1, cy - 1.5, 2, 0.25, { size: 12, bold: true, color: K.ink, align: 'center' }); c.t('Web page, group chat', cx - 1.2, cy - 1.25, 2.4, 0.22, { size: 10.5, color: K.mute, align: 'center' });
    c.t('Direct', cx - 1, cy - 0.9, 2, 0.25, { size: 12, bold: true, color: K.ink, align: 'center' }); c.t('Other event apps', cx - 1.2, cy - 0.65, 2.4, 0.22, { size: 10.5, color: K.ink, align: 'center' });
    c.t('Decide where the boundary is, and write down why.', 0.6, 6.5, 4.7, 0.4, { size: 11.5, italic: true, color: K.mute, ls: 1.0 });
    const dp = [
      ['Confirmshaming', 'No thanks, I don’t like free tickets', 'Maybe later', 'btn'],
      ['Pre-ticked opt-in', 'Send me sponsor offers', 'Send me sponsor offers', 'chk'],
      ['Fake urgency', 'Only 2 left! Ends in 04:59', 'Registration closes Friday, 5 pm', 'txt'],
      ['Roach motel', 'Join in one tap. Cancel: email us.', 'Cancel in the same place you joined', 'txt2'],
    ];
    dp.forEach((d, i) => {
      const x = 5.7 + (i % 2) * 3.58, y = 1.95 + Math.floor(i / 2) * 2.45, w = 3.45;
      c.rect(x, y, w, 2.3, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
      c.t(d[0], x + 0.2, y + 0.12, w - 0.4, 0.3, { size: 14, bold: true, color: K.ink });
      // bad
      c.rect(x + 0.2, y + 0.55, w - 0.4, 0.7, { fill: K.paper, line: K.red, lw: 1, r: 0.08 }); c.icon('FiAlertTriangle', x + 0.4, y + 0.9, 0.2, 'red');
      if (d[3] === 'chk') { c.rect(x + 0.65, y + 0.75, 0.2, 0.2, { fill: K.blue, r: 0.03 }); c.icon('FiCheck', x + 0.75, y + 0.85, 0.14, 'white'); c.t(d[1], x + 0.95, y + 0.55, w - 1.25, 0.7, { size: 11, color: K.ink, valign: 'middle' }); }
      else if (d[3] === 'btn') { c.t(d[1], x + 0.65, y + 0.55, w - 1.0, 0.7, { size: 11, color: K.mute, valign: 'middle', ls: 1.0 }); }
      else c.t(d[1], x + 0.65, y + 0.55, w - 1.0, 0.7, { size: 11, bold: true, color: K.red, valign: 'middle', ls: 1.0 });
      // good
      c.rect(x + 0.2, y + 1.35, w - 0.4, 0.7, { fill: K.paper, line: K.green, lw: 1, r: 0.08 }); c.icon('FiCheck', x + 0.4, y + 1.7, 0.2, 'green');
      if (d[3] === 'chk') { c.rect(x + 0.65, y + 1.55, 0.2, 0.2, { fill: K.white, line: K.grey, r: 0.03 }); c.t(d[2] + ' (opt in)', x + 0.95, y + 1.35, w - 1.25, 0.7, { size: 11, color: K.ink, valign: 'middle' }); }
      else c.t(d[2], x + 0.65, y + 1.35, w - 1.0, 0.7, { size: 11, bold: d[3] !== 'btn', color: K.ink, valign: 'middle', ls: 1.0 });
    });
    c.t('After Brignull, deceptive.design', 5.7, 6.82, 4, 0.18, { size: 9, color: K.mute });
  }

  // ---------------------------------------------------------------- 43 LOW VS HIGH FIDELITY
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'light', eyebrow: 'LOW-FIDELITY VS HIGH-FIDELITY WIREFRAMES', title: 'Fidelity: how finished should it look?',
      notes: `Fidelity describes how closely a wireframe resembles the final product. Choosing the right level saves time and gets better feedback.

Low-fidelity wireframes use greys, boxes, placeholder images and basic text. Their purpose is to explore structure, layout and content priority quickly. Because they look unfinished, people give feedback on the idea rather than on colours, and they are cheap to change. Use them early, in team discussions and sketching sessions.

High-fidelity wireframes add real typography, colour, imagery, spacing and realistic content. They show the near-final look and feel, so they suit stakeholder reviews, usability testing that needs realism, and hand-off to developers. They take longer to create and change.

Both phones show the same Gather event screen. Notice the layout is identical; only the level of detail changes. A good workflow moves from low to high fidelity as decisions firm up. Joel Marsh's UX for Beginners explains wireframing for newcomers.`,
    });
    const c = S(s);
    const lo = phone(s, 0.6, 1.95, 4.75, { frame: '9A9A98' }); gatherDetail(lo, true);
    const hi = phone(s, 10.3, 1.95, 4.75, { frame: K.ink }); gatherDetail(hi, false);
    const rows = [['PURPOSE', 'Explore structure and layout', 'Show the near-final look and feel'], ['DETAIL', 'Greys, boxes, placeholder content', 'Real type, colour, images, content'], ['SPEED', 'Minutes to change', 'Slower to change'], ['USE WHEN', 'Early ideas and team discussion', 'Stakeholder review, realistic tests, hand-off']];
    const cx0 = 3.45, lw = 1.25, cw = 2.6;
    c.box(cx0 + lw, 1.95, cw - 0.1, 0.45, 'LOW-FIDELITY', { r: 0.1, fill: '9A9A98', color: K.white, size: 12, bold: true, cs: 1.5 });
    c.box(cx0 + lw + cw, 1.95, cw - 0.1, 0.45, 'HIGH-FIDELITY', { r: 0.1, fill: K.blueD, color: K.white, size: 12, bold: true, cs: 1.5 });
    rows.forEach((r, i) => {
      const y = 2.55 + i * 1.05;
      c.t(r[0], cx0, y, lw, 0.95, { size: 9.5, bold: true, color: K.mute, cs: 1.5, valign: 'middle' });
      c.rect(cx0 + lw, y, cw - 0.1, 0.95, { fill: K.paper2, r: 0.1 }); c.t(r[1], cx0 + lw + 0.15, y, cw - 0.4, 0.95, { size: 12.5, color: K.ink, valign: 'middle', ls: 1.0 });
      c.rect(cx0 + lw + cw, y, cw - 0.1, 0.95, { fill: K.lavL, r: 0.1 }); c.t(r[2], cx0 + lw + cw + 0.15, y, cw - 0.4, 0.95, { size: 12.5, bold: true, color: K.ink, valign: 'middle', ls: 1.0 });
    });
    c.t('Same screen, same layout. Only the detail changes.', cx0, 6.78, 6.5, 0.2, { size: 10.5, color: K.mute });
  }

  // ---------------------------------------------------------------- 44 MOBILE WIREFRAMING
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'light', eyebrow: 'MOBILE WIREFRAMING', title: 'Four screens carry the whole registration',
      notes: `This is the mobile wireframe set for Gather, drawn at low fidelity. It follows the user flow from Unit 3: Home, Event details, Register, and Confirmation. Each screen has one clear job.

Home helps students browse and filter events. Details presents key facts and one primary action. Register is a short form with visible labels and the information pre-filled. Confirmation shows the QR ticket and next steps.

Mobile wireframing principles: design for one hand, with key actions in easy thumb reach near the bottom; keep one primary action per screen; prioritise content because space is limited; use real content, not lorem ipsum, so you can judge hierarchy and length; make it obvious how to go back.

Use standard platform patterns such as a bottom navigation bar, which helps Jakob's Law. Check the screens against your flow and run the checklist on the right before moving to prototyping.`,
    });
    const c = S(s);
    const ph = 3.9, pw = ph * 316 / 616, pitch = 2.5, y = 2.05;
    [[gatherHome, 'Home', 'Browse and filter events'], [gatherDetail, 'Details', 'Key facts, one primary action'], [gatherRegister, 'Register', 'Short form, visible labels'], [gatherSuccess, 'Confirm', 'QR ticket and next steps']].forEach((sc, i) => {
      const x = 0.6 + i * pitch;
      const p = phone(s, x, y, ph, { frame: '9A9A98' }); sc[0](p, true);
      c.box(x - 0.05, y - 0.12, 0.3, 0.3, String(i + 1), { shape: 'ellipse', fill: K.blueD, color: K.white, size: 11, bold: true });
      if (i < 3) c.line(x + pw + 0.08, y + ph / 2, x + pitch - 0.08, y + ph / 2, { color: K.blueD, w: 2, arrow: true });
      c.t(sc[1], x, y + ph + 0.12, pw + 0.3, 0.3, { size: 14, bold: true, color: K.ink }); c.t(sc[2], x, y + ph + 0.42, pitch - 0.2, 0.3, { size: 11.5, color: K.mute });
    });
    c.rect(10.45, 1.95, 2.28, 4.75, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
    c.t('CHECKLIST', 10.65, 2.1, 2, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    ['One primary action per screen', 'Key actions in thumb reach', 'Real content, not lorem ipsum', 'Label every field', 'Always show the way back'].forEach((t, i) => {
      const yy = 2.5 + i * 0.82;
      c.icon('FiCheck', 10.72, yy + 0.14, 0.2, 'green'); c.t(t, 10.98, yy, 1.62, 0.7, { size: 12, bold: true, color: K.ink, valign: 'top', ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 45 WEB WIREFRAMING
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'dark', eyebrow: 'WEB WIREFRAMING', title: 'The same experience, rebuilt for a wide screen',
      notes: `Now the equivalent desktop experience for the event details screen. The content and flow are the same as on mobile, but the layout uses horizontal space: a large hero and description on the left, and a sticky registration panel on the right so the primary action stays visible while scrolling.

Responsive considerations. Design mobile first: start with the smallest screen, decide what is essential, then add space and secondary content as the screen grows. Use breakpoints where the layout genuinely breaks, not simply at device names. On desktop expect mouse and keyboard, so provide hover and visible focus states. On tablet and phone expect touch, so targets must be larger. Content priority must stay the same across sizes: the registration action is never hidden.

The three diagrams show how the grid reflows: three columns, two columns, then one. Also test text size and zoom to 200 percent.`,
    });
    const c = S(s);
    const b = browser(s, 0.6, 1.95, 7.5, 560, { dark: false });
    gatherWebDetail(b, true);
    c.t('Desktop wireframe: content on the left, registration panel stays in view.', 0.6, 6.55, 7.5, 0.3, { size: 11.5, color: K.grey });
    const bp = [['Desktop', 'Side by side. Hover and focus states.', 3], ['Tablet', 'Two columns. Touch and mouse.', 2], ['Mobile', 'One column. Thumb reach.', 1]];
    bp.forEach((r, i) => {
      const y = 1.95 + i * 1.45, x = 8.55;
      c.rect(x, y, 4.18, 1.32, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.14 });
      const w = [1.5, 1.1, 0.7][i], hh = [0.95, 1.0, 1.0][i], dx = x + 0.2 + (1.5 - w) / 2, dy = y + 0.16;
      c.rect(dx, dy, w, hh, { fill: K.ink3, line: K.grey, lw: 1, r: 0.06 }); c.rect(dx + 0.05, dy + 0.05, w - 0.1, 0.1, { fill: K.grey, r: 0.03 });
      if (r[2] === 3) { c.rect(dx + 0.07, dy + 0.22, 0.85, 0.68, { fill: K.lav, r: 0.03 }); c.rect(dx + 1.0, dy + 0.22, 0.43, 0.68, { fill: K.blue, r: 0.03 }); }
      if (r[2] === 2) { c.rect(dx + 0.07, dy + 0.22, 0.6, 0.72, { fill: K.lav, r: 0.03 }); c.rect(dx + 0.73, dy + 0.22, 0.3, 0.72, { fill: K.blue, r: 0.03 }); }
      if (r[2] === 1) { c.rect(dx + 0.07, dy + 0.22, 0.56, 0.45, { fill: K.lav, r: 0.03 }); c.rect(dx + 0.07, dy + 0.72, 0.56, 0.22, { fill: K.blue, r: 0.03 }); }
      c.t(r[0], x + 1.9, y + 0.2, 2.1, 0.32, { size: 15, bold: true, color: K.paper }); c.t(r[1], x + 1.9, y + 0.55, 2.1, 0.7, { size: 12, color: K.grey, ls: 1.0 });
    });
    c.box(8.55, 6.3, 4.18, 0.45, 'Mobile first: design the smallest screen first', { r: 0.22, fill: K.blue, color: K.white, size: 12, bold: true });
  }

  // ---------------------------------------------------------------- 46 PROTOTYPING
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'light', eyebrow: 'PROTOTYPING', title: 'A prototype lets you test behaviour, not pictures',
      notes: `A prototype is an interactive simulation of a product, built to learn something before investing in development. Wireframes show what screens contain; prototypes show how they behave.

Navigation: hotspots, the blue dashed areas on the screens, link one screen to another so people can tap through a flow. Transitions: motion between screens, such as a slide or fade, explains change and keeps orientation. Keep them short; interface animations are commonly a few hundred milliseconds. Interaction states: every control should be designed for default, hover, focus, pressed, disabled, loading, error and success, because real users encounter all of them.

Fidelity has two dimensions: visual detail and interaction depth. Paper prototypes are great for quick checks; clickable wireframes test flow; high-fidelity prototypes test feel; coded prototypes test technical feasibility. Match fidelity to your question. Tools such as Figma support all of these.

In Unit 5 you will build an interactive prototype of Gather and test it.`,
    });
    const c = S(s);
    c.t('NAVIGATION AND TRANSITIONS', 0.6, 1.95, 5, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    const ph = 2.15, pw = ph * 316 / 616;
    const sc = [[gatherHome, [30, 282, 88, 26]], [gatherDetail, [16, 500, 268, 46]], [gatherSuccess, null]];
    const xs = [0.6, 3.1, 5.6];
    sc.forEach((sd, i) => {
      const p = phone(s, xs[i], 2.3, ph); sd[0](p, false);
      if (sd[1]) { p.rect(sd[1][0] - 3, sd[1][1] - 3, sd[1][2] + 6, sd[1][3] + 6, { line: K.blue, lw: 2, dash: 'dash', r: 8 }); }
      if (i < 2) { c.line(xs[i] + pw + 0.1, 3.2, xs[i + 1] - 0.1, 3.2, { color: K.blueD, w: 2, arrow: true }); c.box(xs[i] + pw + 0.12, 3.35, 1.0, 0.36, ['Tap: slide in', 'Tap: confirm'][i], { r: 0.18, fill: K.lavL, color: K.ink, size: 9.5, bold: true }); }
    });
    c.t('FROM SKETCH TO WORKING PROTOTYPE', 7.9, 1.95, 5, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    [['Paper', 'Sketches you flip through', 0.3], ['Clickable wireframe', 'Tests the flow', 0.55], ['High-fidelity interactive', 'Tests look, feel and motion', 0.8], ['Coded', 'Tests real technical limits', 1.0]].forEach((f, i) => {
      const y = 2.3 + i * 0.56;
      c.t(f[0], 7.9, y, 2.35, 0.46, { size: 12.5, bold: true, color: K.ink, valign: 'middle' });
      c.rect(10.3, y + 0.17, 2.4, 0.12, { fill: K.line, r: 0.06 }); c.rect(10.3, y + 0.17, 2.4 * f[2], 0.12, { fill: K.blueD, r: 0.06 });
    });
    c.t('More detail and effort', 10.3, 4.5, 2.4, 0.2, { size: 10, color: K.mute, align: 'right' });
    c.t('INTERACTION STATES OF ONE BUTTON', 0.6, 4.7, 6, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    const st = [['Default', K.blueD, K.white, null], ['Hover', '3A5CF0', K.white, null], ['Focus', K.blueD, K.white, K.ink], ['Pressed', '1F38B0', K.white, null], ['Disabled', 'D5D3CB', K.grey, null], ['Loading', K.blueD, K.white, null], ['Error', K.white, K.red, K.red], ['Success', K.green, K.white, null]];
    st.forEach((b, i) => {
      const x = 0.6 + i * 1.52;
      c.box(x, 5.08, 1.38, 0.5, b[0] === 'Loading' ? '···' : (b[0] === 'Success' ? '✓ Done' : 'Register'), { r: 0.25, fill: b[1], color: b[2], size: 12, bold: true, line: b[3] === K.red ? K.red : undefined, lw: 1.5 });
      if (b[3] === K.ink) c.rect(x - 0.05, 5.03, 1.48, 0.6, { line: K.ink, lw: 2, r: 0.3 });
      c.t(b[0], x, 5.68, 1.38, 0.25, { size: 11.5, bold: true, color: K.ink, align: 'center' });
    });
    [['Navigation', 'Hotspots link screens into a flow'], ['Transitions', 'Short motion explains change'], ['Fidelity', 'Match detail to your question']].forEach((t, i) => {
      const x = 0.6 + i * 4.1;
      c.rect(x, 6.08, 3.95, 0.65, { fill: K.lavL, r: 0.12 });
      c.t([{ text: t[0] + '  ', options: { bold: true, color: K.blueD } }, { text: t[1], options: { color: K.ink } }], x + 0.2, 6.08, 3.6, 0.65, { size: 12, valign: 'middle', ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 47 USABILITY TESTING
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'dark', eyebrow: 'USABILITY TESTING', title: 'Watch real people try to do real tasks',
      notes: `Usability testing puts a prototype or product in front of representative users and observes them completing realistic tasks. The five steps are: recruit participants who match your target users; brief them, explaining that you are testing the design and not them; give task scenarios; observe and note what happens without helping; and measure.

Scenario and task: a scenario gives context without revealing how to do the task, for example "You are a first-year student and a friend mentions Design Week. Find the keynote and register." Avoid leading words such as "tap the Register button".

Measures from Tullis and Albert's Measuring the User Experience: task success, time on task and errors; self-reported measures such as the Single Ease Question, SEQ, after each task and the System Usability Scale, SUS, at the end; plus observations and quotes. Small rounds of around five participants often reveal many major problems; repeat after each redesign.

The results grid is an empty template. We deliberately show no invented results. Fill it with your own data.`,
    });
    const c = S(s);
    // illustration
    c.rect(0.6, 1.95, 5.9, 3.55, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.16 });
    c.rect(0.95, 4.35, 5.2, 0.14, { fill: K.grey, r: 0.04 });
    person(c, 1.75, 4.35, 1.1, K.paper, 0.22); c.rect(2.1, 3.7, 0.5, 0.85, { fill: K.ink3, r: 0.05 }); c.rect(2.14, 3.75, 0.42, 0.75, { fill: K.blue, r: 0.04 });
    person(c, 5.25, 4.35, 1.1, K.lav, 0.22); c.rect(3.6, 3.55, 0.95, 0.65, { fill: K.ink3, line: K.grey, lw: 1, r: 0.04 });
    c.t('Participant', 1.15, 4.6, 1.4, 0.22, { size: 11, bold: true, color: K.paper, align: 'center' }); c.t('Facilitator', 4.55, 4.6, 1.4, 0.22, { size: 11, bold: true, color: K.lav, align: 'center' });
    c.t('Observer takes notes', 3.45, 3.05, 1.5, 0.45, { size: 10.5, color: K.grey, align: 'center', ls: 1.0 });
    c.t('Think aloud. Do not help.', 0.9, 2.15, 3, 0.3, { size: 12.5, bold: true, color: K.lav });
    ['Recruit', 'Brief', 'Tasks', 'Observe', 'Measure'].forEach((t, i) => {
      const x = 0.6 + i * 1.2;
      c.box(x, 5.75, 1.1, 0.48, t, { r: 0.24, fill: i === 4 ? K.blue : K.ink3, color: K.white, size: 12, bold: true });
      if (i < 4) c.t('›', x + 1.08, 5.75, 0.14, 0.48, { size: 14, bold: true, color: K.grey, align: 'center', valign: 'middle' });
    });
    c.t('Small rounds of about five users, repeated after each redesign.', 0.6, 6.4, 5.9, 0.3, { size: 11.5, color: K.grey });
    // right
    c.rect(6.8, 1.95, 5.93, 1.5, { fill: K.blueD, r: 0.16 });
    c.t('SCENARIO AND TASK', 7.05, 2.07, 4, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    c.t('You are a first-year student. A friend mentions Design Week. Find the keynote and register for it.', 7.05, 2.35, 5.45, 1.05, { size: 15, bold: true, color: K.white, ls: 1.1 });
    c.rect(6.8, 3.6, 5.93, 1.25, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.16 });
    c.t('SINGLE EASE QUESTION, AFTER EACH TASK', 7.05, 3.7, 5.4, 0.22, { size: 10, bold: true, color: K.lav, cs: 1.5 });
    for (let i = 0; i < 7; i++) c.box(7.2 + i * 0.7, 4.0, 0.52, 0.52, String(i + 1), { shape: 'ellipse', line: K.grey, color: K.paper, size: 12, bold: true });
    c.t('Very difficult', 7.05, 4.55, 1.4, 0.22, { size: 10, color: K.grey }); c.t('Very easy', 11.2, 4.55, 1.4, 0.22, { size: 10, color: K.grey, align: 'right' });
    c.t('RESULTS LOG TEMPLATE  (EMPTY)', 6.8, 5.0, 5, 0.22, { size: 10, bold: true, color: K.lav, cs: 1.5 });
    const cols = ['', 'Success', 'Time', 'Errors', 'SEQ', 'Notes'], cw = [0.6, 0.9, 0.8, 0.8, 0.7, 2.13];
    let xx = 6.8; cols.forEach((t, i) => { c.t(t, xx + 0.05, 5.28, cw[i], 0.25, { size: 9.5, bold: true, color: K.grey, valign: 'middle' }); xx += cw[i]; });
    for (let r = 0; r < 3; r++) { xx = 6.8; cols.forEach((t, i) => { c.rect(xx, 5.55 + r * 0.38, cw[i] - 0.04, 0.34, { fill: i === 0 ? K.ink3 : K.ink2, line: K.ink3, lw: 0.75, r: 0.04 }); if (i === 0) c.t('P' + (r + 1), xx, 5.55 + r * 0.38, cw[i] - 0.04, 0.34, { size: 10, bold: true, color: K.paper, align: 'center', valign: 'middle' }); xx += cw[i]; }); }
  }

  // ---------------------------------------------------------------- 48 FEEDBACK, CRITIQUE, ITERATION
  {
    const s = mkSlide(pres, {
      sec: 'u5', tone: 'light', eyebrow: 'FEEDBACK, DESIGN CRITIQUE AND ITERATION', title: 'Turn feedback into the next, better version',
      notes: `Feedback is only valuable when it changes the design. The workflow is: observe, prioritise, redesign, retest.

Analysing feedback: group observations into themes, note how many participants hit each problem, and separate what people did from what they said. Prioritising: weigh the impact on users against the effort to fix. The matrix on the left is a simple tool: quick wins with high impact and low effort come first; major projects need planning; fill-ins can wait; and low-impact, high-effort items should be reconsidered. Usability problems are often also rated by severity, considering frequency, impact and persistence.

The findings in the matrix are hypothetical, to demonstrate the method. Your own matrix must come from your test data.

Design critique is a structured conversation. A simple protocol is I like, I wish, What if: strengths first, then constructive improvements, then new ideas. Critique the design against goals, not the designer. Then redesign, retest, and repeat.`,
    });
    const c = S(s);
    const mx = 1.05, my = 2.2, mw = 5.7, mh = 4.1;
    c.rect(mx, my, mw, mh, { fill: K.card, line: K.line, lw: 0.75, r: 0.12 });
    c.line(mx + mw / 2, my, mx + mw / 2, my + mh, { color: K.line, w: 1 }); c.line(mx, my + mh / 2, mx + mw, my + mh / 2, { color: K.line, w: 1 });
    c.rect(mx, my, mw / 2, mh / 2, { fill: K.lavL, r: 0.12 });
    [['QUICK WINS', mx + 0.15, my + 0.1], ['MAJOR PROJECTS', mx + mw / 2 + 0.15, my + 0.1], ['FILL-INS', mx + 0.15, my + mh / 2 + 0.1], ['RECONSIDER', mx + mw / 2 + 0.15, my + mh / 2 + 0.1]].forEach((q) => c.t(q[0], q[1], q[2], 2.4, 0.22, { size: 9.5, bold: true, color: K.blueD, cs: 1.5 }));
    const notes = [['Register button below the fold', mx + 0.2, my + 0.5, K.lav], ['Form asks for ID twice', mx + 0.85, my + 1.3, K.lav], ['Ticket not available offline', mx + mw / 2 + 0.4, my + 0.7, K.amber], ['Unclear filter icon', mx + 0.3, my + mh / 2 + 0.55, 'DCDAE6'], ['Add dark mode', mx + mw / 2 + 0.5, my + mh / 2 + 1.0, 'DCDAE6']];
    notes.forEach((n) => c.box(n[1], n[2], 1.85, 0.62, n[0], { r: 0.06, fill: n[3], color: K.ink, size: 11.5, bold: true, shadow: { o: 0.12, b: 4, d: 1 }, ls: 1.0, pad: 0.08 }));
    c.t('HIGH IMPACT', mx, 1.95, 2, 0.22, { size: 9.5, bold: true, color: K.mute, cs: 1.5 }); c.t('LOW IMPACT', mx, my + mh + 0.05, 2, 0.22, { size: 9.5, bold: true, color: K.mute, cs: 1.5 });
    c.t('LOW EFFORT  →  HIGH EFFORT', mx + mw - 3, my + mh + 0.05, 3, 0.22, { size: 9.5, bold: true, color: K.mute, cs: 1.5, align: 'right' });
    c.t('Hypothetical findings, to show the method', 0.6, 6.62, 5.8, 0.22, { size: 10, color: K.mute });
    // loop
    const rx = 7.3;
    c.t('THE ITERATION LOOP', rx, 1.95, 4, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    ['Observe', 'Prioritise', 'Redesign', 'Retest'].forEach((t, i) => {
      const x = rx + i * 1.4;
      c.box(x, 2.3, 1.28, 0.7, t, { r: 0.12, fill: [K.ink, K.blueD, K.blue, K.lav][i], color: i === 3 ? K.ink : K.white, size: 13, bold: true });
      if (i < 3) c.t('›', x + 1.25, 2.3, 0.17, 0.7, { size: 15, bold: true, color: K.grey, align: 'center', valign: 'middle' });
    });
    c.path([[rx + 4.1, 3.0], [rx + 4.1, 3.2], [rx + 0.64, 3.2], [rx + 0.64, 3.02]], { color: K.grey, w: 1.25, arrow: true, dash: 'dash' });
    c.t('DESIGN CRITIQUE: I LIKE · I WISH · WHAT IF', rx, 3.6, 5.4, 0.22, { size: 10, bold: true, color: K.blueD, cs: 1.5 });
    [['I like', 'The ticket is instantly clear.', K.green], ['I wish', 'The form asked less of me.', K.amber], ['What if', 'Details were pre-filled from my ID?', K.lav]].forEach((n, i) => {
      const x = rx + i * 1.82;
      c.rect(x, 3.95, 1.7, 1.3, { fill: n[2], r: 0.08, shadow: { o: 0.14, b: 5, d: 1 } });
      c.t(n[0], x + 0.12, 4.02, 1.4, 0.3, { size: 13, bold: true, color: n[2] === K.green ? K.white : K.ink }); c.t(n[1], x + 0.12, 4.35, 1.5, 0.85, { size: 11.5, color: n[2] === K.green ? K.white : K.ink, ls: 1.0 });
    });
    c.rect(rx, 5.5, 5.43, 1.2, { fill: K.ink, r: 0.14 });
    c.t('BEFORE → AFTER', rx + 0.25, 5.6, 3, 0.22, { size: 9.5, bold: true, color: K.lav, cs: 2 });
    c.t([{ text: 'Register button below the fold', options: { color: K.grey } }, { text: '   →   ', options: { color: K.lav, bold: true } }, { text: 'sticky button, always visible', options: { color: K.white, bold: true } }], rx + 0.25, 5.9, 5.0, 0.7, { size: 13, valign: 'top', ls: 1.1 });
  }

  // ---------------------------------------------------------------- 49 UNIT 5 ASSIGNMENT
  assignSlide(pres, {
    sec: 'u5', eyebrow: 'UNIT 5  ·  ASSIGNMENT', title: 'Prototype it, test it, and improve it with evidence', num: '05', tag: 'The capstone: build, test and revise a complete experience.',
    exTitle: 'DELIVERABLES CHECKLIST',
    steps: [
      ['Create low- and high-fidelity wireframes', 'Mobile and web, for your proposed experience.'],
      ['Build an interactive prototype', 'Link screens, add transitions and key interaction states.'],
      ['Conduct usability testing', 'Recruit users, set tasks, observe and measure.'],
      ['Document your findings', 'Tasks, measures, observations, quotes and issues.'],
      ['Revise the design from the evidence', 'Show what changed and which finding caused it.'],
    ],
    notes: `Unit 5 assignment, the capstone: create low- and high-fidelity wireframes, build an interactive prototype, conduct usability testing, document findings, and revise the design based on evidence.

This is where the course outcome is demonstrated: students should be able to create mobile and web wireframes and working prototypes. Expect the work to cover both mobile and web, and to show a clear traceable chain from hypothesis, to test, to finding, to design change.

Grading focus (set by the instructor): quality of the wireframes and prototype; a rigorous test plan with realistic tasks; honest documentation, including problems that were found; and revisions that are justified by evidence. Remind students not to invent data. A modest test with real participants is better than a polished fake one.

Suggest a before and after comparison of at least one screen so the improvement is visible.`,
    visual: (c, x, y, w) => {
      ['Mobile and web wireframes', 'Interactive prototype link', 'Test plan and results log', 'Findings and quotes', 'Revision log with before/after'].forEach((t, i) => {
        const yy = y + i * 0.38;
        c.rect(x, yy + 0.05, 0.22, 0.22, { line: K.blueD, lw: 1.5, r: 0.04 });
        c.t(t, x + 0.38, yy, w - 0.4, 0.32, { size: 12, bold: true, color: K.ink, valign: 'middle' });
      });
    },
  });

  // ---------------------------------------------------------------- 50 FROM IDEA TO EXPERIENCE
  {
    const s = mkSlide(pres, {
      sec: 'end', tone: 'dark', eyebrow: 'CONCLUSION  ·  FROM IDEA TO EXPERIENCE', title: 'From idea to experience',
      notes: `Close the course by walking around the loop once. Research: understand people through interviews, observation and surveys. Define: write the problem and a testable hypothesis. Ideate: diverge, then converge on solutions. Structure: information architecture, user flows and route maps. Wireframe: low then high fidelity, for mobile and web. Prototype: make it interactive. Test: put it in front of users and measure. Iterate: use the evidence to improve, and start again.

Key takeaways. One: UX is the whole experience and UI is one layer of it. Two: start with people, using research, empathy and inclusive design. Three: structure comes before surface. Four: prototype and test early; evidence beats opinion. Five: design is never finished, only iterated.

Reinforce the final outcome: students should now be able to create mobile and web wireframes and working prototypes, and to justify their decisions with evidence.

Course references: Yablonski, Laws of UX; Garrett, The Elements of User Experience; Marsh, UX for Beginners; Kraft, User Experience Innovation; Tullis and Albert, Measuring the User Experience. Thank students and invite questions.`,
    });
    const c = S(s);
    const cx = 3.75, cy = 4.3, R = 1.85, nr = 0.52;
    const steps = ['Research', 'Define', 'Ideate', 'Structure', 'Wireframe', 'Prototype', 'Test', 'Iterate'];
    const cols = [K.lavL, K.lav, 'B6A8FF', '9A92FF', '7D8DFF', K.blue, '3A5CF0', K.blueD];
    const pos = steps.map((_, i) => [cx + R * Math.cos(-Math.PI / 2 + i * Math.PI / 4), cy + R * Math.sin(-Math.PI / 2 + i * Math.PI / 4)]);
    pos.forEach((p, i) => {
      const q = pos[(i + 1) % 8]; const dx = q[0] - p[0], dy = q[1] - p[1], d = Math.hypot(dx, dy);
      c.line(p[0] + dx / d * (nr + 0.04), p[1] + dy / d * (nr + 0.04), q[0] - dx / d * (nr + 0.08), q[1] - dy / d * (nr + 0.08), { color: K.grey, w: 1.5, arrow: true });
    });
    pos.forEach((p, i) => { c.ell(p[0], p[1], nr, { fill: cols[i] }); c.t(steps[i], p[0] - nr, p[1] - 0.15, nr * 2, 0.3, { size: 11, bold: true, color: i < 5 ? K.ink : K.white, align: 'center', valign: 'middle' }); });
    c.t('Gather', cx - 0.9, cy - 0.4, 1.8, 0.4, { size: 20, bold: true, color: K.paper, align: 'center' }); c.t('one example, one process', cx - 1.0, cy + 0.02, 2.0, 0.5, { size: 11.5, color: K.grey, align: 'center', ls: 1.0 });
    c.t('KEY TAKEAWAYS', 7.3, 1.95, 4, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    ['UX is the whole experience. UI is one layer of it.', 'Start with people: research, empathy, inclusion.', 'Structure comes before surface.', 'Prototype and test early. Evidence beats opinion.', 'Design is never finished, only iterated.'].forEach((t, i) => {
      const y = 2.3 + i * 0.64;
      c.t(String(i + 1), 7.3, y, 0.4, 0.5, { size: 20, bold: true, color: K.blue, valign: 'middle' });
      c.t(t, 7.8, y, 4.9, 0.5, { size: 14, bold: true, color: K.paper, valign: 'middle', ls: 1.0 });
    });
    c.rect(7.3, 5.65, 5.43, 1.05, { fill: K.blue, r: 0.16 });
    c.t('COURSE OUTCOME', 7.55, 5.74, 4, 0.22, { size: 9.5, bold: true, color: K.lav, cs: 2 });
    c.t('You can create mobile and web wireframes and working prototypes.', 7.55, 6.0, 5.0, 0.65, { size: 15, bold: true, color: K.white, ls: 1.05 });
  }
};
