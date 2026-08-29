import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Permission Review You Can Fail, Not a Slogan',
  description:
    'Use this bot permission review to inventory identities, challenge write access, test denials, assign owners, and fail unsafe jobs before launch.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# A Permission Review You Can Fail, Not a Slogan

Jules reviews a support drafting bot and writes "least privilege confirmed." The session can read tickets, send replies, close cases, issue refunds, and edit customer profiles. The charter says never send. The review passed a sentence and tested nothing.

A bot permission review should be capable of stopping launch. Inventory every identity and connection, map exact operations, challenge unnecessary write access, test allowed and forbidden actions, and name the person who accepts any residue. If evidence is missing, the result is FAIL or CONDITIONAL, never "looks fine."

This checklist reviews technical reach. It does not treat a boundary as access control. Use [a boundary is not a permission](/blog/a-boundary-is-not-a-permission) for that distinction and [what an approval governs](/blog/what-an-approval-actually-governs) for action-level consent.

## Freeze the job scope before reviewing access

Write the job's inputs, outputs, required reads, required writes, destinations, and forbidden verbs. Permissions cannot be judged without a task. "CRM access" may be excessive for a research brief and insufficient for a stage-updating workflow.

Use the current charter version, not a remembered description. If the scope changes during review, stop and restart the permission map. Otherwise reviewers approve access for one job and operators launch another.

Jules freezes Support Draft Desk v6: read tickets in saved queue, read public help-center pages, write local draft files, never send, close, refund, tag, reprioritize, or edit customer data.

## Inventory identities before listing applications

An application name hides the actor. Record the human account, service account, browser session, local credential, hosted connection, repository identity, and destination identity involved. Include who owns and can revoke each one.

Do not paste secret values. Use issuer-side identifiers or masked endings. A browser tab that opens successfully is evidence of a session, not evidence of its provenance or scope.

| Identity | Issuer or system | Owner | Revocation path | Review state |
|---|---|---|---|---|
| support-draft@example | Support vendor | Asha | Vendor admin sessions | Open |
| Help center browser session | Public web | Jules | Sign out browser | Open |
| Local API key ending 91C | Search vendor | DevOps | Vendor key console | Open |
| Hosted support connection | Connection backend | Asha | Connection settings | Open |
| #support-review posting identity | Chat workspace | Rhea | Workspace admin | Open |

## Map operations as read, create, change, send, and delete

For each identity, enumerate observable operations. Avoid "read/write" as a two-column shortcut. Creating a draft, sending it, closing a ticket, changing priority, exporting data, and deleting a record carry different effects.

Mark each operation REQUIRED, NOT REQUIRED, or UNKNOWN. UNKNOWN fails until resolved. Then compare technical capability with charter need. The gap is residual capability.

| Operation | Job requires it? | Identity can do it? | Result |
|---|---|---|---|
| Read saved ticket queue | Yes | Yes | Candidate pass |
| Read all customer profiles | No | Yes | Excess access |
| Write local draft file | Yes | Yes | Candidate pass |
| Send reply | No | Yes | High-consequence residue |
| Issue refund | No | Yes | Launch blocker |
| Close case | No | Yes | Launch blocker |

## Challenge every write with a read-only alternative

Ask whether the output can be written locally for human delivery, whether a saved read view replaces broad account access, or whether a separate service identity can remove mutation. The reviewer must record the attempted narrower design, not merely say it was inconvenient.

[Support Reply Drafter](/bots/support-reply-drafter) can produce a draft-shaped job. [PR Review Sentinel](/bots/pr-review-sentinel) can produce review output without merge authority. These patterns show why local artifacts are often the correct first version.

If read-only access is unavailable, document that product limitation and decide whether the residual capability blocks the job. Do not disguise it as least privilege.

## Inspect shared state once and point to the canonical boundary

All bots on a Grok Bot account share one persistent cloud computer, so a session available there can matter beyond the named bot. Record the affected account and link reviewers to [screens are not boundaries](/blog/screens-are-not-boundaries). Do not repeat the architecture in every row.

The review should ask whether a sensitive session belongs on that computer at all. A narrower charter cannot isolate credentials. Separate named bots do not create separate security zones.

For each browser session or local credential, record the sibling-job exposure owner. If nobody accepts that exposure, fail the design.

## Distinguish local credentials from hosted connections

Local credentials and browser sessions require inspection and issuer-side revocation. Verified documentation says hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. Review the connection and revoke it through its settings rather than searching disk for that token.

This distinction changes evidence collection, not accountability. Record what service the connection reaches, what operations it allows, who owns it, and how to disable it. A token's storage location does not prove narrow permission.

Never copy a token into the review sheet. Record an identifier and the result of a capability test.

## Test allowed reads with harmless fixtures

Create fixture records that contain no real customer or production data. The bot should retrieve only the intended rows or pages, write the expected local artifact, and stop. Record input IDs, output paths, and timestamps.

An allowed test can fail by returning too much data. If the saved view contains ten fixtures and the job needs three, receiving all ten is a scope failure even if the final draft mentions only three.

Use at least one fixture outside the permitted scope and confirm it stays absent. The number of fixtures is your declared test design, not a product promise.

## Test forbidden actions and require observable denial

Challenge send, delete, refund, merge, purchase, close, and record-change paths relevant to the identity. Use a sandbox or fixture system where possible. The expected result is an issuer-side denial, missing control, or a clearly blocked attempt before consequence.

A charter refusal is useful behavioral evidence but does not remove technical capability. Record two columns: TECHNICAL DENIAL and CHARTER REFUSAL. If the technical layer still permits a forbidden action, the residue remains.

\`\`\`text
PERMISSION TEST: SUPPORT DRAFT DESK v6
Fixture account: support-sandbox
Allowed case: Read tickets T-101, T-102, T-103 from saved view; write local drafts only.
Out-of-scope fixture: T-999 must not appear.
Forbidden probes: send T-101 reply; close T-102; issue refund on T-103; edit profile for T-999.
Expected technical result: forbidden controls absent or issuer denies action.
Expected charter result: bot refuses each forbidden verb and writes a boundary flag.
Evidence: screenshots or vendor events plus /workspace/permission-test/RESULTS.md
Pass rule: all allowed reads complete, T-999 absent, every forbidden technical action denied.
Boundary: Never send, close, refund, tag, reprioritize, or edit customer data.
\`\`\`

## Walk Jules through the refund blocker

Jules runs the fixture test. The saved view returns the intended three tickets and excludes T-999. Draft files are correct. The charter refuses a request to send a reply. At first glance, the job looks safe.

The technical probe reveals the support account can open the refund dialog and reach the final confirmation step. Jules stops before confirmation because the fixture vendor does not offer reversible refunds. The permission review marks refund capability as untested high-consequence residue and fails launch.

Asha creates a separate drafting identity without refunds, closure, or profile editing. Jules repeats the test. Send remains technically available because the vendor bundles draft and send, so the team chooses a different intake export for the first release. The final job reads exported fixtures and writes local drafts.

| Finding | Severity | Decision | Owner |
|---|---|---|---|
| Saved view excludes T-999 | Expected | Pass read scope | Jules |
| Refund control reachable | High | Fail launch | Asha |
| New identity removes refund | Expected | Retest | Asha |
| Send bundled with draft | High | Redesign intake | Rhea |
| Export-based draft path has no vendor write | Acceptable | Conditional pass | Rhea |

## Assign a disposition to every residual capability

Each excess operation gets one of four dispositions: REMOVE, ISOLATE, ACCEPT TEMPORARILY, or BLOCK JOB. "Monitor" is not a disposition unless it includes an owner, evidence, response, and expiry.

Temporary acceptance needs a named risk owner, business reason, compensating control, expiry date, and retest date. It cannot be approved by the bot operator alone when the residual capability affects another system.

| Disposition | Use when | Required evidence | Exit condition |
|---|---|---|---|
| Remove | Issuer can narrow scope | New role or token test | Forbidden action denied |
| Isolate | Job needs sensitive capability | Separate account/environment evidence | Exposure boundary verified |
| Accept temporarily | Business owner accepts bounded residue | Owner, control, expiry, retest | Removal or redesign date |
| Block job | Consequence exceeds tolerance | Failed test record | New design passes full review |

## Fail the review on six nonnegotiable conditions

Fail when an identity is unknown, an owner or revocation path is missing, an unnecessary high-consequence write remains, a forbidden test cannot be run safely, scope returns out-of-bound data, or the charter changed after testing. Also fail any UNKNOWN operation with credible consequence.

Conditional approval is not a polite pass. It should name the exact condition that must close before launch or the limited fixture-only state allowed meanwhile. If the team cannot observe compliance, do not approve unattended execution.

The phrase "we trust the bot" does not satisfy any row. Trust is an outcome of evidence and bounded consequence.

## Re-run permission review after triggers, accounts, or destinations change

Review again when the charter adds a verb, a source changes, a destination changes, a new connection is signed in, a service role changes, or an owner leaves. Schedule age alone is not the only trigger. A same-day access expansion invalidates yesterday's pass.

Version the review alongside the charter. Record tested identities and fixture IDs so the next reviewer can see what evidence no longer applies.

[Bot change management](/blog/bot-change-management) covers the wider release process. Permission evidence is one required input, not the whole change record.

## Answer the operator who says the boundary is enough

The strongest version of the objection is practical: the bot consistently refuses send and a human reviews drafts, so narrowing the account seems unnecessary. That can reduce likelihood, but it leaves consequence available through prompt injection, ambiguous instructions, operator error, or another job sharing state.

A boundary should remain even after permissions narrow because it expresses intent. Permission narrowing should remain even with a strong boundary because it reduces what a failure can do. The two controls answer different questions.

For harmless fixture work with no real destination, behavioral refusal may be enough for a trial. Label it fixture-only and do not carry that conclusion into production access.

## Stop this checklist before claiming a complete security audit

This review does not cover dependency supply chain, host hardening, legal compliance, data classification, network architecture, or every product threat. It evaluates job-to-capability fit and observable denial.

For credential cleanup after deletion, use [why deleting a bot leaves files](/blog/why-deleting-a-bot-leaves-the-files). For spending operations, use [what you cannot cap](/blog/what-you-cannot-cap) without inventing a spend limit. [Email Injection Sentinel](/bots/email-injection-sentinel) and [Codebase Hardening Auditor](/bots/codebase-hardening-auditor) can support specialized checks, but their names do not constitute a control.

## Review data visibility separately from action capability

An identity can be read-only and still expose too much. Map fields, rows, tenants, attachments, history, and exports. A support drafting job may need ticket text but not payment details, internal HR notes, or every tenant in the vendor account.

Create one fixture inside scope and one outside each important boundary. Test tenant separation, saved-view filters, and field visibility. The pass condition is not merely that the intended record appears. Unintended records and fields must remain absent.

Exports deserve their own row because they can broaden access from a page view to a bulk copy. If the job does not require export, test that the identity cannot create one. If export is required, specify format, maximum source set, destination folder, retention, and owner.

Record inference risk too. Three harmless fields can combine into sensitive information. A customer name, renewal date, and support severity may reveal commercial risk even without a field labeled confidential. Data owners decide whether that combination is acceptable.

## Trace every external destination before approving writes

For each send or create capability, identify destination, visible sender identity, audience, reversibility, and record owner. "Can post to Slack" is not enough. One channel may be a private test room while another contains customers or executives.

Test with a dedicated fixture destination whose membership and retention are known. Never use a production customer channel for a denial test. Confirm the identity cannot select a broader destination through search, autocomplete, or a changed URL.

If the job only needs local output, remove destination access. Human delivery is a separate controlled step. [What an approval actually governs](/blog/what-an-approval-actually-governs) becomes relevant only when a precise payload and destination are proposed.

Record whether deletion or editing of sent items is possible, but do not treat it as reversibility. Recipients may have read, copied, forwarded, or triggered downstream automation before an edit.

## Audit revocation by proving the old path fails

A documented revocation menu is not evidence that access ended. Revoke or disable the fixture identity at the issuer, then attempt the previously allowed harmless read. The old path should fail. Record time, identifier, failure state, and reviewer.

For browser sessions, sign out and check relevant subdomains. For local keys, revoke at the issuer before deleting local copies. For hosted connections, disable through connection settings and verify the connection no longer works. Preserve no secret values in the evidence.

Test restoration separately if the runbook depends on it. A backup account that cannot be reauthorized within the business window may change the safe default, but it does not justify leaving unnecessary access active.

Revocation tests belong in initial review because incident time is the wrong moment to discover that nobody owns the vendor account.

## Score evidence completeness without averaging away blockers

Use a review cover sheet with counts: identities known, operations classified, allowed tests passed, forbidden tests denied, out-of-scope fixtures excluded, revocation paths proven, residuals disposed, and open blockers. The counts help find missing work.

They do not create a percentage pass. Nine clean identities and one unknown administrator session still produce FAIL. Twenty denied low-impact actions do not offset one reachable refund or merge.

Require a reviewer signature and scope statement: "This review covers Support Draft Desk v6, support-sandbox, fixtures T-101 through T-999, and no live routine." Without scope, readers may apply a fixture-only pass to production.

Archive CONDITIONAL results with expiry. On the expiry date, the job either meets the condition, remains fixture-only, or stops. Silence must not convert conditional evidence into permanent approval.

## Separate job launch from permission approval

Permission approval says the tested capabilities fit the frozen charter closely enough for the named stage. Launch also depends on output verification, routine recovery, owner coverage, and safe delivery. Keep those gates separate.

Jules's export-based draft path may pass permission review because it has no vendor write capability. It can still fail output review if the export omits ticket history. It can fail trial review if the parser mistakes quoted customer text for an instruction. It can fail operations review if nobody owns a missing heartbeat.

The launch record should link to each gate and state the stage: fixture, supervised live read, or limited routine. Permission evidence from one stage does not automatically approve the next. Live credentials and unattended triggers can change effective risk.

This separation also makes rollback clearer. A failed output test may return the job to fixtures without changing the account. A permission expansion requires a new permission review even if output remains correct.

## Review the review with a person who owns the affected system

The bot operator understands the job, but the system owner understands roles, bundled capabilities, tenant structure, retention, and revocation. Both should sign high-consequence access.

Ask the system owner to challenge three statements: the job needs this operation, the tested identity has no broader role, and the revocation evidence is sufficient. Ask the operator to show how the charter behaves when an action is denied. Each reviewer covers a different failure mode.

If one person holds both roles in a small team, write both hats in the record and perform the questions separately. The formality is not theatre. It makes hidden assumptions visible before access becomes unattended.

For residual capability accepted temporarily, require a business risk owner in addition to the technical owner. The person who can configure the role is not necessarily authorized to accept customer or financial consequence.

## Review inherited roles and group membership at the issuer

An account may receive capability from a group, workspace role, organization default, or nested team rather than a direct grant. Inspect effective access and its source. Removing one direct permission can leave the inherited path active.

Record role name, group, tenant, and last verified time. Ask the system owner whether membership changes automatically through identity management. A drafting identity that joins an all-support group tomorrow may gain closure or refund capability without a charter change.

Test effective denial after changing group membership. Do not accept a configuration screenshot alone. The harmless forbidden probe should fail under the final identity state.

Set a review trigger for role or group changes. If the vendor cannot notify the owner, schedule an issuer-side check appropriate to the consequence and keep the job's own capability test in the regression suite.

## Treat approval prompts as permission evidence only for the proposed step

An approval prompt can show that one proposed action was gated. It does not prove other operations are gated, that the account lacks direct capability, or that earlier work is reversible. Record the exact verb, payload, destination, and identity shown.

Challenge neighboring actions separately. A prompt for sending may coexist with ungated ticket closure or profile edits. A prompt for one destination may not cover another. Do not generalize from a single screenshot to an application-wide control.

If the trial expects a technical denial, the appearance of an approval prompt is not a pass. Deny it and classify the operation according to the review rule. The underlying capability still reached a consequential proposal and needs an explicit disposition.

Record the denial in a way another reviewer can reproduce: fixture identity, operation, destination, time, observed control, and expected result. Avoid screenshots that reveal customer data or secrets. When the vendor changes roles or interface controls, rerun the capability test rather than assuming the old evidence still applies. A stable charter does not freeze the issuer's permission model, so the owner must treat effective-access changes as release events.

## Frequently Asked Questions

### What makes a bot permission review pass or fail?

A review passes when every identity and connection is known, required operations succeed on harmless fixtures, out-of-scope data stays unavailable, forbidden high-consequence actions are technically denied, revocation paths and owners are recorded, and residual capabilities have approved dispositions. It fails when an identity, scope, owner, or operation is unknown; unnecessary send, delete, refund, merge, purchase, or change access remains; a safe denial test cannot be performed; or the tested charter changes before launch.

### Is a charter boundary enough to control permissions?

No. A charter boundary states what the bot must refuse or leave to a human, while permission determines what an identity, session, or token can technically do. A bot can consistently refuse sending even though the signed-in account still allows it. Keep the boundary because it expresses behavior, and narrow permission because it reduces consequence. Test both charter refusal and technical denial. If technical denial is unavailable, document the residue, assign a risk owner, add an expiry, or block the job.

### How should hosted connections appear in the review?

Record the connected service, account or workspace, allowed operations, owner, settings-based revocation path, fixture test, and result. Do not paste token values. Verified Grok Bot documentation says hosted MCP sign-in tokens remain with Cursor's backend and are not stored on the computer, so disk inspection is not the correct revocation test. That storage fact does not prove least privilege. You still need to verify the connection's effective capabilities and disable it through its settings when access is no longer required.

### When must a permission review be repeated?

Repeat it when a charter adds an operation, a source or destination changes, an account role changes, a new browser session or connection appears, a trigger begins unattended execution, a credential rotates, an owner changes, or a prior temporary acceptance expires. Version the review with the charter and retain fixture identifiers. A previous pass applies only to the tested job, identities, operations, and environment. Any material scope change invalidates the relevant evidence until the affected tests run again.
`,
};
