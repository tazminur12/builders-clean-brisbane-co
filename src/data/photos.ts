import type { ImageMetadata } from 'astro';
import polishedConcrete from '../assets/photos/polished-concrete-floor-clean-brisbane.jpg';
import livingDining from '../assets/photos/post-construction-clean-living-dining-brisbane.jpg';
import bathroomHandover from '../assets/photos/bathroom-handover-clean-brisbane.jpg';
import bathroomFinal from '../assets/photos/bathroom-final-builders-clean-brisbane.jpg';
import newHome from '../assets/photos/new-home-builders-clean-brisbane.jpg';
import dust from '../assets/photos/construction-dust-removal-brisbane.jpg';
import kitchen from '../assets/photos/kitchen-final-clean-brisbane.jpg';
import pool from '../assets/photos/pressure-washing-pool-area-brisbane.jpg';
import stairs from '../assets/photos/builders-sparkle-clean-stairs-brisbane.jpg';
import pantry from '../assets/photos/pantry-detail-clean-brisbane.jpg';

export type PhotoKey =
  | 'polished-concrete'
  | 'living-dining'
  | 'bathroom-handover'
  | 'bathroom-final'
  | 'new-home'
  | 'dust'
  | 'kitchen'
  | 'pool'
  | 'stairs'
  | 'pantry';

export interface Photo {
  src: ImageMetadata;
  /** Default alt text from docs/01 photo table. Pages may pass their own. */
  alt: string;
  caption: string;
  /** Gallery group on /our-work/ */
  group: 'floors-living' | 'kitchens-pantries' | 'bathrooms' | 'stairs-detail' | 'outdoor';
}

// Real job photos only (docs/01). No stock, no AI images.
// Owner to confirm the suburb of each job; adjust alt text and captions if needed.
export const PHOTOS: Record<PhotoKey, Photo> = {
  'polished-concrete': {
    src: polishedConcrete,
    alt: 'Polished concrete floor cleaned after construction in a Brisbane home',
    caption: 'Polished concrete and timber after the final clean: dust lifted, edges detailed, floor buffed to an even sheen.',
    group: 'floors-living',
  },
  'living-dining': {
    src: livingDining,
    alt: 'Living and dining room after a post-construction clean in Brisbane',
    caption: 'Open-plan living and dining after a post-construction clean, with the glass, floor and joinery done in one visit.',
    group: 'floors-living',
  },
  'bathroom-handover': {
    src: bathroomHandover,
    alt: 'Bathroom after a builders handover clean in Brisbane',
    caption: 'Bathroom ready for the handover inspection: shower glass, mirror, vanity and dark tiles free of haze.',
    group: 'bathrooms',
  },
  'bathroom-final': {
    src: bathroomFinal,
    alt: 'Final builders clean of a new bathroom in Brisbane',
    caption: 'Final builders clean of a new bathroom. Dark tiles show every streak, so they get a second pass and a dry buff.',
    group: 'bathrooms',
  },
  'new-home': {
    src: newHome,
    alt: 'New home cleaned by builders clean crew before move-in, Brisbane',
    caption: 'New home before move-in: timber battens, window frames and polished concrete cleaned after the builder left.',
    group: 'floors-living',
  },
  dust: {
    src: dust,
    alt: 'Construction dust removed from a Brisbane renovation',
    caption: 'Renovation dust removed top to bottom, from the ceiling down to the polished concrete.',
    group: 'floors-living',
  },
  kitchen: {
    src: kitchen,
    alt: 'Kitchen after final builders clean, Brisbane new build',
    caption: 'Kitchen after the final clean: benchtop, splashback, cabinetry and pendants free of dust and residue.',
    group: 'kitchens-pantries',
  },
  pool: {
    src: pool,
    alt: 'Pool area pressure washed after construction in Brisbane',
    caption: 'Pool surrounds and pavers pressure washed after the external works, at a pressure suited to the stone.',
    group: 'outdoor',
  },
  stairs: {
    src: stairs,
    alt: 'Stairs sparkle cleaned after construction, Brisbane',
    caption: 'Timber stairs and handrail after a sparkle clean: treads, risers and the lit handrail recess detailed by hand.',
    group: 'stairs-detail',
  },
  pantry: {
    src: pantry,
    alt: 'Pantry detail clean after a Brisbane build',
    caption: 'Walk-in pantry detail clean: shelving, benchtop and polished concrete floor cleaned edge to edge.',
    group: 'kitchens-pantries',
  },
};

export const PHOTO_GROUPS: Record<Photo['group'], string> = {
  'floors-living': 'Floors and living areas',
  'kitchens-pantries': 'Kitchens and pantries',
  bathrooms: 'Bathrooms',
  'stairs-detail': 'Stairs and detail',
  outdoor: 'Outdoor and pressure washing',
};
