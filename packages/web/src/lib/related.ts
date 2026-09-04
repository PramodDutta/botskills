import type { ParsedBot } from '@botskills/shared';
import { postList } from '@/app/blog/posts';
import { getAllBots, getBot } from '@/lib/bots';

// Related links, computed from what the corpus already says about itself: shared
// words in slugs and titles, shared category, shared integrations. No hand
// maintained lists, because with 450+ articles a hand list rots in a week.
// Every post and bot page gets a few inbound links from its neighbours, which
// is what moves "discovered, not indexed" pages into the index.

export interface RelatedPost {
  slug: string;
  title: string;
  category: string;
}

const STOP = new Set([
  'grok', 'bot', 'bots', 'the', 'a', 'an', 'and', 'or', 'to', 'of', 'for', 'in', 'on', 'with',
  'vs', 'how', 'what', 'why', 'when', 'where', 'which', 'your', 'you', 'never', 'not', 'is', 'it',
  'its', 'that', 'this', 'from', 'into', 'at', 'by', 'one', 'two', 'can', 'do', 'does', 'be',
  'are', 'as', 'if', 'than', 'then', 'up', 'out', 'off', 'without', 'before', 'after', 'every',
  'each', 'all', 'any', 'more', 'most', 'only', 'just', 'still', 'also', 'over', 'under', 'via',
  'per', 'about', 'use', 'using', 'setup', 'set', 'guide', 'skill', 'skills', 'has', 'have',
  'was', 'will', 'should', 'could', 'would', 'here', 'there', 'them', 'they', 'their', 'our',
  'we', 'my', 'me', 'so', 'no', 'yes', 'but', 'own', 'get', 'gets', 'got', 'make', 'makes',
  'run', 'runs', 'running', 'work', 'works', 'working', 'stop', 'stops', 'thing', 'things',
  'actually', 'really', 'first', 'next', 'last', 'new', 'old', 'day', 'week', 'today',
]);

export function words(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .split(/[^a-z0-9+]+/)
      .filter((w) => w.length > 2 && !STOP.has(w)),
  );
}

const postWords = new Map<string, Set<string>>();
function wordsFor(p: { slug: string; title: string }): Set<string> {
  let w = postWords.get(p.slug);
  if (!w) {
    w = words(`${p.slug.replace(/-/g, ' ')} ${p.title}`);
    postWords.set(p.slug, w);
  }
  return w;
}

function overlap(a: Set<string>, b: Set<string>): number {
  let n = 0;
  for (const w of a) if (b.has(w)) n += 1;
  return n;
}

function toRelated(p: { slug: string; title: string; category: string }): RelatedPost {
  return { slug: p.slug, title: p.title, category: p.category };
}

/** Other articles nearest to this one by vocabulary, then by category. */
export function relatedPosts(slug: string, limit = 4): RelatedPost[] {
  const me = postList.find((p) => p.slug === slug);
  if (!me) return [];
  const mine = wordsFor(me);
  return postList
    .filter((p) => p.slug !== slug)
    .map((p) => ({ p, score: overlap(mine, wordsFor(p)) * 2 + (p.category === me.category ? 1 : 0) }))
    .filter((x) => x.score > 1)
    .sort((a, b) => b.score - a.score || b.p.date.localeCompare(a.p.date) || a.p.slug.localeCompare(b.p.slug))
    .slice(0, limit)
    .map((x) => toRelated(x.p));
}

/** Articles that talk about this bot's integrations, category or name. */
export function relatedPostsForBot(bot: ParsedBot, limit = 4): RelatedPost[] {
  const want = new Set<string>([
    ...words(bot.name),
    ...bot.integrations.flatMap((i) => [i, ...words(i.replace(/-/g, ' '))]),
    bot.category,
  ]);
  return postList
    .map((p) => {
      const w = wordsFor(p);
      let score = overlap(want, w);
      // An integration named in the slug is a much stronger signal than a
      // shared word: "grok-bot-stripe" belongs beside a Stripe bot.
      for (const i of bot.integrations) if (p.slug.split('-').includes(i)) score += 3;
      return { p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.p.date.localeCompare(a.p.date) || a.p.slug.localeCompare(b.p.slug))
    .slice(0, limit)
    .map((x) => toRelated(x.p));
}

/** Other bots sharing integrations first, then category. */
export function relatedBots(slug: string, limit = 4): ParsedBot[] {
  const me = getBot(slug);
  if (!me) return [];
  const mine = new Set(me.integrations);
  return getAllBots()
    .filter((b) => b.slug !== slug)
    .map((b) => ({
      b,
      score: b.integrations.filter((i) => mine.has(i)).length * 2 + (b.category === me.category ? 1 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.b.name.localeCompare(b.b.name))
    .slice(0, limit)
    .map((x) => x.b);
}
