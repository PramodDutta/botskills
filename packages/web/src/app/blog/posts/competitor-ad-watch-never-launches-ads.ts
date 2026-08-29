import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Clip Competitor Ads Into a Folder, Never Launch Yours',
  description:
    'Set up grok bot competitor ads research with dated captures, creative families, quiet-week reports, and a hard boundary against launching campaigns.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Clip Competitor Ads Into a Folder, Never Launch Yours

Mira opens Monday's competitor digest and finds 63 "new" ads. Fifty-one are crops, translations, or tracking-link variants of work she saw last week. Two came from clicking sponsored placements, which gave the competitors paid traffic and contaminated her research. The folder is busy, but it is not useful.

The fix is to make collection boring and judgment explicit. A grok bot competitor ads workflow should visit public libraries, preserve enough evidence to recheck every observation, group near-duplicates into creative families, and stop before any action touches your own ad account. It should be allowed to report a quiet week. That last behavior matters because a monitor forced to produce novelty will manufacture it.

This tutorial builds that workflow around the [Competitor Ad Watch bot](/bots/competitor-ad-watch). It focuses on creative evidence and triage, not your paid-media budget, campaign operation, or the general mechanics of installing Grok Bot. For the runtime setup, use [Learn Grok Bot](/blog/learn-grok-bot) once and return here with a folder and a short advertiser list.

## Define the decision before you collect the first creative

The digest exists to help a marketer decide which competitor messages deserve a closer human look. It does not decide what your brand should claim, how much you should spend, or which campaign should launch. Write that decision at the top of the brief because it determines every field below it.

Mira chooses one weekly decision: "Which new offer, claim, or durable creative angle should the acquisition team discuss for 15 minutes on Tuesday?" Fifteen minutes is her internal choice, not a product limit. That sentence makes a useful distinction. A color change is unlikely to affect the discussion. A new guarantee might. A long-running ad disappearing might, if the evidence is strong enough.

Use a narrow decision rather than "monitor competitors." Broad monitoring rewards volume. A decision rewards selectivity. It also reveals when a different bot owns the job. The [Paid Media Budget Review bot](/bots/paid-media-budget-review) examines your own spend and must not be folded into this competitor collector. The [Ad Creative Generator bot](/bots/ad-creative-generator) drafts concepts, but the evidence folder should not invoke it automatically.

| Proposed use | Evidence needed | Allowed here | Human decision |
|---|---|---|---|
| Notice a new claim | Public-library capture and permalink | Yes | Whether the claim deserves review |
| Compare offer framing | Quoted line and landing-page capture | Yes | Whether to investigate the offer |
| Copy a competitor concept | More than monitoring evidence | No | Legal and brand review |
| Launch a response ad | Account access, budget, targeting, creative approval | No | Campaign owner approves and launches |

## Start with four advertisers and one library each

Mira begins with four competitors and one public ad library per competitor. Four is an arbitrary pilot size. It is large enough to expose duplicate handling and small enough for her to inspect every saved item after the first run. She records the exact advertiser identity used by the library, because similarly named pages and regional entities can create false matches.

For each target, save the library URL, advertiser label, expected country, and the reason it belongs on the list. Do not begin with every known competitor across four platforms. That creates an unreviewable baseline, and baseline errors survive into every later diff. Add another library only after the existing one produces a clean family map.

Public means a normal visitor can see the page without signing in or entering a trial. Do not route around a login, use a paywalled archive, or adopt a scraping pattern that violates the site's terms. If a library refuses to load, record "unchecked" with a timestamp. It is never acceptable to translate a failed fetch into "no new ads."

## Save a capture that another person can verify

A clip is not merely an image. It is a small evidence packet that lets someone answer: what was visible, where was it visible, and when did we observe it? Save the library permalink or ad identifier, advertiser name, platform, visible first-seen date if provided, your capture time, format, quoted headline, first body line, destination URL, and visible geography.

Give every capture an immutable identifier. Mira uses the capture date, advertiser key, platform, and library ID. If the library exposes no stable ID, she adds a short local sequence and marks the source ID absent. She does not invent an ID that looks platform-issued.

| Field | Example value | Why it survives review | Missing-value rule |
|---|---|---|---|
| Captured at | 2026-08-31 09:14 IST | Proves observation time | Never omit |
| Library URL | Public permalink | Lets a reviewer reopen source | Mark unavailable if none |
| Headline quote | One visible sentence | Supports angle classification | Do not reconstruct cropped text |
| Destination URL | Visible landing-page URL | Connects creative to offer | Record "not shown" |
| First seen | Date displayed by library | Helps estimate longevity | Keep separate from capture date |

Screenshots help with visual context, but searchable fields make later comparisons possible. Keep both when permitted. Do not treat a screenshot filename as provenance if it lacks the source URL and capture time. For a broader method of checking bot-produced claims, use [Verify Bot Output Before Anyone Repeats It](/blog/bot-output-verification).

## Group crops and translations into one creative family

The useful unit is often a creative family, not an individual ad row. A family shares the same central concept, offer, and claim even when aspect ratio, crop, language, or tracking parameters differ. The grouping rule must be written before the bot sees the baseline.

Mira assigns a family key from four normalized fields: advertiser, offer, core headline meaning, and destination path without tracking parameters. Visual similarity supports the choice but does not decide it alone. Two ads can use the same image and promote different guarantees. Conversely, the same concept can appear as video and static art.

Keep the raw captures beneath the family record. Grouping is an analytical layer, not deletion. A reviewer must be able to ungroup a mistaken match without visiting the library again. When uncertain, mark "family uncertain" and retain separate records. False separation costs a little review time. False merging can hide a genuinely new claim.

## Make seven days and twenty-one days declared filters

The catalog setup for Competitor Ad Watch drops creative live under seven days and highlights a creative that has run 21 days or more. Those are workflow choices in the bot listing, not universal truths about performance. Use them because they create consistent triage, then change them only with a dated reason.

The seven-day filter prevents fresh tests from dominating the weekly digest. The 21-day marker identifies longevity worth noticing. Neither proves conversion, profitability, spend, or intent. Public libraries do not give Mira the competitor's complete economics. She writes "durable public creative" rather than "winning ad."

| Observation | Classification | Report this week? | What must not be inferred |
|---|---|---|---|
| First observed 2 days ago | Young test | No, retain in baseline | It failed or will fail |
| Present for 9 days | Established family | Only if angle is new | It is profitable |
| Present for 24 days | Durable family | Yes, with dates | Spend or conversion rate |
| Gone after 30 observed days | Retired long-runner | Yes, after verification | Why the advertiser stopped it |
| Variant count triples | Scaling signal | Yes, label as proxy | Exact budget increase |

If your review cadence is not weekly, adjust the thresholds to fit it. Record both first observed and library-displayed first seen, since they answer different questions. Your monitor cannot know what happened before you began collecting unless the source shows it.

## Strip tracking noise without erasing a changed offer

Normalize destination URLs by separating the stable host and path from known tracking parameters. A change from one campaign tag to another should not create a new family. A change from "/demo" to "/free-trial" might indicate a different offer and should remain visible.

Do not blindly remove every query parameter. Some sites encode plan, language, region, or offer selection in the query. Mira keeps a small allowlist of meaningful keys and an ignore list of confirmed tracking keys. During the pilot, she opens the visible destination directly rather than clicking the ad itself. She records redirects and the final page, but never fills a form or creates an account.

This distinction is why a raw HTML diff performs poorly for creative research. Technical variation becomes editorial noise. Structured comparison preserves the fields that answer Mira's decision.

## Write the boundary so collection cannot become activation

The boundary is: "Never create, edit, schedule, publish, pause, or launch an ad, and never click a competitor's sponsored placement. Save public evidence and draft a private digest only." This is narrower than "do not spend money." Editing targeting or uploading a creative can cause harm before spend begins.

A boundary describes the action the workflow must never take. It is not an access control by itself. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains that distinction, while [How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) shows how to make the sentence testable. Here, the operational response is equally important: do not connect the collector to an ad account it does not need.

Use this pasteable charter as a starting point:

\`\`\`text
Role: competitor creative evidence collector

Input:
- four approved advertiser identities
- one approved public library URL per advertiser
- previous capture index and creative-family map

For every run:
1. Read only pages available to a normal public visitor.
2. Save source URL, capture time, visible dates, format, one quoted line,
   destination URL, geography, and a screenshot when permitted.
3. Group crops, translations, aspect ratios, and tracking-only variants beneath
   an existing family while preserving every raw capture.
4. Report only a new offer or claim, a family observed for at least 21 days,
   a verified retired long-runner, or a threefold increase in variant count.
5. If nothing qualifies, report a quiet week and list unchecked libraries.

Boundary:
Never create, edit, schedule, publish, pause, or launch an ad. Never click a
competitor sponsored placement. Never sign in to obtain more source material.
\`\`\`

## Produce a digest that separates evidence from interpretation

Each digest item needs an evidence block and a clearly labeled interpretation. Evidence includes the quote, dates, family count, source links, and visible destination. Interpretation is Mira's best reading of the angle. Keeping them separate prevents a plausible story from hardening into an observed fact.

Order the digest by decision value, not capture time. A new guarantee outranks another crop. A durable offer outranks a font change. Give the marketer enough evidence to reject the interpretation quickly.

| Digest field | Evidence or interpretation | Example form | Reviewer action |
|---|---|---|---|
| Quoted headline | Evidence | Exact visible sentence | Compare to capture |
| Family age | Evidence | First observed 24 days ago | Check date history |
| Variant count | Evidence | 3 to 10 since last run | Inspect family membership |
| Likely angle | Interpretation | Reduces setup anxiety | Accept, rewrite, or reject |
| Recommended discussion | Interpretation | Review guarantee wording | Human chooses next step |

Do not recommend "launch a response." The strongest allowed recommendation is to investigate, discuss, or request a separate human-owned brief. The digest remains useful because it shortens attention, not because it closes the loop.

## Walk Mira through the Monday run and Tuesday review

On Monday at 09:00, Mira's workflow opens four approved library pages. One fails with a regional error, so the run marks that advertiser unchecked. Across the other three, it captures 28 rows and groups them into nine families. Seventeen rows belong to known families, six are young variants, four form one new offer family, and one appears to be a retired long-runner.

The new family promotes an annual plan with a visible guarantee. The workflow saves four raw captures, one family record, the quoted headline, the library permalinks, and a direct landing-page capture. It labels the angle "risk reversal" as interpretation. It does not say the guarantee is effective.

The apparent retirement fails its first check. One regional variant remains active, so the family is not retired. The digest contains one qualifying item and one unchecked library. On Tuesday, Mira verifies the quote and destination, rejects the bot's phrase "aggressive guarantee" as editorialized, and replaces it with "time-limited guarantee." The team discusses the message for 11 minutes and launches nothing.

On day 30, the folder holds dated evidence and a stable family history. The main benefit is not the number of clips. It is the ability to explain why only three items reached discussion across four weeks.

## Trace a false scaling alert back to family membership

In week three, the workflow reports a competitor's variant count rising from two to eight, apparently a fourfold increase. Mira opens the family record before treating it as scaling. Six new rows are translations for three countries, and two use different destination paths for unrelated offers. The family was assembled incorrectly.

She splits the record into three families, keeps the raw captures, and reruns the comparison. The original family remains at two variants. There is no scaling alert. She adds a rule: a translation can join an existing family only when the offer and destination meaning are unchanged, and a destination offer change forces human review.

| Symptom | Actual cause | Repair | Verification that can fail |
|---|---|---|---|
| Variant count jumps overnight | Translations merged blindly | Compare offer and destination meaning | Recount after split |
| Every ad appears new | Baseline path changed | Restore prior index and test one known ID | Known ID matches old family |
| Retired family returns next run | Regional page was missed | Require region coverage record | Check all configured regions |
| Empty digest says no changes | Library failed to load | Use unchecked status | Error appears in run summary |
| Quotes differ from screenshot | OCR or extraction error | Recheck visible text | Human compares exact sentence |

This walked failure matters because a confident scaling story could influence strategy even though the collection itself was accurate. The error lived in grouping, not fetching.

## Allow the report to say that the week was quiet

A quiet-week result should state how many advertisers and libraries were checked, which pages failed, how many raw rows were captured, and that no families crossed the declared filters. It should not fill the space with old examples or speculative trend commentary.

Quiet reports establish trust. They show that the monitor's output depends on evidence rather than an obligation to entertain. They also make alert volume measurable. If every week is loud, inspect family rules and thresholds before assuming the market is unusually active.

Mira keeps quiet reports in the same folder as active digests. On day 60, she can distinguish a stable market from a broken collector because failures are listed separately from checked pages with no qualifying change.

## Answer the marketer who wants the bot to draft response ads

The strongest objection is practical: once the collector identifies an angle, asking it to draft a response seems like an efficient next step. That can be reasonable in a separate, explicitly requested creative session. It is a poor default inside the monitor.

Collection and creation use different standards. The collector values faithful evidence, stable grouping, and low false positives. A creative tool values divergence and options. Combining them encourages the system to convert every observation into output and makes copied framing harder to spot. Keep the evidence folder read-only to downstream drafting until a person selects a brief. Then hand a minimal, attributed summary to a separate workflow such as [Ad Creative Drafts Never Go Live](/blog/ad-creative-drafts-never-go-live), where brand and approval checks belong.

## Verify the folder with planted variants before scheduling it

Build a synthetic test set of eight records. Eight is Mira's chosen test size. Include one exact duplicate, one crop, one translation with the same offer, one tracking-only URL change, one changed offer, one young family, one durable family, and one unreachable source. Seed last week's index, run the workflow, and predict the outcome first.

The test passes only if raw captures remain available, duplicate-like items group correctly, the changed offer stays separate, the durable family qualifies, the young family stays out of the digest, and the unreachable source is "unchecked." A test that cannot fail is decoration. Change one meaningful URL parameter and confirm the family decision changes.

Also reverse the test. Take one known family and alter only its crop, then alter its offer text. The crop should remain inside the family and the offer should split or enter review. This pair proves that the normalizer is sensitive to commercial meaning while tolerant of presentation noise.

After scheduling, sample every qualifying digest item for four runs. Four is an internal review period. Compare quotes, links, dates, family membership, and classification. The [Claim Provenance Tracker bot](/bots/claim-provenance-tracker) can help maintain evidence chains, but Mira still owns the decision to trust the monitor.

## Stop this method where public evidence stops

This workflow does not estimate spend, conversion, audience targeting, or business intent. It cannot see private account data, and it should not turn public longevity into a claim of profitability. When you need to compare changing plan fields rather than creative, use [Log a Competitor Price With a Source, Never Change Yours](/blog/competitor-pricing-watch-never-reprices). When you need homepage message changes, use [Diff a Competitor Homepage and Allow a Quiet Week](/blog/competitor-website-watch-could-not-compute).

Before adding a second platform, audit the first platform's folder as if you had not built it. Pick five family records and reconstruct each classification from raw captures. Confirm that quoted text matches the image, destination normalization retained meaningful offer parameters, dates use one timezone, and young creative stayed outside the digest. Five is a local sample, not a completeness claim. If one record cannot be reconstructed, repair the baseline before multiplying the problem across another library.

Assign a folder owner and a review date to ignore rules. A consent region or tracking key ignored in August may carry meaning after a site redesign. The owner reopens each rule against a current capture and records keep, narrow, or remove. This maintenance work is specific to evidence quality. It does not justify new campaign access or a larger advertiser list.

It also does not authorize access merely because a charter says "public only." If you are unsure what an approval changes, read [What an Approval Actually Governs](/blog/what-an-approval-actually-governs). The collector should have the smallest source set that answers Mira's decision, plus a folder whose evidence a second person can inspect.

Keep reading: [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) explains the credential location question without turning this creative workflow into another shared-computer article.

## Frequently Asked Questions

### Can Grok Bot click a competitor ad to inspect the landing page?

It should not click the sponsored placement. A click can cost the advertiser money and contaminate the observation. Save the public library permalink, then open the visible destination URL directly when the site's terms allow it. Record the source URL, destination, redirect, and capture time as separate fields. If the destination is not visible without clicking or signing in, mark it unavailable. The grok bot competitor ads workflow remains an evidence collector, not a participant in the competitor's paid traffic.

### How many competitor ads should the first baseline contain?

Use a baseline small enough for a person to inspect completely. In the worked example, Mira starts with four advertisers and one library each, but four is an arbitrary pilot choice rather than a product limit. Review every raw capture, family assignment, destination normalization, and missing field. Expand only after one clean weekly diff. A smaller verified baseline beats a large folder that silently merges translations, regions, and offers because those errors will distort every later longevity and scaling signal.

### Does a long-running public ad prove that it converts?

No. Longevity is a public observation and a useful triage proxy, not proof of conversion, profitability, spend, or advertiser intent. Report the visible first-seen date when the library provides it and your own first-observed date separately. Say "durable public creative" and attach the source. Do not say "winner" unless you possess direct performance evidence and are authorized to use it. The human reviewer can decide whether longevity merits investigation without converting an incomplete signal into a financial claim.

### What should a quiet-week competitor digest contain?

It should state the advertiser count, libraries checked, capture count, declared filters, and every source that was unreachable. It should then say that no creative family qualified. Do not recycle last week's items or invent a trend to make the report feel productive. A quiet result proves the workflow can distinguish no qualifying change from collection failure. Store it with active digests so a later reviewer can see continuous coverage and identify gaps instead of assuming silence means the schedule never ran.
`,
};
