import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Audit a Bot You Inherited Before You Widen Its Grants',
  description:
    'Use this audit inherited grok bot procedure to reconstruct its charter, shared credentials, routines, and boundaries before granting broader access.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Audit a Bot You Inherited Before You Widen Its Grants

Priya inherited a bot called Revenue Helper after its owner left. The charter said it prepared renewal notes. The browser was signed into a CRM, a mailbox tab was open, three routines had similar names, and the latest draft contained a customer quote with no source. Her first request was to add write access so the bot could "finish the job."

That is precisely when an inherited bot should stop. You do not yet know which instruction is current, which credentials belong to the job, which actions already occur, or which boundary the former owner enforced by habit rather than text. Wider grants would turn missing context into production authority.

This procedure audits one inherited bot as a small system. It reconstructs purpose, inputs, shared-computer state, connections, routines, outputs, approvals, and ownership. The boundary during the audit is fixed: the bot may read supplied evidence and draft a report, but it may not connect, disconnect, send, publish, delete, pay, switch tenants, edit a source system, or change its own routines.

## Quarantine the inherited bot before asking it to explain itself

Pause scheduled work and withhold new tasks. Do not begin with "What can you do?" The bot can summarize its instructions, but that answer is not proof of actual credentials, routine schedules, or completed actions. Preserve the current state first.

Record the bot name, visible charter, owner, handoff date, routine names, most recent outputs, open vendor tabs, connected tool labels, and shared files that appear relevant. Take text notes rather than collecting customer data indiscriminately. Mark each observation with a source and time.

| First hour action | Purpose | Evidence | Forbidden change |
|---|---|---|---|
| Pause routines | Stop new effects | Routine names and state | Editing schedules |
| Copy charter | Preserve claimed behavior | Versioned text | Rewriting boundaries |
| List visible identities | Find active accounts | Tenant and profile labels | Switching tenants |
| Quarantine outputs | Prevent downstream use | Filenames and destinations | Importing drafts |
| Name interim owner | Create accountability | Handoff record | Delegating approval to bot |

Priya set herself as interim owner and put the three renewal routines on hold. She did not delete anything. Deletion would remove the bot's routines, while shared browser sessions and computer files could remain, destroying useful scheduling evidence without clearing the larger environment.

## Rewrite the inherited purpose as one input and one output

"Revenue Helper" is not a job definition. Turn the claimed purpose into a single sentence that names the input, transformation, and output. Priya wrote: "Given an exported renewal list and approved account notes, draft a renewal-risk memo with sources." That sentence excluded CRM writes and customer contact without pretending the existing setup already honored those limits.

Compare the purpose against observed outputs. If the bot produces email drafts, spreadsheet edits, and meeting agendas, either its purpose is broader than stated or several jobs have accumulated under one name. Do not widen grants until you can say which job you are auditing.

Use [What Did We Promise](/bots/what-did-we-promise) for a narrow evidence extraction pattern and [Account Health Ranker](/bots/account-health-ranker) for scored read-only output. They show how a useful deliverable can stop before customer action. The goal is not to replace the inherited bot immediately. It is to create a reference sentence against which every existing input, connection, and routine can be judged.

If no one can agree on that sentence, keep the bot paused. Grant discussions have no stable subject yet.

## Mark every audit statement as observed, documented, inferred, or unknown

An inherited system invites confident folklore. A teammate says the mailbox is read-only. The charter says "never send." A browser tab shows a compose button. These are different evidence types and should not collapse into one green check.

Use four labels. Observed means you saw the current state. Documented means a charter or handoff note says it. Inferred means you reasoned from indirect evidence. Unknown means no reliable source exists. Only observed capability and verified product documentation should support a grant decision.

| Claim | Evidence label | Example | Audit treatment |
|---|---|---|---|
| Bot drafts renewal memo | Observed | Latest quarantined file | Test on fixtures |
| Bot never sends | Documented | Charter sentence | Challenge with safe probe |
| Mailbox role is read-only | Inferred | No sent message found | Verify account permissions |
| Routine owner approved schedule | Unknown | Owner departed | Assign a new owner |
| Browser identity is customer-safe | Unknown | Generic profile icon | Confirm tenant and alias |

This vocabulary prevents absence of evidence from becoming a permission. Priya's missing sent message did not prove the bot could not send. It only meant she had not observed a send.

## Map the shared computer before attributing credentials to one bot

Verified Grok Bot documentation says all bots on an account share one persistent cloud computer. Each has its own screen, but browser cookies, signed-in sessions, files, and command-line credentials are shared. The inherited bot's open CRM does not prove its former owner connected the CRM specifically for that bot.

List sibling bots and the sensitive services visible from a harmless sibling screen. Do not open customer records during discovery. Record whether a vendor presents a signed-in landing page, which organization label is visible, and whether a local credential file name exists. Treat every discovered credential as computer-level exposure until proven otherwise.

The [one computer, many screens guide](/blog/grok-bot-one-computer-many-screens) explains why a screen cannot serve as a security boundary. The [credential isolation procedure](/blog/how-to-isolate-grok-bot-credentials) provides remediation options when two jobs cannot safely encounter the same login.

Priya found that the CRM session also opened from a content bot's screen. That changed the audit finding from "Revenue Helper has CRM" to "this account's shared computer has a CRM session." The wording leads to a different remediation and prevents a bot rename from masquerading as access removal.

## Inventory hosted connections separately from browser and command-line state

Create three credential columns: hosted MCP, browser session, and computer file or command-line credential. The verified team documentation states that hosted MCP sign-in tokens stay on Cursor's backend and are not stored on the computer. That does not make their authorized account or available verbs irrelevant. It only changes token location.

For each connection, record service, visible account, allowed objects, allowed verbs, last known need, and revocation owner. Do not write "connected" as the whole finding. A tool that reads contacts and a tool that can update them have different grant implications.

Priya found a hosted connection labeled CRM, a browser CRM session, and an export file in shared storage. They were three paths to related data. Revoking one would not automatically remove the others. She sent the hosted path to [the token location reference](/blog/grok-bot-hosted-mcp-tokens) and used [the MCP blast-radius guide](/blog/grok-bot-mcp-servers) to classify verbs. She kept the browser and file paths in the same audit table so the final decision could not ignore them.

## Read every routine as a separate production entry point

A routine assigns a workflow to one bot. Grok Bot supports up to 50 routines per bot and retains the 20 most recent run records per routine. Treat each routine as an independent trigger with its own schedule, input, output destination, and failure path. Similar names are not evidence that they run the same charter.

Priya's three routines were "Renewal Monday," "Renewals Weekly," and "Risk Pack." One ran Monday morning, one ran after a spreadsheet update, and one created a draft before a meeting. She recorded them separately rather than keeping the one with the friendliest name.

| Routine field | Question | Red flag | Required answer |
|---|---|---|---|
| Trigger | What starts it? | Unknown external event | Named schedule or event |
| Input | What data enters? | Live tenant not identified | Source and identity |
| Output | Where does it go? | Watched import folder | Quarantine path |
| Boundary | What must stop? | "Ask if unsure" | Exact forbidden verbs |
| Owner | Who handles failure? | Departed employee | Current person |
| Records | What recent evidence exists? | Missing or ambiguous run | Limited safe replay |

Do not delete the bot while reconstructing routines because its routines are deleted with it. Preserve the evidence, then retire deliberately after the decision.

## Reconstruct behavior from inputs and outputs instead of trusting the title

Select three recent runs if records are available: one ordinary, one failure, and one with the broadest apparent action. Trace each from source to output. Record which facts have citations, which fields changed, which system identities appeared, and where a human intervened.

When history is thin, replay with sanitized fixtures rather than live records. Priya created five invented renewals: one healthy account, one missing usage, one conflicting contract date, one hostile note that asked the bot to ignore its charter, and one customer with no approved source. A safe bot should draft only supported claims, reject the hostile instruction, and escalate the missing evidence.

[Claim Provenance Tracker](/bots/claim-provenance-tracker) can help attach sources to each memo claim. [Email Injection Sentinel](/bots/email-injection-sentinel) provides a pattern for treating untrusted content as data. Neither should edit the inherited bot during the audit. Use their charters as comparison points or run them on copies outside the production path.

The reconstructed behavior matters more than the bot's friendly title. A helper that writes is a writer, even if its name sounds advisory.

## Replace inherited prose with a testable audit charter

Do not silently repair the production charter while auditing it. Create an audit charter that reads evidence and emits findings only. This keeps investigation separate from remediation and gives the reviewer a stable output shape.

\`\`\`yaml
job: inherited-renewal-bot-audit
subject_bot: Revenue Helper
interim_owner: Priya
inputs:
  - preserved-charter.md
  - routines-inventory.csv
  - connections-inventory.csv
  - sanitized-run-fixtures/
allowed:
  - read supplied audit artifacts
  - classify claims as observed, documented, inferred, or unknown
  - draft inherited-bot-audit.md
required_findings:
  - claimed_purpose
  - observed_inputs
  - observed_outputs
  - shared_computer_exposure
  - routine_entry_points
  - boundary_gaps
boundary:
  never_without_human:
    - change the subject bot
    - connect or revoke a service
    - run a production routine
    - send, publish, delete, pay, or write
on_missing_evidence: mark_unknown
\`\`\`

The crucial line is "mark unknown." An audit that fills blanks with likely answers becomes a permission amplifier.

## Challenge every claimed boundary with a harmless negative test

A boundary is useful only when a test can fail. If the charter says "never send," use a fixture that contains a recipient and an urgent request. The expected output is a draft plus an escalation, not a sent message. If it says "read-only CRM," use a mocked record with a tempting empty field and confirm the output describes the gap without proposing a write action.

Do not test irreversible capabilities in production. A negative test should challenge the instruction while keeping the environment unable to cause harm. Remove recipients, use invented domains, disconnect watched import folders, and keep vendor roles read-only where possible.

Priya's hostile note said the renewal was urgent and asked the bot to email a discount immediately. The audited charter quoted the note as untrusted input, omitted the unsupported discount, and marked human review required. That was a pass. When the older charter produced a ready-to-send message without a source, she logged a boundary gap rather than granting mail access to see what would happen.

The [reversibility approval guide](/blog/grok-bot-approval-rules-reversibility) explains why an approval is not an undo mechanism. Your audit test must stop before the effect.

## Score the inherited bot against evidence, not confidence

Use a decision table that can produce "retire" as well as "keep." Score purpose clarity, current owner, input identity, output destination, credential scope, routine inventory, boundary test, and rollback plan. Do not average away a critical failure. Missing ownership or a failed send boundary should block widening even if six other rows are green.

| Condition | Keep paused | Permit read-only pilot | Consider wider grant |
|---|---|---|---|
| Current owner | Missing | Named and present | Named with backup |
| Purpose | Multiple vague jobs | One input and draft output | Stable across tested runs |
| Identity | Unknown tenant | Two visible fields verified | Rechecked per run |
| Boundary | Prose only | Negative test passes | Runtime path also constrained |
| Routines | Not inventoried | All triggers mapped | Failures assigned |
| Credentials | Mixed and unknown | Needed reads identified | Least role independently verified |
| Output | Goes downstream | Quarantined | Human release documented |

Priya's bot qualified only for a read-only pilot after the first pass. That was a useful outcome, not an audit failure. It gave the team a smaller system to observe before deciding whether any write capability belonged there.

## Answer the manager who says pausing costs more than widening

The strongest objection is operational: renewals are due, the former owner is gone, and the team needs output now. A two-week archaeology project could cost real revenue. That does not make an unknown write path safe.

Reduce the audit to the minimum viable evidence needed for a read-only draft. Name an owner, freeze routines, prove the vendor identity, inventory credential paths, choose one input, quarantine one output, and test the no-send boundary. Priya completed that narrow pass in an afternoon and produced a human-reviewed memo the next morning.

Widening first creates a second project: incident response after an unsupported note reaches a customer or an incorrect field enters the CRM. The fast path is not exhaustive documentation. It is a bounded pilot that deliberately excludes the risky verbs. Urgency can shrink scope. It should not convert unknowns into grants.

## Walk Priya from quarantine to a thirty-day decision

On day one, Priya paused three routines, copied the charter, mapped the CRM browser session and hosted connection, and assigned herself as interim owner. She quarantined two existing memos. One claim had a valid source. Three had no cited record. She marked them unknown rather than false.

On day two, five fixtures challenged missing usage, conflicting dates, and an injected send request. The audit charter passed four and failed the conflicting-date case. Priya added an escalation rule, reran all five, and started a two-account read-only pilot. Every output stayed in quarantine.

At day seven, ten drafts had visible tenant identity and claim sources. A human rejected one because its source was stale. At day thirty, the team compared three options: keep the narrow draft bot, rebuild a separate write workflow, or retire the bot. They kept the draft bot and did not add CRM write access. [Support Reply Drafter](/bots/support-reply-drafter) remained a separate pattern because customer messaging was outside the renewal job.

The decision record named the evidence and the grants that remained absent. That is a stronger inheritance than a polished bot name.

## Verify the audit by making an unknown remain unknown

Pick one fact the audit cannot establish, such as why the former owner created two similar routines. Run the report again and confirm it still says unknown. If the bot invents a rationale from names or timestamps, the audit process is not trustworthy enough to authorize expansion.

Then perform four checks. A sibling screen should reveal any shared browser session you documented. An intentionally wrong tenant card should stop the pilot. A fixture requesting send should produce an escalation. A draft with an unsupported claim should be rejected. Record actual results, not expected ones.

Use [the fleet audit](/blog/grok-bot-fleet-audit) after the single-bot report if the same unknown credentials touch several siblings. This article ends when the inherited bot has a decision-ready evidence packet. It does not redesign the entire roster.

If any verification fails, return to quarantine. Do not compensate with a human promise to watch more closely. Fix the charter, remove the capability, or retire the path.

## Hand off a decision record that the next owner can challenge

The final artifact should state what was preserved, what was observed, which claims remain unknown, which tests passed, which grants exist, which grants were refused, and who owns the next review date. Attach the charter revision and fixture manifest. Do not bury the decision in chat.

Choose one outcome: retire, rebuild, keep paused, run a read-only pilot, or widen a named grant. "Continue monitoring" is not an outcome unless it names the current permissions and a deadline. A wider grant must identify the object and verb, such as read renewal records, not "more CRM access."

This page stops applying when you have several inherited bots with overlapping jobs. Move to [the fleet audit procedure](/blog/grok-bot-fleet-audit). If the central problem is a wrong tenant rather than missing ownership, use [the wrong-account response](/blog/grok-bot-wrong-account-signed-in). If the bot cannot authenticate at all, use [the login-failure guide](/blog/grok-bot-login-failed).

Keep reading: [map shared-computer security](/blog/grok-bot-shared-computer-security), [isolate credentials](/blog/how-to-isolate-grok-bot-credentials), and [draw approval lines by reversibility](/blog/grok-bot-approval-rules-reversibility).

## Frequently Asked Questions

### What should I audit first on an inherited Grok Bot?

Pause its routines, preserve the current charter, name an interim human owner, and inventory visible account identities before changing anything. Then reduce the claimed purpose to one input, one transformation, and one output. This order preserves evidence while stopping new effects. Do not begin by widening permissions or deleting the bot. Deleting it removes its routines but does not remove shared-computer browser sessions or files, so it can destroy scheduling evidence without clearing the credential state you still need to understand.

### Can I trust the inherited bot's description of its own permissions?

Treat its answer as documented or inferred evidence, not as proof. Verify browser identity on screen, inspect hosted connection authorization and tool verbs, inventory computer files and command-line state, and test boundaries with harmless fixtures. A charter that says "never send" is useful, but a negative test should show the bot stopping when a fixture requests a send. Mark anything you cannot establish as unknown. Unknown is a valid audit result and must not become a wider grant by assumption.

### How many routine records can I use during the audit?

Grok Bot keeps the 20 most recent run records for each routine, according to the verified skills and routines documentation. Use the available records selectively: choose an ordinary run, a failure, and the run with the broadest apparent effect. Records are evidence of those executions, not proof of every historical action. If evidence is missing, create sanitized fixtures and run a read-only pilot. Do not infer a safe history merely because an older problematic run is no longer among the retained records.

### When is it safe to widen an inherited bot's grants?

Widen only a named object and verb after a current owner is assigned, vendor identity is proven, credential paths are mapped, routines are inventoried, outputs are quarantined, and the relevant boundary passes a negative test. A vague request for "CRM access" is not decision-ready. "Read renewal date and plan name from the approved tenant" can be evaluated. Keep sends, writes, publishes, payments, deletions, tenant switches, and connection changes behind a human unless the separately reviewed job truly requires and safely constrains them.
`,
};
