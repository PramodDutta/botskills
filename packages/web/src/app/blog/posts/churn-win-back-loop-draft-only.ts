import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Draft a Win-Back Sequence, Never Send the First Step',
  description:
    'Create a grok bot win back draft from cited cancellation reasons and verified changes, exclude unsafe recipients, and keep every sequence unsent for review.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Draft a Win-Back Sequence, Never Send the First Step

Mateo has twenty-seven cancellations in a weekly export. Seven are failed cards, four requested deletion, three left after disputes, and the rest gave reasons of varying quality. The useful task is not “email everyone who churned.” It is to find the few voluntary cancellations where a documented change now answers the documented reason, then prepare drafts that a human may reject.

[Churn Win-Back Loop](/bots/churn-win-back-loop) performs that research and drafting job. A controlled **grok bot win back draft** never sends day zero, never addresses a list, and never invents what improved. The first safe output is an eligibility ledger. Copy comes later.

## Begin after cancellation, not at the first warning

Win-back is a post-cancellation workflow. Before cancellation, changing usage belongs to internal review through [Churn Early Warning](/bots/churn-early-warning). A failed payment belongs to billing recovery. Keeping these states separate prevents a customer with a card problem from receiving a message that assumes they rejected the product.

| Account state | Correct queue | Why | Win-back action |
|---|---|---|---|
| Usage declined | Early warning | No cancellation exists | Exclude |
| Payment failed | Billing recovery | Churn may be involuntary | Exclude |
| Voluntary cancellation | Eligibility review | Reason may support a return case | Research |
| Deletion request | Privacy process | Contact may violate request | Exclude |
| Company cancelled account | Internal case review | Relationship context differs | Exclude |

Mateo's run header records the cancellation window and source. It does not search every historical contact merely because the system can.

## Build the cohort from a dated billing export

Start with subscription status, cancellation date, plan, tenure, recurring revenue lost, and voluntary or involuntary classification. Record the billing row ID so each account can be traced.

\`\`\`csv
account_id,cancelled_at,kind,tenure_months,mrr_lost
acct_104,2026-08-24,voluntary,14,420
acct_105,2026-08-25,failed_payment,7,180
acct_106,2026-08-27,voluntary,2,90
\`\`\`

The numbers in this example are invented test data, not product benchmarks. The workflow uses them to demonstrate classification. If kind is missing, the account is “needs billing review,” not voluntary by default.

Keep the source export read-only and save a derived ledger. Mateo should be able to rerun the same week and identify duplicates before a second set of drafts appears.

## Remove prohibited and mismatched recipients first

The catalog charter excludes anyone who unsubscribed, requested deletion, left over a dispute, was cancelled by the company, or represents involuntary churn. Apply those rules before reading copy sources.

| Exclusion | Evidence | Reason | Logged output |
|---|---|---|---|
| Unsubscribed | Preference record and date | No marketing outreach | Excluded, do not draft |
| Deletion request | Verified request | Minimize further processing | Excluded, route internally |
| Dispute | Case record | Needs human resolution | Excluded, case owner |
| Failed payment | Billing event | Recovery problem, not win-back | Billing queue |
| Company cancellation | Internal decision | Message needs case context | Human review only |

An exclusion count is a successful result. Mateo should never feel pressure to produce a target number of sequences. A week with zero eligible accounts can be the correct outcome.

## Cite one cancellation reason without guessing intent

For each voluntary cancellation, look for a cancellation survey, closing ticket, or last relevant email. Quote the reason and link to the source. Assign one segment from the published workflow: price, missing capability, named competitor, never activated, champion left, project ended, reliability or support failure, or unknown.

One segment forces prioritization. A customer may mention both price and missing capability, but the ledger should preserve the full quote and explain which reason controlled eligibility. If the evidence cannot support that choice, use unknown.

[Customer Voice Ad Writer](/bots/customer-voice-ad-writer) also works with customer language for a different purpose. Do not route cancellation quotes into advertising merely because they are vivid. Here the quote exists to constrain a private eligibility decision and draft.

## Require a verified change that answers the reason

A reason alone does not justify contact. The workflow asks what actually changed since the customer left. Accept a changelog entry, release note with date, documented price change, resolved incident record, or other approved evidence. No proof means “not ready.”

| Cancellation reason | Relevant change evidence | Irrelevant evidence | Decision |
|---|---|---|---|
| Missing export format | Release note for that format | General speed improvement | Eligible for review |
| Price | Documented pricing change | New feature unrelated to cost | Not ready |
| Reliability failure | Incident fix plus follow-up data | Marketing claim | Needs human validation |
| Champion left | New stakeholder context | Product release | Not ready without relationship owner |
| Unknown | None | Any exciting release | Not ready |

The change must postdate cancellation and map to the reason. “We have been busy” is not a reason to reopen a customer's inbox.

## Write a charter that forbids even day zero

The first email is the easiest one to send accidentally because it feels immediate. Name it explicitly in the boundary.

\`\`\`markdown
Role: Draft-only voluntary churn win-back researcher

Read the approved billing cohort, cancellation evidence, contact preferences,
and verified change log. Build the exclusion and eligibility ledger first.
Draft only when one cited post-cancellation change answers one cited reason.

For each eligible account, write three local draft files for day 0, day 6,
and day 21. Address one named recipient in the review header. Keep each body
under 120 words and each subject under 45 characters.

Never send, schedule, upload to a mailbox, enroll a sequence, change a contact
preference, or contact a customer. Never send the first step. Stop on identity,
consent, reason, or evidence ambiguity.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) explains the value of naming schedule and enroll beside send. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains why the runtime should not receive mailing authority during draft production.

## Build the ledger before writing a subject line

Mateo's ledger includes account ID, segment, revenue context, reason quote and link, cancellation date, change evidence and date, preference state, eligibility, exclusion reason, and local draft paths.

The ledger is the main deliverable because it explains why a draft exists. If copy generation fails, Mateo can still review eligibility. If the evidence later changes, he can identify which drafts are stale.

Do not let revenue decide eligibility. Revenue can order Mateo's manual review after the rules pass. A large former account with no supported reason remains not ready. A small account with explicit consent and an exact resolved gap may be a better candidate.

## Draft three steps that each earn their existence

The listing proposes day 0, day 6, and day 21 as draft labels. They are review timing suggestions, not automatically scheduled events. Each step stays under 120 words, uses one ask, and names the exact relevant change in the first line.

Day zero connects the change to the customer's reason and asks whether it is worth a fresh look. Day six can add one new piece of proof, not repeat the first message. Day twenty-one closes the loop respectfully. If no new information supports step two or three, omit the draft instead of padding a sequence.

Every review header shows the source quote, change citation, recipient, preference check time, and proposed timing. None of that internal evidence is pasted into the customer-facing body.

## Walk Mateo through one eligible cancellation

Atelier North, an invented account, cancelled on 2026-06-10. Its closing ticket says, “We need scheduled CSV exports for the finance archive.” A release note dated 2026-08-18 documents that exact export capability. The contact preference record shows no unsubscribe, deletion request, or dispute.

The ledger classifies the reason as missing capability and links both sources. Day zero states that scheduled CSV exports are now available and asks whether the finance workflow is still relevant. It does not claim that the product now solves every reporting need. Day six points to the dated documentation. Day twenty-one says Mateo will close the loop unless the recipient wants a short review.

Mateo checks whether the original contact still owns finance operations, reviews the tone, and decides not to send yet because the account has a new relationship owner. The workflow succeeded despite zero mail. It found a real match and preserved the human decision.

## Catch the failure where a broad release becomes proof

Another account cancelled for reliability after repeated import failures. The only recent evidence is a release note saying “performance improvements.” The bot drafts, “Import reliability is fixed.” That sentence overstates both scope and certainty.

| Failure symptom | Cause | Immediate fix | Prevention rule |
|---|---|---|---|
| General release mapped to exact reason | Keyword similarity | Mark not ready | Require same failure surface |
| “Improved” becomes “fixed” | Claim strength increased | Restore cited wording | Preserve evidence verb |
| Day-zero draft enters mailbox | Destination authority present | Remove connection | Local files only |
| Unsubscribed contact included | Preference check too early | Recheck at review | Fresh timestamp required |
| Unknown reason receives generic copy | Output quota pressure | Exclude unknown | No reason, no draft |

Mateo deletes the unsupported draft, records the account as not ready, and asks the product owner for specific incident evidence. He does not search for a different reason that fits the available release.

## Recheck identity and preference at human review

Eligibility can expire. A contact can unsubscribe after the weekly export. A person can change roles. A dispute can open. Mateo therefore refreshes identity and preference immediately before any actual message is created.

The bot's draft header can tell him what to check, but the bot does not alter preferences or choose a replacement recipient. A different contact is not interchangeable merely because they work at the same company. The original reason may have been shared in a specific relationship context.

[What an Approval Actually Governs](/blog/what-an-approval-actually-governs) applies directly. Approving the body does not approve the recipient, schedule, or later steps. Mateo makes each external decision at the time it would occur.

## Answer the growth lead who wants automatic enrollment

The strongest objection is economic: manual review limits volume and delays learning. Automatic enrollment can produce more responses and cleaner campaign metrics. It also turns a research assistant into a customer messaging system with consent, identity, timing, suppression, and reputation consequences.

Draft-only is the right starting point when cancellation evidence is messy and product changes require interpretation. Mateo can measure how many accounts are eligible, how often humans reject a draft, and which evidence gaps recur. If a later system automates enrollment, it should be built as a separate governed campaign with current preferences and explicit sending controls.

Do not weaken the existing boundary just because the drafts look accurate for one week.

## Verify the loop with an exclusion matrix

Create seven synthetic accounts: failed payment, unsubscribe, deletion request, dispute, unknown reason, exact reason with no matching change, and exact reason with a dated matching change. Add a stale preference snapshot to the last account.

A correct run produces one conditional eligibility row, no drafts for the first six, and a warning that preference must be refreshed for the seventh. After providing a current allowed preference record, it creates three local drafts and no mailbox items or scheduled jobs.

Trace every sentence about product change to the supplied release note. Search for stronger verbs such as “fixed” when the evidence says only “improved.” Count all output paths. A test that sends a harmless message is still a failed boundary test because the prohibited action occurred.

## Keep sequence performance out of unsupported claims

Once Mateo manually sends a reviewed message, he can record delivery and reply outcomes under the organization's approved process. Do not claim that day 0, 6, and 21 are the best cadence based merely on the listing. They are explicit draft slots for this workflow.

Likewise, do not let a reply retroactively prove the eligibility classifier was correct. A customer may respond for many reasons. Review false positives, rejection reasons, and evidence gaps separately. The quality measure for the bot is whether every draft had a supported reason-change match and passed exclusions.

[Account Growth Planner](/bots/account-growth-planner) can help with a different expansion workflow for active accounts. It should not inherit cancelled contacts by default.

## Stop this workflow before any external action

This page stops at local, individually addressed draft files. It does not cover bulk campaigns, legal basis for marketing, mailbox reputation, billing recovery, discounts, deletion handling, or autonomous sending. For earlier behavioral changes, use [the internal early-warning guide](/blog/churn-early-warning-still-no-customer-mail).

Separate named bots on one account do not isolate credentials; [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) is the canonical article. [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) covers signed-in browser state, and [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers cleanup.

## Write a claim ledger for every sentence in the sequence

Eligibility proves that a draft may be considered. It does not prove every sentence the copy generator wants to add. Mateo creates a claim ledger with the draft sentence, claim type, source, source date, permitted wording, and reviewer decision.

The first sentence usually contains the highest-risk claim because it connects a new change to the former customer's reason. “Scheduled CSV export is now documented” may be supported. “The reporting problem you had is solved” adds a conclusion about the customer's whole workflow. The ledger accepts the first and rejects the second.

Social proof, performance claims, customer counts, and comparative claims remain out unless the approved evidence pack explicitly includes them and the organization permits their use. The bot should not decorate a short sequence with facts it found elsewhere. A win-back email earns attention through relevance, not a pile of product assertions.

Review pronouns and time words too. “Since you left” needs a release date after cancellation. “We fixed it” needs exact ownership and evidence. “Now” needs a current source. Small words can change the scope of an otherwise cited sentence.

Run a source-deletion test. Remove the release note after the drafts exist and rerun validation. The ledger should mark affected sentences stale and block them from the ready-for-human-review set. Draft text should never outlive the evidence that justified it without a warning.

## Keep the three steps independent at approval time

A human decision on day zero does not pre-approve day six or day twenty-one. Circumstances can change after the first message: the person replies, unsubscribes, changes role, opens a dispute, or simply makes the later message unnecessary.

Mateo therefore treats each local file as a separate proposal. Before using any later step, he refreshes preference, checks conversation state, verifies recipient identity, and confirms that the new message adds something supported. If the customer replied, the sequence leaves the automated track entirely and a relationship owner handles the conversation.

The day labels do not create timers inside this workflow. They help reviewers understand the intended spacing. No scheduler, campaign enrollment, or mailbox object exists. This makes it impossible for approval of the first draft to start a hidden countdown.

Test the separation by marking day zero accepted in the local ledger, then adding an unsubscribe event before the day-six review. A correct validation blocks both later drafts. It does not argue that the sequence was previously approved.

## Preserve dignity when the account is not ready

“Not ready” should contain a useful evidence gap, not a moral judgment about the customer. Examples include “no stated reason,” “no dated relevant change,” “preference status unavailable,” and “relationship owner unresolved.” These labels tell Mateo what would have to become true before reconsideration.

Do not repeatedly reprocess excluded accounts every week without a change trigger. A deletion request should remain excluded under the applicable process. An unknown-reason account does not need fresh generic copy after every release. A not-ready item can be revisited only when a relevant evidence source changes and the organization's retention rules permit it.

The weekly report should show eligible, not ready, excluded, and routed counts by reason segment. It should also say when no sequences were drafted. That result proves the loop applied its filters. It is not a blank week to fill with weaker candidates.

Mateo reviews the not-ready reasons quarterly to improve cancellation capture or release documentation. He does not relax recipient protections to increase sequence volume.

## Localize dates and language only after evidence passes

The reason-change match should be decided in the source language whenever possible. Translation can alter claim strength, negation, and product terms. Mateo keeps the original quote in the internal ledger and adds an approved translation beside it for review. If the reviewer cannot verify the translation, the account remains not ready.

Dates need the recipient's context. A release date in one timezone and a cancellation date in another can appear reversed around midnight. Store full timestamps in the ledger, then use a reader-friendly date in the draft only after proving the change came later. Do not use “since you left” when ordering is ambiguous.

The three draft labels stay day 0, day 6, and day 21 internally. Customer copy should not mention that sequence machinery. Each draft reads as an individual message tied to one cited change, not as step two of a campaign the customer did not request.

Test localization with a synthetic reason containing negation and a release near midnight UTC. The validation should preserve the negation and compare normalized timestamps. A fluent translation that reverses the reason is a failure, even if the English copy sounds natural.

## Inspect generated drafts for cross-account leakage

Batch work creates a specific risk: one account's reason, name, or change can appear in another account's draft. Mateo gives every account a stable ID and writes to a separate directory. The validator checks that each body uses only entities present in that account's evidence pack.

Create two synthetic eligible accounts. One left for scheduled exports and one left for a reliability incident. Give them similar contact names. Swap one release note in the test input and confirm validation blocks both affected drafts rather than generating a blended success story.

The ledger should record a content hash or version for each evidence file used. If a source changes after drafting, the review status expires. Mateo reruns that account alone instead of regenerating the whole cohort and risking new cross-account changes.

Human review opens one account package at a time: evidence, claim ledger, preference status, and three local drafts. It does not present a giant editable sheet where rows can slide or formulas can point to the wrong customer. A slower per-account review is justified because the proposed action is externally visible and relationship-specific.

## Record rejection reasons without optimizing around consent

Mateo records why a human rejects an eligible draft: wrong contact, relationship context, unsupported tone, insufficient change, bad timing, or no business reason to reopen. These outcomes improve evidence selection and copy rules.

They must not be used to route around protections. If unsubscribe exclusions reduce volume, the system does not search for another contact at the same company. If reviewers reject unknown reasons, the system does not infer a reason from product usage. Consent and identity are gates, not variables to optimize.

Review the rejection log for recurring product documentation gaps. If many exact changes cannot be cited, release notes may need clearer scope. If identity is often stale, relationship ownership needs maintenance. The win-back bot should reveal those operational gaps while continuing to send nothing.

Keep reading: [A pasted prompt inherits surrounding authority](/blog/what-a-pasted-prompt-inherits), which is why the win-back drafter should receive a selected evidence pack rather than the entire customer system.

## Frequently Asked Questions

### Should the bot send day zero when the evidence match is exact?

No. An exact match between a cancellation reason and a later change supports drafting, not sending. The human still needs to verify the current recipient, contact preference, relationship context, claim wording, and whether outreach is appropriate now. Day zero remains a local file under this charter. Sending, scheduling, mailbox upload, and sequence enrollment are separate external actions that the bot never takes, even when the draft appears straightforward.

### Which cancelled accounts should never enter the win-back draft queue?

Exclude involuntary churn such as failed payment, anyone who unsubscribed, requested deletion, left through a dispute, or was cancelled by the company. Also exclude accounts with an unknown reason or no verified post-cancellation change that answers the documented reason. Log each exclusion and its source. A small draft count is not a failure. The ledger is valuable precisely because it prevents irrelevant or unwanted messages from being created.

### What counts as evidence that the product changed?

Use a dated source that maps directly to the cancellation reason, such as a release note for the missing capability, a documented pricing change, or specific reliability evidence for the failed surface. A broad “performance improvements” note does not prove that an import problem is fixed. Preserve the strength of the source wording and link it in the review header. If the match requires inference, mark the account not ready for a win-back draft.

### How do I test a Grok Bot win back draft workflow?

Build a synthetic cohort covering failed payment, unsubscribe, deletion, dispute, unknown reason, unmatched change, and one exact reason-change pair. The bot should exclude the first six and draft only for the supported pair after a fresh preference check. Inspect the filesystem, mailbox, and schedules to confirm that only local files were created. Then compare every change claim with its cited source and reject any wording that strengthens “improved” into “fixed.”
`,
};
