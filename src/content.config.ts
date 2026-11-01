import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** <title> tag (≤ 70 chars incl. brand). */
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    keyword: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    photo: z.enum(['polished-concrete', 'living-dining', 'bathroom-handover', 'bathroom-final', 'new-home', 'dust', 'kitchen', 'pool', 'stairs', 'pantry']),
    photoAlt: z.string(),
    summary: z.string(),
    services: z.array(z.string()).min(2),
    area: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(3).max(4),
  }),
});

export const collections = { blog };
