import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Build a Grok Bot That Fills Your Amazon Cart and Stops Before Checkout',
  description:
    'A grok bot amazon cart build that reads Buy Again, price-checks every line against the last paid date, and stops at the cart so you pay for it yourself.',
  date: '2026-08-26',
  category: 'Tutorial',
  content: `
# Build a Grok Bot That Fills Your Amazon Cart and Stops Before Checkout

Buy Again is a ranked advertisement wearing the costume of a shopping list. It
is built from everything you ever ordered, weighted toward what the retailer
would like you to order next, and it shows you no purchase dates, no unit
prices, and no signal about whether a thing is actually running out. So the
household restock happens the way it always happens: somebody opens the app on
a Sunday, scrolls, taps whatever looks familiar, and pays for four items
already sitting in the cupboard and none of the two that ran out on Thursday.

The job worth handing to a bot is the reconstruction, not the purchase. Reading
eight weeks of order history, working out which items repeat on a rhythm,
checking what each one cost last time, and assembling that into a cart is
twenty minutes of dull cross-referencing. Deciding to spend the money takes
four seconds and belongs to you.

That split is the entire build. The
[Amazon cart builder](/bots/amazon-cart-builder) in the catalog states it as a
hard boundary: it never places the order, never pays, and never types a card
number, a one time passcode, or a second factor. What follows is how to run
that bot against a real household account without it becoming the thing that
spends your money while you are asleep.

## Stop the bot on the cart page, never on the thank-you page

A stop line written as an intention is not a stop line. "Do not overspend" is
an intention. "Do not open checkout" is a page you can name, screenshot, and
check afterwards.

The cart page is the right artifact to stop on for a reason that has nothing to
do with politeness. A filled cart is fully reversible, item by item, by anyone
in the household, at any time, with no clock attached. A placed order is a
charge, a shipment, a return window, and in some categories a restocking fee.
Approval controls a proposed action; it does not reverse work already
completed. Once the order exists, your review is a complaint rather than a
decision.

That asymmetry is worth putting in a table before you write a single line of
charter, because the tempting middle options are the ones that look
responsible and are not.

| Where the bot stops | What you actually review | What can go wrong | Verdict |
|---|---|---|---|
| Paste-ready list, no cart touched | Item names, sizes, quantities, prices | You retype twelve lines by hand every week | Fine on a locked-down account, tedious |
| Cart filled, checkout never opened | The real cart, real prices, real totals | A line you did not want, removable in one tap | Recommended default |
| Checkout open, address and slot chosen | A pre-filled order one button from placed | A stray click places it; paid delivery slots and tips creep in | No. The reversible step is behind you |
| Order placed under a spending cap | A confirmation email | Every wrong line is now a return, and there is no product-level spend cap to lean on | No |

The fourth row deserves the flat refusal. There is no Grok Bot spend cap yet,
so a budget ceiling written into a charter is a sentence the bot is asked to
respect rather than a limit the platform enforces. A number in a prompt is not
a control.

## Treat Buy Again as evidence, not as a standing weekly order

Buy Again answers "what has this account purchased before". It does not answer
"what has run out". Those look similar on screen and diverge sharply once a bot
starts adding lines unattended.

Order history is the better input because every row carries a date. A date lets
you compute a gap, and a gap is the only thing in the whole dataset that
resembles consumption. The bot should read the last eight weeks of orders and
extract, for every line, the item name, the size or pack count, the quantity,
the price actually paid, and the order date. Buy Again then becomes a
cross-check for items the history window missed, not the source list.

Two categories need explicit exclusion, because both look exactly like staples
in the data. Gifts are one: anything flagged as a gift on the order, or shipped
to an address that is not yours, is somebody else's consumption. One-off
purchases are the other. A blender bought in March is not due in August, and no
amount of rhythm detection will save a bot that treats a single purchase as a
cycle of one.

| Pattern in the last eight weeks | What it suggests | What the bot should do |
|---|---|---|
| Three orders, 10 to 14 days apart | A staple on a rhythm, currently due | Add at the historical quantity |
| Two orders, 40 days apart | Possible staple, not enough evidence | List it, mark it as a suggestion, add nothing |
| One order, any date | A trial, a gift, or a whim | Leave it off entirely |
| Four orders, gap shrinking each time | Consumption rising, or someone else is also ordering it | Add, and say the gap is shrinking |
| Regular, then nothing for six weeks | Household dropped it, or bought it elsewhere | Ask before re-adding |
| Marked as a gift on the order | Not this household's consumption | Exclude, always |

The last two rows are where most naive restock bots embarrass themselves. A
thing you deliberately stopped buying looks identical to a thing you forgot to
reorder, and only you know which.

## Price-check every line against the last paid date and pack size

A cart built from history without a price check is a cart that quietly accepts
every increase since the last order. That is the most expensive failure in this
whole build, and it is invisible because the item name is correct.

Two comparisons matter. The first is the headline price against what you last
paid, with both dates named so you can see whether you are comparing against
three weeks ago or five months ago. Flag anything up more than fifteen percent.
The second comparison is unit price, because pack sizes shift. A bottle that
went from one litre to nine hundred millilitres at the same shelf price is an
eleven percent increase that no headline comparison will ever catch.

Here is what the output looks like on a real Sunday, with the numbers the bot
is required to show:

| Item | Qty | Last paid | Now | Change | Why it is on the list |
|---|---|---|---|---|---|
| Coffee beans 1kg | 1 | 18.40 on Aug 4 | 18.90 | up 2.7 percent | Bought Jul 21 and Aug 4, 14 day rhythm, due |
| Dishwasher tabs 60ct | 1 | 12.75 on Jul 28 | 15.20 | up 19.2 percent, flagged | Due, but check the 40ct listing at 9.10 |
| Olive oil 900ml | 1 | 9.80 on Jul 12 for 1L | 9.80 | pack down 10 percent, unit price up | Same price, smaller bottle, your call |
| Cat litter 12kg | 2 | 21.00 on Aug 11 | 21.00 | flat | Two orders 12 days apart, due Aug 25 |
| Protein bars 12pk | 0 | 24.00 on Jun 2 | 26.50 | up 10.4 percent | Single order in the window, not a staple |

Every price cites the page or history line it came from and the date it was
read. Without that, you cannot tell a genuine increase from a bot reading a
different variant of the same listing, which is a real and common mistake once
a product has six size options on one page.

## Put shopping on a dedicated login because bots share one computer

Here is the fact that reorders every decision on this page: all bots on a Grok
Bot account share one persistent cloud computer. The computer is assigned to
your user account, not to an individual bot. Each bot gets its own screen on
that machine, and the documentation is blunt that screens are separate work
surfaces, not separate security boundaries. Browser cookies, signed-in
sessions, files, and command-line credentials are shared across every bot you
run.

Read that with a retail login in mind. A signed-in shopping session with a
saved card and a saved address is not scoped to the bot that signed in. It is
account state on a shared managed Linux VM, reachable by the research bot, the
mail bot, and whatever you spin up next month after reading a thread. Deleting
the cart builder does not sign that session out.

So the shopping login should be a dedicated one. Not because a separate login
creates isolation between bots, it does not, but because it bounds what the
session can reach if any bot on the account goes wrong. A dedicated shopping
account holds the card you chose to expose and the order history you are happy
for a bot to read. The household primary account holds password resets, family
sharing, subscriptions, and every purchase anybody ever made.

One practical wrinkle: the VM uses static egress IPs, and some services flag
datacenter addresses. Expect a retailer to challenge a sign-in more often from
that machine than from your phone, which is exactly the moment the next section
becomes load bearing.

## Refuse OTP, cards, and second factors instead of "just finishing"

The dangerous instant in a shopping automation is not the moment the bot is
wrong. It is the moment the bot is right, one field short of done, and the page
asks for a code. Every instinct in a helpful agent points toward finishing.

The charter has to make that instant boring. Not "be careful with sensitive
data", which is advice, but a named list of prompts and a single response to all
of them: stop, say what the page asked, and hand it back.

| What the page asks for | What the bot does | What you do |
|---|---|---|
| Card number, CVV, or expiry | Stops, names the page it stopped on | Type it on your own device, if at all |
| One time passcode by SMS or app | Stops. Never asks you to read the code out | Finish the sign-in yourself |
| Passkey or second factor prompt | Stops, reports the challenge | Approve on your phone, then hand the session back |
| Address confirmation at checkout | Stops. This is checkout, which is off limits | Nothing. The bot should not be there |
| Paid delivery slot selection | Stops. Slot choice can add a charge | Pick it when you pay |
| Tip or driver gratuity | Stops. Never defaults to any amount | Decide at payment |
| Subscribe and save opt-in | Declines, then reports that the page offered it | Opt in manually if you want it |

Reading a code aloud to a bot deserves its own note, because it is the polite
version of handing over the account. A one time passcode read into a chat is a
credential in a transcript on a shared machine. The right answer is that the
bot never asks, so you are never in the position of deciding whether to type it.

## Build the restock list from repurchase gaps, not a default cadence

"Reorder the usual every Sunday" is the requirement people write and the
behaviour nobody wants. A fixed cadence buys coffee weekly whether or not
coffee ran out, and it buys nothing at all in the week your consumption
doubled.

Gaps are the better signal because they are measured rather than assumed. Take
the dates for one item, compute the intervals between orders, and compare the
median interval against the days elapsed since the last one. Due means elapsed
has reached roughly the median. Overdue means it passed it. Not yet means the
bot says so and adds nothing.

| Item | Order dates in window | Median gap | Days since last | Verdict |
|---|---|---|---|---|
| Coffee beans | Jul 7, Jul 21, Aug 4 | 14 days | 22 | Overdue, add |
| Cat litter | Jul 30, Aug 11 | 12 days | 15 | Due, add |
| Laundry liquid | Jun 28, Aug 9 | 42 days | 17 | Not yet, skip |
| Toothpaste | Jul 2 | none | 55 | No rhythm, mention only |

The valuable output of a gap-driven bot is sometimes an empty cart. If nothing
has reached its interval, the correct report is that nothing is due, plus the
earliest date a staple comes up next. A bot that invents a shop to look useful
is worse than no bot, because you stop reading its output and start rubber
stamping it.

## Hand substitutions to you as Needs your pick, never silent swaps

Listings vanish. Sizes get delisted. A seller goes out of stock and the page
helpfully suggests something adjacent. Every one of those is a decision, and
none of them are the bot's.

The rule is that a substitution is never performed, only proposed. When the
exact item from history is unavailable, the bot lists up to two named
alternatives with the size and the price, marks the row Needs your pick, and
moves on. Two, not five, because a list of five is a research report you will
not read, and one is a decision disguised as a suggestion.

What makes this work is preferring exact identity over search. The bot should
reorder from the exact product identifier or the exact title recorded in order
history, not from a fresh search for "coffee beans 1kg". Retail search is
personalised, sponsored, and unstable across sessions, so a search-based
reorder is a different product every few weeks with the same words on it.

Silent substitution also poisons the price check. If the bot swaps a 60 count
box for a 40 count box because the 60 went out of stock, the price comparison
against last paid is now nonsense, and the report says you saved money. Mark
the swap, break the comparison, and let the human resolve it.

## Paste a cart-builder charter that names Place order as the stop

Here is a charter to paste and adapt. It is written from the same spirit as the
catalog listing rather than copied from anywhere, and the last block is the
reason the first blocks are safe to run.

\`\`\`text
You are my Amazon Cart Builder for [shopping account email].

// WHEN
Run on [Sunday] at [09:00], in this chat only. One run per week.
If I have not read last week's output, say so and stop.

// WHAT YOU READ
1. The last 8 weeks of order history. For every line capture: item name,
   size or pack count, quantity, price paid, order date.
2. Buy Again, as a cross-check only, never as the source list.
Exclude anything marked as a gift, shipped to an address that is not
[home address], or appearing exactly once in the window.

// HOW YOU DECIDE
Compute the median gap between orders per item. Add an item only when days
since the last order has reached that median. Two orders is a suggestion,
not a staple. One order is nothing.
Price-check every line against the last price paid, naming both prices and
both dates. Flag any increase over 15 percent. Compare unit price too, and
call out pack-size changes that hide an increase.

// HOW YOU BUILD
Add lines to the cart ONLY if you can do it without opening checkout.
Use the exact product identifier or exact title from order history. Never
reorder from a fresh search.
If a listing is gone, name up to two alternatives with size and price and
mark the row: Needs your pick. Never substitute silently.
Decline subscribe and save. Report that the page offered it.

// WHAT YOU OUTPUT
A table of Item, Quantity, Last paid, Now, Change, Why it is on the list.
Then the Needs your pick block.
Then one line: cart estimate, labelled an estimate and not a charge.
Every price cites the page or history line and the date you read it.
If nothing is due, say nothing is due and give the earliest date a staple
comes up. Do not invent a shop to look useful.

// WHERE YOU STOP
Never click Place order. Never open checkout. Never enter a card number,
a one time passcode, or a second factor. If the page asks for any of
those, stop and tell me which page asked.
Never choose a delivery slot that costs money. Never add a tip.
Never buy anything not in the output you already showed me.
Never use [household primary account]. If the shopping login is signed
out, stop. Do not sign in as anyone else to be helpful.
\`\`\`

The last block is a required field on every botskills.sh listing for a reason.
A bot with no named stop is a bot whose limits are whatever the model felt like
that morning.

## Walk one Sunday restock from history to an unsent cart

Sunday, 09:00. The bot opens the shopping account, reads eight weeks of orders,
and finds forty-one lines across nine orders. It drops eleven as gifts or
one-offs and computes gaps on the remaining fourteen distinct items.

Four are due: coffee at 22 days against a 14 day median, cat litter at 15
against 12, dish tabs at 31 against 28, and kitchen roll at 19 against 18. Two
are close but not there, and the bot names them with dates rather than adding
them. Eight are nowhere near due.

It opens the cart and adds three of the four by exact identifier. The fourth,
dish tabs, comes back delisted in the 60 count size, so it lists the 40 count
at 9.10 and a different brand's 60 count at 13.40, marks the row Needs your
pick, and adds nothing. The coffee page offers subscribe and save at a lower
price; the bot declines it and says so in one line.

Then it stops. What lands in the chat is a five-row table, one Needs your pick
block, one estimate line reading "cart estimate 61.10, an estimate and not a
charge", and a note that dish tabs are up 19.2 percent against Jul 28.

You spend forty seconds: remove the kitchen roll because you bought some at the
supermarket, pick the 40 count tabs, and pay. On day thirty the difference is
visible in the gaps themselves. The medians have tightened because the bot's
own additions are now in the history, and the two-order suggestions have
resolved into staples or fallen off.

## Diagnose empty carts, wrong ASINs, and surprise subscribe-and-save

Shopping bots fail quietly, and the evidence is in the cart rather than in the
chat. These are the failures worth recognising on sight.

| What you notice | Cause | Fix |
|---|---|---|
| Cart is empty and the report says nothing is due | Working correctly, or the history window is too short to see a 6 week staple | Widen the window before you widen the bot's authority |
| A line is the right product in the wrong size | It reordered from a search result, or picked a different variant on a multi-size page | Require the exact identifier from order history, never a fresh search |
| Prices in the report do not match the cart | It read a variant price, or a coupon applied at cart level | Require every price to cite the page and the date it was read |
| A subscription appeared on the account | Subscribe and save was pre-selected on the product page | Charter must decline it explicitly and report that it was offered |
| Cart contains last week's items again | The bot's own additions were not counted, or it ran twice | One run per week, and treat unread output as a reason to stop |
| Sign-in challenge every single run | Static egress IPs on the VM get flagged as datacenter traffic | You complete the challenge, never the bot. Expect it, do not automate around it |
| An order was placed and nobody placed it | Checkout was reachable from where the bot was standing | Stop at the cart page, and audit sign-in state after every run |
| Report cites a price you cannot find | It read a third-party seller offer, not the default listing | Require the seller name in the citation |

The last row on a shared machine has no clean recovery. An audit view of bot
actions does not exist yet, so the report the bot posts in chat is the record.
That is an argument for making the report detailed enough to reconstruct the
run, and for reading it rather than skimming it.

## Answer the case for letting it click Place order inside a budget

The honest counter-argument: if you approve the cart anyway, the bot has saved
you twenty minutes of research and added a chore. Give it a fifty pound weekly
ceiling and a fixed staples list and you have removed the chore too. Amazon's
returns are generous, the amounts are small, and reviewing groceries is not a
good use of a human.

Part of that is right. The savings are in the reconstruction, and the review is
short. But three things break the budget-cap version specifically.

There is no platform-level spend cap. A ceiling in a charter is a sentence,
enforced by the same system that occasionally reorders the wrong pack size. A
spending limit that lives in the same place as the bug is not a limit.

The reversible step disappears. A cart is edited in one tap by anyone. An order
becomes a return, a label, a collection window, and for perishables a bin. The
correction cost goes from seconds to a Tuesday afternoon.

And the failure is correlated, not random. Wrong ASINs and pack-size confusion
do not hit one line, they hit the same product family for weeks until someone
looks. Four wrong orders discovered together is a different event from four
wrong cart lines caught individually.

Where the objection wins outright: a single consumable, one identifier, fixed
quantity, low value, non-perishable, on a dedicated card with a real limit set
by the bank rather than the prompt. Printer paper. Cat litter. That is a
standing subscription with extra steps, and you should probably use the
retailer's own subscription for it instead of a bot.

## Verify the cart with a check that fails if checkout opened

A check that cannot fail is not a check. Run these four after the first three
runs, then monthly, and treat any failure as a stop rather than a note.

Open order history on the shopping account and filter to the window the bot has
been running. The only orders present should be ones you remember placing. This
is the check that matters, and it is the one people skip because they assume
they would have noticed a charge.

Look at the cart before you touch it and count the lines against the report.
Same count, same sizes, same quantities. A cart with one more line than the
table is a bot acting outside its own output, which is a charter failure rather
than a shopping mistake.

Check the subscriptions and recurring deliveries page. Nothing should be there
that you did not add by hand. Subscribe and save is the quietest way a shopping
automation turns into a standing charge, and it is opt-in by a pre-checked box
on some listings.

Sign out of the shopping account on the VM and run the bot again. It should stop
and say the session is gone. If it instead signs in, or reaches a different
account, the boundary is decorative. Deleting a bot does not clear shared
sessions either, so this is the only way to see what the machine is actually
carrying.

## Leave grocery calendars to a different bot, not this one

Two bots in the catalog fill carts and stop, and picking the wrong one gives
you a worse version of both.

The [grocery autopilot](/bots/grocery-autopilot) is the weekly one. It takes
three inputs: a standing staples list, four weeks of order history, and the
next seven days of calendar, specifically travel days, guests, and headcount
changes. That calendar input is the whole point. Three nights away means no
fresh milk for those nights, and the bot states the subtraction out loud so you
can overrule it. It spans retailers, including a warehouse club, and it will
hand you a paste-ready list when a retailer has no cart it can fill without
payment.

The cart builder is the order-history one. No calendar, no staples list, no
prediction of headcount. It reads Buy Again and recent orders on a single
retailer and rebuilds what that account demonstrably buys. Narrower inputs,
narrower job, less to get wrong.

| You want | Use | Because |
|---|---|---|
| Weekly basket that knows you are away Thursday | Grocery autopilot | Calendar subtraction is an input, and it says the subtraction out loud |
| Restock from what this account actually reorders | Amazon cart builder | Order history and Buy Again, no forecasting layer |
| Multi-retailer basket including a warehouse club | Grocery autopilot | It is built to span retailers and fall back to a typed list |
| Fewest moving parts on a shared machine | Amazon cart builder | One retailer, one login, no calendar scope |
| Fresh food where perishability matters | Grocery autopilot | Perishables are exactly what calendar subtraction protects |

Running both is defensible if they are separate chats with separate remits and
you accept that neither is isolated from the other. Running both against the
same retailer is how you buy the same milk twice.

## Keep Amazon off the household primary account on this VM

The final placement decision is not about the bot. It is about which retail
identity lives on a machine that every bot on your subscription can reach.

The household primary account is the wrong one, and not for vague reasons. It
receives order confirmations that double as delivery-window notices for parcels
worth more than the groceries. It holds family sharing, gift card balances, and
media purchases. It is often the recovery address for something else. And it
carries the subscription tail that nobody audits, which is a separate job worth
doing before this one: the
[subscription audit playbook](/blog/grok-bot-to-subscription-audit) covers
finding those charges without giving any bot the ability to cancel them.

A dedicated shopping login is a smaller identity, not a second computer. It
does not isolate the cart builder from your mail bot, because nothing on this
platform does that; the documentation says plainly not to use separate bots as
a security boundary. What it does is bound the damage of the thing that will
eventually go wrong, and make the recovery step "revoke one login" instead of
"work out what a bot could reach from my main account".

If you share the machine with other people's bots, or you are running more than
two or three, read
[the shared computer security guide](/blog/grok-bot-shared-computer-security)
before you sign a retail session in at all. The cart boundary in this article
protects you from the bot. It does nothing about the session the bot leaves
behind.

**Keep reading:** [Run a Marketing Audit Bot That Scores Work and Never Publishes It](/blog/grok-bot-marketing-os), [Keep the Shared Grok Bot Computer Clean Without Deleting Anyone's Work](/blog/grok-bot-overwatch-shared-vm), [Grok Bot Plugins in 2026](/blog/grok-bot-plugins-2026).

## Frequently Asked Questions

### Can a Grok Bot actually place an Amazon order for me?

Technically it can drive a browser, which is why the boundary matters more than
the capability. The recommended setup stops at the cart page and never opens
checkout, because a filled cart is reversible in one tap and a placed order
becomes a return, a label, and a collection window. There is also no
product-level spending cap yet, so a budget written into a prompt is a request
rather than an enforced limit. Keep the purchase decision with a human and let
the bot do the twenty minutes of history reconstruction that precedes it.

### How does a cart-builder bot know what has run out?

It does not know, it infers, and the honest version says which. The bot reads
several weeks of order history, computes the gap between repeat purchases of
each item, and compares the median gap against days elapsed since the last
order. Three purchases on a ten to fourteen day rhythm is a staple that is
currently due. Two purchases is a suggestion. One purchase is nothing at all.
Buy Again is used only as a cross-check, because it lists what an account has
bought without any dates attached.

### Should the bot use my main Amazon account or a separate one?

Use a separate shopping login where you can. Every bot on a Grok Bot account
shares one persistent cloud computer, and browser cookies and signed-in
sessions are shared across all of them, so a retail session is account state
rather than bot state. A dedicated login bounds what that session can reach: the
card you chose to expose and the order history you are happy for a bot to read,
instead of family sharing, gift balances, and password resets. It is a smaller
identity, not isolation.

### What should the bot do when an item is out of stock?

Propose, never swap. The bot names up to two alternatives with the size and the
price, marks that row as needing your pick, and adds nothing to the cart. Two
options rather than five, because a longer list is a research report you will
not read. Silent substitution also breaks the price comparison: swapping a
sixty count box for a forty count box makes the against-last-paid figure
meaningless while the report still claims a saving. Keep the swap visible and
let the person paying resolve it.
`,
};
