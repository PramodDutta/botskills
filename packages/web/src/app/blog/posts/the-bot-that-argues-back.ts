import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Bot Whose Job Is to Disagree With You',
  description:
    'Build a bot that argues back by steelmanning your decision first, presenting the strongest opposing case, and naming evidence that could change your mind.',
  date: '2026-08-31',
  category: 'Playbook',
  content: `
# A Bot Whose Job Is to Disagree With You

Most disagreement bots are flattering machines in a fake moustache. You give one a decision, it produces five generic objections, and you dismiss them before the second paragraph. Nothing in your reasoning moves because the bot never proved that it understood the position it was supposed to challenge.

A useful bot that argues back has a harder assignment. It must first state your case so accurately that you would sign your name under its version. Only then may it build the strongest opposing case, identify the hinge between the two positions, and name observable evidence that would settle that hinge. It does not choose for you. It makes dismissal expensive.

This playbook turns steelmanning into a delegable process. It supports the [Argue The Other Side bot](/bots/argue-the-other-side), whose boundary is exact: it never makes the decision, never recommends a side, and never softens the counter-case because you appear committed. The output is not contrarian entertainment. It is a decision packet you can inspect, correct, and reuse before the commitment becomes irreversible.

## Start with a decision you currently believe, not a topic you find interesting

The bot needs a claim with an owner, a deadline, and a consequence. "Should we improve onboarding?" is a discussion prompt. "We should replace our two customer intake forms with one required form before the next onboarding cycle" is a decision. It can be restated, opposed, tested, and eventually owned by a human.

Write the decision in one sentence. Add the reason you presently believe it, the evidence you used, the action that follows, and the latest point at which you can still change course. Do not begin with a folder of context and ask the bot to discover what you think. That makes its first task mind reading, and a wrong guess will contaminate every later objection.

Use decisions that are open but leaning. If you have no view yet, ask for option generation or research instead. If the choice is already irreversible, arguing it again creates the sensation of rigor without the possibility of correction. The [bot delegation playbook](/blog/bot-delegation-playbook) is a better starting point when the work itself has not yet been framed.

| Input field | What you write | What you must not write |
|---|---|---|
| Decision | One sentence that can be accepted or rejected | A broad subject such as onboarding |
| Present case | The best reason you currently believe it | "It feels obvious" |
| Evidence | Named files, observations, or links | A memory presented as a source |
| Consequence | The action that follows if you keep the decision | A vague intention to consider it |
| Reversal point | The date or event before commitment hardens | "We can revisit later" |

The first run should handle one decision. Combining hiring, pricing, roadmap, and tooling into a single request invites a buffet of shallow objections. A steelman needs room to preserve the causal chain of one position.

## Make the bot earn the right to disagree by restating your case first

The first artifact is not the counter-case. It is a faithful restatement of your case in stronger, cleaner language. The bot should name your desired outcome, causal belief, supporting evidence, assumptions, and accepted tradeoff. It should remove weak rhetoric without changing the conclusion.

Then you approve or correct that restatement. This pause matters. Without it, the bot can argue against a convenient substitute and still sound incisive. If you believe one form reduces reconciliation work, a response about employees resisting change is not disagreement. It is a new topic. The bot has not yet earned the right to proceed.

Ask one blunt question after the restatement: "Would the operator endorse this as the strongest fair version of the position?" The bot cannot answer on your behalf. You answer ACCEPTED or CORRECT with replacement text. A corrected restatement returns for approval before opposition begins.

This checkpoint also reveals when your own claim is unstable. If you revise the decision three times while reading a neutral restatement, the problem is not resistance from the bot. Your thesis was not ready. Stop the run, rewrite the decision, and start with a clean packet rather than allowing the target to move throughout the debate.

## Separate steelmanning from ordinary brainstorming and fact checking

Brainstorming produces possibilities. Fact checking tests assertions against sources. Steelmanning reconstructs a position in its strongest defensible form before challenging it. You may use all three in a decision process, but they are different jobs with different completion tests.

| Job | Core question | Successful output | Common failure |
|---|---|---|---|
| Brainstorming | What else could we do? | Distinct options worth screening | Many synonyms disguised as options |
| Fact checking | Is this claim supported? | Claim-to-source verdicts | A relevant link that does not prove the wording |
| Steelmanning | What is the strongest case on each side? | Two fair cases and the hinge between them | A weak opponent designed to lose |
| Decision making | Which action will we own? | A human choice with rationale | The bot announces the winner |

If the packet contains disputed numbers or quotes, route those claims through [Source Verifier](/bots/source-verifier) or use the [bot output verification method](/blog/bot-output-verification). A persuasive counter-case does not make its facts true. Conversely, a verified fact does not tell you what tradeoff to accept.

Keep decision ownership out of the steelmanning bot. The boundary is not ceremonial. Once the same bot must argue both sides and select the winner, it can subtly weaken one side to make its recommendation look inevitable. Your job is to decide. Its job is to make both cases difficult to caricature.

## Give both positions the same structure before comparing them

Asymmetry is an easy way to rig a debate. Your position arrives with six months of context, named evidence, and careful qualifications. The opposing position arrives as three bullets generated in a minute. Of course your side looks stronger. It received better scaffolding.

Require both cases to use the same fields: thesis, desired outcome, causal chain, strongest evidence, essential assumptions, accepted costs, failure condition, and earliest useful test. Matching structure does not imply both sides are equally correct. It makes differences visible instead of burying them in format.

| Field | Case for your position | Strongest opposing case |
|---|---|---|
| Thesis | State the action and why it should work | State the alternative and why it should work |
| Outcome | Name the result being optimized | Name the result the opposition protects |
| Causal chain | Show how action leads to outcome | Show where that chain breaks or reverses |
| Evidence | Cite the best supporting material | Cite the best opposing or missing evidence |
| Assumptions | Name what must be true | Name what must be true |
| Accepted cost | Admit the downside you tolerate | Admit the downside the opposition tolerates |
| Failure condition | Say what would falsify the case | Say what would falsify the counter-case |

Do not let the bot spend four paragraphs praising your nuance and one paragraph opposing you. Set roughly equal space as a local drafting constraint, not as a claim that truth is balanced. Equal structure is a diagnostic tool. Evidence can still make one column much stronger.

## Force the opposing case to defend a positive thesis

"Your plan might fail" is not an opposing position. Every plan might fail. A strong counter-case says what should happen instead and why that path better protects the stated outcome. It carries its own burden of proof.

For the one-form decision, the positive counter-thesis could be: keep the two-stage intake because customers know different information at different moments, then remove reconciliation work through a shared internal schema. That position can be tested. Generic warnings about form fatigue cannot.

Make the bot name the alternative action, not merely the defect. Require it to explain how the alternative achieves your original goal, what cost it accepts, and where it could be wrong. This prevents cheap opposition based on preserving the status quo without accounting for the status quo's cost.

A positive thesis also makes debate finite. You can compare two causal models rather than chase a growing list of concerns. If the bot finds three genuinely distinct alternatives, it should say the decision is prematurely binary and return those alternatives for a separate screening step. It should not smuggle three positions into one counter-case.

## Rank the strongest objection first and discard ornamental criticism

Many generated critiques hide their best point in position seven, surrounded by minor wording complaints. That layout helps the operator feel diligent while avoiding the real challenge. Require one strongest objection at the top, followed by no more than three supporting objections that change the decision.

For every objection, ask what happens if it is true. If the answer is "the memo should use a different adjective," discard it. If the answer is "the proposed form collects estimates before customers can know them, so the data becomes less reliable while completion drops," keep it. Consequence separates decision risk from editorial preference.

Have the bot label ornamental criticism as such and omit it from the final packet. This is not a performance where every run must discover a long list of faults. Sometimes the opposing case has one serious hinge and nothing else. That is more useful than ten concerns padded to look comprehensive.

Put the strongest point in a single sentence that you can repeat without distortion. If you cannot repeat it, the objection is probably bundled. Split causal claims until each can be investigated, or send them back for a clearer formulation.

## Name the hinge that makes one case stronger than the other

Two polished essays still leave you with dueling rhetoric. The hinge converts them into a decision instrument. It is the smallest uncertain claim that causes the preferred action to change.

In the intake example, the hinge is not "customer experience matters." Both sides agree. It could be: customers possess enough accurate information at the first intake moment to complete the combined required fields without guessing or abandoning the form. If that claim is true, one form may reduce internal reconciliation without harming the intake. If false, the second-stage structure may be doing useful timing work.

Write the hinge as an observable proposition. Avoid labels such as strategy, culture, quality, alignment, or readiness unless you define what could be observed. A hinge can concern behavior, sequence, reversibility, coverage, or cost, but it must connect directly to the causal difference between the cases.

Some decisions have two independent hinges. Permit two only when either could reverse the choice. More than two usually means the original decision contains several decisions. Split the packet. The bot should make complexity legible, not reward it with a longer answer.

## Convert disagreement into evidence that could change either mind

After the hinge, require symmetric change conditions. Ask, "What evidence would make the operator weaken or abandon the current case?" Then ask, "What evidence would make the opposing advocate weaken or abandon the counter-case?" If only your side has to be falsifiable, the bot is campaigning. If neither side is falsifiable, it is writing philosophy.

| Hinge | Evidence favoring the current case | Evidence favoring the counter-case | Inconclusive result |
|---|---|---|---|
| Customers know required fields at first contact | Past records show fields are usually complete and stable at first intake | Records show fields are often unknown, guessed, or corrected later | Existing records do not preserve when values became known |
| One form reduces reconciliation | Merged test removes duplicate correction work | Merged test shifts work into follow-up and exception handling | Staff time is not recorded consistently |
| Combined intake preserves completion | Small staged test shows comparable completion behavior | Test shows concentrated abandonment at newly required fields | Traffic or case mix differs too much to compare |

The table above names categories of evidence, not results. Do not invent a measurement to make the example satisfying. If no existing source answers the hinge, the output should say that plainly and design a small test. The [bot trial run method](/blog/bot-trial-run-method) shows how to freeze a test, use known inputs, and keep one changed variable visible.

The most valuable sentence may be "neither side currently has evidence for the hinge." That does not create a tie. It tells the decision owner what uncertainty they are accepting and what to learn before the reversal point.

## Paste a charter that blocks strawmen and leaves the decision with you

The charter must govern sequence, not just tone. "Be critical" invites random objections. "Restate, wait for acceptance, build the positive opposing thesis, identify the hinge, state symmetric change evidence, then stop" creates an inspectable process.

Paste this version and replace the operator name, decision packet path, and output path. Keep the boundary intact.

\`\`\`text
BOT CHARTER: ARGUE THE OTHER SIDE

Operator: Mara
Input: One open decision packet supplied by Mara
Output: /decisions/opposition/YYYY-MM-DD.md

Purpose:
Build the strongest fair case against a decision Mara currently believes.
Your work helps Mara inspect her reasoning. You do not make the decision.

Required sequence:
1. Restate Mara's position using these fields: thesis, desired outcome,
   causal chain, evidence, assumptions, accepted cost, and failure condition.
2. Stop and ask Mara to answer ACCEPTED or CORRECT. Do not build the opposing
   case until the restatement is accepted.
3. Build the strongest opposing case as if you held it. Give it a positive
   thesis, the same fields, and its own accepted cost. Do not use a strawman.
4. Put the single strongest objection first. Omit criticism that would not
   change the action.
5. Name the observable hinge that separates the two cases.
6. State what evidence would weaken each side. Distinguish existing evidence,
   missing evidence, and a proposed test.
7. Name which position could be wrong in the more expensive way, without
   recommending a side.
8. Stop and return the decision packet to Mara.

Evidence rules:
- Cite every factual claim to a supplied file or link.
- Never invent a fact, quotation, result, price, date, or product capability.
- If a claim cannot be supported, write UNSUPPORTED and explain what is missing.
- Separate evidence from inference.

Boundary:
Never decide, approve, reject, send, publish, purchase, sign, schedule, or
change a system. Never soften the opposing case because Mara appears committed.
Never intensify it because she appears uncertain. Produce a private draft and
stop for human judgment.

Closed-decision rule:
If the action is already irreversible, say CLOSED DECISION and ask for the next
open decision. Do not perform a ceremonial postmortem under this charter.
\`\`\`

The stop after step two is the heart of the setup. If your runtime cannot enforce a literal pause, run the charter in two prompts. Save the accepted restatement, then supply it as a frozen input for the opposition run.

## Walk Mara through a strawman failure from intake memo to corrected test

Mara is the operations lead at Northglass, an invented customer research studio. On Monday morning she writes a decision packet: replace the studio's two customer intake forms with one required form before the next onboarding cycle. Her case is that a single schema will remove duplicate entry and reduce manual reconciliation between the sales handoff and the research brief.

At 10:10 she asks a generic assistant, "Argue the other side." The response warns that employees resist change, long forms can be annoying, and all software projects carry risk. Mara dismisses it in ninety seconds. At 10:14 she marks the decision reviewed. That is the failure. The bot attacked change in general, never restated her causal claim, offered no positive alternative, and identified no evidence that could reverse the choice.

At 11:00 she runs the charter above. Its restatement says her goal is not fewer forms for its own sake. Her goal is one stable data record, with required fields collected once, so staff stop resolving contradictions before a project begins. It names her accepted cost: customers may face more questions earlier. Mara corrects one phrase because some second-form fields are not duplicates. The bot returns the revision, and she accepts it at 11:12.

Only then does it oppose her. The positive counter-thesis says Northglass should keep staged collection because customers know operational constraints only after the kickoff conversation, while the team should solve reconciliation through a shared internal schema. The strongest objection is that one required form may force customers to guess at fields they cannot know yet, creating cleaner-looking records with worse underlying data.

The hinge becomes observable: when do customers first possess reliable answers for the fields Mara plans to require? The bot finds no supplied evidence. It marks the claim UNSUPPORTED on both sides. It proposes reviewing twelve recent onboarding records, twelve being Mara's arbitrary local sample, to record when each disputed field became known and whether it was later corrected.

At 14:30 Mara reviews those records with a colleague. The article does not invent their result. That result belongs to Northglass, not to a writing example. Her next action depends on what the records show. The bot has completed its work because it replaced a dismissible warning with a fair alternative, a hinge, and a bounded evidence request. It still has not chosen one form or two.

| Time | What happened | Failure or correction | Artifact |
|---|---|---|---|
| 10:10 | Mara requests generic disagreement | Bot produces broad objections | Unstructured chat |
| 10:14 | Mara dismisses the critique | Strawman creates false confidence | Decision marked reviewed |
| 11:00 | Mara submits one decision packet | Structured restatement begins | Draft restatement |
| 11:12 | Mara accepts corrected restatement | Bot earns permission to oppose | Frozen current case |
| 11:20 | Bot states positive counter-thesis | Strongest objection and hinge appear | Opposition packet |
| 14:30 | Mara starts a twelve-record review | Human gathers missing evidence | Review worksheet |

Mara, Northglass, and the times are invented for this walkthrough. The twelve-record review is an arbitrary operating choice, not a platform allowance, benchmark, or universal sample size.

## Score the packet for fidelity before scoring it for force

A counter-case can feel powerful because it uses decisive language. Force is not the first quality check. Start with fidelity: did the restatement preserve what you actually believe, and did the opposing case address that exact causal chain?

Score five fields as pass or fail. The accepted restatement preserves the thesis. The opposition presents a positive alternative. The strongest objection would change the action if true. The hinge is observable. Both positions have change conditions. Any failure sends the packet back for one revision.

| Check | Pass condition | Failed output | Repair |
|---|---|---|---|
| Restatement fidelity | Operator accepts it without hidden qualification | A weaker or broader claim | Correct and freeze before opposition |
| Positive opposition | Alternative action pursues the original outcome | A list of possible problems | State what should happen instead |
| Material objection | Truth would change the decision | Tone or wording complaint | Remove ornamental criticism |
| Observable hinge | Evidence could distinguish the cases | "Leadership alignment" | Define behavior, event, or record |
| Symmetric change | Each side can name disconfirming evidence | Only operator must prove a case | Add the opponent's failure condition |

Do not score whether the bot "won." Winning encourages theatrical certainty and teaches the operator to defend identity. Score whether the packet makes both positions recognizable and testable. A short packet that reveals one unsupported hinge can pass. A brilliant essay with no change condition fails.

Archive the input, accepted restatement, final opposition, and human decision separately. That record lets you see whether dissent affected the choice, not merely whether it was generated.

## Preserve disagreement without turning the bot into a personality

Do not instruct the bot to be combative, savage, cynical, or fearless. Those are personas, not procedures. They reward friction even when the current case is well supported. A bot performing toughness will discover a crisis in every memo because agreement looks like failure.

The useful behavior is procedural stubbornness. It refuses to proceed before the restatement is accepted. It refuses a weak opposing thesis. It refuses unsupported facts. It refuses to recommend a winner. Those refusals protect the work without simulating an abrasive colleague.

Attack causal claims, evidence, assumptions, timing, reversibility, and accepted costs. Do not diagnose the operator's motives. "This assumes customers know the field at first contact" is inspectable. "You are rushing because you want credit" is speculation about a person. Remove it even if it sounds psychologically sharp.

The bot may conclude that your case is strong. It should still name the best opposing case and explain why the available evidence does not presently support it. Mandatory negativity produces noise. Mandatory fair reconstruction produces useful dissent.

## Keep evidence retrieval narrower than the decision packet

The bot should begin with material you intentionally supply. Broad access to mail, shared drives, customer systems, or chat is not a substitute for a complete packet. It expands the search surface and lets incidental context steer the argument.

If an essential source is missing, the bot should name it. You can add that source in a second run. Do not grant an entire customer system merely so the bot can verify one field. The [Citation Checker bot](/bots/citation-checker) can help inspect supplied claims, but a second bot is not a credential boundary.

All bots on an account share one persistent computer. Each bot has a separate screen, but screens are not security boundaries. Browser sessions, files, cookies, and command-line credentials are shared. Separate bots do not isolate credentials. Give the account only access appropriate for every bot using that computer, and do not treat a critic's screen as a private research room.

A public share link can copy a bot's configuration to another account. It does not copy the computer, logins, or conversation history. Strip confidential names, internal paths, tokens, and examples from a charter before sharing it because the configuration itself is exposed through the link.

## Run dissent before the reversal point instead of after the announcement

The best time to argue is after you have a real position and before external commitment. Too early, and there is nothing definite to challenge. Too late, and opposition becomes posturing because the meaningful options are gone.

Put the reversal point in the input. It might be before a contract is signed, before a customer message is approved, before a migration begins, or before a public commitment. The bot should return CLOSED DECISION when that point has passed and ask for the next open choice.

Do not schedule opposition against every document. Most documents are status records, instructions, or drafts without a decision. Trigger the process when a human labels a decision open and supplies a packet. This keeps the bot from spraying objections into work that needs execution rather than debate.

For recurring decisions, schedule preparation rather than judgment. A routine may assemble the current case and flag missing fields, but the human should initiate the opposition after confirming the decision sentence. A routine is assigned to one bot, and deleting that bot deletes its routines. Keep the charter and decision template somewhere you control as well.

## Answer the leader who says a human skeptic understands context better

The strongest counter-argument is right about the central limitation. A trusted colleague can notice politics, history, tacit commitments, and moral stakes that never entered the packet. A bot cannot reconstruct context you did not supply. It also cannot carry accountability for the choice. For a consequential decision, human dissent is better than an automated essay.

That does not make the bot useless. Human skeptics are scarce, unevenly available, and often receive a half-formed case in a meeting where speed and hierarchy distort the exchange. The bot can force the operator to state the decision, expose assumptions, prepare the strongest opposing thesis, and name evidence before taking a colleague's time. It produces a better briefing for human disagreement.

Use it as a preparation layer, not a synthetic board member. If a colleague changes the hinge or rejects the bot's reconstruction, update the packet. Human context outranks generated confidence. The process earns its keep when it makes the eventual human conversation more specific, not when it replaces that conversation.

## Stop using this playbook when the decision is closed or the dispute is not evidentiary

This page stops applying when the action is irreversible, when you do not yet hold a position, or when the task is to verify a factual claim rather than compare causal cases. It also stops when the decision turns mainly on legal duties, clinical judgment, personal safety, or rights that should not be reduced to a balance of generated arguments. Bring the appropriate qualified human into those decisions.

Do not use steelmanning to reopen settled conduct after harm. Use an incident review or postmortem with records, owners, and corrective actions. Do not use it to manufacture "both sides" around established evidence. Fair process requires a strong available counter-case, not an invented equivalence.

If you need claim verification, follow [verify bot output](/blog/bot-output-verification). If you need to test a bounded automation, follow the [trial run method](/blog/bot-trial-run-method). If you need a dissent draft that cannot act outwardly, review [the bot that never sends](/blog/bot-that-never-sends). This playbook is specifically for an open decision you currently favor and are still able to change.

## Frequently Asked Questions

### What does steelmanning mean for a disagreement bot?

Steelmanning means the bot must reconstruct your position in its strongest fair form before opposing it. The restatement should preserve your thesis, desired outcome, causal chain, evidence, assumptions, accepted costs, and failure condition. You must accept or correct that version before the bot continues. This checkpoint prevents the bot from attacking a weaker substitute. After acceptance, it builds an equally structured opposing case, identifies the hinge between them, and states what evidence could weaken either side.

### Should a bot that argues back recommend which side wins?

No. The bot should expose the strongest cases, the decisive uncertainty, and the cost of being wrong, then return the decision to a named human. Recommendation power creates an incentive to weaken one side so the conclusion appears cleaner. The Argue The Other Side charter therefore never makes the decision and never recommends a side. A human may choose after reviewing evidence, values, timing, and accountability. Record that human choice separately from the bot's opposition packet so authorship remains clear.

### How do you stop a disagreement bot from producing strawman arguments?

Require an explicit acceptance gate. The bot first restates your position, and it cannot oppose the position until you answer ACCEPTED. Next, require the opposing case to defend a positive alternative using the same fields as your case. Put the single strongest material objection first, omit criticism that would not change the action, and name an observable hinge. If the response attacks tone, motives, or change in general instead of your causal claim, reject the packet and repair the restatement or counter-thesis.

### When should you ask a bot to argue the other side?

Ask after you have a specific decision and a genuine current preference, but before the reversal point. Supply one sentence stating the decision, your best case, named evidence, accepted tradeoffs, and the action that follows. Do not use the process for a vague topic, a choice with no present position, or an irreversible commitment. For high-consequence choices, use the bot to prepare a sharper conversation with qualified people. The bot can structure dissent, but it cannot supply missing context or own the outcome.
`,
};
