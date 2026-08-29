import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Move a Booking Pipeline Row, Never Charge the Card',
  description:
    'Build a grok bot booking pipeline that compares options, preserves evidence, and moves review rows while a person keeps payment and booking authority.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Move a Booking Pipeline Row, Never Charge the Card

Leena's travel request looks harmless: find three refundable hotel options near a client office and move the row to Ready for review. The dangerous shortcut appears at the end. A browser already holds a traveler profile and a saved card, so "finish the booking" can turn research into a purchase.

This **grok bot booking pipeline** stops before that line. The bot may read an approved request, compare visible options, save evidence, and move an internal row between allowed preparation states. It never confirms a reservation, charges a card, accepts a cancellation policy, or sends a traveler message. A named person owns those consequences.

The example uses six synthetic travel requests and a four-stage sheet. Those are design choices for this tutorial, not product limits.

## Separate research progress from purchase progress

Use two different state machines. Research progress can move from New to Researching to Ready for review to Needs input. Purchase progress belongs in a separate human-controlled process. Do not add Booked as the next bot-accessible column because it invites the preparation routine to cross into transaction authority.

| Research state | Bot may enter | Required evidence | Human meaning |
|---|---|---|---|
| New | No | Request just arrived | Awaiting pickup |
| Researching | Yes | Start time and request ID | Work began |
| Needs input | Yes | Missing field named | Requester must answer |
| Ready for review | Yes | Option packet attached | Person may assess |
| Purchased | No | Confirmation and payment | Separate process only |

This split also improves reporting. A row ready for review is not revenue, travel, or a confirmed reservation. It is an internal artifact awaiting a decision.

## Require a complete request before opening a booking site

Leena makes destination, dates, traveler count, budget currency, refundable requirement, approved neighborhood, and reviewer mandatory. The bot validates these fields before browsing. Missing information moves the row to Needs input with one precise question.

Do not ask the bot to infer dates from a meeting title or assume that one traveler means one room. Those guesses can change price and cancellation exposure. The source row should be the authoritative request, while calendar or email can be quoted as supporting context only.

The [Booking Pipeline Runner](/bots/booking-pipeline-runner) is the closest catalog pattern. [Bargain Scout](/bots/bargain-scout) can inform comparison work, [Meeting Prep Brief](/bots/meeting-prep-brief) shows a compact evidence packet, and [Source Verifier](/bots/source-verifier) demonstrates claim-to-source discipline.

## Write the never-charge boundary before the happy path

The boundary should name every consequence that remains human. "Do not book" is good but incomplete because a site may label the final action Reserve, Confirm, Pay now, or Hold. Include the economic and contractual acts.

\`\`\`text
ROLE: Booking option researcher
TRIGGER: One complete request enters New with a reviewer assigned.
READ: Approved request fields and public booking options.
PRODUCE: Three option cards with source URL, visible total, currency,
refund wording, distance evidence, checked time, and open questions.
MOVE: New -> Researching -> Ready for review, or Needs input.
STOP: Login mismatch, unavailable dates, unclear total, or policy conflict.
BOUNDARY: Never reserve, confirm, pay, charge a card, accept terms,
cancel, modify a booking, or contact the traveler or property.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) covers why this uses verbs and consequences. The row transition is allowed because it is an internal, reversible status change with a fixed list.

## Record the observed identity before collecting prices

A persistent session can put Leena in the wrong traveler or company account. Add an identity preflight that records the visible account name and currency before search. Stop when the observed identity differs from the request.

State the product background once: bots on an account share persistent browser state, so use [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) for session lifetime and storage details.

Do not use a real saved card for testing. Use a public search or a disposable practice account without purchasing authority. The test should prove row movement and evidence quality, not whether the checkout path works.

## Normalize option cards without pretending prices are stable

Each option card records the observed total, currency, taxes shown, refund wording, room or fare label, source URL, and checked timestamp. It says observed, not guaranteed. Prices and availability can change between research and human review.

| Field | Why it is required | Rejection condition |
|---|---|---|
| Source URL | Lets reviewer reopen evidence | Missing or unrelated page |
| Checked time | Shows freshness | Absent timezone |
| Total and currency | Prevents unit confusion | Currency missing |
| Refund wording | Exposes cancellation condition | Only "flexible" paraphrase |
| Distance evidence | Supports location constraint | No method or source |
| Open questions | Preserves uncertainty | Blank despite conflict |

The bot should quote a short policy phrase and link the page rather than transform nuanced terms into a confident label. The reviewer owns the final interpretation.

## Keep card data and payment data in different systems

The research sheet does not need a card number, billing address, security code, loyalty credential, or payment token. Remove those columns. If a downstream booking process needs payment, it should retrieve authority through its own controlled mechanism after human approval.

A pasted instruction cannot create isolation. [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) explains inherited authority. If the browser is already signed in with purchasing power, the charter still matters, but your safer design is to research in an account without checkout authority.

This is defense in depth: narrow data, narrow allowed states, explicit stops, and human purchase control. No single sentence carries the entire burden.

## Move rows through an allowlist, never free-form statuses

The bot may choose only Researching, Needs input, or Ready for review. A workflow validates the current state and requested next state. It rejects any transition from Ready for review to Purchased and any unknown status.

Use request ID as the idempotency key. A retry updates the existing option packet and checked time instead of creating another row. If a human has started the purchase process, the research routine stops rather than refreshing the row beneath them.

[Move a Zap to a Bot](/blog/move-a-zap-to-a-bot) explains how to preserve deterministic movement while adding interpretation. The same seam works here: the bot prepares fields, and the workflow enforces transitions.

## Compare options against declared constraints, not a hidden score

Leena's request ranks refundable terms first, walking distance second, and observed total third. The bot displays each criterion separately. It does not collapse them into an unexplained "best" option.

| Option | Refund evidence | Location evidence | Observed total | Review note |
|---|---|---|---|---|
| A | Free cancellation until stated time | 0.6 km map result | 18,400 INR | Meets declared order |
| B | Partial refund wording | 0.3 km map result | 17,900 INR | Policy needs review |
| C | Nonrefundable | 0.2 km map result | 15,800 INR | Reject on first criterion |

These values are invented test data. They demonstrate the packet shape, not market pricing. A human may still choose differently after considering information outside the request.

## Route policy conflicts to a person without improvising

If every option exceeds budget, the bot does not silently widen distance or choose nonrefundable inventory. It moves the row to Needs input and states which constraint blocked completion. The reviewer can change the request explicitly.

Similarly, if the site shows "pay at property" beside a card guarantee, the bot records the visible wording and stops. It does not decide whether a guarantee counts as charging. The boundary covers accepting terms and reserving, not just immediate payment.

This is the core operating advantage of a pipeline: uncertainty has a destination. It does not have to be solved inside the browser session.

## Answer the traveler who wants one-click completion

The strongest objection is convenience. If a person must reopen the site, check availability, and enter payment, the packet may feel like duplicated work. For routine personal travel with low consequence, a user may accept broader automation.

This tutorial is for a shared business process where payment, cancellation, policy, and traveler communication require a named owner. The packet still saves search and comparison time while preserving a clear consent moment. If one-click purchase is the actual requirement, design a separate transaction system with explicit authorization, not a quiet extension of the research charter.

[What an Approval Actually Governs](/blog/what-an-approval-actually-governs) explains why a late approval cannot undo browsing or earlier writes. Put the gate before the transaction.

## Walk Leena's Tuesday request through every state

At 08:45, request TR-106 enters New for Bengaluru, two nights, one traveler, a declared INR budget, and refundable terms. At 09:00, the routine validates fields and moves it to Researching. The identity preflight matches the practice account.

At 09:18, three cards are attached. One is rejected by the declared refund criterion. Two remain visible with source links and checked times. The bot moves the row to Ready for review and stops.

At 10:05, Leena opens the sources. One price has changed, so she updates her decision outside the bot pipeline and completes the booking through the approved human process. On day thirty, the row still shows the research packet, reviewer, and final handoff, but the bot does not claim it made the purchase.

## Diagnose a bad packet by the control that failed

| Symptom | Cause | Immediate action | Durable fix |
|---|---|---|---|
| Wrong currency | Identity or locale mismatch | Stop review | Strengthen preflight |
| Price lacks taxes | Extraction incomplete | Reject option | Require total components |
| Duplicate rows | Retry without stable key | Merge and pause | Enforce request ID |
| Row says Purchased | Transition allowlist failed | Freeze workflow | Remove state from bot scope |
| Card charged | Boundary and capability failure | Escalate immediately | Remove purchase authority |

Do not repair a charged-card incident by changing wording alone. Remove or gate the capability, preserve evidence, notify the accountable owner, and follow the organization's incident process.

## Verify the pipeline with six adversarial requests

Create six synthetic rows: one complete request, one missing currency, one impossible budget, one identity mismatch, one policy conflict, and one duplicate request ID. Expected outcomes are written before the run.

The complete case reaches Ready for review with three option cards. The missing, impossible, identity, and policy cases reach Needs input or stop with an exact reason. The duplicate updates no second row. Inspect booking sites, payment channels, email, and the pipeline to confirm zero reservations, charges, cancellations, or messages.

Run the same fixture after every charter or column change. A test that checks only the final row misses browser consequences.

## Operate routines within documented record limits

Verified product facts say a routine belongs to one bot, each bot can have at most 50 routines, and the app keeps the 20 most recent run records per routine. Use those facts for capacity and evidence planning. Do not assume the in-app run list is your long-term booking record.

Export or preserve the business evidence your policy requires in an approved system: request, option packet, reviewer, decision, and transaction confirmation created by the human process. [How to Schedule a Grok Bot Routine](/blog/how-to-schedule-a-grok-bot-routine) covers scheduling mechanics. [Bot Data Retention](/blog/bot-data-retention) covers what must live outside the recent-run window.

The routine should pause when the reviewer is absent, the source changes materially, or the failure rate exceeds the team's declared threshold.

## Stop this tutorial before payment and ticket changes

This design ends at a reviewable comparison packet and allowed internal row transition. It does not cover payment authorization, card storage, refunds, cancellations, ticket changes, visa advice, expense policy approval, or emergency travel support.

## Hand the reviewer a fresh decision instead of a stale recommendation

The packet should reduce search work without pretending the market stopped. Leena's review screen shows the checked time at the top and requires her to reopen each finalist. If the visible total, refund condition, or availability changed, she marks the option stale. The pipeline does not copy the old observation into a new booking attempt.

A strong handoff separates observed fact, derived comparison, and human choice. "The page showed 18,400 INR at 09:18" is an observation. "Option A ranks first under refundable, distance, then price" is a derivation from declared rules. "Book Option A" is a decision that Leena makes after checking current terms.

The handoff also names every unresolved question. A blank question field can mean there were no issues or the bot failed to notice them. Require the explicit value none observed when the packet contains no open question. That makes omission distinguishable from completion.

Leena tests reviewer ergonomics with a colleague who did not watch the run. The colleague must identify the request, constraints, source freshness, leading option, rejected option, and reason the bot stopped. If the colleague has to inspect the conversation to reconstruct the packet, the output schema is incomplete.

Do not optimize reviewer time by hiding the rejected choices. One rejected nonrefundable option proves the first criterion was applied. Keep it in the packet with a short rejection reason, while limiting the packet to the declared three candidates so review does not become another search session.

Define expiry as policy, not product behavior. Leena chooses a two-hour freshness target for the synthetic exercise. After two hours, Ready for review becomes Refresh required through a human-controlled transition. The bot may research again only if the reviewer requeues the request and no purchase process has started.

The pipeline needs collision handling. If Leena opens checkout while a routine begins refreshing, the routine must stop. Add a human_in_progress field or equivalent lock set by the transaction process. The research routine reads it before browsing and again before updating the packet.

Finally, reconcile the pipeline after a person books. Store the booking reference in the approved travel system and link its identifier to the research request. Do not paste payment details or full confirmation documents into the bot record. The research row can close as Handed off with a reference, preserving separation between preparation evidence and transaction authority.

This reviewer design is how never-charge remains useful instead of ceremonial. The bot delivers a compact, source-linked comparison at the moment a person can make an informed choice, and the person sees exactly what must be refreshed before accepting terms.

Leena adds a source-change drill before using the pipeline live. She alters one synthetic request after Researching begins. The routine must detect that dates or budget no longer match the packet, mark the old packet superseded, and return to Needs input. It must not blend options from two request versions.

Each request therefore has a version number. The option packet repeats it, and the workflow accepts Ready for review only when the current request and packet versions match. Human edits increment the version. Retries against an old version stop.

Test unavailable inventory as a normal result. If an option disappears, the bot records unavailable at the observed time and evaluates the remaining candidates. If fewer than the requested three meet constraints, it presents the smaller set and names the shortfall. It never adds a noncompliant option merely to fill the table.

Test misleading totals too. A page can show a nightly rate before taxes and a different final total later. The bot records the label and page location of every amount. If the all-in total is not visible without entering checkout, the option becomes Needs review rather than an estimated purchase price.

The reviewer checklist uses six yes-or-no questions: correct request version, correct visible identity, current source reopened, total and currency visible, policy wording reviewed, and purchase action still human. A no stops the decision. The checklist is intentionally short enough to use but specific enough to catch the tutorial's main failure modes.

After handoff, the pipeline owner samples one packet each week for the first month. Those numbers are Leena's operating choice. The sample traces every displayed field to its source and checks that no payment or communication capability entered the research path. Any boundary incident pauses all requests, not just the affected row.

If the team later adds flights, cars, or event tickets, create separate schemas because their constraints and change policies differ. Reusing a hotel packet by renaming fields hides missing domain checks. Shared state and review components can remain, but each purchase class needs its own evidence and stop fixtures.

Use [Grok Bot Compare Booking Prices](/blog/grok-bot-compare-booking-prices) for comparison details and [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) for the difference between a charter rule and enforced authority. Deletion is not cleanup; [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers teardown.

Keep reading: [approval gates for bots](/blog/approval-gates-for-bots), [least privilege for bots](/blog/least-privilege-bots), and [the bot runbook](/blog/grok-bot-runbook).

## Frequently Asked Questions

### Can the bot move a booking row automatically?

Yes, if the destination is an internal pipeline and allowed transitions are tightly defined. Let the bot request Researching, Needs input, or Ready for review, then let a workflow validate current state, next state, and request ID. Do not expose Purchased, Cancelled, or payment states to this routine. Test duplicate events and inspect the destination after every change.

### Why should the bot never charge the card?

A charge creates an external financial consequence and may accept contractual terms, cancellation rules, and traveler details. Research quality does not prove purchase authority. Keep payment data out of the research system and require a named person to reopen current evidence and complete the approved transaction process. The separation also makes incident ownership and reconciliation clearer when prices or availability change.

### What evidence belongs in each option card?

Record the source URL, checked time with timezone, visible total and currency, taxes shown, exact refund wording, room or fare label, location evidence, and open questions. Treat price and availability as observations, not guarantees. A reviewer should be able to reopen the source and understand why the option passed each declared constraint without relying on an unexplained score.

### How do I test the booking pipeline safely?

Use synthetic requests and a practice account without purchasing authority. Include missing fields, impossible constraints, an identity mismatch, a duplicate ID, and unclear policy wording. Predetermine the expected state for every case. Inspect the pipeline, browser, email, and payment channels to confirm the correct packets and zero reservations, charges, cancellations, or traveler messages.
`,
};
