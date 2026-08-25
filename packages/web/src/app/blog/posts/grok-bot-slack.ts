import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Slack: Setups, Permissions, and What to Automate First',
  description:
    'A Grok Bot Slack setup that earns its place: channel scope versus workspace scope, why the digest lands in your DM first, and the writes that cost you socially.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Slack: Setups, Permissions, and What to Automate First

A bad email draft is a private mistake. A bad Slack message is a performance.
It fires notifications on forty phones, it sits in scrollback forever, it gets
quoted in a thread you are not in, and it is attributed to whoever installed
the bot. Deleting it removes the message but not the notification anyone
already received, and not the screenshot.

That asymmetry should drive the entire design of a Slack bot, and it usually
does not. People connect Slack the same way they connect a mailbox, grant a
posting scope because the setup flow offered one, point the bot at a busy
channel, and discover within a week that the useful part was the reading and
the expensive part was the writing.

Slack has appeared in the Grok connector lineup as of writing, and connector
availability moves around, so confirm what your plan actually offers when you
connect. What does not move is Slack's permission model, which is genuinely
different from every other tool in this series and much better than most
people use it.

## Slack mistakes are public, and that changes the design

Consider two failures with identical root causes.

Your mail bot misreads a thread and drafts a reply that contradicts what you
said last week. You read it, you delete it, nothing happened.

Your Slack bot misreads a thread and posts a summary in a shared channel
saying the launch slipped to November. Four people reshare it, one forwards it
to a customer, and the correction gets a third of the reach the original did.
Nothing about the model was different. The delivery surface was.

So the first design question for Slack is not "what should the bot do" but
"where does its output land." Get that right and everything else is
recoverable.

## Channel scope versus workspace scope

Slack's model has two independent gates, and this is the fact worth
internalizing, because it is the reason a Slack bot can be given real access
safely.

The first gate is the token scope: what kind of action the app may perform at
all. The second gate is channel membership: which conversations it has been
invited into. A bot with history-reading scope still reads nothing until
somebody adds it to a channel. That is a per-conversation, revocable,
visible-to-everyone grant, and it has no equivalent in Gmail, where read
access means the entire mailbox by definition.

There is one scope family that removes the second gate, and it is the one to
watch for: the write-to-public-channels variant lets an app post into any
public channel without joining it. That is a workspace-wide capability wearing
a channel-shaped name. If your setup offers it, decline it and invite the bot
to the two channels it needs instead.

| Scope family | What the bot can do | Worst realistic outcome |
|---|---|---|
| Public channel read (history and metadata) | Read messages in public channels it has joined, and list channels. | Anything discussed in the open is available to summarize elsewhere, including into a place with a different audience. |
| Private channel read | Read history in private channels it has been added to. | Private deliberation ends up quoted in a digest that lands somewhere public. |
| DM and group DM read | Read direct messages the app is part of. | The most candid conversations in the workspace become bot input. |
| Post as the app | Send messages to conversations it belongs to. | A wrong or premature message in a shared channel, notified to everyone, quoted before you can correct it. |
| Post to any public channel without joining | Write into channels nobody invited it to. | The bot posts somewhere you never considered, and the membership control you were relying on does not apply. |
| Files read and write | Read uploaded files, upload new ones. | An internal document reposted into a channel with a wider or external audience. |
| Users and profile read | List members, names, titles, and sometimes email addresses. | A tidy roster of your whole company, exported wherever the bot writes next. |
| Reactions, pins, topics | React, pin messages, change channel topics. | Small, visible, confusing changes nobody can trace back to a person. |
| Workspace admin | Manage channels, members, and settings. | Structural changes to the workspace that require an admin to unwind. |

Read the consent screen at install time and match what it asks for against
what the bot actually needs. If a read-only digest bot asks for admin, the
answer is no, and the reason is not paranoia, it is that nothing in a digest
requires it.

## Why draft-to-DM beats post-to-channel

The best Slack bot pattern is also the least impressive-sounding: the bot
reads widely and writes to exactly one place, your own direct message.

Slack gives every user a self-DM, and it is an ideal drop zone. It is
private, it is searchable, it is in the same app where the work happens, it
supports formatting and links, and you can copy any message from it into a
channel in two seconds if it is worth sharing. That last part matters: the
bot's output does not become less useful for being private, it just becomes
optional.

Compare the two loops honestly:

| | Post to channel | Draft to your DM |
|---|---|---|
| Bad output costs | Notifications, corrections, credibility | Two seconds and a delete |
| Who reviews | Everyone, after the fact | You, before anyone sees it |
| Time to share good output | Zero | About two seconds |
| Scope needed | Write access to a shared conversation | Write access to one DM |

The [standup scribe](/bots/standup-scribe) in the catalog is built on exactly
this: it posts only to your own DM, never to a shared channel. That is its
declared boundary, and it is the reason the bot can be pointed at real team
channels rather than a sandbox. The
[chief of staff briefing](/bots/chief-of-staff-briefing) draws the same line
one level up, never sending, scheduling, or acting externally without your
approval.

Graduating from DM to channel is a real step, and it is worth taking
eventually for genuinely mechanical posts. Take it in this order: your DM, a
channel you are the only member of, a channel where your team knows a bot
posts and has agreed to it. Never skip to the third.

## The standup digest charter

Here is a working setup for the most useful Slack bot most teams can run. It
reads several channels, writes to one DM, and does not post anywhere else.

\`\`\`text
You are my Standup Scribe.

// WHAT YOU OWN
Every weekday at 09:15 local time, read the last 24 hours of
#eng, #product, and #support (public, you are a member of each).
Produce one digest in my DM with exactly four sections:
  SHIPPED    what actually landed, with a permalink each
  BLOCKED    who said they are stuck, on what, and since when
  DECISIONS  anything stated as decided, with who said it
  NEEDS ME   messages that mention me or wait on my answer
Cap the digest at 400 words. Link, do not quote at length.

// WHAT GOOD LOOKS LIKE
Every claim carries a Slack permalink so I can open the source in one click.
Attribute by name: "Priya said the migration is blocked", not "the team".
If a channel had nothing worth reporting, say "nothing" for that section.
Do not summarize jokes, standup emoji, or deploy bot noise.

// WHERE YOU STOP
Never post in a channel. Your only write destination is my DM.
Never react, pin, rename, or change a channel topic.
Never join a channel on your own. I invite you or you do not read it.
Never repeat content from a private channel or DM in a digest that
mentions a public channel. Link to it and say "private" instead.
If someone asks you a question in a channel, do not answer. Flag it to me.
\`\`\`

That third stop line is the one people cut and then regret, because a bot that
can add itself to channels turns a two-channel grant into a workspace-wide one
without any further consent from you.

## Summarizing threads without leaking the private ones

Threads are the correct unit for a Slack bot. A channel is a stream of
half-conversations; a thread is a bounded discussion with a beginning, a
question, and usually a conclusion. Summarizing threads produces something
readable. Summarizing a channel timeline produces a transcript with the
punctuation removed.

The failure specific to Slack is not summarization quality, it is
visibility crossing. Your workspace has at least four visibility tiers: public
channels, private channels, DMs, and Slack Connect channels shared with
another company. A summary that mixes them destroys the boundary that the tier
system exists to enforce, and it does it invisibly, because the summary reads
like a single coherent paragraph.

Three rules that hold up:

1. Never move content across a visibility boundary. Crossing a boundary means
   linking, not quoting. A permalink respects Slack's own permissions: someone
   without access sees nothing.
2. Treat Slack Connect channels as external, because they are. Messages there
   belong partly to a customer or vendor, and anything the bot writes there is
   a message from your company to theirs.
3. Give the digest one visibility tier. If the digest is going somewhere
   shared, it should only ever contain public-channel content, full stop.

The customer-facing bots in the catalog take this seriously for the same
reason. The [account expert](/bots/account-expert) never messages the
customer; digests and answers stay internal to you. The
[churn watch](/bots/churn-watch) bot never pings the customer and reports to
an internal channel only. The pattern is that the reading can be broad if the
writing is narrow and its audience is pre-decided.

## Reactions, joins, and the other quiet write actions

Posting is the write action everyone thinks about. Slack has several others
that feel like nothing and are visible to the entire channel:

- **Joining a channel** posts a join event. A bot adding itself to #exec is
  something eleven people see.
- **Reacting** shows your app's name to anyone who hovers. An automated
  eyes emoji on a sensitive message reads as somebody watching.
- **Pinning** changes what the channel shows to everyone who opens it.
- **Changing the topic or purpose** posts a system message and overwrites
  something a human wrote.
- **Uploading a file** puts a document in a channel with that channel's
  audience, permanently.

None of these are catastrophic. All of them are the kind of small strange
behavior that makes a team distrust the bot, and once a team distrusts a bot
you lose the thing that made it valuable, which is that people stop editing
their messages for a machine. Deny the reaction and pin scopes unless you have
a specific use, and put joins in the charter regardless.

## A rollout order that does not annoy your team

Slack is shared infrastructure. Every other tool in this series is mostly
yours; this one belongs to your colleagues too, so the rollout has a social
component that the permissions screen will not remind you about.

**Week one, one channel, read only, output to your DM.** Pick the busiest
channel you skim rather than read. Judge the digest on one question: did it
save you opening the channel? If it did not, the sections are wrong, not the
model.

**Week two, add threads and a second channel.** Now require permalinks on
every claim and start clicking three of them each morning. This is the fastest
way to learn where the summarizer flattens disagreement into consensus, which
is its most common and most misleading error.

**Week three, tell your team.** Before the bot writes anywhere shared, say
what it reads, where the output goes, and where it stops. People are fine with
a bot reading a channel; people are not fine with finding out later.

**Week four, consider one channel post.** A single scheduled, mechanical
post, in a channel you own, on a topic nobody argues about, with your name
attached to the setup. Weekly shipped list, not a summary of anybody's
performance.

The general form of this progression, and why the stop line is the part that
makes a bot safe to leave running, is covered in the
[one-person company guide](/blog/one-person-company-grok-bot). The
[introduction to botskills](/blog/introducing-botskills) explains why every
listing has to declare that line before it is published.

## Frequently Asked Questions

### Should a Grok Bot Slack setup post directly in team channels?

Not at first, and for many bots not ever. Channel posts are irreversible in
practice: deleting a message does not recall the notifications it fired or the
quotes it produced, and a bot's mistake gets attributed to the person who
installed it. Have the bot write to your own direct message instead, then copy
anything worth sharing into the channel yourself. The output is just as
useful, the review step costs about two seconds, and the scope you have to
grant shrinks from writing into shared conversations to writing into one
private one.

### What Slack permissions does a read-only digest bot need?

History access for the specific conversation types you want summarized, basic
channel metadata to resolve names and permalinks, and write access limited to
your own direct message. Decline user-profile scopes that include email
addresses unless something genuinely needs them, decline reactions and pins,
and decline any admin scope outright. Watch particularly for the scope family
that allows posting to public channels without joining them, since it bypasses
channel membership, which is otherwise your strongest and most visible control
over what a Slack bot can reach.

### How do I keep a bot from leaking private channel content?

Forbid content from crossing visibility tiers, and require links instead of
quotes whenever it does. Slack has at least four tiers: public channels,
private channels, direct messages, and Slack Connect channels shared with
another company. A permalink is safe across all of them because it inherits
Slack's own permission checks, so a reader without access simply sees nothing.
Also give each digest a single tier: if the output ever lands somewhere
shared, it should contain public-channel material only, with private items
reduced to a count.

### What should I tell my team before turning a Slack bot on?

Say which channels it reads, where its output goes, and the one thing it never
does. That last part is what turns an uncomfortable announcement into a short
one. People accept a bot reading a channel when they know it posts only to
your DM and never reacts, pins, or answers on your behalf. The conversation
you want to avoid is the one where a colleague discovers a summarizer after
the fact, because from then on people write for the bot instead of for each
other, and that costs you more than the digest was worth.
`,
};
