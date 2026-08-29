import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Write a Bot Post-Mortem Without an Audit Log',
  description:
    'Use this grok bot post mortem method to reconstruct evidence, separate facts from inference, test the cause, and assign repairs without an audit log.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Write a Bot Post-Mortem Without an Audit Log

Sana's bot posts an outdated renewal number into a planning channel at 09:03. By 09:40 the message is corrected, but the team cannot open a product audit view and replay every action. The easy story is "the bot hallucinated." The evidence points elsewhere: it read Friday's cached export because Monday's file fetch failed.

A grok bot post mortem without an audit log must reconstruct a defensible timeline from service-side records, routine history, files, screenshots, messages, and versioned instructions. It must label gaps instead of filling them with a fluent narrative. Then it must test the suspected cause against harmless fixtures.

Contain first. If the action is still live, use [bot incident response](/blog/bot-incident-response). This guide begins after the affected service is safe and the team can preserve evidence without creating another action.

## Define the event in one neutral sentence

Write actor, completed action, object, destination, and first confirmed time. "At 09:03, Revenue Brief posted a message containing Friday's renewal total to #planning" is neutral. "The bot ignored instructions" is a cause claim and does not belong in the event definition.

Name the business impact separately. Three managers repeated the number before correction. No customer received it. The meeting was delayed twelve minutes. These are observed consequences, not adjectives such as major or minor.

The neutral sentence becomes the scope anchor. Related oddities enter a hypothesis list until evidence connects them.

## Preserve artifacts before editing the charter

Copy the charter version, routine configuration, heartbeat, output files, input files, local notes, visible run records, destination message, correction, and relevant source exports. Record acquisition time and who collected each artifact.

Do not ask the bot to summarize the event and overwrite the workspace first. Do not fix the charter before preserving the version that ran. A repair made too early destroys the comparison needed to understand causation.

Store evidence outside the shared execution state when policy permits. Deleting a bot does not remove all shared-computer files or sessions, but deletion can remove its routines and useful context. Link to [why deleting leaves files](/blog/why-deleting-a-bot-leaves-the-files) rather than treating deletion as preservation.

## Build an evidence register with provenance

Give every artifact an ID, source system, time range, collector, and confidence. Service-side events usually prove destination actions better than chat narration. Files prove their contents and timestamps, not necessarily which process wrote them.

| ID | Artifact | Source | What it supports | Limitation |
|---|---|---|---|---|
| E01 | Channel message 8841 | Chat workspace | Payload and 09:03 post time | Does not prove input selection |
| E02 | renewal-export.csv | Workspace copy | Friday values in cached file | File timestamp may reflect copy |
| E03 | CRM export history | CRM | Monday fetch did not complete | Does not show bot reasoning |
| E04 | Charter v12 | Reviewed repository | Instructions approved for run | Does not prove loaded version |
| E05 | HEARTBEAT.md | Workspace | Job claimed cache fallback | Self-reported artifact |

Confidence belongs to the assertion, not the whole artifact. E01 strongly supports what appeared in the channel and says nothing about why.

## Separate confirmed facts, reports, and inferences

Use three labels in the timeline. CONFIRMED means an external artifact or direct observation supports the event. REPORTED means a person or bot stated it. INFERENCE connects evidence but remains unproven.

The bot's explanation is REPORTED. "The cached export caused the stale number" is INFERENCE until a controlled replay with the cache reproduces the output. "The channel received Friday's number" is CONFIRMED by the message and export.

This labeling protects the post-mortem from certainty inflation. A plausible sequence should not become fact merely because no complete action ledger exists.

## Reconstruct the timeline from independent clocks

Normalize timestamps to one timezone while preserving originals. Compare routine schedule, file modification times, source-system events, destination timestamps, approval prompts, and human messages. Note clock uncertainty where systems round or use different zones.

| Time | Label | Event | Evidence |
|---|---|---|---|
| 08:45 | CONFIRMED | Routine scheduled to start | Routine configuration capture |
| 08:47 | CONFIRMED | CRM export request failed | CRM export history E03 |
| 08:49 | REPORTED | Heartbeat says "fallback cache used" | HEARTBEAT.md E05 |
| 08:55 | CONFIRMED | Draft contains Friday total | Frozen draft file |
| 09:03 | CONFIRMED | Message posted to #planning | Chat message E01 |
| 09:09 | CONFIRMED | Sana flags stale total | Thread reply |
| 09:40 | CONFIRMED | Human correction posted | Chat message E08 |

Do not force an exact second when the source provides only minutes. Precision should reflect evidence.

## Map the action chain and mark every blind spot

Draw input selection, fetch, transform, draft, verification, approval, and delivery. For each transition, list evidence or write GAP. A missing product audit view means the chain will contain gaps. The post-mortem becomes more credible when it names them.

The Sana chain has source evidence for failed fetch, a cached file, a draft, and a destination message. It lacks proof of the exact on-screen clicks and whether the bot loaded charter v12 or a pasted instruction. That gap limits claims about instruction compliance.

[What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) covers prompt scope. The post-mortem should link once and state only what the evidence establishes locally.

## Identify the earliest preventable divergence

The incident is not prevented only at the final send. Ask where expected and actual behavior first diverged. In Sana's case, the fetch failed at 08:47 and the job treated a cache as current instead of stopping. That is earlier than the 09:03 post.

The earliest divergence often produces the strongest repair. If a missing fresh export forced a STOP file, later drafting and delivery could not proceed. A send approval alone might still present a polished stale number that a busy human accepts.

| Stage | Expected | Actual | Preventive control |
|---|---|---|---|
| Fetch | Current CRM export succeeds | Export fails | Freshness gate |
| Fallback | Stop and mark SOURCE_MISSING | Friday cache selected | Forbid stale fallback |
| Draft | Current total with source time | Stale total without age label | Claim ledger |
| Verify | Recalculate current metric | Reviewer scans prose | Numeric verification |
| Deliver | Human posts frozen verified file | Bot posts directly | Human-only delivery boundary |

## Test each cause against competing explanations

List at least two plausible explanations. Here they are: cached fallback rule caused the result, source export contained the stale number, human pasted an old draft, or destination showed an older duplicate message. Seek evidence that could disprove each.

The CRM history disproves a successful current export. Message metadata shows the bot identity posted E01. The frozen draft matches the payload. A controlled fixture replay with failed fetch and Friday cache reproduces the number. The cache hypothesis now has stronger support.

Do not claim inner reasoning. Describe observable conditions and reproduced behavior. "Under a failed fresh fetch, charter v12 permitted cached input and the fixture produced the stale total" is testable.

## Walk the failed replay before accepting root cause

Sana first replays with a current fixture export and gets the correct total. That does not test the suspected cause. The initial replay fails as an investigation because it proves only the happy path.

She resets the fixture, makes the current export unavailable, and places a dated Friday cache in the expected folder. Charter v12 says "use the latest available export" without a maximum age. The run selects the cache and writes the stale total. The suspected cause reproduces.

She creates charter v13 with a freshness rule: source timestamp must fall inside the named reporting window; otherwise write SOURCE_MISSING and stop before drafting. The same fixture now stops. A current export fixture still produces the correct local draft.

\`\`\`text
POST-MORTEM CAUSAL TEST
Incident: PM-2026-08-31-01
Fixture A: current export available -> expect current draft file
Fixture B: current export absent, Friday cache present -> v12 expected to reproduce stale draft
Fixture C: same as B under v13 -> expect SOURCE_MISSING and no draft
Fixture D: current export under v13 -> expect correct local draft
Delivery disabled for every fixture.
Boundary: Never post, send, edit CRM, or delete source files.
Pass for repair: B reproduces old failure; C blocks it; A and D preserve intended read-to-file behavior.
\`\`\`

## Assign repairs to controls, owners, and proof

Avoid "be more careful" and "improve prompts." Each action needs owner, due date, control type, verification, and rollback. Sana owns charter v13. Leena owns export reliability. Tariq owns the claim-ledger check. Rhea owns changing delivery to human paste.

| Repair | Owner | Due | Proof | Rollback |
|---|---|---|---|---|
| Add source freshness stop | Sana | 2 Sep | Fixture B stops with SOURCE_MISSING | Restore v12 only in fixture |
| Add export failure alert | Leena | 4 Sep | Forced failure creates alert | Disable noisy alert rule |
| Recalculate renewal total | Tariq | Next run | Claim row shows inputs and formula | Remove draft from delivery |
| Remove direct posting | Rhea | Before resume | Bot cannot reach destination in test | Keep routine paused |

Repairs should address prevention, detection, containment, and recovery where consequence justifies them.

## Write accountability without blaming the operator or the model

Blame narrows learning. Sana approved a draft under time pressure, but the system presented no freshness failure and allowed direct posting. The post-mortem can name her decision without making human vigilance the sole control.

Likewise, "model hallucination" is too broad when evidence shows a stale input and ambiguous fallback rule. Name the observable failure. If model behavior remains a hypothesis, label it and design a test.

Accountability means each control has an owner. It does not mean every incident needs a guilty person.

## Verify repairs with the original trigger and a nearby case

Run the exact failed fixture, then one adjacent case. The original case proves the repair blocks stale cache. The adjacent case might use a current export with a missing timezone or an export just outside the allowed window.

The repair passes only if unsafe output stops and valid output still completes. A rule that blocks every run prevents recurrence by destroying the job. Record both safety and utility results.

Use [verify bot output](/blog/bot-output-verification) for the claim-level check and [bot trial run method](/blog/bot-trial-run-method) for staged exposure.

## Publish known unknowns and schedule a follow-up

The final post-mortem should list unresolved gaps: loaded instruction source, exact on-screen path, missing older routine records, or uncertain file creator. State how each gap limits the conclusion.

Set a follow-up date for repair verification and unresolved evidence. Close actions only with proof links. If a gap cannot be resolved, preserve it rather than quietly deleting it from later summaries.

Verified documentation says there is no audit view of Bot actions yet. That absence is context, not permission to invent a complete story. External artifacts and controlled tests remain the basis.

## Stop this format before it becomes a compliance claim

This operational post-mortem does not automatically satisfy legal hold, regulatory reporting, privacy notification, or forensic standards. Involve qualified owners when those duties may apply.

For output-only problems caught before delivery, use [output verification](/blog/bot-output-verification) rather than opening an incident. For missing artifacts with no confirmed external effect, use [grok bot escalation](/blog/bot-escalation-paths). [VM Overwatch](/bots/vm-overwatch), [Stuck Bot Foreman](/bots/stuck-bot-foreman), and [Source Verifier](/bots/source-verifier) can support evidence patterns, but the post-mortem must cite actual artifacts from your event.

## Quantify impact with observed counts and bounded ranges

Count recipients, affected records, incorrect claims, duplicate actions, recovery time, and missed deadlines from source records. Do not translate uncertainty into a dramatic adjective. If channel membership changed during the event, write "between 18 and 21 members could access the channel" and explain the bounds.

Separate exposure from confirmed use. Twenty people could view Sana's message; three repeated the number; one planning decision was delayed; no customer destination appears in the reviewed records. Each statement needs its own evidence.

Financial impact should come from the relevant owner and method. A delayed meeting is not automatically equal to everyone's hourly rate. If no defensible amount exists, report operational impact without inventing money.

Record avoided impact too, but phrase it carefully. "Correction posted before the customer call" is confirmed. "Prevented a lost renewal" is speculation unless the customer or decision record supports it.

## Preserve contradictory evidence instead of choosing the tidy version

Two artifacts may disagree about when the job began, which charter loaded, or which source was current. Put both in the register. Investigate timezone, caching, copying, identifier reuse, and human edits before declaring one wrong.

Sana's HEARTBEAT.md says v12, while the draft header says v11. The post-mortem should not silently pick v12 because the heartbeat is newer. It should ask whether the draft came from an earlier run, whether a template retained the old header, or whether the heartbeat was overwritten.

Design fixtures for the difference when possible. If a distinctive v12 rule appears in the draft, that supports v12 behavior even if the header is stale. If no behavioral marker exists, keep loaded version as an unknown and avoid claiming the bot violated a particular charter.

Contradictions often reveal a separate observability repair: immutable run folders, version headers written from one source, or destination IDs recorded at the checkpoint.

## Distinguish root cause from contributing conditions

Use "causal finding" for the condition whose controlled change prevents the reproduced failure. Use "contributing condition" for factors that increased likelihood or consequence but were not sufficient alone.

The permissive cache fallback is the causal finding in Sana's fixture. Direct posting increased consequence. A rushed meeting review increased the chance of acceptance. Missing source timestamps reduced detection. None should be collapsed into one root-cause slogan.

Avoid infinite why chains. "Why did the charter allow cache?" may produce a useful governance action. "Why was the team busy?" may not. Follow branches while evidence supports a controllable system condition.

| Finding type | Sana example | Evidence | Repair class |
|---|---|---|---|
| Causal | Cache fallback accepted stale export | Failed-fetch replay reproduces output | Prevention |
| Contributing | Draft lacked source age | Frozen draft | Detection |
| Contributing | Bot could post directly | Destination record and charter | Consequence reduction |
| Context | Meeting began at 09:00 | Calendar | Recovery planning |
| Unknown | Exact loaded charter source | Conflicting headers | Observability |

## Review whether detection happened at the earliest possible point

Map every point where the system could have noticed the problem: export failure, stale file selection, missing timestamp, calculation review, approval, destination thread, and meeting repetition. Record which control actually detected it.

Sana detected the stale total after posting. The earliest feasible detection was the failed fresh export. A freshness stop there would have prevented drafting. The next was source age in the draft header. A verifier could have stopped delivery. This creates a layered plan rather than one fragile fix.

Measure detection delay from the earliest supported divergence to the first confirmed human observation. Use timestamps with their uncertainty. The purpose is to compare future events and repair placement, not to judge the person who noticed.

After deploying repairs, inject the same fixture failure and confirm the new alert or stop occurs at the intended stage. A control that exists only in the action list has not improved detection.

## Include what went well without turning it into praise filler

Name controls or decisions that limited impact and support each with evidence. Sana preserved the original message, corrected it through a human account, paused the routine, and retained the cached input. Those actions made reconstruction possible.

Do not add a generic morale section. "The team collaborated well" is not actionable. "The destination message ID in NOTES.md allowed the responder to locate the exact payload in two minutes" points to a control worth keeping.

Also note lucky breaks separately. The customer call happened later, but no designed control guaranteed that timing. Labeling luck prevents the organization from assuming the same buffer will exist next time.

Keep successful controls during redesign. Removing direct posting should not remove the useful heartbeat. Tightening freshness should not eliminate the source manifest. Post-mortems improve the system by preserving what worked as well as changing what failed.

## Write the executive summary only after causal testing

Draft the summary last, when evidence labels and fixture results are stable. Use five short parts: event, impact, containment, causal finding, and highest-priority repairs. Link to the full evidence register.

Avoid naming a cause that the body labels inference. If controlled replay has not happened, say "leading hypothesis" and set a test date. Executives can act on uncertainty when it is explicit; they cannot evaluate a false certainty.

The summary should state what did not happen when evidence supports it, such as no customer destination found in reviewed records. It should not declare universal absence beyond the search scope.

Do not hide the missing audit view in a footnote. State that the reconstruction relies on listed artifacts and contains named gaps. That disclosure increases trust because readers can see the boundary of the investigation.

## Protect the review from hindsight and outcome bias

Reviewers know the stale number was wrong, so every earlier clue can look obvious. Ask what information was actually available at each decision time. Sana could see the draft and source label but not the later CRM history capture. Judge the approval step against the visible payload, while still asking why the system omitted freshness evidence.

Compare with a matched successful run. If Friday's cache had been current and the same approval pattern produced a correct brief, the difference helps isolate source freshness rather than inventing a general attention failure.

Outcome bias also works in reverse. A forbidden direct post that happens to be correct is still a control failure. Include near misses where the unsafe path caused no harm. Their repairs may prevent the next incident without waiting for visible damage.

Have a reviewer not involved in containment challenge the causal wording and unknowns. They should identify any sentence that claims more than its evidence row. Resolve the wording, not the person.

Archive reviewer comments with the final report when they materially narrow a causal claim. A changed sentence such as "v12 caused the post" to "v12 reproduced stale drafting under the failed-fetch fixture; the exact loaded version remains unknown" is not cosmetic. It defines the limit of the evidence. Future readers should see why the narrower statement survived challenge and which additional observability control will close the gap next time.

That record also prevents a later summary from restoring certainty the investigation explicitly rejected.

## Frequently Asked Questions

### How can you write a post-mortem without a bot audit log?

Reconstruct the event from independent artifacts: source-system history, destination messages, routine records, frozen charters, input and output files, heartbeats, screenshots, and human observations. Build an evidence register and label timeline entries CONFIRMED, REPORTED, or INFERENCE. Mark transitions with no evidence as gaps. Then test the suspected cause with harmless fixtures. The result will not reproduce every click, but it can support a bounded causal claim and concrete repairs without pretending missing evidence exists.

### Should you trust the bot's explanation of what happened?

Treat it as a reported statement, not an audit record. Use the explanation to generate hypotheses, then compare those hypotheses with service-side events, files, timestamps, destination records, and controlled replays. Avoid claims about hidden reasoning. Prefer observable language such as "when the current export failed and a dated cache was present, the fixture selected the cache." If independent evidence conflicts with the explanation, preserve the conflict and base decisions on the stronger artifact.

### What belongs in a grok bot post mortem action item?

Each action item needs a specific control change, named owner, due date, verification method, and rollback or safe fallback. "Improve the prompt" and "be more careful" are incomplete. A useful item says, "Sana will add a source freshness stop in charter v13 by 2 September; fixture B must write SOURCE_MISSING and produce no draft." Include prevention, detection, containment, and recovery actions where the incident consequence warrants them, and close each item only with linked proof.

### When is the post-mortem complete?

It is complete when the event and impact are neutrally defined, evidence and gaps are preserved, the timeline distinguishes fact from inference, the earliest preventable divergence is identified, the suspected cause reproduces under a harmless fixture, repairs block the original trigger without breaking valid work, and owners accept remaining actions. Known unknowns may remain. Document their limits and follow-up dates. Completion does not require a fictional full history, but it does require evidence for every causal statement you keep.
`,
};
