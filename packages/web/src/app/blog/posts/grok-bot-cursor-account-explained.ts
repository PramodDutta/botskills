import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Needs a Cursor Account: The Cheapest Is $60 a Month',
  description:
    'Yes, Grok Bot requires an eligible plan. Cursor Pro+ at 60 dollars a month is the cheapest door. Cursor Pro at 20 does not qualify. Every plan priced and dated.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Grok Bot Needs a Cursor Account: The Cheapest Is $60 a Month

You went to try Grok Bot and it asked you to sign in with Cursor, a code
editor you may have never opened. Then you checked a guide, saw a number like
$200 a month, and closed the tab.

Both of those reactions are based on stale information. The sign-in is not a
mistake, the ownership story behind it is almost always told backwards, and
the cheapest paid route is now less than half of what most published guides
quote. Eligibility widened on 21 August 2026
([xAI announcement](https://x.ai/news/grok-bot-more-plans)), which means
anything written before that date describes a product that no longer exists at
that price.

Here is the accurate version, with every number linked to a primary source and
dated, because this will move again.

## The short answer on getting access

Grok Bot's sign-in and billing run through Cursor because Cursor and Grok are
now owned by the same company. Your access is checked against a subscription,
either a Cursor plan or a SuperGrok plan, and the Cursor account is the
identity layer that check runs through. You do not need to write code, use the
editor, or care about it beyond having the account.

The eligible plans, as listed in the
[Grok Bot FAQ](https://docs.x.ai/grok-bot/faq), are SuperGrok Plus, SuperGrok
Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams on both Standard and
Premium. There is also a one-time trial path for individuals
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

## The corporate chain, in the right order

Nearly every explanation of this gets the direction of the acquisition wrong,
usually as "xAI bought Cursor". That is not what happened, and the correct
version explains the billing setup much better.

1. SpaceX acquired xAI. Announced 2 February 2026
   ([x.ai news](https://x.ai/news)).
2. SpaceX acquired Anysphere, the company behind Cursor. The deal closed on
   14 August 2026 ([Cursor's own announcement](https://cursor.com/blog/joining-spacex)).
3. The combined organisation now trades as SpaceXAI.

So xAI and Anysphere are siblings under one parent, not parent and child. That
is why the plumbing is shared rather than one product being bolted onto the
other, and it is why a SuperGrok subscription and a Cursor subscription are
both valid keys to the same door.

The timing is tight enough to be worth noting: Grok Bot launched in beta on
11 August 2026 ([introducing Grok Bot](https://x.ai/news/introducing-grok-bot)),
three days before the Anysphere acquisition closed, and eligibility widened ten
days after that. A product changing its access rules twice in a fortnight is
the reason to check dates on everything you read about it, including this page.

## Every plan that includes Grok Bot

Prices below were checked on 25 August 2026 against
[cursor.com/pricing](https://cursor.com/pricing),
[Cursor's team pricing docs](https://cursor.com/docs/account/pricing), and
[x.ai/pricing](https://x.ai/pricing). Eligibility comes from the
[Grok Bot FAQ](https://docs.x.ai/grok-bot/faq).

| Plan | Price (25 Aug 2026) | Grok Bot included |
|---|---|---|
| Cursor Pro+ | $60/month | Yes. Cheapest paid path for an individual |
| Cursor Ultra | $200/month | Yes |
| Cursor Teams Standard | $40/user/month | Yes |
| Cursor Teams Premium | $120/user/month | Yes |
| SuperGrok Plus | $100/month | Yes |
| SuperGrok Heavy | Not published at time of writing | Yes, on the eligibility list |
| Cursor Pro | $20/month | No |
| Cursor Hobby | Free | No |
| SuperGrok | $30/month | No |
| Cursor Start (India only) | Rs 649/month | Not named on the eligibility list |

One nuance the table alone will mislead you on. Teams Standard lists at $40
per user per month, which is lower per seat than Pro+ at $60, but it is a team
plan and the per-seat figure is a team economics fact rather than an individual
price. For one person buying access today, Pro+ at $60 is the cheapest paid
route. For a group of three or more who all want bots, Teams Standard is the
cheaper structure and covers everyone at once.

A second nuance: SuperGrok Heavy is on the eligibility list, and its price is
not published anywhere primary at the time of writing. You will find confident
figures for it in circulating articles. Do not plan a budget on those, and do
not repeat them. Check [x.ai/pricing](https://x.ai/pricing) directly.

## What an eligible tier buys beyond the door being open

The natural next question is what a $200 plan gets you that a $60 plan does
not, in bot terms. The honest answer is that for Grok Bot itself, the
differences people assume exist mostly do not, and the ones that do exist are
not published as numbers.

Editor-side benefits do differ between Cursor tiers, and this page is not going
to quote them, because they are not the subject and they move faster than an
article can. What follows is the Grok Bot side, where every row is documented.

| What buyers expect to vary by tier | Does it? | The documented position |
|---|---|---|
| Which model your bots run | No | "Grok Bot has no model picker, for members or admins. We do not plan to allow admin or user choice." Fixed set per surface with automatic failover |
| A spend cap or budget limit | No | "There is no Grok Bot-specific spend cap yet" |
| How much work is included | Yes, but no figure is published | Subscriptions include a weekly usage allowance; overflow is on-demand, billed from model and token cost |
| Isolation between your bots | No | One persistent cloud computer per account, one screen per bot, cookies and credentials shared |
| Which devices you can use | No | macOS on Apple silicon and Intel, Windows on x64 and Arm64, iPhone on iOS 18+. No Linux desktop, Android, or iPad |
| An audit trail of what a bot did | No | An audit view of Bot actions does not exist yet, on any plan |
| Team control over local execution | Not yet | Documented as coming: Never, Ask every time, or Always, where members may choose stricter but not looser |
| An admin kill switch | Not yet | Documented as coming: Kill deletes the VM, durable storage is kept |

Two more facts belong in the same picture. Privacy Mode (Legacy) blocks Grok
Bot entirely, which is a setting rather than a plan, so no upgrade fixes it.
And the machine your bots run on is a managed Linux VM where the bot runs as a
non-root user, with static egress IPs, which matters because some services
flag datacenter IP addresses and will challenge a bot that a human would sail
past.

What genuinely differs, then, is seats and the administrative surface around
them, plus whatever allowance each plan carries. The rest of the list is the
same product on every tier. If you are choosing between Pro+ and Ultra purely
to get a better bot, you are choosing on a difference that is not documented to
exist.

## Why the licensing runs through Cursor at all

The shared-owner fact explains that it is possible. It does not explain why
they built it this way, and the why is useful because it tells you what the
Cursor account actually is.

Grok Bot needs three things before it can run anything for you: an identity,
an entitlement check against that identity, and a billing relationship for
work beyond the included allowance. Cursor already operated all three at scale
for a paying subscriber base. Building a second one inside xAI would have meant
two identity systems for one parent company, three days before the acquisition
that made them siblings even closed.

There is a documented detail that shows this is an architectural choice rather
than a checkout convenience. Hosted MCP sign-in tokens stay with Cursor's
backend and are never stored on the computer your bots use. The credentials for
hosted integrations live on the account side, deliberately kept off the shared
machine. That is a trust boundary decision, and it puts Cursor's backend on the
authoritative side of it.

Two more behaviours only make sense if one system can see both entitlements at
once. The trial is documented as one-time for an individual, which requires a
durable identity rather than a fresh email address. And when you hold both a
Cursor and a SuperGrok subscription, Grok Bot uses whichever has more usage,
which requires a single place that can read both balances and choose.

The practical takeaway is small but worth stating plainly: your Cursor account
is an entitlement record, not a product you have to adopt. You never have to
open the editor. Treat it the way you treat an app store account for a piece of
software you bought once.

## The two plans that trip almost everyone

**Cursor Pro at $20 a month does not include Grok Bot.** This is the single
most common wrong assumption, because Pro is the tier most people already know
and the name sounds like the main paid plan. The included tier is Pro+, one
step above. If you are already paying $20 and wondering why the bot will not
activate, this is why, and the fix is a $40 upgrade rather than a new
subscription.

**SuperGrok at $30 a month does not include Grok Bot.** SuperGrok Plus at $100
does. Again, the plan people already hold is one rung below the one that
qualifies. Two products, same trap, and it catches people in both directions.

Notice the pattern before you buy: in both product lines, the entry paid tier
is excluded and the next tier up is included. If you are choosing fresh rather
than upgrading, compare $60 for Cursor Pro+ against $100 for SuperGrok Plus and
pick on the other benefits, because for Grok Bot access alone the Cursor side
is currently the cheaper door.

## When the bot will not start, and which fact explains it

Most access problems are one of seven things, and only two of them are fixed by
spending money. Find your symptom before you upgrade anything.

| Symptom | The fact behind it | What actually fixes it |
|---|---|---|
| Sign-in works, the bot never activates, you pay $20 | Cursor Pro does not include Grok Bot | Upgrade to Pro+ at $60 |
| Same, and you pay $30 on the xAI side | SuperGrok does not include it; Plus at $100 does | Upgrade to Plus, or take the Cursor door at $60 |
| Nothing appears at all across a whole organisation | Privacy Mode (Legacy) blocks Grok Bot entirely | An admin changes the setting. No plan upgrade fixes this |
| There is no desktop app for your machine | There is no Linux desktop app, and the docs say so directly | Use macOS or Windows. A subscription buys nothing usable on Linux desktop |
| Nothing on your tablet | There is no iPad app; iPhone needs iOS 18 or later | iPhone or desktop only |
| A site challenges the bot that never challenges you | Static egress IPs, and some services flag datacenter addresses | Hand the bot the screen at the challenge. Do not build a workaround |
| You used the trial and want another | The trial is documented as one-time for an individual | A paid tier is the only remaining path |

The third row is the one that wastes the most money, because it looks exactly
like an entitlement problem. Someone upgrades a seat, nothing changes, they
upgrade the whole team, still nothing. Check the Privacy Mode setting before
you touch a plan.

## The trial, and why it is worth planning

A one-time trial is documented as an eligibility path for individuals
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
One time is the operative phrase. It is not a monthly free tier you can dip
into, so burning it on an evening of poking at the interface is a waste.

Spend it on a real job with a real outcome. Pick one workflow you already do
by hand every week, write the charter before you start the trial, connect the
minimum number of services it needs, and see whether the output is something
you would have shipped. That answers the purchase question properly. Watching
a bot open a browser does not.

Have the charter written before the clock starts. The setup, the first run, and
the first round of corrections are the part that tells you whether the job is
delegable, and you want all three inside the window rather than one of them.
[The first week plan](/blog/grok-bot-first-week) is a day-by-day version of
exactly that, and it fits a trial better than it fits a subscription.

## Why every guide you read quotes the wrong number

If an article tells you the minimum cost of Grok Bot access is a triple digit
monthly figure, it was written between 11 and 21 August 2026, when the
eligibility list was narrower. Those pieces were correct on publication and
have not been updated. They are also the pieces ranking highest, because they
were first.

Some of them also quote a specific price for SuperGrok Heavy. No such figure is
published on any primary source at the time of writing, which is why you will
not find one on this page either.

The correction is one line: as of 21 August 2026, eligibility includes
SuperGrok Plus, Cursor Pro+, and all Cursor Teams plans
([announcement](https://x.ai/news/grok-bot-more-plans)), which puts the entry
price at $60 rather than triple digits. If you were priced out three weeks ago,
you are not priced out now.

## If you already pay for both

There is a documented rule for the dual subscription case, and it is not the
one people assume. With both a Cursor subscription and a SuperGrok
subscription, Grok Bot draws on whichever has more usage available
([FAQ](https://docs.x.ai/grok-bot/faq)). It picks one, rather than pooling both.

So holding both plans is not a way to double your capacity for Grok Bot, and
it is not a reason to keep a subscription you were otherwise going to cancel.
If you hold both for other reasons, fine. If you were holding the second one
purely as bot headroom, that reasoning does not hold up.

This is the sort of quiet duplicate that a
[Subscription Pruner](/bots/subscription-pruner) is built to surface, and its
boundary is the reason you can point it at a billing inbox at all: it never
cancels or unsubscribes anything you have not individually approved. If you
want the reasoning before the action, a
[Subscription Cancellation Advisor](/bots/subscription-cancellation-advisor)
does the same analysis and never cancels anything without your explicit
approval of that specific item.

## What the subscription buys, and what it does not cap

Two facts belong together here.

Subscriptions include a weekly usage allowance, and work beyond that allowance
becomes on-demand billing based on the model and token cost of what actually
ran ([FAQ](https://docs.x.ai/grok-bot/faq)). Separately, there is no Grok Bot
specific spend cap yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

Put plainly: the plan sets an allowance, not a ceiling. Nothing in the product
stops a badly scoped bot from running past the allowance and billing you for
the overflow. Model choice is not a lever either, since the docs state there is
no model picker for members or admins and no plan to add one.

Which means your cost control is the charter and the schedule, not a setting.
That is a boundary problem, so write it as a boundary:

\`\`\`text
// SCOPE CEILING
Do at most one pass per run. Read at most 50 items. If the job is bigger than
that, stop and tell me what you did not cover rather than continuing.

// NO OPEN LOOPS
Never re-run yourself, never schedule follow-up work, and never start a task
because a previous run suggested it. I decide what runs next.

// CHEAP FAILURE
If a page will not load, a login is required, or a result looks wrong, stop
after one retry and report. Do not explore alternatives, do not search for
another route, do not keep trying.

// WHERE YOU STOP
Never send, post, delete, or spend. Everything you produce is a draft that
waits for me. If finishing the task would require crossing that line, failing
the task is the correct outcome.
\`\`\`

The first three blocks exist purely because there is no spend cap. The last one
is there for every other reason. A bot with a scope ceiling produces a
predictable bill, and a predictable bill is what lets you leave it running.
More on how usage actually accumulates is in
[the Grok Bot cost breakdown](/blog/grok-bot-cost), and a
[Personal CFO](/bots/personal-cfo) is a reasonable second pair of eyes on the
statement, given it never trades or moves money and only makes
recommendations.

## What to check before your renewal date

The renewal mechanics of the entitlement itself are not documented on any
primary source at the time of writing, so treat anything confident you read
about them, including guesses, as unverified. What you can control is the
review you do before the date, and there are five things worth checking.

Re-read the eligibility list. It moved twice in the ten days around launch, on
11 and 21 August 2026. A list with that recent a history of change is not a
list you should assume is the same one you bought against.

Check the tier you are actually on, not the one you remember buying. If you
upgraded from Pro to Pro+ for the bot, a downgrade back to Pro is what removes
access, and downgrades are easy to make absent-mindedly during a cost review.

Do not treat a lapse as a reset. The trial is documented as one-time, so
cancelling and resubscribing later does not restore a trial you already used.

Drop the plan that is not earning its place. If you hold both a Cursor and a
SuperGrok subscription, the second one is not extra bot headroom, because Grok
Bot uses whichever has more usage rather than pooling them. Renewal is the
natural moment to act on that.

Reconcile the actual statements rather than the quoted price. The subscription
is an allowance and overflow bills on demand, so the renewal figure is not your
total cost for the period. Nothing in the product will attribute that overflow
to a particular bot, because there is no audit view of bot actions yet, which
means your own record of what ran is the only breakdown that exists. A
[Bookkeeping Auditor](/bots/bookkeeping-auditor) is a sensible thing to point
at the statements, since it flags discrepancies with evidence and never edits
the live books.

## The honest case for waiting a month

The strongest argument against buying access today is not the price. It is that
you would be buying into a beta whose governance features are documented as
coming rather than shipped.

Grok Bot launched in beta on 11 August 2026. There is no audit view of bot
actions. There is no Grok Bot specific spend cap, and no allowance figure is
published, so you cannot model your cost before you spend it. The team-level
ceiling on local execution, with Never, Ask every time, and Always, is
described as coming. So is the admin Kill that deletes the VM while keeping
durable storage. If either of those is load-bearing for your organisation, you
are buying a promise rather than a feature.

The counter-argument is narrower than enthusiasts claim and stronger than
sceptics allow. If you are an individual whose worst case is a wasted draft,
waiting costs you a month of charter corrections, and charter corrections are
the thing that compounds. The product improving does not improve your
instructions. Those only improve by running.

So the split is clean. If you need an audit trail or a hard spending ceiling for
compliance reasons, wait, and check the two coming features rather than the
price. If you are one person testing whether a recurring job is delegable, the
one-time trial exists precisely so you can answer that without the
subscription, and it is the correct move.

## Picking your path

Match the path to your situation rather than to the headline number, then check
the last column before you pay anything.

| You are | Paying today | Path | Cost | The reason |
|---|---|---|---|---|
| One person on Cursor Pro | $20/month | Upgrade to Pro+ | $60/month | Cheapest paid route, one click, no new account |
| One person on SuperGrok | $30/month | Pro+ via Cursor, or Plus via xAI | $60 or $100/month | Choose on the other benefits; for bot access alone Cursor is the cheaper door |
| One person paying nothing | Nothing | One-time trial first, then decide | Free, then $60/month | The trial answers the purchase question, and only answers it once |
| Already wanting Ultra for its own reasons | Any | Cursor Ultra | $200/month | Buy it for what else it gives you. It is not documented to give a better bot |
| A team of three or more | Mixed | Cursor Teams Standard | $40/user/month | Covers everyone and ends the per-person upgrade conversation |
| A team wanting more admin surface | Mixed | Cursor Teams Premium | $120/user/month | Confirm what you need exists first: no audit view or spend cap yet, on any tier |
| On a Linux desktop only | Any | No path today | Not applicable | There is no Linux desktop app. The subscription would buy nothing you can run |
| In an org using Privacy Mode (Legacy) | Any | No path until the setting changes | Not applicable | It blocks Grok Bot entirely, regardless of plan |

Two rows in that table are refusals, and they are the ones worth reading first,
because both describe people who would otherwise pay and get nothing.

Whichever row you are, read the two pricing pages before you commit. This
article is dated 25 August 2026, the eligibility list changed twice in the
fortnight before it, and the sources linked throughout are the only versions
that are current by definition. If you are building a whole operation on top of
this, [the one-person company guide](/blog/one-person-company-grok-bot) covers
what that looks like once the billing question is settled.

**Keep reading:** [Grok Bot Free Trial](/blog/grok-bot-free-trial), [Self-Describing CLIs](/blog/grok-bot-whop-cli-commerce), [Grok Bot vs OpenAI Computer Use](/blog/grok-bot-vs-openai-operator).

This sits inside a wider guide: [What AI Bots Actually Cost](/blog/what-ai-bots-cost) covers the whole territory.

## Frequently Asked Questions

### Why does Grok Bot ask me to sign in with Cursor?

Because Cursor and Grok now share an owner. SpaceX acquired xAI, announced in
February 2026, and then acquired Anysphere, the company behind Cursor, in a
deal that closed on 14 August 2026. The two are sibling companies under one
parent rather than one owning the other, which is why sign-in and billing run
through shared plumbing. You do not need to use the Cursor editor or write any
code. The account exists so that your subscription, whether Cursor or
SuperGrok, can be checked for Grok Bot eligibility.

### Does Cursor Pro at $20 a month include Grok Bot?

No. Cursor Pro at $20 per month does not include Grok Bot access. The lowest
Cursor tier that does is Pro+ at $60 per month, with Ultra at $200 and both
Cursor Teams tiers also included. This catches a lot of people because Pro
sounds like the main paid plan, and the qualifying tier is one step above it.
The same trap exists on the xAI side, where SuperGrok at $30 does not include
Grok Bot but SuperGrok Plus at $100 does. Prices checked 25 August 2026.

### What is the cheapest way to get Grok Bot access?

For an individual paying today, Cursor Pro+ at $60 per month is the cheapest
paid path, checked on 25 August 2026. There is also a documented one-time trial
for individuals, which is the cheapest route of all but cannot be repeated, so
it is worth saving for a real workflow test rather than a browse. Teams of
three or more should compare Cursor Teams Standard at $40 per user per month,
which is lower per seat and covers the whole group under one plan.

### If I have both a Cursor and a SuperGrok subscription, which one is used?

Grok Bot uses whichever of the two has more usage available, according to the
official FAQ. It selects one subscription rather than pooling the capacity of
both, so holding two plans does not double your headroom for bot work. If you
subscribed to the second plan specifically to get more Grok Bot capacity, that
reasoning does not hold. Keep both only if each earns its place on its own
merits, and remember that the plan sets a weekly allowance rather than a spend
ceiling, since no Grok Bot specific spend cap exists yet.
`,
};
