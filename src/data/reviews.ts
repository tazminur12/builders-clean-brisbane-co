/**
 * Real customer reviews ONLY. Empty at launch.
 * Never add invented, paraphrased-into-praise or placeholder reviews.
 * When this array is empty, every testimonial block is omitted entirely.
 * Review / AggregateRating schema also needs SITE.reviewSchema = true.
 */
export interface Review {
  author: string; // as shown on Google, e.g. 'Sam T.'
  rating: 1 | 2 | 3 | 4 | 5;
  text: string; // verbatim
  date: string; // ISO date, e.g. '2026-12-01'
  jobType?: string; // e.g. 'New home clean'
  suburb?: string; // e.g. 'North Lakes'
  source: 'google' | 'other';
  /** Optional: area or service slugs where this review should also appear. */
  pages?: string[];
}

export const REVIEWS: Review[] = [];
