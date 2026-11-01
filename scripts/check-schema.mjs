// Parses every JSON-LD block and validates the structure Google needs for each type we emit.
import { htmlFiles, read, urlPath } from './lib.mjs';
import { SITE } from '../src/config/site.ts';

const ID = `${SITE.url}/#business`;
const errors = [];
const counts = {};
const need = (cond, msg) => { if (!cond) errors.push(msg); };
const isAbs = (u) => typeof u === 'string' && /^https:\/\//.test(u);

for (const f of htmlFiles()) {
  const path = urlPath(f);
  if (path === '/404.html') continue;
  const html = read(f);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  for (const b of blocks) {
    let d;
    try { d = JSON.parse(b); } catch (e) { errors.push(`${path}: invalid JSON-LD (${e.message})`); continue; }
    const t = d['@type'];
    types.push(t);
    counts[t] = (counts[t] ?? 0) + 1;
    need(d['@context'] === 'https://schema.org', `${path}: ${t} missing @context`);
    if (t === 'LocalBusiness') {
      need(d['@id'] === ID, `${path}: LocalBusiness @id`);
      need(d.name === 'Builders Clean Brisbane Co.', `${path}: LocalBusiness name must be exact NAP`);
      need(isAbs(d.url) && isAbs(d.logo) && isAbs(d.image), `${path}: LocalBusiness url/logo/image`);
      need(d.address?.addressLocality && d.address?.addressRegion && d.address?.addressCountry && !d.address?.streetAddress, `${path}: address must be locality/region/country only`);
      need(Array.isArray(d.areaServed) && d.areaServed.length === 20, `${path}: areaServed should list 20 areas`);
      need(d.hasOfferCatalog?.itemListElement?.length === 17, `${path}: hasOfferCatalog should list 17 services`);
      need(!('telephone' in d) || /^\+61\d{8,9}$/.test(d.telephone), `${path}: telephone must be E.164`);
      if (!SITE.reviewSchema) need(!d.aggregateRating && !d.review, `${path}: review schema present while reviewSchema=false`);
      for (const k of Object.keys(d)) need(d[k] !== '' && d[k] !== null, `${path}: empty LocalBusiness.${k}`);
    }
    if (t === 'Service') {
      need(d.provider?.['@id'] === ID, `${path}: Service provider must reference ${ID}`);
      need(d.name && d.serviceType && d.areaServed, `${path}: Service needs name, serviceType, areaServed`);
    }
    if (t === 'FAQPage') {
      need(Array.isArray(d.mainEntity) && d.mainEntity.length >= 3, `${path}: FAQPage needs questions`);
      for (const q of d.mainEntity ?? []) need(q['@type'] === 'Question' && q.name && q.acceptedAnswer?.['@type'] === 'Answer' && q.acceptedAnswer.text, `${path}: malformed Question`);
    }
    if (t === 'BreadcrumbList') {
      const items = d.itemListElement ?? [];
      need(items.length >= 2, `${path}: BreadcrumbList too short`);
      items.forEach((it, i) => need(it.position === i + 1 && it.name && isAbs(it.item), `${path}: breadcrumb item ${i + 1}`));
      need(items.at(-1)?.item === `${SITE.url}${path}`, `${path}: last breadcrumb should be the page URL`);
    }
    if (t === 'BlogPosting') need(d.headline && d.datePublished && d.author && d.publisher, `${path}: BlogPosting fields`);
  }
  need(types.includes('LocalBusiness'), `${path}: missing sitewide LocalBusiness`);
  need(types.filter((t) => t === 'FAQPage').length <= 1, `${path}: more than one FAQPage`);
  if (path !== '/' && !/noindex/.test(html)) need(types.includes('BreadcrumbList'), `${path}: missing BreadcrumbList`);
  if (path.startsWith('/services/') && path !== '/services/') need(types.includes('Service') && types.includes('FAQPage'), `${path}: service page needs Service + FAQPage`);
  if (path.startsWith('/areas/') && path !== '/areas/') need(types.includes('Service') && types.includes('FAQPage'), `${path}: area page needs Service + FAQPage`);
}
if (errors.length) {
  for (const e of errors) console.error(`\x1b[31m✗ ${e}\x1b[0m`);
  console.error(`\ncheck-schema: ${errors.length} error(s)`);
  process.exit(1);
}
console.log(`✓ check-schema: all JSON-LD valid ${JSON.stringify(counts)}`);
