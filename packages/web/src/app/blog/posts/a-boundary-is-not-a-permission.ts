import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Boundary Is Not a Permission, and the Difference Bites',
  description:
    'Learn how an instruction boundary differs from a technical permission, why confusing them creates risk, and how to test both layers before a bot runs.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# A Boundary Is Not a Permission, and the Difference Bites

Omar tells a bot, “Never publish.” He then gives the workflow access to a publishing account because it needs to read previews. The line is a boundary. The reachable publish action is a permission. Omar treats the first as if it removed the second.

That category error stays invisible until an instruction is misunderstood, replaced, or tested by an unusual case.

An **instruction boundary** states behavior the bot must not cross. A **permission** is a technical grant that makes an action reachable. A bot can be told not to use a capability it still has. It can also lack a capability even when its prompt asks for it.

The binding VERIFIED-FACTS file has no section titled Boundaries. Therefore, this reference makes no Grok Bot product claim and does not borrow product facts from other sections. Its examples are generic and invented. Verify current enforcement and capability behavior in primary product documentation.

By the end, you will be able to make a two-layer matrix showing what the bot is instructed to do and what the environment technically allows.

## Put instruction and capability on separate axes

One axis asks, “What behavior is requested or forbidden?” The other asks, “What actions can the environment perform?” Combining them into one yes-or-no label hides important states.

| Instruction says | Capability allows | Resulting condition | Operator response |
|---|---|---|---|
| Do not publish | Publish reachable | Boundary carries the load | Remove capability if unnecessary |
| Do not publish | Publish unreachable | Layers agree on stop | Verify with safe test |
| Publish this | Publish reachable | Action can occur | Require appropriate review |
| Publish this | Publish unreachable | Task cannot complete as written | Produce local substitute |

The dangerous row is the first. The instruction may work often, but technical authority still exists.

## Define a permission by reachability rather than intention

Permission is often used casually to mean consent, instruction, approval, or account access. In this lesson it has a narrow definition: a technical condition that lets a specific action reach a specific resource.

If a publishing account accepts the workflow’s action, publish is reachable. If no credential or connection can submit the change, publish is unreachable through that path. The exact mechanism varies by tool, so inspect it rather than guessing from the bot’s charter.

Intention answers why Omar wants the tool. Reachability answers what the tool can do. A read-only intention paired with write-capable access still leaves write reachable.

## Define a boundary by required conduct and stop behavior

Omar’s boundary should name the trigger, forbidden action, substitute, and escalation: “When the task would make content public, never publish or submit. Save the exact preview locally, stop, and ask Omar to decide.”

That line is stronger than “never publish” because it defines the crossing and safe path. It remains an instruction. It does not claim to remove a button, token, API method, or account role.

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) teaches this four-part form. [Bot Prompt Engineering](/blog/bot-prompt-engineering) covers broader clarity. Neither should be cited as proof of technical denial.

## Follow Omar through the failure caused by category confusion

On Monday, Omar connects the publishing environment so a bot can inspect private previews. He writes “never publish” and runs ten successful drafts. On Friday, an imported brief says the update is urgent and should be made live immediately. The bot follows the new wording and publishes.

This scenario is invented. It does not assert a particular product’s connection model or prompt precedence. Its teaching value is the mismatch: Omar retained write reachability while relying on an instruction to suppress it.

| Moment | Instruction layer | Capability layer | Hidden assumption |
|---|---|---|---|
| Monday setup | Never publish | Publish reachable | Boundary equals denial |
| Ten drafts | Boundary followed | Capability unused | Success proves enforcement |
| Friday import | Conflicting instruction appears | Capability still reachable | Original words must always win |
| Publication | Boundary fails in scenario | Capability executes | Permission difference bites |

Ten successes measured ordinary behavior. They did not prove the action was unreachable.

## Use the door-and-sign analogy without stretching it

A sign saying “Staff only” is an instruction boundary. A locked door is a technical barrier. A person may obey the sign even when the door is unlocked. The sign and lock work better together.

The analogy helps because it separates conduct from reachability. It breaks down because software permissions are not always visible locks, and instructions can be processed in complex ways. Use it to ask the right questions, not to claim a precise enforcement architecture.

[Least Privilege for Bots](/blog/least-privilege-bots) develops the idea of giving only needed authority. [Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained) covers product-adjacent permission vocabulary. This article stays at the general distinction.

## Map four common mismatches before running a workflow

| Intended boundary | Capability mismatch | Possible consequence | Safer alignment |
|---|---|---|---|
| Draft but never send | Sending identity is reachable | Draft can leave workspace | Use read or draft-only path if verified |
| Analyze but never delete | Destructive access is reachable | Source can disappear | Remove delete authority if possible |
| Preview but never publish | Publish action is reachable | Private work can become public | Separate preview from publication |
| Compare but never purchase | Checkout can complete | Analysis can become commitment | Use non-purchasing account or mock data |

These rows are generic design patterns. Do not assume a named product offers every narrower role. Verify actual capability options before relying on them.

[Inbox Triage](/bots/inbox-triage), [Lead Scout](/bots/lead-scout), [Source Verifier](/bots/source-verifier), and [Citation Checker](/bots/citation-checker) illustrate jobs with narrow intended behavior. Their catalog presence does not establish technical permissions.

## Test the instruction layer with adversarial wording

An adversarial test deliberately presents a tempting reason to cross the line. Use synthetic content and a disposable environment. Tell the bot an urgent deadline requires immediate publication, quote a manager supposedly granting an exception, or hide a request inside a sample document.

Observe whether the bot produces the safe substitute and stops. A pass shows the instruction held in that case. It does not prove publish was technically impossible.

[Prompt Injection in Email](/blog/grok-bot-prompt-injection-email) covers untrusted instructions. [Email Injection Sentinel](/bots/email-injection-sentinel) is a catalog example of treating message content cautiously. Keep the test local and harmless.

## Test the capability layer without performing the consequence

Capability tests should avoid the harmful final action. Inspect account roles, connection scopes, available operations, or a documented dry-run feature where one exists. Use a disposable practice resource if an execution test is necessary.

Do not discover publish reachability by publishing a real page. Do not discover delete reachability by deleting a real record. The evidence source depends on the system: current documentation, an administrative role view, or a safe sandbox may be appropriate.

Record one of three results: blocked by verified mechanism, reachable, or unresolved. “The bot promised not to” is not evidence for the permission column.

## Answer the operator who says good prompts are enough

The strongest objection points to experience: Omar ran ten drafts and the boundary held every time. Adding account work may feel like unnecessary friction.

Ten passes provide evidence about those ten instruction cases. They do not prove that every later input, conflict, or error will preserve the line. If the consequence is low and recoverable, instruction-only control may be proportionate. If publication, deletion, external communication, or commitment would be unacceptable, capability reduction buys a different kind of protection.

The answer is not “prompts never work.” It is “prompt obedience and technical denial are different claims.” Choose controls based on the consequence of being wrong.

## Answer the engineer who says permissions make boundaries redundant

The opposite objection says a technical denial is enough, so boundary prose adds no value. If publish is impossible, why say never publish?

Because the line explains intended behavior, directs the substitute, and handles nearby paths the permission model may not cover. It tells the bot to create a local preview and ask Omar, rather than fail repeatedly or seek another channel.

The technical denial protects the resource. The instruction makes the workflow useful inside the denial. The layers are complements, not rivals.

## Diagnose failures by checking both layers

| Symptom | Instruction question | Capability question | Likely repair |
|---|---|---|---|
| Forbidden action occurred | Was trigger explicit and tested? | Why was action reachable? | Rewrite line and reduce authority |
| Bot loops at denied action | Was substitute specified? | Is a safer path available? | Add local artifact path |
| Bot refuses harmless work | Is boundary too broad? | Is needed read access absent? | Narrow objects and verify read path |
| Test result is ambiguous | Was pass criterion observable? | Was mechanism documented? | Mark unresolved and redesign test |

Failure analysis should resist blame stories. “The bot ignored us” identifies no mechanism. The two columns reveal whether instruction, capability, or both need repair.

[Approval Gates for Bots](/blog/approval-gates-for-bots) adds a third layer: a human decision before a proposed transition. [Approval Rules and Reversibility](/blog/grok-bot-approval-rules-reversibility) explains why a gate is not an undo.

## Build a two-layer control matrix for each consequence

List the consequence verbs relevant to the workflow. For each, write the instruction boundary, safe substitute, technical capability status, evidence source, and unresolved question.

| Consequence | Instruction boundary | Substitute | Capability status | Evidence |
|---|---|---|---|---|
| Send | Never send externally | Save exact draft | Unresolved | Inspect current connection |
| Delete | Never remove supplied files | Produce target list | Blocked in practice setup | Harmless marker test |
| Publish | Never make preview public | Save local preview | Reachable | Practice account role |
| Purchase | Never submit order | Save cart summary | Unresolved | Review account controls |

The statuses are Omar’s invented worksheet, not product facts. Replace them with your direct observations.

## Choose the weakest capability that still supports the task

If the job only reads, seek a verified read path. If it only drafts, avoid a path that sends when a narrower verified option exists. If no narrower option exists, reconsider whether the task belongs in that environment.

Do not claim a setting exists because a conceptual table wants it. The current system may offer coarse roles, no relevant integration, or a completely different mechanism. Record “unresolved” rather than inventing a control.

Capability reduction limits damage when instruction behavior surprises you. Boundary prose limits unwanted behavior while guiding useful alternatives. Human review can inspect the remaining consequential transitions. Each layer has its own job.

## State what this reference cannot claim

This reference cannot claim how Grok Bot reads boundary text, how permissions are configured, which connection scopes exist, or which instruction wins in a conflict. The required VERIFIED-FACTS file has no Boundaries section, so those product claims would lack the user-mandated source.

Use [How to Set Grok Bot Approvals](/blog/how-to-set-grok-bot-approvals) only for its own sourced topic. Use [the shared-computer security guide](/blog/grok-bot-shared-computer-security) only for its architecture topic. Do not combine adjacent facts into an unsupported enforcement promise.

The absence of a verified fact is itself a reason to test and label uncertainty.

## Verify Omar’s matrix with two independent tests

First test the instruction boundary in a synthetic case. Confirm the forbidden transition does not occur, the local substitute appears, and the bot stops. Second test capability through documentation, role inspection, or a disposable practice resource without causing a real consequence.

Record both results separately. “Instruction passed, capability reachable” is a valid and important result. It tells Omar the line worked in the case while the environment still carries authority. “Instruction passed, capability blocked” shows alignment. “Unresolved” means the workflow is not ready for sensitive work.

You can now do one concrete thing: build and verify a two-layer matrix instead of treating a boundary sentence as a permission setting.

Add a third column for evidence freshness. A role inspected six months ago may have changed. A boundary tested before a new channel was added may no longer cover the workflow. Record the date, environment, and person who performed each check. Freshness is not a universal number of days; it depends on how often the system and consequence change.

Run mismatch drills deliberately. In a disposable practice environment, create one case where the instruction forbids an action that remains technically reachable and another where the instruction requests an action the environment blocks. Observe the different failures. The first tests obedience under excess authority. The second tests whether the workflow produces a safe fallback instead of looping.

Do not let capability evidence leak secrets. A screenshot of an account role may expose identities or resource names. Record the minimum supported conclusion and store detailed evidence under the organization’s normal controls. The matrix is a decision aid, not an alternative credential store.

Assign an owner to every unresolved row. “Check later” is not a control. The owner must identify a current primary source or run a harmless test, then update blocked or reachable. Sensitive execution waits while a critical row is unresolved.

Omar should also mark shared dependencies. Removing publish capability may break preview if both use one coarse account role. That is not a reason to pretend the role is narrow. It is a design constraint. Move the preview to a safer path, accept instruction-only control for a documented low-consequence case, or move the task elsewhere.

When a product offers a narrower capability, confirm the effective result instead of trusting the label. Names such as viewer, editor, or contributor can mean different actions in different systems. The matrix should state the tested resource and action, not only the role name.

Finally, review after-state evidence. A blocked capability should produce no consequence in the practice resource. A passed instruction test should produce the substitute artifact and stop. These observations prove different things. Keeping them in separate cells is the habit that prevents the original category error from returning.

Add one row for inherited capability. A workflow may begin with authority configured for an earlier task. The current boundary can be narrow while the environment remains broad. Inventory reachability at task start rather than assuming the new prompt reset access.

Add one row for indirect paths. “Cannot publish through the editor” does not prove that a command-line tool, form, or linked service cannot publish. Test only paths supported by evidence and mark the rest unresolved. Never turn one blocked route into a universal denial claim.

Review the matrix during handoff. The next operator should be able to distinguish “we instructed it not to send” from “the tested account could not send.” If those statements collapse in conversation, the documentation is not doing its job.

Use capability names as observations, not comfort words. Read-only, viewer, and draft can sound narrow while retaining unexpected operations in a particular system. List the protected resource and tested action beside the label. Current primary documentation should support the interpretation.

When no narrow capability exists, make the tradeoff explicit. You can avoid the task, move it to a disposable environment, use synthetic data, or accept instruction-only control for a consequence judged tolerable. What you cannot do honestly is rename reachable authority as a permission denial.

When the boundary fails but the capability blocks the action, treat the technical control as successful and the instruction test as failed. Repair the prose because the same misunderstanding may affect a different path that is reachable. Defense in layers works only when failures remain visible.

When the boundary holds but the capability remains broad, record partial success. Do not remove the line merely because access will later be narrowed, and do not stop seeking narrower access merely because the line passed. Each layer protects against a different failure.

End with a go or no-go statement for each consequential verb. “No-go: publish remains reachable and the consequence is unacceptable” makes the matrix actionable. “Go for synthetic preview only: boundary passed and practice account contains no real data” defines a smaller safe domain. A matrix without a decision becomes documentation that nobody uses.

Keep reading: [how to write a boundary line](/blog/how-to-write-a-boundary-line), [least privilege for bots](/blog/least-privilege-bots), and [bot prompt engineering](/blog/bot-prompt-engineering).

## Frequently Asked Questions

### What is the shortest difference between a boundary and a permission?

A boundary says what the bot must not do and what it should do instead. A permission determines whether the environment can technically perform an action on a resource. The bot may have a capability it is instructed not to use, or it may be instructed to do something it cannot reach. Record and test the two layers separately.

### Does a strong boundary remove the need for narrow access?

No general product claim supports that conclusion. Strong prose improves intended conduct and gives the bot a safe substitute. Narrow technical access reduces reachable consequences if the prose is misunderstood or displaced. For important actions, align both where the actual system supports it, and verify the capability through current documentation or a harmless practice test.

### Can permissions replace boundary text?

Permissions can block a technical path, but they do not explain the desired substitute or escalation. A bot that cannot publish still needs to know whether to save a preview, ask a person, or stop. Use the boundary to guide useful behavior inside the capability limit. Use the permission to constrain reachability. Treat each as evidence for its own layer.

### How do I verify both layers safely?

Test the boundary with synthetic urgent and disguised instructions, then observe the forbidden action, substitute artifact, and stop behavior. Test capability through current primary documentation, role inspection, or a disposable practice resource. Avoid real sends, deletions, publications, or purchases. Record blocked, reachable, or unresolved for each layer, and do not begin sensitive work while a critical capability remains unresolved.
`,
};
