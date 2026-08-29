import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Version a Bot Charter So You Can Roll Back a Bad Edit',
  description:
    'Use this bot versioning and rollback method to freeze charters, review diffs, test migrations, restore known-good behavior, and preserve run evidence.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# Version a Bot Charter So You Can Roll Back a Bad Edit

Kavi changes "use current sources only" to "use the latest available source" five minutes before a routine runs. The edit seems harmless. The next brief uses a three-day-old cache, and nobody can reconstruct the previous wording because the charter lived only in chat.

Bot versioning and rollback means each approved charter has an immutable identifier, a reviewable diff, compatible input and output contracts, test evidence, activation time, and a known-good predecessor. Rollback restores the full operating contract, not merely an older paragraph.

This reference covers charter versions and their linked runtime state. It does not claim a product-level audit or rollback button. Store the record in tools your team already reviews and can recover.

## Give every approved charter an immutable version

Use a monotonically increasing number, date plus revision, or repository commit. The exact scheme matters less than immutability. Once v12 has run, do not edit v12 in place. Create v13.

Put the version inside the charter and in every heartbeat and output header. A filename alone can be copied or renamed. The content should identify itself.

Record status as DRAFT, APPROVED, ACTIVE, RETIRED, or REVOKED. Only one version should be ACTIVE for a given job and routine at a time.

## Store the complete contract, not a loose prompt

A version includes purpose, input schema, output schema, evidence rules, checkpoints, owner, boundary, error behavior, and linked skill or routine expectations. If any of these live elsewhere, name their versions too.

The charter should make dependencies explicit. "Skill: pricing-reader-v4" and "Output schema: price-change-v2" let a reviewer see whether restoring charter v11 would call an incompatible procedure.

[How to write a boundary line](/blog/how-to-write-a-boundary-line) covers the forbidden-action sentence. Version it with the rest of the contract.

## Record a change request before editing content

State the observed problem, proposed change, expected benefit, new risk, test case, reviewer, and rollback trigger. Kavi's change request should have exposed that "latest available" permits stale fallback.

| Field | Kavi's entry | Review question |
|---|---|---|
| Problem | Current export sometimes unavailable | Should the job stop or use cache? |
| Proposed change | Allow latest available source | What maximum age is acceptable? |
| Expected benefit | More briefs complete | Can a stale brief be worse than none? |
| New risk | Old metric presented as current | How will freshness be visible? |
| Test | Current missing, three-day cache present | Must write SOURCE_MISSING and stop |
| Rollback trigger | Any stale source enters draft | Restore v12 and pause routine |

A change request can conclude that no charter edit is justified. Reliability pressure does not override evidence rules.

## Review the semantic diff, not only changed words

Show additions, removals, and downstream consequences. "Latest available" changes source freshness, error handling, output truth, and meeting behavior. The textual diff is three words; the semantic diff crosses four controls.

Ask what becomes newly allowed, newly forbidden, newly ambiguous, and incompatible. Review verbs, defaults, time windows, destinations, and failure states before stylistic edits.

| Diff class | Example | Hidden consequence | Required reviewer |
|---|---|---|---|
| Permission intent | Add CRM edit | Source records may change | System owner |
| Boundary | Allow direct post | External effect becomes automated | Destination owner |
| Evidence | Permit cached source | Freshness can fail silently | Output owner |
| Schema | Rename claim_id | Verifier may reject output | Downstream owner |
| Schedule assumption | Daily to hourly | More overlap and usage | Routine operator |

## Link charter versions to routine activation

Record which routine loads which charter version and the activation timestamp. A reviewed v13 sitting in a repository does nothing if the routine still uses v12 or a pasted instruction.

Before activation, pause the routine, verify the current output checkpoint, install or paste the approved charter through the normal process, and run a supervised fixture. Resume only after the heartbeat reports v13.

Do not run v12 and v13 concurrently against the same destination. If comparison is needed, use separate fixture folders and no external delivery.

## Preserve input and output compatibility across versions

A rollback can fail when the old charter cannot read new input files or downstream reviewers expect a new schema. Maintain a compatibility table for each version.

| Charter | Input schema | Output schema | Skill | Can roll back directly? |
|---|---|---|---|---|
| v11 | lead-input-v2 | shortlist-v1 | lead-reader-v3 | No, current verifier expects v2 |
| v12 | lead-input-v2 | shortlist-v2 | lead-reader-v3 | Yes |
| v13 | lead-input-v3 | shortlist-v2 | lead-reader-v4 | Only after input adapter |
| v14 | lead-input-v3 | shortlist-v3 | lead-reader-v4 | No, destination parser changed |

If direct rollback is incompatible, create a forward fix or restore linked dependencies as one release bundle. Never force old instructions onto new state and call the resulting failure a rollback.

## Define rollback triggers before activation

Triggers should be observable: unsupported high-consequence claim, stale source accepted, forbidden action proposed, output schema rejected, heartbeat missing, or error rate above a locally declared threshold. Avoid "quality feels worse."

Write who may trigger rollback and who performs it. Grant the operator authority to pause immediately. High-consequence restoration may require the business or system owner, but waiting for them should not keep the bad version running.

The safe default during disagreement is paused, with no delivery.

## Build a rollback bundle beside every release

The bundle contains the previous known-good charter, linked skill and schema versions, activation instructions, fixture suite, current checkpoint rules, and a verification checklist. Test the bundle before v13 activates.

\`\`\`text
CHARTER RELEASE: REVENUE-BRIEF v13
Status: APPROVED, pending activation
Predecessor: v12
Owner: Kavi; reviewer: Sana; destination owner: Maya
Routine: monday-revenue-0730, paused during activation
Input schema: revenue-export-v2
Output schema: revenue-brief-v3
Skill dependency: crm-reader-v5
Boundary: Never post, send, edit CRM, change stages, or use a source outside the named reporting window.
Forward test: current export -> heartbeat v13 plus local brief
Failure test: current export absent, old cache present -> SOURCE_MISSING, no brief
Rollback trigger: stale source selected, schema rejection, missing version header, or forbidden action proposed
Rollback bundle: v12 + revenue-export-v2 + revenue-brief-v3 + crm-reader-v5
Rollback verification: heartbeat reports v12, fixture current export passes, delivery remains disabled
\`\`\`

## Walk Kavi through the bad freshness edit

Kavi activates v13 without the missing-current-source fixture. Monday's export fails. The charter selects Friday's cache and writes a polished brief. Sana catches the old timestamp before delivery, so no external message leaves.

She pauses the routine and records the trigger: stale source selected. The active folder contains a v13 heartbeat and draft. She preserves both. The compatibility table shows v12 uses the same input and output schemas, so direct rollback is allowed.

Kavi restores the reviewed v12 bundle, runs the failed fixture, and confirms it stops on missing current input. He then runs a current-export fixture and gets the expected local brief. The heartbeat identifies v12. Only then does Sana approve resuming the routine.

| Step | Evidence | Decision |
|---|---|---|
| Detect | v13 draft cites Friday export | Trigger rollback |
| Freeze | Routine paused, files preserved | Prevent another v13 run |
| Assess | Compatibility table says direct restore | Use v12 bundle |
| Restore | Charter and dependencies match v12 record | Run fixtures |
| Verify failure | Old-cache fixture stops | Safety restored |
| Verify utility | Current-export fixture writes brief | Resume candidate |

## Roll back state as well as instructions

An old charter may encounter files created by the bad version. Decide whether to preserve, quarantine, migrate, or ignore each artifact. Do not delete evidence needed for review.

Use a new run folder after rollback. Mark v13 artifacts RETIRED, NOT FOR DELIVERY. If v13 changed a source system, restoring v12 instructions does not reverse that completed action. Recover at the affected service under [bot incident response](/blog/bot-incident-response).

An approval also does not undo prior work. Link to [what an approval governs](/blog/what-an-approval-actually-governs) when reviewers expect rollback to act like rewind.

## Verify both the failure case and the happy path

A rollback that stops every job is containment, not full restoration. Test the original failure fixture and one valid fixture. Confirm version header, source freshness, output schema, checkpoint behavior, and boundary refusal.

Use [verify bot output](/blog/bot-output-verification) on the resulting artifact. Then run a supervised trial using [the five-minute trial method](/blog/bot-trial-run-method). Keep delivery human until confidence returns.

[Source Verifier](/bots/source-verifier) and [Claim Provenance Tracker](/bots/claim-provenance-tracker) can support evidence checks; the release owner still signs the version.

## Fail rollback when any dependency or owner is unknown

Fail if you cannot identify the active version, previous known-good version, input schema, output schema, skill dependency, checkpoint, routine state, or rollback owner. Fail if the old version has not been tested against current fixtures.

| Failure signal | Risk | Repair |
|---|---|---|
| "Use the old prompt" | Old version ambiguous | Restore immutable identifier |
| Version missing from heartbeat | Cannot prove activation | Keep paused and reinstall |
| Output schema changed | Downstream breakage | Restore bundle or add adapter |
| Bad-version files mixed with new run | Stale delivery | Quarantine by run ID |
| Routine resumed before fixtures | Recurrence | Pause and complete both tests |
| Nobody owns trigger decision | Unsafe version stays active | Name operator and decision owner |

A failed rollback remains paused. Urgency does not make an unknown version safe.

## Answer the editor who says version control is too heavy for prose

The strongest objection is that a charter is short and easy to paste again. Short text can still encode permission intent, source freshness, delivery boundaries, and error behavior. The three-word change in Kavi's charter altered all four.

The process can stay light: one file, a version header, a diff, two fixtures, one reviewer, and a rollback bundle. That is less work than reconstructing an overwritten instruction after a bad run.

For a private one-off task with no routine or external consequence, formal releases may be excessive. Do not promote that prompt into unattended work without adding version discipline.

## Keep versions through handover, deletion, and retirement

PTO notes should name the active charter and rollback bundle. Use [handover notes](/blog/bot-handover-documentation) so a backup does not invent a version from memory.

Deleting a bot can delete its routines, while files and sessions on the shared computer may remain. Preserve reviewed charters and release evidence outside that lifecycle. [Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) covers cleanup.

At retirement, mark the final version RETIRED, pause routines, preserve required evidence, revoke access, and record the successor job. Do not reuse the version number for a new bot.

## Stop this method before claiming database rollback

Charter rollback restores instructions and compatible job state. It does not reverse emails, purchases, merges, refunds, deletions, or source-record changes already completed. Those require system-specific recovery.

For software deployment rollback, use repository and deployment controls. For database migrations, use a reviewed migration strategy. This reference can coordinate a bot charter with those systems but cannot replace them.

[PR Review Sentinel](/bots/pr-review-sentinel) and [Codebase Hardening Auditor](/bots/codebase-hardening-auditor) are review-shaped patterns. They should not receive merge or deployment authority merely because their charters are versioned.

## Keep a release ledger that names every active dependency

One row should identify job, charter, input schema, output schema, skill or procedure, routine, activation time, operator, reviewer, and predecessor. The ledger answers what is active without opening several chat threads.

Do not infer activation from file modification time. Record the observed heartbeat or supervised run that proved the new version loaded. If the ledger says v13 ACTIVE but the latest heartbeat says v12, mark deployment inconsistent and keep the routine paused.

Use separate rows for draft and active releases. A reviewed draft can wait for a maintenance window without confusing the backup owner. RETIRED rows remain immutable and point to their evidence bundle.

During PTO, the temporary owner may pause an active release but should not promote a draft unless the handover explicitly grants that authority. The ledger makes that boundary visible.

## Version examples and fixtures with the charter

Charter prose often relies on examples. If examples change without the version, behavior can change while the nominal policy stays constant. Store input fixtures, expected outputs, boundary challenges, and answer keys beside each release.

Name which examples are normative and which are explanatory. A normative example participates in acceptance tests. An explanatory example illustrates format but should not override a rule. When the two conflict, the charter must state which wins.

Version fixture data when source schemas change. Reusing a v2 fixture against input schema v3 can produce a false rollback failure. Preserve older fixtures so the predecessor remains testable, and add adapters only through a reviewed release.

The rollback bundle should contain at least one original failure fixture and one valid case. Over time, add distinct regressions rather than many copies of the same happy path.

## Distinguish rollback, roll-forward, and disable

Rollback restores a compatible known-good bundle. Roll-forward creates a new version that repairs the current state. Disable pauses or removes execution without restoring utility. Choose among them using compatibility and consequence.

| Strategy | Choose it when | Immediate result | Proof required |
|---|---|---|---|
| Rollback | Predecessor remains compatible | Prior behavior restored | Failure and happy-path fixtures pass |
| Roll-forward | Current schema cannot accept predecessor | New repair preserves current contract | Regression plus migration tests pass |
| Disable | Cause or compatibility unknown | No further scheduled work | Routine visibly paused and destination quiet |
| Manual fallback | Business output still required | Human completes bounded task | Human review and delivery record |

Calling disable a rollback hides lost service. Calling a forward fix a rollback hides that a new untested version exists. Precise labels improve handover and incident decisions.

## Handle concurrent edits with one release owner

Two operators can create v14 drafts from v13. Name branches v14-a and v14-b or use your repository's normal branch mechanism. Do not let both become v14 final. The release owner reconciles semantic changes, creates one candidate, and reruns combined fixtures.

Merging text cleanly does not prove behavior is compatible. One branch may narrow sources while another changes the output schema. The combined charter needs tests for both changes and their interaction.

Freeze promotion while a rollback is active. An editor should not activate an unrelated draft as the incident operator restores v12. Record a release lock owner and expiry in the ledger.

After the event, rebase or recreate pending changes from the actual active version. A draft based on failed v13 may reintroduce the freshness rule even if its visible purpose concerns formatting.

## Protect the known-good label with current evidence

"Known good" expires when dependencies or environment change. A charter that passed last month may no longer work after a source schema, account role, destination, or procedure changes. Record last verified time and the compatible dependency set.

Before relying on v12 as rollback, run its fixtures against current harmless state. If they fail for environmental reasons, mark v12 RETIRED_FOR_ROLLBACK and choose roll-forward or disable. Do not preserve a comforting label after evidence expires.

Known good also means acceptable safety behavior, not merely output completion. The fixture suite must include boundary refusal and error handling. A version that creates a correct brief but proposes direct posting is not a safe predecessor.

Review the label after every permission change. Narrowing permissions may cause a safe expected denial that requires charter adaptation. Broadening permissions may expose forbidden capability and require a new review.

## Practice rollback before the first unattended routine

Activate the candidate in a fixture folder, trigger the declared rollback condition, pause, restore the predecessor bundle, and run both verification fixtures. Time each phase for local planning and note every manual dependency.

Make the drill fail once by withholding a linked schema or procedure version. The operator should detect incomplete bundle state before resuming. Repair the bundle and repeat. A rollback plan that has never met a missing dependency is only a document.

Ask the backup owner to run the second drill using the release ledger. If they need the primary owner's memory, add the missing location, identifier, or authority rule.

Do not practice with a live destination. Use local output and fixture identities. The exercise tests version restoration, not the team's ability to retract a message.

## Keep rollback evidence separate from the active workspace

Active workspace files can be overwritten by the next run or remain after bot deletion. Store release records, immutable charters, fixture answers, approvals, and rollback results in the team's reviewed system outside transient job folders.

The active workspace still contains useful run evidence. At rollback, copy or preserve the bad-version folder under its run ID, then start a clean folder for the restored version. Never mix output rows from both.

Apply retention rules appropriate to the data. A fixture bundle should avoid real secrets and personal information. Release evidence needs identifiers and results, not copied credentials.

If the reviewed system becomes unavailable, the safe default is pause. An unverified local copy may help investigation but should not silently become the authoritative predecessor.

## Communicate active versions in every human handoff

Meeting notes, PTO handovers, incident threads, and approval requests should name the active charter and run ID. "Revenue Brief is on v12, routine paused, last safe run R-184" gives the next person an anchor. "We rolled back the bot" does not.

When a destination owner approves a payload, attach the output version and charter version. If the draft changes after approval, create a new output revision even when the charter remains the same. Charter version controls behavior; output version controls the exact artifact.

Do not announce restoration until verification covers both failure and happy paths. Use "contained on v12, verification pending" during the gap. This prevents a manager from treating a paused state as normal service.

At handback, the receiving owner repeats the active version and open state. That read-back catches mismatched records before authority changes.

## Retire a bad version without erasing its evidence

Mark the version REVOKED if it must never be activated again. Record the reason, incident or trial links, affected dependency set, and replacement. Remove it from default deployment choices while retaining read-only evidence.

Search runbooks, templates, and scheduled instructions for references to the revoked identifier. A copied setup note can resurrect v13 weeks later even though the main ledger is correct. Update those references through normal review.

Add the failed fixture to every compatible successor's regression suite. The purpose of preserving a bad version is learning and traceability, not availability for casual reuse.

If the wording contains sensitive data, redact according to policy while retaining a controlled original where required. Do not destroy incident evidence merely to make the version list look clean.

## Frequently Asked Questions

### What should a bot charter version contain?

Include an immutable version identifier, status, purpose, owner, inputs and schema, output and schema, evidence rules, checkpoints, error behavior, boundary, linked skill or procedure versions, routine expectations, approval path, activation time, predecessor, test evidence, and rollback trigger. Put the version inside heartbeat and output headers. Once a version has run, never edit it in place. Create a new draft, review the semantic diff, test it with fixtures, and activate it through a recorded change.

### When should you roll back a bot charter?

Roll back when a predeclared observable trigger occurs, such as stale input acceptance, unsupported high-consequence output, forbidden action proposal, schema rejection, missing version header, or broken checkpoint behavior. Pause the routine first, preserve bad-version artifacts, check dependency compatibility, and restore the complete known-good bundle. If the old version cannot read current inputs or satisfy downstream schemas, use a forward fix or restore compatible dependencies together rather than forcing an unsafe partial rollback.

### How do you prove a rollback worked?

Confirm the active heartbeat identifies the restored version, then run the original failure fixture and a valid happy-path fixture. The failure case must stop or refuse as designed. The valid case must still produce the expected local output with correct schema, evidence, checkpoints, and boundary behavior. Keep delivery disabled during verification. Preserve the result files and reviewer decision. A system that merely stops all work is contained, but it is not fully restored until valid work also passes.

### Can charter rollback undo an action the bot already took?

No. Charter rollback changes future instructions and compatible job state. It cannot unsend a message, reverse a purchase, unmerge code, restore a deleted record, or undo a source-system edit. Recover completed actions at the affected service under the incident process. Preserve evidence before changing the charter. An approval also controls only a proposed action and does not reverse completed work. Treat instruction restoration and business recovery as separate workstreams with separate owners and verification.
`,
};
