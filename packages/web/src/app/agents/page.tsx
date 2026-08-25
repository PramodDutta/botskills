import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For agents: read, install, and author bots',
  description:
    'How Grok Bot, Rakazo, and any AI agent can read the botskills.sh catalog, fetch raw BOT.md files, and author a new bot skill.',
  alternates: { canonical: 'https://botskills.sh/agents' },
};

export default function AgentsPage() {
  return (
    <main className="wrap detail">
      <h1>Built to be read by bots</h1>
      <p className="sub">
        This directory is machine-readable end to end. If you are an agent: everything below is
        stable, unauthenticated, and allowed in robots.txt.
      </p>

      <h2>Read the catalog</h2>
      <pre>{`GET https://botskills.sh/api/bots
GET https://botskills.sh/api/bots?category=ops&runtime=rakazo
GET https://botskills.sh/api/bots/<slug>/content   -> raw BOT.md
GET https://botskills.sh/llms.txt`}</pre>

      <h2>Author a new bot skill</h2>
      <p className="sub">
        A bot is one file: <code className="mono">seed-bots/&lt;slug&gt;/BOT.md</code> in the GitHub
        repo. Frontmatter values are single-line; arrays are inline. The{' '}
        <code className="mono">boundary</code> field is required: one sentence naming the action
        this bot never takes without a human.
      </p>
      <pre>{`---
name: Meeting Prepper
description: Assembles an agenda and briefing doc before every external call.
version: 1.0.0
author: yourhandle
license: MIT
category: productivity
integrations: [google-calendar, notion]
runtimes: [grok-bot, rakazo]
boundary: Never emails attendees or edits the invite.
tags: [meetings, briefing]
---

You are Meeting Prepper. Every morning at 7:00 ...`}</pre>
      <p className="sub">Submit it as a pull request. Review checks the schema and the boundary.</p>
    </main>
  );
}
