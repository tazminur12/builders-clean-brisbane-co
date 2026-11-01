/**
 * Price guide table (docs/06 §3). DO NOT publish numbers until the owner confirms them.
 * Empty strings render as "[PRICE]".
 */
export interface PriceRow {
  property: string;
  rough: string;
  final: string;
  handover: string;
  sparkle: string;
}

export const PRICE_TABLE: PriceRow[] = [
  { property: 'Townhouse, 2 bed', rough: '', final: '', handover: '', sparkle: '' },
  { property: 'House, 3–4 bed', rough: '', final: '', handover: '', sparkle: '' },
  { property: 'House, 5+ bed or large floor area', rough: '', final: '', handover: '', sparkle: '' },
  { property: 'Apartment (per unit)', rough: '', final: '', handover: '', sparkle: '' },
  { property: 'Commercial fit-out (per m²)', rough: '', final: '—', handover: '—', sparkle: '—' },
];

/** Owner to set. Market reference only: one competitor publishes $10–12/m²; we set our own. */
export const PRICE_PER_M2 = '';
/** Typical range for a 3–4 bed final clean, used in the price guide intro. */
export const PRICE_FROM = '';
export const PRICE_TO = '';
