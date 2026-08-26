import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'What AI Bots Actually Cost',
  description:
    'The honest ai agent cost picture: which prices are actually published, which figures nobody has published, and how to tell which bot stopped earning its usage.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# What AI Bots Actually Cost

Two questions hide inside "what does an AI bot cost", and mixing them is why
almost every answer you find is useless. The price is what a vendor charges for
access: published, verifiable in one click, and liable to change without warning.
The cost is what your setup consumes once it is running, which nobody publishes
because it depends on choices you have not made yet.

The price is a lookup. The cost is a design decision, and most of it is decided
by a dropdown you click in four seconds.

This page is the hub for both. It prints the prices that are genuinely published,
names the figures that are not, and then spends the rest of its length on the
half you control.

**On this page**

- [Price versus cost](#separate-the-price-you-pay-from-the-cost-you-cause)
- [The published prices](#print-only-the-prices-a-vendor-publishes-with-the-date-you-read-them)
- [Figures nobody published](#three-numbers-you-will-see-quoted-that-nobody-has-published)
- [Subscription, allowance, overflow](#treat-the-subscription-as-a-floor-and-the-charter-as-the-ceiling)
- [Which levers multiply](#read-the-bill-as-a-product-because-two-levers-multiply-and-the-rest-add)
- [The five minute mistake](#every-five-minutes-is-the-most-expensive-phrase-in-bot-setup)
- [The runaway retry loop](#the-retry-loop-is-the-only-cost-with-no-natural-end)
- [Browser work versus API work](#browser-work-is-what-separates-an-agent-bill-from-an-api-bill)
- [The worked model, blank](#fill-the-model-in-with-your-own-numbers-because-nobody-elses-transfer)
- [Pricing a roster, not a bot](#price-the-roster-because-six-bots-is-not-six-times-one-bot)
- [Correlated weeks](#correlated-weeks-are-what-actually-cross-the-allowance)
- [Attention as the second bill](#your-attention-is-the-second-bill-and-you-cannot-top-it-up)
- [Cost per decision changed](#measure-cost-per-decision-changed-because-cost-per-run-flatters-everything)
- [Which bot stopped earning](#spot-the-bot-that-stopped-earning-before-it-stops-being-obvious)
- [The budget block and stand-down order](#write-the-budget-block-into-every-charter-then-write-the-stand-down-order)
- [Hosted versus self-hosted](#a-hosted-bill-and-a-self-hosted-bill-are-the-same-arithmetic-on-different-invoices)
- [The bot not worth building](#the-cheapest-bot-is-the-one-you-decided-not-to-build)
- [The objection](#answer-the-argument-that-none-of-this-ever-reaches-an-invoice)
- [Where cost is the wrong lens](#where-cost-is-the-wrong-lens-on-the-problem)
- [Frequently asked questions](#frequently-asked-questions)

## Separate the price you pay from the cost you cause

The price is what a vendor charges to let you in. One number on a page, and you
should read it there today rather than in any article, this one included.

The cost is what your bots consume once they run. It is published by nobody, for
nobody, because it is a function of how often your bots wake, how much they read
when they do, how many tool calls they make, and how often they retry a step that
will never work. Those are your settings.

Nearly every page answering "how much does Grok Bot cost" takes the first
question, usually with a stale number, and stops. That is the wrong half. The
price costs you one lookup. The cost shape is the difference between a roster you
forget about and a roster you supervise, which was the whole reason you built
one.

## Print only the prices a vendor publishes, with the date you read them

Here is the access picture, read from the vendors' own pricing pages on
25 August 2026. Treat the date as part of the fact: eligibility widened on
21 August 2026, which made every article written before that week wrong, and it
will happen again.

| Plan | Price as published | Includes Grok Bot | Worth knowing |
|---|---|---|---|
| Cursor Hobby | Free | No | Not an access path |
| Cursor Pro | 20 USD a month | No | The tier people assume works |
| Cursor Pro+ | 60 USD a month | Yes | Cheapest paid path for an individual |
| Cursor Ultra | 200 USD a month | Yes | Includes it, at a very different price |
| Cursor Teams Standard | 40 USD per user a month | Yes | Cheapest per-seat route |
| Cursor Teams Premium | 120 USD per user a month | Yes | Includes it |
| SuperGrok | 30 USD a month | No | The x.ai tier that does not |
| SuperGrok Plus | 100 USD a month | Yes | Listed as including Grok Bot access |
| SuperGrok Heavy | Not published | Yes | Eligible, and we will not guess |

Sources: [cursor.com/pricing](https://cursor.com/pricing),
[x.ai/pricing](https://x.ai/pricing), and the
[Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) for the eligibility list.

Three readings matter more than the numbers. The cheapest paid route is Cursor
Pro+ at 60 USD a month, or Teams Standard at 40 USD per user, so anyone quoting
an entry price of 120, 200 or 300 is describing the world before 21 August 2026.
A one-time trial for individuals is cheaper still and left out of most round-ups.
And holding both a Cursor and a SuperGrok subscription does not stack into one
larger pool: Grok Bot uses whichever has more usage available.

Cursor also lists an India-only Start plan at Rs 649 a month, which is not on the
documented list of plans that include Grok Bot, so do not buy it expecting
access. The access question in full is in
[why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).

## Three numbers you will see quoted that nobody has published

A page that invents one figure has invented others, so knowing which numbers do
not exist is a fast way to grade a source.

| The figure | Where you meet it | Actual status | What you can say instead |
|---|---|---|---|
| Size of the weekly allowance | Round-ups, "real cost" threads | Not published in dollars, credits, or runs | It is weekly, and its size is undisclosed |
| A SuperGrok Heavy price | Comparison tables | Not published on any primary page | Eligible, price unlisted |
| A per-run or per-token rate | Cost calculators | Not published; overflow bills from model and token cost | Measure your own over three days |
| The model Grok Bot runs | Model comparison posts | Not published, and there is no picker | A fixed set per surface, with failover |

The first row does the most damage, because an allowance figure makes a whole
article feel authoritative. It is published nowhere: not in dollars, not in
credits, not in runs. Any number you have read was invented, and the rest of that
page deserves the same suspicion. We will not guess at it either, which is why
nothing here is stated in money except the prices above.

The fourth row has a consequence people miss. The documentation says plainly that
Grok Bot has no model picker, for members or admins, that a choice is not
planned, and that billing follows whichever model served the request. So the
standard lever from every other agent stack, running a cheaper model for the
boring jobs, is not available. Three controls remain: how often it runs, how much
it reads, and how much it writes. The documentation trail is in
[the no spend cap guide](/blog/grok-bot-spend-cap-and-token-burn).

## Treat the subscription as a floor and the charter as the ceiling

Your bill has three layers and only one of them is a price.

| Layer | What sets it | What happens as usage grows | What stops it |
|---|---|---|---|
| The subscription | Your plan, at a published price | Nothing, it is flat | You, when you change plans |
| The included weekly allowance | The plan, at an undisclosed size | It is consumed earlier each week | The clock, weekly |
| On-demand overflow | Model and token cost of what actually ran | It scales with whatever your bots did | Nothing in the product |

The third row is documented and blunt: there is no Grok Bot specific spend cap
yet. No setting stops a runaway on your behalf. The only ceiling in the system is
the one you write into each charter, which is why half the sections below end in
a clause rather than a tip.

That structure explains a confusing experience people report. Under the
allowance, halving a bot's schedule changes your invoice by exactly nothing. Over
it, the same edit is the entire saving. Your bill is a step rather than a slope,
and most people meet cost tuning in the week they cross, which is the worst
possible moment to start learning it.

## Read the bill as a product, because two levers multiply and the rest add

Usage is not a list of costs, it is a product: runs, multiplied by the work per
run, inflated by the retry rate. Treating the inputs as a flat list is why people
tune the wrong one, prune a memory file, and change nothing.

| Lever | Effect on the average bill | Effect on the worst case | Bounded without a clause? |
|---|---|---|---|
| Run frequency | Sets it, linearly | Sets it, linearly | Yes, the schedule is the bound |
| Retry rate | Small, most runs succeed | Unbounded, one wall can run all weekend | No, the only true no |
| Material read per run | Large, and it drifts upward | Large, one document can dominate a month | No, what it fetched decides |
| Tool calls per run | Moderate, grows as the bot improves | Moderate | No, "a few sources" has no number |
| Browser steps | Large against an API route | Large and highly variable | Weakly |
| Output length | Small, then carried as context | Small | Yes, if you state a length |

Read the middle column, because nobody does. A lever with a modest average and an
unbounded worst case is a risk rather than an expense, and risks get bounded
rather than tuned. That reorders the work: set the clock and the retry ceiling
first, because those are the multipliers, then prune what each run reads, because
that edit now lands on a run count you chose deliberately.

The five drivers one at a time are in
[the Grok Bot cost breakdown](/blog/grok-bot-cost), and the steady-state version
for a roster already running is in
[keeping bot costs predictable](/blog/bot-cost-control).

## Every five minutes is the most expensive phrase in bot setup

A five minute schedule is 288 runs a day against one. Nothing about that
arithmetic is surprising, and the schedule gets picked anyway, because at the
moment you click it the cost is invisible and responsiveness feels free.

| The job | What five minutes buys over daily | Who acts at 03:00 | The honest cadence |
|---|---|---|---|
| Competitor pricing | A price you will not act on until Monday | Nobody | Once a day |
| Inbox triage | A shorter queue, at 288x the runs | Nobody | Twice on weekdays |
| Deploy or incident watch | Real minutes, if someone is on call | Whoever is paged | An event trigger, never a poll |
| Social mentions | A faster reply you were not writing | Nobody | Twice a day, or on event |
| Long document summaries | Repeat payment for a fixed answer | Nobody | Once per item |
| Weekly KPI reporting | A number moving less than its noise | Nobody | Weekly, or monthly |

One row has a defensible case for a tight clock, and even there the answer is an
event trigger rather than a poll, because a poll costs the same on a dead Sunday
as during a launch.

The question that settles every scheduling argument is not how fresh you would
like the data. It is how long the answer stays true. You are not repricing at
3am, which is why
[Competitor Pricing Watch](/bots/competitor-pricing-watch) reads public pages
daily, and you are not answering mail while asleep, which is why
[Inbox Triage](/bots/inbox-triage) runs twice a day. Event triggers are cheapest
on average and least predictable by nature, so pair each with a per-day cap.

Choosing between the two is covered in
[schedules versus event triggers](/blog/grok-bot-routines-vs-triggers), and the
settings in [the Grok Bot scheduling guide](/blog/grok-bot-scheduling).

## The retry loop is the only cost with no natural end

Every other lever has a per-run maximum you can work out on paper. A retry loop
does not, and three properties make it the classic runaway rather than a mild
overspend.

It is unbounded, because nothing in the loop is aware of cost.

It is silent. A bot meeting a login wall does not throw an exception. It observes
a screen, forms a theory, acts on it, and reports that it is still working. That
is the signature: progress without output, and by the time you recognise it the
weekend has gone.

It is polite, which is why people leave it running. A bot saying it will try
another approach sounds like diligence.

Approvals do not save you, and the documentation says why: an approval controls
the proposed action and does not reverse work already completed. Everything done
to reach the prompt is done and charged. Approvals protect you from the action.
Only a ceiling protects you from the approach.

Two clauses stop it and you need both. A hard attempt limit, two tries at any
single step and then stop. And a ban on alternate routes to the same result,
because without it an attempt limit means two attempts per route, and routes are
unlimited: a mirror, a cached copy, a search result, a help article, a different
sign-in URL. [Flight Check-In](/bots/flight-check-in) is built this way and stops
for a human at every 2FA prompt or captcha rather than trying to get past one.

The loop written out attempt by attempt, including the turn where a retry ceiling
stops helping, is in
[the no spend cap guide](/blog/grok-bot-spend-cap-and-token-burn), and the same
failure as one of seven recurring modes is in
[the seven ways bot setups fail](/blog/bot-failure-modes). A
[subscription pruner](/bots/subscription-pruner) meeting a new device check is
the canonical version.

## Browser work is what separates an agent bill from an API bill

Grok Bot operates a persistent cloud computer, with each bot getting its own
screen on that shared machine. Reading a number out of a web dashboard means
loading a page, waiting, observing what rendered, scrolling, clicking, and
sometimes observing again because a panel arrived late. Reading the same number
from an API means one request and one small response. Identical answer, very
different work, and far more variance.

So the design move that saves the most usage is not tuning a schedule. It is one
afternoon spent finding a non-browser route to each recurring number.

| What you need | The browser route | Look for this first | Setup cost, once |
|---|---|---|---|
| A SaaS dashboard metric | Sign in, navigate, read the tile | A scheduled CSV or emailed export | An afternoon |
| Analytics figures | Open the report, set the range | A connector or an API pull | An hour |
| Mailbox contents | Drive the web client | A connected mailbox | Minutes |
| A finance system balance | Sign in behind 2FA each time | An export you refresh weekly | An hour, then five minutes a week |
| Social mentions | Scroll a feed | A feed, list, or search export | An hour |
| Competitor prices | Load the public page | The public page. No shortcut | Nothing to do |

The last row is the honest one. Some jobs have no other route, which is why
[Competitor Website Watch](/bots/competitor-website-watch) reads public pages and
never interacts, keeping its per-run work to a visible ceiling.

One second-order effect matters more than the arithmetic. Browser work is where
retries come from, since layouts change and sessions expire, so the expensive
route is also the flaky one and flakiness feeds the lever with no ceiling. What
the shared machine means beyond cost is in
[one computer, many screens](/blog/grok-bot-shared-computer-security).

## Fill the model in with your own numbers, because nobody else's transfer

You are estimating against an allowance whose size is not published, so an
estimate built from published figures is impossible in principle. Measurement is
the only honest input, and it takes a week.

\`\`\`text
// MEASUREMENT PROTOCOL, once per bot
1. Run the bot manually, not on a routine, five times over three days,
   against your real data rather than a tidy sample.
2. Note your account usage before run one and after run five. Divide.
3. Take the MEDIAN of the self-report lines, not the mean. One long
   document will drag a mean somewhere useless.
4. Multiply by the cadence you were about to pick, before you pick it.
5. Repeat the whole thing once with your input ceiling removed, on a day
   the source material is unusually long. The gap between the two numbers
   is what the ceiling is buying. No gap means it is too loose to bind.

// THE SELF-REPORT LINE THAT MAKES STEP 3 POSSIBLE
End every report with one line, even on a clean run:
  runs=1 | calls=<n> | pages=<n> | items=<n> | retries=<n> |
  ceiling=<none|which>
\`\`\`

| Term | Where the number comes from | Example | Your figure |
|---|---|---|---|
| Runs per month | The cadence you are weighing | 44 | |
| Tool calls per run | Median across five manual runs | 9 | |
| Page loads per run | Median across the same five | 0 | |
| Items read per run | Median across the same five | 40 | |
| Retry rate | Failed steps over total steps | 0.08 | |
| Ceiling hits per week | Read off the self-report line | 0 | |

Then run the check that can fail. Multiply your per-run figure by the schedule
you had in mind. If hourly gives 720 runs a month and the arithmetic makes you
wince, the schedule was wrong rather than the bot.

Measure before you bound, in that order. A ceiling guessed in week one truncates
output that then gets blamed on the model, which is how people conclude a
workable bot does not work. The exception is the retry ceiling, which goes in on
day one because it guards against a runaway rather than against drift. The full
per-run formula is in [the Grok Bot cost breakdown](/blog/grok-bot-cost), and the
habit of proving a setup rather than trusting it is in
[testing your bot](/blog/testing-your-bot).

## Price the roster, because six bots is not six times one bot

One bot is easy. You watch it for a week and nothing surprises you. That stops
working around the fourth bot, because the total is no longer a sum of things you
understand. It is a sum of things that each vary, one of which occasionally
varies a lot, and nothing tells you which moved.

| Roster size | What dominates the bill | What breaks first | The control that matters most |
|---|---|---|---|
| One bot | Whatever that bot reads | Nothing, you can feel it | A cadence chosen on purpose |
| Two or three | Still the heaviest single reader | Your memory of which is which | One job per bot, so usage is attributable |
| Four to six | Duplicated reading, plus one heavy bot | Your review time | Exactly one bot owns each source |
| Seven to twelve | Correlated weeks, plus review load | Your attention, before the invoice | A weekly review and a stand-down order |
| More than twelve | The roster itself | Knowing what any of them are for | Deletion |

Two effects make growth superlinear and both are avoidable. Three bots reading
the same newsletter pay for it three times, and the fix is an ownership rule
rather than a cost optimisation: one bot reads each source and writes a digest
the others read. And every new bot adds review load, which is the constraint that
actually binds.

Splitting earns its place for a second reason. With no audit view of bot actions
yet, a bot doing four jobs blends four cost profiles into one signal you cannot
tune. One job per bot is the only way to get attributable usage from an
environment that attributes nothing. The structural version is in
[running a team of bots without chaos](/blog/multi-bot-teams), and the forecast
arithmetic is in [keeping bot costs predictable](/blog/bot-cost-control).

## Correlated weeks are what actually cross the allowance

Rosters do not cross an allowance because one bot went wrong. They cross because
several bots reacted normally to the same unusual week. Each stayed inside its
own range. Together they moved.

| The week | Bots that rise together | Why they move together | Stand down first |
|---|---|---|---|
| A launch | Inbox, mentions, support, research | One event creates volume everywhere | The research bot |
| An incident | Monitoring, support, standup, comms | One incident feeds all of them | The digest bots |
| A press moment | Inbox, mentions, lead research, CRM | Inbound arrives in every channel | Lead research |
| Quarter end | Finance, reporting, reconciliation, KPI | The calendar, which you knew about | Nothing, plan for it |
| A vendor adds a login step | Every bot touching that vendor | One wall, several retry loops | The bot that hit the wall |
| A source got slower | Every browser-driven bot | Each run waits and observes more | The tightest clock |

The bottom two rows are different in kind. They are failures wearing a cost
costume, and tuning a schedule in response fixes nothing. Telling the two apart
is the subject of
[the complete reference on when bots go wrong](/blog/when-bots-go-wrong).

The cheap defence against the top four is a written stand-down order: which bots
pause, in which sequence, when the week goes sideways. Decide it while calm,
because the week you need it is the week you have no time. The charter block
below carries one.

## Your attention is the second bill and you cannot top it up

Usage is refillable. Your reading is not, and it decides how many bots you can
actually run. Here is one illustrative week, with numbers to replace with yours.

| Bot | Minutes you spend on it weekly | Decisions it changed | Minutes per decision changed |
|---|---|---|---|
| Inbox triage | 25 | 9 | 3 |
| Lead scout | 20 | 3 | 7 |
| Newsletter digest | 15 | 0 | Undefined |
| Competitor watch | 8 | 1 | 8 |
| KPI report | 6 | 1 | 6 |
| Standup scribe | 5 | 0 | Undefined |

The two rows with no denominator are the finding, and neither is a usage problem.
A bot producing correct output on schedule that changes nothing you do costs you
twenty minutes a week forever, and no cadence tuning addresses that.

The rule that follows is unpopular. A seventh bot that pushes you past the
reading you can genuinely do makes the other six less valuable, because now you
skim all of them. Before adding one, delete one or move an existing bot to the
sampling regime in [watching what your bot did](/blog/bot-observability), where
you read three runs a week at random instead of every output.

## Measure cost per decision changed, because cost per run flatters everything

There are two ways a bot wastes money and only the cheap one worries people. A
broken bot is loud: it fails, you notice, you fix or delete it. The expensive
failure runs correctly, produces accurate output on schedule, and changes
nothing. Nothing looks wrong, so it survives for months.

Decide the counting rule before you count. A changed decision is a message you
sent, a call you made, a task you dropped, a meeting you moved, a price you went
back to check. Reading the output and thinking "good, nothing to do" does not
count. That may be worth something as reassurance, and reassurance should be
priced as reassurance rather than smuggled in as impact.

| Bot | Runs a month | Decisions changed | Rank by cost per run | Rank by cost per decision |
|---|---|---|---|---|
| Standup scribe | 22 | 0 | Cheapest | Last, and undefined |
| Inbox triage | 44 | 36 | Most expensive | First |
| Competitor watch | 4 | 4 | Cheap | Second |
| KPI report | 1 | 1 | Cheapest per month | Third |
| Newsletter digest | 22 | 1 | Middle | Second to last |

The ranking inverts, which is the whole point. On a cost-per-run basis you would
cut the inbox bot and keep the standup scribe. On a cost-per-decision basis the
inbox bot is the one earning its usage and the scribe is the one to delete. Count
over four weeks and let the second ranking decide. What to do about each row is
in [the Grok Bot cost breakdown](/blog/grok-bot-cost).

## Spot the bot that stopped earning before it stops being obvious

A bot rarely announces that it has stopped being worth its usage. It degrades
into background noise, and you stop reading it before you decide anything about
it. These are the signals, each with a test that can fail.

| The signal | What it usually means | The test that can fail | The decision |
|---|---|---|---|
| You skim it and act on nothing | The value is event-shaped, not scheduled | Turn it off for a week | Convert it to an event trigger |
| You open the source yourself anyway | It does not answer your real question | Write down the question you open the source for | Rewrite the charter, keep the cadence |
| It agrees with what you already decided | It is confirming, not informing | Count the times it changed your mind | Keep it as reassurance, priced as such |
| Counts falling, nobody decided that | It succeeds on a shrinking slice | Compare this month's examined count with month one | Fix the scope before judging value |
| No handoff in two months | Its stop conditions are unmeasurable | Test the rules against two ambiguous items | Fix the rules, then re-evaluate |
| You would not build it again today | The job changed and the bot did not | Rewrite its charter in five minutes | Delete it, or replace it |

Row four is not a value problem at all, and reading it as one deletes a broken
bot while leaving the breakage in place. A quietly narrowing bot looks worthless
and is actually failing, which is why an examined count belongs in every report.
Row five is the same family: a bot that never stops is usually missing
instrumentation rather than performing well, argued in
[designing the handoff](/blog/bot-handoff-to-human). Row one carries the only
test here that cannot be gamed.

[Bot Advisor](/bots/bot-advisor) is a reasonable place to put the listing work,
and its boundary is the right one: it never deletes or rewrites another bot
without your explicit say-so. Automate the review, keep the killing manual.

## Write the budget block into every charter, then write the stand-down order

Since the runtime has no cap, the charter is where it goes. Two things in the
block below turn a bad week into one instruction rather than a roster-wide audit:
a cost class on line one, and a stand-down order.

\`\`\`text
// COST CLASS, the first line of every charter
CLASS: B          // A = must run, B = should run, C = nice to have
STAND-DOWN: if I say "roster over budget", class C stops until I say
resume, class B drops to its slowest listed cadence, and class A does
not change. Confirm in one line which rule you applied.

// CADENCE
Run twice on weekdays at 08:00 and 15:00 Europe/London.
Slowest listed cadence: once on weekdays at 08:00.
Never run twice within one hour. If I ask you to check again, refuse
and tell me when the next run is.

// PER-RUN CEILINGS
At most 12 tool calls and at most 6 page loads per run.
Read at most the 20 newest items. Never re-read an item you covered.
For any document over 20 pages, read the summary and the tables only,
then list what you skipped.
Prefer an export, a feed, or an API over opening a page, every time.
When you hit a ceiling, stop, report what you covered, and name what
you did not reach. Never continue past a ceiling to finish the job.

// RETRY CEILING
Two attempts at any single step, then stop and record it as failed.
Never a third attempt, and never an alternate route to the same result.
Stop immediately at a captcha, a 2FA prompt, or a login that fails once.

// SELF-REPORT
End every report with one line, even on a clean run:
  class=<A|B|C> | runs=1 | calls=<n> | pages=<n> | items=<n> |
  retries=<n> | ceiling=<none|which>

// WHERE YOU STOP
Never start a purchase, an upgrade, a paid trial, a credit top-up, or a
subscription. Never create an account. Never accept terms.
If a task needs spend, describe it in one line and wait for me.
\`\`\`

The self-report line caps nothing and is the clause people cut first. It exists
because no audit view does. A counter the bot writes itself is the only per-bot
number you will ever have, and when a page count doubles between two Tuesdays you
have found the change before the invoice does.

The last block is the boundary, doing double duty. The line that keeps a bot from
buying something is also the only hard stop between an enterprising run and an
invoice you did not authorise, and there is no toggle for it. The case for
writing that line before the workflow is in
[the bot boundaries guide](/blog/grok-bot-boundaries), and a charter you can fill
in from scratch is in
[the charter template](/blog/grok-bot-starter-charter-template).

## A hosted bill and a self-hosted bill are the same arithmetic on different invoices

The arithmetic underneath does not change when you self-host. What changes is
which invoice each line lands on, and which levers you are allowed to pull.

| Line item | Hosted, Grok Bot shape | Self-hosted, Rakazo shape | Who you call when it spikes |
|---|---|---|---|
| Access | One subscription, published price | Nothing, the runtime is yours | Your card statement |
| Model usage | Weekly allowance, then overflow | Whoever serves the model | Your model provider |
| Model choice as a lever | Not available, no model picker | Yours to change | Yourself |
| Compute | Included, a managed Linux VM | Your machine, container, or cloud | Your hosting bill |
| Storage | Included | Yours | Your hosting bill |
| Upgrades and breakage | The vendor's problem | Yours | Yourself, on a Sunday |
| Your time | Setup and review | Setup, review, upgrades, breakage | Nobody |

The third row reorders the decision. On Grok Bot the standard lever of running a
cheaper model for the boring jobs does not exist. On a self-hosted runtime it is
your main lever, which makes picking a model a cost decision as much as a quality
one, as [choosing a model for Rakazo](/blog/rakazo-model-choice) works through.
The last row is the one self-hosting comparisons omit, and it is usually the
largest.

The runtime comparison is in
[Rakazo versus Grok Bot](/blog/rakazo-vs-grok-bot), what self-hosting involves is
in [the self-hosting walkthrough](/blog/rakazo-self-hosting-guide), and the wider
field is in [open source bot runtimes compared](/blog/open-source-bot-runtimes).

## The cheapest bot is the one you decided not to build

Every bot has a build cost before it has a usage cost: writing the charter,
testing it, reading every output for a week, and two rounds of tuning. Call it a
few hours. That is the number to compare against, and it kills more candidate
bots than any usage figure ever will.

| The job | Verdict | Why |
|---|---|---|
| Recurs on a schedule, and you always act | Build the bot | Recurrence is the whole case |
| Recurs often, decided differently each time | A saved prompt you run | The judgment is the work |
| Happened three times this year | Neither | You will forget the bot exists |
| Takes you four minutes a week | A saved prompt at most | Setup costs more than the year |
| Somebody already reports it to you | Nothing | Paying twice for one answer |
| You want it because a bot could | Nothing | The reason is the tell |

Row two is the one people get wrong most, and the giveaway is a charter you
cannot finish writing. If you cannot state what the bot owns, what good output
looks like, and where it stops, you do not have a role yet. You have a task, and
tasks belong inside an existing bot or in your own hands.

Which three to build first is argued in
[the starter roster](/blog/grok-bot-starter-roster), and the first week of
running any of them is in
[your first week with Grok Bot](/blog/grok-bot-first-week).

## Answer the argument that none of this ever reaches an invoice

The strongest objection is straightforward. For a solo operator running three or
four bots on daily schedules, usage sits inside the included allowance every
week, none of this arithmetic becomes money, and the afternoon spent on it
returns nothing. A fifth bot would have been worth more.

That is correct under four conditions together: a small roster, nothing tighter
than hourly, no bot reading long documents, and an allowance you have never
crossed. If all four hold, skip to the retry ceiling and go build something.

There is a sharper version aimed at this page. You told me not to trust any
article's prices, then wrote thousands of words about cost. The answer is the
distinction the page opens with: the price is a ten second lookup, and the cost
is a design decision you make in a dropdown and live with for a year. One of
those deserves an article, and it is not the one everybody writes.

The four conditions break quietly, which is the real argument. Rosters grow past
eight bots because each one seemed free. A schedule gets tightened during a busy
week and never loosened. A research bot starts being handed PDFs. A login expires
and the retry loop finds it at 2am. So split the work in two. Tuning is optional
and often not worth the hour. Insurance is two clauses and four minutes, and the
retry ceiling plus the no-spend boundary are worth writing even if the objection
holds completely, because they stop the runaway rather than the drift.

## Where cost is the wrong lens on the problem

Three kinds of work sit outside everything above.

Investigative work loses most of its value under a ceiling. A research bot
chasing an unclear question does variable work because the question is variable,
and a hard cap turns a real answer into a partial one delivered on time. Run
those attended, and let your attention be the ceiling.

Work with a deadline attached to money is second. Where being late costs more
than being expensive, use report-and-continue rather than a hard stop: the bot
says it passed its expected volume and keeps going, so you learn about it instead
of finding a half-done job.

The third matters most, and a usage screen cannot see it. The most expensive run
a bot ever performs is not the one that consumed the most usage. It is the run
that sent the wrong thing to the wrong person, posted from your account, or filed
a payment against bank details that arrived inside an invoice. Those cost
credibility and rework, neither of which appears on a billing page.

Which is why the counterpart to this page is
[the complete reference on when bots go wrong](/blog/when-bots-go-wrong), and why
the cheapest insurance here is a capability you never granted. A bot that cannot
send cannot produce that run at any price, which is the case for
[building a bot that drafts but never sends](/blog/bot-that-never-sends) first
and [connecting the minimum, not the maximum](/blog/least-privilege-bots) after.

**Keep reading:** [The Starter Roster](/blog/grok-bot-starter-roster), [Grok Bot vs Zapier](/blog/grok-bot-vs-zapier), [Running a Team of Bots Without Chaos](/blog/multi-bot-teams).

## Frequently Asked Questions

### How much does an AI agent cost per month?

Access and usage are separate numbers. For Grok Bot, the cheapest published paid
route as of 25 August 2026 is Cursor Pro+ at 60 USD a month for an individual or
Cursor Teams Standard at 40 USD per user for a team, with SuperGrok Plus at 100
USD a month as the x.ai route, plus a one-time trial. Usage on top of that is not
predictable from any published figure, because it depends on how often your bots
run and how much each run reads. Measure your own per-run consumption over three
days and multiply by the cadence you want.

### Does Grok Bot have a spend cap or a budget limit?

No. The documentation states directly that there is no Grok Bot specific spend
cap yet. Eligible subscriptions include a weekly usage allowance, its size is not
published anywhere, and usage beyond it is billed on demand from model and token
cost. Because no setting stops a runaway for you, the only ceiling is the one you
write into each charter: a stated cadence, numeric limits on tool calls and page
loads, an input ceiling for long documents, a hard retry limit, and a boundary
forbidding the bot from initiating spend.

### What makes one AI agent run cost more than another?

Run frequency multiplies everything else, so the schedule decides more than any
other setting: a five minute clock is 288 runs a day against one. After that it
is the material pulled in per run, since one long transcript can outweigh a week
of ordinary work. Then tool calls, because every source checked is separate work.
Browser workflows cost more than API calls for the same answer, because each step
must be loaded and observed. Retries are the only driver with no natural ceiling,
which is why an explicit attempt limit matters most.

### How do I know whether a bot is worth what it costs?

Count decisions changed rather than runs completed, over four weeks. A changed
decision is a message you sent, a call you made, a task you dropped, or a price
you went back to check. Reading the output and thinking nothing needs doing does
not count. A bot that changed a decision most days it ran is earning its usage.
One that changed three to eight decisions has real value at the wrong cadence, so
halve the frequency. One that changed nothing while producing correct output is
working and worthless, and tuning cannot fix a job you do not need.
`,
};
