import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Shopify: Permissions and What to Automate',
  description:
    'A Grok Bot Shopify setup that reports and never touches order state: why fulfilment reaches a carrier, how inventory and price writes go live instantly, plus a charter.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Shopify: Permissions and What to Automate

You ask a bot to tidy up the pending orders. It marks eleven of them
fulfilled, because they had been sitting there for days and everything about
the admin screen suggests that is the housekeeping action.

Eleven customers now have a shipping confirmation in their inbox for a parcel
that does not exist. If your fulfilment partner or a shipping app subscribes to
the same event, some of those orders are being picked right now. Tomorrow you
will spend the morning apologising, and your fulfilment rate will be wrong for
the month.

Every tool in this series has an irreversible operation. Shopify is the one
where the irreversible operation leaves the building and touches physical
objects. A wrong record in a CRM is embarrassing. A wrong fulfilment is a box
in a van, or a customer waiting for a box that is not in one.

Whether a native Shopify connector exists for your Grok Bot account depends on
the account and the week, so confirm it in the app rather than in an article.
Without one, you have a hosted MCP server speaking to the Shopify API, or the
bot driving the Shopify admin in a browser after you sign in. Prefer the API
route if you have the choice, for a reason specific to this tool: an API
integration can be granted read scopes only, while a browser session inherits
whatever the logged-in staff account can do, which in most stores is
everything.

## A storefront has no staging copy

Developers get a habit from software that does not transfer here. There is no
branch, no preview deploy, and no review step between a change and the public.
When a price changes, it is the price. When a product is unpublished, the page
is gone and any link to it is dead. When inventory hits zero, the buy button
stops working for real customers who were mid-checkout.

Shopify has genuinely useful safety features, and they are worth using, but
notice what they cover. Draft orders are drafts. Unpublished products are
hidden. Scheduled publishing exists. None of those help with the three things
a bot is most likely to touch: order state, inventory levels, and price.

There is also no meaningful undo stack. Reverting a price means typing the old
price back in, which requires you to know the old price. Reverting a
publication state does not bring back the traffic that hit a dead page in the
meantime. This is why the safe Shopify bot is a reporting bot, and why the
argument for that shape is stronger here than anywhere else in the series.

## Marking an order fulfilled is a message to a customer and an instruction to a carrier

Order state changes are not database updates with a side effect. In a working
store they are the trigger for a small network of other systems, and the bot
sees none of that network.

A fulfilment event can notify the customer by email, may notify them again by
SMS depending on your apps, is broadcast to anything subscribed to order events,
and is often read by a third-party logistics provider or a shipping app as
authorisation to move a physical parcel. It also updates metrics your team looks
at and, in some setups, releases a payout condition.

The notification is worth being precise about, because it is a control rather
than an automatic consequence, and controls are what a bot sets without telling
you.
[Shopify documents](https://help.shopify.com/en/manual/fulfillment/fulfilling-orders/single-fulfillment)
a "Send a notification to the customer" option when you fulfil an order, and
notes that it is available only when you have the customer's email address. The
same page states that when you add a tracking number to an order that is already
fulfilled, the notification is on by default and you have to deselect it. So the
question is not whether fulfilment emails customers. It is which way a checkbox
was left by something that did not consider the question, and you will find out
from the replies.

Three consequences follow.

First, a wrong fulfilment cannot be taken back in any sense that matters. You can
cancel the fulfilment record, and Shopify's own instructions for doing so carry
the sentence that should end this debate: "Canceling a fulfillment in your
Shopify admin doesn't stop a fulfillment that's in progress." The same page adds
that a purchased shipping label has to be voided separately, and that a
fulfillment service has to be contacted directly. Cancelling is paperwork. The
parcel is already moving.

Second, this is exactly the situation Grok Bot approvals are and are not for.
An approval gates a proposed action before it runs, and the product
documentation states clearly that it does not reverse work already completed.
For an action whose first consequence is an email to a stranger, "before it
runs" is the only useful moment, and there is no second chance after.

Third, the same reasoning covers every other order state. Cancelling an order
emails the customer. Archiving changes your team's working queue. Editing an
order can change what someone was charged. A note is the only order operation
that is purely internal, and even then, check whether an app watches notes.

The pattern to copy is the one the catalog's
[grocery autopilot](/bots/grocery-autopilot) declares: it holds every order
for approval until a human explicitly lifts the hold. A bot may assemble the
order. A person releases it.

## Follow eleven orders from a tidy-up to a warehouse pick

The scenario at the top of this article deserves a timeline, because the damage
arrives in stages and each stage closes a door behind it.

**09:02.** The bot marks eleven ageing orders fulfilled. In the admin this looks
like eleven rows changing colour. Nothing warns anybody.

**09:02, one second later.** Eleven shipping confirmations leave, assuming the
notification control was left selected, which is the default state you inherit
when you did not think about it. Emails are not queued for review.

**09:04.** Your third-party logistics provider receives the order events and
begins picking. Nothing in this step involves you. It is doing exactly what you
integrated it to do.

**11:20.** The first customer replies asking where the tracking number is. You
find eleven fulfilled orders, none of which shipped, and you cancel the
fulfilments, at which point Shopify's own note applies: cancelling in the admin
does not stop a fulfilment already in progress, and the 3PL has to be contacted
directly. You start calling.

**Next morning.** Two parcels went out anyway. Three customers have opened
tickets, one has left a review. Your fulfilment rate for the month is wrong. Your
inventory is wrong by however many units were picked. Nothing here is
catastrophic and all of it is a day you did not have.

Now run the same morning with the reporting charter instead.

| | The bot fulfils | The bot reports |
|---|---|---|
| 09:02 | Eleven orders marked fulfilled | One line: eleven orders unfulfilled over 48 hours, with age and destination |
| Seconds later | Eleven customers emailed | You read the line in fifteen seconds |
| 09:04 | The 3PL starts picking | You look at why they aged: a supplier delay on one SKU |
| 11:20 | You are on the phone to a warehouse | You have emailed the supplier |
| Next day | Two wrong parcels, three tickets, one review | Eight orders shipped, three flagged to the customer honestly |

The reporting column did not do less work. It did the same diagnostic work and
stopped one step short of the irreversible action, and stopping there is what
made the information useful rather than dangerous. The bot found the eleven
orders in both columns. Only one column let it decide what they meant.

## Inventory numbers are claims about physical objects

Inventory is where store owners underestimate the blast radius, because a
number in a field feels like the least consequential thing on the page.

Set a count too high and you oversell. The store accepts money for units that
do not exist, and every one of those becomes a refund, an apology, and often a
review. Set it too low and the product goes out of stock, which removes it
from collections, can suppress it in search, and stops sales dead for however
long it takes you to notice. Multi-location stores add a further trap: the
same product has a count per location, and moving the wrong number between
locations breaks fulfilment routing while the total stays reassuringly
correct.

Inventory writes also fight with other writers. A point-of-sale terminal, a
warehouse system, and a supplier feed may all be adjusting the same numbers.
A bot that recalculates a level from what it read a minute ago will overwrite
whatever happened in between, and the discrepancy will not look like a bot
error when you find it. It will look like shrinkage.

Reporting on inventory, by contrast, is genuinely valuable and completely
safe: products below a reorder threshold, products with no sales in ninety
days, and stock that will run out before your next delivery lands given
current velocity. That last one is a real forecast a busy owner does not have
time to run, and it changes nothing.

## Price and discount edits are live the second they save

Pricing has the shortest path from a bot's decision to a customer's wallet of
anything in the admin.

A price change applies to the storefront immediately, including for anyone
with the product already in a cart. A compare-at price sets what customers see
as a discount, and getting it wrong is not merely embarrassing, since claims
about a previous price are regulated in several markets. A discount code with
a broad scope and no usage cap can be shared publicly within minutes of being
created, and codes are difficult to unwind once they are out.

There is a related failure worth naming because it is subtle. Currency and
market pricing means a single price edit can propagate across regions using
rules the bot does not know about, so a change that looks like a two percent
adjustment at home is a much larger move somewhere else.

Competitor-informed pricing is the usual reason people want a bot near this
surface, and it is a good use for a bot as long as the output is a
recommendation. The catalog's
[competitor pricing watch](/bots/competitor-pricing-watch) is scoped exactly
that way, reading public pages only and never filling in a form. Let the bot
tell you that three competitors dropped a comparable product by fifteen
percent. You decide what your price is.

## Draw the money line at refunds and cancellations, and never move it

Everything touching money gets the strictest boundary in this setup, with no
graduated trust path and no exceptions for small amounts.

A refund moves money out of your account, often incurs a fee you do not get
back, and is not reversible by any action in the admin. A cancellation may
release inventory, may void a payment, and always emails the customer.
Editing an order after payment can change what someone was charged. Chargeback
responses have deadlines and consequences. Payouts, billing settings, and app
subscriptions are all real money leaving in the background.

So the money clause is the same one that governs the accounting side of the
business: the bot reads and reports, and it never moves, refunds, cancels, or
sends. If a customer is owed money, the bot's job is to produce the case,
including the order, the amount, and the reason, and then stop. You issue the
refund. The reconciliation side of the same discipline is covered in the
[expense reconciliation walkthrough](/blog/grok-bot-to-expense-reconciliation).

## Sort every store action by whether it leaves the building

The useful sort for a storefront is not read against write. It is whether the
action stays inside your admin or reaches a customer, a carrier, or a shelf.

| Action | Where it lands | Who does it | Reason |
|---|---|---|---|
| Ageing report on unfulfilled orders | Your screen | Bot, daily | It changes nothing and it is the reason you wanted a bot |
| Stockout forecast at current sale rate | Your screen | Bot, daily | Arithmetic you never have time for, with no side effects |
| Competitor price movement | Your screen | Bot, weekly | Public pages only, and the output is a recommendation |
| An internal order note | Your admin | Bot, if you have checked | Internal until an app watches notes, and some do |
| An order tag | Your admin, probably | You, until proven | Tag triggers are a common automation pattern, so assume something listens |
| Inventory adjustment | A shelf | You | The number is a claim about physical objects, and several systems write to it |
| Price or discount change | A customer's wallet | You | Live on save, including for carts already open |
| Marking fulfilled | A customer's inbox and a warehouse | You, permanently | Cancelling the record does not stop a pick already in progress |
| Refund, cancellation, chargeback response | Your bank account | You, permanently | Money, deadlines, and no draft state |

The two middle rows are the only genuinely ambiguous ones in the whole table, and
both resolve the same way: find out what listens before you delegate, not
afterwards. Everything below them is settled by the right-hand column.

## Grant orders read and products read, then stop there for a month

Shopify separates staff account permissions from app access scopes, and the
effective permission is the narrower of the two. Both matter, and the exact
names change as the platform evolves, so read the consent screen or the staff
permission list you are actually shown.

| Grant family | What it gives the bot | Worst realistic outcome |
|---|---|---|
| Orders read | Order contents, customer details, addresses, payment status | Your customer list with addresses and purchase history in bot context |
| Orders write | Fulfil, cancel, archive, edit orders | Customers emailed about shipments that do not exist, and a carrier told to move parcels |
| Products read | Catalogue, variants, prices, publication status | Little on its own, and it is what makes useful reporting possible |
| Products write | Create, edit, publish and unpublish products and prices | A live price change, or a bestseller removed from the storefront |
| Inventory | Adjust stock levels per location | Overselling stock you do not have, or a silent stockout for a week |
| Customers | Read and edit customer records, tags, marketing consent | A marketing consent flag changed, which is a compliance problem rather than a data one |
| Discounts and price rules | Create and modify codes and automatic discounts | A code with no cap escapes into a deals forum overnight |
| Draft orders | Create and send draft orders and invoices | An invoice reaching a customer you never approved |
| Refunds and payments | Issue refunds, void, and manage transactions | Money leaves and does not come back |
| Apps, themes, and settings | Install apps, edit theme code, change store settings | A live storefront broken visually, or a checkout that stops converting |
| Staff and billing | Manage users, plans, and store billing | Access sprawl, or a plan change nobody asked for |

Grant orders read, products read, and reporting access. Consider nothing else
for the first month.

One access fact catches people who use the browser route. All bots on your
account share a single persistent cloud computer, and signed-in browser
sessions belong to that computer rather than to an individual bot. A Shopify
admin login you establish for your reporting bot is therefore reachable by
every other bot on the account, and the documentation says outright that
separate bots are not a security boundary. If you need real separation, it has
to come from Shopify: a dedicated staff account with read-only permissions,
never the owner login.

## Paste a reporting-only store charter and set your own thresholds

Paste this, set your own thresholds, and keep the stop list intact even after
a quiet month.

\`\`\`text
You are my Store Analyst Bot for the Shopify store "[store]".
You read the store. You change nothing in it.

// WHAT YOU OWN
1. Daily at 07:00, a trading report:
   - yesterday's orders, units, and revenue against the same weekday
     last week and the trailing four-week average
   - the five products with the largest change in units, up or down
   - orders older than 48 hours that are still unfulfilled, listed
     individually with order number, age, and destination country
   - any order flagged for risk, with the reason shown in the admin

2. Daily, an inventory readout:
   - variants below [reorder point]
   - variants that will hit zero within 14 days at the last 14 days'
     rate of sale, with the projected date
   - variants with zero sales in 90 days and stock on hand

3. Weekly on Monday, a catalogue check: products missing images,
   missing descriptions, or with a compare-at price lower than price.

// HOW YOU REPORT
Numbers in a table, one row per item, with the admin link on each row.
Say which figures are estimates and show the rate you used.
Name anything you could not read rather than leaving it out.
Log every run: what you read, when, and what you reported.

// WHERE YOU STOP
Never fulfil, partially fulfil, or mark anything as shipped.
Never cancel, archive, edit, or restock an order.
Never create or send a draft order or an invoice.
Never adjust an inventory quantity, at any location, for any reason.
Never change a price, a compare-at price, or a cost.
Never create, edit, or disable a discount code or an automatic discount.
Never publish, unpublish, duplicate, or delete a product or variant.
Never edit a customer record, a tag, or a marketing consent flag.
Never issue a refund, void a transaction, or respond to a chargeback.
Never install, remove, or configure an app, and never touch theme code.
Never change store settings, staff access, or the billing plan.
On money you read and report. You never move, refund, cancel, or send.
If a task appears to require any of the above, stop, describe in one
paragraph what you would have done, and wait for me.
\`\`\`

Two operational notes about running this. Routines in Grok Bot belong to a
single bot rather than to your team, and deleting the bot deletes its
routines, so the daily report vanishes with the bot that owns it. Write down
what your store bot is scheduled to do somewhere outside the bot. And if you
manage the store from your phone, be aware that the iPhone app supports
pausing and resuming a routine while editing, testing, and history need a
desktop, so plan your emergency action as a pause rather than a fix.

## Sequence the first month, and expect month three to look the same

Week one is reports and nothing else: trading numbers, unfulfilled ageing,
inventory forecasts, catalogue gaps. All of it is useful on the first morning and
none of it touches the store, so there is no reason to wait and nothing to
approve.

Month two adds internal annotations if you want them, and only after you have
actually checked which apps in your store listen for notes and tags. That check
is the whole of the work. If you cannot answer it in ten minutes, the answer is
no.

Month three, for most stores, looks like month one with better thresholds. That
is not a failure of ambition. The reporting surface is where the unbounded work
lives, and the actions below it are ones you were never going to delegate
comfortably anyway.

The financial reporting side pairs better with a bookkeeping setup than folded
into the store bot. The catalog's
[bookkeeping auditor](/bots/bookkeeping-auditor) keeps that separation
explicit: it never edits the live books, and every proposed change waits for
approval. Same principle, different ledger.

For how a store bot sits alongside the rest of a small operation without
turning into six bots that all need watching, see the
[one-person company guide](/blog/one-person-company-grok-bot).

## Check three numbers against the admin every morning for a week

A reporting bot fails quietly, which means it fails for a long time before
anyone notices. Spend twenty minutes a day for one week proving it.

Each morning, take three numbers from the report and check them in the admin
yourself. Yesterday's order count, the revenue figure, and one inventory
level. You are not auditing everything, you are sampling enough to catch a bot
that is reading the wrong date range, mixing gross and net, counting test
orders, or reporting a total that quietly excludes one sales channel.

Then check the unfulfilled list against the real queue. The failure to look
for is omission rather than error: an order the bot did not mention because it
sat in a status the bot did not know about. A report that is accurate about
what it saw and silent about what it missed is the most dangerous artefact in
this whole setup, which is why the charter requires it to name what it could
not read.

Repeat the exercise for one day after any change to your apps, your sales
channels, or your fulfilment process, since all three change what the numbers
mean without changing the query that produced them.

## Diagnose a store report that is confidently wrong

When the sampling above catches something, the symptom usually names the cause,
and almost none of these are model failures.

| What you see | What is behind it | What to change |
|---|---|---|
| Revenue in the report does not match the admin | Gross against net, or refunds and shipping counted differently, or test orders included | Pin the definition in the charter and require it to state which figure it used |
| Yesterday's order count is slightly low | A time zone boundary, or a sales channel excluded from the query | Name the time zone and the channels explicitly, both in the charter |
| An order missing from the unfulfilled list | It sits in a status the bot did not know about, and silence looked like absence | Require the bot to name statuses it did not recognise rather than skipping them |
| Inventory looks right in total and wrong on the shelf | Multi-location counts summed instead of reported per location | Report per location, always, even for a single-location store today |
| A stockout forecast that never comes true | A sale-rate window that spans a promotion or a seasonal spike | State the window and the rate on every forecast row so you can sanity check it |
| Everything correct, and then wrong from one Tuesday | An app, channel, or fulfilment change altered what the numbers mean | Re-run the one-week check after any such change, because the query did not break |

Five of those six are definitional rather than intelligent. That is the ordinary
condition of reporting bots: they answer the question you asked precisely, and
the question was slightly different from the one in your head.

## Answer the objection that a store bot which cannot fulfil is useless

The objection is blunt and deserves a blunt answer. Fulfilment is the repetitive
part. Reading a report is not what anybody wanted automated. A bot that produces
lists while you keep clicking the buttons has automated the interesting half and
left you the boring one.

For a store above a certain volume, that is correct, and the honest answer is
that an agent was never the right tool for it. High-volume fulfilment is a
deterministic, high-repetition process, which is exactly what a rules engine, a
3PL integration, or Shopify's own automation tooling handles better than any
agent: no variance, a documented trigger, and an audit trail. If your problem is
five hundred orders a day, do not buy judgment, buy plumbing. That comparison,
drawn out properly, is in the
[Make comparison](/blog/grok-bot-vs-make).

For the store this article is written for, the objection has the economics
backwards. At twenty orders a day, fulfilment is a few minutes of clicking that
you would not confidently hand over anyway, while the things you actually never
do are the diagnostic ones: which SKU will run out before the next delivery
lands, which orders have aged past two days and why, which product quietly
stopped selling three weeks ago. Those are unbounded tasks, they are where the
money is, and nobody has time for them on a Tuesday morning.

There is also the asymmetry that decides it. The worst outcome of a wrong report
is that you check the admin and find it wrong. The worst outcome of a wrong
fulfilment is a customer email you cannot recall and a parcel you cannot stop.
Automating the first is cheap to be wrong about. That is the entire reason the
line falls where it does.

**Keep reading:** [Grok Bot and Airtable](/blog/grok-bot-airtable), [Grok Bot and Discord](/blog/grok-bot-discord), [Grok Bot and GitHub](/blog/grok-bot-github).

## Frequently Asked Questions

### Can Grok Bot fulfil Shopify orders automatically?

It can if you grant order write access, and that is the grant to withhold.
Marking an order fulfilled is not a status update, it is an email to the
customer, an event broadcast to every app subscribed to your orders, and in
many stores an instruction that a third-party warehouse treats as
authorisation to move a parcel. None of that is recallable. You can delete the
fulfilment record in the admin, but the message has been read and the pick may
already have happened. Keep fulfilment with a human permanently.

### What Shopify permissions should a Grok Bot have?

Read access to orders and products, plus whatever reporting view your plan
offers, and nothing else for the first month. That covers trading reports,
unfulfilled order ageing, inventory forecasting, and catalogue gap checks,
which is nearly all of the value. Withhold inventory adjustment, price and
discount editing, product publication, customer record edits, refunds, app
installation, and theme access. Remember that effective permission is the
narrower of the app scope and the staff account, so use a dedicated read-only
staff account rather than the store owner login.

### Why is a Shopify inventory write riskier than it looks?

Because the number is a claim about physical objects, and several systems
write to it. Setting a count too high oversells stock you do not have, which
becomes refunds and bad reviews. Setting it too low takes the product out of
collections and stops sales until someone notices. Multi-location stores have
a count per location, so a wrong split breaks fulfilment routing while the
total still looks right. A bot recalculating from a value it read a minute ago
also silently overwrites whatever a point-of-sale terminal or warehouse system
did in between.

### What should a Shopify bot automate in the first week?

Reports only. A daily trading summary compared against the same weekday last
week, a list of orders unfulfilled for more than forty-eight hours, an
inventory readout showing what will hit zero within a fortnight at the current
rate of sale, and a weekly catalogue check for missing images or broken
compare-at prices. All of it is read-only, all of it is useful on day one, and
a week of it tells you whether the bot reads your store correctly before it
has any ability to change it.
`,
};
