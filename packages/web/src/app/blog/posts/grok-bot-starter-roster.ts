import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Starter Roster: Which Three Bots To Hire First',
  description:
    'The first AI bots to build are three, not twelve: one that watches, one that drafts, one that reconciles. Plus a readiness test for when a job is safe to hand over.',
  date: '2026-08-25',
  category: 'Playbook',
  content: `
# The Starter Roster: Which Three Bots To Hire First

The instinct on day one is to build twelve bots in a weekend. It is a good
weekend. By Wednesday you are ignoring nine of them, two are producing output
you never read, and the one you actually depend on is the one you wrote first,
before you got excited.

This is a playbook for building three instead. Three chosen so they cover the
three shapes of solo work without overlapping, plus the sequence for promoting
a job into a bot and a test for knowing when a job is ready to be promoted at
all.

## Twelve bots in a weekend is how you end up with zero

Building a bot is cheap. Reviewing one is not, and review is the part that
never gets automated away.

Every bot you add puts a recurring item on your morning, permanently. Not a
task you can defer, a piece of output that must be read for the bot to be worth
anything. Twelve bots is twelve artifacts to evaluate before you have started
your own work, and the honest outcome is that you evaluate three of them
properly and let the rest run unread. A bot producing unread output is worse
than no bot: it costs tokens against your weekly usage allowance, with overflow
billed on demand from model and token cost, and it gives you a false sense that
a job is covered.

There is a structural version of this too. As of writing, routines are assigned
to a single bot, capped at 50 per bot, and only the 20 most recent run records
per routine are kept. Nothing sits at team level, and deleting a bot deletes
its routines with it. A sprawling roster is not a filing system you can tidy
later. It is a pile of per-bot state that gets destroyed in whole units.

And a bigger roster buys you no isolation. All bots on an account share one
persistent cloud computer, with each bot getting its own screen on that
machine, and the documentation is direct that separate bots are not a security
boundary. Splitting a job across four bots gives you four things to review and
exactly the same blast radius.

## The three shapes of solo work

Almost everything a solo operator does recurringly falls into one of three
shapes. Pick one bot per shape and the roster covers your week without any two
bots answering the same question.

| Shape | The job | What good output is | What it must never do |
|---|---|---|---|
| Watches | Something outside your control changes, and you need to know | A short diff: what changed, when, and why you should care | Interact with what it watches |
| Drafts | A recurring artifact you write from a template in your head | A near-final draft you edit rather than rewrite | Send, post, or publish it |
| Reconciles | Two sources that should agree and quietly do not | A list of mismatches with evidence, ranked | Fix the mismatch itself |

The three shapes fail in different ways, which is the real reason to cover all
three before doubling up on any one. A watcher fails by being noisy. A drafter
fails by being generic. A reconciler fails by flagging things that are actually
fine. Running one of each in your first month teaches you all three failure
modes at once, and those are the skills that make bot four through six work.

Two watchers, by contrast, teach you nothing new and double your morning.

## The roster, by name

Concrete recommendations, all real catalog listings you can adapt today.

**The watcher: [Competitor Pricing Watch](/bots/competitor-pricing-watch).**
It reads public pricing pages on a schedule and reports what moved. Its stated
boundary is that it only reads public pages and never fills forms or creates
accounts, which is exactly the right shape for a watcher: the failure mode of a
monitoring bot is that it starts interacting with what it is supposed to be
observing. If you are a services business rather than a product one,
[Viral Tweet Scout](/bots/viral-tweet-scout) or
[Churn Watch](/bots/churn-watch) fill the same slot.

**The drafter: [Inbox Triage](/bots/inbox-triage).**
Sorts what arrived and drafts replies for the ones that need one, sending
nothing. This is the highest leverage first bot for most people because the
work is daily, the template really is in your head, and the quality signal is
immediate: you either sent the draft with light edits or you rewrote it. If
your inbox is not the bottleneck,
[Content Idea Generator](/bots/content-idea-generator) is the same shape
pointed at a different queue.

**The reconciler: [Bookkeeping Auditor](/bots/bookkeeping-auditor).**
Compares what your books say against what actually happened and reports the
gaps, never editing the live books. Reconciliation is the shape solo operators
skip longest, because it is the work with no deadline attached, and it is where
the expensive surprises live. If books are not your problem,
[Subscription Pruner](/bots/subscription-pruner) reconciles what you pay for
against what you use.

Three bots, three shapes, no overlap, and three different boundary types:
never interacts, never sends, never edits. If you want more shapes of the same
setups worked out end to end,
[the examples collection](/blog/grok-bot-examples) has them, and the charter
format all three inherit is in
[the one-person company guide](/blog/one-person-company-grok-bot).

## Promote, then hire

The mistake underneath the twelve-bot weekend is hiring a bot for a job that
has never been done. A job goes through four stages before it deserves a
runtime slot, and skipping stages is what produces bots you abandon.

**Stage 1: done by hand.** You do the job yourself, on purpose, at least a few
times. This is where you discover the job is not what you thought it was: half
of inbox triage turns out to be deciding what to ignore, not what to answer.

**Stage 2: reviewed.** You write down what you actually did, including the
steps you did not know you were taking. This is the stage everyone skips.
Teach-by-demonstration helps here, and it is worth knowing what it is: it
records up to ten minutes of visible computer interaction with no microphone
audio and produces a draft skill, covering browser workflows only, and it is
unavailable on iPhone. Note the word draft. It captures what you clicked, not
why, and the why is the part that makes the bot correct rather than
merely imitative.

**Stage 3: handed to a specialist.** Now you write the charter, with one
narrowly scoped bot, and run it beside your manual version for a week. You are
not saving time yet. You are comparing outputs.

**Stage 4: made into a routine.** Only once the output has been right without
your intervention does it get a schedule and leave your attention. This is the
promotion, and it should feel anticlimactic.

\`\`\`text
// PROMOTION NOTE, WRITTEN BEFORE THE CHARTER
Job:            [name it the way a human role would be named]
Trigger:        [exact time, or exact event. No "when needed"]
Input:          [the specific sources it reads, by name]
Output:         [the exact artifact, and where it lands]
Right looks like: [one sentence I could check in 10 seconds]
Wrong looks like: [the most likely bad output, specifically]
Stop line:      [the one action it never takes without me]
Done by hand:   [how many times, and the date of the last one]
Steps changed:  [yes / no, across the last three manual runs]

If any line above contains "usually", "depends", or "it varies",
the job is not ready. Do it by hand again and rewrite this note.
\`\`\`

Fill that in before writing a single line of charter. If you cannot, you have
found the answer to whether the job is ready.

## The disagreement nobody has settled

There are two honest positions in circulation about when to promote, and they
contradict each other.

One camp says promote after about a week. The argument is momentum: a job you
have done for a week is fresh, you remember the edge cases, and waiting longer
means the friction never gets removed because you have adapted to it. Ship the
bot, fix it in flight.

The other camp says never codify until you have done the job by hand several
times, because codifying early automates your own mistakes. The argument is
that your first three attempts at any recurring job are exploratory, and a bot
built from attempt one freezes a procedure you were still figuring out. Worse,
once it is frozen you stop noticing it is wrong, because the output arrives
looking finished.

Both are right about something and both are arguing about the wrong variable.
Elapsed time and repetition count are proxies for the thing that actually
matters, which is whether the procedure has stopped changing. A job you did
daily for a week and improved every single day is not ready. A job you did
three times over a month with identical steps is.

## The readiness test

So here is a test, since nobody appears to have published one. Three
conditions, all three required, no partial credit.

**One: you can state the trigger, the output, and the stop line without
hedging.** Write all three in one sentence each. If any of them needs
"usually", "it depends", or "when it makes sense", you do not have a procedure
yet, you have a habit. The stop line is the one people fumble, and it is the
one that decides whether the bot is safe to leave running.
[Writing a boundary that actually constrains a bot](/blog/grok-bot-boundaries)
covers how to phrase it so it cannot be argued with.

**Two: the last three times you did it by hand, the steps did not change.**
Not the inputs, the steps. Different emails, same triage procedure, counts as
stable. If you improved the process on the most recent run, the clock resets,
because you are still designing. This condition is what settles the
disagreement above: it does not care whether the three runs took a week or six.

**Three: you could tell a wrong output from a right one at a glance.** Under
ten seconds, without opening the source material. If verifying the bot takes as
long as doing the work, you have not saved anything, and you will stop
verifying by week three, which is the worst of all outcomes. Jobs that fail
this condition are not unautomatable, they are not yet decomposed: usually a
smaller piece of them passes cleanly.

Fail any condition and the job goes back to stage one. That is a cheap outcome.
The expensive outcome is a bot running a procedure you were still inventing,
producing output you cannot quickly check.

## The cap is your review capacity

Three is not a limit the runtime imposes. It is a limit your mornings impose.

The right question when adding bot four is not "can the platform run another
one" but "can I meaningfully review one more output tomorrow, and the day
after, and in November." For most solo operators the honest answer lands
between three and six, and it drops during any week that involves real
customer work.

That constraint has a useful implication: adding a bot should require removing
or narrowing another, or a genuine expansion of what you can absorb. Treat the
roster as a headcount budget rather than an install list. Once you actually are
running four or more and the outputs start overlapping,
[a chief of staff bot](/blog/grok-bot-chief-of-staff-setup) becomes the right
fourth hire, precisely because there is finally something to coordinate. Before
that it is a bot writing briefs about an empty roster.

When you do add bot four, add it in a shape you already have, only if the
existing bot in that shape is proven. A second drafter beside a working drafter
is a small step. A first reconciler when you have never run one is a new
failure mode to learn, which is fine, just not in the same week as anything
else new.

If you would rather follow a schedule than design one,
[the first week plan](/blog/grok-bot-first-week) walks the same ground day by
day.

## Frequently Asked Questions

### What are the first AI bots to build?

Three, chosen to cover the three shapes of recurring solo work without
overlapping: one that watches something outside your control and reports what
changed, one that drafts a recurring artifact you would otherwise write from a
template in your head, and one that reconciles two sources that should agree
and quietly do not. Each shape fails differently, so running one of each in
your first month teaches you noise, genericness, and false positives together.
Two bots of the same shape teach you nothing new and double your review load.

### How do I know when a job is ready to hand to a bot?

Use three conditions and require all of them. You can state the trigger, the
output, and the stop line in one unhedged sentence each. The last three times
you did the job by hand, the steps did not change, which means you have stopped
redesigning it. And you could tell a wrong output from a right one in under ten
seconds without reopening the source material. Elapsed time and repetition
count are poor proxies, because a job improved on every run is still being
designed no matter how many runs it has.

### Should I promote a job after a week or wait longer?

Neither, because the calendar is the wrong variable. What matters is whether
the procedure has stopped changing. A job done daily for a week and refined
every single day is not ready, since a bot built from it would freeze a draft
process and hide the fact that it was still wrong. A job done three times over
a month with identical steps is ready, even though it happened slowly. Judge
stability of the steps rather than the number of days, and reset the count
whenever you improve the process.

### How many bots can one person actually run?

Between three and six for most solo operators, and the ceiling is your review
capacity rather than anything the runtime enforces. Each bot adds a permanent
item to your morning that must be read for the bot to be worth having, and an
unread output is worse than no bot because it costs usage and creates a false
sense of coverage. Treat the roster as a headcount budget: adding one should
mean retiring or narrowing another, or a real increase in how much output you
can absorb.
`,
};
