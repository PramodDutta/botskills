import type { MetadataRoute } from 'next';
import { getAllBots, botMtime } from '@/lib/bots';
import { postList } from '@/app/blog/posts';

const base = 'https://botskills.sh';

// Blog URLs derive from postList; never hand-add blog entries here.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/bots`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/grok-bot`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/rakazo`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/agents`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/grok-bot-facts`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/sponsor`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    ...getAllBots().map((b) => ({ url: `${base}/bots/${b.slug}`, lastModified: botMtime(b.slug) })),
    ...postList.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date) })),
  ];
}
