import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'No Spend Cap: How To Keep a Grok Bot Roster From Running Away',
  description:
    'There is no Grok Bot spend cap yet, so the ceiling has to live in your charters. Run budgets, retry limits and the weekly review that keeps a roster honest.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# No Spend Cap: How To Keep a Grok Bot Roster From Running Away

The product does not have a brake. That is not a complaint, it is the
documented state of things as of writing, and it changes how you should set
up every bot you own.

Three facts stack up badly together. There is no spend cap. The included
allowance is not published as a number anywhere. Anything past that allowance
bills on demand. So the only ceiling in the system is the one you write into
each bot yourself, and this is how to write it.

## What the documentation actually says about spend

Two pages carry the load here, and both are worth reading in full before you
schedule anything.

The Grok Bot enterprise page states it plainly:
"There is no Grok Bot-specific spend cap yet."
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises))

The [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) supplies the other half:
eligible subscriptions include a weekly usage allowance, and usage beyond that
allowance is billed on demand, derived from model and token cost.

Notice what is missing. The size of the weekly allowance is not published. Not
in dollars, not in credits, not in runs. If you have read a third-party post
quoting a figure, that figure was invented, and you should treat everything
else on that page with the same suspicion. We are not going to guess at it
either.

One more documented gap matters for this topic: an audit view of bot actions
does not exist yet, per the same enterprise page. You cannot go back on Friday
and ask which of your six bots consumed the week. That absence is the reason
the rest of this article is about per-bot discipline rather than dashboards.

Which subscription you hold does not change any of the arithmetic below. For
completeness, as of writing the cheapest paid path is Cursor Pro+ at $60 a
month ([cursor.com/pricing](https://cursor.com/pricing)), after eligibility
widened on 21 August 2026
([x.ai news](https://x.ai/news/grok-bot-more-plans)). Check both pages rather
than trusting this sentence in a month.

## What actually burns usage

Five inputs explain nearly every unit a bot consumes. Four of them are
familiar from any agent runtime. The fifth is specific to a bot that drives a
real computer, and it is the one people underestimate.

**Run frequency.** How often the bot wakes up. This multiplies everything
else, which makes it the most powerful control you have and the one set most
carelessly.

**Context size per run.** The charter, the memory file, and whatever the bot
pulled in to do the job. The first two are small and yours to prune. The third
is not bounded unless you bound it.

**Tool calls.** Each fetch, search, read, and write is separate work. A bot
that checks six sources does roughly six times the work of one that checks the
best source, before it writes a word.

**Retries.** A run that breaks halfway and starts again costs the failed
attempt plus the successful one. This is the driver that produces horror
stories rather than mild overspend.

**Browser work.** Grok Bot operates a persistent cloud computer, with each bot
getting its own screen on it
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Getting a
number out of a web app means loading pages, waiting for them, observing them,
scrolling, and clicking. Getting the same number from an API means one
request. Same answer, very different amount of work.

| What the bot does | Cost shape | Cheaper route to the same answer |
|---|---|---|
| Calls a JSON API | One request, small response | This is already the floor |
| Reads one public page | One load plus the parsed content | A feed or export where one exists |
| Drives a logged-in web app | Many observed steps per run | Export once, read the export |
| Fills a multi-step browser form | Longest path, most retry-prone | A direct submission endpoint |
| Reads a long PDF or transcript | One very large input | Summarize once, store it, reuse it |
| Retries a blocked login | The whole cycle, repeatedly | Stop at the block and ask a human |

The last row is not like the others. Every other row has a fixed ceiling per
run. That one does not.

## The retry loop is the classic runaway

This is our read rather than a published statistic, but the shape is not
mysterious. Consider what happens when a bot meets a login wall.

It does not throw an exception. It observes a screen, forms a theory, and acts
on the theory. The password did not take, so perhaps the field was not
focused. Perhaps the page had not finished loading. Perhaps there is a
different sign-in button. Each of those theories is reasonable, each one costs
a full cycle of observation and reasoning and action, and none of them are
going to work, because the actual cause is a password change or a device
challenge that no amount of clicking will resolve.

A loop like that is polite. It reports that it is still trying. It does not
know it is expensive, because nothing in the loop is aware of cost.

Two things stop it, and you need both. The first is a hard retry ceiling in
the charter: two attempts at any single step, then stop. The second is naming
the specific walls that mean stop immediately rather than stop after two
tries. Device challenges and captchas belong in that category, and treating
them as a full stop is a safety decision that happens to be a cost decision
too. [Flight Check-In](/bots/flight-check-in) is built exactly this way: it
stops for a human at every 2FA or captcha and never tries to get past one.

There is a related trap in how approvals work. The docs are direct that an
approval controls the proposed action and does not reverse work already
completed
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
So an approval prompt is not a refund. By the time you see it, the bot has
already done everything it did to get there, including forty minutes of
fruitless clicking. Approvals protect you from the action. Retry ceilings
protect you from the approach.

## Frequency is a dropdown that multiplies everything

Hold the work per run constant and change only the clock. Nothing in this
table is surprising, and that is the point: the numbers are obvious, and the
five minute schedule keeps getting picked anyway, because the cost is
invisible at the moment you click it.

| Schedule | Runs per 30 days | Relative burn | When it is honestly right |
|---|---|---|---|
| Every 5 minutes | 8,640 | 288x | Almost never. You wanted an event trigger |
| Every 15 minutes | 2,880 | 96x | A live incident window you turn off after |
| Every 30 minutes | 1,440 | 48x | Time-boxed monitoring, not a standing job |
| Hourly | 720 | 24x | Something with a real hourly rhythm |
| Every 4 hours | 180 | 6x | Coverage across a working day |
| Twice a day | 60 | 2x | Most inbox and pipeline work |
| Once a day | 30 | 1x | Briefs, digests, change reports |
| Weekdays only | 22 | 0.7x | Anything tied to a working week |

The question that settles it: what is the shortest delay that would actually
change a decision you make? You are not repricing at 3am, so
[Competitor Pricing Watch](/bots/competitor-pricing-watch) reads public pages
on a daily cadence rather than polling. You are not answering mail while
asleep, so [Inbox Triage](/bots/inbox-triage) works twice a day. Where you
genuinely need speed, an event trigger costs in proportion to real activity
while a tight poll costs the same on a dead Sunday.

The full per-run estimation formula lives in
[the Grok Bot cost breakdown](/blog/grok-bot-cost), and the mechanics of
picking a trigger type are in
[the scheduling guide](/blog/grok-bot-scheduling). This article is about the
ceiling, not the estimate.

## Charter clauses that act as a soft cap

Since the runtime has no cap, the charter is where the cap goes. Here is a
complete one you can paste and adapt. Every block below maps to one of the
five drivers above.

\`\`\`text
You are my Competitor Pricing Watch.

// RUN BUDGET
Run once per weekday at 08:00 Europe/London. Never more than once per day.
Even if I ask you to check again, refuse and tell me when the next run is.
One run may use at most 12 tool calls and at most 6 page loads.
When you reach either ceiling, stop, report what you covered, and name
what you did not get to. Never continue past a ceiling to finish the job.

// RETRY CEILING
Two attempts at any single step, then stop. Never a third.
If a page needs a login you do not already have, a 2FA code, a captcha, or
a payment, stop immediately and tell me. Do not look for another route to
the same page. Do not try a cached copy, a mirror, or a search result.

// INPUT CEILING
Read the pricing page itself. Do not follow links off it.
For any document over 20 pages, read the summary and the tables only,
then list what you skipped.
Never load a page you have already read this run.

// OUTPUT CEILING
Report in 8 lines or fewer by default. Write the long version only when
I reply asking for it.

// SELF-REPORT
End every report with one line: pages loaded, tool calls used, retries,
and whether you hit any ceiling. Report this even when the run was clean.

// WHERE YOU STOP
Never start a purchase, an upgrade, a credit top-up, a paid trial, or a
subscription. Never create an account. Never accept terms.
If a task needs spend, describe it in one line and wait for me.
\`\`\`

Read the retry block again, because it contains the clause people leave out.
"Do not look for another route to the same page" is what stops a helpful bot
from converting one blocked attempt into six creative ones. Without it, a
retry ceiling of two just means two attempts per route, and routes are
unlimited.

| Charter block | Driver it caps | What it prevents |
|---|---|---|
| Run budget | Frequency | A dropdown that quietly multiplies by 288 |
| Retry ceiling | Retries | The unbounded driver becoming bounded |
| Input ceiling | Context size, browser work | One transcript outweighing a week |
| Output ceiling | Output length | Paying for a report you skim |
| Self-report | Nothing directly | Gives you the numbers no audit view provides |
| Where you stop | Discretionary spend | An invoice you did not authorise |

## No audit view means you keep the ledger

Since an audit view of bot actions does not exist yet, you cannot answer
"which bot burned the week" after the fact. Four habits substitute for it.

**One job per bot.** A bot doing four things has four cost profiles blended
into one signal, and you cannot tune any of them. Splitting is the only way to
get attributable usage out of an environment that does not attribute anything.

**Make every bot report its own consumption.** The self-report line in the
charter above is not a billing figure, it is a proxy you own: pages, calls,
retries, ceilings hit. A bot whose retry count jumps from one to nine has told
you something a dashboard would have, if there were a dashboard.

**Keep the run history you care about outside the run history.** The app
retains a limited number of recent run records per routine, so anything you
want to compare across weeks has to be written somewhere durable by the bot
itself. There is more on that short evidence window in
[the routines guide](/blog/grok-bot-routines-vs-triggers).

**Match your review cadence to the billing cadence.** The allowance is
described as weekly, so review weekly. A monthly review of a weekly meter is
three weeks of blind spot by design.

## The eleven minute weekly review

Put it on the calendar for the same day each week, before the allowance rolls.
List every bot in one place. For each one, three columns: what triggers it,
when you last used its output, and whether last week's runs hit a ceiling.

Then one decision per bot, and only three options are allowed.

**Kill it.** If you have not used a bot's output in two weeks, its cost is one
hundred percent waste and tuning it is procrastination.

**Coarsen it.** Hourly to daily, daily to weekdays, poll to event trigger. Most
bots survive one step of coarsening without you noticing, which tells you the
original frequency was aspiration rather than need.

**Keep it.** Which now means something, because it was compared against the
alternative.

A roster review is itself a reasonable thing to give a bot, and
[Bot Advisor](/bots/bot-advisor) exists for that job. Its boundary is the
right one: it never deletes or rewrites another bot without your explicit
say-so. You want the review automated and the pruning manual, never the other
way around.

## The boundary is the only hard stop you own

Everywhere else on this site we argue that a boundary is a safety mechanism,
the single line naming what a bot never does without a human. In an
environment with no spend cap, that line is also the budget.

Two clauses do almost all of the work. The bot never initiates spend: no
purchases, no upgrades, no credit top-ups, no paying for a report so it can
summarise the report. And the bot never attempts a third try at anything: not
a third route, not a third theory, not a third patient attempt at a login that
is not going to open.

Neither of those is a setting you can toggle, which is exactly why they belong
in the charter. The reasoning behind treating that line as structure rather
than politeness is laid out in
[the bot boundaries guide](/blog/grok-bot-boundaries). Spend is just the
version of the argument where the cost of getting it wrong arrives as an
invoice.

## Frequently Asked Questions

### Does Grok Bot have a spend cap?

No. The Grok Bot enterprise documentation states directly that there is no
Grok Bot-specific spend cap yet, as of August 2026. Eligible subscriptions
include a weekly usage allowance, and usage beyond that allowance is billed on
demand based on model and token cost. Because there is no ceiling in the
product and no audit view of bot actions yet, the practical control is
per-bot: cap the schedule, cap the tool calls and page loads per run, set a
hard retry ceiling, and forbid the bot from initiating any spend at all.

### How large is the included weekly usage allowance?

It is not published. No figure appears on the pricing pages or in the Grok Bot
documentation, in dollars, credits, or runs, so any specific number you see
quoted online was invented rather than sourced. Treat that as a signal about
the rest of the page it appears on. The practical response is to measure your
own consumption instead of estimating against an unknown: run each bot
manually for a few days, watch your account usage screen, and derive a per-run
figure for your actual charter and your actual data before scheduling
anything.

### What makes one Grok Bot run more expensive than another?

Frequency multiplies everything, so the schedule you pick matters more than
any other setting. After that, the amount of material pulled in per run, since
a single long transcript can outweigh a week of ordinary runs. Then the number
of tool calls, because every source checked is separate work. Browser
workflows cost more than API calls for the same answer, since each step has to
be loaded and observed. And retries are the one driver with no natural
ceiling, which is why an explicit retry limit matters more than any other
clause.

### How do I stop a bot from looping on a step it cannot complete?

Write two rules into the charter rather than relying on the model to give up.
First, a numeric ceiling: two attempts at any single step, then stop and
report. Second, and more important, forbid alternate routes to the same goal,
because a bot that cannot retry a page will otherwise try a mirror, a cached
copy, or a search result instead. Name the specific walls that mean stop
immediately rather than retry: device challenges, captchas, payment prompts,
and any login you did not already establish.
`,
};
