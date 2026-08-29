import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'When an iPhone Shortcut Should Become a Bot Instead',
  description:
    'Decide when to move an iphone shortcut to a bot by testing ambiguity, supervision, desktop ownership, evidence, credentials, and rollback needs.',
  date: '2026-08-29',
  category: 'Migration',
  content: `
# When an iPhone Shortcut Should Become a Bot Instead

Rina had an iPhone Shortcut that collected a dictated meeting note, added a date, and saved a draft. It worked until the note mentioned two customers, an unclear deadline, and a promise that needed a source. She considered replacing the whole Shortcut with a bot because one decision had become ambiguous.

The right migration target was not the phone tap. It was the interpretation between capture and storage. Rina kept the reliable capture step, passed a structured note to a bot for classification and source requests, and kept the final customer-facing action human. This article helps you make that split from observed behavior rather than claims about what every iPhone Shortcut supports.

Grok Bot's verified platform facts matter to the design. It supports iPhone on iOS 18 or later. On iPhone, you can pause and resume, while editing, history, testing, and deleting require desktop. Teach-by-demonstration is unavailable on iPhone. The boundary follows from that operating model: the bot may interpret and draft, but it may not send, publish, pay, delete, change a routine, or commit an external record without a desktop-reviewed procedure and a human decision.

## Capture the Shortcut's actual job before judging its complexity

Run the existing Shortcut with three safe examples and record what enters, what transforms, what leaves, and where a person decides. Do not summarize it as "meeting automation." Rina's path captured dictated text, added a local timestamp, asked for a customer tag, and saved a draft note. The customer tag was the only step that routinely needed interpretation.

Preserve the visible configuration or a written step ledger before editing. Remove personal notes and authentication values from the migration packet. Keep identifiers that let you compare the same test across old and new paths.

| Step | Observed behavior | Deterministic or ambiguous | Migration candidate |
|---|---|---|---|
| Capture note | Accepts Rina's text | Deterministic input | Keep on phone |
| Add date | Uses captured time | Deterministic transform | Keep stable |
| Choose customer | Rina selects or corrects | Sometimes ambiguous | Test bot decision |
| Find promise | Requires context and source | Ambiguous | Test bot extraction |
| Save draft | Writes to known draft location | External effect | Keep human-owned initially |

The ledger prevents a single difficult step from pulling every working phone action into a new runtime.

## Move judgment when inputs vary, not merely because the flow is long

Length is a poor migration signal. Twenty exact transformations can remain legible and reliable. One step that must interpret contradictory text, request missing evidence, and choose an escalation can justify a bot. Ask whether the current path has a finite mapping or an expanding set of cases.

Rina listed ten recent notes. Seven named one customer and date clearly. One named two customers. One promised a follow-up but omitted the owner. One quoted a deadline from an unverified attendee. The last three required a decision with a reason, not another fixed string replacement.

Use [What Did We Promise](/bots/what-did-we-promise) as a pattern for extracting commitments with evidence. Use [Meeting Prep Brief](/bots/meeting-prep-brief) for a separate pre-meeting job. A migration should not merge every meeting task under one bot because the inputs share a calendar event.

Move the smallest judgment block first. Keep capture and final storage stable until the new decision passes fixtures.

## Keep the phone as the capture surface and desktop as the control surface

Grok Bot's iPhone support is a companion experience. Verified documentation says you can pause and resume on iPhone, but editing, history, testing, and deleting need desktop. Design the operating procedure around that split rather than expecting the commute to become a full maintenance window.

Rina could capture a note and observe whether a routine needed pausing from her phone. She scheduled charter edits, run-history review, fixture tests, and deletion decisions for desktop. A failed run during travel was paused, labeled, and left unchanged until she could inspect it properly.

| Activity | Phone role | Desktop role | Boundary |
|---|---|---|---|
| Capture approved input | Initiate or supply note | Review schema | No customer send |
| Pause or resume | Available control | Diagnose before resume | Pause is not recovery |
| Edit bot or routine | Not the phone task | Perform and review | Human only |
| Inspect history | Record incident pointer | Review retained records | Do not guess from notification |
| Test change | Supply fixture if useful | Execute controlled test | No production effect |
| Delete | Not the phone task | Preserve evidence first | Does not clear shared state |

The [Grok Bot iPhone guide](/blog/grok-bot-iphone-app) covers this companion split in detail.

## Do not migrate a reliable tap just to remove the tap

Rina's original flow required her to confirm the customer tag. That tap was valuable because she knew which conversation she had just left. Replacing it with an autonomous guess would reduce friction and increase ambiguity at the same time.

Keep a manual step when the person has fresh context, the choice takes seconds, and an error would contaminate customer records. Move a step when the bot can surface evidence, explain the choice, and escalate ambiguous inputs. The goal is not zero taps. It is fewer opaque decisions.

An iPhone pause also should not be treated as undo. Verified documentation on approvals says an approval controls a proposed action and does not reverse completed work. The [local approval guide](/blog/local-computer-approvals-are-not-undo) shows how to put gates before file and browser effects. On the phone, Rina's pause stopped later work while the recovery procedure handled any completed draft or write.

If the old Shortcut is clear and stable, leave it alone. A bot is justified by judgment and evidence needs, not fashion.

## Turn ten real notes into a fixture set with explicit expected outcomes

Build fixtures from your own use, then sanitize names, emails, and customer facts. Include ordinary notes, ambiguity, missing fields, conflicting dates, an untrusted instruction inside quoted text, and a promise with no source. Ten is Rina's declared sample size, not an iPhone or Grok Bot limit.

For each fixture, define expected customer tag, promise text, owner, due date, source status, escalation reason, and forbidden effects. A result can pass by refusing to choose. "Needs human: two customer names" is better than a polished wrong tag.

[Email Injection Sentinel](/bots/email-injection-sentinel) provides a pattern for ignoring instructions embedded in source material. [Claim Provenance Tracker](/bots/claim-provenance-tracker) provides a pattern for binding a claim to its origin. Rina used both ideas in the fixture rubric while keeping the production note store disconnected.

Fixtures make the migration reviewable on desktop. They also prevent a charming demo from replacing the boring cases that the old tap handled safely.

## Write a bot charter that receives a note and returns a draft decision

The first charter should not access the final note system. Give it structured fixture input and require structured output. Name every external action it cannot take.

\`\`\`yaml
job: meeting-note-classifier
inputs:
  - note_id
  - captured_at
  - dictated_text
  - allowed_customer_names
allowed:
  - identify mentioned customers from allowed_customer_names
  - extract a proposed promise, owner, and due date
  - request missing evidence
  - draft a structured result
required_output:
  - note_id
  - proposed_customer
  - proposed_promise
  - proposed_owner
  - proposed_due_date
  - source_excerpt
  - status
boundary:
  never_without_human:
    - save to a customer system
    - send or publish
    - create a calendar event
    - edit or delete the source note
on_multiple_customers: status_needs_human
on_missing_source: status_needs_human
\`\`\`

The allowed customer list is supplied input, not something the bot discovers through a broad login. That keeps the first migration test free of production credentials.

## Preserve a structured handoff between phone capture and bot judgment

Do not pass an unlabeled paragraph if the capture step already knows the note ID and time. Create a small envelope with version, source, capture time, text, and whether the user marked it ready. The bot returns the same note ID plus its decision fields.

Rina used source_version 1 and charter_version 3. When a result looked wrong, she could locate the exact captured text and instruction revision. She did not rely on the order of notifications or a screenshot from the commute.

| Handoff field | Producer | Consumer | Failure response |
|---|---|---|---|
| note_id | Phone capture | Bot and reviewer | Reject if missing |
| captured_at | Phone capture | Review timeline | Preserve as supplied |
| dictated_text | Rina | Bot | Treat quoted instructions as data |
| allowed_customer_names | Approved roster | Bot | Do not browse for more |
| charter_version | Desktop operator | Review record | Reject unknown version |
| status | Bot | Human reviewer | Only human changes to approved |

This envelope is the audit trail. The phone and bot can change independently while the contract remains visible.

## Map credentials before any live note or customer system is connected

Grok Bot uses one persistent computer per user account, with separate bot screens but shared browser cookies, signed-in sessions, files, and command-line credentials. A bot named "Rina Notes" does not isolate a customer login from sibling bots. Inventory the entire account before connecting sensitive systems.

Hosted MCP sign-in tokens are documented to remain with Cursor's backend rather than on the computer. If a supported hosted path exists for the chosen service, still verify the connected identity and available verbs. Do not infer an integration's architecture from the word connector.

Use [MCP versus connectors](/blog/mcp-vs-connectors) to map token location and [the credential isolation guide](/blog/how-to-isolate-grok-bot-credentials) when different customers cannot share a computer. Rina avoided the question during fixture testing by using copied, invented inputs. For the pilot, the bot returned a draft to quarantine, and she performed the final save herself.

Credential design should follow a proven job, not precede it.

## Compare the old and new paths without letting both create effects

Run the existing capture flow and the bot decision on the same fixtures. Only one path may own the final storage or send. During shadowing, make that owner the existing human-confirmed path. Store the bot's answer in a comparison sheet that no automation watches.

Score exact fields and reasons. A matching customer with an unsupported source is not a pass. A different result can be acceptable when the bot escalates an ambiguity the old flow forced Rina to resolve manually.

Rina tested ten fixtures and fifteen new captured notes. The bot passed nine fixtures initially, failing the quoted-instruction case. Charter revision 3 passed all ten. In the live shadow, it escalated four notes and matched Rina's chosen customer on eleven. No bot result reached the customer note store automatically.

The comparison period ends on declared criteria, not enthusiasm. Rina required all fixtures, no external effects, source excerpts on every promise, and human adjudication of every difference.

## Choose cutover from supervision needs, not from phone convenience

There are three practical outcomes. Keep the Shortcut unchanged. Compose phone capture with bot drafting and human save. Or move the full job to a desktop-operated bot routine while the phone becomes pause and resume only. Choose from error cost and maintenance needs.

| Condition | Keep Shortcut | Compose | Move job to bot routine |
|---|---|---|---|
| Inputs are exact | Strong choice | Optional | Weak reason alone |
| One ambiguous judgment | Manual tap may win | Strong choice | Only if scheduled work helps |
| Needs sources and escalation | Harder to maintain manually | Strong choice | Strong with desktop ownership |
| Requires frequent editing | Existing flow may be easier | Desktop charter review | Desktop required |
| High-cost external effect | Keep human confirmation | Keep human final action | Do not automate effect by default |
| Needs travel-only maintenance | Existing phone flow may fit | Pause on phone, fix at desk | Poor fit |

Rina chose composition. The phone remained excellent at capturing fresh context. The bot became useful at producing a sourced proposal. The human save remained the boundary.

## Diagnose migration trouble from the place context disappears

Most failures occur at a handoff, not inside the final sentence.

| Symptom | Lost context | Verification | Fix |
|---|---|---|---|
| Wrong customer | Allowed roster or multiple-name signal | Replay fixture | Escalate ties |
| Promise lacks evidence | Source excerpt missing | Compare captured text | Require excerpt or reject |
| Duplicate notes | Two effect owners | Trace note_id | Keep one writer |
| Phone pause seems ineffective | Work completed earlier | Review effect time | Move gate earlier and recover |
| Bot opens wrong account | Shared browser session | Check tenant and profile | Stop and reconnect deliberately |
| Change cannot be tested on phone | Maintenance assigned to wrong surface | Review operating map | Move testing to desktop |

Do not fix lost context by granting the bot broad browsing. Add the missing field or preserve the human decision.

## Answer the traveler who wants the entire workflow controllable from iPhone

The desire is understandable. Capture happens while moving, and waiting for a desk feels like friction. Grok Bot's verified mobile controls set a real limit: pause and resume are available on iPhone, while editing, history, testing, and deleting need desktop. Teach-by-demonstration is also unavailable on iPhone.

Design for that limit. Let the phone capture approved input and pause a suspicious run. Queue diagnosis, charter changes, history review, and tests for desktop. Keep consequential work pending until those controls are available. If the job requires frequent mobile editing and immediate repair, migrating it to this bot operating model may be the wrong choice.

The answer is not to pretend pause reverses completed work. It is to keep external effects behind a stage that can wait for the desk.

## Walk Rina from a voice note to a thirty-day composed routine

On day one, Rina recorded the five observed Shortcut steps and sanitized ten notes. On day three, charter revision 1 guessed between two customers. Revision 2 added tie escalation. Revision 3 ignored an instruction quoted inside a meeting note and required a source excerpt for every promise.

For two weeks, the phone captured notes and the bot produced comparison-only drafts. Rina reviewed them at her desk. On day fifteen, she enabled a quarantine draft output with one human save. She did not connect a customer messaging account or give the bot calendar creation.

At day thirty, fifteen live notes had produced eleven direct matches and four useful escalations. [Standup Scribe](/bots/standup-scribe) remained separate because recurring team updates were a different job. [Inbox Reply Digest](/bots/inbox-reply-digest) remained separate because mail was not an input to this migration.

Rina kept the original capture path. The migration earned its place by making ambiguous promises reviewable, not by replacing the phone.

## Verify the migration with a desktop test and a phone interruption

On desktop, replay all fixtures against the exact charter revision. Confirm note IDs, sources, escalation, and absence of external actions. Supply an unknown customer and verify the bot stops rather than browsing. Supply a missing note ID and verify it rejects the input.

Then run a harmless delayed fixture, pause it from iPhone, and inspect it later on desktop. Confirm pause stopped later stages, while any already-created quarantine artifact remains. Resume only after verifying the artifact and boundary. This test teaches the operator what pause does without risking customer data.

Record charter version, fixture manifest version, operator, test time, and result. The migration fails if testing requires a live customer write or if a phone notification is the only evidence.

Use [the iPhone cannot edit guide](/blog/grok-bot-iphone-cannot-edit) for the maintenance boundary and [how to pause on iPhone](/blog/how-to-pause-a-grok-bot-on-iphone) for the interruption procedure.

## Stop the migration when desktop ownership cannot be assigned

Every bot routine needs a person who can inspect history, edit, test, and handle deletion from desktop. If the team cannot name that person, do not move a reliable phone workflow into an operating model nobody maintains. Keep the existing Shortcut or simplify the job.

Stop as well when customer credentials cannot safely live on the shared computer, the judgment cannot be tested with fixtures, or the external effect cannot wait for human review. A longer charter does not solve an unsuitable boundary.

This page does not explain every iPhone Shortcut feature. It only uses the behavior you observe in the Shortcut being migrated. For general bot-mobile operation, use [the Grok Bot iPhone guide](/blog/grok-bot-iphone-app). For a Zap migration with explicit mappings, use [move a Zap to a bot](/blog/move-a-zap-to-a-bot).

Keep reading: [preserve local approval ordering](/blog/local-computer-approvals-are-not-undo), [map shared credentials](/blog/how-to-isolate-grok-bot-credentials), and [audit an inherited bot](/blog/how-to-audit-a-bot-you-inherited).

## Frequently Asked Questions

### When should I move an iPhone Shortcut to a bot?

Move the smallest step that requires evidence-based judgment, such as resolving ambiguous customer names, extracting a sourced promise, or escalating missing context. Keep exact capture, formatting, and human confirmation steps when they already work. Build sanitized fixtures from observed runs and test the bot as a draft-only decision function before connecting live services. A long Shortcut is not automatically a migration candidate. The stronger signal is an expanding set of ambiguous cases that can be scored with reasons and safe refusal.

### Can I manage the migrated Grok Bot entirely from iPhone?

No. Verified Grok Bot documentation says iPhone requires iOS 18 or later and supports pause and resume, while editing, history, testing, and deleting require desktop. Teach-by-demonstration is unavailable on iPhone. Use the phone as a capture or interruption surface and assign a named desktop operator for maintenance and verification. A phone pause can stop later work, but it does not reverse a file, message, or write that already completed. Keep consequential actions pending until the desktop review can occur.

### Should the bot replace the Shortcut's final save or send step?

Not during initial migration. Let the existing human-confirmed path own the final effect while the bot returns a structured proposal with note ID, source excerpt, decision reason, and escalation status. Shadow the results against sanitized fixtures and real approved inputs. Consider a named write only after identities, credentials, schemas, failures, and rollback are proven. Sends, publishes, payments, deletions, connection changes, and ambiguous tenant actions should stay behind a human boundary unless separately justified and constrained.

### How do I test an iPhone Shortcut to bot migration safely?

Capture the observed steps, create fixtures for ordinary notes, ambiguity, missing fields, conflicting dates, and untrusted quoted instructions, then replay them on desktop against a fixed charter revision. Require one effect owner and reject missing note IDs or sources. Test a harmless delayed run, pause it from iPhone, and inspect remaining artifacts on desktop before resuming. Record fixture version, charter version, operator, and results. The test should fail visibly without requiring live customer data or a production write.
`,
};
