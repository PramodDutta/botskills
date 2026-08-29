import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Early Churn Signals as an Internal Note, Still No Customer Mail',
  description:
    'Build a grok bot churn early warning note from cited usage changes, exclude lagging events, rank review work, and keep every customer message human-led.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Early Churn Signals as an Internal Note, Still No Customer Mail

Priya opens Monday's account list and sees one customer with fewer active seats, another with a broken integration, and a third whose administrator has been away for two weeks. None has complained. None has cancelled. The useful output is an internal note that tells Priya what changed and what to inspect, not an automated “we miss you” email.

[Churn Early Warning](/bots/churn-early-warning) is designed for that narrow job. It compares behavior over defined periods, requires more than one signal, cites every number, and hands the result to a human. A safe **grok bot churn early warning** workflow keeps detection separate from diagnosis and keeps diagnosis separate from customer contact.

## Define early warning as review priority, not churn prediction

The note does not know which account will leave. It identifies accounts whose recent behavior crossed operator-chosen rules and therefore deserve review. That wording prevents a threshold from becoming a claim about customer intent.

| Output label | What evidence supports | What it does not prove | Human next step |
|---|---|---|---|
| Usage decay | Measured behavior declined | Customer is dissatisfied | Check account context |
| Admin absent | Named admin has not logged in | Champion left | Verify role and leave status |
| Integration error | Connection has failed | Product caused the failure | Inspect error and owner |
| Review priority | Multiple rules crossed | Account will churn | Decide whether to investigate |

Use “flagged for review,” not “at risk” as an established fact. Priya can add a human assessment after reviewing support, renewal context, product changes, and known seasonality.

## Keep lagging events in a different queue

A failed payment, downgrade, cancellation request, or angry support ticket is not an early usage signal. It is a direct event that belongs to an appropriate recovery or escalation workflow. Mixing it into the behavioral note makes the ranking hard to interpret.

[Churn Watch](/bots/churn-watch) covers later-stage events. Early warning should exclude any account already routed there and record the exclusion. The distinction is operational: Priya should not receive a gentle usage-investigation prompt for an account that has already asked to cancel.

The output begins with counts: accounts evaluated, accounts excluded for insufficient history, accounts routed to lagging-event handling, and accounts flagged on two or more early signals. Those counts help Priya detect a broken data pull before reading account stories.

## Choose comparable windows before choosing thresholds

The catalog workflow compares the most recent four weeks with the four weeks before them. That eight-week requirement is part of this bot's charter, not a universal rule for every product. Priya uses complete weeks in one timezone and documents which dates each window contains.

| Window choice | Benefit | Distortion to watch | Treatment |
|---|---|---|---|
| 4 weeks versus prior 4 | Smooths daily noise | Holidays and launches | Annotate known events |
| 7 days versus prior 7 | Faster detection | Day-of-week volatility | Use only for steady products |
| Same month year over year | Handles seasonality | Product changed over year | Segment by product era |
| Since onboarding milestone | Fits new accounts | Different account ages | Do not mix with mature cohort |

Accounts with less than eight weeks of history are listed as excluded. Do not fill missing weeks with zero or compare onboarding activity with steady-state use.

## Specify each metric so two analysts compute it alike

“Engagement dropped” is not reproducible. Priya defines weekly active seats, core actions per active seat, distinct features touched, median sessions per active user, admin last login, and integration error duration.

The numerator and denominator matter. If active seats fall, total core actions may fall even while the remaining users deepen use. Actions per active seat separates those patterns. Paid seats provide another denominator, but a contracted seat count is not proof that every seat should already be active.

\`\`\`yaml
windows:
  baseline: 2026-06-29..2026-07-26
  recent: 2026-07-27..2026-08-23
timezone: UTC
metrics:
  active_seat: user_with_at_least_one_core_action_in_week
  core_action: report_published
  feature_breadth: distinct_approved_feature_family
  integration_error_age: continuous_hours_since_first_unresolved_error
\`\`\`

Version the metric file. A renamed event can look like sudden churn if the query changes and the definition does not.

## Require two signals before an account enters the note

The listing supplies five example rules: active seats down at least 25 percent, core actions per seat down at least 35 percent, feature breadth down by a third, admin absent 21 days, or an integration broken for more than 7 days. These numbers belong to the bot's published workflow and should be calibrated against Priya's product, not marketed as universal churn science.

One signal can be noise. A team may finish a seasonal project, an administrator may take leave, or a feature event may stop firing. Requiring two makes the note smaller and creates a second line of inquiry.

| Signal A | Signal B | Possible interpretation | Note question |
|---|---|---|---|
| Seats down | Actions per seat stable | Smaller active group | Did team scope change? |
| Actions down | Integration broken | Workflow interruption | Who owns reconnecting it? |
| Breadth down | Admin absent | Adoption ownership gap | Is there a new admin? |
| Seats down | Breadth down | Broad disengagement | What changed four weeks ago? |

The interpretation column is a hypothesis for Priya, never text to send a customer.

## Write a charter that ends at an internal file

The safest output during setup is a local markdown note. It lets Priya inspect calculations without granting a customer messaging surface or even an internal channel.

\`\`\`markdown
Role: Early churn signal reviewer

Read only the approved product-analytics export and selected account facts.
Compare the declared recent and baseline windows using metric-definition v4.
Flag an account only when at least two published rules cross.
Attach the source link, date range, before value, after value, and calculation.
Exclude accounts with insufficient history or a lagging churn event.

Write one new internal review note. Never email, message, survey, discount,
change a record, or contact a customer. Do not diagnose customer intent.
Stop if event definitions, account identity, or window completeness is unclear.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) shows how the forbidden verbs make this testable. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains why the environment should omit mail and CRM write authority too.

## Make every flag carry its arithmetic

Priya should be able to reproduce the note without asking the bot what it meant. Each signal includes before value, after value, percentage change, date windows, query or dashboard link, and extraction time.

For example, active seats moving from 40 to 28 is a 30 percent decline under the stated formula. Core actions per active seat moving from 5.0 to 4.8 did not cross the 35 percent rule. Feature breadth moving from six families to three crossed the one-third rule. The account qualifies on seats plus breadth, not on a vague combined score.

Do not rank until eligibility is established. A high-revenue account with one noisy signal does not enter merely because it feels important. Revenue can order the review queue after the evidence rules decide which accounts belong.

## Walk Priya through one Monday account

Northstar Lab is an invented account with twelve weeks of history. Baseline active seats average 40; recent active seats average 28. Core actions per active seat move from 5.0 to 4.8. Feature breadth falls from six approved families to three. The named admin logged in five days ago, and no integration is broken.

The bot calculates a 30 percent seat decline and a 50 percent breadth decline. Two rules cross, so Northstar enters the internal note. It does not claim dissatisfaction because the actions-per-seat measure is stable and the admin remains present.

Priya reads the source links and notices the account completed a temporary rollout in two regions. She labels the item “scope change to confirm,” assigns herself an internal investigation, and sends nothing. The note succeeded because it focused attention without pretending the threshold knew the cause.

## Catch the failure caused by an event rename

On a dry run, every account shows a severe drop in \`report_created\`. The product team renamed the event to \`report_published\` midway through the recent window. The bot ranks half the customer base as deteriorating.

| Symptom | Cause | Immediate fix | Prevention check |
|---|---|---|---|
| Many accounts drop on same date | Tracking schema changed | Repair metric mapping | Compare portfolio trend |
| New accounts show decline | Incomplete baseline | Exclude under 8 weeks | Count eligible weeks |
| One large account dominates | Ranking precedes eligibility | Apply rules first | Inspect one-signal exclusions |
| Customer email appears | Output boundary drift | Remove messaging access | Check sent and draft folders |
| Percent cannot be reproduced | Hidden aggregation | Publish formula | Recompute sample account |

Priya pauses the run, updates metric-definition v4 to v5, and reruns both windows consistently. She does not merely lower thresholds until the list looks reasonable. A portfolio-wide cliff is a data-quality alarm before it is a customer insight.

## Rank review work without inventing a churn probability

The listing proposes ordering flagged accounts by revenue at stake times steepness of decay. Priya can use that as a queue heuristic if she prints the ingredients and does not label the result a probability.

A rank is allowed to answer “Which evidence package should I inspect first?” It should not answer “Who will cancel?” unless the organization has built and validated a separate predictive model. Keep rule crossings visible beside any ordering score so a large contract does not hide weak evidence.

[Account Expert](/bots/account-expert) can prepare a deeper internal context pack after Priya selects an account. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) can surface the assigned review internally. Neither should turn the flag into customer outreach.

## Keep the note useful when no account qualifies

“No decay signals this week” is a valid result only when it carries the number of accounts checked and the run window. Add exclusion counts and data freshness so silence can be distinguished from a failed query.

Do not pad a quiet report with the five accounts closest to a threshold. That silently changes the two-signal rule. If Priya wants a near-threshold appendix for calibration, define it separately and keep it outside the action queue.

A clean week can still reveal broken coverage: ten accounts excluded for insufficient history may show that account-start dates are missing. The note should report the operational gap without converting those accounts into risk claims.

## Answer the success leader who wants automatic outreach

The strongest argument is speed. If declining use is visible on Monday, waiting for a human may lose another week. But a behavioral flag does not explain why use changed, who should be contacted, or what message would help. Automated outreach can expose surveillance, annoy a healthy seasonal account, or contradict an open support issue.

The safer speed improvement is to route the internal note to a named owner with a review deadline. Priya can inspect the evidence, choose the right relationship owner, and decide whether the next move is a product fix, an internal question, or customer contact. If the team later automates a message, that is a separate workflow with its own consent, content, recipient, and approval design.

## Verify the run with three controlled accounts

Build a synthetic export with three accounts. Account A crosses seats and breadth. Account B crosses only admin absence. Account C has a cancellation request and two behavioral signals. Add one event rename across every account.

A correct first run should stop or reveal the portfolio-wide schema break. After the mapping is repaired, it should flag A, exclude B from the action list, and route C out of early warning because the lagging event already exists. Every line should carry a source and date range. No mailbox draft, CRM mutation, customer survey, or message should appear.

Recompute A's percentages by hand. Remove one week and confirm the account becomes ineligible. Verification needs a case that fails; a plausible top-ten list is not enough.

## Pass reviewed cases to a different human-owned process

Once Priya confirms that a case deserves attention, she records a human assessment and chooses the next process. A product defect goes to support or engineering. A champion change may call for account research. A voluntary cancellation belongs in [Churn Win-Back Loop](/bots/churn-win-back-loop) only after the loss, not while the account is merely changing behavior.

This page stops at early behavioral detection and an internal note. It does not cover payment recovery, cancellation handling, discounts, customer health scoring, or win-back copy. Continue with [the draft-only win-back guide](/blog/churn-win-back-loop-draft-only) after a documented voluntary cancellation.

For shared bot architecture, link to [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) instead of treating a separate churn bot as credential isolation. For cleanup, [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers persistent artifacts.

## Segment the denominator before interpreting movement

Portfolio totals can hide migrations between plans, regions, roles, and product editions. Priya computes the published signal for the account, then inspects whether the denominator changed for a known reason. She does not keep subdividing until the flag disappears.

For seats, record paid seats, invited seats, eligible seats, and active seats separately. A contract reduction changes paid seats. An identity migration may temporarily duplicate invited seats. A role redesign may remove the event that defines active. The note should show which denominator produced the percentage and whether its source changed inside the window.

For core actions per active seat, inspect distribution as well as the average. One automation account can create most events while human usage falls, or a power user can leave while broad adoption stays stable. The bot's rule can still flag the account, but Priya needs the distribution note before forming an explanation.

Create a synthetic account with forty paid seats throughout, forty active seats in baseline, and twenty-eight active seats recently. Then create a second version where paid seats officially fell to twenty-eight at the beginning of the recent window. Both have the same active-seat count, but the second may represent a contracted scope change rather than adoption loss. The bot records the behavioral rule consistently and adds the known denominator event for review.

This section is not permission to override thresholds with intuition. The evidence note preserves the crossing and the contextual event side by side. Priya makes the assessment and records why she dismissed, monitored, or investigated it.

## Distinguish broken instrumentation from broken workflow

An integration error can mean the customer's production workflow broke, the analytics collector broke, or the monitoring query broke. Those cases require different owners. The early-warning bot should report the observed error surface and source, not collapse them into “customer integration failed.”

Use three checks. First, did the product-facing integration record an error? Second, did raw events stop arriving while other account events continued? Third, did the portfolio show the same gap? A customer-specific product error supports an account investigation. A portfolio-wide ingestion gap supports an internal data incident.

If Priya cannot access the layer needed to distinguish them, the note says “integration signal ambiguous” and keeps the customer out of automated outreach. The absence of diagnostic access is a reason for caution, not for a more dramatic label.

The planted event-rename failure tests query drift. Add a separate planted connector error to test workflow drift. A strong setup should route them to different internal owners and keep both out of customer mail until a person establishes the cause.

## Record reviewer disposition to calibrate the rules

Every flagged account receives one disposition: investigate, monitor, dismiss as known event, data issue, or routed elsewhere. Priya adds a short reason and reviewer date. These outcomes help the team see whether a threshold generates useful work.

Do not train a hidden churn probability from the dispositions without a separate modeling process. The immediate purpose is operational calibration. If feature breadth flags twelve accounts and ten are explained by a product navigation change, the metric definition needs repair. If admin absence repeatedly identifies champion transitions, the evidence package may need a current-owner field.

Review calibration monthly using counts, not anecdotes. How many accounts crossed each rule? How many crossed each pair? Which dispositions followed? How long did review take? Which source links failed? The chosen month is an operating cadence, not a universal product fact.

When a rule changes, version it and preserve old notes. Do not rerun historical accounts under a new threshold and overwrite what Priya saw at the time. A change log makes before-and-after queue quality understandable.

## Show uncertainty without creating a composite health score

Priya's note can distinguish data confidence from account interpretation. Data confidence asks whether the windows are complete, definitions are stable, links open, and arithmetic reproduces. Interpretation remains a human label after context review. Combining them into one red, yellow, or green score hides which part is weak.

For Northstar Lab, the seat and breadth arithmetic may have high data confidence while the reason remains unknown. Another account may have a clearly broken customer-facing integration but incomplete event ingestion. The note should make those differences visible instead of averaging them.

Use plain statuses such as “data verified, cause unknown,” “data incomplete,” and “known internal tracking issue.” These are review states, not customer-health predictions. They help Priya decide whether to open the analytics link, ask an internal product owner, or inspect the account record first.

Plant a broken source link after a run. Validation should lower data confidence and remove the account from any ready-for-review queue until evidence can be reopened. A number copied into markdown is not permanently verified merely because it was once linked.

Avoid confidence percentages unless a documented method defines them. “80 percent likely to churn” is a different modeling claim that this threshold workflow does not support. The note earns trust by exposing what it knows, what it does not, and which human check comes next.

## Protect customer names inside the internal distribution path

An internal note still contains sensitive commercial context: account identity, contract value, renewal timing, administrator activity, and product behavior. Start with a local file during setup. If the team later posts to an internal channel, choose a restricted destination and minimize each account block.

The top-ten pattern from the catalog does not authorize broadcasting ten customer histories. Include the two crossed numbers, date ranges, source links for authorized reviewers, and one internal question. Keep raw event exports and broad account notes in their governed systems.

Priya tests destination handling with synthetic account names before using real data. She confirms that no customer email, shared public channel, direct message, or external webhook receives the note. If a connector offers several similarly named channels, the workflow stops on ambiguity rather than selecting the first result.

Distribution review also checks who still needs access. A former account owner should not remain the destination merely because their name is stored in an old configuration. The internal-only boundary is strongest when the audience is current and explicit.

Keep reading: [What You Cannot Cap](/blog/what-you-cannot-cap) explains the current Grok Bot spend-control limitation without attaching that background to this analytics procedure.

## Frequently Asked Questions

### Should an early churn warning bot email the customer automatically?

No. A threshold crossing shows that measured behavior changed, not why it changed or whether outreach is appropriate. The account may be seasonal, finishing a rollout, affected by a tracking error, or already handling an issue with another team. Let the bot produce a cited internal note, then have the account owner inspect context and choose the next action. Customer messaging needs its own recipient, purpose, content, and approval decision.

### How many signals should an account cross before review?

This workflow requires at least two of its published signals. One metric can move because of leave, seasonality, a completed project, or instrumentation failure. Two signals create a more useful investigation prompt, but they still do not prove churn intent. Keep the before and after values, date windows, and formulas visible. Calibrate thresholds against your own product while preserving the rule that the bot cannot quietly rank a one-signal account as confirmed risk.

### What should happen when product analytics changed during the window?

Pause the run and repair the metric definition before ranking accounts. An event rename, feature reclassification, or missing ingestion day can create a portfolio-wide decline that resembles customer behavior. Compare the aggregate trend, inspect schema changes, version the metric file, and rerun both baseline and recent periods consistently. Do not lower thresholds until the list looks normal. The corrected query and its version should appear in the evidence note.

### How do I verify a Grok Bot churn early warning workflow?

Use synthetic accounts that cover a two-signal flag, a one-signal exclusion, a lagging cancellation event, insufficient history, and a portfolio-wide event rename. The workflow should detect the schema break, flag only the eligible two-signal account, and route the cancellation elsewhere. Recompute one percentage manually and inspect all created files. A passing run produces one internal note and causes no email, survey, CRM write, discount, or customer contact.
`,
};
