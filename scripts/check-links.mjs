// Fails on any broken internal link, missing asset or broken #anchor; reports orphan pages.
import { join } from 'node:path';
import { DIST, htmlFiles, read, urlPath, has, attr } from './lib.mjs';

const SITE_URL = 'https://www.builderscleanbrisbaneco.com.au';
const files = htmlFiles();
const ids = new Map();
const inbound = new Map();
for (const f of files) {
  const p = urlPath(f);
  ids.set(p, new Set([...read(f).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  inbound.set(p, new Set());
}
const errors = [];
const resolve = (path) => {
  const clean = decodeURIComponent(path);
  if (clean.endsWith('/')) return has(join(DIST, clean, 'index.html')) ? clean : null;
  if (has(join(DIST, clean))) return clean;
  return null;
};
for (const f of files) {
  const html = read(f);
  const from = urlPath(f);
  for (const m of html.matchAll(/<(a|link|img|source|script)\b[^>]*>/g)) {
    const tag = m[0];
    const refs = [];
    for (const a of ['href', 'src']) { const v = attr(tag, a); if (v) refs.push(v); }
    const srcset = attr(tag, 'srcset');
    if (srcset) refs.push(...srcset.split(',').map((s) => s.trim().split(/\s+/)[0]));
    for (let ref of refs) {
      if (ref.startsWith(SITE_URL)) ref = ref.slice(SITE_URL.length) || '/';
      if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(ref)) continue;
      if (/rel="(preconnect|dns-prefetch)"/.test(tag)) continue;
      let [path, hash] = ref.split('#');
      if (!path) path = from;
      if (!path.startsWith('/')) { errors.push(`${from}: relative link ${ref}`); continue; }
      path = path.split('?')[0];
      if (m[1] === 'a' && !path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) { errors.push(`${from}: link without trailing slash ${ref}`); continue; }
      const target = resolve(path);
      if (!target) { errors.push(`${from}: broken link → ${ref}`); continue; }
      if (hash && ids.has(target) && !ids.get(target).has(hash)) errors.push(`${from}: missing anchor #${hash} on ${target}`);
      if (m[1] === 'a' && target !== from && inbound.has(target)) inbound.get(target).add(from);
    }
  }
}
const SKIP_ORPHAN = new Set(['/', '/404.html', '/thank-you/', '/builders-clean-checklist/download/']);
const orphans = [...inbound].filter(([p, s]) => !SKIP_ORPHAN.has(p) && s.size === 0).map(([p]) => p);
for (const o of orphans) errors.push(`orphan page (no inbound links): ${o}`);
if (errors.length) {
  for (const e of [...new Set(errors)]) console.error(`\x1b[31m✗ ${e}\x1b[0m`);
  console.error(`\ncheck-links: ${new Set(errors).size} problem(s)`);
  process.exit(1);
}
console.log(`✓ check-links: ${files.length} pages, all internal links, assets and anchors resolve; no orphans`);
