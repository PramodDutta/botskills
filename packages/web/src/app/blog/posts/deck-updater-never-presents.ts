import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Patch a Sales Deck From a Changelog, Never Present It',
  description:
    'Use grok bot update sales deck workflow to turn a verified changelog into reviewable slide patches, with citation checks and a human-owned presentation.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Patch a Sales Deck From a Changelog, Never Present It

Maya joins a renewal call with slide 14 claiming an integration is “coming this quarter.” The feature actually shipped two releases ago, the product name changed last month, and the screenshot still shows the old navigation. Her deck updater had been told to keep the presentation current, so it rewrote the sentence but never showed which source justified the change. Maya discovers the mismatch while sharing her screen.

A grok bot update sales deck workflow should produce a patch set, not an autonomous presentation. It reads an approved changelog and a frozen deck export, maps each verified change to affected slides, drafts replacement text and screenshot requests, and stops for the deck owner. It never presents, starts screen sharing, joins a meeting, publishes the deck, changes link access, or claims a release without evidence.

This is a source-to-slide tutorial. For the separate fact that bots on one account share one computer, use [screens are not boundaries](/blog/screens-are-not-boundaries) rather than inserting account architecture into every deck review.

## Freeze the deck version Maya will patch

Do not point the workflow at “latest deck” and hope everyone means the same file. Maya exports deck SALES-CORE-v42 to an approved working folder and records its source URL, owner, export time, slide count, and checksum. The checksum is a workflow technique, not a product feature. It tells the reviewer whether the source changed after the patch began.

If a rep edits the live deck during processing, the patch remains attached to v42. Maya can rebase accepted changes onto v43 later. That is safer than silently mixing a new customer logo, an old screenshot, and a replacement claim into one untraceable artifact.

| Frozen input | Required value | Why it matters | Stop condition |
|---|---|---|---|
| Deck ID | SALES-CORE-v42 | Names review target | ID missing or duplicated |
| Owner | Maya | Names publication authority | Owner unknown |
| Export time | 2026-08-29 09:00 | Orders later edits | Time absent |
| Slide inventory | 32 slides | Detects dropped or inserted slides | Count mismatch |

The numbers belong to Maya's invented case. Your file format and review owner can differ, but a patch needs a fixed base.

## Convert the changelog into evidence rows

A changelog entry is not automatically sales-ready. Parse each approved entry into release ID, published date, product area, change type, exact claim, source URL, evidence owner, and customer availability. Leave availability unknown if the source does not say. Do not turn “improved export flow” into “exports are twice as fast.”

Maya accepts only changelog sources the product owner has allowlisted. Social posts, meeting recollections, support replies, and competitor pages can suggest an investigation but cannot support a deck claim. Every draft sentence must point to at least one approved evidence row.

| Change ID | Source says | Safe slide implication | Unsupported leap |
|---|---|---|---|
| R-812 | New navigation is generally available | Update navigation name | All users prefer it |
| R-819 | Connector added for named plan | Add scoped compatibility note | Works on every plan |
| R-826 | Export error corrected | Remove old known-issue note | Exports never fail |
| R-831 | Beta opened to named cohort | Label beta and cohort | Feature shipped to everyone |

The release IDs and claims are synthetic. The discipline is real: preserve qualifiers that limit who, when, and where.

## Build a slide-to-claim inventory before editing prose

Slide numbers alone are fragile because insertions move them. Give every slide a stable local key such as problem, workflow, integrations, security, proof, and next-step, then list each factual claim and visual dependency. Maya's inventory records slide key, current text, claim type, last verified source, screenshot asset, and owner.

This inventory exposes repeated claims. “Generally available” may appear in the overview, architecture, appendix, and speaker notes. Updating only the most visible slide leaves contradictions for the presenter. Search the entire export, including alt text and notes if your approved format contains them.

[Brand Deck Keeper](/bots/brand-deck-keeper), [Deck Updater](/bots/deck-updater), [Deck Localizer](/bots/deck-localizer), and [Live Discovery Slide](/bots/live-discovery-slide) illustrate adjacent deck jobs. Keep their outputs separate so a translation change does not masquerade as product evidence.

## Classify each proposed change by consequence

Not every difference deserves an automatic patch. Classify changes as factual correction, naming update, screenshot refresh, layout repair, customer proof change, pricing change, legal claim, or deletion. The classification determines who reviews it.

| Change class | Example | Draft allowed | Required owner |
|---|---|---|---|
| Factual correction | Beta becomes generally available | Yes, with source | Product marketing |
| Naming update | Menu label changed | Yes | Deck owner |
| Screenshot refresh | Navigation moved | Request and placeholder | Product owner |
| Customer proof | Logo or quotation | No invention or reuse | Customer marketing |
| Pricing or legal | Plan, term, compliance claim | Flag only unless approved source | Finance or legal owner |

Maya's bot may draft the first two and prepare a screenshot shot list. It must not fabricate a testimonial, relicense a logo, or infer a legal statement from a release note.

## Write a patch charter that preserves the original

The bot writes into a new patch folder. It never overwrites the source deck. Each patch names a slide key, old text, proposed text, evidence row, confidence reason, reviewer, and status. Screenshot work becomes a request with crop instructions, not a captured authenticated screen unless the approved workflow explicitly provides the asset.

\`\`\`markdown
# Sales deck patch charter

Operator: Maya
Base: SALES-CORE-v42, read only
Evidence: approved-changelog.csv and approved-assets/

Produce:
- slide-claim-inventory.csv
- proposed-patches.csv
- screenshot-shot-list.md
- review-deck-copy.md

Boundary:
Never overwrite, publish, share, present, or change access to a deck.
Never join a meeting, start screen sharing, or speak as Maya.
Never add a product, pricing, legal, availability, or customer claim without an approved source row.
If evidence conflicts or the base version changes, write rebase-required.md and stop.
\`\`\`

The charter separates document preparation from external performance. [How to write a boundary line](/blog/how-to-write-a-boundary-line) explains the trigger, forbidden action, substitute, and stop pattern.

## Walk release R-812 into four coordinated patches

R-812 states that the new navigation is generally available and names two labels that changed. The slide inventory finds the old label on overview slide key workflow, integration setup slide key connect, screenshot asset NAV-09, and speaker notes under demo-transition.

The bot drafts two text replacements preserving the release wording. It marks NAV-09 stale and creates a shot request specifying window size, route, state, and redaction requirements. It drafts a note replacement but labels it speaker-notes-only. Four rows share evidence ID R-812, so Maya can accept or reject them as one claim family.

Maya checks the live product in an approved test account, supplies a reviewed screenshot, and accepts three patches. She rejects the overview replacement because the shorter old phrase fits the slide and remains accurate. Human rejection is not bot failure. The system worked because it exposed the choice before presentation.

## Trace the stale slide 14 failure to a missing qualifier

The earlier updater matched the phrase “new integration” and replaced “coming this quarter” with “available now.” The changelog actually said “available in beta to the design partner cohort.” A text similarity step dropped the availability qualifier. The same job also missed a contradictory sentence in speaker notes.

Repair the extraction schema so availability and audience are required fields. A claim cannot render as generally available unless the evidence row explicitly supports it. Add a whole-deck contradiction search after drafting. Finally, fail the job if an evidence row and proposed sentence differ on beta, region, plan, or cohort.

| Failure symptom | Cause | Repair | Retest fixture |
|---|---|---|---|
| Beta shown as shipped | Qualifier dropped | Required availability field | Beta cohort entry |
| Notes contradict slide | Notes excluded | Inventory notes and alt text | Hidden old phrase |
| Screenshot shows private data | Shot request lacked state | Redaction checklist | Synthetic customer row |
| Live deck changed | Base not frozen | Checksum and rebase stop | Edit source mid-run |

The walked failure becomes four reusable fixtures. Do not merely correct slide 14 and discard the evidence.

## Keep screenshots as requested evidence, not decoration

A screenshot can prove the wrong thing beautifully. Require a shot list with claim ID, exact route, expected UI state, viewport, theme, account type, data fixture, redactions, crop, and reviewer. Do not let the updater browse until it finds a pleasing state and call that representative.

Maya uses synthetic account ACME-DEMO-04 with three invented projects. The screenshot reviewer checks that no real customer name, email, token, notification, browser bookmark, or unrelated tab appears. Those checks are arbitrary workflow choices based on the consequence, not Grok Bot product guarantees.

If the approved source provides no reproducible visual state, use a clearly labeled diagram or leave the old visual marked for manual review. Never composite a UI state that the product cannot show.

## Preserve the presenter's own narrative choices

A correct patch can still make Maya's talk worse. Her transition, audience knowledge, customer context, and timing determine whether a detail belongs on the slide or in notes. The bot may flag a mismatch and suggest concise copy. Maya decides the story.

Never let the workflow start presentation mode, share the deck link with attendees, join the calendar event, advance slides, answer questions, or record the call. Those actions create external consequences and mix preparation with representation. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains why the written stop should be paired with capabilities that cannot present or publish.

The boundary also protects discovery. A prospect question during a call may reveal information the approved changelog never covered. Maya can promise a follow-up, but the updater cannot improvise a product commitment from the stage.

## Answer the manager who wants a fully automatic deck

The strongest objection is that product facts change too quickly for human review. If every patch waits for Maya, the deck may still be stale on Monday. A fully automatic deck seems more current.

The objection wins for internal, low-consequence dashboards whose content is generated directly from a governed source and whose audience accepts transient errors. A sales deck presented to buyers is different. Availability qualifiers, customer proof, legal language, pricing, and screenshots carry context a changelog does not encode.

Automate detection daily and batch review around the meeting calendar. The bot can make the review ten minutes instead of an hour. It should not erase the owner who decides what the company tells a customer.

## Stage patches through a plain review ledger

Maya's proposed-patches.csv uses explicit states: PROPOSED, NEEDS SOURCE, NEEDS ASSET, ACCEPTED BY MAYA, REJECTED BY MAYA, and APPLIED BY MAYA. The bot may write only the first three. It never fills human identity or applied state.

The ledger records old and new text verbatim, but template literals in this module avoid raw code backticks. In the actual CSV, protect multiline content according to the chosen format. Attach a review comment rather than silently replacing a second occurrence when the same phrase appears on several slides.

After Maya applies patches in her presentation tool, she exports v43 and runs a comparison. The comparison confirms accepted replacements, detects accidental layout changes, and ensures rejected rows stayed unchanged.

## Verify the update with claim and visual checks

Run five checks on the candidate export: every changed factual sentence has an approved evidence ID; every qualifier matches; every stale claim occurrence is resolved or explicitly waived; every screenshot passes redaction review; and no sharing or presentation state changed.

| Verification | Green result | Red result | Response |
|---|---|---|---|
| Evidence coverage | All changed claims cite rows | Orphan claim | Revert patch |
| Qualifier parity | Audience and availability preserved | Scope broadened | Rewrite from source |
| Contradiction scan | No unresolved old claim | Notes disagree | Add coordinated patch |
| External state | No publish or present action | Link or meeting changed | Contain and investigate |

One red check blocks the release candidate. It does not require discarding all good proposals. Maya can accept unaffected rows after the cause is isolated.

## Measure maintenance by defects caught before calls

Do not measure success by slides edited. Measure stale claims detected, unsupported changes rejected, coordinated occurrences found, screenshot defects caught, reviewer correction rate, and minutes from changelog publication to reviewed patch. Keep presentation incidents as a separate outcome measure.

A low edit count can be healthy when the changelog does not affect the deck. A high edit count can indicate unstable claim wording. Review the reason distribution monthly. If most patches are repeated naming changes, store product names as managed tokens in the deck source. If most failures are availability qualifiers, improve the evidence schema.

[Demo Clip Library](/bots/demo-clip-library) may provide an approved proof segment, and [Source Verifier](/bots/source-verifier) can challenge a claim citation. Neither gets permission to present merely because its artifact enters the deck.

### Rebase accepted patches when the sales team edits the source

While Maya reviews v42, Jonah adds a new customer agenda slide and changes the integration slide layout in the live deck. The next export is v43 before Maya has applied any product patches. Copying cell coordinates from v42 into v43 could put a correct sentence under the wrong screenshot.

The rebase process matches stable slide keys, then checks current text, neighboring headings, asset references, and layout fingerprint. If the old text no longer matches, mark the patch CONFLICT instead of forcing it. If a slide key disappeared, ask whether the claim moved or the slide was intentionally removed. Never recreate a deleted slide solely because a pending patch mentioned it.

Maya accepts three clean rebases and resolves one conflict manually. She records the new base version on every patch row. The change ledger now distinguishes product-source changes from sales-team edits. That matters when a later reviewer asks why one approved sentence never appeared: the slide was retired during rebase, not silently dropped by the updater.

Create a fixture with two slides sharing the same visible title but different stable keys. Move one, delete the other, and edit its body. A safe rebase must refuse title-only matching. The failure signal is a patch landing on the wrong object while all words remain grammatically correct.

### Prepare speaker notes as a separate review surface

Speaker notes often contain the claims a presenter actually says, including competitive comparisons, caveats, setup steps, and promises to follow up. They need the same evidence mapping as visible slide text, but they serve a different purpose. A concise slide can be accurate while its notes remain stale.

Maya's note patch includes cue, proposed spoken sentence, evidence ID, prohibited expansion, and transition to the next slide. It never writes first-person promises such as “I will send this tomorrow” unless Maya supplied and approved them for that meeting. It never inserts a customer name into the core deck.

Review notes aloud. A sentence that looks qualified on screen may sound absolute when spoken quickly. Require the reviewer to paraphrase what the buyer could reasonably hear. If the paraphrase broadens beta into availability or a sample result into a guarantee, rewrite the note.

The final pre-call check exports visible slides and notes together, searches both for superseded names, and prints unresolved patch IDs. Maya owns the presentation copy she chooses to deliver. The updater's role ends at an evidence-backed proposal whose visible and spoken surfaces agree.

## Stop this workflow before localization and live discovery

### Run the final five-minute preflight from the presenter's device

Maya opens the exact candidate deck on the device and connection she will use. She checks fonts, embedded media, speaker notes, presenter view, offline behavior, link destinations, and the first and last slide. This preflight is human-run because the environment of presentation can differ from the patch folder.

She then searches for every changed product name and opens the evidence ledger beside the slide. The goal is not another full editorial review. It is confirmation that the candidate she sees is the reviewed version and that accepted patches survived export. A file named final can still be the wrong object.

Maya rehearses the transition around slide 14 and says the qualifier aloud. She checks that the screenshot contains only the synthetic fixture and that its caption matches the current UI state. She verifies that no pending comments or internal notes are visible to the audience.

If any check fails, Maya uses the last reviewed deck or adjusts the meeting plan. The updater does not push an emergency patch into the live file. A five-minute preflight preserves a human recovery option and proves the workflow ends before the room, screen share, and spoken promise.

After the call, Maya records only deck-specific defects: stale phrase noticed, missing proof, broken media, note that sounded too broad, or buyer question the deck could not answer. She does not let the updater infer sentiment from the recording or rewrite slides from an unreviewed transcript. Each defect points to a slide key and, when factual, an evidence gap.

Review those rows before the next changelog run. A broken link becomes a deterministic test. A repeated buyer question becomes a candidate slide brief for the deck owner. A promise made during the call goes to the human follow-up process, not straight into the core deck. This post-call loop improves the source and tests without letting live conversation become automatic publication authority.

This tutorial patches one core sales deck from an approved changelog. It does not translate claims, personalize slides for a named prospect, build a live discovery slide, or select demo clips. Route those jobs to separate reviewed workflows so their source rules remain visible.

Use [what an approval actually governs](/blog/what-an-approval-actually-governs) when designing the final apply step, [what a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) for environmental reach, and [learn Grok Bot](/blog/learn-grok-bot) for the product learning sequence.

Keep reading: [why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files), [a boundary is not a permission](/blog/a-boundary-is-not-a-permission), and [how to write a boundary line](/blog/how-to-write-a-boundary-line).

## Frequently Asked Questions

### Can a grok bot update sales deck workflow publish the finished deck?

This design says no. The workflow freezes a source version, maps verified changes, writes a patch ledger, and prepares screenshot requests. Maya reviews and applies accepted rows in her presentation tool, controls sharing, and presents the result. Publishing and presenting are separate external actions that carry audience, timing, access, and representation consequences. Keeping them human-owned also makes the state check clear: after a bot run, the live deck, its permissions, meeting state, and public links must remain unchanged.

### What source should drive an automated sales deck patch?

Use an approved, versioned source whose owner and effective date are known. Parse each change into product area, exact claim, availability, audience, source URL, and evidence owner. Do not promote a social post, meeting memory, support reply, or competitor page into release authority. A changelog can still be incomplete, so missing plan, region, cohort, or availability stays unknown. Every proposed factual sentence should point to an evidence row that supports its full scope, including qualifiers.

### How do I prevent a beta claim from becoming generally available?

Make availability and audience required fields in the evidence schema, then compare them with every proposed sentence. A row labeled beta for a named cohort cannot render as available now, released, or available to all. Add fixtures for beta, phased rollout, region limit, plan limit, and withdrawn release. Search slides, notes, alt text, and repeated claims for contradictions. If the source omits availability, label the patch NEEDS SOURCE and stop rather than choosing the most sales-friendly interpretation.

### What proves the deck updater worked before Maya's call?

The candidate export must show that every changed claim cites approved evidence, qualifiers match, repeated stale claims are resolved or waived, screenshots pass a redaction checklist, and accepted patches alone were applied. Compare the frozen base with the candidate and inspect the live deck's sharing state. A visually polished file is insufficient if notes still contradict a slide or link access changed. Keep the stale-claim and mid-run-base-edit failures as regression fixtures for every later charter or parser revision.
`,
};
