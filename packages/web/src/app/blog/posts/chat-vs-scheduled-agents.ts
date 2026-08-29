import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Asking an Agent Versus Leaving One Running',
  description:
    'Use this chat vs scheduled agents framework to compare triggers, stale context, failure visibility, review timing, cost exposure, and safe operating boundaries.',
  date: '2026-08-29',
  category: 'Comparison',
  content: `
# Asking an Agent Versus Leaving One Running

Dev asks an agent for a competitor brief every Friday afternoon. The request takes two minutes, but he forgets it twice in one quarter. Scheduling the same job sounds obvious until a source login expires, the brief lands unread, and retries keep consuming work nobody sees. The real comparison is not manual versus automatic. It is review before execution versus review of a run that may happen while nobody is watching.

This **chat vs scheduled agents** comparison helps you choose per workflow. Chat is best when the operator supplies fresh judgment at trigger time. Scheduling is best when time itself is a reliable trigger, inputs are stable, failure is visible, and the output cannot cross the workflow's boundary.

## Compare trigger quality before comparing convenience

A schedule answers “when,” not “whether the job should run.” Dev's Friday brief is schedulable only if Friday remains meaningful and the source set does not require a weekly judgment call.

| Trigger type | Information available | Main strength | Main risk |
|---|---|---|---|
| Chat request | Current operator intent and selected context | Fresh judgment | Forgotten or inconsistent runs |
| Fixed schedule | Clock and stored configuration | Predictable cadence | Runs despite stale assumptions |
| Event trigger | Declared system event | Timely response | Duplicate or malformed events |
| Human-approved queue | Prepared job plus explicit release | Control with repeatability | Review delay |

If Dev must decide which competitors matter each week, chat preserves a useful decision. If the same five sources must be checked every Friday, a schedule may remove clerical work.

## State one boundary that both modes must obey

The same workflow should have the same forbidden action regardless of trigger. Dev writes: **Compare the approved pages and write a cited internal draft. Never publish, message a company, alter a source, or hide a failed page.**

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) shows how action verbs make the promise testable. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains the technical half. Scheduling does not justify adding write authority. It increases the need to remove authority that the unattended job does not require.

The boundary also defines recovery. If a page is unavailable, the safe output is a partial brief with a named error. It is not repeated access attempts forever or an invented “no change” result.

## Choose chat when context changes faster than the calendar

Chat lets Dev select sources, explain a launch, exclude a known outage, and change the question before execution. The prompt acts as a fresh job ticket. This is valuable for research, unusual decisions, and sensitive actions.

[Lead Scout](/bots/lead-scout) may be more useful on demand when the target profile changes with a campaign. [Bot Advisor](/bots/bot-advisor) may fit a weekly review because roster health has a stable cadence. The bot name does not determine the mode. The input and decision frequency do.

Chat also makes “do nothing” easier. Dev can see that a holiday week has no useful comparison and skip it. A schedule needs an explicit calendar exception or it will run exactly as configured.

## Choose scheduling when time is part of the requirement

A schedule fits when a result must exist before a known review, the source list is stable, the input window can be computed, and a named person will inspect output and failures. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) has a weekday timing requirement. [Competitor Pricing Watch](/bots/competitor-pricing-watch) can have a repeated comparison window.

The routine should assign one workflow to one bot and declare its owner. The verified product facts allow asserting that a routine is assigned to one bot, with a maximum of 50 routines per bot and the 20 most recent run records kept per routine. Those are product limits, not recommendations to fill every slot.

Scheduling is not “set and forget.” It is a different operating contract with a trigger, run window, retry rule, output location, review deadline, and retirement condition.

## Measure stale-context risk explicitly

Stored instructions age. A competitor URL changes, an employee leaves, a metric definition is renamed, or a destination folder is retired. Chat exposes some drift because Dev re-reads the request. Scheduled runs can repeat stale assumptions consistently.

| Context item | Freshness rule | Failure behavior | Owner check |
|---|---|---|---|
| Source allowlist | Review monthly | Unknown source never added automatically | Dev |
| Credentials | Validate before run | Report auth failure, do not loop | System owner |
| Metric definition | Version in output | Stop on missing version | Analyst |
| Destination | Confirm writable draft path | Fail without fallback publish | Operator |
| Boundary | Review after workflow change | Disable routine on mismatch | Owner |

Put a “configuration last reviewed” date in every scheduled output. Old context should be visible before the reader trusts the result.

## Define retries as a finite state machine

Chat recovery is conversational: Dev sees the error and chooses what to do. A scheduled job needs written retry behavior. Without it, a temporary failure can become repeated cost, duplicate drafts, or account lockout.

\`\`\`yaml
states:
  queued: run once inside Friday window
  success: write one draft and stop
  partial: write draft with source errors and stop
  auth_failed: alert internal owner and stop
  transient_failed: retry once after 30 minutes
  permanent_failed: record error and stop
dedupe_key: workflow_id + window_start
external_actions_allowed: []
\`\`\`

The thirty-minute delay and one retry are Dev's declared choices for this example, not product defaults. The important properties are a finite count, stable deduplication key, and a terminal state the owner can inspect.

## Compare review timing, not merely human involvement

Both modes can include a human. In chat, the human usually reviews the request before execution and the output afterward. In scheduling, the human delegates the trigger and reviews later. That delay changes which mistakes can accumulate.

| Review point | Chat | Scheduled | Control needed |
|---|---|---|---|
| Before trigger | Operator present | Configuration review date | Narrow source and action scope |
| During run | Operator can clarify | Usually unattended | Deterministic stop rules |
| After output | Immediate conversation | May wait hours | Named review deadline |
| After repeated failure | Manual decision | Retry logic acts first | Finite retries and alert |

If a wrong output can cause harm before anyone reads it, keep it a local draft in both modes. Scheduling should automate arrival, not publication.

## Walk Dev through one chat run

On Friday at 15:00, Dev requests the brief and supplies five URLs. He notes that one vendor is migrating its pricing site, so a temporary redirect should be treated as an access warning. The agent finds two changes and reports the redirect. Dev checks the citations and saves the accepted brief.

The run takes twelve minutes including review. The instruction is fresh, and recovery is easy because Dev is present. The weakness appears the next Friday when Dev is traveling and forgets. No brief exists, and nobody notices until Monday.

Chat won on context and lost on trigger reliability. That result is specific to this workflow, not a universal ranking.

## Walk Dev through the scheduled version

Dev converts the stable parts into a Friday routine: same five pages, same comparison window, same local output, one retry for a transient fetch failure, and an internal failure note. He keeps the migration exception in a dated configuration entry that expires after two weeks.

The first two runs pass. On week three, authentication for one source expires. The routine writes a partial brief, records auth_failed, and stops without retrying. Dev reviews it at the declared 16:00 deadline and restores access manually.

The scheduled mode saves the trigger step without pretending the source succeeded. It wins because its failure is visible and finite. Had it silently skipped the page, chat would remain safer.

## Catch the failure where retries create duplicate briefs

In a test, the first scheduled run writes the brief but times out before recording success. The scheduler retries and writes a second brief. Dev sees two files with slightly different capture times and cannot tell which one is authoritative.

| Symptom | Cause | Immediate fix | Regression test |
|---|---|---|---|
| Duplicate outputs | Success write not idempotent | Stable run ID and atomic finalize | Timeout after file write |
| Endless auth attempts | Auth error treated transient | Terminal auth_failed state | Expire test credential |
| Empty brief looks clean | Source errors omitted | Reconcile source count | Block one page |
| Old exception persists | No expiry | Date every override | Advance test clock |
| Nobody reads failures | Owner undefined | Assign review deadline | Leave output untouched |

Dev changes the output to a temporary file followed by one atomic rename keyed to the weekly window. The retry sees the completed run ID and stops. Scheduling becomes acceptable only after this failure is handled.

## Count unattended cost exposure without claiming a cap

Chat naturally limits frequency because a person initiates each run. A schedule can keep running through low-value weeks, errors, and forgotten projects. Track run count, retries, source volume, output review, and the date someone last used the result.

There is no Grok Bot-specific spend cap yet according to the verified facts. [What You Cannot Cap](/blog/what-you-cannot-cap) provides the canonical detail. The operational response here is to make routines finite, review usage, disable stale work, and avoid inventing an allowance amount.

Cost is not only model usage. Unread briefs, repair time, and repeated source access are operating waste. A scheduled job whose output nobody uses should be retired even if each run looks cheap.

## Keep scheduled output local until review

An internal draft is the safest shared destination between chat and schedule. It lets Dev compare the content while holding publication authority constant. Do not test scheduled mode by also adding a messaging or publishing integration.

[Inbox Triage](/bots/inbox-triage) can classify work without becoming a sender. [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) explains why approval of one draft does not authorize all future scheduled drafts. If an output later needs external distribution, add a separate human-controlled action after review.

This design also keeps failure evidence available. A partial draft can show four successful sources and one error instead of disappearing because the publish step refused incomplete content.

## Answer the operator who says schedules remove discipline

The strongest objection to chat is that humans forget repetitive work. A schedule creates consistency and frees attention. That is true when the job definition is stable and someone still owns the result.

The strongest objection to scheduling is that unattended work fossilizes assumptions. That is true when configuration lacks review dates, exceptions never expire, and outputs are not read. Chat forces a fresh trigger but can still reuse a stale pasted prompt.

The answer is not ideological. Automate the clock only after you can specify the run's source set, terminal errors, deduplication, review deadline, and retirement rule. Otherwise, keep the trigger in chat while refining the workflow.

## Use a hybrid queue when trigger and judgment split

Some work has a predictable collection time but an unpredictable decision. Schedule data collection into a review queue, then let Dev ask the agent to analyze selected items in chat. This preserves reliable capture without authorizing unattended interpretation or external action.

For example, a Friday job can snapshot the five pages and report access errors. On Monday, Dev selects the valid snapshots and asks for a comparison with current launch context. The scheduled part is mechanical; the chat part contains judgment.

The hybrid adds a handoff, so verify IDs and dates. It is worthwhile when source timing matters more than analysis timing.

## Verify both modes with the same failure matrix

Run chat and schedule against five synthetic sources. Plant one change, one auth failure, one temporary error, and one malformed prior snapshot. Force a timeout after output creation to test duplication.

Both modes must cite the change, expose the three failures, create no external action, and avoid duplicate authoritative output. The scheduled mode must stop after its declared retry and surface a review alert. The chat mode must ask Dev how to treat an ambiguity rather than guessing.

Log operator minutes and unread time for four weeks. Choose schedule only when trigger reliability improves without reducing evidence or expanding authority. Choose chat when fresh context prevents meaningful errors.

## Stop this comparison before platform architecture

This page decides whether one workflow should run from a fresh request, a schedule, or a hybrid queue. It does not compare vendors, design team-wide governance, or choose whether to build software. Use [Build Your Own Agent or Buy One That Already Runs](/blog/build-vs-buy-ai-agents) for that adjacent decision.

Separate screens on the account computer are not security boundaries, as [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) explains canonically. [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers persistent artifacts, including scheduled outputs. State those shared facts once by link instead of embedding them in the scheduling comparison.

## Design the scheduled run record for the twentieth history slot

The product keeps the 20 most recent run records per routine. That makes the twenty-first run an operational test: which evidence must remain outside the built-in history so the owner can investigate an older decision? Do not treat the retained records as a permanent audit archive.

Dev keeps a compact external operating ledger with routine version, scheduled window, actual start, terminal state, source count, output ID, error class, review time, reviewer, and disposition. The ledger contains no hidden chain-of-thought or unnecessary copied page content. It preserves the facts needed to understand whether a routine ran and whether anyone used the result.

For a weekly routine, twenty records cover roughly twenty runs, but missed and retried behavior may affect what the interface displays. Dev does not assume a calendar duration. He checks the actual run list and exports only the approved operational fields his team needs.

The oldest-record test is simple. Seed twenty successful synthetic runs, then create an auth failure as the next run. Confirm that the separate ledger still lets Dev connect the current failure with the configuration version and earlier similar incident. If the only useful evidence vanished with the interface record, the monitoring design is incomplete.

This does not justify copying every input forever. Retention should match the investigation need. A source URL, status, capture time, and error class may be enough. Keep customer data and full content out unless the workflow specifically requires and governs them.

## Review all routines attached to the bot as one load

A bot can have up to 50 routines, but capacity is not a recommendation. Multiple routines can collide on credentials, output destinations, review attention, and timing even when each one passes alone. Dev inventories the entire routine set before adding another schedule.

He looks for two jobs reading the same source inside the same hour, two drafts writing the same filename, retries that overlap the next trigger, and outputs assigned to one reviewer at the same deadline. A collision can create duplicated access or cause the reviewer to ignore both briefs.

The decision table should therefore include portfolio load. A new Friday routine may be suitable in isolation but better left in chat if Dev already reviews four scheduled outputs at 16:00. Moving the trigger away from a person does not create more review capacity.

[Bot Advisor](/bots/bot-advisor) can review roster overlap, but Dev should still own the operational choice. A report can flag two schedules in the same hour; it cannot know which business deadline deserves priority without current context.

## Define pause, resume, and retirement as ordinary states

Scheduled work needs a pause path before an emergency. Dev writes who can pause the routine, what happens to an in-progress run, how the next window is chosen after resume, and when accumulated drafts expire. On iPhone, verified product behavior permits pause and resume only; editing, history, testing, and deleting require desktop. That platform detail affects incident procedure, so the owner knows what can and cannot be changed away from a desktop.

Retire a routine when the source disappears, the output has gone unread for the declared period, the owner leaves, or the workflow boundary changes. Deleting the bot also deletes its routines according to the verified facts, so do not use bot deletion as a casual scheduling cleanup when other work belongs to that bot.

Dev rehearses pause during a synthetic run. He confirms whether the current run stops or merely prevents the next one, then records the observed behavior for his setup. He resumes into a fresh test window and checks that no backlog fires unexpectedly. Observed recovery behavior is better than assuming what “pause” means.

Finally, he retires a sample routine and verifies that the source snapshots and draft files follow the separate retention plan. Removing a schedule does not automatically answer what should happen to its artifacts.

## Make timezone and daylight changes part of the trigger contract

“Friday at 15:00” is incomplete without a timezone. Dev records the business timezone, expected source window, and what happens when clocks change. If the source publishes on another regional calendar, he decides whether the routine follows his review day or the source's availability.

Test the schedule across a simulated daylight transition and month boundary. The run ID should still describe one intended business window, not a raw elapsed-hour interval that overlaps or skips data. If an event source supplies timestamps in UTC, convert them consistently at the comparison boundary and print both the source time and review window.

Holidays need an explicit rule too. Dev may pause the run, move it to the next business day, or allow a partial brief. None is universally correct. The contract should state the choice and prevent a missed holiday review from triggering a backlog of duplicate work on Monday.

Chat avoids some calendar machinery because Dev chooses the moment, but even chat prompts can compare the wrong windows. The fair comparison includes the cost of defining time correctly in both modes. Scheduling makes the ambiguity repeat; chat makes it easy to vary accidentally.

Keep reading: [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) explains why an authentication failure or session belongs to the shared browser state, not to the chat or schedule mode.

## Frequently Asked Questions

### Are scheduled agents safer than chat because the prompt is fixed?

No. A fixed prompt can improve consistency, but it can also repeat stale assumptions without an operator present. Safety depends on narrow sources and actions, explicit terminal failures, finite retries, deduplication, visible output, and a named reviewer. Chat supplies fresh intent at trigger time; scheduling supplies trigger reliability. Test both against the same blocked source, malformed input, and external-action boundary rather than treating consistency itself as safety.

### When should I move a chat workflow onto a schedule?

Move it when time is a reliable trigger, inputs and metric definitions are stable, partial failures remain visible, retries are finite, output is idempotent, and a named person reviews it by a declared deadline. Run the chat version several times first to discover exceptions. If the operator still changes sources or judgment rules every run, keep it in chat or schedule only mechanical collection into a human-reviewed queue.

### How do I stop a scheduled agent from producing duplicate work?

Give each time window a stable run ID, write to a temporary output, and finalize atomically. A retry should check whether that run ID already completed before creating another authoritative file. Test by forcing a timeout after the output write but before success recording. The second attempt must recognize the completed artifact and stop. Also distinguish transient, authentication, malformed-input, and permanent failures so every error does not enter the same retry loop.

### What is the best way to compare chat vs scheduled agents?

Use one workflow, one boundary, and one failure matrix for both modes. Plant a valid change, authentication failure, temporary source error, malformed snapshot, and timeout after output creation. Compare evidence quality, hidden failures, duplicate outputs, operator review time, unread time, and external actions over four weeks. Choose scheduling when it reliably supplies the trigger without hiding errors or expanding authority. Choose chat when current human context materially changes the correct run.
`,
};
