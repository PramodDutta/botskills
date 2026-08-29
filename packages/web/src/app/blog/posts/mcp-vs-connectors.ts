import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'MCP vs Connectors vs Browser Login: Where the Token Lives',
  description:
    'Compare mcp vs connectors grok bot paths by token location, active identity, available verbs, revocation point, and shared-computer exposure.',
  date: '2026-08-29',
  category: 'Comparison',
  content: `
# MCP vs Connectors vs Browser Login: Where the Token Lives

Aya's security questionnaire had one box labeled "credential storage." Her bot read a CRM through a hosted MCP connection, opened the CRM website in a signed-in browser, and consumed an exported CSV from the shared computer. Writing "the bot stores the token" would be wrong for one path and incomplete for the other two.

The verified Grok Bot team documentation gives one precise exception: hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. It also says browser cookies, signed-in sessions, files, and command-line credentials are shared across bots on the account's persistent cloud computer. "Connector" does not resolve that difference because vendors use the word for several architectures.

The useful comparison has five columns: path, token location, active identity, available verbs, and revocation point. This article builds that map without claiming every connector works the same way. Its boundary is that the bot may read and draft through an approved narrow path, but it must not connect a new account, switch tenants, send, publish, pay, delete, or write without a human.

## Start with the action path rather than the integration label

Ask how the action travels. A hosted MCP tool call goes through a hosted connection. A browser action uses the signed-in web session. A local script may read a file or command-line credential on the shared computer. A product button labeled "Connect" could establish any of these, so the label alone is not evidence.

Aya wrote one row per path that actually touched CRM data. She did not create one row called "CRM integration." This revealed that the bot could read through the hosted tool, browse through a human session, and process exports left by a separate routine.

| Path | Immediate interface | Credential evidence | First question |
|---|---|---|---|
| Hosted MCP | Named tools | Connection account and tool list | Which backend authorization is active? |
| Browser login | Vendor website | Profile, tenant, and cookie-backed session | Which account is visible now? |
| Local file | Shared computer path | File origin and access controls | Who placed the data here? |
| Command line | Program or script | Active profile or credential file | What can this identity do? |
| Unverified connector | Vendor-specific UI | Primary product documentation | Which of the above paths is it? |

Do not advance the review until every real action has a path. Unknown connector architecture remains unknown, not hosted MCP by assumption.

## Put hosted MCP sign-in tokens on Cursor's backend in the diagram

For hosted MCP, use the fact the documentation actually supplies: sign-in tokens stay with Cursor's backend and are never stored on the computer. This is a meaningful control for token-at-rest location. A sibling bot cannot find that hosted sign-in token in a browser profile or local credential file because it is not stored on the computer.

Do not inflate the fact. Backend-held does not mean read-only, tenant-correct, or harmless. The connection still authorizes an account, and its tools expose verbs. Review the connected identity and tool capabilities. A backend-held credential with a write tool can still change a production record when called.

Use [the hosted MCP token reference](/blog/grok-bot-hosted-mcp-tokens) when a questionnaire needs a concise location statement. Use [the MCP blast-radius guide](/blog/grok-bot-mcp-servers) when the decision concerns tools and permissions. This comparison keeps both dimensions visible: where authorization is held and what the resulting path permits.

Aya's row therefore said "Cursor backend" under token location and "CRM read tools" under verbs. She did not merge those answers into "secure."

## Put browser cookies and signed-in sessions on the shared computer

A browser login follows a different boundary. Verified Grok Bot documentation says browser cookies and signed-in sessions are shared across bots on the persistent computer assigned to the user account. Each bot has a separate screen, but the screen is not a separate cookie jar or security boundary.

Record the vendor hostname, visible profile email, organization label, tenant ID where available, role, and sign-out or revocation point. Test from a harmless sibling screen to confirm whether the session is already active. Do not open sensitive records during that test.

The [wrong-account response guide](/blog/grok-bot-wrong-account-signed-in) explains how to require two visible identity fields. The [one-computer explanation](/blog/grok-bot-one-computer-many-screens) explains why a newly named bot can still encounter an old login.

Browser login can be the practical path for a UI-only task. The tradeoff is account-wide computer exposure. Use a dedicated, least-privileged operator identity and sign out when the workflow ends. Deleting the bot does not remove the browser session or shared files.

## Treat connector as an unanswered architecture question

"Connector" is a product word, not a token-location guarantee. One service may call a hosted OAuth-backed tool. Another may install a browser extension. Another may ask for an API key that a local process reads. A fourth may simply deep-link into a signed-in website.

Before naming a connector in an article, charter, or review, confirm its behavior in primary documentation for the product and the current integration. Record the authorization host, token storage statement if published, scopes or verbs, account identity, and revocation location. If the documentation does not say where a token lives, write "not established" rather than selecting the location that makes the table easier.

| Connector claim | Evidence needed | Safe wording without evidence | Unsafe shortcut |
|---|---|---|---|
| Hosted token | Current primary documentation | Token location not established | "All connectors are hosted" |
| Read-only | Tool or scope list | Available verbs not verified | "It only syncs" |
| Tenant identity | Authorization screen or safe call | Connected tenant not confirmed | "Uses the bot's tenant" |
| Revocation | Product settings or provider grants | Revocation point needs verification | "Delete the bot to revoke" |

Aya used "connector" only as the UI label and added a second field for verified architecture. That kept marketing language out of the security conclusion.

## Add files and command-line credentials as a third local path

The comparison is incomplete if it stops at MCP and browser. Grok Bot documentation also says files and command-line credentials are shared across bots on the account's computer. A CSV export may carry the same customer data without any live token. A command-line profile may authorize an API even when the browser is signed out.

Inventory filenames, origin, owner, retention, and consuming routines. For command-line state, identify the program, active profile name, accessible service, and revocation owner. Do not print secret values into the inventory. [VM Overwatch](/bots/vm-overwatch) can report artifact locations with a read-only charter. [Codebase Hardening Auditor](/bots/codebase-hardening-auditor) can look for risky configuration patterns without changing them.

Local data and credentials share the same computer-level concern as browser sessions. Separate bot screens do not isolate them. Hosted MCP's backend token location is an exception for that specific sign-in token, not a blanket statement that all service access is off the computer.

This third path often explains why revoking the obvious browser session does not stop a routine.

## Compare token location and tool authority on separate axes

Security reviews often award one green score to "hosted" and one red score to "local." That loses the action boundary. A token stored off the computer can authorize broad writes. A local export can be read-only and stale. Evaluate exposure and authority separately.

| Path | Token or data location | Possible authority question | Shared-computer concern | Human gate |
|---|---|---|---|---|
| Hosted MCP | Cursor backend for sign-in token | Which tools and verbs? | Browser and files remain separate paths | Connect, write, send, revoke |
| Browser | Shared computer session | Which vendor role? | Available across sibling screens | Tenant switch and submit |
| Local API profile | Shared computer state | Which API permissions? | Credential available across bots | Command that mutates |
| Exported file | Shared computer file | Which data fields? | File available across bots | Move, upload, or import |

Choose controls from both axes. Hosted MCP can reduce local token exposure, while a narrow tool list reduces authority. A dedicated browser alias improves identity legibility, while a read-only vendor role reduces authority. Quarantine limits file propagation, while data minimization reduces what the file exposes.

No single adjective replaces this matrix.

## Write a connection charter that forces an identity and verb check

The bot should not select a path because it is convenient. Give it an allowed path, expected account identity, allowed tool verbs, output boundary, and response to mismatch.

\`\`\`yaml
job: crm-renewal-source-read
expected_tenant: Harbor Retail
preferred_path: hosted_mcp
allowed_tools:
  - read_account_summary
  - read_renewal_date
browser_fallback: forbidden
local_api_profile: forbidden
required_output:
  - observed_connection_account
  - source_record_id
  - source_updated_at
  - draft_note
boundary:
  never_without_human:
    - connect or reconnect an account
    - switch tenant
    - write CRM data
    - send a message
on_identity_mismatch: stop_and_report
on_missing_tool: stop_and_report
\`\`\`

Tool names are illustrative placeholders. Replace them only after verifying the current connection. The key decision is "browser fallback: forbidden." Without it, a missing hosted tool could push the bot into a shared browser session with a different identity.

## Choose a path by the least authority that completes the job

Start with the job's required object and verb. For a weekly memo, "read renewal date" may be enough. Do not authorize contact edits because the vendor groups both under CRM. Prefer the path whose identity, verbs, and revocation point you can verify.

| Job need | Preferred shape | Avoid | Reason |
|---|---|---|---|
| Read two CRM fields | Narrow hosted read tools | Owner browser login | Smaller verb set and no local sign-in token |
| Operate UI-only report | Least-role browser alias | Personal admin session | Visible identity and narrower role |
| Process approved snapshot | Minimized export in quarantine | Live command-line profile | No ongoing service authority |
| Change one production record | Human-reviewed exact action | Broad autonomous writer | Effect is durable and externally visible |
| Unknown connector | Pause for documentation | Guessing hosted architecture | Token and verbs are unproven |

This is a decision rule, not a universal ranking. Some jobs only exist in a browser. Some hosted tools may expose verbs you do not want. Some exports contain more data than the task needs. Pick from verified properties, then keep irreversible actions human.

## Revoke each path at the place that created it

There is no single "disconnect bot" action that proves every path is closed. Revoke a hosted connection in its connection control and, where appropriate, at the provider. End browser sessions through vendor sign-out or session controls. Remove or rotate command-line credentials through their provider and local configuration process. Quarantine or remove files according to retention policy.

Deleting a bot does not remove shared-computer browser sessions or files. It also deletes that bot's routines, which may destroy useful execution context. Preserve evidence and map revocation first.

Aya's offboarding checklist used four rows: hosted CRM connection, browser CRM session, local export directory, and command-line profile. Each had a different owner. She confirmed closure with a safe read attempt or signed-out screen rather than a checked box.

The [credential isolation guide](/blog/how-to-isolate-grok-bot-credentials) helps when local states cannot safely coexist. [The inherited-bot audit](/blog/how-to-audit-a-bot-you-inherited) helps when no current owner can explain why the paths exist.

## Diagnose path confusion from the result that contradicts the inventory

When a bot reads data after you revoked something, do not immediately reconnect it. Identify which alternate path survived.

| Symptom | Likely surviving path | Verification | Correction |
|---|---|---|---|
| Browser signed out, data still loads | Hosted tool or local export | Disable task path and inspect source IDs | Revoke or remove exact path |
| Hosted connection revoked, website opens | Shared browser session | Check visible vendor identity | Sign out or revoke session |
| New bot reads old export | Shared file | Trace filename and origin | Quarantine and set retention |
| Correct tenant in browser, wrong tool data | Hosted connection authorized elsewhere | Read connection identity | Reconnect with human review |
| "Read-only" path changes record | Verb scope misunderstood | Preserve request and record ID | Disable path and review tools |

The inventory should make these contradictions useful. Each one reveals an omitted path or incorrect claim. Update the map after fixing it.

## Answer the reviewer who says backend-held means the problem is solved

Backend-held hosted MCP tokens solve a specific problem: that sign-in token is not stored on the shared computer. This is valuable and should be stated accurately. It does not answer which tenant authorized the connection, which tools are exposed, whether a write can occur, or which browser and file paths remain active.

The reviewer may reasonably prefer hosted MCP for a supported read job. Agree on that narrow reason, then finish the control. Confirm the connection identity, allow only required verbs, forbid browser fallback, and set the human boundary before writes. Record the revocation owner.

Aya's security answer became two sentences rather than one adjective: "Hosted MCP sign-in tokens stay on Cursor's backend and are not stored on the Grok Bot computer. The authorized CRM account and exposed tool verbs are reviewed separately, while browser sessions and files remain shared-computer paths." Every clause traces to evidence or a declared operating practice.

## Walk Aya from one connector row to a complete credential map

On Monday, Aya had one questionnaire row called "CRM connector." She split it into hosted MCP, browser, and export. The hosted connection used the expected Harbor tenant and exposed two read tools. The browser showed Aya's personal multi-tenant profile. The export directory contained three older customer files.

She kept the hosted read path, signed out of the personal browser session, and quarantined the exports pending owner review. [Source Verifier](/bots/source-verifier) checked that every draft claim carried a CRM record ID. [Claim Provenance Tracker](/bots/claim-provenance-tracker) attached the observed connection identity to each run. Neither bot received permission to connect or write.

On day one, every draft was manually reviewed. On day thirty, the team sampled five records, but identity and source fields remained required. A missing hosted tool stopped the run rather than invoking the browser. The final questionnaire contained three rows with separate locations, verbs, and revocation owners. It was longer, but it described the system that actually existed.

## Verify the map by removing one path at a time

Use invented or approved test data. First disable browser access and confirm the hosted read still returns the known record with a connection identity. Then disable the hosted path and confirm the job stops rather than opening the browser. Restore the hosted path with a human, remove the local export, and confirm no file fallback occurs.

Test the wrong tenant deliberately through a safe authorization or fixture. The run should stop on identity mismatch. Test a missing tool. The run should report the missing verb rather than inventing another route. Record actual source IDs so the reviewer can tell which path answered.

This is not a penetration test. It is a routing test that can fail if the charter silently falls back. [Grok Bot fleet audit](/blog/grok-bot-fleet-audit) becomes the next step when several bots depend on the same connection map.

If you cannot disable a path safely or identify which path supplied data, do not grant a write. Observability at the source-field level is a prerequisite for authority.

## Stop the comparison when current primary documentation is missing

This page can classify verified hosted MCP, browser, file, and command-line paths. It cannot establish the architecture of every third-party product labeled connector. When primary documentation is absent or current behavior differs from the document, mark location and verbs unknown and keep the integration out of sensitive work.

It also does not claim Grok Bot reads local MCP configuration or SKILL.md. Those claims belong to Grok Build compatibility and must not be transferred to Grok Bot. Keep the product surfaces separate.

For an account that lands in the wrong vendor tenant, use [the wrong-account guide](/blog/grok-bot-wrong-account-signed-in). For several client identities on one computer, use [the shared-computer security guide](/blog/grok-bot-shared-computer-security). For approval timing around local effects, use [the local approval guide](/blog/local-computer-approvals-are-not-undo).

Keep reading: [where hosted MCP tokens live](/blog/grok-bot-hosted-mcp-tokens), [how MCP blast radius works](/blog/grok-bot-mcp-servers), and [how to isolate shared credentials](/blog/how-to-isolate-grok-bot-credentials).

## Frequently Asked Questions

### Where do hosted MCP sign-in tokens live for Grok Bot?

Verified Grok Bot team documentation says hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. Record that precise fact for the hosted path. Then separately verify which account authorized the connection, which tools and verbs are available, and who can revoke it. Backend token location does not make a broad write tool read-only, and it does not remove browser cookies, signed-in sessions, files, or command-line credentials already present on the shared computer.

### Are connectors and hosted MCP the same thing?

Do not assume so. "Connector" is used by different products for different architectures. Confirm the current integration in primary documentation and record its authorization host, token-location statement if published, active account, available verbs, and revocation point. If those facts are missing, label them unknown. A button called Connect might create a hosted authorization, rely on a browser session, accept an API key, or open another path. The product label is not enough evidence for a security or tenancy conclusion.

### Where do browser login tokens live in a Grok Bot setup?

Browser cookies and signed-in sessions are part of the persistent cloud computer shared by all bots on the user account, according to verified Grok Bot documentation. Separate bot screens do not create separate cookie stores. Confirm the visible vendor identity with at least two fields, use a least-privileged operator account, and treat the session as available across sibling bots. Sign out or revoke it through the vendor when finished. Deleting the named bot does not remove the browser session or shared-computer files.

### Which connection path should I choose for a read-only bot?

Choose the path with the least verified authority that completes the named read. A narrow hosted MCP tool can reduce local token exposure when its identity and verbs are clear. A least-role browser alias may be necessary for a UI-only job. A minimized export can avoid ongoing service authority but still exposes data on the shared computer. Forbid silent fallback, require source and identity fields, and keep connecting, tenant switching, writing, sending, publishing, paying, deleting, and revoking behind a human boundary.
`,
};
