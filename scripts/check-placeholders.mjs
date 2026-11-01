// Prints every owner-supplied value that is still empty / TBC (warning only, never fails the build).
// Also lists bracketed placeholders still visible in the built site, if dist/ exists.
import { SITE } from '../src/config/site.ts';
import { DIST, htmlFiles, read, strip, urlPath, has } from './lib.mjs';

const Y = (s) => `\x1b[33m${s}\x1b[0m`;
const isSet = (v) => typeof v === 'string' && v.trim() !== '' && !/TBC/i.test(v);
const open = [];
const INTENTIONAL = new Set(['streetAddress', 'postalCode']); // service-area business: stays blank
const walk = (obj, prefix = '') => {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix + k;
    if (INTENTIONAL.has(key)) continue;
    if (typeof v === 'string') { if (!isSet(v)) open.push(`${key}${v ? ` (“${v}”)` : ' (empty)'}`); }
    else if (Array.isArray(v)) { if (v.length === 0 && ['trust', 'confirmed', 'openingHours'].includes(k)) open.push(`${key} (empty array)`); }
    else if (v && typeof v === 'object') walk(v, key + '.');
  }
};
walk(SITE);
console.log(Y(`\n⚠ Placeholders: ${open.length} site.ts fields still open (see PLACEHOLDERS.md)`));
for (const o of open) console.log(Y(`   • ${o}`));
if (SITE.reviewSchema) console.log(Y('   • reviewSchema is ON: make sure src/data/reviews.ts holds only real reviews'));

if (has(DIST) && process.argv.includes('--dist')) {
  const counts = new Map();
  const pages = new Map();
  for (const f of htmlFiles()) {
    const text = strip(read(f));
    for (const m of text.matchAll(/\[(?=[^\]]{0,80}(?:TBC|PRICE|HOURS|AMOUNT|LEAD TIME|CONFIRM|OWNER))[A-Z][^\]]{0,80}\]/g)) {
      counts.set(m[0], (counts.get(m[0]) ?? 0) + 1);
      pages.set(m[0], (pages.get(m[0]) ?? new Set()).add(urlPath(f)));
    }
  }
  console.log(Y(`\n⚠ Visible placeholders in dist/: ${counts.size} distinct`));
  for (const [k, n] of [...counts].sort((a, b) => b[1] - a[1])) console.log(Y(`   ${String(n).padStart(4)} × ${k}  (${pages.get(k).size} pages)`));
}
console.log('');
