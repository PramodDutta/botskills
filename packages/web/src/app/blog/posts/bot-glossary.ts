import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bot, Skill, Routine, Charter, Computer: The Terms, Defined',
  description:
    'Use this bot glossary to separate bots, skills, routines, charters, computers, boundaries, approvals, and owners before your team configures the wrong thing.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# Bot, Skill, Routine, Charter, Computer: The Terms, Defined

Nila asks a teammate to "update the bot," and receives three incompatible changes: one edits standing instructions, one reschedules a routine, and one reteaches a browser workflow. All three people heard a reasonable meaning. None changed the same object.

This bot glossary gives each operating noun one job. Use it in tickets, handovers, incident notes, and review requests. The test is simple: another operator should know which object to open, what will change, and what stays untouched.

The terms below describe an operating model for botskills.sh and verified Grok Bot concepts. They do not pretend every automation product uses identical labels. When a product's interface supplies a different name, keep the distinction and map the local label to it.

## Use bot for the named worker, not every object around it

A bot is the named worker to which you assign a job and, where supported, routines. It is the unit people talk to and recognize in a roster. "Research Desk" and "Support Triage" are bot names. A bot is not the schedule, the browser demonstration, the policy document, or the underlying computer.

This distinction matters during change review. Renaming Research Desk does not necessarily change its charter. Adding a routine does not create a new computer. Deleting a bot can delete its routines, while files and signed-in browser sessions on the shared computer can remain. Link operators to [why deletion leaves files](/blog/why-deleting-a-bot-leaves-the-files) instead of loading that architecture into every ticket.

[Lead Scout](/bots/lead-scout) is a useful named-worker example. Its identity helps a human find the job. Its safety still comes from instructions, permission, and review, not from the name.

## Reserve skill for a reusable way to perform a task

A skill is a reusable procedure for performing a task, such as navigating a browser flow, extracting fields, or applying a consistent evaluation method. It answers "how should this task be done?" A skill should not silently decide when the task runs or who may publish its result.

Verified Grok Bot documentation says teach-by-demonstration records visible browser interaction for up to ten minutes, without microphone audio, and produces a draft skill. The feature is unavailable on iPhone. Those facts define one creation path, not every possible procedure your team may call a skill.

Review a draft skill before use. A demonstration can capture accidental account selection, stale filters, or an unsafe final click. The boundary belongs in the surrounding job design even if the recorded workflow stops earlier.

## Call the scheduled assignment a routine

A routine assigns a workflow to one bot. It answers "when should this bot attempt this job?" Grok Bot supports up to 50 routines per bot and keeps the 20 most recent run records per routine. Those are verified product limits, not planning recommendations.

A routine is not a team asset and not an independent safety boundary. Deleting its bot deletes the routines. Pause and resume affect schedule execution, while charter edits change instructions. On iPhone, you can pause and resume; editing, history, testing, and deleting require desktop.

When a ticket says "disable the bot," ask whether the author means pause one routine, pause all routines, remove access, or delete the named worker. The operational outcomes differ sharply.

| Word | Answers | Typical change | Does not answer |
|---|---|---|---|
| Bot | Who performs the job? | Rename or change assigned work | When it runs |
| Skill | How is a task performed? | Revise a reusable procedure | Who owns approval |
| Routine | When is work attempted? | Pause, resume, or reschedule | What the bot may never do |
| Charter | What is the standing job contract? | Version and review instructions | Whether access exists |
| Computer | Where does execution state persist? | Clean files or sessions | Why a job is authorized |

## Write charter when you mean the standing job contract

A charter is the versioned set of standing instructions for one bot job: purpose, inputs, outputs, evidence rules, checkpoints, owner, and boundary. It is an operating artifact used by botskills.sh, not a claim about a particular product button.

The charter answers what good work looks like and what the bot must not do. "Read the saved lead view, write a sourced shortlist, never message a lead" belongs in a charter. "Every Monday at 08:00" belongs in a routine. "Mira may approve publication" belongs in an ownership or approval rule.

Keep the charter in a reviewable file with a version. A chat correction can help one run but should not become an invisible standing policy. [How to write a boundary line](/blog/how-to-write-a-boundary-line) covers the one line every charter needs.

## Treat computer as execution state, not as a bot identity

The computer is the environment where browser sessions, files, and command-line credentials may persist. Verified Grok Bot documentation says all bots on an account share one persistent cloud computer, while each bot receives its own screen. The shortest safe statement is that screens are work surfaces, not security boundaries.

Do not say "Research Desk's computer" if you mean the account's shared computer. That wording leads operators to assume cookies or files belong only to a named bot. Use [where a bot cookie lives](/blog/where-a-bot-cookie-actually-lives) for the architecture and keep tickets precise: "shared computer browser session for vendor.example."

Computer state can outlive a bot deletion. It does not grant business authority. A signed-in page shows technical reach, not permission to use it.

## Separate screen from computer before discussing isolation

A screen is one bot's work surface on the shared computer. It helps organize simultaneous or separate work. It does not isolate credentials, browser cookies, signed-in sessions, or files from sibling bots.

Use screen when describing where an operator observed a page: "Nila saw the approval prompt on Support Triage's screen." Use computer when describing persistent state: "The vendor session remains signed in on the shared computer." That language points cleanup and containment at the right object.

Do not add a second bot merely to obtain a security boundary. Link to [screens are not boundaries](/blog/screens-are-not-boundaries) and choose a different account or execution boundary if the risk requires isolation.

## Define boundary as the forbidden action, not the available access

A boundary names the action the bot never takes without a human, or never takes at all. "Never send a reply" is a boundary. "Can read the support inbox" is access. "Ask before sending this exact draft" is an approval condition.

The boundary should name a verb and object. "Be safe with customers" cannot fail cleanly. "Never send, refund, close, or merge" can be tested with fixtures. botskills.sh listings declare a boundary because the human reviewing a job needs to see the line before adopting it.

[Support Reply Drafter](/bots/support-reply-drafter) makes the pattern concrete: drafting can be useful while sending stays human. The boundary does not prove the mailbox permission is narrow. Review both.

## Define permission as technical reach granted to an identity

Permission is the technical ability of an account, session, token, or connection to read or change something. It answers "can this identity perform the operation?" It does not answer whether this run should perform it.

A mailbox session may technically send even when the charter forbids sending. A repository token may permit merge even when [PR Review Sentinel](/bots/pr-review-sentinel) only comments in a file. That gap is why [a boundary is not a permission](/blog/a-boundary-is-not-a-permission).

Review permissions at the issuer and destination. Bot names do not partition shared credentials. Use the smallest account and scope that supports the job, then test both allowed reads and denied writes.

## Define approval as consent to one proposed action

An approval is a human decision about a proposed action. It should identify the verb, payload, destination, and consequence. "Approve" without those fields is a mood, not informed consent.

Verified documentation states that an approval controls the proposed action and does not reverse work already completed. If a message was already sent, the approval surface cannot unsend it. If a file was already changed, a later denial does not restore the old contents.

Use [what an approval actually governs](/blog/what-an-approval-actually-governs) for the full treatment. In tickets, write "approval to send draft 18 to customer A" rather than "approval for Support Bot."

## Assign owner to a person who can make the named decision

An owner is a named person accountable for a particular decision or artifact. One job can have several ownership roles: routine operator, source system owner, destination owner, and business output owner. "The RevOps team" is not enough during a failure unless an on-call person is named.

Ownership is not the same as access. Nila may own the weekly report without holding CRM administration rights. The CRM owner may grant a saved read view without approving publication. Write both names into the charter and handover.

Use a backup with an activation condition: "Omar acts only while Nila is on PTO." That prevents two people from issuing conflicting recovery prompts.

| Term pair | First term controls | Second term controls | Common category error |
|---|---|---|---|
| Charter and routine | Standing job contract | Schedule | Put timing only in chat |
| Boundary and permission | Allowed behavior | Technical capability | Treat a prohibition as access control |
| Approval and recovery | Proposed action | Completed action response | Expect denial to undo work |
| Owner and user | Accountability | Product identity | Assume every user may decide |
| Screen and computer | Work surface | Persistent execution state | Treat screen separation as isolation |

## Map one support job across every term

Nila operates a support drafting job. The bot is Support Draft Desk. The skill is a browser procedure that opens an unread ticket, extracts the customer question, and saves a draft response. The routine runs at 09:00, 13:00, and 16:00. The charter requires citations to the help center and sets a 180-word maximum.

The computer is the account's persistent cloud environment. The screen is Support Draft Desk's work surface. The permission is a support account that can read tickets and, unfortunately, can also send. The boundary says never send, close, refund, tag, or change priority. The approval rule says Nila reviews each draft in the vendor UI. Nila owns output; Asha owns the support system account.

At 13:07, a draft is wrong. Nila edits the charter evidence rule. She does not edit the routine because the times are fine. She does not reteach the skill because navigation is fine. She does not rename the bot because identity is irrelevant. The glossary makes the change surgical.

\`\`\`text
SUPPORT DRAFT DESK CHARTER v4
Bot: Support Draft Desk
Owner: Nila; backup while Nila is absent: Omar
Skill: Open unread ticket, capture question and help-center links, save local draft
Routine: Defined separately at 09:00, 13:00, 16:00 local
Input: Unread tickets from saved view "Draft Queue"
Output: /workspace/support-drafts/<ticket-id>.md
Evidence: Every factual sentence names a help-center URL or says NOT VERIFIED
Boundary: Never send, close, refund, tag, reprioritize, or edit customer data
Approval: Nila reviews the final draft and sends from the vendor UI
Heartbeat: Write run time, ticket IDs read, draft paths, and boundary flags
\`\`\`

| Wrong request | Actual object | Better request |
|---|---|---|
| "Update the bot to run later" | Routine | Move the 13:00 routine to 14:00 |
| "Fix the schedule so it cites sources" | Charter | Require a source URL per factual sentence in charter v5 |
| "Give the skill access to refunds" | Permission and boundary | Do not broaden access; keep refunds forbidden |
| "Delete the computer bot" | Bot versus computer | Pause routines, clean state, then decide deletion |
| "Approve yesterday's send" | Incident recovery | Verify what sent and correct through human process |

## Fail terminology review when the object cannot be opened

Ask the requester to point to the object they want changed. Can they open the charter file, routine settings, skill draft, product screen, account permission, or approval payload? If not, the ticket is not ready.

Fail a change request that uses "bot" for three objects in one sentence. Fail one that says "access" without naming the identity and operation. Fail one that says "owner" without a person. Fail one that uses "approval" for an already completed act.

The repair is not pedantry. Rewrite the ticket with object, current version or identifier, proposed change, reviewer, and verification. Precision shortens review because the team stops debating different things.

## Keep product labels and operating terms in separate columns

Interfaces change. A menu might call a reusable workflow a skill today and a template tomorrow. Your internal operating record should preserve the stable question each object answers.

Maintain a small mapping table in the runbook. Record the product label, internal term, where the object is opened, and who owns it. Update the mapping when the UI changes. Do not rewrite incident history to match a new label.

| Product or local label | Internal term | Locate it | Review owner |
|---|---|---|---|
| Named assistant card | Bot | Bot roster | Bot operator |
| Taught browser workflow | Skill | Skills area on desktop | Procedure owner |
| Scheduled workflow | Routine | Routine settings | Routine operator |
| Versioned BOT.md or charter file | Charter | Reviewed repository or workspace | Business owner |
| Signed-in browser environment | Computer state | Agent computer preview and issuers | Account owner |

## Use the glossary at handover and incident time

During handover, ask the outgoing owner to name every bot, charter version, routine, skill, permission identity, destination, and backup owner. During an incident, use the same nouns to record what you paused, preserved, revoked, or changed.

Do not say "we shut down access" if you paused a routine. Do not say "we deleted the data" if you deleted a bot. Do not say "we rolled back" if you only pasted an older prompt. Each incorrect verb can conceal remaining risk.

For ownership changes, use [handover notes for PTO](/blog/bot-handover-documentation). For charter rollback, use [versioning and rollback](/blog/bot-versioning-and-rollback). This reference supplies the nouns; those guides supply the procedures.

## Limit this glossary to operations, not every AI term

This page does not define models, tokens, context windows, inference, embeddings, or general agent theory. Those terms do not help Nila decide whether to edit a schedule, a procedure, or a charter.

It also does not identify the model behind Grok Bot. Verified documentation describes no user or admin model picker and does not publish a named model for the surface. The operational term is simply bot unless the product documentation itself supplies more detail.

For first-time product orientation, use [Learn Grok Bot](/blog/learn-grok-bot). For a roster-level view, [Bot Advisor](/bots/bot-advisor) can help shape a role, while [Stuck Bot Foreman](/bots/stuck-bot-foreman) illustrates a recovery role. Neither replaces precise internal ownership.

## Call the run receipt a heartbeat, not proof of correctness

A heartbeat is a dated artifact written for every attempted run, including an empty or stopped run. It answers "what state did this job report?" A useful heartbeat names job, charter version, start and end time, inputs observed, files written, checkpoint, and boundary flags.

The heartbeat is not an audit log and not proof that every claim is correct. It is produced inside the job and should be compared with source and destination records. If HEARTBEAT.md says five records were read but the source export contains four, verification investigates the discrepancy.

Missing heartbeat means the expected receipt is absent. It does not prove the routine never started. Route that uncertainty through [missing-heartbeat escalation](/blog/bot-escalation-paths), where pause and inspection come before retry.

Use status values that another operator can act on: COMPLETE_LOCAL, EMPTY, SOURCE_MISSING, BOUNDARY_STOP, PARTIAL_AT_CHECKPOINT, or FAILED_SETUP. "Done" hides whether output was delivered or merely written.

## Use checkpoint for a resumable fact about completed work

A checkpoint records what is already complete and what the next allowed step is. It must point to artifacts or external identifiers. "Checkpoint 2: INPUTS.json exists with source IDs S01 through S08; DRAFT.md absent; next allowed action is local draft" can guide a recovery. "Almost done" cannot.

Checkpoints prevent full replay after a partial run. They also prevent delivery from happening twice. A destination message ID is a checkpoint that moves the next action past send, even if a later local note is missing.

A checkpoint is not a backup. It may refer to a file that becomes unavailable, malformed, or untrusted. Verification should open the artifact, confirm its version, and check the destination before resuming. The charter defines legal checkpoints and transition rules; the heartbeat records which one the run reached.

During handover, name which checkpoints the backup may resume. During incident response, preserve them before editing. During trial runs, score whether the job stopped at the declared checkpoint.

## Distinguish artifact, output, and destination record

An artifact is any preserved item used to perform or evaluate work: input export, screenshot, heartbeat, draft, claim ledger, or test result. Output is the artifact the job promises to produce. A destination record is evidence that something reached an external system, such as a message ID, pull request URL, calendar event, or vendor confirmation.

One file can play several roles, but name the role in context. BRIEF.md is an output. Its source export is an input artifact. A Slack timestamp is a destination record. Deleting BRIEF.md does not remove the Slack message, and deleting the message does not prove the local draft never existed.

This language clarifies recovery. "Output exists, destination record absent" means human delivery may still be pending. "Destination record exists, output absent" means preserve the external payload and investigate local retention. "Neither exists" remains no trace, not proof of no run.

| Artifact state | Output state | Destination state | Correct description |
|---|---|---|---|
| Heartbeat current | Draft present | No record | Local work completed, delivery unproven |
| Heartbeat missing | Draft absent | Message ID present | External effect confirmed, local history incomplete |
| Heartbeat says EMPTY | No draft by design | No record | Completed empty run |
| Heartbeat partial | Inputs only | No record | Resume candidate from named checkpoint |

These three terms keep a team from saying "nothing happened" merely because the expected file is missing.

When writing a ticket, use the smallest complete sentence that joins these nouns: "Pause routine R7 for bot Revenue Brief; preserve charter v4 and workspace artifacts; destination record M81 already exists." That sentence tells the operator what to stop, what not to overwrite, and why delivery must not repeat. A pile of product vocabulary is not precision. The terms earn their place only when they point to a different object, owner, or decision.

## Frequently Asked Questions

### What is the difference between a bot and a routine?

A bot is the named worker assigned a job, while a routine is a scheduled workflow assigned to one bot. Changing a routine can alter when work is attempted without changing the bot's charter or identity. Deleting a bot deletes its routines, but pausing one routine does not necessarily stop other work assigned to the bot. In a ticket, name the bot and the exact routine separately so the operator knows whether to change identity, instructions, or schedule state.

### What is the difference between a charter and a skill?

A charter is the standing job contract: purpose, inputs, outputs, evidence rules, checkpoints, owner, and boundary. A skill is a reusable way to perform a task, such as navigating a browser flow or extracting fields. The charter decides what counts as acceptable work and what is forbidden. The skill describes how one part is performed. If navigation succeeds but sources are weak, edit the charter. If the page flow changed, revise and retest the skill.

### Is a boundary the same thing as a permission?

No. A boundary is an operating rule that forbids or conditions an action, while a permission is technical reach held by an identity, session, or token. A mailbox can technically permit sending even when the charter says never send. That gap must be managed with narrow accounts, issuer-side permissions, explicit approvals, and tests that challenge forbidden actions. A good boundary makes expected behavior testable, but it does not remove a capability that the underlying credential still possesses.

### Why does the distinction between screen and computer matter?

In Grok Bot, each bot has a separate screen, but bots on the account share one persistent cloud computer. The screen is a work surface, not a security boundary. Browser cookies, signed-in sessions, files, and command-line credentials can be shared through the computer. Precise language prevents a team from placing sensitive jobs in differently named bots and assuming isolation. Describe observations by screen and persistent access by computer, then choose a real account or environment boundary when isolation is required.
`,
};
