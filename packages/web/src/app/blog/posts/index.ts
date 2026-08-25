// Dual-registry blog engine, same contract as qaskills:
// - `posts` map powers /blog/[slug] (miss it = 404)
// - `postList` powers /blog and the sitemap (miss it = invisible)
// Every post needs THREE edits here: import, posts entry, postList entry.
// Batch arrays, when they arrive, spread at the END (last write wins on slug).

import { post as introducingBotskills } from './introducing-botskills';

export interface BlogPost {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  content: string;
}

export const posts: Record<string, BlogPost> = {
  'introducing-botskills': introducingBotskills,
};

export const postList: Array<{ slug: string } & BlogPost> = [
  { slug: 'introducing-botskills', ...introducingBotskills },
];
