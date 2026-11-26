 UI/UX Design: Understanding the Experience

References and verification notes for the SVCB3003 UI & UX Design presentation (50 slides). Source details are also in each slide's speaker notes.

# 1. Course references (supplied)

- Yablonski, J. Laws of UX: Using Psychology to Design Better Products & Services. O'Reilly Media (1st ed. 2020; 2nd ed. 2024). Used for slide 9 (Jakob, Fitts, Hick, Miller, Doherty, Peak-End) and slide 35 (Gestalt).
- Garrett, J. J. The Elements of User Experience: User-Centered Design for the Web and Beyond (2nd ed.). New Riders, 2011 (1st ed. 2002). Used for slide 8 (five planes), slide 39 (information architecture on the Structure plane).
- Marsh, J. UX for Beginners: A Crash Course in 100 Short Lessons. O'Reilly Media, 2016. Used for slides 5, 43 (UX vs UI, wireframing).
- Kraft, C. User Experience Innovation: User Centered Design that Works. Apress, 2012. Used for slides 15 and 27 (user and business needs, research).
- Tullis, T. and Albert, B. Measuring the User Experience (2nd ed.). Morgan Kaufmann, 2013. Used for slides 12, 30, 36, 47 (metrics, SUS, SEQ, task success).

# 2. Supplementary sources named in the slides or notes

- Norman, D. The Design of Everyday Things (revised ed.). Basic Books, 2013. Slide 3 (affordances, signifiers, mapping, feedback).
- W3C. Web Content Accessibility Guidelines (WCAG) 2.2: SC 1.4.3 Contrast (Minimum), SC 1.4.11 Non-text Contrast; POUR principles. Slides 16 and 17.
- ISO 9241-11: usability as effectiveness, efficiency and satisfaction in a context of use. Slide 7.
- Nielsen, J. and Molich, R. Ten usability heuristics (Nielsen Norman Group). Slide 30.
- Microsoft Inclusive Design toolkit: permanent, temporary and situational disability spectrum; recognise exclusion, solve for one and extend to many. Slides 14 and 16.
- Center for Universal Design, NC State University: The Principles of Universal Design (1997). Slide 14.
- Stanford d.school: design thinking modes (Empathize, Define, Ideate, Prototype, Test). Slide 18.
- Design Council: The Double Diamond (2004). Slide 19.
- Knapp, J., Zeratsky, J. and Kowitz, B. Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days. Simon & Schuster, 2016. Slide 20.
- Brignull, H. Deceptive Patterns (deceptive.design; originally darkpatterns.org, 2010). Slide 42.
- XPLANE (Dave Gray): empathy map. Cooper, A.: personas (The Inmates Are Running the Asylum, 1999). Brooke, J.: System Usability Scale (1996). Slides 28, 29, 47.
- Apple Human Interface Guidelines (44 pt touch targets) and Material Design (48 dp touch targets). Slide 17.

# 3. Verification log

**Checked against web sources during production:**

- Garrett's five planes and the chapter mapping (Scope = functional specifications and content requirements; Structure = interaction design and information architecture; Skeleton = interface, navigation and information design; Surface = visual design). Confirmed via the O'Reilly and InformIT book descriptions.
- WCAG contrast thresholds (4.5:1 normal text, 3:1 large text and UI components). Confirmed via W3C WCAG 2.2 Understanding pages. The large-text definition (18 pt, or 14 pt bold) is standard WCAG wording; check the Understanding document when citing it formally.
- Nielsen's ten heuristics: names confirmed via Nielsen Norman Group.
- Design sprint days (Map, Sketch, Decide, Prototype, Test) and Friday testing with five target customers. Confirmed via the publisher's description of the book (Simon & Schuster / Publishers Weekly).
- d.school five modes and their iterative nature: confirmed via several secondary sources. No primary d.school page was retrieved, so check dschool.stanford.edu for official wording.
- Brignull coined "dark patterns" in 2010; the term has since been renamed "deceptive patterns". Exact 2010 date differs between sources, so the slides state only the year.
- Laws of UX definitions (Jakob, Fitts, Hick, Miller, Doherty Threshold under 400 ms, Peak-End). Confirmed against lawsofux.com summaries.
**Stated from established references but not independently re-checked here:**

- Miller's "7 plus or minus 2" (presented as commonly quoted), IDEO's popularisation of the T-shaped designer, the 1970s disability-rights campaigns behind curb cuts, Apple 44 pt and Material 48 dp values, and the book edition years above. Please verify before formal citation.

# 4. Content integrity notes

- No research findings, quotations, statistics or case-study results have been invented. Items that look like data are labelled as illustrative or hypothetical on the slide: the registration funnel shape (12), competitor ratings (21), the Aisha journey map, empathy map and persona (24, 28, 29), the issue matrix (48), the empty results log (47), and the "4 of 5 participants" success criterion (41), which is a planned criterion, not a result.
- Contrast ratios on slide 17 are computed from this deck's own palette.
- Familiar products (maps, chat, music apps) are shown as original simplified schematics for teaching, not official artwork. Observations on slide 37 are interpretations to test, not proven facts.
- The six learning outcomes on slide 2 are written to match the brief; align the wording with the official course outline if it differs.
- The "Gather" event registration platform and all its screens are original illustrations.

# 5. Fonts

The deck is set in Inter (free, from rsms.me/inter or Google Fonts). Install Inter before presenting so the layout matches the PDF exactly; otherwise PowerPoint substitutes another font and text may reflow.


# 6. Design language

- The deck follows Apple's published design principles: clarity (legible type, restrained ornament), deference (the interface supports the content) and depth (layering, soft shadows, translucent materials). Source: Apple Human Interface Guidelines, Design principles (developer.apple.com/design/human-interface-guidelines).
- Apple-style conventions used: large two-tone headlines with tight tracking, one accent blue, generous whitespace, large rounded bento tiles, frosted-glass panels, glow backgrounds on dark slides and a calm light/dark rhythm. These are design-language conventions observed on apple.com and keynotes, not Apple specifications.
- Inter is used as the typeface because it is free and widely available; Apple's own SF Pro is not freely redistributable. To use SF Pro, change the two font names in source/lib.js (THEME) and rebuild.
- Spacing system: 0.9 in side margins, 12-column grid with 0.3 in gutters, tile corner radius 0.3 in, content zone 4 in tall under a two-line headline.

# 7. Design-system compliance (Apple design skills)

- Design-system rules applied (from rukkiecodes/claude-apple-design-system, built on getdesign.md/apple): one accent only; no shadows on cards, tiles or text; no decorative gradients; weights 400/600/700 only (500 never used); hairline 1 px card borders; a fixed type ramp (11, 13, 15, 17, 20, 28, 40, 56, 80 pt for slide text); a fixed corner-radius scale with pills for action-like controls; sections divided by surface change (white, off-white, charcoal, lavender).
- The single allowed shadow is the soft drop under product imagery, applied only to the phone and browser mockups (19 shapes). Verified by source/audit5.py: 0 gradient fills, 19 shadows, one typeface family.
- Palette decision: the course palette (charcoal, warm off-white, electric blue, lavender, grey) is kept as the token set. Electric blue is the one accent; lavender is a tint of it, not a second accent. Red, green and amber appear only for state (pass or fail, problem, status). Small blue text uses the deeper blue (6.7:1 on white) and small white-on-blue text avoids the lighter blue (4.36:1).
- Apple HIG reviewer checks (dickwu/apple-design-skill, citing accessibility.md, typography.md and writing.md): minimum text size 11 pt for slide text, contrast 4.5:1 for text up to 17 pt, nothing conveyed by colour alone (pass/fail marks carry icons), sentence-case labels, verb-led button labels, no possessive-pronoun clutter. The skill also flags big-number-over-small-label hero patterns and numbered markers on non-sequences, so the oversized assignment numerals and the 1 to 5 numbering on the accessibility checks were removed.
- Fluid-interfaces skill (emilkowalski/skills, apple-design): typography guidance applied (tight tracking on large headlines, near-zero on body, positive tracking only on small caps labels, tighter leading on headlines). Its gesture, spring and interruptible-animation rules apply to interactive web interfaces and were not applicable to a static deck.
- Known trade-offs: PowerPoint cannot draw continuous (squircle) corners or true background blur, so large rounded corners and solid dark tiles stand in. Headlines use weight 700 (the adapted skill) rather than Apple's 600 so they stay safe if "Inter SemiBold" is not installed; labels and emphasis under 20 pt use "Inter SemiBold" and fall back to the default font if that face is missing.
