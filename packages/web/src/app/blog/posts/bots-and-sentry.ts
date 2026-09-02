import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots and Sentry: Crash Clusters Are Evidence, Not Instructions',
  description:
    'Use bots and Sentry to cluster crashes, correlate release timing, and draft checkable tickets while keeping every rollback decision with a human.',
  date: '2026-08-31',
  category: 'Guide',
  content: `
# Bots and Sentry: Crash Clusters Are Evidence, Not Instructions

A crash cluster can tell you that twenty events resemble one another. It cannot tell you whether the safest move is a rollback, a feature flag change, a forward fix, or waiting for better evidence. That distinction matters when you connect bots and Sentry. The bot should compress noisy events into a case a human can check. It should never turn correlation into a production command.

This setup gives the bot three jobs: cluster related errors, compare the cluster against release timing, and draft an internal ticket with links. The human on call owns the decision. If rollback is chosen, a human performs it and watches the result. The boundary is not ceremonial. It preserves the operational context that error tracking cannot see, including data migrations, affected customers, current staffing, recovery options, and the risk of reversing a release.

## Start from a reported symptom before opening the noisiest Sentry view

Give the bot a symptom, a surface, and a time window. Do not tell it to browse Sentry and find something important. A dashboard-first investigation rewards event volume. It can elevate an old noisy error over the new failure that actually brought the operator to the screen.

A usable intake says: checkout confirmations began failing for mobile web users after 14:00 UTC, inspect events from 13:30 to 15:00 UTC, and return one evidence pack. That statement anchors the search without deciding the cause. If you have only a customer report, preserve its exact error text, timestamp, timezone, page or endpoint, client version, and account identifier where policy permits. Mark missing fields unknown.

Use [Latency Investigator](/bots/latency-investigator) when the reported symptom is a regression that needs Sentry, release, and repository evidence joined into one case. Use [Bug Repro Pack Builder](/bots/bug-repro-pack-builder) when the next safe step is a staging reproduction with synthetic data. The two bots can have different charters, but they are not separate vaults. All bots on one account share one persistent computer. Their screens are separate work surfaces, not security boundaries, and separate bots do not isolate browser sessions, files, or command-line credentials.

| Intake field | Record this value | Reject this shortcut | Reason |
|---|---|---|---|
| Symptom | The observable failed action | The service feels broken | A mechanical failure can be searched |
| First seen | Timestamp plus timezone | Earlier today | Release correlation needs a bounded window |
| Surface | Endpoint, page, job, or client | The app | Different paths can share an error string |
| Population | Region, version, account type, or device | Everyone | Scope changes the response choice |
| Source | Report, alert, trace, or support ticket link | Someone said | A reviewer needs a route back to evidence |

## Separate triage evidence from remediation authority before connecting tools

Write the permission line before you sign into Sentry, Jira, or GitHub. The bot may read events, inspect release markers, open linked commits, group candidates, and prepare a ticket draft. It may not acknowledge or resolve an issue, mute an alert, change a threshold, edit a feature flag, restart a service, deploy code, revert a release, or invoke a rollback workflow.

This is the triage-versus-remediation line. Triage changes your understanding. Remediation changes the system. A drafted Jira issue is still an internal artifact that a reviewer can reject. A rollback changes live behavior for every request routed to that release. Calling both activities incident automation hides the only distinction that matters at 14:20.

Do not treat an approval dialog as an undo system. An approval controls a proposed action. It does not reverse work already completed. The safer design prevents the bot from proposing production writes in the first place. If a connected tool unexpectedly exposes a write control, the charter should require the bot to stop, name the control, and return the evidence gathered so far.

| Action | Bot authority | Human authority | Required receipt |
|---|---|---|---|
| Read an error event | Allowed | Review as needed | Sentry event link |
| Group candidate events | Allowed | Accept or split the group | Query and grouping rule |
| Draft an internal issue | Allowed | Edit, create, assign, or reject | Draft text plus source links |
| Change an alert state | Forbidden | Decide under the incident runbook | Human action record |
| Roll back a release | Forbidden | Decide, execute, and observe | Deployment and monitoring record |

## Define a crash cluster with observable fields instead of visual similarity

The bot needs a repeatable clustering rule. Sentry may already group events, but your operational case can still require a narrower or broader unit. Two events with the same exception type can come from different code paths. Two events with different messages can share the same failing release and stack-frame origin. The bot should show how it formed the cluster rather than presenting a label as fact.

Start with fields a reviewer can inspect: project, environment, exception type, top application frame, normalized message, transaction or endpoint, client version, release identifier, region, and first-seen time. Strip volatile values such as UUIDs, request IDs, timestamps, and customer-specific strings before comparing messages. Preserve the originals in links. Never paste production customer data into a staging reproduction or a public ticket.

Choose a fixed window for one run. For example, an operator may declare ninety minutes as the arbitrary incident window and require at least two shared fields before events become cluster candidates. Those are local choices, not product limits. Write them into the output so another operator can rerun the query and disagree intelligently.

| Signal | Useful for grouping | Common false match | Reviewer check |
|---|---|---|---|
| Top application frame | Locates a shared failure site | One wrapper catches unrelated failures | Inspect the next application frame |
| Normalized error text | Removes volatile identifiers | Generic timeout messages collapse causes | Compare transaction and dependency |
| Release identifier | Binds events to shipped code | Old clients report after a new release | Split by client and server release |
| Transaction name | Separates user paths | Shared middleware masks the origin | Inspect the full trace |
| First-seen time | Finds a new onset | Traffic spikes create apparent novelty | Compare a prior baseline window |

## Correlate release timing without calling sequence a cause

For each cluster, ask the bot to build a release window. Record the last known clean event time, the release marker, the first matching event, and the first operator report. Then list every relevant change in the interval, not only the change whose filename resembles the stack trace. Configuration changes and dependency updates belong beside application commits if your sources expose them.

Timing creates a candidate set. It does not select the culprit. A release at 14:05 followed by errors at 14:12 deserves inspection, but the same traffic increase might have exposed a pre-existing limit. A third-party outage can arrive at the same minute as your deploy. A delayed client update can make an older defect appear new. The ticket must use language such as "began after" or "overlaps the release window," not "was caused by," unless a separate check establishes cause.

Ask the bot to include one falsifier per hypothesis. If the suspected parser change caused the crash, the previous release should not produce it on the same staging fixture. If the crash appears on both releases, the release correlation weakens. This makes the draft useful even when the leading theory is wrong.

## Rank clusters by measured impact without letting volume choose the remedy

Event count is one input, not a severity decision. A retry loop can generate thousands of errors for one internal job. One checkout failure can affect fewer events but block a high-value path. The bot should report volume, affected users where safely available, affected transactions, duration, environments, versions, and whether the cluster is still growing. A human maps those measurements to business priority.

Do not ask the bot to declare SEV levels unless your organization has a mechanical, approved mapping and the output remains a suggestion. Better output says that cluster A contains 480 events across 37 anonymized users in the checkout confirmation transaction, while cluster B contains 2,100 events from one scheduled test account. Those arbitrary scenario counts show the shape of evidence; they are not benchmarks or Sentry allowances.

| Measured dimension | Bot reports | Bot does not infer | Human question |
|---|---|---|---|
| Event volume | Count in the declared window | Business loss | Does retry behavior inflate it? |
| Affected population | Distinct safe identifiers or unknown | Customer importance | Which commitments are exposed? |
| Transaction coverage | Named paths and proportions | Incident severity | Is a critical path blocked? |
| Growth | Counts by fixed time bucket | Future peak | Is the cluster accelerating now? |
| Environment | Production, staging, or unknown | Permission to test in production | Where can reproduction happen safely? |

## Trace Isha through one checkout crash from report to human rollback

Isha is the invented release operator for this example. At 14:09 UTC on a Tuesday, support forwards one report: a buyer saw "confirmation unavailable" after payment on mobile web. Release R184 had completed at 14:05. Isha gives the bot the exact message, mobile web surface, and a 13:30 to 14:30 inspection window. She does not say the release caused the failure.

The bot searches the production Sentry project read-only. It finds 63 matching events beginning at 14:07, normalizes changing order identifiers out of the message, and separates them into two candidates. Fifty-eight share the same top application frame and R184. Five come from an older client path and appeared before the release. It preserves both groups rather than forcing one story.

Next, the bot checks the release feed and linked repository view. Three changes fall inside the declared comparison window. One touches confirmation parsing, one changes analytics, and one updates copy. The bot lists all three. It calls the parser change the leading hypothesis because the changed frame overlaps the 58-event cluster, then writes the falsifier: reproduce the same response fixture against R183 and R184 on staging with synthetic order data.

At 14:18, the bot drafts ticket text with the Sentry query, representative event links, the release marker, all three candidate changes, the five-event counter-cluster, and the staging check. It does not create the ticket. Isha reviews the draft, creates the internal issue, and asks an engineer to run the staging comparison. R184 fails and R183 passes. That result supports the parser hypothesis, but it still does not order a rollback.

At 14:26, Isha checks the deployment runbook, confirms no irreversible migration blocks reversal, confirms another human is available to watch checkout health, and decides to roll back. Isha performs the rollback through the approved deployment path. The bot never opens that control. Isha watches the matching cluster decline, records the observation window, and leaves the five older-client events open as a separate investigation. The end-to-end chain preserves who observed, who inferred, who decided, and who changed production.

## Draft the ticket as a claim ledger that a responder can challenge

A good ticket does not merely summarize the dashboard. It exposes the reasoning. Structure the draft so every claim has a source, every hypothesis has a confidence label, and every proposed verification has a safe environment. Put the highest-impact cluster first, then include counter-evidence close enough that a hurried responder sees it.

The draft should name what the bot did not check. Missing release access, absent user counts, a truncated stack, or an unavailable baseline must remain visible. "No evidence found" is only valid when the ticket records the query and window. Otherwise it can mean the bot did not look in the right place.

Use a plain state label such as DRAFT FOR HUMAN REVIEW at the top. Do not include commands that a responder can paste blindly into a production shell. Link to the human-owned runbook instead. The [guide to designing a bot handoff](/blog/bot-handoff-to-human) explains why a stop needs evidence, a reason, an owner, and a precise requested decision. The [guide to understanding approvals](/blog/what-an-approval-actually-governs) covers why a denied action does not rewind earlier work.

## Paste a charter that forbids every production-changing verb

The charter below is intentionally narrow. Replace the bracketed project names, safe identifiers, and human routing destination. Keep the forbidden verbs. If your Sentry or tracker connection cannot be limited to read and draft behavior, do not schedule this bot.

\`\`\`text
BOT NAME: Sentry Evidence Clerk

PURPOSE
Turn one reported production symptom into a checkable internal evidence pack.
Cluster related Sentry events, compare their timing with releases, and draft a
ticket for a human reviewer. Evidence is not an instruction to remediate.

INPUT REQUIRED FOR EVERY RUN
- Reported symptom or exact error text
- Surface, endpoint, transaction, or client
- Start and end timestamps with timezone
- Sentry project: [PROJECT]
- Release source: [RELEASE FEED OR REPOSITORY VIEW]
- Draft destination: [PRIVATE DRAFT LOCATION]
- Human owner: [ON-CALL ROLE OR NAMED OPERATOR]

ALLOWED ACTIONS
1. Read Sentry events and issue details in the declared project and window.
2. Normalize volatile identifiers for comparison while preserving source links.
3. Group candidate events by stated fields and show the grouping rule.
4. Read release markers and linked change summaries.
5. List every relevant change in the comparison window.
6. Draft an internal ticket marked DRAFT FOR HUMAN REVIEW.
7. Stop and report missing access, missing evidence, or ambiguous scope.

FORBIDDEN ACTIONS
- Never acknowledge, resolve, archive, merge, or delete a Sentry issue.
- Never mute, snooze, edit, create, or delete an alert or threshold.
- Never change a feature flag, configuration, environment, or production setting.
- Never restart a service, run a production command, deploy, revert, or roll back.
- Never create, assign, transition, or comment on a live tracker issue.
- Never use production customer data for reproduction or copy it into staging.
- Never contact a customer or draft customer-facing language.
- Never treat release timing, event grouping, or event volume as proof of cause.

CLUSTER METHOD
For each candidate cluster, report project, environment, exception type, top
application frame, normalized message, transaction, client version, release,
region, first seen, last seen, event count, and safe affected-population count.
State the exact fields used to group it. Preserve outliers as counter-evidence.

RELEASE CORRELATION METHOD
Record last known clean time, release time, first matching event, and first human
report. List all candidate changes in the interval. Describe sequence as timing,
not causation. Give each hypothesis one check that could disprove it.

OUTPUT
Return one private draft containing:
1. DRAFT FOR HUMAN REVIEW.
2. Reported symptom and declared window.
3. Cluster table ordered by measured impact.
4. Evidence links and reproducible queries.
5. Release timeline and all candidate changes.
6. Evidence, hypotheses, counter-evidence, and unknowns in separate blocks.
7. One staging-only verification using synthetic data, if applicable.
8. Requested human decision: accept, split, reject, or investigate further.

STOP CONDITIONS
Stop if the request asks for a production write, if the environment is unclear,
if a source would expose restricted customer data, if the time window is absent,
or if a connected tool presents a write step. Return gathered links, explain the
stop, and ping [HUMAN OWNER]. A human decides whether to roll back. A human
performs any rollback and observes production afterward.
\`\`\`

## Keep Sentry access narrow while recognizing the shared computer

Use a read-only role where the integration supports one, and expose only the projects needed for this job. Keep ticket output in a private draft location. Do not give the bot deployment credentials because the charter says it will not deploy. Instructions reduce intended authority; scoped credentials reduce available authority. You need both.

Account architecture matters. One computer is assigned per account, not per bot. Browser cookies, signed-in sessions, files, and command-line credentials on that computer are shared across the account's bots. Deleting a bot does not remove those shared files or browser sessions. If a deployment session exists for another bot on the same account, naming this one Sentry Evidence Clerk does not isolate it. Remove unnecessary sessions from the account's computer and use separate accounts when you need a real isolation boundary.

A public share link can copy a bot's configuration to another person's account. It does not copy your computer, logins, or conversation history. Strip project names, internal hostnames, customer references, tokens, and confidential runbook text before sharing because the configuration itself becomes visible through the link. Sharing moves the charter, not the authenticated workspace.

## Test the clustering method with planted disagreements before scheduling it

Run the bot manually against a fixture set before giving it a routine. Create at least eight synthetic or sanitized events in a non-production project. Include three that share an error message but not a code path, three that share a code path with varied identifiers, one event from an older release, and one unrelated high-volume event. These counts are an arbitrary test design, not a platform allowance.

The bot should split the same-message events when the transaction and frame disagree. It should group the varied identifiers only after showing the normalization. It should retain the old-release event as counter-evidence and refuse to let the unrelated high-volume event hijack the symptom-led search. Ask a human reviewer to reproduce the grouping from the recorded query.

Then test the boundary. Ask the bot to resolve the Sentry issue, mute the alert, flip a flag, and roll back the release. Each request must produce a stop with the evidence pack intact. Also revoke one read permission and confirm the bot reports the missing source instead of filling the gap with a confident narrative. Schedule only after both evidence behavior and refusal behavior pass.

## Measure whether the drafts shorten decisions without grading them by rollback count

The bot succeeds when responders reach a checkable decision faster with less evidence hunting. It does not succeed because more releases get rolled back. Rollback count rewards a particular remedy and pressures the bot toward that recommendation. Measure the quality of the handoff instead.

Sample a fixed number of drafts each week, chosen in advance. Ask whether the query reruns, representative links open, cluster rules reproduce, release candidates are complete, counter-evidence is visible, unknowns are honest, and forbidden actions remained untouched. Track how often the reviewer accepts a cluster, splits it, or rejects it. Rejections are useful if they expose a repeatable grouping weakness.

| Review measure | Passing evidence | Failure signal | Repair |
|---|---|---|---|
| Query reproducibility | Reviewer gets the same candidate set | Window or filter is missing | Require a copied query link |
| Cluster explainability | Reviewer can name every grouping field | Label appears without rule | Print a field-by-field comparison |
| Release completeness | Every change in the window appears | Only the favored commit appears | Pull the full change interval |
| Boundary compliance | No production state changed | Alert or issue state moved | Revoke write access and stop scheduling |
| Decision usefulness | Human can accept, split, or reject | Draft asks human to investigate everything | Require one bounded decision request |

## Answer the strongest counter-argument that a bot should roll back obvious regressions

The strongest objection is practical: if errors begin immediately after a release, share the same application frame, grow quickly, and disappear on the previous build in staging, making a human click rollback only adds delay. For a mature service with tested automation, the rollback path may even be mechanically safer than waiting.

That argument proves the value of a deterministic rollback controller, not that an evidence-clustering bot should own remediation. The Sentry bot still cannot see every condition that makes reversal safe. A release can include a data migration, a security fix, a dependency contract, or an operational handoff. It may not know whether the previous version remains compatible or whether anyone can observe the recovery. Combining evidence selection and live action also removes the independent check precisely when the bot's cluster could be wrong.

If your organization wants automatic rollback, define that as a separate engineered system with explicit signals, tested invariants, bounded scope, independent monitoring, and a human-owned disable path. Do not smuggle that authority into a prose charter because the correlation looks obvious. This page keeps the Sentry bot on the evidence side even when the evidence is strong.

## Stop applying this pattern when the job becomes reproduction or deterministic control

This page stops applying when your primary job is turning a vague report into exact staging reproduction steps. Use [Bug Repro Pack Builder](/bots/bug-repro-pack-builder) and keep production customer data out of the fixture. It also stops applying when you are designing a formally specified automatic rollback controller. That is a deployment-control project, not a bot triage charter, and it needs engineering review beyond this guide.

The pattern also stops at customer communication. A Sentry cluster can inform an internal diagnosis, but it should not draft promises, status updates, or explanations for customers. If your incident process requires external communication, route the checked facts to the named communications owner under that process.

Finally, this page does not replace your incident command structure, severity policy, data-handling rules, or deployment runbook. It supplies a narrow evidence clerk inside those systems. If there is no human who owns the ticket decision and no human authorized to operate the release controls, do not leave the bot running. An unattended draft queue is not incident response.

## Hand the human one bounded decision and preserve the rejected evidence

End every run by asking for one decision: accept this cluster, split it, reject it, or request one named check. Do not ask the reviewer whether they want the bot to "take action." That phrase collapses ticket editing, alert changes, reproduction, deployment, and communication into one vague grant.

Preserve rejected clusters and the reason for rejection. A reviewer who splits events by transaction has taught you a missing rule. A reviewer who rejects release correlation because the failure predates the release has supplied a better baseline. Update the charter only after reviewing multiple cases, then rerun the planted fixture set. Do not quietly tune the grouping during an active incident.

The final handoff should leave production untouched and the next human move obvious. That is the useful promise of bots and Sentry: less time assembling evidence, without pretending the assembled evidence has authority. Crash clusters narrow attention. Humans decide what the system should do.

## Frequently Asked Questions

### Should a bot automatically roll back a release when Sentry errors spike?

No. A Sentry spike is evidence that deserves investigation, not sufficient authority to change production. The bot can group related events, compare first-seen times with release markers, list candidate changes, and draft a ticket with links. A human should decide whether rollback is appropriate after checking migration compatibility, customer impact, recovery options, staffing, and the plan for observing the result. If the human chooses rollback, a human should perform it through the approved deployment path and record what happened afterward.

### What should a Sentry triage bot include in its ticket draft?

The draft should include the reported symptom, exact inspection window, reproducible Sentry query, cluster rule, representative event links, measured impact, first-seen and last-seen times, release timeline, and every relevant change in that window. It should separate evidence, hypotheses, counter-evidence, and unknowns. Each hypothesis needs a check that could disprove it, preferably on staging with synthetic data. The draft should be marked for human review and should request one bounded decision, such as accepting, splitting, or rejecting the proposed cluster.

### Can separate bots isolate Sentry and deployment credentials on one account?

No. All bots on one account share one persistent computer, including browser sessions, files, and command-line credentials stored there. Separate screens organize work but are not security boundaries, and deleting a bot does not clean shared computer state. Give the Sentry bot read-only, project-scoped access where possible, remove deployment sessions it does not need, and use separate accounts when you require real isolation. A charter that forbids rollback is necessary for behavior, but it does not technically isolate credentials that remain available on the shared computer.

### Does sharing a Sentry bot copy its projects, logins, or investigation history?

No. A public share link copies the bot configuration so another person can preview it and add a copy to their own account. It does not transfer your computer, logins, or conversation history. The recipient starts with their own account environment and must connect appropriate tools themselves. Before sharing, remove internal project names, hostnames, customer references, tokens, and confidential runbook text because the configuration is what the link exposes. Treat a shared charter as published material, even though the authenticated workspace and prior investigations stay behind.
`,
};
