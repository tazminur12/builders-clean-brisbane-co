// Fails the build on missing/duplicate titles, descriptions, H1s, canonicals; reports lengths and word counts.
import { htmlFiles, read, urlPath, strip, attr, decode } from './lib.mjs';

const SITE_URL = 'https://www.builderscleanbrisbaneco.com.au';
const errors = [];
const warns = [];
const seen = { title: new Map(), desc: new Map(), h1: new Map() };
const rows = [];
const LONG_TITLE_OK = new Set(['/']); // homepage title may run long (docs/06)

for (const f of htmlFiles()) {
  const html = read(f);
  const path = urlPath(f);
  if (path === '/404.html') continue;
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] ?? '').trim();
  const descTag = html.match(/<meta name="description"[^>]*>/);
  const desc = descTag ? attr(descTag[0], 'content') : '';
  const canonTag = html.match(/<link rel="canonical"[^>]*>/);
  const canon = canonTag ? attr(canonTag[0], 'href') : '';
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));
  const lang = (html.match(/<html[^>]*lang="([^"]+)"/) || [])[1];

  if (!title) errors.push(`${path}: missing <title>`);
  if (!desc) errors.push(`${path}: missing meta description`);
  if (h1s.length !== 1) errors.push(`${path}: expected 1 <h1>, found ${h1s.length}`);
  if (lang !== 'en-AU') errors.push(`${path}: lang is ${lang}, expected en-AU`);
  if (!canon) errors.push(`${path}: missing canonical`);
  else if (canon !== SITE_URL + path) errors.push(`${path}: canonical ${canon} ≠ ${SITE_URL + path}`);
  if (/[?&]utm_/.test(canon ?? '')) errors.push(`${path}: canonical contains UTM`);
  for (const p of ['og:title', 'og:description', 'og:image', 'og:url']) if (!html.includes(`property="${p}"`)) errors.push(`${path}: missing ${p}`);
  if (!html.includes('name="twitter:card"')) errors.push(`${path}: missing twitter:card`);
  if (title.length > 70 && !LONG_TITLE_OK.has(path)) errors.push(`${path}: title ${title.length} chars (> 70): ${title}`);
  else if (title.length > 60 && !LONG_TITLE_OK.has(path)) warns.push(`${path}: title ${title.length} chars (> 60)`);
  if (desc && (desc.length < 140 || desc.length > 160)) warns.push(`${path}: description ${desc.length} chars (target 140–160)`);

  if (!noindex) {
    for (const [k, v] of [['title', title], ['desc', desc], ['h1', h1s[0] ?? '']]) {
      if (!v) continue;
      if (seen[k].has(v)) errors.push(`duplicate ${k} on ${path} and ${seen[k].get(v)}: “${v}”`);
      else seen[k].set(v, path);
    }
  }
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0].replace(/<section class="cta-band[\s\S]*?<\/section>/, '');
  rows.push([path, strip(main).split(' ').length, title.length, desc?.length ?? 0]);
}

if (process.argv.includes('--report')) {
  console.log('words  title  desc  path');
  for (const [p, w, t, d] of rows.sort((a, b) => a[0].localeCompare(b[0]))) console.log(`${String(w).padStart(5)}  ${String(t).padStart(5)}  ${String(d).padStart(4)}  ${p}`);
}
for (const w of warns) console.log(`\x1b[33m⚠ ${w}\x1b[0m`);
if (errors.length) {
  for (const e of errors) console.error(`\x1b[31m✗ ${e}\x1b[0m`);
  console.error(`\ncheck-seo: ${errors.length} error(s)`);
  process.exit(1);
}
console.log(`✓ check-seo: ${rows.length} pages OK (${warns.length} warnings)`);
