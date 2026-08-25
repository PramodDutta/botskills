import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Personal Life: Groceries, Bills, and Travel',
  description:
    'Personal AI bots for groceries, bills, and travel that hold every order, plus the connection rules that keep your bank off a shared cloud computer.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Personal Life: Groceries, Bills, and Travel

## Start with the chores that happen at 22:40 on a Sunday

Nobody blocks out time for household admin, which is why it happens at 22:40 on
a Sunday and why it is the thing people most want to hand to a machine.

The actual list is unglamorous and completely predictable. The weekly shop,
which is the same forty items with six variations. The renewal that auto-charged
last Thursday for a thing you stopped using in March. The energy bill that went
up and you have not compared. The flight in eleven days where check-in opens at
some hour you will be asleep for. The appointment that needs rebooking. The
mailbox, where roughly nine tenths of what arrived is a marketing email you
half-invited two years ago and one tenth is a document you actually need in
April.

The shape of this work is different from a job. There is no colleague to catch
your mistakes and no separation between systems: the same browser session
reaches your groceries, your bank, your kids' school portal, and your medical
records. That is what makes personal automation both the easiest place to see a
result and the easiest place to do something you cannot walk back.

So the useful frame is not which chores can be automated. It is which chores can
be prepared, and what you are willing to connect in order to prepare them.

## Hand six chores to bots that all stop in the same place

All six are real catalog listings, all six stop before the irreversible step,
and the stopping is the reason they are safe to leave running.

| Job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Weekly shop | Building the basket from your staples, meal plan, and what ran out | Holds every order for approval until you explicitly lift the hold | [Grocery Autopilot](/bots/grocery-autopilot) |
| Recurring spend | Finding every subscription and matching it to whether you used it | Never cancels or unsubscribes anything you have not approved individually | [Subscription Pruner](/bots/subscription-pruner) |
| Cancellation research | How to actually cancel a thing, and what you lose by doing it | Never cancels a subscription without your explicit approval of it | [Subscription Cancellation Advisor](/bots/subscription-cancellation-advisor) |
| Money overview | Balances, upcoming bills, and where the month is drifting | Never trades or moves money, every change is a recommendation to you | [Personal CFO](/bots/personal-cfo) |
| Flights | Check-in windows, seat availability, and the boarding pass run | Stops for a human at every 2FA or captcha, never tries to get past one | [Flight Check-In](/bots/flight-check-in) |
| Mailbox | Sorting the pile, proposing unsubscribes, filing what matters | Holds every unsubscribe and filing action until you approve the full list | [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) |

Notice how similar the third column is across six unrelated chores. That is not
a coincidence or a limitation of the products. Personal admin is full of
one-way doors, and a bot that stops at every one of them is doing the only
thing that makes it worth having.

## Pick the first chore by how fast you can check the answer

The instinct is to start with whatever annoys you most. Start instead with what
you can grade in under a minute, because what kills personal automation is never
a bad bot. It is an output nobody reads.

| Chore | How often it runs | Time to check the output | Cost of a wrong run | Verdict |
|---|---|---|---|---|
| Weekly shop | 52 times a year | 30 seconds, you look at a basket | A wrong item, or a missing one | Start here |
| Mailbox sort | Daily or weekly | A minute, if it proposes rather than acts | Something filed where you will not look | Second |
| Recurring spend | Monthly | Five minutes against a statement | A charge you keep paying | Third |
| Bills view | Fortnightly | Two minutes | A missed date, which is a fee | Third |
| Flight check-in | A few times a year | Instant, you hold a boarding pass or you do not | A middle seat, or a missed window | Only after the others |
| Cancellation research | Rarely | Ten minutes of reading | A forfeited term, lost pricing | Last, never past the research |

That last column ranks by learning speed, not by value. Groceries win because
fifty-two runs a year against a thirty second check is the fastest feedback loop
in the house: you learn your charter is wrong in week two rather than month
five. Flights sit lower not because they are risky, the boundary handles that,
but because three runs a year teaches you nothing. Do the mailbox second, and
[the inbox triage walkthrough](/blog/grok-bot-to-inbox-triage) is the version to
copy when you get there.

## Groceries are the best first bot in your personal life

If you are building one, build this one, for three reasons that have nothing to
do with groceries being interesting.

It is genuinely weekly, so you get fifty-two chances a year to learn whether
your charter is right. The input is stable, because your staples change slowly
and the variation is mostly what ran out. And the output is checkable in about
thirty seconds: you look at a basket and you know immediately whether it is
wrong, without opening anything else. That last property is the one that
decides whether you are still using a bot in month four.

The job it actually does is not ordering. It is remembering. It notices that
you bought coffee three weeks ago and buy it every seventeen days, that the
thing you always forget is the one you have to reorder from a different shop,
and that the meal plan for Thursday needs something you do not have. It puts
that in a basket and stops.

The stop matters more than it sounds, because a grocery order is not a document.
Once it is placed there is a delivery slot held, a card charged, and, in some
services, substitutions decided by somebody in a warehouse. An approval prompt
gates the action that is about to happen and does not reverse an action already
completed, which is the whole reason the hold sits before the order rather than
after it.

## Bills: the flag is the product, not the payment

The instinct with bills is to have a bot pay them. Resist it, and not out of
timidity: the payment is the fast part. The slow, annoying, genuinely valuable
part is knowing what is coming, what changed, and what you are still paying for
by accident.

A useful money bot produces a one-page read: what is due in the next fourteen
days with amounts, what changed against the same bill last quarter and by how
much, what renewed since the last run, and the two or three charges you cannot
identify. That last block is the one that pays for the whole setup, because
unrecognised charges are how forgotten subscriptions survive for years. Working
through that properly is its own project, and
[the subscription audit walkthrough](/blog/grok-bot-to-subscription-audit) is
the version to follow.

Then it stops. It does not pay, transfer, trade, or cancel. Every one of those
moves money out of an account, and money that has left is a request rather than
an edit: you are now asking a company, a bank, or a person to send it back.

Cancellation deserves its own note because it looks reversible and is not.
Cancelling often forfeits a remaining term you already paid for, loses grandfathered
pricing you cannot get back, or deletes data on a schedule. That is why the
useful bot here is an advisor: it finds the cancellation path, tells you what
you lose and when the billing date is, and hands you the link.

## Travel is where a bot hits a wall on purpose

Travel automation is where people expect the most and where the sensible design
is the most restrictive, and it is worth understanding why the walls are where
they are.

Check-in is the good case. It is a known task at a known time, often an
inconvenient one, and the bot's job is to be awake at 03:00 so you do not have
to be. But airline and hotel sites are exactly the sites that challenge
automated access, and the runtime makes that more likely rather than less: bots
run with static egress IP addresses, and some services flag datacenter
addresses. Expect challenges as normal operation, not as a fault.

Which is why the catalog boundary on the check-in listing is the right one:
stop for a human at every 2FA prompt or captcha and never attempt to get past
one. That is not a temporary limitation waiting to be engineered around. A bot
that can complete your second factor has removed your second factor, for every
site, permanently, and the whole value of the second factor was that a remote
process could not produce it.

Booking is the other wall. Fares change while you look at them, most cheap ones
are non-refundable, names must match a passport exactly, and a wrong date is
often a total loss rather than an amendment. Have the bot do the research, which
is genuinely tedious: the options, the layover times, the change-fee rules, the
seat map, the total including bags. You press buy.

One practical note on the mobile side. As of writing, the iPhone app can pause
and resume a bot but editing, history, testing, and deleting need a desktop, and
there is no Android or iPad app. If your travel plan depends on fixing a bot
from a departure lounge, it does not survive contact with an actual trip.

## The risk here is what you connect, not what you automate

Every role has one risk that belongs to it. For personal life it is not that a
bot does something silly with your shopping list. It is that this is the
category where people connect the most sensitive accounts they own, with the
least ceremony, because it does not feel like work.

Look at what the six chores above want: a supermarket account with a saved card,
a bank or aggregator, an email account that is also the password-reset route for
everything else you own, a calendar that includes other people, an airline
account holding a passport number. In a work context, connecting that set would
involve a conversation. At home, on a Sunday, it is six clicks and no
conversation at all.

The second half of the risk is that half those accounts belong to people who are
not you. A family calendar has your partner's medical appointment in it. A
school portal has a child's records. An elderly parent's account is not yours to
connect, whatever the practical arrangement is. Consent is a real thing at home,
even though nobody sends you a policy about it.

| What you connect | What it exposes to every bot on the account | The safer substitute |
|---|---|---|
| Primary email | The password reset route for everything else you own | An alias that receives only what a bot needs |
| Bank or aggregator | Balances, counterparties, and a session that outlives the run | A downloaded statement in a folder the bot reads |
| Supermarket account with a saved card | A one-click purchase path | The same account, a low-limit card, the order held |
| Family calendar | Other people's appointments, medical ones included | Your own calendar, plus a pasted summary of shared events |
| Airline account | A passport number, a loyalty balance, a fare change button | The itinerary email, plus a sign-in you do yourself |
| Cloud drive | Every document you ever saved, not just this year's | One folder, shared explicitly with the bot's identity |
| A school or medical portal | Records that were never yours to delegate | Nothing. This one stays manual |

The middle column deliberately does not say "what the bot can see". It says
every bot, because that is the accurate version, and the next section explains
why.

## Treat one login as a login for every bot you will ever create

Here is the structural fact that turns the paragraph above into a rule, and it
is documented rather than inferred.

All bots on an account share one persistent cloud computer. The computer is
assigned to your user account and not to an individual bot. Each bot gets its
own screen on that machine, but browser cookies, signed-in sessions, files, and
command-line credentials are shared across all of them, and the documentation
says plainly that separate bots are not a security boundary. Deleting a bot does
not remove the shared files or the browser sessions it created.

Read that against the household list and the implication is direct. If you sign
your bank into that browser so the money bot can read balances, the grocery bot
and the mail bot and the one you build in a hurry in November are all running on
a machine where that session already exists. You are not granting access to a
bot. You are granting it to the account, permanently, until you deliberately
sign it out. As of writing there is also no audit view of bot actions, so you
cannot reconstruct afterwards what was reached.

Three rules follow, and they are cheap.

Anything financial gets a dedicated account. A separate email address, a
separate supermarket login, and a payment method with a low limit rather than
your main card. If the worst happens, the blast radius is a grocery budget.

Prefer exports to live logins. A money bot reading a downloaded statement gives
you ninety percent of the value with none of the standing access, and it is the
right default until a bot has earned more.

Connect four things, not fourteen. Before every new connection, ask whether you
would be comfortable with every bot you will ever create reaching it, because
that is the actual question. The
[shared computer security guide](/blog/grok-bot-shared-computer-security) walks
through what is shared and how to clear it.

## Write the weekly household run as one charter you can paste

One bot, one run, one basket you approve. This is the one to build first.

\`\`\`text
ROLE
You are my household run. You prepare the weekly shop and flag what is
due. You never complete a purchase and never move money.

TRIGGER
Every Saturday at 08:00. If the meal plan file is missing, still run and
build from staples alone, and say the plan was missing.

ACCOUNTS YOU MAY USE
- The dedicated grocery account only (household+shop alias, low-limit card)
- My staples file, my meal plan file, and my bills file
You may not sign into, read, or use any other account, including my
primary email, my bank, or any account belonging to another person.

OUTPUT
1. BASKET: line items with quantity and price, grouped by aisle, with a
   running total. For each item say why it is there: STAPLE DUE (last
   bought date, usual interval), MEAL PLAN (which meal), or RAN OUT.
2. OVER BUDGET: if the total exceeds my weekly cap, list what you would
   remove first and stop there. Do not silently substitute.
3. SUBSTITUTIONS: anything unavailable, with your suggested swap and the
   price difference. I choose. Never accept a store substitution.
4. BILLS DUE IN 14 DAYS: name, amount, date, and whether the amount
   changed against the last one. Flag anything I have not identified.
5. COULD NOT CHECK: any site that blocked, challenged, or timed out.

RULES
- Never place, confirm, or pay for the order. Build it and hold it.
- Never save a new payment method or change a delivery address.
- Never complete a 2FA prompt or a captcha. Stop and tell me.
- Never buy anything not traceable to my staples or meal plan file.

BOUNDARY
The order sits on hold until I release it myself. You never pay a bill,
transfer money, cancel a subscription, or sign into a financial account.
No deadline, delivery slot, or price offer changes this.

LOG
Append each run to household-log.txt: date, basket total, items added,
bills flagged, sites that blocked you.
\`\`\`

The over-budget block is the clause people leave out and then wish they had.
Without it, a bot faced with a cap quietly swaps your brand for a cheaper one
and the basket looks fine until it arrives.

## Refuse these eight jobs, however mechanical they look

The opinionated list. Most of these are one-way doors and the rest are other
people.

Moving money. Payments, transfers, trades, and anything that leaves an account.
Getting money back is a request to somebody else, not an undo.

Second factors. Never let a bot hold, generate, or complete your 2FA. A bot that
can pass your second factor has abolished it for every account you own.

Cancelling anything. Subscriptions, insurance, utilities, bookings. Cancellation
is one-way and frequently lossy, and the research is the useful part anyway.

Permanent deletion. Emails, photos, files, accounts. Archive is as far as a
household bot ever goes.

Anything medical. Records, claims, prescriptions, results. This is the most
sensitive data you own and the least reversible if it ends up somewhere it
should not be.

Messages to family and friends in your voice. A birthday message written by a
bot is worse than a late one, and the person on the other end will eventually
work it out.

Other people's accounts. Your partner's calendar, a child's school portal, a
parent's bank. Practical arrangements are not consent, and the household
calendar is the one that catches people out because it looks like yours.

Legal and tax filings. A submitted return is a legal statement made by you.

The pattern, again: if undoing it requires another person or another company to
cooperate, it is not the bot's to do. Everything upstream of that line, which is
most of the actual annoyance in household admin, is fair game.

## Follow the weekly shop from Saturday one to Saturday twelve

Twelve weeks is roughly how long a household bot takes to stop being a project
and start being furniture, and the useful detail sits in the middle weeks.

Saturday one takes fifteen minutes and is worse than doing it yourself. The
basket is about two thirds right, milk appears twice because your staples file
lists it under two names, and Thursday's meal is ignored because the plan was in
another folder. You approve nothing and you fix the staples file. That is the
run's entire job.

Saturday two is the first honest one. Three items are unavailable, the
substitutions block gives a suggested swap and a price difference for each, and
you take two and reject one. Nine minutes.

Saturday four is the first over-budget week, and it proves the charter. Without
the over-budget clause, a bot facing a cap quietly swaps your brand for a
cheaper one and the basket looks fine until it arrives. With it, you get two
named items it would remove, and a bot that stopped.

Saturday six is the first time it saves money rather than time. The bills block
flags a subscription that renewed higher, and one charge you cannot identify.
Neither is a grocery job, and both are why the bills block rides along in the
same run.

Saturday nine tests the boundary. The supermarket asks for a code sent to your
phone. The bot stops, names the screen it stopped on, and does nothing else.
That is the correct outcome, and reads as a success.

Saturday twelve takes thirty seconds. You skim, approve, and notice you have not
opened the staples file in a month because the log tells you what changed.
Across twelve weeks it paid for nothing, cancelled nothing, moved no money, and
completed no second factor.

## Read a household failure from the symptom, not from the bot

Personal bots fail quietly, and the quiet is the problem. Match the symptom to
the cause before you rewrite anything.

| Symptom | What actually happened | The fix |
|---|---|---|
| The basket has a brand you never buy | It hit your cap and substituted instead of stopping | Add the over-budget clause: name what it would remove, then stop |
| The run stopped happening and nothing told you | Nothing checks that the bot ran, only what it said when it did | Read the log's last date, not its last message. A run that stops writing is the alarm |
| It reported nothing to do in a week that had plenty | A site challenged it, and the report treats a block and a quiet week identically | Add a COULD NOT CHECK block naming the site, the screen and the time |
| Two bots flag the same subscription differently | Overlapping charters on one source | One bot owns the job. The second reads its output, never the source |
| Something you wanted got unsubscribed | You approved a list rather than its items | Approve items individually when the action is one-way |
| The same unidentified charge appears monthly | The bot is working, you have not resolved the item | Resolve it or list it as known, or the signal decays into noise |
| A financial session is still signed in weeks later | Sessions live on the shared computer, and deleting a bot does not clear them | Sign out in the browser deliberately, at the quarterly review |

The second row costs people the most, because it is the only failure that looks
exactly like success. Nothing arrives, nothing looks wrong, and the chore
quietly went back to being yours until you noticed in April.

## Answer the objection that the setup costs more than the chore

The strongest argument against all of this: the weekly shop takes twenty
minutes, the charter took an hour, you spent three Saturdays fixing it, and you
still read a basket every week. On a spreadsheet, that year does not obviously
come out ahead.

Concede the arithmetic on one chore, because it is often right. The return is
not the twenty minutes. It is that the shop stops being a thing you have to
remember, that the bills block surfaces money you were not looking for, and that
the log turns "did I deal with that?" into a lookup rather than a feeling. None
of those three appear in the time calculation.

Where the objection wins outright is worth naming plainly. Households with no
regular week, where the bot's assumptions never settle. Chores that run less
often than monthly, which rot between runs. Anyone without a desktop, since
editing, history, testing and deleting all need one, the iPhone app can only
pause and resume, and there is no Android or iPad app. And anyone who will not
read the output: an unread page is worse than no bot, because it costs usage and
buys a false sense that the chore is handled.

## Run a ten-minute connection review four times a year

Not a monitoring system. A calendar entry, four times a year, that takes about
as long as a coffee.

Open the connection list and read it out loud. For each one, answer a single
question: what would I lose if every bot on this account could reach it right
now, since that is the situation. Anything you hesitate on comes off. You can
always reconnect for one run.

Then sign out of anything financial in the shared browser rather than assuming a
session expired, because deleting the bot that signed in does not clear it. Then
open your household log and check two things: that the basket totals match what
you actually approved, and that no run quietly stopped happening. A bot that
failed silently in week two and never told you is the most common outcome for
personal automation, and the log is the only place it shows up.

Last, count your bots. Routines live on a single bot, capped at fifty per bot,
and the app keeps only the twenty most recent run records per routine, so
history is thinner than you think and deleting a bot takes its routines with it.
Four household bots you read every week are worth more than a dozen you set up
in an enthusiastic weekend and never open again.

**Keep reading:** [Grok Bot and Salesforce](/blog/grok-bot-salesforce), [Grok Bot and Shopify](/blog/grok-bot-shopify), [The Charter Template](/blog/grok-bot-starter-charter-template).

## Frequently Asked Questions

### What are personal AI bots actually good for?

The reliable wins are the weekly, predictable chores where the output is
checkable at a glance. Building the grocery basket from your staples and meal
plan, finding every recurring charge and matching it against whether you used
the thing, producing a fourteen-day view of bills with the ones that changed
flagged, researching flight options and running the check-in window, and sorting
a mailbox with proposed unsubscribes. In each case the bot prepares and holds,
and you take the last step, which is usually one click and takes seconds.

### Should I connect my bank account to a personal bot?

Prefer a downloaded statement over a live login, because that gives you most of
the value with none of the standing access. If you do connect something
financial, use a dedicated account and a payment method with a low limit rather
than your primary card. The reason is structural: all bots on an account share
one persistent cloud computer, and browser sessions and files are shared across
every bot on it, so a signed-in session is available to every bot you create
later, not just the one you built it for.

### Is it safe to let a bot check me in for a flight?

Yes, with the boundary that makes it safe: the bot stops at every 2FA prompt and
every captcha and never attempts to get past one. That is a feature rather than
a limitation, because a bot able to complete your second factor has removed the
protection for every account you own. Expect challenges to be common, since bots
run from static egress addresses and some services flag datacenter IPs. Let it
handle the timing, the seat map, and the research, and press the final button
yourself.

### How many personal bots should I run?

Four is a good ceiling for most households, and the constraint is your attention
rather than the platform. Every bot adds a weekly output that has to be read for
it to be worth anything, and an unread output is worse than none because it
costs usage and creates a false sense that the chore is handled. Routines also
live on a single bot, capped at fifty per bot with only the twenty most recent
runs kept, so a sprawling roster is not a tidy archive. Start with groceries,
add spend, then mail.
`,
};
