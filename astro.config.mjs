// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep in sync with SITE.url in src/config/site.ts
const SITE_URL = 'https://www.builderscleanbrisbaneco.com.au';

// Pages that must never appear in the sitemap (noindex utility pages).
const EXCLUDE = ['/404/', '/thank-you/', '/builders-clean-checklist/download/'];

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Small sitewide CSS: inline it to remove render-blocking requests.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: false,
  image: {
    responsiveStyles: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDE.some((p) => page.endsWith(p)),
    }),
  ],
});
