import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Keeping Bot Costs Predictable as Usage Grows',
  description:
    'AI agent cost control for a growing roster: the four levers that move usage, why browser work costs more, and charter clauses that bound spend without a spend cap.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Keeping Bot Costs Predictable as Usage Grows

One bot is easy to reason about. You watch it for a week, you get a feel for
what it consumes, and nothing surprises you. At six bots the feel stops
working, because the total is no longer the sum of six things you understand.
It is the sum of six things that each vary, one of which occasionally varies a
lot, and you have no way to tell which one moved.

This article is about the second situation. Not what the bill is made of, and
not how to stop a runaway, but how to make a growing roster behave like a
predictable line rather than a surprise.

## Predictable is a different target from cheap

Worth separating these, because chasing the wrong one produces bad decisions.

Cheap means the number is small. Predictable means you can state next month's
number in advance and be roughly right. They are not the same property, and for
anyone running a business on top of a roster, the second one is worth more.

A bot that costs a stable amount every month is a line item. You can budget
around it, decide whether the job is worth it, and forget about it. A bot that
costs a small amount most months and occasionally ten times that is not a line
item, it is a risk, and you will end up supervising it, which erases the reason
you built it.

This reframes what you optimise for. The interesting question is not "how do I
reduce this number" but "what makes this number move, and can I bound it".
Variance comes from a short list of sources: inputs that vary in size, retries
that vary in count, schedules that fire more often than you remember, and work
that quietly grows because the world it reads got bigger.

The shape of the bill in general, including a per-run estimation formula you
fill in with your own measurements, is in
[the Grok Bot cost breakdown](/blog/grok-bot-cost). What to do when a single bot
is actively running away, given that there is no Grok Bot spend cap as of
writing, is in
[the spend cap guide](/blog/grok-bot-spend-cap-and-token-burn). This piece is
the steady state in between, which is where you will spend most of your time.

We are not going to print prices or allowance figures here. Rates change, the
included allowance is not published as a number anywhere, and any figure
written into an article in August is a liability by October. Everything below
is stated in relative terms, which stays true when the rates move.

## Only four levers are genuinely under your control

Plenty of things affect usage. Only four of them are under your direct control,
and knowing which is which stops you from optimising the ones you cannot move.

**Frequency.** How often the bot wakes. This is the only lever that multiplies
every other lever at once, it is set with a dropdown, and it is the one people
choose in four seconds without thinking.

**Context size.** What the bot carries into every run: the charter, any notes
file it rereads, and whatever it pulled in to do the job. The first two are
small, fixed, and yours to prune. The third is unbounded unless you bound it,
and it is the main source of variance in a steady-state roster.

**Tool calls.** Every fetch, search, read, and write. A bot that checks six
sources does roughly six times the work of one that checks the best source,
before it has written a word. This is the lever that quietly grows as a bot
gets more useful, because each improvement usually adds a source.

**Retries.** The only lever with no natural ceiling. Everything else has a
maximum per run that you can work out on paper. A retry loop does not, which is
why it is the difference between an expensive month and an inexplicable one.

| Lever | How it moves without you noticing | The bound to write down |
|---|---|---|
| Frequency | A schedule chosen once and never revisited | A stated cadence plus a refusal to run more often on request |
| Context size | A notes file that grows, an inbox that got busier | A maximum items per run and a rule for long documents |
| Tool calls | One more source added each time the bot improves | A hard cap on calls and page loads per run |
| Retries | A login that stopped working three weeks ago | Two attempts per step, and no alternate routes |

The right column is the whole method. A lever without a written bound is not
controlled, it is just currently behaving.

## Browser work costs more, and varies far more, than an API call

This is the fact that separates bot cost from ordinary agent cost, and it is
worth internalising before you design any workflow.

A bot that drives a computer gets its answers the way a person does. As of
writing, Grok Bot operates a persistent cloud computer with each bot getting
its own screen on it
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Pulling a
number out of a web dashboard means loading a page, waiting for it, observing
what appeared, scrolling, clicking, observing again, and possibly repeating
because a panel loaded late. Pulling the same number from an API means one
request and one small response.

Identical answer. Very different amount of work, and more importantly, very
different variance. The API call costs the same every time. The browser route
costs whatever the page decides to do that morning, which is why it is the
enemy of predictability specifically, not just of cheapness.

The design rule that follows: for any recurring number you need, spend one
afternoon finding a non-browser route to it. An export, a feed, a report email,
a published endpoint, a scheduled CSV. Even a manual export you refresh weekly
beats a daily browser crawl, because a file the bot reads has a size you can
see and a cost that does not move.

Reserve browser work for the jobs that genuinely have no other route, which is
usually anything behind a login you cannot get a token for.
[Competitor Website Watch](/bots/competitor-website-watch) is honest about
this: it reads public pages and never interacts with the competitor, so its
per-run work has a visible ceiling. [Inbox Triage](/bots/inbox-triage) works
through a connected mailbox rather than a browser session, which is both
cheaper and more stable.

There is a second-order effect worth naming. Browser work is also where retries
come from. Pages change layout, sessions expire, elements move. So the
expensive route is also the flaky route, and flakiness converts directly into
the one lever with no ceiling.

## Read the interval table as an index, never as money

Here is the interval table, stated as an index rather than as money, and with
the column that the usual version of this table leaves out.

| Interval | Runs per bot per month | Index vs daily | Index across a 6-bot roster | How predictable the total is |
|---|---|---|---|---|
| Every 5 minutes | 8,640 | 288x | 1,728x | Predictably enormous, which is not a consolation |
| Every 15 minutes | 2,880 | 96x | 576x | Stable but dominated by one bot |
| Hourly | 720 | 24x | 144x | Stable, and usually more than the job needs |
| Every 4 hours | 180 | 6x | 36x | Stable, defensible for working-day coverage |
| Twice a day | 60 | 2x | 12x | Stable, the sweet spot for most inbox work |
| Once a day | 30 | 1x | 6x | Stable and the natural baseline |
| Weekdays only | 22 | 0.7x | 4.4x | Stable, and matches how work actually arrives |
| On event | Varies with reality | Cheapest on average | Cheapest on average | Least predictable, and that is the tradeoff |

The last row is the one worth sitting with, because it is where the advice
"use event triggers, they are cheaper" stops being complete. Event triggers are
cheaper on average, since they cost in proportion to real activity rather than
running ninety six times on a dead Sunday. They are also the least predictable
thing in your roster, because a busy week costs multiples of a quiet one and
nothing about the configuration tells you which week is coming.

So the honest guidance is a pairing rather than a preference. Use event
triggers where the average matters more than the ceiling, and put a per-day cap
on them so a surge cannot become a bill. Use schedules where the ceiling
matters more than the average. A daily schedule has an ugly average and a
beautiful worst case, and for a roster you are trying to make boring, the worst
case is the number you actually care about.

## Match the cadence to the decision it feeds

Scheduling arguments become tractable the moment you stop asking how fresh the
data could be and start asking what decision the output feeds, and how often
that decision actually gets made.

| What the output feeds | How stale it can be | Cadence that fits | What faster buys you |
|---|---|---|---|
| A call you make each morning | Overnight | Once, before you start | Nothing. You were asleep |
| A weekly planning session | Six days | Weekly, the day before | A number you will not open |
| A reply you owe within a day | Half a day | Twice on weekdays | Minutes, at double the volume |
| Something you must catch fast | Under an hour | Event trigger with a daily cap | Real coverage, if events are real |
| A monthly report | Four weeks | Monthly, plus one mid-month check | Nothing you would act on |
| Curiosity about a competitor | Weeks | Weekly | A checking habit, which is also a cost |

The right-hand column ends most arguments. A bot polling hourly to feed a
decision you make on Monday morning produces 167 results nobody reads and one
that matters, and the 167 are not free in usage or in attention.

The genuine exception is the fourth row, where the output is not a decision
input but a warning. There the cost of being late is real, so pay for the
frequency, and pay for it with an event trigger and a daily cap rather than
with a tight poll. That is the one case where the ceiling matters more than the
average, and the pairing is what makes it affordable.

## Write the ceiling where the product has none

There is no Grok Bot specific spend cap as of writing, which the documentation
states directly. Subscriptions include a weekly usage allowance and anything
beyond it is billed on demand, derived from model and token cost. So the only
ceiling in the system is the one you write into each bot.

This block is designed for steady state, not for emergencies. Every clause maps
to one of the four levers, and the self-report clause at the end is what makes
next month's number knowable.

\`\`\`text
You are my Account Media Rundown.

// FREQUENCY
Run once per weekday at 07:45 Europe/London. Never twice in one day.
If I ask you to run again, refuse and tell me when the next run is.

// TOOL CALL CEILING
At most 10 tool calls and at most 6 page loads per run.
Prefer an export, a feed, or an API over opening a page, every time.
When you reach a ceiling, stop, report what you covered, and name what
you did not reach. Never continue past a ceiling to finish the job.

// CONTEXT CEILING
Read at most the 15 newest items. Never re-read something already covered.
For any document over 20 pages, read the summary and the tables only,
then list what you skipped.
Summarise long sources once, write the summary to /state/, and reuse it.

// RETRY CEILING
Two attempts at any single step, then stop and record it as failed.
Never a third attempt. Never an alternate route to the same result.
Stop immediately at a captcha, a 2FA prompt, or a login that fails once.

// SELF-REPORT (this is the budget line)
End every report with one line, even on a clean run:
  runs=1 | calls=<n> | pages=<n> | items=<n> | retries=<n> | ceiling=<none|which>

// WHERE YOU STOP
Never start a purchase, an upgrade, a paid trial, a credit top-up, or a
subscription. Never create an account. Never accept terms.
If a task needs spend, describe it in one line and wait for me.
\`\`\`

The self-report line is the clause people cut and then regret, so it is worth
defending. Because an audit view of bot actions does not exist yet, nothing in
the product will tell you which bot consumed what. A counter the bot writes
itself is a proxy you own, and it is enough: when a bot's page count doubles
between two Tuesdays, you have found the change before the invoice does. The
broader case for making bots report their own numbers is in
[the bot observability guide](/blog/bot-observability).

## Learn one unit per bot and keep it in your head

For each bot, you want one number in your head: what a normal run costs in your
own units. Not in currency, which changes. In calls, pages, and items, which do
not.

Get it the boring way. Run the bot by hand for three days, read the self-report
lines, and take the median. That median is the bot's unit. Now the arithmetic
that makes a roster predictable is available to you: unit multiplied by
frequency gives a monthly volume per bot, and the sum across the roster is your
expected total, in units you measured rather than in someone else's numbers.

Two things fall out of having that number written down.

You can price a change before you make it. Moving a bot from daily to hourly is
not "a bit more", it is 24 times its unit, and seeing that written down settles
most scheduling debates in one line.

You can detect drift. A unit that was 8 page loads in March and is 19 in August
means the bot's job grew without anyone deciding it should. That is normally
where a roster's cost quietly went, and it is invisible without a baseline.

Some bots do not have a stable unit, and that is information rather than a
failure. [Podcast Summarizer](/bots/podcast-summarizer) consumes whatever the
episode length happens to be, so its variance is inherent. The right response is
to trigger it per episode rather than on a schedule, so the cost tracks real
input instead of the clock.

## Forecast the roster from six unit lines

Once every bot reports its own counters, a roster forecast becomes arithmetic
instead of a feeling. Here is the shape, using six bots with a median unit
measured over three days of manual runs.

| Bot | Median unit per run | Cadence | Runs a month | What it dominates |
|---|---|---|---|---|
| Inbox triage | 9 calls, 0 pages, 40 items | Twice on weekdays | 44 | Item count |
| Standup scribe | 4 calls, 0 pages, 12 items | Weekdays | 22 | Nothing, and that is fine |
| Competitor watch | 7 calls, 6 pages, 6 items | Weekly | 4 | Variance, by a distance |
| Lead scout | 14 calls, 9 pages, 20 items | Weekdays | 22 | Page count, so total volume |
| KPI report | 6 calls, 2 pages, 1 item | Monthly | 1 | A rounding error |
| Podcast summariser | Whatever the episode is | Per episode | 5 to 12 | Unforecastable by design |

Two things fall out that a total never shows you. First, the roster's page load
volume is dominated by one bot, so if next month's number surprises you, that
is where to look before you look anywhere else. Second, five of the six lines
are forecastable and one is not, and knowing which one is which is worth more
than a tighter estimate of the total. That last row is honest rather than
sloppy: [Podcast Summarizer](/bots/podcast-summarizer) consumes whatever the
episode length is, which is why triggering it per episode keeps the cost
tracking real input rather than the clock.

Keep the table itself. It is fifteen minutes to build, five minutes a month to
refresh, and it converts every future scheduling question into a comparison
against a number you already measured. The per-run arithmetic underneath it,
including a formula whose every term you can measure yourself, is in
[the Grok Bot cost breakdown](/blog/grok-bot-cost).

## Check the forecast against what actually happened

A forecast nobody tests is a number that makes you feel organised. Give it a
check that can fail.

At the end of each month, compare the volume you predicted against what the
self-report lines actually recorded. If actual volume sits within about a
quarter of predicted, the model is working and you can plan on it. If it is
more than a quarter high, do not adjust the forecast, because the forecast is
not the thing that changed. Find the bot whose unit moved, and ask what changed
in its world: a source that got busier, a page that started loading slower, a
retry that began firing where it never used to.

That distinction is the whole discipline. A model that keeps getting revised
upward is not a bad model, it is a correct model reporting drift, and the drift
is the finding. Because an audit view of bot actions does not exist yet, the
self-report lines are your only ledger, which is the case argued in
[the bot observability guide](/blog/bot-observability).

## Ask each month which bots earned their usage

Once a month, list every bot with four columns: its job, its cadence, its unit,
and the date you last used its output. Then one decision per bot, and only three
answers are allowed.

**Kill it.** You have not used the output in two weeks. Its cost is one hundred
percent waste, and tuning it is procrastination dressed as optimisation.

**Coarsen it.** Hourly to daily, daily to weekdays, poll to event. Most bots
survive one step of coarsening without you noticing, which is evidence that the
original cadence was aspiration rather than requirement.

**Keep it.** Which now means something, because it was compared against the
alternative rather than assumed.

The question that makes the review honest is not "is this bot useful" but
"would I pay this again knowing what it produced". Usefulness is a feeling and
almost everything feels useful. The second question has an answer.

A roster review is itself a reasonable thing to delegate, provided the pruning
stays manual. [Bot Advisor](/bots/bot-advisor) exists for the job and never
deletes or rewrites another bot without your explicit say-so. You want the
listing automated and the killing deliberate, never the other way around.

## Answer the objection that this is over-engineering a small bill

The strongest argument against everything above is that a handful of bots costs
less than a lunch, and that building units, forecasts, and monthly reviews
around it is elaborate procrastination. For a two bot roster on a fixed
allowance, that is correct, and you should skip to the retry ceiling clause and
do nothing else.

It stops being correct at the point where three things become true at once: the
number of bots exceeds what you can hold in your head, at least one of them
touches a source whose size you do not control, and overflow is billed rather
than refused. That combination is not exotic, it is what a working roster looks
like by month three, and it is the moment when a surprise stops being a
curiosity and starts being something you have to explain.

The other half of the answer is that none of this is really about money. A
counter line that doubles between two Tuesdays is a signal that a bot's job
changed without a decision being made, and that is worth catching whether or
not it costs anything. The measurement is a debugging tool that happens to also
produce a budget.

## Where predictability is the wrong thing to optimise

Predictability is a property worth paying for, and it is not free, so it is
worth naming where the payment stops making sense.

Anything genuinely investigative loses most of its value under a cap. A
research bot chasing an unclear question does variable work because the question
is variable, and a hard ceiling of ten tool calls turns a real answer into a
partial one delivered on time. For that shape, run it on demand, watch it, and
accept that its cost tracks the question rather than the clock.

The second case is a job with a real deadline attached to money, where being
late costs more than being expensive. A ceiling that stops a run halfway is the
wrong control there. Use a report-and-continue rule instead: the bot tells you
it passed the expected volume and keeps going, so you learn about it rather
than discovering a half-finished job.

And the third is the first month of any new bot. You have no unit yet, so
every bound you set is a guess, and a guess that is too tight produces
truncated output you then blame on the model. Run it loose, measure, then
bound. Bounding before measuring is how people conclude that a workable bot
does not work.

## Growth changes the shape, not just the size

The last thing to understand is that a roster does not scale linearly, and the
non-linear parts are all avoidable.

Three bots reading the same newsletter every morning pay for it three times.
One bot reads it, writes a short digest to a shared file, and the other two read
the digest. This is the single most common source of superlinear growth in a
solo roster, and the fix is an ownership rule rather than a cost optimisation:
exactly one bot owns each source. That is the same discipline that keeps a
roster's outputs from contradicting each other, covered in
[the multi-bot team guide](/blog/multi-bot-teams).

The second effect is that each new bot adds review load, not just usage. Output
nobody reads is waste at one hundred percent regardless of what it cost to
produce, so your real ceiling is how much you can actually read each week. A
seventh bot that pushes you past that ceiling makes the other six less valuable,
because now you are skimming all of them.

And the third is that the boundary does cost work here too, which is the tidy
part of this whole subject. The clause that says a bot never initiates spend is
a safety line first, and it is also the only hard stop between an enterprising
run and an invoice you did not authorise. There is no toggle for it, which is
exactly why it belongs in the charter, and the general argument for writing that
line before you write the workflow is in
[the bot boundaries guide](/blog/grok-bot-boundaries).

**Keep reading:** [Grok Bot and Discord](/blog/grok-bot-discord), [Grok Bot and Google Drive](/blog/grok-bot-google-drive), [Grok Bot and HubSpot](/blog/grok-bot-hubspot).

This sits inside a wider guide: [What AI Bots Actually Cost](/blog/what-ai-bots-cost) covers the whole territory.

## Frequently Asked Questions

### How do I keep AI agent costs predictable as I add more bots?

Measure a unit for each bot rather than tracking a total. Run it by hand for
three days, have it report its own counters at the end of every run, and take
the median number of tool calls, page loads, and items processed. That median
multiplied by the cadence gives you an expected monthly volume per bot, and the
sum across the roster is a forecast built from your own measurements. Then bound
each of the four levers in the charter: a stated cadence, a cap on calls and
page loads, a limit on items and document length, and a hard retry ceiling.

### Why does browser automation cost more than an API call?

Because the agent gets its answer the way a person does. Reading a number from a
web dashboard means loading a page, waiting, observing what rendered, scrolling,
clicking, and often observing again when something loads late. An API returns
the same value in one request with a small response. The gap is not only in
volume, it is in variance: the API call costs the same every time, while the
browser route costs whatever the page does that morning. Browser work is also
where most retries originate, since layouts change and sessions expire.

### Are event triggers cheaper than schedules?

On average, yes, because an event trigger costs in proportion to real activity
while a fifteen minute poll runs ninety six times on a quiet Sunday and produces
nothing every time. The tradeoff is predictability. Event volume tracks the
world, so a busy week can cost several times a quiet one and nothing in the
configuration warns you. Use events where the average matters and add a per-day
cap so a surge cannot become a bill. Use schedules where the worst case matters
more than the average, which is most standing jobs.

### How do I decide whether a bot is worth keeping?

Once a month, list every bot with its job, its cadence, its measured unit, and
the date you last used its output. Then ask the honest question, which is not
whether the bot is useful but whether you would pay for it again knowing what it
actually produced. Only three answers are allowed: kill it if you have not used
the output in two weeks, coarsen it by one step of cadence, or keep it as a
deliberate decision. Most bots survive one coarsening without anyone noticing,
which tells you the original schedule was aspiration.
`,
};
