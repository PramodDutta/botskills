import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Credential Hygiene: Rotate What the Computer Touched',
  description:
    'Practice bot credential hygiene with a touched-surface inventory, scoped rotation order, session revocation, verification, and evidence of cleanup.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# Credential Hygiene: Rotate What the Computer Touched

Ishan deletes a research bot after it opens the wrong customer folder. He changes the bot's name, removes its routine, and assumes access is gone. The browser session, copied export, command-line token, and downloaded attachment remain on the account's computer.

Bot credential hygiene starts from touched surfaces, not bot labels. Inventory every session, secret, file, destination, and downstream credential the computer could use during the affected window. Then revoke or rotate in an order that contains exposure without destroying the evidence needed to understand it.

This is a planned hygiene procedure, not a substitute for a live incident commander. If unauthorized action is underway, use [Bot Incident Response](/blog/bot-incident-response) and your organization's response process first.

## Define touched as reached, stored, used, or derived

A credential is touched when the environment authenticates with it, stores it, reads it, copies it, exposes it in a command or file, or derives another credential from it. Ishan includes browser cookies, refresh tokens, static API keys, command-line credentials, SSH keys, signed URLs, downloaded configuration, recovery codes, and authenticated application sessions.

He does not limit the inventory to secrets visible in chat. A browser session can confer authority without revealing a password. A short-lived access token may be renewable through a longer-lived refresh token. A copied export may contain another credential or link that remains useful after the first session is revoked.

| Touched surface | Example | Primary containment | Proof to retain |
|---|---|---|---|
| Browser session | Signed-in support portal | Revoke session at source | Revocation record and retest |
| Static key | API key in config file | Disable and replace | Key ID, timestamps, owner |
| CLI credential | Stored tool login | Revoke upstream grant | Failed old-auth test |
| Signed link | Time-limited download URL | Revoke object or link if possible | Access test after action |
| Derived secret | Token minted by parent key | Revoke child and parent path | Inventory of descendants |

## Use the account computer as the inventory unit

The verified facts say bots on one Grok Bot account share one persistent cloud computer, including files, cookies, browser sessions, and command-line credentials. Each bot has a separate screen, but that screen is not a security boundary. [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) owns the architectural explanation.

For rotation, inspect the whole account computer during the relevant time window. Do not ask only what the deleted bot was intended to use. Another bot on the account may have written a token into a shared file or left an authenticated tab available.

This does not mean every connected system must always be rotated. It means the scope decision needs evidence. Start broad enough to find touch, then narrow with timestamps, file history, session records, source-side logs, and confirmed capability.

## Freeze new use before changing the first secret

Containment begins by pausing routines and interactive work that could keep using the credentials. A rotating job can mint new sessions while Ishan revokes old ones. Record the pause time and affected account.

Do not destroy the computer or delete working files reflexively if they may be needed for investigation and your process requires preservation. The correct preservation action depends on your organization's incident procedure. This article uses a simple rule: stop new activity, record state, and let the named incident owner decide destructive cleanup.

An approval on a later action does not reverse earlier access or copied files. [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) explains that product behavior. Rotation addresses continuing authority, while evidence handling addresses what already happened.

## Build the touched-surface ledger from several sources

Ishan creates one row per credential or session with system, identity, credential type, scope, issue time if known, last observed use, storage location, parent credential, downstream grants, owner, and status. He gathers evidence from the computer, source systems, password manager, configuration records, and team knowledge.

No single source is complete. Shell history may omit tokens. Browser UI may show an authenticated state without its issuance details. An identity-provider session list may reveal devices the computer no longer displays. The ledger keeps disagreements visible.

| Ledger field | Why it matters | Unknown handling | Bad shortcut |
|---|---|---|---|
| Source identity | Determines whose access is affected | Ask system owner | Assume bot name is identity |
| Credential type | Chooses revoke or rotate method | Mark unknown, test carefully | Call every session an API key |
| Scope | Bounds possible actions | Use source-side grant record | Infer from intended prompt |
| Parent or child | Reveals renewal path | Trace issuance chain | Rotate child only |
| Last observed use | Helps time-window analysis | Preserve as unknown | Treat missing log as never used |

The [Source Verifier bot](/bots/source-verifier) can help attach a source to each factual ledger claim. The security owner still decides containment scope.

## Rotate parent credentials before descendants can return

Credential relationships determine order. If a refresh token can mint access tokens, revoke the refresh path before testing access-token failure. If a static service key creates signed URLs, rotate the key and invalidate or expire outstanding links where the service permits. If an identity session can authorize new application grants, terminate it before cleaning individual application sessions.

There is no universal sequence across vendors. Ishan draws a simple dependency graph for the affected identity. Roots are identities, recovery methods, and parent grants. Leaves are sessions and derived tokens. He asks the source-system owner how revocation propagates and records the answer.

Where immediate revocation would disrupt critical service, the incident owner chooses a controlled transition. That is a risk decision, not a reason for the bot to postpone silently.

## Revoke sessions as well as changing passwords

Changing a password does not necessarily invalidate every active session. Ishan checks the source system for session revocation, device sign-out, application grants, personal access tokens, and recovery mechanisms separately. He verifies each old path after the action.

A browser cookie is evidence of an authenticated session, not the sole source of truth about it. Deleting local browser data may remove the local copy while leaving server-side authority or other devices intact. Revoke at the source first when the system supports it, then clean local state according to the approved plan.

For the canonical explanation of session storage, read [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives). This procedure uses that fact without repeating browser architecture.

## Replace keys through overlapping or hard cutover deliberately

Some production integrations require an overlapping key transition: issue a new key, update the approved consumer, verify it, disable the old key, then test old-key failure. Other incidents require immediate hard revocation before replacement. The incident owner chooses based on exposure and service impact.

Never leave both keys active because the new one works. Put the old-key disable step and deadline in the ledger. Record key identifiers rather than secret values. Store new credentials only in the approved secret location, not the evidence packet.

| Rotation mode | Use when | Main risk | Required verification |
|---|---|---|---|
| Hard revoke | Continuing access risk outweighs downtime | Service interruption | Old path fails immediately |
| Controlled overlap | Approved continuity need exists | Old key remains usable | Disable time and old-key failure |
| Session termination | Browser or app session touched | Password change may not revoke | Reopen old session and fail |
| Scope reduction | Credential remains needed with less authority | Old broad grant survives | Inspect new and old scopes |

## Treat downloaded files as a separate cleanup track

Rotation stops future use of credentials. It does not remove exports, cached pages, attachments, copied text, or generated summaries already stored. Ishan inventories working directories, browser downloads, temporary files, archives, and destination folders under the approved evidence-preservation process.

Deleting the bot does not remove shared-computer files or browser sessions according to the verified facts. [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers that lifecycle point. Here, each file gets an owner and disposition: preserve for incident review, move to an approved evidence store, delete through an approved method, or retain under policy.

Do not write "data cleaned" when only credentials rotated. Authority and artifacts are two different workstreams with different proof.

## Write a charter that inventories but never rotates autonomously

Rotation can cause outages, invalidate integrations, and alter evidence. The bot can prepare the ledger and step-by-step plan, but a named system owner performs or explicitly authorizes each source-side change.

The boundary is: "Never reveal a secret, create or disable a key, revoke a session, change a password, delete a file, or alter an identity. Produce a redacted touched-surface ledger and owner-specific rotation checklist."

\`\`\`text
Role: credential touch inventory preparer

Scope:
- one named account computer
- one incident or hygiene time window
- approved source-side session and credential records

For each touched surface:
1. Record system, identity, type, scope, parent, descendants, storage location,
   first and last relevant time, evidence link, owner, and status.
2. Redact secret values. Use identifiers or fingerprints only.
3. Propose containment and verification in dependency order.
4. Keep credential rotation separate from artifact disposition.
5. Mark unknown whenever evidence does not prove absence.

Boundary:
Never reveal a secret, create or disable a key, revoke a session, change a
password, delete a file, or alter an identity. Named owners execute changes.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) explains why the verbs and objects are explicit. Do not interpret the charter as technical enforcement.

## Walk Ishan through a four-surface cleanup

Ishan pauses two routines on the affected account at 10:05 and records the time. His ledger finds four touched surfaces: a support browser session, a static analytics API key in a configuration file, a command-line storage login, and a downloaded ticket export. Four is the worked scenario, not a platform limit.

The support owner revokes the session at the source and confirms the old browser tab requires authentication. The analytics owner issues a replacement through the approved secret process, updates the one legitimate consumer, disables the old key, and verifies an old-key request fails. The storage owner revokes the command-line grant and checks the old credential cannot list objects.

The export follows a different path. The incident owner preserves a protected copy for review, then authorizes removal from the working directory after the investigation requirement is met. Ishan's checklist records evidence links and owners, never secret values.

At 13:20, all continuing access paths in scope fail their old-credential tests. Artifact disposition remains open until the incident owner closes it. The status accurately says "credentials contained, file review pending."

## Trace a recurring session to an unrevoked parent grant

During verification, the support browser becomes authenticated again after Ishan deletes cookies and signs out. The team first suspects a browser bug. Source-side records show an identity session still active and permitted to issue a fresh application session.

The cleanup had targeted a child session without revoking its parent. The identity owner terminates the parent grant, reviews related application grants, and repeats the test in the old browser context. Authentication now fails as expected.

| Symptom | Root cause | Repair | Verification that can fail |
|---|---|---|---|
| Session returns | Parent grant still active | Revoke issuance path | Old context stays signed out |
| Old API key still works | Disable step missed | Disable by identifier | Known harmless request fails |
| New integration breaks | Consumer not updated | Restore approved new-key config | New key succeeds only where needed |
| Ledger says clean, file remains | Authority confused with artifact | Run file disposition track | Search approved locations |
| Secret appears in report | Redaction failed | Replace with identifier | Pattern scan finds no values |

The failure illustrates why "change password and clear cookies" is not a complete rotation plan. Credential families have roots and descendants.

## Verify failure of the old path, not merely success of the new

A successful new login proves the replacement works. It does not prove the old credential stopped working. Every rotated surface needs a negative test using a safe, non-destructive operation agreed with the system owner.

Record test time, tester, old credential identifier, expected denial, actual result, and source-side status. Avoid storing the secret itself. For a browser session, reopen the old context. For an API key, make a harmless read request to an approved endpoint. For a command-line grant, request a non-mutating identity or list action.

If the old path still works, keep the ledger open and escalate. Do not retry destructive operations to prove access. The [VM Overwatch bot](/bots/vm-overwatch) may help observe computer health, but source-system revocation evidence remains authoritative for access.

## Answer the operator who wants to rotate everything monthly

The strongest objection is that broad periodic rotation is simpler than tracking touch. Regular rotation can be useful under an organization's policy, and some credential types are designed for short lifetimes. Blind rotation, however, can create outages, miss active sessions, ignore derived credentials, and generate paperwork without verifying old-path failure.

Use policy-driven lifetimes where required, then retain the touched-surface method for events, offboarding, scope changes, and hygiene checks. Rotation frequency and incident scope answer different questions. A monthly key change does not prove a browser session was revoked, and an incident rotation does not replace a policy requirement.

The ledger improves both by naming owners, dependencies, and negative tests.

## Review credential hygiene at onboarding and offboarding

Before enabling a workflow, list the identities and credentials it is expected to touch, ensure each has an owner, and define the revocation test. At change time, compare the expected list with actual touch. At offboarding, pause routines, rerun the inventory, rotate or revoke as scoped, and close artifact disposition.

The [Persistent Bot Memory bot](/bots/persistent-bot-memory) may retain workflow context by design, which makes its stored locations part of the artifact inventory, not a reason to keep credentials embedded in memory. Never place raw secrets into a durable narrative record.

Track hygiene as evidence of completed actions, not a checkbox that says "access removed." A reviewer should be able to identify the old path, owner, source-side action, negative test, and remaining unknown.

## Scan records for secret values without copying them into the report

Ishan checks likely storage locations for credential patterns, but the report must not reproduce anything found. Search configuration files, environment records, command history, browser downloads, notes, screenshots, and generated outputs under the approved procedure. Match on provider-specific prefixes where known and on high-risk field names, then validate findings with the system owner.

A pattern match is a lead, not proof of a live secret. A random identifier may look like a token, and a revoked key may remain in an old evidence file. Record location, file owner, credential identifier or fingerprint, and status. Redact the value at collection time.

The scan also needs a boundary. Do not broaden into unrelated users, accounts, or repositories merely because the tool can search them. Scope expansion belongs to the incident owner. The [Citation Checker bot](/bots/citation-checker) can inspect redacted reports for unsupported statements, but it should never receive raw credentials.

Scan results need access control of their own. Even redacted paths can reveal system names, identities, and sensitive architecture. Store the report in the approved incident or security location, give it a retention owner, and avoid pasting broad inventories into general chat. Hygiene evidence should not become a new map for unauthorized access.

## Treat hosted connector tokens according to their actual location

The verified facts distinguish hosted MCP sign-in tokens: they remain with Cursor's backend and are not stored on the computer. Do not falsely add those token values to a local-file inventory. Still record the connected service, account identity, grant scope, owner, and approved revocation path because the connection can remain relevant to access review.

Location changes the containment procedure. A computer-stored static key may require local cleanup plus source rotation. A backend-held hosted sign-in token requires management through the connector or provider control available to the account. In both cases, verify the old access path no longer succeeds.

Do not generalize the hosted-token fact to every integration. Command-line credentials and browser sessions are shared on the account computer according to the verified facts. Classify each credential from evidence rather than the word "connected."

For each hosted connection, ask the provider owner to identify the revocation control and resulting user impact. Record only what the owner verifies. A disconnected UI label is useful evidence, but the negative access test remains necessary because cached pages or another authorization path can confuse the result.

## Reissue access with less scope after containment

Rotation should not automatically recreate the old broad grant. Before issuing replacement access, ask which exact read or write actions the workflow still needs, which resources, which identity, and for how long. Remove unused scope where the source system supports it.

Ishan treats reissue as a new access decision. The owner records purpose, scope, expiry or review trigger, storage location, and negative test for forbidden operations. A read-only replacement should fail a planted harmless write attempt in a safe test environment.

If the workflow can operate from public data or a narrow export, it may not need the former session at all. The cleanest rotation sometimes ends with no replacement. That outcome should be explicit so a future operator does not restore access merely because the ledger has an empty "new credential" field.

Where replacement is necessary, test least privilege with two planted operations: one allowed and one forbidden. Both should be harmless in a safe environment. The allowed operation proves the workflow remains usable. The denied operation proves the reduction exists. Record source-side scope and test result, since prompt wording alone cannot establish it.

## Stop this page where incident command begins

If you suspect active compromise, unauthorized disclosure, destructive activity, or legal notification duties, stop using this checklist as the main process. Engage the designated incident, security, legal, privacy, and system owners. Preserve evidence and avoid unapproved destructive cleanup.

This article does not prescribe vendor-specific rotation clicks, universal retention, or legal obligations. It supplies an inventory and verification method. For a permission review before an incident, use [Bot Permission Review Checklist](/blog/bot-permission-review-checklist). For compliance evidence, use [Compliance Questions Grok Bot Cannot Answer With a Badge](/blog/compliance-and-ai-agents).

Keep reading: [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) shows why a new instruction cannot subtract a session already present on the computer.

## Frequently Asked Questions

### Which credentials should I rotate after removing a bot?

Inventory credentials and sessions the account computer reached, stored, used, or derived during the relevant window. Include browser sessions, refresh and access tokens, static keys, command-line logins, SSH material, signed links, recovery methods, and child grants. Do not scope by bot name alone. Use source-side records and local evidence, assign system owners, and mark unknowns. Rotate or revoke only through the approved incident or hygiene process, then separately handle downloaded files and other artifacts because rotation does not remove them.

### Is changing the password enough for bot credential hygiene?

Usually it is only one possible action. Active sessions, application grants, refresh tokens, API keys, recovery methods, command-line credentials, and signed links may require separate source-side revocation. Check the affected system's authoritative controls and dependency chain. After replacement, test that the old path fails using a safe non-mutating operation. Success of a new password proves the replacement works, not that every previous session or derived credential lost authority. Preserve the result and owner in the touched-surface ledger.

### Should the bot rotate exposed credentials automatically?

Not in this workflow. Rotation can interrupt production, invalidate integrations, change evidence, and create new secrets that require protected handling. The bot prepares a redacted inventory, dependency order, owner-specific checklist, and verification plan. Named system or incident owners perform and authorize source-side actions. The boundary forbids revealing secrets, creating or disabling keys, revoking sessions, changing passwords, deleting files, or altering identities. Automation may exist in an approved security system, but it should follow that system's controls rather than an ad hoc chat request.

### How do I prove that credential rotation worked?

Record the credential identifier, source-side action, time, owner, expected denial, and a safe negative test of the old path. Reopen the old browser context, use the old API key for an approved non-mutating request, or ask the old command-line grant for identity information. The result must fail as expected. Also verify the legitimate replacement path separately. Keep artifact cleanup as another status. A report saying "new key works" or "cookies deleted" is incomplete because it does not establish revocation at the source.
`,
};
