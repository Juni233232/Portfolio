// Slides 23-31: Unit 3 - Applied Design Fundamentals
const L = require('./lib');
const { K, S, mkSlide } = L;
const assignSlide = require('./assign');

module.exports = function (pres) {
  // ---------------------------------------------------------------- 23 STORYBOARDING AND MOOD BOARDS
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'dark', eyebrow: 'UNIT 3  ·  STORYBOARDING AND MOOD BOARDS', title: 'Storyboards tell it. Mood boards feel it.',
      notes: `Before drawing screens, designers often create two kinds of visual stories.

A storyboard is a sequence of panels showing a person moving through a scenario: the context, what they do, and how they feel. It originated in film and animation and is widely used in UX to align a team on the user's story. Keep drawings simple; stick figures are fine. Each panel should answer: where are they, what do they want, what happens next?

A mood board is a collage that explores the look, feel and tone of a product: colours, typography, imagery, textures and keywords. It helps teams agree on a direction before investing in detailed UI, and it makes visual decisions intentional rather than arbitrary.

In Gather, the storyboard follows Aisha from seeing a poster to scanning a QR ticket. The mood board explores a feeling that is energetic, friendly and trustworthy.

Activity: have students sketch a four-panel storyboard in five minutes.`,
    });
    const c = S(s);
    c.t('STORYBOARD', 0.6, 1.95, 3, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    c.t('What happens, step by step', 0.6, 2.2, 6.2, 0.35, { size: 16, bold: true, color: K.paper });
    const pw = 1.45, gp = 0.2;
    const cap = ['Sees a poster for Design Week', 'Opens Gather, finds the event', 'Registers in two taps', 'Scans her QR ticket at the door'];
    for (let i = 0; i < 4; i++) {
      const x = 0.6 + i * (pw + gp), y = 2.75;
      c.rect(x, y, pw, 1.9, { fill: K.paper, r: 0.1 });
      const cx = x + pw / 2;
      if (i === 0) { c.rect(x + 0.18, y + 0.2, 0.62, 0.85, { fill: K.blue, r: 0.04 }); c.rect(x + 0.26, y + 0.3, 0.46, 0.08, { fill: K.white, r: 0.03 }); c.rect(x + 0.26, y + 0.46, 0.3, 0.05, { fill: K.lav, r: 0.025 }); c.ell(x + 1.05, y + 0.95, 0.14, { fill: K.ink }); c.rect(x + 0.93, y + 1.1, 0.24, 0.55, { fill: K.ink, r: 0.1 }); }
      if (i === 1) { c.ell(x + 0.45, y + 0.8, 0.14, { fill: K.ink }); c.rect(x + 0.33, y + 0.95, 0.24, 0.6, { fill: K.ink, r: 0.1 }); c.rect(x + 0.75, y + 0.45, 0.5, 0.9, { fill: K.ink3, r: 0.06 }); c.rect(x + 0.79, y + 0.52, 0.42, 0.76, { fill: K.blue, r: 0.04 }); c.line(x + 0.58, y + 1.1, x + 0.75, y + 0.95, { color: K.ink, w: 2 }); }
      if (i === 2) { c.rect(x + 0.45, y + 0.25, 0.55, 1.0, { fill: K.ink3, r: 0.07 }); c.rect(x + 0.5, y + 0.33, 0.45, 0.84, { fill: K.white, r: 0.05 }); c.ell(cx, y + 0.65, 0.17, { fill: K.green }); c.icon('FiCheck', cx, y + 0.65, 0.2, 'white'); c.rect(x + 0.56, y + 0.98, 0.33, 0.1, { fill: K.blue, r: 0.05 }); c.t('✓ ✓', x + 0.1, y + 1.4, 1.25, 0.3, { size: 12, color: K.green, bold: true, align: 'center' }); }
      if (i === 3) { c.rect(x + 0.15, y + 0.15, 0.55, 1.3, { fill: K.grey, r: 0.03 }); c.rect(x + 0.9, y + 0.5, 0.4, 0.4, { fill: K.white, line: K.ink, r: 0.03 }); [[0, 0], [1, 0], [0, 1], [1, 1], [0.5, 0.5]].forEach((q) => c.rect(x + 0.95 + q[0] * 0.2, y + 0.55 + q[1] * 0.2, 0.1, 0.1, { fill: K.ink })); c.ell(x + 0.95, y + 1.05, 0.12, { fill: K.ink }); c.rect(x + 0.85, y + 1.2, 0.2, 0.5, { fill: K.ink, r: 0.08 }); }
      c.box(x + 0.08, y + 0.08, 0.26, 0.26, String(i + 1), { shape: 'ellipse', fill: K.ink, color: K.paper, size: 10, bold: true });
      c.t(cap[i], x, y + 1.98, pw, 0.55, { size: 11.5, color: K.paper, ls: 1.0 });
    }
    // mood board
    c.t('MOOD BOARD', 7.4, 1.95, 3, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    c.t('How it should look and feel', 7.4, 2.2, 5.3, 0.35, { size: 16, bold: true, color: K.paper });
    const mx = 7.4, my = 2.75;
    c.rect(mx, my, 2.1, 1.7, { fill: K.blue, r: 0.1 }); c.t('Energetic', mx + 0.18, my + 1.15, 1.8, 0.4, { size: 18, bold: true, color: K.white });
    c.rect(mx + 2.2, my, 1.5, 0.95, { fill: K.lav, r: 0.1 }); c.t('Aa', mx + 2.2, my, 1.5, 0.95, { size: 30, bold: true, color: K.ink, align: 'center', valign: 'middle' });
    c.rect(mx + 3.8, my, 1.5, 1.7, { fill: K.paper, r: 0.1 });
    for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) c.ell(mx + 4.0 + i * 0.27, my + 0.28 + j * 0.34, 0.07, { fill: (i + j) % 3 === 0 ? K.blue : K.lav });
    c.rect(mx + 2.2, my + 1.05, 1.5, 0.65, { fill: K.ink3, r: 0.1 }); c.t('Inter Bold', mx + 2.2, my + 1.05, 1.5, 0.65, { size: 12.5, bold: true, color: K.paper, align: 'center', valign: 'middle' });
    [K.ink2, K.paper, K.grey, K.blueD].forEach((cl, i) => c.rect(mx + i * 1.33, my + 1.8, 1.25, 0.5, { fill: cl, line: K.ink3, lw: 0.75, r: 0.08 }));
    ['Friendly', 'Trustworthy', 'Open'].forEach((w, i) => c.box(mx + i * 1.38, my + 2.45, 1.28, 0.34, w, { r: 0.17, line: K.lav, color: K.lav, size: 11.5, bold: true }));
    [['Storyboard', 'Aligns the team on the user’s context and story before any screen is drawn.'], ['Mood board', 'Agrees the tone, colour and imagery so visual choices are intentional.']].forEach((d, i) => {
      const x = 0.6 + i * 6.15;
      c.rect(x, 5.9, 5.95, 0.85, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.14 });
      c.t([{ text: d[0] + '  ', options: { bold: true, color: K.lav, size: 13 } }, { text: d[1], options: { color: K.paper, size: 12.5 } }], x + 0.25, 5.9, 5.5, 0.85, { valign: 'middle', ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 24 USER JOURNEY MAPPING
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'light', eyebrow: 'USER JOURNEY MAPPING', title: 'See the whole experience, including the feelings',
      notes: `A user journey map visualises the steps a person takes to reach a goal, together with what they think and feel at each step. It turns scattered research into a single story.

Typical layers: stages across the top; the actions the user takes; the touchpoints they use, such as a poster, app or email; their thoughts; an emotional curve showing highs and lows; and opportunities for design improvement.

The emotional curve is the most powerful part. The lowest point marks the biggest pain, which becomes the highest priority opportunity. Notice here that the dip happens at registration, when a long form causes frustration.

Important: this map is a hypothesis for the persona Aisha. A real journey map must be built from research evidence, using interviews, observation and surveys, as you will do in the Unit 3 assignment. Compare it with a user flow: a journey shows feelings and context; a flow shows system steps.`,
    });
    const c = S(s);
    const lx = 0.6, lw = 1.45, cx0 = lx + lw, cw = (12.73 - cx0) / 6;
    const st = ['Discover', 'Decide', 'Register', 'Confirm', 'Attend', 'Follow up'];
    const rows = [
      ['ACTIONS', 2.5, 0.8, ['Sees a poster, hears from friends', 'Compares events and times', 'Fills in her details', 'Waits for confirmation', 'Shows her ticket at the door', 'Shares photos, looks for more']],
      ['TOUCHPOINTS', 3.4, 0.55, ['Poster, chat', 'App, website', 'Mobile form', 'Email, app', 'QR ticket', 'App feed']],
      ['THOUGHTS', 4.0, 0.7, ['“Is this for me?”', '“Is it worth my time?”', '“Why so many fields?”', '“Did that work?”', '“Where do I go?”', '“That was great!”']],
    ];
    st.forEach((t, i) => c.box(cx0 + i * cw + 0.03, 1.95, cw - 0.06, 0.42, t, { fill: i === 2 ? K.blueD : K.ink, color: K.white, size: 12.5, bold: true, r: 0.08 }));
    c.t('AISHA, YEAR 2 (HYPOTHESIS)', lx, 1.95, lw, 0.42, { size: 8.5, bold: true, color: K.mute, cs: 1, valign: 'middle', ls: 1.0 });
    rows.forEach((r) => {
      c.t(r[0], lx, r[1], lw, r[2], { size: 9.5, bold: true, color: K.mute, cs: 1.5, valign: 'middle' });
      r[3].forEach((tx, i) => { c.rect(cx0 + i * cw + 0.03, r[1], cw - 0.06, r[2], { fill: K.card, line: K.line, lw: 0.75, r: 0.08 }); c.t(tx, cx0 + i * cw + 0.12, r[1], cw - 0.24, r[2], { size: 11.5, color: K.ink, valign: 'middle', ls: 1.0, italic: r[0] === 'THOUGHTS' }); });
    });
    // emotion
    const ey = 4.85, eh = 1.1;
    c.t('EMOTION', lx, ey, lw, eh, { size: 9.5, bold: true, color: K.mute, cs: 1.5, valign: 'middle' });
    c.rect(cx0 + 0.03, ey, 6 * cw - 0.06, eh, { fill: K.paper2, r: 0.08 });
    c.line(cx0 + 0.1, ey + eh / 2, cx0 + 6 * cw - 0.1, ey + eh / 2, { color: K.line, w: 1, dash: 'dash' });
    c.icon('FiSmile', cx0 + 0.25, ey + 0.18, 0.2, 'green'); c.icon('FiFrown', cx0 + 0.25, ey + eh - 0.18, 0.2, 'red');
    const lv = [0.58, 0.52, 0.15, 0.38, 0.72, 0.92];
    const pts = lv.map((v, i) => [cx0 + i * cw + cw / 2, ey + eh - 0.15 - v * (eh - 0.3)]);
    c.path(pts, { color: K.blueD, w: 2.5 });
    pts.forEach((p, i) => c.ell(p[0], p[1], 0.09, { fill: i === 2 ? K.red : K.blueD, line: K.white, lw: 1.5 }));
    c.t('lowest point', pts[2][0] - 0.6, pts[2][1] - 0.42, 1.2, 0.2, { size: 10, bold: true, color: K.red, align: 'center' });
    // opportunities
    c.t('OPPORTUNITIES', lx, 6.05, lw, 0.7, { size: 9.5, bold: true, color: K.blueD, cs: 1.5, valign: 'middle' });
    ['Clear, inviting poster', 'Relevance tags on events', 'Pre-fill saved details', 'Instant confirmation', 'Simple directions', 'Suggest next events'].forEach((tx, i) => {
      c.rect(cx0 + i * cw + 0.03, 6.05, cw - 0.06, 0.7, { fill: i === 2 ? K.lav : K.lavL, r: 0.08 });
      c.t(tx, cx0 + i * cw + 0.12, 6.05, cw - 0.24, 0.7, { size: 11.5, bold: true, color: K.ink, valign: 'middle', ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 25 PAIN POINTS + CURB-CUT
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'dark', eyebrow: 'USER PAIN POINTS AND THE CURB-CUT EFFECT', title: 'Fix a pain point, and many people benefit',
      notes: `A pain point is a specific problem users experience when trying to reach a goal. A helpful way to sort them is into four categories: process pain points (too many steps or an unclear path), functional pain points (something is broken or slow), financial pain points (costs, fees or surprises), and support pain points (difficulty getting help). Categorising pain points helps teams see patterns and decide priorities.

The curb-cut effect is the idea that designs created for a specific group often benefit many others. Curb cuts, the ramps built into pavements, were campaigned for by disability rights activists, yet they also help people with strollers, luggage, bicycles and deliveries.

Digital equivalents: captions help deaf users but also viewers in noisy places; large tap targets help people with motor impairments and anyone using one hand; dark mode and voice input help many contexts.

Discuss: which pain point in Gather would benefit the most students if solved well?`,
    });
    const c = S(s);
    c.t('FOUR TYPES OF PAIN POINT', 0.6, 1.95, 4, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    const pp = [['FiList', 'Process', 'Too many steps or an unclear path', 'Three sign-ins to register'], ['FiAlertTriangle', 'Functional', 'Something is broken or slow', 'QR ticket will not load'], ['FiDollarSign', 'Financial', 'Costs, fees or surprises', 'A fee appears at checkout'], ['FiHelpCircle', 'Support', 'Hard to get help', 'No contact for access needs']];
    pp.forEach((p, i) => {
      const x = 0.6 + (i % 2) * 3.1, y = 2.3 + Math.floor(i / 2) * 2.2, w = 2.95, h = 2.05;
      c.rect(x, y, w, h, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.14 });
      c.box(x + 0.2, y + 0.2, 0.5, 0.5, '', { shape: 'ellipse', fill: [K.blueD, K.blue, K.lav, K.paper][i] }); c.icon(p[0], x + 0.45, y + 0.45, 0.26, i > 1 ? 'ink' : 'white');
      c.t(p[1], x + 0.85, y + 0.2, 2, 0.5, { size: 17, bold: true, color: K.paper, valign: 'middle' });
      c.t(p[2], x + 0.2, y + 0.82, w - 0.4, 0.5, { size: 12.5, color: K.grey, ls: 1.0 });
      c.t('GATHER: ' + p[3], x + 0.2, y + 1.42, w - 0.4, 0.5, { size: 11.5, bold: true, color: K.lav, ls: 1.0 });
    });
    // curb cut
    c.t('THE CURB-CUT EFFECT', 7.0, 1.95, 4, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    ['Wheelchairs', 'Strollers', 'Luggage', 'Bicycles'].forEach((t, i) => { const x = 7.0 + i * 1.45; c.box(x, 2.3, 1.35, 0.34, t, { r: 0.17, fill: K.ink3, color: K.paper, size: 11, bold: true }); c.line(x + 0.675, 2.66, 9.55, 3.35, { color: K.grey, w: 0.75 }); });
    c.rect(7.0, 3.75, 2.0, 0.28, { fill: K.grey }); c.rect(10.0, 3.2, 2.73, 0.83, { fill: K.lav });
    c.poly([[9.0, 3.75], [10.0, 3.2], [10.0, 3.75]], { fill: K.blue }); c.poly([[9.0, 4.03], [9.0, 3.75], [10.0, 3.75], [10.0, 4.03]], { fill: K.grey });
    c.t('road', 7.1, 4.06, 1, 0.2, { size: 10, color: K.grey }); c.t('pavement', 11.6, 4.06, 1.1, 0.2, { size: 10, color: K.grey, align: 'right' });
    c.t('Built for wheelchair users, used by almost everyone', 7.0, 4.3, 5.73, 0.3, { size: 12.5, bold: true, color: K.paper });
    c.t('DIGITAL CURB CUTS', 7.0, 4.85, 4, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    [['Captions', 'Made for deaf users, used in noisy places'], ['Large tap targets', 'Made for motor needs, used one-handed'], ['Dark mode and large text', 'Made for low vision, used at night']].forEach((d, i) => {
      const y = 5.2 + i * 0.5;
      c.icon('FiCheck', 7.12, y + 0.17, 0.2, 'lav');
      c.t([{ text: d[0] + '  ', options: { bold: true, color: K.paper } }, { text: d[1], options: { color: K.grey } }], 7.4, y, 5.3, 0.34, { size: 12.5, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 26 USER FLOWS
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'light', eyebrow: 'USER FLOWS', title: 'Map the path: registering for an event',
      notes: `A user flow is a diagram of the steps a user takes to complete a task, including decisions and alternative paths. It focuses on logic and screens rather than feelings, which is the difference from a journey map.

Standard flowchart conventions: rounded shapes mark where the flow starts or ends; rectangles are steps or screens; diamonds are decisions with labelled yes and no branches; arrows show direction.

Read the Gather flow aloud. A student opens the app, browses or searches, views details and the system asks: are they logged in? If not, they sign in with a campus ID and rejoin the flow. They choose a session and ticket, complete details, and the system checks seats. If seats are available they receive a confirmation and QR ticket plus a reminder; if not, they join a waitlist and are notified if a place opens.

A good flow reveals unnecessary steps and missing error paths before any screen is drawn. This flow becomes the basis for the wireframes in Unit 4.`,
    });
    const c = S(s);
    const bw = 1.55, bh = 0.8, pitch = 2.0, X = (i) => 0.6 + i * pitch;
    const arrow = (pts, o = {}) => c.path(pts, { color: o.color || K.grey, w: o.w || 1.5, arrow: true });
    const proc = (x, y, t, alt) => c.box(x, y, bw, bh, t, { r: 0.1, fill: alt ? K.lavL : K.blueD, color: alt ? K.ink : K.white, size: 12, bold: true, ls: 1.0 });
    const dec = (x, y, t) => { c.shape('diamond', x, y - 0.15, bw, bh + 0.3, { fill: K.card, line: K.ink, lw: 1.5 }); c.t(t, x + 0.25, y - 0.15, bw - 0.5, bh + 0.3, { size: 11, bold: true, color: K.ink, align: 'center', valign: 'middle', ls: 1.0 }); };
    const term = (x, y, t) => c.box(x, y, bw, bh * 0.7, t, { r: 0.28, fill: K.ink, color: K.white, size: 12, bold: true });
    const r1 = 2.15, cy1 = r1 + bh / 2;
    term(X(0), r1 + 0.12, 'Start: open the app'); proc(X(1), r1, 'Browse or search events'); proc(X(2), r1, 'View event details'); dec(X(3), r1, 'Logged in?'); proc(X(4), r1, 'Choose session and ticket'); proc(X(5), r1, 'Fill in details');
    arrow([[X(0) + bw, cy1], [X(1), cy1]]); arrow([[X(1) + bw, cy1], [X(2), cy1]]); arrow([[X(2) + bw, cy1], [X(3), cy1]]); arrow([[X(3) + bw, cy1], [X(4), cy1]]); arrow([[X(4) + bw, cy1], [X(5), cy1]]);
    c.t('Yes', X(3) + bw + 0.03, cy1 - 0.28, 0.4, 0.2, { size: 10.5, bold: true, color: K.green });
    // row 2
    const cy2 = 4.0;
    proc(X(3), cy2 - bh / 2, 'Sign in with campus ID', true); arrow([[X(3) + bw / 2, r1 + bh + 0.15], [X(3) + bw / 2, cy2 - bh / 2]]); c.t('No', X(3) + bw / 2 + 0.08, r1 + bh + 0.18, 0.4, 0.2, { size: 10.5, bold: true, color: K.red });
    arrow([[X(3) + bw, cy2], [X(3) + bw + 0.25, cy2], [X(3) + bw + 0.25, cy1 + 0.02]]);
    dec(X(5), cy2 - bh / 2, 'Seats available?'); arrow([[X(5) + bw / 2, r1 + bh], [X(5) + bw / 2, cy2 - bh / 2 - 0.15]]);
    proc(X(4), cy2 - bh / 2, 'Join the waitlist', true); arrow([[X(5), cy2], [X(4) + bw, cy2]]); c.t('No', X(4) + bw + 0.1, cy2 - 0.28, 0.4, 0.2, { size: 10.5, bold: true, color: K.red });
    // row 3
    const cy3 = 5.65;
    proc(X(5), cy3 - bh / 2, 'Confirmation and QR ticket'); arrow([[X(5) + bw / 2, cy2 + bh / 2 + 0.15], [X(5) + bw / 2, cy3 - bh / 2]]); c.t('Yes', X(5) + bw / 2 + 0.08, cy2 + bh / 2 + 0.2, 0.5, 0.2, { size: 10.5, bold: true, color: K.green });
    proc(X(4), cy3 - bh / 2, 'Send reminder or seat alert', true); arrow([[X(5), cy3], [X(4) + bw, cy3]]); arrow([[X(4) + bw / 2, cy2 + bh / 2], [X(4) + bw / 2, cy3 - bh / 2]]);
    term(X(3), cy3 - bh * 0.35, 'End'); arrow([[X(4), cy3], [X(3) + bw, cy3]]);
    // legend
    c.box(0.6, 6.4, 0.5, 0.26, '', { r: 0.13, fill: K.ink }); c.t('Start / end', 1.2, 6.4, 1, 0.26, { size: 10.5, color: K.mute, valign: 'middle' });
    c.box(2.5, 6.4, 0.5, 0.26, '', { r: 0.06, fill: K.blueD }); c.t('Main step', 3.1, 6.4, 1, 0.26, { size: 10.5, color: K.mute, valign: 'middle' });
    c.box(4.4, 6.4, 0.5, 0.26, '', { r: 0.06, fill: K.lavL }); c.t('Alternate path', 5.0, 6.4, 1.3, 0.26, { size: 10.5, color: K.mute, valign: 'middle' });
    c.shape('diamond', 6.7, 6.38, 0.5, 0.3, { fill: K.card, line: K.ink, lw: 1.25 }); c.t('Decision', 7.3, 6.4, 1, 0.26, { size: 10.5, color: K.mute, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 27 UX RESEARCH METHODS
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'dark', eyebrow: 'UX RESEARCH METHODS', title: 'Choose the method that answers your question',
      notes: `Research methods differ in two key ways, often shown on a landscape of methods popularised by the Nielsen Norman Group. Attitudinal methods capture what people say; behavioural methods capture what people do. Qualitative methods explain why and how; quantitative methods measure how many and how much.

Interviews are one-to-one conversations that reveal motivations and context. Surveys collect opinions from many people cheaply. Observation and field studies watch behaviour in real settings. Usability studies ask people to complete tasks with a design to expose where it fails. Other methods include focus groups, diary studies, card sorting and analytics.

Key message: what people say and what they do often differ, so combine methods. Early in a project, use qualitative methods to explore; later, use quantitative methods to measure. Christian Kraft's User Experience Innovation and Joel Marsh's UX for Beginners both discuss user research in practical terms.`,
    });
    const c = S(s);
    const qx = 0.6, qy = 2.5, qw = 3.15, qh = 1.9;
    c.t('ATTITUDINAL: WHAT PEOPLE SAY', qx, 2.1, qw, 0.3, { size: 9, bold: true, color: K.lav, cs: 1, align: 'center', valign: 'middle' }); c.t('BEHAVIOURAL: WHAT PEOPLE DO', qx + qw + 0.1, 2.1, qw, 0.3, { size: 9, bold: true, color: K.lav, cs: 1, align: 'center', valign: 'middle' });
    for (let i = 0; i < 4; i++) c.rect(qx + (i % 2) * (qw + 0.1), qy + Math.floor(i / 2) * (qh + 0.1), qw, qh, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.12 });
    const chips = [[0, 0, 'Interviews', 0.3, 0.55], [0, 0, 'Focus groups', 0.5, 1.2], [1, 0, 'Usability testing', 0.25, 0.55], [1, 0, 'Field observation', 0.45, 1.2], [0, 1, 'Surveys', 0.8, 0.85], [1, 1, 'Analytics, A/B tests', 0.3, 0.85]];
    chips.forEach((ch) => { const w = ch[2].length * 0.092 + 0.3; c.box(qx + ch[0] * (qw + 0.1) + ch[3], qy + ch[1] * (qh + 0.1) + ch[4], w, 0.36, ch[2], { r: 0.18, fill: ch[1] ? K.blue : K.lav, color: ch[1] ? K.white : K.ink, size: 12, bold: true }); });
    c.t('QUALITATIVE: WHY AND HOW', qx + 0.15, qy + 0.1, 2.8, 0.2, { size: 8.5, bold: true, color: K.grey, cs: 1 }); c.t('QUANTITATIVE: HOW MANY', qx + 0.15, qy + qh + 0.2, 2.8, 0.2, { size: 8.5, bold: true, color: K.grey, cs: 1 });
    // right list
    const lm = [
      ['Interviews', 'Qual', 'Why people act as they do. Deep insight, small samples.'],
      ['Surveys', 'Quant', 'What many people think. Cheap and broad, less depth.'],
      ['Observation', 'Qual', 'What people really do in their real context.'],
      ['Usability studies', 'Qual + quant', 'Where a design fails. Needs a prototype or product.'],
      ['Card sorting, diaries, analytics', 'Mixed', 'Content grouping, long-term habits, usage patterns.'],
    ];
    lm.forEach((m, i) => {
      const y = 1.95 + i * 0.96;
      c.rect(7.3, y, 5.43, 0.86, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.12 });
      c.t(m[0], 7.5, y + 0.1, 3.5, 0.3, { size: 15, bold: true, color: K.paper });
      c.box(11.2, y + 0.12, 1.35, 0.26, m[1], { r: 0.13, line: K.lav, color: K.lav, size: 10, bold: true });
      c.t(m[2], 7.5, y + 0.44, 5.0, 0.38, { size: 12.5, color: K.grey, ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 28 EMPATHY TOOLS
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'light', eyebrow: 'EMPATHY TOOLS', title: 'Understand what people say, think, do and feel',
      notes: `Empathy tools help you step into someone else's experience.

The empathy map, popularised by XPLANE, organises what you know about a user into four areas: what they say, think, do and feel. Gaps and contradictions between the quadrants, for example saying "I'm fine" while feeling anxious, are often where the best insights live.

Interviews are a core empathy tool. Ask open questions that invite stories, such as "Tell me about the last event you went to", rather than closed questions that invite yes or no. Follow up with "why" to dig deeper, and stay silent to give people time to think.

Observation reveals behaviour that people forget or cannot describe. Watch what they do, not only what they say. Always listen for motivations: goals, needs and context.

The map shown is a hypothesis for Aisha. In your assignment you will populate it with real research.`,
    });
    const c = S(s);
    const ox = 0.6, oy = 1.95, qw = 3.35, qh = 2.2;
    const q = [['SAYS', ['“I never know which events are for me.”', '“I would go if it was easy to sign up.”'], 0, 0], ['THINKS', ['Will I know anyone there?', 'Is registering worth the effort?'], 1, 0], ['DOES', ['Asks friends in the group chat', 'Abandons long forms'], 0, 1], ['FEELS', ['Anxious about missing out', 'Frustrated by repeated sign-ins'], 1, 1]];
    q.forEach((it) => {
      const x = ox + it[2] * (qw + 0.1), y = oy + it[3] * (qh + 0.1);
      c.rect(x, y, qw, qh, { fill: [K.lavL, K.card, K.card, K.lavL][it[2] + it[3] * 2], line: K.line, lw: 0.75, r: 0.14 });
      c.t(it[0], x + (it[0] === 'FEELS' ? 0.65 : 0.25), y + 0.18, 2, 0.25, { size: 11, bold: true, color: K.blueD, cs: 2 });
      it[1].forEach((tx, j) => c.t(tx, x + 0.25, y + 0.62 + j * 0.74, qw - (it[3] === 0 && it[2] === 0 ? 0.9 : 0.5), 0.7, { size: 13, color: K.ink, ls: 1.05, italic: it[0] === 'SAYS' }));
    });
    c.ell(ox + qw + 0.05, oy + qh + 0.05, 0.42, { fill: K.ink }); c.t('Aisha', ox + qw - 0.4, oy + qh - 0.2, 0.9, 0.5, { size: 14, bold: true, color: K.white, align: 'center', valign: 'middle' });
    c.t('Hypothesis to validate with research', ox, 6.58, 6.8, 0.22, { size: 10, color: K.mute });
    // right: interview tips
    const rx = 7.75;
    c.t('INTERVIEW LIKE A DESIGNER', rx, 1.98, 5, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    c.box(rx, 2.35, 4.98, 0.62, '', { r: 0.12, fill: K.card, line: K.line });
    c.icon('FiX', rx + 0.28, 2.66, 0.2, 'red'); c.t('Do you like events?', rx + 0.55, 2.35, 4.3, 0.62, { size: 14, color: K.mute, valign: 'middle' });
    c.box(rx, 3.07, 4.98, 0.9, '', { r: 0.12, fill: K.blueD });
    c.icon('FiCheck', rx + 0.28, 3.52, 0.2, 'white'); c.t('Tell me about the last event you went to. What happened?', rx + 0.55, 3.07, 4.3, 0.9, { size: 14, bold: true, color: K.white, valign: 'middle', ls: 1.05 });
    [['FiMessageCircle', 'Ask “why?”', 'Keep asking until you reach the real reason.'], ['FiEye', 'Watch, don’t only ask', 'Observe what people actually do.'], ['FiTarget', 'Listen for motivation', 'Goals, needs and context drive behaviour.']].forEach((t, i) => {
      const y = 4.3 + i * 0.82;
      c.box(rx, y, 0.5, 0.5, '', { shape: 'ellipse', fill: K.ink }); c.icon(t[0], rx + 0.25, y + 0.25, 0.24, 'white');
      c.t(t[1], rx + 0.7, y - 0.04, 4.2, 0.3, { size: 14, bold: true, color: K.ink }); c.t(t[2], rx + 0.7, y + 0.27, 4.2, 0.3, { size: 12.5, color: K.mute });
    });
  }

  // ---------------------------------------------------------------- 29 SEGMENTATION AND PERSONAS
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'dark', eyebrow: 'USER SEGMENTATION AND PERSONAS', title: 'From groups of users to one clear persona',
      notes: `User segmentation divides your audience into groups that share needs, behaviours or characteristics. Segments can be based on demographics, but in UX, behaviour and familiarity are usually more useful. For Gather we might segment by how often students attended events last semester: high, moderate and low engagement.

Always write explicit criteria before you recruit, so that each participant clearly belongs in one segment. The criteria shown are examples.

A persona is a fictional but research-based character that represents a segment. Alan Cooper popularised personas in software design. A good persona includes a name and photo, context, goals, frustrations, behaviours and a quote, so the team can make decisions by asking "what would Aisha need?"

Warning: this persona is a proto-persona based on assumptions. A real persona must be built from your own research findings, as in the Unit 3 assignment. Never invent research and present it as fact.`,
    });
    const c = S(s);
    c.t('SEGMENT BY BEHAVIOUR', 0.6, 1.95, 5, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
    c.t('Example criteria: events attended last semester', 0.6, 2.22, 5.6, 0.3, { size: 13, color: K.grey });
    [['High engagement', '4 or more events', 5.4, K.blue], ['Moderate engagement', '1 to 3 events', 3.8, K.lav], ['Low engagement', 'None yet', 2.2, K.grey]].forEach((sg, i) => {
      const y = 2.75 + i * 1.12;
      c.rect(0.6, y, sg[2], 0.95, { fill: sg[3], r: 0.12 });
      c.t(sg[0], 0.85, y + 0.1, sg[2] - 0.3, 0.38, { size: 16, bold: true, color: i === 0 ? K.white : K.ink });
      c.t(sg[1], 0.85, y + 0.5, sg[2] - 0.3, 0.3, { size: 12.5, color: i === 0 ? 'DDE4FF' : K.ink3 });
    });
    c.rect(0.6, 6.15, 5.5, 0.6, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.12 });
    c.t('Write the criteria down before recruiting, so every participant belongs to one segment.', 0.8, 6.15, 5.15, 0.6, { size: 11.5, color: K.paper, valign: 'middle', ls: 1.0 });
    // persona card
    const px = 6.5, py = 1.95, pw = 6.23, ph = 4.8;
    c.rect(px, py, pw, ph, { fill: K.paper, r: 0.18 });
    c.ell(px + 0.75, py + 0.8, 0.45, { fill: K.lav }); c.t('A', px + 0.3, py + 0.35, 0.9, 0.9, { size: 26, bold: true, color: K.ink, align: 'center', valign: 'middle' });
    c.t('Aisha Rahman', px + 1.4, py + 0.4, 3.3, 0.4, { size: 20, bold: true, color: K.ink });
    c.t('20  ·  Year 2  ·  Visual Communication', px + 1.4, py + 0.82, 4.3, 0.28, { size: 12.5, color: K.mute });
    c.box(px + 1.4, py + 1.15, 1.95, 0.28, 'Moderate engagement', { r: 0.14, fill: K.lav, color: K.ink, size: 10.5, bold: true });
    c.box(px + pw - 1.85, py + 0.25, 1.65, 0.26, 'FICTIONAL EXAMPLE', { r: 0.13, line: K.red, color: K.red, size: 8.5, bold: true, cs: 1 });
    const blocks = [['GOALS', ['Join events that help her portfolio', 'Register quickly between classes']], ['FRUSTRATIONS', ['Events announced in many places', 'Long forms and repeated sign-ins']], ['BEHAVIOURS', ['Checks her phone between lectures', 'Asks friends before deciding']]];
    blocks.forEach((b, i) => {
      const x = px + 0.3 + (i % 2) * 2.95, y = py + 1.65 + Math.floor(i / 2) * 1.35;
      c.t(b[0], x, y, 2.7, 0.22, { size: 9.5, bold: true, color: K.blueD, cs: 2 });
      b[1].forEach((t, j) => { c.ell(x + 0.05, y + 0.4 + j * 0.42, 0.04, { fill: K.blueD }); c.t(t, x + 0.18, y + 0.27 + j * 0.42, 2.65, 0.4, { size: 11.5, color: K.ink, ls: 1.0 }); });
    });
    c.t('TECH COMFORT', px + 3.25, py + 3.0, 2.7, 0.22, { size: 9.5, bold: true, color: K.blueD, cs: 2 });
    [['Mobile', 0.9], ['Web', 0.7]].forEach((t, i) => { c.t(t[0], px + 3.25, py + 3.3 + i * 0.32, 0.7, 0.24, { size: 11.5, color: K.ink, valign: 'middle' }); c.rect(px + 4.0, py + 3.4 + i * 0.32, 1.9, 0.07, { fill: K.line, r: 0.035 }); c.rect(px + 4.0, py + 3.4 + i * 0.32, 1.9 * t[1], 0.07, { fill: K.blueD, r: 0.035 }); });
    c.rect(px + 0.3, py + 4.15, pw - 0.6, 0.5, { fill: K.lavL, r: 0.1 });
    c.t('“If it takes more than a minute, I will just ask a friend.”  (hypothesis)', px + 0.45, py + 4.15, pw - 0.9, 0.5, { size: 12, italic: true, color: K.ink, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 30 USABILITY, HEURISTIC, FIELD TESTING
  {
    const s = mkSlide(pres, {
      sec: 'u3', tone: 'light', eyebrow: 'USABILITY, HEURISTIC ANALYSIS AND FIELD TESTING', title: 'Three ways to find usability problems',
      notes: `These three evaluation approaches answer different questions.

Usability testing observes real users attempting realistic tasks with a design, usually in a lab or remotely. It shows where people actually struggle and yields measures such as success rate and time on task.

Heuristic evaluation is an expert inspection. Evaluators review an interface against recognised principles, most famously Jakob Nielsen's ten usability heuristics, and list problems with severity ratings. It is fast and cheap, but experts are not real users.

Field testing, or field studies, observes people using a product in their real environment, such as a student registering on a crowded bus. It captures context, interruptions and constraints that a lab cannot.

Use heuristics early to catch obvious problems, usability tests to learn how users behave, and field tests to check real-world fit. Tullis and Albert's Measuring the User Experience explains the metrics.

The ten heuristics are shown at the bottom for reference.`,
    });
    const c = S(s);
    const cw = 3.88, gx = 0.245;
    const cols = [
      ['FiUsers', 'Usability testing', [['Who', 'Real users from your audience'], ['Where', 'Lab or remote session'], ['Output', 'Task success, time, errors']]],
      ['FiClipboard', 'Heuristic evaluation', [['Who', 'Experts reviewing the design'], ['Against', 'Nielsen’s ten heuristics'], ['Output', 'Issue list with severity']]],
      ['FiMapPin', 'Field testing', [['Who', 'Real users in real life'], ['Where', 'Their own environment'], ['Output', 'Context, interruptions, workarounds']]],
    ];
    cols.forEach((cl, i) => {
      const x = 0.6 + i * (cw + gx), y = 1.95;
      c.rect(x, y, cw, 3.1, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
      c.box(x + 0.22, y + 0.2, 0.55, 0.55, '', { shape: 'ellipse', fill: [K.blueD, K.ink, K.lav][i] }); c.icon(cl[0], x + 0.495, y + 0.475, 0.28, i === 2 ? 'ink' : 'white');
      c.t(cl[1], x + 0.95, y + 0.2, cw - 1.1, 0.55, { size: 17, bold: true, color: K.ink, valign: 'middle' });
      cl[2].forEach((r, j) => {
        const yy = y + 1.0 + j * 0.68;
        c.line(x + 0.22, yy, x + cw - 0.22, yy, { color: K.line, w: 0.75 });
        c.t(r[0].toUpperCase(), x + 0.22, yy + 0.08, 0.9, 0.5, { size: 9.5, bold: true, color: K.blueD, cs: 1.5, valign: 'middle' });
        c.t(r[1], x + 1.15, yy + 0.08, cw - 1.4, 0.5, { size: 12.5, color: K.ink, valign: 'middle', ls: 1.0 });
      });
    });
    c.t("NIELSEN'S TEN USABILITY HEURISTICS", 0.6, 5.3, 6, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    const hs = ['Visibility of system status', 'Match with the real world', 'User control and freedom', 'Consistency and standards', 'Error prevention', 'Recognition over recall', 'Flexibility and efficiency', 'Aesthetic, minimal design', 'Help users fix errors', 'Help and documentation'];
    hs.forEach((h, i) => {
      const x = 0.6 + (i % 5) * 2.43, y = 5.62 + Math.floor(i / 5) * 0.55;
      c.rect(x, y, 2.33, 0.47, { fill: K.lavL, r: 0.1 });
      c.t(String(i + 1), x + 0.1, y, 0.3, 0.47, { size: 11, bold: true, color: K.blueD, valign: 'middle' });
      c.t(h, x + 0.38, y, 1.9, 0.47, { size: 10.5, bold: true, color: K.ink, valign: 'middle', ls: 0.95 });
    });
  }

  // ---------------------------------------------------------------- 31 UNIT 3 ASSIGNMENT
  assignSlide(pres, {
    sec: 'u3', eyebrow: 'UNIT 3  ·  ASSIGNMENT', title: 'Research real users and build a persona', num: '03', tag: 'Plan, run and analyse your own research. Evidence first.',
    exTitle: 'EXAMPLE SEGMENT CRITERIA',
    steps: [
      ['Create a user research plan', 'Goals, method, questions and timeline.'],
      ['Recruit respondents', 'Find real users from your target audience.'],
      ['Prepare questions and task scenarios', 'Open questions plus realistic tasks.'],
      ['Record the answers', 'Notes or recordings, with consent.'],
      ['Segment: high, moderate, low', 'Use explicit criteria for engagement or familiarity.'],
      ['Develop a persona from the findings', 'Base every detail on your research evidence.'],
    ],
    notes: `Unit 3 assignment: create a user research plan, recruit respondents, prepare questions and task scenarios, record answers, segment users into high, moderate and low engagement or familiarity groups using explicit criteria, and develop a persona from the findings.

Stress three points. First, write the segmentation criteria before recruiting and justify them; for example, number of events attended last semester or time since first using a registration app. Second, ethics: get informed consent, protect privacy and explain how data will be used. Third, evidence: every goal, frustration and quote in the persona must trace back to something a participant said or did. Do not invent quotes.

Encourage students to recruit a small but varied group and to plan at least one realistic task scenario, such as "You want to register for a workshop on Friday. Show me how you would do that."

The criteria shown on this slide are examples only. The submission format is set by the instructor.`,
    visual: (c, x, y, w) => {
      [['High', '4+ events attended', K.blueD, 3.8], ['Moderate', '1 to 3 events', '9A92FF', 2.7], ['Low', 'No events yet', K.lav, 1.7]].forEach((r, i) => {
        const yy = y + i * 0.58;
        c.rect(x, yy, r[3], 0.5, { fill: r[2], r: 0.08 });
        c.t([{ text: r[0] + '  ', options: { bold: true } }, { text: r[1], options: {} }], x + 0.12, yy, r[3] - 0.15, 0.5, { size: 11, color: i === 0 ? K.white : K.ink, valign: 'middle' });
      });
      c.t('Criteria are written before recruiting.', x, y + 1.66, w, 0.22, { size: 10.5, color: K.mute, italic: true });
    },
  });
};
