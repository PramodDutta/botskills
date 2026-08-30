import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'You Hit 50 Routines on One Bot',
  description: 'This grok bot max 50 routines guide helps you inventory, retire, combine, or reassign work without deleting evidence or hiding review demand elsewhere.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# You Hit 50 Routines on One Bot

Omar does not need a bot that looks busy. Omar needs a 51st weekly account-health routine blocked by a full bot to arrive with enough evidence to review and no hidden external action. The useful setup is narrow: collect named inputs, preserve uncertainty, produce a private artifact, and stop at the boundary.

The boundary for this workflow is exact: **Never solve the 50-routine ceiling by deleting a routine until its owner, evidence needs, dependencies, and rollback path are recorded.** That sentence is the control surface. A friendly bot name, a routine label, and a successful sign-in do not replace it. The longer explanations live in the [inheritance guide](/blog/bot-capacity-planning), [boundary guide](/blog/what-a-routine-is-and-where-it-dies), [approval guide](/blog/how-to-schedule-a-grok-bot-routine), [permission guide](/blog/why-deleting-a-bot-leaves-the-files), [architecture guide](/blog/how-to-write-a-boundary-line), [operator guide](/blog/learn-grok-bot). This page spends its time on the failure you searched for.

Omar removed a quiet monthly routine to make room. The routine was quiet because it checked contract anniversaries, not because it was unused. Two weeks later the team missed the one date it existed to catch.

Start from one of these real catalog patterns when it matches the work: [starting workflow](/bots/account-health-ranker), [evidence helper](/bots/churn-watch), [review helper](/bots/agent-work-logger), [briefing helper](/bots/chief-of-staff-briefing). Each is a starting charter, not an authorization grant. Replace its sample sources, owner, review window, and output path before the first live run.

The procedure below has one aim: make a repeated run boring enough to inspect. It uses an explicit source register, a four-state decision table, a private output, and a human checkpoint. If the evidence cannot support a row, the correct value is unknown. If the completion state cannot be proved, the correct action is stop.

## Make the first decision from the artifact, not the bot name at routine number 50

Inventory every routine and manual bot job. For each, record cadence, expected runs, worst credible consequence, reviewer, backup, and stop mechanism. A bot with no routine can still matter if operators invoke it manually with broad authority. A routine with one daily run can dominate risk if it sends or writes.

| Workload unit | Count it as | Why |
|---|---|---|
| Scheduled read-only brief | Expected review arrivals | Creates recurring attention |
| Exception-only monitor | Alerts plus false positives | Load is bursty |
| Draft generator | Draft reviews | Generated does not equal accepted |
| Send-capable routine | Consequential runs | Each run can act externally |
| Manual bot task | Operator sessions | Still consumes ownership and evidence |

Omar's nine names become 31 weekly review arrivals, 12 expected exceptions, and six consequential runs. Those figures explain management load better than nine.

## Write the irreversible line before connecting the source at routine number 50

Verified facts say a routine is assigned to one bot, a bot can have at most 50 routines, and the app keeps the 20 most recent run records per routine. None of those facts says 50 routines are manageable for your team. A technical maximum answers whether configuration is accepted. An operating limit answers whether humans can review and recover.

Set an internal threshold below the documented ceiling based on consequence and ownership. Omar chooses no more than eight active routines for a send-capable bot and no more than 15 for a read-only preparation bot. Those are his conservative choices, not product recommendations.

[How to Schedule a Grok Bot Routine](/blog/how-to-schedule-a-grok-bot-routine) covers scheduling. This page decides how many scheduled obligations the team can responsibly carry.

## Separate evidence collection from the decision it informs at routine number 50

For each routine, multiply scheduled runs by the share that requires review, then add expected exceptions. Use observed data when available and a declared assumption for new work. Include retries and manual reruns because they also create artifacts.

Omar's daily account brief runs five times each week and every result receives a two-minute scan. Its weekly arrival count is five. A monitor runs hourly but alerts on an assumed 3 percent of 120 weekday checks, producing about four alerts. The monitor has more executions but similar human arrivals.

Capacity planning should show both counts. Execution volume matters for usage and failure exposure. Review arrival matters for staffing. Do not collapse them into one vague "activity" number.

## Preserve unknown as an honest output state at routine number 50

Ten internal summaries are not equivalent to ten customer sends. Create workload classes with a review-time estimate and a consequence weight. The weight is a prioritization device, not a mathematical statement of risk.

| Class | Example | Review target | Consequence weight |
|---|---|---|---|
| A | Public-source internal brief | Sample review | 1 |
| B | Private internal draft | Every output initially | 2 |
| C | System-of-record proposal | Every output | 4 |
| D | External send or write | Approval before action | 8 |

Omar multiplies expected arrivals by review minutes to size time, then uses weight only to order attention. He does not add weights and call the total a safety score. High-consequence work receives a stronger control even when its weekly count is small.

## Rank sources by authority before comparing timestamps at routine number 50

An owner understands the charter, sources, expected output, failure modes, pause control, and recovery steps. A backup can take over without asking what the bot is supposed to do. A group alias is a notification destination, not ownership.

Use [Fleet Chief of Staff](/bots/fleet-chief-of-staff) to shape an inventory, [VM Overwatch](/bots/vm-overwatch) for environment checks, [Stuck Bot Foreman](/bots/stuck-bot-foreman) for stalled work, and [Chief of Staff Briefing](/bots/chief-of-staff-briefing) for a concise handoff. These patterns help observe the fleet, but they do not become accountable owners.

If the primary and backup are both unavailable, pause consequential routines. Capacity includes absence coverage. A calendar with no protected review block is not capacity.

## Paste a charter that can stop without improvising at routine number 50

For every active item, record: what triggers it, who owns it, what it reads, what it can change, what boundary applies, where evidence lives, and how to pause it. Add charter version and last fixture result.

\`\`\`text
ROUTINE: renewal-packet-weekday
BOT: account-growth-planner
OWNER: Omar
BACKUP: Priya
TRIGGER: Weekdays 08:30 local time
OUTPUT: Internal review packet
BOUNDARY: Never send or change the account record.
EVIDENCE: Approved operations register under routine ID
PAUSE: Disable routine, then confirm next scheduled run is absent
LAST FIXTURE: v7, 8 cases, passed 2026-08-28
\`\`\`

[The Grok Bot Runbook](/blog/grok-bot-runbook) expands the recovery fields. The register should be readable without opening every bot conversation.

## Walk one named operator through the first complete run at routine number 50

Average review time understates burst risk. A source outage can send every run to Needs review at once. Estimate the largest credible burst and the age at which an exception becomes harmful.

Omar assumes his 12 expected weekly exceptions can arrive as eight on Monday morning. Each takes an assumed seven minutes to triage. He reserves one hour and assigns overflow to the backup. If the queue passes eight, lower-priority routines pause.

The exact threshold belongs to Omar's operating policy. Your threshold should follow consequence and response capacity. [Bot Failure Modes](/blog/bot-failure-modes) helps create the burst scenarios instead of relying on averages.

## Trace the specific failure back to the missing rule at routine number 50

The shared-computer product fact belongs in one sentence: bots on one account share one persistent computer, so use [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) for isolation rather than adding bot names as though they add machines.

More bots can improve job organization while leaving sessions, files, and command-line credentials in the same environment. Capacity planning therefore includes browser state, disk hygiene, concurrent work surfaces, and credential inventory. A naming strategy cannot solve an environment bottleneck.

If two workloads require a true resource boundary, handle that architecture before counting routine slots. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) separates isolation, instructions, and granted authority.

## Route every exception to one accountable person at routine number 50

The app keeps the 20 most recent run records per routine. A routine that runs hourly can move through that window quickly. Do not use the recent-run list as your long-term incident, compliance, or business record.

| Evidence | Recent app record enough | Keep elsewhere |
|---|---|---|
| Quick operator diagnosis | Often | Optional by policy |
| Customer commitment | No | Approved system of record |
| Charter version history | No | Version control or register |
| Incident timeline | No | Incident system |
| Review disposition | No | Business workflow |

[Bot Data Retention](/blog/bot-data-retention) covers the retention design. Capacity includes the work of exporting, minimizing, and reviewing evidence.

## Test the boundary with a fixture designed to cross it at routine number 50

A new routine must arrive with an owner, backup, expected weekly runs, review estimate, consequence class, fixture, evidence destination, and a routine to retire or capacity to add. "It only takes five minutes" is not an admission case.

Omar holds a 20-minute weekly admission review. The duration is his choice. A candidate without a pause test remains inactive. A candidate that duplicates an existing trigger is merged or rejected. A candidate whose evidence would outlive policy is redesigned.

This makes growth intentional. The catalog can contain many useful bot patterns without requiring Omar to operate all of them simultaneously.

## Answer the strongest case for granting more autonomy at routine number 50

Monitoring helps detect stalls, state drift, and missing outputs. It does not review customer commitments, decide exception policy, or repair ownership gaps. A monitoring bot also becomes another workload with sources, failure modes, and an owner.

The objection wins for mechanical checks. Use automation to confirm that a routine ran, an artifact exists, an expected identity appears, or a queue age crossed a threshold. Keep people responsible for what the signal means and which work should stop.

Do not count detected incidents as resolved incidents. Detection capacity and recovery capacity are separate rows in the plan.

## Verify the result with a check that is allowed to fail at routine number 50

At 08:30, two briefs and a lead packet run. At 08:35, a source change creates eight exceptions. At 09:00, a send-capable follow-up routine requests approvals while its owner is on leave. The backup knows the customer queue but cannot find the charter version.

Bot count did not cause the collision. Schedules were correlated, burst capacity was absent, and backup readiness was untested. Omar staggers preparation runs, adds the eight-item pause threshold, and requires the backup to execute a quarterly practice recovery. The quarter is an internal choice.

He also stores the charter version in the fleet register. On the next failure, the backup can compare the live artifact with the last passing fixture.

## Name the adjacent case this page does not cover at routine number 50

| Symptom | Capacity cause | Immediate response | Planning repair |
|---|---|---|---|
| Reviews age past target | Arrival rate exceeds time | Pause lower class work | Recalculate weekly minutes |
| Same alert repeats | Retry or source outage | Deduplicate and pause | Add burst scenario |
| No one can explain a routine | Ownership debt | Disable it | Require owner and backup |
| Recent evidence vanished | Retention window rolled | Preserve current records | Add external record path |
| Charter changes collide | Too many simultaneous edits | Restore last passing version | Schedule change windows |

Overload should trigger a pre-agreed action. A dashboard that turns red without stopping work only documents the failure.

## Keep the operating record after the immediate task ends at routine number 50

Before activating a new fleet, simulate its arrivals for one week. Generate synthetic review tasks at the proposed cadence without executing external actions. Have owners process the queue while tracking wait time, review minutes, and missed coverage.

Add one burst day and one owner absence. The plan fails if consequential work waits beyond its declared target, a backup cannot identify the pause path, or evidence has no destination. Do not average the burst away.

After activation, compare actual arrivals and repair time with the shadow assumptions. Update the register monthly or after any material change. The frequency is a policy choice, not a product feature.

## Decide the next run from evidence, not relief at routine number 50

Split a routine when its outputs have different owners, consequences, or evidence requirements. Combine routines when they share a trigger, sources, owner, boundary, and recovery path. Retire a routine when nobody consumes its output or a deterministic workflow now handles the step better.

Do not split merely to create cleaner bot names. Deleting a bot also deletes its routines, while shared-computer files and sessions remain. Plan teardown before changing the roster. [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers cleanup.

The manageable fleet is the smallest set that supports current work with tested ownership. Catalog size is not operating maturity.

## Apply the grok-bot-too-many-routines rule to the remaining edge case at routine number 50

Spreadsheets built from average weeks hide correlated failures. Omar creates one deliberately ugly practice day: the main source changes, the primary owner is absent, two routines retry, a high-consequence approval arrives, and the recent record window is close to rolling past an event needed for diagnosis. None of the synthetic tasks can act externally.

The exercise begins with the fleet register, not personal memory. Priya, acting as backup, identifies which routines depend on the failed source, pauses the affected schedules, confirms future runs are absent, finds the last passing charter versions, and routes the approval to the accountable person. Observers record elapsed time and every missing field in the runbook.

Capacity is sufficient only if the team can degrade deliberately. Public-source briefs may wait. Customer or financial work may require an immediate human route. A single priority list should state which classes pause first and which need continuity. Without it, every owner argues that their routine is essential during the incident.

Omar also checks notification fan-out. Three monitors that report the same source outage can triple perceived workload. Deduplicate alerts by incident key and keep links to affected routines. Do not silence distinct consequences merely because the root cause matches.

Review fatigue receives a test of its own. The exercise presents eight proposed actions, including two near duplicates and one unsupported claim. The reviewer must reject the traps. If speed rises while accuracy falls, the planned arrival rate is too high for that gate, even if the queue clears.

Afterward, classify every delay as missing knowledge, missing authority, missing time, missing evidence, or tool failure. Adding another monitor solves only a subset. Training can repair knowledge. Scheduling can repair time. A separate approver can repair authority coverage. External evidence storage can repair the recent-window gap.

Update the planning model with observed recovery minutes, not the optimistic estimate. If the backup needed 35 minutes to locate the active charter, add that burden until the register is fixed and retested. Do not declare the capacity debt resolved when a ticket is merely opened.

The exercise should also retire something. Omar asks which routine produced no consumed output in the prior period, which duplicated another source, and which could return to a deterministic workflow. Removing low-value arrivals creates headroom for failures and new work.

Record a capacity decision for each active routine: continue, narrow, reschedule, pause, combine, or retire. Each decision names the owner and next review date. A fleet report that only counts green statuses misses the management choice.

Repeat the ugly day after material fleet growth, an authority change, or owner turnover. Quarterly is Omar's baseline, not a product requirement. The aim is to keep the control plane practiced enough that a real burst does not become the first time anyone tests pause, evidence retrieval, and backup ownership.

Omar turns the exercise into a simple capacity forecast. For each proposed routine, he adds weekly review minutes at the median, burst minutes at the declared worst day, and backup training time. He then subtracts protected review capacity rather than every open hour on the team's calendar.

Protected capacity excludes meetings, project work, and optimistic multitasking. If a reviewer has 90 scheduled minutes for bot work, the plan cannot assume four hours because the calendar contains gaps. Consequential approvals also need response timing, not just total weekly minutes.

Seasonality gets a separate row. Renewal, close, launch, and hiring cycles can align routines that look independent during an ordinary week. Omar asks each owner for peak dates and plots collisions. He reschedules low-priority briefs and assigns temporary backup coverage before the peak.

New routines begin with a capacity reservation for defects. Omar reserves an assumed 30 percent of their first-week review block for unexpected exceptions. This is his planning buffer, not observed product behavior. After four stable weeks, he replaces the assumption with measured data.

Capacity reports include demand that was refused. A routine rejected because no owner existed remains visible in the backlog with its proposed benefit and missing control. Otherwise leaders may conclude that the fleet handled every request when work was silently deferred.

The forecast also names a hard ceiling for consequential arrivals per reviewer. Crossing it automatically holds lower-priority releases. The number comes from the review exercise and correction rate, not the product's 50-routine maximum.

Finally, compare consumption with production. Packets opened, decisions supported, and exceptions resolved show useful demand. Generated artifacts that expire unread consume execution and evidence capacity without helping an owner. Retirement is a capacity feature.

Omar publishes the forecast beside the fleet register so owners can challenge assumptions before overload. Each number identifies its source as observed, scheduled, or assumed. That label stops a hopeful estimate from hardening into apparent history and tells the next reviewer which figure needs measurement.
Review it together.

Keep reading: [change management for charter edits](/blog/bot-change-management), [approval scope](/blog/what-an-approval-actually-governs), and [routine scheduling](/blog/how-to-schedule-a-grok-bot-routine).

## Reconcile Omar's case with a four-state ledger before the next run at routine number 50

A retry is not a recovery plan. Recovery starts by writing down what is known for each unit of work. Give every candidate, deal, message, routine, or account one row. Do not let a clean final total erase a dirty intermediate state. The ledger should survive after the browser tab, plugin response, or recent-history row disappears.

| Observed state | Required action | Control result |
|---|---|---|
| Routine has an owner and recent value | Keep and count its review demand | Proceed and retain evidence |
| Routine duplicates another output | Combine only after parallel verification | Stop automatic progress |
| Routine has no owner or consumer | Quarantine before retirement | Escalate with the gap named |
| Routine is rare but consequence is high | Keep it and document why frequency misleads | Require explicit human handling |

For Omar, the first pass is intentionally manual. Number the units from 1 through 8, an arbitrary rehearsal size, and attach the source URL or record identifier to each row. Add observed-at time, output path, completion evidence, and reviewer. Eight is not a product limit. It is small enough to compare every row without sampling.

The walked failure matters because the tempting repair is the wrong repair. Omar removed a quiet monthly routine to make room. The routine was quiet because it checked contract anniversaries, not because it was unused. Two weeks later the team missed the one date it existed to catch. The bot should not smooth that gap into a confident sentence. It should state which step completed, which step did not, and which step has an unknown state. That output gives the reviewer something actionable without pretending the missing evidence exists.

Use this charter fragment as the fixed rule for the next rehearsal:

\`\`\`text
OBJECTIVE
Prepare a 51st weekly account-health routine blocked by a full bot.

SOURCES
Use only the identifiers and pages listed in the run manifest.
Record the source and observed-at time for every extracted fact.

OUTPUT
Write one private ledger row per unit.
Allowed states: complete, not-started, blocked, unknown.
Never convert unknown into complete or not-started.

BOUNDARY
Never solve the 50-routine ceiling by deleting a routine until its owner, evidence needs, dependencies, and rollback path are recorded.

STOP CONDITIONS
Stop when a required source is absent, a completion receipt is missing,
or the requested action would cross the boundary.
Return the affected identifier, last proved step, missing evidence, and owner.
\`\`\`

Run the rehearsal twice. In run one, provide complete evidence for all eight units and confirm the output shape. In run two, remove one required field from unit 3, introduce a contradictory source for unit 5, and remove completion evidence from unit 7. A passing bot returns three different exceptions. A failing bot forces all three into the same successful state.

The review is also specific. Compare the eight input identifiers with the eight output rows. Open two cited sources at random, then inspect all three planted exceptions. Confirm that the bot did not create an extra row, hide a missing value, or cross the boundary. Record pass or fail beside each check. A sentence saying the run looked good is not evidence.

After the rehearsal, choose one of three outcomes. Promote the routine only if every planted exception stayed visible. Revise the charter if the wrong source won or the stop condition was vague. Retire the workflow if the human must reconstruct most rows anyway. That last answer is legitimate. Automation that moves the review burden into detective work has not removed work.

## Frequently Asked Questions

### How many routines can one Grok Bot have?

Verified product facts state a maximum of 50 routines per bot. Treat that as a technical ceiling, not a recommendation. Your operating limit should be lower when review time, exception bursts, evidence retention, or consequence requires it. Count expected runs, review arrivals, and owner coverage before adding a routine. A configuration can be accepted by the product and still be unmanageable for the team.

### What is the best bot capacity metric?

No single count is enough. Track expected executions, review arrivals, consequential runs, exception bursts, reviewer minutes, queue age, and recovery time. Weight or classify consequences so a low-volume send routine is not hidden behind many read-only briefs. Bot names are useful inventory labels, but ownership and human attention determine whether the fleet remains controllable.

### When should I pause a routine?

Pause when the owner and backup are unavailable, exception age crosses the declared target, a source or identity changes, evidence is missing, a boundary incident occurs, or the current charter lacks a passing fixture. Set thresholds before the incident. A pause should have a known owner, a confirmation check, and a recovery sequence so it does not become an indefinite silent failure.

### Is the recent run history enough for operations?

No. Verified facts say the app keeps the 20 most recent run records per routine. That can help recent diagnosis, but it is not a durable business, incident, or compliance record. Preserve required evidence in an approved system according to policy, including routine ID, charter version, reviewer disposition, and source references. Minimize sensitive content and test that operators can retrieve the record during recovery.
`,
};
