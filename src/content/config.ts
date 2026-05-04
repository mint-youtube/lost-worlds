import { defineCollection, z } from 'astro:content';
import { CHANNEL_IDS } from '../data/channels';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    channel: z.enum(CHANNEL_IDS as [string, ...string[]]),
    tags: z.array(z.string()).default([]),
    youtubeUrl: z.string().url().optional(),
    youtubeId: z.string().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
