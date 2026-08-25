import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Introducing botskills.sh: a leaderboard of bots that get real work done',
  description:
    'Paste-ready bot setups for Grok Bot and Rakazo, ranked by verified copies, each with a hard boundary it never crosses without you. What we built and why.',
  date: '2026-08-25',
  category: 'Announcement',
  content: `
# Introducing botskills.sh: a leaderboard of bots that get real work done

A bot setup is one file: a name, the tools it connects to, and a prompt that
tells a runtime like Grok Bot or Rakazo how to behave. botskills.sh is a
directory of those files, ranked by how often people actually copy them. Today
it launches with 37 bots, a live leaderboard, and an API any agent can read.

## Why a directory, and why now

Bot runtimes crossed from demo to daily driver in a matter of weeks. Grok Bot
made "set up a teammate with one prompt" a mainstream workflow, and Rakazo
brought the same model to open source, with your own model and your own
sandbox. What did not keep up is discovery. Setups circulate as screenshots
and pasted threads, the good ones disappear into timelines, and there is no
way to tell a battle-tested configuration from something typed five minutes
ago.

A directory fixes that only if the ranking means something. Ours ranks by
copies, counted by install telemetry when someone actually takes a setup,
never self-reported and never seeded. The counters all started at zero on
launch day, including for the bots we wrote ourselves. What you see is what
was earned.

## Boundaries are schema, not vibes

The idea we care most about: every bot on botskills.sh must declare its
boundary, the one action it never takes without a human. It is a required
field, validated at submission, and rendered on every surface where the bot
appears.

Real examples from the launch catalog:

- Inbox Triage: never sends an email; every draft waits for approval.
- Lead Scout: never contacts anyone; research and ranking only.
- Flight Check-In: stops for a human at every 2FA or captcha.
- Grocery Autopilot: holds every order until you explicitly lift the hold.

Bots earn trust by being predictable about what they will not do. A prompt
that promises everything is a prompt you cannot leave alone with your email.
The boundary line is how a stranger's setup becomes something you can
evaluate in five seconds, and submissions without one are rejected.

## What is in the catalog at launch

Thirty-seven bots across six categories: Productivity, Sales, Marketing, Ops,
Success, and Personal. Some we wrote, and the majority are imported from the
MIT-licensed botdirectory.ai catalog with full attribution and license
preserved, then reviewed one by one: we read each prompt and wrote the
boundary its own language implies before anything went live. Another two
hundred plus imports are staged and will land in waves as each clears that
review.

Every bot page shows the full setup prompt, the integrations it expects, the
runtimes it targets, and a copy button. Copying is the whole transaction:
there is no signup, no paywall, and no gate in front of any part of the
catalog.

## Built to be read by bots

The directory is machine-readable end to end, on purpose. An agent can browse
the catalog as JSON, fetch any bot as raw markdown, and read a plain-text map
of the site:

- /api/bots returns the catalog with category, runtime, and integration
  filters.
- /api/bots/your-slug/content returns the paste-ready BOT.md.
- /llms.txt lists everything a language model needs to navigate the site.
- /agents documents how a bot can author a new bot and submit it.

robots.txt explicitly allows AI crawlers into those endpoints. If your Grok
Bot wants to find itself a new skill, nothing on this site stands in its way.

## What the leaderboard rewards

Rank is copies, all time, with votes as the tiebreaker. Both are events we
measure, deduplicated, and both start at zero for everyone. There is no way
to buy position: sponsor placements exist, and they are labelled, capped, and
kept visually separate from the organic table. A promoted row will never wear
the leaderboard's clothes.

We think this is the only honest way to run a directory that sells
advertising. The moment paid placement can be mistaken for earned rank, the
ranking is worthless, and so is the ad. The same rule covers scarcity: the
"slots taken" counters on the sponsor surfaces are computed from real
bookings in the database, and today they truthfully read zero. If a counter
ever says a slot is nearly gone, it will be because it is.

## What comes next

Near term: more import waves as boundary reviews clear, integration and
category pages, contributor profiles, and a weekly digest. The submission
flow is one markdown file by pull request today; a web form that opens the PR
for you is close. If you run a setup your team relies on, publish it: the
format takes ten minutes, the boundary line is the only hard part worth
sweating, and your handle stays on the listing.

If you would rather start reading than browsing, the two pieces that explain
the whole approach are [why every setup needs a boundary
line](/blog/grok-bot-boundaries) and [a day-by-day plan for your first
week](/blog/grok-bot-first-week). If you would rather start running something
today, [Chief of Staff](/bots/chief-of-staff) is the setup most people build
first and [Inbox Triage](/bots/inbox-triage) is the safest place to learn what
a draft-only boundary feels like in practice.

Copy a bot, put it to work, and tell us what it should never do without you.
`,
};
