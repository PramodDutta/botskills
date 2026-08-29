import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Rank Content Ideas Against a Brief, Never Schedule Them',
  description:
    'Turn grok bot content ideas into a cited shortlist scored against audience, evidence, novelty, format, and effort, with no drafting or scheduling step.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Rank Content Ideas Against a Brief, Never Schedule Them

Arun asks for ten ideas and gets ten fashionable topics, each phrased as a confident title. None names his intended reader, three duplicate posts he published last month, and two require evidence he cannot obtain. By Friday, one of those ideas has somehow become a scheduled draft.

A grok bot content ideas workflow should make candidates easier to reject. It should compare each one with a written brief, attach dated evidence, expose duplicates, estimate effort using a declared scale, and stop at a ranked shortlist. The boundary against drafting and scheduling protects the editor's scarce commitment point.

This tutorial starts with the [Content Idea Generator bot](/bots/content-idea-generator). It does not build a content calendar, write an outline, compose a hook, or manage publishing. Those are later workflows triggered only after a person selects an idea.

## Write a brief that can reject a plausible topic

Arun's brief contains audience, problem, desired change, formats he can ship, evidence he can access, topics he refuses, current editorial bets, and available effort. A brief made only of brand adjectives cannot reject anything. Add constraints that change a score.

His audience is engineering managers at teams of 20 to 100 developers. His next-month goal is to help them review AI-generated pull requests. He can publish a 1,500-word field guide or a 12-minute screen recording, has access to anonymized internal review notes, and refuses speculative model rankings. The sizes and formats are Arun's choices, not product facts.

| Brief field | Arun's answer | Candidate passes when | Candidate fails when |
|---|---|---|---|
| Audience | Engineering managers, 20 to 100 developers | Names their decision | Speaks to generic developers |
| Change | Improve AI-code review | Teaches a review action | Merely announces a tool |
| Evidence | Anonymized review notes | Can cite a dated pattern | Needs unavailable vendor data |
| Format | Field guide or screen recording | Fits one allowed shape | Requires a daily news feed |
| Exclusion | No speculative model ranking | Avoids unsupported leaderboard claims | Depends on private benchmarks |

## Separate candidate generation from candidate selection

Generation favors range. Selection favors fit and evidence. Running both as one invisible step makes it impossible to tell whether weak ideas were never considered or were scored badly.

Ask for a candidate pool first, including intentionally different angles: problem-led, workflow-led, failure-led, comparison, objection, and case reconstruction. Twenty candidates is Arun's arbitrary pool size. None is a commitment. The workflow then deduplicates and scores them against the brief.

Do not reward the bot for returning exactly twelve publishable titles. Reward it for deleting weak cards with reasons. A five-item shortlist from twenty candidates is stronger than a twelve-item list padded to meet a quota.

## Read the back catalogue before looking for novelty elsewhere

The workflow inventories recent published work with title, date, format, intended audience, primary question, and available performance fields. The catalog bot suggests reading the last 30 pieces and comparing click-through and watch-time behavior separately. Thirty is the listing's workflow choice, not a Grok Bot limit.

Performance fields must retain source and date range. A high click-through rate with low completion may indicate a strong promise and weak delivery. A modest click-through rate with strong completion may expose a packaging problem. The idea workflow reports those signals; it does not claim causality.

Arun also maps semantic coverage. Two titles can look different while answering the same question. Conversely, a repeated topic can be justified when it serves a new audience, evidence set, or decision. Duplicate detection should compare promise, reader, and outcome, not words alone.

## Turn demand signals into dated evidence cards

External demand can come from approved trend data, search queries, community questions, sales notes, support themes, or audience comments. Every signal needs exact wording, source, observation date, and date window where relevant. "People are asking about agents" is not evidence.

The [Literature Scan bot](/bots/literature-scan) can help locate dated primary material for research-heavy candidates. The [Source Verifier bot](/bots/source-verifier) can test factual claims later. Neither should be used to manufacture a why-now line when no timely signal exists.

| Signal | Required evidence | Useful inference | Forbidden leap |
|---|---|---|---|
| Rising query | Exact query and date window | Attention may be increasing | Guaranteed traffic |
| Repeated support question | Count, sample, and period | Existing readers need clarity | Entire market demand |
| Strong past article | Metric, source, and period | Adjacent coverage merits testing | Topic will repeat performance |
| New primary document | Link and publication date | Timely explanation opportunity | Broad adoption |
| No new signal | Explicit absence | Quiet week is valid | Invented urgency |

## Score audience fit before search volume

A candidate that attracts the wrong reader can perform visibly while weakening the publication. Arun makes audience fit a threshold: if the card cannot name the manager decision it serves, it cannot rank, regardless of apparent demand.

He scores fit from zero to three using a declared rubric. Zero means no connection. One means the audience may care but the decision is vague. Two means a clear audience problem. Three means the exact reader, moment, and decision match the brief. Zero-to-three is Arun's internal scale.

Search or trend evidence enters after fit. This order prevents a broad high-volume topic from outranking a specific useful one automatically. The workflow can still preserve the broad topic in a rejected-candidate log with the reason "outside current audience."

## Make evidence availability a hard gate

An idea may be excellent in theory and impossible to support this month. Arun requires at least one accessible primary or first-party evidence path before a candidate can reach the shortlist. A path names the source and access method, not merely "do research."

For a review-failure article, his evidence path is eight anonymized review notes and two before-and-after patches. Eight and two are declared project choices. For a vendor comparison, he would need current primary documentation for both sides. If one side is inaccessible, the card stays parked.

This rule reduces abandoned drafts. It also prevents the idea generator from converting an unverified claim into a catchy headline. Parked is different from rejected: the idea could return when evidence becomes available.

## Penalize overlap with the promise, not just the keyword

Build a small coverage record for every published piece: target reader, trigger, promised outcome, evidence type, and format. Compare candidate cards against those fields. A high overlap requires a stated reason to proceed.

Acceptable reasons include materially updated facts, a different reader decision, a new failure case, or a more usable format. "The keyword is valuable" does not differentiate a duplicate. Link the prior piece in the candidate card so the editor can inspect it.

The instruction not to restate shared background applies here too. A new article can link to a canonical explanation and spend its words on the new subject. [How to Write a Boundary Line](/blog/how-to-write-a-boundary-line), for example, should be linked rather than summarized inside every safety idea.

## Estimate effort with named work units

Effort should reflect evidence collection, interviews, artifact preparation, writing, editing, visual production, and review. Do not ask the bot for an unexplained number of hours. Give it a local reference table based on your own work.

Arun uses small, medium, and large units. Small means existing evidence and one format. Medium means up to three new source checks or one new visual. Large means interviews, original data, or several artifacts. These definitions are his and need calibration after publication.

| Effort class | Evidence work | Production work | Scheduling implication |
|---|---|---|---|
| Small | Existing approved packet | One familiar format | Candidate is feasible now |
| Medium | Up to 3 source checks | One new visual or demo | Needs named owner |
| Large | Interviews or original analysis | Multiple artifacts | Park unless capacity exists |
| Unknown | Evidence path unclear | Format unclear | Cannot rank above feasible work |

The workflow reports effort, but it does not reserve time. A human editor decides whether a high-value large idea beats two small ones.

## Keep why now factual or admit that it is evergreen

Each shortlisted card gets a why-now line supported by a dated signal. If no timely change exists, the workflow may say the idea is evergreen and identify the coverage gap. It must not invent urgency with phrases about a rapidly changing market.

Arun accepts three why-now forms: a dated external change, a dated internal pattern, or a zero-coverage evergreen gap. Each form includes evidence. "Competitors are writing about it" is incomplete without examples and dates. "Our readers need it" is incomplete without the reader signal.

If no candidate has a valid why-now line, return "no new ideas this week" and show the two closest rejected cards with their failed criteria. A quiet ideation run protects the publication from calendar pressure.

## Write the boundary against drafts and calendar writes

The boundary is: "Never write an outline, hook, script, article, caption, or creative; never create or change a calendar item; never upload, schedule, or publish. Return ranked evidence cards for human selection." Naming intermediate artifacts prevents the workflow from claiming it did not publish while quietly drafting the whole piece.

Do not connect the ideation path to a publishing CMS or social scheduler. A boundary is not an access control, as [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains. Keep tools aligned with the allowed job.

\`\`\`text
Role: evidence-backed content candidate ranker

Inputs:
- current audience and editorial brief
- recent catalogue with dates, questions, formats, and available performance data
- approved demand sources and evidence-access list
- local effort rubric

For each run:
1. Generate a broad private candidate pool.
2. Remove semantic duplicates unless a dated differentiation is stated.
3. Reject candidates that fail audience fit or lack an accessible evidence path.
4. Score fit, evidence strength, novelty, format fit, and local effort.
5. Attach exact source, observation date, and date window to every why-now claim.
6. Return 8 to 12 cards only if they pass. A shorter list or quiet week is valid.

Boundary:
Never write an outline, hook, script, post, caption, or creative. Never create or
change a calendar item. Never upload, schedule, publish, or send a pitch.
\`\`\`

The range of 8 to 12 comes from the bot listing's setup, not a platform maximum. If only four cards pass, return four.

## Walk Arun from twenty candidates to four cards

On Monday, the workflow reads Arun's brief and 30-piece catalogue, then generates twenty private candidates. Seven repeat an existing promise, three target individual contributors rather than managers, two need unavailable benchmark data, and one violates the no-model-ranking exclusion. Seven survive initial filtering.

One surviving card proposes "A manager's rejection checklist for AI-generated pull requests." Its audience-fit score is three. Evidence includes eight anonymized review failures observed in August. It fills a coverage gap and fits a field guide. Effort is medium because Arun needs one annotated patch visual. The why-now line cites the dated internal review pattern.

Another card has a strong rising query but addresses job seekers. It fails the audience threshold and stays in the rejection log. The workflow does not average a high demand score with zero fit to rescue it.

After evidence checks, four cards reach the shortlist. Arun selects one during editorial review. Selection creates a separate brief. Nothing appears on his calendar until he makes that choice.

## Trace a high-scoring duplicate to a weak coverage map

In week two, the top card proposes a guide to reviewing AI pull requests. Arun published nearly the same promise six weeks earlier, but the duplicate detector compared keywords and missed it because the old title said "machine-written patches."

He traces the failure to catalogue metadata. The old piece had no normalized reader, trigger, or promised outcome. Arun adds those fields and reruns the pool. The candidate now shows high promise overlap and is rejected unless it supplies a meaningful difference.

| Symptom | Cause | Repair | Verification that can fail |
|---|---|---|---|
| Duplicate ranks first | Title-only comparison | Map reader, trigger, and promise | Known paraphrase gets rejected |
| Every card has urgency | Why-now filler | Require dated evidence form | Undated card cannot rank |
| Great idea dies in draft | Evidence unavailable | Gate on named access path | Source link must open |
| Easy ideas always win | Effort dominates score | Make fit and evidence thresholds | High-fit medium card can lead |
| Shortlist always has 12 | Quota pressure | Permit short or quiet output | Weak planted card is deleted |

The repair improves the catalogue rather than adding a prompt that says "avoid duplicates." Structured memory makes the rule testable.

## Answer the editor who wants a full draft with every idea

The strongest objection is that a draft reveals whether an idea really works. Sometimes it does. Drafting every candidate, however, spends production effort before selection and makes sunk cost distort editorial judgment. It also blurs evidence gathering with persuasive writing.

Use the idea card to test reader, question, evidence, differentiation, format, and effort. If the editor needs a stronger test, authorize a small artifact such as a source packet or a five-line argument map in a separate step. Do not let the routine generate complete drafts by default.

Once selected, [Bot Output Verification](/blog/bot-output-verification) can shape review of the produced work. The ideation workflow ends before production begins.

## Verify ranking with planted strong and weak cards

Create six test candidates. One exactly matches the brief with a dated source. One has high demand but wrong audience. One duplicates an old promise. One has no evidence path. One fits but is large effort. One is evergreen and fills a documented zero-coverage gap. Six is an arbitrary test set.

Predict the ranking and rejection reasons. The workflow passes only if wrong-audience and no-evidence cards cannot be rescued by other scores, the duplicate is rejected or explicitly differentiated, and the evergreen card uses honest language. Remove the date from the strong card and verify its why-now status changes.

After four weekly runs, compare predicted effort with actual production effort for selected cards. Update the local rubric, not historical scores. The [Marketing OS Auditor bot](/bots/marketing-os-auditor) can help inspect workflow drift, while Arun remains the owner of editorial criteria.

## Calibrate scores against editorial decisions without copying them blindly

After each review, Arun records selected, parked, or rejected plus one reason. The workflow compares those decisions with its score components after ten reviews. Ten is an arbitrary calibration window. It looks for systematic disagreement, such as editors repeatedly rejecting high-scoring cards because the evidence is repetitive or choosing medium-effort cards the rubric labels large.

Calibration changes named rules, not individual historical outcomes. If "one new visual" consistently takes less effort than expected, Arun revises the medium definition for future cards. If a senior editor selects an off-brief topic for a one-time partnership, he records an exception rather than weakening the audience threshold for every run.

Keep the old rubric version on every card. Otherwise a score of 11 from June and 11 from August may represent different criteria. A versioned score lets Arun rerun a small sample under the new rubric and explain why ranking changed. It also prevents a rejected idea from appearing mishandled merely because today's scale is stricter.

Do not train the scorer to imitate every choice. Editorial decisions include timing, relationships, and judgment outside the brief. The purpose of calibration is to make disagreements intelligible. A useful ranker can be overruled cleanly.

## Keep rejected cards long enough to prevent repeated rediscovery

A rejection log stores candidate fingerprint, reader, promise, date, failed criterion, evidence links, and reconsideration trigger. It prevents the workflow from proposing the same attractive but unsuitable idea every Monday under a new title.

Different reasons have different lifetimes. Wrong audience may remain rejected until the publication brief changes. Missing evidence may be parked until a named source appears. Duplicate coverage may reopen after a material factual update. Excess effort may reopen when capacity changes.

Set reconsideration triggers narrowly. "Try again later" guarantees rediscovery. "Reopen when the named primary report publishes" or "reopen when the audience brief includes security leads" can be checked. If the trigger fires, the card returns to the candidate pool and must pass the current rubric rather than inheriting its old score.

The log must not become an immortal graveyard that blocks genuinely new angles. Compare reader, decision, and evidence, then let a human reopen a card with a stated difference. The [Evergreen Content Flywheel bot](/bots/evergreen-content-flywheel) may identify refresh opportunities, but it should not automatically convert parked ideas into scheduled work.

## Make the handoff packet smaller than the idea research archive

When Arun selects a card, the production handoff contains the accepted question, reader, promised outcome, source packet, why-now evidence, differentiation note, format, exclusions, and unresolved risks. It does not carry every rejected candidate or the bot's hidden draft-like prose.

The archive retains scoring details for audit and calibration. The handoff gives the writer a clean starting point without turning a ranking explanation into an outline. A writer may challenge the evidence path before drafting. If the cited source disappeared or no longer supports the card, selection returns to parked.

This explicit handoff is the one allowed state change after ideation, and a human initiates it. The workflow still does not create a calendar item or production document by itself.

Arun verifies the source packet one final time at handoff because a strong card may sit parked for weeks. He records checked date and any changed source status. If the why-now window expired, he can keep the core idea while rewriting or removing urgency. Selection is not permission to repeat stale evidence.

## Stop this method before the calendar and publishing system

This workflow stops when the ranked evidence cards reach Arun. It does not select for him, reserve a date, assign a writer, draft content, generate artwork, upload files, or publish. A separate approved handoff begins only after he chooses a card.

It also does not promise traffic or performance from a demand signal. The source proves an observation within a date window, not a future outcome. If a selected piece later makes product claims, verify them against current primary sources rather than copying the idea card.

For inherited account access, read [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits). For routine limits and setup mechanics, read [Learn Grok Bot](/blog/learn-grok-bot) rather than expanding this editorial procedure into product background.

Keep reading: [Content Strategy for a Bot Portfolio](/blog/bots-for-marketers) provides broader role context, while this page stays on the shortlist gate.

## Frequently Asked Questions

### How many grok bot content ideas should a weekly run return?

Return only the cards that pass the brief, evidence, novelty, format, and effort checks. The referenced bot setup asks for 8 to 12 ideas, but that range is a workflow choice rather than a product limit or a quota. A four-card shortlist or a documented quiet week is valid. Forcing twelve teaches the system to pad weak topics, invent urgency, and rescue poor audience fit with a high score elsewhere. Track rejected candidates and reasons so short output remains auditable.

### Should search demand outrank audience fit?

No. Treat audience fit as a threshold before demand contributes to ranking. A popular query aimed at the wrong reader can attract attention while failing the publication's purpose. Define a rubric that names the reader, moment, and decision. Then attach exact query wording, source, observation date, and date window as supporting evidence. The workflow may preserve an off-audience topic in the rejected log, but it should not average demand and fit in a way that promotes a zero-fit candidate.

### Can the idea bot write an outline for the top-ranked card?

Not inside this workflow. Its boundary ends at ranked evidence cards and forbids outlines, hooks, scripts, drafts, calendar writes, uploads, scheduling, and publication. That separation lets the editor reject a candidate without sunk production cost. After a human selects one, start a distinct brief with its own sources, format, boundary, and review path. If you want a small feasibility test before selection, authorize a source packet or argument map explicitly rather than silently expanding every ideation run into drafting.

### What belongs in a content idea evidence card?

Include the working question, exact audience, decision or change promised, format, accessible evidence path, dated why-now signal, overlap with existing coverage, declared effort class, score breakdown, rejection risks, and source links. Separate observations from forecasts. A rising query proves an observed trend within its date window, not future traffic. A strong past article supports an adjacent test, not guaranteed repetition. The card should give an editor enough information to reject or select the idea without reading a hidden draft.
`,
};
