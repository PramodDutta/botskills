import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Introducing botskills.sh: a leaderboard of bots that get real work done',
  description:
    'Paste-ready bot setups for Grok Bot and Rakazo, ranked by verified copies, each with a hard boundary it never crosses without you. Here is what we are building and why.',
  date: '2026-08-23',
  category: 'Announcement',
  content: `
# Introducing botskills.sh: a leaderboard of bots that get real work done

A bot setup is one file: a name, the tools it connects to, and a prompt that
tells a runtime like Grok Bot or Rakazo how to behave. botskills.sh is a
directory of those files, ranked by how often people actually copy them.

Three rules shape the catalog:

1. **One bot, one file.** Every listing is a single BOT.md you can paste or
   fetch raw from the API. No signup to read anything.
2. **Boundaries are schema, not vibes.** Every bot declares the one action it
   never takes without a human: "Never sends without approval", "Stays off
   production data". The directory rejects submissions without one.
3. **Built to be read by bots.** llms.txt, an open JSON API, and a raw
   markdown endpoint per bot. An agent can browse the catalog, install a
   skill, and author a new one from the /agents page.

The catalog is open for submissions from day one: one markdown file, one pull
request. More soon.
`,
};
