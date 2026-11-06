# Builders Clean Brisbane Co. — website

Astro 7 static site (zero framework JS, ~1.5 KB inline script), plain CSS with design tokens, Netlify hosting and Netlify Forms.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check → build → check-seo → check-links → check-schema
npm run preview
```

## Where things live
| Path | What |
|---|---|
| `src/config/site.ts` | **All business facts and placeholders** (NAP, phone, hours, insurance, trust items, flags) |
| `src/data/services.ts` | 17 service pages (copy, scope, FAQs, photos, related links) |
| `src/data/areas.ts` | 5 region + 15 suburb pages, shared area FAQ bank |
| `src/data/faqs.ts` | Homepage, FAQ hub, price guide, checklist and For Builders FAQs |
| `src/data/pricing.ts` | Price-guide table (empty until confirmed) |
| `src/data/reviews.ts` | Real reviews only (empty at launch) |
| `src/data/photos.ts` | The 10 real job photos, alt text and captions |
| `src/data/checklist.ts` | Room-by-room checklist (page + PDF) |
| `src/content/blog/*.md` | Blog posts (content collection; schema in `src/content.config.ts`) |
| `src/pages/services/[slug].astro` | Service page template (15-step playbook order) |
| `src/pages/areas/[slug].astro` | Region + suburb template |
| `src/lib/text.ts` | Copy tokens: `{{QUOTE}}`, `{{RECLEAN}}`, `{{INSURANCE}}`, `{{LEAD}}`, `{{PRICE}}`, `{{?confirm-key}}` |
| `src/lib/schema.ts` | LocalBusiness, Service, FAQPage, BreadcrumbList builders |
| `scripts/` | `check-seo`, `check-links`, `check-schema`, `check-placeholders`, `build-checklist-pdf` |
| `docs/` | The original briefs (source of truth for copy) |
| `kit-assets/` | Branded photos and GBP images (for Google Business Profile and social, not the site) |

See `PLACEHOLDERS.md` for everything the owner still has to supply and `LAUNCH.md` for deployment.

## Changing the design (UI/UX)
- **Colours, fonts, spacing, radius:** CSS custom properties at the top of `src/styles/global.css` (`--c-teal`, `--c-lime`, `--f-head`, `--r`, …). All styles are in that one file, plain CSS, no framework.
- **Header, footer, mobile action bar:** `src/components/Header.astro`, `Footer.astro`, `ActionBar.astro`.
- **Page skeleton (head tags, fonts, schema, menu script):** `src/layouts/BaseLayout.astro`.
- **Reusable blocks:** `src/components/` (hero/page head, CTA buttons, FAQ accordion, quote form, photo, steps, comparison table, map, stage diagram).
- **Page layouts:** `src/pages/index.astro` (home), `src/pages/services/[slug].astro` (all 17 service pages), `src/pages/areas/[slug].astro` (all 20 area pages), plus one file per core page in `src/pages/`.
- **Words, not layout:** edit the data files in `src/data/` and the blog in `src/content/blog/`. Copy and layout are kept separate, so a redesign shouldn't need copy changes.
- **Logo and favicons:** `public/brand/` and `public/`. Photos: `src/assets/photos/` (real job photos only).
- **Keep:** one `<h1>` per page, `lang="en-AU"`, the canonical/OG/schema tags in `BaseLayout.astro`, and the Netlify form attributes in `QuoteForm.astro`. `npm run build` checks titles, links and schema and fails if something breaks.
- Requires Node 22.23.4+ (see `package.json` engines from Astro 7).
