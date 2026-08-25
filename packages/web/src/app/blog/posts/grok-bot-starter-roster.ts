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

## Cover three shapes of work before you double up on any one

Almost everything a solo operator does recurringly falls into one of three
shapes. Pick one bot per shape and the roster covers your week without any two
bots answering the same question.

| Shape | The job it covers | What good output is | Time to review | What it must never do |
|---|---|---|---|---|
| Watches | Something outside your control changes, and you need to know | A short diff: what changed, when, and why you should care | Under a minute on a quiet day | Interact with what it watches |
| Drafts | A recurring artifact you write from a template in your head | A near-final draft you edit rather than rewrite | Two to ten minutes, scaling with volume | Send, post, or publish it |
| Reconciles | Two sources that should agree and quietly do not | A ranked list of mismatches, each carrying its evidence | Five minutes weekly, more in the first month | Fix the mismatch itself |

The three shapes fail in different ways, which is the real reason to cover all
three before doubling up on any one. A watcher fails by being noisy. A drafter
fails by being generic. A reconciler fails by flagging things that are actually
fine. Running one of each in your first month teaches you all three failure
modes at once, and those are the skills that make bot four through six work.

Two watchers, by contrast, teach you nothing new and double your morning.

## Score the three shapes against the week you actually have

The shapes are equally worth covering eventually. They are not equally urgent
today, and the right first build is the one whose absence is already costing
you something you can name.

| If this is true of your week | Build first | Because | Do not build first |
|---|---|---|---|
| You hear about competitor or market changes from customers | Watcher | You are already paying the cost, in credibility rather than time | A drafter, saving minutes you currently have |
| More than twenty messages a day need a real answer | Drafter | It is the largest recurring block, and the template genuinely is in your head | A reconciler, whose payoff is quarterly |
| You have not opened your books, subscriptions, or CRM in a month | Reconciler | These surprises compound quietly and surface at the worst possible time | A watcher, adding a daily read to a week you cannot finish |
| You are between customers and the week is light | Reconciler | Reconciliation needs uninterrupted attention that you will not have later | A watcher, which pays out over months you may not spend here |
| Nothing above is clearly true | Drafter | It gives the fastest quality signal: you either sent the draft or rewrote it | Two of anything |

The last column is the one to read twice. Every wrong first bot in that column
is wrong for the same reason: it is a real job, correctly identified, that is
not currently the one hurting you.

## Hire these three by name, and swap only inside the shape

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

## Promote a job through four stages before you hire for it

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

## Two camps disagree about timing, and both measure the wrong variable

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

## Run the readiness test: three conditions, no partial credit

So here is a test, since nobody appears to have published one. Three
conditions, all three required, no partial credit.

| Condition | How you check it | What passing looks like | What failing looks like |
|---|---|---|---|
| Trigger, output, and stop line each fit in one unhedged sentence | Write all three down before you write any charter | Three sentences with no "usually", "depends", or "when it makes sense" | The stop line comes out as "use judgment", which is not a line |
| The last three manual runs used the same steps | Compare your notes from the last three runs, not the last three weeks | Different inputs, identical procedure | You improved the process on the most recent run, which resets the count |
| A wrong output is obvious in under ten seconds | Time yourself judging one past output without opening the source | You spot the error from the artifact alone | Verification costs as much as the job, so you quit verifying by week three |

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

## Follow one roster from day one to day thirty

Abstract advice about three shapes is easy to agree with and hard to act on, so
here is the whole month for a solo consultant who bills four clients and does
her own books.

**Day one.** She writes three promotion notes and finishes only one of them.
Inbox triage passes: the trigger is 08:30 daily, the output is a sorted list
plus drafts, the stop line is that nothing sends. Pricing watch fails condition
two, because she has checked competitor pages exactly twice and did it
differently each time. Bookkeeping fails condition three, because she cannot
tell a good reconciliation from a bad one without opening the bank export. She
builds one bot, not three.

**Day two to day seven.** The drafter runs beside her, not instead of her. She
reads every draft and records one number: how many she sent with light edits.
Day two it is one out of nine. Day five it is five out of eleven, after she
adds two lines to the charter about not answering questions the client has
already asked in the same thread.

**Day eight.** She does the competitor check by hand for the third time, using
the same four pages in the same order. Condition two now passes, and the
pricing watcher gets built with a threshold: report only a change to a listed
price or a plan name, and say nothing at all otherwise.

**Day fourteen.** The watcher has fired four times and three were noise, all of
them a marketing page reword. She narrows it to two pages instead of four. This
is the noise failure mode arriving exactly on schedule, and the fix is the
charter rather than the model.

**Day twenty-one.** Bookkeeping finally passes condition three, because she has
defined what wrong looks like: any transaction above 200 with no matching
invoice, and any invoice marked paid with no matching deposit. Two rules she
can check at a glance. The reconciler goes in with those two rules and nothing
else.

**Day thirty.** Three bots, about eleven minutes of review each morning, and
one retired experiment: a second drafter for proposals that she deleted on day
eighteen because it was rewriting more than it drafted. The roster she is left
with is exactly the roster this article recommends, and she arrived at it by
failing the readiness test twice rather than by taking anyone's word for it.

## Watch for these six failures in the first month

Every one of these has a symptom you can notice in week two, and a fix that is
almost never "use a better model".

| Symptom in month one | What actually went wrong | The fix |
|---|---|---|
| You stopped opening one bot's output around day nine | The output was not worth a minute, usually because the sections are wrong | Rewrite the sections or retire it. Do not just lower the frequency |
| Two bots report the same thing in different words | You built two of one shape and told yourself they were different jobs | Merge them, or narrow one until the overlap is gone |
| The watcher fires daily with nothing in it | No threshold exists, so "no change" is being reported as news | Add a floor: report movement above a named size, otherwise say nothing |
| Every draft gets rewritten from scratch | The template was not in your head, only the intent was | Back to stage one. Three manual runs, then write down the steps |
| The reconciler flags twelve things and eleven are fine | It has no notion of an acceptable difference | Name the tolerance in units, and rank the list by size |
| The roster survives a quiet week and collapses in a busy one | Review capacity dropped and nothing was retired to match | Retire one bot at the start of a busy week deliberately, not after it fails |

The last row is the one that catches people in month two rather than month one.
Review capacity is not a constant, and a roster sized for your best week is a
roster that fails in your worst one.

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

## Where the three-bot rule stops applying

Three is a solo-operator number, and it has an edge worth naming rather than
defending.

It stops applying when your business is one shape. A market researcher whose
entire deliverable is a watch report should run four watchers, not one, because
coverage of distinct sources is the product rather than a convenience. The
underlying rule survives, it just resolves differently: cover the failure modes
you will actually face, and for her all of them are noise.

It stops applying for client work, where the constraint moves from shape to
account. An agency running the same drafter for six clients has one procedure
and six review queues, and the number that matters is minutes per morning, not
distinct shapes. The roster stays three shapes wide and gets deeper per client.

It bends, but less than people hope, for teams. Nothing here sits at team
level: a routine attaches to a single bot, and deleting that bot deletes its
routines with it. So a second person does not halve your review load unless
they are running their own bot, on their own account, with their own charter.
Two people sharing one account share a review queue, which is not the same as
splitting one.

And it stops applying entirely for anything that only runs once. A one-off
research sprint is not a hire, it is a task. Do it in a conversation and delete
the thread. The roster is for jobs that recur, and a job that happens once has
no promotion path to be at any stage of.

## The strongest case for building twelve anyway, and when it holds

The best argument against everything above is that bots are cheap, exploration
is genuinely valuable, and you cannot know which of twelve ideas is useful
until you have seen twelve outputs. Reasoning about a bot in advance is worse
than running one for two days. On that view, the twelve-bot weekend is not
indiscipline, it is a survey, and this article is telling people to plan
carefully in a domain where the planning is more expensive than the experiment.

That argument holds, and it holds in one specific configuration: the twelve are
disposable and you have already decided when they die. Build twelve on Saturday
with a delete-by date of Friday, read every output once, keep the two that
surprised you, and remove the rest whether or not they were promising. Under
those conditions you learn more in a week than three months of careful
promotion will teach you.

It fails on the part nobody executes, which is the deletion. Exploration bots
that were never explicitly killed become production bots by default, and they
arrive in production without a stop line, without a stated trigger, and without
anybody having decided they were worth a permanent slot in the morning. Six
weeks later you have eleven bots, three of which you read, and no memory of
which category each one started in.

So run the survey if you want the survey. Write the delete-by date first, in
the same place you write the charter, and treat a bot that outlives it without
an explicit promotion as a failure of the experiment rather than a result of
it.

Keep reading: if you would rather follow a schedule than design one,
[the first week plan](/blog/grok-bot-first-week) walks the same ground day by
day, and
[the boundaries guide](/blog/grok-bot-boundaries) covers how to phrase the stop
line that condition one of the readiness test asks you for.

**Keep reading:** [Grok Bot Setup Guide](/blog/grok-bot-setup-guide), [No Spend Cap](/blog/grok-bot-spend-cap-and-token-burn), [The Charter Template](/blog/grok-bot-starter-charter-template).

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
