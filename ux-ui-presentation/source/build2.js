const path = require('path'), fs = require('fs');
const L = require('./lib');
const kit = require('./kit');
const { applyTheme } = require('/root/.claude/skills/synced/c6c0c4d7-702e-4c0d-98a9-ac8783e7452b_e512e4b4-bd29-46cb-bf57-7b61456ffddb/pptx/scripts/apply_theme.js');

(async () => {
  const parts = process.argv.slice(2).length ? process.argv.slice(2) : ['slidesA', 'slidesB', 'slidesC', 'slidesD', 'slidesE'];
  await L.warmIcons();
  const pres = new L.pptxgen();
  pres.layout = 'LAYOUT_WIDE';
  pres.title = 'UI/UX Design: Understanding the Experience';
  pres.subject = 'SVCB3003 UI & UX Design';
  pres.author = 'SVCB3003 Course Team';
  pres.company = 'Visual Communication';
  pres.theme = { headFontFace: L.THEME.headFontFace, bodyFontFace: L.THEME.bodyFontFace };
  kit.defineLayouts(pres);
  for (const p of parts) { if (fs.existsSync(path.join(__dirname, p + '.js'))) require('./' + p)(pres); }
  const out = process.env.OUT || path.join(__dirname, '..', 'UX-UI-Design-Understanding-the-Experience.pptx');
  await pres.writeFile({ fileName: out });
  await applyTheme(out, L.THEME);
  console.log('wrote', out);
})().catch((e) => { console.error(e); process.exit(1); });
