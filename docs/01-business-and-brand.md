# 01 — Business, positioning, brand and tone

## Business facts (what we know)

- **Trading name:** Builders Clean Brisbane Co.
- **What it does:** Post-construction and builders cleaning in Brisbane, Queensland. Rough (between-trades) cleans, final/sparkle cleans, handover cleans, new-home and renovation cleans, apartment and townhouse handovers, small commercial fit-out cleans, display homes, construction window cleaning, construction dust removal, paint/plaster/cement residue removal, floor cleaning after construction, pressure washing after construction and construction site clean-up.
- **Who it serves:** Two markets that search the same words:
  1. **Builders, site supervisors, project managers, developers, owner-builders, shopfitters** — buy repeatedly, care about reliability, documents, speed and handover dates.
  2. **Homeowners, investors, landlords, sellers, renovators** — buy once, care about price, trust, what's included and access.
- **Service model:** Service-area business. Address is hidden on Google Business Profile (GBP). No street address is published on the site.
- **Positioning line:** *Brisbane's builders clean specialists: on the date, to handover standard, with photos to prove it.*

## Placeholders — owner will supply later (never invent these)

| Field | Status | Where it goes |
|---|---|---|
| Phone number (display + E.164) | **TBC** | `src/config/site.ts` → `phoneDisplay`, `phoneE164` |
| Email address | **TBC** | `site.ts` → `email` |
| WhatsApp number | TBC (optional) | `site.ts` → `whatsapp` |
| Opening hours | TBC | `site.ts` → `hours` |
| Legal name / ABN | TBC | `site.ts` → `legalName` |
| Public liability insurance amount | TBC | `site.ts` → `insurance` |
| Starting prices (per service) | TBC | `src/data/services.ts` → `priceFrom` (renders `[PRICE FROM]` until set) |
| GBP share link | TBC | `site.ts` → `gbpUrl` |
| Review link | TBC | `site.ts` → `reviewUrl` |
| Founding year | TBC | `site.ts` → `foundingYear` (leave empty, do not guess) |
| Re-clean promise window | TBC | `site.ts` → `reCleanWindow` (renders `[X HOURS]` until set) |
| Typical quote turnaround | TBC | `site.ts` → `quoteTurnaround` (research suggests 24 hours; confirm) |
| Owner / supervisor name and photo | TBC | About page |
| Real reviews | none yet | `src/data/reviews.ts` (empty array at launch) |

**Rule:** if a value is empty, the site still builds. Empty phone = "Get a free quote" buttons. No review, rating, year, licence, award, jobs count or insurance figure may appear until the owner confirms it.

## Facts to confirm before launch (open questions)

1. Is the business name registered (ABN Lookup, ASIC business names, IP Australia trade mark search for "Builders Clean")? A registered name protects the GBP name.
2. Hidden GBP suburb (Northside vs another base).
3. Public liability amount.
4. White cards held by every crew member; police checks; any WWC or working-at-heights tickets actually held.
5. Starting prices per service and per property size.
6. Whether site shed / amenities cleaning and caulking are offered. They are **not** in the 17 service pages below; add only if confirmed.
7. Whether the 10 photos are from real completed jobs and in which suburbs (the alt text and captions assume Brisbane jobs; adjust suburb names if not).

## Brand tokens

| Token | Hex | Use |
|---|---|---|
| `--c-teal` (Deep Teal) | `#0D3B3A` | Headers, footer, primary buttons, hero band |
| `--c-lime` (Fresh Lime) | `#B8E62E` | Accent only: stripe graphic, active states, underline bars. **Never lime text on white** (fails contrast) |
| `--c-white` | `#FFFFFF` | Page background |
| `--c-mist` | `#E8EEED` | Alternate section background, cards |
| `--c-ink` | `#1C232B` | Body text |
| `--c-sub` | `#2C5654` | Secondary text on white, logo second line |
| `--c-teal-600` (for links on white) | `#0B5552` | Text links (contrast-checked) |
| Focus ring | `#0B5552` 3px outline + offset 2px | Keyboard focus, always visible |

**Typefaces**
- Headings and wordmark: **Barlow Condensed** ExtraBold 800 (H1/H2), SemiBold 600 (H3, labels). Files: `assets/fonts/`. Uppercase is used for labels and eyebrows only; H1s are sentence case in the markup so they read naturally to search engines and screen readers. Keep it strong with size and weight.
- Body and UI: **Inter** 400 / 500 / 600.
- Sizes: body 17–18px, line-height 1.6; H1 clamp(40px, 6vw, 64px); H2 clamp(30px, 4vw, 44px).
- Radius: 6px (matches the logo square). No pill buttons.

## Logo

Files in `assets/brand/svg/` and `assets/brand/png/`:

- `logo-horizontal.svg` — main header logo on white (teal wordmark, teal square with lime stripe, "BC" in white on teal)
- `logo-horizontal-reversed.svg` — for the teal header/footer (white wordmark)
- `logo-stacked.svg` / `logo-stacked-reversed.svg` — square spaces, social, print
- `icon.svg`, `icon-reversed.svg`, `icon-circle.svg` — favicon, avatars, sticky bar
- Favicons, Apple touch icon, Android icons in `assets/brand/favicon/`
- `assets/brand/gbp-profile-720.png` — GBP logo (720×720)
- `assets/brand/og-image-1200x630.jpg` — default social/OG share image
- `assets/brand/gbp-cover-1080x608.jpg` — GBP cover photo

**Logo rules:** clear space = height of the "B" on every side; never recolour the lime stripe; never place the lime stripe on white without the teal square behind it; never stretch. Use the SVG on the site; PNG only for the GBP and social uploads.

**Icon concept:** a teal square with "BC" set in condensed type, and a diagonal lime squeegee stripe sweeping across the corner. The stripe is the brand's graphic device: section dividers, hero corner, active states. Use it sparingly.

## Photos

Ten real job photos, in `assets/photos/web/` (JPG + WebP, EXIF stripped). Branded versions with the logo bar are in `assets/photos/branded/` (use for social and GBP only, not as hero images on the site).

| File | Use | Alt text (use as given, adjust suburb if the job differs) |
|---|---|---|
| `polished-concrete-floor-clean-brisbane.jpg` | Hero / floor cleaning / OG image | Polished concrete floor cleaned after construction in a Brisbane home |
| `post-construction-clean-living-dining-brisbane.jpg` | Post-construction cleaning, GBP cover | Living and dining room after a post-construction clean in Brisbane |
| `bathroom-handover-clean-brisbane.jpg` | Handover clean | Bathroom after a builders handover clean in Brisbane |
| `bathroom-final-builders-clean-brisbane.jpg` | Final builders clean | Final builders clean of a new bathroom in Brisbane |
| `new-home-builders-clean-brisbane.jpg` | New home builders clean | New home cleaned by builders clean crew before move-in, Brisbane |
| `construction-dust-removal-brisbane.jpg` | Construction dust removal | Construction dust removed from a Brisbane renovation |
| `kitchen-final-clean-brisbane.jpg` | Renovation / final clean | Kitchen after final builders clean, Brisbane new build |
| `pressure-washing-pool-area-brisbane.jpg` | Pressure washing after construction | Pool area pressure washed after construction in Brisbane |
| `builders-sparkle-clean-stairs-brisbane.jpg` | Sparkle clean | Stairs sparkle cleaned after construction, Brisbane |
| `pantry-detail-clean-brisbane.jpg` | Detail / fit-out / pantry | Pantry detail clean after a Brisbane build |

Rule: never use stock photos or AI images. If a page needs an image that does not exist, reuse the closest real photo, or use an SVG/CSS stage diagram, and leave `<!-- TODO: real job photo of X -->`.

## Tone of voice

- Plain, direct Australian English. Spell it: colour, organise, metre, licence, centre, enquiry, programme (for builder schedules).
- Talk to the builder like a site professional: dates, trades, defects, sign-off. Talk to the homeowner like a neighbour who has done this before: what's left behind, what's included, what it costs.
- Specific beats impressive. "We clean after the plasterer and before the painter" beats "our premium solutions".
- Never: "In today's fast-paced world", "premium solutions", "one-stop shop", "we pride ourselves", "best in class", emoji, exclamation marks in headings.
- Always: name the suburb, the stage, the surface and the time. Say what is not included when it matters.

## Standard claims the copy may use (only once confirmed)

- "Flexible when trades run late" — **supported by every review set in the research; keep as a headline promise once the team agrees it.**
- "Photo report on every job" — confirm before launch.
- "Quote within [X] hours" — confirm.
- "Re-clean of in-scope items within [X] hours" — confirm.
- "Insured for $[AMOUNT] public liability" — confirm.
- "White cards and police checks" — confirm per crew member.

Until confirmed, the copy uses the bracketed placeholder, and the trust strip hides the item (`trust` array in `site.ts`).
