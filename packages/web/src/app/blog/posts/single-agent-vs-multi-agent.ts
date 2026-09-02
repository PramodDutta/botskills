import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'One Bot With Many Jobs, or Many Bots With One Job Each',
  description:
    'Use this single agent vs multi agent test to prevent orphaned handoffs, assign one owner for every failure, and choose the smallest roster that works.',
  date: '2026-08-31',
  category: 'Comparison',
  content: `# One Bot With Many Jobs, or Many Bots With One Job Each

The dangerous part of a multi-bot workflow is not that two bots might disagree. It is that one bot can finish correctly, the next can refuse the input correctly, and the job can still disappear with nobody responsible for the gap. Call that an orphaned handoff.

That failure decides the single agent vs multi agent question more reliably than task complexity, team size, or how impressive the roster looks. One bot with several tightly connected jobs keeps context and ownership together, but its charter can become contradictory and its access can grow too broad. Several specialists make each instruction easier to test, but every boundary between them creates a new place where work can become ownerless.

This comparison gives you a practical way to choose. You will follow Nila, an invented operator, through one failed customer evidence brief, rebuild the workflow both ways, and assign a named owner to every stop. The goal is not the fewest bots or the most specialists. The goal is a workflow in which a failed job has exactly one obvious place to go.

## Name the orphaned handoff before choosing a roster

An orphaned handoff occurs when an upstream bot considers its work complete, while the downstream bot does not accept responsibility for the result. The file may exist. Both routine records may look normal. The final deliverable does not arrive.

Imagine a research bot that writes a packet to a shared folder. Its charter says it is done after saving the file. A writing bot watches that folder, but its charter accepts only packets with a source date, account identifier, and evidence label. The research packet lacks the evidence label, so the writer correctly refuses it. If refusal means only writing a note in its own screen, neither bot owns recovery. Research has finished. Writing has not started. The operator learns about the failure only when the deadline passes.

This is not primarily a reasoning failure. It is an ownership failure encoded in two locally sensible charters. Adding a coordinator can help, but only if the coordinator is explicitly responsible for rejected packets. A coordinator that merely reports status adds a third observer to the same hole.

| Event | Research bot believes | Writing bot believes | Actual state |
|---|---|---|---|
| Packet is saved | Research is complete | Nothing has arrived yet | Work is waiting |
| Packet is rejected | Its job already ended | Input is invalid | Work has no owner |
| Deadline passes | No active task exists | No accepted task exists | Deliverable is missing |
| Human asks for status | It can show a file | It can show a refusal | Nobody recovered the job |

The design test is simple: point at the space between any two boxes and ask who must notice, repair, or escalate a rejected handoff. If the answer is a channel, a folder, or “the system,” you have found an orphan.

## Choose one bot when the jobs share one definition of done

Use one bot when several steps belong to one outcome, use the same approved sources, and can be judged by one completion check. Researching five release notes, extracting changes, and drafting one internal digest are different actions, but they can remain one job if the definition of done is “a cited digest is waiting in the review folder.”

One owner has an important operational property: partial progress cannot masquerade as completion. If the source collection works but the draft fails, the bot still has not met its definition of done. It must retry within its charter or mark the whole job Blocked and notify the human path named in the charter.

Do not confuse one owner with one enormous prompt. A good generalist charter still has phases, input checks, output schemas, and stop conditions. The difference is that the phases share one task record and one final state. The bot is not allowed to announce success after an intermediate artifact.

| Keep these jobs together | Shared completion check | Reason ownership stays clear |
|---|---|---|
| Collect sources and draft a brief | One sourced brief passes the schema | Missing sources keep the whole job open |
| Read tickets and group duplicate themes | One reviewed cluster report exists | Clustering is meaningless without the report |
| Compare a sheet and explain exceptions | One exception memo cites each changed row | The explanation depends directly on the comparison |
| Check a page and capture evidence | One timestamped evidence packet exists | Screenshots and findings form one artifact |

The [Source Verifier](/bots/source-verifier) is a useful catalogue reference for evidence discipline, while [Win Loss Memo](/bots/win-loss-memo) shows a bounded synthesis job. You can borrow their boundary shapes without assuming separate bot names create separate security zones.

## Split specialists when their definitions of done conflict

Use more than one bot when the same artifact must pass through genuinely different definitions of done. A researcher succeeds by gathering complete, traceable evidence. A critic succeeds by finding unsupported claims and returning defective work. A publisher would succeed by changing something visible. Those jobs should not be collapsed merely because they touch the same document.

Conflicting incentives are the strongest reason to split. If a bot is told both “produce the brief by 9:00” and “reject the brief whenever a claim lacks evidence,” deadline pressure sits in the same charter as quality control. The bot can satisfy the visible outcome by becoming lenient about the invisible check. A separate critic has no delivery target to protect and no authority to rewrite the work it rejects.

Split as well when one job needs a different human boundary. A drafting bot may write into a review folder. A sending action must remain human-controlled. Putting both in one charter creates a standing temptation to widen access for convenience. The safer workflow ends with a draft and a human Send.

The comparison is not “generalist intelligence versus specialist intelligence.” It is one definition of done versus several definitions that should challenge one another.

## Trace Nila from a clean research run to a missed brief

Nila runs a weekly customer evidence brief for a small product team. Every Thursday at 16:00, one bot reads an approved folder of interview notes and support exports. A second bot turns the research packet into a two-page brief due Friday at 10:00. Nila chose two bots because research and writing sounded like separate professions.

On Thursday, the researcher processed eight approved documents. One export had no collection date, so the bot labeled its date “unknown,” cited its filename, and saved CUSTOMER-42-research.md. That behavior matched its charter. The run ended successfully because its definition of done was saving a sourced packet.

At 08:00 Friday, the writer found the packet. Its charter required every source to have an account identifier, collection date, and evidence class. It rejected the packet because one row had an unknown date. The writer saved CUSTOMER-42-REJECTED.md in its own output folder. That behavior also matched its charter. Its routine had run, found no acceptable packet, and ended.

At 09:55, Nila opened the expected brief folder and found nothing. The research screen showed success. The writing screen showed a completed run. The source packet and refusal note lived in different folders. No notification named the other artifact. Nila spent twenty minutes reconstructing the path, removed the undated source, and ran the writer again. The brief arrived after the meeting began.

The specific failure was not bad research, poor writing, or an unavailable tool. It was an orphaned handoff created by two success conditions that did not cover rejection.

## Rebuild Nila's first version as one accountable bot

Nila’s smallest repair is one bot with three internal phases: validate sources, assemble evidence, and draft the brief. The bot does not complete after saving research. It completes only when the final brief passes its own structural check and is placed in the review folder.

The undated export now fails during input validation. The bot has two permitted responses. It can exclude the source if the minimum evidence rule permits exclusion, while recording that omission in the brief. Otherwise it marks the entire job Blocked and writes one block notice to Nila’s named review location. There is no downstream specialist waiting on a packet it may never accept.

This version is better when Nila values dependable delivery over independent criticism. It is also easier to operate: one routine, one task state, one charter version, one expected folder. Its weakness is that the same bot gathers evidence and decides whether its evidence is sufficient. A mechanical schema check can catch a missing date, but a more subjective source-quality test deserves independent review.

| One-bot phase | Entry requirement | Exit requirement | Owner on failure |
|---|---|---|---|
| Validate | Approved input folder is readable | Every included source meets minimum fields | The same bot blocks the job |
| Assemble | Valid sources exist | Claims map to source identifiers | The same bot repairs or blocks |
| Draft | Evidence map is complete | Brief matches schema and cites claims | The same bot repairs or blocks |
| Deliver | Brief passes final check | File exists in Nila's review folder | The same bot verifies or blocks |

The generalist is not allowed to write to the CRM, contact a customer, or send the brief. Nila reviews and distributes it. That boundary keeps the consequence of a weak source with the person who owns the meeting.

## Rebuild Nila's second version with an owned handoff

Nila can keep specialists if she changes the contract between them. The researcher’s definition of done becomes “an accepted packet or an acknowledged block,” not merely “a saved packet.” The writer must produce a machine-readable acceptance receipt or rejection receipt in the same exchange folder. The researcher remains the handoff owner until one of those receipts appears.

If the writer rejects a packet, the receipt must name the failed field, the source identifier, and whether repair is allowed. The researcher gets one repair attempt. If it cannot repair without inventing a date or searching outside approved inputs, it writes a single Blocked record for Nila. The writer never silently ignores malformed work, and the researcher never treats a file write as delivery.

A coordinator is optional at this scale. Nila needs one only when several producers feed several consumers and no producer can reasonably watch its own receipt. Even then, the coordinator owns timeout and escalation, not the substance of research or writing.

| Handoff state | Required artifact | Current owner | Next allowed action |
|---|---|---|---|
| Offered | Packet plus manifest | Researcher | Wait for receipt until the stated cutoff |
| Accepted | Acceptance receipt | Writer | Draft and return final status |
| Rejected | Rejection receipt with rule identifier | Researcher | Repair once or block |
| Timed out | No receipt by cutoff | Researcher | Escalate to Nila |
| Blocked | Block record with evidence | Nila | Supply data, waive source, or cancel |

This version preserves independent standards and removes the ownership gap. It costs more operational attention because every handoff now has a protocol. That cost is justified only if the separation provides a real check that the one-bot version cannot provide.

## Write the handoff contract before writing either specialist charter

Teams often write two excellent charters and improvise the line between them. Reverse that order. Write the packet schema, receipt schema, timeout, retry limit, and escalation target first. Then make each specialist charter implement one side of that contract.

A handoff packet needs a stable job identifier, producer, charter version, source list, completion time, requested next action, and data classification. A receipt needs the same job identifier, ACCEPTED or REJECTED, the rule used, and the next owner. Put both artifacts in one known location. Do not require Nila to inspect separate bot screens to join the story.

Use an arbitrary but explicit timeout appropriate to the workflow. For Nila’s scheduled brief, sixty minutes is her chosen operating cutoff, not a product allowance or platform limit. A live support workflow might need a shorter cutoff. A monthly archive audit can tolerate longer. What matters is that the timeout produces a new owned state rather than silent waiting.

The [Firstmate Router](/bots/firstmate-router) offers a useful routing pattern, and [Stuck Bot Foreman](/bots/stuck-bot-foreman) is relevant when stalled work needs a separate watcher. Neither changes the need for a named owner inside your own handoff contract.

## Paste a charter that keeps one owner through rejection

The following charter is designed for the researcher in Nila’s two-bot version. Replace the bracketed paths and operator name before use. It is intentionally strict about what counts as delivery.

\`\`\`text
You are Customer Evidence Researcher.

JOB
Build one evidence packet from approved inputs for the weekly customer brief.

APPROVED INPUT
[APPROVED_INPUT_FOLDER]

EXCHANGE FOLDER
[EXCHANGE_FOLDER]

HUMAN OWNER
Nila at [BLOCK_NOTICE_LOCATION]

DEFINITION OF DONE
The job is done only when one of these is true:
1. The writer creates an ACCEPTED receipt for this job identifier.
2. Nila acknowledges a BLOCKED record for this job identifier.
Saving a packet is not completion.

PACKET RULES
Create one job identifier in the form YYYY-MM-DD-CUSTOMER-ID.
For every source, record filename, account identifier, collection date,
evidence class, and exact location.
Never invent a missing field.
Write the packet and manifest to the exchange folder.

HANDOFF RULES
After offering the packet, look for a receipt with the same job identifier.
ACCEPTED transfers ownership to the writer.
REJECTED returns ownership to you and must name a failed rule.
Repair once using only approved inputs.
If repair is impossible, write BLOCKED with the failed rule and evidence.
If no receipt appears within 60 minutes, write BLOCKED: HANDOFF_TIMEOUT.

BOUNDARY
Never contact a customer, send the brief, edit the CRM, invent source data,
search outside the approved input folder, or expose credentials.
Never mark the job complete merely because a file was saved.

OUTPUT
Write status artifacts only to the exchange folder and block location.
Every artifact must include job identifier, charter version, current owner,
timestamp, input source identifiers, and next allowed action.
\`\`\`

The sixty-minute cutoff is Nila’s declared choice for this weekly workflow. Change it to fit your deadline. Do not leave it implicit.

## Keep shared-computer facts separate from workflow specialization

Multiple Grok Bots on one account do not create multiple computers. Verified documentation says the computer is assigned to the account, each bot gets a separate screen, and browser cookies, signed-in sessions, files, and command-line credentials are shared. Screens organize work. They are not security boundaries, and separate bots do not isolate credentials.

This matters to the comparison because specialization can make access look narrower than it is. A bot called Customer Research may have a careful read-only charter, while a sibling bot’s browser screen is signed into an admin account. The names and charters do not erase shared state on the account computer. Design credentials at the account and integration layer, then design bot jobs inside that boundary.

Hosted MCP sign-in tokens are handled differently and stay with the provider backend rather than on the computer, but that fact does not turn bot names into security compartments. Verify the active identity and scope for every connection used by a workflow.

If your decision is really about isolating clients or credentials, this comparison is the wrong layer. Read [why Grok Bot is not a sandbox](/blog/grok-bot-not-a-sandbox) and [how to isolate Grok Bot credentials](/blog/how-to-isolate-grok-bot-credentials) before choosing the roster.

## Limit every specialist to an artifact boundary

Each specialist should end at an artifact that a human or another bot can inspect. Researchers return evidence packets. Writers return drafts. Critics return pass or reject receipts. Routers return assignment records. None needs authority to send messages, change budgets, contact customers, publish, pay, delete, or alter production settings merely to prove the workflow can run.

This follows the shape of the vendor’s documented use cases, which keep outward actions behind a human boundary. It also makes failures recoverable. A wrong draft in a review folder can be corrected. A wrong message sent to a customer cannot be made unseen by an approval after the fact.

The boundary for Nila’s entire workflow is: bots may read approved inputs, create versioned artifacts, and exchange receipts; they never contact customers, edit source systems, or distribute the final brief. Nila owns any outward action. This line applies whether she chooses one generalist or three specialists.

A share link does not change that operating boundary. A Grok Bot share link copies configuration so another eligible account can preview and add a copy. It does not transfer the computer, logins, or conversation history. Strip secrets and confidential material from a charter before sharing because the configuration itself is exposed by the link.

## Count ownership edges instead of counting bot names

The cost of a multi-agent design grows with handoffs, not only with bots. Two bots in a straight line create one ownership edge. Three bots in a straight line create two. Three producers feeding one critic create three. If rejected work can return to its producer, each edge also needs a defined reverse path.

Draw the workflow and label every arrow with a packet, receipt, timeout, and owner. An unlabeled arrow is not coordination. It is hope represented by a line. If you cannot afford to define and test the arrow, merge the adjacent jobs until there is no handoff there.

| Roster shape | Forward handoffs | Typical hidden gap | Safer default |
|---|---:|---|---|
| One bot, three phases | 0 between bots | Internal phase marked complete too early | One final definition of done |
| Researcher to writer | 1 | Writer rejects without returning ownership | Receipt plus producer-owned timeout |
| Two producers to critic | 2 | Critic returns work without naming producer | Job identifier maps return to owner |
| Router to three specialists | 3 | Router assigns but never watches acceptance | Router owns acceptance timeout |
| Specialist chain plus human | Several | Human review location is treated as notification | Named alert and review acknowledgment |

This edge count explains why a six-bot roster can feel fragile even when every bot is narrowly written. The work of maintaining contracts can exceed the work being automated. Start with the smallest shape that preserves the independent checks you genuinely need.

## Test rejection paths before testing the happy path twice

Most workflow tests prove that valid input produces expected output. That catches a broken prompt, but it does not catch the orphaned handoff. You must plant invalid input and observe who owns the job after rejection.

For Nila’s workflow, create four invented fixtures. One lacks a collection date. One has the wrong customer identifier. One arrives after the cutoff. One is valid but the writer never creates a receipt. None should contain real customer data. Run each fixture through the workflow and inspect the shared exchange artifacts.

The test passes only if one current owner is named at every step, the same job identifier appears in every artifact, no bot invents the missing field, repair stops after the declared limit, and Nila receives one actionable block record. A log that merely says “failed” is not actionable. It needs the rule, evidence, current owner, and next allowed choice.

Run the valid fixture last. A clean happy path after four clean rejection paths tells you the workflow can both finish and fail visibly. [Bot output verification](/blog/bot-output-verification) extends this idea to the contents of the final artifact, while [bot post-mortems](/blog/bot-post-mortems) helps when a production failure has already escaped.

## Compare the two designs with one decision scorecard

Score the actual job, not the idea of agents. Give one point to the one-bot design when all steps share an outcome, source set, human boundary, and cadence. Give one point to specialists when definitions of done conflict, independent rejection matters, or a stable artifact contract already exists. Treat the score as a forced discussion, not as a benchmark.

| Question about this workflow | Favors one bot | Favors specialists |
|---|---|---|
| Can one final check prove the entire job is done? | Yes | No |
| Must one role independently reject another role's output? | No | Yes |
| Do all steps use the same approved inputs? | Yes | No |
| Does every handoff already have a schema and owner? | Not required | Yes |
| Would a split reduce outward authority? | No | Yes, if access is truly scoped |
| Can one charter state every rule without contradiction? | Yes | No |
| Can the operator inspect one complete task story? | Yes | Only with shared identifiers |

Choose one bot when the left column dominates. Choose specialists when the right column dominates and you are willing to maintain the handoff contract. If the answers split evenly, prototype one accountable bot first. Split only the phase whose independent standard produces a defect you can name and test.

## Answer the strongest argument for specialist bots

The strongest counter-argument says one bot with many jobs becomes a vague employee simulation. Its charter grows until instructions collide, it receives access for every phase, and its self-check is not independent. Specialists are easier to understand, easier to test, and easier to replace. That argument is correct whenever the jobs have conflicting success criteria.

It does not follow that every workflow should start as a fleet. Specialization moves complexity from the charter into the handoffs. A seven-page generalist charter may be bad, but six short charters joined by five implicit file drops are worse because local tests can pass while the deliverable vanishes between them.

The answer is to split at a proven conflict, then make the contract as explicit as the specialist charters. Separate the critic when independent rejection matters. Separate a router when several queues need one timeout owner. Do not split research from drafting merely because their labels sound different if one sourced brief and one human review define the whole job.

Specialists win when separation creates a meaningful check or narrower real access. One bot wins when separation creates only ceremony and orphan risk.

## Audit the roster after every recurring failure

When the same workflow blocks twice for the same reason, audit its ownership map before tuning wording. Ask which bot last had responsibility, what artifact transferred it, who was expected to notice rejection, and whether the next owner acknowledged receipt. The answer often reveals a missing state rather than a weak instruction.

Merge jobs when the handoff exists only to rename or reformat an artifact, both bots use identical inputs and boundaries, or the operator repeatedly reconstructs one task across screens. Split jobs when one charter contains opposed goals, an independent reviewer keeps catching real defects, or one phase needs a distinct connection that can actually be scoped.

Do not delete a bot casually while routines depend on it. Routines belong to one bot, and deleting that bot deletes its routines. Also remember that deleting a bot does not remove shared-computer files or browser sessions. Record routine ownership, preserve necessary artifacts according to your policy, and clean up shared state separately.

The audit output should be a small decision record: keep, merge, or split; the failure observed; the new owner; the handoff contract changed; and the fixture that proves the repair. Without the fixture, the same orphan can return under a tidier diagram.

## Stop using this comparison when isolation or human judgment is the real problem

This page stops applying when your primary requirement is credential isolation, client separation, a regulatory control, or a contractual security boundary. Multiple bots on one account share one computer and do not isolate credentials. Move to an account-level or external isolation decision with the responsible security or legal owner. The [multi-tenant bot risk guide](/blog/multi-tenant-bot-risk) addresses that problem directly.

It also stops applying when the work itself should not be delegated. Hiring decisions, legal conclusions, financial postings, customer commitments, production changes, and other consequential judgment cannot be made safe merely by choosing one bot or five. Keep the decision and outward action with the accountable human, and use bots only for bounded evidence or drafts if policy permits.

Finally, stop when the task is a one-off. A handoff protocol, receipt schema, retry policy, and roster audit are operating machinery for repeated work. For a single brief, one person reading one draft may be faster and safer. Recurrence is what pays for the structure described here.

## Frequently Asked Questions

### Is a single agent better than a multi agent system?

A single agent is better when several phases share one input set, one human boundary, and one definition of done. It keeps context and failure ownership in one task. A multi agent system is better when roles need conflicting standards, such as a writer producing work and an independent critic rejecting it. The deciding risk is the orphaned handoff: if a specialist can reject or miss work without another named owner recovering it, the split is unsafe. Start with one accountable bot and split only where independent checking creates a testable benefit.

### What is an orphaned handoff between bots?

An orphaned handoff happens when an upstream bot considers a task complete but the downstream bot never accepts responsibility. The producer may have saved a valid file while the consumer rejects it for a missing field, watches the wrong location, or times out. Both routines can appear completed even though the deliverable never arrives. Prevent it with a shared job identifier, an explicit acceptance or rejection receipt, a timeout, a retry limit, and one named owner who retains responsibility until the next owner acknowledges the packet.

### Do separate Grok Bots isolate credentials and browser sessions?

No. Verified Grok Bot documentation says bots on one account share one persistent cloud computer. Each bot has a separate screen, but browser cookies, signed-in sessions, files, and command-line credentials are shared. Screens help organize work and are not security boundaries. Separate bot names therefore cannot isolate clients or secrets. Scope connections and credentials at the account and integration layer, verify the active identity before each workflow, and use a separate eligible account or keep work outside the environment when a stronger boundary is required.

### How many bots should I start with for one recurring workflow?

Start with one bot when it can own the recurring workflow through one final, inspectable artifact. Add a second bot only when you can name the independent standard it enforces, such as rejecting unsupported claims, and when you have written the handoff contract first. That contract needs a packet schema, receipt, timeout, retry limit, and escalation owner. Bot count is not the useful metric. Count ownership edges instead. Every new handoff must make failure easier to locate, not merely make the roster look more specialized.
`,
};
