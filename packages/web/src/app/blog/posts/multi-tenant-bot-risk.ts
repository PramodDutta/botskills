import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Multi-Tenant Risk: Named Bots Do Not Split Clients',
  description:
    'Control multi tenant grok bot risk by mapping the shared computer, separating client identities, minimizing data, and testing cross-client access.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# Multi-Tenant Risk: Named Bots Do Not Split Clients

Sana ran a small agency with bots named Atlas Client Research, Beacon Client Research, and Internal Ops. The names looked like three rooms. A harmless test from Internal Ops opened the browser and found Atlas's vendor session already signed in. The roster was organized, but the clients were not separated.

Verified Grok Bot documentation says all bots on an account share one persistent cloud computer. Each bot gets a separate screen, while browser cookies, signed-in sessions, files, and command-line credentials are shared. The documentation warns not to use separate bots as a security boundary. Multi-client work must therefore be designed at the account, credential, data, and action layers.

This article treats a tenant as a client or organization whose data and credentials must not drift into another client's work. The operating boundary is strict: a bot may read minimized, approved inputs and draft into a client-labeled quarantine, but it may not switch tenants, connect accounts, send, publish, pay, delete, or write to a client system without a human who confirms identity and destination.

## Replace the bot roster with a computer-level client map

Start one level above the bot names. Draw the Grok Bot user account, its assigned computer, every sibling bot, browser identities, hosted connections, shared files, command-line profiles, routines, and client data sources. Put each client beside every path that can reach it.

Sana's initial inventory had three bots. Her useful inventory had one computer, five vendor sessions, two hosted connections, four export directories, and nine routines. Atlas and Beacon appeared in more than one path. Internal Ops touched the same file directory as both.

| Inventory object | Record | Multi-tenant question | Bad assumption |
|---|---|---|---|
| User account | Owner and eligible membership | Which computer does it control? | One computer per bot |
| Bot screen | Job and charter | Which shared state can it encounter? | Screen equals tenant |
| Browser session | Vendor, profile, tenant | Which siblings can open it? | Tab belongs to bot |
| Hosted connection | Account and verbs | Which client authorized it? | Backend means client-safe |
| File path | Client, origin, retention | Which siblings can read it? | Folder name enforces access |
| Routine | Trigger and output | Which client identity is assumed? | Bot name supplies identity |

Do not discuss isolation until this map exists. Otherwise people compare labels while credentials remain invisible.

## Treat each named bot as a work queue, not a client boundary

A name helps assign instructions and keep screens legible. It does not partition cookies, files, or command-line credentials. Renaming "Research" to "Atlas Only" improves human intent but changes no technical boundary.

Keep names because operational clarity matters. Add a client identity card to every run and a charter that stops on mismatch. The card should identify expected tenant, operator alias, approved input location, output quarantine, and forbidden verbs. The name routes the work; the card verifies where it landed.

The [one computer, many screens article](/blog/grok-bot-one-computer-many-screens) explains the architecture. The [shared-computer security guide](/blog/grok-bot-shared-computer-security) shows the broader credential consequences. This page applies those facts to agencies, consultants, outsourced operators, and internal teams serving legally or commercially separate clients.

Sana kept three bot names after the audit. She stopped describing them as separate environments.

## Rank client combinations by the worst credential they would share

Do not ask whether the average job is harmless. Ask what the most sensitive active credential or file on the computer could expose. A public research bot sharing with a read-only marketing export differs from one sharing with a client admin console or command-line production credential.

| Shared combination | Worst shared state | Risk reading | Recommended move |
|---|---|---|---|
| Public research plus public sources | No client credential | Low client crossover | Keep inputs labeled and minimized |
| Two client read-only exports | Client data files | Cross-client disclosure | Separate storage process or account boundary |
| Client browser sessions | Cookies and active tenant roles | Sibling can encounter signed-in UI | Avoid coexistence or use dedicated least roles briefly |
| Production command-line profile plus any sibling | Broad credential | Computer-wide credential exposure | Move production identity elsewhere |
| Hosted read tool plus client browser | Backend token plus local cookie | Two independent paths | Review each identity and verb |

This is a prioritization table, not a promise that the first row has zero risk. It tells Sana where a bot name is most dangerously misleading.

## Prove active tenant identity before every client data read

Require two independent identity fields at the start of a run. Useful choices include organization label, profile alias, tenant ID, and tenant-specific hostname. The fields must be observed from the current path, not copied from the prompt.

If the task uses hosted MCP, record the connection account and a safe source identifier. If it uses the browser, transcribe the visible organization and profile. If it uses an export, record client label, source system, export time, and file hash. Stop on mismatch or missing evidence.

The [wrong-account incident guide](/blog/grok-bot-wrong-account-signed-in) gives a full response when a valid session belongs to the wrong client. [Claim Provenance Tracker](/bots/claim-provenance-tracker) can attach identity and sources to each draft. It remains a recorder within the same computer, not a new isolation wall.

Sana required Atlas's organization label and dedicated operator alias. A generic agency email that could switch between clients was not accepted as the second field.

## Separate hosted MCP authorization from shared browser sessions

Verified documentation says hosted MCP sign-in tokens remain on Cursor's backend and are never stored on the Grok Bot computer. Browser cookies and signed-in sessions remain on the shared computer. These paths need separate rows in the client map.

Hosted token location can reduce one local exposure, but you must still verify which client authorized the connection and which tools and verbs it exposes. A broad write tool remains broad. A browser role can remain active even after a hosted connection is revoked.

[MCP versus connectors](/blog/mcp-vs-connectors) gives the five-column comparison. [The hosted MCP token reference](/blog/grok-bot-hosted-mcp-tokens) provides the precise location fact. Do not call every vendor "connector" hosted MCP without current primary documentation.

Sana used a narrow hosted read connection for Atlas and removed the Atlas browser login after the pilot. Beacon had no verified hosted path, so its work used minimized exports and human-controlled uploads. Different clients can require different architectures. Consistency is less important than a proven boundary.

## Minimize client data before it reaches the shared computer

If a bot only needs product name, renewal date, and three recent support themes, do not provide contact lists, billing details, private attachments, and administrator notes. Create a client-labeled input packet outside the bot environment, remove irrelevant fields, and place it in a quarantine path for the run.

Data minimization limits what a wrong client context can expose. It also makes fixture testing easier because the schema is small enough to review. Record the packet owner, client, source time, fields included, fields removed, and retention date.

[Source Verifier](/bots/source-verifier) can reject claims without packet sources. [Citation Checker](/bots/citation-checker) can check that report links remain within the approved source set. Neither should browse another client to fill a gap. Missing evidence becomes an escalation.

The best credential isolation cannot make unnecessary copied data disappear. Treat every export as a new client artifact with its own retention and destination, not a convenient substitute for access design.

## Write one client charter that refuses every other tenant

A multi-tenant charter must name the expected client, allowed inputs, allowed output location, identity fields, and response to mismatch. Avoid "work only on Atlas" without a verification method.

\`\`\`yaml
job: atlas-weekly-research-draft
expected_client: Atlas
expected_identity:
  organization_label: Atlas Workspace
  operator_alias: research-operator@atlas.example
allowed_inputs:
  - /quarantine/atlas/approved-sources.csv
allowed_outputs:
  - /quarantine/atlas/weekly-draft.md
required_output_fields:
  - observed_organization
  - observed_operator_alias
  - source_url
  - captured_at
boundary:
  never_without_human:
    - switch organization
    - open Beacon or internal files
    - connect or reconnect an account
    - send, publish, pay, delete, or write
on_identity_mismatch: stop_and_report
on_cross_client_reference: stop_and_report
\`\`\`

The example alias and workspace are invented. Replace them with your own visible identifiers. Do not place passwords or recovery codes in the charter.

## Keep client routines from sharing ambiguous triggers and destinations

A routine belongs to one bot, with a maximum of 50 routines per bot, and Grok Bot keeps the 20 most recent run records per routine. Those product limits do not create tenancy. A routine can still read a shared file or encounter a shared session.

Name every routine with client, input, action, and output. Record its trigger identity and destination. Avoid one watched folder that receives all client exports. Avoid one generic draft directory that a later process publishes. If a trigger cannot prove which client created an event, do not route it by a guessed company name inside free text.

| Routine field | Atlas value | Cross-client failure | Required response |
|---|---|---|---|
| Trigger | Atlas approved packet | Generic new-file event | Reject unlabeled file |
| Input path | /quarantine/atlas | Beacon file appears | Stop and quarantine |
| Identity | Two Atlas fields | Generic agency profile | Stop before data read |
| Output path | Atlas draft directory | Shared publish folder | Keep draft isolated operationally |
| Owner | Sana | Departed contractor | Pause routine |
| Boundary | No send or write | "Ask if unsure" | Replace with exact verbs |

Operational labels help catch mistakes even though they are not security partitions.

## Test cross-client access from a harmless sibling screen

Create a throwaway, read-only test task on the same account. Navigate to each sensitive vendor landing page without opening records. Observe whether a client session is active. List client-labeled file paths without reading their contents. Record the result and stop.

This test is expected to reveal shared state where it exists. A failure means the team believed a name separated something the shared computer does not. Do not "fix" the test by renaming the sibling. Remove or narrow the credential, move the client to a different account boundary, or keep the data off the computer.

[VM Overwatch](/bots/vm-overwatch) can inventory artifacts under a charter that forbids opening content or deleting files. The test should report path, visible identity, and owner. It should never switch tenants to see what else is available.

Repeat after offboarding a client. Deleting its named bot does not remove shared browser sessions or files, so a sibling test is necessary to verify cleanup actions at the actual credential and file locations.

## Choose isolation strength from four explicit options

There is no hidden setting that turns named bots into client sandboxes. Pick a design and state its limit.

| Option | Separation gained | Remaining exposure | Use when |
|---|---|---|---|
| One shared account, minimized public inputs | Less sensitive data present | Shared files and sessions still possible | Work uses no client credential |
| One shared account, narrow hosted reads | Hosted sign-in token off computer | Tool authority and other local paths remain | Client and verbs are verified |
| Separate eligible user account | Separate assigned computer | Human administration and subscription needs | Client credentials cannot coexist |
| Keep job outside Grok Bot | No Grok Bot computer exposure | Manual or other-system cost | Boundary cannot be made acceptable |

The verified credential isolation guide expands these choices. Use [how to isolate Grok Bot credentials](/blog/how-to-isolate-grok-bot-credentials) before purchasing or provisioning because eligibility and pricing can change.

Sana moved the client with a production command-line credential off the shared account. She kept public-source research together with no client logins. The decision followed the worst credential, not the number of bots.

## Diagnose client leakage by the object that crossed the boundary

When evidence from one client appears in another output, identify the crossing object before changing prompts.

| Symptom | Crossing object | Confirmation | Correction |
|---|---|---|---|
| Wrong vendor data | Browser session or hosted connection | Identity fields and source ID | Revoke or reconnect correct path |
| Wrong client quote | Shared file or source packet | File hash and path | Quarantine and rebuild packet |
| Internal note in client brief | Generic output directory | Trace writer and watcher | Separate destinations and one publisher |
| Deleted bot's account still opens | Shared browser session | Sibling landing-page test | Sign out or revoke vendor session |
| Correct client, unauthorized write | Tool or browser role too broad | Preserve request and target ID | Disable write and recover |
| Two clients receive same draft | Downstream effect owner ambiguous | Recipient and source IDs | Stop send path and investigate |

A prompt correction helps only after the credential, file, or routing cause is contained. Otherwise the next bot can encounter the same object.

## Answer the agency owner who says named bots are how the product is organized

They are, and that organization is useful. Separate names and screens reduce operator confusion and let each charter focus on one job. The mistake is upgrading organization into isolation.

Verified documentation draws the boundary clearly: the computer belongs to the user account, bot screens are separate work surfaces, and cookies, sessions, files, and command-line credentials are shared. It explicitly warns against treating separate bots as a security boundary.

Keep Atlas and Beacon as named bots if their jobs benefit from separate instructions. Add the computer-level map, identity cards, minimized inputs, narrow credentials, output quarantine, and sibling test. Where client obligations require true credential separation, use a separate eligible account or keep the job outside this environment. The product's organizational unit and your tenancy unit do not have to be the same object.

## Walk Sana from three tidy names to a defensible client design

On Monday, Sana listed three bots and assumed three client spaces. The computer map found five browser sessions, two hosted connections, four export paths, and one command-line production profile. A sibling screen opened Atlas's vendor landing page and listed Beacon's export directory.

She paused nine routines, preserved their names and recent evidence, and removed generic watched folders. Atlas moved to a narrow hosted read path with verified identity. Beacon used a minimized weekly export. The production command-line client moved to a separate boundary. Internal Ops lost access to all client input directories.

For two weeks, every client draft included identity and source fields. Sana reviewed all outputs. By day thirty, she sampled five per client but kept cross-client fixtures in every charter test. [Fleet Chief of Staff](/bots/fleet-chief-of-staff) coordinated status only from sanitized run cards; it did not browse client systems. [Stuck Bot Foreman](/bots/stuck-bot-foreman) reported stalled routines without receiving client credentials.

The names remained. The claim that names provided separation did not.

## Verify isolation with a planted cross-client canary

Create one invented marker per client, such as ATLAS-CANARY-41 and BEACON-CANARY-73. Put each only in that client's sanitized fixture set, not in production customer data. Run each charter and confirm its output contains only the expected marker. Then give the Atlas charter a Beacon-labeled input and require it to stop before reading content.

Repeat the sibling landing-page and file-path tests. Verify signed-out vendors remain signed out, retired files are absent according to policy, and hosted connections report the expected client identity. Record charter version, operator, time, and result.

The test fails if the wrong marker appears, a bot accepts an unlabeled packet, a sibling encounters a client session you claimed was removed, or a missing source triggers browsing into another client. A canary is evidence of routing behavior, not a security feature.

Use [the inherited-bot audit](/blog/how-to-audit-a-bot-you-inherited) when the owner of a failing path is unknown.

## Stop multi-client operation when obligations require a boundary you cannot prove

Some contracts, regulations, or security commitments require stronger separation than minimized data and operating rules on one shared computer. This page does not interpret those obligations. Have the responsible legal or security owner decide whether a separate eligible account is sufficient or whether the job must remain outside Grok Bot.

Stop as well when the vendor cannot show active tenant identity, credentials are broader than the job, client data cannot be minimized, or no person owns desktop testing and incident response. A prettier roster cannot compensate.

For contractor access, continue with [hand a contractor the charter, never the login](/blog/hand-a-contractor-the-charter-not-the-login). For a current wrong-tenant event, follow [the wrong-account response](/blog/grok-bot-wrong-account-signed-in). For a full roster review, use [the Grok Bot fleet audit](/blog/grok-bot-fleet-audit).

Keep reading: [understand shared computer security](/blog/grok-bot-shared-computer-security), [isolate credentials](/blog/how-to-isolate-grok-bot-credentials), and [map MCP, connectors, and browser login](/blog/mcp-vs-connectors).

## Frequently Asked Questions

### Do separate named Grok Bots isolate different clients?

No. Verified Grok Bot documentation says all bots on an account share one persistent cloud computer. Each bot has a separate screen, but browser cookies, signed-in sessions, files, and command-line credentials are shared. The docs explicitly warn against using separate bots as a security boundary. Names remain useful for routing jobs and charters. For client separation, map the computer-level state, verify tenant identity per run, minimize data, narrow credentials, quarantine outputs, and move incompatible credentials to a separate eligible account or outside the environment.

### Can hosted MCP make a multi-client setup safe on one account?

Hosted MCP can reduce one local exposure because verified documentation says its sign-in tokens remain with Cursor's backend and are never stored on the computer. You must still verify which client authorized each connection, which tools and verbs it exposes, and who can revoke it. Browser sessions, files, and command-line credentials remain separate shared-computer paths. A narrow hosted read tool may fit one client, but it does not turn bot screens into tenants or make broad writes safe. Evaluate each path and client independently.

### How should an agency test for cross-client leakage?

Use sanitized fixtures with one invented marker per client, require identity and source fields, and test that each charter rejects another client's labeled input. From a harmless sibling screen, check whether sensitive vendor landing pages are already signed in and whether client file paths are visible, without opening records. Repeat after offboarding. Record exact charter version, operator, time, and results. The test should fail if a wrong marker appears, a packet lacks identity, or a supposedly removed session remains. Do not plant canaries in real customer data.

### When should clients use separate Grok Bot accounts?

Use a separate eligible account when the worst credentials or data for two clients cannot safely coexist on one shared computer, and when the responsible security or legal owner accepts that design. Production command-line credentials, broad admin browser sessions, and sensitive client files are strong reasons to separate or keep the job outside Grok Bot. Confirm current eligibility and pricing before provisioning. A separate named bot is not the substitute. Where no client credential is needed, minimized public inputs and strict output boundaries may support a shared account.
`,
};
