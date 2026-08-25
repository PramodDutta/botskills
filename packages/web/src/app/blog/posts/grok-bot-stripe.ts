import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Stripe: Permissions and What to Automate',
  description:
    'A Grok Bot Stripe setup that reads the ledger and never moves money: the key permission families, why draft-only is not enough here, and the reports worth automating.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Stripe: Permissions and What to Automate

Every other integration you will connect has a waiting room. Email has a
drafts folder. Docs have unpublished versions. GitHub has a pull request,
which is literally a proposal that sits there until a human agrees. The whole
safety pattern for bots leans on that: let it write, do not let it send, look
at the queue in the morning.

Stripe has no waiting room. There is no proposed refund object that sits
pending your review. There is no draft cancellation. The call either happened
or it did not, and if it happened, money left your account and an email may
already be in a customer's inbox. Stripe is designed that way on purpose,
because the people using it are trying to resolve a support ticket in eleven
seconds, not stage a change.

That is why a payments connector is the one place in this series where the
usual advice fails. Draft-only is not available here. The guarantee has to
come from somewhere else, and this article is about where.

## Stripe has no draft state for a refund

Work through what an approval prompt actually buys you here. Grok Bot's own
documentation puts it plainly: an approval controls the proposed action, and
it does not reverse work already completed. That is fine when the proposed
action is sending an email, because the gate sits in front of the irreversible
step and there is nothing behind it.

In Stripe, the gate and the act are the same instant. The bot decides to
refund, the request goes out, the refund exists. A prompt fires before that
request, which is genuinely useful right until you approve the fortieth prompt
of the week without reading it. Approval fatigue is worst where prompts are
frequent, similar-looking, and individually plausible, and payments prompts
are all three.

So the design cannot be "the bot can refund but it asks first". It has to be
"the bot cannot refund", enforced by a credential that has no refund
capability at all. A boundary you enforce in the key survives a bad model
day, a confusing support thread, and a customer email crafted to sound like
an instruction. A boundary you enforce in a paragraph does not.

## Rank every Stripe write by whether the money comes back

Sort the operations by recoverability and the permission decision falls out on
its own.

| Write | What it actually is | Undo call | What the customer sees | What putting it back costs you |
|---|---|---|---|---|
| Refund | A completed transfer back to the payment method | None | A refund notice and money returning | Charging them again, which needs their agreement and a working card. On many accounts the original processing fee does not come back either. |
| Subscription cancellation | The end of a billing relationship | None | Access revoked, because your own app heard the event first | A new subscription with a new billing anchor and identifier. Renewal dates move, proration lands, grandfathered pricing is rebuilt by hand. |
| Moving a subscription to another price | A new price plus a switch, since prices are close to immutable | None that unwinds the proration | An immediate invoice, charge, or credit balance | Another price change, which prorates again. Both mistakes now sit in the invoice history. |
| Detaching a default payment method | An edit to a customer record | Re-attach, if the method still exists | Nothing at all, until the next renewal fails | Involuntary churn on a customer who intended to pay. |
| Finalising and sending an invoice | A bill your company has issued | Void, itself an accounting event | A demand for money in their inbox | An email explaining the bill was wrong, and a void your books must match. |
| Submitting dispute evidence | A final submission on that dispute | None | Nothing directly | A dispute you would have won, lost. |
| Deleting a webhook endpoint | Removing how your app hears about payments | Recreate it, minus the gap | Provisioning silently stops | A manual backfill, once somebody complains. |

The top three are what a support workflow reaches for daily, which is exactly
why they are the three people want automated. The bottom four are on the list
because nobody thinks of them as dangerous, and deleting a webhook endpoint is
the one most likely to go unnoticed for a week: it moves no money, and nothing
in the dashboard looks broken while provisioning quietly stops.

## Carve the restricted key down to the resources a report needs

Stripe's saving grace is that its credential model is unusually granular.
Restricted keys let you set each resource family independently rather than
handing over one key that does everything. Use that. A bot should never hold a
key that could refund, whatever the charter says.

The exact resource list on the key creation screen changes as Stripe ships
features, and it differs by account. Read that screen and map it against these
families rather than assuming.

| Permission family | What it grants | Worst realistic outcome if the charter is wrong |
|---|---|---|
| Charges and payment intents, read | Payments, amounts, statuses, failure codes, card metadata | Payment history and spend patterns end up in whatever the bot writes next. This is the grant you actually need. |
| Charges and payment intents, write | Create and capture payments, and in most configurations refund them | Money leaves with no proposal step and no undo call. |
| Refunds, write | Issue refunds against past charges | The most expensive mistake available here. Never grant it. |
| Customers, read | Names, emails, billing addresses, saved payment method summaries | Customer PII in the bot's context and in any file it writes on the shared computer. |
| Customers, write | Edit customer records, attach or detach payment methods | A detached default payment method turns the next renewal into churn. |
| Subscriptions, write | Create, update, pause, and cancel subscriptions | Cancellation, which is replaced rather than undone. |
| Products and prices, write | Create and archive prices, move a subscription between them | Proration fires and a real customer is charged or credited immediately. |
| Invoices, write | Create, finalize, void, and send invoices | Finalising and sending is customer-facing. Voiding afterwards is an accounting event your books must match. |
| Payouts, balance, and transfers | Move funds to your bank or between balances | Cash leaves the platform balance on a schedule you did not choose. |
| Disputes | Respond to and submit dispute evidence | A submission is final. A weak automatic response loses a dispute you would have won. |
| Webhook endpoints | Create, edit, delete delivery endpoints | Your application stops hearing about payments, and nothing looks broken until customers complain. |
| Account and team settings | Business details, branding, team members, keys | The permission model becomes editable by the thing it constrains. |

The pattern is that read grants risk disclosure and write grants risk money.
Disclosure is bad and recoverable. Money is not, which is why the split in a
payments charter is not careful writes versus reckless writes. It is read, or
nothing.

## Put the control in the key, because the charter is only more text

Elsewhere in this series the charter carries most of the weight, because the
tool has a structural backstop and the charter fills the gaps. GitHub has
branch protection. Sheets has a tab the bot cannot escape if you never grant
structural edits.

Stripe's backstop is the key, and it beats both, because it is checked by
Stripe's servers rather than by your bot's judgment. The refund endpoint
returns a permission error before it does anything, so there is no path from a
persuasive support ticket to a refund.

That matters more than usual because a payments bot reads text written by
strangers: support tickets, dispute messages, chargeback notes, invoice memo
fields. Any of it can contain instructions, and a charter clause is just more
text competing with them. A read-only restricted key does not read English.

Write the charter anyway, because it shapes output quality and documents
intent for the next person. Just do not let it be the only thing between a bot
and your bank account. The general form of that argument is in
[why every bot needs a boundary](/blog/grok-bot-boundaries).

## A second bot is not a second set of credentials

A common instinct is to build one bot with the dangerous permissions and one
bot without, on the theory that the safe one cannot reach the dangerous one's
access. That theory does not hold here.

All bots on a Grok account share one persistent cloud computer. The computer
is assigned to your user account, not to an individual bot. Each bot gets its
own screen on that shared machine, and the documentation is explicit that the
screens are separate work surfaces rather than separate security boundaries,
and that you should not use separate bots as a security boundary. Browser
cookies, signed-in sessions, files, and command line credentials are shared
across all of them. Deleting a bot does not remove those files or sessions.

Applied to Stripe: a dashboard session left signed in by one bot is reachable
by every other bot on the account, and a key written to a file during setup
stays there after the bot that wrote it is gone. Real separation for payments
means a separate Stripe account or a separate machine, not a separate bot. The
catalog's [personal CFO](/bots/personal-cfo) works from the same premise: it
never trades or moves money, and every rebalance is a recommendation rather
than an execution.

The connection route matters more here than anywhere else for the same reason.
Confirm in the app whether a Stripe connector exists for your account rather
than assuming, because availability moves. Without one, an MCP server that
exposes Stripe is the better fallback, since hosted sign-in tokens stay with
the provider's backend instead of sitting on the shared computer. A browser
login handoff is the worse one, because a signed-in dashboard session can do
everything your account can do, refunds included, and no key is involved to
stop it.

There is also no audit view of bot actions as of writing, so your audit trail
for anything financial is Stripe's own event log rather than the bot app.
Another reason to prefer read-only: a read leaves nothing in that log you need
to explain.

## Test mode is the only free rehearsal you get

Stripe ships something most tools in this series do not: a complete parallel
environment with its own keys, its own data, and its own event stream, at no
cost. Use it for the entire first phase.

Build the bot against test mode keys. Generate the failures you care about
using the documented test cards so the bot has real declines, real disputes,
and real subscription states to read rather than hypotheticals. Run it on its
real schedule for a week. Read every report.

Two limits. Test mode data is not your data, so it will not catch the report
that is wrong because your real customers do something unusual, which is a
large share of reporting bugs. And it confirms nothing about live permissions,
because those are different keys.

## Paste the revenue reporter charter and change only the timezone

This is the setup to run first. It touches nothing and it answers the
questions you currently answer by clicking around the dashboard on a Monday.

\`\`\`text
You are my Revenue Reporter for Stripe. You operate with a restricted,
read-only key. You have no ability to refund, cancel, charge, or edit.

// WHAT YOU OWN
Every Monday at 08:00 [TIMEZONE], read the last completed week and report:
  NET       gross volume, refunds issued by humans, net, versus prior week
  MRR       active subscription value, new, expansion, contraction, churned
  FAILED    every failed payment: customer, amount, decline reason, how
            many retry attempts remain, renewal date
  DUNNING   subscriptions in a past due or unpaid state, with days elapsed
  TRIALS    trials ending in the next 7 days and whether a payment method
            is attached
  DISPUTES  new disputes, amount, reason code, evidence deadline
  ODD       anything that does not fit: duplicate charges to one customer
            in 24 hours, a charge more than 3x your median, a subscription
            whose price does not match your published price list

// HOW YOU REPORT
One message. Numbers first, commentary second, at most 200 words of
commentary. Cite the Stripe object id for every specific claim so I can
open it. If a figure is estimated or a period is partial, label it.
If you cannot compute something, say which and why. Never round a
currency amount to make a sentence read better.

// WHERE YOU STOP
Never issue a refund. Never create, capture, or modify a charge.
Never create, update, pause, or cancel a subscription.
Never create or archive a price, and never move a subscription
between prices.
Never edit a customer record or attach or detach a payment method.
Never finalize, void, or send an invoice.
Never submit dispute evidence.
Never create, edit, or delete a webhook endpoint.
Never email, message, or otherwise contact a customer for any reason.
If something looks urgent, put it at the top of the report and tag me.
Urgency is a reason to escalate, never a reason to act.
\`\`\`

The last two lines are the ones people cut, and they are the ones that matter
most. Urgency is exactly the condition under which a bot talks itself past a
boundary, and a dispute deadline or a large failed payment is engineered to
feel urgent.

## Automate the failed payment report before you automate anything else

If you automate one thing in Stripe, automate the failed payment report,
because it is the highest value read in the product and almost nobody looks
at it on a schedule.

Involuntary churn is the churn you can actually prevent. A card expired, a
bank declined a foreign transaction, a limit was hit. The customer still wants
your product and has no idea anything happened, because the notification went
to an address they check on Thursdays. Every one is recoverable with a short
human message, and none are recoverable once the retry schedule runs out and
the subscription cancels itself.

A Monday list of who failed, why, how much is at stake, and how many retries
remain converts a silent revenue leak into a fifteen minute task. It writes
nothing and changes nothing. You send the messages. That pairs naturally with
a
[churn early warning](/bots/churn-early-warning) setup, which forecasts to
you and never contacts the customer.

Refund automation is the opposite trade in every dimension: high blast
radius, unrecoverable, and it saves you a click. The economics never work.

## Reconciliation is what a payments bot is genuinely good at

The second job worth setting up is matching Stripe against everything else
that claims to know about your money, because that work is tedious,
mechanical, and currently not being done.

Useful reconciliations, in rough order of how often they catch something:

- Payouts against what actually landed in the bank, including the timing gap,
  so you stop treating gross volume as cash.
- Active subscriptions against entitlements in your own database, which finds
  both people paying for access they lost and people using access they
  stopped paying for.
- Stripe fees against what your bookkeeping recorded, since fees deducted
  before payout are the most commonly mis-booked line in a small company.
- Invoices marked paid against your accounting system, where the mismatch
  list is the entire product.

In all four the deliverable is a list of exceptions, not a correction. The
[bookkeeping auditor](/bots/bookkeeping-auditor) draws exactly that line: it
never edits the live books, and every change waits for your approval. Keep the
same shape. Stripe is the system of record for money, and the bot's job is to
notice when something else disagrees with it, not to make them agree.

## Answer the case for letting the bot issue small refunds

The strongest counter-argument is not reckless. Your support process already
lets a person two weeks into the job refund a fourteen dollar charge without
asking anyone, because a slow reply costs more than the occasional wrong
refund. A bot with the same authority and a value cap is more consistent than
that person on a bad afternoon. A boundary that makes you click every one of
them means you did not automate support, you added a queue to it.

Three things break it.

The error shape is different. A human who misreads one ticket refunds one
customer. A bot that misreads a pattern refunds everyone matching it, in one
run, in whatever order the API returned them. Bounded attention is what keeps
human mistakes uncorrelated, and it is exactly the property a scheduled bot
does not have.

The cap is softer than it sounds. A per-refund ceiling is enforced by whatever
composes the request, which here is the model. Read your own key creation
screen: if it offers no value ceiling on the credential, the cap lives in the
charter, which is text competing with the ticket the bot just read.

Reversing the workflow keeps almost all of the win. Let the bot do the whole
judgment: read the ticket, pull the charge, check whether this customer has
been refunded before, and produce a row with the charge id, the amount, and a
sentence of reasoning. You approve twelve rows in ninety seconds and issue
them. Typing was never the expensive part.

| Who holds the refund capability | What it needs | What it breaks on | Verdict |
|---|---|---|---|
| You only, bot reads and reports | A read-only restricted key | Nothing. The slow step is you, which was the design | Start here, and most accounts stay here |
| Bot proposes, you issue the batch | The same key, plus charge ids in every row | A day you skip the report, in which case nothing happened | The one upgrade worth making |
| Bot refunds under a cap, prompting each time | Refund capability, plus a ceiling enforced somewhere real | Approval fatigue. The fortieth similar prompt gets approved unread | Fails on the human, not the machine |
| Bot refunds inside a written policy | Refund capability, plus trust in a paragraph | A ticket composed to read like an instruction | Text guarding text |
| Bot refunds at its own discretion | A full-capability key on a shared computer | One misread pattern, applied to every matching charge in a run | Never |

Where the objection wins ground: the closer your refund policy is to a
mechanical rule, the more of the decision the bot can own. First-time
customer, inside fourteen days, full amount, under a fixed ceiling is a rule
rather than a judgment. That does not mean the bot should hold the capability.
It means approving those rows takes two seconds instead of two minutes, which
is where the time you were arguing about actually sat.

## Check the first four reports against the dashboard by hand

A payments report gets trusted on sight, because numbers look finished. Give
the first month a check that is allowed to fail: pick one figure per report,
reproduce it in the dashboard yourself, and write both numbers down. Four
reports is enough. If they agree four times, the arithmetic has stopped being
your risk and you can read the reports for what they say instead.

When they disagree, the symptom usually names the cause.

| Symptom | Likely cause | Where to look | Fix |
|---|---|---|---|
| Weekly net does not match the dashboard | Period boundary. Your report week and the timezone the dashboard totals in are different weeks | The window the report claims | Print the window and timezone in the header on every run |
| Figures are plausible and no object ids are cited | The bot summarised rather than read, or a call returned nothing and the gap got filled | Open three cited ids | Require an id per claim, and treat an uncited number as missing |
| Totals collapse after a key rotation | The replacement key was built with a narrower resource set | The key creation screen, resource by resource | Rebuild from the family list, then rerun a period you already verified |
| It worked in rehearsal and not live | Test and live are different keys over different data | Which key the connection uses | Create a fresh live key with reads only, rather than copying the test key's shape from memory |
| A failed payment is reported that already recovered | The retry landed after the snapshot the bot read | That charge's own history | Report retry state and next attempt date beside the failure |
| Recurring revenue moves and no subscription changed | Annual and monthly plans normalised differently between runs | The stated basis for the figure | Fix the basis in the charter and make the report label it |
| A customer mentions an email you did not send | A write capability survived on the key, or a dashboard session is still signed in | Key permissions, and who is signed in on the shared computer | Rotate to reads only, and sign that session out |

The period boundary is the row people hit first and the one worth
over-solving. A report that states its own window and timezone is one you can
argue with. A report that states only a number is one you believe or ignore.

## Where the read-only rule strains: deadlines, entities, and currencies

Every recommendation has an edge. This one has four.

**Deadlines.** A dispute evidence window does not care that your bot is
read-only. The bot can name a deadline and cannot meet it for you, so its
contribution is lead time. Schedule it so the human step fits inside the
window rather than at the end of it, and accept the honest cost: a week you
are away is a week nothing gets submitted. That is a staffing answer, not a
permissions answer, and a wider key does not fix it.

**More than one account.** A restricted key belongs to one Stripe account, so
two entities mean two keys and two reports, and a merged total has an unstated
basis. Make every report name the account it read, even when there is only
one. It costs a line and prevents a figure that quietly covers half the
business.

**Mixed currencies.** One net figure across several currencies needs a
conversion basis and a rate date, and neither is visible in the number.
Require per-currency subtotals, or require the basis to be printed beside the
combined figure.

**The report itself.** Customer names, emails, and spend histories land in
whatever the bot writes, on a computer every bot on your account shares, where
files outlive the bot that made them. The key protects your balance and says
nothing about where the output goes. Decide that separately.

## Anything the customer reads needs its own approval

The last boundary is about words rather than money, and it gets skipped
because it feels smaller. It is not.

Stripe can send email: invoices, receipts, dunning notices, payment
confirmations. Anything the bot does that causes one of those to go out is a
message from your company to a customer about their money, which is a
high-emotion category even when the content is correct. A wrongly finalised
invoice is a bill somebody now believes they owe.

Keep it simple: the bot drafts, you send, always. If you want a bot in the
cancellation path specifically, the
[subscription cancellation advisor](/bots/subscription-cancellation-advisor)
pattern is the safe shape, since it never cancels a subscription without your
explicit approval of that specific one.

Run through the wider pre-connection list in the
[bot safety checklist](/blog/grok-bot-safety-checklist) before you generate a
key, and generate the key last. The order matters: decide the boundary, then
create a credential that cannot cross it, then write the charter that
describes it. Doing it the other way round means you have a live key with
full permissions sitting on a shared computer while you think about policy.

**Keep reading:** [Grok Bot and Airtable](/blog/grok-bot-airtable), [Grok Bot and Discord](/blog/grok-bot-discord), [Grok Bot and GitHub](/blog/grok-bot-github).

## Frequently Asked Questions

### Should a Grok Bot Stripe integration ever be allowed to issue refunds?

No. A refund is a completed transfer rather than a request, there is no undo
call, and on many accounts the original processing fee does not come back
with it. Recovering the money means asking the customer to pay again, which
turns a bot error into a customer conversation. Enforce it with a restricted
key that has no refund permission rather than a charter clause, because the
key is checked by Stripe's servers while the clause is just text competing
with whatever the bot read in a support ticket that morning.

### What Stripe permissions should a reporting bot have?

Read access to charges and payment intents, subscriptions, invoices, and
customers, granted through a restricted key with every write permission set
to none. Refuse refunds, payouts, disputes, product and price writes, webhook
endpoint management, and account or team settings. Create the key on the
narrowest setting that still lets the reports compute, then widen only if a
report genuinely fails. Read the resource list on the key creation screen in
your own account, since the exact set changes as Stripe ships features and
differs between accounts.

### Why is draft-only not enough protection for a payments bot?

Because draft-only depends on the tool having a draft state, and Stripe does
not have one for the actions that matter. There is no pending refund object
awaiting your review and no proposed cancellation. The API call is the act.
An approval prompt sits in front of that call, which helps until the
twentieth similar-looking prompt of the week gets approved unread. Grok Bot's
documentation is direct about the limit: an approval controls the proposed
action and does not reverse work already completed. So the control belongs in
the credential.

### What should a Stripe bot automate first?

The failed payment report. Involuntary churn from expired cards and bank
declines is the most recoverable revenue in most small companies and almost
nobody reviews it on a schedule, because the notifications land in an inbox
nobody reads on time. A weekly list of who failed, the decline reason, the
amount at risk, and how many retries remain converts a silent leak into a
short task. It requires only read access, changes nothing, and you send any
customer messages yourself.
`,
};
