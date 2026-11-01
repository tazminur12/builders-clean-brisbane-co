import { SITE, isSet, type ConfirmKey } from '../config/site';

/** Labels shown in "[CONFIRM: …]" markers until the owner verifies the claim. */
const CONFIRM_LABELS: Record<ConfirmKey, string> = {
  travel: 'travel policy',
  equipment: 'equipment and products',
  hepa: 'HEPA equipment',
  credentials: 'white cards, police checks and SWMS per crew',
  skip: 'skip hire and hauling policy',
  amenities: 'site amenities cleaning offered',
  'pricing-policy': 'pricing policy',
  'builder-accounts': 'builder account pricing',
  'route-redlands': 'Redlands route',
  subcontract: 'subcontract terms',
};

export const hoursText = (v: string, ph = '[X HOURS]') => (isSet(v) ? `${v} hours` : ph);

export const quoteTime = () => hoursText(SITE.quoteTurnaround);
export const recleanTime = () => hoursText(SITE.reCleanWindow);
export const insuranceText = () => (isSet(SITE.insurance) ? SITE.insurance : '[PUBLIC LIABILITY AMOUNT]');
export const leadTimeText = () => (isSet(SITE.leadTime) ? SITE.leadTime : '[LEAD TIME]');
export const priceText = (v?: string, ph = '[PRICE FROM]') => (v && isSet(v) ? v : ph);

/**
 * Replace content tokens with config values or bracketed placeholders.
 *   {{QUOTE}}      quote turnaround          → "24 hours" | "[X HOURS]"
 *   {{RECLEAN}}    re-clean window           → "48 hours" | "[X HOURS]"
 *   {{INSURANCE}}  public liability amount   → "$20 million" | "[PUBLIC LIABILITY AMOUNT]"
 *   {{LEAD}}       standard lead time        → "one week" | "[LEAD TIME]"
 *   {{PRICE}}      contextual price from     → value | "[PRICE FROM]"
 *   {{?key}}       " [CONFIRM: label]" until `key` is in SITE.confirmed, then nothing
 */
export function tpl(input: string, ctx: { price?: string } = {}): string {
  return input
    .replace(/\{\{QUOTE\}\}/g, quoteTime())
    .replace(/\{\{RECLEAN\}\}/g, recleanTime())
    .replace(/\{\{INSURANCE\}\}/g, insuranceText())
    .replace(/\{\{LEAD\}\}/g, leadTimeText())
    .replace(/\{\{PRICE\}\}/g, priceText(ctx.price))
    .replace(/\s?\{\{\?([a-z-]+)\}\}/g, (_m, key: ConfirmKey) =>
      (SITE.confirmed as string[]).includes(key) ? '' : ` [CONFIRM: ${CONFIRM_LABELS[key] ?? key}]`,
    );
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Tokens → values, then a tiny, safe inline markup:
 *   [anchor text](/internal/url/)   → link
 *   **bold**                          → <strong>
 * Everything else is HTML-escaped. Use with set:html.
 */
export function rich(input: string, ctx: { price?: string } = {}): string {
  return esc(tpl(input, ctx))
    .replace(/\[([^\]]+)\]\((\/[^)\s]*|#[^)\s]*|https:\/\/[^)\s]+)\)/g, (_m, text, href) => `<a href="${href}">${text}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/** Plain text (for schema and meta): tokens resolved, link markup removed. */
export function plain(input: string, ctx: { price?: string } = {}): string {
  return tpl(input, ctx)
    .replace(/\[([^\]]+)\]\((\/[^)\s]*|#[^)\s]*|https:\/\/[^)\s]+)\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1');
}

export const abs = (path: string) => new URL(path, SITE.url + '/').href;
