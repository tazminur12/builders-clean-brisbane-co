# 06 — Homepage, core pages, price guide, checklist, FAQ hub, blog

## 1. Homepage (`/`) — owns "builders clean brisbane"

- **Title:** `Builders Clean Brisbane | Post Construction Cleaning | Builders Clean Brisbane Co.` (may run long; that's fine)
- **Meta:** Builders clean Brisbane for builders and homeowners. Rough, final and handover cleans with itemised quotes, flexible scheduling and photo reports. Get a quote.
- **H1:** Builders Clean Brisbane
- **Target length:** 1,800–2,500 words.
- **Keyword use:** "builders clean brisbane" and "builders cleaning brisbane" in the H1 and the first 100 words, plus "post construction cleaning brisbane" once in the body with a link to its page. Do not repeat the primary more than about six times.

**Section order (top to bottom)**

1. **Header:** logo, menu (Services, Areas, Price guide, Reviews, For builders, About, Contact), phone or "Get a quote" button.
2. **Hero:** H1 "Builders Clean Brisbane"; one-line promise: "On the handover date, to handover standard, with photos to prove it."; two buttons ("Get a free quote", "Call us" when set); hero photo `polished-concrete-floor-clean-brisbane.jpg`. On mobile: H1, promise, two buttons, then the photo.
3. **Builder or homeowner?** Two cards side by side, each with a link: *"I'm a builder or site manager"* → For builders page and quote form (builder option); *"I'm a homeowner or investor"* → New home and renovation pages and the price guide.
4. **Trust strip:** only items configured as true in `site.ts`: public liability `[AMOUNT]`, white-card crews, police-checked, photo report on every job, re-clean promise `[X HOURS]`, quote within `[X HOURS]`.
5. **The three stages:** rough clean (between trades) → final clean (after trades) → handover or sparkle clean (inspection or move-in). Each card links to its page. Use the diagonal lime stripe as the divider.
6. **Services grid:** all 17 service pages, grouped by stage, property type, residue and trades, commercial and site. Anchor text = the service name.
7. **Why flexibility matters:** the most praised trait across every review set. Copy: "Trades run late. Handover dates move. We move with them." Explain how the plan works: send plans, confirm slot, supervisor check, photo report.
8. **How it works:** 5 numbered steps: send plans or photos → itemised quote in [X HOURS] → book around your program → clean and supervisor check → photo report and sign-off.
9. **What changes the price:** floor area, levels, glazing, finishes, access, build stage, time of day. Links to the price guide.
10. **Our work:** 6 real photos with captions and alt text; link to `/our-work/`.
11. **Areas we cover:** the five regions with their suburbs, linking to the area pages. Map facade.
12. **Reviews:** only if real reviews exist; otherwise omit the testimonial block and show the "Leave us a Google review" CTA (`reviewUrl`) and link to the reviews page.
13. **FAQ accordion:** 8 questions from `src/data/faqs.ts` (homepage set): what is a builders clean; who pays for it; how long does it take; do I need to be there; what's included in a final clean; what if something is missed; are you insured and allowed on site; how do I get a quote. `FAQPage` schema.
14. **Final CTA band:** "Send us your plans. Get your itemised quote." Quote form (Netlify) with builder or homeowner toggle, suburb, job type, handover date, plan upload, and honeypot field.
15. **Footer:** NAP block (name, locality, hours, phone and email when set), all services, all areas, links to price guide, checklist, reviews, about, FAQ, contact, privacy, terms.

## 2. Services hub, areas hub

See docs/04 and docs/05 for the hub briefs.

## 3. Price guide (`/builders-clean-cost-brisbane/`)

- **Title:** `Builders Clean Cost Brisbane 2026 | Price Guide | Builders Clean Brisbane Co.`
- **Meta:** How much does a builders clean cost in Brisbane? Price ranges by property size and stage, what changes the price, and how to get an itemised quote.
- **H1:** Builders Clean Cost in Brisbane
- **Primary:** builders clean brisbane cost
- **Secondary:** builders clean price list QLD, post construction cleaning brisbane price list, builders clean cost per square metre, how much is a builders clean
- **Target length:** 1,500+ words.

**Structure**
1. Intro (answer first): "A builders clean in Brisbane usually costs [PRICE FROM] to [PRICE TO] for a [SIZE] home. The exact price depends on floor area, levels, finishes, access and the build stage. Here's how we price it."
2. **Price table by stage and size** (fill from owner's confirmed rates; do not publish ranges until the owner confirms):

   | Property | Rough clean | Final builders clean | Handover clean | Sparkle clean |
   |---|---|---|---|---|
   | Townhouse, 2 bed | [PRICE] | [PRICE] | [PRICE] | [PRICE] |
   | House, 3–4 bed | [PRICE] | [PRICE] | [PRICE] | [PRICE] |
   | House, 5+ bed or large floor area | [PRICE] | [PRICE] | [PRICE] | [PRICE] |
   | Apartment (per unit) | [PRICE] | [PRICE] | [PRICE] | [PRICE] |
   | Commercial fit-out (per m²) | [PRICE] | — | — | — |

3. **Per-square-metre reference:** "[PRICE PER M²], confirm before publishing." (Market reference: a competitor publishes $10–12/m²; we set our own.)
4. **What changes the price:** floor area, number of levels, number of bathrooms and kitchens, glazing and window count, stone or polished concrete, access (lift, carpark, stairs), build stage and residue type, after-hours or weekend work, travel for outer suburbs.
5. **What's included at each price**: a plain comparison of a cheap clean against ours (same table as service pages, claims limited to confirmed facts).
6. **Pricing policy:** itemised quote within [X HOURS]; no hidden fees; variations only if the scope changes, agreed in writing first. [CONFIRM policy]
7. **Builder accounts:** volume and program pricing on the For Builders page.
8. FAQ (6): How much does a builders clean cost in Brisbane? · Is a builders clean more expensive than a bond clean? · Why is my quote higher than a cheap cleaner's? · Can I get a fixed price? · Do you charge travel to outer suburbs? · How do I get an accurate price?
9. CTA: send plans for an itemised quote.

## 4. Builders clean checklist (`/builders-clean-checklist/`)

- **Title:** `Builders Clean Checklist Queensland | Builders Clean Brisbane Co.`
- **Meta:** Free builders clean checklist for Queensland. Room-by-room list of what a full builders clean includes, to check a clean or brief a cleaner. Download the PDF.
- **H1:** Builders Clean Checklist (Queensland)
- **Primary:** builders clean checklist
- **Secondary:** what does a builders clean include, pre handover inspection checklist, builders clean scope
- **Content:** room-by-room checklist (kitchen, bathrooms, laundry, living areas, bedrooms, ceilings and fans, windows and frames, doors and hardware, floors, external entries and balconies). Printable (print stylesheet). A PDF download gated by email (Netlify form) that captures the lead and earns links.
- **FAQs (6):** what does a builders clean include · who pays for a builders clean · what's the difference between rough and final clean · what should I check before handover · can I use this checklist for a cleaner · is this checklist free.

## 5. For builders (`/for-builders/`)

- **Title:** `Construction Cleaning Contractor Brisbane | For Builders | Builders Clean Brisbane Co.`
- **Meta:** Construction cleaning contractor in Brisbane for builders and developers. Staged programs, SWMS, insurance and white cards on request, photo reports. Request a builder quote.
- **H1:** Construction Cleaning Contractor in Brisbane
- **Primary:** construction cleaning contractor brisbane
- **Secondary:** builders cleaner white card insured, SWMS cleaning contractor brisbane, builders cleaning subcontractor brisbane
- **Content:** what we do for builders (rough, final, handover, apartments, display homes, fit-outs); how we plan the program; supervisor sign-off; documents (capability PDF, insurance certificate, white cards, police checks, SWMS on request) [CONFIRM each]; account pricing; the builder's quote form (business name, ABN, trade contact, plan upload, handover date); a downloadable capability statement (to be created by the owner).
- **FAQs (6):** can you sign our subcontract · do you carry public liability · do you have white cards · can you work to our program · do you provide photo reports for our clients · do you offer account pricing.

## 6. About (`/about/`)

- **Title:** `About Builders Clean Brisbane Co. | Brisbane Builders Cleaners`
- **H1:** About Builders Clean Brisbane Co.
- **Content:** founding story (placeholder: [FOUNDING YEAR / STORY — TBC]); owner or supervisor photo and name [TBC]; why we only do builders and post construction cleaning; how we work with trades; our standards (checklist, supervisor walk, photo report); credentials (only confirmed); Brisbane-based. No invented years, numbers or awards.

## 7. Reviews (`/reviews/`)

- **Title:** `Builders Clean Reviews Brisbane | Builders Clean Brisbane Co.`
- **H1:** Builders Clean Reviews in Brisbane
- **Primary:** best builders clean brisbane
- **Content:** "Leave us a Google review" button (`SITE.reviewUrl`); data-driven testimonial list (empty at launch, so show only the CTA and the photo gallery); a line on how we reply to every review within 48 hours. Review schema only behind the flag in `site.ts`, off by default, and only with real reviews.

## 8. Our work (`/our-work/`)

- **Title:** `Builders Clean Photos Brisbane | Our Work | Builders Clean Brisbane Co.`
- **H1:** Our Work: Builders Clean Photos in Brisbane
- **Primary:** builders clean photos brisbane
- **Content:** all 10 real photos in a filterable (non-JS fallback) gallery grouped by job type, each with alt text and caption. Note under the gallery: "Photos are from our Brisbane jobs."

## 9. Contact (`/contact/`)

- **Title:** `Get a Builders Clean Quote Brisbane | Contact Builders Clean Brisbane Co.`
- **H1:** Get a Builders Clean Quote in Brisbane
- **Primary:** get a builders clean quote brisbane
- **Content:** full quote form (builder or homeowner, suburb, job type, handover date, plan or photo upload, notes); phone, email, WhatsApp, hours (placeholders hidden until set); map facade; service-area list. "Plans help us quote faster. Upload PDFs, floor plans or photos."

## 10. FAQ hub (`/faq/`)

- **Title:** `Builders Clean FAQ Brisbane | Builders Clean Brisbane Co.`
- **H1:** Builders Clean Questions Answered
- **Primary:** builders clean faq brisbane
- **Content:** 20–25 questions grouped: *Booking and quotes*, *What's included*, *Timing and programs*, *Access and on-site*, *Insurance and compliance*, *Residue and damage*, *Homeowners*, *Builders and commercial*. Each answer 40–100 words. `FAQPage` schema on the page.

## 11. Privacy policy and terms

Simple, honest pages. Placeholders for legal name and ABN. Collect enquiries only through the form and phone. State that Netlify hosts the form data. Keep short. Do not invent a complaints process; add it once the owner decides.

## 12. 404 page

Friendly, one line, links to services, areas and the quote form.

---

## 13. Blog (`/blog/`) — 6 launch posts

Each post: 900–1,400 words, answer in the first paragraph, one H1 that matches its keyword, H2 sections, one photo, FAQs at the foot (3–4), a quote CTA, and links to two service pages and one area page. Publish all six at launch; add one per week after.

1. **Who is responsible for cleaning a new home in Queensland?**
   - Keyword: who is responsible for cleaning a new home Queensland (informational)
   - Outline: what the contract usually says · what the handover guidance does and doesn't cover · builder clean vs owner clean · how to write cleaning into a contract · when to book the owner's clean · link to new home clean
2. **Builders clean cost Brisbane 2026: a price guide**
   - Keyword: builders clean brisbane cost (companion to the price guide page)
   - Outline: price factors · sample scenarios (no invented prices; use placeholders) · how to read an itemised quote · link to price guide
3. **Rough clean vs final clean vs sparkle clean: what's the difference?**
   - Keyword: difference between rough clean and final clean
   - Outline: three stages with what each removes · when to book each · how stages save money · links to three stage pages
4. **Pre-handover inspection checklist for Brisbane homeowners**
   - Keyword: pre handover inspection checklist queensland
   - Outline: what the inspector looks at · room-by-room checks · what to ask the builder · link to checklist page and handover clean
5. **How to remove cement haze, grout haze and paint overspray**
   - Keyword: how to remove cement haze from tiles
   - Outline: why it happens · what not to use · safe steps by surface (tile, glass, stone, polished concrete) · when to call a pro · link to residue removal page
6. **Builders clean vs bond clean vs regular clean**
   - Keyword: builders clean vs bond clean
   - Outline: what each clean is for · what each includes · who books each · which one you need · link to services hub

**Guides to add later (month two onward):** how long does a builders clean take (by house size) · cleaning after a kitchen or bathroom renovation · why your builder's clean wasn't enough · Queensland humidity and new builds: stopping mould before move-in · what builders should check before hiring a cleaning subcontractor · getting a new home ready for photos and sale.

**Blog rules:** no keyword stuffing; every post answers a question from docs/03; every post links to the quote form; no invented statistics; cite official Queensland sources only when the post relies on them and the link has been checked.

---

## 14. Google Business Profile support (owner actions, not code)

- Name: Builders Clean Brisbane Co. (only once registered; no extra keywords).
- Primary category: "Cleaning service". Secondary: Commercial cleaning service, House cleaning service, Window cleaning service, Pressure washing service.
- Service area: Brisbane City plus the suburbs and corridors in docs/05. Hide the address.
- Services: all 17 names from docs/04 (GBP list at the end of that file), each with a keyword-rich description.
- Description: lead with builders clean and post construction cleaning in Brisbane, the three stages, credentials and who we serve.
- Photos: real Brisbane jobs only, weekly. Use the branded versions for GBP.
- Posts: weekly, with a finished job, the suburb and one tip.
- Q&A: seed questions on cost, scope, timing and insurance, answered from the FAQ hub.
- Reviews: 10 in month one, 30 by month three. Ask reviewers to mention the job type and suburb. Reply to every review within 48 hours.
- Website link: `SITE.url + '/?utm_source=google&utm_medium=organic&utm_campaign=gbp'`.
- Citations: hipages, Oneflare, Airtasker, Yellow Pages, True Local, Houzz, Hotfrog, Word of Mouth, Master Builders QLD supplier directory if eligible.
