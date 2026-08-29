import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'What a Routine Is, and Where It Dies With the Bot',
  description:
    'Learn the Grok Bot routine lifecycle, its per-Bot ownership and recent record limits, then build a deletion-safe inventory and recovery rehearsal.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# What a Routine Is, and Where It Dies With the Bot

Ishan schedules a weekly practice brief, sees it run twice, and assumes the schedule belongs to his team. When he deletes the Bot used for the exercise, the routine disappears with it. The ownership model was narrower than his mental model.

A **routine** is a saved assignment that tells one Bot to run one workflow on a recurring basis. According to the Routines section of VERIFIED-FACTS-2026-08-25, a routine belongs to one Bot, a Bot can have at most 50 routines, and deleting the Bot deletes its routines. Nothing about routines is team-level in the supplied facts.

This article teaches lifecycle, which means the stages from creation through operation to deletion. By the end, you can inventory a routine and rehearse its recovery before deleting its owner.

## Draw the ownership arrow from routine to one Bot

According to the Routines section of VERIFIED-FACTS, a routine assigns a workflow to one Bot. The ownership arrow is routine to Bot, not routine to team, workspace, or generic account.

Write the owner beside every routine name. "Monday brief" is incomplete. "Monday brief, owned by Research Practice Bot" preserves the object that controls its lifecycle.

| Object | Relationship | Safe statement | Unsafe assumption |
|---|---|---|---|
| Routine | Assigned to one Bot | Owner is named Bot | Team owns it independently |
| Workflow | Work the routine runs | Saved assignment invokes it | Workflow proves shared ownership |
| Run record | History for one routine | Recent records are retained | Unlimited archive exists |
| Bot deletion | Lifecycle event | Its routines are deleted | Schedule survives owner |

The arrow gives Ishan the first deletion question: which routines point at this Bot?

## Separate a workflow definition from its schedule

A **workflow** is the sequence of work to perform. A routine is the saved assignment that gives that workflow to one Bot on a recurrence. The distinction matters because Ishan can preserve a written workflow while losing the product routine that invoked it.

For the exercise, his workflow says: read three synthetic notes, extract claims, and save a four-column evidence table. Three and four are arbitrary teaching choices, not product limits. The routine says when that workflow runs and which Bot owns the assignment.

If deletion is planned, preserve the human-readable workflow, inputs, expected output shape, and schedule separately. This does not claim there is an export feature. It is a manual continuity record.

## Count toward the 50-routine Bot limit correctly

According to the Routines section, each Bot can have at most 50 routines. The limit applies per Bot. It is not stated as a team pool or an account-wide total in the supplied facts.

If Bot A has 35 routines and Bot B has 20, neither exceeds the per-Bot maximum. Do not add them and claim the team crossed 50. Conversely, creating another Bot does not turn routines into team-owned objects. Each remains attached to its named Bot.

Use the limit as a design signal. A Bot nearing 50 assignments may hold unrelated workflows whose owners, inputs, and failure handling deserve review. Do not create extra Bots solely from arithmetic without considering the documented ownership consequence.

## Read the 20-record history as a rolling window

According to the Routines section of VERIFIED-FACTS, the app keeps the 20 most recent run records per routine. A **rolling window** retains the newest records while older ones fall outside the kept set.

Twenty records are not twenty routines and not twenty days. A routine that runs frequently can fill its recent window faster than a weekly routine. The source does not promise a permanent archive beyond those recent records.

| Routine frequency example | Records after 20 runs | What the app keeps | Continuity response |
|---|---:|---|---|
| Every weekday | 20 | Most recent 20 records | Preserve needed evidence elsewhere |
| Weekly | 20 | Most recent 20 records | Review before older context rolls off |
| Irregular | 20 | Most recent 20 records | Record dates, not assumed cadence |
| Newly created | Fewer than 20 | Available recent records | Do not infer missing runs |

The frequencies are examples, not product presets. The retention count is the sourced product fact.

## Treat Bot deletion as routine deletion

According to the Routines section, deleting a Bot also deletes its routines. This is the central lifecycle fact. A routine does not float free after its owner is removed.

Before Ishan deletes a practice Bot, he lists every routine, workflow purpose, schedule description, input location, output location, review owner, and recent failure. He then decides whether each routine should be retired or manually reconstructed later.

[Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) covers a different lifecycle effect. Keep the shared fact to one sentence: deleting the Bot removes its routines, while file and session cleanup belongs to the canonical deletion article.

## Do not call routines team-level automation

The Routines section of VERIFIED-FACTS says nothing is team-level. Therefore, a team roster or shared purpose does not change the routine's per-Bot ownership.

Ishan's team may document, review, or reproduce a workflow together. That social process does not make the saved routine a team-level product object. Accurate language is "routine on the named Bot used by the team," not "team routine."

This distinction affects offboarding and deletion. If everyone assumes the team owns the schedule, nobody may inventory it when the Bot owner is removed.

## Use desktop for edits and iPhone only for pause or resume

According to the Routines section of VERIFIED-FACTS, on iPhone a user can pause and resume only. Editing, history, testing, and deleting require desktop.

That means Ishan can respond to a concern from iPhone by pausing a routine. He cannot complete the full diagnosis there under the supplied facts. The repair workflow moves to desktop for history, test, edit, or deletion.

| Intended action | iPhone support in supplied facts | Required response |
|---|---|---|
| Pause | Supported | Pause and record reason |
| Resume | Supported | Confirm review decision first |
| Edit | Not on iPhone | Move to desktop |
| View history | Not on iPhone | Move to desktop |
| Test | Not on iPhone | Move to desktop |
| Delete | Not on iPhone | Move to desktop |

Do not turn pause into a substitute for diagnosis. It is the safe holding action until the required surface is available.

## Walk Ishan through an accidental deletion

On August 29, 2026, Ishan sees an obsolete practice Bot and deletes it. Ten minutes later he looks for the Monday brief routine and cannot find it. He had saved the brief output but not the workflow instructions, recurrence, or input map.

According to the Routines section, the observed disappearance follows the documented lifecycle: deleting the Bot deletes its routines. It is not evidence of a team-level routine bug.

Ishan reconstructs the workflow from one recent output, but its evidence rule is incomplete. The first recreated run omits source URLs. He learns that output alone is not a recovery package. The next inventory records instructions, inputs, output schema, schedule, owner, and test case before deletion.

## Diagnose routine failures by object and lifecycle stage

"The automation vanished" is too broad. Identify whether the missing object is the routine, workflow description, recent run record, input, output, or Bot.

| Symptom | Likely lifecycle cause | Evidence | Repair |
|---|---|---|---|
| Routine missing after Bot deletion | Owner was deleted | Bot deletion record and inventory | Recreate from preserved definition |
| Old run absent | Recent window rolled | Run dates and 20-record rule | Preserve required history externally |
| Cannot edit on iPhone | Surface limitation | Current device and action | Use desktop |
| Routine exists but output is wrong | Workflow or input issue | Test input and recent run | Pause, diagnose, edit on desktop |
| Team cannot find schedule | Ownership assumption | Named Bot inventory | Map every routine to one Bot |

The repair follows the failed object. Recreating a routine will not recover an older record you never preserved.

## Answer the team that wants central automation

The strongest objection is that a routine used by several people should belong to the team. That may be a sound product requirement, but it is not the current ownership described in the supplied Routines facts.

The process workaround is a team-maintained inventory and recovery packet for every important per-Bot routine. It does not transform ownership. The packet reduces dependence on one person's memory and makes deletion review possible.

If team-level ownership is mandatory rather than desirable, do not describe the current routine as meeting that requirement. Record the gap and choose whether to postpone the workflow or use a separately verified system.

## Design a deletion-safe routine inventory

Give every routine a stable internal identifier, named Bot owner, workflow purpose, input description, output schema, cadence description, reviewer, and retirement decision. Add the date of the last successful synthetic test.

Do not store secrets in the inventory. Refer to approved credential or input locations without copying sensitive values. This is general operational advice, not a claim about Grok Bot credential handling.

[Content Planner Manager](/bots/content-planner-manager), [Competitor Website Watch](/bots/competitor-website-watch), [Inbox Reply Digest](/bots/inbox-reply-digest), and [Account Health Ranker](/bots/account-health-ranker) show catalog jobs with recurring shapes. Use them to practice identifying inputs and outputs, not to infer that a routine already exists for a listing.

## Rehearse recovery before the owner is deleted

A **recovery rehearsal** recreates a harmless version from the preserved packet before the original is removed. Ishan uses synthetic notes and a temporary practice routine. He asks a second operator to rebuild it from the inventory alone.

The rehearsal passes only if the operator can identify the Bot owner, recurrence, workflow steps, expected artifact, and review rule without oral context. Then Ishan compares one test output against the saved schema.

| Recovery check | Pass condition | Failure signal | Inventory repair |
|---|---|---|---|
| Owner | Exact Bot is named | "Research bot" is ambiguous | Record unique name |
| Workflow | Steps can be reconstructed | Output sample is only guide | Save written definition |
| Inputs | Synthetic source is located | Operator guesses folder | Record input map |
| Output | Required fields match | Source URL omitted | Save schema and example |
| Schedule | Recurrence is unambiguous | Timezone or day guessed | Record complete cadence |

The rehearsal verifies documentation, not a hidden product export.

## Keep routine lifecycle separate from shared architecture

This article does not need to repeat how work surfaces, cookies, files, boundaries, or approvals behave. Use [screens are not boundaries](/blog/screens-are-not-boundaries), [where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives), and [what an approval actually governs](/blog/what-an-approval-actually-governs) for those mechanisms.

The routine-specific rule is narrower: one workflow assignment belongs to one Bot and is deleted with it. That fact is enough to drive the inventory and recovery procedure.

[What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) is relevant when reconstructing instructions, but it does not change routine ownership.

## State where this lifecycle lesson stops

This page does not claim routines are team-level, permanently archived, exportable, or recoverable after deletion. It does not claim iPhone can edit, test, inspect history, or delete a routine. It does not describe a Linux, Android, or iPad application.

The supplied Routines facts establish ownership, maximum count, recent-record count, deletion behavior, and the named iPhone limitations. Details beyond those claims require current primary documentation and a safe observed test.

For first-run planning, use [the five questions before your first bot](/blog/the-five-questions-before-your-first-bot). For deletion cleanup beyond routines, use [delete a Grok Bot safely](/blog/delete-a-grok-bot-safely).

## Inventory one routine before touching delete

Choose one non-consequential routine. Record its exact Bot owner, workflow instructions, input map, output schema, recurrence, reviewer, and last test date. Capture any recent run evidence you are required and authorized to preserve before the 20-record window moves.

Ask another person to reconstruct a synthetic version from the packet. If they need your memory, repair the inventory. Only then decide whether the original routine and its Bot should remain, pause, or be deleted.

You can now do one concrete thing: produce a deletion-safe routine inventory that makes per-Bot ownership and the loss point explicit.

Add a dependency column to the inventory. A dependency is an input, account, file, reviewer, or downstream artifact the workflow needs. Record only descriptive references, not secret values. When the Bot is considered for deletion, each dependency row tells Ishan what must be retired, reassigned, or verified before any reconstruction can work.

Create a routine census by Bot. Count routine names under each exact Bot owner and compare each count with the documented maximum of 50. Do not sum them into a team limit. The census should flag duplicate purposes, unclear owners, and routines whose reviewer no longer exists. A low count can still carry high lifecycle risk if nobody knows what one routine does.

Review the recent-record window by run frequency. Estimate when a needed record may leave the 20 most recent set based on the routine's own cadence, then schedule an authorized evidence review before that point. This is an internal planning estimate, not a claim that records disappear after a number of days. The product fact is based on record count, so your plan should be too.

Rehearse pause and resume separately from deletion. From iPhone, the supplied facts allow those two actions, so test a harmless routine's paused state and require a named reviewer before resumption. Move to desktop for history, testing, editing, or deletion. Record which observation justified the pause so resume is a decision, not a reflex.

Build a retirement packet for a routine that should not return. Include its owner, purpose, reason for retirement, last expected output, dependencies, and review decision. Mark "do not recreate" clearly. Continuity documentation should preserve good workflows, but it should not cause obsolete or unsafe assignments to spring back during recovery.

For a routine that must be recreated, save a gold-standard synthetic case. A **gold-standard case** has a known input and expected artifact chosen by the reviewer. After reconstruction, compare required fields and failure handling, not word-for-word prose. This demonstrates that the workflow meaning survived even though the original routine object did not.

Ask a second operator to perform a tabletop deletion review. A tabletop is a discussion-based rehearsal with no real deletion. Give them the Bot inventory and ask which routines disappear, which recent records matter, which workflows need reconstruction packets, and which should retire. Every question they cannot answer becomes an inventory repair before a consequential click.

Finally, add a lifecycle owner distinct from the routine's day-to-day reviewer if your organization needs one. The product fact remains per-Bot ownership. The human lifecycle owner is your internal responsibility for census, retirement, and recovery documentation. Naming that role avoids the false claim of a team-level product object while still making team coordination possible.

Tag every inventory row with preserve, retire, or unresolved. Preserve means a reconstruction packet and synthetic test are required. Retire means the reason and reviewer are recorded. Unresolved blocks Bot deletion until an owner decides. These are internal workflow states, not Grok Bot features, and they prevent silence from being interpreted as permission to remove a schedule.

Look for duplicate routines before reaching the 50-per-Bot limit. Two similar names may run the same workflow against the same input, creating duplicated output and confusing review. Compare purpose, recurrence, input, and artifact. Consolidate only after confirming that different owners or failure policies are not hidden behind similar names.

Review record retention against evidence obligations. The product keeps the 20 most recent run records per routine, but your organization may need particular evidence longer or may be required not to retain it. Decide what is authorized to preserve and where through your own policy. Do not copy sensitive run content merely because the recent window is finite.

Simulate an unavailable desktop during an incident. The iPhone facts allow pause and resume only, so the immediate safe response can be pause. The runbook should identify who later accesses desktop for history and testing. This exercise verifies that the team does not confuse mobile pause with completed repair.

Record timezone explicitly in the human-readable cadence description. This article does not claim how the product displays or stores timezones. The inventory needs enough detail for another operator to reconstruct the intended schedule without guessing whether "Monday at nine" belongs to the operator, Bot owner, or source region.

Give every recovery packet a last-verified date. A workflow can outlive its source paths, reviewers, or output destination. Before reconstructing after deletion, check each dependency rather than treating an old packet as current authority. Continuity documentation should recreate intent, not blindly repeat stale access.

After a successful rehearsal, intentionally remove one field from a copy of the packet and ask the second operator to identify the gap. Missing owner, schedule, input, or failure rule should stop reconstruction. This negative test proves the operator knows which information is necessary rather than succeeding from memory.

Close deletion review with a signed decision in ordinary language: which Bot is being deleted, which named routines disappear, which packets were preserved, which routines retire, and who approved the lifecycle change. The statement does not reverse deletion or create product recovery. It ensures the team understood the documented loss before acting.

Compare the census with actual recent output destinations. A routine name may imply one report while its workflow writes another artifact. Inspect an authorized synthetic run or preserved recent record and update the inventory from evidence. Do not infer current purpose solely from a label created months earlier.

Set a review trigger below the 50-routine maximum if your team needs time for cleanup. The chosen number is an internal threshold and must be labeled that way. Its purpose is to prompt a census before the product maximum is reached, not to claim Grok Bot enforces a lower limit.

Keep reconstructed routines paused until the gold-standard case passes. A successful creation does not prove the workflow, inputs, or artifact were restored correctly. Use desktop for the documented testing and editing actions, compare the expected fields, then obtain the named review decision before normal recurrence resumes.

If a Bot has no routines, record that observation and its date rather than leaving the deletion checklist blank. An explicit zero tells the reviewer the dependency check happened. A blank field could mean no routines, no access to the inventory, or a skipped step.

Teach the lifecycle with index cards before touching an application. Write one Bot, three routines, and five recent records on separate cards. Remove the Bot card and ask which objects disappear under the supplied facts. Then discuss which human-authored workflow packets remain. The physical exercise makes product ownership and documentation continuity visibly different.

Keep reading: [why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files), [delete a Grok Bot safely](/blog/delete-a-grok-bot-safely), and [the five questions before your first bot](/blog/the-five-questions-before-your-first-bot).

## Frequently Asked Questions

### What is a Grok Bot routine?

According to the Routines section of VERIFIED-FACTS-2026-08-25, a routine assigns a workflow to one Bot. Treat it as a per-Bot saved assignment, not a team-level object. Record both the routine and its exact Bot owner in your inventory so a deletion review can find every dependent schedule.

### How many routines and run records are kept?

The supplied Routines section says a Bot can have at most 50 routines and the app keeps the 20 most recent run records per routine. The first number is per Bot, while the second is per routine. Neither statement promises a team pool or permanent archive. Preserve authorized evidence before older records leave the recent window.

### What happens to routines when I delete a Bot?

They are deleted with the Bot, according to the supplied Routines section. Before deletion, inventory the workflow, recurrence, input map, output schema, owner, and recent failures. A saved output is not a complete recovery packet. Rehearse a harmless reconstruction if the workflow matters, and do not claim recovery is guaranteed after deletion.

### Can I manage a routine completely from iPhone?

No. The Routines section says iPhone supports pause and resume only. Editing, history, testing, and deleting require desktop. Use pause as a holding action when investigation is needed, then move to desktop for the named management operations. Confirm current primary documentation before relying on behavior that may change.
`,
};
