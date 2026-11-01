// Regenerates public/downloads/builders-clean-checklist-queensland.pdf from the built checklist page
// using its print stylesheet. Run after `astro build` whenever src/data/checklist.ts changes:
//   npx astro build && node scripts/build-checklist-pdf.mjs
// Needs Playwright + Chromium locally (not needed on Netlify: the PDF is committed in public/).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require(require('node:child_process').execSync('npm root -g').toString().trim() + '/playwright'); }
const src = new URL('../dist/builders-clean-checklist/index.html', import.meta.url).pathname;
const out = new URL('../public/downloads/', import.meta.url).pathname;
mkdirSync(out, { recursive: true });
const browser = await pw.chromium.launch();
const page = await browser.newPage();
// Optional: pass a preview URL (e.g. http://localhost:4321) so web fonts load.
const base = process.argv[2];
await page.goto(base ? `${base}/builders-clean-checklist/` : pathToFileURL(src).href, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: out + 'builders-clean-checklist-queensland.pdf', format: 'A4', printBackground: false,
  margin: { top: '14mm', bottom: '16mm', left: '14mm', right: '14mm' },
  displayHeaderFooter: true, headerTemplate: '<span></span>',
  footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#555">Builders Clean Brisbane Co. · Builders Clean Checklist (Queensland) · Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
});
await browser.close();
console.log('✓ wrote public/downloads/builders-clean-checklist-queensland.pdf');
