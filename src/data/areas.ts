import type { PhotoKey } from './photos';
import type { Faq } from './services';

/**
 * Service-area pages (docs/05): 5 regions + 15 suburbs.
 * LOCAL DETAIL RULE: lines describe the *type* of housing and work only. The owner
 * checks each against current local knowledge before launch. No street names,
 * landmarks, home counts or school names unless verified.
 */

export type RegionSlug = 'brisbane-city' | 'moreton-bay' | 'logan' | 'ipswich' | 'redland';

interface AreaBase {
  slug: string;
  name: string;
  title: string;
  meta: string;
  h1: string;
  primary: string;
  /** Answer-first intro, 80–120 words; first sentence follows the playbook pattern. */
  intro: string;
  photo: { key: PhotoKey; alt: string };
  /** Service slugs, most relevant first. */
  services: string[];
  faqs: Faq[];
}

export interface Region extends AreaBase {
  kind: 'region';
  suburbs: string[];
  /** Short card blurb on the areas hub. */
  blurb: string;
  sections: { h2: string; paras: string[] }[];
}

export interface Suburb extends AreaBase {
  kind: 'suburb';
  region: RegionSlug;
  blurb: string;
  localAngle: string;
  whatWeSee: string;
  planning: string;
  nearby: string[];
}

export type Area = Region | Suburb;

/** Shared service-area FAQ bank (docs/05) — shown after the unique FAQs on every area page. */
export const AREA_FAQ_BANK: Faq[] = [
  { q: 'Do you clean on weekends?', a: 'Weekend slots depend on availability. Ask when you book: builders’ programs often need weekend or after-hours work.' },
  { q: 'Do you need me to be on site?', a: 'Usually not. We can work with a key, lockbox or site contact and send a photo report.' },
  { q: 'How quickly can you give a quote?', a: 'Send the plans and photos and we reply within {{QUOTE}}. The quote is itemised so you can see what is included.' },
  { q: 'Are you insured and do your crews hold white cards?', a: 'Public liability of {{INSURANCE}}, white cards and police checks are confirmed per crew, and documents are available on request.{{?credentials}}' },
  { q: 'What if something is missed?', a: 'Tell us within {{RECLEAN}} and we return to re-clean any in-scope item.' },
  { q: 'Do you travel to every suburb?', a: 'Yes, within our service areas. A travel charge may apply for smaller jobs, and it is shown in the quote.{{?travel}}' },
  { q: 'What if my suburb is not listed?', a: 'Put the suburb in the [quote form](/contact/) anyway. If we cover it, we confirm in the reply; if travel applies, it is shown as its own line before you book.{{?travel}}' },
];

export const REGIONS: Region[] = [
  {
    kind: 'region',
    slug: 'brisbane-city',
    name: 'Brisbane City',
    title: 'Builders Clean Brisbane City | Builders Clean Brisbane Co.',
    meta: 'Builders clean and post construction cleaning across Brisbane City. Inner-city apartments, renovations and new builds. Itemised quotes and photo reports.',
    h1: 'Builders Clean in Brisbane City',
    primary: 'builders clean brisbane city',
    blurb: 'Apartments, character-home renovations, townhouses and commercial fit-outs, from the Valley to Carindale.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans and post construction cleaning for builders, developers, fit-out companies and homeowners across Brisbane City, from Fortitude Valley and Newstead to Chermside and Carindale. Brisbane City is the densest area we clean: apartment towers, renovated character homes, new townhouses and a steady stream of commercial fit-outs. Access, lift bookings and parking are the first things we plan for. A builders clean in Brisbane City starts from [PRICE FROM], quotes arrive within {{QUOTE}}, and we work after hours where buildings require it.',
    photo: { key: 'living-dining', alt: 'Open-plan living area after a builders clean in Brisbane City' },
    suburbs: ['fortitude-valley', 'newstead', 'albion', 'south-brisbane', 'woolloongabba', 'chermside', 'carindale'],
    services: ['apartment-handover-cleaning-brisbane', 'commercial-fit-out-cleaning-brisbane', 'renovation-cleaning-brisbane', 'townhouse-duplex-builders-clean-brisbane', 'builders-final-clean-brisbane'],
    sections: [
      {
        h2: 'Builders cleaning across inner Brisbane',
        paras: [
          'Inner-city jobs are shaped by the building as much as the clean. Apartment projects need lift and loading-dock bookings, inductions and fob handling agreed before day one. Retail and hospitality fit-outs need overnight crews so the tenant can trade in the morning. Character-home renovations need careful work around older timber and tiles.',
          'Further out, in suburbs like Chermside and Carindale, the work is mostly family homes: extensions, renovations and new townhouses, where the owner often books the clean after the builder has left.',
        ],
      },
      {
        h2: 'Post construction cleaning for Brisbane City builders',
        paras: [
          'For builders and developers we plan staged cleans to the program: a rough clean between trades, a final clean after the last trade, and a handover clean before the inspection. Each stage has its own checklist and photo report, so the site manager can see what is done without walking every floor.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you need to book the lift or loading dock in apartment buildings?', a: 'Often, yes. We confirm the building rules and bookings before the first day.' },
      { q: 'Do you clean inner-city renovations?', a: 'Yes, including terrace and character-home renovations. Tell us the age of the home and the type of work.' },
      { q: 'Can you clean apartments in the middle of the week?', a: 'Yes, and after hours for most commercial and building-managed jobs.' },
    ],
  },
  {
    kind: 'region',
    slug: 'moreton-bay',
    name: 'Moreton Bay',
    title: 'Builders Clean Moreton Bay | Builders Clean Brisbane Co.',
    meta: 'Builders clean across Moreton Bay, including North Lakes, Caboolture and Narangba. New estates and new homes, with itemised quotes and photo reports.',
    h1: 'Builders Clean in Moreton Bay',
    primary: 'builders clean moreton bay',
    blurb: 'Estate handovers and new homes in North Lakes, Narangba and Caboolture.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for volume builders, custom builders and new-home owners across Moreton Bay, including North Lakes, Narangba and Caboolture. Moreton Bay is one of Brisbane’s main growth areas. Master-planned estates and volume builders mean many handovers on the same street in the same week, so we plan the work by builder, by street and by date. A builders clean in Moreton Bay starts from [PRICE FROM] per home, quotes arrive within {{QUOTE}}, and any travel charge is shown upfront in the quote.',
    photo: { key: 'new-home', alt: 'New home after a builders clean in Moreton Bay' },
    suburbs: ['north-lakes', 'narangba', 'caboolture'],
    services: ['new-home-builders-clean-brisbane', 'builders-handover-clean-brisbane', 'builders-final-clean-brisbane', 'sparkle-clean-brisbane', 'renovation-cleaning-brisbane'],
    sections: [
      {
        h2: 'Estate handovers in Moreton Bay',
        paras: [
          'On a growing estate, the challenge is volume and timing. Builders want every home on a street cleaned to the same standard in the days before handover, and new owners want a proper clean before the removalist arrives. We plan both: batches of handover cleans for builders, and individual new home cleans for owners after the builder’s clean.',
          'Send the lot list and handover dates and we will quote each home and confirm the sequence.',
        ],
      },
      {
        h2: 'Renovations and older homes',
        paras: [
          'Alongside the new estates, Moreton Bay has plenty of established homes being renovated and extended. For those we bring the same dust control and surface care we use in the inner city, and we can clean around a family that is still living in the home.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you clean whole estates?', a: 'Yes. We plan estate handovers in sequence and send one quote per street or per builder.' },
      { q: 'Do you travel from Brisbane to Moreton Bay?', a: 'Yes. Tell us the suburb and we confirm any travel charge in the quote.{{?travel}}' },
      { q: 'Can you clean several homes in one day?', a: 'For small batches, yes. Big estate programs are planned across the week.' },
    ],
  },
  {
    kind: 'region',
    slug: 'logan',
    name: 'Logan',
    title: 'Builders Clean Logan | Builders Clean Brisbane Co.',
    meta: 'Builders clean and post construction cleaning across Logan, including Yarrabilba, Park Ridge and Flagstone. New estates and new homes, with photo reports.',
    h1: 'Builders Clean in Logan',
    primary: 'builders clean logan',
    blurb: 'New estates on tight program dates in Yarrabilba, Park Ridge and Flagstone.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans and post construction cleaning for builders and new-home owners across Logan, including Yarrabilba, Park Ridge and Flagstone. Logan’s new estates run on tight program dates, and many new homes are handed over in the same month. We clean every home to one standard so the builder’s inspections pass first time and owners move in to a clean home. A builders clean in Logan starts from [PRICE FROM] per home, quotes arrive within {{QUOTE}}, and we confirm the date for each home in writing.',
    photo: { key: 'polished-concrete', alt: 'Polished concrete floor after a builders clean in Logan' },
    suburbs: ['yarrabilba', 'park-ridge', 'flagstone'],
    services: ['new-home-builders-clean-brisbane', 'builders-final-clean-brisbane', 'builders-handover-clean-brisbane', 'construction-dust-removal-brisbane', 'pressure-washing-after-construction-brisbane'],
    sections: [
      {
        h2: 'New estate builders cleaning in Logan',
        paras: [
          'Logan’s growth areas are built home by home, often by several builders on the same street. Each builder has its own handover checklist and each owner has a move-in date. We work to both, with a clean planned per home and a photo report the builder can share with the owner.',
          'Outdoor work is a big part of a new Logan home: driveways, paths and pool areas often need [pressure cleaning after construction](/services/pressure-washing-after-construction-brisbane/) once landscaping is done.',
        ],
      },
      {
        h2: 'When the builder’s clean is not enough',
        paras: [
          'Many Logan owners tell us the same thing: the builder cleaned, but there is still dust in the cupboards and residue on the glass. A [new home builders clean](/services/new-home-builders-clean-brisbane/) booked between handover and move-in fixes that, without the owner having to clean around boxes and furniture.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you clean new estates in Logan?', a: 'Yes, including staged handovers across a large estate.' },
      { q: 'Is a builders clean needed if the builder cleans?', a: 'Often the builder’s clean is basic. Most owners book a full clean before move-in.' },
      { q: 'Can you meet a builder’s handover date across several homes?', a: 'Yes. We confirm dates per home in the quote.' },
    ],
  },
  {
    kind: 'region',
    slug: 'ipswich',
    name: 'Ipswich',
    title: 'Builders Clean Ipswich | Builders Clean Brisbane Co.',
    meta: 'Builders clean across Ipswich, including Springfield and Ripley. New estates, new homes and renovations, with itemised quotes and a photo report on every job.',
    h1: 'Builders Clean in Ipswich',
    primary: 'builders clean ipswich',
    blurb: 'Master-planned estates in Springfield and Ripley, plus renovations in established homes.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for builders, renovators and new-home owners across Ipswich, including Springfield and Ripley. Ipswich’s growth suburbs mix master-planned estates with established homes being renovated, so we see large new-home programs and steady renovation work close together. Both get the same checklist, supervisor check and photo report. A builders clean in Ipswich starts from [PRICE FROM], quotes arrive within {{QUOTE}}, and travel is confirmed in the quote before you book.',
    photo: { key: 'stairs', alt: 'Timber stairs after a builders clean in an Ipswich new build' },
    suburbs: ['springfield', 'ripley'],
    services: ['new-home-builders-clean-brisbane', 'builders-handover-clean-brisbane', 'renovation-cleaning-brisbane', 'paint-plaster-cement-residue-removal-brisbane', 'builders-final-clean-brisbane'],
    sections: [
      {
        h2: 'New homes in Ipswich’s growth estates',
        paras: [
          'Springfield and Ripley are built around large master-planned estates, with homes handed over in batches. For builders we plan handover cleans per stage of the estate; for owners we book new home cleans between handover and move-in.',
          'New tiles in these homes often carry grout or cement haze from a fast program. Where a standard clean will not shift it, our [residue removal](/services/paint-plaster-cement-residue-removal-brisbane/) service does.',
        ],
      },
      {
        h2: 'Renovations in established Ipswich homes',
        paras: [
          'Older Ipswich homes often have original timber floors and older tiles that need care after a renovation. We check the surfaces first, plan dust and residue control, and clean around furniture when the family is living in the home.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you clean in Springfield and Ripley?', a: 'Yes. Both are on our regular route, and we confirm travel in the quote.{{?travel}}' },
      { q: 'Do you clean renovations in older Ipswich homes?', a: 'Yes. Tell us the age of the home and the works, and we plan the dust and residue control.' },
      { q: 'Can I get a quote for a whole estate?', a: 'Yes. Send the lot list and the handover dates.' },
    ],
  },
  {
    kind: 'region',
    slug: 'redland',
    name: 'Redlands',
    title: 'Builders Clean Redland City | Builders Clean Brisbane Co.',
    meta: 'Builders clean across the Redlands, including Cleveland and Capalaba. New homes, renovations and post construction cleaning. Request a quote with photo report.',
    h1: 'Builders Clean in the Redlands',
    primary: 'builders clean redland city',
    blurb: 'New homes and renovations across Redland City. Confirm your suburb when you ask for a quote.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans and post construction cleaning for builders, renovators and homeowners across Redland City, including Cleveland and Capalaba. We serve the Redlands for new homes and renovations. Tell us the suburb and the size of the job and we will confirm whether it is on our regular route, along with any travel charge, in the quote. A builders clean in Redland City starts from [PRICE FROM], and quotes arrive within {{QUOTE}} of receiving plans or photos.',
    photo: { key: 'pool', alt: 'Pool area cleaned after construction in the Redlands' },
    suburbs: [],
    services: ['new-home-builders-clean-brisbane', 'renovation-cleaning-brisbane', 'post-construction-cleaning-brisbane', 'pressure-washing-after-construction-brisbane', 'construction-window-cleaning-brisbane'],
    sections: [
      {
        h2: 'Bayside homes and renovations',
        paras: [
          'Bayside homes deal with salt air, which leaves a film on glass and frames and affects which products are safe on exterior surfaces. When you book a Redlands clean, tell us how close the home is to the water and what the exterior surfaces are, and we will choose the products to suit.',
        ],
      },
      {
        h2: 'Redlands suburb pages',
        paras: [
          'We do not have suburb pages for the Redlands yet. If your suburb is not listed elsewhere on this site, send it with your quote request and we will confirm whether we can do the job.{{?route-redlands}}',
        ],
      },
    ],
    faqs: [
      { q: 'Do you clean in the Redlands?', a: 'Yes, for new homes and renovations. Confirm your suburb when you request a quote.{{?route-redlands}}' },
      { q: 'Do you charge travel?', a: 'A travel charge may apply for smaller jobs. It is shown in the quote.' },
      { q: 'Can you do a bayside renovation clean?', a: 'Yes. Tell us about salt air and exterior surfaces so we choose the right products.' },
    ],
  },
];

export const SUBURBS: Suburb[] = [
  {
    kind: 'suburb',
    slug: 'fortitude-valley',
    name: 'Fortitude Valley',
    region: 'brisbane-city',
    title: 'Builders Clean in the Valley | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Fortitude Valley. Apartment handovers, renovations and small commercial fit-outs. Request a quote with itemised pricing and a photo report.',
    h1: 'Builders Clean in Fortitude Valley',
    primary: 'builders clean fortitude valley',
    blurb: 'Apartment handovers and after-hours fit-out cleans in mixed-use buildings.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for developers, builders, fit-out companies and owners across Fortitude Valley. Most of our Valley work is in mixed-use buildings: apartment handovers upstairs and shop, bar or office fit-outs at street level. A builders clean in Fortitude Valley is planned around the building as much as the clean, with lift bookings, loading times and inductions agreed before the first day. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and commercial work can be done after hours so the tenant can open on time.',
    localAngle:
      'Fortitude Valley is a mix of apartment buildings and renovated commercial and residential premises, often in the same block. Building access and lift bookings shape almost every job here.',
    whatWeSee:
      'Typical Valley jobs are apartment handovers for a developer or builder, small bar, café and retail fit-outs that must trade the next day, and renovations of older commercial spaces into offices or apartments. Glass shopfronts, polished concrete floors and exposed services in ceilings are common, and each needs dust removed properly before the space opens.',
    planning:
      'Send the floor plan, the building’s access rules and your handover or opening date. We confirm the loading-dock window, the lift booking and the crew size in the quote, and for fit-outs we schedule the clean overnight or after the trades leave.',
    photo: { key: 'pantry', alt: 'Joinery and polished concrete after a builders clean in Fortitude Valley' },
    services: ['apartment-handover-cleaning-brisbane', 'commercial-fit-out-cleaning-brisbane', 'renovation-cleaning-brisbane', 'builders-final-clean-brisbane'],
    nearby: ['newstead', 'albion', 'south-brisbane'],
    faqs: [
      { q: 'Do you clean apartments in Fortitude Valley?', a: 'Yes, for builders, developers and owners. Lift bookings and building rules are confirmed before the first day.' },
      { q: 'Can you clean a commercial fit-out in Fortitude Valley after hours?', a: 'Yes, for most shop and bar fit-outs.' },
      { q: 'Do you handle access in mixed-use buildings?', a: 'We agree access, keys and inductions before we start.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'newstead',
    name: 'Newstead',
    region: 'brisbane-city',
    title: 'Builders Clean Newstead | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Newstead for apartment handovers and new homes. Riverside developments and renovations, itemised quotes and photo reports. Request a quote.',
    h1: 'Builders Clean in Newstead',
    primary: 'builders clean newstead',
    blurb: 'Riverside apartment handovers where balconies and glass are part of the scope.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for developers, builders and apartment owners across Newstead. Newstead’s work is mostly apartment developments and renovated homes close to the river, where balconies, balustrade glass and large windows are part of almost every handover. A builders clean in Newstead covers the units in settlement order, with one checklist and a photo report per unit. Prices start from [PRICE FROM] per unit, itemised quotes arrive within {{QUOTE}}, and we can clean apartments in sequence as settlements are staged.',
    localAngle:
      'Apartment developments and renovated homes close to the river. Balcony and window cleaning is often part of the handover.',
    whatWeSee:
      'Large sliding doors, floor-to-ceiling glass and balconies with glass balustrades are typical of Newstead apartments. Construction dust collects in sliding-door tracks and on balcony floors, and stickers and silicone are left on glass. Buyers notice both at their pre-settlement inspection, so we put glass, tracks and balconies near the top of the checklist.',
    planning:
      'Send the unit schedule and settlement dates. We plan the units in settlement order, clean balconies and glass where safe to reach, and file a photo report for each unit so the sales team can answer buyer questions without a site visit.',
    photo: { key: 'living-dining', alt: 'Glass and polished concrete after a builders clean in Newstead' },
    services: ['apartment-handover-cleaning-brisbane', 'construction-window-cleaning-brisbane', 'post-construction-cleaning-brisbane'],
    nearby: ['fortitude-valley', 'albion', 'south-brisbane'],
    faqs: [
      { q: 'Do you clean balconies in new apartments?', a: 'Yes, where they are in scope. Balconies are listed in the handover checklist.' },
      { q: 'Can you clean windows and frames on a new apartment?', a: 'Yes, including tracks and sills.' },
      { q: 'Can you handle staged settlements?', a: 'Yes. We plan the units in the order of settlement.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'albion',
    name: 'Albion',
    region: 'brisbane-city',
    title: 'Builders Clean Albion | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Albion for renovations and new homes. Dust removal, residue removal and final cleans, with itemised quotes and photo reports. Get a quote.',
    h1: 'Builders Clean in Albion',
    primary: 'builders clean albion',
    blurb: 'Character-home renovations and infill builds where dust control matters.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans and renovation cleans for homeowners, renovators and builders across Albion. Albion is a mix of character homes being renovated and newer infill builds, and many of our jobs here are in homes where the family is still living. A builders clean in Albion starts with the surfaces: older timber floors, original tiles and new finishes side by side, each needing the right product. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and we protect furniture and belongings as we go.',
    localAngle:
      'A mix of character homes being renovated and newer infill builds. Dust control inside occupied homes is a common need.',
    whatWeSee:
      'Raised and renovated character homes often have new kitchens and bathrooms sitting next to original timber floors and VJ walls. Fine plaster and sanding dust gets into the gaps of old boards and onto picture rails, and grout haze is left on new tiles. On infill builds we see the usual new-build residue: stickers on glass, paint spots and dust in every cupboard.',
    planning:
      'Tell us the age of the home, the rooms that were worked on and whether anyone is living there. We check the surfaces first, especially timber and older tiles, and plan the order of rooms so the house stays usable while we clean.',
    photo: { key: 'dust', alt: 'Dust removed after a renovation clean in Albion' },
    services: ['renovation-cleaning-brisbane', 'construction-dust-removal-brisbane', 'paint-plaster-cement-residue-removal-brisbane'],
    nearby: ['newstead', 'fortitude-valley', 'chermside'],
    faqs: [
      { q: 'Can you clean an older Albion home after a renovation?', a: 'Yes. We check the surfaces first, especially timber and older tiles.' },
      { q: 'Do you protect furniture during a renovation clean?', a: 'Yes. We move and protect furniture as we go.' },
      { q: 'Is dust removal available as a stand-alone job?', a: 'Yes. See [construction dust removal](/services/construction-dust-removal-brisbane/).' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'south-brisbane',
    name: 'South Brisbane',
    region: 'brisbane-city',
    title: 'Builders Clean South Brisbane | Builders Clean Brisbane Co.',
    meta: 'Builders clean in South Brisbane for apartment handovers, fit-outs and renovations. Careful access planning, itemised quotes and photo reports. Get a quote.',
    h1: 'Builders Clean in South Brisbane',
    primary: 'builders clean south brisbane',
    blurb: 'Apartment handovers and café or retail fit-outs in busy buildings.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for builders, developers, fit-out companies and owners across South Brisbane. Most South Brisbane work is in apartment buildings and commercial premises close to the cultural precinct, where loading times, lift bookings and building rules shape the program. A builders clean in South Brisbane is planned around those rules before the crew arrives. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and café and retail fit-outs are cleaned after hours so the business can open on schedule.',
    localAngle:
      'Apartment buildings and commercial premises close to the cultural precinct. Access and building rules shape the program.',
    whatWeSee:
      'In South Brisbane we mostly see apartment handovers for builders and owners, and hospitality and retail fit-outs at street level. Fit-outs leave dust on joinery, display shelving and exposed ceilings, and glass shopfronts need to be clear before the doors open. Apartments need balconies, glass and wet areas finished to the standard buyers expect at their inspection.',
    planning:
      'Send the building’s access rules, the loading-dock times and the date you need the space handed over or open. We confirm the crew, the hours and any after-hours work in the quote.',
    photo: { key: 'kitchen', alt: 'Kitchen joinery after a builders clean in South Brisbane' },
    services: ['apartment-handover-cleaning-brisbane', 'commercial-fit-out-cleaning-brisbane', 'builders-final-clean-brisbane'],
    nearby: ['woolloongabba', 'fortitude-valley', 'newstead'],
    faqs: [
      { q: 'Do you clean apartments in South Brisbane?', a: 'Yes, for builders and owners, with building access confirmed first.' },
      { q: 'Can you clean a café or retail fit-out in South Brisbane?', a: 'Yes, after hours.' },
      { q: 'How do you plan access in busy buildings?', a: 'We confirm loading times and lift bookings before the job.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'woolloongabba',
    name: 'Woolloongabba',
    region: 'brisbane-city',
    title: 'Builders Clean Woolloongabba | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Woolloongabba. Apartment handovers, new townhomes and renovations, with itemised quotes and a photo report for every job. Request a quote.',
    h1: 'Builders Clean in Woolloongabba',
    primary: 'builders clean woolloongabba',
    blurb: 'Apartment and townhouse handovers that run in sequence.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for developers, builders and owners across Woolloongabba. Apartment and townhouse development is strong in the area, and handovers here often run in sequence: one building or one row of townhouses at a time. A builders clean in Woolloongabba is planned to that sequence, with every dwelling cleaned to the same checklist and its own photo report. Prices start from [PRICE FROM] per dwelling, itemised quotes arrive within {{QUOTE}}, and we work to your settlement schedule.',
    localAngle:
      'Apartment and townhouse development is strong in the area. Handovers often run in sequence.',
    whatWeSee:
      'Multi-level townhouses with internal stairs, balconies and garages are common, as are mid-rise apartment buildings. Stairs, balustrades and balconies collect dust and are easy to miss, so they are on our checklist for every dwelling. Where trades are still working next door, we plan the clean so finished homes do not get dusty again.',
    planning:
      'Send the plans and the settlement or handover schedule. We quote each dwelling, confirm the order and the dates, and send the photo report for each one as it is signed off.',
    photo: { key: 'stairs', alt: 'Townhouse stairs after a builders clean in Woolloongabba' },
    services: ['apartment-handover-cleaning-brisbane', 'townhouse-duplex-builders-clean-brisbane', 'builders-final-clean-brisbane'],
    nearby: ['south-brisbane', 'fortitude-valley', 'carindale'],
    faqs: [
      { q: 'Do you clean townhouse developments in Woolloongabba?', a: 'Yes, in sequence, to one standard.' },
      { q: 'Can you meet settlement dates?', a: 'We plan to your settlement schedule and confirm it in the quote.' },
      { q: 'Do you clean stairs and balconies?', a: 'Yes, where they are in scope.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'chermside',
    name: 'Chermside',
    region: 'brisbane-city',
    title: 'Builders Clean Chermside | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Chermside for renovations, new homes and small commercial fit-outs. Itemised quotes, photo reports and reliable handover dates. Get a quote.',
    h1: 'Builders Clean in Chermside',
    primary: 'builders clean chermside',
    blurb: 'Family-home renovations and extensions, plus small shop fit-outs.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans and renovation cleans for homeowners, builders and shopfitters across Chermside. Most Chermside jobs are family homes being renovated and extended, along with a range of small commercial premises. Extensions create the most dust of any job we do, so a builders clean in Chermside usually starts with dust removal and works down to the floors. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and small shop fit-outs can be cleaned after hours.',
    localAngle:
      'Family homes being renovated and extended, and a range of small commercial premises. Many jobs are residential renovations and extensions.',
    whatWeSee:
      'When a wall comes down for an extension, dust spreads through the whole house, including rooms the builder never worked in. We see it on top of wardrobes, inside kitchen cupboards and in the bedding of kids’ rooms. On the commercial side, small shop and clinic fit-outs need a clean between the last trade and opening.',
    planning:
      'Tell us which rooms were worked on, whether the family is living in the home and when you need it finished. We start with dust removal, then kitchens and bathrooms, then floors, and protect furniture as we go.',
    photo: { key: 'dust', alt: 'Living area after dust removal following an extension in Chermside' },
    services: ['renovation-cleaning-brisbane', 'builders-final-clean-brisbane', 'commercial-fit-out-cleaning-brisbane'],
    nearby: ['albion', 'north-lakes', 'newstead'],
    faqs: [
      { q: 'Do you clean after a home extension in Chermside?', a: 'Yes. Extensions create the most dust, so we start with dust removal.' },
      { q: 'Can you clean a small shop fit-out in Chermside?', a: 'Yes, after hours.' },
      { q: 'Can I book the clean for a Saturday?', a: 'Weekend slots depend on availability. Ask when you book.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'carindale',
    name: 'Carindale',
    region: 'brisbane-city',
    title: 'Builders Clean Carindale | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Carindale for new homes, renovations and townhouses. Full interior cleans, residue removal and photo reports. Request a quote today.',
    h1: 'Builders Clean in Carindale',
    primary: 'builders clean carindale',
    blurb: 'New homes, townhouses and renovations on Brisbane’s east side.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for homeowners and builders across Carindale and Brisbane’s east side. Carindale work is mostly residential: family homes, new townhouses and renovations, where owners book the clean after the builder has finished and before they move in. A builders clean in Carindale covers the whole interior, from ceiling fans to the inside of every cupboard, with a photo report when we finish. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and you do not need to be home.',
    localAngle:
      'Family homes, new townhouses and renovations on the east side of Brisbane. Mostly residential handovers.',
    whatWeSee:
      'Knock-down rebuilds and large family homes with stone benchtops, big glazed living areas and multiple bathrooms are common here, alongside new townhouses. The detail work matters: stone needs the right product, glass needs stickers and silicone removed, and every cupboard needs dust wiped out before the family unpacks.',
    planning:
      'Send the handover date and the move-in date. The best slot is usually the day after handover. We can collect a key or use a lockbox, and send photos when we are done.',
    photo: { key: 'new-home', alt: 'New home interior after a builders clean in Carindale' },
    services: ['new-home-builders-clean-brisbane', 'sparkle-clean-brisbane', 'construction-dust-removal-brisbane'],
    nearby: ['woolloongabba', 'south-brisbane'],
    faqs: [
      { q: 'Do you clean new homes in Carindale?', a: 'Yes. The new home clean is our most common job on the east side.' },
      { q: 'Can I book after the builder’s clean?', a: 'Yes. Most owners book after the builder’s clean and before move-in.' },
      { q: 'Do you clean inside cupboards and fans?', a: 'Yes. Both are included in the new home clean.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'north-lakes',
    name: 'North Lakes',
    region: 'moreton-bay',
    title: 'Builders Clean North Lakes | Builders Clean Brisbane Co.',
    meta: 'Builders clean in North Lakes for new estate homes and renovations. Reliable handover dates, itemised quotes and photo reports. Book your quote today.',
    h1: 'Builders Clean in North Lakes',
    primary: 'builders clean north lakes',
    blurb: 'Estate handovers for builders and move-in cleans for new owners.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for estate builders and new-home owners across North Lakes. North Lakes is one of the largest new-estate areas on Brisbane’s north side: many handovers, many builders, and a steady stream of new owners who book a clean before move-in. A builders clean in North Lakes can be a handover clean for the builder or a new home clean for the owner, and both come with a checklist and a photo report. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and dates are confirmed per home.',
    localAngle:
      'One of the largest new-estate areas in the north. Many handovers, many builders, and a steady stream of new owners who book the clean before move-in.',
    whatWeSee:
      'Single and double-storey estate homes with tiled living areas, stone or laminate benchtops and lots of sliding doors. The builder’s handover list usually includes glass, tracks, grout and light fittings, and new owners often find dust in cupboards and wardrobes after the builder’s clean.',
    planning:
      'Builders: send the handover list and we will match the clean to each home and confirm the sequence. Owners: send the handover and move-in dates and we will book the day in between.',
    photo: { key: 'bathroom-handover', alt: 'Bathroom after a handover clean in a North Lakes new home' },
    services: ['new-home-builders-clean-brisbane', 'builders-handover-clean-brisbane', 'builders-final-clean-brisbane'],
    nearby: ['narangba', 'caboolture', 'chermside'],
    faqs: [
      { q: 'Do you clean new estate homes in North Lakes?', a: 'Yes. We plan handovers across the estate and confirm each home in the quote.' },
      { q: 'Can you handle a builder’s handover list?', a: 'Yes. Send the list and we match the clean to each home.' },
      { q: 'Do you offer a regular rate for estate builders?', a: 'Builder accounts are quoted per program. See the [For Builders](/for-builders/) page.{{?builder-accounts}}' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'narangba',
    name: 'Narangba',
    region: 'moreton-bay',
    title: 'Builders Clean Narangba | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Narangba for new homes and renovations. Final and handover cleans, with itemised quotes and photo reports for every job. Request a quote.',
    h1: 'Builders Clean in Narangba',
    primary: 'builders clean narangba',
    blurb: 'Handover and sparkle cleans for new homes and renovations.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for builders, homeowners and sellers across Narangba. Narangba is a growing residential area with new homes and renovations, and most of our work here is handover cleans for builders and sparkle cleans for owners before they move in or sell. A builders clean in Narangba is quoted room by room, booked to your date and finished with a photo report. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and any travel charge is shown in the quote.',
    localAngle:
      'A growing residential area with new homes and renovations. Good for handover cleans and sparkle cleans before move-in.',
    whatWeSee:
      'New homes on larger blocks with outdoor living areas, and established homes being renovated for sale. For sellers, the sparkle clean is the one that matters: glass, tracks, cupboard interiors and floors done properly before photos and open homes.',
    planning:
      'Book as soon as the handover or listing date is confirmed. Send plans or photos, and we will quote the clean and hold the date.',
    photo: { key: 'stairs', alt: 'Stairs after a sparkle clean in a Narangba home' },
    services: ['builders-handover-clean-brisbane', 'sparkle-clean-brisbane', 'new-home-builders-clean-brisbane'],
    nearby: ['north-lakes', 'caboolture'],
    faqs: [
      { q: 'Do you travel to Narangba?', a: 'Yes. Travel is confirmed in the quote.{{?travel}}' },
      { q: 'Can you do a handover clean before a sale?', a: 'Yes. The [sparkle clean](/services/sparkle-clean-brisbane/) is designed for that.' },
      { q: 'How early should I book?', a: 'As soon as the handover date is confirmed.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'caboolture',
    name: 'Caboolture',
    region: 'moreton-bay',
    title: 'Builders Clean Caboolture | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Caboolture for new homes, renovations and post construction cleaning. Itemised quotes and photo reports, with travel costs shown upfront.',
    h1: 'Builders Clean in Caboolture',
    primary: 'builders clean caboolture',
    blurb: 'Renovations in established homes and new residential builds.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans and post construction cleaning for homeowners, renovators and builders across Caboolture. Caboolture is a mix of established homes being renovated and new residential development, so renovation cleans and new-home cleans are our main work here. A builders clean in Caboolture is quoted room by room, with any travel charge shown upfront, and finished with a supervisor check and photo report. Prices start from [PRICE FROM], and itemised quotes arrive within {{QUOTE}} of receiving plans or photos.',
    localAngle:
      'A mix of established homes being renovated and new residential development. Renovation and new-home cleans are the main work.',
    whatWeSee:
      'Kitchen and bathroom renovations in established homes, where fresh grout, silicone and dust need removing around the family’s furniture, and new builds where the owner wants a full clean after the builder’s basic one.',
    planning:
      'Send photos of the renovated rooms or the plans of the new home, plus your date. We confirm the scope, the travel and the time on site in the quote.',
    photo: { key: 'kitchen', alt: 'Kitchen after a renovation clean in Caboolture' },
    services: ['renovation-cleaning-brisbane', 'post-construction-cleaning-brisbane', 'builders-final-clean-brisbane'],
    nearby: ['narangba', 'north-lakes'],
    faqs: [
      { q: 'Do you clean renovations in Caboolture?', a: 'Yes, including kitchens, bathrooms and dust control.' },
      { q: 'Is travel charged?', a: 'A travel charge may apply, and it is shown in the quote.{{?travel}}' },
      { q: 'Can you clean a new build in Caboolture?', a: 'Yes. The [new home clean](/services/new-home-builders-clean-brisbane/) is available.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'springfield',
    name: 'Springfield',
    region: 'ipswich',
    title: 'Builders Clean Springfield | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Springfield for new estate homes and renovations. Full handover cleans, residue removal and photo reports. Request a quote today.',
    h1: 'Builders Clean in Springfield',
    primary: 'builders clean springfield',
    blurb: 'Handover and move-in cleans across master-planned estates.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for builders and new-home owners across Springfield. Springfield is built around master-planned estates, with many new homes and families moving in, so handover cleans and move-in cleans are our most common bookings. A builders clean in Springfield covers the full interior and, where the tiles need it, removes the cement and grout haze a standard clean leaves behind. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and each home on an estate is quoted individually.',
    localAngle:
      'Master-planned estates with many new homes and families moving in. Handover and move-in cleans are the most common bookings.',
    whatWeSee:
      'Large tiled living areas and alfrescos are typical, and on a fast program the tiles often carry cement or grout haze. Owners also find dust in wardrobes and kitchen cupboards after the builder’s clean. Both are part of our checklist.',
    planning:
      'Builders: send the stage and lot list with handover dates. Owners: send the handover and move-in dates. We quote each home and confirm the slot.',
    photo: { key: 'bathroom-final', alt: 'Bathroom after a builders clean in a Springfield new home' },
    services: ['new-home-builders-clean-brisbane', 'builders-handover-clean-brisbane', 'paint-plaster-cement-residue-removal-brisbane'],
    nearby: ['ripley', 'flagstone'],
    faqs: [
      { q: 'Do you clean new estates in Springfield?', a: 'Yes, across the estate, with each home quoted.' },
      { q: 'Can you clean before move-in if the builder has cleaned?', a: 'Yes. Many owners book a full clean after the builder’s clean.' },
      { q: 'Do you remove cement haze from new tiles?', a: 'Yes. See [residue removal](/services/paint-plaster-cement-residue-removal-brisbane/).' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'ripley',
    name: 'Ripley',
    region: 'ipswich',
    title: 'Builders Clean Ripley | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Ripley for new homes and estate handovers. Final and sparkle cleans, dust removal and photo reports, with itemised quotes. Book today.',
    h1: 'Builders Clean in Ripley',
    primary: 'builders clean ripley',
    blurb: 'Batches of estate handovers on fast-growing estates.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for estate builders and new-home owners across Ripley. Ripley’s estates are growing fast, with new homes handed over in batches, so staged handovers are the norm here. A builders clean in Ripley is planned per batch for builders, with each home confirmed in the quote, and as a final or sparkle clean for owners before move-in. Prices start from [PRICE FROM] per home, itemised quotes arrive within {{QUOTE}}, and any travel charge is shown upfront.',
    localAngle:
      'Fast-growing estates with new homes handed over in batches. Staged handovers are the norm.',
    whatWeSee:
      'Batches of new homes from several builders, often finishing in the same fortnight. The final clean has to land between the last trade and each handover, and some owners book a sparkle clean afterwards for the detail work before they move in.',
    planning:
      'Send the batch list with handover dates and we will plan the crew across the week. Owners can book a sparkle clean once they have a move-in date.',
    photo: { key: 'polished-concrete', alt: 'Floor after a final builders clean in a Ripley new home' },
    services: ['builders-final-clean-brisbane', 'new-home-builders-clean-brisbane', 'builders-handover-clean-brisbane'],
    nearby: ['springfield', 'flagstone'],
    faqs: [
      { q: 'Can you handle a batch of handovers in Ripley?', a: 'Yes. We plan the batch and confirm each home in the quote.' },
      { q: 'Do you offer sparkle cleans before move-in?', a: 'Yes, for owners who want the detail work done.' },
      { q: 'Is there a travel charge?', a: 'It is confirmed in the quote.{{?travel}}' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'yarrabilba',
    name: 'Yarrabilba',
    region: 'logan',
    title: 'Builders Clean Yarrabilba | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Yarrabilba for new estate homes. Full builders cleans, handover cleans and dust removal, with itemised quotes and photo reports.',
    h1: 'Builders Clean in Yarrabilba',
    primary: 'builders clean yarrabilba',
    blurb: 'Estate handovers and move-in cleans, planned street by street.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for builders and new-home owners across Yarrabilba. Yarrabilba is a master-planned community growing home by home, and estate handovers and move-in cleans are the main work here. A builders clean in Yarrabilba can be planned street by street for a builder, or booked for a single home by the owner after handover. Prices start from [PRICE FROM] per home, itemised quotes arrive within {{QUOTE}}, and every job finishes with a photo report.',
    localAngle:
      'A master-planned community growing home by home. Estate handovers and move-in cleans are the main work.',
    whatWeSee:
      'New homes on new streets, often with landscaping and driveways still being finished around them. Dust blows in from the surrounding building sites, so ceilings, fans, light fittings and window tracks need attention even in homes that look clean at first glance.',
    planning:
      'Builders: send the street and lot list. Owners: send the handover date and the move-in date. We confirm each home in the quote.',
    photo: { key: 'new-home', alt: 'New estate home after a builders clean in Yarrabilba' },
    services: ['new-home-builders-clean-brisbane', 'builders-final-clean-brisbane', 'construction-dust-removal-brisbane'],
    nearby: ['park-ridge', 'flagstone'],
    faqs: [
      { q: 'Do you clean whole streets in Yarrabilba?', a: 'Yes, planned by street and by builder.' },
      { q: 'Can you clean a new home before move-in?', a: 'Yes. The new home clean is designed for that.' },
      { q: 'Do you clean dust from ceilings and fans?', a: 'Yes. That is part of [dust removal](/services/construction-dust-removal-brisbane/).' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'park-ridge',
    name: 'Park Ridge',
    region: 'logan',
    title: 'Builders Clean Park Ridge | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Park Ridge for new homes and renovations. Handover cleans, sparkle cleans and residue removal, with itemised quotes and photo reports.',
    h1: 'Builders Clean in Park Ridge',
    primary: 'builders clean park ridge',
    blurb: 'Handover and sparkle cleans for new homes and renovations.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans for builders, homeowners and renovators across Park Ridge. Park Ridge is a growing residential suburb with new homes and renovations, and our work here is mostly handover cleans for builders and sparkle cleans for owners. A builders clean in Park Ridge includes residue removal where it is needed, from paint on new windows to grout haze on tiles. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and you can book with a handover date and plans.',
    localAngle:
      'A growing residential suburb with new homes and renovations. Good for handover and sparkle cleans.',
    whatWeSee:
      'New homes with paint spots on window frames and glass, grout haze on tiles and dust in tracks, and renovated homes where the kitchen or bathroom is new and the rest of the house is dusty. Both need the right product for each surface.',
    planning:
      'Send the handover date and plans, and we quote within {{QUOTE}}. If there is heavy paint or haze, send close-up photos so we can quote residue removal accurately.',
    photo: { key: 'bathroom-handover', alt: 'Bathroom after a handover clean in Park Ridge' },
    services: ['builders-handover-clean-brisbane', 'sparkle-clean-brisbane', 'paint-plaster-cement-residue-removal-brisbane'],
    nearby: ['yarrabilba', 'flagstone'],
    faqs: [
      { q: 'Do you clean new homes in Park Ridge?', a: 'Yes, including handovers and pre-move-in cleans.' },
      { q: 'Can you remove paint from new windows here?', a: 'Yes. See [construction window cleaning](/services/construction-window-cleaning-brisbane/).' },
      { q: 'How do I book?', a: 'Send the handover date and plans, and we quote within {{QUOTE}}.' },
    ],
  },
  {
    kind: 'suburb',
    slug: 'flagstone',
    name: 'Flagstone',
    region: 'logan',
    title: 'Builders Clean Flagstone | Builders Clean Brisbane Co.',
    meta: 'Builders clean in Flagstone for new estate homes and growth-area handovers. Post construction cleaning, final cleans and photo reports. Get a quote today.',
    h1: 'Builders Clean in Flagstone',
    primary: 'builders clean flagstone',
    blurb: 'Staged estate handovers, final cleans and outdoor pressure washing.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders cleans and post construction cleaning for builders and new-home owners across Flagstone. Flagstone is a growth-area community with new estates and homes handed over in stages, so final and handover cleans are the main work here. A builders clean in Flagstone can include the outside too: driveways, paths and alfrescos pressure washed once the landscaping is done. Prices start from [PRICE FROM], itemised quotes arrive within {{QUOTE}}, and we plan by builder and by stage.',
    localAngle:
      'A growth-area community with new estates and homes being handed over in stages. Final and handover cleans are the main work.',
    whatWeSee:
      'Homes handed over while the surrounding stages are still being built, so dust, mud and cement on driveways and paths are part of the job. Inside, the usual new-build residue: stickers on glass, grout haze and dust in every cupboard.',
    planning:
      'Send the stage, the lot list or your single home’s handover date. Tell us if the driveway, paths or alfresco need pressure washing, and we will add it to the quote.',
    photo: { key: 'pool', alt: 'Outdoor area pressure washed after construction in Flagstone' },
    services: ['post-construction-cleaning-brisbane', 'builders-final-clean-brisbane', 'pressure-washing-after-construction-brisbane'],
    nearby: ['park-ridge', 'yarrabilba', 'ripley'],
    faqs: [
      { q: 'Do you clean new estates in Flagstone?', a: 'Yes, planned by builder and by stage.' },
      { q: 'Do you pressure wash driveways and paths here?', a: 'Yes. See [pressure washing after construction](/services/pressure-washing-after-construction-brisbane/).' },
      { q: 'Is travel charged?', a: 'It is shown in the quote.{{?travel}}' },
    ],
  },
];

export const AREAS: Area[] = [...REGIONS, ...SUBURBS];

export const areaBySlug = (slug: string): Area => {
  const a = AREAS.find((x) => x.slug === slug);
  if (!a) throw new Error(`Unknown area slug: ${slug}`);
  return a;
};

export const regionBySlug = (slug: string): Region => {
  const r = REGIONS.find((x) => x.slug === slug);
  if (!r) throw new Error(`Unknown region slug: ${slug}`);
  return r;
};

export const areaUrl = (slug: string) => `/areas/${slug}/`;
