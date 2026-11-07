/**
 * Builders Clean Brisbane Co. — single source of truth for business facts.
 *
 * EVERY owner-supplied detail lives here. Empty strings and values containing
 * "TBC" are treated as "not set": the site still builds, the related UI is hidden
 * or swapped for a "Get a free quote" button, and copy shows a bracketed placeholder.
 *
 * Run `npm run check:placeholders` to list everything still open.
 * Never invent a value. Leave it empty until the owner confirms it.
 */

export type TrustKey =
  | 'insured'
  | 'white-card-crews'
  | 'police-checked'
  | 'photo-report'
  | 're-clean'
  | 'quote-turnaround';

/**
 * Claims in the briefs marked [CONFIRM]. Add a key to SITE.confirmed once the
 * owner has verified it, and the "[CONFIRM: …]" marker disappears from the copy.
 */
export type ConfirmKey =
  | 'travel' // travel policy / charge for outer suburbs
  | 'equipment' // fully equipped, surface-safe products
  | 'hepa' // HEPA-filtered vacuums
  | 'credentials' // white cards, police checks, SWMS per crew
  | 'skip' // skip hire and waste hauling quoted separately
  | 'amenities' // site amenities / site shed cleaning offered
  | 'pricing-policy' // no hidden fees; variations agreed in writing
  | 'builder-accounts' // builder account / program pricing
  | 'route-redlands' // Redlands on the regular route
  | 'subcontract'; // able to sign builders' subcontract agreements

export const SITE = {
  name: 'Builders Clean Brisbane Co.',
  legalName: '[LEGAL NAME / ABN — TBC]',
  url: 'https://www.builderscleanbrisbaneco.com.au', // planned domain, not yet bought
  phoneDisplay: '', // e.g. '0400 000 000' — TBC
  phoneE164: '', // e.g. '+61400000000' — TBC
  email: '', // TBC
  whatsapp: '', // TBC (E.164 digits, e.g. '61400000000')
  hours: '[HOURS — TBC]', // e.g. 'Mon–Sat 6am–6pm'
  /** Structured hours for schema, only once `hours` is confirmed. e.g. [{ days: ['Monday','Tuesday'], opens: '06:00', closes: '18:00' }] */
  openingHours: [] as { days: string[]; opens: string; closes: string }[],
  addressLocality: 'Brisbane',
  addressRegion: 'QLD',
  addressCountry: 'AU',
  streetAddress: '', // service-area business: leave empty (hidden on GBP)
  postalCode: '',
  gbpUrl: '', // Google Business Profile link — TBC
  reviewUrl: '', // short Google review link — TBC
  /** Google Maps embed src. Leave empty to use the Brisbane-centred default; replace with the GBP embed once the profile exists. */
  mapEmbedUrl: '',
  /** Public profile URLs — replace with real accounts before launch. */
  socials: {
    facebook: 'https://www.facebook.com/yourpage',
    instagram: 'https://www.instagram.com/yourhandle',
    linkedin: 'https://www.linkedin.com/company/yourcompany',
  },
  insurance: '[PUBLIC LIABILITY AMOUNT — TBC]', // e.g. '$20 million'
  foundingYear: '',
  reCleanWindow: '', // e.g. '48' (hours) — renders [X HOURS] until set
  quoteTurnaround: '', // e.g. '24' (hours) — renders [X HOURS] until set
  leadTime: '', // standard booking lead time, e.g. 'one week' — renders [LEAD TIME] until set
  priceRange: '', // e.g. '$$' only if the owner agrees
  trust: [] as TrustKey[], // only items confirmed true, e.g. ['photo-report','white-card-crews']
  confirmed: [] as ConfirmKey[], // [CONFIRM] items the owner has verified
  reviewSchema: false, // keep OFF until real reviews exist
  ownerName: '', // owner or supervisor name for the About page — TBC
  capabilityPdf: '', // path to capability statement PDF, e.g. '/downloads/capability-statement.pdf' — TBC
};

/** UTM link for the Google Business Profile "website" field. Canonicals never include it. */
export const GBP_WEBSITE_LINK = `${SITE.url}/?utm_source=google&utm_medium=organic&utm_campaign=gbp`;

/** True when a config value has been supplied (not empty, not a TBC placeholder). */
export const isSet = (v: string | undefined | null): v is string =>
  typeof v === 'string' && v.trim() !== '' && !/TBC/i.test(v);

export const hasPhone = isSet(SITE.phoneDisplay) && isSet(SITE.phoneE164);
export const hasEmail = isSet(SITE.email);
export const hasWhatsapp = isSet(SITE.whatsapp);
export const hasHours = isSet(SITE.hours);
export const hasReviewUrl = isSet(SITE.reviewUrl);

export const telHref = hasPhone ? `tel:${SITE.phoneE164}` : '';
export const whatsappHref = hasWhatsapp
  ? `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I would like a builders clean quote.')}`
  : '';

export const MAP_EMBED =
  SITE.mapEmbedUrl || 'https://maps.google.com/maps?q=Brisbane%20QLD&z=9&output=embed';

/** Main navigation (docs/06 §1). */
export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/areas/', label: 'Areas' },
  { href: '/builders-clean-cost-brisbane/', label: 'Price guide' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/for-builders/', label: 'For builders' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
