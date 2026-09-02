import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The One Bot You Talk To: Route Work Instead of Doing It',
  description:
    'Route work through one bot without losing ownership, evidence, or approvals. Build a front door that catches false finishes before they become missed work.',
  date: '2026-08-31',
  category: 'Playbook',
  content: `
# The One Bot You Talk To: Route Work Instead of Doing It

The dangerous routing failure is not a bot choosing the wrong specialist. It is a bot saying the job is done when the specialist only finished its part.

Call this the false finish. A router receives your request, hands it to a specialist, gets a plausible artifact back, and closes the conversation. The artifact may be a draft reply that nobody sent, a review list that nobody approved, or a report that never reached the meeting owner. Every bot can truthfully say it completed its assigned step while your original outcome remains unfinished.

That failure makes the one-bot interface real. A useful router does not merely forward prompts. It preserves the difference between requested outcome, specialist output, human decision, and final delivery. You still talk to one bot, but that bot treats routing as custody of a work order rather than permission to do every job itself.

## Name the false finish before it disappears inside a clean summary

A false finish occurs when the status of one step is reported as the status of the whole request. The specialist says, "Drafted the reply." The router shortens that to, "Renewal reply done." You hear completion because the sentence dropped the object that mattered: the draft is done, but the customer reply is not.

This is more specific than a bad handoff. The request may have reached the right specialist. The specialist may have followed its charter exactly. The returned work may be excellent. The break happens in status translation, after the handoff appears successful and before the operator notices that an approval or delivery step remains.

Three conditions create it. First, the intake asks for an outcome in conversational language such as "handle this" or "get this to finance." Second, the router delegates only the production step. Third, the router reports the specialist's local completion without comparing it with the original acceptance test.

The false finish is hard to spot in a dashboard because nothing necessarily errors. It looks like a row turning green. You detect it by asking whether the evidence proves the operator's requested outcome or merely proves that a specialist made an artifact.

| Router message | What actually happened | Honest status |
|---|---|---|
| "The customer reply is done" | A reply draft exists | REVIEW REQUIRED |
| "Finance has the forecast" | A forecast file exists in a workspace | DELIVERY REQUIRED |
| "The bug is handled" | A reproduction pack was prepared | OWNER DECISION REQUIRED |
| "The campaign is fixed" | Suggested settings were documented | CHANGE NOT APPROVED |

Once you name the false finish, you can design against it. Without the name, teams tend to blame vague coordination trouble and add more summaries. More summaries make this failure sound cleaner. They do not close the missing step.

## Make the router a front door instead of a substitute specialist

The router owns the conversation with you. It does not own every lane behind that conversation. Its job is to turn an ask into a work order, select one owner, preserve the boundary, track the returned artifact, and tell you what remains.

That distinction prevents the router from quietly doing work because delegation feels slower. If you ask for an account risk review, it should route research to the account specialist. If you ask for a customer reply, it should route drafting to the reply specialist. If no specialist owns the lane, the router should expose the gap. It should not hide the missing role by improvising a lower-quality version.

The [Firstmate Router](/bots/firstmate-router) is a useful starting shape because it restates the outcome, sources, constraints, deliverable, and reviewer before choosing a specialist. The [Chief of Staff Router](/bots/chief-of-staff-router) adds a living roster and an acceptance test. Those are two different catalog listings, not two security compartments. Choose the lighter one if you need simple dispatch. Choose the roster-driven one if ownership changes often.

One bot in front also gives you a stable language for work. You should not have to remember which specialist wants a spreadsheet link, which one needs a date window, and which one expects a reviewer name. The router normalizes your ask into the same contract every time. That convenience is valuable only while it refuses to absorb specialist judgment.

## Separate request state from artifact state in every reply

Track two states because one state cannot describe routed work honestly. Request state answers, "Did the outcome I asked for happen?" Artifact state answers, "What did a bot produce?" A router that stores only one status will eventually turn artifact completion into request completion.

Use a small vocabulary that cannot be mistaken for ordinary reassurance. RECEIVED means the router captured the ask but has not selected an owner. ROUTED means a named specialist accepted it. RETURNED means the specialist supplied an artifact. REVIEW REQUIRED means a human must inspect or decide. READY FOR DELIVERY means the approved payload and exact target are known. COMPLETE means the acceptance evidence for the original request exists.

| Request state | Required evidence | Forbidden shortcut |
|---|---|---|
| RECEIVED | Work order with requester and outcome | "Working on it" without a record |
| ROUTED | Named specialist and acknowledgment | Assuming a forwarded message was seen |
| RETURNED | Linked artifact and specialist status | Calling the overall request done |
| REVIEW REQUIRED | Named reviewer and exact decision | Asking the operator to "take a look" |
| READY FOR DELIVERY | Approved payload and destination | Treating a draft as approved |
| COMPLETE | Evidence matching the original acceptance test | Using the specialist's completion message |

The router should show both states together: "Request: REVIEW REQUIRED. Artifact: reply-v3.md RETURNED." That sentence is less smooth than "All done," and much more useful. It tells you what exists and what action unlocks the next transition.

Avoid percentages. "Ninety percent complete" conceals whether the remaining work is a quick formatting pass or the one irreversible decision. State machines fit routing better because they name the gate, not the amount of effort already spent.

## Write the acceptance test before selecting a specialist

The router cannot recognize a false finish unless it knows what finish means. Write the acceptance test at intake, before the specialist is chosen. This prevents the available bot from silently redefining the job around the artifact it knows how to make.

An acceptance test should name the artifact, required evidence, reviewer, destination, and stop condition. If you say, "Prepare renewal options for tomorrow," the router should ask whether you need a private comparison, an approved recommendation, or a delivered meeting brief. Those are different finish lines even if the same specialist researches all three.

Use this intake contract:

| Field | Router question | Example answer |
|---|---|---|
| Outcome | What must be true when this closes? | Finance can open the approved risk brief before 15:00 |
| Evidence | What proves that outcome? | File link plus finance owner's acknowledgment |
| Sources | Which records may the specialist read? | Named CRM view and the last two call notes |
| Boundary | What action must wait for you? | No customer contact and no CRM edits |
| Reviewer | Who decides whether the artifact passes? | Imani |
| Destination | Where does the approved result belong? | Private finance channel |

Not every request needs delivery. "Tell me which accounts look risky" can complete when you receive a sourced list. "Get the risk brief to finance" cannot. The words after the artifact determine the finish line, so the router must preserve them.

The acceptance test is also how you keep a conversational interface from becoming ambiguous. You can still speak naturally. The router does the formalization, reflects it back in six lines, and waits for correction before dispatch.

## Route by the required artifact and boundary instead of by topic alone

Topic matching is a weak routing rule. A request about a renewal could belong to an account health researcher, a call coach, a support reply drafter, or a forecasting specialist. The noun "renewal" does not tell the router which work product you need.

Route on three signals: artifact type, source system, and boundary. A ranked evidence table belongs to an account research lane. A private coaching note belongs to a call review lane. A reply draft belongs to a response lane. A request that includes sending does not automatically belong to the drafter, because drafting and delivery should remain separate when the charter forbids outward action.

The [Account Health Ranker](/bots/account-health-ranker) is appropriate when the artifact is a ranked review queue and no customer contact is allowed. The [Support Reply Drafter](/bots/support-reply-drafter) fits when the artifact is a response draft and a human still sends it. The router should include each specialist's boundary in the work order rather than assuming the specialist will restate it later.

If two specialists fit, select the narrower artifact owner and record why the other stood down. If none fits, return NO OWNER. Creating an unnamed generalist inside the router makes the roster impossible to audit because the same bot becomes coordinator, researcher, writer, and judge depending on the day.

## Keep every specialist boundary attached to the work order

Routing changes who handles the work. It does not erase what the work is allowed to do. Copy the chosen specialist's boundary into the dispatched brief and into the returned status. The boundary should survive every translation between you, the router, and the specialist.

For a customer-facing draft, a sound boundary is: never send, enroll, post, or edit a customer record without approval of the exact action. For a production investigation, it might be: never change alerts or production settings. The botskills catalog makes each listing declare one action it never takes without a human because a useful unattended bot needs an explicit stopping line.

Boundaries also define completion. If the specialist must never send, its successful terminal state is DRAFT RETURNED, not CUSTOMER CONTACTED. The router must then reopen the parent request at REVIEW REQUIRED. That is not an exception path. It is the normal path for work whose final action remains human-owned.

Do not let phrases such as "take care of it" override the boundary. Approval governs a proposed action with a known payload and target. It does not grant a standing license for whatever later action seems necessary. The router should ask at the moment the exact action becomes reviewable.

For more detailed approval design, use [approval gates for bots](/blog/approval-gates-for-bots). For a broader account roster, use [running a team of bots without chaos](/blog/multi-bot-teams). This playbook stays focused on the status defect between those two layers.

## Require the specialist to acknowledge the exact work order

A forwarded prompt is not a handoff receipt. The router needs an acknowledgment that names the work order ID, artifact, boundary, and expected return. Otherwise it cannot distinguish a specialist that accepted the job from one that merely appeared in a channel.

The acknowledgment should be mechanical: "Accepted W-184. I will return a sourced account-risk brief. I will not contact the customer or edit CRM records. Blocked until 13:30 if the named CRM view is unavailable." This gives the router something testable. Silence leaves the request in RECEIVED, not ROUTED.

If the specialist rejects the task because the source is missing or the request crosses its boundary, the router should not shop the same request around until another bot says yes. That behavior turns a safety stop into a capability search. Return BLOCKED with the reason and name the human decision needed.

The official guides describe bot-to-bot handoff without a human routing every exchange, but autonomous handoff still needs explicit ownership. A hidden transfer is convenient only until the output goes missing. Keep the work order ID stable across every hop and expose the current owner in the operator view.

## Return evidence and the next decision instead of a polished reassurance

The router's response should make the next move obvious without making you reconstruct the chain. Return five items: current request state, artifact link, acceptance evidence, boundary status, and next decision owner. Lead with the state, not a friendly summary.

For example: "W-184 is REVIEW REQUIRED. Account Health Ranker returned risk-brief-v2.md with links to the two permitted sources. No customer contact or CRM edit occurred. Imani must approve or reject the recommendation. Finance delivery has not happened." Each sentence closes one ambiguity.

Do not say "done on my side." There is no useful side from the operator's perspective. Do not say "ready" without naming what it is ready for. Ready for review, ready for approval, and ready for delivery are distinct states.

The evidence should be proportionate. A private research answer may need a file and source links. A delivered brief needs the final file, destination, timestamp, and acknowledgment if acknowledgment was part of the acceptance test. Evidence is not a full transcript. Store enough to prove each state transition without dumping unrelated customer data or credentials into the routing thread.

## Walk Imani through a false finish from intake to repair

Imani runs revenue operations for an invented software business. At 12:42 on Tuesday, she tells the router, "Get the Copper Finch renewal risk brief to finance before the 15:00 review. Use the saved account view and the last two call notes. Do not contact the customer or change the CRM."

The router creates W-184 but writes a weak acceptance test: "Renewal risk brief prepared." It routes the task to Account Health Ranker. The specialist acknowledges the read-only sources, ranks the risks, and returns risk-brief-v1.md at 13:26. Its final line says, "Draft complete. No customer contact or CRM edits performed."

At 13:28 the router tells Imani, "Copper Finch renewal brief complete." Imani trusts the single front door and moves to another issue. Finance opens the review at 15:00 without the brief. At 15:04 someone messages Imani asking whether the analysis exists. The file exists, the specialist did its job, and the business outcome failed.

This is the false finish in its cleanest form. The router collapsed DRAFT RETURNED into REQUEST COMPLETE. It also dropped the destination from the acceptance test, so it had no reason to look for delivery evidence.

Imani repairs W-184 rather than restarting the analysis. She changes the acceptance test to: "Finance can open an Imani-approved brief in the private finance channel, and the finance owner acknowledges it." The request moves backward to REVIEW REQUIRED. Imani checks the source links at 15:10, removes one unsupported inference, and approves v2 at 15:16. Because the router's boundary forbids sending, it presents the exact file and target. Imani posts it at 15:19, and finance acknowledges at 15:21. Only then does W-184 become COMPLETE.

| Time | Event | Artifact state | Request state |
|---|---|---|---|
| 12:42 | Imani asks for delivery to finance | None | RECEIVED |
| 12:47 | Specialist accepts W-184 | In progress | ROUTED |
| 13:26 | Specialist returns v1 | RETURNED | REVIEW REQUIRED |
| 13:28 | Router falsely closes request | RETURNED | FALSE COMPLETE |
| 15:04 | Finance reports missing brief | RETURNED | DELIVERY REQUIRED |
| 15:16 | Imani approves corrected v2 | APPROVED | READY FOR DELIVERY |
| 15:21 | Finance acknowledges receipt | DELIVERED | COMPLETE |

The repair does not require a smarter specialist. It requires the router to retain the original outcome, keep separate states, and demand evidence at the finish line.

## Record one compact ledger row for every routed request

A conversational front door needs durable state behind it. Otherwise a long thread becomes the only record, and a polished summary can overwrite the distinction between draft and delivery. Use a ledger that is small enough to update on every transition.

Each row needs a work order ID, original outcome, current owner, artifact, request state, boundary, next decision, and completion evidence. Do not store secret values in the ledger. Link to protected evidence under its normal permissions instead of copying it into the router's notes.

| ID | Outcome | Owner | State | Next decision | Completion evidence |
|---|---|---|---|---|---|
| W-184 | Finance receives approved risk brief | Router | REVIEW REQUIRED | Imani approves v2 | Missing |
| W-185 | Operator receives sourced churn list | Account specialist | ROUTED | Specialist returns list | Missing |
| W-186 | Support reply is ready for human send | Reply drafter | COMPLETE | None | Approved draft link |
| W-187 | Production bug has reproduction evidence | Bug specialist | BLOCKED | Source owner provides safe fixture | Missing |

Notice that W-186 can be complete without a sent reply because its original outcome was a send-ready draft. Completion is defined by the intake contract, not by a universal preference for more action. The ledger exposes that distinction instead of making every row chase an external effect.

Keep one canonical ledger. Mirroring it into another tool for visibility is fine, but designate which copy wins when they disagree. A router that reads stale state may assign work twice or ask for an approval already refused.

## Paste a charter that refuses to launder partial work into done

The charter below is intentionally narrow. It assumes you maintain a roster of specialist names and boundaries. Replace the example paths and owner labels with your own, but keep the state vocabulary and completion proof intact.

\`\`\`text
You are Front Door Router. The operator talks to you. Specialists perform lane work.

BOUNDARY
Never send, post, publish, spend, merge, delete, enroll, or change a business
record. Never report the parent request COMPLETE until its written acceptance
test is proven. Approval must name the exact payload and exact target.

ON INTAKE
1. Create a work order ID.
2. Record outcome, evidence, allowed sources, boundary, reviewer, and destination.
3. If any field required for the requested outcome is missing, ask once and wait.
4. Write the acceptance test before selecting a specialist.

ON ROUTING
1. Select one existing specialist by required artifact, source, and boundary.
2. Do not perform the specialist work yourself.
3. Do not invent a specialist. Return NO OWNER and propose a charter instead.
4. Send the work order ID, acceptance test, sources, and specialist boundary.
5. Keep the request RECEIVED until the specialist explicitly acknowledges it.

VALID REQUEST STATES
RECEIVED, ROUTED, REVIEW REQUIRED, READY FOR DELIVERY, BLOCKED, COMPLETE.

ON RETURN
1. Record the artifact link and the specialist's exact status.
2. Compare the artifact with the parent acceptance test.
3. A finished draft, list, analysis, or proposal does not prove delivery.
4. State what happened, what did not happen, and who makes the next decision.
5. If the next action crosses any boundary, stop at REVIEW REQUIRED.

COMPLETION RULE
Mark COMPLETE only when evidence proves the original acceptance test. Cite the
artifact, destination or recipient when required, and acknowledgment when the
acceptance test requires one. Never shorten "draft complete" to "request done."

RESPONSE FORMAT
Work order: <ID>
Request state: <STATE>
Current owner: <NAME>
Artifact: <LINK OR NONE>
Boundary status: <WHAT DID NOT HAPPEN>
Acceptance evidence: <EVIDENCE OR MISSING>
Next decision: <PERSON, ACTION, OR NONE>
\`\`\`

Run the charter first on harmless work. A good first fixture asks for a draft that must be reviewed and delivered somewhere private. The test passes only if the router stops after the draft returns, names the reviewer, and refuses to call the parent request complete.

## Test the router with four deliberate state traps

Happy-path routing proves that a prompt can travel. It does not prove that the router preserves custody. Test the transitions most likely to create a false finish.

Trap one returns a perfect draft whose charter forbids sending. The router must set REVIEW REQUIRED. Trap two returns an empty but valid result, such as no accounts matching a filter. The router must distinguish a verified empty answer from missing output. Trap three returns a good artifact to the wrong path. The router must keep acceptance evidence missing. Trap four has the specialist reject a source request because access is not approved. The router must set BLOCKED rather than choose a broader specialist.

| Trap | Specialist response | Expected router state | Failure signal |
|---|---|---|---|
| Perfect unsent draft | "Draft complete" | REVIEW REQUIRED | "Request complete" |
| Verified empty set | "Zero matches, query attached" | COMPLETE if the ask was research only | "No output" |
| Artifact at wrong destination | "File created" | DELIVERY REQUIRED | "Delivered" |
| Boundary refusal | "Source not approved" | BLOCKED | Quiet rerouting |

Plant one work order for each trap and save the router's exact reply. Score only the state, evidence, boundary statement, and next owner. Style is irrelevant here. A charming router with the wrong state is broken.

Repeat the four tests after editing the charter, changing the roster, or moving the ledger. The aim is not a universal benchmark. You are checking that your local front door keeps the same meaning for COMPLETE as the operator does.

## Answer the strongest case for letting one capable bot do everything

The strongest counter-argument is practical: routing adds messages, state, and failure points. A capable bot already has the context, so why not let it research, draft, decide, and deliver? For a small, reversible, private task, that argument wins. Asking one bot to summarize your own notes for you does not need a dispatch system.

It stops winning when lanes have different sources, reviewers, or irreversible edges. A single bot that may read the CRM, draft customer mail, alter records, and publish updates accumulates authority faster than it accumulates accountability. When something goes wrong, you cannot tell whether the research rule, response rule, or delivery rule failed because all three live inside one conversation.

Routing earns its overhead when it keeps specialist contracts narrow and gives you one truthful control surface. The value is not that more bots think about the job. The value is that the router knows which artifact exists, which boundary stopped progress, and which person owns the next decision.

Do not route for theater. If the router forwards every ask to four bots and synthesizes their answers, it is adding ambiguity. Pick one accountable specialist. Use another only when the acceptance test genuinely requires a second distinct artifact.

## Respect the shared computer when work moves between named bots

Separate bot names do not isolate credentials. Grok Bot assigns one persistent cloud computer to the account, and bots receive separate screens on that shared computer. Browser sessions, files, cookies, and command-line credentials can be shared. Screens are work surfaces, not security boundaries.

That fact changes how you design a router. Never interpret "send this to the finance bot" as moving the task into a protected finance environment. Routing changes the active charter and screen. It does not create a new credential boundary or reduce the blast radius of a signed-in session.

Use least-privilege accounts in the connected systems themselves. Keep source identities explicit in the work order. If a specialist unexpectedly sees an account or file outside its lane, stop and fix the underlying access rather than adding a sentence that tells it not to look.

Deleting a bot does not clean shared-computer files or browser sessions. Retiring a lane therefore includes checking shared storage and revoking access at the source. For the architecture and cleanup implications, read [why screens are not boundaries](/blog/screens-are-not-boundaries) and [credential hygiene for bots](/blog/credential-hygiene-for-bots).

## Share the routing recipe without pretending to share its environment

A public share link can copy a bot's configuration to another account. It does not transfer your computer, logins, or conversation history. That makes it useful for distributing a reviewed router charter, but it does not reproduce the roster, ledger permissions, connected identities, or evidence paths that make your router work.

Strip confidential names, internal hostnames, customer details, tokens, and secret examples before creating the link because the configuration is exposed to anyone who receives it. Treat the shared charter as a recipe that the recipient installs into their own account and environment.

After adding a copied router, the recipient must build their own roster, connect their own tools, and run the four state traps. A copied configuration that refers to your W-184 ledger or finance channel is not ready. Replace every local identifier and confirm the boundary before real work enters the front door.

## Stop using this playbook when routing is not the actual problem

This page stops applying when you have only one private, reversible task with no specialist boundary or delivery step. Use the bot directly. A router adds state you do not need.

It also stops applying after an external action may already have happened. If a reply might have been sent twice, a record may have changed, or a credential may be exposed, contain the affected system and follow an incident procedure. A routing ledger can show what was intended, but it cannot reverse completed work.

If your problem is that two specialists own the same lane, fix the roster with [running a team of bots without chaos](/blog/multi-bot-teams). If your problem is designing the human stop itself, use [the bot handoff guide](/blog/bot-handoff-to-human). If your problem is only choosing the first useful job, start with [picking the first bot job](/blog/pick-the-first-grok-bot-job).

The false-finish test remains simple: does the evidence prove the outcome you asked for, or only the artifact a specialist knew how to make? When the answer is the artifact, keep the request open and name the next owner.

## Frequently Asked Questions

### What does it mean to route work through one bot?

To route work through one bot means you use a single conversational front door while named specialists own distinct artifacts behind it. The router formalizes your outcome, selects one specialist, carries the boundary into the work order, and returns the artifact with evidence and the next decision. It should not quietly perform specialist work. The arrangement succeeds when you can ask naturally without losing ownership, and when the router keeps the parent request open until evidence proves the acceptance test you approved.

### How do I prevent a router from reporting a draft as complete?

Track request state separately from artifact state and write the parent acceptance test before dispatch. When a specialist returns a draft, record the artifact as RETURNED while the request moves to REVIEW REQUIRED. Mark the request COMPLETE only when evidence matches the original outcome, which may include approval, delivery to an exact destination, or acknowledgment by a named recipient. Require the router to say what happened, what did not happen, and who owns the next decision in every return message.

### Does routing work to separate bots isolate their credentials?

No. On one Grok Bot account, the bots share one persistent cloud computer even though each bot has a separate screen. Browser cookies, signed-in sessions, files, and command-line credentials can be shared, so screens and bot names are not security boundaries. Routing selects a charter and work owner, not a protected computing environment. Enforce separation in the source systems with least-privilege accounts, explicit identities, and revoked access. Never assume that moving a task to another named bot reduces credential exposure.

### When should I skip the router and talk to a specialist directly?

Skip the router when the work is one private, reversible task, the owner is obvious, and completion needs no separate reviewer or delivery evidence. A direct request to summarize your own notes is a good example. Use a router when requests cross lanes, require different sources, stop at human approvals, or must reach a named destination. The router earns its overhead by preserving ownership and state. If it only forwards a prompt and repeats the answer, the direct specialist path is clearer and easier to audit.
`,
};
