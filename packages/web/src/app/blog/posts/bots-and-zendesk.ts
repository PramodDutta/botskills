import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots and Zendesk: Permissions and What To Automate',
  description:
    'Build a zendesk automation bot that sorts queues and drafts useful replies while keeping customer messages, ticket state, and admin changes under review.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Bots and Zendesk: Permissions and What To Automate

A Zendesk bot becomes dangerous at the moment a useful draft turns into a customer message. Reading a ticket, finding related cases, and preparing a concise internal note can remove most of the slow work. Sending, merging, deleting, or changing the state of that ticket can create an external commitment or hide work before a person sees it.

The safe design is not a weak bot. It is a bot with a precise job: gather context, classify against a fixed vocabulary, draft inside a private review surface, and report exceptions. A person remains responsible for every message and consequential state change. That line is what lets you leave the workflow running without hoping that a prompt will substitute for permissions.

This guide gives you the permission sequence, charter, rollout, failure checks, and limits for a practical setup. It does not assume that a particular connector is present. Confirm the authentication and permission controls shown by your Zendesk plan and bot runtime before connecting anything.

## Start the Zendesk bot with queue visibility, not reply authority

The first useful job is a read-only queue brief. Give the bot access through a dedicated account that can see only the groups and brands required for the workflow. Ask it to summarize new tickets, surface long waits, identify repeat contacts, and show the evidence behind every label. Do not begin with customer replies just because replying appears to save the most time.

Support work is mostly context reconstruction. An agent opens a ticket, reads the thread, checks earlier contacts, finds the relevant help article, notices the customer tier, and determines whether another incident is already open. A bot can assemble that packet without deciding what your company promises. The human then spends attention on judgment instead of search.

Treat missing visibility as a reportable condition. If the account cannot see one brand, private attachment, restricted organization, or older ticket, the bot should say that its answer is partial. Silence is not proof of a clean queue. Put the visible groups, brands, and date range at the bottom of every report so reviewers can distinguish no evidence from no access.

## Separate Zendesk reading, drafting, and acting into permission tiers

Permission names vary by account configuration, role, app, and integration path. Evaluate the controls in front of you by consequence. Reading exposes customer data. Drafting creates text that could be mistaken for approved policy. Acting changes what customers and teammates experience. Administration changes the rails that constrain all three.

| Permission tier | Typical work | Main failure | Starting decision |
|---|---|---|---|
| Read | View tickets, users, organizations, fields, and help content in scope | Private customer information enters an overly broad bot context | Grant only selected groups and brands |
| Analyze | Search history, group tickets, and calculate queue summaries | Partial access produces confident but incomplete reporting | Grant after testing known hidden cases |
| Draft | Write a private note or produce a draft outside Zendesk | Draft language is mistaken for an approved response | Grant only with a visible draft label |
| Act | Reply, assign, change status, merge, tag, or edit records | Customers are contacted or work disappears from a queue | Withhold during the initial rollout |
| Administer | Change roles, triggers, automations, views, fields, or channels | The bot edits the controls intended to constrain it | Never grant to the operating bot |

This tiering also helps when an authorization screen bundles several actions. If a requested scope combines reading with replying, do not rationalize the reply permission as unused. Choose a narrower integration path, use a purpose-built account, or keep the output outside Zendesk until a person pastes it. A charter can explain intent, but the credential decides what a failure can actually do.

## Treat every Zendesk reply as an external commitment

A public reply is not ordinary text generation. It is your company speaking to a named person about a real purchase, outage, refund, privacy concern, or deadline. Even a technically correct answer can be wrong for the customer because it ignores an exception already promised elsewhere. Once delivered by email or another channel, removing it from the ticket does not remove it from the recipient's inbox.

The permanent boundary for this setup is simple: the bot never sends a customer-facing message without a human approving the exact text for the exact ticket. Approval must be tied to one proposed action. A general instruction such as "send routine answers" is not approval for a later message whose facts and audience did not exist when the instruction was written.

This boundary should exist in both access and procedure. Withhold reply capability where possible. If the integration cannot separate private notes from public replies, do not let it write inside the ticket at all. Put drafts in a private report or staging queue. The [support reply drafter](/bots/support-reply-drafter) follows this pattern: it prepares the response, but the human owns the send.

## Map Zendesk changes by their customer and queue effects

Small-looking updates can have larger consequences because ticket fields drive views, routing rules, service targets, notifications, and downstream integrations. Before allowing any write, document what observes that field and what happens next.

| Proposed change | Immediate effect | Possible second-order effect | Safe default |
|---|---|---|---|
| Add a public reply | Customer receives company text | Notification delivery and a written commitment | Require exact-message approval |
| Add a private note | Teammates see internal context | Mentions can notify people and sensitive text becomes part of the record | Allow only a fixed note format |
| Change status | Ticket enters or leaves a working queue | Triggers, service timers, and follow-up workflows may react | Human only |
| Change assignee or group | Ownership moves | Ticket vanishes from one person's view before another notices | Recommend, do not execute |
| Apply a tag or field value | Classification changes | Views, reports, triggers, or integrations may match it | Fixed allowlist, shadow first |
| Merge tickets | Records and conversation context combine | History becomes harder to separate and one ticket closes | Human only |
| Edit user or organization data | Shared customer record changes | Future routing and reporting use the new value | Human only |
| Change a trigger or automation | Future tickets follow new logic | One mistake repeats across the queue | Never grant |

Do not assume that restoring a field reverses everything it triggered. A notification may already be delivered. A downstream workflow may already have created another record. A service timer may have recorded a transition. Reversibility means more than finding an opposite button.

## Build the first Zendesk workflow around an internal context packet

For each new ticket, produce one compact packet that a support agent can verify quickly. Include the customer's stated request, exact quotations for any promise or deadline, relevant prior tickets with links, the help-center source used, suggested classification from a fixed list, and a draft response clearly marked as unsent.

The bot should separate observation from inference. "Customer wrote that access failed after changing domains" is evidence. "Domain verification is broken" is a diagnosis. Put those on different lines. If it cannot find a policy source, it should say "policy not found" instead of completing a plausible answer from general knowledge.

Use a fixed output shape because reviewers learn where errors hide. When the same fields appear in the same order, an agent notices that the source link is missing or that a previous promise was not quoted. Free-form prose can sound polished while concealing gaps. The [support queue pass](/bots/support-queue-pass) is a useful catalog model for keeping the deliverable focused on prioritization and evidence rather than autonomous resolution.

## Paste a Zendesk charter that makes the stop line executable

Replace bracketed values, keep the denial clauses, and test it against a sandbox or non-customer queue before using production data.

\`\`\`text
You are the Zendesk Queue Analyst for [BRAND] and [GROUP].
You read tickets and prepare private review packets. You never send.

SCOPE
- Read only tickets in [GROUP_IDS] created or updated in the last 90 days.
- Use only these labels: billing, access, bug, how-to, cancellation,
  incident, feature-request, and other.
- For every fact about policy, cite [APPROVED_HELP_CENTER_DOMAIN].

OUTPUT FOR EACH NEW TICKET
1. REQUEST: two sentences, grounded in the customer's words.
2. PROMISES: exact quotations of prior promises, with ticket links.
3. HISTORY: up to three relevant prior tickets, with one-line relevance.
4. CLASSIFICATION: one allowed label and a confidence note.
5. SOURCE: the help article used, or "policy not found".
6. DRAFT, NOT SENT: a proposed response for human review.
7. NEXT HUMAN ACTION: one recommended owner or investigation.

BOUNDARY
Never send a public reply, email, message, or satisfaction request.
Never change status, priority, assignee, group, brand, requester, or followers.
Never merge, delete, close, solve, reopen, or create a ticket.
Never create or edit users, organizations, fields, views, macros, triggers,
automations, service targets, webhooks, apps, roles, or permissions.
Never apply a label outside the allowlist. During shadow mode, recommend
labels but do not apply them.
If requested work crosses a boundary, describe the proposed action and stop.

DAILY REPORT AT [TIME] [TIMEZONE]
- New tickets by allowed label
- Tickets with no human reply after [THRESHOLD]
- Repeat contacts on the same subject
- Every "other" classification
- Exact groups, brands, and time range visible to this account
\`\`\`

The strongest clause is not "be careful." It names the operations the bot cannot perform. If a future request conflicts with those operations, the charter provides an unambiguous stop condition instead of asking the model to balance urgency against safety.

## Roll the Zendesk workflow out through observable stages

Do not widen permissions because a demonstration looked good. A demo contains selected tickets and an attentive operator. Production contains ambiguous threads, duplicated contacts, missing fields, and nobody watching at 02:00.

| Stage | Bot output | Human check | Exit criterion |
|---|---|---|---|
| Offline sample | Packets for exported or test tickets | Compare every claim with the source thread | No invented policy or missing quoted promise in the sample |
| Shadow queue | Packets beside normal agent work | Agent grades usefulness and factual errors | Reviewers can identify sources quickly and no customer is contacted |
| Read-only routine | Scheduled queue brief | Lead compares counts with a saved Zendesk view | Counts reconcile or differences are explained by scope |
| Private-note pilot | Fixed-format notes on one low-risk group | Agent checks note visibility and mentions | No note is public and no routing rule reacts unexpectedly |
| Narrow classification | One allowlisted field or tag, if truly needed | Lead checks downstream views and rules | Every change appears in a daily action log |

Time is not the exit criterion. "It ran for two weeks" says nothing if nobody checked it. Use cases with known answers: a hidden ticket, a customer with two related contacts, a deliberately missing policy page, and a ticket whose apparent label differs from its actual cause.

## Verify Zendesk results against saved views and known cases

Build a verification set before launch. Save a Zendesk view for the exact group, status set, and time window the bot reports. Put five known tickets into the test set: one ordinary request, one repeat contact, one with a prior promise, one restricted from the bot account, and one that belongs in "other."

Each morning, compare the bot's ticket keys with the saved view, not merely its total. Equal totals can hide one omitted ticket and one duplicated ticket. Open every cited source in a sample of packets. Confirm that quoted promises are exact and that the proposed reply does not turn an inference into a fact. Check Zendesk's own ticket history and integration records for actions attributed to the dedicated account.

The verification must be able to fail. If the bot cannot explain why the restricted ticket is absent, stop using its counts as operational truth. If a draft contains an unsupported policy statement, remove that policy area from scope until a maintained source exists.

## Diagnose Zendesk failures from symptoms before changing prompts

Prompt edits are tempting because they are fast. Many failures are caused by account scope, queue design, or downstream rules instead. Diagnose the layer before changing words.

| Symptom | Likely cause | Corrective action |
|---|---|---|
| Bot count is lower than a saved view | Role, group, brand, or ticket restriction differs | Compare visibility with the dedicated account and report scope |
| Draft promises an unsupported remedy | No approved source was found but the bot completed the pattern | Require a source link or the literal phrase "policy not found" |
| Ticket disappears after classification | A tag or field feeds a view or routing rule | Remove write access and audit every consumer of the field |
| Private text reaches a customer | Note and reply paths were not separated in permissions or UI | Revoke write access and move drafts outside Zendesk |
| Agents ignore the packets | Output is long, repetitive, or lacks links | Fix the schema and measure which fields reviewers use |
| Duplicate packets appear | Polling window or ticket identity is not idempotent | Key processing by ticket ID and latest event identifier |
| Sensitive details appear in the daily brief | The report copies more data than the reviewer needs | Minimize fields and link back to Zendesk for detail |

A prompt can improve wording. It cannot fix an account that sees the wrong groups, a field that triggers hidden automation, or a report channel that exposes customer data.

## Keep Zendesk labels fixed until reporting proves they are stable

Classification is a sensible later automation because it appears reversible, but tags and custom fields often drive views, analytics, and routing. Begin by recommending one value from a short allowlist. Compare recommendations with the values agents actually choose. Review disagreements by category, not as one blended accuracy number.

An "other" option is essential. Without it, the bot is forced to lie politely by selecting the least-wrong known label. Review every "other" ticket weekly and add a category only when a stable operational destination exists for it. A label that nobody uses to route, report, or improve content is taxonomy decoration.

If you later permit writes, allow one field only. Log the before value, after value, ticket ID, time, and rule version. Keep assignment, status, and priority as recommendations because those values control work, not merely description. The human who owns the queue should decide when a ticket becomes someone else's responsibility.

## Reject automatic solving even when the draft quality looks high

The strongest objection is straightforward: if the bot drafts the correct response almost every time, requiring a human click preserves the queue bottleneck. For high-volume, repetitive questions, a maintained support automation product with tested answers and an explicit escalation path can be appropriate. That is a different system from a general bot holding a teammate credential.

The review step earns its place where context changes the answer, policy carries consequences, or a message can create an obligation. Draft quality measured on ordinary password questions does not establish safety for charge disputes, account ownership conflicts, privacy requests, threats, legal notices, or outage communications. Rare cases matter because their cost is asymmetric.

If you want to test automatic answers, carve out a single question whose answer is fixed, public, and maintained, then use text your team approved rather than fresh generation. Keep that experiment separate from the context bot. The [approval gates guide](/blog/approval-gates-for-bots) explains why approval should bind one action, payload, and destination.

## Protect customer data across Zendesk and the bot runtime

Least privilege includes data minimization, not just action limits. Do not copy full ticket histories into a daily message when ticket links and short evidence lines will do. Avoid copying attachments unless the workflow truly needs them. Put the report in a private destination whose membership is reviewed, and define how long derived notes are retained.

If you use Grok Bot for this workflow, its documented isolation model matters. All bots on one account share one persistent cloud computer, including browser sessions, files, cookies, and command-line credentials. Separate screens are work surfaces, not security boundaries. Do not use a second bot as a way to isolate the Zendesk login. Use a dedicated Zendesk account with narrow access, and remove shared-computer sessions and files deliberately when decommissioning because deleting a bot does not remove them.

Hosted MCP sign-in tokens stay with the provider backend rather than on that computer, but you still must inspect the scopes being granted. Choose the connection method that yields the narrowest auditable authority, not the one with the shortest setup screen.

## Plan the Zendesk handoff before an urgent ticket arrives

Every packet needs an owner, a reason, evidence, and a clear next action. "Urgent ticket detected" is not a handoff. "Ticket 1842 reports three duplicate charges, two related tickets are linked, no refund policy source was found, billing lead must review" is actionable without pretending the bot resolved anything.

Define escalation categories in advance: possible security incident, payment dispute, legal request, account ownership conflict, widespread outage, and credible safety threat. For each, specify one private destination and one human role. The bot may surface and summarize. It may not contact the customer, page an improvised audience, or change ticket status to make the escalation visible.

Test the handoff during working hours. Confirm that the named person can access the ticket and that a backup exists. The broader [human handoff guide](/blog/bot-handoff-to-human) helps you design the context that crosses the line without losing source evidence.

## Measure Zendesk success by review quality, not autonomous volume

Count useful packets, not messages the bot sent. Track the share of packets a reviewer accepted as factually grounded, the share missing material context, the number of unsupported policy claims, and the time from ticket arrival to first human review. Report classification disagreements by label and record every action performed by the dedicated account.

Avoid invented precision. Your baseline comes from your own queue. Sample the same size and ticket mix before and after rollout. A useful first review asks whether agents opened fewer tabs, found prior promises earlier, and escalated repeat incidents sooner. If drafts are fast but reviewers must re-read everything because citations are poor, the workflow has moved typing around rather than saving attention.

Review the boundary monthly. Permission creep usually arrives through a reasonable request: apply one tag, assign one group, solve one obvious duplicate. Each request needs a downstream-effects audit and a separate decision. Reliability in reading does not prove reliability in acting.

## Extend Zendesk automation only toward adjacent read-heavy work

Once the context packet is stable, add read-heavy products: a daily aging brief, a list of repeated subjects for help-center maintenance, or a draft changelog based on resolved ticket evidence. The [tickets to changelog](/bots/tickets-to-changelog) pattern keeps publication under review while turning support history into a useful draft.

Do not widen merely because unused permissions are available. A second workflow should have its own inputs, output schema, owner, test set, and boundary. Separate a queue-health report from a help-center draft so a change to one prompt cannot quietly alter the other.

The edge of this design is also clear. If nobody reviews every ticket, producing more detailed packets can create a new unread queue. In that case prioritize ordering and incident grouping, then have humans open the source tickets. If your goal is fully autonomous customer resolution, buy or build a controlled support system around maintained answers and tested escalation, rather than dissolving the send boundary of a general-purpose bot.

**Keep reading:** [How To Research On LinkedIn Without Risking The Account](/blog/grok-bot-to-lead-research), [How To Walk Into Every Meeting Prepared](/blog/how-to-automate-meeting-prep), [How To Write An Honest Win Loss Memo From The Record](/blog/how-to-automate-win-loss-analysis).

## Frequently Asked Questions

### What should a Zendesk automation bot automate first?

A Zendesk automation bot should first build private context packets for new tickets and a read-only queue brief. Each packet should state what the customer asked, quote earlier promises, link relevant prior tickets, cite the approved help source, suggest one fixed classification, and include a clearly marked unsent draft. This removes search and reconstruction work without letting the bot speak for the company. Verify its ticket list against a saved Zendesk view and require the bot to state exactly which groups, brands, and date range its account could see.

### Which Zendesk permissions should a support bot receive?

Start with a dedicated account that can read only the required groups, brands, ticket fields, users, organizations, and approved help content. Withhold public reply, assignment, status, merge, deletion, user editing, and administrative authority. If private notes cannot be separated reliably from public replies, keep all drafts outside Zendesk. Permission labels vary by plan and connection method, so inspect the controls presented during setup and test the account directly. The credential should enforce the boundary even when the charter is misunderstood or an urgent prompt asks for more.

### Can a Zendesk bot safely send simple customer replies?

Only a separately controlled system should send answers that your team has fixed, maintained, and tested for a narrowly defined question. A general Zendesk bot should not decide that a live ticket is simple and then compose and send fresh text. Classification is the difficult part, and an apparently routine request can hide a billing exception, prior promise, ownership dispute, privacy request, or outage. Require a human to approve the exact response for the exact ticket. That approval preserves accountability while the bot still performs the expensive context-gathering and drafting work.

### How do you verify that a Zendesk bot is working correctly?

Create a known test set and compare the bot's ticket IDs with a saved Zendesk view using the same group, status, and time window. Include a restricted ticket, a repeat contact, a prior promise, a missing policy source, and an item that belongs in "other." Open cited sources, check quotations, and inspect Zendesk history for every action attributed to the dedicated account. Equal totals are insufficient because one omission can hide behind one duplicate. Stop trusting operational counts whenever the bot cannot explain a visibility difference.
`,
};
