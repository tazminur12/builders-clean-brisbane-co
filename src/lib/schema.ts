import { SITE, isSet, hasPhone, hasEmail } from '../config/site';
import { SERVICES, serviceUrl } from '../data/services';
import { AREAS, areaUrl } from '../data/areas';
import { REVIEWS } from '../data/reviews';
import type { Faq } from '../data/services';
import { abs, plain } from './text';

export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;

type Json = Record<string, unknown>;

const areaPlace = (name: string, slug: string, kind: 'region' | 'suburb'): Json => ({
  '@type': kind === 'suburb' ? 'City' : 'Place',
  name: kind === 'suburb' ? `${name}, QLD` : `${name}, Queensland`,
  url: abs(areaUrl(slug)),
});

/** Sitewide LocalBusiness (docs/07). Only includes owner-confirmed fields. */
export function localBusiness(): Json {
  const sameAs = [SITE.gbpUrl, SITE.socials.facebook, SITE.socials.instagram, SITE.socials.linkedin].filter(isSet);
  const data: Json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: abs('/brand/icon-512.png'),
    image: abs('/brand/og-image-1200x630.jpg'),
    description:
      'Builders cleaning and post construction cleaning in Brisbane: rough, final, handover and sparkle cleans for builders and homeowners, with itemised quotes and photo reports.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    areaServed: AREAS.map((a) => areaPlace(a.name, a.slug, a.kind)),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Builders cleaning services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: abs(serviceUrl(s.slug)) },
      })),
    },
  };
  if (hasPhone) data.telephone = SITE.phoneE164;
  if (hasEmail) data.email = SITE.email;
  if (isSet(SITE.legalName)) data.legalName = SITE.legalName;
  if (isSet(SITE.priceRange)) data.priceRange = SITE.priceRange;
  if (isSet(SITE.foundingYear)) data.foundingDate = SITE.foundingYear;
  if (sameAs.length) data.sameAs = sameAs;
  if (SITE.openingHours.length) {
    data.openingHoursSpecification = SITE.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  // Reviews: behind the flag, and only with real reviews.
  if (SITE.reviewSchema && REVIEWS.length > 0) {
    const avg = REVIEWS.reduce((n, r) => n + r.rating, 0) / REVIEWS.length;
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: Math.round(avg * 10) / 10,
      reviewCount: REVIEWS.length,
      bestRating: 5,
      worstRating: 1,
    };
    data.review = REVIEWS.slice(0, 10).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    }));
  }
  return data;
}

export function website(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: 'en-AU',
    publisher: { '@id': BUSINESS_ID },
  };
}

export function serviceSchema(opts: {
  name: string;
  serviceType: string;
  url: string;
  description: string;
  areaServed: Json | Json[];
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(opts.url)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    url: abs(opts.url),
    description: opts.description,
    provider: { '@id': BUSINESS_ID },
    areaServed: opts.areaServed,
  };
}

/** areaServed for service pages: Brisbane plus all 20 area pages. */
export function allAreasServed(): Json[] {
  return [
    { '@type': 'City', name: 'Brisbane, QLD' },
    ...AREAS.map((a) => areaPlace(a.name, a.slug, a.kind)),
  ];
}

export function areaServedFor(name: string, slug: string, kind: 'region' | 'suburb'): Json {
  return areaPlace(name, slug, kind);
}

export function faqPage(faqs: Faq[], ctx: { price?: string } = {}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: plain(f.q, ctx),
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a, ctx) },
    })),
  };
}

export interface Crumb {
  label: string;
  href: string;
}

export function breadcrumbList(crumbs: Crumb[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: abs(c.href),
    })),
  };
}
