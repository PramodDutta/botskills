import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Slack: Permissions and What to Automate',
  description:
    'A Grok Bot Slack setup that earns its place: channel scope versus workspace scope, why the digest lands in your DM first, and the writes that cost you socially.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Slack: Permissions and What to Automate

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

Your mail bot misreads a thread and drafts a reply contradicting what you said
last week. You read it, you delete it, nothing happened.

Your Slack bot misreads a thread and posts a summary in a shared channel
saying the launch slipped to November. Four people reshare it, one forwards it
to a customer, and the correction gets a third of the reach the original did.
Nothing about the model was different. The delivery surface was.

So the first design question for Slack is not "what should the bot do" but
"where does its output land." Get that right and everything else is
recoverable.

## Slack checks two independent gates before a bot reads anything

Slack's model has two independent gates, and this is the fact worth
internalizing, because it is the reason a Slack bot can be given real access
safely.

The first gate is the token scope: what kind of action the app may perform at
all. The second gate is channel membership: which conversations it has been
invited into. A bot with history-reading scope still reads nothing until
somebody adds it to a channel. That is a per-conversation, revocable,
visible-to-everyone grant, and it has no equivalent in Gmail, where read
access means the entire mailbox by definition.

Work it through with a bot holding full public-channel history scope in a
workspace of ninety channels. On install day it reads zero of them. You add it
to #eng and it reads one. Somebody removes it next month and it reads zero
again, and that removal takes four seconds, needs no admin, and appears in the
channel as a system message everyone can see. The scope never changed. The
reach changed three times.

On a mailbox connector there is one grant, it is account-wide, and the only way
to narrow reach afterwards is to revoke the whole connection. Slack is the only
tool in this series where somebody other than you can shrink a bot's access
without breaking it, so you can safely grant real read scope here.

Two consequences follow. Grant the scope family once and manage reach through
membership rather than through re-authorizing. And treat every channel invite
as the real permission decision, because it is: the consent screen was the
policy, the invite is the grant.

There is one scope family that removes the second gate, and it is the one to
watch for: the write-to-public-channels variant lets an app post into any
public channel without joining it. That is a workspace-wide capability wearing
a channel-shaped name. If your setup offers it, decline it and invite the bot
to the two channels it needs instead.

## Match each scope family to the worst thing it permits

Scope names describe an API surface. What you need to know is what a mistake
costs, so read the third column first and the first column second.

| Scope family | What the bot can do | Worst realistic outcome |
|---|---|---|
| Public channel read (history and metadata) | Read messages in public channels it has joined, and list channels. | Anything discussed in the open gets summarized into a place with a different audience. |
| Private channel read | Read history in private channels it has been added to. | Private deliberation ends up quoted in a digest that lands somewhere public. |
| DM and group DM read | Read direct messages the app is part of. | The most candid conversations in the workspace become bot input. |
| Post as the app | Send messages to conversations it belongs to. | A wrong message in a shared channel, notified to everyone, quoted before you correct it. |
| Post to any public channel without joining | Write into channels nobody invited it to. | The bot posts somewhere you never considered, and membership control does not apply. |
| Files read and write | Read uploaded files, upload new ones. | An internal document reposted into a channel with a wider or external audience. |
| Users and profile read | List members, names, titles, and sometimes email addresses. | A tidy roster of your whole company, exported wherever the bot writes next. |
| Reactions, pins, topics | React, pin messages, change channel topics. | Small visible changes nobody can trace back to a person. |
| Workspace admin | Manage channels, members, and settings. | Structural changes that require an admin to unwind. |

Read the consent screen at install time and match what it asks for against
what the bot actually needs. If a read-only digest bot asks for admin, the
answer is no, and the reason is not paranoia, it is that nothing in a digest
requires it.

One practical tell: a digest bot needs exactly one write capability, writing
into your own direct message. If the install flow asks for anything else in the
write column, the app was built for a wider use case than yours, and you absorb
the difference.

## Route every digest to your own DM before it goes anywhere shared

The best Slack bot pattern is also the least impressive-sounding: the bot
reads widely and writes to exactly one place, your own direct message.

Slack gives every user a self-DM, and it is an ideal drop zone. Private,
searchable, in the same app where the work happens, formatting and links
intact, and two seconds from a channel if it is worth sharing. That last part
matters: the bot's output does not become less useful for being private, it
just becomes optional.

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

## Pick the output destination first, then work backwards to the scopes

Most people choose the bot's job, then discover the scopes, then think about
where the output lands. Reverse the order. The destination decides the scope
list, the review loop, and the cost of a bad run, so it is the only choice that
changes everything downstream.

| Destination | Who sees a bad run | Write capability needed | Cost to share a good run | Use it when |
|---|---|---|---|---|
| Your own DM | You, alone | One direct message | Two seconds of copy and paste | Always for month one, permanently for summaries |
| A private channel only you are in | You, alone | A channel it belongs to | Two seconds, plus a searchable archive | Your DM search is getting crowded |
| A private channel your team is in | Three to eight people who opted in | A channel it belongs to | Zero | The team asked for it |
| A public team channel | The workspace, plus anyone forwarding | A channel it belongs to | Zero | The post is scheduled, mechanical, impersonal |
| Any public channel without joining | Everyone, including channels you forgot | The scope that bypasses membership | Zero | Never, for a bot you run yourself |
| A Slack Connect channel | Another company | A shared external conversation | Zero, and it reads as company to company | Never unattended |

Pick the lowest row in column two that you can live with, rather than the
highest row you can technically reach. A digest that lands in your DM and gets
pasted into #eng four mornings out of five beats one that posts automatically,
because the fifth morning is the entire reason the rule exists.

## Paste this standup digest charter and change three lines

Here is a working setup for the most useful Slack bot most teams can run. It
reads several channels, writes to one DM, and does not post anywhere else. The
three lines to change are the channel names, the time, and the four section
headings, in that order of importance.

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

## Summarize threads, and never carry content across a visibility tier

Threads are the correct unit for a Slack bot. A channel is a stream of
half-conversations; a thread is a bounded discussion with a beginning, a
question, and usually a conclusion. Summarizing threads produces something
readable. Summarizing a channel timeline produces a transcript with the
punctuation removed.

The failure specific to Slack is not summarization quality, it is visibility
crossing. Your workspace has at least four tiers, and a summary that mixes them
destroys the boundary the tier system exists to enforce. It does that
invisibly, because the summary reads like one coherent paragraph.

Three rules that hold up:

1. Never move content across a visibility boundary. Crossing a boundary means
   linking, not quoting. A permalink respects Slack's own permissions: someone
   without access sees nothing.
2. Treat Slack Connect channels as external, because they are. Messages there
   belong partly to a customer or vendor, and anything the bot writes there is
   a message from your company to theirs.
3. Give the digest one visibility tier. If the digest is going somewhere
   shared, it should only ever contain public-channel content, full stop.

Written out per tier, the rule stops being abstract:

| Visibility tier | Who reads the source | What the digest may do | The leak that actually happens |
|---|---|---|---|
| Public channel | Anyone in the workspace | Quote, summarize, link freely | A summary reaching people who never opened the channel |
| Private channel | Members only | Link, for member readers only | One quoted line in a digest that also lands somewhere shared |
| Direct message | Two people | Count it, never describe it | A sentence beginning "Priya mentioned privately" |
| Group DM | Three to nine people | Count it, never describe it | The same sentence, with more people positioned to notice |
| Slack Connect channel | Another company | Link, never quote, never write | Anything written there reads as company to company |
| Files attached anywhere | Whoever sees the parent conversation | Name it, never re-upload | A re-upload gives the file the destination's audience |

The last row is the one people miss. Re-uploading a file is not moving a link,
it is minting a second copy with a new permission set, and nothing warns you
that the new audience is wider than the old one.

The customer-facing bots in the catalog take this seriously for the same
reason. The [account expert](/bots/account-expert) never messages the
customer; digests and answers stay internal to you. The
[churn watch](/bots/churn-watch) bot never pings the customer and reports to
an internal channel only. The pattern is that the reading can be broad if the
writing is narrow and its audience is pre-decided.

## Deny the quiet write scopes before you worry about the loud one

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

None of these are catastrophic. All of them are the small strange behaviour
that makes a team distrust the bot, and a distrusted bot loses the thing that
made it valuable: people start editing their messages for a machine. Deny the
reaction and pin scopes unless you have a specific use, and put joins in the
charter regardless.

## Count the social cost of a bot that posts in a shared channel

The consent screen prices the technical risk. Nothing prices the other one, so
price it yourself before enabling any channel write. A bot posting in a shared
channel changes three things, and only the first is obvious.

It changes what a mistake means. A person who posts a wrong summary is having a
bad morning. A bot that posts a wrong summary is a decision somebody made about
the channel, and that somebody is you. Every correction afterwards is also a
small admission that you installed something before it was ready.

It changes how people write, and this is the expensive one, invisible until it
has already happened. Once a team knows a summarizer reads a channel, some
fraction start writing for it: shorter updates, fewer half-formed ideas, more
hedging on anything that might get quoted out of context in a digest they will
never see. You installed the bot to capture what the team was already saying,
and installing it changed what they say. The digest still looks fine, which is
precisely the problem.

It changes who absorbs the noise. Members can mute a person's thread. They
cannot mute your bot without muting the channel, and asking you to turn it off
costs them a small social favour, so they will not ask. They will weight the
channel lower instead, and you will read the quiet as the bot working.

None of this argues for never posting. It argues for pricing the post. A weekly
shipped list in a channel you own costs almost nothing on all three counts. A
daily summary of who is blocked costs a great deal on all three, because it is
a judgment about people, written by a machine, in front of them.

The rule of thumb that survives contact with a real team: post facts, never
assessments. "Three PRs merged, deploy at 14:10" is a fact. "The migration is
still blocked" is an assessment about a person, and assessments belong in your
DM, where you decide whether to repeat them in your own voice.

## Roll the bot out over four weeks and tell your team in week three

Slack is shared infrastructure. Every other tool in this series is mostly
yours; this one belongs to your colleagues too, so the rollout has a social
component the permissions screen will never remind you about.

**Week one, one channel, read only, output to your DM.** Pick the busiest
channel you skim rather than read. Judge the digest on one question: did it
save you opening the channel? If not, the sections are wrong, not the model.

**Week two, add threads and a second channel.** Require permalinks on every
claim and start clicking three each morning. This is the fastest way to learn
where the summarizer flattens disagreement into consensus, its most common and
most misleading error.

**Week three, tell your team.** Before the bot writes anywhere shared, say
what it reads, where the output goes, and where it stops. People are fine with
a bot reading a channel; people are not fine with finding out later.

**Week four, consider one channel post.** A single scheduled, mechanical
post, in a channel you own, on a topic nobody argues about, with your name
attached to the setup. Weekly shipped list, not a summary of anybody's
performance.

## Check three permalinks every morning, because the digest can be plausibly wrong

A Slack summarizer does not fail by producing gibberish. It fails by producing
a confident paragraph in which a disagreement has been smoothed into consensus,
a question has become a decision, and a maybe has acquired a date. You cannot
catch that by reading the digest, because the digest is the thing that is
wrong. So build one check that can actually fail, and run it daily for three
weeks.

Pick three claims from the digest at random and open the permalink on each.
Judge every one against three questions. Did the source say this, or something
weaker? Is the attribution right, meaning the named person said it rather than
quoted somebody who did? And is the claim still true further down the thread,
where people routinely walk things back?

Score it honestly. Three out of three for five consecutive days earns the
digest unattended status for reading. Anything less means the charter needs a
line, not that the model needs replacing, and the line that fixes it most often
is a requirement to preserve disagreement: if two people disagreed and nobody
resolved it, say so and name both, never pick one.

The second check is cheaper and catches the other failure. Once a week, open
the busiest channel and skim the last day yourself. You are hunting for what
the digest omitted, which a permalink check can never find, because permalinks
only test claims that were made.

## When a digest goes wrong, the symptom names the gate that failed

| Symptom | What actually happened | Fix |
|---|---|---|
| The digest is empty, or one channel never appears | The bot was never invited, or was quietly removed | Check membership before the charter. Gate two, not the prompt |
| Claims arrive with no permalinks | The charter asked for a summary, never for evidence | Require one permalink per claim as a formatting rule |
| A private thread shows up in a digest you pasted into a channel | The bot sat in a private channel and no tier rule existed | Add the tier rule, then remove it from that channel until you need it |
| Unresolved arguments come out as settled decisions | Summarization flattened a thread that never concluded | Require both names plus the word "unresolved" |
| Your team starts writing shorter, blander updates | Everyone knows a bot reads, nobody knows where output goes | Say where it goes. Ambiguity changes behaviour, reading does not |
| The bot answered somebody's question in a channel | The stop line covered posting summaries and nothing else | Forbid replies, reactions, and thread answers as three lines |
| Someone finds the bot in a channel you forgot about | It joined itself, or you added it in setup and moved on | Audit membership monthly. The app profile lists every channel |

The first row is the one people answer wrongly. When a Slack bot reads nothing,
the problem is almost never the prompt.

## The strongest case for posting in channel, and where it wins

The honest counter-argument is that a digest in your DM has one reader, and a
bot with one reader saves one person's time. Slack exists so information reaches
people without routing through a human, and a rule that routes everything
through you reintroduces the bottleneck the tool was bought to remove. If you
are the person the team waits on, DM-first makes you slower, not safer.

That argument wins in a recognizable case: the output is mechanical, the
audience asked for it, and nobody's performance is described. A build status, a
deploy log, a list of what merged, an on-call handoff, a reminder that a form
closes at 17:00. These carry no judgment, they fail in obvious rather than
plausible ways, and nobody rereads them looking for an opinion about
themselves. Post those.

It loses on the thing people most want to automate, which is the summary.
Summaries contain judgment by construction, because choosing what to include is
the judgment. A summary that is ninety percent right is not ninety percent as
good, it is a document with an error that reads exactly like the correct parts.

So the real line is not DM versus channel. It is whether a wrong output
announces itself. A broken deploy link is obviously wrong to everyone who
clicks it. A smoothed-over disagreement is not, and the failures that do not
announce themselves need a reader before they get an audience.

Keep reading: the general form of this progression, and why the stop line is
the part that makes a bot safe to leave running, is covered in the
[one-person company guide](/blog/one-person-company-grok-bot). The
[introduction to botskills](/blog/introducing-botskills) explains why every
listing has to declare that line before it is published. The next thing you
will hit is timing, and
[the scheduling guide](/blog/grok-bot-scheduling) covers why a digest arriving
at 09:15 gets read and the same digest at 11:00 does not.

**Keep reading:** [Grok Bot and Airtable](/blog/grok-bot-airtable), [Grok Bot and Discord](/blog/grok-bot-discord), [Grok Bot and GitHub](/blog/grok-bot-github).

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
