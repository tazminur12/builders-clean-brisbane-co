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
