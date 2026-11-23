// Slides 32-40: Unit 4 - Emphasis in UX Design
const L = require('./lib');
const { K, S, mkSlide, phone, gatherDetail, gatherRegister } = L;
const assignSlide = require('./assign');

module.exports = function (pres) {
  // ---------------------------------------------------------------- 32 VISUAL HIERARCHY, SCALE, PROPORTION
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'dark', eyebrow: 'UNIT 4  ·  VISUAL HIERARCHY, SCALE AND PROPORTION', title: 'Make the important thing look important',
      notes: `Visual hierarchy is the arrangement of elements so that people see them in order of importance. It guides the eye and reduces effort. The main tools are scale (size), contrast (weight and colour), position, spacing and proportion.

Compare the two screens. In the before version every line has the same size, weight and colour, so the eye has nowhere to land, and the call to action is a tiny link. In the after version, the title is large, the date and place are clearly grouped, a spacious hero draws attention, and the Register button is the strongest element on the screen.

Scale signals importance. Contrast separates levels. Proportion means using consistent ratios between sizes and spaces, such as a type scale where each step is about 1.25 times the previous one, so the design feels orderly rather than random.

Try the squint test: blur your eyes. What stands out first? If it is not the most important element, adjust the hierarchy.`,
    });
    const c = S(s);
    const h = 4.5, y = 2.25;
    c.box(0.6, 1.92, 0.9, 0.26, 'BEFORE', { r: 0.13, fill: K.red, color: K.white, size: 9, bold: true, cs: 1.5 });
    c.box(3.85, 1.92, 0.9, 0.26, 'AFTER', { r: 0.13, fill: K.green, color: K.white, size: 9, bold: true, cs: 1.5 });
    const b = phone(s, 0.6, y, h, { frame: K.ink3 });
    b.t('Design Week Keynote', 16, 50, 268, 16, { size: 11, color: K.ink });
    b.t('Thursday 14 Nov  Hall B  10:00', 16, 74, 268, 16, { size: 11, color: K.ink });
    b.t('Open to all students', 16, 98, 268, 16, { size: 11, color: K.ink });
    b.t('Join us for talks and discussion about design. Speakers from industry share their work and answer questions from students and staff.', 16, 126, 268, 60, { size: 11, color: K.ink, ls: 1.1 });
    b.t('Spots left: plenty    Cost: free', 16, 206, 268, 16, { size: 11, color: K.ink });
    b.t('Register', 16, 236, 80, 16, { size: 11, color: K.blueD });
    b.t('Add to calendar', 110, 236, 120, 16, { size: 11, color: K.blueD });
    b.t('Share', 240, 236, 50, 16, { size: 11, color: K.blueD });
    b.t('Related events', 16, 280, 268, 16, { size: 11, color: K.ink });
    b.bars(16, 306, 268, 4, { gap: 18, h: 6, fill: 'DDDBD3' });
    const a = phone(s, 3.85, y, h, { frame: K.ink3 });
    gatherDetail(a, false);
    const pr = [
      ['SCALE', 'Size signals importance', [0.55, 0.35, 0.2]],
      ['CONTRAST', 'Weight and colour separate levels', null],
      ['PROPORTION', 'Consistent ratios feel orderly', null],
    ];
    pr.forEach((p, i) => {
      const yy = 2.0 + i * 1.55, x = 7.2;
      c.rect(x, yy, 5.53, 1.4, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.14 });
      c.t(p[0], x + 0.25, yy + 0.15, 2.5, 0.22, { size: 10, bold: true, color: K.lav, cs: 2 });
      c.t(p[1], x + 0.25, yy + 0.42, 2.7, 0.8, { size: 14, bold: true, color: K.paper, ls: 1.05 });
      if (i === 0) { [[0.62, K.blue], [0.4, K.lav], [0.24, K.grey]].forEach((r, j) => c.rect(x + 3.0, yy + 0.2 + j * 0.38, 2.3 * (r[0] / 0.62), r[0] * 0.5, { fill: r[1], r: 0.04 })); }
      if (i === 1) { c.t('Date and place', x + 3.0, yy + 0.18, 2.4, 0.4, { size: 18, bold: true, color: K.paper }); c.t('Date and place', x + 3.0, yy + 0.65, 2.4, 0.3, { size: 12, color: K.grey }); c.t('bold + bright  vs  light + muted', x + 3.0, yy + 1.0, 2.4, 0.25, { size: 10, color: K.lav }); }
      if (i === 2) { [['32', 30], ['24', 22], ['16', 16], ['12', 12]].forEach((t, k) => { c.t('Aa', x + 3.0 + k * 0.62, yy + 0.2, 0.6, 0.62, { size: t[1], bold: true, color: K.paper, valign: 'bottom' }); c.t(t[0], x + 3.0 + k * 0.62, yy + 0.92, 0.6, 0.22, { size: 10, color: K.grey }); }); c.t('px: sizes follow a set scale', x + 3.0, yy + 1.12, 2.4, 0.22, { size: 9.5, color: K.lav }); }
    });
  }

  // ---------------------------------------------------------------- 33 UNITY AND VARIETY
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'light', eyebrow: 'UNITY AND VARIETY', title: 'Be consistent, then vary on purpose',
      notes: `Unity and variety are a pair of design principles that must be balanced.

Unity means the parts of a design belong together: they share colour, typography, spacing, shape and behaviour. Consistency reduces learning effort, because once a person understands one button they understand them all. It also builds trust and a recognisable identity. Repetition, such as identical cards in a list, creates rhythm.

Variety adds interest and signals importance. A design with only unity can feel monotonous; a design with only variety feels chaotic. The key word is meaningful: vary something to communicate, for example highlighting a featured event with an inverted colour, not just for decoration.

On the left, the four buttons look unrelated, so users must wonder whether they behave differently. On the right they form a family. On the cards, three are identical and one is different, so the difference means something. This links to Jakob's Law and consistency in Nielsen's heuristics.`,
    });
    const c = S(s);
    c.rect(0.6, 1.95, 5.9, 3.7, { fill: K.card, line: K.line, lw: 0.75, r: 0.16 });
    c.t('UNITY', 0.85, 2.1, 2, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    c.t('Consistent', 0.85, 2.33, 3, 0.3, { size: 17, bold: true, color: K.ink });
    // inconsistent
    c.t('Inconsistent', 0.85, 2.85, 2.2, 0.22, { size: 11.5, bold: true, color: K.red });
    c.box(0.85, 3.15, 1.6, 0.42, 'Register', { r: 0.21, fill: K.blue, color: K.white, size: 12, bold: true });
    c.box(0.85, 3.67, 1.3, 0.34, 'Save', { r: 0.02, fill: K.green, color: K.white, size: 10, bold: true });
    c.box(0.85, 4.11, 1.7, 0.5, 'Share', { r: 0.08, line: K.red, color: K.red, size: 13, bold: true });
    c.box(0.85, 4.71, 1.2, 0.4, 'JOIN', { r: 0.2, fill: K.ink, color: K.amber, size: 11, bold: true });
    c.line(3.4, 2.9, 3.4, 5.3, { color: K.line, w: 1 });
    c.t('Consistent', 3.65, 2.85, 2.2, 0.22, { size: 11.5, bold: true, color: K.green });
    ['Register', 'Save', 'Share', 'Join'].forEach((t, i) => c.box(3.65, 3.15 + i * 0.55, 1.7, 0.42, t, { r: 0.21, fill: K.blueD, color: K.white, size: 12, bold: true }));
    c.t('One colour, one shape, one type style', 0.85, 5.27, 5.4, 0.3, { size: 12, color: K.mute });
    // variety
    c.rect(6.83, 1.95, 5.9, 3.7, { fill: K.card, line: K.line, lw: 0.75, r: 0.16 });
    c.t('VARIETY', 7.08, 2.1, 2, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    c.t('Meaningful difference', 7.08, 2.33, 4, 0.3, { size: 17, bold: true, color: K.ink });
    [0, 1, 2, 3].forEach((i) => {
      const x = 7.08 + i * 1.38, feat = i === 2, y = feat ? 2.9 : 3.0, hh = feat ? 1.95 : 1.75;
      c.rect(x, y, 1.26, hh, { fill: feat ? K.blueD : K.paper, line: feat ? undefined : K.line, lw: 0.75, r: 0.1, shadow: feat ? { o: 0.2, b: 8, d: 2 } : undefined });
      c.rect(x + 0.1, y + 0.1, 1.06, 0.7, { fill: feat ? K.lav : 'DCDAE6', r: 0.06 });
      c.rect(x + 0.1, y + 0.92, 0.8, 0.09, { fill: feat ? K.white : K.grey, r: 0.045 }); c.bars(x + 0.1, y + 1.12, 1.06, 2, { h: 0.06, gap: 0.14, fill: feat ? 'AEBBFF' : 'D5D3CB' });
      if (feat) c.box(x + 0.1, y + 1.55, 0.7, 0.24, 'Featured', { r: 0.12, fill: K.lav, color: K.ink, size: 9, bold: true });
    });
    c.t('Repetition makes rhythm. One change signals importance.', 7.08, 5.2, 5.4, 0.3, { size: 12, color: K.mute });
    [['Unity', 'Shared colour, type, spacing and behaviour make a product feel like one thing and cut learning effort.'], ['Variety', 'Change used deliberately signals importance and prevents monotony. Vary to communicate, not to decorate.']].forEach((d, i) => {
      const x = 0.6 + i * 6.23;
      c.t([{ text: d[0] + '   ', options: { bold: true, color: K.blueD, size: 14 } }, { text: d[1], options: { color: K.ink, size: 13 } }], x, 5.85, 5.9, 0.9, { valign: 'top', ls: 1.05 });
    });
  }

  // ---------------------------------------------------------------- 34 TYPOGRAPHY, COLOUR, ICONOGRAPHY, LAYOUT
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'light', eyebrow: 'TYPOGRAPHY, COLOUR, ICONOGRAPHY AND LAYOUT', title: 'Four decisions behind every interface',
      notes: `These four areas are the foundations of interface design decisions.

Typography: choose one or two typefaces and a type scale, a set of sizes related by a ratio. Body text is commonly set at 16 px or more with a line height around 1.5 and line lengths of about 45 to 75 characters. Hierarchy comes from size and weight.

Colour: define roles, not just swatches. Primary for key actions, secondary for supporting elements, neutrals for text and backgrounds, and semantic colours for success, warning and error. A simple guide is the 60-30-10 rule: mostly neutral, some secondary, a little accent. Always check contrast.

Iconography: use one consistent style, with the same stroke, corner and size. Pair icons with labels unless the meaning is universal.

Layout: use a grid and a spacing system, such as multiples of 8, so alignment and rhythm are consistent. Group related items with proximity.

This deck itself uses Inter, a restrained palette and an 8-point rhythm.`,
    });
    const c = S(s);
    const qw = 5.94, qh = 2.3, qx = [0.6, 6.79], qy = [1.95, 4.45];
    const titles = [['Typography', 'One or two typefaces, one scale'], ['Colour', 'Roles first, then swatches'], ['Iconography', 'One style, with labels'], ['Layout', 'A grid and an 8-point rhythm']];
    titles.forEach((t, i) => {
      const x = qx[i % 2], y = qy[Math.floor(i / 2)];
      c.rect(x, y, qw, qh, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
      c.t(t[0], x + 0.25, y + 0.14, 3, 0.3, { size: 16, bold: true, color: K.ink }); c.t(t[1], x + 0.25, y + 1.9, qw - 0.5, 0.3, { size: 12, color: K.mute });
    });
    // typography
    { const x = qx[0] + 0.25, y = qy[0] + 0.45;
      [['Heading', 24, 'Inter Bold', true], ['Subheading', 16.5, 'Inter SemiBold', true], ['Body text is set at 16 px with 1.5 line height', 12.5, 'Regular', false], ['Caption 12 px', 10, 'Regular', false]].forEach((r, i) => {
        const yy = y + [0, 0.42, 0.76, 1.04][i];
        c.t(r[0], x, yy, 3.6, 0.34, { size: r[1], bold: r[3], color: K.ink, valign: 'middle' });
        c.t(r[2], x + 3.7, yy, 1.8, 0.34, { size: 10, color: K.grey, valign: 'middle', align: 'right' });
      }); }
    // colour
    { const x = qx[1] + 0.25, y = qy[0] + 0.55;
      [['Primary', K.blue, K.white], ['Secondary', K.lav, K.ink], ['Neutral', K.ink, K.white], ['Neutral', K.paper2, K.ink], ['Success', K.green, K.white], ['Error', K.red, K.white]].forEach((r, i) => {
        c.box(x + i * 0.9, y, 0.84, 0.75, r[0], { r: 0.08, fill: r[1], color: r[2], size: 9.5, bold: true, line: r[1] === K.paper2 ? K.line : undefined });
      });
      c.t('60 · 30 · 10', x, y + 0.85, 2, 0.25, { size: 11, bold: true, color: K.blueD });
      c.rect(x + 1.2, y + 0.9, 2.4, 0.16, { fill: K.paper2, r: 0.03 }); c.rect(x + 3.6, y + 0.9, 1.2, 0.16, { fill: K.lav, r: 0.03 }); c.rect(x + 4.8, y + 0.9, 0.4, 0.16, { fill: K.blue, r: 0.03 });
      c.t('neutral', x + 1.2, y + 1.08, 1, 0.2, { size: 9, color: K.mute }); c.t('secondary', x + 3.6, y + 1.08, 1, 0.2, { size: 9, color: K.mute }); c.t('accent', x + 4.7, y + 1.08, 0.7, 0.2, { size: 9, color: K.mute }); }
    // icons
    { const x = qx[0] + 0.25, y = qy[1] + 0.55;
      c.t('Consistent', x, y, 1.5, 0.22, { size: 10.5, bold: true, color: K.green }); c.t('Mixed styles', x + 2.8, y, 1.5, 0.22, { size: 10.5, bold: true, color: K.red });
      ['FiHome', 'FiSearch', 'FiCalendar', 'FiUser'].forEach((n, i) => { c.rect(x + i * 0.68, y + 0.32, 0.58, 0.58, { fill: K.paper, r: 0.1 }); c.icon(n, x + i * 0.68 + 0.29, y + 0.61, 0.3, 'ink'); });
      ['FaHome', 'FiSearch', 'FaRegCalendarAlt', 'FaUser'].forEach((n, i) => { c.rect(x + 2.8 + i * 0.68, y + 0.32, 0.58, 0.58, { fill: K.paper, r: 0.1 }); c.icon(n, x + 2.8 + i * 0.68 + 0.29, y + 0.61, 0.3, 'ink'); });
      c.t('Home  Find  Events  Me', x, y + 0.98, 2.7, 0.2, { size: 9.5, color: K.mute }); }
    // layout
    { const x = qx[1] + 0.25, y = qy[1] + 0.5;
      for (let i = 0; i < 6; i++) c.rect(x + i * 0.9, y, 0.78, 1.3, { fill: K.lavL });
      c.rect(x + 0.9, y + 0.1, 2.5, 0.28, { fill: K.blueD, r: 0.04 }); c.rect(x + 0.9, y + 0.5, 1.6, 0.7, { fill: K.card, line: K.blueD, lw: 1, r: 0.04 }); c.rect(x + 2.7, y + 0.5, 1.6, 0.7, { fill: K.card, line: K.blueD, lw: 1, r: 0.04 });
      c.t('8', x + 3.45, y + 0.12, 0.3, 0.2, { size: 9, bold: true, color: K.blueD }); c.t('16', x + 2.52, y + 0.76, 0.2, 0.2, { size: 8, bold: true, color: K.blueD });
    }
  }

  // ---------------------------------------------------------------- 35 GESTALT PRINCIPLES
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'dark', eyebrow: 'GESTALT PRINCIPLES', title: 'The brain groups what it sees',
      notes: `Gestalt psychology studies how people perceive whole patterns rather than isolated parts. Designers use these principles to make interfaces easy to scan and understand without extra explanation.

Proximity: items that are close together are seen as a group, so keep labels near their fields. Similarity: items that look alike are seen as related, which is why links share a colour. Continuity: the eye follows smooth lines and curves, which is why a partly visible carousel card invites scrolling. Closure: we complete incomplete shapes, so a loading ring or a simple logo can be minimal. Figure-ground: we separate a focal object from its background, as with a dialog over a dimmed page. Common region: items inside the same boundary are seen as a group, which is why cards work.

Yablonski's Laws of UX covers several of these as named laws. Ask students to find one example of each in a familiar app.`,
    });
    const c = S(s);
    const cw = 3.88, ch = 2.28, gx = 0.245;
    const items = [['Proximity', 'A label sits close to its field.'], ['Similarity', 'Links and buttons share one look.'], ['Continuity', 'A partly visible card invites a swipe.'], ['Closure', 'Loading rings and logos imply whole shapes.'], ['Figure–ground', 'A dialog stands out on a dimmed page.'], ['Common region', 'A card boundary groups related content.']];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 3) * (cw + gx), y = 1.95 + Math.floor(i / 3) * (ch + 0.2);
      c.rect(x, y, cw, ch, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.14 });
      c.t(it[0], x + 0.22, y + 1.38, cw - 0.4, 0.3, { size: 16, bold: true, color: K.paper }); c.t(it[1], x + 0.22, y + 1.74, cw - 0.4, 0.4, { size: 12, color: K.grey, ls: 1.0 });
      const cx = x + cw / 2, cy = y + 0.7;
      if (i === 0) { for (let g = 0; g < 2; g++) for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++) c.ell(cx - 1.25 + g * 1.5 + q * 0.32, cy - 0.45 + r * 0.32, 0.075, { fill: K.lav }); }
      if (i === 1) { for (let r = 0; r < 3; r++) for (let q = 0; q < 7; q++) { const on = r === 1 ? true : (r === 2 && q === 3); c.ell(cx - 0.96 + q * 0.32, cy - 0.35 + r * 0.35, 0.1, { fill: on ? K.blue : K.grey }); } }
      if (i === 2) { for (let q = 0; q < 14; q++) c.ell(cx - 1.45 + q * 0.22, cy + Math.sin(q * 0.55) * 0.42, 0.07, { fill: K.lav }); c.line(cx - 1.5, cy + 0.45, cx + 1.5, cy - 0.45, { color: K.grey, w: 1, dash: 'dash' }); }
      if (i === 3) { const R = 0.55; for (let k = 0; k < 12; k++) { if (k % 4 === 3) continue; const a1 = k * Math.PI / 6, a2 = (k + 1) * Math.PI / 6; c.line(cx - 0.9 + R * Math.cos(a1), cy + R * Math.sin(a1), cx - 0.9 + R * Math.cos(a2), cy + R * Math.sin(a2), { color: K.lav, w: 3 }); }
        [[0, -0.55], [0.48, 0.28], [-0.48, 0.28]].forEach((p, k) => { const q = [[0.48, 0.28], [-0.48, 0.28], [0, -0.55]][k]; const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2; c.line(cx + 0.9 + p[0] + (mx - p[0]) * 0.3, cy + p[1] + (my - p[1]) * 0.3, cx + 0.9 + p[0] + (mx - p[0]) * 0.9, cy + p[1] + (my - p[1]) * 0.9, { color: K.lav, w: 3 }); c.line(cx + 0.9 + mx + (q[0] - mx) * 0.1, cy + my + (q[1] - my) * 0.1, cx + 0.9 + q[0] - (q[0] - mx) * 0.3 + 0, cy + q[1] - (q[1] - my) * 0.3, { color: K.lav, w: 3 }); }); }
      if (i === 4) { c.rect(cx - 1.3, cy - 0.6, 2.6, 1.2, { fill: K.grey, r: 0.06 }); c.bars(cx - 1.15, cy - 0.45, 2.3, 4, { h: 0.06, gap: 0.2, fill: '6C6F78' }); c.rect(cx - 1.3, cy - 0.6, 2.6, 1.2, { fill: K.ink, tr: 45, r: 0.06 }); c.rect(cx - 0.7, cy - 0.35, 1.4, 0.7, { fill: K.paper, r: 0.08, shadow: { o: 0.3, b: 8, d: 2 } }); c.rect(cx - 0.55, cy - 0.2, 0.7, 0.07, { fill: K.ink, r: 0.03 }); c.box(cx - 0.55, cy, 0.5, 0.22, 'OK', { r: 0.11, fill: K.blueD, color: K.white, size: 9, bold: true }); }
      if (i === 5) { [[-1.35, 3], [0.05, 3]].forEach((g, k) => { c.rect(cx + g[0], cy - 0.55, 1.3, 1.1, { fill: K.ink3, line: K.lav, lw: 1.25, r: 0.1 }); for (let q = 0; q < 3; q++) c.ell(cx + g[0] + 0.3 + q * 0.35, cy, 0.09, { fill: k ? K.blue : K.paper }); }); }
    });
  }

  // ---------------------------------------------------------------- 36 UX EVALUATION METHODS
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'light', eyebrow: 'UX EVALUATION METHODS', title: 'Evaluate early, again, and after launch',
      notes: `Evaluation checks whether a design works. Different methods suit different stages, and the sooner you evaluate, the cheaper fixes are.

Early, with sketches and concepts: heuristic evaluation, where experts review against principles; cognitive walkthrough, where evaluators step through tasks as a new user would; and concept interviews. Middle, with prototypes: usability testing, first-click tests that measure whether people start in the right place, and card sorting or tree testing for information architecture. Late, with a live product: A/B testing to compare versions, analytics to see behaviour at scale, surveys such as the System Usability Scale, and field studies.

Tullis and Albert's Measuring the User Experience groups metrics into performance, self-reported, behavioural and physiological, and issue-based metrics. Choose methods based on your question, your stage and your resources, and combine qualitative insight with quantitative evidence.`,
    });
    const c = S(s);
    const ph = [['EARLY', 'Sketches and concepts', K.lavL, K.ink], ['MIDDLE', 'Prototypes', K.lav, K.ink], ['LATE', 'Live product', K.blueD, K.white]];
    const cw = 3.88, gx = 0.245;
    const meth = [
      [['Heuristic evaluation', 'Experts review against known principles.'], ['Cognitive walkthrough', 'Step through tasks as a new user would.'], ['Concept interviews', 'Test whether the idea makes sense.']],
      [['Usability testing', 'Users attempt realistic tasks.'], ['First-click test', 'Do people start in the right place?'], ['Card sort and tree test', 'Check grouping, labels and structure.']],
      [['A/B testing', 'Compare two versions with real users.'], ['Analytics and surveys', 'Behaviour at scale, SUS and NPS.'], ['Field studies', 'Observe use in the real world.']],
    ];
    ph.forEach((p, i) => {
      const x = 0.6 + i * (cw + gx);
      c.shape(i === 0 ? 'homePlate' : 'chevron', x - (i ? 0.12 : 0), 1.95, cw + (i ? 0.12 : 0), 0.7, { fill: p[2] });
      c.t([{ text: p[0] + '   ', options: { bold: true, size: 11 } }, { text: p[1], options: { size: 13, bold: true } }], x + (i ? 0.3 : 0.2), 1.95, cw - 0.6, 0.7, { color: p[3], valign: 'middle' });
      meth[i].forEach((m, j) => {
        const y = 2.85 + j * 0.88;
        c.rect(x, y, cw, 0.78, { fill: K.card, line: K.line, lw: 0.75, r: 0.12 });
        c.t(m[0], x + 0.2, y + 0.1, cw - 0.4, 0.3, { size: 14, bold: true, color: K.ink }); c.t(m[1], x + 0.2, y + 0.42, cw - 0.4, 0.3, { size: 12, color: K.mute });
      });
    });
    c.t("TULLIS AND ALBERT: FOUR FAMILIES OF METRICS", 0.6, 5.65, 8, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    [['Performance', 'success, time, errors'], ['Self-reported', 'SUS, SEQ, satisfaction'], ['Behavioural', 'clicks, eye movement'], ['Issue-based', 'problems and severity']].forEach((m, i) => {
      const x = 0.6 + i * 3.06;
      c.rect(x, 5.95, 2.95, 0.78, { fill: K.ink, r: 0.12 });
      c.t(m[0], x + 0.2, 6.0, 2.6, 0.35, { size: 14, bold: true, color: K.white, valign: 'middle' }); c.t(m[1], x + 0.2, 6.35, 2.6, 0.3, { size: 11.5, color: K.lav });
    });
  }

  // ---------------------------------------------------------------- 37 UX CASE STUDY
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'dark', eyebrow: 'UX CASE STUDY', title: 'Reading a familiar interface: a music app home',
      notes: `This case study analyses a pattern familiar from music streaming apps such as Spotify. The screen is an original schematic redrawn for teaching, not official artwork, and the analysis is our interpretation, not proven fact.

Use a four-step lens: observe what is on the screen, interpret why it may work using a principle, question what could go wrong, and propose an improvement to test.

For example, bottom tab navigation keeps main destinations within easy thumb reach, which relates to Fitts's Law, and mirrors the placement in many apps, which relates to Jakob's Law. Shortcut tiles may reduce effort for returning users. Horizontal shelves pack many choices into limited space, so we should ask whether the amount of choice becomes overwhelming, which connects to Hick's Law. A persistent mini-player keeps system status visible. Grey secondary text on a dark background must still meet contrast requirements.

Ask students to validate each question with a quick usability test rather than assuming the answer.`,
    });
    const c = S(s);
    const p = phone(s, 0.6, 1.95, 4.75, { frame: K.ink3, bg: '15161A' });
    p.t('Good evening', 16, 42, 200, 24, { size: 19, bold: true, color: K.paper });
    for (let i = 0; i < 6; i++) { const x = 16 + (i % 2) * 138, y = 82 + Math.floor(i / 2) * 48; p.rect(x, y, 130, 40, { fill: K.ink3, r: 6 }); p.rect(x, y, 40, 40, { fill: [K.blue, K.lav, K.grey, K.blueD, K.lav, K.blue][i], r: 6 }); p.bars(x + 50, y + 12, 70, 2, { h: 5, gap: 11, fill: '5C5F69' }); }
    p.t('Made for you', 16, 236, 200, 18, { size: 13, bold: true, color: K.paper });
    for (let i = 0; i < 3; i++) { p.rect(16 + i * 96, 262, 86, 86, { fill: [K.blue, K.lav, K.blueD][i], r: 8 }); p.bars(16 + i * 96, 356, 70, 2, { h: 5, gap: 10, fill: '5C5F69' }); }
    p.t('Jump back in', 16, 390, 200, 18, { size: 13, bold: true, color: K.paper });
    for (let i = 0; i < 3; i++) p.rect(16 + i * 96, 416, 86, 60, { fill: [K.lav, K.grey, K.blue][i], r: 8 });
    p.rect(10, 486, 280, 46, { fill: K.ink3, r: 8 }); p.rect(18, 492, 34, 34, { fill: K.lav, r: 5 }); p.t('Now playing', 62, 494, 130, 14, { size: 10, bold: true, color: K.paper }); p.t('Artist', 62, 510, 130, 12, { size: 8.5, color: K.grey }); p.icon('FiPlay', 262, 509, 16, 'white');
    p.rect(14, 544, 272, 46, { fill: K.ink3, r: 23 }); [['FiHome', 'Home', 1], ['FiSearch', 'Search', 0], ['FiMusic', 'Library', 0]].forEach((t, i) => { const cx = 14 + 45 + i * 91; p.icon(t[0], cx, 561, 16, t[2] ? 'white' : 'grey'); p.t(t[1], cx - 30, 573, 60, 12, { size: 8, color: t[2] ? K.white : K.grey, align: 'center', bold: !!t[2] }); });
    const nums = [[286, 5.45, 1], [100, 3.1, 2], [200, 4.1, 3], [284, 6.0, 4], [220, 2.5, 5]];
    [[p.X(296), p.Y(566), 1], [p.X(296), p.Y(106), 2], [p.X(296), p.Y(300), 3], [p.X(296), p.Y(509), 4], [p.X(296), p.Y(52), 5]].forEach((n) => c.box(n[0] - 0.14, n[1] - 0.14, 0.28, 0.28, String(n[2]), { shape: 'ellipse', fill: K.lav, color: K.ink, size: 10, bold: true }));
    const x0 = 3.75, w = 8.98;
    c.t('DESIGN DECISION', x0 + 0.55, 1.95, 1.9, 0.25, { size: 9, bold: true, color: K.lav, cs: 1.5, valign: 'middle' }); c.t('WHY IT MAY WORK', x0 + 2.75, 1.95, 2.2, 0.25, { size: 9, bold: true, color: K.lav, cs: 1.5, valign: 'middle' }); c.t('QUESTION TO TEST', x0 + 5.9, 1.95, 2.2, 0.25, { size: 9, bold: true, color: K.lav, cs: 1.5, valign: 'middle' });
    const rows = [
      ['Bottom tab bar', 'Main areas stay in thumb reach (Fitts). Familiar placement (Jakob).', 'Are icons and labels clear to new users?'],
      ['Shortcut tiles', 'Quick return to recent items lowers effort.', 'Do users understand why they appear?'],
      ['Horizontal shelves', 'Many categories fit in little space.', 'Is the volume of choice too high (Hick)?'],
      ['Persistent mini-player', 'Playback status is always visible.', 'Does it cover content or shrink targets?'],
      ['Dark theme, grey text', 'Content art stands out against calm UI.', 'Does grey text pass 4.5:1 contrast?'],
    ];
    rows.forEach((r, i) => {
      const y = 2.3 + i * 0.85;
      c.rect(x0, y, w, 0.77, { fill: K.ink2, line: K.ink3, lw: 0.75, r: 0.1 });
      c.box(x0 + 0.12, y + 0.22, 0.32, 0.32, String(i + 1), { shape: 'ellipse', fill: K.lav, color: K.ink, size: 11, bold: true });
      c.t(r[0], x0 + 0.55, y, 2.1, 0.77, { size: 13, bold: true, color: K.paper, valign: 'middle', ls: 1.0 });
      c.t(r[1], x0 + 2.75, y, 2.95, 0.77, { size: 11.5, color: K.grey, valign: 'middle', ls: 1.0 });
      c.t(r[2], x0 + 5.9, y, 2.95, 0.77, { size: 11.5, color: K.paper, valign: 'middle', ls: 1.0 });
    });
    c.t('Original schematic of a common pattern, not official artwork. Observations are interpretations to test.', x0, 6.6, w, 0.3, { size: 10, color: K.grey, ls: 1.0 });
  }

  // ---------------------------------------------------------------- 38 USER STORIES AND USE CASES
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'light', eyebrow: 'USER STORIES AND USE CASES', title: 'Write requirements from the user’s side',
      notes: `User stories and use cases turn research into clear requirements.

A user story is a short statement from the user's perspective: "As a [role], I want [goal], so that [benefit]." The benefit is vital because it explains why. Good stories are often checked against the INVEST criteria: independent, negotiable, valuable, estimable, small and testable.

Acceptance criteria define when the story is done. A common format is Given, When, Then: given a starting state, when the user acts, then a specific, testable result happens.

A use case is more detailed. It names an actor, preconditions, the main flow step by step, alternate flows for exceptions, and the postcondition. A scenario is a short narrative of a person in context, used to bring requirements to life.

For Gather, the story, criteria and use case on this slide all describe the same feature, registering for an event. Notice how the alternate flow, a full event, matches the flow chart from Unit 3.`,
    });
    const c = S(s);
    c.rect(0.6, 1.95, 5.9, 1.75, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
    c.t('USER STORY', 0.85, 2.08, 3, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    c.t([{ text: 'As a ', options: { color: K.mute } }, { text: 'first-year student', options: { bold: true, color: K.blueD } }, { text: ', I want to ', options: { color: K.mute } }, { text: 'register for an event in two taps', options: { bold: true, color: K.ink } }, { text: ', so that ', options: { color: K.mute } }, { text: 'I never miss the deadline.', options: { bold: true, color: K.blueD } }], 0.85, 2.4, 5.4, 1.2, { size: 17, ls: 1.15 });
    c.rect(0.6, 3.85, 5.9, 1.85, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
    c.t('ACCEPTANCE CRITERIA', 0.85, 3.98, 4, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    [['GIVEN', 'I am signed in and the event has seats'], ['WHEN', 'I tap Register and confirm my details'], ['THEN', 'I see a QR ticket and get a confirmation email']].forEach((g, i) => {
      const y = 4.35 + i * 0.44;
      c.box(0.85, y, 0.8, 0.3, g[0], { r: 0.15, fill: [K.ink, K.blueD, K.green][i], color: K.white, size: 9.5, bold: true, cs: 1 }); c.t(g[1], 1.8, y - 0.02, 4.6, 0.34, { size: 12.5, color: K.ink, valign: 'middle' });
    });
    c.t('A GOOD STORY IS:', 0.6, 5.9, 3, 0.22, { size: 9.5, bold: true, color: K.mute, cs: 1.5 });
    ['Independent', 'Negotiable', 'Valuable', 'Estimable', 'Small', 'Testable'].forEach((t, i) => c.rect(0.6 + i * 0.99, 6.2, 0.93, 0.5, { r: 0.1, fill: K.lavL }));
    ['Independent', 'Negotiable', 'Valuable', 'Estimable', 'Small', 'Testable'].forEach((t, i) => { c.t(t, 0.6 + i * 0.99, 6.2, 0.93, 0.5, { size: 8.5, bold: true, color: K.ink, align: 'center', valign: 'middle' }); });
    // use case
    c.rect(6.85, 1.95, 5.88, 4.75, { fill: K.card, line: K.line, lw: 0.75, r: 0.14 });
    c.t('USE CASE', 7.1, 2.08, 3, 0.22, { size: 10, bold: true, color: K.blueD, cs: 2 });
    c.t('Register for an event', 7.1, 2.32, 5.4, 0.4, { size: 20, bold: true, color: K.ink });
    [['ACTOR', 'Student'], ['PRECONDITION', 'Signed in. Event is open.'], ['MAIN FLOW', '1  Student selects an event.\n2  System shows details and seats.\n3  Student confirms their details.\n4  System issues a QR ticket.'], ['ALTERNATE', 'Event full: offer the waitlist.'], ['POSTCONDITION', 'Student holds a valid ticket.']].forEach((r, i) => {
      const ys = [2.9, 3.4, 3.95, 5.35, 5.85], hs = [0.4, 0.45, 1.3, 0.4, 0.45];
      c.line(7.1, ys[i] - 0.04, 12.5, ys[i] - 0.04, { color: K.line, w: 0.75 });
      c.t(r[0], 7.1, ys[i], 1.55, hs[i], { size: 9.5, bold: true, color: K.blueD, cs: 1, valign: 'middle' });
      c.t(r[1], 8.7, ys[i], 3.9, hs[i], { size: 12.5, color: K.ink, valign: 'middle', ls: 1.15 });
    });
  }

  // ---------------------------------------------------------------- 39 INFORMATION ARCHITECTURE
  {
    const s = mkSlide(pres, {
      sec: 'u4', tone: 'light', eyebrow: 'INFORMATION ARCHITECTURE', title: 'Organise content so people can find it',
      notes: `Information architecture, IA, is the structural design of content: how it is grouped, labelled, ordered and linked so people can find and understand it. Garrett places information architecture on the Structure plane.

Four ideas to teach. Grouping: put related content together, ideally informed by card sorting, where users group topics themselves. Labels: use words users understand, not internal jargon. Content hierarchy: decide what is primary and what is secondary. Navigation structure: choose a pattern that fits the content, such as hierarchy for deep content, a flat tab bar for a few main areas, hub-and-spoke where users return to a home, and a sequence for step-by-step tasks like checkout.

The sitemap shows Gather's structure. The blue path is a route map: the path one user takes through the structure for one task. Compare it with a user flow, which adds decisions and system logic.

Tree testing can verify whether people can find items in a proposed structure before you design any screens.`,
    });
    const c = S(s);
    const nw = 1.55, nh = 0.42;
    const node = (x, cy, t, hl) => { c.box(x, cy - nh / 2, nw, nh, t, { r: 0.08, fill: hl ? K.blueD : K.card, line: hl ? undefined : K.grey, lw: 1, color: hl ? K.white : K.ink, size: 11.5, bold: true }); };
    const link = (x1, y1, x2, y2, hl) => c.path([[x1, y1], [(x1 + x2) / 2, y1], [(x1 + x2) / 2, y2], [x2, y2]], { color: hl ? K.blueD : K.grey, w: hl ? 3 : 1.25 });
    const X = [0.6, 2.65, 4.7, 6.75, 8.8];
    const l1 = [['Home', 2.3], ['Events', 2.95], ['My tickets', 3.6], ['Clubs', 4.25], ['Profile', 4.9]];
    link(X[0] + nw, 3.6, X[1], 2.3); link(X[0] + nw, 3.6, X[1], 2.95, true); link(X[0] + nw, 3.6, X[1], 3.6); link(X[0] + nw, 3.6, X[1], 4.25); link(X[0] + nw, 3.6, X[1], 4.9);
    link(X[1] + nw, 2.95, X[2], 2.45); link(X[1] + nw, 2.95, X[2], 3.1, true); link(X[1] + nw, 3.6, X[2], 3.75); link(X[1] + nw, 4.25, X[2], 4.4); link(X[1] + nw, 4.9, X[2], 5.05);
    link(X[2] + nw, 3.1, X[3], 3.1, true); link(X[3] + nw, 3.1, X[4], 3.1, true);
    node(X[0], 3.6, 'Gather', true);
    l1.forEach((n, i) => node(X[1], n[1], n[0], i === 1));
    [['Browse and filter', 2.45, false], ['Event details', 3.1, true], ['QR ticket', 3.75, false], ['Club page', 4.4, false], ['Settings', 5.05, false]].forEach((n) => node(X[2], n[1], n[0], n[2]));
    node(X[3], 3.1, 'Register', true); node(X[4], 3.1, 'Confirmation', true);
    c.rect(10.6, 2.0, 2.13, 2.0, { fill: K.lavL, r: 0.14 });
    c.t('ROUTE MAP', 10.8, 2.12, 1.8, 0.22, { size: 9.5, bold: true, color: K.blueD, cs: 1.5 }); c.t('The blue path shows one task’s route through the structure.', 10.8, 2.4, 1.8, 1.5, { size: 12, color: K.ink, ls: 1.05 });
    c.t('Group with card sorting. Label in the words users use.', 0.6, 5.38, 8.5, 0.28, { size: 12, italic: true, color: K.mute });
    // patterns
    const pats = [['Hierarchy', 'Deep content, parent to child'], ['Flat tabs', 'A few main areas, one tap'], ['Hub and spoke', 'Return to a central home'], ['Sequence', 'Steps in a fixed order']];
    pats.forEach((p, i) => {
      const x = 0.6 + i * 3.06, y = 5.78;
      c.rect(x, y, 2.95, 0.95, { fill: K.card, line: K.line, lw: 0.75, r: 0.12 });
      const dx = x + 0.15, dy = y + 0.15;
      if (i === 0) { c.rect(dx + 0.3, dy, 0.24, 0.16, { fill: K.blueD, r: 0.03 }); [0, 0.34].forEach((o) => { c.line(dx + 0.42, dy + 0.16, dx + 0.12 + o, dy + 0.38, { color: K.grey, w: 1 }); c.rect(dx + o, dy + 0.38, 0.24, 0.16, { fill: K.lav, r: 0.03 }); }); }
      if (i === 1) [0, 1, 2].forEach((o) => c.rect(dx + o * 0.28, dy + 0.15, 0.22, 0.3, { fill: o === 0 ? K.blueD : K.lav, r: 0.03 }));
      if (i === 2) { c.rect(dx + 0.3, dy + 0.18, 0.24, 0.2, { fill: K.blueD, r: 0.03 }); [[0.0, 0.0], [0.6, 0.0], [0.0, 0.5], [0.6, 0.5]].forEach((o) => { c.line(dx + 0.42, dy + 0.28, dx + 0.1 + o[0], dy + 0.05 + o[1], { color: K.grey, w: 1 }); c.ell(dx + 0.1 + o[0], dy + 0.05 + o[1], 0.07, { fill: K.lav }); }); }
      if (i === 3) [0, 1, 2].forEach((o) => { c.ell(dx + 0.1 + o * 0.32, dy + 0.3, 0.09, { fill: o === 0 ? K.blueD : K.lav }); if (o < 2) c.line(dx + 0.2 + o * 0.32, dy + 0.3, dx + 0.32 + o * 0.32, dy + 0.3, { color: K.grey, w: 1, arrow: true }); });
      c.t(p[0], x + 1.2, y + 0.12, 1.65, 0.3, { size: 13, bold: true, color: K.ink }); c.t(p[1], x + 1.2, y + 0.43, 1.65, 0.45, { size: 11, color: K.mute, ls: 1.0 });
    });
  }

  // ---------------------------------------------------------------- 40 UNIT 4 ASSIGNMENT
  assignSlide(pres, {
    sec: 'u4', eyebrow: 'UNIT 4  ·  ASSIGNMENT', title: 'Map the experience, then wireframe it', num: '04', tag: 'Structure your idea, then design it in two levels of fidelity.',
    exTitle: 'LOW-FIDELITY  TO  HIGH-FIDELITY',
    steps: [
      ['Choose a method', 'Card sorting, user flow, journey or route map.'],
      ['Create a route map or user flow', 'Show the main task path and key decisions.'],
      ['Design low-fidelity wireframes', 'Layout and priority in greys. Fast to change.'],
      ['Design high-fidelity wireframes', 'Add type, colour, imagery and real content.'],
      ['Walk through your own flow', 'Check that every screen supports the path.'],
    ],
    notes: `Unit 4 assignment: choose a method, create a route map or user flow, then design low-fidelity and high-fidelity wireframes for the proposed experience.

Explain the sequence. The method, for example card sorting or a user flow, gives structure to the experience. The route map or flow shows how a user will move through it. Low-fidelity wireframes explore layout and content priority quickly in greys, without colour distractions. High-fidelity wireframes add typography, colour, imagery and realistic content, applying the hierarchy, Gestalt and consistency principles from this unit.

Students should be able to trace each wireframe back to a step in their flow, and explain their visual hierarchy choices. They should also reference the user research and persona from Unit 3.

Remind students to design for both mobile and web in Unit 5. The submission format is set by the instructor.`,
    visual: (c, x, y, w, h) => {
      const p1 = phone(c.sl, x + 0.35, y - 0.05, 1.95, { noShadow: true, frame: '9A9A98' }); gatherRegister(p1, true);
      c.t('›', x + 1.65, y + 0.7, 0.5, 0.5, { size: 28, bold: true, color: K.blueD, align: 'center', valign: 'middle' });
      const p2 = phone(c.sl, x + 2.2, y - 0.05, 1.95, { noShadow: true }); gatherRegister(p2, false);
    },
  });
};
