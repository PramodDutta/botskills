import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Ecommerce: Orders, Reviews, and Restocks',
  description:
    'AI bots for ecommerce that read orders, flag restocks, and draft review replies, with a hard line at anything that ships, refunds, or edits your stock.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Ecommerce: Orders, Reviews, and Restocks

## The ecommerce week is a queue with a warehouse attached

Take a store doing four hundred orders a month across sixty active SKUs, with
three suppliers and lead times between two and ten weeks. The week has a
rhythm, and almost none of it is strategy.

Every morning starts the same way: the unfulfilled queue, the orders that
failed address validation, the two that a customer emailed about before they
shipped, and the overnight support pile, most of which is some version of where
is my order. Then stock. You look at the same eight SKUs you are always
nervous about, do the arithmetic in your head about whether the reorder needs
to go today or can wait until Friday, and usually get it right. Then ads, then
reviews, then the supplier who has not confirmed the purchase order, then the
part of the day where you were supposed to work on the new product.

The repetitive half of that is genuinely repetitive: pulling numbers out of
four systems that will not talk to each other and assembling them into a
picture. The judgment half is small but expensive, because in ecommerce a wrong
decision does not stay inside a database. It becomes a box on a van.

That distinction, not any general principle about automation, is what should
decide which jobs you hand over.

## Staff six seats that read the store and never touch it

Each of these produces a document you read. None of them touches an order, a
customer, or a stock level.

| Job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Morning ops brief | Yesterday's orders, the stuck queue, and the SKUs crossing your reorder point | Never sends, schedules, or acts externally without approval | [Chief of Staff Briefing](/bots/chief-of-staff-briefing) |
| Competitor price watch | List price and promo changes on the products you actually compete with | Reads public pages only, never fills forms or creates accounts | [Competitor Pricing Watch](/bots/competitor-pricing-watch) |
| Rival creative watch | Which ads competitors are running, and which ones are new this week | Reports what the public ad library shows, never contacts anyone | [Competitor Ad Watch](/bots/competitor-ad-watch) |
| Support drafts | Overnight tickets sorted, with a suggested reply attached to each | Never sends an email, every draft waits for approval | [Inbox Triage](/bots/inbox-triage) |
| Review reply drafts | Answers to new reviews and repeat product questions | Never messages the customer, drafts stay internal to you | [Account Expert](/bots/account-expert) |
| Payout reconciliation | Platform payouts against fees, refunds, and chargebacks | Never edits the live books, every change waits for approval | [Bookkeeping Auditor](/bots/bookkeeping-auditor) |

The first row is worth more than the other five combined in the first month,
because it replaces the twenty minutes you currently spend logging into four
dashboards to build the same picture by hand.

## Read the order machine and refuse to write to it

An order is a state machine that reaches into the physical world. Placed, paid,
picked, packed, labelled, handed to a carrier, delivered, returned. Reading
that machine is enormously useful. Writing to it is where stores get hurt.

The useful read is not a list of orders, which you already have. It is the
exceptions, assembled: orders paid more than 24 hours ago with no fulfilment,
addresses that failed validation, orders where the customer has emailed since
purchase, carrier scans that have not moved in three days, and anything with a
value above your own threshold that is still sitting in the queue. That is a
five-line brief instead of a dashboard, and it is checkable in a minute.

The instruction that makes this safe is blunter than a permission setting: the
bot may query the store, and it may not call any endpoint whose name contains
create, update, fulfil, cancel, refund, or adjust. Name the verbs. A charter
that says "read-only" is a preference. A charter that lists the forbidden verbs
is a rule, and the difference shows up on the day the bot decides it would be
helpful to just mark one order as fulfilled.

## Sort every store action by who has to cooperate to undo it

The useful question is not whether an action is risky. It is what undoing it
requires, because that is what decides whether an approval prompt is a real
control or a formality.

| Action | How you undo it | Who has to cooperate | Whose side of the line |
|---|---|---|---|
| Pull an exception report | Nothing to undo | Nobody | Bot |
| Draft a review reply | Delete the draft | Nobody | Bot |
| Flag a SKU for reorder | Ignore the flag | Nobody | Bot |
| Edit a product description | Edit it back, minutes later | Nobody, unless it was cached or scraped | Bot with review |
| Change a live price | Change it back, and honour what sold in between | Every shopper who saw it, plus your own goodwill | Human |
| Send a purchase order | Ask the supplier to cancel | The supplier, on their terms | Human |
| Issue a refund | Ask the customer to send money back | The customer, who will decline | Human |
| Cancel an order | Recreate it, if the stock is still there | Inventory, and whoever bought it in the meantime | Human |
| Buy a label and release to fulfilment | Intercept, or wait for a return | A courier, a picker, and the customer | Human |

Read the fourth column downward and the pattern is not about money or importance.
It is about how many other parties must agree before the world goes back to how it
was. Zero means a bot can do it. One or more means a person presses the button,
because you cannot delegate other people's cooperation.

It also explains why "give it approvals and let it act" feels safer than it is.
Grok Bot's security documentation states the limit directly: an approval controls
the proposed action and does not reverse work already completed. It sits before a
step, so it protects you once, and only if you are awake and reading carefully.
The fuller treatment is in [approval rules and what reversibility really
buys](/blog/grok-bot-approval-rules-reversibility).

## Restocks are a forecast, and a forecast is a recommendation

Reorder timing is the most tempting thing in a store to automate fully, and it
is the one where automation is most obviously a bad trade.

The arithmetic is easy: velocity over a trailing window, times lead time, plus
safety stock, minus what is already on the water. A bot does that faster than
you and does not skip the SKU it finds boring. Genuinely useful. But the
arithmetic is not the decision, because the decision depends on things that are
not in the data: the supplier who is slow every Chinese New Year, the influencer
post you know is landing next Tuesday, the fact that you are discontinuing the
blue one, and whether you can actually afford the purchase order this month.

So the output is a recommendation with its working shown. Each flagged SKU
carries the trailing velocity, the days of cover left, the lead time used, the
on-order quantity it knows about, and the date it thinks you go out of stock.
You approve, adjust, or ignore. The bot never places a purchase order and never
writes a stock level back into the system, because an inventory number that is
wrong in your system is a promise to a customer that you cannot keep.

Show the working line by line, because each number in it hides a different kind
of mistake when it is missing.

| Shown per flagged SKU | The mistake its absence hides |
|---|---|
| Trailing velocity and the window used | A spike from one bulk order read as normal demand |
| Days of cover left | A SKU that is technically under its reorder point and has ten weeks of stock |
| Lead time used, and where it came from | The supplier's quoted lead time standing in for their actual one |
| Quantity already on order | A second purchase order for stock that is already on a boat |
| Projected stockout date | An urgent-looking flag that does not become urgent until March |
| The reorder point it compared against | A threshold the bot inferred rather than the one in your table |

The last row is the one to check hardest in the first month. A bot that decides
your reorder point is more sensible than the one you wrote will be right often
enough to be convincing and wrong on exactly the SKU where your judgment was
carrying information the data does not contain.

## Review replies carry your storefront's name

Every public review reply is marketing copy signed by your business, sitting
permanently under a product page that people read before they buy. That makes
review responses customer-facing, which puts them in the same category as
support email, not in the same category as internal notes.

Drafting is still worth it. Most replies are variations of six situations: it
arrived late, it did not fit, it broke, it was not what the listing implied,
the customer loved it, or the review is actually about a carrier. A bot that
sorts new reviews into those buckets and drafts a reply for each saves real
time and, more importantly, means the two-star review from Saturday actually
gets answered on Monday instead of in three weeks.

But the reply goes out from your hand. The failure here is not a typo, it is
tone: a bot that apologises for something you did not do, or promises a
replacement you cannot ship, or worse, argues with a customer in public, in
your voice, under a product listing. A ninety second read before it posts costs
nothing. A public argument costs a product's rating.

## The risk in this role reaches the warehouse

Every role has one risk that belongs to it. In ecommerce it is that most of
your systems have a physical counterpart, and software cannot reach into the
physical one to undo anything.

This is worth stating precisely, because it changes how you think about
approvals. In the Grok Bot documentation the line is explicit: an approval
controls the proposed action, and it does not reverse work already completed.
An approval prompt is a gate placed before a step. It is not an undo button.
For a bot editing a spreadsheet, that distinction is academic, because you can
edit the cell back. For a bot that has told a fulfilment provider to ship, the
label is bought, the box is picked, and the only remaining remedy is a phone
call and a return label.

The same asymmetry runs through the rest of the stack. A refund issued cannot
be un-issued without asking the customer for money back. A cancelled order
releases inventory that someone else can buy in the next minute. A price change
pushed to a live storefront is visible to every shopper and to every price
scraper watching you, immediately, and a discount honoured is a discount
honoured. An address edited after the label prints produces a parcel in the old
city.

So the line for an ecommerce roster is drawn by consequence, not by convenience:
if an action reaches fulfilment, inventory, money, or a customer-visible order
state, a human takes it. Everything upstream of that, meaning the reading, the
assembling, the flagging, and the drafting, is fair game and is where the hours
actually are. The [safety checklist](/blog/grok-bot-safety-checklist) covers the
account-level version of this before you connect anything.

## Paste the morning brief charter and keep the holiday clause

One bot, one document, every morning. This is the one to build first.

\`\`\`text
ROLE
You are my store operations analyst. You read systems and write one brief.
You do not operate the store.

TRIGGER
Every day at 07:00 local. If a data source is unreachable, still send the
brief with that section marked UNAVAILABLE. Never skip a run silently.

SOURCES
- Store admin: orders, fulfilment status, inventory levels
- Carrier tracking pages for open shipments
- The supplier PO sheet (read only)
- The reorder-point table I maintain, which is the source of truth

OUTPUT, exactly five blocks, hard cap 400 words
1. EXCEPTIONS: orders paid over 24h ago and unfulfilled, failed address
   validation, tracking with no scan in 3 days, any order over my value
   threshold still open. One line each: order number, age, what is wrong.
2. RESTOCK: every SKU at or under its reorder point. Per SKU show
   trailing 28-day velocity, days of cover left, lead time used,
   quantity already on order, and the projected stockout date.
   Mark each RECOMMEND ORDER or WATCH. Show the arithmetic.
3. RETURNS AND REFUND REQUESTS: count, plus any single request over my
   value threshold, named.
4. REVIEWS: new reviews at 3 stars or below, with the product and the
   one-line complaint. No drafted replies in this brief.
5. COULD NOT CHECK: every source that failed or returned partial data.

RULES
- Never call any endpoint whose name contains create, update, fulfil,
  cancel, refund, adjust, or price. Query only.
- Never invent a velocity or a lead time. If the number is missing, say
  MISSING and skip the recommendation for that SKU.
- Never compare against a reorder point you inferred. Use my table.

BOUNDARY
You never place a purchase order, message a supplier, contact a customer,
change a stock level, issue a refund, or alter any order state. Every one
of those is mine, without exception, including when I am on holiday.
\`\`\`

The final clause matters more than it looks. Bots get their authority widened
during exactly the weeks nobody is watching, and a boundary with a holiday
exception is not a boundary.

## Follow one Tuesday from the brief to the purchase order

The four hundred orders a month store from the opening, thirty days in. The brief
lands at seven and takes four minutes to read, which is the number that matters,
because a brief taking fifteen minutes gets skipped on the days it is needed most.

The exceptions block has three lines. One order paid on Sunday and still
unfulfilled, which turns out to be a bundle your picker keeps missing. One
address that failed validation, a real customer with a genuine typo. One tracking
number with no scan since Thursday, which is the carrier's problem and now yours
to communicate. Four minutes of reading turns into six minutes of doing, and none
of those six minutes were spent finding out that the work existed.

The restock block flags four SKUs. Three are obvious and you approve them
mentally, not in the system, because the bot cannot place the order. The fourth is
interesting: it is marked WATCH, not RECOMMEND ORDER, with fourteen days of cover
and a twenty-one day lead time, which looks like a mistake until you read the
working and see the quantity already on order. The bot was right and its working
is why you know it was right rather than merely believing it.

The one it got wrong you catch by hand: a SKU showing high trailing velocity
because a single wholesale order distorted the 28-day window. The arithmetic was
right and the conclusion was wrong, which is the characteristic failure of a
forecast bot and the reason the reorder point stays in a table you maintain.

By day thirty the shape of the value is clear and it is not what people expect.
The bot has not saved you a decision. It has removed the twenty minutes of
assembly that used to happen before the decision, and it has stopped the
occasional Sunday order from sitting until Wednesday because nobody looked. Both
of those are worth more than a bot that could have fulfilled something.

## Match a brief you stopped reading to the defect behind it

A store brief dies quietly. It does not error, it just gets skimmed, then
archived, then ignored while continuing to consume your weekly allowance every
morning.

| Symptom | The defect | The fix |
|---|---|---|
| Two or three false alarms in the exceptions block every day | Thresholds copied from an example rather than set from your own data | Set the value threshold and the stale-scan window from last quarter's real numbers |
| The restock block flags the same SKUs every day forever | Nothing tells it what you already decided | Keep an approved-and-ordered list it reads, so a flag clears once you act |
| The brief is 900 words and you skim it | No hard cap, so completeness beat usefulness | Cap it at 400 words and force ranking inside each block |
| A SKU recommendation ignores stock that is on the water | The purchase order sheet was unreadable or out of date that morning | Make an unreadable source print UNAVAILABLE instead of being silently skipped |
| Velocity numbers that do not match what actually sold | A bulk or wholesale order inside the trailing window | Exclude orders above a size you name, and say in the brief that you did |
| Reviews appear in the brief days after they were posted | The review source is polled less often than the brief runs | Either fix the source or say in the brief how old the newest review is |
| The brief silently stops arriving | A failed run with nowhere to report | Require a run log line every day, including the days it fails |

Six of those seven are fixed by changing a number or a source rather than by
rewriting the charter, which is true of reporting bots generally and rarely
believed until you have chased the seventh.

## Keep seven actions permanently on your side of the line

The opinionated list. These are not cautious defaults, they are lines that
should still be in place in a year.

Fulfilment. Nothing a bot does should result in a carrier collecting a box. Not
even for the simple orders, not even for digital-plus-physical bundles.

Refunds, cancellations, and address edits. All three are irreversible from your
side and all three are cheap for a human to click. There is no time saving here
worth the tail risk.

Inventory writes. A stock count in your system is a promise to shoppers. It
gets corrected by a person who has counted something.

Live prices and discount codes. A price mistake is public and gets honoured.
A code that leaks gets shared.

Supplier commitments. A purchase order is a contract with money attached. Draft
it, never send it.

Anything that posts publicly in your store's voice, which includes review
replies, marketplace Q and A answers, and social replies to complaints.

Ad spend. Creative drafts are fine, and drafting is where the tedium is.
Launching a campaign spends money on a schedule, which is a different class of
action entirely.

The pattern underneath all seven: reversibility. If undoing it requires
somebody else to cooperate, a courier, a customer, a supplier, or a bank, it
does not go on the bot's side of the line. That principle generalises well past
retail, and the [one-person company guide](/blog/one-person-company-grok-bot)
works it through for the rest of a small business.

## The strongest objection is that a human gate is the bottleneck

The best argument against this whole roster is a practical one, and anyone who
has run a store in December has felt it. You are the constraint. The bot knew at
three in the morning that a SKU would stock out, and the purchase order went at
nine because that is when you woke up. Six hours of avoidable delay, repeated
across a season, is real money, and it is being spent to prevent an error that
has not actually happened yet.

That argument is honest and it deserves an honest answer rather than a slogan.

It wins in one clear case: a store where every action really is reversible in
software. Digital goods, no inventory, no courier, no supplier commitment. If
nothing you sell has a physical counterpart, the entire reversibility ladder
collapses into the top three rows and the caution above is borrowed from someone
else's problem. Take the speed.

It also wins partially at low value. A ten pound refund handled instantly is
better business than a ten pound refund handled correctly on Thursday, and a
threshold below which a refund is automatic is a defensible policy. Note what
that is, though. It is not trusting the bot's judgment, it is deciding that the
worst case is small enough to pre-pay. Write the threshold down, keep it low
enough that a bad day costs less than an afternoon of your time, and review the
total monthly rather than the individual cases.

Everywhere else the objection loses on arithmetic. The saving is six hours on a
reorder that was not urgent when it was flagged, since fourteen days of cover is
not a three in the morning problem. The exposure is one wrongly released
shipment, one refund that cannot be recalled, or one price honoured across a
Saturday. Those are not the same size, and a busy month does not make them so.

The productive version of the complaint is to shorten the gate rather than remove
it. A brief that lands at seven with the decision already assembled turns a twenty
minute task into a two minute one, and two minutes is not a bottleneck. That is
the pattern behind [Grocery Autopilot](/bots/grocery-autopilot), which holds every
order for approval until you explicitly lift the hold, and it is the right shape
for anything that spends money.

## Three SKUs a week is the whole verification

You do not need a monitoring system. You need a habit that is small enough to
survive a busy week.

Once a week, take three SKUs from the restock block, including one the bot said
to leave alone, and redo the arithmetic yourself against the raw numbers. You
are checking three things: that the velocity matches what actually sold, that
the on-order quantity matches the open POs, and that the reorder point it used
is the one in your table rather than one it decided was more sensible. Three
SKUs takes about six minutes and catches every drift failure that matters.

Do the same for exceptions once a month: pick five flagged orders and confirm
each was genuinely a problem. A brief with two false alarms a day gets skimmed
by week three, and a skimmed brief is worse than no brief, since it costs usage
against your weekly allowance with overflow billed on demand, and it buys you
the feeling of coverage without the coverage.

One more habit for the account itself. As of writing there is no audit view of
bot actions, so if you want a record of what your bots did in your store, the
bot has to write it and you have to keep it. Have the brief append its own run
log to a file: date, sources reached, sources failed, counts in each block.
That log is your only reconstruction if something looks wrong in November.

## Peak season and marketplaces change the arithmetic, not the line

Two situations make people want to move the boundary, and both are better
answered by preparation than by permissions.

Peak season compresses everything. Lead times stretch, carriers miss cutoffs, and
the cost of a slow decision genuinely rises. What does not change is that a
released shipment is still released. Prepare instead: raise your safety stock in
October, agree reorder envelopes with suppliers in advance so the decision at nine
in the morning is a yes or no rather than a negotiation, and run the brief twice a
day rather than once. All three shorten the gate without opening it.

Marketplaces add a deadline you do not control. Some platforms cancel or penalise
an order not dispatched inside a stated window, which makes fulfilment feel urgent
enough to automate. It is the same trade with a timer attached, and the timer
argues for a second person with a phone rather than a bot with fulfilment rights.
If nobody covers weekends, the honest fix is a fulfilment partner.

**Keep reading:** [Bots for Agencies](/blog/bots-for-agencies), [Bots for Personal Life](/blog/bots-for-personal-life), [Bots for Product Managers](/blog/bots-for-product-managers).

## Frequently Asked Questions

### What can AI bots do for an ecommerce store?

The dependable jobs are all read and draft. A bot can assemble a morning
exception brief from your order queue, carrier tracking, and inventory, flag
every SKU crossing its reorder point with the arithmetic shown, watch
competitor pricing and ad creative on public pages, sort overnight support
tickets with a suggested reply attached to each, draft responses to new
reviews, and reconcile platform payouts against fees and refunds. What stays
with a person is anything that ships, refunds, cancels, prices, or writes a
stock level, because those reach the physical world.

### Should a bot handle order fulfilment automatically?

No. Fulfilment is the clearest example of an action software cannot undo. An
approval prompt gates a proposed step, it does not reverse work already
completed, so once a label is bought and a box is picked, the remedy is a phone
call and a return, not a click. The same applies to refunds, cancellations, and
address edits after a label prints. Have the bot surface the exceptions in your
queue and prepare the decision, then take the ninety seconds to press the
button yourself.

### Can a bot reply to customer reviews?

It can draft every reply and it should not publish any of them. A public review
response is permanent marketing copy signed by your business and sitting under
a product page that buyers read. The failure mode is not spelling, it is tone:
apologising for something you did not do, promising a replacement you cannot
ship, or arguing with a customer in public in your voice. Sorting new reviews
into recurring situations and drafting each one still saves the real time,
which is the delay before anyone answers at all.

### How do I stop an inventory bot from making things worse?

Keep it on the recommending side of the line and force it to show its working.
Every flagged SKU should carry the trailing velocity, days of cover, the lead
time used, quantity already on order, and a projected stockout date, so you can
check the reasoning in seconds. Forbid it from writing stock levels or placing
purchase orders, since a wrong count in your system is a promise to shoppers
that you cannot keep. Then verify three SKUs a week by hand, including one it
told you to ignore.
`,
};
