import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Do You Need a Cursor Account for Grok Bot? Yes, Pro at $20 Is Enough',
  description:
    'Grok Bot needs an eligible plan. Cursor Pro at $20 a month is the cheapest paid door, every paid Cursor plan qualifies, and the trial is one-time. Every plan explained.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Do You Need a Cursor Account for Grok Bot? Yes, Pro at $20 Is Enough

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
[Grok Bot FAQ](https://docs.x.ai/grok-bot/faq), are every paid individual
Cursor plan (Pro, Pro+, Ultra) and Cursor Teams, and you can link an
individual SuperGrok, SuperGrok Plus, or SuperGrok Heavy subscription. There
is also a one-time trial path for individuals
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
[x.ai/pricing](https://x.ai/pricing); the Cursor Pro, Pro+, and Ultra prices
were rechecked on 23 September 2026. Eligibility comes from the
[Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) and Cursor's
[Grok Bot plans page](https://cursor.com/help/grok-bot/plans), as of 23
September 2026.

| Plan | Price (checked 23 Sep 2026) | Grok Bot included |
|---|---|---|
| Cursor Pro | $20/month | Yes. Cheapest paid path for an individual |
| Cursor Pro+ | $60/month | Yes, with more weekly usage than Pro |
| Cursor Ultra | $200/month | Yes, with the highest weekly usage |
| Cursor Teams (self-serve) | Per seat, on Cursor's team pricing | Yes, every member, no Premium seat needed |
| Cursor Enterprise | Through your Cursor account team | Yes, once an admin enables it |
| SuperGrok (individual) | On x.ai/pricing | Yes, once linked from the Grok Bot plan screen |
| SuperGrok Plus | On x.ai/pricing | Yes, once linked |
| SuperGrok Heavy | Not published at time of writing | Yes, once linked |
| Cursor Hobby | Free | No |
| Cursor Start (India only) | Rs 649/month | Not named on the eligibility list |

One nuance the table alone will mislead you on. A self-serve Cursor Teams seat
is a team plan, and its per-seat figure is a team economics fact rather than an
individual price. For one person buying access today, Cursor Pro at $20 is the
cheapest paid route. For a group who all want bots, a self-serve Teams plan
covers everyone at once: every member has Grok Bot, with no Premium seat and no
admin request.

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
| A spend cap or budget limit | No | "A separate Grok Bot spend cap is not available today. Account-level on-demand controls apply" |
| How much work is included | Yes, but no figure is published | Subscriptions include a weekly usage allowance; overflow is on-demand, billed from model and token cost |
| Isolation between your bots | No | One persistent cloud computer per account, one screen per bot, cookies and credentials shared |
| Which devices you can use | No | macOS, Windows and Linux desktops; iPhone or Android phones; iPad on iPadOS 18 or later |
| An audit trail of what a bot did | Yes, Enterprise only | Enterprise has audit logs and Action Recording. Individual and self-serve Teams plans have no audit view of Bot actions |
| Team control over local execution | Yes, team plans only | Team admins set Always allow, Ask every time, or Never allow, and a member's stricter setting still applies |
| An admin kill switch | Yes, Enterprise only | Organization admins can terminate a member's computer; the durable disk is kept |

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

**Cursor Pro at $20 a month includes Grok Bot.** This is the single
most common wrong assumption now, in the other direction: Pro is the tier most
people already know, and launch-week guides said it was excluded. Every paid
Cursor plan includes the bot, and Pro+ and Ultra only add weekly usage. If you
are already paying $20 and the bot will not activate, the plan is not why:
check the account you signed in with, and Privacy Mode (Legacy).

**An individual SuperGrok subscription can be linked to grant Grok Bot usage.** So can
SuperGrok Plus, SuperGrok Heavy, and X Premium+. SuperGrok Lite cannot, and
SuperGrok Team or Enterprise cannot link. The trap is assuming the bot switches
on by itself: nothing happens until you link from the Grok Bot plan screen.

Notice the pattern before you buy: on the Cursor side every paid tier is
included, and on the xAI side every individual tier from SuperGrok up is
included once linked. If you are choosing fresh rather than upgrading, Cursor
Pro at $20 is the cheapest documented door, and a link never stacks with a
Cursor plan, so pick on the other benefits.

## When the bot will not start, and which fact explains it

Most access problems are one of seven things, and only one of them is fixed by
spending money. Find your symptom before you upgrade anything.

| Symptom | The fact behind it | What actually fixes it |
|---|---|---|
| Sign-in works, the bot never activates, you pay $20 | Cursor Pro includes Grok Bot, so the plan is not the cause | Check the signed-in account and Privacy Mode (Legacy) |
| Same, and you pay for SuperGrok on the xAI side | SuperGrok counts only once linked | Link it from the Grok Bot plan screen, once, to the right Cursor account |
| Nothing appears at all across a whole organisation | Privacy Mode (Legacy) blocks Grok Bot entirely | An admin changes the setting. No plan upgrade fixes this |
| There is no desktop app for your machine | Desktop apps are macOS, Windows, and Linux, which got one in September 2026 | Use one of those. A subscription buys no other desktop client |
| Nothing on your tablet | The iOS app runs on iPad only with iPadOS 18 or later | Update iPadOS, or use a phone or desktop |
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

The correction is two lines: as of 21 August 2026, eligibility included
SuperGrok Plus, Cursor Pro+, and all Cursor Teams plans
([announcement](https://x.ai/news/grok-bot-more-plans)), which put the entry
price at $60 rather than triple digits. By 23 September every paid Cursor plan
was included, which puts it at $20 on Cursor Pro. If you were priced out in
August, you are not priced out now.

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
specific spend cap, only the account-level On-demand monthly limit
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

Put plainly: the plan sets an allowance, not a ceiling. The only ceiling is
the On-demand monthly limit, and a bot already working can finish past it.
Nothing Grok Bot-specific stops a badly scoped bot from running past the
allowance and billing you for the overflow. Model choice is not a lever either, since the docs state there is
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

The first three blocks exist purely because there is no per-Bot spend cap. The last one
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
11 and 21 August 2026, and again by 23 September. A list with that recent a history of change is not a
list you should assume is the same one you bought against.

Check the tier you are actually on, not the one you remember buying. If you
upgraded from Pro to Pro+ for the bot, a downgrade back to Pro lowers weekly
usage rather than removing access; a drop to Hobby is what removes it, and
downgrades are easy to make absent-mindedly during a cost review.

Do not treat a lapse as a reset. The trial is documented as one-time, so
cancelling and resubscribing later does not restore a trial you already used.

Drop the plan that is not earning its place. If you hold both a Cursor and a
SuperGrok subscription, the second one is not extra bot headroom, because Grok
Bot uses whichever has more usage rather than pooling them. Renewal is the
natural moment to act on that.

Reconcile the actual statements rather than the quoted price. The subscription
is an allowance and overflow bills on demand, so the renewal figure is not your
total cost for the period. Nothing in the product will attribute that overflow
to a particular bot, because individual accounts have no audit view of bot actions, which
means your own record of what ran is the only breakdown that exists. A
[Bookkeeping Auditor](/bots/bookkeeping-auditor) is a sensible thing to point
at the statements, since it flags discrepancies with evidence and never edits
the live books.

## The honest case for waiting a month

The strongest argument against buying access today is not the price. It is that
you would be buying into a beta whose governance features are mostly
Enterprise only.

Grok Bot launched in beta on 11 August 2026. Individual accounts and self-serve
Teams have no audit view of bot actions; Enterprise has audit logs and Action
Recording. There is no Grok Bot specific spend cap, only the account-level
On-demand monthly limit, and no allowance figure is published, so you cannot
model your cost before you spend it. The team-level ceiling on local
execution, with Always allow, Ask every time, and Never allow, has shipped for
team admins. Terminating a member's computer while keeping the durable disk is
an Enterprise admin control. If either of those is load-bearing for your
organisation, check which plan carries it before you buy.

The counter-argument is narrower than enthusiasts claim and stronger than
sceptics allow. If you are an individual whose worst case is a wasted draft,
waiting costs you a month of charter corrections, and charter corrections are
the thing that compounds. The product improving does not improve your
instructions. Those only improve by running.

So the split is clean. If you need an audit trail for compliance reasons, that
means Enterprise, not a cheaper tier, and the On-demand monthly limit is not a
hard stop mid-run. If you are one person testing whether a recurring job is delegable, the
one-time trial exists precisely so you can answer that without the
subscription, and it is the correct move.

## Picking your path

Match the path to your situation rather than to the headline number, then check
the last column before you pay anything.

| You are | Paying today | Path | Cost | The reason |
|---|---|---|---|---|
| One person on Cursor Pro | $20/month | Stay on Pro | $20/month | Pro includes Grok Bot. Move to Pro+ only if weekly usage runs short |
| One person on SuperGrok | Your xAI plan | Link it from the Grok Bot plan screen | Nothing extra | The link is permanent and never stacks with a Cursor plan |
| One person paying nothing | Nothing | One-time trial first, then decide | Free, then $20/month | The trial answers the purchase question, and only answers it once |
| Already wanting Ultra for its own reasons | Any | Cursor Ultra | $200/month | Buy it for what else it gives you. It adds weekly usage, not a better bot |
| A team of three or more | Mixed | Cursor Teams (self-serve) | Per seat, on Cursor's team pricing | Every member has Grok Bot, with no Premium seat and no admin request |
| A team wanting more admin surface | Mixed | Cursor Enterprise | Through your account team | Audit logs and Action Recording are Enterprise only. No Grok Bot spend cap on any tier |
| On a Linux desktop only | Any | The Linux desktop app | Any eligible plan | There is a Linux desktop app as of September 2026 (.deb, .rpm or AppImage) |
| In an org using Privacy Mode (Legacy) | Any | No path until the setting changes | Not applicable | It blocks Grok Bot entirely, regardless of plan |

One row in that table is a refusal, and it is the one worth reading first,
because it describes people who would otherwise pay and get nothing.

Whichever row you are, read the two pricing pages before you commit. This
article is dated 25 August 2026 with plan facts rechecked on 23 September
2026, the eligibility list has changed more than once since launch, and the
sources linked throughout are the only versions that are current by definition. If you are building a whole operation on top of
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

Yes. Every paid individual Cursor plan includes Grok Bot, and Cursor Pro at
$20 per month is the cheapest of them, with Pro+ at $60 and Ultra at $200
adding weekly usage. Every member of a self-serve Cursor Teams plan has it too.
This catches a lot of people because launch-week guides said Pro was excluded,
and in August it was. On the xAI side, an individual SuperGrok, SuperGrok Plus, or SuperGrok Heavy subscription can be linked to grant Grok Bot usage. Checked 23 September 2026.

### What is the cheapest way to get Grok Bot access?

For an individual paying today, Cursor Pro at $20 per month is the cheapest
paid path, checked on 23 September 2026. There is also a documented one-time trial
for individuals, which is the cheapest route of all but cannot be repeated, so
it is worth saving for a real workflow test rather than a browse. Teams of
three or more should compare a self-serve Cursor Teams plan,
which covers the whole group under one plan with no Premium seat needed.

### If I have both a Cursor and a SuperGrok subscription, which one is used?

Grok Bot uses whichever of the two has more usage available, according to the
official FAQ. It selects one subscription rather than pooling the capacity of
both, so holding two plans does not double your headroom for bot work. If you
subscribed to the second plan specifically to get more Grok Bot capacity, that
reasoning does not hold. Keep both only if each earns its place on its own
merits, and remember that the plan sets a weekly allowance rather than a spend
ceiling, since no Grok Bot specific spend cap exists, only the account-level
On-demand monthly limit.
`,
};
