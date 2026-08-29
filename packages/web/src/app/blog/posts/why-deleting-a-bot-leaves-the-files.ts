import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Why Deleting a Bot Leaves the Files and the Sessions',
  description:
    'Learn why bot deletion removes a roster item without wiping shared files or sessions, then practice a teardown that targets every layer in order.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# Why Deleting a Bot Leaves the Files and the Sessions

Eli finishes a temporary vendor review and deletes the bot named Vendor Review. The name disappears, so Eli assumes the downloaded contracts and vendor login disappeared with it. A week later, a new bot opens the same files and the same signed-in portal.

Deletion worked. Eli deleted the wrong layer.

A **lifecycle** is the sequence through which something is created, used, and removed. The bot, the account computer, a local file, and a website session have different lifecycles. Removing one does not automatically end the others.

The Isolation section of VERIFIED-FACTS says every account’s bots share one persistent cloud computer. It also says deleting a bot does not remove shared-computer files or browser sessions. This lesson explains **why deleting a bot leaves the files**, then teaches a four-layer teardown that a beginner can verify.

## Draw four lifecycles before pressing delete

Eli needs four boxes: bot roster entry, shared computer, local artifacts, and external authority. The roster entry is the named bot and its visible work surface. The shared computer is the persistent environment assigned to the user account. Local artifacts include downloads and generated files. External authority includes website sessions and credentials accepted by other services.

| Layer | Created by | Removed by | What deletion of the bot does |
|---|---|---|---|
| Bot roster entry | Creating a bot | Deleting that bot | Removes this layer |
| Shared account computer | Product account assignment | Not by ordinary bot deletion | Leaves this layer |
| Local files | Downloads and writes | Direct file cleanup | Leaves this layer |
| Browser sessions | Signing into a service | Sign-out or revocation | Leaves this layer |

The table is not an implementation guess. The Isolation facts explicitly establish the shared computer and deletion behavior. The lifecycle model explains their consequence.

## Treat deletion as removing an entry point rather than wiping a room

Deleting a bot removes the named way Eli returned to that work. It does not mean the room behind every screen was destroyed. The Isolation section says the computer is assigned to the user account, not an individual bot, and each bot gets a screen on it.

Think of removing a shortcut from a desktop. The shortcut is gone; the target file can remain. Or think of retiring a project label in a shared workshop. The label disappears; tools on the common bench stay where they were.

The analogy has limits, but it corrects one error: visual disappearance is not storage erasure. [One Computer, Many Screens](/blog/grok-bot-one-computer-many-screens) provides the architecture behind that correction.

## Follow Eli’s deletion through the shared layers

On August 20, Eli creates Vendor Review. The bot signs into a supplier portal, downloads four sample contracts, and writes review.txt. On August 22, Eli deletes the bot. On August 29, he creates Policy Research and asks it to inspect recent contract language.

The new bot can encounter the downloads and review because files persist on the shared computer. The browser may also retain the supplier session. The Isolation section of VERIFIED-FACTS supports both product claims: files and signed-in sessions are shared across bots, and bot deletion removes neither.

| Date | Eli’s action | Roster | Shared state |
|---|---|---|---|
| Aug 20 | Creates bot and signs in | Vendor Review exists | Session established |
| Aug 20 | Downloads four files | Vendor Review exists | Files persist on computer |
| Aug 22 | Deletes bot | Vendor Review gone | Session and files remain |
| Aug 29 | Creates new bot | Policy Research exists | Existing state is reachable |

The dates and file count are invented for teaching. The persistence rules come from the verified Isolation section.

## Separate conversation removal from artifact removal

A conversation contains messages exchanged on a bot’s work surface. An artifact is a file or other durable output created during the work. People connect them mentally because one produced the other. Storage systems need not connect their deletion.

Eli may lose the easiest explanation of why review.txt exists when he deletes the bot first. The artifact remains while its human-readable context disappears. That makes cleanup harder, not easier.

Before deleting, inventory artifacts with paths, purposes, and dispositions. Mark each keep, move, or delete. For anything kept, state who may use it next. Do not include secret contents in the inventory.

[Claim Provenance Tracker](/bots/claim-provenance-tracker) and [Citation Checker](/bots/citation-checker) offer useful teaching patterns for recording origin. Their separate names still do not isolate their files under the verified product architecture.

## Revoke external authority before removing local evidence

A browser session lives partly through local browser state and partly through what the service accepts. A command-line credential may have a local configuration plus authority at an issuer. Delete local evidence too early and Eli may forget which service needs revocation.

Use this order: identify the account, revoke or sign out through the service, confirm the old path no longer authenticates, then remove local state. The Isolation section says command-line credentials and browser sessions are shared across bots, which makes unfinished revocation relevant to every remaining screen.

| Authority | First action | Second action | Verification |
|---|---|---|---|
| Website session | Sign out or revoke at service | Clear related browser state | Other screen requests login |
| Command-line credential | Revoke at issuer | Remove local config | Harmless identity check fails |
| Downloaded private file | Decide retention | Delete or move appropriately | Known path no longer exposes it |
| Generated local report | Review destination | Keep with owner or remove | Inventory matches filesystem |

Do not perform destructive cleanup without confirming exact targets. The point is controlled teardown, not blind erasure.

## Inspect the shared computer from a surviving screen

A teardown needs an independent observation point. Keep one low-risk bot screen available, such as [Source Verifier](/bots/source-verifier), and use it to confirm expected state after cleanup. The screen does not provide isolation. It provides a second work surface from which shared persistence can be tested.

Check only known paths. Visit only the services used. Run only harmless identity checks. Avoid broad searches that reveal unrelated data. Record what succeeded, what failed, and what remains unresolved.

The verified Isolation section says screens are work surfaces rather than security boundaries. This is a productive use of that fact: a surviving screen can test whether shared state really changed.

## Answer the operator who wants one red wipe button

The strongest objection says layered teardown is too easy to get wrong. One delete action should remove the bot, files, cookies, and credentials together.

That would be convenient, but the verified product behavior does not promise it. More importantly, services outside the computer control their own sessions and credentials. A local wipe cannot guarantee that an external issuer revoked authority unless it coordinates with that issuer.

The objection correctly identifies a design desire. It does not change the current mechanism. Until the product documentation says otherwise, use the documented rule: deleting a bot does not remove shared-computer files or browser sessions. Build the checklist around reality rather than the desired button.

## Preserve necessary records without preserving unnecessary authority

Cleanup is not synonymous with deleting everything. Eli may need to retain the final vendor report for policy or business reasons. Retention means keeping a defined artifact with an owner and location. It does not require keeping the supplier session active or command-line credentials installed.

Separate data retention from access retention. Move the approved report to its intended home. Remove working copies and downloads from the shared computer. Revoke temporary authority. Record the decision without copying secrets.

[Least Privilege for Bots](/blog/least-privilege-bots) covers reducing authority. [How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials) covers credential placement. This article covers the lifecycle connection between them.

## Diagnose leftover state by the layer that still responds

| Symptom after deletion | Layer still present | Mistaken assumption | Correct response |
|---|---|---|---|
| New bot opens old file | Shared filesystem | Files belonged to deleted bot | Remove or relocate exact file |
| Website opens signed in | Browser and service session | Screen deletion signed out | Revoke and retest |
| Terminal tool still identifies account | Command-line credential | Bot owned CLI login | Revoke issuer and remove config |
| No context for a strange report | Conversation removed first | Artifact would disappear too | Use pre-delete inventory |

This table turns surprise into diagnosis. Start with the responding layer rather than recreating or deleting more bots.

The broader [shared-computer security guide](/blog/grok-bot-shared-computer-security) explains why each surviving bot can encounter the residue.

## Build a teardown manifest before removing the bot

A teardown manifest is a list of assets and authority that must be accounted for. Use four headings: sessions, command-line credentials, files received, and files created. Add the owner, intended disposition, and verification result for each row.

Eli’s manifest names the supplier portal session, four downloaded contracts, and review.txt. It says the session will be revoked, the sample contracts removed, and the approved review moved to the policy repository. Each row has a check another operator can repeat.

[Inbox Triage](/bots/inbox-triage) and [Lead Scout](/bots/lead-scout) illustrate bounded job charters. A manifest is a bounded teardown charter. It defines what success looks like before the easiest visible action tempts Eli to stop early.

## Execute teardown from external authority inward

Start outside the bot because outside authority can remain useful after local evidence disappears. Revoke website sessions and credentials. Verify revocation. Remove sensitive local files and browser state. Verify from a surviving screen. Finally, delete the bot if its conversation and organization are no longer needed.

| Order | Target | Action | Stop condition |
|---|---|---|---|
| 1 | External sessions | Sign out or revoke | Old session rejected |
| 2 | External credentials | Revoke at issuer | Harmless identity request rejected |
| 3 | Shared local state | Remove exact files and browser residue | Known paths and sites are clean |
| 4 | Bot roster entry | Delete bot | Name no longer appears |

This order preserves clues until the authority they identify is gone. It also makes the bot deletion the final administrative step, not the first security gesture.

## Limit this lesson to shared-state cleanup

This page does not define approval policy, prompt design, or every type of external connector. It teaches why bot deletion and state deletion are separate operations under the verified Isolation architecture.

For proposed-action control, use [Approval Gates for Bots](/blog/approval-gates-for-bots) and [How to Set Grok Bot Approvals](/blog/how-to-set-grok-bot-approvals). For prompt scope, use [Bot Prompt Engineering](/blog/bot-prompt-engineering). For untrusted content, use [Prompt Injection in Email](/blog/grok-bot-prompt-injection-email).

The boundary of this lesson matters. A teardown checklist cannot undo an external action already completed. It can only remove surviving state and authority.

## Verify teardown with a test that can fail

After cleanup, use another bot screen on the account computer. Visit the supplier portal and confirm it asks for authentication. Check the exact former file paths and confirm they no longer expose removed material. Run a harmless command-line identity check for any revoked tool and confirm it fails or reports no identity.

If any test succeeds unexpectedly, the teardown is incomplete. Return to the manifest and correct that layer. Do not delete the surviving test screen in an attempt to fix the result.

You can now do one concrete thing: remove a temporary bot without confusing roster deletion with session, credential, or file cleanup.

Give the manifest a retention reason as well as an action. “Keep review.txt” is incomplete because the next operator cannot tell whether it was overlooked. “Move the approved review to the policy repository for the quarterly record, then remove the working copy” distinguishes intentional retention from residue. If no owner or reason exists, the row remains unresolved.

Run a before-and-after comparison on exact targets. Before cleanup, record that the practice supplier URL opens as the test identity, four named sample files exist, and the harmless command-line identity check succeeds. After cleanup, repeat those observations. The URL should require authentication, removed files should be absent from their known paths, and revoked credentials should no longer authenticate. Do not broaden the test into unrelated folders.

Eli should preserve evidence of successful revocation without preserving credentials. A timestamp, service name, account label, and observed signed-out state are enough. Screenshots can contain private data, so prefer a short text result unless policy requires stronger evidence and provides a secure destination.

Consider partial teardown. If two projects share one session, deleting the temporary project bot cannot decide whether the session should remain for the other project. The manifest must name the other owner and accepted risk. If the work requires incompatible confidentiality, move one project to an environment with a verified separation mechanism rather than using the roster as a compromise.

The same logic applies to derived files. A final report may be safe to retain while its raw source exports are not. Review each artifact by content and purpose, not merely by extension or creation date. A generated summary can still contain private facts copied from a source that was later removed.

Teardown can reveal missing provenance. If Eli cannot tell which portal created a file or which identity a local credential represents, do not guess and delete broadly. Isolate the exact artifact from further use, mark it unresolved, and investigate through non-destructive metadata and service records. The goal is accountable removal, not cosmetic emptiness.

Finally, rehearse the sequence with synthetic assets before a real project closes. Create two harmless files, a disposable session, and a practice credential with no valuable authority. Build the manifest, revoke from the outside inward, and have another person verify. A rehearsal exposes vague ownership and weak stop conditions while the consequence is small.

Use a separate result for each manifest row. “Cleanup passed” compresses too much. One session may be revoked while one download remains. Row-level evidence lets Eli finish the known work without hiding the unresolved item.

When a file must be retained, test its destination before removing the working copy. Confirm the approved artifact arrived intact, belongs to the right owner, and excludes raw material that should not travel with it. A move is not successful merely because the source path became empty.

When a credential must remain for another project, document that decision as continued authority rather than completed cleanup. Name the other project owner and next review event. The temporary bot’s deletion does not reduce that credential’s reach, so the risk record must stay open.

Perform teardown while the responsible operator still remembers the work. A manifest reconstructed weeks later is more likely to omit alternate domains, renamed files, or secondary credentials. If immediate cleanup is impossible, freeze new use of the temporary environment and assign a dated follow-up rather than relying on memory.

Eli should distinguish absence from inaccessibility. A file may be gone from its old path because it was moved, not deleted. A portal may reject one URL while another session remains. A terminal tool may fail because of network conditions rather than revocation. Verification should identify the reason when the consequence matters.

Invite a reviewer to challenge one retained item and one removed item. For the retained item, they ask why it remains and who owns it. For the removed item, they repeat the safe absence test. This small cross-check catches both accidental residue and accidental destruction.

The finished manifest becomes a teaching record. It shows that bot deletion was only one row in a larger lifecycle, completed after outside authority and shared artifacts were resolved. Future operators can reuse the shape without assuming the exact services or paths will match Eli’s case.

Close the record with exceptions, not only successes. If one retained session remains for a named project, the teardown is partial and the surviving authority must stay visible. If one file could not be identified, record its quarantine location and owner. Honest partial completion is safer than a green label that hides residue. The roster may be tidy while the environment still requires work.

Require the named owner to acknowledge every exception and schedule its next verification. Unowned residue is unfinished teardown, regardless of the deleted bot’s status.

Keep reading: [Delete a Grok Bot Safely](/blog/delete-a-grok-bot-safely), [approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility), and [Grok Bot permissions explained](/blog/grok-bot-permissions-explained).

## Frequently Asked Questions

### Why do files remain after bot deletion?

The Isolation section of VERIFIED-FACTS says all bots on an account share one persistent cloud computer and that deleting a bot does not remove shared-computer files. The bot entry and the filesystem have different lifecycles. Remove or relocate files directly, then verify the known paths from a surviving screen. Do not infer storage erasure from the roster changing.

### Why does a website remain signed in?

The verified Isolation facts say browser cookies and signed-in sessions are shared across bots and survive ordinary bot deletion. End the session through the website, clear related local state where appropriate, and revisit from another screen. A fresh authentication request is evidence for the tested path. Deleting more bot names does not target the service’s session.

### Should I delete the bot before revoking credentials?

Revoke first. The bot’s conversation and artifacts may help identify which issuer, identity, and path need attention. Revoke authority at the issuer, verify that it no longer works, remove local configuration, clean files and sessions, then delete the bot. This order reduces the chance of erasing your map while leaving the authority active.

### What is the minimum useful teardown manifest?

List browser sessions, command-line credentials, received files, and generated files. For each, record a non-secret identifier, owner, intended disposition, and a verification that can pass or fail. Keep the manifest until every row is resolved. Then delete the bot only if its conversation and roster entry no longer serve a retention or operational purpose.
`,
};
