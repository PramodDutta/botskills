import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Spend Cap: None Exists, So Budget in the Charter',
  description:
    'There is no Grok Bot spend cap. The ceiling has to live in your charters: run budgets, retry limits and a weekly review that keeps a roster from running away.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Grok Bot Spend Cap: None Exists, So Budget in the Charter

The product does not have a brake. That is not a complaint, it is the
documented state of things as of writing, and it changes how you should set
up every bot you own.

Three facts stack up badly together. There is no spend cap. The included
allowance is not published as a number anywhere. Anything past that allowance
bills on demand. So the only ceiling in the system is the one you write into
each bot yourself, and this is how to write it.

## Start from what the documentation actually commits to

Two pages carry the load here, and both are worth reading in full before you
schedule anything.

The Grok Bot enterprise page states it plainly:
"There is no Grok Bot-specific spend cap yet."
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises))

The [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) supplies the other half:
eligible subscriptions include a weekly usage allowance, and usage beyond that
allowance is billed on demand, derived from model and token cost.

Notice what is missing. The size of the weekly allowance is not published. Not
in dollars, not in credits, not in runs. If you have read a post quoting a
figure, that figure was invented, and you should treat the rest of that page
with the same suspicion. We are not going to guess at it either.

One more documented gap matters here: an audit view of bot actions does not
exist yet, per the same enterprise page. You cannot go back on Friday and ask
which of your six bots consumed the week. That absence is why the rest of this
article is about per-bot discipline rather than dashboards.

Which subscription you hold does not change any of the arithmetic below.
Eligibility widened on 21 August 2026
([x.ai news](https://x.ai/news/grok-bot-more-plans)), and the current list of
eligible plans lives on [cursor.com/pricing](https://cursor.com/pricing) and
[x.ai/pricing](https://x.ai/pricing). Read those rather than trusting a figure
quoted in an article, including this one. What no plan buys you is a ceiling.

## Rank the five levers by how much each one multiplies

Five inputs explain nearly every unit a bot consumes. Four of them are
familiar from any agent runtime. The fifth is specific to a bot that drives a
real computer, and it is the one people underestimate.

**Run frequency.** How often the bot wakes up. It multiplies everything else,
which makes it the most powerful control you have and the one set most
carelessly.

**Context size per run.** The charter, the memory file, and whatever the bot
pulled in. The first two are small and yours to prune. The third is not
bounded unless you bound it.

**Tool calls.** Each fetch, search, read, and write is separate work. A bot
that checks six sources does roughly six times the work of one that checks the
best source, before it writes a word.

**Retries.** A run that breaks halfway and starts again costs the failed
attempt plus the successful one. This is the driver behind horror stories
rather than mild overspend.

**Browser work.** Grok Bot operates a persistent cloud computer, with each bot
getting its own screen on it
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Getting a
number out of a web app means loading pages, waiting, observing, scrolling,
clicking. Getting the same number from an API means one request. Same answer,
very different amount of work.

Only one of the five is unbounded by default, and that column is why the rest
of this article exists.

| Lever | What it multiplies | Who decides it | Bounded without a clause? | Where the cap goes |
|---|---|---|---|---|
| Run frequency | Every other lever, linearly | A dropdown you set once | Yes, the schedule is the bound | The trigger, then restated in the charter |
| Context per run | Reading and reasoning cost inside one run | Partly you, partly what the bot pulled in | No, whatever it fetched sets the size | An input ceiling naming pages and page counts |
| Tool calls | Work done per run, independent of context | The charter, and the model's improvisation | No, "check a few sources" has no number | A numeric call budget per run |
| Browser steps | Cost of every answer that lives behind a login | The route you asked for | Weakly, a page has finite elements | Prefer an API or an export, then cap page loads |
| Retries | The entire run, once per attempt | Nothing, unless you write it | No, and this is the only true no | A hard attempt limit plus a no-alternate-routes clause |

Read the fourth column downward. Frequency looks scary because the multiplier
is large, but it is a number you chose. Retries are dangerous because nobody
chooses them and nothing stops them.

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
different sign-in button. Each theory is reasonable, each costs a full cycle
of observation and reasoning and action, and none will work, because the
actual cause is a password change or a device challenge that no amount of
clicking resolves.

A loop like that is polite. It reports that it is still trying. It does not
know it is expensive, because nothing in the loop is aware of cost.

Two things stop it, and you need both. A hard retry ceiling in the charter:
two attempts at any single step, then stop. And a named list of walls that
mean stop immediately rather than stop after two tries. Device challenges and
captchas belong there, and treating them as a full stop is a safety decision
that happens to be a cost decision. [Flight Check-In](/bots/flight-check-in)
is built exactly this way: it stops for a human at every 2FA or captcha and
never tries to get past one.

Approvals do not help here. The docs are direct that an approval controls the
proposed action and does not reverse work already completed
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)),
so an approval prompt is not a refund. By the time you see it, the bot has
already done everything it did to get there, including forty minutes of
fruitless clicking. Approvals protect you from the action. Retry ceilings
protect you from the approach.

## Walk one blocked login through the loop, attempt by attempt

Here is the loop written out. The scenario is illustrative rather than
measured: a [subscription pruner](/bots/subscription-pruner) signs into a
billing portal on Monday, and over the weekend the vendor added a device
verification step. Nothing errors. The bot simply cannot get in, and it does
not know that.

| Attempt | What it sees | Theory it forms | What it does | Cost of the attempt |
|---|---|---|---|---|
| 1 | Login form | Ordinary sign-in | Types credentials, submits | One page load, one form fill |
| 2 | A verification prompt | The page had not finished loading | Reloads, retypes, submits | Full cycle again |
| 3 | The same prompt | The field lost focus | Clicks the field first, retypes | Full cycle again |
| 4 | The same prompt | This sign-in path is wrong | Navigates to a different login URL | New page tree to observe |
| 5 | The same prompt again | The session is stale | Clears state, starts from the home page | Longest cycle yet |
| 6 | Same | There may be a help page for this | Searches the vendor's docs | New site, new pages |
| 7 | Same | A support article may hold the answer | Reads the article, tries again | Long input plus another cycle |

Note the turn at attempt 4. Up to there the bot is retrying the same step,
which a retry ceiling of two would have stopped. From attempt 4 onward it is
trying a different route to the same goal, and a retry ceiling does not touch
that, because each route gets a fresh count. This is why the charter below
carries two clauses rather than one: a limit on attempts, and a ban on looking
for another way in.

The correct behaviour is a stop at attempt 2 with a one-line report: the
billing portal now asks for device verification, no data collected, your
action needed. That costs almost nothing and gives you the only thing you
wanted, which is to know.

The tell that this is happening to you is a bot that says it is "still working
on it" across several updates without producing partial output. Progress
without output is the signature of a loop, and it is worth interrupting by
hand, because nothing else will.

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

The question that settles it: what is the shortest delay that would change a
decision you make? You are not repricing at 3am, so
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

## Turn each lever into a charter clause you can paste

Since the runtime has no cap, the charter is where the cap goes. Here is a
complete one you can paste and adapt. Every block below maps to one of the
five levers above.

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

The self-report block is the odd one out: it caps nothing. It exists because
no audit view does, and a line reporting pages, calls, retries and ceilings
hit is the only per-bot number you will ever have.

## Measure your own per-run cost before you schedule anything

You are estimating against an allowance whose size is not published, so an
estimate built from published figures is impossible. Measure instead. The
whole procedure takes a working week and it is the only honest input to a
schedule decision.

Run the bot manually, not on a routine, five times over two or three days,
against your real data rather than a tidy sample. Note your account usage
before the first run and after the fifth, and divide. That is your per-run
cost for this charter, this data, this month. It does not transfer to another
bot and it will drift, which is the point of re-checking it.

Then run the check that can fail. Multiply the per-run figure by the schedule
you were about to pick. If hourly gives you 720 runs in a month and the
arithmetic makes you wince, the schedule was wrong, not the bot. Pick the
coarser cadence and multiply again.

Measure a second time with the input ceiling removed, on a day when the source
material is unusually long. The gap between the two figures is what the
ceiling is buying. No gap means it is set too loose to bind. The broader habit
of testing a setup rather than trusting it is in
[the bot testing guide](/blog/testing-your-bot).

## Match the symptom to the charter clause that is missing

Usage problems announce themselves in specific ways. Each row has a different
cause and a different fix, and treating them all as "the bot is expensive" is
how people end up switching runtimes instead of adding a line.

| Symptom | Likely cause | The clause that fixes it |
|---|---|---|
| Usage climbs on days you did nothing | A poll running on a dead weekend | A run budget with weekdays named, or an event trigger |
| One bot's week looks like a normal month | A retry loop nobody interrupted | Two attempts per step, plus no alternate routes |
| Reports arrive fine, usage keeps rising | Tool calls growing as the bot gets thorough | A numeric ceiling on tool calls and page loads |
| A single day spikes, the rest are flat | One very long document read whole | An input ceiling with a page limit and a skip list |
| Every bot rose at once | A source got slower, so every run does more waiting and observing | Prefer an API or an export over the browser route |
| You cannot tell which bot it was | Two jobs living in one bot | Split them, one job per bot, and re-measure |
| Usage looks fine, output stopped being read | Nothing technical at all | The weekly review below, and a kill decision |

The last row is the most common and the least discussed. A bot whose output
you skip is not a cost problem in the runtime, it is a cost problem in the
roster, and no clause fixes it.

## No audit view means you keep the ledger

Since an audit view of bot actions does not exist yet, you cannot answer
"which bot burned the week" after the fact. Four habits substitute for it.

**One job per bot.** A bot doing four things blends four cost profiles into
one signal, and you cannot tune any of them. Splitting is the only way to get
attributable usage out of an environment that attributes nothing.

**Make every bot report its own consumption.** The self-report line is not a
billing figure, it is a proxy you own: pages, calls, retries, ceilings hit.

**Keep the run history you care about outside the run history.** The app
retains a limited number of recent run records per routine, so anything you
compare across weeks has to be written somewhere durable by the bot itself.
More on that short evidence window in
[the routines guide](/blog/grok-bot-routines-vs-triggers).

**Match your review cadence to the billing cadence.** The allowance is
described as weekly, so review weekly. A monthly review of a weekly meter is
three weeks of blind spot by design.

## Run an eleven minute roster review before the allowance rolls

Put it on the calendar for the same day each week, before the allowance rolls.
List every bot in one place. For each one, four columns: what triggers it,
when you last used its output, whether last week's runs hit a ceiling, and the
retry count from its self-report line.

Read the retry column first. It is the only one that can tell you about a
runaway in progress rather than a habit that formed slowly. A bot whose
retries went from one to nine has changed behaviour, and the cause is almost
always outside the bot: a login expired, a page redesigned, a vendor added a
step.

Then one decision per bot, and only three options are allowed.

**Kill it.** If you have not used a bot's output in two weeks, its cost is one
hundred percent waste and tuning it is procrastination.

**Coarsen it.** Hourly to daily, daily to weekdays, poll to event trigger. Most
bots survive one step of coarsening without you noticing, which tells you the
original frequency was aspiration rather than need.

**Keep it.** Which now means something, because it was compared against the
alternative.

Two rules keep the review honest. Coarsen at most one bot per week, so next
week's numbers have a single explanation. And write the decision down next to
the bot, because "we discussed this one" is the thought that protects a dead
bot for four months running.

A roster review is itself a reasonable thing to give a bot, and
[Bot Advisor](/bots/bot-advisor) exists for that job. Its boundary is the
right one: it never deletes or rewrites another bot without your explicit
say-so. You want the review automated and the pruning manual, never the other
way around. Once the list is long enough that the review stops fitting in
eleven minutes, the structural fixes are in
[the multi-bot teams guide](/blog/multi-bot-teams).

## Answer the case for letting a bot finish the job

The strongest argument against everything above: caps make bots worse. A bot
that stops at twelve tool calls with half an answer has cost you the run and
given you nothing, and now you do the job yourself with a partial report as a
distraction. A bot that pushed on for another twenty calls would have finished
it. Better to pay for completion than to pay for interruption.

It is right that a ceiling landing mid-task produces the worst outcome: you
paid and got nothing usable. The fix is not a higher ceiling, it is a narrower
job. A ceiling that keeps firing is telling you the bot was asked for more
than one run's worth of work, and the answer is to split the task.

It is wrong that pushing on gets you completion. The runs that blow through a
ceiling are overwhelmingly the ones that were never going to complete, because
what made them long was a wall rather than a workload. A run that succeeds
does so on a fairly predictable amount of work. A run that fails does not
converge at all, which is the point of the walkthrough above.

One version of the objection is worth conceding outright. For a genuine
one-off, a migration, a bulk cleanup, an annual reconciliation, a hard ceiling
is the wrong tool and you should supervise instead. Ceilings are for things
that run unattended. Attended work has you as its ceiling.

## Name the jobs a hard ceiling genuinely ruins

Every rule here has a domain. Three kinds of work sit outside it.

**Deep research sweeps.** A brief that legitimately requires twenty sources
cannot run under a six-page-load cap. Run these on demand while you are at the
desk, not on a routine, and let the cap be your attention.

**First runs of anything.** The first execution of a new charter is a
measurement, not a production run. Ceilings hide what the natural cost of the
job actually is, so measure without them and add them afterwards.

**Jobs whose value is in the tail.** Some outputs are worth the long version:
a quarterly review, a full competitive teardown, a year-end reconciliation.
Coarsen the frequency hard instead. Four expensive runs a year is a rounding
error next to a cheap run every hour.

The common thread is that ceilings are a control for unattended, repeating
work. When a job is attended, rare, or exploratory, the honest control is you
deciding to run it, and the clause that still applies in every case is the
spend one: the bot never buys anything, whatever else it is allowed to do.

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

**Keep reading:** [The Starter Roster](/blog/grok-bot-starter-roster), [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers), [The Best AI Bots for Founders in 2026](/blog/best-ai-bots-for-founders).

This sits inside a wider guide: [The Delegation Playbook](/blog/bot-delegation-playbook) covers the whole territory.

This sits inside a wider guide: [What AI Bots Actually Cost](/blog/what-ai-bots-cost) covers the whole territory.

This sits inside a wider guide: [When Bots Go Wrong](/blog/when-bots-go-wrong) covers the whole territory.

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
