import type { Faq } from './services';

/** Homepage FAQ set (docs/06 §1.13) — 8 questions. */
export const HOME_FAQS: Faq[] = [
  {
    q: 'What is a builders clean?',
    a: 'A builders clean is the specialist clean after construction or renovation work. It removes the fine dust, residue, stickers, paint spots and debris that trades leave behind, so the home is ready for handover, inspection or move-in. It is usually done in stages: a [rough clean](/services/builders-rough-clean-brisbane/) between trades, a [final clean](/services/builders-final-clean-brisbane/) after the last trade, and a [sparkle clean](/services/sparkle-clean-brisbane/) before the keys change hands.',
  },
  {
    q: 'Who pays for a builders clean?',
    a: 'It depends on the contract. Builders often include a basic clean before handover, and owners book a full clean before move-in. We quote whoever is booking, builder or owner, and the quote shows exactly what is included. Our guide on [who is responsible for cleaning a new home in Queensland](/blog/who-is-responsible-for-cleaning-new-home-queensland/) explains it in more detail.',
  },
  {
    q: 'How long does a builders clean take?',
    a: 'Most single homes take one day on site. Larger homes, multi-level builds and jobs with heavy residue take longer. We confirm the time on site in your itemised quote once we have seen the plans or photos.',
  },
  {
    q: 'Do I need to be there?',
    a: 'No. We can work with a key, a lockbox or a site contact. You get a photo report when we finish, so you can see the result without being on site.',
  },
  {
    q: 'What’s included in a final clean?',
    a: 'Every interior surface from ceiling to floor: dust removed from fans, lights and cornices, windows, frames and tracks, stickers and light residue off the glass, kitchens and bathrooms detailed, cupboards and drawers wiped inside, and floors cleaned to suit the surface. The full list is on our [builders clean checklist](/builders-clean-checklist/).',
  },
  {
    q: 'What if something is missed?',
    a: 'Tell us within {{RECLEAN}} of the clean and we come back to re-clean any in-scope item at no charge.',
  },
  {
    q: 'Are you insured and allowed on site?',
    a: 'We carry public liability insurance of {{INSURANCE}}. White cards, police checks and SWMS are available on request before day one.{{?credentials}}',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the [quote form](/contact/) to send the suburb, the type of job, your handover date and any plans or photos. You get an itemised quote within {{QUOTE}}.',
  },
];

/** FAQ hub (docs/06 §10) — grouped, 24 questions, answers 40–100 words. */
export const FAQ_HUB: { group: string; id: string; faqs: Faq[] }[] = [
  {
    group: 'Booking and quotes',
    id: 'booking',
    faqs: [
      {
        q: 'How do I get a builders clean quote?',
        a: 'Fill in the [quote form](/contact/) with the suburb, the type of job, your handover or move-in date and any plans or photos. The more we can see, the more accurate the quote. You get an itemised quote within {{QUOTE}} that lists every room and surface in scope, what is not included and the date we can hold for you.',
      },
      {
        q: 'Why do you ask for plans or photos?',
        a: 'Floor area, number of levels, glazing, finishes and the amount of residue all change the time a clean takes. Plans and photos let us quote the job accurately instead of guessing over the phone, and they mean fewer surprises on the day. A floor plan PDF, a few phone photos or a short video all work.',
      },
      {
        q: 'Do you publish your prices?',
        a: 'Yes. Our [builders clean price guide](/builders-clean-cost-brisbane/) sets out starting prices by property size and build stage, and explains what moves the price up or down. Every job still gets an itemised quote, because two homes of the same size can need very different amounts of work.',
      },
    ],
  },
  {
    group: 'What’s included',
    id: 'included',
    faqs: [
      {
        q: 'What does a builders clean include?',
        a: 'A full builders clean covers every interior surface from ceiling to floor: dust off fans, light fittings and cornices; windows, frames and tracks; stickers and light residue off glass; kitchens, bathrooms and laundries detailed; cupboards and drawers wiped inside; and floors cleaned to suit the surface. See the full room-by-room list on our [builders clean checklist](/builders-clean-checklist/).',
      },
      {
        q: 'What is not included in a standard builders clean?',
        a: 'Carpet steam cleaning, heavy cement or paint overspray, high-level exterior windows that need access equipment, pressure washing outside, and skip hire or building waste removal are quoted separately. Your quote lists anything not included, so there are no surprises.',
      },
      {
        q: 'What is the difference between a rough clean, a final clean and a sparkle clean?',
        a: 'A rough clean happens between trades and keeps the site workable. A final clean happens after the last trade and takes the home to handover standard. A sparkle clean is the detailed last pass before a sale, an open home or move-in. Read more in [rough clean vs final clean vs sparkle clean](/blog/rough-clean-vs-final-clean-vs-sparkle-clean/).',
      },
    ],
  },
  {
    group: 'Timing and programs',
    id: 'timing',
    faqs: [
      {
        q: 'How long does a builders clean take?',
        a: 'Most single homes are cleaned in one day. A small townhouse may take a few hours, while a large two-storey home with lots of glass, or a job with heavy residue, can take longer or need a bigger crew. We confirm the expected time on site in the quote, based on your plans and photos.',
      },
      {
        q: 'How far ahead should I book?',
        a: 'As soon as you know the handover or move-in date. Standard lead time is {{LEAD}}. For builders, the best approach is to book the clean into the program like any other trade, and we will move with you if the date changes.',
      },
      {
        q: 'Can you work weekends or after hours?',
        a: 'Yes, by arrangement. Commercial fit-outs are usually cleaned after hours or overnight, and weekend slots are available for residential jobs depending on the crew schedule. Ask when you book and we will tell you honestly what is available.',
      },
    ],
  },
  {
    group: 'Access and on site',
    id: 'access',
    faqs: [
      {
        q: 'Do I need to be home during the clean?',
        a: 'No. Most of our clients are not on site. We can collect a key, use a lockbox or meet a site contact. When the clean is finished we lock up as agreed and send a photo report, so you can see the result wherever you are.',
      },
      {
        q: 'Do you need power and water?',
        a: 'Yes. A builders clean needs working power and water. If the home is not yet connected, tell us when you book so we can plan around it. Pressure washing also needs an outdoor tap.',
      },
      {
        q: 'Can you clean while trades are still working?',
        a: 'A rough clean or site clean-up, yes, because it is designed to work around trades. A final or handover clean should happen after the last trade leaves, otherwise dust lands on a clean home. We help you plan the right slot.',
      },
    ],
  },
  {
    group: 'Insurance and compliance',
    id: 'compliance',
    faqs: [
      {
        q: 'Are you insured?',
        a: 'We carry public liability insurance of {{INSURANCE}}. A certificate of currency is available on request, and builders can receive it before the first job.',
      },
      {
        q: 'Do your crews hold white cards and police checks?',
        a: 'White cards and police checks are confirmed for each crew member, and copies are available on request.{{?credentials}} If your site has its own induction, tell us and we will complete it before day one.',
      },
      {
        q: 'Can you provide SWMS?',
        a: 'Yes, Safe Work Method Statements are available on request for builders and commercial sites.{{?credentials}} Send your site requirements with the quote request and we will send the documents before the first day.',
      },
    ],
  },
  {
    group: 'Residue and damage',
    id: 'residue',
    faqs: [
      {
        q: 'Can you remove cement haze and grout haze?',
        a: 'Yes. We identify the tile or stone first, test a small area, and use a product suited to the surface. Light haze is included in a final clean; heavy haze is quoted as [residue removal](/services/paint-plaster-cement-residue-removal-brisbane/).',
      },
      {
        q: 'Will you scratch the glass or etch the stone?',
        a: 'We take care not to. Glass scratches when grit is dragged across it, so we soak and lift residue before any blade touches it and use fresh blades. Stone and polished concrete can be etched by acids, so we use pH-suitable products and test first. If a surface is not suitable for a product, we tell you before we start.',
      },
      {
        q: 'Why does construction dust keep coming back?',
        a: 'Fine plaster dust hangs in the air, settles on every ledge and gets blown out of vents. We clean from the top down, vacuum before we wipe, and clean vent faces, so the dust is removed rather than moved around. See [construction dust removal](/services/construction-dust-removal-brisbane/).',
      },
    ],
  },
  {
    group: 'Homeowners',
    id: 'homeowners',
    faqs: [
      {
        q: 'Isn’t the builder supposed to clean my new home?',
        a: 'Many contracts include a basic builder’s clean, but the standard is often not defined. Most owners find dust in cupboards, residue on glass and dust on fittings. A [new home clean](/services/new-home-builders-clean-brisbane/) booked between handover and move-in fixes that. Check your contract and read our [guide to who is responsible](/blog/who-is-responsible-for-cleaning-new-home-queensland/).',
      },
      {
        q: 'Is a builders clean the same as a bond clean?',
        a: 'No. A bond clean is for the end of a tenancy and focuses on everyday grime. A builders clean deals with construction dust, residue, stickers and paint. Read [builders clean vs bond clean vs regular clean](/blog/builders-clean-vs-bond-clean-vs-regular-clean/).',
      },
      {
        q: 'Can you clean after a renovation while we live in the house?',
        a: 'Yes. We plan the order of rooms with you, protect furniture and belongings, and leave bedrooms and the kitchen usable at the end of the day. See [post renovation cleaning](/services/renovation-cleaning-brisbane/).',
      },
    ],
  },
  {
    group: 'Builders and commercial',
    id: 'builders',
    faqs: [
      {
        q: 'Can you work to our construction program?',
        a: 'Yes. Send the program or the key dates and we book the rough, final and handover cleans into it. When trades run late and the dates move, we move with them and confirm the new slot in writing. See our [page for builders](/for-builders/).',
      },
      {
        q: 'Do you send photo reports our clients can see?',
        a: 'Yes. Every clean ends with a before-and-after photo report, which you can forward to your client or keep on file as a record of the condition at handover.',
      },
      {
        q: 'Do you clean commercial fit-outs?',
        a: 'Yes, small to medium shop, office and hospitality fit-outs, usually after hours or overnight so the tenant can open on time. See [commercial fit-out cleaning](/services/commercial-fit-out-cleaning-brisbane/).',
      },
    ],
  },
];

/** Areas hub extra FAQ (docs/05 A1). */
export const AREAS_HUB_FAQ: Faq = {
  q: 'Do you travel outside these areas?',
  a: 'Yes, for larger jobs. Tell us the suburb and we will confirm any travel charge in the quote.{{?travel}}',
};

/** Price guide FAQs (docs/06 §3.8). */
export const PRICE_FAQS: Faq[] = [
  {
    q: 'How much does a builders clean cost in Brisbane?',
    a: 'A builders clean in Brisbane starts from [PRICE FROM] for a small home. Most three to four bedroom homes fall between [PRICE FROM] and [PRICE TO] for a final clean. The exact price depends on floor area, levels, glazing, finishes, access and the build stage.',
  },
  {
    q: 'Is a builders clean more expensive than a bond clean?',
    a: 'Usually, yes. A builders clean deals with construction dust inside every cupboard, residue on glass and tiles, and dust on fittings at ceiling height. It takes longer and needs different products and equipment than an end-of-lease clean.',
  },
  {
    q: 'Why is my quote higher than a cheap cleaner’s?',
    a: 'Compare what is included. Our quotes list every room and surface, include a supervisor check and a photo report, and cover re-cleaning of missed in-scope items within {{RECLEAN}}. A low hourly rate can end up costing more if the job runs long or needs a second clean.',
  },
  {
    q: 'Can I get a fixed price?',
    a: 'Yes. Once we have seen plans or photos, the itemised quote is the price for the scope listed. It only changes if the scope changes, and any variation is agreed with you in writing first.{{?pricing-policy}}',
  },
  {
    q: 'Do you charge travel to outer suburbs?',
    a: 'A travel charge may apply for smaller jobs in outer suburbs. If it applies, it is shown as a separate line in the quote.{{?travel}}',
  },
  {
    q: 'How do I get an accurate price?',
    a: 'Send plans, photos or a short video with the suburb and your date through the [quote form](/contact/). We reply with an itemised quote within {{QUOTE}}.',
  },
];

/** Checklist page FAQs (docs/06 §4). */
export const CHECKLIST_FAQS: Faq[] = [
  {
    q: 'What does a builders clean include?',
    a: 'Every interior surface from ceiling to floor, room by room, as listed on this page: dust, residue, glass, wet areas, cupboards, fittings and floors. External entries and balconies are included where they are in scope.',
  },
  {
    q: 'Who pays for a builders clean?',
    a: 'It depends on the contract. The builder may include a basic clean before handover; owners often book a full clean before move-in. Read [who is responsible for cleaning a new home in Queensland](/blog/who-is-responsible-for-cleaning-new-home-queensland/).',
  },
  {
    q: 'What’s the difference between a rough clean and a final clean?',
    a: 'A rough clean happens between trades to keep the site workable. A final clean happens after the last trade and covers every item on this checklist to handover standard.',
  },
  {
    q: 'What should I check before handover?',
    a: 'Walk each room with this checklist: glass and tracks, light fittings and fans, inside cupboards and drawers, grout and tiles, and floors at the edges. Our [pre-handover inspection checklist](/blog/pre-handover-inspection-checklist-queensland/) covers the build items too.',
  },
  {
    q: 'Can I use this checklist to brief a cleaner?',
    a: 'Yes. Print it or send the PDF to any cleaner and ask them to confirm which items are included in their quote. It is a simple way to compare quotes on the same scope.',
  },
  {
    q: 'Is this checklist free?',
    a: 'Yes. The checklist on this page is free to read and print. The PDF version is free too: enter your email and we send you the link.',
  },
];

/** For Builders FAQs (docs/06 §5). */
export const BUILDER_FAQS: Faq[] = [
  {
    q: 'Can you sign our subcontract?',
    a: 'Send it with your quote request and we will review it and confirm before the first job.{{?subcontract}}',
  },
  {
    q: 'Do you carry public liability?',
    a: 'Yes, {{INSURANCE}}. A certificate of currency is available on request before day one.',
  },
  {
    q: 'Do your crews have white cards?',
    a: 'White cards and police checks are confirmed per crew member, with copies available on request.{{?credentials}}',
  },
  {
    q: 'Can you work to our program?',
    a: 'Yes. Send the program or the key dates and we book the rough, final and handover cleans into it. When trades run late, we move with you.',
  },
  {
    q: 'Do you provide photo reports for our clients?',
    a: 'Yes. Every clean ends with a before-and-after photo report you can forward to your client.',
  },
  {
    q: 'Do you offer account pricing?',
    a: 'Yes, for builders with regular work. Account rates are quoted per program based on volume and the stages you need.{{?builder-accounts}}',
  },
];
