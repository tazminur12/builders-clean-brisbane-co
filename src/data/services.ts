import type { PhotoKey } from './photos';

/**
 * 17 service pages (docs/04). `name` is also the Google Business Profile service
 * name and must stay identical to the GBP list.
 *
 * Copy tokens (resolved in src/lib/text.ts): {{QUOTE}} {{RECLEAN}} {{INSURANCE}}
 * {{LEAD}} {{PRICE}} and {{?key}} for claims awaiting owner confirmation.
 * Inline links: [anchor](/url/). Bold: **text**.
 */

export type ServiceGroup = 'stages' | 'property' | 'residue' | 'commercial';

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** GBP service name — keep identical to Google Business Profile. */
  name: string;
  /** Short lower-case noun used in template headings, e.g. "rough clean". */
  short: string;
  group: ServiceGroup;
  title: string;
  meta: string;
  h1: string;
  primary: string;
  secondary: string[];
  /** Owner to confirm. Empty renders [PRICE FROM]. */
  priceFrom: string;
  /** One-line card summary (services hub, homepage grid). */
  summary: string;
  /** Answer-first intro, 80–120 words. First sentence follows the playbook pattern. */
  intro: string;
  pains: string[];
  painsAnswer: string;
  /** H2 for the included checklist; carries the primary keyword. */
  includedH2: string;
  included: { group: string; items: string[] }[];
  notIncluded?: string[];
  sections: { h2: string; paras: string[]; list?: string[] }[];
  photos: { key: PhotoKey; alt: string; caption?: string; todo?: string }[];
  /** Show the rough → final → handover/sparkle diagram, highlighting this stage. */
  stage?: 'rough' | 'final' | 'handover' | 'sparkle' | 'all';
  related: string[];
  /** Slugs of area pages most relevant to this service (shown first in "Areas we cover"). */
  faqs: Faq[];
  /** Paragraph near the end of the page; repeats the primary keyword once, naturally. */
  closing: string;
}

export const SERVICE_GROUPS: Record<ServiceGroup, { label: string; blurb: string }> = {
  stages: {
    label: 'Build stages',
    blurb: 'From the first clean between trades to the last detail before the keys change hands.',
  },
  property: {
    label: 'Property types',
    blurb: 'New homes, renovations, apartments, townhouses and display homes each need a different plan.',
  },
  residue: {
    label: 'Trades and residue',
    blurb: 'Specialist work for the dust, haze, overspray and surfaces a general clean cannot fix.',
  },
  commercial: {
    label: 'Commercial and site',
    blurb: 'Fit-outs that must trade tomorrow and live sites that need to stay safe and tidy.',
  },
};

export const SERVICES: Service[] = [
  // ───────────────────────────────────────────── S1
  {
    slug: 'post-construction-cleaning-brisbane',
    name: 'Post Construction Cleaning',
    short: 'post construction clean',
    group: 'stages',
    title: 'Post Construction Cleaning Brisbane | Builders Clean Brisbane Co.',
    meta: 'Post construction cleaning in Brisbane for builders and homeowners. Rough, final and handover cleans, itemised quotes and photo reports. Request a quote today.',
    h1: 'Post Construction Cleaning in Brisbane',
    primary: 'post construction cleaning brisbane',
    secondary: ['post build clean', 'post construction cleaning services brisbane', 'construction cleaning brisbane', 'after construction clean'],
    priceFrom: '',
    summary: 'The full clean after building work stops: dust, residue and debris from every trade, ready for inspection or move-in.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that delivers post construction cleaning for builders, owner-builders and homeowners across Brisbane, Moreton Bay, Logan, Ipswich and the Redlands. Post construction cleaning is the full clean that happens after the building work stops and before anyone moves in or signs the handover. We remove the dust, residue and debris every trade leaves behind, from the ceiling fan to the skirting board. Prices start from {{PRICE}} for a standard home, you get an itemised quote within {{QUOTE}} of sending plans or photos, and most homes are done in one visit.',
    pains: [
      'The builder said it was cleaned, but there’s dust in every cupboard.',
      'Handover is Friday and the place still looks like a site.',
      'I don’t know whose job the clean actually is.',
    ],
    painsAnswer:
      'We work from a room-by-room scope that is written into your quote, so you know exactly what will be cleaned before we arrive. The crew works top to bottom, a supervisor checks the job against the same list, and you get photos of the result. If the builder is paying, we quote the builder. If you are, we quote you. Either way the standard is the same.',
    includedH2: 'What our post construction cleaning in Brisbane includes',
    included: [
      { group: 'Ceilings, walls and fittings', items: ['Dust removed from ceilings, cornices, fans and light fittings', 'Walls spot-cleaned and skirting boards wiped', 'Doors, frames, handles and switch plates'] },
      { group: 'Glass and windows', items: ['Windows, frames and tracks cleaned inside', 'Sticker, label and light paint residue removed from glass', 'Mirrors and shower screens streak-free'] },
      { group: 'Kitchens and bathrooms', items: ['Cabinets, drawers and pantry interiors wiped out', 'Appliances cleaned inside and out', 'Tiles, grout haze, basins, showers and toilets'] },
      { group: 'Floors and outside', items: ['Floors vacuumed, mopped and buffed to suit the surface', 'Entries and balconies swept (if in scope)', 'Cleaning debris removed from the home'] },
    ],
    notIncluded: ['Carpet steam cleaning (quoted as an add-on)', 'Heavy cement or paint overspray (quoted as residue removal)', 'Skip hire and building waste removal{{?skip}}'],
    sections: [
      {
        h2: 'Three stages of a post build clean',
        paras: [
          'Most builds need more than one clean. A **[rough clean](/services/builders-rough-clean-brisbane/)** happens between trades and keeps the site workable. A **[final builders clean](/services/builders-final-clean-brisbane/)** happens once the last trade leaves and takes the home to handover standard. A **[sparkle clean](/services/sparkle-clean-brisbane/)** or **[handover clean](/services/builders-handover-clean-brisbane/)** is the last pass before inspection, sale or move-in.',
          'You can book one stage or all three. Booking the rough clean usually makes the final clean faster and cheaper, because the crew starts from a clean base instead of a building site.',
        ],
      },
      {
        h2: 'Construction cleaning that protects new finishes',
        paras: [
          'New builds in Brisbane are full of surfaces that mark easily: polished concrete, engineered stone, black tapware, brushed stainless and large panes of glass. The wrong product or a dirty scraper can etch stone or scratch glass, and that becomes a defect the builder has to fix.',
          'We check each surface before we clean it, use products suited to stone, glass and stainless, and test first where a residue needs something stronger.{{?equipment}} If a surface needs specialist work, such as heavy cement haze, we tell you in the quote rather than on the day.',
        ],
      },
    ],
    photos: [
      { key: 'polished-concrete', alt: 'Polished concrete floor after post construction cleaning in a Brisbane home' },
      { key: 'living-dining', alt: 'Living and dining room after a post-construction clean in Brisbane' },
    ],
    stage: 'all',
    related: ['builders-rough-clean-brisbane', 'builders-final-clean-brisbane', 'sparkle-clean-brisbane', 'construction-dust-removal-brisbane', 'new-home-builders-clean-brisbane'],
    faqs: [
      { q: 'What is a post construction clean?', a: 'A full clean after the building works finish. It covers the dust, residue and debris from all trades so the home is ready for handover, inspection or move-in.' },
      { q: 'Is post construction cleaning the builder’s job?', a: 'It depends on the contract. Many builders only do a basic clean. We can do the full clean for either the builder or the owner, and the quote shows exactly what is included.' },
      { q: 'How long does a post construction clean take?', a: 'It depends on floor area, levels and how dirty the site is. Send your plans and photos and we give you a time estimate with the quote.' },
      { q: 'Do I need to be there?', a: 'Not usually. We can work with a key, a lockbox or a site contact, and you get a photo report after the job.' },
      { q: 'Do you bring your own equipment and products?', a: 'Yes. We are fully equipped and use surface-safe products on stone, glass and stainless.{{?equipment}}' },
      { q: 'What if something is missed?', a: 'Tell us within {{RECLEAN}} of the clean and we return to re-clean any in-scope item at no charge.' },
      { q: 'How much does post construction cleaning cost in Brisbane?', a: 'Prices start from {{PRICE}} and depend on floor area, levels, glazing, finishes and the build stage. See the [builders clean price guide](/builders-clean-cost-brisbane/) or send plans for an itemised quote.' },
    ],
    closing:
      'Whether you are a builder with a handover date or an owner with a move-in date, our post construction cleaning in Brisbane is quoted room by room, booked to your program and checked before we leave.',
  },

  // ───────────────────────────────────────────── S2
  {
    slug: 'builders-rough-clean-brisbane',
    name: 'Builders Rough Clean',
    short: 'rough clean',
    group: 'stages',
    title: 'Builders Rough Clean Brisbane | Builders Clean Brisbane Co.',
    meta: 'Builders rough clean in Brisbane between trades. Remove debris, dust and packaging so painters, tilers and electricians can work. Quotes within {{QUOTE}}.',
    h1: 'Builders Rough Clean in Brisbane',
    primary: 'rough builders clean brisbane',
    secondary: ['rough clean before painters', 'initial builders clean brisbane', 'between trades clean', 'construction debris clean up'],
    priceFrom: '',
    summary: 'The between-trades clean: debris, packaging and plaster dust cleared so the next trade starts on a clean surface.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does rough builders cleans for builders, site supervisors and owner-builders across Brisbane, Moreton Bay, Logan and Ipswich. A rough builders clean in Brisbane happens during the build, usually between trades. It clears debris, packaging and plaster dust so the painter, tiler or floor-layer can start on a clean surface, and it stops the mess spreading into finished rooms. Prices start from {{PRICE}} per visit, quotes come back within {{QUOTE}}, and most rough cleans take a single day on site.',
    pains: [
      'Painters can’t start because the site is covered in plaster dust.',
      'Every trade leaves something behind for the next one.',
      'We’re paying skilled labour to sweep up.',
    ],
    painsAnswer:
      'A rough clean is cheaper than having carpenters or supervisors sweep, and it keeps the program moving. We book it into your schedule between the trades that need it, clear what is in scope, and leave a short note on what is ready for the next trade.',
    includedH2: 'What a rough builders clean in Brisbane includes',
    included: [
      { group: 'Debris and packaging', items: ['Offcuts and debris removed from rooms and corridors', 'Packaging, cardboard and plastic collected to the skip or bin area', 'Cleaning debris bagged and removed'] },
      { group: 'Dust', items: ['Plaster and cement dust swept and vacuumed', 'Window sills and ledges cleared', 'Floors cleared and protected for the next trade'] },
      { group: 'Site', items: ['External entries and walkways tidied (if in scope)', 'A short note on what is ready for the next trade'] },
    ],
    notIncluded: ['Skip hire, waste hauling and large building waste{{?skip}}', 'Detail cleaning of finished surfaces (that’s the final clean)'],
    sections: [
      {
        h2: 'When to book a rough clean before painters',
        paras: [
          'The most common rough clean in Brisbane is booked after plaster and before the painter. Sanded plaster leaves a fine dust on every ledge, and painting over it gives a rough finish and dusty cut-ins. Other good points in the program are after first fix, before tiling and before floor coverings go down.',
          'On larger homes or multi-dwelling jobs, a rough clean between each major trade keeps the site safe and stops dust tracking into rooms that are already finished.',
        ],
      },
      {
        h2: 'Rough clean vs final clean',
        paras: [
          'A rough clean keeps the site workable. It is about debris, dust and a clear floor, not a finished home. A [final builders clean](/services/builders-final-clean-brisbane/) is the opposite: every surface, inside every cupboard, to handover standard.',
          'Booking both is usually cheaper overall. The final clean starts from a tidy base, so there is less heavy dust to shift and fewer surprises on the day before handover. Read more in our guide to [rough, final and sparkle cleans](/blog/rough-clean-vs-final-clean-vs-sparkle-clean/).',
        ],
      },
    ],
    photos: [
      { key: 'dust', alt: 'Construction dust cleared during a rough builders clean in Brisbane', todo: 'real rough-clean photo (mid-build, between trades)' },
    ],
    stage: 'rough',
    related: ['builders-final-clean-brisbane', 'construction-site-clean-up-brisbane', 'construction-dust-removal-brisbane', 'post-construction-cleaning-brisbane'],
    faqs: [
      { q: 'When should I book a rough clean?', a: 'After the frame, first fix or plaster stage, and before painters, tilers or floor-layers start. Book it into the program like any other trade.' },
      { q: 'What’s the difference between a rough clean and a final clean?', a: 'A rough clean keeps the site workable between trades. A final clean takes a finished home to handover or move-in standard.' },
      { q: 'Can you clean around an active site?', a: 'Yes. We schedule around the trades and can work early or late by arrangement.' },
      { q: 'Do you remove rubbish?', a: 'We clear cleaning debris and packaging to the skip or bin area. Large skips and waste hauling are quoted separately.{{?skip}}' },
      { q: 'Will a rough clean save money on the final clean?', a: 'Usually yes, because the final clean starts from a clean base instead of a building site.' },
      { q: 'How quickly can you mobilise?', a: 'Standard lead time is {{LEAD}}. Short-notice slots depend on the crew schedule, so ask when you get in touch.' },
      { q: 'How much does a rough builders clean cost?', a: 'Rough cleans start from {{PRICE}} per visit and depend on floor area, levels and how much debris there is. See the [price guide](/builders-clean-cost-brisbane/).' },
    ],
    closing:
      'If the next trade is waiting on a clean floor, a rough builders clean in Brisbane is the quickest way to keep your program on track. Send the stage and the date and we will slot it in.',
  },

  // ───────────────────────────────────────────── S3
  {
    slug: 'builders-final-clean-brisbane',
    name: 'Builders Final Clean',
    short: 'final clean',
    group: 'stages',
    title: 'Builders Final Clean Brisbane | Builders Clean Brisbane Co.',
    meta: 'Builders final clean in Brisbane once trades finish. Full interior clean to handover standard, supervisor check and photo report. Request a quote today.',
    h1: 'Builders Final Clean in Brisbane',
    primary: 'final builders clean brisbane',
    secondary: ['final clean brisbane', 'builders final clean', 'final clean after builders', 'handover standard clean'],
    priceFrom: '',
    summary: 'After the last trade leaves: every surface, cupboard and window taken from site to handover standard.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does the final builders clean for builders, developers and homeowners across Brisbane and the growth corridors from North Lakes to Flagstone. A final builders clean in Brisbane comes after all trades have finished. It takes the home from construction site to handover standard: every surface clean, every window clear, every cupboard empty of dust. A supervisor checks the work before we sign it off. Prices start from {{PRICE}}, your itemised quote arrives within {{QUOTE}}, and we book the clean to land between the last trade and the inspection.',
    pains: [
      'The defects list gets longer every time the cleaner comes back.',
      'There’s residue on the tiles and dust on the light fittings.',
      'I can’t hand over a dirty home.',
    ],
    painsAnswer:
      'Cleaning defects are the easiest ones to avoid. We clean to a written checklist, top to bottom, and a supervisor walks every room before sign-off. You get a photo report, so you can show your client the home was clean when it left our hands.',
    includedH2: 'Final builders clean in Brisbane: what’s included',
    included: [
      { group: 'Top to bottom', items: ['Full interior dust removal, ceilings to skirting', 'Fans, light fittings, vents and cornices', 'Doors, handles, switch plates and frames'] },
      { group: 'Glass', items: ['Windows, frames, tracks and glass (inside)', 'Mirrors and shower screens', 'Stickers and labels removed'] },
      { group: 'Wet areas and kitchen', items: ['Tiles, grout, showers, basins and toilets', 'Kitchen benchtops, splashbacks and appliances', 'Cupboards, drawers and pantries wiped inside'] },
      { group: 'Finish', items: ['Floors vacuumed, mopped and buffed', 'Supervisor check against the checklist', 'Photo report'] },
    ],
    notIncluded: ['Heavy cement haze or paint overspray (see residue removal)', 'Exterior window cleaning above single storey (quoted separately)'],
    sections: [
      {
        h2: 'Final clean after builders, timed to your program',
        paras: [
          'The final clean only works if it happens after the last trade. If the electrician comes back to fit a light or the painter returns for touch-ups, dust lands on a clean home. We plan the final clean with you so it lands in the gap between the last trade and the handover inspection, and if the program moves, we move with it.',
          'Send the handover date with your plans. We confirm the slot in the quote and send a reminder before the crew arrives.',
        ],
      },
      {
        h2: 'Why a supervisor check matters at handover standard',
        paras: [
          'Crews working fast miss the same things: the top of the door frame, the inside of the rangehood, the track behind the sliding door. A second set of eyes catches them before your client does. Our supervisor walks the home against the same checklist the crew used, fixes anything missed on the spot, and then takes the photos for your report.',
        ],
      },
    ],
    photos: [
      { key: 'bathroom-final', alt: 'Final builders clean of a new bathroom in Brisbane' },
      { key: 'kitchen', alt: 'Kitchen after a final builders clean in a Brisbane new build' },
    ],
    stage: 'final',
    related: ['builders-handover-clean-brisbane', 'sparkle-clean-brisbane', 'builders-rough-clean-brisbane', 'paint-plaster-cement-residue-removal-brisbane', 'construction-window-cleaning-brisbane'],
    faqs: [
      { q: 'What does a final builders clean include?', a: 'Every interior surface, from ceiling to floor: dust, residue, sticker marks, bathrooms, kitchens, floors and glass. The exact scope is listed in your itemised quote.' },
      { q: 'Who pays for the final clean?', a: 'Usually the builder under the contract, but it varies. We quote the owner or the builder, whoever is booking.' },
      { q: 'Do you check your own work?', a: 'Yes. A supervisor walks the home before we sign off, and you get a photo report.' },
      { q: 'Can you meet a handover date?', a: 'We work to the date you give us. Send the handover date with your plans and we confirm the slot in the quote.' },
      { q: 'What if the client finds something after handover?', a: 'Tell us within {{RECLEAN}} and we return to re-clean any in-scope item.' },
      { q: 'Can I book it into the builder’s program?', a: 'Yes. We plan the final clean to come after the last trade and before the inspection.' },
      { q: 'How much is a final builders clean?', a: 'Final cleans start from {{PRICE}} and depend on size, levels, glazing and finishes. The [price guide](/builders-clean-cost-brisbane/) explains what changes the price.' },
    ],
    closing:
      'A final builders clean in Brisbane is the last thing between your build and a clean defects list. Send the plans and the handover date, and we will confirm a slot that fits.',
  },

  // ───────────────────────────────────────────── S4
  {
    slug: 'builders-handover-clean-brisbane',
    name: 'Builders Handover Clean',
    short: 'handover clean',
    group: 'stages',
    title: 'Builders Handover Clean Brisbane | Builders Clean Brisbane Co.',
    meta: 'Builders handover clean in Brisbane for practical completion and client inspection. Zero-defect focus, supervisor walk, photo report. Book a handover clean.',
    h1: 'Builders Handover Clean in Brisbane',
    primary: 'handover clean brisbane',
    secondary: ['practical completion clean brisbane', 'pre handover clean', 'handover cleaning brisbane', 'clean for handover inspection'],
    priceFrom: '',
    summary: 'Timed to practical completion: cleaned to inspector standard, checked twice, with a photo report for the client.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does handover cleans for builders, site supervisors and developers across Brisbane, Moreton Bay, Logan and Ipswich. A handover clean in Brisbane is built around the practical completion or client handover inspection. We clean to the standard an inspector expects, check the list twice, and leave a photo report so the builder can show the client what was done. Prices start from {{PRICE}}, the itemised quote arrives within {{QUOTE}}, and the clean is booked for the day before or the morning of the inspection.',
    pains: [
      'The client’s inspection list is full of cleaning defects.',
      'I need it done for the handover date, with no chasing.',
      'Residue found after handover becomes my problem.',
    ],
    painsAnswer:
      'The handover clean exists so cleaning never appears on the defects list. We work to a room-by-room checklist, a supervisor walks the home before sign-off, and the photo report gives you a record of the condition at handover. One contact, one confirmed date, no chasing.',
    includedH2: 'What a handover clean in Brisbane covers',
    included: [
      { group: 'Before we start', items: ['Pre-handover walk and cleaning checklist', 'Check of glass coatings, stone and special finishes'] },
      { group: 'The clean', items: ['Full interior clean to handover standard', 'Glass and frames inside and out (where safe to reach)', 'Tiles, grout and fittings', 'Dust and residue in ceilings, fans and light fittings'] },
      { group: 'Sign-off', items: ['Final supervisor walk', 'Before-and-after photo report', 'Sign-off, ready for the inspection'] },
    ],
    sections: [
      {
        h2: 'A practical completion clean that passes first time',
        paras: [
          'At practical completion, clients and their inspectors look closely at glass, grout, light fittings and the inside of cupboards. Dust on a pendant or haze on a black tile will be written up even if the build is perfect. A handover clean targets exactly those items, in the order an inspector sees them.',
          'For builders, that means fewer return visits and a cleaner close-out. For homeowners booking a [pre handover inspection](/blog/pre-handover-inspection-checklist-queensland/), it means the inspector can focus on the build rather than the dust.',
        ],
      },
      {
        h2: 'Urgent handover cleaning in Brisbane',
        paras: [
          'Handover dates move, and sometimes they move forward. When the date changes, call or send the new date and we will tell you honestly whether we can meet it. Short-notice slots depend on the crew schedule; standard lead time is {{LEAD}}.',
        ],
      },
    ],
    photos: [{ key: 'bathroom-handover', alt: 'Bathroom after a builders handover clean in Brisbane' }],
    stage: 'handover',
    related: ['builders-final-clean-brisbane', 'sparkle-clean-brisbane', 'construction-window-cleaning-brisbane', 'new-home-builders-clean-brisbane'],
    faqs: [
      { q: 'What is a handover clean?', a: 'A clean timed to the practical completion or client handover inspection, so the home passes with no cleaning defects.' },
      { q: 'Do you clean before the handover inspection?', a: 'Yes. Book the clean for the day before the inspection or the morning of, depending on the program.' },
      { q: 'Will the client see the photo report?', a: 'Yes, if you want them to. Send it to the builder and the client as a record of the clean.' },
      { q: 'What if the client finds a cleaning defect?', a: 'We re-clean any in-scope item reported within {{RECLEAN}} at no charge.' },
      { q: 'Do you work to a checklist?', a: 'Yes. We use a room-by-room handover checklist and a supervisor walk before sign-off.' },
      { q: 'How far in advance should I book?', a: 'Send the handover date early. We confirm the slot in your itemised quote within {{QUOTE}}.' },
      { q: 'How much does a handover clean cost?', a: 'Handover cleans start from {{PRICE}}. The final price depends on the home’s size, glazing and finishes. See the [price guide](/builders-clean-cost-brisbane/).' },
    ],
    closing:
      'If your inspection is booked, book the handover clean in Brisbane now. Send the date and the plans, and we will confirm the slot in writing.',
  },

  // ───────────────────────────────────────────── S5
  {
    slug: 'sparkle-clean-brisbane',
    name: 'Sparkle Clean',
    short: 'sparkle clean',
    group: 'stages',
    title: 'Sparkle Clean Brisbane | Builders Clean Brisbane Co.',
    meta: 'Sparkle clean in Brisbane after construction. Detailed final clean for new homes, sale or move-in, with glass, tiles and cupboards done properly. Get a quote.',
    h1: 'Sparkle Clean in Brisbane',
    primary: 'sparkle clean brisbane',
    secondary: ['final sparkle clean', 'post build sparkle clean', 'detailed builders clean brisbane', 'spotless clean after construction'],
    priceFrom: '',
    summary: 'The detailed last pass before a sale, an open home or move-in day: tracks, frames, cupboards and glass.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does sparkle cleans for homeowners, builders, agents and sellers across Brisbane, Moreton Bay, Logan and Ipswich. A sparkle clean in Brisbane is the detailed final clean you book before a sale, an open home or the day you move in. It goes beyond the handover clean into the details owners and buyers notice first: tracks, frames, hinges, cupboard interiors and glass. Prices start from {{PRICE}}, you get an itemised quote within {{QUOTE}}, and we time it as close to the key date as the program allows.',
    pains: [
      'I want it to look like a show home.',
      'There are stickers, paint spots and smears on the glass.',
      'I want to move in without cleaning first.',
    ],
    painsAnswer:
      'A sparkle clean is detail work, done by hand, with a checklist that goes further than a standard final clean. We finish the glass streak-free, clear every track and sill, and buff the floors last so the home photographs well and feels finished on day one.',
    includedH2: 'Sparkle clean in Brisbane: the detail checklist',
    included: [
      { group: 'Everything in the final clean, plus', items: ['Window tracks and sills detailed', 'Cupboard interiors, hinges and drawer runners', 'Light switches, skirting, door frames and hinges'] },
      { group: 'Glass and tile', items: ['Glass and mirrors streak-free', 'Tile and grout detail', 'Sticker and label removal'] },
      { group: 'Finish', items: ['Appliance exteriors and interiors (where in scope)', 'Final buff of floors'] },
    ],
    sections: [
      {
        h2: 'A post build sparkle clean before sale or move-in',
        paras: [
          'The sparkle clean is the one that photographs well. Agents booking sale photos, owners preparing an open home and families moving into a new build all want the same thing: a home that looks finished, with nothing left for them to wipe.',
          'We book it as close to the photos, the open home or the move-in date as possible, so dust has no time to settle again.',
        ],
      },
      {
        h2: 'Sparkle clean vs final clean',
        paras: [
          'A [final builders clean](/services/builders-final-clean-brisbane/) covers every surface to remove dust and residue. A sparkle clean adds the detail work: inside tracks, along hinges, behind appliances where accessible, and a second pass on glass and floors. If the final clean is the builder’s job, the sparkle clean is often the owner’s.',
        ],
      },
    ],
    photos: [
      { key: 'stairs', alt: 'Timber stairs after a sparkle clean in Brisbane' },
      { key: 'pantry', alt: 'Pantry detail clean during a Brisbane sparkle clean' },
    ],
    stage: 'sparkle',
    related: ['builders-final-clean-brisbane', 'builders-handover-clean-brisbane', 'new-home-builders-clean-brisbane', 'construction-window-cleaning-brisbane'],
    faqs: [
      { q: 'What is a sparkle clean?', a: 'A detailed final clean that takes a home from handover standard to move-in or sale ready.' },
      { q: 'How is a sparkle clean different from a final clean?', a: 'A final clean covers every surface to remove dust and residue. A sparkle clean adds detail work on tracks, frames, cupboard interiors and glass.' },
      { q: 'Is it worth it before an open home?', a: 'Yes, if you are presenting the home for sale or lease. It is the clean that photographs well and sets the tone for inspections.' },
      { q: 'Can you clean the oven and fridge?', a: 'Oven and appliance cleaning is included where it is listed in the quote. Ask when you book.' },
      { q: 'How long does it take?', a: 'It depends on size and detail. We confirm the time in the itemised quote.' },
      { q: 'Do you use eco products?', a: 'We use surface-safe products chosen for each surface. Tell us about any allergies or pets when you book.' },
      { q: 'How much does a sparkle clean cost?', a: 'Sparkle cleans start from {{PRICE}}, depending on the size of the home and the detail required. See the [price guide](/builders-clean-cost-brisbane/).' },
    ],
    closing:
      'Selling, leasing or moving in? A sparkle clean in Brisbane is the last job before the keys change hands. Tell us the date and we will plan backwards from it.',
  },

  // ───────────────────────────────────────────── S6
  {
    slug: 'new-home-builders-clean-brisbane',
    name: 'New Home Builders Clean',
    short: 'new home clean',
    group: 'property',
    title: 'New Home Builders Clean Brisbane | Builders Clean Brisbane Co.',
    meta: 'New home builders clean in Brisbane. Get your new build truly clean before move-in, not just a basic builder’s clean. Full interior, photo report. Quote today.',
    h1: 'New Home Builders Clean in Brisbane',
    primary: 'new home clean brisbane',
    secondary: ['new build clean brisbane', 'new home cleaning brisbane', 'clean new house before move in', 'after the builder’s clean'],
    priceFrom: '',
    summary: 'For owners of new builds: the clean you expected before move-in, not just the builder’s basic clean.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does the new home clean for owners of new builds across Brisbane and the estates of Moreton Bay, Logan and Ipswich. Owners often find the builder’s clean was not enough: dust in cupboards, residue on tiles and glass, dust in the light fittings. Our new home clean in Brisbane is the clean a homeowner expects before moving in, explained in plain language with a quote that lists what is included. Prices start from {{PRICE}}, quotes come back within {{QUOTE}}, and most homes are done in one day between handover and move-in.',
    pains: [
      'The builder said it was cleaned, but it wasn’t.',
      'We move in on Saturday and there’s dust everywhere.',
      'I don’t know what a builders clean is meant to include.',
    ],
    painsAnswer:
      'A builder’s clean is often a quick tidy so the home can be handed over. Our new home clean goes inside every cupboard and drawer, along every frame and fitting, and finishes with the floors. You do not need to be home: we can work with a key or lockbox and send you photos when we finish.',
    includedH2: 'What our new home clean in Brisbane includes',
    included: [
      { group: 'Every room', items: ['Full interior dust removal', 'Ceilings, fans and light fittings', 'Doors, handles and switch plates'] },
      { group: 'Glass', items: ['Windows and frames inside', 'Mirrors and shower screens'] },
      { group: 'Kitchen, bathrooms and laundry', items: ['Bathrooms, tiles, grout and fittings', 'Kitchen benchtops and appliance exteriors', 'Cupboards and drawers wiped inside'] },
      { group: 'Floors and report', items: ['Floors vacuumed, mopped and buffed', 'Photo report sent to you'] },
    ],
    sections: [
      {
        h2: 'New build clean after the builder’s clean',
        paras: [
          'Most Queensland building contracts do not spell out how clean the home must be at handover, so the builder’s clean varies a lot from builder to builder. Our guide on [who is responsible for cleaning a new home in Queensland](/blog/who-is-responsible-for-cleaning-new-home-queensland/) explains what to look for in your contract.',
          'Whatever the builder did, we start from your handover date and your move-in date. The best slot is usually the day after handover, once trades have finished and before furniture arrives.',
        ],
      },
      {
        h2: 'Clean a new house before move-in, the Queensland way',
        paras: [
          'Brisbane’s humidity means fine construction dust turns to a film on glass and stone if it sits too long, and closed-up new homes can develop mould in wet areas and wardrobes. We wipe out cupboards and wardrobes, run through wet areas properly and leave the home aired where the access arrangement allows.',
        ],
      },
    ],
    photos: [{ key: 'new-home', alt: 'New home in Brisbane cleaned before move-in by a builders clean crew' }],
    related: ['sparkle-clean-brisbane', 'builders-handover-clean-brisbane', 'construction-dust-removal-brisbane', 'construction-window-cleaning-brisbane', 'pressure-washing-after-construction-brisbane'],
    faqs: [
      { q: 'Does the builder clean the house before I move in?', a: 'Usually only a basic clean, if it is in the contract. We do the full clean homeowners expect, booked by you.' },
      { q: 'Can I book after the builder’s clean?', a: 'Yes. Most new home cleans are booked after the builder’s clean and before the move-in date.' },
      { q: 'How long before I move in should I book?', a: 'Book as soon as the handover date is set. We confirm the slot in your quote.' },
      { q: 'Do you clean inside the cupboards and drawers?', a: 'Yes, that is included in the new home clean.' },
      { q: 'Do I need to be there?', a: 'No. We can work with a key or lockbox and send a photo report.' },
      { q: 'What if I find something after the clean?', a: 'Report it within {{RECLEAN}} and we re-clean any in-scope item.' },
      { q: 'How much does a new home clean cost in Brisbane?', a: 'New home cleans start from {{PRICE}} for a standard home. Bedrooms, bathrooms, levels and glazing change the price. See the [price guide](/builders-clean-cost-brisbane/).' },
    ],
    closing:
      'You waited a long time for the keys. Book a new home clean in Brisbane for the day after handover and move in to a home that is actually clean.',
  },

  // ───────────────────────────────────────────── S7
  {
    slug: 'renovation-cleaning-brisbane',
    name: 'Post Renovation Cleaning',
    short: 'renovation clean',
    group: 'property',
    title: 'Post Renovation Cleaning Brisbane | Builders Clean Brisbane Co.',
    meta: 'Post renovation cleaning in Brisbane for occupied homes. Dust, paint and cement removal around your furniture, careful and quick. Get a renovation clean quote.',
    h1: 'Post Renovation Cleaning in Brisbane',
    primary: 'post renovation cleaning brisbane',
    secondary: ['renovation cleaning brisbane', 'clean after kitchen renovation', 'after renovation clean', 'bathroom renovation cleaning'],
    priceFrom: '',
    summary: 'For homes you live in: renovation dust, grout haze and paint spots cleaned around your furniture and family.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does post renovation cleaning for homeowners, renovators and investors across Brisbane, from character homes in the inner north to family homes in Logan and Ipswich. Renovations leave dust in every room, even the ones the work never touched. Our post renovation cleaning in Brisbane happens after the renovators leave, including in homes where the family is still living, and we protect furniture and kids’ things as we go. Prices start from {{PRICE}}, your quote arrives within {{QUOTE}}, and most renovation cleans are finished in a day.',
    pains: [
      'The renovators have left, but there’s dust in every room.',
      'We’re living in the house while it’s cleaned.',
      'There’s dust in the cupboards and on the kids’ things.',
    ],
    painsAnswer:
      'Renovation dust is fine and it travels. We work room by room, moving and replacing furniture carefully, and we clean the rooms the renovation did not touch as well as the ones it did. You get a quote that lists each room, so you know what will be done before we start.',
    includedH2: 'Post renovation cleaning in Brisbane: what’s included',
    included: [
      { group: 'Dust', items: ['Dust removed from every room and from HVAC returns (surface)', 'Skirting boards, doors and frames', 'Windows, frames and sills'] },
      { group: 'Kitchen and bathroom', items: ['Detail clean of the renovated kitchen and bathroom', 'Cabinets, drawers and pantry interiors', 'Paint spots and light grout haze removed'] },
      { group: 'Your home', items: ['Furniture moved and replaced carefully', 'Floors cleaned to suit the surface', 'Photo report'] },
    ],
    notIncluded: ['Heavy cement haze or overspray (quoted as [residue removal](/services/paint-plaster-cement-residue-removal-brisbane/))', 'Duct cleaning inside air-conditioning systems'],
    sections: [
      {
        h2: 'Cleaning after a kitchen or bathroom renovation',
        paras: [
          'Kitchen and bathroom renovations leave the most residue: grout haze on new tiles, silicone smears on glass, cement on the floor and fine dust inside new cabinetry. We remove fresh grout haze and silicone carefully with surface-safe products and test first on stone benchtops and natural tiles.',
          'If the renovation left heavy haze or paint on the tiles or glass, our [paint, plaster and cement residue removal](/services/paint-plaster-cement-residue-removal-brisbane/) service is quoted separately so you only pay for it when it is needed.',
        ],
      },
      {
        h2: 'An after renovation clean in an occupied home',
        paras: [
          'Cleaning a home people are living in is different from cleaning an empty new build. We agree the order of rooms with you, keep a clear path through the house, and leave bedrooms and kitchens usable at the end of the day. Tell us about pets, allergies and anything fragile when you book.',
        ],
      },
    ],
    photos: [{ key: 'kitchen', alt: 'Kitchen after post renovation cleaning in a Brisbane home' }],
    related: ['construction-dust-removal-brisbane', 'paint-plaster-cement-residue-removal-brisbane', 'floor-cleaning-after-construction-brisbane', 'construction-window-cleaning-brisbane'],
    faqs: [
      { q: 'Can you clean while we live in the house?', a: 'Yes. We plan the clean to suit your household and protect furniture and personal items.' },
      { q: 'How is a renovation clean different from a builders clean?', a: 'It is built for an occupied home. We work room by room, protect what you own, and clean the dust from areas the renovation did not touch.' },
      { q: 'Do you clean after a kitchen or bathroom renovation?', a: 'Yes. Fresh grout, silicone and cement haze are removed carefully with surface-safe products.' },
      { q: 'Will my stone benchtop or tiles be damaged?', a: 'We use products chosen for each surface and test first where needed.' },
      { q: 'How long does it take?', a: 'It depends on the size of the renovation. We confirm the time in your itemised quote.' },
      { q: 'Do you clean up after the renovators?', a: 'Yes, once the renovators have finished. We schedule the clean after the last trade leaves.' },
      { q: 'How much does post renovation cleaning cost?', a: 'Renovation cleans start from {{PRICE}} and depend on the number of rooms affected and how much dust and residue is left. See the [price guide](/builders-clean-cost-brisbane/).' },
    ],
    closing:
      'Get your home back after the renovators leave. Send photos of the rooms and the renovation scope, and we will quote your post renovation cleaning in Brisbane within {{QUOTE}}.',
  },

  // ───────────────────────────────────────────── S8
  {
    slug: 'apartment-handover-cleaning-brisbane',
    name: 'Apartment Handover Cleaning',
    short: 'apartment handover clean',
    group: 'property',
    title: 'Apartment Handover Cleaning Brisbane | Builders Clean Brisbane Co.',
    meta: 'Apartment builders clean in Brisbane. Sequenced unit handovers for developers and builders, one standard across every unit, photo report per unit. Quote today.',
    h1: 'Apartment Handover Cleaning in Brisbane',
    primary: 'apartment builders clean brisbane',
    secondary: ['apartment handover clean brisbane', 'multi-unit builders clean brisbane', 'apartment post construction cleaning', 'unit handover cleaning'],
    priceFrom: '',
    summary: 'Units cleaned in settlement order, to one checklist, with a photo report for every unit.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does apartment builders cleans for developers, builders and project managers across inner Brisbane, from Newstead and Fortitude Valley to South Brisbane and Woolloongabba. Apartment projects need the same clean in every unit, on a schedule that matches settlement. We plan units in sequence, with one standard and one checklist, and every unit gets its own photo report. Pricing starts from {{PRICE}} per unit, quotes come back within {{QUOTE}}, and we confirm the sequence, access and lift bookings before the first day.',
    pains: [
      'We need every unit ready by settlement and the standard has to be the same in each one.',
      'Lobbies, balconies and carparks are part of the defects list.',
      'Settlements move and the cleaner doesn’t.',
    ],
    painsAnswer:
      'Consistency across units comes from process, not luck. One checklist, one crew lead, a supervisor walk on each batch of units and a photo report per unit. When settlement dates move, we re-sequence the units and confirm the new plan in writing.',
    includedH2: 'Apartment builders clean in Brisbane: per-unit scope',
    included: [
      { group: 'Per unit', items: ['Interior clean to handover standard', 'Bathrooms, kitchens, cupboards and wardrobes', 'Floors and internal stairs'] },
      { group: 'Glass and balconies', items: ['Balconies and balustrade glass (where safe)', 'Windows inside and out where safe to reach'] },
      { group: 'Building', items: ['Common areas, lobbies and corridors (if in scope)', 'Carparks swept (if in scope)', 'Per-unit photo report and checklist'] },
    ],
    sections: [
      {
        h2: 'Multi-unit builders clean, sequenced to settlement',
        paras: [
          'We start with your settlement schedule and work backwards. Units are cleaned in batches in the order they settle, common areas are cleaned last so trades and movers do not undo the work, and each batch gets a supervisor walk before it is signed off.',
          'The photo report is filed per unit, so your sales team or body corporate manager can answer a buyer’s question about any apartment without a site visit.',
        ],
      },
      {
        h2: 'Access, lifts and building rules',
        paras: [
          'Inner-city apartment buildings come with rules: loading dock times, lift bookings, inductions and key or fob handling. We agree all of it before day one so the crew is not standing in the carpark waiting for a fob.',
          'Site paperwork, including white cards, police checks and SWMS, is available on request.{{?credentials}}',
        ],
      },
    ],
    photos: [{ key: 'polished-concrete', alt: 'Polished concrete living area after an apartment builders clean in Brisbane', todo: 'real apartment handover photo' }],
    related: ['townhouse-duplex-builders-clean-brisbane', 'builders-handover-clean-brisbane', 'construction-window-cleaning-brisbane', 'commercial-fit-out-cleaning-brisbane'],
    faqs: [
      { q: 'Can you clean a whole building?', a: 'Yes, in sequence, unit by unit, with one checklist and one supervisor standard.' },
      { q: 'How do you keep the standard the same across units?', a: 'One checklist, one crew lead, a supervisor walk on each batch of units, and a photo report per unit.' },
      { q: 'What about balconies and carparks?', a: 'Included where they are in scope. We confirm it in the quote.' },
      { q: 'Can you work to settlement dates?', a: 'We plan to your settlement schedule and confirm the sequence in the quote.' },
      { q: 'Do you handle access and keys?', a: 'Yes. We agree access, key or fob handling and site inductions before we start.' },
      { q: 'Do you carry the paperwork for site access?', a: 'White cards, police checks and SWMS are available on request.{{?credentials}}' },
      { q: 'How is an apartment project priced?', a: 'Per unit, with common areas quoted separately. Pricing starts from {{PRICE}} per unit. Send the unit schedule for an itemised quote.' },
    ],
    closing:
      'Send the unit schedule and settlement dates, and we will quote your apartment builders clean in Brisbane per unit, with the sequence set out in writing.',
  },

  // ───────────────────────────────────────────── S9
  {
    slug: 'townhouse-duplex-builders-clean-brisbane',
    name: 'Townhouse and Duplex Builders Clean',
    short: 'townhouse and duplex clean',
    group: 'property',
    title: 'Townhouse Builders Clean Brisbane | Builders Clean Brisbane Co.',
    meta: 'Townhouse and duplex builders clean in Brisbane. Multi-dwelling handovers with one consistent standard, staged scheduling and photo reports. Request a quote.',
    h1: 'Townhouse and Duplex Builders Clean in Brisbane',
    primary: 'townhouse builders clean brisbane',
    secondary: ['duplex builders clean brisbane', 'multi dwelling builders clean', 'townhouse handover clean', 'townhouse post construction clean'],
    priceFrom: '',
    summary: 'Several homes, one program: dwellings cleaned in order, to one standard, with a report for each.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does townhouse and duplex builders cleans for builders and small developers across Brisbane, Logan, Ipswich and Moreton Bay. Townhouse and duplex builders run several identical homes on one program. Our townhouse builders clean in Brisbane cleans them in order, to one standard, so every handover is the same and you are not chasing the last one. Prices start from {{PRICE}} per dwelling, the itemised quote arrives within {{QUOTE}}, and each dwelling gets its own confirmed date and photo report.',
    pains: [
      'Four townhouses, four handovers, and a cleaner who keeps moving the date.',
      'Each one has to pass the same inspection.',
      'Dust moves from one unit to the next.',
    ],
    painsAnswer:
      'We quote each dwelling, confirm a date for each, and clean them in the order you hand them over. The checklist and the supervisor walk are the same for every dwelling, so the fourth is as clean as the first.',
    includedH2: 'What a townhouse builders clean in Brisbane covers',
    included: [
      { group: 'Per dwelling', items: ['Interior clean to handover standard', 'Bathrooms, kitchens and fittings', 'Floors and internal stairs'] },
      { group: 'Glass and entries', items: ['Windows and frames', 'Garages and entries', 'External sweep and tidy'] },
      { group: 'Reporting', items: ['Supervisor walk per dwelling', 'Photo report per dwelling'] },
    ],
    sections: [
      {
        h2: 'Duplex builders clean: one standard for both sides',
        paras: [
          'A duplex is usually sold or leased as two separate homes, and buyers compare them. Our crew works through both sides with the same checklist, and the supervisor walks each side separately before sign-off.',
        ],
      },
      {
        h2: 'Staged handovers without dust moving between dwellings',
        paras: [
          'On a multi-dwelling site, a clean home next to a dwelling with trades still working gets dusty again quickly. We plan each clean after the last trade in that dwelling, keep doors and windows closed where possible, and leave the external sweep until the end of the program.',
        ],
      },
    ],
    photos: [{ key: 'new-home', alt: 'New townhouse interior after a builders clean in Brisbane' }],
    related: ['apartment-handover-cleaning-brisbane', 'builders-handover-clean-brisbane', 'builders-final-clean-brisbane', 'pressure-washing-after-construction-brisbane'],
    faqs: [
      { q: 'Can you do a whole development of townhouses?', a: 'Yes. We plan the dwellings in sequence and confirm dates for each.' },
      { q: 'Is the standard the same in every dwelling?', a: 'Yes. We use one checklist and a supervisor walk for each dwelling.' },
      { q: 'Do you clean garages and entries?', a: 'Yes, if they are in scope. We confirm it in the quote.' },
      { q: 'Can you work around the trades?', a: 'Yes. We schedule the clean after the last trade in each dwelling.' },
      { q: 'How do I get a quote for several dwellings?', a: 'Send the plans and the handover schedule. We quote each dwelling and confirm the sequence.' },
      { q: 'Do you send photo reports for each one?', a: 'Yes, one per dwelling.' },
      { q: 'How is a townhouse project priced?', a: 'Per dwelling, from {{PRICE}}, with the external sweep and common driveways quoted separately if needed.' },
    ],
    closing:
      'Send the plans and handover schedule for your development, and we will quote a townhouse builders clean in Brisbane with a date for every dwelling.',
  },

  // ───────────────────────────────────────────── S10
  {
    slug: 'commercial-fit-out-cleaning-brisbane',
    name: 'Commercial Fit-Out Cleaning',
    short: 'fit-out clean',
    group: 'commercial',
    title: 'Commercial Fit-Out Cleaning Brisbane | Builders Clean Brisbane Co.',
    meta: 'Commercial fit-out cleaning in Brisbane. After-hours and overnight builders clean for offices, retail and shopfits, with documents before day one. Get a quote.',
    h1: 'Commercial Fit-Out Cleaning in Brisbane',
    primary: 'fitout cleaning brisbane',
    secondary: ['commercial builders clean brisbane', 'shopfit cleaning brisbane', 'office fit out cleaning brisbane', 'retail fitout cleaning'],
    priceFrom: '',
    summary: 'After-hours and overnight cleans so the shop, office or café can open on time.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does commercial fitout cleaning for shopfitters, fit-out companies and builders across Brisbane, from Fortitude Valley and South Brisbane to Chermside. A shop or office fit-out has to be clean and trading by the next morning. Our fitout cleaning in Brisbane happens after hours, our compliance documents are sent before day one, and we clean to the standard the fit-out company and the tenant expect. Pricing starts from {{PRICE}} (often per square metre), quotes arrive within {{QUOTE}}, and we plan to your opening date.',
    pains: [
      'The shop opens tomorrow and the fit-out company is still leaving dust.',
      'We need SWMS and insurance before anyone is allowed on site.',
      'We can’t have a crew that doesn’t follow the site’s rules.',
    ],
    painsAnswer:
      'We send insurance, SWMS and crew details before the first shift, arrive inducted, and work overnight or after hours so trades can finish during the day. The clean is signed off with a photo report the fit-out company can pass to the tenant.',
    includedH2: 'Fitout cleaning in Brisbane: what’s included',
    included: [
      { group: 'Overnight or after hours', items: ['Dust and debris removal', 'Light fittings and ceiling spaces (where in scope)', 'Joinery, counters and display fixtures'] },
      { group: 'Glass and floors', items: ['Shopfront glass inside and out (where safe)', 'Floors, carpets and vinyl (carpet steam as an add-on)'] },
      { group: 'Amenities and sign-off', items: ['Kitchenettes, bathrooms and amenities', 'Photo report and handover sign-off'] },
    ],
    sections: [
      {
        h2: 'Shopfit and office fit out cleaning after hours',
        paras: [
          'Retail and hospitality fit-outs in Brisbane usually finish in the evening and open the next morning. We start when the trades leave and work through until the space is ready to stock and trade. Office fit-outs are often cleaned floor by floor over a weekend so the tenant can move in on Monday.',
        ],
      },
      {
        h2: 'Documents before day one',
        paras: [
          'Most commercial sites will not let a crew through the gate without paperwork. We send the insurance certificate (public liability {{INSURANCE}}), SWMS, white cards and police checks on request before the job starts.{{?credentials}} Commercial builders who want us on their approved subcontractor list can find more on our [page for builders](/for-builders/).',
        ],
      },
    ],
    photos: [{ key: 'pantry', alt: 'Joinery and polished concrete detail after fitout cleaning in Brisbane', todo: 'real commercial fit-out photo' }],
    related: ['construction-site-clean-up-brisbane', 'construction-window-cleaning-brisbane', 'floor-cleaning-after-construction-brisbane', 'construction-dust-removal-brisbane'],
    faqs: [
      { q: 'Can you clean after hours?', a: 'Yes. Overnight and after-hours cleans are our main commercial service.' },
      { q: 'What paperwork do you provide?', a: 'Insurance certificate, white cards, police checks and SWMS on request, sent before day one.{{?credentials}}' },
      { q: 'Can you meet a trading deadline?', a: 'We plan to your opening date and confirm the crew and time in the quote.' },
      { q: 'Do you clean carpets?', a: 'Carpet steam cleaning is quoted separately as an add-on.' },
      { q: 'Do you work on large sites?', a: 'We work on small to medium commercial jobs. Tier-one and multi-site programs are quoted case by case.' },
      { q: 'Do you clean retail shopfronts?', a: 'Yes, including glass and frames where it is safe to do so.' },
      { q: 'How is fit-out cleaning priced?', a: 'Usually per square metre, from {{PRICE}}, adjusted for after-hours work, glazing and access. See the [price guide](/builders-clean-cost-brisbane/).' },
    ],
    closing:
      'Opening date locked in? Send the floor plan and the handover time, and we will quote your fitout cleaning in Brisbane with the crew and hours confirmed.',
  },

  // ───────────────────────────────────────────── S11
  {
    slug: 'display-home-cleaning-brisbane',
    name: 'Display Home Cleaning',
    short: 'display home clean',
    group: 'property',
    title: 'Display Home Cleaning Brisbane | Builders Clean Brisbane Co.',
    meta: 'Display home cleaning in Brisbane on a recurring schedule. Presentation-ready homes for builders, with fast turnarounds between open days. Book a schedule.',
    h1: 'Display Home Cleaning in Brisbane',
    primary: 'display home cleaning brisbane',
    secondary: ['display home clean brisbane', 'display village cleaning', 'show home cleaning brisbane', 'recurring display home clean'],
    priceFrom: '',
    summary: 'Recurring cleans that keep display homes ready for buyers, before opening or after close.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does display home cleaning for volume and custom builders across Brisbane’s display villages and growth estates, from North Lakes to Springfield and Yarrabilba. A display home has to look perfect every day. We set up a recurring schedule, clean between open days, and leave the home ready for buyers, with a checklist the sales team can trust. Prices start from {{PRICE}} per visit, quotes arrive within {{QUOTE}}, and visits happen before opening or after close so buyers never see a cleaner.',
    pains: [
      'The home looks tired by Saturday.',
      'The sales team can’t spend time cleaning.',
      'We need a consistent schedule, not a one-off.',
    ],
    painsAnswer:
      'Display homes take heavy foot traffic: fingerprints on glass, dust on feature lighting and marks on floors. A fixed schedule and a per-visit checklist keep the home consistent, and the sales team can see what was done without checking every room.',
    includedH2: 'Display home cleaning in Brisbane: each visit',
    included: [
      { group: 'Interior', items: ['Recurring interior clean on an agreed schedule', 'Kitchen, bathroom and feature surfaces', 'Glass, mirrors and doors'] },
      { group: 'Floors and outside', items: ['Hard floors cleaned (carpets quoted separately)', 'Garden entry and courtyard tidy'] },
      { group: 'Reporting', items: ['Checklist per visit for the sales team'] },
    ],
    sections: [
      {
        h2: 'Recurring display home clean schedules',
        paras: [
          'Most builders choose a weekly clean with an extra visit before big open days or marketing shoots. We agree the schedule, the access arrangement and the checklist once, and then the same crew lead looks after the home each visit.',
          'Before a display home opens for the first time, we recommend a [sparkle clean](/services/sparkle-clean-brisbane/) to take it from build to presentation standard.',
        ],
      },
      {
        h2: 'Display village cleaning across several homes',
        paras: [
          'If you have several homes in one village, we plan a route so each home is done in the same window before opening. One schedule, one contact and one checklist format across all of them.',
        ],
      },
    ],
    photos: [{ key: 'kitchen', alt: 'Display-standard kitchen after display home cleaning in Brisbane' }],
    related: ['sparkle-clean-brisbane', 'floor-cleaning-after-construction-brisbane', 'construction-window-cleaning-brisbane', 'new-home-builders-clean-brisbane'],
    faqs: [
      { q: 'How often do you clean a display home?', a: 'Weekly, fortnightly or before each open day. We agree the schedule when you book.' },
      { q: 'Can you work around open hours?', a: 'Yes. We clean before opening or after close.' },
      { q: 'Do you provide a checklist?', a: 'Yes, one per visit, so the sales team knows what was done.' },
      { q: 'Can you do several homes in one village?', a: 'Yes, on a planned route.' },
      { q: 'What if the home needs a deep clean?', a: 'We quote a one-off deep clean on top of the schedule.' },
      { q: 'Do you clean the outdoor areas?', a: 'Entries and courtyards are included where they are in scope.' },
      { q: 'How is display home cleaning priced?', a: 'Per visit, from {{PRICE}}, based on the home’s size and the schedule. Several homes in one village are quoted as a route.' },
    ],
    closing:
      'Keep every open day looking like opening day. Tell us the village, the number of homes and the opening hours, and we will quote a display home cleaning schedule in Brisbane.',
  },

  // ───────────────────────────────────────────── S12
  {
    slug: 'construction-window-cleaning-brisbane',
    name: 'Construction Window Cleaning',
    short: 'construction window clean',
    group: 'residue',
    title: 'Builders Window Cleaning Brisbane | Builders Clean Brisbane Co.',
    meta: 'Builders window cleaning in Brisbane. Remove sticker, render, silicone and paint haze from new windows, frames and tracks without scratching. Get a quote.',
    h1: 'Construction Window Cleaning in Brisbane',
    primary: 'builders window cleaning brisbane',
    secondary: ['construction window cleaning brisbane', 'new home window cleaning', 'glass sticker removal after build', 'window frame clean after construction'],
    priceFrom: '',
    summary: 'Stickers, render, silicone and paint haze off new glass, and dust out of frames and tracks, without scratches.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does builders window cleaning for builders, glaziers and homeowners across Brisbane, Moreton Bay, Logan and Ipswich. New windows come out of a build with stickers, render, silicone and paint on the glass and dust packed into the tracks. Our builders window cleaning in Brisbane uses methods that protect the glass and its coatings, and we leave the frames the way the builder expects at handover. Prices start from {{PRICE}}, your quote arrives within {{QUOTE}}, and window work can be booked on its own or with a final clean.',
    pains: [
      'The glass is covered in stickers and render.',
      'A scratch on the glass would cost me the handover.',
      'The tracks are full of dust.',
    ],
    painsAnswer:
      'Glass scratches when grit is dragged across it. We soak and lift residue before any blade touches the glass, use fresh blades, and check for low-E and other coatings first. Tracks and sills are vacuumed and wiped, not just swept.',
    includedH2: 'Builders window cleaning in Brisbane: what we do',
    included: [
      { group: 'Glass', items: ['Glass inside and out (where safe to reach)', 'Sticker and label removal', 'Render, silicone and paint haze removal'] },
      { group: 'Frames', items: ['Frames, sills and tracks', 'Screens (where in scope)'] },
      { group: 'Care', items: ['Check of glass coatings before cleaning'] },
    ],
    notIncluded: ['High-level work that needs access equipment (quoted separately)'],
    sections: [
      {
        h2: 'Glass sticker removal after a build',
        paras: [
          'Manufacturer stickers and protective film bake onto glass in the Brisbane sun. The longer they stay, the harder the adhesive is to lift. We remove stickers and film with an adhesive remover suited to the glass, then clean the pane so there is no ghosting left behind.',
        ],
      },
      {
        h2: 'New home window cleaning: frames and tracks too',
        paras: [
          'Sliding door tracks collect plaster dust, grout and grit, and that grit wears rollers and seals. We vacuum and wipe tracks and sills, clean frames inside and out where safe, and check screens if they are in scope. Basic window cleaning is part of the [final builders clean](/services/builders-final-clean-brisbane/); heavy residue and construction haze are quoted as this service.',
        ],
      },
    ],
    photos: [{ key: 'stairs', alt: 'Glazing beside a timber stair after builders window cleaning in Brisbane', todo: 'real construction window cleaning photo' }],
    related: ['paint-plaster-cement-residue-removal-brisbane', 'builders-final-clean-brisbane', 'sparkle-clean-brisbane', 'pressure-washing-after-construction-brisbane'],
    faqs: [
      { q: 'Can you remove paint and silicone from glass?', a: 'Yes, using methods suited to the glass and coating. We test first if needed.' },
      { q: 'Will you scratch the glass?', a: 'We use safe blades and products designed for new glass. Tell us if there are special coatings.' },
      { q: 'Do you clean the outside of windows?', a: 'Yes, where safe to reach. Some high-level work needs access equipment, which is quoted separately.' },
      { q: 'Can you clean the tracks?', a: 'Yes. Tracks and sills are part of the window clean.' },
      { q: 'Do you clean double-storey windows?', a: 'Yes, subject to access. We confirm it in the quote.' },
      { q: 'Is this included in a final clean?', a: 'Basic window cleaning is included in the final clean. Heavy residue and construction haze are quoted as this service.' },
      { q: 'How is window cleaning priced?', a: 'By the number and size of windows, the residue and the access, from {{PRICE}}. Photos of the glass help us quote accurately.' },
    ],
    closing:
      'Send a few photos of the glass and the residue, and we will quote your builders window cleaning in Brisbane with the access and method set out.',
  },

  // ───────────────────────────────────────────── S13
  {
    slug: 'construction-dust-removal-brisbane',
    name: 'Construction Dust Removal',
    short: 'dust removal',
    group: 'residue',
    title: 'Construction Dust Removal Brisbane | Builders Clean Brisbane Co.',
    meta: 'Construction dust removal in Brisbane for new homes and renovations. Fine dust out of cupboards, ceilings, fans and vents, removed properly. Quote in {{QUOTE}}.',
    h1: 'Construction Dust Removal in Brisbane',
    primary: 'construction dust removal brisbane',
    secondary: ['remove construction dust', 'dust removal after renovation brisbane', 'plaster dust clean up', 'dust in cupboards after build'],
    priceFrom: '',
    summary: 'Fine plaster and cement dust removed top to bottom from cupboards, fans, fittings and vents, so it stays gone.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does construction dust removal for homeowners, renovators and builders across Brisbane, Moreton Bay, Logan and Ipswich. Construction dust settles into everything: cupboards, light fittings, ceiling fans, vents and the top of the wardrobe. Ordinary wiping just moves it around. Our construction dust removal in Brisbane works systematically, top to bottom, so the dust is removed rather than spread. Prices start from {{PRICE}}, quotes arrive within {{QUOTE}}, and most homes are done in a single visit.',
    pains: [
      'There’s dust in every cupboard and drawer.',
      'It comes back after I wipe it.',
      'There’s dust on the ceiling fan and the light fittings.',
    ],
    painsAnswer:
      'Dust comes back when it is cleaned in the wrong order. We start at the ceiling and finish at the floor, vacuum before we wipe, and clean inside every cupboard and drawer, so what we lift does not land on a surface we have already done.',
    includedH2: 'Construction dust removal in Brisbane, top to bottom',
    included: [
      { group: 'High', items: ['Ceilings, cornices, fans and light fittings', 'Vents and HVAC returns (surface, where accessible)', 'Tops of wardrobes, cupboards and door frames'] },
      { group: 'Middle', items: ['Cupboard and drawer interiors', 'Skirting, doors and frames', 'Window sills and tracks'] },
      { group: 'Low', items: ['Floors vacuumed with HEPA filtration{{?hepa}}', 'Final wipe-down of all surfaces'] },
    ],
    notIncluded: ['Internal duct cleaning of air-conditioning systems'],
    sections: [
      {
        h2: 'Why construction dust keeps coming back',
        paras: [
          'Plaster and cement dust is very fine. It hangs in the air for hours, settles on every horizontal surface, and gets pushed out of vents when the air-conditioning is turned on. Wiping with a damp cloth smears it; dry dusting puts it back in the air.',
          'The fix is method: vacuum first with filtration, wipe second, work from the top down, and clean the vent faces so the air-conditioner does not blow more dust out the day you move in.',
        ],
      },
      {
        h2: 'Dust removal after a renovation in Brisbane',
        paras: [
          'After a renovation, dust is not limited to the rooms that were worked on. It travels down hallways and into wardrobes and kids’ rooms. In occupied homes we protect furniture and belongings, and we can pair dust removal with a full [post renovation clean](/services/renovation-cleaning-brisbane/) if the kitchen or bathroom also needs attention.',
        ],
      },
    ],
    photos: [{ key: 'dust', alt: 'Construction dust removed from a Brisbane renovation' }],
    related: ['renovation-cleaning-brisbane', 'post-construction-cleaning-brisbane', 'floor-cleaning-after-construction-brisbane', 'new-home-builders-clean-brisbane'],
    faqs: [
      { q: 'Why does dust keep coming back?', a: 'Fine plaster dust settles from ceilings and vents. We clean top to bottom and remove the dust from the surfaces it settles on.' },
      { q: 'Do you use HEPA vacuums?', a: 'Yes.{{?hepa}}' },
      { q: 'Is dust removal part of a builders clean?', a: 'It is included in the final and renovation cleans. This service covers dust as a stand-alone job.' },
      { q: 'Can you clean dust in an occupied home?', a: 'Yes. We protect furniture and personal items.' },
      { q: 'Do you clean the air-conditioning?', a: 'Surface cleaning of accessible vents is included. Internal duct cleaning is not.' },
      { q: 'How long does dust removal take?', a: 'It depends on the size of the home and how much dust there is. We confirm in your quote.' },
      { q: 'How much does construction dust removal cost?', a: 'Dust removal starts from {{PRICE}} and depends on the number of rooms and how much dust there is. Photos help us quote accurately.' },
    ],
    closing:
      'If you are wiping the same benchtop twice a day, it is time for construction dust removal in Brisbane done in the right order. Send photos and we will quote within {{QUOTE}}.',
  },

  // ───────────────────────────────────────────── S14
  {
    slug: 'paint-plaster-cement-residue-removal-brisbane',
    name: 'Paint and Cement Residue Removal',
    short: 'residue removal',
    group: 'residue',
    title: 'Paint Overspray Removal Brisbane | Builders Clean Brisbane Co.',
    meta: 'Paint overspray, cement haze, grout haze and silicone removal in Brisbane. Safe removal from tiles, glass and stone after building works. Get a residue quote.',
    h1: 'Paint, Plaster and Cement Residue Removal in Brisbane',
    primary: 'paint overspray removal brisbane',
    secondary: ['cement haze removal brisbane', 'grout haze removal', 'silicone removal after builders', 'plaster residue removal'],
    priceFrom: '',
    summary: 'Paint overspray, cement and grout haze, silicone and plaster residue removed without etching or scratching.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does paint overspray removal and cement haze removal for builders, tilers, painters and homeowners across Brisbane, Moreton Bay, Logan and Ipswich. Paint, cement and grout haze are the residues that survive a normal clean and look worst in daylight. They need the right product for each surface. Our paint overspray removal in Brisbane takes them off without etching tiles, scratching glass or damaging stone. Prices start from {{PRICE}}, quotes arrive within {{QUOTE}}, and we test every surface before full treatment.',
    pains: [
      'There’s cement haze on the tiles that the cleaner can’t shift.',
      'There’s paint on the windows and the floor.',
      'I don’t want the stone etched.',
    ],
    painsAnswer:
      'Most residue damage comes from using one strong product on every surface. We identify the surface and the residue first, test on a small area, and only then treat the whole job. If a surface is not suitable for a particular product, we tell you before we start.',
    includedH2: 'Paint overspray removal in Brisbane and other residues',
    included: [
      { group: 'Paint', items: ['Paint overspray removed from glass, tiles and frames', 'Paint spots on floors and fittings'] },
      { group: 'Cement and grout', items: ['Cement and grout haze removed from tiles and floors', 'Mortar splashes on pavers and sills'] },
      { group: 'Silicone and plaster', items: ['Silicone smears on glass and tiles', 'Plaster residue on walls and skirting'] },
      { group: 'Care', items: ['Surface-safe test before full treatment', 'Final rinse and check'] },
    ],
    sections: [
      {
        h2: 'Cement haze removal in Brisbane: tiles, stone and concrete',
        paras: [
          'Cement and grout haze is the cloudy film left when grout or mortar dries on the face of a tile. On porcelain it usually comes off with the right cleaner and agitation. On natural stone, terrazzo and polished concrete the same product can etch the surface permanently, so we use a different method and test first.',
          'If you want to try it yourself first, our guide on [how to remove cement haze, grout haze and paint overspray](/blog/how-to-remove-cement-haze-grout-haze-paint-overspray/) explains what is safe on each surface.',
        ],
      },
      {
        h2: 'Silicone removal after builders',
        paras: [
          'Silicone smears on shower screens and around windows are easy to miss at handover and hard to shift once cured. We lift them with a fresh blade and a silicone remover suited to the glass or tile, then clean the area so no film is left behind.',
        ],
      },
    ],
    photos: [{ key: 'bathroom-final', alt: 'Dark bathroom tiles free of grout haze after residue removal in Brisbane', todo: 'real residue removal before-and-after photo' }],
    related: ['construction-window-cleaning-brisbane', 'floor-cleaning-after-construction-brisbane', 'renovation-cleaning-brisbane', 'builders-final-clean-brisbane'],
    faqs: [
      { q: 'Can you remove cement haze from tiles?', a: 'Yes, with the product suited to the tile and grout. We test first.' },
      { q: 'Will you damage stone or polished concrete?', a: 'We use surface-safe products. Some stone is not suitable for certain acids, and we tell you before we start.' },
      { q: 'Can you remove paint from glass?', a: 'Yes, with methods safe for glass and its coatings.' },
      { q: 'Is residue removal included in a final clean?', a: 'Light residue is. Heavy haze and paint overspray are quoted as this service.' },
      { q: 'Can I try it myself?', a: 'You can, but cement haze and some paints need specific products. We are happy to advise over the phone or in the quote.' },
      { q: 'How long does residue removal take?', a: 'It depends on the area. We confirm the time in the quote.' },
      { q: 'How is residue removal priced?', a: 'By the area, the surface and the residue, from {{PRICE}}. Close-up photos of the residue help us quote accurately.' },
    ],
    closing:
      'Send close-up photos of the haze, paint or silicone and tell us the surface. We will quote your paint overspray removal in Brisbane and explain the method before we start.',
  },

  // ───────────────────────────────────────────── S15
  {
    slug: 'floor-cleaning-after-construction-brisbane',
    name: 'Floor Cleaning After Construction',
    short: 'floor clean',
    group: 'residue',
    title: 'Floor Cleaning After Construction | Builders Clean Brisbane Co.',
    meta: 'Floor cleaning after construction in Brisbane for polished concrete, tiles, timber and vinyl. Remove grout haze and dust safely, then buff. Quote today.',
    h1: 'Floor Cleaning After Construction in Brisbane',
    primary: 'floor cleaning after construction brisbane',
    secondary: ['polished concrete cleaning brisbane', 'tile and grout cleaning after build', 'timber floor clean after construction', 'vinyl floor clean after build'],
    priceFrom: '',
    summary: 'Polished concrete, tile, timber and vinyl cleaned with the right method for each, then buffed.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does floor cleaning after construction for builders, flooring contractors and homeowners across Brisbane, Moreton Bay, Logan and Ipswich. New floors take the most abuse on a building site: boot marks, plaster dust, grout haze and paint spots. Our floor cleaning after construction in Brisbane identifies each floor type, cleans it with the right method and buffs it, so the finish looks the way the designer intended. Prices start from {{PRICE}}, quotes arrive within {{QUOTE}}, and floors can be booked alone or as part of a final clean.',
    pains: [
      'The polished concrete is covered in dust and boot marks.',
      'The grout is hazy and the last cleaner just smeared it.',
      'I don’t want the timber finish damaged.',
    ],
    painsAnswer:
      'Every floor type needs a different approach. We identify the floor and its finish first, choose the method and product to suit, and finish with a buff where the surface allows it. Edges and skirting are done by hand so the floor looks finished right to the wall.',
    includedH2: 'Floor cleaning after construction in Brisbane, by floor type',
    included: [
      { group: 'Method', items: ['Floor-type identification and method choice', 'Skirting and edges by hand'] },
      { group: 'Hard floors', items: ['Polished concrete cleaned and buffed', 'Tile and grout haze removal', 'Timber and laminate cleaned with surface-safe products'] },
      { group: 'Soft and resilient', items: ['Vinyl cleaned and buffed', 'Carpet vacuumed (steam cleaning quoted separately)'] },
      { group: 'Finish', items: ['Final buff'] },
    ],
    sections: [
      {
        h2: 'Polished concrete cleaning in Brisbane',
        paras: [
          'Polished concrete is everywhere in new Brisbane homes, and it shows every boot mark and dust trail. It also reacts badly to acidic cleaners, which can dull the polish. We clean it with a pH-suitable product, work the edges by hand and buff it to an even sheen.',
        ],
      },
      {
        h2: 'Tile, timber and vinyl floor clean after the build',
        paras: [
          'Tiles usually carry grout haze from the tiler; we remove it with a product suited to the tile and grout, then rinse. Timber and engineered boards need minimal water and a timber-safe cleaner, so tell us the finish (oil, polyurethane or factory coating) before we start. Vinyl and hybrid floors are cleaned and buffed to remove scuffs.',
        ],
      },
    ],
    photos: [{ key: 'polished-concrete', alt: 'Polished concrete floor after floor cleaning after construction in a Brisbane home' }],
    related: ['paint-plaster-cement-residue-removal-brisbane', 'builders-final-clean-brisbane', 'construction-dust-removal-brisbane', 'pressure-washing-after-construction-brisbane'],
    faqs: [
      { q: 'Can you clean polished concrete?', a: 'Yes. We clean and buff with products suited to polished concrete.' },
      { q: 'Will you damage timber floors?', a: 'We use timber-safe products and methods. Tell us the finish before we start.' },
      { q: 'Can you remove grout haze?', a: 'Yes, with products suited to the tile and grout.' },
      { q: 'Do you clean carpet?', a: 'Carpet steam cleaning is quoted separately as an add-on.' },
      { q: 'Do you buff floors?', a: 'Yes. Polished concrete and tile finishes can be buffed as part of the clean.' },
      { q: 'Is floor cleaning part of a final clean?', a: 'A basic floor clean is included in the final clean. Specialist floor work is quoted as this service.' },
      { q: 'How is floor cleaning priced?', a: 'By floor area and floor type, from {{PRICE}}. Polished concrete and heavy grout haze take longer than vinyl.' },
    ],
    closing:
      'Tell us the floor type, the area and what is on it. We will quote your floor cleaning after construction in Brisbane with the method spelled out.',
  },

  // ───────────────────────────────────────────── S16
  {
    slug: 'pressure-washing-after-construction-brisbane',
    name: 'Pressure Washing After Construction',
    short: 'pressure clean',
    group: 'residue',
    title: 'Pressure Cleaning After Construction | Builders Clean Brisbane Co.',
    meta: 'Pressure cleaning after construction in Brisbane. Driveways, paths, pool areas, pavers and walls cleaned after the build at the right pressure. Get a quote.',
    h1: 'Pressure Washing After Construction in Brisbane',
    primary: 'pressure cleaning after construction brisbane',
    secondary: ['driveway pressure clean new house', 'pool area clean after build', 'pressure washing brisbane', 'paver cleaning after build'],
    priceFrom: '',
    summary: 'Driveways, paths, pavers and pool surrounds cleaned of mud, cement and paint at a pressure that suits the surface.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does pressure cleaning after construction for builders, landscapers and homeowners across Brisbane, Moreton Bay, Logan and Ipswich. External works leave mud, cement, paint and dust on paths, driveways and pool areas. Our pressure cleaning after construction in Brisbane takes them off without damaging pavers, render or the pool surrounds, because we test the pressure before we start. Prices start from {{PRICE}}, quotes arrive within {{QUOTE}}, and most homes are done in a few hours.',
    pains: [
      'The driveway is covered in cement and mud from the build.',
      'The pool area is a mess.',
      'I don’t want the pavers etched or the render blasted.',
    ],
    painsAnswer:
      'High pressure is not the same as a good clean. We test on a small area, set the pressure for each surface, and use the right cleaner for cement and paint so we do not need to blast it off. Render and soft pavers get low pressure.',
    includedH2: 'Pressure cleaning after construction in Brisbane: what we clean',
    included: [
      { group: 'Hard landscaping', items: ['Driveway, path and paver pressure washing', 'Cement and mortar splashes treated'] },
      { group: 'Pool and outdoor living', items: ['Pool surrounds and decking (surface safe)', 'Balcony and entry clean'] },
      { group: 'Walls', items: ['External walls and render (low-pressure setting)', 'Pressure test before the full clean'] },
    ],
    notIncluded: ['Cleaning inside the pool'],
    sections: [
      {
        h2: 'Driveway pressure clean for a new house',
        paras: [
          'A new driveway usually carries mud from the site, cement slurry from the pour and tyre marks from trade vehicles. We pressure clean it once the concrete has cured, treat cement splashes with a suitable cleaner, and rinse the gutters and kerb so the slurry does not just move down the street.',
        ],
      },
      {
        h2: 'Pool area clean after the build',
        paras: [
          'Pool surrounds in Brisbane are often natural stone or porcelain pavers, and they collect grout haze, glue and dust from the pool fence and landscaping trades. We clean the surrounds and decking at a pressure suited to the stone, keep runoff out of the pool, and finish with a rinse. Basic exterior work is not part of a [final builders clean](/services/builders-final-clean-brisbane/), so pressure washing is quoted separately.',
        ],
      },
    ],
    photos: [{ key: 'pool', alt: 'Pool area after pressure cleaning after construction in Brisbane' }],
    related: ['construction-site-clean-up-brisbane', 'floor-cleaning-after-construction-brisbane', 'new-home-builders-clean-brisbane', 'paint-plaster-cement-residue-removal-brisbane'],
    faqs: [
      { q: 'Will pressure washing damage my pavers or render?', a: 'We test the pressure on a small area first and adjust it. Render and soft pavers get low pressure.' },
      { q: 'Can you clean the pool area?', a: 'Yes, the surrounds and decking. We do not work inside the pool.' },
      { q: 'Do you remove cement from pavers?', a: 'Yes, with the right product and pressure.' },
      { q: 'Is pressure washing included in a final clean?', a: 'External work is usually quoted separately. Ask when you book.' },
      { q: 'Do you need water on site?', a: 'Please confirm water and power access when you book.' },
      { q: 'Can you clean after a new driveway is poured?', a: 'Yes, once the concrete has cured. Tell us the pour date.' },
      { q: 'How is pressure washing priced?', a: 'By area and surface, from {{PRICE}}. Photos of the driveway, paths and pool area help us quote accurately.' },
    ],
    closing:
      'Send photos of the driveway, paths and pool area, and we will quote pressure cleaning after construction in Brisbane with the surfaces and pressures listed.',
  },

  // ───────────────────────────────────────────── S17
  {
    slug: 'construction-site-clean-up-brisbane',
    name: 'Construction Site Clean-Up',
    short: 'site clean-up',
    group: 'commercial',
    title: 'Construction Site Clean-Up Brisbane | Builders Clean Brisbane Co.',
    meta: 'Construction site clean up in Brisbane. Debris, packaging and site amenities cleaned for builders and site managers, scheduled around the trades. Get a quote.',
    h1: 'Construction Site Clean-Up in Brisbane',
    primary: 'construction site clean up brisbane',
    secondary: ['construction site cleaning brisbane', 'site amenities cleaning brisbane', 'builders site clean'],
    priceFrom: '',
    summary: 'Regular or one-off clean-ups that keep live sites safe, tidy and ready for inspection.',
    intro:
      'Builders Clean Brisbane Co. is a Brisbane builders cleaning company that does construction site clean up for builders, site managers and project managers across Brisbane, Moreton Bay, Logan and Ipswich. A tidy site is a safer, faster site. We clear debris and packaging between trades and clean site amenities, so the program keeps moving and the site is ready for inspection. Construction site clean up in Brisbane starts from {{PRICE}} per visit, quotes arrive within {{QUOTE}}, and we can work on a regular schedule or a one-off call.',
    pains: [
      'The site is a mess and the trades are tripping over it.',
      'The site amenities are dirty and the crew complains.',
      'I need it tidy for the inspection.',
    ],
    painsAnswer:
      'A regular clean-up takes housekeeping off the supervisor’s list. We agree the scope and schedule once, arrive on the agreed days, and leave walkways clear and work areas swept. Your site stays safer and the trades spend their time on their own work.',
    includedH2: 'Construction site clean up in Brisbane: scope',
    included: [
      { group: 'Work areas', items: ['Debris and packaging cleared to the skip or bin area', 'Work areas and walkways swept', 'Entries and access routes kept clear'] },
      { group: 'Amenities', items: ['Site amenities cleaned: toilets, sinks and tea area{{?amenities}}'] },
      { group: 'Schedule', items: ['Regular or one-off schedule'] },
    ],
    notIncluded: ['Skip hire and waste hauling{{?skip}}'],
    sections: [
      {
        h2: 'Construction site cleaning on a schedule',
        paras: [
          'Most builders choose a weekly or fortnightly visit, with extra visits before inspections, client walk-throughs or a new trade starting. We agree the days and the scope, and the same crew lead knows your site, your rules and your supervisor.',
          'Clean-ups between trades on residential jobs can also be booked as a [builders rough clean](/services/builders-rough-clean-brisbane/).',
        ],
      },
      {
        h2: 'Site amenities cleaning',
        paras: [
          'Clean amenities matter to the crew and to the site’s safety record. Where it is confirmed in the quote, we clean site toilets, sinks and the tea area on the same visit as the work-area clean-up.{{?amenities}}',
        ],
      },
    ],
    photos: [{ key: 'dust', alt: 'Interior cleared of dust and debris during a construction site clean up in Brisbane', todo: 'real site clean-up photo' }],
    related: ['builders-rough-clean-brisbane', 'commercial-fit-out-cleaning-brisbane', 'pressure-washing-after-construction-brisbane', 'post-construction-cleaning-brisbane'],
    faqs: [
      { q: 'How often can you clean a site?', a: 'Weekly, fortnightly or as needed. We agree the schedule with you.' },
      { q: 'Do you clean site amenities?', a: 'Yes, where it is confirmed in the quote.{{?amenities}}' },
      { q: 'Can you remove rubbish?', a: 'We clear debris to a skip or bin area. Skip hire and hauling are quoted separately.{{?skip}}' },
      { q: 'Do you bring site inductions and paperwork?', a: 'Yes. White cards, insurance and SWMS are available on request.{{?credentials}}' },
      { q: 'Can you work around the trades?', a: 'Yes. We schedule around the program.' },
      { q: 'Do you clean commercial sites?', a: 'Yes, small to medium sites. Larger programs are quoted case by case.' },
      { q: 'How is site clean-up priced?', a: 'Per visit or per schedule, from {{PRICE}}, depending on the site size and scope.' },
    ],
    closing:
      'Tell us the site, the stage and how often you need us. We will quote your construction site clean up in Brisbane per visit or per schedule.',
  },
];

export const serviceBySlug = (slug: string) => {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
};

export const serviceUrl = (slug: string) => `/services/${slug}/`;
