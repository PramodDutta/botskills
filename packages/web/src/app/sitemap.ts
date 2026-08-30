import fs from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { getAllBots } from '@/lib/bots';
import { postList } from '@/app/blog/posts';

const base = 'https://botskills.sh';
const SEED = path.join(process.cwd(), '..', '..', 'seed-bots');

function botMtime(slug: string): Date {
  try {
    return fs.statSync(path.join(SEED, slug, 'BOT.md')).mtime;
  } catch {
    return new Date();
  }
}

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
    ...getAllBots().map((b) => ({ url: `${base}/bots/${b.slug}`, lastModified: botMtime(b.slug) })),
    ...postList.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date) })),
  ];
}
