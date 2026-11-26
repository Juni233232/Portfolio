// Slides 01-13: Introduction + Unit 1
const L = require('./lib');
const { K, S, mkSlide, phone, gatherHome, gatherDetail, gatherRegister, gatherSuccess, browser, gatherWebList } = L;
const assignSlide = require('./assign');

module.exports = function (pres) {
  // ---------------------------------------------------------------- 01 COVER
  {
    const s = mkSlide(pres, {
      sec: 'intro', cover: true, tone: 'dark', eyebrow: 'SVCB3003  ·  UI & UX DESIGN', title: 'UI/UX\nDesign',
      notes: `Welcome to SVCB3003 UI & UX Design. Over 45 instructional hours and five units, you will learn how designers understand people, structure ideas, and turn them into interfaces that work on phones and on the web.

Point to the cover: the phone and the browser window are the same product, a university event registration platform we will call Gather. We will return to Gather in almost every unit, so you can watch one idea travel from research, to personas, to flows, to wireframes, to a tested prototype.

Course references: Yablonski, Laws of UX; Garrett, The Elements of User Experience; Marsh, UX for Beginners; Kraft, User Experience Innovation; Tullis and Albert, Measuring the User Experience.

Ask: "What app did you use today without thinking about it? Why was it easy?"`,
    });
    const c = S(s);
    c.ell(9.9, 3.9, 2.7, { fill: K.blue, tr: 78 }); c.ell(11.6, 1.6, 1.1, { fill: K.lav, tr: 55 }); c.ell(7.4, 6.4, 0.9, { fill: K.lav, tr: 80 });
    c.t('Understanding\nthe Experience', 0.7, 4.7, 5.2, 1.1, { size: 30, bold: true, color: K.lav, ls: 1.0 });
    c.t('Visual Communication  ·  45 instructional hours  ·  Five units', 0.7, 6.55, 6.3, 0.3, { size: 12, color: K.grey });
    const b = browser(s, 6.9, 1.0, 5.85, 600, { dark: false });
    b.rect(0, 0, 1000, 54, { fill: 'FFFFFF' }); b.line(0, 54, 1000, 54, { color: 'E2E0E8', w: 0.75 });
    b.rect(28, 16, 22, 22, { fill: K.blue, r: 7 }); b.t('Gather', 58, 14, 120, 26, { size: 16, bold: true, color: K.ink, valign: 'middle' });
    ['Events', 'Clubs', 'My tickets', 'Help'].forEach((tx, i) => b.t(tx, 420 + i * 82, 14, 80, 26, { size: 11, color: i === 0 ? K.ink : '6B6E78', bold: i === 0, valign: 'middle' }));
    b.pill(850, 14, 70, 26, 'Sign in', { fill: K.blue, color: K.white, size: 10 }); b.ell(956, 27, 13, { fill: K.lav });
    b.t('Find your next campus event', 40, 78, 600, 40, { size: 30, bold: true, color: K.ink });
    b.t('Talks, workshops and socials from every faculty.', 40, 124, 600, 20, { size: 13, color: '6B6E78' });
    b.rect(40, 156, 520, 40, { fill: 'EEEDF3', r: 20 }); b.t('Search events, clubs, talks', 66, 156, 400, 40, { size: 11, color: '6B6E78', valign: 'middle' });
    [[K.blue, K.lav], [K.lav, K.blue], [K.ink, K.lav]].forEach((cl, i) => { const x = 40 + i * 316; b.rect(x, 232, 296, 368 - 16, { fill: cl[0], r: 14 }); b.ell(x + 236, 292, 40, { fill: cl[1], tr: 45 }); });
    const p = phone(s, 6.25, 2.95, 3.95);
    gatherHome(p, false);
  }

  // ---------------------------------------------------------------- 02 WHAT WILL YOU LEARN
  {
    const s = mkSlide(pres, {
      sec: 'intro', tone: 'light', eyebrow: 'WHAT WILL YOU LEARN?', title: 'By the end, you will build real experiences',
      notes: `This course moves from understanding to making. Read the six outcomes aloud and connect each one to a unit: outcomes one and two come from Unit 1, three from Unit 2, four from Unit 3, five from Unit 4, and the sixth, the capstone, is built in Units 4 and 5.

Stress that the final outcome is practical: you will create mobile and web wireframes and working prototypes. Everything before that exists to make those wireframes smarter, more inclusive, and testable.

The outcomes here are written to match the course description; instructors should align the wording with the official course outline if it differs.

Teaching tip: ask students to rate their confidence in each outcome from one to five now, and again at the end of the course.`,
    });
    const c = S(s);
    c.t('COURSE OBJECTIVE', 0.6, 2.0, 3.6, 0.25, { size: 11, bold: true, color: K.mute, cs: 2 });
    c.t('Understand how people experience products. Then design, prototype and test interfaces that work for them.', 0.6, 2.35, 3.6, 2.4, { size: 19, bold: true, color: K.ink, ls: 1.1 });
    [['5', 'units'], ['45', 'instructional hours'], ['5', 'assignments']].forEach((m, i) => {
      c.t(m[0], 0.6, 4.95 + i * 0.6, 0.9, 0.5, { size: 28, bold: true, color: K.blueD, valign: 'middle' });
      c.t(m[1], 1.45, 4.95 + i * 0.6, 2.6, 0.5, { size: 14, color: K.mute, valign: 'middle' });
    });
    const outs = [
      ['FiBookOpen', 'Explain what UX and UI are, and why both matter.', 'Unit 1'],
      ['FiEye', 'Apply UX laws, principles and accessibility practice.', 'Units 1–2'],
      ['FiCompass', 'Plan with design thinking, sprints and competitor analysis.', 'Unit 2'],
      ['FiUsers', 'Research users with journeys, flows, personas and testing.', 'Unit 3'],
      ['FiLayers', 'Use hierarchy, Gestalt, type and colour with intent.', 'Unit 4'],
      ['FiSmartphone', 'Create mobile and web wireframes and working prototypes.', 'Units 4–5'],
    ];
    const cw = 2.56, ch = 2.3, gx = 0.25, gy = 0.2, x0 = 4.6;
    outs.forEach((o, i) => {
      const x = x0 + (i % 3) * (cw + gx), y = 1.95 + Math.floor(i / 3) * (ch + gy);
      const hero = i === 5;
      c.rect(x, y, cw, ch, { fill: hero ? K.blueD : K.card, line: hero ? undefined : K.line, lw: 0.75, r: 0.16 });
      c.t(String(i + 1).padStart(2, '0'), x + 0.25, y + 0.2, 1, 0.4, { size: 22, bold: true, color: hero ? K.lav : K.blueD });
      c.icon(o[0], x + cw - 0.45, y + 0.4, 0.34, hero ? 'white' : 'ink');
      c.t(o[1], x + 0.25, y + 0.78, cw - 0.45, 1.0, { size: 14, bold: true, color: hero ? K.white : K.ink, ls: 1.05 });
      c.t(o[2], x + 0.25, y + ch - 0.42, 1.8, 0.25, { size: 10, bold: true, color: hero ? K.lav : K.mute, cs: 1.5 });
    });
  }

  // ---------------------------------------------------------------- 03 DESIGN IS EVERYWHERE
  {
    const s = mkSlide(pres, {
      sec: 'intro', tone: 'dark', eyebrow: 'DESIGN IS EVERYWHERE', title: 'Good design is invisible. Bad design is a mystery.',
      notes: `Start with the everyday, because design is not only screens. Don Norman's The Design of Everyday Things (supplementary reading, not on the course list) gave us a vocabulary: affordances are what an object lets you do; signifiers tell you where to act; mapping is how controls relate to results; feedback tells you what just happened.

Walk through the four vignettes. The door whose handle says pull but whose sign says push has conflicting signals. The stove with four knobs and four burners forces you to guess the mapping. A toggle without a clear state label leaves you unsure whether it shows what is on, or what will happen if you tap. An error that says only "Invalid input" gives no help.

Each one is a UX problem in the physical or digital world. Close with the reflection prompt and let students share two or three examples.`,
    });
    const c = S(s);
    const cw = 2.85, gx = 0.243, y0 = 1.95, ch = 3.75;
    const cards = [
      ['The door that lies', 'A pull handle, a push sign. Conflicting signals make us doubt ourselves.', 'Signifiers'],
      ['Which knob is which?', 'Controls that do not map to what they control force guessing.', 'Mapping'],
      ['Is it on or off?', 'Does the switch show the current state, or the action it will take?', 'System status'],
      ['"Invalid input"', 'What was invalid? Where? How do I fix it? The message does not say.', 'Feedback'],
    ];
    cards.forEach((cd, i) => {
      const x = 0.6 + i * (cw + gx);
      c.rect(x, y0, cw, ch, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.16 });
      c.t(cd[2].toUpperCase(), x + 0.25, y0 + 0.2, 2.4, 0.22, { size: 9, bold: true, color: K.lav, cs: 2 });
      const ox = x + cw / 2, oy = y0 + 1.38;
      if (i === 0) { // door
        c.rect(ox - 0.55, oy - 0.8, 1.1, 1.75, { fill: K.paper2, r: 0.04 });
        c.rect(ox - 0.42, oy - 0.68, 0.84, 1.5, { fill: 'D9D7CE', r: 0.03 });
        c.rect(ox + 0.18, oy - 0.2, 0.09, 0.62, { fill: K.ink3, r: 0.04 });
        c.box(ox - 0.34, oy - 0.55, 0.52, 0.22, 'PUSH', { fill: K.ink, color: K.paper, size: 8, bold: true, r: 0.03 });
        c.line(ox + 0.8, oy - 0.1, ox + 0.45, oy - 0.1, { color: K.lav, w: 1.5, arrow: true });
      } else if (i === 1) { // stove
        [[-0.42, -0.5], [0.42, -0.5], [-0.42, 0.18], [0.42, 0.18]].forEach((p, j) => { c.ell(ox + p[0], oy + p[1] + 0.2, 0.3, { fill: K.ink3, line: K.grey, lw: 1 }); c.ell(ox + p[0], oy + p[1] + 0.2, 0.14, { fill: K.ink2 }); });
        for (let j = 0; j < 4; j++) { c.ell(ox - 0.95 + j * 0.63, oy + 0.88, 0.14, { fill: K.paper }); c.line(ox - 0.95 + j * 0.63, oy + 0.88, ox - 0.95 + j * 0.63, oy + 0.8, { color: K.ink, w: 2 }); }
        c.t('?', ox - 0.2, oy - 0.42, 0.4, 0.5, { size: 26, bold: true, color: K.lav, align: 'center' });
      } else if (i === 2) { // toggle
        c.rect(ox - 0.6, oy - 0.5, 1.2, 0.56, { fill: K.blue, r: 0.28 }); c.ell(ox - 0.32, oy - 0.22, 0.22, { fill: K.white });
        c.t('Dark mode', ox - 0.7, oy + 0.15, 1.4, 0.25, { size: 11, color: K.paper, align: 'center' });
        c.t('Is that ON?', ox - 0.7, oy + 0.45, 1.4, 0.25, { size: 11, color: K.lav, bold: true, align: 'center' });
      } else { // error
        c.t('Email', ox - 1.05, oy - 0.65, 1.5, 0.2, { size: 9, color: K.grey });
        c.rect(ox - 1.05, oy - 0.42, 2.1, 0.46, { fill: K.ink3, line: K.red, lw: 1.5, r: 0.08 });
        c.t('aisha@uni', ox - 0.92, oy - 0.42, 1.8, 0.46, { size: 11, color: K.paper, valign: 'middle' });
        c.t('Invalid input', ox - 1.05, oy + 0.12, 2.1, 0.25, { size: 11, bold: true, color: K.red });
        c.t('No reason. No fix.', ox - 1.05, oy + 0.42, 2.1, 0.25, { size: 10, color: K.grey });
      }
      c.t(cd[0], x + 0.25, y0 + 2.5, cw - 0.5, 0.3, { size: 15, bold: true, color: K.paper });
      c.t(cd[1], x + 0.25, y0 + 2.83, cw - 0.5, 0.85, { size: 12, color: K.grey, ls: 1.05 });
    });
    c.rect(0.6, 5.95, 12.13, 0.78, { fill: K.blue, r: 0.39 });
    c.box(0.85, 6.1, 1.9, 0.48, 'PAUSE & REFLECT', { fill: K.lav, color: K.ink, size: 10, bold: true, r: 0.24, cs: 1.5 });
    c.t('What object or app confused you this week? What should it have told you?', 3.0, 5.95, 9.5, 0.78, { size: 16, bold: true, color: K.white, valign: 'middle' });
  }

  // ---------------------------------------------------------------- 04 LEARNING JOURNEY
  {
    const s = mkSlide(pres, {
      sec: 'intro', tone: 'light', eyebrow: 'THE LEARNING JOURNEY', title: 'Five units, one continuous process',
      notes: `Use this slide as the map for the whole course. Each unit is a step up: Unit 1 builds the vocabulary and mindset; Unit 2 turns that mindset into a strategy, using design thinking, sprints and competitive analysis; Unit 3 gives you research and empathy tools to understand users; Unit 4 teaches the visual and structural decisions that shape the interface, ending in wireframes; and Unit 5 makes those wireframes interactive, tests them, and improves them.

Notice the Gather milestone under each step. Your assignments follow the same rhythm, so by Unit 5 you will have documented an evidence-based design.

The process is not a straight line. Real teams loop back after testing, which is why "iterate" sits above the staircase. Ask students: "Which step do you expect to be hardest?"`,
    });
    const c = S(s);
    const units = [
      ['UNIT 1', 'Introduction of UX/UI Design', 'Slides 5–13', 'Audit an existing app', 1.5, K.lavL, K.ink],
      ['UNIT 2', 'A Strategy Plan', 'Slides 14–22', 'Find gaps, plan solutions', 1.95, K.lav, K.ink],
      ['UNIT 3', 'Applied Design Fundamentals', 'Slides 23–31', 'Research, journey, persona', 2.4, '9A92FF', K.ink],
      ['UNIT 4', 'Emphasis in UX Design', 'Slides 32–40', 'Flows and wireframes', 2.85, K.blue, K.white],
      ['UNIT 5', 'User Testing', 'Slides 41–49', 'Prototype, test, revise', 3.3, K.blueD, K.white],
    ];
    const bw = 2.3, gap = 0.158, base = 5.4;
    units.forEach((u, i) => {
      const x = 0.6 + i * (bw + gap), h = u[4], y = base - h;
      c.rect(x, y, bw, h, { fill: u[5], r: 0.12 });
      c.t(u[0], x + 0.2, y + 0.16, 1.6, 0.22, { size: 10, bold: true, color: u[6], cs: 2 });
      c.t(u[1], x + 0.2, y + 0.42, bw - 0.35, 0.7, { size: 15, bold: true, color: u[6], ls: 1.0 });
      c.t(u[2], x + 0.2, base - 0.34, 1.9, 0.22, { size: 10, color: u[6] === K.white ? 'DDE4FF' : K.mute });
      c.t(u[3], x, base + 0.15, bw, 0.55, { size: 12.5, bold: true, color: K.ink, ls: 1.0 });
      c.t('GATHER MILESTONE', x, base + 0.72, bw, 0.2, { size: 8, bold: true, color: K.mute, cs: 1.5 });
    });
    // process chips in empty upper-left
    c.t('THE COMPLETE UX PROCESS', 0.6, 2.0, 5, 0.25, { size: 11, bold: true, color: K.mute, cs: 2 });
    ['Understand', 'Plan', 'Research', 'Design', 'Test'].forEach((tx, i) => {
      const x = 0.6 + i * 1.25;
      c.box(x, 2.38, 1.12, 0.46, tx, { r: 0.23, fill: i === 0 ? K.ink : K.card, line: K.line, color: i === 0 ? K.white : K.ink, size: 12, bold: true });
      if (i < 4) c.t('›', x + 1.1, 2.38, 0.18, 0.46, { size: 16, bold: true, color: K.grey, align: 'center', valign: 'middle' });
    });
    c.t('Iterate: every test sends you back to learn more', 0.6, 3.05, 4.7, 0.3, { size: 13, color: K.mute, italic: true });
  }

  // ---------------------------------------------------------------- 05 UX vs UI
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'dark', eyebrow: 'UNIT 1  ·  UX VS UI', title: 'Same product. Two different questions.',
      notes: `Here is the same registration screen seen through two lenses. User Experience, UX, covers the whole journey: how easy it is to find the event, how many steps registration takes, whether you trust what happens with your data, and how you recover from a mistake. User Interface, UI, is the layer you see and touch: colour, type, spacing, buttons, fields, and how they respond.

A helpful analogy is a restaurant. UI is the menu design, plates and lighting. UX is whether you are seated quickly, understand the menu, receive your order correctly, and leave wanting to return.

Key message: UI is part of UX, not a synonym for it. A beautiful interface can still deliver a poor experience, and a plain interface can work wonderfully. Marsh's UX for Beginners offers a gentle introduction to this distinction.

Activity: ask students to name one UX decision and one UI decision visible on this screen.`,
    });
    const c = S(s);
    const p = phone(s, 5.3, 1.95, 4.75, { frame: K.ink3 });
    gatherRegister(p, false);
    // left: UX  (horizontal leaders only, each at the height of its target, so no lines cross)
    c.t('UX', 0.6, 1.95, 1, 0.55, { size: 34, bold: true, color: K.blue });
    c.t('USER EXPERIENCE', 1.5, 2.1, 3, 0.25, { size: 10, bold: true, color: K.lav, cs: 2 });
    const ux = [['Can I finish in two steps?', 20, 97], ['Does it save me effort?', 16, 178], ['Do I know where my data goes?', 16, 444]];
    ux.forEach((u) => {
      const ty = p.Y(u[2]), tx = p.X(u[1]);
      c.t(u[0], 0.6, ty - 0.175, 3.3, 0.35, { size: 14, bold: true, color: K.white, valign: 'middle' });
      c.line(4.0, ty, tx, ty, { color: K.blue, w: 1.25 }); c.ell(tx, ty, 0.06, { fill: K.blue });
    });
    c.t('How it works for a person trying to get something done', 0.6, 5.95, 3.9, 0.6, { size: 15, color: K.paper, ls: 1.1 });
    // right: UI
    c.t('UI', 12.0, 1.95, 0.73, 0.55, { size: 34, bold: true, color: K.lav, align: 'right' });
    c.t('USER INTERFACE', 8.9, 2.1, 3, 0.25, { size: 10, bold: true, color: K.lav, cs: 2, align: 'right' });
    c.t('How it looks and responds', 8.83, 2.6, 3.9, 0.5, { size: 15, color: K.paper, align: 'right', ls: 1.1 });
    const ui = [['Rounded fields, clear borders', 284, 244], ['Familiar checkbox and labels', 210, 358], ['One strong action colour', 284, 523]];
    ui.forEach((u) => {
      const ty = p.Y(u[2]), tx = p.X(u[1]);
      c.t(u[0], 8.95, ty - 0.175, 3.78, 0.35, { size: 14, bold: true, color: K.white, valign: 'middle' });
      c.line(tx, ty, 8.8, ty, { color: K.lav, w: 1.25 }); c.ell(tx, ty, 0.06, { fill: K.lav });
    });
    c.t('UI is one layer of UX, not a synonym for it.', 8.95, 6.45, 3.78, 0.3, { size: 12, italic: true, color: K.grey });
  }

  // ---------------------------------------------------------------- 06 WHY UI/UX MATTERS
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'light', eyebrow: 'WHY UI/UX MATTERS', title: 'Design decides whether people succeed',
      notes: `Why does this field exist? Because interfaces sit between people and the things they need to do: travel somewhere, talk to a friend, pay a bill, join an event. When the interface is clear, people succeed and barely notice it. When it is confusing, they lose time, make mistakes, or give up.

Purpose: UI/UX design helps people reach their goals with less effort and more confidence. Significance: it shapes trust, cost, safety and inclusion. Influence: it affects real users every day, in small moments.

The three schematic screens on the right show moments where UX is felt. A map must be readable at a glance while moving. A chat app reassures you through message status. A payment screen must make the total and the way back obvious. These are simplified original drawings, not official screenshots.

Ask: "Which of these moments would hurt most if it were badly designed?"`,
    });
    const c = S(s);
    const rows = [
      ['FiUsers', 'For people', 'Time, effort and safety', 'A confusing screen wastes minutes. In maps or health apps, clarity matters even more.'],
      ['FiBriefcase', 'For organisations', 'Trust, cost and loyalty', 'Products that are easy to use tend to need less support and earn more trust.'],
      ['FiGlobe', 'For society', 'Access and inclusion', 'Who can use a service decides who can take part in it.'],
    ];
    rows.forEach((r, i) => {
      const y = 2.0 + i * 1.5;
      c.box(0.6, y, 0.72, 0.72, '', { shape: 'ellipse', fill: i === 0 ? K.blueD : (i === 1 ? K.ink : K.lav) });
      c.icon(r[0], 0.96, y + 0.36, 0.34, i === 2 ? 'ink' : 'white');
      c.t(r[1].toUpperCase(), 1.6, y - 0.02, 4.6, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
      c.t(r[2], 1.6, y + 0.22, 4.9, 0.36, { size: 20, bold: true, color: K.ink });
      c.t(r[3], 1.6, y + 0.62, 4.7, 0.7, { size: 13, color: K.mute, ls: 1.05 });
    });
    // three mini phones
    const px = [6.95, 8.85, 10.75], ph = 3.55;
    const caps = [['Clarity', 'Guidance at a glance'], ['Reassurance', 'Status you can trust'], ['Confidence', 'Total and exit are clear']];
    px.forEach((x, i) => {
      const p = phone(s, x, 1.95, ph, { noShadow: false });
      if (i === 0) { // map
        p.rect(0, 0, 300, 600, { fill: 'E9EFE6', r: 32 });
        p.rect(0, 150, 300, 40, { fill: 'FFFFFF' }); p.rect(120, 110, 36, 490, { fill: 'FFFFFF' }); p.rect(0, 380, 300, 30, { fill: 'FFFFFF' });
        p.rect(170, 220, 100, 110, { fill: 'D7E5D0', r: 10 }); p.rect(20, 220, 80, 120, { fill: 'D7E5D0', r: 10 });
        p.path([[138, 570], [138, 395], [225, 395], [225, 170], [138, 170], [138, 112]], { color: K.blue, w: 5 });
        p.rect(14, 36, 272, 74, { fill: K.ink, r: 16 }); p.icon('FiArrowLeft', 44, 73, 28, 'white');
        p.t('200 m', 76, 46, 150, 26, { size: 20, bold: true, color: K.white }); p.t('Turn left onto Campus Rd', 76, 76, 200, 28, { size: 10.5, color: K.lav });
        p.rect(14, 520, 272, 62, { fill: K.white, r: 18, shadow: { o: 0.2, b: 8, d: 2 } }); p.t('12 min', 34, 530, 140, 28, { size: 20, bold: true, color: K.green }); p.t('arrive 9:41', 34, 558, 140, 16, { size: 10, color: K.mute });
      } else if (i === 1) { // chat
        p.rect(0, 0, 300, 600, { fill: 'EFEAE2', r: 32 });
        p.rect(0, 30, 300, 56, { fill: K.ink3 }); p.ell(30, 58, 14, { fill: K.lav }); p.t('Study group', 54, 40, 180, 36, { size: 14, bold: true, color: K.white, valign: 'middle' });
        [[40, 'Where is the event?', 0], [118, 'Hall B at 10', 1], [196, 'Registered ✓', 0], [274, 'See you there', 1]].forEach((m) => {
          const mine = m[2] === 1; const w = 150;
          p.rect(mine ? 286 - w : 14, 110 + (m[0] - 40) * 0.9, w, 48, { fill: mine ? 'DCF2D2' : K.white, r: 14 });
          p.t(m[1], (mine ? 286 - w : 14) + 14, 110 + (m[0] - 40) * 0.9, w - 28, 48, { size: 11, color: K.ink, valign: 'middle' });
          if (mine) p.t('✓✓', 258, 110 + (m[0] - 40) * 0.9 + 30, 24, 14, { size: 9, bold: true, color: K.blue, align: 'right' });
        });
        p.rect(14, 540, 272, 38, { fill: K.white, r: 19 }); p.t('Message', 34, 540, 200, 38, { size: 11, color: K.grey, valign: 'middle' });
      } else { // payment
        p.t('Review order', 20, 44, 260, 26, { size: 18, bold: true, color: K.ink });
        [['Workshop pass', '$12.00'], ['Booking fee', '$0.00']].forEach((r, j) => { p.rect(16, 94 + j * 60, 268, 52, { fill: K.paper, r: 12 }); p.t(r[0], 30, 94 + j * 60, 160, 52, { size: 12, color: K.ink, valign: 'middle' }); p.t(r[1], 190, 94 + j * 60, 80, 52, { size: 12, bold: true, color: K.ink, align: 'right', valign: 'middle' }); });
        p.line(20, 232, 280, 232, { color: K.line, w: 1 }); p.t('Total', 30, 246, 120, 24, { size: 13, color: K.mute }); p.t('$12.00', 150, 240, 120, 32, { size: 24, bold: true, color: K.ink, align: 'right' });
        p.box(16, 470, 268, 50, 'Pay $12.00', { r: 25, fill: K.blueD, color: K.white, size: 15, bold: true }); p.t('Back to edit order', 16, 532, 268, 20, { size: 11, color: K.blueD, bold: true, align: 'center' });
      }
      c.t(caps[i][0], x - 0.05, 5.65, 1.9, 0.3, { size: 13, bold: true, color: K.ink });
      c.t(caps[i][1], x - 0.05, 5.95, 1.9, 0.45, { size: 11.5, color: K.mute, ls: 1.0 });
    });
    c.t('Simplified original schematics for teaching, not official screenshots.', 0.6, 6.55, 6, 0.25, { size: 10, color: K.mute });
  }

  // ---------------------------------------------------------------- 07 FUNDAMENTALS OF UX
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'light', eyebrow: 'FUNDAMENTALS OF USER EXPERIENCE', title: 'Five qualities of a good experience',
      notes: `Introduce the five qualities as the questions a good experience must answer. Usability: can people complete tasks effectively and efficiently? The international standard ISO 9241-11 defines usability as effectiveness, efficiency and satisfaction for specified users and goals in a specified context. Usefulness: does it solve a real need, or is it a clever feature nobody wants? Accessibility: can people with different abilities and situations use it? Clarity: is it obvious what each element is and what to do next? Satisfaction: does the experience feel good, building confidence?

These overlap. A product can be usable but not useful, or delightful but inaccessible. Great experiences satisfy all five at once.

Link each quality to Gather on the right. Ask students to give a score out of five on each quality for an app they use daily, and say which is weakest.`,
    });
    const c = S(s);
    const cx = 3.55, cy = 4.38, R = 1.78, r = 0.68;
    const q = [
      ['FiTarget', 'Usability', 'Can people finish tasks without struggle?', 'Register in two steps'],
      ['FiZap', 'Usefulness', 'Does it solve a real need?', 'Students find events that matter to them'],
      ['FiGlobe', 'Accessibility', 'Can everyone use it, in any situation?', 'Works with screen readers and large text'],
      ['FiEye', 'Clarity', 'Is the next step obvious?', 'One clear primary button per screen'],
      ['FiSmile', 'Satisfaction', 'Does it feel good to use?', 'Instant QR ticket, no guesswork'],
    ];
    const pos = q.map((_, i) => [cx + R * Math.cos(-Math.PI / 2 + i * 2 * Math.PI / 5), cy + R * Math.sin(-Math.PI / 2 + i * 2 * Math.PI / 5)]);
    pos.forEach((p) => { const dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy); c.line(cx + dx / d * 0.82, cy + dy / d * 0.82, p[0] - dx / d * (r + 0.02), p[1] - dy / d * (r + 0.02), { color: K.line, w: 2 }); });
    c.ell(cx, cy, 0.78, { fill: K.lav }); c.t('Experience', cx - 0.7, cy - 0.15, 1.4, 0.3, { size: 14, bold: true, color: K.ink, align: 'center', valign: 'middle' });
    q.forEach((it, i) => {
      const [x, y] = pos[i];
      c.ell(x, y, r, { fill: i % 2 ? K.ink : K.blueD });
      c.icon(it[0], x, y - 0.22, 0.32, 'white');
      c.t(it[1], x - r, y + 0.1, 2 * r, 0.3, { size: 12, bold: true, color: K.white, align: 'center', valign: 'middle' });
    });
    q.forEach((it, i) => {
      const y = 1.95 + i * 0.95;
      c.t(String(i + 1), 6.95, y, 0.4, 0.45, { size: 22, bold: true, color: K.blueD });
      c.t(it[1], 7.45, y, 5.2, 0.32, { size: 17, bold: true, color: K.ink });
      c.t(it[2], 7.45, y + 0.34, 5.2, 0.26, { size: 13, color: K.mute });
      c.t('Gather: ' + it[3], 7.45, y + 0.6, 5.2, 0.26, { size: 12, color: K.blueD, bold: true });
    });
    c.t('ISO 9241-11: usability = effectiveness, efficiency and satisfaction in a context of use.', 0.6, 6.68, 6, 0.25, { size: 10, color: K.mute });
  }

  // ---------------------------------------------------------------- 08 FIVE PLANES
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'dark', eyebrow: 'THE FIVE PLANES OF UX', title: 'From abstract strategy to concrete surface',
      notes: `Jesse James Garrett's The Elements of User Experience describes five planes, built from the bottom up. Each plane depends on the ones beneath it, and decisions at lower planes constrain what is possible above.

Strategy: user needs and product objectives, the "why". Scope: functional specifications and content requirements, the "what". Structure: interaction design and information architecture, how pieces fit together and behave. Skeleton: interface design, navigation design and information design, the layout of controls and content. Surface: visual design, what the product looks and feels like.

Notice how beginners often jump straight to Surface, picking colours before knowing the strategy. The framework warns against that. If strategy is unclear, a beautiful surface cannot rescue it.

In Gather: strategy is helping students find events and helping the university grow participation. The surface we see on the cover is the last thing we decide.`,
    });
    const c = S(s);
    const planes = [
      ['Surface', 'Visual design', 'How it looks and feels', 'Gather: colours, type, imagery, polish', K.lav],
      ['Skeleton', 'Interface · navigation · information design', 'Where controls and content sit', 'Gather: place of Register, fields and tabs', 'A9A2FF'],
      ['Structure', 'Interaction design · information architecture', 'How the pieces fit and flow', 'Gather: Browse, Details, Register, Ticket', '8197FF'],
      ['Scope', 'Functional specs · content requirements', 'What features and content are included', 'Gather: search, filters, registration, QR ticket', '5E7FFF'],
      ['Strategy', 'User needs · product objectives', 'Why we are building it', 'Gather: help students find events; grow participation', K.blue],
    ];
    const rh = 0.84, gap = 0.12;
    planes.forEach((p, i) => {
      const y = 1.95 + i * (rh + gap);
      c.shape('parallelogram', 1.45, y, 3.6, rh, { fill: p[4] });
      c.t(p[0], 1.9, y, 2.9, rh, { size: 20, bold: true, color: i < 3 ? K.ink : K.white, valign: 'middle' });
      c.t(p[1], 5.45, y + 0.04, 7.2, 0.3, { size: 14, bold: true, color: K.white, valign: 'middle' });
      c.t(p[2] + '  ·  ' + p[3], 5.45, y + 0.38, 7.2, 0.42, { size: 12.5, color: K.grey, ls: 1.0 });
    });
    c.line(0.95, 6.3, 0.95, 2.35, { color: K.lav, w: 2, arrow: true });
    c.t('CONCRETE', 0.45, 1.97, 1, 0.25, { size: 9, bold: true, color: K.lav, cs: 1.5 });
    c.t('ABSTRACT', 0.45, 6.4, 1, 0.25, { size: 9, bold: true, color: K.lav, cs: 1.5 });
    c.t('After Garrett, The Elements of User Experience', 5.45, 6.72, 7, 0.22, { size: 10, color: K.grey });
  }

  // ---------------------------------------------------------------- 09 LAWS OF UX
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'light', eyebrow: 'LAWS OF UX', title: 'Psychology you can design with',
      notes: `Jon Yablonski's Laws of UX collects principles from psychology that explain how people perceive, decide and remember. They are best treated as useful heuristics, not strict laws of nature.

Jakob's Law: users spend most of their time on other products, so they expect yours to work the same way. Fitts's Law: the time to reach a target depends on its distance and size, so make important targets large and close. Hick's Law: the time to decide increases with the number and complexity of choices. Miller's Law: working memory is limited, often quoted as around seven items plus or minus two, so chunk information. The Doherty Threshold: productivity soars when a system and its user interact at a pace of under roughly 400 ms. The Peak-End Rule: people judge an experience largely by its most intense point and its end.

Challenge students to find one example of each law in their phone's home screen.`,
    });
    const c = S(s);
    const cw = 3.88, ch = 2.28, gx = 0.245;
    const laws = [
      ['Jakob’s Law', 'Users expect your product to work like the ones they already know.'],
      ['Fitts’s Law', 'Targets that are larger and closer are quicker and easier to hit.'],
      ['Hick’s Law', 'Decision time grows with the number and complexity of choices.'],
      ['Miller’s Law', 'Working memory is limited, so chunk information into small groups.'],
      ['Doherty Threshold', 'Respond within about 400 ms, or show progress to keep flow.'],
      ['Peak–End Rule', 'People judge an experience by its most intense moment and its end.'],
    ];
    laws.forEach((lw, i) => {
      const x = 0.6 + (i % 3) * (cw + gx), y = 1.95 + Math.floor(i / 3) * (ch + 0.2);
      c.rect(x, y, cw, ch, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
      c.t(String(i + 1).padStart(2, '0'), x + cw - 0.65, y + 0.12, 0.5, 0.25, { size: 10, bold: true, color: K.grey, align: 'right' });
      c.t(lw[0], x + 0.22, y + 1.32, cw - 0.4, 0.3, { size: 16, bold: true, color: K.ink });
      c.t(lw[1], x + 0.22, y + 1.66, cw - 0.4, 0.55, { size: 12, color: K.mute, ls: 1.0 });
      const dx = x + 0.22, dy = y + 0.2; // diagram origin, area 3.44 x 1.0
      if (i === 0) {
        [0, 1].forEach((k) => {
          const bx = dx + 0.15 + k * 0.95;
          c.rect(bx, dy, 0.6, 1.0, { fill: K.paper, line: K.line, r: 0.06 });
          c.rect(bx + 0.06, dy + 0.08, 0.48, 0.1, { fill: k ? K.blue : K.grey, r: 0.05 });
          c.bars(bx + 0.06, dy + 0.3, 0.48, 3, { h: 0.05, gap: 0.12, fill: 'D5D3CB' });
          c.rect(bx + 0.06, dy + 0.86, 0.48, 0.1, { fill: k ? K.blue : K.grey, r: 0.05 });
        });
        c.t('=', dx + 0.72, dy + 0.3, 0.3, 0.4, { size: 20, bold: true, color: K.blueD, align: 'center', valign: 'middle' });
        c.t('Same layout, same places', dx + 2.0, dy + 0.2, 1.4, 0.6, { size: 12, bold: true, color: K.blueD, ls: 1.0 });
      } else if (i === 1) {
        c.ell(dx + 0.15, dy + 0.25, 0.09, { fill: K.ink }); c.ell(dx + 0.15, dy + 0.75, 0.09, { fill: K.ink });
        c.rect(dx + 0.6, dy + 0.02, 1.1, 0.46, { fill: K.blue, r: 0.23 }); c.line(dx + 0.28, dy + 0.25, dx + 0.58, dy + 0.25, { color: K.green, w: 1.5, arrow: true });
        c.rect(dx + 2.6, dy + 0.62, 0.35, 0.26, { fill: K.red, r: 0.13 }); c.line(dx + 0.28, dy + 0.75, dx + 2.58, dy + 0.75, { color: K.red, w: 1.5, arrow: true, dash: 'dash' });
        c.t('near + big', dx + 1.8, dy + 0.12, 1.5, 0.25, { size: 11, bold: true, color: K.green }); c.t('far + small', dx + 1.2, dy + 0.8, 1.5, 0.2, { size: 11, bold: true, color: K.red });
      } else if (i === 2) {
        [[2, 'Easy: 2 choices'], [8, 'Slower: 8 choices']].forEach((m, k) => {
          const bx = dx + 0.1 + k * 1.75;
          c.t(m[1], bx, dy - 0.04, 1.7, 0.2, { size: 11, bold: true, color: k ? K.mute : K.blueD });
          c.rect(bx, dy + 0.2, 1.5, 0.8, { fill: K.paper, line: K.line, r: 0.06 });
          for (let j = 0; j < m[0]; j++) c.rect(bx + 0.08, dy + 0.27 + j * (0.66 / m[0]), 1.34, 0.66 / m[0] - 0.04, { fill: k ? 'D5D3CB' : K.lav, r: 0.03 });
        });
      } else if (i === 3) {
        c.t('0123456789', dx, dy - 0.02, 3.4, 0.45, { size: 24, bold: true, color: K.grey, valign: 'middle' });
        c.t('012 345 6789', dx, dy + 0.5, 3.4, 0.45, { size: 24, bold: true, color: K.blueD, valign: 'middle' });
      } else if (i === 4) {
        c.rect(dx, dy + 0.35, 3.3, 0.22, { fill: K.paper2, r: 0.11 }); c.rect(dx, dy + 0.35, 1.6, 0.22, { fill: K.green, r: 0.11 });
        c.rect(dx + 1.6, dy + 0.35, 1.7, 0.22, { fill: K.amber, r: 0.11 });
        c.t('0 ms', dx, dy + 0.62, 0.8, 0.22, { size: 11, color: K.mute }); c.t('≈400 ms', dx + 1.2, dy + 0.62, 1.0, 0.22, { size: 11, bold: true, color: K.ink });
        c.t('feels instant', dx, dy + 0.05, 1.6, 0.25, { size: 11, bold: true, color: K.green }); c.t('show progress', dx + 1.65, dy + 0.05, 1.7, 0.25, { size: 11, bold: true, color: K.amber });
      } else {
        const pts = [[0.1, 0.75], [0.7, 0.55], [1.2, 0.15], [1.8, 0.6], [2.4, 0.7], [3.1, 0.3]];
        c.path(pts.map((p) => [dx + p[0], dy + p[1]]), { color: K.blueD, w: 2.25 });
        [2, 5].forEach((k) => c.ell(dx + pts[k][0], dy + pts[k][1], 0.07, { fill: K.blue }));
        c.t('peak', dx + 1.05, dy - 0.1, 0.8, 0.22, { size: 11, bold: true, color: K.blueD }); c.t('end', dx + 2.95, dy + 0.35, 0.6, 0.22, { size: 11, bold: true, color: K.blueD });
      }
    });
    c.t('After Yablonski, Laws of UX', 0.6, 6.78, 5, 0.2, { size: 9, color: K.mute });
  }

  // ---------------------------------------------------------------- 10 PRODUCT DEVELOPMENT LIFE CYCLE
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'light', eyebrow: 'PRODUCT DEVELOPMENT LIFE CYCLE', title: 'UX takes part in every stage',
      notes: `Many people imagine UX as a design step in the middle. In reality UX contributes at every stage of the product development life cycle.

Discover: teams explore the opportunity; UX runs interviews, observation and competitor reviews. Define: teams agree scope and requirements; UX writes personas, problem statements and user stories. Design: UX creates flows, wireframes, prototypes and the visual interface. Develop: engineers build; UX supplies specs and checks the build matches, including accessibility. Test: quality assurance and usability testing find problems; UX triages them. Launch and learn: the team releases, monitors analytics and feedback, and feeds learning into the next cycle.

The cycle varies between companies; some use agile sprints instead of long phases. The point is that UX involvement early is cheaper than fixing problems late.

Bottom row shows what Gather would produce at each stage.`,
    });
    const c = S(s);
    const stages = ['Discover', 'Define', 'Design', 'Develop', 'Test', 'Launch & learn'];
    const team = ['Find the opportunity and need', 'Agree scope, goals and requirements', 'Shape the solution and screens', 'Engineers build features', 'Check quality and fix bugs', 'Release, monitor and maintain'];
    const ux = ['Interviews, observation, competitor review', 'Personas, problem statements, user stories', 'Flows, wireframes, prototypes, UI', 'Specs, design QA, accessibility checks', 'Usability testing and issue triage', 'Analytics, feedback, next iteration'];
    const out = ['Student interview notes', 'Persona and problem statement', 'Wireframes and prototype', 'Component library and hand-off', 'Test report and fixes', 'Usage data and backlog'];
    const x0 = 1.95, cw = (12.73 - x0) / 6;
    stages.forEach((st, i) => {
      c.shape(i === 0 ? 'homePlate' : 'chevron', x0 + i * cw - (i ? 0.1 : 0), 1.95, cw + (i ? 0.1 : 0) - 0.02, 0.62, { fill: i % 2 ? K.ink : K.blueD });
      c.t(st, x0 + i * cw + (i ? 0.22 : 0.12), 1.95, cw - 0.4, 0.62, { size: 12.5, bold: true, color: K.white, valign: 'middle', align: 'center' });
    });
    const rows = [['THE TEAM', team, 2.75, 1.0, K.card, K.ink], ['UX DESIGN', ux, 3.85, 1.5, K.lavL, K.ink], ['GATHER OUTPUT', out, 5.45, 1.2, K.card, K.blueD]];
    rows.forEach((r) => {
      c.t(r[0], 0.6, r[2], 1.25, r[3], { size: 10, bold: true, color: K.mute, cs: 1.5, valign: 'middle' });
      r[1].forEach((tx, i) => {
        c.rect(x0 + i * cw + 0.03, r[2], cw - 0.08, r[3], { fill: r[4], line: r[4] === K.card ? K.line : undefined, lw: 0.75, r: 0.1 });
        c.t(tx, x0 + i * cw + 0.15, r[2] + 0.08, cw - 0.32, r[3] - 0.16, { size: 12.5, bold: r[0] !== 'THE TEAM', color: r[5], valign: 'middle', ls: 1.0 });
      });
    });
  }

  // ---------------------------------------------------------------- 11 DESIGNER'S ROLE
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'dark', eyebrow: 'THE UX DESIGNER’S ROLE', title: 'Be deep in one thing, curious about many',
      notes: `UX design is a team sport, and designers shape their careers along a spectrum. Specialists have deep expertise in one craft, such as UX research, interaction design, content design or accessibility. Generalists have broad skills across research, design and prototyping; they thrive in small teams and start-ups. T-shaped designers combine both: the vertical bar is depth in one area, the horizontal bar is the ability to understand and collaborate across disciplines. The T-shape metaphor was popularised by the design firm IDEO.

Career applications: UX appears in mobile apps, websites, games, healthcare, finance, education, government services, e-commerce and emerging areas such as AR and VR. Titles vary by company, so focus on the skills, not just the label.

Reflection: which letter do you want to become, and what is your first deep skill?`,
    });
    const c = S(s);
    const cols = [['Specialist', 'Deep expertise in one craft, such as research or interaction design.'], ['Generalist', 'Broad skills across research, design and prototyping. Strong in small teams.'], ['T-shaped', 'Deep in one area, able to collaborate across many. Popularised by IDEO.']];
    cols.forEach((cl, i) => {
      const x = 0.6 + i * 4.1, w = 3.9;
      c.rect(x, 1.95, w, 2.95, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.16 });
      const cx = x + w / 2;
      if (i === 0) c.rect(cx - 0.2, 2.2, 0.4, 1.3, { fill: K.blue, r: 0.06 });
      if (i === 1) { c.rect(cx - 1.4, 2.5, 2.8, 0.4, { fill: K.lav, r: 0.06 }); }
      if (i === 2) { c.rect(cx - 1.4, 2.2, 2.8, 0.4, { fill: K.lav, r: 0.06 }); c.rect(cx - 0.2, 2.2, 0.4, 1.3, { fill: K.blue, r: 0.06 }); }
      c.t(i === 0 ? 'DEPTH' : (i === 1 ? 'BREADTH' : 'BOTH'), x + 0.25, 3.62, w - 0.5, 0.25, { size: 9, bold: true, color: K.grey, cs: 2, align: 'center' });
      c.t(cl[0], x + 0.25, 3.9, w - 0.5, 0.35, { size: 18, bold: true, color: K.paper, align: 'center' });
      c.t(cl[1], x + 0.3, 4.27, w - 0.6, 0.6, { size: 12, color: K.grey, align: 'center', ls: 1.0 });
    });
    c.t('ROLES YOU COULD GROW INTO', 0.6, 5.2, 4, 0.25, { size: 10, bold: true, color: K.lav, cs: 2 });
    const roles = ['UX researcher', 'Interaction designer', 'UI designer', 'Information architect', 'Content designer', 'Product designer', 'Prototyper', 'Accessibility specialist'];
    let rx = 0.6, ry = 5.55;
    roles.forEach((r) => {
      const w = 0.35 + r.length * 0.098;
      if (rx + w > 12.73) { rx = 0.6; ry += 0.46; }
      c.box(rx, ry, w, 0.36, r, { r: 0.18, line: K.grey, color: K.paper, size: 11.5, bold: true }); rx += w + 0.12;
    });
    c.t('Where it applies: apps · web · games · healthcare · finance · education · government · AR/VR', 0.6, 6.5, 12, 0.3, { size: 12, color: K.grey });
  }

  // ---------------------------------------------------------------- 12 GOOD UX IS GOOD BUSINESS
  {
    const s = mkSlide(pres, {
      sec: 'u1', tone: 'light', eyebrow: 'GOOD UX IS GOOD BUSINESS', title: 'Every point of friction has a cost',
      notes: `Good UX is not only about delight; it is about outcomes. When an experience is clear, people engage more, complete more tasks, trust the product and recommend it.

The funnel shows a typical registration journey for Gather. At each step some people drop away. Friction, such as hard-to-find events, unclear details, a long form or no reminder, widens the leak. Removing friction narrows it. The shape here is illustrative only; we are not presenting real data, because every product is different.

The four cards connect design quality to business outcomes and show how you can measure each one: engagement (return visits, feature use), conversion (task completion, drop-off), trust (drop-off at sensitive steps, feedback) and satisfaction (System Usability Scale, Net Promoter Score, support tickets). Tullis and Albert's Measuring the User Experience details these metrics.

Key point: always measure before claiming a UX improvement worked.`,
    });
    const c = S(s);
    const stages = [['Browse events', 4.6], ['View details', 4.0], ['Start the form', 3.4], ['Submit', 2.8], ['Attend', 2.2]];
    const cx = 2.9;
    stages.forEach((st, i) => {
      const y = 1.95 + i * 0.9, w = st[1], nw = i < 4 ? stages[i + 1][1] : w - 0.5;
      c.poly([[cx - w / 2, y], [cx + w / 2, y], [cx + nw / 2, y + 0.82], [cx - nw / 2, y + 0.82]], { fill: [K.blueD, K.blue, '5E7FFF', '8197FF', K.lav][i] });
      c.t(st[0], cx - w / 2, y, w, 0.82, { size: 14, bold: true, color: i < 4 ? K.white : K.ink, align: 'center', valign: 'middle' });
    });
    const fr = ['Hard to find events?', 'Unclear details?', 'Long, repetitive form?', 'No reminder or ticket?'];
    fr.forEach((f, i) => {
      const y = 2.77 + i * 0.9;
      c.ell(5.45, y, 0.07, { fill: K.red }); c.line(5.55, y, 5.85, y, { color: K.red, w: 1 });
      c.t(f, 5.95, y - 0.2, 2.5, 0.4, { size: 12.5, bold: true, color: K.red, valign: 'middle' });
    });
    c.t('Illustrative funnel shape, not real data', 0.6, 6.55, 4.5, 0.25, { size: 10, color: K.mute });
    const m = [
      ['FiTrendingUp', 'Engagement', 'Do people return and explore?', 'Return visits, feature use'],
      ['FiCheck', 'Conversion', 'Do people finish key tasks?', 'Completion rate, drop-off'],
      ['FiShield', 'Trust', 'Do people feel safe and informed?', 'Drop-off at sensitive steps'],
      ['FiHeart', 'Satisfaction', 'Would they recommend it?', 'SUS, NPS, support tickets'],
    ];
    m.forEach((it, i) => {
      const x = 8.65 + (i % 2) * 2.1, y = 1.95 + Math.floor(i / 2) * 2.45;
      c.rect(x, y, 1.98, 2.3, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
      c.icon(it[0], x + 0.38, y + 0.4, 0.32, 'blue');
      c.t(it[1], x + 0.2, y + 0.65, 1.7, 0.3, { size: 15, bold: true, color: K.ink });
      c.t(it[2], x + 0.2, y + 0.98, 1.65, 0.6, { size: 11.5, color: K.mute, ls: 1.0 });
      c.t('MEASURE', x + 0.2, y + 1.6, 1.6, 0.2, { size: 8, bold: true, color: K.blueD, cs: 1.5 });
      c.t(it[3], x + 0.2, y + 1.8, 1.65, 0.45, { size: 11, bold: true, color: K.ink, ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 13 UNIT 1 ASSIGNMENT
  assignSlide(pres, {
    sec: 'u1', eyebrow: 'UNIT 1  ·  ASSIGNMENT', title: 'Audit an app you already use', num: '01', tag: 'Look closely at one existing product, as a designer would.',
    exTitle: 'AUDIT CARD  ·  HYPOTHETICAL EXAMPLE',
    steps: [
      ['Choose an existing application', 'Pick an app or website you can screenshot and use freely.'],
      ['Identify its key features', 'List what the product lets people do, screen by screen.'],
      ['Describe the intended users', 'Who is it for? What goals and contexts does it serve?'],
      ['Infer the design intentions', 'What problem is each design choice trying to solve?'],
      ['Evaluate strengths and weaknesses', 'Support every judgement with evidence from the interface.'],
    ],
    notes: `Unit 1 assignment: choose an existing application and audit it. Students identify its features, intended users and design intentions, then evaluate strengths and weaknesses.

Coach students to separate observation from opinion. "The search bar is at the top" is an observation. "The search is hard to reach with one hand" is an interpretation that needs evidence, perhaps a reference to Fitts's Law or a quick test with a classmate.

Encourage annotated screenshots and clear evidence for each judgement. Remind them to choose a product they can analyse in depth rather than a very complex one. The hypothetical audit card on this slide shows the level of detail expected; the format and length of submission are set by the instructor.

Success criteria: balanced analysis (both strengths and weaknesses), evidence from the interface, and links to concepts from this unit such as the five planes and the laws of UX.`,
    visual: (c, x, y, w) => {
      const rows = [['Feature', 'Search tab'], ['Users', 'Listeners who know what they want'], ['Intent', 'Fast route to any song'], ['Strength', 'Large field, recent searches'], ['Weakness', 'Grid may overwhelm new users']];
      rows.forEach((r, i) => {
        const yy = y + i * 0.38;
        c.t(r[0].toUpperCase(), x, yy, 0.95, 0.3, { size: 9, bold: true, color: K.mute, cs: 1, valign: 'middle' });
        c.t(r[1], x + 1.0, yy, w - 1.0, 0.3, { size: 11.5, bold: i === 0, color: K.ink, valign: 'middle' });
        if (i < 4) c.line(x, yy + 0.35, x + w, yy + 0.35, { color: K.line, w: 0.5 });
      });
    },
  });
};
