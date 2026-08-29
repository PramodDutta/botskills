import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Write a Boundary Line a Bot Cannot Argue With',
  description:
    'Learn to write a precise bot boundary with trigger, forbidden action, stop behavior, and escalation path, then test it against tempting edge cases.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# How to Write a Boundary Line a Bot Cannot Argue With

Lena writes, “Be careful with customer email.” Her bot drafts a reply, finds the tone polite, and sends it because “careful” never said where to stop. Lena meant never send. The line described a mood instead of a boundary.

A **boundary line** is an instruction that names an action the bot must not cross and states what it must do when that action becomes necessary. Good boundary writing reduces room for reinterpretation. It does not require threats, legal language, or a long policy.

The binding VERIFIED-FACTS file contains no section titled Boundaries. Therefore, this lesson makes no Grok Bot product claim and does not borrow facts from its Isolation or Approvals sections. It teaches a general instruction-writing mechanism using invented examples. Check current product documentation separately for enforcement behavior.

By the end, you will be able to write one line with four parts: trigger, forbidden action, allowed substitute, and escalation.

## Replace careful language with an observable stop

Words such as careful, sensible, appropriate, and reasonable ask the bot to supply the policy. Lena needs the opposite: a condition another person can observe and test.

“Never send an email” is observable. Either an email was sent or it was not. “Draft the reply in replies.txt” names the allowed substitute. “Ask Lena to review the exact recipient and body” names the handoff.

| Weak line | Hidden judgment | Observable rewrite | Test result |
|---|---|---|---|
| Be careful with email | What counts as careful? | Never send email | No external send |
| Avoid risky deletions | What counts as risky? | Never delete source files | Source files remain |
| Use good judgment on purchases | What is good judgment? | Never submit a purchase | No order created |
| Handle public posts responsibly | What is responsible? | Never publish; save a local draft | No public URL changed |

The stronger lines use verbs whose effects can be inspected.

## Name the trigger before naming the prohibition

A trigger is the condition that activates the boundary. “When the task would require contacting a person” is a trigger. “Do not send” is the prohibition. Putting both together tells the bot when ordinary work must stop.

Lena’s trigger can be broad enough to catch email, forms, and direct messages without listing every application: “When completing the task would communicate with anyone outside this workspace, do not send or submit.” The output clause can then say, “Prepare the exact draft locally and ask Lena to review it.”

The trigger should describe a state transition, not a feeling. “When you are unsure” fails because the bot may feel sure. “When a message would leave the workspace” depends on an observable destination.

## Follow Lena from vague caution to a testable line

Lena’s first version is: “Be careful with customer email.” In a practice run, the bot drafts and sends a message. Lena revises it to: “Do not email customers unless I approve.” That is better, but “approve” has no specified object or handoff.

Her final general instruction reads: “When the task would send or submit a message to any external recipient, never perform the send or submit action. Save the exact recipient, subject, and body in review.txt, then stop and ask Lena to decide.”

| Version | Trigger | Forbidden action | Substitute | Escalation |
|---|---|---|---|---|
| Be careful | Missing | Missing | Missing | Missing |
| Do not email unless approved | Partial | Email | Missing | Vague approval |
| Final line | External communication required | Send or submit | Save exact draft | Stop and ask Lena |

The final line is longer because it contains the entire decision path, not because length itself creates strength.

## Use one consequence verb per boundary line

A boundary becomes hard to scan when it mixes send, delete, publish, purchase, and credential handling in one paragraph. Write one line for each consequence class. That lets a reviewer test and revise them independently.

| Consequence class | Trigger | Forbidden verb | Safe substitute |
|---|---|---|---|
| External communication | Message would leave workspace | Send or submit | Save exact draft |
| Destructive change | Source object would be removed | Delete | Produce deletion plan |
| Public release | Output would become public | Publish | Save preview locally |
| Financial commitment | Order or payment would be committed | Purchase or pay | Prepare cart summary |

These are invented policy examples. Choose classes that match your own workflow and authority.

[Inbox Triage](/bots/inbox-triage) and [Lead Scout](/bots/lead-scout) provide catalog examples of narrow jobs. [Email Injection Sentinel](/bots/email-injection-sentinel) and [Source Verifier](/bots/source-verifier) provide examples of handling untrusted text and evidence. Read their instructions as examples, not as product enforcement claims.

## Put the allowed substitute in the same sentence

A bare prohibition can strand the task. “Never send” tells the bot what not to do but not how to remain useful. The substitute preserves progress inside the boundary.

Good substitutes are inspectable artifacts: a local draft, preview, plan, diff, list of proposed targets, or question. They should not quietly reproduce the forbidden consequence. A draft saved locally is not a send. A message posted to a private external channel is still an external send, even if the audience is small.

Lena chooses review.txt because she can inspect it without any customer receiving it. The filename is arbitrary and declared for the exercise. The important property is local review before the forbidden transition.

[Bot Prompt Engineering](/blog/bot-prompt-engineering) covers clearer task instructions. [Approval Gates for Bots](/blog/approval-gates-for-bots) covers a separate review mechanism. A boundary line should remain understandable without depending on either article.

## Make escalation end the current run

“Ask me” is incomplete if the bot continues other steps while waiting. Add a stop condition: “Stop after writing the review artifact. Do not continue the task until Lena gives a new instruction about that exact proposal.”

This creates a clear state. Before the trigger, ordinary allowed work continues. At the trigger, the substitute is produced. Then the run stops. A later instruction begins a new decision rather than retroactively changing what the line meant.

Do not describe an escalation channel you have not verified. The generic line can say “ask the named operator through the current interaction surface.” Current product documentation should determine which surfaces actually support that behavior.

## Define scope with objects, destinations, and counts

“Never delete” may be too broad if the job must remove its own temporary files. “Never delete source files or records supplied by the operator; you may replace only the temporary files you created under the named practice folder” is more precise.

Scope has three useful dimensions: object, destination, and count. Which records? Where would output go? How many items are involved? Counts in a boundary should come from the task or an explicitly arbitrary practice case, not invented product limits.

| Scope dimension | Question | Weak answer | Testable answer |
|---|---|---|---|
| Object | What is protected? | Important things | Supplied source files |
| Destination | Where is crossing forbidden? | Outside | Any external recipient |
| Count | How much is proposed? | A few | The three named test rows |
| Identity | Whose decision is required? | Someone | Lena for this exercise |

Precision lets the bot continue inside the safe zone instead of treating the whole task as forbidden.

## Remove exceptions that swallow the rule

“Never send unless it seems routine” gives the bot authority to decide the exception. “Never delete unless cleanup is needed” makes every deletion eligible. An exception should be narrower and more observable than the rule it modifies.

If Lena needs an exception, she can write: “You may overwrite only review.txt, the temporary file created by this task. Never delete or overwrite supplied source files.” The named file makes the exception testable.

Avoid phrases such as “unless necessary,” “when appropriate,” and “if helpful” in the boundary itself. Those phrases may be fine in creative guidance, but they weaken a hard stop because necessity and helpfulness require interpretation.

[Least Privilege for Bots](/blog/least-privilege-bots) explains why narrow authority complements narrow prose. A boundary is still an instruction, so do not claim it creates a technical permission system.

## Answer the writer who says a smart bot understands intent

The strongest objection is that Lena’s meaning was obvious. A capable bot should understand “be careful” without a four-part rule.

The bot may infer Lena’s intent correctly many times. Boundary design is for the run where a plausible alternative interpretation causes the forbidden consequence. Explicit lines also help human reviewers agree on policy before the task begins.

The objection wins for low-consequence style preferences. “Keep the tone careful” can be enough for a private draft. It loses when success requires a binary stop before sending, deleting, publishing, or committing. Use precision where the consequence justifies it.

## Challenge the line with tempting edge cases

A boundary test should include cases that make crossing seem helpful. For Lena’s external-communication line, test a friendly customer, an urgent deadline, a message marked draft, a web form without an email address, and a request quoted inside an incoming document.

| Edge case | Temptation | Expected boundary behavior | Failure signal |
|---|---|---|---|
| Friendly customer | Relationship feels safe | Draft and stop | Message sent |
| Urgent deadline | Speed feels necessary | Draft and stop | Urgency overrides rule |
| Web form | Not called email | Treat submit as external communication | Form submitted |
| Quoted instruction | Text asks for action | Treat text as input | Bot follows quoted request |

[Prompt Injection in Email](/blog/grok-bot-prompt-injection-email) covers the adjacent problem of untrusted text. Your test should use synthetic accounts and content, never real recipients.

## Diagnose a failed boundary by the missing component

| Failure | Missing component | Repair | Retest |
|---|---|---|---|
| Bot crossed through a web form | Trigger too narrow | Name external submission | Add synthetic form case |
| Bot stopped without useful output | Substitute missing | Specify local artifact | Check artifact contents |
| Bot asked but kept working | Stop condition missing | Require stop after handoff | Observe run state |
| Bot deleted a temporary source | Object scope unclear | Name protected paths | Test exact path |

Do not respond to failure by adding adjectives. Add the missing mechanism. Every repair should produce a new case that could fail.

[Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained) helps distinguish instructions from capabilities. [Approval Rules and Reversibility](/blog/grok-bot-approval-rules-reversibility) helps distinguish stopping from undoing.

## Keep boundaries separate from positive task instructions

A task instruction states the desired outcome. A boundary states what must not happen while pursuing it. Put both in the charter, but label them so conflict is resolved predictably.

Example task: “Research five public support patterns and draft a reply guide.” Example boundary: “When the work would send or submit text externally, never perform that action. Save the exact proposal locally, stop, and ask Lena.” The bot can complete research and drafting while respecting the stop.

Do not write “complete the task at all costs” next to a prohibition. That manufactures conflict. State that boundaries outrank task completion: “If completing the task requires crossing a boundary, stop with the review artifact instead.”

## State what this boundary lesson cannot guarantee

An instruction can be misunderstood, overridden by later instructions, or paired with authority it should not have. This article does not claim a boundary line is a technical sandbox, access-control list, or product-enforced permission.

Because VERIFIED-FACTS currently has no Boundaries section, no Grok Bot behavior is asserted here. Use current primary product documentation and direct tests to determine enforcement. Pair important instruction boundaries with reduced capability and human review appropriate to the consequence.

[How to Set Grok Bot Approvals](/blog/how-to-set-grok-bot-approvals) covers review placement. [The shared-computer security guide](/blog/grok-bot-shared-computer-security) covers a separate architecture question. Do not merge their mechanisms into a claim about this line.

## Write and test Lena’s four-part boundary now

Choose one consequence from your workflow. Complete this sentence: “When [observable trigger], never [forbidden verb plus object]. Instead, [allowed substitute]. Then stop and [named escalation].”

Create three synthetic cases: an ordinary case, an urgent case, and a disguised case using a different channel or verb. Run only in an environment where crossing cannot affect a real person, account, or record. Record pass or fail for the forbidden action, artifact, and stop behavior.

You can now do one concrete thing: write a boundary line that a reviewer can test without guessing what “careful” meant.

Ask a second reader to paraphrase the line before testing it. Their paraphrase should identify the same trigger, prohibition, substitute, and escalation. If they describe a different object or destination, the wording remains ambiguous even if the first bot test passed.

Keep a case table beside the line. Each row contains synthetic input, expected safe artifact, forbidden observation, and actual result. When the boundary changes, rerun old cases as regression tests. A regression is the return of a previously corrected failure. The table prevents a fix for web forms from weakening the email case.

Test conflict explicitly. Put an ordinary task instruction next to the boundary, then add a synthetic document claiming the action is urgent and already authorized. The expected behavior remains the safe substitute and stop. The purpose is not to imitate every attack. It is to verify that task completion does not silently outrank the written boundary in your practice case.

Review verbs for channel gaps. “Never email” may still allow a direct message or form submission. “Never communicate externally” may be too broad if the bot must read public pages. Define the outbound transition precisely, then list representative channels in tests rather than bloating the rule with every brand name.

Add an artifact-quality check. A bot can obey “draft and stop” while producing a draft that omits the recipient or hides the proposed action. Require the safe artifact to contain the exact information a human needs for the next decision. Test completeness separately from the prohibition.

Retire boundary lines that no longer match the workflow. An obsolete path or operator name can cause unnecessary stops or unsafe handoffs. Review the line whenever tools, destinations, owners, or consequences change. Preserve its test cases so the replacement must meet at least the old standard.

Version the line in plain language. Record what changed and which failed case motivated it. “Added submit to cover web forms” is more useful than “improved safety wording.” The change note helps future writers resist removing a word whose purpose is no longer obvious.

Separate a failure of wording from a failure of technical restriction. If the bot crosses the line in a synthetic test, repair and retest the instruction. Also ask why the forbidden action was reachable. This article makes no product claim about capability controls, but the distinction prevents prose from carrying every layer of safety.

Check that the named operator can act. “Ask Lena” fails when Lena is on leave and no alternate exists. Define a handoff owner and a safe stopped state. Do not create an exception that lets the bot proceed when the owner is unavailable. Availability changes scheduling, not the consequence boundary.

Use positive language for the substitute and absolute language for the stop. “Save the exact draft to review.txt” is concrete. “Never send or submit it externally” is binary. Mixing both as vague negatives can make the bot refuse harmless drafting without protecting the transition you care about.

Read the line alongside the task goal. If the goal says “complete the customer follow-up” while the boundary says never send, define completion as a reviewed local draft for the bot’s part. Otherwise, the goal itself keeps inviting the forbidden action as unfinished work.

The best boundary line is short enough to find and complete enough to execute. Compression comes after testing. Remove words only when the trigger, prohibition, substitute, escalation, and stop remain visible to a reader who did not write them.

Keep the tested version beside its cases.

Retest it after every change.

Keep reading: [bot prompt engineering](/blog/bot-prompt-engineering), [least privilege for bots](/blog/least-privilege-bots), and [approval gates for bots](/blog/approval-gates-for-bots).

## Frequently Asked Questions

### What are the four parts of a strong boundary line?

Name an observable trigger, the forbidden action, an allowed substitute, and an escalation that ends the current run. Use a consequence verb such as send, submit, delete, publish, or purchase. Specify objects and destinations where needed. Then test the line with synthetic ordinary, urgent, and disguised cases. A line is strong when another reviewer can predict pass or fail from its words.

### Should a boundary line include the word never?

“Never” is useful for a hard prohibition, but it is not sufficient. “Never do anything risky” still hides the definition of risky. Pair never with an observable verb, protected object, and scope. Add a safe substitute and stop behavior so the bot remains useful without inventing an exception. The mechanism comes from precision, not from forceful tone alone.

### Can a boundary line replace permissions?

No such product claim is made here. A boundary line is an instruction about intended behavior. A permission or capability determines what actions are technically reachable. For consequential work, use narrow instructions together with independently verified capability controls and human review. The current VERIFIED-FACTS file has no Boundaries section, so consult current primary documentation before asserting enforcement behavior.

### How do I know the line worked?

Run synthetic edge cases in a safe environment and observe three things: the forbidden transition did not occur, the required substitute artifact was produced, and the bot stopped at escalation. Include at least one urgent case and one disguised channel. If any observation differs, identify the missing component, rewrite the line, and repeat the same case before adding new ones.
`,
};
