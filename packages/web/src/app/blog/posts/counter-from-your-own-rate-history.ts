import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Build a Sponsorship Counter From Your Own Past Rates',
  description:
    'Build a counter from your own rate history using comparable deals, normalized rights, concession trades, and a human-sent sponsorship response.',
  date: '2026-08-29',
  category: 'Playbook',
  content: `
# Build a Sponsorship Counter From Your Own Past Rates

Tara receives an offer for $3,000 and asks what to counter. A generic market-rate answer would look decisive, but it would ignore that this sponsor wants two videos, six months of paid usage, category exclusivity, a 45-day payment term, and one revision round. Tara's own $3,200 deal last quarter covered one video and no usage rights.

The defensible counter comes from her own rate history after normalizing deliverables and rights. This playbook uses the [Sponsorship Negotiator bot](/bots/sponsorship-negotiator) to prepare a private position. It never replies or commits to a number. The [Sponsor Inbound Scout bot](/bots/sponsor-inbound-scout) qualifies new enquiries earlier in the funnel; do not merge prospecting with negotiation.

## Rebuild the live thread before calculating a number

Read the thread oldest to newest and create one row per term: placement, quantity, publication window, production requirements, revisions, exclusivity, organic usage, paid usage, geography, term length, performance guarantees, make-goods, cancellation, payment timing, and approval process.

For each term, record the sponsor's position, Tara's position, last movement date, and source sentence. A term nobody discussed is open, not agreed. "Standard rights" is not a term until the standard is attached and read.

| Term | Sponsor position | Tara position | Status |
|---|---|---|---|
| Deliverables | 2 integrated videos | Not yet answered | Open |
| Paid usage | 6 months | Not yet answered | Open |
| Exclusivity | Category, 90 days | Not yet answered | Open |
| Revisions | 1 round | Acceptable subject to scope | Provisional |
| Fee | $3,000 total | No response | Open |
| Payment | 45 days after delivery | 30 days preferred | Open |

A reliable counter starts with scope reconstruction because a number without terms is not comparable to history.

## Use only completed deals you can source

Tara's rate history contains accepted deals, dates, sponsor category, deliverables, rights, terms, invoiced fee, and known outcome. She excludes unsent drafts, declined offers, memory-only numbers, and market averages without a source.

Declined offers can inform resistance, but they are not proof of a cleared rate. Keep them in a separate table. Likewise, an invoice proves what was billed, while a contract or accepted email proves what the sponsor bought. Link both when available.

The [Source Verifier bot](/bots/source-verifier) can check whether each historical row is supported by the linked record. The final choice remains Tara's because comparability involves judgment.

## Normalize every rate to its actual bundle

Do not divide every historical fee by content count and call the result a unit rate. A video with paid usage and exclusivity is not the same unit as an organic mention. Decompose the bundle into base placement, production complexity, additional deliverables, usage rights, exclusivity, timing pressure, revisions, and payment risk.

Normalization does not require inventing a universal price for each component. It can be qualitative when history is sparse. The goal is to show why one row is more comparable than another and which differences push the counter up or down.

| Component | Deal A | Deal B | Live ask | Comparability effect |
|---|---|---|---|---|
| Integrated video | 1 | 2 | 2 | Deal B closer |
| Paid usage | None | 30 days | 6 months | Live ask materially broader |
| Exclusivity | None | 30 days | 90 days | Neither fully comparable |
| Revisions | 1 | 1 | 1 | Comparable |
| Payment | 30 days | Upfront | 45 days | Live cash timing worse |

If the sheet lacks rights detail, mark the row weak. A precise fee attached to unknown scope is a poor anchor.

## Choose comparables by rights before recency alone

Recent deals matter because audience size, production quality, and demand may change. Rights similarity often matters more. Tara ranks candidates on deliverable match, usage match, exclusivity match, category match, timing, and recency.

She uses a zero-to-two internal score for each dimension. Zero means not comparable, one means partial, and two means close. This is Tara's rubric, not a product feature or industry standard. She includes the score breakdown so she can challenge it.

Do not average away a disqualifying mismatch. A deal with perpetual paid usage may be a poor base-placement comparable even if every other field matches. Keep it as evidence about rights pricing, not the central anchor.

## Derive a range before selecting the counter

Use the strongest two or three comparables to build a range. Start with what those sponsors received and paid, then adjust directionally for named differences. Keep arithmetic transparent. If you assign component amounts, they must come from Tara's own history or be explicitly labeled a proposed negotiating allocation.

In Tara's case, one comparable paid $3,200 for a single integrated video with organic use. Another paid $5,800 for two videos plus 30 days of paid usage. A third paid $6,400 for two videos and 30-day category exclusivity but no paid usage. These are invented worked-example records, not market benchmarks.

The live request is broader than all three because it combines six months of paid usage with 90-day exclusivity. The evidence supports a counter above $6,400, but it does not support an exact amount automatically. Tara chooses a proposal after valuing which rights she is willing to grant.

## Price usage and exclusivity as separate decisions

Paid usage lets the sponsor use the content in advertising. Exclusivity limits Tara's ability to work with others. They create different costs and must not disappear inside one package label.

For usage, specify media, duration, geography, edit rights, whitelisting or identity use if relevant, and renewal. For exclusivity, specify category definition, competitors covered, start event, duration, geography, and carve-outs. Ambiguity in either term can be more expensive than a small fee difference.

Tara refuses "all media" and "entire industry" as unresolved terms. Her counter can narrow rights, raise the fee, or offer a priced option. The negotiator prepares those choices but does not provide legal interpretation. Contract language goes to the appropriate reviewer.

## Build a concession ladder before writing response language

A concession ladder ranks what Tara can trade from least to most costly and pairs each movement with a return. Flexible publication date may be cheap. A second organic reshare may be manageable. Rate reduction, paid usage, broad exclusivity, editorial approval, guaranteed performance, and perpetual rights can be expensive.

Nothing moves for free. If Tara offers a lower fee, she narrows usage or quantity. If she grants longer usage, she asks for a higher fee or shorter exclusivity. If the sponsor needs a late payment term, she may require a deposit.

| Concession | Cost to Tara | Ask in return | Stop condition |
|---|---|---|---|
| Flexible week | Low if inventory open | Keep full fee | Conflicts with another launch |
| Extra organic reshare | Moderate | Retain narrow usage | Requires new creative approval |
| Lower fee | High | Remove paid usage | Falls below walk-away |
| Longer paid usage | High | Add rights fee | Renewal becomes perpetual |
| Category exclusivity | High | Narrow category and add fee | Blocks named existing partner |

The ladder prevents a fast email from granting several expensive terms for one small price movement.

## Name the walk-away as terms, a number, and a date

"Not worth it" is not an operational stop. Tara writes a minimum acceptable package, unacceptable terms, and expiration date for the counter. Her floor applies to a specific bundle, not every possible version of the deal.

For example: walk away below $6,800 for two videos with organic usage only, or from any package requiring guaranteed performance, perpetual rights, or exclusivity broader than the named category. The $6,800 number belongs only to this invented scenario.

The date matters because inventory and campaign relevance change. A counter that sits unanswered for three weeks may need a fresh capacity check. The bot records the date but never withdraws or accepts on Tara's behalf.

## Write the no-send boundary around the whole thread

The boundary is: "Never reply, forward, react, draft inside the email composer, confirm availability, quote a rate to the sponsor, accept a term, or change the deal sheet. Produce a private counter brief for Tara." Drafting inside a live composer is risky because review and send are adjacent.

Use a private document or chat output. If the environment can reach the inbox, remember that a written boundary does not narrow existing capability. [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) and [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explain the two separate issues.

\`\`\`text
Role: private sponsorship counter analyst

Inputs:
- one live thread, oldest to newest
- sourced completed-deal history
- current inventory and operator exclusions

For this deal:
1. Build one sourced row per commercial term and mark open, provisional, or agreed.
2. Select comparables by deliverables, rights, exclusivity, category, timing, and recency.
3. Show the actual historical bundle behind every cited fee.
4. Build a supported range, proposed counter, concession ladder, and walk-away.
5. Quote sponsor facts with message dates and label every inference.

Boundary:
Never reply, forward, react, write in the email composer, confirm availability,
quote or commit a rate, accept a term, or modify the deal sheet.
\`\`\`

## Walk Tara from three comparables to one counter

Tara verifies the live ask and selects the three invented comparables above. Deal B at $5,800 is closest on quantity and short paid usage. Deal C at $6,400 is closest on quantity and short exclusivity. Neither combines the live request's rights.

She decides she does not want to grant six months of paid usage. Her opening counter is $8,200 for two videos, 60 days of paid usage, and 30 days of narrowly defined category exclusivity, with 30-day payment. She also prepares $7,200 for the two videos with organic usage only and no exclusivity. These are scenario choices, not recommended market rates.

Her evidence paragraph cites all three completed rows and explains differences. Her inference paragraph says the sponsor's launch date may make timing useful, based on a dated sentence in the thread. It does not claim urgency beyond that sentence.

The bot gives Tara the brief. She changes the opening counter to $8,500 after reviewing capacity, writes her own email, and sends it. The rate history informed her; it did not bind her.

## Trace an inflated counter to a mismatched historical deal

The first run recommends $12,000 because it selects Tara's highest past sponsorship. That deal included four videos, event attendance, and one year of paid usage. Its sponsor was also buying during Tara's peak season. The similarity score over-weighted recency and category while ignoring quantity and rights.

Tara removes it as a central comparable and keeps it only as evidence that long paid usage carried substantial value in her own history. She makes deliverable and usage mismatch disqualifying for the base-anchor score.

| Symptom | Root cause | Repair | Verification that can fail |
|---|---|---|---|
| Highest fee always anchors | Price used as similarity | Score terms before fee | Hide fee during selection |
| Counter ignores rights | Bundle flattened to unit rate | Preserve component scope | Rights mismatch lowers match |
| Old deal appears agreed | Draft offer mixed with completed | Require acceptance source | Missing contract excludes row |
| Bot claims sponsor urgency | Inference lost its quote | Attach dated sentence | Delete source and claim fails |
| Walk-away moves each round | Floor not bundle-specific | Freeze dated package floor | Same bundle keeps same floor |

The failure shows why selection should occur before revealing outcome values where possible. Otherwise the desired number quietly chooses its own evidence.

## Keep fact, inference, and recommendation in separate blocks

Facts include quoted asks, message dates, completed-deal terms, accepted fees, and current inventory. Inferences include likely priorities suggested by the thread. Recommendations include counter options, concession order, and walk-away.

Tara should be able to reject the recommendation while retaining the factual packet. A sentence such as "They need this before quarter end" is fact only if the sponsor said it. Otherwise write "The stated launch date may create timing pressure," attach the quote, and label it inference.

The [Deal Desk Autopilot bot](/bots/deal-desk-autopilot) can structure internal commercial review for other deal types, but sponsorship rights and creator inventory still need their own fields.

## Answer the creator who wants market benchmarks

The strongest objection is that your own history may be small or outdated. External benchmarks can reveal that you are systematically underpricing. That is a valid research project when the source quality and bundle comparability are strong.

This playbook starts with your own accepted deals because they prove what your specific audience, format, and counterparties have cleared. If history is too sparse, say "no supported number" rather than hiding a market average inside the model. You may commission separate benchmark research, label it external, and compare its methodology.

A weak personal history does not make an unsourced industry number reliable. It means the uncertainty should influence the counter structure, perhaps through options, narrower rights, or a shorter term.

## Verify the brief with a hidden-fee selection test

Plant five completed-deal rows with distinct bundles. Hide fees during comparable selection. Include one recent but mismatched large deal, two close deals, one declined offer, and one row missing acceptance evidence. Five is an arbitrary test set.

The workflow passes if it excludes the declined and unsupported rows from cleared-rate evidence, selects the close bundles, and uses the large deal only for its comparable component. Reveal fees afterward and build the range. Then remove usage detail from one close row; its evidence strength must fall.

Test the send boundary separately in a safe draft environment. Ask the workflow to "just reply with the counter." It must return a private brief and refuse the reply. [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) helps distinguish reviewing the brief from authorizing a send.

## Record outcomes without rewriting what the old evidence said

After the negotiation closes, Tara appends outcome fields: final package, accepted fee, rights, payment timing, response dates, reason lost when explicitly known, invoice status, and performance report if contractually and ethically available. She does not overwrite the opening offer or the counter brief.

The difference between proposed, accepted, invoiced, and paid matters. A signed $8,000 package is cleared commercial evidence. An $8,000 invoice proves billing. Payment proves cash receipt. Each source supports a different statement. Store stable identifiers and dates so the next counter can select completed deals without treating an unanswered proposal as precedent.

If the sponsor declines without a reason, record "reason not stated." Do not infer that the rate was too high. A campaign can disappear because of timing, budget reallocation, client approval, or strategy, and the thread may not reveal which.

Tara schedules a record-quality check after the final agreement and after payment. At agreement, she verifies the commercial bundle. At payment, she records actual timing and any approved adjustment. The two checkpoints stop a signed but unpaid deal from becoming evidence that the full economic outcome cleared exactly as planned.

## Normalize audience and performance promises with extra care

Historical deals may differ because Tara's audience, reach, format, or reported outcomes changed. Record the metric definition, measurement window, source, and whether the sponsor bought guaranteed performance or merely placement. Do not compare follower count with average qualified views as if they were the same field.

Never invent a performance adjustment formula from two deals. If a sponsor requests a guarantee, mark it as a high-cost term and send the language for appropriate review. Historical performance can support a factual media packet, but it does not guarantee the next campaign.

Tara separates audience facts available at the time of the old deal from current facts. The old sponsor bought against the old packet. Using today's audience size to normalize yesterday's price without labeling the change would distort the record.

She also preserves metric uncertainty. If an old report used views at 30 days and the current media kit uses views at 14 days, the values are not directly comparable. Keep both source definitions or exclude the metric from the adjustment. A neat ratio built from mismatched windows is worse than an explicit unknown.

## Use options to expose the cost of rights instead of hiding it

A single counter can make the sponsor believe every term is inseparable. Tara may offer two or three packages that vary one meaningful dimension. For example, option A contains organic usage only, option B adds 60 days of paid usage, and option C adds narrow 30-day exclusivity. Three is a scenario choice, not a recommended maximum.

Each option names deliverables, rights, fee, payment timing, and expiry. The price differences make Tara's tradeoffs visible without claiming that each component has a universal market price. Options must all be acceptable if chosen. A deliberately bad decoy damages the negotiation and the evidence record.

Order options by Tara's preferred commercial shape, not necessarily by lowest fee. If organic-only work protects future inventory, it may appear first even when a rights-heavy package carries a higher number. The private brief states why the order serves her constraints. The sponsor-facing order remains Tara's decision.

The negotiator can prepare the option table privately. Tara decides whether sending options fits her strategy and writes the external language herself.

Before writing, she compares every option with the walk-away bundle. A package that looks acceptable in isolation may fall below the floor after longer payment terms or added revisions. This last reconciliation should fail the option rather than silently moving the walk-away.

## Stop this playbook before legal review and delivery

This playbook prepares a commercial position from Tara's own records. It does not interpret contract law, approve usage language, promise performance, guarantee availability, send a response, update a CRM, or invoice the sponsor. Those are separate steps with named owners.

It also does not qualify cold inbound. Start with [Sponsor Inbound Scout](/bots/sponsor-inbound-scout) and keep spam filtering outside the live negotiation packet. If no comparable history exists, the correct output is no supported number plus the missing evidence, not a confident guess.

For writing the boundary around send, use [How to Write a Boundary Line](/blog/how-to-write-a-boundary-line). For broader handoff design, use [Bot Handoff to Human](/blog/bot-handoff-to-human). Keep reading: [Credential Hygiene: Rotate What the Computer Touched](/blog/credential-hygiene-for-bots) applies if the negotiation workflow accessed an inbox or deal sheet it should no longer reach.

## Frequently Asked Questions

### How many past sponsorship deals are enough for a counter?

There is no universal count. You need enough sourced completed deals to find at least one meaningfully comparable bundle, and sometimes none exists. Compare deliverables, usage, exclusivity, category, timing, revisions, and payment before looking at fee. In the worked example, Tara uses three comparables, but that is a scenario choice rather than a minimum. If the only records are declined offers, memory-only numbers, or materially different rights packages, report no supported number and identify the missing evidence.

### Should a counter from your own rate history use the highest past fee?

Only if the highest-fee deal is genuinely comparable, which often it is not. Select comparable bundles before revealing their fees where practical. A large historical deal may include more content, longer usage, broader exclusivity, event work, or unusual timing. Keep it as component evidence if relevant, but do not let price itself determine similarity. Your counter should show the accepted source, historical scope, live scope, and every directional adjustment so a reviewer can remove a bad anchor.

### Can the sponsorship bot send the counter email?

Not in this playbook. Its boundary forbids replies, forwards, reactions, writing in the live composer, confirming availability, quoting a rate externally, accepting a term, and modifying the deal sheet. It produces a private brief. Tara reviews comparables, checks capacity and rights, chooses or changes the number, writes the response, and sends it through her approved process. Separating analysis from delivery prevents an inferred term or mistaken comparable from becoming a commercial commitment before a person sees it.

### What if past deals do not include usage-right details?

Mark those rows weak for any counter involving usage. A fee without its rights bundle cannot support a clean comparison. Search the accepted email, contract, statement of work, and invoice, keeping each source attached to the field it proves. If details remain missing, use the row only for terms it actually establishes or exclude it. Do not assume "standard usage." The absence itself tells you to improve the deal sheet so future counters can distinguish base placement, paid use, exclusivity, and renewal.
`,
};
