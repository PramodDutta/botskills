import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Verify Bot Output Before Anyone Repeats It',
  description:
    'Use this verify grok bot output method to trace claims, test calculations, label uncertainty, and block unsupported statements before they spread.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Verify Bot Output Before Anyone Repeats It

Tariq reads a bot-written pipeline brief aloud in the Monday meeting: "Renewals fell 18 percent last week." The CRM export actually shows an 18 percent drop in open renewal value after one large deal changed stages. The sentence is fluent, specific, and wrong.

To verify Grok Bot output, review the claims that can change a decision, trace each to a source, recalculate numbers from the cited inputs, and mark anything unresolved before delivery. Editing tone is not verification. A document with clean grammar can still move a team in the wrong direction.

This guide covers the output artifact after a bot has written it. It does not grant source access, approve sending, or reconstruct an incident. Use [a boundary is not a permission](/blog/a-boundary-is-not-a-permission) for access and [bot incident response](/blog/bot-incident-response) after an unsupported statement has already caused an external action.

## Freeze the draft before comments create a moving target

Copy the draft into a versioned review file and record its creation time, charter version, source window, and verifier. Do not verify a live document while the bot continues editing it. Every source note must refer to the same frozen text.

Assign claim IDs such as C01 through C18. Sentence numbers drift when an editor adds a paragraph. Claim IDs survive. One sentence can contain several claims, so split "renewals fell and churn rose because onboarding slowed" into three rows.

The frozen artifact is not necessarily safe to publish. Label it DRAFT, NOT VERIFIED until the review sheet passes.

## Sort claims by consequence before checking them

Not every sentence deserves equal effort. A meeting time copied from a calendar and a recommendation to cancel a vendor do not carry the same consequence. Classify each claim as high, medium, or low consequence using your local process.

High-consequence claims can trigger money movement, customer communication, personnel decisions, legal statements, production changes, or executive commitments. Verify every one. For lower tiers, define a sample size before reading the draft so the reviewer cannot quietly skip awkward claims.

| Consequence | Example | Minimum local rule | Failure result |
|---|---|---|---|
| High | "Cancel vendor X" or "Customer Y agreed" | Verify every claim and implication | Block delivery |
| Medium | Pipeline total, support trend, launch date | Recalculate or trace every numeric/date claim | Remove or correct |
| Low | Neutral summary of linked notes | Sample a declared number | Expand sample if one fails |
| Opinion | "This risk deserves review" | Confirm evidence is labeled separately | Rewrite as judgment |

## Require a source that can support the exact wording

A source link is not enough. It must support the subject, metric, time window, and comparison in the claim. A current CRM page cannot prove what the value was last Friday unless it exposes history or you preserved an export.

Open the source rather than trusting link text. Record the relevant field, row, message, or quoted fragment in your own words. If access fails, mark NOT VERIFIED. Do not infer the missing content from a URL or search snippet.

[Source Verifier](/bots/source-verifier) and [Citation Checker](/bots/citation-checker) are useful patterns, but the human verifier still owns the pass decision.

## Recalculate every number from named inputs

For each number, save the input values, formula, units, exclusions, and rounding rule. "18 percent" without numerator and denominator is an orphan claim. Recalculate in a spreadsheet or simple local tool you trust, then compare with the draft.

Tariq's draft used (current open value minus prior open value) divided by prior open value. That calculation was correct. The label "renewals fell" was not. The metric measured open pipeline value, not completed renewals. Verification therefore checks semantics as well as arithmetic.

\`\`\`text
CLAIM C04
Draft: Renewals fell 18 percent last week.
Source: CRM export renewal-pipeline-2026-08-29.csv
Prior open value: 500,000 USD
Current open value: 410,000 USD
Formula: (410000 - 500000) / 500000 = -0.18
Arithmetic: PASS
Metric label: FAIL. Values represent open pipeline, not completed renewals.
Corrected claim: Open renewal pipeline value fell 18 percent week over week, mostly because deal R-184 moved to closed-lost.
Verifier: Tariq
\`\`\`

## Check dates, names, and scope as carefully as totals

Many damaging errors are not numerical. A brief can attribute a promise to the wrong customer, use the wrong account tenant, compare calendar weeks with rolling seven-day windows, or call a draft launch date committed.

Create explicit fields for entity, tenant, period start, period end, timezone, and status. Verify names against source identifiers, not memory. For a meeting note, distinguish said, proposed, agreed, and completed.

| Field | Draft says | Source says | Verification action |
|---|---|---|---|
| Customer | Northwind | Northwind EU | Correct entity and tenant |
| Period | Last week | Rolling 7 days ending 28 Aug | Rewrite window exactly |
| Date | Launch 5 Sep | Proposed 5 Sep | Add proposed status |
| Owner | Maya | Maya consulted, Rafi owns | Correct accountability |
| Amount | 12,000 | 12,000 EUR | Add currency |

## Separate observation, inference, and recommendation

An observation is directly supported by evidence. An inference connects observations. A recommendation proposes action. Bot output often compresses all three into one authoritative sentence.

Rewrite "Support is deteriorating, so hire two agents" as: "Median first response increased from X to Y in the named window" (observation), "ticket mix may contribute" (inference requiring evidence), and "the support lead should review staffing after segmenting the queue" (recommendation).

Keep labels visible. A source can support an observation without proving the causal inference. A manager can accept a recommendation while disagreeing with its cause.

## Challenge absence claims with a second search path

"No customer mentioned cancellation" is harder to verify than "Customer A mentioned cancellation." Absence depends on search scope, source completeness, synonyms, and access.

For a negative claim, record the sources searched, query terms, time window, exclusions, and any inaccessible source. Use a second search path or reviewer for high-consequence absence. If coverage is incomplete, write "No mention found in the reviewed sources" rather than "Nobody mentioned it."

[Claim Provenance Tracker](/bots/claim-provenance-tracker) can shape a claim ledger. It cannot turn an incomplete corpus into proof of absence.

## Walk Tariq through the 18 percent failure

The draft contains fourteen claims. Tariq labels five high consequence because executives may repeat them to sales managers. He freezes BRIEF-v3.md and assigns claim IDs. C04 contains the 18 percent renewal statement.

The CRM export supports the arithmetic but not the noun. Tariq traces the largest change to deal R-184, which moved from open to closed-lost. Completed renewal revenue did not fall 18 percent. He marks C04 FAIL, corrects the metric, and adds the deal movement as context.

He then checks two ordinary claims. One has an inaccessible meeting link, so it becomes NOT VERIFIED and is removed. The final brief contains twelve claims, five fully verified high-consequence rows, and a review record.

| Claim | Consequence | Source result | Decision |
|---|---|---|---|
| C01 meeting count | Medium | Calendar export matches | Pass |
| C04 renewal metric | High | Arithmetic passes, label fails | Correct |
| C06 customer promise | High | Note says proposed, not agreed | Correct |
| C09 competitor mention | Low | Source inaccessible | Remove |
| C12 staffing suggestion | High | Evidence supports queue change, not headcount | Rewrite as review request |

## Fail the review when one high-consequence claim cannot be supported

A verification procedure must produce a stop. Block delivery if any high-consequence claim lacks a source, conflicts with the source, hides an inference, or uses an unreproducible calculation. Remove the claim or obtain better evidence.

Also fail if the draft changes after review without a new version. Fail if a source points to the wrong tenant or time window. Fail if a reviewer verifies their own unsupported recollection.

Do not average failures into a quality score. One invented customer commitment can outweigh twenty accurate meeting times.

## Verify the verification with an adversarial fixture

Plant a harmless draft containing six known defects: wrong currency, shifted date window, correct arithmetic with wrong metric label, unsupported causal claim, wrong customer tenant, and an absence claim from incomplete sources. Give the reviewer the normal checklist.

The method passes only when all six are caught and no external delivery occurs. Record which checks found each defect. If two defects survive, revise the checklist or reviewer training and repeat with a fresh fixture.

This local drill measures your process, not the product. [Testing your bot](/blog/testing-your-bot) covers job behavior; this exercise tests the human verification surface.

## Keep approval separate from factual verification

A factual pass does not authorize publication. A perfectly sourced report can still contain confidential information or go to the wrong destination. Conversely, an authorized destination does not make an unsupported claim true.

Use two fields: VERIFIED BY and APPROVED FOR DELIVERY BY. The verifier signs the claim ledger. The destination owner reviews the final payload, audience, and timing. If the payload changes after approval, repeat the relevant checks.

[What an approval actually governs](/blog/what-an-approval-actually-governs) explains why approval must attach to an exact proposed action.

## Answer the leader who says full verification defeats automation

The strongest objection is economic: checking every sentence can take as long as writing the report. The answer is consequence-based review, better source capture, and a narrower output contract, not pretending every claim deserves trust.

Automate collection into a claim ledger. Require source identifiers as the draft is created. Verify every high-consequence claim and a declared sample of lower-consequence claims. If the sample fails, widen it. Remove low-value narrative that cannot justify its review cost.

For low-stakes personal brainstorming, the objection may win. Label the output as unverified and do not let it enter a decision record.

## Stop this method at code, legal advice, or live incidents

Code needs tests, review, and deployment controls specific to the repository. Legal, medical, and financial decisions need qualified review under the relevant process. This claim-ledger method can support those reviewers but cannot replace them.

If bad output has already been sent or acted upon, preserve the frozen artifact and use [write a bot post-mortem](/blog/bot-post-mortems) after containment. For prompt scope, see [what a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits). For directory patterns, [Account Expert](/bots/account-expert) and [QBR Pack Builder](/bots/qbr-pack-builder) illustrate brief-shaped work without changing the verification duty.

## Build a claim ledger that survives edits

Store one row per claim with claim ID, exact draft text, consequence, source identifiers, source excerpt or field, calculation, verifier, status, and correction. The ledger separates verification evidence from the prose layout. Editors can reorder sections without losing the review trail.

Use stable source identifiers when possible: CRM record ID, message ID, calendar event ID, file plus row, or page URL plus observation time. A dashboard screenshot may help, but record the filter and tenant because the same dashboard URL can display different data later.

| Claim ID | Draft text | Evidence | Status | Required action |
|---|---|---|---|---|
| C01 | Five renewals close this week | Deal IDs R1 through R5, close dates | Pass | Keep with reporting window |
| C04 | Renewals fell 18 percent | Two exports and formula | Fail label | Rewrite as open pipeline value |
| C06 | Northwind agreed to launch | Meeting note says proposed | Fail status | Replace agreed with proposed |
| C09 | No account raised security | Only two of four sources searched | Not verified | Narrow absence claim or remove |

When a correction changes meaning, create a new ledger revision and recheck the claim. Do not overwrite FAIL with PASS while deleting the failed text. The history teaches future charter changes and supports post-mortem work.

## Verify quotations against the original speaker and context

A quotation requires the exact speaker, source, wording, and enough context to preserve meaning. Meeting summaries frequently turn a question into a commitment or combine two speakers. Open the original note, transcript, or message and compare.

Keep quotations short and necessary. Paraphrase when exact wording adds no value, but still cite the source. If a transcript is automated or the speaker label is uncertain, state that limitation. Never repair a garbled quote into what the reviewer thinks the person meant.

Check negation and conditional language. "We can launch if security approves" does not support "We can launch." "I do not expect churn" does not support "I expect churn." These errors survive keyword matching because the same nouns appear.

For a customer commitment, verify who had authority to commit. A participant's suggestion may not bind their organization. Mark the observation separately from the business interpretation.

## Check freshness before checking eloquence

Every source with time-sensitive content needs an observed-at or generated-at timestamp and an acceptable reporting window. A correct figure from Friday can be wrong in a Monday daily brief even if arithmetic and wording are perfect.

Define freshness in the charter. "Current" is not a measurable rule. "Generated after 07:00 on the report date and covering records through 06:59 Asia/Kolkata" can pass or fail. If a source lacks a reliable time, label it and exclude it from claims that require recency.

Compare timestamps across source, local file, draft, and destination. Copy time is not necessarily generation time. A cached file copied this morning may still contain Friday data. Inspect a source field or manifest that preserves origin time.

When one source is stale, decide whether the entire output stops or a section is omitted. Derived totals across fresh and stale sources usually need a stop because the denominator becomes incoherent. A qualitative appendix may permit a clearly labeled omission.

## Run cross-field consistency checks after individual claims pass

Individual rows can all trace to sources while the document contradicts itself. A table may show five renewals, a paragraph may say six, and the recommendation may assume seven. Run consistency checks across totals, dates, entity names, statuses, and recommendations.

Recalculate subtotals and ensure they reconcile to the headline total. Check that every "top three" list has three items and uses the declared ranking metric. Confirm that the executive summary matches the verified body after corrections.

Look for denominator shifts. A rate can use all accounts in one section and active accounts in another. Both calculations can be correct, but comparison is misleading. Name each population.

Use a final redline that highlights numbers, dates, proper nouns, absolutes, superlatives, and causal connectors such as because or therefore. Those tokens often reveal claims that escaped the ledger.

## Give unresolved claims an explicit terminal state

Every claim ends PASS, CORRECTED_AND_PASS, REMOVED, or NOT_VERIFIED_AND_BLOCKED. PENDING is allowed only before the review deadline. At delivery time, no high-consequence claim may remain pending.

Do not convert NOT VERIFIED into "likely" unless evidence supports a probability statement. "Likely" can make uncertainty sound researched when it is merely unresolved. State what source was missing and what narrower assertion, if any, remains supported.

If the document needs to ship without one section, insert a visible omission note approved by the business owner. Do not smooth the transition so readers cannot tell data is absent. The goal is safe interpretation, not a perfectly symmetrical report.

Preserve removed claims in the ledger so recurrence can be measured. If the same unsupported causal claim appears in three drafts, fix the charter or source contract rather than relying on repeated human deletion.

## Sample lower-consequence claims with a widening rule

Declare the sample before review: for example, three of nine low-consequence claims selected by claim ID using a simple method. If any sampled claim fails, verify all remaining claims in that tier. This prevents a reviewer from choosing only the easiest rows.

Do not sample high-consequence claims. Do not sample a tiny set when errors are correlated, such as every row produced from one malformed export. In that case, verify the shared transformation and enough rows to prove it applied correctly.

Record the selection method and outcome. The specific sample size is a local risk choice, not a universal benchmark. Increase it when sources are new, the charter changed, the job crosses tenants, or a previous run failed.

Sampling reduces review cost only when the output contract makes errors observable. Free-form narrative with intertwined claims is difficult to sample safely. Restructure it into a claim ledger and concise supported prose.

## Verify tables and charts against the prose that interprets them

Charts introduce transformation choices that a source link may not reveal: sorting, omitted categories, truncated axes, aggregation, filters, and color meaning. Save the underlying data and chart specification or a plain description of each transformation. Recalculate at least the headline value from the data.

Check that the prose describes what the visual shows. A rising line can represent cumulative total rather than weekly growth. A bar labeled Other may combine categories that matter to the recommendation. A chart covering four complete weeks should not be described as a monthly trend without qualification.

For tables, reconcile totals, column units, currencies, and row counts. Confirm that sorting does not separate labels from values. Inspect blanks and zeros separately because a missing value is not necessarily zero.

If a visual cannot be reproduced from preserved inputs, remove it or label it unverified. A polished graphic can spread faster than the paragraph beneath it, so verification should treat its title and annotations as high-consequence claims.

## Require a second reviewer when the author owns the outcome

Tariq wants the renewal program to appear healthy. Even with good intentions, that preference can influence which denominator or status feels natural. For decisions with material consequence, assign a verifier who does not own the desired result.

The second reviewer does not repeat every mechanical check. They challenge the highest-consequence claims, source selection, exclusions, and inference labels. Give them the frozen draft and ledger, not a verbal explanation that frames the answer first.

Record disagreements. If two valid metrics answer different questions, present both or ask the business owner which question the report should answer. Do not let hierarchy silently decide what the evidence says.

Small teams may lack an independent colleague. Use a delayed self-review with the answer key hidden, or narrow the output to lower-consequence observations. Independence is a risk control, not a claim that one person can never verify their own work.

Keep the verifier's corrections separate from stylistic preference. A claim can pass evidence review while sounding awkward, and a graceful rewrite can introduce a new unsupported implication. After copy editing, compare every changed factual sentence with the claim ledger. If an editor adds "significant," "leading," "only," or "because," treat it as a new claim and verify it. Freeze the final delivery version only after that second comparison, then attach its identifier to the approval request.

## Frequently Asked Questions

### What should you verify first in bot output?

Verify high-consequence claims first: statements that could trigger money movement, customer communication, personnel decisions, legal assertions, production changes, or executive commitments. Freeze the draft, assign claim IDs, and trace each high-consequence claim to a source that supports the exact entity, metric, period, and status. Recalculate numbers from named inputs. If one high-consequence claim is unsupported or contradicted, block delivery, remove it, or obtain better evidence before reviewing lower-risk prose.

### Is a source link enough to verify a claim?

No. The linked source must support the exact wording, including subject, tenant, metric, time window, status, and comparison. Open it, locate the relevant row or field, and record what it supports. A current dashboard cannot necessarily prove a past value, and a meeting note saying "proposed" cannot support "agreed." If access fails or the source covers only part of the claim, mark the claim NOT VERIFIED and narrow or remove it.

### How do you verify a percentage from a bot?

Record the numerator, denominator, units, exclusions, period, formula, and rounding rule, then recalculate independently. After arithmetic passes, check whether the metric label matches the inputs. A correct 18 percent change in open pipeline value does not prove an 18 percent change in completed renewals. Preserve the calculation in the claim ledger so another reviewer can reproduce it. If input data changed after drafting, freeze a new source snapshot and review a new draft version.

### Does verified output still need approval?

Yes. Verification addresses factual support, while approval governs a proposed action such as sending a specific payload to a specific destination. A sourced report may still contain confidential material, reach the wrong audience, or arrive at the wrong time. Keep separate VERIFIED BY and APPROVED FOR DELIVERY BY fields. The destination owner should review the final frozen payload and audience. If the content, recipient, or delivery method changes afterward, repeat the relevant verification and approval steps.
`,
};
