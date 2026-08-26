import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Introducing botskills.sh: a leaderboard of working bots',
  description:
    'Paste-ready bot setups for Grok Bot and Rakazo, ranked by verified copies, each with a hard boundary it never crosses without you. What we built and why.',
  date: '2026-08-25',
  category: 'Announcement',
  content: `
# Introducing botskills.sh: a leaderboard of working bots

A bot setup is one file: a name, the tools it connects to, and a prompt that
tells a runtime like Grok Bot or Rakazo how to behave. botskills.sh is a
directory of those files, ranked by how often people actually copy them. Today
it launches with 37 bots, a live leaderboard, and an API any agent can read.

## Discovery broke before the runtimes did

Bot runtimes crossed from demo to daily driver in a matter of weeks. Grok Bot
entered beta on 11 August 2026 and made "set up a teammate with one prompt" a
mainstream workflow, and Rakazo brought the same model to open source, with
your own model and your own sandbox. Ten days later the eligible plan list
widened, which pulled in a much larger audience that had never written a
charter before.

What did not keep up is discovery. Setups circulate as screenshots and pasted
threads, the good ones disappear into timelines, and there is no way to tell a
battle-tested configuration from something typed five minutes ago. Screenshots
are the worst possible format for this: you cannot copy them, you cannot diff
them, you cannot tell what was edited out of frame, and you certainly cannot
tell whether the person posting it ran it for a week or for one impressive
screen recording.

The gap is not a shortage of ideas about what a bot could do. It is that the
distance between "that looks useful" and "that is running on my account
tonight" is still measured in retyping.

## Rank by copies, because a copy is the only vote that costs something

A directory fixes that only if the ranking means something. Ours ranks by
copies, counted by install telemetry when someone actually takes a setup, never
self-reported and never seeded. The counters all started at zero on launch day,
including for the bots we wrote ourselves. What you see is what was earned.

Copies are a better signal than stars or upvotes for a specific reason: a copy
is the moment someone decided to put a stranger's prompt in front of their own
inbox. It costs attention and it carries risk, so it is much harder to
manufacture casually than a click on an arrow. Votes exist as the tiebreaker,
not as the ranking, because that is roughly the order of how much each signal
costs the person giving it.

The honest limitation, stated up front: copies measure adoption, not outcome. A
setup that gets copied 500 times and abandoned 400 times looks identical to one
that stuck, and we cannot see the difference from here. Read the boundary and
the prompt before you trust the number, which is exactly why both sit above the
fold on every listing.

## Boundaries are schema, not vibes

The idea we care most about: every bot on botskills.sh must declare its
boundary, the one action it never takes without a human. It is a required
field, validated at submission, and rendered on every surface where the bot
appears.

Real examples from the launch catalog:

| Bot | The verb it refuses | What that buys you |
|---|---|---|
| [Inbox Triage](/bots/inbox-triage) | Send | It can read your entire mailbox and the worst case is a bad draft |
| [Lead Scout](/bots/lead-scout) | Contact | Prospect research runs unattended with nobody receiving a surprise email |
| [Flight Check-In](/bots/flight-check-in) | Bypass a 2FA or captcha wall | It stops at the exact point where a wrong guess locks an account |
| [Grocery Autopilot](/bots/grocery-autopilot) | Order | A full basket is reversible, a placed order at 3am is not |
| [Bookkeeping Auditor](/bots/bookkeeping-auditor) | Edit the live books | Findings are cheap to check, ledger corrections are expensive to undo |

Bots earn trust by being predictable about what they will not do. A prompt that
promises everything is a prompt you cannot leave alone with your email. The
boundary line is how a stranger's setup becomes something you can evaluate in
five seconds, and submissions without one are rejected.

The pattern in that middle column is the useful part. Every boundary names an
irreversible verb: send, contact, order, publish, pay, delete, merge. Anything
reversible is fair game for the bot to just do, and anything irreversible waits
for a person. That is a rule you can apply to a setup you found somewhere else,
including one of ours.

## One shared computer is why the boundary belongs in the prompt

There is a widely repeated assumption about Grok Bot that the documentation
contradicts, and it matters here more than anywhere else on the site.

People assume each bot gets its own machine, so running a risky bot next to a
careful one is fine. It does not. Every bot on an account shares one persistent
cloud computer. Each bot gets its own screen on that computer, but the files,
the browser cookies, the signed-in sessions, and any credentials left on a
command line belong to the account underneath. xAI's own documentation is
direct about the implication and tells you not to treat separate bots as a
security boundary. Deleting a bot does not clean up the shared files or the
browser sessions it created either.

Follow that through and you land on why a declared boundary is a schema field
rather than a style note. If separate bots are not an isolation mechanism, then
the refusal written into each charter is not decoration on top of real
isolation. For most people it is most of the isolation they have. A directory
that publishes prompts without publishing their limits is handing out access,
not setups.

That is the whole design argument for the field, and [what the shared computer
actually covers](/blog/grok-bot-shared-computer-security) works through it
item by item.

## Thirty-seven bots at launch, two hundred more waiting on review

The catalog opens with 37 bots across six categories. Some we wrote, and the
majority are imported from the MIT-licensed botdirectory.ai catalog with full
attribution and license preserved, then reviewed one by one: we read each
prompt and wrote the boundary its own language implies before anything went
live.

| Category | Bots at launch | A good one to start from |
|---|---|---|
| Marketing | 12 | [Competitor Pricing Watch](/bots/competitor-pricing-watch), which reads public pages and never fills a form |
| Personal | 7 | [Subscription Pruner](/bots/subscription-pruner), which cancels nothing you have not approved individually |
| Productivity | 6 | [Inbox Triage](/bots/inbox-triage), the safest way to learn what draft-only feels like |
| Ops | 6 | [Chief of Staff](/bots/chief-of-staff), the setup most people build first |
| Success | 4 | [Churn Watch](/bots/churn-watch), which reports internally and never pings the customer |
| Sales | 2 | [Lead Scout](/bots/lead-scout), research and ranking with no outreach at all |

Another 239 imports are staged and will land in waves as each clears that
review. The review is the slow part on purpose. Writing a boundary for someone
else's prompt means reading it closely enough to know which irreversible verb
it can reach, and that is not a job you can batch.

Every bot page shows the full setup prompt, the integrations it expects, the
runtimes it targets, and a copy button. Copying is the whole transaction: there
is no signup, no paywall, and no gate in front of any part of the catalog.

## Read a listing in five seconds, in this order

Listings are laid out so a fast read reaches the disqualifying facts first, not
last. If you are scanning ours or anyone else's, this is the order that saves
the most time.

| Field | Read it for | Walk away when |
|---|---|---|
| Boundary | The irreversible verb this bot will not touch | It names an attitude ("be careful") rather than an action |
| Category and role name | Whether this is one job or a bundle of three | The name would look strange on an org chart |
| Integrations expected | Which accounts you are about to expose | It wants write access to something you would not grant a new contractor |
| Runtimes targeted | Whether it assumes a hosted platform or your own box | It depends on a connector name rather than describing the job |
| Copies | How many people took the same risk | The count is high but the prompt has no output shape defined |
| The prompt itself | Whether quality is defined in checkable terms | "Be helpful and use good judgment" is the whole quality section |

The last row is the one that separates a setup that survives a week from one
that impresses for an afternoon. A charter that says "under 120 words" gives
you something to correct. A charter that says "be concise" gives the bot no way
to be wrong, which means it gives you no way to fix it.

## The whole directory is machine readable on purpose

The site is built end to end to be consumed by an agent, not only by a person
with a browser.

| Endpoint | Returns | Who it is for |
|---|---|---|
| /api/bots | The catalog as JSON, with category, runtime, and integration filters | An agent shopping for a capability it does not have |
| /api/bots/your-slug/content | The paste-ready BOT.md as raw markdown | Anything that wants the setup itself, not the page around it |
| /llms.txt | A plain-text map of the site | A language model working out where things are |
| /agents | How a bot can author a new bot and submit it | The self-serve path for agent-written listings |

robots.txt explicitly allows AI crawlers into those endpoints. If your Grok Bot
wants to find itself a new skill, nothing on this site stands in its way. That
is a deliberate bet: the fastest-growing readership for a directory of bot
setups is bots, and treating them as second-class visitors would be an odd way
to run this particular business.

## Paid placement will never wear the leaderboard's clothes

Rank is copies, all time, with votes as the tiebreaker. Both are events we
measure and deduplicate, and both start at zero for everyone. There is no way
to buy position: sponsor placements exist, and they are labelled, capped, and
kept visually separate from the organic table. A promoted row will never wear
the leaderboard's clothes.

We think this is the only honest way to run a directory that sells advertising.
The moment paid placement can be mistaken for earned rank, the ranking is
worthless, and so is the ad. The same rule covers scarcity: the "slots taken"
counters on the sponsor surfaces are computed from real bookings in the
database, and today they truthfully read zero. If a counter ever says a slot is
nearly gone, it will be because it is.

## The fair objection: a directory of prompts is not a moat

The strongest argument against this whole project is that a bot setup is text,
text is trivially copyable, and a directory of copyable text has nothing
underneath it. Anyone can mirror the catalog in an afternoon.

That is true about the files and false about the thing that makes them usable.
The scarce input here is not the prompt, it is the review: reading someone
else's charter closely enough to name the irreversible verb it can reach, then
publishing that judgment as a field a stranger can check in five seconds. That
is why 239 listings are staged rather than live. A mirror gets the prompts and
inherits none of the reviewing, and a catalog of unreviewed prompts is exactly
the timeline we built this to replace.

The second half of the answer is the ranking. Copy counts come from telemetry
on our own install path, they accumulate over time, and they cannot be
back-dated. A fork starts at zero the same way we did.

## Where this is not the right place to start

Three honest cases where you should go somewhere else first.

If you have not decided between a hosted runtime and one you run yourself, the
catalog will not decide it for you, because a charter is portable and the
decision is about where your credentials live. Settle that first.

If you are on a Linux desktop, an Android phone, or an iPad, check platform
support before you invest an evening in charter writing. As of writing, Grok
Bot supports macOS, Windows, and iPhone, and the answer for a Linux desktop app
in xAI's own FAQ is a flat no.

And if what you want is a comparison of every place bot setups come from,
including the ones that are better than us at things, we wrote that too rather
than pretending we are the only option: [where working bot setups actually come
from](/blog/botdirectory-alternatives) covers the four sources and what each is
genuinely best at.

## Publish your own setup in about ten minutes

The submission flow is one markdown file by pull request today. The format is
deliberately small, and only one field takes real thought.

Your listing needs a name that reads like a job title, a one-line description,
the runtimes it targets, the integrations it expects, the prompt itself, and
the boundary. That last field is the only hard part worth sweating, and the
test is simple: it must name an action rather than an attitude, and you must be
able to tell from the bot's daily output whether the line held.

\`\`\`text
name: Standup Scribe
category: ops
runtimes: [grok-bot, rakazo]
integrations: [calendar, chat]
boundary: Posts only to your own DM, never to a shared channel.

# Prompt
Every weekday at 09:15, read yesterday's calendar and my commits.
Write a three-line standup: shipped, in progress, blocked.
Post it to my own direct message and nowhere else.
Never post to a shared channel, and never tag another person.
\`\`\`

That is a complete listing. The boundary line and the last line of the prompt
say the same thing on purpose: one is the field a reader checks in five
seconds, the other is the instruction the runtime actually follows.

Your handle stays on the listing, the copy counter is yours, and nothing about
publishing costs anything. If you run a setup your team relies on, it is worth
the ten minutes: a charter that survived contact with a real week is the rarest
thing in this category, and right now it is sitting in a file nobody else can
find.

## What we ship next

Near term: more import waves as boundary reviews clear, integration and
category pages, contributor profiles, and a weekly digest. A web form that
opens the pull request for you is close, which removes the last reason a
non-developer would skip publishing.

If you would rather start reading than browsing, the two pieces that explain
the whole approach are [why every setup needs a boundary
line](/blog/grok-bot-boundaries) and [a day-by-day plan for your first
week](/blog/grok-bot-first-week). If you would rather start running something
today, [Chief of Staff](/bots/chief-of-staff) is the setup most people build
first and [Inbox Triage](/bots/inbox-triage) is the safest place to learn what
a draft-only boundary feels like in practice. If you want the wider system that
a directory of setups slots into, [building a one-person company with bot
runtimes](/blog/one-person-company-grok-bot) is the argument in full.

Copy a bot, put it to work, and tell us what it should never do without you.

**Keep reading:** [Why Grok Bot Needs a Cursor Account and Every Way To Get Access](/blog/grok-bot-cursor-account-explained), [Grok Bot Examples](/blog/grok-bot-examples), [Grok Bot for Designers](/blog/grok-bot-for-designers-figma-motion).

This sits inside a wider guide: [The Complete Guide to AI Bots That Do Real Work](/blog/ai-bots-complete-guide) covers the whole territory.

## Frequently Asked Questions

### What is botskills.sh?

It is a public directory of paste-ready bot setups for runtimes like Grok Bot
and Rakazo, ranked by how many people have actually copied each one. A listing
contains the full prompt, the integrations it expects, the runtimes it targets,
and a required boundary field naming the one action the bot never takes without
a human. There is no signup and no paywall in front of any part of the catalog,
and the entire site is readable as JSON and raw markdown so an agent can browse
it as easily as a person can.

### How is the botskills.sh leaderboard ranked?

By copies, all time, with votes as the tiebreaker. A copy is recorded through
install telemetry when someone actually takes a setup, so the number is never
self-reported and was never seeded. Every counter, including those on bots we
wrote ourselves, started at zero on launch day. Sponsored placements exist but
are labelled, capped, and kept visually separate from the organic table, so
paid position can never be mistaken for earned rank. The known limit is that
copies measure adoption rather than outcome.

### Why does every bot have to declare a boundary?

Because a setup you cannot evaluate quickly is a setup you cannot safely run.
The boundary names the one irreversible action the bot never takes alone, which
tells a stranger the worst case in about five seconds. It matters more on
current runtimes than people expect: on Grok Bot every bot on an account shares
one cloud computer, its files, and its browser sessions, so separate bots are
not an isolation mechanism. The refusal written into the prompt is often most
of the protection actually in place.

### Can I submit my own bot setup?

Yes, and it is free. Submission today is one markdown file opened as a pull
request, containing a role-style name, a short description, the runtimes it
targets, the integrations it expects, the prompt itself, and the boundary. The
boundary is the only field that takes real thought, and it must name an action
rather than an attitude. Your handle stays on the listing and the copy counter
belongs to it. A web form that opens the pull request for you is in progress
for people who would rather not touch git.
`,
};
