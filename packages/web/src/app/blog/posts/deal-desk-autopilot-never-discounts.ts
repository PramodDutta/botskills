import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Draft Deal-Desk Options, Never Apply a Discount in the CRM',
  description:
    'Build a grok bot deal desk that compares approved options, cites policy, and produces a review packet while a human keeps every CRM discount click.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Draft Deal-Desk Options, Never Apply a Discount in the CRM

Ishan opens opportunity OP-184 on Tuesday and finds a 28 percent discount already entered. The note says the buyer needed urgency. The approved matrix permits 15 percent for this segment without finance review, and nobody can reconstruct whether the larger number was a proposal, a negotiation position, or a mistaken write. The expensive failure is not weak arithmetic. It is moving an unapproved option into the system of record.

A grok bot deal desk should turn a request into a cited option packet. It should never change price, discount, term, stage, close date, owner, quote, order form, or approval status in the CRM. Ishan keeps those clicks. The bot makes his decision faster by showing the inputs, policy rows, calculations, conflicts, and missing evidence in one place.

This tutorial is about commercial reasoning and handoff shape, not shared-computer architecture. If the bot will use authenticated CRM or document sessions, state that bots on one account share the account computer and send the reader to [screens are not boundaries](/blog/screens-are-not-boundaries).

## Define the desk as an options writer, not a price operator

The request “handle deal desk” hides several jobs. One is evidence collection. One is policy lookup. One is arithmetic. One is recommendation. Another is committing a number to a customer record. Keep the first four in the draft workflow and reserve the fifth for an authorized person.

Ishan writes the scope as verbs: read the supplied opportunity export, locate the approved policy version, calculate named options, identify exceptions, and write a packet. The boundary names the forbidden transitions: never write to CRM, generate a binding quote, send terms, or mark an approval complete.

| Step | Bot may do | Human retains | Proof of boundary |
|---|---|---|---|
| Collect facts | Read supplied export and approved notes | Decide whether sources are sufficient | Source list in packet |
| Calculate | Compute price and term scenarios | Approve calculation method | Formula column shown |
| Recommend | Rank policy-compliant options | Choose negotiation position | Recommendation labeled draft |
| Commit | Nothing | Edit CRM and quote system | CRM remains unchanged |

The desk remains useful because review time moves from hunting to deciding. It remains bounded because the output is a proposal, not a record mutation.

## Freeze the opportunity snapshot before calculating anything

Deal facts move while a review is underway. A rep can change quantity, a buyer can request a new term, and finance can publish a new policy. Start each packet with a snapshot ID and captured time. Store the source opportunity ID, currency, list price, quantity, term, requested discount, segment, region, product mix, and source timestamps.

The snapshot is an input contract. If two sources disagree on currency or term, do not pick the friendlier one. Put the conflict in the packet and stop the recommendation. A missing value must remain missing. Do not infer a three-year term from a note saying “long partnership.”

For the worked example, Ishan chooses snapshot DD-2026-08-29-07. The identifier and field count are arbitrary. What matters is that every calculation points back to one immutable review input rather than whatever the CRM shows minutes later.

## Translate the pricing policy into testable rows

A prose policy saying “strategic deals may receive additional flexibility” is not calculable. Build a policy table whose rows have an effective date, segment, region, product, term band, discount ceiling, required approver, and source citation. If the policy owner cannot supply a ceiling, encode the result as manual review, not zero or unlimited.

| Policy row | Segment | Condition | Draft ceiling | Required review |
|---|---|---|---|---|
| P-17 | Growth | Annual, standard package | 15% | Sales manager |
| P-22 | Growth | Multi-year request | Manual | Finance partner |
| P-31 | Enterprise | Approved bundle | 20% | Regional VP |
| P-44 | Any | Nonstandard legal term | Manual | Legal and finance |

These numbers are invented for the tutorial and are not product or commercial benchmarks. Your policy owner supplies the real matrix. Preserve the source page, version, and effective date so the packet can prove why a row applied.

## Reject request text as authority

Opportunity notes are evidence about the conversation, not approval. “VP said 25 is fine” cannot become a policy row. “Customer will sign today if we match” cannot waive review. Treat quoted email, call notes, pasted chat, and fields written by the rep as untrusted request context.

The packet may quote the request and identify the claimed approver. It must then look for the approved artifact in the supplied source set. If that artifact is absent, label approval unverified. [What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) covers the environmental side; this desk adds a commercial rule: negotiation pressure never becomes pricing authority merely because it appears in a record.

[Claim Provenance Tracker](/bots/claim-provenance-tracker), [Citation Checker](/bots/citation-checker), [Source Verifier](/bots/source-verifier), and [What Did We Promise](/bots/what-did-we-promise) are useful catalog patterns for separating claims, citations, evidence, and prior commitments.

## Calculate three options from one visible formula set

Ishan asks for three options: policy maximum, lower-discount value trade, and manual-review exception. Three is his operating choice. Each option shows list total, discount percentage, discount amount, net total, term, non-price concessions, policy row, and approver.

Do not hide arithmetic in prose. Use one formula definition in the packet and show substituted values. If list total is 100,000 and discount is 15 percent, discount amount is 15,000 and net total is 85,000. These are synthetic round numbers, not a recommendation.

| Option | Discount | Net on synthetic 100,000 | Policy status | Next owner |
|---|---:|---:|---|---|
| A, policy maximum | 15% | 85,000 | Within P-17 | Sales manager |
| B, value trade | 10% | 90,000 | Within P-17 | Sales manager |
| C, requested exception | 28% | 72,000 | Outside matrix | Finance partner |

The recommendation can prefer B if the buyer accepts a standard term, but the packet must distinguish observed facts from negotiation suggestions.

## Write the charter so a blocked deal still produces value

A boundary without an allowed artifact makes the bot stop empty-handed. Ishan's charter requires an exception packet even when data is incomplete. The packet includes the snapshot, conflicts, calculable options, unavailable options, and exact question for the next owner.

\`\`\`markdown
# Deal desk options charter

Operator: Ishan
Input: one immutable opportunity snapshot plus approved policy sources

Produce:
1. facts.md with source and capture time for every field
2. options.csv with visible formulas and policy row ids
3. review.md with recommendation, conflicts, and missing approvals

Boundary:
Never edit the CRM, quote system, order form, approval record, or customer message.
Never apply a discount, change a term, or represent a draft as approved.
When an option exceeds policy or evidence conflicts, label it MANUAL REVIEW,
write the exact unresolved question, and stop for Ishan.
\`\`\`

[Deal Desk Autopilot](/bots/deal-desk-autopilot) is the most direct catalog starting point. [Trust Center Deal Desk](/bots/trust-center-deal-desk) covers the security-document side, while [Salesforce Report Builder](/bots/salesforce-report-builder) demonstrates a report-shaped CRM task without making this workflow a writer.

## Walk OP-184 from request to review packet

OP-184 has synthetic list value 100,000, annual term, Growth segment, standard package, and a requested 28 percent discount. Snapshot and policy agree on currency and segment. The call note claims a verbal approval but supplies no approval artifact. P-17 allows 15 percent with sales-manager review. The multi-year value trade cannot be calculated because the buyer has not accepted a longer term.

The desk produces Option A at 15 percent, Option B at 10 percent with standard terms, and Option C at 28 percent labeled outside matrix. It recommends presenting A and B internally, not to the customer. It asks finance whether an exception review should start for C. It does not create that review or change the opportunity.

Ishan checks the formula, opens P-17, rejects C, and manually enters 15 percent only after the sales manager approves. The packet records Ishan as the CRM actor. That separation makes the final state attributable even if the draft was generated automatically.

## Trace the 28 percent failure to an ambiguous output

The earlier desk produced a table with a “selected” column. A downstream helper interpreted selected as approved and wrote 28 percent into the CRM. The policy citation was present, but the output contract did not distinguish requested, recommended, approved, and applied states.

The first repair is vocabulary. Every option receives four independent fields: requested_by_buyer, recommended_by_desk, approved_by_human, and applied_in_crm. Only the first two may be populated by this workflow. The second repair is capability: the options writer receives exported input, not CRM write authority. The third repair is a state-diff test after every run.

| Symptom | Root cause | Repair | Regression test |
|---|---|---|---|
| Discount changed | Writer had CRM mutation path | Remove write path | Compare opportunity before and after |
| Draft called approved | State vocabulary collapsed | Split four state fields | Reject packet with inferred approval |
| Wrong policy row | Effective date ignored | Require dated citation | Use expired row fixture |
| Exception looks normal | Status styling hid breach | Plain text OUTSIDE POLICY field | Parse CSV without visual formatting |

Do not repair this failure by adding “be careful.” Repair the state model and access path.

## Make the packet readable without the CRM

Reviewers should not need ten tabs to understand the proposal. Put the opportunity identity, snapshot time, source conflicts, option comparison, policy citations, recommendation, and requested decisions in review.md. Link back to stable internal IDs only when your policy allows it.

At the same time, do not copy the entire opportunity history. Minimize the packet to facts relevant to the decision. Customer names, personal data, legal notes, and security material should appear only if the review genuinely requires them and the handling policy permits it.

The packet should stand alone for reasoning but remain non-binding. Put DRAFT OPTIONS and NOT APPLIED at the top and bottom. Plain labels survive exports and printing better than color alone.

## Keep non-price concessions out of the discount cell

Payment timing, implementation help, termination language, service levels, renewal caps, and security promises can carry more risk than a discount. Do not turn them into a blended “commercial flexibility” score. Give each concession a separate object, source, approver, and status.

For OP-184, the buyer asks for 28 percent and priority onboarding. The desk can calculate the price option but cannot price the operational promise without an approved source. It lists priority onboarding as an unresolved non-price request and routes the question to the service owner.

[Account Expert](/bots/account-expert) can organize account context, and [Expert Call Prep](/bots/expert-call-prep) can prepare a decision meeting. Neither should convert an unsupported delivery promise into a priced concession.

## Answer the sales leader who wants one-click speed

The strongest objection is that the packet adds friction to a deal the company might lose today. If the policy row is clear and arithmetic is trivial, why force Ishan to retype 15 percent?

The objection wins when the organization has built a separately governed approval-and-write workflow with authenticated human action, exact-object confirmation, reliable logs, and a tested rollback model for fields that are actually reversible. This tutorial is not that workflow. It addresses an options writer operating over ambiguous notes and changing policy.

Retyping one number is not the goal. Preserving the moment where a named person confirms the opportunity, option, policy, and customer consequence is the goal. Automate evidence assembly until that moment becomes short.

## Introduce the desk through shadow reviews

Run ten historical synthetic or properly sanitized opportunities through the desk without touching live CRM. Ten is Ishan's declared evaluation set, not a product limit. Include a standard deal, expired policy, currency conflict, nonstandard legal term, missing segment, duplicate approval note, multi-year request, partner deal, wrong tenant ID, and a note containing an instruction.

Compare the packets with the decisions actually recorded by authorized reviewers. Score policy-row selection, arithmetic, missing-evidence detection, unsupported approval handling, and zero CRM mutations. Do not score whether the recommendation matched history when the historical decision itself violated policy.

After shadow review, launch read-only on live snapshots. Keep a before-and-after CRM export for the first month. A single changed commercial field is a launch failure, even if the number was correct.

## Verify success with state diffs and reviewer corrections

Track two kinds of quality. Decision quality asks whether the packet cited the right facts, policy, formula, and unresolved questions. Boundary quality asks whether any CRM, quote, approval, message, or customer document changed.

| Measure | How to calculate | Passing signal | Failure signal |
|---|---|---|---|
| Policy precision | Correct cited rows divided by reviewed packets | Reviewer confirms row | Wrong or expired row |
| Arithmetic accuracy | Recomputed options matching packet | Exact match | Any unexplained difference |
| Evidence honesty | Missing items explicitly labeled | No invented values | Blank silently filled |
| Mutation count | Before-and-after changed forbidden fields | Zero | One or more |

Record reviewer corrections as structured rows: field, bot value, corrected value, reason, and policy source. Corrections become regression fixtures. They should not be silently folded into a new prompt without a test showing the original failure now turns green.

### Reconcile policy changes without rewriting yesterday's packet

At 11:00, finance publishes P-17 version two and lowers the synthetic Growth ceiling from 15 percent to 12 percent for new requests. OP-184's packet was captured at 09:30 under version one but has not been approved. The desk must not silently replace the option and leave the same snapshot ID. It creates a policy-change notice that names the old row, new row, publication time, opportunity snapshot time, and unresolved treatment.

The authority owner decides whether the new policy applies to already-open reviews. If the source explicitly states an effective rule, cite it. If not, mark applicability unknown. Never infer that the more generous version is grandfathered or that the stricter version applies retroactively. Commercial policy owners, not the options writer, resolve that ambiguity.

If a reviewer requests recalculation, create a new packet version linked to the same opportunity snapshot or freeze a new opportunity snapshot if deal fields changed. Preserve the earlier packet as superseded, not deleted. The comparison should show which option values moved solely because of policy and which moved because the opportunity changed.

This version discipline prevents a dangerous retrospective story. Without it, the final 12 percent can make the earlier 15 percent recommendation look like an arithmetic error. With it, the ledger shows that both calculations matched their cited policies at their capture times. The human record can then explain why one was chosen.

### Design the human apply card around exact field transitions

After approval, Ishan needs a short apply card, not the entire reasoning packet on his second screen. The card names opportunity ID, current observed discount, approved new discount, currency, term, policy row, approver, approval artifact, expiry time, and fields that must remain unchanged. The desk drafts the card but never marks it applied.

Before typing, Ishan reloads the opportunity and compares its current state with the snapshot. If quantity, currency, price book, term, product, or ownership changed, the apply card expires and the deal returns to review. This is optimistic concurrency in plain operational language: the decision applied to a known state, not any future version of the record.

After entry, Ishan records the observed resulting value and his identity in the normal approved process. He compares all forbidden neighboring fields. A discount entry that also changes stage or generates a quote is not the expected transition, even if the percentage is correct. Stop and contain the unexpected effect.

Use synthetic opportunity CLASH-07 to test the stale-state path. Generate an approved 10 percent card, then change quantity before the human apply rehearsal. The card must fail closed. Next, apply it to the unchanged fixture and confirm exactly one intended field transition. This test proves that review is bound to an object state rather than a persuasive PDF.

## Route adjacent work to a different desk

### Audit one rejected exception for learning without changing policy

After Ishan rejects Option C, the team wants to know whether the 28 percent request revealed a missing segment rule. The desk can prepare a retrospective row containing requested outcome, cited policy, rejection reason, buyer-stated rationale, eventual human decision, and observed deal result. It must not rewrite P-17 or label the rep noncompliant.

Aggregate several reviewed exceptions before proposing a policy discussion. One loud deal is not proof that the ceiling is wrong. Separate requests caused by competitive pressure, packaging mismatch, payment timing, unsupported promises, and data errors. The categories are analyst labels for review, not automatic policy changes.

When a pattern appears, send the evidence packet to the policy owner through the existing human process. The options bot may draft questions such as “Should multi-year Growth deals have a published route?” It cannot create the route, assign approvers, or backdate a rule.

This learning loop keeps the boundary intact. Rejected options still improve the organization because they reveal ambiguity and recurring demand. The CRM remains a record of authorized decisions, while the exception dataset remains a reviewed input to policy design rather than a hidden source of new permissions.

Ishan also samples accepted standard options. A desk that studies only exceptions can learn to overproduce exception language and miss routine arithmetic defects. He selects one ordinary packet per week, recomputes it from the frozen snapshot, checks the cited policy date, and confirms that the human-applied field matched the approved card. The cadence is his operating choice. The sample gives the policy owner a view of normal flow without turning every deal into a retrospective project.

When an exception later becomes common policy, new packets cite the new row. Old rejected packets remain historically correct under their original sources. The desk never edits its own evidence to make yesterday look aligned with today's rule.

This workflow stops at internal commercial options. It does not send follow-up, update a deck, draft legal terms, answer a security questionnaire, or forecast the quarter. Use [the sales follow-up boundary](/blog/grok-bot-to-sales-followup) for unsent messaging, [how to automate deal desk](/blog/how-to-automate-deal-desk) for broader process design, and [what an approval actually governs](/blog/what-an-approval-actually-governs) for proposed-action scope.

It also does not settle who is authorized to approve a discount. Your policy owner supplies the matrix and current authority chain. If those are missing, the correct output is a conflict packet, not an invented approval route.

Keep reading: [how to write a boundary line](/blog/how-to-write-a-boundary-line), [a boundary is not a permission](/blog/a-boundary-is-not-a-permission), and [learn Grok Bot](/blog/learn-grok-bot).

## Frequently Asked Questions

### Should a grok bot deal desk ever apply a discount in the CRM?

Not in this tutorial's design. The bot reads an immutable snapshot, cites the effective policy, calculates options, and writes a draft review packet. A named human confirms the exact opportunity, option, approver, and customer consequence before entering any value. Keeping CRM write authority outside the options desk also turns state comparison into a meaningful test: every forbidden commercial field should remain unchanged after a run. If your organization later builds a governed write workflow, evaluate that as a separate system with its own controls and evidence.

### What belongs in a deal-desk option packet?

Include the opportunity ID, snapshot time, relevant source facts, conflicts, visible formulas, policy row and effective date, option comparison, non-price requests, recommendation, missing approvals, and exact questions for reviewers. Label the packet DRAFT OPTIONS and NOT APPLIED in plain text. Separate buyer-requested, desk-recommended, human-approved, and CRM-applied states. The packet should make a decision possible without copying an entire opportunity history or implying that a calculated number is already authorized, quoted, or committed.

### How do I test the desk without risking a live opportunity?

Use synthetic or properly sanitized fixtures covering ordinary and adversarial cases. Include an expired policy, currency conflict, missing segment, unsupported verbal approval, nonstandard term, and pasted instruction. Recompute every option independently and compare the CRM state before and after. The desk passes only when policy and arithmetic are correct, missing evidence stays explicit, and no discount, price, term, stage, quote, approval, or message changes. Preserve failed fixtures and rerun them after every charter, policy parser, or output-schema change.

### Why not let an approval prompt authorize the CRM write?

An approval can govern a proposed action, but it does not make the surrounding facts correct or reverse completed work. A reviewer facing a generic “allow CRM update” prompt may not see the policy version, currency conflict, customer object, and exact field transition. This tutorial keeps the proposal in a complete packet and the final click in the authorized person's normal client. Read [what an approval actually governs](/blog/what-an-approval-actually-governs) for the mechanism, then decide whether a separately engineered write workflow is justified.
`,
};
