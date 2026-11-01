// Shared helpers for the QA scripts (no dependencies).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

export const DIST = new URL('../dist/', import.meta.url).pathname;

export function htmlFiles(dir = DIST) {
  const out = [];
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (f.endsWith('.html')) out.push(p);
  }
  return out;
}

/** dist/foo/bar/index.html → /foo/bar/ */
export const urlPath = (file) => {
  const r = '/' + relative(DIST, file).replace(/\\/g, '/');
  return r.endsWith('/index.html') ? r.slice(0, -'index.html'.length) : r;
};

export const read = (f) => readFileSync(f, 'utf8');
export const has = (p) => existsSync(p);

export const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");

export const strip = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

export const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? decode(m[1] ?? m[2] ?? m[3]) : null;
};
