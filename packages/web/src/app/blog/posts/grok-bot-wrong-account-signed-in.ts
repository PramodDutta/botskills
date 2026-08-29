import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Bot Is Signed Into the Wrong Vendor Account',
  description:
    'Fix a grok bot wrong account incident by proving the active vendor identity, containing shared sessions, and reconnecting the least privileged login.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# The Bot Is Signed Into the Wrong Vendor Account

Nila asked a research bot to collect twelve competitor prices on Friday afternoon. The browser opened the right vendor, the page loaded, and the export succeeded. The problem appeared in the first row: the workspace name belonged to a former client. Nothing had failed loudly. The bot had used a valid session for the wrong account.

That is the dangerous shape of a grok bot wrong account incident. A broken login stops work. A plausible login lets bad work continue. The fix starts by treating displayed identity as evidence, not by renaming the bot or repeating the prompt.

Grok Bot documentation says every bot on one account shares one persistent cloud computer. Each bot has a separate screen, but browser cookies, signed-in sessions, files, and command-line credentials remain shared. A clean screen is therefore not a clean identity. The boundary for this incident is simple: the bot may inspect and draft, but it must not send, publish, purchase, delete, or write back until a person confirms the vendor account in the final action screen.

## Freeze the job before the valid session creates more valid-looking damage

Pause the affected routine or stop assigning new work to that bot. Do not begin by signing out at random. First preserve a small incident packet: the bot name, the task wording, the vendor hostname, the visible account label, the expected account label, the first wrong output, and the time you noticed it. This packet lets you distinguish an identity failure from a bad source selection later.

Ask Nila to mark every output from the suspect run as quarantined. Twelve rows are easier to review than a month of CRM changes. If the bot had permission to send or write, disable that downstream path before investigating. An approval can control a proposed action, but it cannot reverse completed work. Containment must happen before explanation.

Use this first-response order:

| Order | Action | Evidence retained | Action still forbidden |
|---|---|---|---|
| 1 | Pause the routine | Run time and task text | Any new run |
| 2 | Quarantine outputs | Files, drafts, and URLs | Import or send |
| 3 | Record visible identity | Workspace label and profile email | Account switching |
| 4 | List sibling bots | Shared-computer roster | Assuming one bot caused it |
| 5 | Reconnect deliberately | Human-confirmed account | Immediate production restart |

The point is not ceremony. It is to keep a wrong but authorized identity from producing more work while you still have a readable trail.

## Read the vendor header as a credential check, not decorative chrome

Before any useful action, make the bot open the vendor's account menu and report what it can see. Useful fields include the signed-in email, organization name, workspace ID, billing entity, and tenant-specific hostname. Pick two independent fields. A logo alone is weak evidence because two tenants may use the same branding.

Write the expected identity beside the observed identity. Do not ask, "Are you in Acme?" A bot can answer from the task context. Ask it to transcribe visible values from named screen locations and attach the page URL. The human then compares those values with the run card.

Nila's check used the organization label and the profile email. The organization label said Northwind Archive. The profile email was her agency alias. The expected values were Harbor Retail and a dedicated Harbor operator alias. That mismatch stopped the run before the export entered a customer folder.

For a recurring job, make identity proof the first output field. A run that cannot fill it should fail closed. The extra fifteen seconds are cheaper than deciding which of twelve polished rows came from the wrong tenant.

## Trace the wrong account to the shared computer, not to the bot name

A bot name is an instruction label. It is not a cookie container. Grok Bot gives each bot a screen on a computer assigned to the user account. The computer, including browser sessions, is shared by all bots on that account. That documented architecture explains how a vendor login established for one job can be available during another job.

The distinction matters during diagnosis. Renaming "Harbor Research" to "Harbor Only Research" changes no session. Deleting and rebuilding it does not remove browser sessions or shared-computer files. Opening a fresh screen changes the work surface, not the credential boundary.

Map the objects correctly:

| Object | What it separates | What it does not separate | Incident meaning |
|---|---|---|---|
| Bot name | Instructions and assignment | Cookies or files | Useful label only |
| Bot screen | Visible work surface | Signed-in browser state | Can look clean while identity is shared |
| User account | Assigned cloud computer | Tenants inside one vendor login | Stronger boundary than a bot name |
| Hosted MCP connection | Tool authorization held on Cursor's backend | Browser cookies already on the computer | Review tool scope separately |
| Vendor tenant | Customer data and roles | Another tenant selected by the same human login | Confirm on every run |

The nearby guide to [one computer and many screens](/blog/grok-bot-one-computer-many-screens) explains the architecture in detail. For this incident, keep the conclusion narrow: the wrong account can be a shared-session problem even when the bot itself was newly created.

## Separate browser identity from hosted MCP identity before reconnecting either

Do not use "connector" as a catch-all. A browser session and a hosted MCP sign-in have different token locations. The verified Grok Bot team documentation says hosted MCP sign-in tokens remain on Cursor's backend and are never stored on the computer. Browser cookies remain part of the shared computer state.

Inventory the path that actually performed the action. If the bot clicked through a web interface, inspect the browser identity. If it called a hosted MCP tool, inspect that connection's authorized account and verbs. If the task used both, record both. Signing out of the browser does not prove the hosted connection changed, and revoking a hosted connection does not clear an already signed-in web session.

The [hosted MCP token location reference](/blog/grok-bot-hosted-mcp-tokens) covers the backend-held case. The [Grok Bot MCP blast-radius guide](/blog/grok-bot-mcp-servers) covers tool verbs. This page concerns the operational fork: establish which path supplied the identity before touching credentials. Otherwise Nila may reconnect Harbor in the browser while the routine continues to call a Northwind-authorized tool.

## Build an identity card that the bot can compare before every run

Create a small run card outside the vendor session. It should name the expected tenant without storing a password or recovery code. Include fields a reviewer can see in the product UI, plus the allowed task and boundary. Keep one card per vendor account, not one vague card per bot.

Nila used this charter for the research job:

\`\`\`yaml
job: harbor-competitor-price-read
expected_vendor_host: portal.example.test
expected_organization_label: Harbor Retail
expected_profile_alias: research-operator@harbor.example
allowed_actions:
  - open public competitor pages
  - read Harbor Retail reference lists
  - draft a CSV in quarantine
boundary:
  never_without_human:
    - import the CSV
    - send a message
    - switch vendor organizations
identity_check:
  require_two_visible_fields: true
  on_mismatch: stop_and_report
output_fields:
  - observed_organization_label
  - observed_profile_alias
  - source_url
  - draft_file
\`\`\`

The sample domains are intentionally non-production. Replace them with visible labels from your own tenant. Do not put the vendor password into the charter. The charter describes what identity must be visible; the login remains in its proper authentication path.

## Choose the recovery move from the identity failure you can actually prove

One symptom can have several causes. A stale cookie, an account switcher, a shared human email, and a wrongly authorized hosted tool can all produce an apparently successful run. Pick the recovery that corresponds to observed evidence.

| Symptom | Likely cause | Confirm with | Recovery |
|---|---|---|---|
| Wrong organization label in browser | Existing browser session or account switcher | Profile menu plus tenant URL | Sign out, then sign in to the dedicated alias |
| Right email, wrong tenant | One identity belongs to several tenants | Organization selector | Select tenant with a human and record its ID |
| Browser is right, tool result is wrong | Hosted connection authorized elsewhere | Connection account and tool response | Revoke and reconnect that hosted connection |
| New bot opens old account | Shared browser state | Sibling bot opens same vendor | Treat the computer as shared and clear deliberately |
| Deleted bot's login remains | Deletion did not clear computer state | Open vendor from another bot | Sign out or revoke at the vendor |
| Identity fields are hidden | Vendor UI cannot prove tenant | Tenant-specific URL or safe read call | Stop until a reliable marker exists |

Do not convert "likely cause" into certainty. The table is a routing device. The confirmation column supplies the evidence needed before changing anything.

## Reconnect with a dedicated operator alias and the smallest vendor role

When the browser path is at fault, sign out from the vendor deliberately. Confirm the signed-out page, then sign in with an alias dedicated to the account and job. A dedicated alias makes the visible identity legible. It does not create a separate computer or protect the login from sibling bots, so keep the role narrow.

Avoid a personal owner login. Give the operator only the vendor permissions the task needs. Research may need read access to lists and exports, not billing, team management, publishing, or deletion. If the vendor supports tenant-specific URLs, save the correct one in the run card and reject a redirect to a generic dashboard.

After reconnecting, repeat the two-field identity check before running real work. Then open one low-risk record whose expected value is already known. Nila opened a Harbor test campaign with a recorded title and read its status. She did not export, edit, or send. That single read proved the tenant and role without creating a second incident.

If separate customer credentials cannot coexist safely on the shared computer, follow [the credential isolation guide](/blog/how-to-isolate-grok-bot-credentials) instead of relying on aliases alone.

## Test a sibling screen because the incident boundary is account-wide

Recovery is incomplete if you test only the named bot. Open a harmless sibling bot on the same Grok Bot account and navigate to the vendor hostname. Do not ask it to modify anything. Observe whether the Harbor session is already available. If it is, record that fact in the operating note: the session is roster-wide on that computer even though the task assignment remains bot-specific.

This test should be expected to expose shared browser state. Its purpose is not to make the architecture fail. Its purpose is to prevent the team from pretending the new login belongs only to Harbor Research. With that evidence, you can decide whether the role is safe for every sibling bot on the computer to encounter.

Use [VM Overwatch](/bots/vm-overwatch) to inventory shared-computer artifacts without granting it permission to delete them. Use [Claim Provenance Tracker](/bots/claim-provenance-tracker) to attach an identity field and URL to every output claim. Neither bot becomes a security boundary. They are useful readers and recorders operating inside the same documented computer boundary.

## Keep customer data out of the wrong-account investigation packet

An incident packet needs enough evidence to reproduce the identity mismatch, not a copy of every exposed record. Capture labels, IDs, timestamps, URLs, and action names. Redact customer content unless it is essential to determine impact. Store exports from the suspect run in a quarantine location that downstream automations do not watch.

Split evidence into three groups. Identity evidence proves which account was active. Action evidence shows what the bot read or attempted. Impact evidence lists outputs that left the computer or changed a system. This separation stops a screenshot of the wrong workspace from being treated as proof that every record was opened.

[Source Verifier](/bots/source-verifier) can check whether each quarantined row has a URL from the expected tenant. [Citation Checker](/bots/citation-checker) can reject a brief whose links point outside the allowed source set. Their job is to shrink the review queue, not declare that no exposure occurred. A human owns the impact decision, especially where sends, publishes, purchases, or deletes may have completed.

## Answer the operator who says the prompt already named the right client

The strongest objection is reasonable: the task said "Harbor Retail" five times, so surely the bot knew which account to use. That argument confuses semantic intent with authenticated state. The prompt names the destination. The vendor session decides which data and controls are actually available.

A bot can follow the requested procedure inside the wrong authenticated tenant. The resulting output may look more convincing because every click succeeded. Adding the client name to more sentences does not change a cookie, an organization selector, or a hosted connection authorization.

Keep the client name in the charter because it improves task clarity. Add visible identity fields because they test execution state. Those controls complement each other. The name says what Nila intends; the profile email and organization label show where the bot landed. Only the combination should release the run.

This is also why a bot title such as "Harbor Only" is not sufficient. Titles organize the roster. They do not split credentials.

## Walk Nila from the first wrong row to a clean production restart

At 14:10, Nila paused the Friday routine and moved its twelve-row CSV to quarantine. At 14:18, she recorded the Northwind organization label and agency profile email. At 14:25, a sibling screen opened the same account without a new login, confirming shared browser state. She then signed out, authenticated with the Harbor operator alias, and recorded the Harbor tenant ID.

At 14:42, Nila ran a one-record read against a test campaign. The identity card matched on organization label and profile alias. [Bookkeeping Auditor](/bots/bookkeeping-auditor) was not involved because this was not a financial reconciliation job, and that explicit exclusion prevented the team from widening access during recovery.

On Monday, the routine ran in draft-only mode. The output included four fields: observed tenant, observed alias, source URL, and draft file. A person compared two rows with the vendor UI and released the file. After five clean runs, the manual review sampled two rows rather than all twelve, but the identity check remained mandatory. Day thirty still began with the same two visible fields. Trust changed the sample size, not the boundary.

## Verify the repair with a test that is allowed to fail

A useful verification can produce a red result. Create a throwaway run card with an intentionally wrong expected organization label. Start a read-only task. The bot should stop before opening tenant data and report both the expected and observed values. If it silently "fixes" the card, switches organizations, or continues because the email looks familiar, the control has failed.

Then test the correct card. Require one known record, the two visible identity fields, and the tenant-specific URL. Compare the output with the screen. Record pass or fail, reviewer, and time. Do not call a successful export proof of identity; exports can succeed from the wrong account.

| Verification | Passing result | Failing result | Response |
|---|---|---|---|
| Wrong-label card | Stops before data access | Continues or switches tenant | Tighten stop rule |
| Correct-label card | Two fields and URL match | Any mismatch or missing field | Keep routine paused |
| Sibling-screen check | Shared session is documented | Team assumes isolation | Update roster note |
| Known-record read | Expected value, no write | Edit, send, or unrelated data | Revoke role and investigate |
| Quarantine review | No downstream watcher consumed file | Import already ran | Start impact response |

The repair is complete only when the negative test stops and the positive test reads correctly.

## Retire the setup when tenant proof cannot be made reliable

Some vendor products hide the active tenant, reuse one hostname, and give a single human login access to many customers. If you cannot identify the account with two stable visible fields or a safe read call, this procedure reaches its limit. Do not compensate with a longer prompt.

Move the job to a dedicated account boundary, use a hosted connection with an appropriately narrow authorization, or return the action to a person. The right choice depends on the most sensitive credential that would remain on the shared computer. The [shared computer security guide](/blog/grok-bot-shared-computer-security) lays out that boundary, while [the fleet audit](/blog/grok-bot-fleet-audit) helps find every sibling that may encounter the session.

This page also stops before subscription login failures. If Grok Bot itself cannot authenticate, use [the login failure guide](/blog/grok-bot-login-failed). A vendor wrong-account incident starts after Grok Bot is working and the downstream identity is wrong. Mixing those diagnoses wastes the evidence you just collected.

Keep reading: [why bot names do not isolate a shared computer](/blog/grok-bot-one-computer-many-screens), [how to isolate credentials](/blog/how-to-isolate-grok-bot-credentials), and [where hosted MCP tokens live](/blog/grok-bot-hosted-mcp-tokens).

## Frequently Asked Questions

### Why can a new Grok Bot already be signed into an old vendor account?

All bots on one Grok Bot account share one persistent cloud computer. Their screens are separate work surfaces, but browser cookies, signed-in sessions, files, and command-line credentials are shared. A new bot can therefore open a vendor site and encounter a session established by an older sibling bot. Creating or renaming the bot does not clear that state. Confirm the visible organization and profile identity before data access, and treat the browser role as available to every bot on that computer.

### Does deleting the affected bot remove the wrong vendor login?

No. The verified Grok Bot security documentation says deleting a bot does not remove shared-computer files or browser sessions. Delete only when the bot assignment itself should disappear. To close vendor access, sign out of the browser session, revoke the vendor session where appropriate, and separately revoke any hosted connection that used the wrong account. Then test from a sibling screen. A deletion dialog is not evidence that a cookie, file, or command-line credential has left the shared computer.

### How many identity fields should a bot check before a vendor task?

Use at least two independent visible fields for a multi-account vendor, such as organization label plus profile email, or tenant ID plus tenant-specific hostname. Two is an operating choice, not a Grok Bot product limit. It reduces the chance that shared branding or a generic email creates a false match. The bot should transcribe the observed fields and stop on any mismatch. A human should approve organization switching because changing tenants can expose a different customer's data even before a write occurs.

### Is hosted MCP automatically safer than a browser login for this problem?

Hosted MCP changes where its sign-in token lives: verified documentation says the token stays on Cursor's backend rather than on the computer. That removes one kind of local token exposure, but it does not make every tool or authorization narrow. Check which account authorized the connection and which verbs its tools can perform. Browser cookies already on the shared computer also remain a separate concern. Choose the path whose identity and permissions you can prove, then keep send, publish, purchase, delete, and write actions behind a human boundary.
`,
};
