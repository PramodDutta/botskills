import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Incident Response When a Bot Already Did the Thing',
  description:
    'Use this grok bot incident response playbook to contain live sessions, revoke access, preserve evidence, notify owners, and prove the action stopped.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# Incident Response When a Bot Already Did the Thing

At 16:42 on Friday, Toma saw the confirmation: his research bot had changed a vendor setting and saved it. The approval prompt he expected never appeared. Asking the bot to undo the change would create a second unreviewed action on the same account.

This is the moment a charter article stops helping. The action is complete. Product documentation is explicit that an approval controls a proposed action and does not reverse completed work. A grok bot incident response therefore starts with containment at the affected service, not a better instruction pasted into chat.

Use this playbook for a sent message, changed setting, uploaded file, opened pull request, deleted record, exposed credential, or any other completed action. [Lead Scout](/bots/lead-scout), [Inbox Triage](/bots/inbox-triage), [PR Review Sentinel](/bots/pr-review-sentinel), and [Chief of Staff Briefing](/bots/chief-of-staff-briefing) have different jobs, but the same rule applies: stop the path before you ask for an explanation.

## Declare the incident in one sentence before touching the computer

Write a plain incident statement: actor, action, object, destination, and time. "At 16:42, the research bot changed vendor setting X on account Y" is enough. Do not begin with suspected cause. Cause changes as evidence arrives. The completed action does not.

Assign one incident owner and one scribe. The owner chooses containment actions. The scribe records timestamps, pages opened, credentials revoked, people notified, and verification results. If only one person is available, keep a timestamped text file while acting.

The sentence prevents scope drift. A bot might also have opened other tabs, but the confirmed incident is the saved setting. Track possible related actions in a separate list. Treat them as hypotheses until verified. This keeps urgency from turning every strange page into a fact.

| Field | Toma's entry | Why it matters |
|---|---|---|
| Actor | Research bot on Toma's account | Identifies the shared computer involved |
| Completed action | Changed vendor setting X | Defines what cannot be prevented now |
| Object | Account Y | Prevents work on the wrong tenant |
| First confirmed time | 16:42 local | Anchors vendor and message history |
| Owner | Toma | Gives containment one decision maker |

## Pause routines before investigating the cause

Pause every routine that can reach the affected service or consume the same input. Do not wait to identify which routine fired. A routine assigns one workflow to one bot, and deleting a bot deletes its routines. Pause is the reversible containment move.

On iPhone running iOS 18 or later, Grok Bot supports pause and resume. Editing, history, testing, and deleting require desktop. If Toma is away from his computer, he pauses from the phone first and inspects later from supported macOS or Windows software.

Do not delete the named bot as a panic button. Deleting it can remove conversation context and routines you need to understand the event, while shared-computer files and browser sessions can remain. [Delete a Grok Bot safely](/blog/delete-a-grok-bot-safely) explains why roster cleanup is not containment.

## Contain the affected service from a trusted human session

Open the vendor from a trusted human device or supervised session. Revert the specific setting only if you can identify the prior value and the revert is safe. Otherwise disable the affected feature, account, token, or integration using the vendor controls currently visible to you.

Do not rely on menu names from an article. Products change their interfaces. Record the page URL, control label, old value if known, new value, and timestamp. If the incident was a sent message, containment may mean warning recipients and disabling further send access rather than attempting a fictional recall.

Ask a second person to verify high-consequence containment when available. Their task is narrow: confirm the affected object no longer accepts the incident path. They do not broaden the investigation or edit the bot.

## Sign out shared browser sessions instead of trusting a bot boundary

All Grok Bots on one account share one persistent cloud computer. Each bot has its own screen, but cookies, signed-in sessions, files, and command-line credentials are shared. Separate bots are not a security boundary.

If the affected service should no longer be reachable, sign out on the shared computer until the service shows a login prompt. Check relevant subdomains separately because a visible logout on one page does not prove another session ended. Do not ask a sibling bot to test the session, since that can create a new login or action.

Deleting the incident bot does not remove those shared browser sessions. This is why the [shared computer security guide](/blog/grok-bot-shared-computer-security) and [Grok Bot is not a sandbox](/blog/grok-bot-not-a-sandbox) belong in every response checklist.

| Exposure | Immediate containment | Verification | Mistake to avoid |
|---|---|---|---|
| Browser session | Human signs out | Login prompt appears | Delete bot and assume logout |
| Local CLI credential | Revoke at issuer | Old credential fails | Remove file only |
| Hosted MCP sign-in | Revoke connection in settings | Connection no longer works | Search disk for backend token |
| Uploaded file | Remove sharing or file at destination | Recipient path fails | Delete local source only |
| Sent message | Stop further send path and notify | No later messages leave | Ask bot to send a correction first |

## Revoke credentials at the issuer before cleaning local files

A copied key remains valid after its file is deleted. Revoke or rotate the credential at the system that issued it. Then remove local copies from the shared computer and any working files created during the incident.

Distinguish hosted MCP sign-in tokens from local credentials. Verified documentation says hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. Revoke that connection through its settings rather than pretending a disk sweep removes it.

Record only identifiers and outcomes in the incident log. Do not paste secret values into the log. Write "key ending 4F2 revoked at 17:03" rather than the key itself. If the exact credential is unknown, revoke the smallest service account or session set that reliably contains the exposure, then document the business impact.

## Preserve evidence without asking the bot to reconstruct history

Capture the confirmation page, message identifier, pull request URL, changed record, or vendor event history that proves the action. Save copies outside the shared computer when permitted. Record local time and timezone. Preserve the current charter and routine wording before editing them.

Do not ask the bot, "What did you do?" and treat its answer as the incident record. The answer can help form hypotheses, but it is not an audit trail. Verified documentation says an audit view of Bot actions does not exist yet. Use external artifacts and service-side records.

The lack of an audit view makes a preexisting heartbeat valuable. A dated output listing inputs, items touched, and boundary flags can narrow the window. It does not prove every click. Keep the distinction in the log.

## Build a timeline that separates facts from inferences

Use three labels: CONFIRMED, REPORTED, and INFERENCE. Confirmed means a service artifact or human observation supports it. Reported means the bot or a person said it. Inference means the team connected evidence but has not verified the link.

Toma's vendor confirmation is CONFIRMED. The bot saying it interpreted "keep this current" as permission is REPORTED. The idea that a stale charter caused the action is INFERENCE until the exact routine and instruction are matched to the timestamp.

This labeling prevents a plausible explanation from ending the response early. The first explanation is often the easiest story, not the cause. Keep collecting evidence until the containment check passes and the trigger is understood well enough to prevent recurrence.

| Time | Label | Event | Evidence |
|---|---|---|---|
| 16:38 | CONFIRMED | Routine opened vendor input | Routine record and timestamp |
| 16:42 | CONFIRMED | Setting X saved | Vendor confirmation page |
| 16:44 | REPORTED | Bot says task implied update | Conversation text |
| 16:47 | CONFIRMED | Related routines paused | App state observed by Toma |
| 17:03 | CONFIRMED | Credential revoked | Issuer confirmation |
| 17:12 | INFERENCE | Vague charter enabled mutation | Pending controlled replay |

## Notify the owner of the harmed system with concrete facts

Tell the vendor owner, repository owner, mailbox owner, or data owner what changed, when it changed, what you contained, and what remains unknown. Avoid a long theory. The recipient needs to decide whether to revert, disclose, restore, or contact others.

A useful message says: "At 16:42 our bot changed setting X on account Y. We paused related routines at 16:47, signed out the shared session, and revoked credential Z at 17:03. We have not confirmed any other setting changes. Please verify Y and tell Toma before restoring access."

If a person received an incorrect message, correct the record through a human-owned channel. Do not let the same bot draft and send its own correction without review. The response should reduce automation until evidence supports restoration.

## Scope sibling bots by access, not by their names

The incident bot's name does not define the blast radius. The shared computer does. List every browser session, local credential, file path, and hosted connection that could reach the affected system. Then list which jobs can open those resources.

[Churn Watch](/bots/churn-watch) may appear unrelated to [PR Review Sentinel](/bots/pr-review-sentinel), yet both can encounter a shared file or session if configured on the same account. Review access paths, not job titles. Do not claim that each sibling used the exposure. Mark possible reach separately from confirmed use.

If the blast radius includes a mailbox, follow the injection controls in [Harden a Mail-Reading Grok Bot Against Prompt Injection](/blog/grok-bot-prompt-injection-email). If a 2FA prompt remains open, use [the 2FA incident guide](/blog/grok-bot-2fa-prompt) and keep the human at the keyboard.

## Fix the external state before rewriting the charter

Charter edits do not revoke a key, remove a public file, undo a send, or restore a database field. Finish containment and recovery at the affected system first. Then patch the instruction that allowed the action.

Map the behavior to a missing rule. A live send means the boundary lacked SEND or approval binding. A guessed value means the evidence block allowed completion without a source. Duplicate work means the restart checkpoint failed. Access through a sibling means the team relied on bot names instead of signing out.

Change one mechanism at a time and record the charter version. Broad prompts such as "be more careful" hide the original defect and add no testable behavior. [Charter anti-patterns](/blog/bot-charter-anti-patterns) catalogs those vague repairs.

## Replay the trigger with harmless fixtures and external actions disabled

Create a fixture that preserves the structure of the trigger without real credentials, recipients, money, or production objects. If a vendor note caused the action, copy only the relevant wording into a local test file. If an email caused it, remove real personal data and use a test mailbox.

The replay must stop before every external action. Compare the old and new charter on the same fixture. The old version should reproduce the unsafe proposal. The new version should return a named STOP, a draft, or a request for exact approval. If both versions behave the same, the patch did not address the cause.

Never reconnect production merely to prove the fix. The first verification is local and reversible. Production restoration is a later decision by the system owner.

## Paste an incident-mode charter that freezes action and preserves facts

Use a temporary incident mode while investigation continues. It removes write authority and forces evidence labels.

\`\`\`text
INCIDENT MODE
Owner: Toma. Incident: vendor setting X changed at 16:42.

STOP
Do not open the affected vendor, send messages, run routines, change files,
use CLI credentials, reconnect integrations, revert settings, or test access.
Do not ask another bot to continue. Do not delete this bot.

REPORT ONLY
Using only the conversation and named local heartbeat files, produce:
CONFIRMED: artifact plus timestamp.
REPORTED: speaker plus exact statement.
INFERENCE: reasoning plus what would verify it.
UNKNOWN: question plus owner.

SECRETS
Never print passwords, cookies, tokens, recovery codes, or key values.
Refer to credentials only by service and non-secret identifier.

OUTPUT
Write one incident-notes draft. Do not overwrite prior notes.
End with EXTERNAL-ACTIONS: NONE and ROUTINES: PAUSED-UNVERIFIED.
Only Toma may replace this mode after the service owner approves recovery.
\`\`\`

This charter cannot contain the external system by itself. It prevents the bot from creating new evidence while humans perform the real containment.

## Restore one capability at a time after a failed test can pass

Define restoration checks before reconnecting. The old credential fails. The service shows a login prompt on the shared computer. The changed setting has the approved value. The fixture produces a stop. The owner has reviewed the new charter. The first production run is manual, supervised, and read-only.

Restore read access before write access. Restore one input before a scheduled routine. Keep send, merge, payment, deletion, and permission changes outside the bot if the job does not require them. If the job does require a proposed write, bind approval to the exact object and destination.

Do not resume all routines because one manual test passed. Each workflow has its own input and boundary. A maximum of 50 routines per bot is a capacity fact, not a reason to restore them as a batch.

| Recovery check | Pass condition | If it fails |
|---|---|---|
| Old credential | Issuer rejects it | Revoke broader session set |
| Shared browser | Login prompt appears | Sign out remaining session |
| Fixture replay | Named STOP, no external action | Revise charter and rerun |
| Manual read run | Expected evidence-only output | Disconnect and investigate |
| First proposed write | Exact object shown for review | Keep write disabled |
| Routine resume | Heartbeat arrives with boundary flags | Pause immediately |

## Close only after proving both containment and recurrence control

An incident is not closed because the bot apologized or the charter changed. Close when the affected system is in an approved state, exposed access is revoked, possible sibling paths are reviewed, owners are notified, evidence is preserved, the trigger has a safe replay, and the recovery check passes.

Write remaining risks separately. Perhaps the vendor cannot show complete session history, or a recipient has not confirmed deletion of a file. Assign each risk an owner and next check. Do not bury unknowns inside a success paragraph.

The strongest objection is that this process is too heavy for a small mistake such as a draft PR. Scale response to consequence, but keep the order. Pause, verify external state, preserve the artifact, patch the boundary, replay safely, restore narrowly. A low-impact incident may take twenty minutes. Skipping containment because impact looks small teaches the wrong reflex.

## Hand prevention work to the right adjacent guide

This page ends when the completed action is contained and controlled testing supports recovery. It does not design a permanent charter, teach mailbox injection defenses, or explain subscription access. Use [approval gates](/blog/approval-gates-for-bots) for proposed actions, [bot boundaries](/blog/grok-bot-boundaries) for permanent stop lines, and [vendor access rotation](/blog/rotate-vendor-access-after-a-bad-grok-bot-incident) for a credential-heavy incident.

For the operating setup, [Chief of Staff Briefing](/bots/chief-of-staff-briefing) and [Standup Scribe](/bots/standup-scribe) demonstrate jobs whose output can remain internal. Keeping the first restored workflow read-only is a meaningful reduction in blast radius.

## Run a thirty-minute containment drill before the next real incident

Choose a disposable test account and plant a harmless completed action, such as changing a test label from BLUE to GREEN. Give the responder only the confirmation artifact, the bot name, and the affected service. Start a timer. The responder must declare the incident, pause related routines, preserve the artifact, restore BLUE through a human session, sign out, and prove a sibling reaches a login prompt. No production credential or personal data belongs in the drill.

Score the sequence rather than speed alone. Did the responder delete the bot too early? Did they ask the bot to undo its own action? Did the log separate confirmed evidence from inference? Did secret material enter the notes? Did the negative access test stop at the login prompt? A fast response that creates a second action fails.

Repeat after changing owners, services, or routine structure. The drill gives deputies muscle memory for pause on iPhone and reserves desktop work for inspection and editing. Store the blank incident statement, timeline labels, notification template, and recovery checks outside the bot computer. The first real incident is a bad time to discover nobody knows who owns the vendor or where the service-side session control lives.

## Frequently Asked Questions

### What should I do first in a Grok Bot incident response?

Pause every related routine and write one sentence stating the confirmed actor, action, object, destination, and time. Then contain the affected service from a trusted human session. Do not start by deleting the bot or asking it to undo the action. Deletion can remove useful context while shared sessions and files remain, and another automated action can deepen the incident. Preserve the service confirmation and record each containment step with a timestamp.

### Does deleting the bot remove its browser sessions and files?

No. Verified Grok Bot documentation says deleting a bot does not remove shared-computer files or browser sessions. All bots on the account share one persistent cloud computer, including cookies, signed-in sessions, files, and command-line credentials. Deletion also removes that bot's routines, which may destroy useful operational context. Sign out of services, revoke or rotate credentials at their issuers, remove local copies, preserve needed evidence, and verify access from the shared computer before considering deletion.

### Can an approval undo an action the bot already completed?

No. An approval controls a proposed action and does not reverse work already completed. Once a message is sent, a setting is saved, or a file is shared, recovery must happen at the affected system. That can mean correcting the setting, removing access, notifying recipients, or restoring data. After containment, rewrite the boundary and replay the trigger with harmless fixtures. Treat approval as a gate before a specific payload and destination, never as a repair tool.

### When is it safe to resume a paused routine?

Resume only after the affected system is in an approved state, exposed access is revoked, the old path fails, and a harmless replay proves the revised charter stops or requests exact approval. Restore one capability at a time, beginning with a supervised read-only run. Require a heartbeat that names inputs, items touched, and boundary flags. If the heartbeat is missing or any external action occurs unexpectedly, pause again and return to investigation rather than widening access.
`,
};
