import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Finance: Reconciliation and Expense Review',
  description:
    'AI bots for finance can match receipts, build the exception list, and audit recurring spend. They never move money, post an entry, or file anything.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Finance: Reconciliation and Expense Review

The first week of the month is nine jobs pretending to be one. The bank feed has
412 lines. There are 90 receipts in a folder, another 30 in Slack, and some
number that exist only as a photo on somebody's phone. Four invoices are past 60
days. A VAT deadline sits on the 7th, payroll on the 25th, and a founder wants
the cash number by Wednesday.

Almost none of that is arithmetic. The arithmetic was solved decades ago. Your
week is finding the fourteen things that do not agree, working out why, then
making a small number of irreversible commitments on the back of it. That split
makes finance an unusually good and unusually dangerous place to put bots: the
reading half is enormous and mechanical, the committing half is where mistakes
have signatures on them.

## Break month end into five kinds of work before automating any of it

Split the week five ways and the automation question answers itself.

Matching. Bank and card lines against receipts and invoices. High volume, low
judgment per line, the single largest consumer of your time.

Coding. Putting each transaction into the right account. Rules based, mostly
boring, occasionally the exact place where the tax treatment is decided.

Chasing. Receipts from colleagues who lost them, payments from customers who
have not paid. Repetitive, unloved, slipping.

Reviewing exceptions. Small in volume, large in value, and the actual job. Where
an unrecognised subscription, a double charge, or a supplier quietly repricing
you turns up.

Committing. Posting entries, releasing payments, submitting the filing. Minutes
of work, irreversible, frequently attached to a named human by law.

There is no natural break in that list. The work slides from mechanical to
irreversible along one gradient, with no moment where the tooling warns you that
you crossed from reading into committing. That is why the boundary has to be
written down rather than assumed.

## Rank finance tasks by what a mistake costs to unwind

Volume is the wrong axis. Sort by what reversing a wrong output takes and who is
standing there when you do it, and the list separates cleanly.

| Finance task | Cost to unwind | Who finds out | Verdict |
|---|---|---|---|
| Matching a line to a receipt | Re-run it | You | Automate |
| Naming an unmatched line and why | Re-run it | You | Automate |
| Inventorying recurring charges | Re-run it | You | Automate |
| Drafting a receipt chase | Delete the draft | You | Automate, you send |
| Coding a routine transaction against a written rule | Edit the proposal | You | Automate as a proposal |
| Coding an unusual transaction | An amended return, years later | Your accountant or a tax authority | Never |
| Posting a journal entry | A reversal, visible on both sides forever | An auditor | Never |
| Releasing or scheduling a payment | A recall request that may fail | The vendor and your bank | Never |
| Submitting a filing | An amendment, plus penalty and interest | A tax authority | Never |
| Cancelling a subscription | Re-subscribe, sometimes at a new price | Your team, mid-week | You approve each one |

The interesting row is the fifth. Coding against a rule you wrote is safe: the
rule is yours and the output is a proposal. Coding a transaction that fits no
rule is the top of the never list, because the transaction resisting your rules
is precisely the one where the treatment is a decision. The same action sits on
both sides of the line depending on whether a rule fired, which is why "the bot
categorises transactions" is not a coherent permission and "the bot proposes a
category when rule 4 fires" is.

## Give the close six bots, none of which commits anything

| The job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Statement to receipt matching | Matches by rule, names the reason when it cannot | Never edits the live books, each change waits for your approval | [Bookkeeping Auditor](/bots/bookkeeping-auditor) |
| Recurring spend inventory | Every repeating charge with amount, cadence, last price change, cancellation path | Never cancels or unsubscribes anything you have not individually approved | [Subscription Pruner](/bots/subscription-pruner) |
| Keep or cut analysis | Weighs what a tool costs against evidence you use it | Never cancels a subscription without your explicit approval of that one | [Subscription Cancellation Advisor](/bots/subscription-cancellation-advisor) |
| Vendor price movement | Watches published pricing so a renewal is not a surprise | Only reads public pages, never fills forms or creates accounts | [Competitor Pricing Watch](/bots/competitor-pricing-watch) |
| Receipt chasing | Finds which expenses are missing paperwork and drafts the nudge | Never sends an email, every draft waits for explicit approval | [Inbox Triage](/bots/inbox-triage) |
| Cash and holdings view | Assembles the position and proposes what a rebalance would look like | Never trades or moves money, every rebalance is a recommendation to you | [Personal CFO](/bots/personal-cfo) |

Six listings, six jobs, one shared verb in the boundary column: none of them
commits. That is not a coincidence, it is the only shape a finance bot can take
and still be safe to leave running on a schedule.

Start with matching. Biggest time sink, and the one where a mistake costs a
correction rather than a consequence, provided the boundary below holds. The
line-level build, including how to write the matching rules, is in
[the expense reconciliation setup](/blog/grok-bot-to-expense-reconciliation),
and the recurring-charge sweep has its own walkthrough in
[the subscription audit](/blog/grok-bot-to-subscription-audit).

## Guard against the confident wrong match, not the missing one

A missing match costs you thirty seconds. A wrong match costs you a number you
reported, and possibly signed.

Understand why the wrong match is the likelier error. A language model's least
natural output is "I could not do this". Given a bank line reading SQ *TCFEE 04
and a folder of receipts, a plausible pairing is the path of least resistance,
and it arrives with a fluent one-line justification. Two amounts nine pence
apart, a date two days out, a descriptor resembling another vendor: each is a
reason to stop, and each is easy to write past.

The counter is not better prompting. It is making a match a claim that requires
evidence. Every match states which two records, the amount difference, the date
difference, and which numbered rule fired. If no rule fired, there is no match,
however obvious it looks to a reader. Amount tolerance is zero except for a
named list of cases like currency conversion and card tips, and in those cases
the difference is printed rather than absorbed. A receipt is consumed once, and
a second attempt to use it is itself an exception.

That last rule does more work than it looks. Single consumption turns a
duplicate charge from an invisible event into a reported one: the second charge
reaches for a receipt that already matched and cannot have it. Without it, a
supplier billing you twice reconciles perfectly and never appears anywhere.

## Prove the matcher is not inventing, with tests that can fail

A match rate is not evidence on its own. A bot that guesses well posts a better
match rate than one that follows your rules, which is the whole problem. Run
these against a closed period you already reconciled by hand.

| Test | Setup | Passes when | A failure means |
|---|---|---|---|
| Half receipts removed | Copy a closed month, delete half the receipt files | Match count falls roughly in proportion | It is pattern completing, not matching. Every figure it produced this year is suspect |
| Decoy receipt | Add a receipt from another month at an identical amount | It lands in DATE_OUT_OF_WINDOW | The date rule is decorative |
| Duplicate receipt | Copy one receipt under a new filename | The second use raises RECEIPT_ALREADY_USED | Receipts are being consumed twice and your totals are wrong |
| Truncated export | Cut the last 40 rows from bank.csv | The gap is named in what it could not see | A clean report on incomplete data, which is the worst output of all |
| Rule attribution | Take 10 matches, verify the cited rule by hand | All 10 check out | Rules are cited decoratively, so no match is actually evidenced |
| Tolerance drift | Alter one receipt by nine pence | It becomes AMOUNT_MISMATCH | Tolerance crept in and small errors are being absorbed silently |

Run the first test before you trust a single number. The alarming result is a
match count that barely moves, which means the bot is reconstructing plausible
pairings from the bank line alone and the receipts were decoration. Rerun the
first and last tests after every charter edit, because one reworded sentence is
enough to move this behaviour.
[How to test a bot before you trust it](/blog/testing-your-bot) covers the
general discipline.

## Ship the exception list, because that is the deliverable

Reframe what you are buying. Not the 380 lines that matched, because those never
troubled you. You are buying a short, reasoned queue that turns two hours of
archaeology into fourteen decisions of thirty seconds each.

So the format of that queue is the product. Sort by what it costs to be wrong
rather than by count: one unknown 4,000 line outranks nine mystery card charges
of eleven pounds, and a reporting bot's instinct is to lead with the biggest
bucket. Then give every entry a reason code from a fixed vocabulary small enough
to memorise, because each code implies a different action and a different
permanent fix.

| Reason code | What it means | Your move now | The permanent fix |
|---|---|---|---|
| NO_RECEIPT | Nothing in the folder matched | Ask the spender, or accept it | Capture at point of sale, not at month end |
| MULTIPLE_CANDIDATES | Two or more receipts fit the rule | Pick one, record which | Sharper vendor mapping, narrower window |
| AMOUNT_MISMATCH | Amounts differ, difference printed | Check for a tip or an FX spread | Add the vendor to the named tip or FX list |
| UNKNOWN_DESCRIPTOR | Descriptor absent from mappings.csv | Identify it once | Add the row to mappings.csv |
| RECEIPT_ALREADY_USED | A second line reached for a used receipt | Look for a duplicate charge | Chase the vendor, or fix the folder |
| DATE_OUT_OF_WINDOW | Receipt sits outside the rule window | Confirm the delay is genuine | Widen the window for that one named vendor |
| CURRENCY_UNRESOLVED | No rate available for the date | Supply the rate | Pin a rate source in the charter |

The fourth column is why the list shrinks month over month instead of repeating.
An UNKNOWN_DESCRIPTOR you resolve once never returns. A NO_RECEIPT you resolve
by nagging returns every month until you change how receipts are captured.

The list must also state what it could not see: the export that stopped on the
24th, the folder that was not shared, the currency it could not convert. That
section is the difference between an exception list and a false clean bill of
health, and it should carry the last row date of every file it read. One more
piece of plumbing pays for itself immediately: a known-exceptions file you
maintain, so the same accepted oddity is not re-raised until you stop reading
the list.

## Diagnose a bad reconciliation run from its symptom

Most of these look like the bot working well, which is why they survive months.

| Symptom | What is actually happening | The fix |
|---|---|---|
| 60 exceptions, all under 20 | Sorted by count, not by value | Sort by amount descending, always |
| The same five exceptions every month | No known-exceptions file | Maintain one, review it quarterly |
| Match rate jumped after a prompt tweak | The bot started reasoning past your rules | Re-run the half-receipts test before believing the number |
| A vendor charge appears twice, both matched | One receipt consumed twice | Enforce single consumption, raise the second use |
| Your numbers disagree with the accounting system | It read a stale or partial export | Print the last row date of every source file, every run |
| A clean report, but the feed stopped on the 24th | Nothing reported the absence | Require a coverage section with date ranges |
| Exceptions cite rules you never wrote | Rule numbers used as decoration | Make the charter's rule list the only vocabulary allowed |

The third row is the dangerous one, because a higher match rate reads as
improvement to everyone including you. Treat an unexplained jump the way you
would treat a supplier invoice that suddenly went down: pleasant, worth
proving.

## Write moving money, posting an entry, and filing as three separate lines

People collapse those three into "the bot cannot spend money". They are
different actions with different consequences, and each needs its own sentence
in the charter.

Moving money covers payments, transfers, refunds, card actions, and payroll
runs. It also covers approving an invoice for payment, which is moving money
with an extra click in between.

Posting an entry means writing to the ledger. This is the one people wave
through, because a journal entry feels like data rather than money. It is not. A
posted entry is a record you may have to explain years later, a reversal leaves
both sides visible forever, and a book whose entries were authored by a model is
a book you cannot fully account for. The bot proposes entries in a file. A
person posts them.

Filing means submitting to a tax or government body: returns, payroll
submissions, statutory accounts, contractor forms. A filing is a signed
statement attached to a named human, and there is no story in which a bot files
and you are not the one who answers for it.

Three sentences, not one, because a charter saying "never spend money" is
satisfied by a bot that posts forty journal entries. Limits are read literally by
the thing they constrain.

The runtime facts make this stricter rather than looser. An approval controls a
proposed action and does not reverse completed work, so an approval prompt is
not an undo button for a payment that has left. And there is no audit view of
bot actions yet, which is exactly the wrong property for the one function in a
company that runs on audit trails. Until there is one, you keep the trail: the
bot appends findings to a dated file it may never edit, and last month's file is
immutable.

## Never sign a bot into a bank, and work from exports instead

One piece of platform reality decides your whole architecture here.

All bots on your account share one persistent cloud computer, assigned to your
user account rather than to an individual bot. Browser cookies, signed-in
sessions, files, and command line credentials are shared across every bot on it.
Each bot gets its own screen, and the documentation is explicit that the screens
are separate work surfaces and not separate security boundaries, and that you
should not use separate bots as a security boundary. Deleting a bot does not
remove the shared files or browser sessions it leaves behind.

Read that as a finance person. A signed-in banking session on that machine is
available to everything on it, not just the bot you had in mind, and with no
audit view you would reconstruct events by hand afterwards. So the rule is
absolute: never sign a bot into a bank, a card portal, a payroll system, or a
tax account. Not with read-only credentials, not "just this once".

Work from exports. You download the CSV or OFX yourself into a folder the bot
reads. Where your accounting tool offers a genuine read-only seat, use that and
nothing wider. Anything the bot needs to buy or trial goes on a dedicated card
with a low limit, never the account that pays your suppliers. The wider version
of this reasoning is in
[the shared computer security guide](/blog/grok-bot-shared-computer-security).

Two smaller facts point the same way. Bots run behind static egress IP addresses
and some services flag datacenter addresses, banks among the most aggressive.
And the correct behaviour at a step-up prompt is to stop:
[Flight Check-In](/bots/flight-check-in) states it plainly, stopping for a human
at every two-factor prompt or captcha and never trying to get past one. A bank
blocking your bot is not an obstacle to route around.

## Answer the strongest objection: my accounting tool already matches these

The honest challenge comes from people who already run bank feeds and rules.

"My accounting software auto-matches most lines and suggests categories from
history. It is deterministic, it is supported, and it is included. Why add a
model to a job a rules engine already does?"

Most of that is right, and you should keep the rules engine. Deterministic bank
rules beat a model at the thing they do, they are auditable, and every line they
clear is a line nobody thinks about. Nothing here proposes replacing them.

The gap is at the other end. A rules engine optimises for match rate, and match
rate is the wrong objective, because the lines it cannot clear land in one
undifferentiated pile with no reason attached and no memory of last month.
Nothing tells you the export was short, a receipt was used twice, or this same
unknown descriptor has appeared four months running. The exception queue is the
deliverable, and a rules engine treats it as residue.

So the shape that works is both. Rules clear what rules can clear, the bot takes
what is left, applies your named rules, and produces the coded queue plus the
coverage report. If your feeds already leave a short queue you genuinely read
every month, you do not need a bot, and this article has nothing to sell you.

## Keep these finance jobs off the bot entirely

Payments, in every form, including scheduling one for later and approving one
for release.

Ledger writes. Proposals in a file, yes. Posting, no.

Filings and anything carrying a signature, including the letter to your
accountant that becomes the basis of a filing.

Payroll. All of it. Not the calculation, not the file, not the submission, not
the payslip email.

Policy questions dressed as data entry. Is this expense allowable, is this capex
or opex, is this person a contractor or an employee. The answer will be fluent,
confident, and blind to your jurisdiction, and being wrong lands years later
with interest attached.

Coding anything unusual. Routine categorisation against explicit rules is fine.
The transaction that does not fit a rule is exactly the one where the tax
treatment lives, and it goes in the exception list rather than into an account.

Credit decisions and collections escalation. Calling a customer a bad payer and
handing them to an agency is a business decision with a legal tail.

Any communication with an auditor, a bank, a regulator, or a tax authority.
Chasing an unpaid invoice at least happens in your own voice to your own
customer, and even that stays a draft, which
[the invoice chasing setup](/blog/grok-bot-to-invoice-chasing) works through
properly.

Deleting or merging anything it believes is a duplicate. Duplicates in books are
findings, not chores.

And the one that looks harmless: writing the commentary in a board pack.
Numbers with a narrative attached become the narrative, and the narrative is
your judgment, not a summarisation task.

## Paste this month end exception charter and adjust the rules

\`\`\`text
You are my Month End Exceptions bot. You find what does not agree.
You never touch money, the ledger, or a filing.

// TRIGGER
The 3rd of each month at 07:00 <IANA zone>, and on demand when I ask.

// WHAT YOU READ
- /finance/exports/<YYYY-MM>/bank.csv   (I export it, you never log in)
- /finance/exports/<YYYY-MM>/card.csv
- /finance/receipts/<YYYY-MM>/          (files I have put there)
- /finance/mappings.csv                 (descriptor to vendor, mine)
- /finance/known-exceptions.csv         (accepted, do not re-raise)
Nothing else. You never open a bank, card, payroll, or tax portal and
you never sign into a financial service.

// MATCHING RULES, IN ORDER. A match needs a rule to fire.
R1  exact amount + vendor from mappings.csv + within 3 calendar days
R2  exact amount + an invoice or reference number present in both
R3  exact amount + vendor + within 10 days, only for <named vendors>
No other rule exists. "It is obviously the same thing" is not a rule.
Amount tolerance is zero, with two exceptions: currency conversion,
where you print the converted amount, the rate, and the rate source;
and card tips, where you print both amounts. Each receipt is consumed
once, and a second use is itself an exception.

// OUTPUT
1. EXCEPTIONS, sorted by amount descending. For each: the bank line
   verbatim, one reason code, and what would resolve it. Use these
   codes exactly: NO_RECEIPT, MULTIPLE_CANDIDATES, AMOUNT_MISMATCH,
   UNKNOWN_DESCRIPTOR, RECEIPT_ALREADY_USED, DATE_OUT_OF_WINDOW,
   CURRENCY_UNRESOLVED.
2. MATCHED: a table of count by rule. No commentary on spending.
3. WHAT I COULD NOT SEE: every file that failed to open, every export
   that looks truncated, the last row date of each file, and any date
   range missing from the data.
4. NEW RECURRING: charges present this month and last at the same
   amount that are absent from mappings.csv.

// WHERE YOU STOP
You never initiate, schedule, approve, or cancel a payment, transfer,
refund, or payroll run.
You never write to the accounting system, post a journal entry, edit a
transaction, or change a category in the live books.
You never prepare or submit a filing to any tax or government body.
You never email a vendor, customer, accountant, bank, or auditor.
You never sign into a financial institution and never store a
credential.
You never delete or merge a transaction you believe is a duplicate.

Write findings to /finance/exceptions/<YYYY-MM>.md, append only. Never
edit a previous month's file.

If a task cannot be completed without crossing one of those lines,
stop, say what you would have done, and wait. Failing is the correct
outcome. Do not find another route to the same effect.
\`\`\`

## Run one close end to end: 412 lines, 120 receipts, 14 exceptions

Point it at a copy of last month first and compare its exception list against
the one you built by hand. Here is four months of that, on the numbers from the
opening paragraph.

| Stage | What the run produced | What it cost you |
|---|---|---|
| Dry run, closed month | 380 of 412 matched by rule, 32 exceptions | 40 minutes comparing against your own list |
| Month 1, live | 371 matched, 41 exceptions, 9 unknown descriptors | 35 minutes, mostly naming descriptors once |
| Month 2 | mappings.csv has 9 new rows. 388 matched, 24 exceptions | 20 minutes |
| Month 3 | known-exceptions holds 6 accepted oddities. 391 matched, 14 exceptions | 12 minutes |
| Month 3 findings | A duplicate 1,240 charge, and a supplier moved from 89 to 129 | Two real recoveries from one 12 minute queue |

Two things there matter more than the match rate. The exception count falls
because you fixed causes, not because the bot got cleverer, which is the only
improvement that lasts. And both month 3 findings are things a human misses at
380 matched lines, which is the real argument: not speed, but attention pointed
at the fourteen lines that deserve it.

## Where this breaks down: entities, currencies, and audited books

Multiple entities. Intercompany transactions appear on both sides and reconcile
against each other rather than against a receipt. A single-folder matcher misses
them or matches them wrongly. Give intercompany its own reason code and let it
fall out as an exception every time.

Multi-currency at scale. Printing the rate and its source covers a handful of
foreign charges. It does not cover revaluation, realised and unrealised
differences, or period-end rates, which are accounting decisions with a policy
behind them rather than conversions.

Accruals and prepayments. Which period a cost belongs to is judgment about the
substance of an arrangement. A bot can flag an invoice that spans a period
boundary. It cannot allocate it.

Audited books. Auditors ask what happened and when. The runtime has no audit
view of bot actions yet, so your evidence is the immutable dated file and
nothing else. If that is not enough for your auditor, find out now rather than
in March.

Cash and paper. If a meaningful share of spend never produces a digital receipt,
your list is dominated by NO_RECEIPT and the bot is measuring a process problem.
Fix capture first.

The adjacent problem, once the queue is short, is what happens to the items you
hand back to a human and nobody picks up.
[How a bot should hand work back to a human](/blog/bot-handoff-to-human) covers
the shape of a handover that survives a busy week.

**Keep reading:** [Grok Bot for Designers](/blog/grok-bot-for-designers-figma-motion), [Grok Bot and HubSpot](/blog/grok-bot-hubspot), [Every Grok Bot Integration and What Each One Unlocks](/blog/grok-bot-integrations-list).

## Frequently Asked Questions

### Can AI bots do bookkeeping and reconciliation?

They can do the reading half well and should never do the committing half. A bot
can match statement lines to receipts under rules you wrote, produce a reasoned
exception list, inventory recurring charges, find missing paperwork, and draft
the chase emails. It should not post entries, release payments, or submit
filings. The useful mental model is a very fast assistant who prepares
everything for review and has no authority to commit anything, which is also how
the catalog listings for this work are written.

### What should a finance bot never be allowed to do?

Three separate things, and they need three separate sentences in the charter.
It never moves money, which includes payments, transfers, refunds, payroll, and
approving an invoice for release. It never posts to the ledger, because an entry
is a record you may have to explain years later and a reversal leaves both sides
visible. And it never prepares or submits a filing, since a filing is a signed
statement attached to a named person. Communication with banks, auditors, and
tax authorities is out for the same reason.

### How do you stop a reconciliation bot from making a wrong match?

Make a match a claim that requires evidence. Every match names the two records,
the amount difference, the date difference, and the numbered rule that fired,
and if no rule fired then no match exists regardless of how obvious the pairing
looks. Keep amount tolerance at zero apart from named cases like currency
conversion, where the difference is printed rather than absorbed. Then test for
invention: re-run a closed month with half the receipts removed and confirm the
match count falls proportionally rather than holding up.

### Should a bot have access to your bank account?

No. Every bot on the account shares one persistent cloud computer, and browser
cookies, signed-in sessions, and files are shared across all of them, with the
documentation stating plainly that separate bots are not a security boundary and
that deleting a bot does not remove its sessions. There is also no audit view of
bot actions yet. Export the statements yourself and let the bot read files
instead. If a bank challenges the bot with a step-up prompt, the correct
behaviour is to stop, not to route around it.
`,
};
