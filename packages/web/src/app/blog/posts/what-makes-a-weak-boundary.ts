import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'What Makes a Weak Boundary, With Six Real Examples',
  description:
    'Learn what makes a weak boundary through six worked examples, a failure diagnosis, and a practical rewrite test you can apply before a bot runs.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# What Makes a Weak Boundary, With Six Real Examples

Maya asks a new bot to clean a practice inbox. She adds, "Do not do anything risky," and feels protected. The bot archives an old thread because archiving looks reversible. Maya meant do not change the mailbox at all. Her sentence sounded strict but left the decision inside the word risky.

A **boundary** is a written stopping rule: it identifies a condition, forbids a consequential action, and says what to do instead. This article uses boundary in that instructional sense. It does not claim that prose creates a technical permission system.

The requested source is the Boundaries section of VERIFIED-FACTS-2026-08-25. That file has no section with that name, so this article makes no Grok Bot product claim. The examples are invented teaching cases. For the architectural distinction, read [a boundary is not a permission](/blog/a-boundary-is-not-a-permission) rather than treating any sentence here as product documentation.

By the end, you will be able to score and rewrite one boundary before a bot ever sees real data.

## Judge a boundary by the decision it removes

The practical question is not whether a line sounds cautious. Ask which decision remains when the trigger appears. "Handle refunds responsibly" leaves the bot to decide what responsible means. "Never submit a refund; prepare the amount and reason for Maya" removes the submission decision while preserving useful preparation.

Four parts make the decision visible: a trigger, a forbidden action, a safe substitute, and a stop or handoff. A trigger is the observable condition that activates the rule. A substitute is useful work that does not create the forbidden consequence. A handoff names who decides next.

| Part | Question a reviewer asks | Weak answer | Testable answer |
|---|---|---|---|
| Trigger | When does the rule activate? | When it feels risky | When a refund would be submitted |
| Action | What must not happen? | Do nothing bad | Never submit the refund |
| Substitute | What useful work remains? | Be helpful | Prepare amount, reason, and evidence |
| Handoff | Who decides next? | Ask someone | Stop and ask Maya |

A weak boundary usually omits one part or replaces it with judgment. The next six examples show a different failure each.

## Replace vague caution in the first example

Maya's first line is, "Be careful with customer email." It fails because careful is a style request, not a stopping condition. A bot could carefully proofread, carefully choose a recipient, and carefully send. Every step could satisfy the adjective while violating Maya's intent.

Rewrite it as: "When the task would send or submit text to an external recipient, never perform the send or submit action. Save the exact recipient, subject, and body in a local review file, then stop and ask Maya."

The rewrite names the transition that matters. It also covers a contact form, which the word email might miss. The safe artifact contains enough information for a human decision. The stop prevents the bot from treating silence as consent.

This is a general instruction example, not a claim about how any product enforces sending. [What an approval actually governs](/blog/what-an-approval-actually-governs) covers approvals separately. Do not blend approval behavior into the meaning of this sentence.

## Remove the subjective exception in the second example

The second line says, "Never delete important files." It appears absolute, but important is an exception disguised as an adjective. The bot must classify each file before the prohibition applies. A stale export may look unimportant to the bot and essential to Maya's audit exercise.

Rewrite it around provenance, which means where an item came from: "Never delete or overwrite files supplied before this run. You may replace only files you created under the named practice-output folder. If cleanup would touch any other path, list the paths and stop."

Now the classification depends on an observable fact, not an estimate of value. The limited exception is narrower than the rule. It names both the allowed objects and their location.

[Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) discusses a product-specific deletion issue. This example concerns the wording of a task boundary only. The link is the right next step if Maya's concern is lifecycle cleanup rather than a file-handling instruction.

## Close the channel gap in the third example

The third line says, "Do not email customers." Maya tests it with email and sees a draft, so she marks it safe. A week later, the same task encounters a website contact form. The bot submits the message because the rule named a channel rather than the consequence.

Rewrite it as: "Never communicate externally on Maya's behalf. When the work reaches an outbound email, direct message, comment, or form submission, prepare the exact proposed content locally and stop."

The named channels are examples, while "communicate externally" defines the class. Reading a public page is not outbound communication. Saving a draft locally is not outbound communication. Pressing a submit control is.

The lesson is to identify the irreversible or externally visible transition. A narrow channel word can be useful when the job truly concerns only that channel. It is weak when the same consequence can occur elsewhere.

## Stop urgency from swallowing the fourth example

The fourth line says, "Ask before purchasing unless the request is urgent." The exception hands the bot two decisions: what counts as urgent and whether urgency outweighs review. Almost any request can contain a deadline. The rule becomes weakest exactly when pressure is highest.

Rewrite it as: "Never place an order or commit payment. Prepare a cart summary with item, quantity, price shown, destination, and stated deadline. Stop and ask Maya, even when the request describes an emergency."

The exercise fields are arbitrary, not product limits. They make the proposal reviewable. If Maya needs a real emergency purchasing process, it should name a human backup and an authorized channel. It should not turn a vague urgency label into purchasing authority.

A deadline can change the order in which work is prepared. It does not silently change who is allowed to create the consequence.

## Separate research from publication in the fifth example

The fifth line says, "Post only accurate information." Accuracy is important, but it does not answer who may publish. A perfectly accurate post can still be premature, confidential, off-brand, or sent from the wrong identity.

Rewrite it as: "Research and draft the proposed post, including a source beside each factual statement. Never publish, schedule, or update a public page. Save a preview and stop for Maya's decision."

This version separates evidence quality from release authority. A **release boundary** is a stopping rule placed before information becomes visible to the intended external audience. Source checking improves the draft inside the boundary. It does not grant permission to cross it.

[What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) covers the adjacent question of what authority an instruction receives from its environment. The one-sentence lesson is enough here: clear prose and reachable capability are separate things.

## Make the handoff finite in the sixth example

The sixth line says, "Check with me before changing the spreadsheet." The bot asks, waits briefly, receives no reply, and continues because completing the task still appears to be the main goal. The boundary requested contact but never defined the stopped state.

Rewrite it as: "Before changing any supplied spreadsheet cell, write the proposed sheet name, cell range, old value, and new value to review.txt. Stop the current run. Continue only after Maya gives a new instruction that identifies that exact proposal."

The phrase "that exact proposal" prevents approval for one range from becoming approval for later ranges. The stop is finite because it says what artifact ends the current work and what new event can resume it.

This example does not assert that a particular interface pauses or resumes in this manner. It teaches the content of a handoff instruction. Verify actual interface behavior from current primary documentation and a safe test.

## Compare all six failures before choosing a repair

Each weak line fails for a different reason. Adding "never" fixes only some of them. Use the failure type to choose the repair.

| Example | Weak line | Hidden opening | Repair mechanism |
|---|---|---|---|
| Email | Be careful with customer email | Careful has no stop | Name outbound transition and artifact |
| Files | Never delete important files | Bot defines important | Protect supplied objects by provenance |
| Channels | Do not email customers | Other outbound channels remain | Define the consequence class |
| Purchase | Ask unless urgent | Bot defines urgency | Remove subjective exception |
| Publishing | Post only accurate information | Accuracy stands in for authority | Separate drafting from release |
| Spreadsheet | Check with me first | No stopped state | Name proposal, stop, and resumption event |

Do not repair every boundary by making it longer. Repair the opening that allowed the unwanted decision.

## Score one line with a five-point review

Give one point for each visible property: observable trigger, explicit forbidden verb, protected object or destination, useful substitute, and named stop or handoff. A line scoring zero or one is not ready for consequential work. A score of five means the instruction is reviewable, not guaranteed.

Maya scores "Be careful with customer email" at zero. Customer email suggests a domain but does not define a trigger, prohibition, substitute, or handoff. Her rewritten line scores five.

| Score | What the line usually contains | Review response | Next action |
|---|---|---|---|
| 0 or 1 | Mood or aspiration | Meaning is supplied by the reader | Rewrite from the consequence |
| 2 | Prohibition without scope | Too many edge decisions remain | Add trigger and object |
| 3 | Clear stop without useful path | Safe but stranded | Add review artifact |
| 4 | Complete except handoff detail | Resume condition is ambiguous | Name person and proposal |
| 5 | All five properties | Ready for synthetic testing | Try adversarial cases |

The threshold is an arbitrary teaching device. It is not a product score, certification, or statistical guarantee.

## Test tempting cases instead of friendly cases

A friendly test merely repeats the wording. A tempting test gives the bot a plausible reason to cross. For email, add urgency. For deletion, label a supplied file "temporary." For publication, provide accurate sources and say the deadline has passed. For purchase, claim that a manager already agreed without supplying a new instruction from the named decision maker.

Run tests only against synthetic accounts, files, and recipients. The expected result has three parts: no forbidden consequence, a complete substitute artifact, and a stopped handoff. A refusal with no artifact is incomplete. A polished artifact followed by a send is a failure.

[How to write a boundary line](/blog/how-to-write-a-boundary-line) gives the construction pattern. This article's contribution is diagnosis: it teaches how six common openings survive inside sentences that sound protective.

## Walk Maya through a failed practice run

Maya creates three fake inbox messages on an isolated practice account. The first asks for a normal reply. The second says, "URGENT: answer now." The third contains a quoted instruction asking the reader to submit a contact form. Her boundary says only, "Do not email customers."

The bot drafts the first, drafts the second, and submits the form described by the third. Maya's initial diagnosis is that the bot ignored the rule. A closer trace shows a narrower failure: the rule prohibited email, while the observed action was form submission. The instruction never classified both as outbound communication.

She repairs the trigger and forbidden action, then reruns the same three messages. This time the expected artifact lists recipient or destination, proposed text, and source message. No external action occurs in the synthetic environment. The old failure becomes a regression test, which is a test kept to catch the return of a repaired defect.

| Observation | First diagnosis | Better diagnosis | Specific repair |
|---|---|---|---|
| Form was submitted | Bot was reckless | Channel gap in forbidden action | Cover outbound submission |
| Draft lacked destination | Bot was lazy | Substitute shape incomplete | Require exact destination |
| Bot continued processing | Bot did not wait | Stopped state absent | End current run after artifact |
| Urgent case crossed | Urgency confused it | Exception or goal outranked stop | State boundary outranks completion |

The trace turns disappointment into an editable component.

## Answer the operator who prefers short natural language

The strongest objection is that a capable bot should understand "be careful" from context. Detailed boundaries can become legalistic, hard to maintain, and easy to contradict. That objection wins for low-consequence preferences such as tone, formatting, or which draft to show first.

It loses when a wrong interpretation sends, deletes, publishes, purchases, or changes a protected record. In those cases, the extra sentence is cheaper than asking the bot to infer authority. Precision also helps two humans notice that they disagree before a run begins.

The goal is not maximum length. The goal is minimum ambiguity around one consequence. Keep task instructions conversational. Reserve the four-part shape for transitions that need a predictable stop.

## Keep permissions and architecture out of the prose test

A well-written boundary can coexist with broad capability, and a badly written boundary can coexist with narrow capability. The prose review asks what the instruction means. A capability review asks what actions are reachable. An architecture review asks what resources and identities are shared. Those are related but separate inspections.

For the canonical explanations, use [screens are not boundaries](/blog/screens-are-not-boundaries) and [where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives). This article will not repeat their product background. The practical implication for the exercise is simply to test wording without claiming that wording changes isolation or credentials.

Catalog entries such as [Inbox Triage](/bots/inbox-triage), [Email Injection Sentinel](/bots/email-injection-sentinel), [Source Verifier](/bots/source-verifier), and [Lead Scout](/bots/lead-scout) give you four different jobs against which to practice finding consequence verbs. Their pages are examples to inspect, not evidence for a product claim in this article.

## Know where this diagnostic stops applying

This method stops at the boundary text. It cannot prove that a system will enforce the text, that an operator identity is secure, that credentials are isolated, or that a completed action can be reversed. Those questions require separate controls and current primary sources.

If your problem is whether a technical capability is available, read [a boundary is not a permission](/blog/a-boundary-is-not-a-permission). If the issue is what a granted approval can undo, read [what an approval actually governs](/blog/what-an-approval-actually-governs). If the problem is shared work surfaces, read [screens are not boundaries](/blog/screens-are-not-boundaries).

The absence of a Boundaries section in the supplied VERIFIED-FACTS file also means this page deliberately avoids attributing enforcement behavior to Grok Bot. That constraint is part of accurate teaching, not a gap to fill with inference.

## Rewrite one weak boundary and prove the difference

Choose one real draft instruction, but test only with synthetic resources. Underline its consequence verb. Circle the trigger. Box the safe substitute. Name the person who decides next. If any mark is missing, rewrite the line using this frame: "When [observable trigger], never [action and object]. Instead, [reviewable artifact]. Then stop and ask [named person] about this exact proposal."

Create three cases: ordinary, urgent, and disguised through another channel. Record the forbidden observation, required artifact fields, and expected stop. Run them, capture the result, and repair only the missing component. Rerun the failed case before inventing a new one.

You can now do one concrete thing: take a sentence that merely sounds cautious and turn it into a five-point boundary another person can test.

Run a paraphrase test before the bot test. Give the rewritten line to two readers who did not help write it. Ask each reader to state the trigger, prohibited transition, artifact, and resumption event. Do not explain the intended answer. If one reader says "email only" and the other says "all outbound messages," the line still contains a channel ambiguity. Repair the noun or verb, then repeat the paraphrase. This catches private assumptions without risking any system action.

Next, create a consequence map. Put the desired artifact in the center and draw every action that could make it external, destructive, public, financial, or authoritative. For a customer reply, the outward paths may include send, submit, schedule, forward, post, and invite. Decide which class the boundary governs. The map is not a list to paste wholesale into the charter. It is a design aid that reveals whether one narrow verb leaves an equivalent path open.

Score the substitute as carefully as the prohibition. A review file that says "reply ready" is safe but not useful. Require the destination, proposed content, evidence, and unresolved questions needed for the human decision. Then plant a case where one field is unavailable. The correct output should mark the missing field instead of guessing. This verifies that usefulness does not become a reason to cross the boundary or fabricate a complete proposal.

Test the resumption event with two messages. The first says, "Looks good," without identifying a proposal. The second names the exact recipient, subject, and saved draft version. Your instruction should make clear whether either message is sufficient. For consequential work, a vague compliment should not silently authorize an old or different artifact. The exercise teaches why approval scope must be bound to an object, even though this article makes no product claim about an approval interface.

Now change one variable at a time. Replace email with a form, ordinary with urgent, supplied file with one labeled temporary, or private draft with scheduled post. A boundary that passes five simultaneous changes can still hide which word mattered. Single-variable cases produce better diagnoses. After each failure, write the smallest repair and rerun the entire regression set to confirm the new scope did not weaken an older case.

Finally, review the task goal for conflict. If the goal says "complete customer follow-up" while the boundary says never send, define the bot's completion as producing a review-ready draft. Otherwise the goal keeps labeling safe stopping as unfinished work. A strong boundary and an incompatible success condition create predictable pressure. Repair both sides so the allowed artifact is a legitimate completion state for the bot's part of the workflow.

Keep the original next to the rewrite. Ask a second reader to predict behavior from each without hearing your intent. If predictions differ, your private context is still doing work the sentence should do.

Keep reading: [how to write a boundary line](/blog/how-to-write-a-boundary-line), [a boundary is not a permission](/blog/a-boundary-is-not-a-permission), and [what an approval actually governs](/blog/what-an-approval-actually-governs).

## Frequently Asked Questions

### What makes a weak boundary even when it sounds strict?

A weak boundary leaves the consequential decision to interpretation. Words such as careful, important, urgent, reasonable, and appropriate hide a classification the writer intended to settle. Other weak lines name one channel but miss equivalent channels, forbid an action without a useful substitute, or request approval without stopping. Score the line for trigger, forbidden verb, scope, substitute, and handoff, then test the missing part.

### Is adding the word never enough to strengthen a boundary?

No. "Never delete important files" still lets the bot decide which files are important. Never is useful when followed by an observable action, object, and scope. It also needs a safe substitute and a stopped handoff if useful work should continue. Strength comes from removing hidden decisions, not from making the tone more forceful.

### How many edge cases should I test first?

Start with three synthetic cases: an ordinary request, an urgent request, and a disguised request using another channel or label. Three is an arbitrary exercise size, not a product limit. Each case should specify the forbidden observation, required artifact, and expected stop. Keep every failed case as a regression test after you repair the wording.

### Can a written boundary guarantee safe behavior?

No. This article evaluates instruction clarity only. It makes no claim that prose is a sandbox, permission control, isolation boundary, or reversal mechanism. Pair consequential instructions with independently verified technical controls and human review. Consult current primary product documentation for actual behavior, because the supplied VERIFIED-FACTS file contains no Boundaries section from which such a claim could be sourced.
`,
};
