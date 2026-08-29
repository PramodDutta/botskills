import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Diff a Competitor Homepage and Allow a Quiet Week',
  description:
    'Run a grok bot competitor website watch that compares message blocks, preserves evidence, reports could-not-compute, and accepts a quiet week.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Diff a Competitor Homepage and Allow a Quiet Week

Nila receives a 146-line homepage alert on Friday. A consent banner gained an attribute, customer logos rotated, and a build hash changed. The actual headline stayed the same. The next Friday, the report is empty because the browser never rendered the page, yet its summary says "no changes."

A grok bot competitor website watch should compare editorial meaning, not raw markup, and it needs three honest outcomes: a qualifying change, a quiet week, or could not compute. The third outcome is essential. A failed observation contains no evidence about whether the competitor changed.

This tutorial uses the [Competitor Website Watch bot](/bots/competitor-website-watch) and keeps its scope on public homepage messaging. Pricing fields belong in [Log a Competitor Price With a Source, Never Change Yours](/blog/competitor-pricing-watch-never-reprices). Ad-library creative belongs in [Clip Competitor Ads Into a Folder, Never Launch Yours](/blog/competitor-ad-watch-never-launches-ads). Different surfaces need different normalization rules.

## Decide which homepage message would change a real conversation

Nila's review question is: "Did a competitor change who the product is for, the problem it leads with, the promise it makes, the proof it presents, or the action it asks a visitor to take?" This gives the extractor five named blocks and keeps CSS churn outside the weekly meeting.

Her team does not need every word change. It needs a defensible message event that may affect positioning research. A new customer logo can matter as proof, but a rotation among ten already-known logos usually does not. A button changing from "Start free" to "Talk to sales" can matter even if only two words changed.

| Homepage block | Qualifying example | Ignored example | Human question |
|---|---|---|---|
| Audience | "For security teams" appears | Line wraps differently | Did the target buyer narrow? |
| Problem | New lead pain statement | Punctuation repair | Is a new pain being claimed? |
| Promise | Time-to-value claim changes | Font weight changes | What is now being promised? |
| Proof | Named metric appears | Known logos reorder | Is the support materially new? |
| Action | Trial becomes sales call | Button class changes | Did the buying path change? |

## Baseline one stable viewport before adding pages

Begin with one public homepage, one viewport, one locale, and one capture schedule. Nila uses a desktop viewport and Friday 10:00 IST because that matches her review rhythm. The dimensions and time are internal configuration choices, not Grok Bot limits.

Record URL, locale, viewport, consent state, capture time, visible page title, and final URL after ordinary redirects. If the homepage deliberately serves a mobile message, create a separate mobile baseline later. Do not compare desktop one week with mobile the next and call responsive copy a strategy change.

Manually inspect the first baseline. Identify the five message blocks, recurring dynamic regions, and any content that appears only after interaction. A bad baseline turns every future run into archaeology. Add a second competitor only after the first produces one clean quiet result and one planted-change result.

## Extract message blocks before calculating a difference

The collector should turn a rendered page into a small structured record. Capture the hero eyebrow, headline, subhead, primary and secondary calls to action, named audience, proof claims, section headings, and visible offer language. Store the full-page image and page source as supporting artifacts where permitted, but compare the structured record.

Order matters for editorial meaning. If a proof block moves above the fold without changing its words, that can be a qualifying emphasis change. Store block order and visibility along with text. Do not treat every DOM position as meaning, since responsive layout and injected components can alter it.

Use stable semantic labels instead of CSS selectors alone. A selector such as a generated class can change on every build. A block described by role, nearby heading, and normalized text is more resilient. When the extractor cannot identify the hero confidently, it should fail closed with could not compute.

## Normalize whitespace and rotating furniture, not claims

Normalization removes changes known to be irrelevant to Nila's question. Collapse repeated whitespace, standardize ordinary quotation marks, ignore build identifiers, and exclude configured consent or chat regions. Treat tracking parameters separately from destination-path changes.

Do not normalize numbers, named audiences, negation, duration, guarantee terms, or call-to-action verbs. Turning "in 30 days" and "in 3 days" into the same token would erase the change the monitor exists to find. Likewise, "no setup fee" and "setup fee" differ by a small word with large meaning.

| Change type | Normalize? | Reason | Guardrail |
|---|---|---|---|
| Repeated spaces | Yes | Rendering noise | Preserve word order |
| Build hash | Yes | Deployment metadata | Confirm region is non-editorial |
| Rotating known logo | Usually | Repeated furniture | Alert on a new named logo |
| Numeric claim | No | Commercial meaning | Save exact source text |
| CTA destination path | No | Buying-path meaning | Ignore tracking keys only |
| Negation | No | Reverses meaning | Require exact comparison |

## Give every run three possible outcomes

The outcome vocabulary is qualifying change, quiet week, or could not compute. A qualifying change means comparable captures exist and at least one message block crossed the declared filter. A quiet week means comparable captures exist and none crossed it. Could not compute means the workflow could not make a valid comparison.

Could not compute covers a blocked page, empty render, missing baseline, unexpected locale, consent wall, extraction ambiguity, mismatched viewport, or archive failure. It is not an error to hide. It is the result the operator needs in order to repair coverage.

Do not add a fourth vague state called "maybe." Put uncertain but comparable changes into a review queue with the evidence. Use could not compute only when the comparison itself is invalid.

## Preserve the old and new page as one evidence pair

A change report needs two dated sides. Save the prior structured record and archive pointer, the current record and archive pointer, normalized diff, conditions, and extraction version. If the extraction rules change, do not compare the new output blindly to the old schema.

Nila gives every evidence pair a local event ID. The report links highlighted screenshots to exact text rows. A reviewer can see whether the visual emphasis changed and whether the textual extraction is faithful. The source URL alone is insufficient because the live page may change again before review.

| Evidence item | Old side | New side | Why both matter |
|---|---|---|---|
| Capture time | Prior Friday | Current Friday | Bounds observation window |
| Headline source | Exact old words | Exact new words | Supports message claim |
| Screenshot | Old render | New render | Shows prominence and context |
| Conditions | Locale and viewport | Locale and viewport | Establishes comparability |
| Extractor version | Version label | Version label | Reveals schema drift |

The [Claim Provenance Tracker bot](/bots/claim-provenance-tracker) is useful when the resulting observation will be cited elsewhere. It should receive the evidence pair, not a conclusion stripped of its captures.

## Write the boundary against edits and outreach

The boundary is: "Never edit our website, publish a response, contact the competitor, submit a form, or create an account. Compare approved public pages and draft a private evidence report only." This stops the monitor from turning discovery into reaction.

Do not connect the workflow to your CMS or outbound tools. If it has an authenticated browser session for unrelated work, a narrow prompt does not erase that session. [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) explains the inheritance problem. [How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) helps you test the wording.

Use this charter:

\`\`\`text
Role: public homepage message comparator

Configured state:
- approved homepage URL
- locale, viewport, consent state, and weekly capture time
- five blocks: audience, problem, promise, proof, and action
- last verified structured record and archive

For each run:
1. Render the public page under the configured conditions.
2. If render, conditions, extraction, or archiving fails, return COULD NOT COMPUTE.
3. Extract exact source text, order, visibility, and CTA destination for each block.
4. Normalize only configured furniture, whitespace, and tracking noise.
5. Save an old-and-new evidence pair for every qualifying message change.
6. If comparison succeeds with no qualifying change, return QUIET WEEK.

Boundary:
Never edit our site, publish a response, contact the competitor, submit a form,
or create an account. Draft a private evidence report only.
\`\`\`

## Walk Nila through a quiet first week

On August 31, Nila establishes the baseline for three competitors. Three is her pilot size. She manually labels 15 message blocks, checks all primary CTA destinations, and lists two dynamic regions: a testimonial carousel and a rotating logo strip.

On September 7, all three pages render under matched conditions. One logo strip changes order, a testimonial rotates, and a page gains an accessibility label. Structured message records remain identical. The report says "Quiet week across three comparable homepages" and links the run summary.

That result is not empty. It proves the capture ran, conditions matched, extraction succeeded, and the filter rejected known furniture. Nila samples one page against its screenshots and approves the quiet result. She does not ask the workflow to produce a trend paragraph.

On September 14, one hero CTA changes from "Start free" to "Book a demo," while its destination moves from a signup path to a sales path. The report contains one event with old and new evidence. The team discusses a possible buying-motion change, carefully labeled interpretation.

## Trace Tuesday's empty brief to a changed selector

On September 21, the digest says quiet week, but Nila notices that one current screenshot is blank below the navigation. The extractor returned empty strings and the comparison layer interpreted them as no qualifying changes because the missing-field rule was wrong.

She traces the failure to a redesigned hero wrapper. A generated class name changed, so the selector found no block. The correct outcome was could not compute. Nila changes the rule: every configured page requires a non-empty title, visible hero candidate, primary action candidate, and archive before comparison begins.

She reruns the saved page with a semantic extractor based on headings and visible roles. It finds the new hero. Because the baseline and current record now use different extraction versions, she performs a manual bridge comparison and records that exception rather than pretending continuity.

| Symptom | Cause | Repair | Failing verification |
|---|---|---|---|
| Empty report after redesign | Selector found no blocks | Require completeness gate | Blank hero yields could not compute |
| Whole page appears changed | Locale drift | Lock and record locale | Locale mismatch stops diff |
| CTA changes every run | Experiment or personalization | Preserve variants, mark unstable | Immediate repeat disagrees |
| Screenshot exists, archive missing | Partial save | Reject comparison | Missing archive blocks quiet result |
| Same copy alerts repeatedly | Baseline never advanced | Approve verified baseline update | Known event disappears next run |

The important repair is not a better selector alone. It is preventing absence of evidence from being labeled stability.

## Treat experiments as variants, not settled rewrites

A homepage may serve different hero versions across immediate loads or browser contexts. If two captures under apparently matched conditions disagree, store both as observed variants and mark the page unstable. Do not choose the version that creates the more interesting story.

The monitor can report that multiple public variants were observed with timestamps. It cannot determine allocation, experiment design, winner, or intent. A later stable capture may become the new baseline after human review, but the variants stay in history.

If experiments are frequent, change the review question. You may track the set of observed message variants rather than one canonical page. That is a larger collection job and needs its own thresholds. Do not quietly smuggle it into a weekly single-baseline diff.

## Answer the strategist who wants every visible change

The strongest objection is that tiny changes can signal a repositioning before the headline moves. Capturing everything may appear safer. The cost is that high-volume noise consumes the reviewer's attention and makes missed runs harder to notice.

Keep raw archives for forensic comparison, but alert on the five declared message blocks. If a strategist needs navigation, footer, hiring, documentation, or product-page signals, add those as named fields with separate reasons. A structured expansion is defensible. A raw DOM diff is not a strategy feed.

The monitor's job is not to prove that ignored changes never matter. It is to make a repeatable trade: preserve broad evidence, spend attention on specific editorial meaning.

## Verify quiet, changed, and broken fixtures before scheduling

Create three local page fixtures. The quiet fixture changes a build hash, whitespace, logo order, and chat markup without changing message fields. The changed fixture alters one audience phrase, one number, and one CTA path. The broken fixture removes the hero, returns an empty shell, or blocks archive saving.

Write expected outcomes first. Quiet must produce no event but a complete run summary. Changed must produce exact old and new rows with archives. Broken must produce could not compute. Then plant a negation change, such as "requires setup" to "requires no setup," to prove normalization preserves meaning.

Run the fixtures after any extraction-rule edit. The [Bot Output Verification guide](/blog/bot-output-verification) provides the broader evidence discipline, while these fixtures test homepage-specific failure modes.

## Review a compact event instead of a wall of red and green

One event should lead with the changed block, old text, new text, prominence change, CTA destination if relevant, capture window, and archive links. Put interpretation in a final labeled line. Collapse supporting markup by default.

Use text highlighting carefully. Mark exact changed tokens, but show the full sentence and its block heading so a reviewer sees negation, qualification, and context. A token diff that highlights "3" becoming "30" is helpful; one that hides "up to" outside the highlighted fragment can mislead. The screenshot and source text remain the authoritative pair.

Nila ranks audience and promise changes above proof and action only if her current research question says so. Another team might prioritize buying motion. The ranking is an internal review configuration and should be visible in the brief.

When one event touches several blocks, preserve their relationship. A new audience plus a new CTA may be one coordinated page event rather than two unrelated alerts. Group for review but retain field rows so later analysis can ask which kind of message moved. Never collapse several captures from different locales into one event.

A run summary reconciles configured, compared, changed, quiet, unstable, and could-not-compute pages. If the numbers do not add up, the report fails review. Compact output does not mean missing operational state.

## Advance the baseline only after a person accepts the event

An automated monitor needs a rule for when the new page becomes the comparison baseline. Advancing immediately can hide an extraction mistake. Never advancing causes the same accepted change to alert every week. Nila uses a pending event state until a reviewer accepts, rejects, or remaps the difference.

Acceptance means the evidence pair is comparable, source text is faithful, and the block classification is useful. It does not mean the strategic interpretation is correct. Once accepted, the current structured record becomes the next baseline and the old record remains immutable in history. A rejected event keeps the old baseline and stores the rejection reason, such as locale drift or furniture misclassified as proof.

If the reviewer is absent, the monitor continues capturing pages but does not silently jump the baseline. Later comparisons branch from the last accepted state and show intermediate captures. That makes the backlog visible instead of erasing it.

## Handle a total redesign as a migration, not one giant event

A redesign can change navigation, block order, page length, visual hierarchy, and wording at once. Reporting 80 independent changes implies precision the comparison cannot support. Mark a redesign candidate when most required blocks lose stable correspondence.

Do not use a fixed percentage as a universal redesign detector. Nila starts with a rule that sends the page to review when three of the five message blocks cannot be paired confidently. Three is her local threshold. A single unpaired hero can still justify review because prominence matters more than block count.

Nila preserves old and new full-page evidence, then builds a manual message map: old audience to new audience, old problem to new problem, old promise to new promise, old proof to new proof, and old action to new action. A missing block remains missing rather than being paired with the nearest sentence. The output is one redesign event with field-level evidence beneath it.

After review, establish a fresh baseline and rerun the quiet, changed, and broken fixtures against the new structure. The [Marketing OS Auditor bot](/bots/marketing-os-auditor) can help record ownership of that maintenance, while the homepage monitor stays focused on public message evidence.

This migration method also limits false certainty. A redesign can suggest a positioning change, but it may reflect brand, accessibility, or technical work. State what changed on the page and keep motive in the interpretation block.

After migration, compare the first two scheduled captures with the accepted redesign baseline. The first proves the new extractor can recover the mapped blocks. The second proves a quiet result does not depend on the one archived page used during development. If either run yields unexpected missing fields, reopen migration rather than adding ignore rules under time pressure.

## Stop this method at public homepage meaning

This method does not monitor authenticated products, private documentation, customer portals, or form responses. It does not infer traffic, conversion, revenue, or intent. It does not tell you to copy a claim. It reports what approved public pages showed under recorded conditions.

For credential implications of browser sessions, use [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives). For the distinction between a report boundary and actual authority, use [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission). The [Citation Checker bot](/bots/citation-checker) can review a later document that cites these events, but it should never replace preservation of the old and new captures.

Keep reading: [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers cleanup of retained artifacts without repeating that shared background here.

## Frequently Asked Questions

### What does could not compute mean in a website watch?

It means the workflow could not make a valid comparison. Common causes include a blocked or empty render, missing baseline, mismatched locale or viewport, consent wall, ambiguous extraction, or failed archive. It does not mean unchanged. A useful report names the failed prerequisite, page, timestamp, and last successful capture so an operator can restore coverage. Keeping this outcome separate from quiet week prevents a browser or selector failure from becoming false reassurance about a competitor's messaging.

### Should a homepage monitor compare raw HTML?

Keep raw source as supporting evidence when permitted, but do not use it as the main alert surface. HTML contains build identifiers, scripts, attributes, widget state, and layout changes that may not affect editorial meaning. Extract a structured record for audience, problem, promise, proof, and action, then compare exact source text and prominence under matched conditions. The archived page remains available if a reviewer needs detail, while the weekly report stays focused on decisions rather than deployment noise.

### How can a grok bot competitor website watch report a quiet week honestly?

It must prove that configured pages rendered, conditions matched, required message blocks were extracted, archives saved, and no field crossed the declared filter. The summary should reconcile compared, unstable, failed, changed, and quiet pages. A sentence saying "nothing changed" without those prerequisites is not evidence. Store quiet runs beside change events because continuous successful coverage distinguishes a stable week from a schedule that silently stopped or a page the browser could not read.

### Does a changed homepage headline prove a competitor repositioned?

No. It proves that a public page showed different words under recorded conditions. The change could be an experiment, regional variant, temporary campaign, correction, or lasting repositioning. Preserve old and new captures, test immediate stability, and label any strategic reading as interpretation. A later series of consistent changes across pages may strengthen that interpretation, but the monitor should never convert one text diff into a claim about motive, performance, or company strategy without additional primary evidence.
`,
};
