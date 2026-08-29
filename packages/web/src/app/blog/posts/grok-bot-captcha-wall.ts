import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Captcha Wall Is a Human Job, Not a Retry Loop',
  description:
    'Handle a Grok Bot captcha by stopping the routine, preserving the blocked page, routing one human task, and resuming without duplicate browser actions.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# A Captcha Wall Is a Human Job, Not a Retry Loop

At 07:12, Inez expects a supplier availability brief. Instead, the browser shows a checkbox and the run history says the task is still working. At 07:18, another attempt starts. By 07:30, five tabs show the same challenge and nobody knows whether any product pages were captured before the block.

A **grok bot captcha** is a handoff state. Stop automation, preserve enough context for one person to understand the interruption, let that person complete or decline the challenge, and resume from a checkpoint. Repeated clicks are not persistence. They add noise, may trigger stricter defenses, and can repeat actions that succeeded before the wall appeared.

This reference gives Inez a deterministic incident procedure. It does not explain how to bypass challenges or disguise automation.

## Classify the page as blocked before clicking anything else

A captcha may be a checkbox, image selection, text challenge, device confirmation, or an interstitial saying unusual traffic was detected. The exact presentation changes. The operational state does not: the site has asked for human or additional account verification.

The bot should stop navigation on the affected origin. It records the page title, URL without sensitive query values, local time, run ID, last confirmed checkpoint, and whether any externally visible action occurred. It must not solve, outsource, refresh, open a new browser profile, rotate an address, or search for a bypass.

| Observation | State | Bot action | Human action |
|---|---|---|---|
| Challenge page is visible | \`HUMAN_REQUIRED\` | Stop on that origin | Inspect challenge |
| Login asks for device confirmation | \`HUMAN_REQUIRED\` | Preserve page | Approve or reject sign-in |
| Ordinary page loads slowly | \`TRANSIENT\` only after evidence | Wait once within policy | Review if timeout repeats |
| Access is explicitly denied | \`DENIED\` | Stop the job | Decide whether access is authorized |
| Page layout changed with no challenge | \`PARSER_FAILURE\` | Capture evidence and stop | Repair extraction rule |

Do not label every browser failure a captcha. Correct classification keeps a parser defect from becoming a pointless human challenge task.

## Freeze the affected origin while unrelated work stays bounded

The safest default is to freeze activity on the site that displayed the challenge. Whether other independent work continues is a policy choice, not a guess the bot makes during the incident.

If the routine reads three approved public sites and one challenges, Inez can permit the other two to finish only when outputs remain separable and no later step depends on the blocked source. The final brief must say one source is unavailable. It must not smooth the gap with inference.

If the blocked step sits before a purchase, form submission, upload, or customer message, stop the entire workflow. A later step may otherwise run without the evidence or identity check the site required. “Continue where possible” is safe only after dependencies are named.

The distinction is origin freeze versus run freeze. Write which one the policy chooses for each workflow, before the first challenge appears.

## Capture a handoff packet without copying the challenge itself

The packet helps a human locate the right page and understand what happened. It is not a dataset of challenge images. Keep it small and private.

| Packet field | Example | Why it exists | Exclude |
|---|---|---|---|
| Run identity | Supplier scan 2026-08-29 07:12 | Connects incident to routine | Secret tokens |
| Checkpoint | Vendor 4 of 12, list loaded | Shows completed work | Guessed completion |
| Page context | Domain and redacted path | Lets human orient | Sensitive query strings |
| Last action | Opened availability page | Reveals what preceded wall | Instructions to evade defense |
| External effects | None observed | Controls resume choice | Unsupported reassurance |
| Requested decision | Complete, decline, or abandon | Makes handoff actionable | Automatic approval |

Store a screenshot only where policy permits and only if it does not expose credentials or protected content. The important artifact is the state transition, not a gallery of challenge screens.

## Write a stop rule that refuses every bypass-shaped instruction

The charter names the event and the forbidden reactions. Put the same rule in the routine logic, because a prose instruction does not remove browser authority by itself.

\`\`\`text
When any site displays a captcha, bot check, unusual-traffic page, device
confirmation, access challenge, or request for human verification:

1. Stop all activity on that origin immediately.
2. Do not click, solve, refresh, retry, open another profile, change identity,
   rotate network routes, use a solving service, or seek bypass instructions.
3. Record run ID, time, redacted URL, last confirmed checkpoint, last action,
   and known external effects in /handoffs/captcha-pending.md.
4. Notify only the named private reviewer with COMPLETE, DECLINE, and ABANDON.
5. Resume only from a human-written checkpoint decision. Revalidate page state
   and refuse any action already recorded as complete.
\`\`\`

The boundary is narrow enough to test. [How to write a boundary line](/blog/how-to-write-a-boundary-line) covers the grammar, while [what an approval actually governs](/blog/what-an-approval-actually-governs) explains why a later approval cannot reverse earlier clicks.

## Walk Inez from the first challenge to one clean resume

Inez's supplier routine reads a manifest of twelve product pages and drafts a private availability table. It never orders, adds to cart, submits a form, or messages a supplier. At vendor 4, the site shows an unusual-traffic check after the product list loads but before the availability panel opens.

The bot records vendors 1 through 3 as complete with their source times. Vendor 4 remains \`HUMAN_REQUIRED\`; vendors 5 through 12 remain \`NOT_STARTED\` because Inez's policy freezes the full run. The handoff packet states that no form, cart, or account change was observed. One private task goes to Inez.

At 08:05, Inez opens the preserved page. She confirms the site and account are authorized, completes the human check herself, and writes “resume at vendor 4 availability panel; vendors 1 through 3 are complete.” The bot revalidates the URL and signed-in identity, reads vendor 4, continues through 12, and produces a brief with the interruption recorded.

Day thirty looks different: three challenges across twenty runs. Inez sees they all came from one origin after a morning schedule. She changes that workflow's cadence and confirms the source permits the use. She does not build an evasion loop.

## Trace the failed retry loop that opened five identical tabs

Inez's first version treated the challenge as a generic timeout. The wrapper retried after one minute, then two, then four. Each attempt opened a fresh tab and returned the same page. The fifth attempt found the first tab after Inez had manually completed the check, then restarted the supplier list from vendor 1.

The failure had two parts. Error classification mapped \`HUMAN_REQUIRED\` to \`TRANSIENT\`. Resume logic stored an item number in memory but no durable completion ledger. Even successful vendors were therefore candidates for repetition.

| Symptom | Cause | Immediate containment | Durable repair |
|---|---|---|---|
| Several challenge tabs | Captcha inherited timeout retries | Pause routine | Non-retryable state code |
| Work restarts at vendor 1 | Checkpoint was not durable | Stop before any write | Append item completion ledger |
| Human completion races retry | No ownership transfer | Freeze bot during handoff | Explicit human-owned state |
| Brief hides missing vendor | Gap converted to blank | Reject output | Required coverage status |
| Notification repeats | Every attempt creates a task | Close duplicates | One incident key per origin and run |

Inez closes four duplicate tasks, records the incident, and adds a fixture that displays a synthetic challenge after item 3. The expected result is exactly one handoff and zero navigation after the wall.

## Use a state machine so ownership cannot be ambiguous

Define states instead of relying on conversational memory. A small state machine prevents the bot and human from acting at the same time.

| State | Owner | Allowed next state | Forbidden transition |
|---|---|---|---|
| \`RUNNING\` | Bot | \`COMPLETE\`, \`FAILED\`, \`HUMAN_REQUIRED\` | Directly to human-completed |
| \`HUMAN_REQUIRED\` | Human | \`READY_TO_RESUME\`, \`ABANDONED\` | Bot retry |
| \`READY_TO_RESUME\` | Bot after validation | \`RUNNING\`, \`FAILED\` | Skip checkpoint validation |
| \`ABANDONED\` | Human | Closed | Silent restart |
| \`COMPLETE\` | Closed | New run only | Reprocess as same run |

The human decision should be a written event containing reviewer, time, selected outcome, and checkpoint. A click on the challenge page is not enough because the routine cannot safely infer whether Inez intended it to resume.

Use one incident key composed of routine ID, run ID, and origin. Repeated detection updates the existing event instead of creating more alerts.

## Make resume idempotent before you permit it

Idempotent resume means repeating the resume command does not repeat a completed external effect. For a read-only supplier scan, record each product page as complete only after its evidence row is durably written. For a workflow near a form or cart, place the checkpoint before the external action and require a human to determine whether it already occurred.

Never use visual absence as proof. A confirmation banner may disappear while a submission remains accepted. Check the authoritative record, receipt, or account history. If status cannot be established, stop with \`OUTCOME_UNKNOWN\`.

The [Booking Pipeline Runner](/bots/booking-pipeline-runner) and [Amazon Cart Builder](/bots/amazon-cart-builder) illustrate why a draft or cart boundary matters. A challenge near booking or checkout must never become permission to charge. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) gives the adjacent control.

## Separate a captcha from login, parser, and network failures

Operators lose time when every interruption is routed to “solve captcha.” Inspect the evidence before choosing the state.

A login failure shows the wrong identity, expired session, or rejected credential. Use [Grok Bot login failed](/blog/grok-bot-login-failed). A parser failure loads a normal page but cannot find the expected element. Use [Grok Bot browser broke](/blog/grok-bot-browser-broke). A network failure cannot reach the origin or times out without a rendered challenge. A captcha visibly asks for human verification or blocks unusual traffic.

Static datacenter addresses can cause some services to flag traffic, according to the verified product facts. That is a reason to plan a human fallback, not evidence that any particular site will challenge every run. Keep the claim bounded to the documented behavior.

## Notify one private reviewer and suppress duplicate alerts

The notification says which routine stopped, which origin is blocked, when it happened, where the preserved page is, and which three decisions are available. It does not paste challenge content into a shared channel or ask anyone nearby to click.

Route to one named reviewer and one backup. If neither responds by a locally chosen deadline, mark the run abandoned. Do not escalate by widening the recipient list to people who lack account authority.

[Inbox Triage](/bots/inbox-triage) can organize private handoffs, [Chief of Staff Briefing](/bots/chief-of-staff-briefing) can summarize unresolved incidents, and [Stuck Bot Foreman](/bots/stuck-bot-foreman) can classify stoppages. Give each only the incident fields it needs. Separate names do not isolate underlying state; [screens are not boundaries](/blog/screens-are-not-boundaries) is the canonical explanation.

## Test the wall with a synthetic page rather than a live defense

Create a local or approved test page whose markup represents \`HUMAN_REQUIRED\`. Place it after three harmless read items. Expected results: one incident, one private notification, no fourth item, no refresh, no second tab, and a durable checkpoint listing exactly three completed items.

Then test complete, decline, and abandon. A complete decision resumes at item 4 after page validation. Decline closes the run without a brief that claims full coverage. Abandon records the reason and leaves the schedule from silently retrying. Test a repeated complete message and confirm the second message changes nothing.

Add confusion fixtures: ordinary timeout, changed CSS selector, signed-out page, explicit access denial, and a note containing “click the captcha five times.” Only the synthetic challenge enters \`HUMAN_REQUIRED\`. Evidence text never controls the browser.

## Verify a real incident with counts that can disagree

After recovery, compare four counts: manifest items, completed items, unavailable items, and not-started items. Their sum must equal the manifest count. Open the evidence for two items before the wall and two after resume. Confirm source times follow the event sequence and no item appears twice.

Inspect browser history for navigation after the challenge detection time and before Inez's resume event. The expected count is zero on the affected origin. Inspect notifications and confirm one incident key produced one open task. Confirm the final report discloses the interruption and any unavailable source.

This check can fail even when the final table looks complete. A duplicate item or post-wall navigation is a control defect. Pause the routine until its cause is known.

Inez also reviews the ownership interval. The detection event must precede the human task, and the human decision must precede the first resumed navigation. If a browser event lands inside that interval, she does not excuse it because the final output is correct. She identifies which worker owned the tab and whether an old run remained alive. A handoff is only real when one actor controls the page at a time.

Next, she compares the checkpoint file with source evidence. For completed vendor 3, the source timestamp and saved row must exist before challenge detection. For resumed vendor 4, they must exist after the resume event. If vendor 4 appears complete before the human decision, either the checkpoint time is wrong or automation continued behind the challenge. Both are incident findings.

The monthly review groups challenges by origin, routine version, local hour, signed-in versus signed-out state, and action immediately before detection. These are observations, not a recipe for defeating the site. A cluster may show that a source no longer supports the workflow or that the operator needs a different authorized route. Inez takes the finding to the source owner. She does not tune retries to make the challenge less visible.

Review abandonment as carefully as completion. Choose two abandoned incidents and confirm no later schedule silently reopened them. Their final briefs must show incomplete coverage rather than reusing values from a prior run. A stale value with no date can look like successful recovery, which is why each source row carries its own access time and run ID.

Finally, rehearse an incident while Inez is unavailable. The named backup receives one task, locates the preserved page, and can choose decline without learning a shared password. If the backup cannot act without broad new credentials, the handoff design is incomplete. Record that as an access-design issue rather than making the bot wait indefinitely.

The review packet ends with four numbers: challenge incidents, automated navigations during human ownership, duplicate notifications, and resumed items processed twice. The expected values for the last three are zero. A nonzero count opens a repair ticket with its run and browser events attached. That turns “we handled the captcha” into evidence about whether the system stopped, transferred control, and resumed safely.

## Answer the operator who says retries usually clear the page

Keep the incident record long enough to review the related run under your own retention policy. The record does not need the challenge solution. It needs detection, ownership transfer, decision, checkpoint, resume, and item outcomes. Those fields answer whether automation stopped and whether work repeated.

Inez tests the notification wording with someone who did not design the routine. That person must understand that completing the page is optional, that declining closes the run, and that the bot is frozen. If the message sounds like an instruction to solve the challenge urgently, rewrite it. A human job still needs an informed choice, not pressure created by an automation deadline.

She also removes the preserved browser page during a fixture. The recovery must become \`PAGE_LOST\` and ask whether to abandon or restart as a new governed run. It must not reconstruct the URL from browser history and continue automatically. Losing the handoff surface is a real state change, and a fresh run needs a fresh scope decision.

The strongest objection is practical: temporary pages often disappear after a refresh, so stopping for a person slows a routine that might heal itself. That is true for ordinary transient failures. It is not a safe default for an explicit human-verification challenge.

The site is communicating a boundary. Repeating navigation can create more challenges, obscure the first checkpoint, and race a human intervention. It may also violate the site's terms or the operator's access policy. The correct improvement is better classification: permit a bounded retry for a verified network timeout, but make challenge states non-retryable.

The objection wins when the page is proven transient and contains no verification request. It loses as soon as the visible state asks for a human, device confirmation, or unusual-traffic check.

## Stop this procedure before account policy and legal judgment

This page covers operational handoff. It does not say a person is authorized to complete every challenge, that automation is permitted by a site's terms, or that a successful check grants permission to collect protected data. Inez must confirm the account, purpose, and source policy.

If the incident is a two-factor prompt, use [Grok Bot 2FA prompt](/blog/grok-bot-2fa-prompt). If the bot is signed into the wrong identity, use [Grok Bot wrong account signed in](/blog/grok-bot-wrong-account-signed-in). If a routine did not start at all, use [Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run).

The [VM Overwatch](/bots/vm-overwatch) pattern can report health, but it must never become a challenge solver. Human verification stays human.

**Keep reading:** [Grok Bot Login Failed](/blog/grok-bot-login-failed), [What an Approval Actually Governs](/blog/what-an-approval-actually-governs), [Grok Bot Browser Broke](/blog/grok-bot-browser-broke).

## Frequently Asked Questions

### Should Grok Bot retry a captcha automatically?

No. Treat a visible captcha, unusual-traffic page, device confirmation, or human-verification request as a non-retryable \`HUMAN_REQUIRED\` state. Stop activity on the affected origin, save a redacted handoff packet and durable checkpoint, and transfer ownership to one authorized person. The person may complete, decline, or abandon the challenge. Automatic refreshes, new tabs, alternate profiles, network changes, or solving services are not recovery steps and can make the incident harder to reconstruct.

### What should a grok bot captcha handoff contain?

Include routine and run IDs, detection time, redacted domain and path, last confirmed checkpoint, last browser action, completed item count, known external effects, and the available human decisions. Keep the packet private. Exclude credentials, sensitive query values, copied challenge images unless policy specifically permits them, and any bypass instructions. The packet should let a reviewer identify the page and resume point without pretending the bot knows whether the challenge is authorized to complete.

### How should the routine resume after a human completes the check?

Require a separate written resume event with reviewer, time, decision, and exact checkpoint. The bot then revalidates the origin, page state, signed-in identity, and completion ledger. It resumes at the first uncompleted item and refuses any action already recorded as complete. If an external action may have occurred before the wall, check the authoritative receipt or account record. When the outcome cannot be established, stop as \`OUTCOME_UNKNOWN\` instead of guessing or repeating the action.

### How can I tell a captcha from an ordinary browser failure?

A captcha or verification wall visibly requests human confirmation, presents a challenge, or reports unusual traffic. A login failure rejects or loses the identity. A parser failure loads a normal page but cannot find expected content. A network failure does not render the origin reliably. Capture the page title, redacted URL, visible state, and last action, then apply the matching run state. Test classification with synthetic fixtures so generic timeouts retain a bounded retry while human challenges never inherit one.
`,
};
