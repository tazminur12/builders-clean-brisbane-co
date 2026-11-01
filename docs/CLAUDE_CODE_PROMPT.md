# Build the Builders Clean Brisbane Co. website

You are building the complete website for **Builders Clean Brisbane Co.**, a new Brisbane company that does builders cleans and post-construction cleaning. The site has one job: rank #1 for **"builders clean brisbane"** (and every related search) in Google's normal results AND push the company's Google Business Profile (GBP) into the Google Maps top 3.

Everything you need is in this folder. **Read every file in `/docs` before writing any code.** They hold the business facts, the brand, the full keyword map, the customer research, competitor teardown, and a page-by-page brief (with FAQs) for every service and every service-area page.

| File | What it gives you |
|---|---|
| `docs/01-business-and-brand.md` | Business facts, placeholders, positioning, brand tokens, logo rules, tone of voice |
| `docs/02-keyword-map.md` | Every keyword, grouped by buyer intent, mapped to exactly one page |
| `docs/03-research.md` | Customers, 40 search behaviours, pain points, objections, competitor strengths and gaps |
| `docs/04-service-pages.md` | Brief for all 17 service pages: URL, title, meta, H1, keywords, scope, FAQs |
| `docs/05-area-pages.md` | Brief for all 20 service-area pages: local context, angle, FAQs |
| `docs/06-core-pages-and-blog.md` | Homepage (section by section), price guide, checklist, for-builders, about, reviews, contact, FAQ hub, 6 launch blog posts |
| `docs/07-seo-technical-checklist.md` | Schema, sitemap, internal links, performance, accessibility, launch QA |
| `assets/` | Logos (SVG/PNG), favicons, OG image, fonts, 10 real job photos (web + branded versions) |

---

## 1. Tech stack (use exactly this unless something blocks you)

- **Astro** (latest stable), static output (`output: 'static'`), no client framework. Zero JS by default; tiny vanilla JS only for the mobile menu, FAQ accordions and form niceties.
- **Plain CSS with custom properties** (design tokens from `docs/01`). No Tailwind, no UI kits, no CSS frameworks.
- Content lives in typed data files so pages are generated from data, never copy-pasted:
  - `src/config/site.ts` – business name, NAP, phone, email, hours, domain, socials, GBP URL (see placeholders below)
  - `src/data/services.ts` – one object per service page (fields mirror `docs/04`)
  - `src/data/areas.ts` – one object per area page (fields mirror `docs/05`)
  - `src/data/faqs.ts` – shared FAQ bank (homepage, FAQ hub)
  - `src/content/blog/*.md` – blog posts (Astro content collections)
- Dynamic routes: `src/pages/services/[slug].astro` and `src/pages/areas/[slug].astro` built from the data files.
- Images: put the photos in `src/assets/photos/` and use Astro's `<Picture>` (AVIF + WebP + JPG fallback, explicit width/height, `loading="lazy"` except the hero which is `loading="eager" fetchpriority="high"`).
- Fonts: self-host **Barlow Condensed** (ExtraBold 800, Bold 700, SemiBold 600, files in `assets/fonts/`) and **Inter** (400/500/600, use `@fontsource/inter` or self-host). `font-display: swap`, preload the 800 weight.
- Forms: **Netlify Forms** (`data-netlify="true"`, honeypot field). Hosting target is **Netlify** (`netlify.toml` with security headers + caching).
- Add `@astrojs/sitemap`. Write `robots.txt` by hand.
- Code must pass `astro check` with no errors.

The `docs/` folder is the source of truth for every page. Build the data files in `src/data/` from `docs/04` (services), `docs/05` (areas), `docs/06` (core pages, blog) and `docs/02` (keyword map). Copy text exactly unless you need to fix grammar or fit a length target; never change a primary keyword.

## 2. Placeholders — never invent business facts

The owner will supply some details later. Keep every one of these in **`src/config/site.ts`** only, so they can be filled in one place:

```ts
export const SITE = {
  name: 'Builders Clean Brisbane Co.',
  legalName: '[LEGAL NAME / ABN — TBC]',
  url: 'https://www.builderscleanbrisbaneco.com.au', // planned domain, not yet bought
  phoneDisplay: '',          // e.g. '0400 000 000' — TBC
  phoneE164: '',             // e.g. '+61400000000' — TBC
  email: '',                 // TBC
  whatsapp: '',              // TBC (E.164 digits)
  hours: '[HOURS — TBC]',    // e.g. Mon–Sat 6am–6pm
  addressLocality: 'Brisbane', addressRegion: 'QLD', addressCountry: 'AU',
  streetAddress: '',         // service-area business: leave empty (hidden on GBP)
  postalCode: '',
  gbpUrl: '',                // Google Business Profile link — TBC
  reviewUrl: '',             // short Google review link — TBC
  socials: { facebook: '', instagram: '', linkedin: '' },
  insurance: '[PUBLIC LIABILITY AMOUNT — TBC]',
  foundingYear: '',
  reCleanWindow: '',         // e.g. '48' (hours) — renders [X HOURS] until set
  quoteTurnaround: '',       // e.g. '24' (hours) — renders [X HOURS] until set
  priceRange: '',            // e.g. '$$' only if the owner agrees
  trust: [] as string[],     // only items confirmed true, e.g. ['photo-report','white-card-crews']
  reviewSchema: false,       // keep OFF until real reviews exist
}
```

Rules:
- When `phoneDisplay` is empty, every "Call" button becomes **"Get a free quote"** linking to `#quote` / `/contact/`. When it is set, they become `tel:` links automatically. Same for WhatsApp and email. Build must not fail on empty values.
- Add a small `scripts/check-placeholders.mjs` that prints every empty/`TBC` field at build time as a warning.
- **Never invent** reviews, review counts, star ratings, years in business, jobs completed, crew size, insurance amounts, licences, awards, client logos, prices or guarantees. Where the copy needs one, write a bracketed placeholder like `[PRICE FROM]`, `[X] hours`, `[PUBLIC LIABILITY AMOUNT]`, and list every placeholder in `PLACEHOLDERS.md` at the repo root.
- No `AggregateRating` or `Review` schema until real reviews exist (code it behind a flag in `site.ts`, off by default).
- No stock photos and no AI-generated images. Use only the 10 real photos in `assets/photos/web/`. Where a page needs more images than exist, reuse the most relevant real photo or use a clean typographic/graphic panel (icons, checklists, stage diagrams drawn in SVG/CSS). Leave a `<!-- TODO: real job photo of X -->` comment.

## 3. Site map (48 indexable pages + blog)

```
/                                         Home — "Builders Clean Brisbane"
/services/                                Services hub
/services/post-construction-cleaning-brisbane/
/services/builders-rough-clean-brisbane/
/services/builders-final-clean-brisbane/
/services/builders-handover-clean-brisbane/
/services/sparkle-clean-brisbane/
/services/new-home-builders-clean-brisbane/
/services/renovation-cleaning-brisbane/
/services/apartment-handover-cleaning-brisbane/
/services/townhouse-duplex-builders-clean-brisbane/
/services/commercial-fit-out-cleaning-brisbane/
/services/display-home-cleaning-brisbane/
/services/construction-window-cleaning-brisbane/
/services/construction-dust-removal-brisbane/
/services/paint-plaster-cement-residue-removal-brisbane/
/services/floor-cleaning-after-construction-brisbane/
/services/pressure-washing-after-construction-brisbane/
/services/construction-site-clean-up-brisbane/
/areas/                                   Service areas hub (map + list by region)
/areas/brisbane-city/  /areas/moreton-bay/  /areas/logan/  /areas/ipswich/  /areas/redland/      (5 region pages)
/areas/fortitude-valley/ /areas/newstead/ /areas/albion/ /areas/south-brisbane/ /areas/woolloongabba/
/areas/chermside/ /areas/carindale/ /areas/north-lakes/ /areas/caboolture/ /areas/narangba/
/areas/springfield/ /areas/ripley/ /areas/yarrabilba/ /areas/park-ridge/ /areas/flagstone/      (15 suburb pages)
/builders-clean-cost-brisbane/            Price guide
/builders-clean-checklist/                Checklist (page + printable PDF/print stylesheet)
/for-builders/                            Builder & trade accounts (B2B)
/reviews/                                 Reviews & testimonials (in main menu)
/our-work/                                Photo gallery
/about/
/faq/
/contact/                                 Quote form
/blog/  + 6 launch posts (docs/06)
/privacy-policy/  /terms/                 (noindex not required; keep simple)
404 page
```

Region pages list their suburbs; each suburb page links to its region page (breadcrumb: Home › Areas › Region › Suburb).

## 4. The page template every service and area page must follow

This is the order from the owner's Local SEO Playbook. Do not skip steps.

1. **Breadcrumbs** (visible + BreadcrumbList schema).
2. **H1** exactly as given in the brief ("[Service] in Brisbane" / "Builders Clean [Suburb]").
3. **Answer-first intro (80–120 words)**: what it is, who it's for, the area, price-range placeholder, how fast. The first sentence follows this pattern: *"Builders Clean Brisbane Co. is a [Brisbane builders cleaning company] that [does X] for [who] across [area]."*
4. **Primary CTA block**: quote button + call button (auto from config) + "Upload plans or photos for a faster quote".
5. **Trust strip**: insured `[AMOUNT]`, white-card crews, police-checked, photo report on every job, re-clean promise `[X hours]`. Only render items that are configured as true in `site.ts` (`trust` array).
6. **Pain points this solves** (from docs/03, in the customer's words).
7. **What's included** — a scannable checklist (room by room or surface by surface).
8. **How it works** — 4–5 numbered steps (send plans → itemised quote in `[X]` hours → book around your program → clean + supervisor check → photo report and sign-off).
9. **Real photo(s)** with keyword-rich alt text and a caption.
10. **Why us vs a cheap clean** — short comparison table (our crew vs marketplace/no-name cleaner) using only true claims.
11. **Related services** (3–5 internal links with descriptive anchor text) and, on service pages, **"Areas we cover"** linking to all 20 area pages; on area pages, **"Services in [Suburb]"** linking to the most relevant service pages.
12. **Testimonial slot** — renders only when a real testimonial exists in `src/data/reviews.ts`. When the array is empty, omit the block entirely (no placeholder text).
13. **FAQs (6–8)** from the brief, as an accessible accordion (`<details>/<summary>`), with **FAQPage** schema.
14. **Final CTA band** + quote form (or link to it).
15. **NAP footer** (same everywhere, matching GBP exactly).

Length targets: homepage 1,800–2,500 words; service pages 1,000–1,500 words; region pages 900–1,300; suburb pages 700–1,100 words; price guide 1,500+. Write real, specific, useful copy. No filler, no fluff, no "In today's fast-paced world".

## 5. On-page SEO rules (apply on every page)

- **One primary keyword per page**, never the same primary keyword on two pages (see `docs/02`). The homepage owns "builders clean brisbane" / "builders cleaning brisbane".
- **Title tag** pattern from the briefs, ≤ 60 characters where possible, brand at the end: `Builders Clean Brisbane | Post-Construction Cleaning | Builders Clean Brisbane Co.` (homepage may run longer, that's fine).
- **Meta description** 140–160 characters, includes the keyword, a benefit and a call to action.
- **One H1** per page. H2s cover the sub-topics and secondary keywords. H3s for list items/FAQs.
- **URL slugs** exactly as in the site map (lowercase, hyphenated, trailing slash, include the keyword).
- **Keywords used naturally**: primary keyword in title, H1, first 100 words, one H2, image alt, meta description and once near the end. Secondary keywords and synonyms spread across H2s and body copy. Read every paragraph aloud — if it sounds stuffed, rewrite it. Use the customer's own words from `docs/03` (e.g. "the builder left a mess", "dust in every cupboard", "handover is Friday").
- **Internal links**: every service and area page links back to the homepage with keyword anchor text ("builders clean Brisbane"), plus 3–5 contextual links. No orphan pages. Footer links to all services and all areas.
- **Images**: file names already keyword-rich; alt text from `docs/01` photo table, describe the image + service + Brisbane; never stuff.
- **Canonical** on every page (absolute URL from `SITE.url`). Open Graph + Twitter tags using `assets/brand/og-image-1200x630.jpg` (per-page OG image = page hero photo where available).
- **`lang="en-AU"`**, Australian spelling throughout (colour, organise, metre, licence, centre, enquiry).
- **NAP**: business name exactly "Builders Clean Brisbane Co." everywhere.

## 6. Local SEO / GBP support built into the site

- `LocalBusiness` schema (sitewide, from `site.ts`). Use `"@type": "LocalBusiness"`. Do not use invented or niche types. Include: `name`, `url`, `logo`, `image`, `telephone` (only when set), `email` (only when set), `address` with `addressLocality`, `addressRegion`, `addressCountry` only (service-area business, no street address), `areaServed` (all 20 areas as `City` or `Place` objects), `openingHoursSpecification` (only when set), `sameAs` (GBP and socials when set), `priceRange` (only when set), `hasOfferCatalog` listing all 17 services. Give it a stable `@id` (`SITE.url + '/#business'`) so service and area pages can reference it as `provider`.
- `Service` schema on every service page (`provider` → the LocalBusiness `@id`, `areaServed`, `serviceType`).
- Area pages: `Service` schema with `areaServed` = that suburb/region + the LocalBusiness reference.
- **Every GBP service has its own page** (the 17 service names in `docs/04` are also the GBP service names — keep names identical).
- GBP website link will be `SITE.url + '/?utm_source=google&utm_medium=organic&utm_campaign=gbp'` — make sure UTM params don't break canonical (canonical stays clean).
- Embed a **Google Map of the service area** on `/areas/` and `/contact/` (lazy-loaded via a click-to-load facade so it doesn't hurt speed). Use a Brisbane-centred embed until the GBP URL exists.
- **Sticky mobile action bar**: Call (or Quote), WhatsApp (if set), Get Quote. Big tap targets (≥ 48px).
- **Reviews**: `/reviews/` page in the main menu with a "Leave us a Google review" button (`SITE.reviewUrl`) and a data-driven testimonials list (empty at launch → show only the CTA and the photo gallery).

## 7. Design direction

Read `docs/01` for tokens. In short: **Deep Teal `#0D3B3A` + White, Fresh Lime `#B8E62E` as the accent only** (never lime text on white — it fails contrast). Headings in Barlow Condensed 800 uppercase-feel, body in Inter. The look: confident, clean, premium trade — like a high-end builder's site, not a cheap cleaning template. Big real photos (polished concrete, glass, timber — the photos are luxury new-build finishes; lean into that), generous white space, sharp 6px radii (matching the logo square), the diagonal lime "squeegee stripe" from the logo used sparingly as a graphic device (section dividers, hero corner, active states). No gradients washes, no emoji, no left-border cards, no carousels that auto-play.

Must work perfectly at 360px wide. Hero on mobile: H1, one-line promise, two buttons, then the photo.

## 8. Performance & quality bar (launch blockers)

- Lighthouse mobile: Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100 on the homepage, one service page and one area page.
- LCP < 2.0s on 4G emulation, CLS < 0.05, total JS < 20KB.
- WCAG 2.2 AA: contrast, focus states, skip link, labelled form fields, keyboard-usable menu and accordions.
- Valid HTML, valid schema (test every template in Google's Rich Results Test format — at least run the JSON through a schema validator script), no broken internal links (add `scripts/check-links.mjs`), no duplicate titles/descriptions/H1s (add `scripts/check-seo.mjs` that fails the build on duplicates or missing tags).

## 9. Working order

1. Scaffold Astro, tokens, fonts, layout, header/footer, sticky mobile bar, `site.ts`.
2. Build the data files from `docs/04` and `docs/05` (all fields, all FAQs) — this is where the content lives.
3. Templates: service page, area page (region + suburb variants), then homepage, then core pages, then blog.
4. Schema, sitemap, robots, OG, canonical, breadcrumbs.
5. Write all the copy. Every page must read as if a senior Brisbane local SEO copywriter wrote it by hand: specific, local, helpful, answer-first.
6. Run the scripts and Lighthouse; fix until the quality bar passes.
7. Produce `PLACEHOLDERS.md` and a short `LAUNCH.md` (deploy to Netlify, connect domain, submit sitemap to Google Search Console + Bing Webmaster Tools, set GBP website link with UTM, fill placeholders).

When you finish, summarise: page count, any placeholder still open, Lighthouse scores, and anything you could not do.
