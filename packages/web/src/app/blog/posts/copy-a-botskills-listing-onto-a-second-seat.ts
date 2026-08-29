import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Copy a Listing Onto a Second Eligible Seat, Then Sign Out the First Computer',
  description:
    'Learn how to copy grok bot to another seat without carrying shared sessions: rebuild from the listing, test boundaries, sign out seat one, then verify failure.',
  date: '2026-08-29',
  category: 'Migration',
  content: `
# Copy a Listing Onto a Second Eligible Seat, Then Sign Out the First Computer

Rina wanted to move a support classifier from her seat to Jo's. Copying the charter took four minutes. The dangerous part was the old seat, where the shared computer still held a mailbox session and two downloaded samples after the new bot passed its first test.

To copy grok bot to another seat safely, treat the listing as source material and each seat as a separate setup. Recreate the job, reconnect only approved inputs, test with fixtures, then sign out and clean the first seat. Do not copy a browser profile, cookie, credential file, or secret.

Eligibility must exist independently for the second seat. Verified paths include SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams Standard and Premium. A one-time trial is also an eligibility path for individuals. This article does not claim a transfer button, export feature, or team-level bot store.

## Confirm the second seat is eligible before changing the first

Keep the working seat intact while you verify that Jo can access Grok Bot through an eligible subscription or trial. Cursor Hobby and Cursor Pro do not include it. Cursor Pro+ at $60 per month is the cheapest verified paid path in the facts provided for this corpus. Do not invent access from a plan name that is not on the verified list.

Open the second seat and confirm the product is actually available. Do not sign out Rina yet. Migration starts with a usable destination, not a teardown.

| Check | Seat one | Seat two | Stop condition |
|---|---|---|---|
| Eligible access | Already working | Must be independently confirmed | Product unavailable |
| Listing source | Saved outside bot | Same reviewed copy | Source missing |
| Test fixtures | Exported without secrets | Available locally | Fixtures contain secrets |
| Owner | Rina | Jo | No named owner |

## Copy the listing text, not the first computer

A botskills listing describes job shape, suggested capabilities, and a boundary. Copy those words into a clean draft and customize paths, owners, labels, output locations, and approval rules for Jo. [Inbox Triage](/bots/inbox-triage), [Support Reply Drafter](/bots/support-reply-drafter), [Lead Scout](/bots/lead-scout), and [PR Review Sentinel](/bots/pr-review-sentinel) are templates, not transferable runtime objects.

Do not copy browser data, home directories, command-line configuration, downloads, screenshots containing secrets, or session files. The goal is equivalent behavior under a separately reviewed setup, not a clone of hidden state.

## Inventory dependencies without printing their secret values

List the inputs the first bot used: mailbox label, folder path, public URLs, service role, routine timing, output schema, owner, and restart checkpoint. Refer to credentials by service and non-secret identifier only. Never paste a cookie, token, password, or recovery code into the inventory.

Mark each dependency RECREATE, RECONNECT, REPLACE, or DROP. A local sample can be recreated after review. A login must be reconnected by Jo under the new seat's policy. A stale integration may be dropped. The inventory becomes the migration checklist and later proves what was not carried.

## Rewrite owners and paths for the second seat

A copied charter that still says "Rina approves" is not migrated. Change the owner, deputy, local paths, connected account labels, heartbeat location, and restart behavior. Jo should not write into a path that exists only on Rina's computer.

All bots within one account share that account's persistent computer. A second eligible seat is a different user context, but this article does not promise a technical migration primitive. Build and verify the second setup from the visible product and approved listing.

| Charter field | Bad copy | Second-seat value | Verification |
|---|---|---|---|
| Owner | Rina | Jo | Jo receives stop request |
| Input | "the inbox" | Named approved label | Fixture outside label ignored |
| Output path | Seat-one workspace | Jo-owned path | File opens on seat two |
| Boundary | Be careful | Never send or delete | Send fixture stops |
| Restart | Old last-id | Fresh checkpoint | First item processed once |

## Connect the minimum input with the new owner present

Jo completes authentication on seat two. Secrets stay out of chat, charter, task files, and migration notes. Connect only the input required by the listing. Do not recreate every connection from Rina's account merely because it existed.

If the job reads a mailbox, start with a safe test label rather than the live inbox. If it reads a repository, start with a disposable test branch and no merge permission. If it compares prices, start with public fixture pages. A migration is the right moment to reduce access.

## Keep both seats from acting on live input at the same time

Pause the old routine before the new seat touches production input. Otherwise two bots can draft the same reply, open duplicate pull requests, or overwrite the same report. Keep the old bot available for reference, but prevent active work.

Routines assign a workflow to one bot, with up to 50 routines per bot and 20 recent run records per routine. Nothing is team-level, and deleting a bot deletes its routines. Copy routine wording manually after review rather than assuming it moved with the listing.

## Test behavior with eight fixtures before scheduling

Use normal input, empty input, missing evidence, hostile instructions, an out-of-scope item, a duplicate identifier, a stale checkpoint, and a request for the forbidden action. Jo's bot must produce the expected output or named stop with no external action.

Compare output shape, not prose similarity. A successful migration preserves policy and observable behavior. It does not need the same sentences. Record charter version, fixture set, result, and owner approval.

| Fixture | Required result | Migration failure |
|---|---|---|
| Normal item | Correct shaped draft | Missing required field |
| Empty input | Heartbeat with zero | Silence |
| Hostile text | Flag as data | Follow instruction |
| Duplicate id | One output | Duplicate work |
| Forbidden send | STOPPED: SEND | Message leaves |

## Run one supervised production item on seat two

After fixtures pass, give Jo one real item. Keep routines paused. Require evidence for each factual claim and a heartbeat with EXTERNAL-ACTIONS: NONE. Jo reviews the output against the source.

If the item fails, return to fixtures. Do not reopen seat-one automation as a workaround. The migration remains incomplete until seat two can produce one approved output under supervision.

## Recreate the routine only after the manual run passes

Copy the schedule and workflow onto the second bot, but choose a new first run after the old routine is paused. Do not claim routine history transfers. Save the charter, schedule, and heartbeat path outside both bots.

The first scheduled run should use a small input window and alert Jo if the heartbeat is missing. On iPhone, Jo can pause and resume, while editing, history, testing, and deleting require desktop. [The routine scheduling guide](/blog/how-to-schedule-a-grok-bot-routine) covers that operating boundary.

## Sign out every service on the first computer

Once seat two passes, Rina opens each service from the dependency inventory on seat one and signs out until a login prompt appears. Closing tabs is not enough. Deleting the old bot is not enough. Grok Bot documentation says deleting a bot does not remove shared-computer browser sessions or files.

Check relevant subdomains and local CLI credentials. Revoke unneeded credentials at their issuers before removing local files. Hosted MCP sign-in tokens stay with Cursor's backend rather than on the computer, so revoke those connections in settings instead of searching the disk.

## Verify the old seat fails before deleting anything

From a remaining bot on Rina's account, open each old service landing page once. Pass means a login prompt or denied access. Stop without authenticating. Test old local credentials against a harmless identity endpoint only if the issuer provides an approved method and your owner authorizes it.

The negative test matters more than the cleanup claim. A note saying "signed out" is intention. A login prompt on the old seat is evidence. Use [vendor access rotation](/blog/rotate-vendor-access-after-a-bad-grok-bot-incident) if any service remains open.

## Sweep old files without confusing deletion with revocation

Remove approved working copies, downloads, checkpoints, and reports that should not remain on seat one. Preserve required business records through your normal retention process, outside the bot computer. Never delete first and then discover the only copy of a decision log was local.

If a secret entered a file, revoke or rotate at the issuer before removal. File deletion cannot make a copied credential invalid. [What survives if you drop Grok Bot](/blog/what-survives-if-you-drop-grok-bot) explains why local and service-side state need separate handling.

| Old-seat artifact | Action | Proof | Do not assume |
|---|---|---|---|
| Browser session | Sign out | Login prompt | Tab closed means logout |
| Local token | Revoke, then remove | Old token fails | File deletion revokes |
| Hosted MCP connection | Revoke in settings | Connection absent | Token exists on disk |
| Routine | Keep paused, then delete with bot | No future heartbeat | Listing copied it |
| Business report | Retain per policy | Approved archive exists | Cleanup means destroy records |

## Paste a migration charter for the overlap window

\`\`\`text
MIGRATION MODE
Source owner: Rina. Destination owner: Jo.
Listing: [NAME AND SAVED VERSION].

SEAT ONE
All routines remain paused. Never process new input, send, write, or reconnect.
May report non-secret dependency names from existing charter and heartbeat only.

SEAT TWO
Use fixtures until Jo records FIXTURES: PASS.
Then process exactly one supervised production item.
Never send, merge, delete, pay, change permissions, or reuse seat-one secrets.

EVIDENCE
Every run records charter version, input ids, source, output path,
EXTERNAL-ACTIONS: NONE, and owner decision.

CUTOVER
Do not schedule seat two until the manual item passes.
Do not delete seat one until every named service shows a login prompt,
old local credentials are revoked, and retained files have an approved copy.
\`\`\`

## Delete the old bot only after preserving what deletion removes

Save the final charter, routine wording, run notes, and incident history you need. Deleting the bot deletes its routines. It does not clear shared browser sessions or files, which is why deletion comes after logout, revocation, file review, and negative testing.

Follow [Delete a Grok Bot safely](/blog/delete-a-grok-bot-safely) and [Grok Bot retirement](/blog/grok-bot-retirement) for the final roster action. If the first seat remains eligible for other work, delete only the migrated bot, not unrelated setups.

## Answer the objection that two live seats make rollback easier

Keeping the old setup available for reference is useful. Keeping both automations live is not rollback, it is duplicate execution. The safer overlap has the old routine paused and the new seat in fixtures or one-item supervision. Rollback means pausing the new seat and making a human decision, not silently restarting the old routine with stale sessions.

If continuity demands a fallback, define the trigger, owner, input cutoff, and checkpoint. Never let both seats consume the same item range.

## Stop this guide at ownership and policy boundaries

This page does not transfer subscriptions, teams, billing, vendor licenses, or organizational data ownership. Confirm those with current authoritative sources and your administrators. It also does not claim that Grok Bot offers a bot export or seat-copy control.

The procedure is intentionally portable: copy the public listing and reviewed charter, rebuild minimum access, test, cut over, sign out the first computer, verify failure, and only then delete. Use [charter anti-patterns](/blog/bot-charter-anti-patterns) if copied wording still contains vague scope, and [approval gates](/blog/approval-gates-for-bots) before enabling any proposed external action.

## Create a cutover ledger that both owners sign

The ledger has one row for every dependency and one status owner. Columns are source state, destination state, last source item, first destination item, credential owner, retained artifact, negative test, and decision. Rina signs source containment. Jo signs destination behavior. Neither signature substitutes for the other.

Use stable item identifiers to draw the cutoff. If seat one processed through message 842, seat two starts after 842. If the source checkpoint is uncertain, stop and reconcile before production. Guessing the cutoff creates duplicates or omissions that a smooth first run can hide.

The ledger also records DROP decisions. A stale connection does not need recreation. A report nobody reads does not need migration. Each omission names an owner who accepted it, preventing later claims that the copy silently lost capability.

## Compare source and destination with behavior, not screenshots

Screens can differ while policy remains equivalent. Compare the same eight fixtures, field names, stop codes, and boundary outcomes. Jo's output path and owner should differ from Rina's. Those differences prove customization, not drift.

Do not compare hidden state by copying directories or browser profiles. The source's cookies and local credentials are precisely what the destination must not inherit. Build an observable contract: input count, output schema, evidence labels, forbidden verbs, heartbeat, and restart rule.

| Contract item | Source evidence | Destination evidence | Must match? |
|---|---|---|---|
| Job outcome | Approved sample | Fixture output | Yes |
| Owner | Rina | Jo | No, must change |
| Local path | Seat-one path | Seat-two path | No, must change |
| Boundary | Never-send list | Same outcome in test | Yes |
| Credential artifact | None copied | Fresh connection | Must differ |

## Plan rollback without restarting two routines

Rollback starts by pausing seat two. Jo records its last completed identifier and reason. Rina does not immediately resume seat one. The owners compare checkpoints, decide the next unprocessed item, and verify that seat-one credentials are still intentionally available. If sign-out already occurred, a human may need to reconnect under the source policy.

Write a maximum rollback window chosen by the team. After that point, repair seat two or run the work manually instead of maintaining two long-lived setups. This is an operating choice, not a Grok Bot product limit.

Rollback never means copying Jo's new cookie back to Rina or moving checkpoint files between shared computers without review. Transfer non-secret identifiers and approved artifacts only. Rebuild authentication through the owner.

## Verify the destination cannot see source-only data

Plant one harmless source-only fixture outside the destination allowlist. Jo's bot must ignore it or report OUT-OF-SCOPE without opening its contents. This tests whether copied wording accidentally retained Rina's broad path or account label.

Also plant a destination-only fixture to ensure the new paths work. A migration that merely blocks everything is not complete. The pass is one approved destination output, no source-only read, no external action, and a reconciled checkpoint.

For mail, use labels with synthetic messages. For repositories, use disposable branches. For reports, use invented company names and amounts. Never test scope by exposing real data the destination should not receive.

## Keep a seven-day observation period with the source paused

Choose an observation period appropriate to the workflow. Seven days is Rina's declared local choice, not a product guarantee. During it, keep source routines paused, watch destination heartbeats, review STOPPED and ODD lines, and reconcile item counts daily.

Do not preserve source sessions for convenient fallback. Sign them out as planned. The paused charter and saved setup notes are enough to understand the old behavior. A live credential is not documentation.

At the end, Jo accepts ownership, Rina confirms negative tests still pass, and the team decides whether to delete the old bot. If any destination run duplicated, skipped, sent, merged, or accessed source-only data, extend investigation rather than declaring success by calendar.

## Write the final acceptance record before removing the source bot

The acceptance record names the listing version, destination charter version, eligible destination seat, passed fixtures, supervised production item, routine first run, last source id, first destination id, retained artifacts, old-seat logout results, revoked credentials, and open risks. Rina and Jo each approve their part.

An open risk has an owner and date. For example, a vendor may not expose enough session information to prove every device ended. Record that limitation and choose a compensating rotation or manual follow-up. Do not convert uncertainty into "complete" because the visible migration works.

Only after this record exists should Rina preserve necessary conversation and routine wording, then delete the old bot if desired. Deletion removes its routines. It does not replace any missing logout, credential revocation, file cleanup, or service-side verification.

Store the acceptance record outside both bot computers in the team's approved system. It is the durable explanation for why Jo owns the workflow, where the cutoff occurred, and which source artifacts were removed. The record contains identifiers and outcomes, never passwords, cookies, tokens, or recovery material.

## Frequently Asked Questions

### Can I directly transfer a Grok Bot from one seat to another?

This guide does not claim a direct transfer feature. Treat the listing and your saved charter as source material, then recreate the bot on a second independently eligible seat. Reconnect only approved inputs, replace owners and paths, pass fixtures, and run one supervised production item. Copying behavior is safer than cloning hidden state because it avoids carrying browser cookies, credential files, downloads, and stale checkpoints from the first account computer.

### Which seats are eligible for Grok Bot?

Verified eligibility includes SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams Standard and Premium. A one-time trial is also an eligibility path for individuals. Cursor Hobby and Cursor Pro do not include Grok Bot. Confirm access on the destination before changing the working source seat, because plan names and account state must be checked in the live product. Do not assume that copying a listing transfers eligibility, billing, or a subscription.

### When should I sign out the first computer?

Sign out after the destination passes fixtures and one supervised production item, but before you declare cutover complete or delete the old bot. Pause source routines first so both seats cannot process the same input. On seat one, sign out every service, revoke unneeded local credentials at their issuers, remove approved files, and verify from a remaining screen that each service shows a login prompt. Preserve needed charter and routine records before deletion.

### Why not keep both seat routines running during migration?

Two live routines can draft the same message, open duplicate pull requests, overwrite reports, or advance different checkpoints against one input stream. Keep the source routine paused while the destination runs fixtures and one supervised item. If the new setup fails, pause it and let the owner choose a recovery path. A defined rollback is a human-controlled state change with an input cutoff, not two automations racing while you compare their output afterward.
`,
};
