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
and it is where most first drafts are too vague to be useful. "Be concise" does
nothing. "Under 120 words" is a rule the bot can follow and you can check.

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

One detail worth setting deliberately: what happens on failure. A bot that
skips silently teaches you it is working when it is not. Make failure loud in
the charter, because the runtime will not do it for you.

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
