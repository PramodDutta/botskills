import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Retire the Automation You Replaced, Before It Fires Twice',
  description:
    'Learn to retire the automation you replaced with an owner, trigger inventory, shadow proof, clean cutover, rollback window, and duplicate-action checks.',
  date: '2026-08-29',
  category: 'Migration',
  content: `
# Retire the Automation You Replaced, Before It Fires Twice

Inez replaces a Tuesday spreadsheet automation with a bot and celebrates when the first report looks right. On the next Tuesday, both systems run. Two files land in the watched folder, two Slack notices appear, and the downstream importer processes both. The replacement worked. The migration failed.

The dangerous part of replacement is not building the new path. It is proving which path owns the trigger, then retiring the old one without erasing your rollback. "The bot is live" and "the former automation is dead" are separate claims.

This guide shows how to retire the automation you replaced. It focuses on trigger ownership, duplicate effects, evidence, cutover, archive quality, and rollback. Platform background belongs in the canonical articles: [what an approval actually governs](/blog/what-an-approval-actually-governs) explains why permission for a new action cannot undo an old action that already fired.

## Name the business effect before comparing implementations

Inez writes one sentence: "Every Tuesday by 09:00, produce one approved renewal-risk CSV from the Monday snapshot and place it in the review folder." The sentence identifies cadence, input, output, destination, and count. It does not mention Zapier, Make, cron, or a bot.

That neutral definition exposes duplication. If the old automation writes a CSV and the bot writes a Markdown summary, they may look different while still triggering the same importer. Conversely, two outputs can coexist if one is explicitly a shadow artifact in a quarantined folder.

Write the irreversible or externally visible effects too: sending, posting, updating records, creating tickets, charging, publishing, or moving files into watched locations. Those effects determine cutover risk.

| Layer | Old path | New path | Must have one owner? |
|---|---|---|---|
| Source read | Monday snapshot | Monday snapshot | Not necessarily |
| Decision | Fixed filters | Reviewed bot charter | During shadow, both may compute |
| Production file | renewals.csv | renewal-risk.csv | Yes |
| Watched-folder placement | Old scenario | Proposed bot step | Yes |
| Slack notice | Old webhook | Proposed message | Yes |

The migration unit is the business effect, not the vendor logo.

## Inventory every trigger that can wake the old path

An automation can wake from a schedule, webhook, watched folder, incoming email, database event, form submission, manual run button, retry queue, or a second automation. Inez draws the trigger graph before disabling anything.

Do not trust the main editor screen. Check paused branches, error handlers, child scenarios, duplicate workspaces, test hooks, copied workflows, and service-side rules. Search by destination too. A webhook URL or watched folder may reveal a producer whose name nobody remembers.

Record trigger ID, owner, workspace, cadence or event, timezone, enabled state, last success, last failure, retry policy, and downstream target. Unknown is acceptable. An unknown trigger is not safe to ignore.

## Trace retries and queued work before choosing cutover time

Turning off the visible schedule may not cancel a run that is already queued. Some systems retry failed steps later. A webhook event can sit in a delivery queue. An email rule can forward after the primary workflow is disabled. The exact behavior depends on the old system, so verify its documentation and current queue rather than assuming.

Inez chooses a cutover after the old Tuesday run is fully reconciled and before the next source snapshot arrives. She waits for active and retry queues to reach the expected empty state. If the old platform cannot prove that state, she moves the production destination first so any late delivery lands in quarantine.

| Trigger state | Meaning | Cutover treatment | Evidence |
|---|---|---|---|
| Scheduled, not started | Future wake remains | Disable before window | Schedule status and next-run time |
| Running | Effects may be underway | Let finish or cancel under runbook | Run ID and final state |
| Failed with retry | Future duplicate possible | Drain or quarantine | Retry queue screenshot or export |
| Webhook accepted | Delivery may be pending | Rotate endpoint or reject old signature | Receiver logs |
| Unknown copied path | Ownership unclear | Block destination and investigate | Search record |

A calm cutover starts with no surprise work in flight.

## Put the new path in shadow without sharing the production sink

Shadow mode means the new bot sees the same sanitized input and computes the same business result, but cannot perform the production effect. It writes into a shadow folder that no importer watches. It never sends, posts, updates, or schedules.

The boundary is practical: the bot may produce a candidate artifact, but it never activates or disables either automation and never places the artifact in the live sink. [Grok Bot shadow mode](/blog/grok-bot-shadow-mode) covers that observation pattern. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains why the destination grant should also be technically absent.

[Source Verifier](/bots/source-verifier) can reject unsupported rows. [Bookkeeping Auditor](/bots/bookkeeping-auditor) illustrates expected-versus-observed reconciliation. [Standup Scribe](/bots/standup-scribe) and [Tickets to Changelog](/bots/tickets-to-changelog) show narrow artifacts that stop before publication.

## Compare results by stable keys, not by pretty output

Inez chooses a stable record key, normalized status set, date interpretation, and ordering rule. She compares the old result, new result, and source truth. A visual side-by-side is not enough because reordered rows and formatting changes can hide missing or duplicate records.

The comparison reports matches, only-old, only-new, field differences, unsupported rows, and processing errors. It also records source version and run time. When the old output is wrong, matching it is not success. The source truth and reviewed business rule settle the disagreement.

Use at least one ordinary fixture, one empty input, one duplicate source row, one late record, one malformed field, and one instruction-like value. The counts are arbitrary testing choices, not product limits.

## Require an evidence threshold before handing over ownership

Inez declares the threshold before seeing results: three consecutive scheduled shadows, zero missing stable keys, zero production side effects, and every field difference either fixed or signed off by the process owner. Three is her chosen threshold for this workflow, not a universal rule.

Pass criteria must cover both result quality and operational behavior. A bot that creates the right CSV twice has failed the count requirement. A bot that produces one correct file but sends an unapproved message has failed the boundary. A bot that needs a human to repair every date has not replaced the old path.

| Criterion | Pass | Fail | Owner |
|---|---|---|---|
| Record coverage | Every expected stable key present once | Missing or duplicate key | Data owner |
| Field accuracy | Difference explained and accepted | Silent mismatch | Process owner |
| Side effects | Shadow folder only | Live sink, send, or update | Migration lead |
| Runtime | Completes before agreed deadline | Late or stalled | Operator |
| Exceptions | Routed with source evidence | Guessed or dropped | Domain reviewer |

The signed threshold turns "looks good" into a cutover decision someone can defend.

## Write a cutover card that assigns every verb

The cutover card names the person who disables the old trigger, the person who enables the new trigger, the person who verifies the first production artifact, and the person who can roll back. The bot owns none of those verbs.

\`\`\`text
Cutover: Tuesday renewal-risk file
Window: 2026-09-15 08:15 to 09:30 local time
Old trigger owner: Inez
New trigger owner: Rafi
Production sink: /operations/renewals/incoming

Order:
1. Confirm old active and retry queues are empty.
2. Disable old schedule and record trigger ID plus timestamp.
3. Enable one new scheduled run.
4. Verify exactly one production file and one importer receipt.
5. Keep old definition disabled but recoverable for seven days.

Stop if: queue state is unknown, two artifacts appear, stable keys differ,
or any external message or record update occurs outside the card.
\`\`\`

The seven-day rollback window is Inez's explicit choice. Your window should match source cadence and recovery needs.

## Disable the source before enabling the replacement sink

The safest order is specific to the effect, but one rule is broad: never leave two actors authorized to produce the same live consequence. Inez first confirms no old run is active, disables the old trigger, and records evidence. Only then does Rafi enable the new schedule.

For event-driven systems where events cannot pause, place a gate at the destination. Accept only the new producer's identity or signature, and quarantine the old one. Do not silently drop events if loss would matter. Store enough metadata for replay under human control.

[Move a Zap to a bot](/blog/move-a-zap-to-a-bot), [move a Make scenario to a bot](/blog/move-a-make-scenario-to-a-bot), and [move an n8n workflow to a bot](/blog/move-an-n8n-workflow-to-a-bot) cover implementation-specific migration questions. This article owns the retirement layer shared by all three.

## Watch the first live effect all the way downstream

A production file appearing once does not prove the migration succeeded. Inez traces the first run from trigger to source read, decision log, output hash, sink arrival, importer receipt, downstream row count, and visible consumer result.

She also checks that the old platform recorded no run and that no delayed webhook or retry arrived. The expected count is one at every effect boundary. If the importer legitimately creates several rows, the source artifact still has one run ID and one idempotency key.

Do not rely on a success notification sent by the same workflow. Verify from the receiving system or independent record. A producer can report success before a network retry creates a duplicate.

## Detect duplicate effects with an idempotency record

Where the receiving system supports it, include a stable idempotency key derived from the business period and effect type, such as the Tuesday snapshot date plus "renewal-risk." The receiver accepts the first matching key and rejects or quarantines later duplicates.

Do not invent platform support. If the sink lacks idempotency, maintain a manifest under operator control containing expected filename, source version, hash, run ID, and accepted time. The importer checks the manifest before processing.

An idempotency key is not permission to leave the old path running. It is a final defense against retry and race conditions. The retirement still removes the duplicate producer.

## Preserve the old definition without preserving its authority

Retirement is not immediate deletion. Inez exports the old definition, variables schema with secrets removed, dependency list, last known-good run reference, and restoration instructions. She stores the packet in a reviewed archive. The live trigger stays disabled, credentials are revoked or narrowed, and production destinations reject the old producer.

This separation matters: recoverable logic does not require live authority. A disabled workflow with an active webhook, usable token, or enabled child scenario is not retired.

The archive includes an owner and deletion review date. Keeping every former workflow forever creates a museum of stale secrets and misleading runbooks. Keep what rollback and audit require, then review it.

## Revoke obsolete credentials after the rollback window

During the rollback window, preserve only the minimum credential path needed for a deliberate, human-approved restoration. After the window closes and the new path has passed its scheduled checks, revoke the old tokens, service accounts, webhook secrets, mailbox rules, and folder grants that no longer have an owner.

Credential revocation is its own checklist because disabling a schedule does not revoke authority. Search both the automation platform and target services. A token may remain valid even after its workflow is deleted.

[How to audit a bot you inherited](/blog/how-to-audit-a-bot-you-inherited) offers a useful evidence classification for unknown paths. [Rotate vendor access after a bad incident](/blog/rotate-vendor-access-after-a-bad-grok-bot-incident) covers the stricter case where compromise is suspected.

## Answer the objection that keeping rollback creates duplicate risk

The strongest objection says the old system should be deleted at cutover. If it remains, someone can accidentally reactivate it and recreate the dual-run failure.

That risk is real. The answer is to separate definition from authority. Preserve an exported, secret-free definition and restoration procedure while disabling triggers, draining queues, revoking destination access, and naming a rollback owner. A recoverable file cannot fire by itself.

Immediate deletion wins when the old system is compromised or the retained configuration itself violates policy. For an ordinary migration, a short, controlled rollback packet reduces recovery time without leaving a second live producer.

## Diagnose a double fire from the receiving end backward

When two effects appear, freeze further processing and start at the receiver. Record both timestamps, identities, hashes, idempotency keys, and source versions. Then trace each producer backward through importers, queues, triggers, and retry policies.

| Symptom | Likely cause | Containment | Permanent repair |
|---|---|---|---|
| Two identical files | Both schedules active | Quarantine both and pause importer | Enforce single trigger owner |
| Same event minutes apart | Retry without idempotency | Reject second key | Add receiver deduplication |
| Old format reappears | Delayed old queue | Block old identity | Drain and revoke old path |
| One file, two notices | Downstream notification duplicated | Pause message action | Assign one notice producer |
| Missing output after cutover | Both paths disabled | Restore reviewed path manually | Repair activation checklist |

Do not delete evidence in the rush to clean the folder. The pair of effects is the map to the surviving trigger.

## Close the migration only after a later scheduled run

The first live run proves the cutover moment. A later scheduled run proves the normal wake path. Inez waits through the next Tuesday, verifies one trigger, one artifact, one receipt, and the expected rows, then closes the rollback window.

She updates the system inventory, on-call notes, ownership map, and alert routes. The old vendor entry is marked retired with the date and archive location. Any billing cancellation is performed by the account owner, not the bot.

This page stops applying when two paths intentionally provide active-active redundancy with receiver-enforced idempotency and a tested consensus design. That is not an ordinary replacement. For routine scheduling mechanics, read [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine). For routine ownership and deletion behavior, read [what a routine is and where it dies](/blog/what-a-routine-is-and-where-it-dies).

Inez also checks the human shortcuts around the retired path. A bookmarked manual-run URL, a copied command in the team wiki, or a spreadsheet button can wake old logic without appearing on the primary schedule. She searches operating docs for the workflow name, endpoint, output filename, and vendor project ID. Each reference is either removed, redirected to the new runbook, or labeled as an archived recovery instruction. A clean trigger graph paired with a stale run button is still an incomplete retirement.

Billing and ownership close on a different clock from technical cutover. Inez records the vendor renewal date, plan owner, data-export deadline, and cancellation authority. She does not ask the bot to cancel the old subscription because cancellation may remove logs or exports needed during the rollback window. The account owner performs that step after the evidence packet is complete. This order prevents a tidy cost saving from destroying the material needed to explain a later duplicate.

Finally, the receiving team signs the retirement record. The producer owner confirms the old trigger is disabled, the receiver owner confirms the old identity is rejected, the credential owner confirms revocation, and the business owner confirms the new output satisfies the neutral effect sentence. Four confirmations may be held by fewer than four people, but each responsibility remains explicit. The migration is closed when these claims agree, not when the project board moves to Done.

If a quarterly or annual trigger cannot be observed inside a practical rollback window, use a synthetic replay and a destination gate. Preserve the exact future scheduling rule, run it against a non-production sink, and verify that the old producer cannot reach the live receiver. Record the remaining uncertainty: no test today can prove what an external scheduler will do months later if its configuration changes. Ownership and monitoring must survive until the first real cadence completes.

Put the retirement date on alerts as well as documents. An alert that still points to the former operator or vendor can fail silently after the workflow changes. Test one safe alert condition, confirm the new owner receives it through the approved channel, and remove obsolete routes. Monitoring is part of trigger ownership because a production path nobody can hear is not fully transferred.

Keep reading: [Grok Bot routines versus triggers](/blog/grok-bot-routines-vs-triggers), [Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run), [bot incident response](/blog/bot-incident-response), and [testing your bot](/blog/testing-your-bot).

## Frequently Asked Questions

### When should I disable the old automation?

Disable it after the replacement has passed declared shadow criteria, the old active and retry queues are understood, and a named cutover window has begun. Record the old trigger ID, state, and timestamp before enabling the replacement's production effect. If events cannot pause, gate the receiver so only one producer can create the live consequence. Do not disable merely because a demo looked correct, and do not enable the new production sink while the former path can still fire.

### Should I delete the old workflow immediately after cutover?

Usually, preserve a secret-free exported definition and restoration procedure for a short, named rollback window while removing its live authority. Disable triggers, drain queues, revoke production destination access, and identify who may restore it. Delete immediately when compromise or policy requires it. The key distinction is between keeping logic recoverable and keeping a second producer alive. A dormant archive cannot fire; an enabled webhook, valid token, queued retry, or active child workflow can.

### How do I prove that an automation did not fire twice?

Trace the first production run from trigger through the receiving system. Expect one run ID, one accepted artifact or event, one idempotency key, and one downstream receipt for the business effect. Check the old platform for late runs and retries, then inspect the receiver for duplicates under different filenames or message IDs. Repeat the check on the next normal schedule. A success notification from the producer alone is weak evidence because it may not reveal receiver retries or another producer.

### What belongs in an automation retirement record?

Record the neutral business effect, old and new trigger identities, cutover owners, queue state, disable and enable timestamps, first live evidence, rollback window, archived definition location, obsolete credentials, and final revocation results. Include the receiver's duplicate check and the next scheduled-run verification. Exclude live secrets from the archive. The record should let another operator explain why only one path owns the effect, restore the old logic deliberately if authorized, and locate any credential that still needs removal.
`,
};
