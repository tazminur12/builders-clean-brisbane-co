# Launch checklist

## 1. Fill the placeholders
Work through `PLACEHOLDERS.md`. At minimum before going live: phone, email, hours, insurance, quote turnaround, re-clean window, prices, `trust` and `confirmed`. Then:

```bash
npm ci
npm run build
node scripts/check-placeholders.mjs --dist
```

`npm run build` runs `astro check`, the build, then `check-seo`, `check-links` and `check-schema`, and fails on any error.

## 2. Deploy to Netlify
1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Netlify → **Add new site → Import an existing project** → pick the repo. Build settings are read from `netlify.toml` (`npm run build`, publish `dist`, Node 22.23.4).
3. **Forms:** Netlify detects the `quote` and `checklist-download` forms on first deploy. In **Site configuration → Forms**, turn on form detection if prompted and add an email notification for new submissions. File uploads (plans/photos) are stored by Netlify Forms (8 MB per submission).
4. Submit a test quote with a PDF attached and check it arrives.

## 3. Connect the domain
1. Buy `builderscleanbrisbaneco.com.au` (and `builderscleanbrisbaneco.com`).
2. Netlify → **Domain management** → add `www.builderscleanbrisbaneco.com.au` as the primary domain and the apex as an alias. HTTPS is automatic.
3. Add the `.com` domains as aliases; `netlify.toml` 301-redirects them to the `.com.au`.
4. If the final domain differs, change `SITE.url` in `src/config/site.ts`, `SITE_URL` in `astro.config.mjs`, the sitemap line in `public/robots.txt`, `SITE_URL` in `scripts/check-seo.mjs` and `scripts/check-links.mjs`, and the redirects in `netlify.toml`.

## 4. Search engines
1. **Google Search Console:** add a Domain property, verify by DNS, submit `https://www.builderscleanbrisbaneco.com.au/sitemap-index.xml`.
2. **Bing Webmaster Tools:** import from Search Console (or verify separately) and submit the same sitemap.
3. Use URL Inspection → Request indexing for `/`, the price guide and the eight main service pages.

## 5. Google Business Profile
1. Create the profile with the **registered** name "Builders Clean Brisbane Co." (no extra keywords).
2. Primary category: Cleaning service. Secondary: Commercial cleaning service, House cleaning service, Window cleaning service, Pressure washing service.
3. Hide the address; set the service area to the regions and suburbs on `/areas/`.
4. Website link: `https://www.builderscleanbrisbaneco.com.au/?utm_source=google&utm_medium=organic&utm_campaign=gbp` (canonical tags stay clean, so the UTM never creates a duplicate page).
5. Add the 17 services using the exact names in `src/data/services.ts` (`name` field).
6. Upload the branded photos from `kit-assets/branded/gbp-4x3/`, the logo `kit-assets/gbp-profile-720.png` and the cover `kit-assets/gbp-cover-1080x608.jpg`.
7. Put the profile link in `SITE.gbpUrl`, the short review link in `SITE.reviewUrl`, the map embed in `SITE.mapEmbedUrl`, redeploy.
8. Make NAP identical everywhere: name, "Brisbane, QLD", phone, hours. These must match the footer, contact page and schema.

## 6. After launch
- Ask every customer for a review that mentions the job type and suburb (goal: 10 in month one, 30 by month three). Reply within 48 hours.
- Once real reviews exist, add them to `src/data/reviews.ts` and set `reviewSchema: true`.
- Publish one guide per week (ideas in `docs/06-core-pages-and-blog.md` §13).
- Weekly GBP post with a real before-and-after.
- Set a reminder to re-check the Maps top 10 at 90 days.
- Lighthouse the homepage, a service page and an area page after any design change.

## Regenerating the checklist PDF
If you edit `src/data/checklist.ts`:
```bash
npx astro build && npx astro preview --port 4321
```
```bash
node scripts/build-checklist-pdf.mjs http://localhost:4321
```
(Needs Playwright locally; the PDF is committed in `public/downloads/` so Netlify does not need it.)
