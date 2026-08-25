import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Create a Grok Bot: Step by Step for Your First Setup',
  description:
    'The seven decisions behind how to create a Grok bot that survives its first week: what it owns, a four-block charter, one trigger, and the line it never crosses.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# How to Create a Grok Bot: Step by Step for Your First Setup

The hard part of creating a Grok bot is not the interface. It is the ten
minutes before you open it, when you decide what this particular bot owns and
what it is never allowed to touch. Skip that and you get a bot that produces
plausible output nobody trusts, which is worse than no bot at all, because now
you have one more thing to check every morning.

This walkthrough covers one bot, start to finish. Not a stack, not a team of
them. One bot, seven decisions, in the order that stops you from rewriting the
same setup three times. If you are still sorting out the account and the tool
connections around it, the [Grok bot setup guide](/blog/grok-bot-setup-guide)
covers that wider arc. This page assumes the runtime is open and you are ready
to create the thing itself.

## Step 1: Decide what this bot owns before you open the editor

A bot needs a job you could finish this sentence about: "Every weekday, this
bot ______." If you need the word "and" twice to finish it, you are describing
two bots.

Three properties make a job a good first candidate:

1. **Recurring.** You do it weekly at minimum. Rare work gives you no
   correction cycles, so the charter never improves.
2. **Multi-step.** It crosses at least two tools or takes more than five
   minutes by hand. Anything shorter is a prompt, not a role.
3. **Checkable.** You can tell in under a minute whether the output was right.
   This is the property people skip, and it is the one that decides whether you
   will still be running the bot in three weeks.

| Candidate job | Good first bot | Why |
|---|---|---|
| Sort the overnight inbox into reply, read, ignore | Yes | Recurring, and wrong answers are obvious at a glance |
| Watch six competitor pricing pages weekly | Yes | Stable steps, output is a diff you can scan |
| Summarize the podcasts you queue | Yes | Recurring, and the blast radius is zero |
| "Handle my marketing" | No | Not one job, and there is no definition of done |
| Build the quarterly board deck | No | Four runs a year is not enough to correct anything |
| Reply to unhappy customers | No | Irreversible and judgment-heavy on day one |

Pick from the yes column even if the no column is the work you hate more. You
are not optimizing for relief yet, you are optimizing for a fast feedback loop.

## Step 2: Name it after a job someone could hold

Name the bot the way you would name a role on an org chart. Inbox Triage.
Standup Scribe. Bookkeeping Auditor. Competitor Pricing Watch.

This sounds cosmetic and is not. The name is the scope test. "Helper",
"Assistant 2", and "My Bot" are names you can only give something whose
boundaries you have not decided, and a bot with undecided boundaries will drift
into whatever the last message asked for. If the name would look strange in a
list of job titles, go back to step one.

There is a second reason the name matters that only shows up later. Every bot
on an account shares one cloud computer, so when you have five bots and
something unexpected appears in a file or a browser session, the only thing
that tells you which bot to look at is whether its name predicts its scope.
"Assistant 2" tells you nothing at the exact moment you need to know something.

Two working examples of the naming discipline in the botskills.sh catalog: the
[inbox triage bot](/bots/inbox-triage) sorts and drafts and does nothing else,
and the [standup scribe bot](/bots/standup-scribe) writes the update and posts
it only to your own DM. Each name predicts the scope, which is the point.

## Step 3: Write the charter in four blocks

The charter is the whole bot. Everything else is plumbing. Write it in four
blocks, in this order, and resist the urge to be clever in any of them.

\`\`\`text
// IDENTITY
You are my Inbox Triage bot. You run on my primary work mailbox.

// WHAT YOU OWN
Every weekday at 07:30, read everything that arrived since the last run.
Sort each message into exactly one bucket: REPLY, READ, IGNORE.
For every REPLY message, write a draft response in my voice and leave it
in the drafts folder, unsent.
Post one summary in this shape:
  - counts per bucket
  - the three REPLY items in priority order, one line each
  - anything you could not classify, with the reason

// WHAT GOOD LOOKS LIKE
Drafts are under 120 words and answer the actual question asked.
No greeting longer than one line. No "I hope this finds you well."
If a message needs a fact you do not have, the draft says what is missing
instead of inventing it.

// WHERE YOU STOP
Never send, archive, delete, or move a message.
Never reply to anything from legal, my accountant, or my bank.
If a message asks for a price, a commitment, or a date, mark it REPLY and
stop. Do not draft it.
\`\`\`

The first two blocks are the job description. The third is quality control,
and it is where most first drafts are too vague to be useful. The fourth is the
one clause that lets you leave the bot running.

One clarification worth making now if you arrived here from a coding agent.
The charter is plain instruction text you paste into the bot, not a file the
runtime discovers on disk. Grok Build, the coding product, reads Claude Code
marketplaces, plugins, skills, MCP configuration, and CLAUDE.md files with no
setup. Grok Bot is a different product and its documentation never mentions any
of those files. Conflating the two is the single most common mistake in this
topic, and [what Grok actually does with Claude Code
skills](/blog/grok-bot-claude-code-skills-compatibility) sorts out which
behaviour belongs to which product.

## Make the quality block countable or it does nothing

This is the block that decides whether you are still running the bot in three
weeks, and almost every first draft of it is a list of adjectives.

The test is mechanical. Read each line and ask whether you could mark it pass
or fail from the output alone, without knowing what you meant. If you cannot,
the bot cannot either.

| Vague line people write | What it becomes when it is checkable |
|---|---|
| "Be concise" | "Drafts are under 120 words" |
| "Sound like me" | "No greeting longer than one line. Never open with 'I hope this finds you well'" |
| "Prioritize what matters" | "The three REPLY items in priority order, most time-sensitive first" |
| "Do not make things up" | "If a message needs a fact you do not have, say what is missing instead of inventing it" |
| "Give me a good summary" | "Counts per bucket, then three items, then anything unclassified with the reason" |
| "Handle edge cases sensibly" | "Anything you could not classify goes in its own section with a one-word reason" |

The right column has a property the left column does not: every line can be
violated. A rule that cannot be broken is not a rule, it is a mood, and a bot
given a mood will produce output you feel vaguely unhappy with and cannot
correct.

There is a shortcut for finding these. Take last week's version of the work
that you did by hand, and write down the three things you would change about a
new hire's attempt at it. Those three sentences, made countable, are your
quality block. A wider catalogue of the phrasings that survive real weeks is in
[the prompt patterns reference](/blog/grok-bot-prompts-that-work).

## Step 4: Pick exactly one trigger

A trigger is what makes the bot start. There are two useful kinds, and a first
bot should have one of them, not both.

\`\`\`text
// SCHEDULE TRIGGER
Run every weekday at 07:30 in my local timezone.
If the run fails, retry once after ten minutes, then report the failure
in the summary instead of skipping silently.

// EVENT TRIGGER
Run whenever a message arrives from a sender not in my contacts
that mentions pricing, a contract, or an invoice.
\`\`\`

Two triggers on one bot is two bots wearing one name, and when the output looks
wrong you will not know which path produced it. Start with a schedule. Schedules
are easier to reason about, easier to pause, and they produce a tidy run
history you can read down like a log.

Know how much of that log you get to keep. A routine retains only its 20 most
recent run records, so a daily bot holds about four weeks of evidence and an
hourly one loses today's earliest runs before the afternoon. If a run needs to
be recoverable later, the charter has to write it somewhere you own rather than
rely on the platform's history.

One detail worth setting deliberately: what happens on failure. A bot that
skips silently teaches you it is working when it is not. Make failure loud in
the charter, because the runtime will not do it for you. The full comparison of
schedule and event behaviour is in [routines versus
triggers](/blog/grok-bot-routines-vs-triggers).

## Step 5: Write the stop line before you write anything clever

Every listing on botskills.sh carries a required field called the boundary: the
one action the bot never takes without a human. It sits above the prompt on
each page rather than below it, because it is the fact that decides whether you
can hand a bot real access to real accounts.

Your bot needs the same line, and it is worth writing three tests against it:

- **It names an action, not an attitude.** "Never sends email" is a boundary.
  "Be careful with email" is a hope.
- **You can check it from the output alone.** If you cannot tell from the daily
  summary whether the line held, it is not enforceable.
- **It covers the irreversible verb.** Send, post, pay, delete, merge, cancel,
  book. Find the one your bot could reach and name it explicitly.

A bot that has to ask about everything is useless. A bot that never asks is
dangerous. The stop line is where you settle that trade once, calmly, instead
of relitigating it at 11pm when something strange has already gone out.

Two things people expect to do this job for them and which do not. Creating a
second, more careful bot is not isolation: all bots on an account share one
cloud computer, its files, and its browser sessions, and xAI's documentation
says plainly that separate bots are not a security boundary. And an approval
prompt is not an undo: it governs the action being proposed, and it does not
reverse work already completed. The stop line is the control that operates
before either of those matters. [The case for a boundary
line](/blog/grok-bot-boundaries) is the longer version of this argument.

## Step 6: Run it once by hand and read the output like a manager

Before you let the schedule fire, trigger the bot manually and read the first
output as if a new hire produced it. You are checking four things:

| What to look for | What a pass looks like | What it means if it fails |
|---|---|---|
| Shape | The summary matches the format you specified, exactly | Your format block was prose, not a spec |
| Evidence | Links, message IDs, or file paths, not assertions | The bot is summarizing its intent, not its work |
| Skips | It reports what it could not handle and why | It is silently dropping the hard cases |
| Usability | You would have used the draft unchanged | The quality block needs a number in it |

The fourth row is the real test. A draft you have to rewrite is a draft you may
as well have written. When the answer is no, the fix is almost always in the
"what good looks like" block, and almost never in the model.

The third row is the one people misread. Zero skips on the first run is not a
clean sheet, it is a warning. Any real inbox contains messages that are
genuinely ambiguous, so a bot that classified every single one of them either
guessed or quietly applied a rule you never wrote.

## Prove the stop line holds instead of assuming it

A boundary you have never tested is a sentence, not a control. On day one,
before the schedule takes over, run one check that is capable of failing.

\`\`\`text
Two questions, answer both directly and change nothing.

1. Quote your stop line back to me verbatim.
2. If I asked you right now to send the top REPLY draft, what would you
   do? Answer with the action you would take, not with what you should do.

Then list every action you took during your last run that touched
anything outside this workspace, with a link for each. If there were
none, say "none".
\`\`\`

Two answers count as a pass: the bot quotes the line accurately, and it says it
would decline and park the draft. Anything hedged, anything that offers to send
"if you confirm", tells you the line is in the charter but not in force, and
that is a charter problem you fix now rather than discover on a Thursday.

Then verify by search rather than by question. Look in your sent folder, your
trash, and any shared channel over the window the bot ran in. Asking a bot what
it did and searching for what it did are different classes of evidence, and
only the second one survives a bot that misunderstood its own charter. Once you
have more than one bot, [the full test routine](/blog/testing-your-bot) covers
running these checks against a copy rather than the live setup.

## Step 7: Correct in the charter, never in chat

The first week will produce corrections. Every one of them belongs in the
charter file, not in a follow-up message to the bot.

Chat corrections feel faster and they evaporate. The next scheduled run starts
from the charter, so a fix you typed into a thread on Tuesday is gone by
Wednesday morning and you will make the same correction again, slightly
differently, until you conclude the bot is unreliable. It is not unreliable.
It is reading the document you actually gave it.

Keep the charter somewhere you can diff, and add one line at the bottom each
time you change it:

\`\`\`text
// CHANGELOG
2026-08-25  Added: never draft replies that quote a price.
2026-08-26  Tightened draft length from 200 to 120 words.
2026-08-27  Added bank and accountant to the do-not-reply list.
\`\`\`

After two weeks that changelog is the most valuable part of the file, because
it is a record of exactly where your judgment differs from the default, which
is the thing you will want when you create your second bot.

## The seven decisions, and what each one costs if you skip it

Here is the whole walkthrough as one table. The right column is the useful one:
skipping a step does not produce an error message, it produces a specific
disappointment three weeks later.

| Decision | The wrong-but-tempting answer | What skipping it costs |
|---|---|---|
| What it owns | "Everything about my inbox" | A bot with no definition of done, so no run is ever wrong or right |
| The name | "Assistant" | Scope drifts toward whatever you asked for most recently |
| The four blocks | One paragraph of prose | Output shape changes week to week and you cannot say why |
| The quality bar | "Be helpful and concise" | Nothing to correct against, so every fix is a fresh opinion |
| One trigger | A schedule and an event | Two behaviours under one name, and no way to tell which ran |
| The stop line | "It will not do anything bad" | The one irreversible action nobody named is the one it takes |
| Where corrections live | The chat thread | The same mistake every few days, forever |

Row four and row seven cause most abandonments. Neither announces itself: a bot
with a vague quality bar and chat-only corrections works acceptably for about
nine days and then quietly stops being worth the review time.

## Watch one charter change over its first month

Here is the Inbox Triage bot above, followed from its first run to day thirty,
because the charter you write on day one is never the one that works.

**Day one.** It reports 61 messages: 12 REPLY, 20 READ, 29 IGNORE, 0
unclassified. That zero is the first thing to distrust, and the drafts are
polite and slightly generic. You read four and rewrite three.

**Three corrections, each triggered by a specific run.**

\`\`\`text
// WHAT GOOD LOOKS LIKE  (revised day 3)
Every draft answers the question actually asked in the first sentence.
No draft restates the incoming message back to the sender.

// WHAT YOU OWN  (revised day 6)
Anything you cannot place in one bucket with confidence goes to a fourth
bucket, UNCLEAR, with a one-word reason. Do not force a bucket.

// WHERE YOU STOP  (added day 14)
Never draft a reply to a thread with more than four participants.
Summarize it under NEEDS ME instead.
\`\`\`

**Day thirty.** It reports 58 messages: 9 REPLY, 22 READ, 24 IGNORE, 3 UNCLEAR.
You read three drafts and send all three unchanged.

| Signal | Day one | Day thirty | What changed |
|---|---|---|---|
| Unclassified items surfaced | 0 | 3 | The bot stopped forcing a bucket to look decisive |
| Drafts rewritten | 3 of the 4 read | 0 of the 3 read | The quality block acquired testable sentences |
| Minutes spent on the inbox | 22 | 7 | Review moved from rewriting to approving |
| Lines in the charter | 17 | 23 | Six pieces of judgment that used to be re-explained weekly |

The last row is the actual output of the month. The drafts were disposable; the
23-line file is not, and it is what makes the second bot take twenty minutes
instead of a week.

## Five ways a new bot goes wrong in week one

These are charter faults, not platform faults, and each has a distinct
signature in the output.

| What you see | What is actually wrong | The edit |
|---|---|---|
| Every item classified, nothing ever unclear | No bucket exists for ambiguity, so it guesses to look decisive | Add an UNCLEAR bucket and require a reason |
| Drafts read well but answer the wrong question | The quality block describes tone but never content | Require the first sentence to answer the question asked |
| The bot summarizes what it intended to do | You asked for a summary, not for evidence | Require a link, message ID, or file path per claim |
| Output shape changes between runs | The format block is prose that reads like guidance | Rewrite it as a numbered list of named sections |
| It did something adjacent to its job, not in it | The owned work is described broadly and the stop line names no verb | Narrow the owned work, then name the irreversible verb |

Row one is the most under-diagnosed. A bot that never reports uncertainty is
not more capable than one that does, it is less honest, and the difference only
becomes visible when a confidently misfiled message turns out to have mattered.

## The objection: this is a lot of structure for one prompt

The honest counter-argument is that people create useful bots all the time by
pasting three sentences and setting a schedule, and seven steps looks like
process for its own sake.

That objection is right in two cases. If the job is genuinely simple and
entirely reversible, such as summarizing a podcast queue into a note only you
read, three sentences will do and the ceremony buys you nothing. And if you are
still deciding whether bots are useful at all, a quick disposable bot is a
better experiment than a careful one, because the point of that first attempt
is information, not reliability.

It stops being right the moment the bot touches something you would not want a
stranger touching, or the moment you plan to stop reading every output. Both of
those are thresholds rather than gradual slopes. The seven steps are not a
quality ritual, they are the minimum needed to make a bot's behaviour
predictable without supervision, and predictability is the only thing that
makes unattended running acceptable.

The middle path is real: create the disposable version first, run it for two
days, and use what annoys you as the raw material for the proper charter. That
is faster than designing from theory and it produces a better quality block,
because your corrections come from real output rather than from imagination.

## Where the seven steps do not fit the job

Three kinds of work where this walkthrough is the wrong tool.

**One-off work.** If you will run it twice, write a prompt. A charter earns its
cost through correction cycles, and two runs give you none.

**Work with no stable definition of good.** Positioning, pricing, and hiring
judgment fail the checkable test on purpose, because you are still forming the
opinion the quality block would have to encode. A bot can gather inputs for
those decisions; it cannot own them yet.

**Work that must not be delegated even when it succeeds.** A difficult customer
conversation is the product in that moment. A bot can build the context packet,
and that packet is genuinely useful, but the conversation is not a task to
route away. The clean way to draw that split is covered in [designing the
handoff to a human](/blog/bot-handoff-to-human).

## What to create second

Wait until the first bot has run clean for five consecutive days. Then pick a
job in a different lane rather than an adjacent one, so the two bots cannot
overlap and quietly duplicate work.

A good second bot is usually read-only: something that gathers rather than
acts. The [podcast summarizer bot](/bots/podcast-summarizer) is a common
choice because summaries go to you alone and nothing it does is visible outside
your account. If you want a wider menu of what a second and third bot could
own, the [25 Grok bot examples](/blog/grok-bot-examples) are organized by job
with each one's stop line already written. If you want to sharpen the charter
itself, the [prompt patterns reference](/blog/grok-bot-prompts-that-work) is a
list of the shapes that reliably survive a real week.

**Keep reading:** [The Chief of Staff Bot](/blog/grok-bot-chief-of-staff-setup), [Your First Week With Grok Bot](/blog/grok-bot-first-week), [The Charter Template](/blog/grok-bot-starter-charter-template).

## Frequently Asked Questions

### How long does it take to create a working Grok bot?

The creation itself takes about twenty minutes: ten to decide the scope and
the stop line, ten to write the charter and set the trigger. Getting the bot to
a state where you trust its output unattended takes about a week of daily
corrections, and that week is unavoidable regardless of how carefully you
write. Budget for it. People who expect a finished bot on day one usually
abandon the whole idea on day three, when the third run produces something
slightly wrong and there is no correction habit in place yet.

### Should the first bot be allowed to send anything?

No. Draft-only is the correct default for a first bot, and it costs you almost
nothing, because reviewing a good draft takes seconds while unwinding a bad
send takes a day and some credibility. Let it write emails, posts, and messages
into a drafts folder or an internal channel, and approve them yourself. After a
month of drafts you would have sent unchanged, widening the authority becomes
an informed decision based on evidence rather than a hopeful one based on how
the first few runs felt.

### What makes a bot charter different from a good prompt?

A prompt asks for one output and ends. A charter defines a standing role: what
the bot owns, when it runs without being asked, what a good result looks like
in checkable terms, and what it never does. The practical difference shows up
in week two. A prompt has to be re-typed and re-tuned each time you use it,
while a charter accumulates corrections and gets better on its own schedule.
If your setup does not survive being run tomorrow without you present, it is
still a prompt.

### Why does the bot ignore instructions I gave it in chat?

Because a scheduled run starts from the charter, not from your conversation
history. Anything you typed into a thread after the fact is context for that
exchange only, and the next morning's run has never seen it. This is the single
most common source of "the bot keeps making the same mistake." The fix is
mechanical: every correction gets written into the charter itself, in the block
where it belongs, and the chat message is treated as a note to yourself rather
than as an instruction the bot will remember.
`,
};
