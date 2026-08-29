import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Index Your Demos by Objection So You Can Find the Ninety Seconds',
  description:
    'Learn to find the clip that answers the objection by indexing demo claims, timestamps, audience fit, and expiry so reps retrieve proof they can trust.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Index Your Demos by Objection So You Can Find the Ninety Seconds

Arun knows the answer exists somewhere in 46 recorded demos. A prospect has asked how an exception reaches a human, and the next call begins in 17 minutes. Search finds twelve transcripts containing “approval,” but four discuss a retired interface, three are internal rehearsals, and one shows a customer name. The library contains proof without a retrieval system.

To find the clip that answers the objection, index what the segment proves, who may see it, which product state it shows, when it expires, and where the exact 90 seconds begin and end. Do not start by cutting every recording into generic highlights. Start with the questions sales repeatedly needs to answer.

This tutorial is runtime-neutral. If you implement it with Grok Bot, the one shared-state sentence belongs with [screens are not boundaries](/blog/screens-are-not-boundaries), not inside every clip taxonomy section.

## Collect objection wording before touching the video archive

Arun asks eight reps for the exact buyer wording from recent calls. Eight is his arbitrary discovery group. He normalizes duplicates without erasing nuance. “Can an approver stop this?” differs from “Does a human see every action?” and from “Can we undo it later?” One clip may answer only one.

Store objection ID, verbatim wording, sales stage, audience role, claimed consequence, and frequency window. Do not store personal buyer data unless policy requires it. A paraphrase should remain linked to the original approved note so reviewers can detect when normalization changed meaning.

| Objection ID | Buyer wording | Hidden distinction | Desired proof |
|---|---|---|---|
| O-14 | Where does a human step in? | Review placement | Visible proposal and stop |
| O-15 | Can we undo it after approval? | Reversibility | Honest limit, not same clip |
| O-21 | Does setup require code? | Setup path | Start-to-finish configuration |
| O-27 | What happens when data is missing? | Failure behavior | Explicit incomplete result |

The IDs and wording are synthetic. Their purpose is to make retrieval answer-shaped rather than keyword-shaped.

## Register every recording before segmenting it

Create a recording registry with source ID, title, recorded date, product version, presenter, audience, consent state, permitted use, transcript status, and review owner. A file without known use rights stays out of the searchable sales library even if its content is excellent.

Recordings from customer calls, internal rehearsals, public webinars, support sessions, and product tests belong to different permission classes. Do not let a transcript parser flatten those differences. [Demo Clip Library](/bots/demo-clip-library), [Podcast Clip Desk](/bots/podcast-clip-desk), [YouTube Transcript Desk](/bots/youtube-transcript-desk), and [Call Coach](/bots/call-coach) are adjacent catalog patterns with different inputs and audiences.

The registry is the parent object. Every clip inherits its recording's consent and use limits and may add stricter limits. It can never broaden them.

## Define a clip as one proof with a clean start and stop

A useful clip begins before the presenter establishes the relevant state and ends after the outcome is visible. It excludes unrelated navigation, private data, jokes, and claims that need a second clip to make sense. Arun targets 60 to 120 seconds and calls the midpoint 90 seconds. That range is his editorial choice, not a platform limit.

Each clip row records recording ID, start time, end time, objection IDs, proof statement, prerequisites visible, outcome visible, spoken qualifiers, interface version, audience, external-use status, and expiry date.

| Clip field | Good value | Bad value | Why |
|---|---|---|---|
| Proof | Shows proposal stopping for review | Approvals demo | Searchable and testable |
| Start | State visible before action | Starts mid-sentence | Reviewer sees context |
| End | Result and limitation included | Cuts before warning | Prevents overclaim |
| Audience | External, security evaluator | Anyone | Preserves use scope |

The segment metadata matters as much as the media because retrieval decisions happen before playback.

## Tag the objection and the claim separately

The objection describes what the buyer fears or doubts. The claim describes what the clip actually demonstrates. A buyer may ask about safety while the clip proves only a UI sequence. Do not label it “safe” unless an approved source supports that broader claim.

For O-14, Arun's candidate clip shows a proposed action appearing for human review and the operator declining it. The claim is narrow: “This recorded flow shows a proposal presented and declined in the captured version.” It does not prove every action always pauses, that completed work is reversed, or that an administrator configured policy.

[What an approval actually governs](/blog/what-an-approval-actually-governs) supplies the conceptual distinction the index must preserve. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) prevents a spoken charter from being mislabeled as technical enforcement.

## Write a charter that indexes without publishing clips

The indexer reads approved recordings and writes metadata plus cut instructions. It does not publish, upload, share, email, or edit the source archive. Arun's media owner performs the cut and external review in an approved tool.

\`\`\`markdown
# Objection clip index charter

Operator: Arun
Inputs: recording-registry.csv, objection-taxonomy.csv, approved transcripts

Produce:
- candidate-clips.csv with exact start and end timestamps
- claim-review.md with what each segment proves and does not prove
- redaction-requests.md
- expired-and-rejected.csv

Boundary:
Never publish, upload, share, email, present, or change access to a recording or clip.
Never broaden consent or external-use status inherited from the source recording.
If identity, consent, product version, or claim support is unclear, mark REJECTED and stop for Arun.
\`\`\`

The allowed substitute is a cut list. That keeps creative preparation useful while rights and representation remain human-owned. [How to write a boundary line](/blog/how-to-write-a-boundary-line) explains this pattern.

## Walk O-14 from twelve matches to one trustworthy segment

Transcript search returns twelve “approval” matches. Arun's filter removes three internal-only rehearsals, two recordings with unknown consent, two clips from a retired interface, and one customer-data exposure. Four candidates remain.

Candidate A begins after the proposal appears. Candidate B cuts before the human declines. Candidate C includes the complete state transition but the presenter says “this undoes the action,” which the visible flow does not establish. Candidate D shows the proposal, exact object, decline, unchanged destination, and a spoken limit that completed work is separate.

The index chooses D at 12:18 to 13:47, an 89-second segment. Arun verifies the timestamps, rights, interface version, and claim wording. The editor cuts it, redacts a synthetic account ID, and a product owner approves external use. Search now returns one reviewed proof instead of twelve keyword hits.

## Trace the wrong approval clip to a truncated ending

In the failed library, a 64-second cut ended immediately after the operator clicked approve. The next 14 seconds showed that an earlier file change remained even though a later proposal was declined. Cutting the ending made the segment appear to prove reversibility.

The root cause was highlight optimization: the cutter ended on the satisfying click rather than the complete claim. Repair the schema with required setup, action, outcome, and limitation timestamps. A segment cannot be approved until all four are present or the limitation is explicitly stated in accompanying copy.

| Failure | Cause | Repair | Fixture |
|---|---|---|---|
| Clip implies undo | Limitation cut off | Require limitation timestamp | Extra 14-second tail |
| Private name visible | Visual review omitted | Frame-by-frame redaction pass | Synthetic name overlay |
| Old UI served | Version not indexed | Expiry and interface state | Retired navigation recording |
| Search returns weak match | Keyword outranked proof | Rank reviewed objection links first | Twelve-match O-14 set |

The failure becomes a regression package containing source transcript, timestamps, expected rejection, and approved replacement.

## Rank by trust before semantic similarity

Semantic similarity helps recall, but it should not outrank consent, external-use status, current product state, complete proof, and human review. Arun applies hard filters first, then ranks remaining segments by objection match, audience fit, proof completeness, freshness, and brevity.

| Ranking layer | Behavior | Can similarity override it? | Example |
|---|---|---|---|
| Rights | Exclude prohibited use | No | Customer call stays internal |
| Safety | Exclude unredacted identity | No | Visible email blocks clip |
| Currency | Exclude retired state | No | Old UI does not rank |
| Proof | Require complete claim | No | Truncated outcome rejected |
| Relevance | Rank objection and audience | Yes, among eligible clips | Security role above generic demo |

This order means the “best textual match” can disappear. That is a feature. Retrieval should maximize trustworthy usefulness, not cosine similarity alone.

## Preserve spoken qualifiers in the clip card

Presenters use phrases such as “in this example,” “for this configuration,” “as recorded,” and “the earlier work remains.” Those qualifiers carry claim scope. Transcripts and summaries often delete them as filler.

Store the exact qualifying sentence and require external copy to preserve its meaning. If a rep wants a shorter caption, the caption must remain no broader than the clip. Arun rejects “Every action requires approval” when the segment demonstrates one configured action.

[Claim Provenance Tracker](/bots/claim-provenance-tracker) can connect the clip-card assertion to product documentation, and [Citation Checker](/bots/citation-checker) can flag a caption that lacks support. Media evidence and documentary evidence should reinforce rather than replace each other.

## Answer the rep who wants the fastest plausible clip

The strongest objection is time. Arun had 17 minutes, and a rights plus evidence review can take longer than watching the entire demo. A rough clip now may help more than a perfect clip tomorrow.

The objection wins for internal recollection where the rep alone watches the source, understands its age, and does not present it as current proof. It loses for external sharing. A stale or overbroad clip can create a product promise that takes far longer to correct.

Build the reviewed library before the urgent call. During an emergency, return no approved clip and a concise internal answer rather than silently lowering rights or claim standards.

## Design search results for a ten-second decision

Each result card shows objection wording, 20-word proof statement, duration, recorded date, product state, audience, external-use status, expiry, owner, and “does not prove” note. The preview image must be reviewed and free of private data.

Arun can filter by external candidate, current interface, security audience, and under two minutes. Results sort reviewed current clips first. Expired segments appear only in an archival view, never mixed with ready-to-share proof.

Do not auto-play audio in a customer meeting. The rep opens the card, reads the claim boundary, and chooses whether the clip fits this buyer's question.

## Expire clips when evidence or interface changes

A clip needs an expiry trigger, not merely a date. Triggers include changed navigation, altered availability, renamed product, modified approval flow, withdrawn customer consent, superseded claim source, or new redaction policy.

Run a weekly comparison between clip metadata and approved change sources. Weekly is Arun's operating cadence, not a Grok Bot routine claim. The comparison proposes affected clips and reasons. A human owner marks current, needs review, or expired.

Do not delete expired source media automatically. Retention and rights owners decide archival handling. Remove expired clips from ready-to-share search while preserving the audit trail your policy requires.

## Verify retrieval with planted objections and bad candidates

Create ten synthetic queries containing exact wording, paraphrase, wrong audience, retired UI request, unsupported guarantee, and reversibility confusion. Plant one highly similar but prohibited clip in each relevant result set. The system should exclude it before ranking.

Measure top-three reviewed relevance, rights-filter recall, current-state precision, proof-completeness rate, and reviewer correction. Also record zero publication or sharing mutations from the indexing run.

| Test | Expected result | Failure signal | Repair owner |
|---|---|---|---|
| Exact O-14 wording | D in top three | Truncated B ranks | Taxonomy owner |
| “Can we undo it?” | Separate limit answer | O-14 clip overclaims | Claim reviewer |
| Retired UI | No external result | Old clip served | Product owner |
| Unknown consent | Excluded | Clip searchable externally | Rights owner |

Search quality is not one relevance number. A trustworthy zero-result state beats an attractive prohibited result.

### Resolve one clip that appears to answer two objections

Candidate D is tagged to O-14, where a human steps in, and O-15, whether approval undoes work. That second tag is tempting because the presenter mentions earlier changes. Yet the clip only states that completed work is separate; it does not demonstrate a reversal attempt or recovery behavior.

Use primary and secondary objection links. A primary link means the visible segment directly proves the answer. A secondary link means the segment supplies context but needs another artifact. Search can show secondary results under “related context,” never under “answers this objection.”

Arun removes O-15 as a primary tag and links a short written explanation reviewed by the product owner. The result page now says no approved demonstration exists for undo, followed by the current factual limitation. That honest gap prevents a visually convincing clip from acquiring a claim it never proved.

Create multi-objection fixtures where the same noun masks different consequences: approve versus reverse, export versus synchronize, invite versus share, and draft versus send. Reviewers should state the observed state transition in one sentence. If it does not answer the buyer's exact verb, the tag stays secondary.

### Build a review queue that respects rights owners' time

Not every candidate deserves frame-level review. Apply cheap deterministic checks first: parent registry exists, external use permitted, transcript available, product state current, duration within declared review band, and no obvious identity token. Then rank candidates for human claim and visual review.

Arun's queue card contains objection frequency, expected sales moment, candidate count, rights state, automated redaction flags, proposed proof statement, and source duration. A reviewer can reject the entire candidate before watching when consent or currency fails. This keeps expert attention on clips that could actually ship.

Use two independent human decisions for high-consequence external proof if your organization chooses that policy: a rights owner confirms permitted use and a claim owner confirms what the segment proves. Two is not a product requirement. It prevents one reviewer from being forced to interpret both consent and product behavior outside their role.

Track queue age and rejection reasons. A long queue caused by unknown consent should trigger registry repair, not faster clip cutting. A queue dominated by obsolete UI should trigger new demo recording. Operational metrics should point to the missing source, not merely pressure reviewers.

## Stop before editing, sharing, and live presentation

### Capture the reviewer's playback notes at exact timestamps

Arun's reviewer watches Candidate D at normal speed, then again without transcript. The review form captures timestamp, observed screen state, spoken claim, qualifier, private-data risk, and decision. General comments such as “looks good” cannot support later expiry or correction.

At 12:44 the pointer covers the object name. At 13:02 the presenter says “for this configured action.” At 13:31 the unchanged destination becomes visible. These observations make the proof boundary reconstructable. If a later crop removes 13:31, the cut validator knows the outcome disappeared.

Require the editor to return a cut fingerprint and final duration. Compare it with the reviewed start, end, audio, crop, captions, and redactions. Even a one-second trim can remove a qualifier. A caption correction can broaden a claim. The published candidate must undergo the same review checks as the source segment.

Keep reviewer identity and date according to policy, but do not invent perpetual approval. A current clip can expire tomorrow when product state or consent changes. The playback notes show what was approved under which conditions, not a guarantee that the media remains current forever.

### Handle a zero-result search without improvising proof

A buyer asks whether the workflow supports a rare recovery path. The index finds two internal mentions, one obsolete demonstration, and no externally approved complete proof. The result page should say “No approved current clip” and show the precise filters that removed candidates.

Offer the rep a next step: reviewed written answer, product-owner question, or a request to record a synthetic demonstration. Do not relax consent, remove the current-state filter, or splice fragments from different versions. Absence is a library backlog signal, not permission to manufacture evidence.

Create a gap record with objection wording, audience, stage, requested date, rejected candidates, missing proof state, and owner. Aggregate gaps to plan recordings. High-frequency gaps deserve source creation; one-off gaps may remain written answers.

This behavior makes the index trustworthy. Arun learns that a result card means approved current proof, while a zero result means the library cannot support the claim yet. Search does not become a confidence theater that always returns something.

Arun reviews queries that returned a clip but led the rep to choose nothing. The cause can be slow start, unclear caption, wrong audience, sensitive context, or an objection taxonomy mismatch. He does not assume non-use means the rep ignored enablement. The rep may have learned that the buyer asked a different question.

For each non-use note, preserve query, top results, filter state, chosen outcome, and optional reason. Strip customer identity unless policy requires it. Aggregate by reason monthly. If slow start dominates, record new cut candidates. If wrong audience dominates, repair tags. If trust concerns dominate, improve the proof statement and review notes rather than gaming rank.

Run blind retrieval sessions with three colleagues who did not build the taxonomy. Give them invented objection cards and ten seconds to choose a result. Ask them to state what the clip proves before playback, then after playback. A gap between those statements reveals misleading metadata even when ranking is technically correct.

The blind session also tests language. Internal terms such as “gate” or “handoff” may not match buyer wording. Add synonyms only after a reviewer confirms they preserve consequence. Semantic recall should broaden phrasing, never broaden the claim.

This workflow inventories and retrieves candidate segments. It does not cut source media, generate captions for publication, upload to a video host, change access, email a rep, embed a clip in a deck, or play it in a meeting. Those actions need their own owners and checks.

Use [the deck patch workflow](/blog/deck-updater-never-presents) for reviewed slide inclusion and [the enablement pack workflow](/blog/enablement-pack-never-emails-the-rep) for rep handoff. Use [what a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) for untrusted transcript text.

Keep reading: [what an approval actually governs](/blog/what-an-approval-actually-governs), [how to write a boundary line](/blog/how-to-write-a-boundary-line), and [learn Grok Bot](/blog/learn-grok-bot).

## Frequently Asked Questions

### How do I find the clip that answers the objection instead of a keyword match?

Start with an objection taxonomy containing exact buyer wording, stage, audience, and desired proof. Index every segment by what it demonstrates, not merely transcript terms. Apply hard filters for consent, permitted use, redaction, current product state, and complete proof before ranking semantic similarity. Show a short “does not prove” note beside each result. In Arun's worked example, twelve approval matches became one reviewed 89-second segment because the other clips failed rights, currency, privacy, context, or claim-completeness checks.

### What metadata belongs on a demo clip record?

Record the parent recording ID, exact start and end, objection IDs, narrow proof statement, visible prerequisites and outcome, spoken qualifiers, interface version, audience, consent inheritance, permitted use, review owner, approval state, expiry date, and expiry triggers. Add a redaction status and a “does not prove” field. The parent recording's rights are the ceiling: a clip may become more restricted but never broader. Metadata should let a rep judge fit and trust in ten seconds before pressing play.

### How long should an objection-answering clip be?

There is no universal length. Arun targets 60 to 120 seconds because that range can include setup, action, outcome, and limitation while remaining call-friendly. The ideal segment starts before the relevant state is established and ends after the consequence and qualification are visible. Never cut at the satisfying click if the next sentence changes the claim. A complete 110-second clip is better than a misleading 45-second highlight, and no approved clip is better than a prohibited or obsolete one.

### Can the indexer publish or send the selected clip automatically?

Not in this design. The indexer produces timestamps, claim review, redaction requests, and ranked metadata. A media owner verifies rights, performs the cut, reviews every frame, and controls publication. The rep decides whether a reviewed clip fits the buyer's actual question. After an indexing run, source files, host uploads, access settings, emails, decks, and meeting state should remain unchanged. Keeping retrieval separate from distribution makes rights failures and claim corrections visible before external sharing.
`,
};
