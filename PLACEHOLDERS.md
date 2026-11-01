# Placeholders: everything the owner still has to supply

Nothing below has been invented. Until a value is filled in, the site shows a bracketed placeholder or hides the element. Run this to see what is still open:

```bash
npm run build && node scripts/check-placeholders.mjs --dist
```

## 1. `src/config/site.ts`: fill in once, and it updates across the whole site

| Field | What it does when set | While empty |
|---|---|---|
| `phoneDisplay` + `phoneE164` | Adds "Call" buttons (hero, CTAs, header, mobile bar, footer), `telephone` in schema | "Get a free quote" buttons only |
| `email` | Footer, contact page, schema `email` | Hidden |
| `whatsapp` (digits, e.g. `61400000000`) | WhatsApp buttons in CTAs and mobile bar | Hidden |
| `hours` + `openingHours` | Footer/contact hours; `openingHoursSpecification` in schema | Hidden |
| `legalName` (name + ABN) | Footer, privacy, terms, schema `legalName` | `[LEGAL NAME / ABN — TBC]` on privacy and terms |
| `insurance` (e.g. `$20 million`) | Comparison table, FAQs, For Builders, About | `[PUBLIC LIABILITY AMOUNT]` (65× on 43 pages) |
| `quoteTurnaround` (hours, e.g. `24`) | "Itemised quote within 24 hours" everywhere | `[X HOURS]` |
| `reCleanWindow` (hours, e.g. `48`) | Re-clean promise everywhere | `[X HOURS]` |
| `leadTime` (e.g. `one week`) | Rough clean, handover and FAQ copy | `[LEAD TIME]` |
| `gbpUrl` | Footer "Find us on Google", Reviews page, schema `sameAs` | Hidden |
| `reviewUrl` | "Leave us a Google review" buttons | Buttons go to /contact/; `[GOOGLE REVIEW LINK — TBC]` on /reviews/ |
| `mapEmbedUrl` | Map facade loads your GBP map | Brisbane-centred Google map |
| `socials.*` | Footer links, schema `sameAs` | Hidden |
| `foundingYear` | Schema `foundingDate` | Omitted (never guessed) |
| `priceRange` | Schema `priceRange` | Omitted |
| `ownerName` | About page | `[OWNER / SUPERVISOR NAME — TBC]` |
| `capabilityPdf` | For Builders download link | `[TO BE CREATED BY OWNER]` |
| `trust` | Trust strip. Add only true items: `insured`, `white-card-crews`, `police-checked`, `photo-report`, `re-clean`, `quote-turnaround` | Trust strip hidden on every page |
| `confirmed` | Removes `[CONFIRM: …]` markers once verified (keys below) | Markers visible |
| `reviewSchema` | Adds `AggregateRating` + `Review` schema (needs real reviews in `src/data/reviews.ts`) | Off |
| `streetAddress`, `postalCode` | Leave blank: service-area business, address hidden on GBP | Blank by design |

### `confirmed` keys (claims from the briefs marked [CONFIRM])

| Key | Claim | Shows on |
|---|---|---|
| `credentials` | White cards, police checks, SWMS held by every crew member | 43 pages |
| `travel` | Travel charge policy for outer suburbs | 22 pages |
| `skip` | Skip hire and waste hauling quoted separately | 3 pages |
| `amenities` | Site amenities / site shed cleaning is offered | Construction site clean-up |
| `builder-accounts` | Builder account / program pricing | For Builders, North Lakes |
| `route-redlands` | Redlands on the regular route | Redlands |
| `pricing-policy` | No hidden fees; variations agreed in writing | Price guide |
| `hepa` | HEPA-filtered vacuums | Construction dust removal |
| `equipment` | Fully equipped; surface-safe products | Post construction cleaning |
| `subcontract` | Can sign builders' subcontract agreements | For Builders |

If a claim is **not** true, edit the sentence in `src/data/*.ts` instead of confirming it.

## 2. Prices: `src/data/services.ts` and `src/data/pricing.ts`

- `priceFrom` on each of the 17 services → replaces `[PRICE FROM]` (57× on 38 pages; area pages also use `[PRICE FROM]` in their intros, which are in `src/data/areas.ts`).
- `PRICE_TABLE` (20 cells) → replaces `[PRICE]` on the price guide.
- `PRICE_FROM` / `PRICE_TO` → price guide intro and FAQ.
- `PRICE_PER_M2` → price guide (`[PRICE PER M²]`). Market reference only: one competitor publishes $10–12/m²; set your own.
- Blog post 2 (`src/content/blog/builders-clean-cost-brisbane-2026-price-guide.md`) has four `**[PRICE]**` sample scenarios.

## 3. Content the owner must write or supply

- About page: `[FOUNDING YEAR / STORY — TBC]` and an owner/supervisor photo (real photo only).
- Terms: `[FULL TERMS OF TRADE — TBC BY OWNER]`.
- Capability statement PDF → put it in `public/downloads/` and set `capabilityPdf`.
- Real reviews → `src/data/reviews.ts` (verbatim, real only). Testimonial blocks appear automatically.

## 4. Photos (`<!-- TODO -->` comments in the HTML)

Real job photos still needed for: **rough clean, apartment handover, commercial fit-out, construction window cleaning, residue removal (before/after), site clean-up**. Until then, those pages reuse the closest real photo. To add a photo: drop the JPG into `src/assets/photos/`, register it in `src/data/photos.ts`, and reference its key in the service's `photos` array.

Also confirm that the 10 existing photos are from real completed jobs, and which suburbs they are in; adjust alt text and captions in `src/data/photos.ts` if needed.

## 5. Local-detail check (docs/05 rule)

Before launch, read each suburb's `localAngle`, `whatWeSee` and `planning` in `src/data/areas.ts` and remove anything you cannot confirm from local knowledge.

## 6. Outside the code (from the kit's open-items list)

Business name registration (ABN Lookup, ASIC), IP Australia trade mark search for "Builders Clean", domain purchase (`.com.au` + `.com` redirect), GBP creation with the registered name, keyword volumes in Google Keyword Planner, Maps top-10 re-check at 90 days. The original list is in `docs/00-owner-open-items.md`.
