import type { MetadataRoute } from 'next';
import { getAllBots } from '@/lib/bots';
import { postList } from '@/app/blog/posts';

const base = 'https://botskills.sh';

// Blog URLs derive from postList; never hand-add blog entries here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/agents`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/grok-bot`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/rakazo`, changeFrequency: 'weekly', priority: 0.8 },
    ...getAllBots().map((b) => ({ url: `${base}/bots/${b.slug}` })),
    ...postList.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
