# 07 — SEO and technical checklist (build and launch)

## URL and structure
- Lowercase, hyphenated, trailing slash, keyword in slug (exactly as in docs/04 and docs/05).
- Every page reachable within three clicks from the homepage.
- Breadcrumbs visible and marked up (`BreadcrumbList`): Home › Services › page; Home › Areas › Region › Suburb.
- No orphan pages: every service and area page is linked from the hub, the footer and at least one body link.
- Footer links to all 17 services and all 20 areas.

## Titles, descriptions, headings
- Title ≤ 60 characters where possible; brand at the end; unique per page.
- Meta description 140–160 characters; unique per page; includes the primary keyword, a benefit and a call to action.
- One H1 per page, matching the brief exactly.
- H2s carry secondary keywords; H3s for list items and FAQs.
- `scripts/check-seo.mjs` fails the build on duplicate titles, descriptions or H1s, missing tags, or titles over 70 characters.

## Schema (JSON-LD, generated from data)
- **Organisation/LocalBusiness on every page (footer scope):** use `"@type": "LocalBusiness"` (with `additionalType` optional). Do not invent a more specific type. Include: name, url, logo, image, telephone (only when set), email (only when set), `address` with `addressLocality`, `addressRegion`, `addressCountry` only (service-area business, no street address), `areaServed` (all 20 areas as `City` or `Place`), `openingHoursSpecification` (only when set), `sameAs` (GBP and socials when set), `priceRange` (only when set), `hasOfferCatalog` listing all 17 services.
- **Service** on every service page: `name`, `serviceType`, `provider` (LocalBusiness `@id`), `areaServed` (Brisbane and the list of areas).
- **Service** on area pages: `areaServed` set to that suburb or region, `provider` set to the LocalBusiness `@id`.
- **FAQPage** on every page with an FAQ block (6–8 per page).
- **BreadcrumbList** on every interior page.
- **AggregateRating / Review** only behind the `reviewSchema` flag in `site.ts`, off by default, and only with real reviews.
- Validate every template with a JSON-LD validator script before launch; fix any warning.

## Canonicals, indexing and sitemap
- Absolute canonical on every page from `SITE.url`. UTM parameters never appear in canonicals.
- `@astrojs/sitemap` generates `sitemap-index.xml`. Exclude `/404` and any thank-you pages.
- `robots.txt` by hand: allow all, point to the sitemap.
- Netlify form thank-you page is `noindex`.
- Submit the sitemap to Google Search Console and Bing Webmaster Tools after launch.

## Open Graph and social
- Default OG image: `assets/brand/og-image-1200x630.jpg`. Per-page OG image uses the page hero photo where one exists.
- Twitter card `summary_large_image`.
- Favicons and Apple touch icon from `assets/brand/favicon/`; `site.webmanifest` with the Android icons.

## Internal links
- Every service page links to the homepage with the anchor "builders clean Brisbane", plus 3–5 contextual links.
- Every area page links to its region page and the nearest suburbs, and to 2–3 service pages.
- Anchor text is descriptive. No "click here".
- `scripts/check-links.mjs` fails the build on any broken internal link.

## Images
- All photos through Astro `<Picture>`: AVIF, WebP and JPG fallback, explicit width and height.
- Hero: `loading="eager" fetchpriority="high"`. Everything else `loading="lazy"`.
- Alt text from docs/01 (photo table), adapted to the page. Describe the image, the service and Brisbane. Never stuff keywords.
- File names are keyword-rich already. Do not rename them.

## Performance
- Lighthouse mobile on the homepage, one service page and one area page: Performance ≥ 95; Accessibility, Best Practices and SEO = 100.
- LCP < 2.0 s on 4G emulation; CLS < 0.05; total JavaScript < 20 KB.
- Self-host fonts. Preload Barlow Condensed ExtraBold. `font-display: swap`.
- No third-party scripts on load. The map is a click-to-load facade.

## Accessibility (WCAG 2.2 AA)
- Colour contrast checked: teal on white, white on teal, ink on mist. Lime is never text on white.
- Visible focus ring on every interactive element.
- Skip link. Keyboard-usable menu, accordions and forms. `<details>/<summary>` for FAQs.
- Form fields labelled; errors announced; honeypot field hidden from screen readers.
- `lang="en-AU"`.

## Forms
- Netlify Forms: `data-netlify="true"`, honeypot, `name` attributes, a thank-you page.
- Phone and email fields hidden or switched to "Get a free quote" until `site.ts` values are set.

## Local SEO and GBP links
- Embedded map of the service area on `/areas/` and `/contact/`, facade-loaded.
- GBP website link uses the UTM URL; canonical stays clean.
- NAP (name, address locality, phone, hours) identical in the footer, the contact page, the schema and the GBP profile.

## Launch QA
- Every placeholder listed in PLACEHOLDERS.md is either filled or still visibly marked.
- No invented reviews, numbers, licences or prices on any page.
- Spell-check in Australian English.
- Read each money page aloud once. Cut any sentence that sounds stuffed.
- Test on a 360 px phone, Chrome and Safari.
- Check every page's title, description and H1 in the browser.
- Run the three scripts (check-seo, check-links, check-placeholders) and `astro check`.
- Submit sitemap, verify the domain in Search Console, set the GBP website link, and set a 90-day reminder to re-check the Maps top 10.
