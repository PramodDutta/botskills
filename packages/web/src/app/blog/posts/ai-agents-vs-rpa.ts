import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Agents vs RPA: Persistence and a Cookie Jar vs a Script You Own',
  description:
    'Use this ai agents vs rpa decision guide to choose between adaptive browser work and owned scripts, with concrete tests for control, drift, and recovery.',
  date: '2026-08-29',
  category: 'Comparison',
  content: `
# Agents vs RPA: Persistence and a Cookie Jar vs a Script You Own

Dev's invoice queue breaks in two different ways. The old RPA script stops when a button identifier changes. The new agent keeps moving, but it uses a browser session that was already signed into the wrong account. One failure is loud and local. The other looks successful until Dev checks the destination.

That is the useful **ai agents vs rpa** comparison. RPA gives you explicit steps, selectors, variables, logs, and deployment ownership. An agent can interpret changing pages and unstructured text, but it acts through an environment with persistent state and broader ambiguity. Neither is automatically safer. Their failure shapes differ, so the right choice depends on what you can specify, observe, and recover.

This guide follows Dev through a 25-invoice practice queue. The count is an arbitrary test size. It is not a product limit or performance claim.

## Compare failure shapes before comparing demo speed

An RPA demo often feels brittle because every click is visible in the design. An agent demo often feels flexible because natural-language instructions cover many page variations. That flexibility can conceal state assumptions: which account is open, which file was downloaded yesterday, and which tab contains the authoritative record.

Dev writes the expected failure beside each candidate design. The RPA path may halt on a missing selector. The agent path may infer a plausible next step from the wrong page. A halted run costs intervention. A plausible wrong run can create a harder reconciliation job. The consequence, not the elegance of the demo, decides which failure is acceptable.

| Dimension | RPA script | Agent browser work | Decision question |
|---|---|---|---|
| Page change | Often halts | May adapt | Is adaptation safe here? |
| State | Explicit variables plus runtime | Prompt plus persistent environment | Can you verify identity? |
| Debugging | Step and selector logs | Conversation and visible actions | Can you reproduce the branch? |
| Ownership | You own code and deployment | You own charter and operating controls | Who repairs drift? |
| Bad success | Usually deterministic mistake | Can be plausible interpretation | Which consequence is recoverable? |

## Put deterministic rails around stable fields

Invoice number, vendor ID, currency, due date, and destination column are structured fields. When the source and destination expose stable APIs or selectors, deterministic automation is usually easier to test. The same input can produce the same branch, and Dev can assert exact output.

Do not give an agent interpretive freedom merely because an agent is available. Let a workflow validate required fields, reject duplicates, and move records. Add interpretation only where the source is genuinely messy, such as a free-form vendor note or a scanned exception explanation.

The hybrid seam should be a small artifact. An agent returns a proposed category, quoted evidence, and uncertainty. The script accepts only known values and routes low-confidence cases to review. This arrangement uses flexibility without letting prose directly drive a payment or ledger action.

## Use an agent where the page varies but the goal stays narrow

Some vendor portals change layout, wrap labels, or insert notices without changing the operator's goal: retrieve the current invoice PDF and record its visible identifier. An agent can sometimes navigate that surface without a new selector release. That is a real advantage when the action remains read-only and the result can be checked.

Narrowness matters. "Find the invoice labeled INV-1048 and save a copy" has an identifiable target and a verifiable artifact. "Handle the vendor portal" does not. The second instruction allows the goal to expand when the page presents a new option.

Dev begins with retrieval, not submission. He uses [Expense Reconciler](/bots/expense-reconciler) to shape exception output, [Bookkeeping Auditor](/bots/bookkeeping-auditor) to keep review separate from posting, [Source Verifier](/bots/source-verifier) to require evidence, and [Agent Inbox](/bots/agent-inbox) to route uncertain cases. Each pattern produces an internal handoff rather than an irreversible transaction.

## Treat persistent browser state as an input you must inspect

The agent path has a cookie jar. A signed-in identity can persist beyond the conversation that created it. State is useful because Dev need not authenticate on every routine run, but it is also an invisible input if the charter assumes the correct account.

State the shared product fact once: bots on one account share browser cookies, sessions, files, and command-line credentials on one persistent computer, so use [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) for the full architecture.

Dev adds an identity preflight. Before reading an invoice, the process records the visible account name, portal host, and expected vendor tenant. A mismatch stops the run. The preflight is not a promise that every site exposes identity clearly. If identity cannot be verified, that portal stays on the RPA or human path.

## Keep owned scripts for high-consequence writes

An owned script can still be dangerous, but its write conditions can be explicit and testable. Dev can require a record ID, exact prior state, approved amount, idempotency key, and authenticated service account. A code review can show the branch that performs the write.

An agent can call deterministic tools, yet the decision to call them may still come from interpreted context. For high-consequence writes, separate interpretation from execution. The agent proposes a structured action. A person or tightly validated service decides whether the write is allowed.

| Action | Consequence | Preferred executor | Required check |
|---|---|---|---|
| Download invoice copy | Internal and reversible | Agent or RPA | Identifier matches |
| Add review label | Reversible | Workflow | Allowed transition |
| Change vendor bank details | High and fraud-sensitive | Human controlled process | Independent verification |
| Submit payment | External financial action | Approved deterministic system | Full authorization chain |
| Post journal entry | Financial record change | Accounting control | Human approval and balancing |

This is why [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) matters. A charter can forbid a write, but the environment and tool design should remove or gate that authority too.

## Design the handoff contract before choosing the engine

Dev defines one handoff object for both candidates. It contains the invoice identifier, source URL, observed account identity, file location, extraction fields, confidence note, and status. The engine may differ, but downstream review stays consistent.

\`\`\`text
JOB: Retrieve and classify invoice evidence
INPUT: vendor_id, expected_portal_host, expected_account_name, invoice_id
OUTPUT: source_url, observed_account_name, saved_file, proposed_category,
quoted_evidence, status
ALLOWED STATUS: ready_for_review, needs_operator, source_missing
STOP: identity mismatch, duplicate identifier, missing amount, or new payment screen
BOUNDARY: Never submit payment, change vendor details, or post a journal entry.
\`\`\`

The contract makes substitution possible. Dev can run the same eight test cases through RPA and an agent, then compare accepted outputs. Without a shared contract, the contest becomes a theatrical comparison between unlike demos.

## Calculate maintenance from actual change events

RPA maintenance clusters around selector changes, browser updates, authentication, and downstream schemas. Agent maintenance clusters around ambiguous instructions, page reinterpretation, state drift, and output consistency. Both need an owner.

Dev reviews the prior 12 portal changes. He asks how many would have broken a selector, how many changed the meaning of a field, and how many altered identity or authorization. A layout-only change may favor the agent. A semantic change requires review in either system. A new authorization step should stop both.

Do not estimate maintenance as "agents need less." Record incidents by cause and minutes to restore. [Bot Failure Modes](/blog/bot-failure-modes) provides a wider classification, while [Move an n8n Workflow to a Bot](/blog/move-an-n8n-workflow-to-a-bot) shows why migration should follow the unstable step rather than replace the whole workflow.

## Preserve replay evidence for every branch

RPA systems usually encourage step logs because their execution model is explicit. Agent operations need equally deliberate evidence. Dev stores the input case ID, charter version, observed identity, source URL, output object, reviewer disposition, and failure category. He does not rely on a conversational summary as the only record.

Replay means more than rerunning. A portal may change after the incident. Preserve a synthetic fixture or screenshot that shows the relevant state, while respecting data policy. Then test the corrected charter or selector against that fixture and a current live practice account.

The article [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) explains why approval does not reverse earlier work. Evidence must show what happened before and after the gate, not merely that a person clicked approve.

## Select with a weighted decision table, not a category winner

Dev assigns weights before running demos. Consequence receives 5, input variability 4, deterministic testability 4, recovery 4, and build speed 2. These weights are his declared priorities, not universal scores. A marketing research queue would use different weights.

| Condition | Choose RPA or code | Choose agent | Choose hybrid |
|---|---|---|---|
| Stable API and schema | Yes | Rarely | Only for messy input |
| Variable page, read-only goal | Possible but costly | Often | If validation follows |
| High-consequence write | Prefer validated executor | No direct write | Agent proposes, executor validates |
| Identity hard to observe | Service account path | Avoid browser action | Human resolves identity |
| Text interpretation plus record move | Script alone is weak | Agent alone is broad | Best fit |

The result for Dev is hybrid. An agent retrieves and proposes. A deterministic workflow validates enums, duplicates, and allowed transitions. A human authorizes accounting actions.

## Answer the engineer who says modern RPA already uses AI

That objection is correct about product categories. RPA platforms can include document understanding, natural-language features, and adaptive selectors. Agent systems can call fixed workflows. The labels overlap.

The answer is to compare the deployed control path, not vendor taxonomy. Ask where interpretation occurs, who owns the executable steps, what state persists, which component can write, and how a failed case is replayed. If an RPA product uses a model to choose a payment action from page text, analyze that branch like an agent decision. If an agent calls a locked function with exact parameters, analyze that executor like software.

Categories help discovery. Control paths decide risk.

## Trace Dev's wrong-account failure to the missing preflight

On Tuesday at 09:10, Dev opens the practice portal as North vendor. At 11:30, another task signs the same browser into South vendor. Wednesday's invoice run starts from a clean conversation but a persistent South session. The agent finds an invoice with a similar amount and marks the case ready.

The mistake is not "AI hallucinated." The charter omitted observed identity, the test fixture lacked two tenants, and the reviewer checked amount without source identity. Three controls failed together.

Dev repairs the system by adding expected and observed identity fields, a hard mismatch stop, and a two-tenant test. He also removes amount-only acceptance. [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) covers why a fresh prompt does not imply a fresh environment.

## Diagnose symptoms with engine-specific repairs

| Symptom | RPA cause | Agent cause | Repair |
|---|---|---|---|
| Button not found | Selector drift | Page interpretation failure | Update fixture and path |
| Wrong tenant used | Session assumption | Persistent identity unchecked | Add identity preflight |
| Duplicate record | Retry lacks idempotency | Repeated action inferred | Enforce destination key |
| Unsupported category | Mapping defect | Free-form label | Validate fixed enum |
| Run looks complete but file is absent | Download step failed | Success inferred from page | Verify artifact existence |

Notice that the repair is often shared even when the cause differs. Identity, idempotency, enum validation, and artifact checks improve both designs. The engine choice does not excuse production discipline.

Dev keeps failure names operational. "Agent issue" and "RPA issue" are too broad to guide a fix. "Observed tenant differed from expected tenant" tells the next operator what to test.

## Verify both candidates against the same adversarial fixture

Create 25 synthetic invoices. Include five duplicate IDs, four missing amounts, three identity mismatches, three new page notices, and ten ordinary cases. The declared distribution is a test choice. Run both candidates with the same allowed outputs.

A passing design returns ordinary cases for review, routes missing and identity cases to the operator, rejects duplicates, and never reaches a payment submission. Inspect saved files and destination records. Do not score only the narration.

Then change one harmless page label and rerun. The RPA may halt. The agent may adapt. Record whether each result is correct, detectable, and recoverable. The winner is the control path whose failures your team can find and repair before consequence.

## Stop this comparison where direct APIs remove the browser

If the source and destination offer supported APIs with stable identifiers, compare API automation before either screen-driven RPA or an agent. Browser work is often the fallback for systems without a clean integration, not a goal in itself.

This page also stops before credential isolation, deletion cleanup, and workflow-builder selection. Use [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) for isolation, [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) for teardown, and [Agents Versus Workflow Builders](/blog/ai-agents-vs-workflow-builders) for Zapier and Make.

Keep the final rule short: deterministic movement belongs on deterministic rails; interpretation may sit beside it, but high-consequence writes need an explicit owner and validator.

## Plan recovery for partial work before selecting either engine

A run can fail after downloading a file but before updating the review row. It can update the row and then lose the file. It can authenticate successfully, open the right invoice, and time out before producing evidence. "Retry" is unsafe until Dev knows which effects already occurred.

For every step, label the effect as absent, proposed, completed, or verified. A file is completed when it exists, then verified when its identifier and checksum match the case. A row is completed when the destination confirms the allowed transition, then verified by reading it back. A payment path is outside this design entirely.

Dev's recovery worksheet contains the business key, last verified state, observed side effects, safe next action, and owner. On restart, the engine reads the worksheet rather than inferring progress from an open tab. This makes recovery portable between RPA and agent implementations.

Consider the wrong-tenant incident. The safest repair is not to reopen the browser and continue from the current page. Dev closes the practice session, confirms the intended identity, checks whether a file or row was created, and resumes from the last verified state. The sequence sacrifices speed to remove ambiguity.

Test partial failure deliberately. Interrupt the run after retrieval, after validation, and after row movement. For each interruption, verify that a retry produces one artifact and one allowed destination effect. If the engine cannot expose its last verified state, wrap it with a workflow that can.

Recovery ownership also affects the original choice. A team comfortable debugging selectors may prefer a loud RPA halt. A team with strong case-based review may accept an agent stop with a structured evidence packet. Neither team should accept a system whose only recovery instruction is "run it again."

Finally, set an expiration for stale work. If an invoice case sits partially complete beyond Dev's declared four-hour practice target, route it to a person and block automatic continuation. The target is an internal choice. The important control is that old browser state does not silently become today's authority.

Document what a person sees during recovery. Dev's queue displays the expected tenant, observed tenant, last verified artifact, destination state, and one recommended safe action. It does not present a green success badge when verification is incomplete. The operator can choose abandon, inspect, or resume from a named step.

Run recovery with a backup, not only the builder. The backup should locate the case by business key, explain which effects are verified, and identify which action remains forbidden. If the backup must ask Dev which browser tab "looks right," the evidence contract failed.

Include source freshness in restart decisions. An invoice retrieved yesterday may still be the requested artifact, while a price or account status may need a new observation. The case contract states which fields expire and which remain stable. The engine does not choose freshness policy from prose on the page.

After every recovery, add the interruption point to the regression fixture. Over time, Dev builds cases for authentication loss, file absence, duplicate destination state, timeout, and identity mismatch. Maintenance becomes a growing body of executable evidence rather than a collection of war stories.

Keep reading: [approval gates for bots](/blog/approval-gates-for-bots), [least privilege for bots](/blog/least-privilege-bots), and [the bot runbook](/blog/grok-bot-runbook).

## Frequently Asked Questions

### Are AI agents replacing RPA?

They can replace some brittle browser interpretation, but they do not remove the need for deterministic validation, identity checks, idempotency, logs, and recovery. Many useful systems are hybrid: an agent interprets a variable page or document, then an owned workflow validates a small output and moves the record. Compare control paths rather than category labels, especially when a branch can create an external or financial consequence.

### When should I keep an RPA script?

Keep it when inputs and branches are stable, exact replay matters, and the team can maintain selectors or APIs. RPA or ordinary code is especially useful for allowed-state transitions, duplicate checks, and validated writes. A visible halt after page drift may be preferable to an adaptive but wrong action. Measure actual change events and repair time instead of assuming either engine has lower maintenance.

### What makes persistent browser state risky?

Cookies and signed-in sessions can become hidden inputs. A fresh conversation does not prove the browser is signed into the expected tenant. Add a preflight that records the visible account and host, then stop on mismatch. Use disposable practice accounts for tests. If identity cannot be observed reliably, do not let browser interpretation reach a consequential action for that site.

### How should I test an agent against RPA?

Give both systems the same synthetic cases, output contract, stop conditions, and forbidden actions. Include duplicates, missing fields, identity mismatches, layout changes, and ordinary cases. Score accepted artifacts, detected exceptions, missed exceptions, replay quality, and forbidden actions. Inspect the destination and saved artifacts rather than trusting a success message. Choose the failure shape your team can detect and recover safely.
`,
};
