import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Leave a Power Automate Flow That Only Runs Inside One Tenant',
  description:
    'Move a Power Automate flow to a bot without dragging tenant-bound connectors with it, using an identity map, safe charter, and proof-led cutover.',
  date: '2026-09-02',
  category: 'Migration',
  content: `
# Leave a Power Automate Flow That Only Runs Inside One Tenant

Your flow works because one tenant quietly supplies more than the boxes on its canvas. A Microsoft identity owns it. Connections authorize its actions. Environment references resolve to resources. Policies permit certain data paths. A gateway may reach an internal system. Run history explains what happened last Tuesday. Moving the visible logic does not move that operating context.

That is the trap in trying to move a Power Automate flow to a bot. The migration is not a conversion from boxes into prose. It is a separation exercise: preserve the useful decision, expose every tenant-bound dependency, reconnect only the minimum access, and leave deterministic writes where they can still be inspected.

The safe boundary is firm throughout this guide. The bot may read approved inputs, reproduce the flow's transformations, and prepare a proposed result. It never sends a message, changes a record, creates an approval, deletes an item, or selects a tenant without a human confirming the final action. That boundary matters because a separate bot does not isolate credentials from its siblings on the same Grok Bot account.

## Inventory every hidden tenant dependency before translating one condition

Start with a dependency sheet, not a prompt. Read the flow from trigger to final effect and record every object that the canvas assumes already exists. Include the owner, co-owners, connection names, connection references, environment, tables, sites, mailboxes, teams, groups, queues, gateways, custom connectors, app identities, child flows, solution references, and destinations.

Do not write "Microsoft 365" as one dependency. A SharePoint site, Outlook mailbox, Teams channel, and Dataverse environment can each resolve under a different identity and policy. Record the visible tenant, environment, resource identifier, granted verbs, and human owner separately. If the flow uses a connector you cannot inspect, mark it unknown. Unknown is a migration blocker, not permission to guess.

Use a table that forces each assumption into the open:

| Flow element | Tenant-bound dependency | Evidence to capture | Migration decision |
|---|---|---|---|
| New item trigger | Site, list, connection identity | Site URL, list ID, owner | Replace with approved input feed |
| Get manager step | Directory and user consent | Account shown on connection | Reconnect read-only or omit |
| Approval step | Approval service and recipients | Action inputs and outcome fields | Keep outside bot during trial |
| Update row step | Environment, table, write permission | Environment URL and table ID | Human executes after review |
| On-premises query | Gateway and data source mapping | Gateway owner and source label | Stop until owner supplies access |

The goal is not to reproduce every dependency. It is to decide which ones deserve to survive. A flow that reads one list, derives a priority, and updates another list may become a bot that reads an exported packet and drafts five proposed updates. That removes two live connectors while preserving the judgment you actually wanted.

## Separate the portable recipe from the tenant that made it run

Treat the flow definition as a recipe. It can describe a trigger, expressions, branches, loops, and actions. It does not prove that a second runtime possesses the identities, grants, resources, policies, or network path those actions require. Even when an export or solution moves configuration successfully, the target still needs deliberate binding and verification.

Write two columns before choosing architecture. The portable column contains business rules, field meanings, allowed states, transformations, exception rules, and output shape. The bound column contains authentication, tenant selection, resource IDs, connection references, secrets, gateway paths, ownership, policy, schedules, and history.

| Usually portable as intent | Never assume it travels |
|---|---|
| "If severity is critical, put it first" | The account allowed to read severity |
| "Normalize the customer domain" | The tenant holding the customer row |
| "Draft an approval packet" | The approval connection and approver identity |
| "Return five fields in this order" | The destination table and write grant |
| "Run after the daily intake closes" | The schedule, time zone, and prior run state |

This split stops a misleading success. A bot can reproduce the branch logic perfectly while reading the wrong site or acting as the wrong user. Logic parity is only one acceptance test. Identity parity, scope reduction, and consequence control are separate tests.

## Trace each connector to a human, a tenant, and an allowed verb

For every connection, answer four questions: who authorized it, which tenant accepted it, what resource scope it reaches, and which verbs it can perform. A friendly connection label is not evidence. Capture the account shown by the service and one stable tenant or environment marker that a reviewer can compare at run time.

Then reduce verbs. If the bot only needs evidence for a recommendation, it does not need the connection that updates the record. Prefer an approved export, a read-only view, or a narrow tool authorization when available. Confirm the actual scopes in the live product because connector capabilities and organizational policy can change.

Do not move a personal owner credential merely because it already works. The old flow may have accumulated authority through years of convenience. Migration is the moment to replace that authority with a dedicated operator identity and the smallest role the task needs. If you cannot create a narrow role, keep the write in a human queue.

Keep browser sessions and hosted tool connections distinct. Grok Bot documentation says browser cookies and signed-in sessions live on the account's shared computer, while hosted MCP sign-in tokens stay with Cursor's backend. Signing out of one path does not prove the other path was revoked. Record and test both when both exist.

## Map trigger, judgment, and effect into three explicit contracts

A flow often hides three jobs inside one canvas. The trigger decides when work starts. The judgment turns source facts into a proposed decision. The effect changes another system. Give each job a separate contract.

The trigger contract names the event ID, source, required fields, freshness rule, and duplicate behavior. The judgment contract names allowed inputs, allowed outputs, evidence, and refusal behavior. The effect contract names the destination, write shape, authorized actor, approval record, and rollback owner.

| Contract | Receives | Returns | Must reject |
|---|---|---|---|
| Trigger | Source event and stable ID | Validated work packet | Missing ID, stale event, duplicate completion |
| Judgment | Approved packet and policy version | Proposal, evidence, missing fields | Unsupported conclusion or hidden source |
| Effect | Human-approved proposal | Destination receipt | Tenant mismatch or altered payload |

This structure lets you move only the middle. Power Automate can continue receiving an event and delivering an approved result while the bot handles ambiguous text. Alternatively, a human can upload a packet and copy back an approved draft. You do not need a heroic rewrite to escape tenant lock-in.

The stable event ID must come from the source, never from generated prose. Store it with the proposal. A retry should update or quarantine the same work item rather than creating another message or row. Duplicate prevention belongs in the contract even when the old flow appeared to run only once.

## Preserve expressions as fixtures instead of paraphrasing them from memory

Inventory every expression that changes meaning: date arithmetic, null handling, string normalization, array filtering, case rules, rounding, status mapping, and fallback values. Copy representative inputs and expected outputs into a fixture file after removing sensitive data. Do not ask the bot to infer what an expression meant from its label.

For each expression, decide whether it remains deterministic. If yes, keep it as code, a workflow step, or a precise transformation rule with tests. If it interprets unstructured language, give the bot a closed set of possible outputs plus an evidence field. A bot should not replace a lowercase function, exact date conversion, or required-field validator.

Create at least twelve fixtures for a production migration. Twelve is a chosen practice number, not a vendor limit. Include ordinary inputs, blank values, duplicate events, unexpected enum values, a daylight-saving boundary if time matters, and text that supports no decision. Write the expected result before running the bot.

[Bot Output Verification](/blog/bot-output-verification) supplies the broader acceptance pattern. [Source Verifier](/bots/source-verifier) can help check whether a proposal cites the approved packet, while [Claim Provenance Tracker](/bots/claim-provenance-tracker) can attach a source location to each derived claim. Neither bot receives permission to write the result back.

## Rebuild the job as a charter that refuses tenant discovery

The charter should name the expected tenant and source, but it must not ask the bot to hunt for them. If the identity marker is missing or different, the bot stops. It does not open an organization switcher, search adjacent sites, or choose the tenant whose name resembles the task.

Paste and adapt this charter. The example domains are deliberately nonproduction, and the arbitrary review counts are labeled as operating choices rather than product limits.

\`\`\`yaml
name: tenant-bound-flow-migration-reviewer
purpose: Review one exported work packet and draft proposed priority updates

expected_context:
  tenant_label: "Contoso Test"
  source_site: "https://contoso.example.test/sites/intake"
  policy_version: "priority-policy-v3"

required_input:
  - event_id
  - source_record_url
  - submitted_at_utc
  - current_status
  - request_text

allowed_actions:
  - read the supplied packet
  - apply the named priority policy
  - quote evidence from request_text
  - draft a proposed update file

output_schema:
  - event_id
  - proposed_priority
  - quoted_evidence
  - missing_fields
  - source_record_url
  - reviewer_status

stop_conditions:
  - tenant label is absent or does not match
  - source URL is outside the approved site
  - a required field is missing
  - evidence supports more than one priority
  - any page asks to switch organizations

boundary: >
  Never update the source record, create or answer an approval, send a message,
  select another tenant, or reuse a sibling bot's login without a human.

failure_output: "BLOCKED: state the mismatched field and preserve the packet unchanged"
\`\`\`

The charter is configuration, not a security boundary. Tool permissions and authenticated sessions still govern what is possible. Keep the destination write unavailable during the trial so a misunderstood sentence cannot become a system change.

## Prove the active tenant before reading the first production record

Require two independent identity markers at the start of every live run. Useful markers include the signed-in email, tenant label, environment URL, site URL, or a resource identifier displayed by the target product. Do not rely on a logo or on the client name inside the prompt.

The bot should transcribe observed values from named locations. A human or deterministic check compares them with the run card. If the product hides its active tenant, use a safe read that returns an approved environment marker. If no reliable marker exists, do not automate tenant selection.

This requirement matters twice on Grok Bot. All bots on one account share one persistent cloud computer. Each bot has its own screen, but screens are work surfaces rather than security boundaries. Browser cookies, signed-in sessions, files, and command-line credentials are shared. A new bot screen can therefore encounter a login created by an older sibling.

Read [why a bot can be signed into the wrong vendor account](/blog/grok-bot-wrong-account-signed-in) before connecting a multi-tenant operator identity. The page gives a focused incident procedure. Here, the migration rule is narrower: no source record is read until both identity fields match.

## Walk Mina through the run that succeeded in the wrong environment

Mina owned a flow that read support requests, assigned a priority, created an approval, and updated a queue. On Tuesday at 09:20, she exported its visible logic and wrote a bot prompt from the branch labels. Her first test used a synthetic request. The priority was correct, so she called the translation complete.

At 10:05, Mina tried one production-shaped record. The bot opened the right application and found a valid signed-in session. Its proposed result looked normal, but the source URL contained the training environment path. A sibling bot had used that environment the previous afternoon. The new bot's clean screen had not created a clean credential context.

Mina stopped before write-back because the charter prohibited updates. She recorded the observed environment URL, signed-in alias, source record ID, and sibling session. She quarantined the draft. She did not delete the bot, because deleting a bot does not remove shared-computer browser sessions or files.

At 10:40, Mina signed out deliberately, confirmed the login wall, and authenticated a dedicated read-only alias with a human watching. The production environment URL and alias matched the run card. She then tested one known record, one blank description, and one deliberately wrong tenant card. The wrong card stopped before data access.

On Wednesday, Mina ran twelve sanitized fixtures and three read-only live samples. Those counts were her trial design. A person compared every proposal with the old flow's expected result. The approval creation and queue update stayed in Power Automate. At the end of the week, the bot owned only the ambiguous priority proposal. The tenant-bound effects never moved.

## Quarantine approvals, writes, and notifications during parallel operation

Do not let the old flow and new bot perform the same consequence. Parallel operation should compare decisions, not double actions. Pause the bot before effect, or route its proposal to a quarantine folder that no watcher consumes. Keep the incumbent flow as the only executor until acceptance criteria pass.

List every effect, including the quiet ones. An approval creates a durable object and may notify people. A row update can trigger another automation. Moving a file can start ingestion. Posting an internal message can still expose customer data. "Internal" does not mean reversible.

Use a consequence ledger:

| Proposed effect | Trial disposition | Human evidence | Release condition |
|---|---|---|---|
| Create approval | Old flow only | Approval ID and owner | Bot never creates it in this design |
| Update queue row | Human after comparison | Before and after values | Tenant and payload confirmed |
| Notify assignee | Disabled in bot | Draft text only | Human sends if needed |
| Save evidence file | Quarantine folder | Event ID and checksum | Reviewer moves approved file |
| Retry failed item | Same event record | Prior attempt linked | No duplicate consequence |

An approval controls a proposed action. It does not reverse work already completed. Design the cutover so a mistaken proposal remains a file or review item rather than an outward effect requiring cleanup.

## Reconnect only the reads that survive the least-privilege review

After fixtures pass, decide how the bot receives production evidence. Rank options from least live authority to most: sanitized packet, human-selected export, read-only view, narrowly scoped connector, browser session with a narrow role, or broad personal login. Choose the first option that supports the job.

Document every rejected connection as well as every approved one. The mail connection may be unnecessary if the trigger supplies message text. The directory lookup may be replaceable with an approved manager field. The write connection should disappear if a person applies the final proposal.

Remember that separate bots do not isolate credentials. A dedicated bot name helps assign work, but any browser login on the account's shared computer can be encountered by sibling bots. Test the roster, not just the new screen. [Credential Hygiene for Bots](/blog/credential-hygiene-for-bots) explains the ongoing review, and [VM Overwatch](/bots/vm-overwatch) provides a pattern for inventorying shared artifacts without deleting them.

If you share the bot with another operator, a public share link copies its configuration only. It does not transfer your computer, logins, or conversation history. Strip confidential names, internal hostnames, and secrets before creating the link. The recipient must establish every connection in their own account and prove the tenant again.

## Reconcile policy, gateway, and ownership gaps outside the prompt

A perfect charter cannot override an organizational data policy, create a missing network route, or transfer ownership from a departing employee. Treat these as infrastructure decisions with named owners.

Ask the platform owner to compare source and target policy. Ask the gateway owner whether the required data source is reachable and who monitors it. Ask the application owner whether the operator role exposes only the required records and fields. Ask the process owner who receives blocked work. Store answers beside the migration plan, not inside an informal chat.

| Gap | Owner who can resolve it | Evidence required | Bot behavior meanwhile |
|---|---|---|---|
| Connector prohibited by policy | Platform administrator | Current policy decision | Remain on packet input |
| Gateway source unavailable | Gateway owner | Successful narrow read | Stop before query |
| Flow owned by leaver | Process and platform owners | New accountable owner | Freeze design changes |
| Target role exposes extra sites | Application owner | Scope test with fixtures | Do not connect |
| Child flow contract unknown | Flow maintainer | Input and output schema | Keep child flow in place |

No prompt wording closes these gaps. Calling them migration blockers is more honest than making the bot discover a workaround inside a live tenant.

## Answer the architect who says exporting the solution already solves portability

The strongest counter-argument is that solution-aware flows, connection references, and environment-specific configuration already provide a migration mechanism. If the complete job is deterministic and the target environment can rebind every dependency under controlled ownership, moving it through the platform may be the better answer. A bot adds risk when no judgment is missing.

But package portability does not equal operational identity portability. A reference still needs a target connection. A target connection still has an authorizing identity, tenant, resource scope, verbs, and policy context. Run history and human knowledge do not become trustworthy merely because import succeeds. A green import also does not prove that the action reached the intended environment.

Use the existing migration path when it preserves inspectability. Add a bot only where variable evidence needs bounded interpretation, browser work is unavoidable, or the portable output can be reduced to a reviewable proposal. The goal is not to replace Power Automate. The goal is to stop pretending tenant-bound authority is part of the recipe.

## Cut over one consequence at a time and keep rollback mechanical

Define acceptance before production access. Require all sanitized fixtures to match expected transformations, the negative tenant card to stop, duplicates to create zero extra effects, missing evidence to return blocked, and live samples to cite the approved source. Record the charter version with every proposal.

Cut over the judgment first. Keep the trigger and final effect unchanged. Observe a chosen sample period, review every exception, and compare proposed results with human decisions. Do not change connectors, prompt wording, and destination mapping in the same release. One change per release keeps failure diagnosis tractable.

Rollback should mean disabling one route and returning work to the incumbent flow or human queue. It should not require reconstructing credentials from memory. Keep the last accepted charter, fixture set, connection inventory, and owner list. Never store passwords, tokens, recovery codes, or browser data in that packet.

When the new route fails, preserve the source event, proposal, policy version, observed tenant, error, and reviewer decision. This is more useful than a screenshot saying the bot looked confused. [Bot Versioning and Rollback](/blog/bot-versioning-and-rollback) gives the surrounding release discipline.

## Measure independence by removing the old tenant from a test run

A migration is not portable merely because it runs while the original tenant remains signed in. Test independence deliberately. Sign out of the old tenant path with a human, revoke any obsolete test connection through its proper owner, and run the sanitized fixture set without production access. The judgment should still produce the same proposals because fixtures carry the necessary evidence.

Then test the target read path separately. It should prove identity and retrieve one known record without write authority. Finally test the human effect path with a nonproduction item. Keeping the three tests separate shows which layer failed.

Score independence with observable facts: the charter contains no secret, the fixture contains no tenant-only lookup, the bot can stop on identity mismatch, the target read role lacks forbidden verbs, the old personal owner is absent, and rollback does not depend on the old run history. Do not turn this into a vague "portable" label.

The hardest artifact to replace is often not code. It is an undocumented assumption such as "the mailbox owner fixes retries" or "the gateway reconnects after maintenance." Put each assumption under a named owner or remove it from the design.

## Stop using this page when the job is deterministic or the boundary demands isolation

This page stops applying when the flow is entirely deterministic and can be moved through a supported environment migration with controlled rebinding. Keep it as a flow. A bot is not an upgrade for exact field mapping, fixed approvals, or reliable API movement. Read [AI Agents vs Workflow Builders](/blog/ai-agents-vs-workflow-builders) when the unresolved question is which layer should own one step.

It also stops applying when separate credentials must be isolated from every other bot. Grok Bot provides one persistent computer per account, not one computer per bot. Screens do not create security boundaries, and separate bots do not isolate browser sessions, files, or command-line credentials. Use a genuinely separate account or another approved isolation boundary rather than following this migration pattern on one shared computer.

Finally, stop when the source requires an undocumented connector, a forbidden policy exception, or an unattended consequential write. Return the work to a person or a controlled workflow. This guide covers extracting bounded judgment from a tenant-bound flow. It does not authorize bypassing the tenant's controls.

## Frequently Asked Questions

### What actually moves when I move a Power Automate flow to a bot?

The portable part is the business recipe: field meanings, decision rules, transformations, exception conditions, and output shape. Do not assume the bot receives the flow owner's identity, connector consent, tenant selection, environment references, gateway access, policies, schedules, secrets, or run history. Rebuild only the access the new job truly needs, and verify it in the target context. A useful first migration often moves one judgment step while leaving the trigger and final system write in the existing workflow.

### Should the bot sign in with the same account that owned the flow?

Usually no. A long-lived flow owner may have accumulated mail, directory, site, environment, approval, and write permissions that the bot does not need. Start with a dedicated operator identity and the smallest role that supports approved reads. Confirm two visible tenant markers before production data access. On Grok Bot, remember that browser sessions are shared across bots on the same account, so a dedicated bot name does not isolate that login from sibling bots.

### Can a Grok Bot share link transfer the migrated setup to another operator?

A public share link can copy the bot's configuration, but it does not transfer the original computer, logins, or conversation history. Remove secrets, confidential examples, and internal hostnames before sharing because the configuration is exposed through the link. The recipient needs their own eligible account and must establish each required connection themselves. They should repeat the tenant identity test and fixture run rather than treating a copied charter as proof that any connector, policy, gateway, or permission also moved.

### When should Power Automate remain the system that executes the final action?

Keep Power Automate as executor when the effect is deterministic, inspectable, and already governed by a narrow connection, especially for record updates, approvals, and notifications. Let the bot return a structured proposal with evidence, then have the workflow validate an approved payload and stable event ID. This split preserves retries and destination mapping while containing uncertain interpretation. If the bot adds no bounded judgment, keep the whole job in Power Automate instead of introducing another runtime.
`,
};
