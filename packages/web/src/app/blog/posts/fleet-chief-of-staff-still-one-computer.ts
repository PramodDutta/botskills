import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Fleet Chief of Staff Still Shares One Computer Per Account',
  description:
    'Design a grok bot fleet chief of staff that routes typed artifacts, reports conflicts, and never mistakes a fleet roster for isolated account state.',
  date: '2026-08-29',
  category: 'Playbook',
  content: `
# A Fleet Chief of Staff Still Shares One Computer Per Account

Sana creates six specialist bots and a seventh called Fleet Chief of Staff. The chief reads their briefs, selects priorities, and writes a Monday plan. On week three it quotes a finance export that no specialist had listed as an input. Sana expected orchestration to narrow access. Instead, the chief inherited an environment broader than its routing diagram.

A grok bot fleet chief of staff can coordinate artifacts, deadlines, conflicts, and human questions. It cannot turn named bots into isolated workers. All bots on one account share one persistent computer and receive separate screens, so use [screens are not boundaries](/blog/screens-are-not-boundaries) for the architecture and spend this playbook on fleet-specific contracts.

The useful design is a typed artifact bus. Specialists write into explicit outboxes. The chief reads only declared artifacts, rejects malformed or stale packs, reports conflicts, and drafts an internal agenda. It never manages credentials, edits other bots, contacts people, or treats the roster as a permission model.

## Draw the fleet as producers, artifacts, and one reader

Do not start with character names. Start with producer jobs and their output contracts. Sana's fleet has market watch, account health, meeting prep, support trend, content planning, and finance summary. Each producer owns one narrow evidence-to-artifact transformation.

The chief is a reader and synthesizer. It does not repeat every source action. If Market Watch already captured public changes, the chief consumes its dated brief and claim ledger rather than reopening every site. If an artifact lacks evidence, the chief rejects it rather than repairing it through undeclared access.

| Producer | Required artifact | Chief may extract | Chief must not do |
|---|---|---|---|
| Market watch | changes.md plus sources.csv | Verified change and urgency | Rebrowse authenticated sites |
| Account health | ranked-accounts.csv | Flags and cited signals | Write CRM health fields |
| Meeting prep | agenda.md | Decisions and unknowns | Invite attendees |
| Finance summary | variance.md | Approved internal variance | Open banking session |

The table defines data flow, not isolation. Files outside these contracts may still exist on the account computer, which is why environment hygiene remains separate.

## Give every artifact a manifest before the chief reads it

Sana requires producer, run ID, created time, input cutoff, schema version, sensitivity, permitted consumers, expiry, source ledger path, and status. A Markdown title is not enough. The manifest lets the chief decide whether it is allowed and able to synthesize the content.

Use states READY, INCOMPLETE, CONFLICT, EXPIRED, and REJECTED. Only READY artifacts enter the main agenda. INCOMPLETE and CONFLICT become questions for Sana. Expired artifacts stay visible in the exception report but cannot support a current claim.

| Manifest field | Example | Chief check | Rejection reason |
|---|---|---|---|
| Producer | account-health | Matches registered producer | Unknown producer |
| Schema | health.v3 | Supported parser | Version mismatch |
| Cutoff | 2026-08-28 18:00 | Fits Monday window | Stale input |
| Consumer | fleet-chief | Explicitly allowed | Different audience |
| Sensitivity | internal-sales | Fits agenda destination | Finance-only content |

Values are invented for Sana's fleet. Your sensitivity policy and schema owner determine the real fields.

## Keep the chief's inbox narrower than the shared filesystem

Create a declared inbox directory containing copies or references to approved producer outputs. The chief's charter says it reads only that inbox. Pair the instruction with the narrowest file permissions and sessions your environment can provide, but do not claim a folder name creates a security boundary.

[What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) explains why a narrow task can meet broad state. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains why the artifact rule and technical controls are different layers.

Sana's weekly preflight inventories unexpected files and sessions before synthesis. It reports them to the environment owner. It does not inspect their contents to decide whether they are interesting.

## Separate routing from authority over specialists

The title Chief of Staff tempts people to give the bot managerial verbs: assign, correct, restart, delete, reconfigure, or discipline. Do not. The chief can produce a routing proposal that names which human or specialist should receive a question. It does not modify the bot roster, routines, charters, or credentials.

[Fleet Chief of Staff](/bots/fleet-chief-of-staff), [Chief of Staff Router](/bots/chief-of-staff-router), [Chief of Staff Briefing](/bots/chief-of-staff-briefing), and [Stuck Bot Foreman](/bots/stuck-bot-foreman) illustrate different coordination shapes. A router chooses an artifact destination. A briefing synthesizes. A foreman reports blockage. None of those names grants administrative control.

When a producer fails, the chief writes one incident row with run ID, expected artifact, observed state, downstream impact, and suggested owner. Sana decides whether to retry or change anything.

## Write the fleet charter around typed handoffs

Sana gives the chief no direct source mission. Its sources are registered artifacts and the fleet registry. Its output is an internal agenda plus exception report. It never sends the agenda or triggers producers.

\`\`\`markdown
# Fleet chief of staff charter

Operator: Sana
Read only:
- /fleet/inbox/ manifests and registered artifacts
- /fleet/registry/producers.csv
- /fleet/registry/schema-catalog.csv

Produce:
- monday-agenda.md
- artifact-exceptions.csv
- conflict-questions.md
- run-receipt.md

Boundary:
Never edit another bot, routine, charter, credential, source system, or manifest.
Never send, post, assign, invite, purchase, delete, or publish.
Never read outside /fleet/inbox/ to repair a missing artifact.
When inputs conflict or fail validation, report the exact ids and stop for Sana.
\`\`\`

The charter turns a grand role into a deterministic reader. [How to write a boundary line](/blog/how-to-write-a-boundary-line) covers the stop form; [what an approval actually governs](/blog/what-an-approval-actually-governs) covers any later proposed action.

## Walk six producers into one Monday agenda

At 06:30 Monday, five manifests are READY and Finance Summary is INCOMPLETE because its source cutoff is missing. Market Watch reports a competitor price-page change with two citations. Account Health flags three synthetic accounts. Meeting Prep lists two decisions due. Support Trend reports a category increase. Content Planning proposes two drafts.

The chief creates agenda sections for customer risk, market change, today's decisions, and content review. It excludes the finance variance from factual summary and adds one question: “What is the approved cutoff for FIN-88?” It does not open the finance folder to infer the date.

At 08:00 Sana reads a two-page agenda, resolves one duplicate account flag, and asks the finance owner for a corrected artifact. By day thirty she can compare recurring exception types without granting the chief more source access. The fleet improves through contracts, not curiosity.

## Trace the finance leak to an overbroad repair instruction

The failed charter said, “If an input is incomplete, find the missing information on the computer.” When FIN-88 lacked a cutoff, the chief searched nearby files and found finance-export-final.csv. It quoted a variance unrelated to the approved summary.

Three errors aligned. The repair instruction broadened source scope, the filesystem contained undeclared data, and the output validator checked prose shape but not provenance. Fix all three. Replace repair with explicit rejection, remove or relocate prohibited state through an approved cleanup process, and require every agenda assertion to cite an artifact ID and source row.

| Symptom | Root cause | Repair | Regression case |
|---|---|---|---|
| Undeclared finance value appears | Search-anywhere fallback | Reject incomplete artifact | Missing cutoff fixture |
| Chief restarts producer | Managerial verb in charter | Proposal-only incident row | Failed producer fixture |
| Stale claim enters agenda | Expiry ignored | Manifest gate | Yesterday's market brief |
| Conflict silently merged | Summary optimized smoothness | Preserve both claims | Two account-health ranks |

The old instruction sounded helpful. The fixed system defines helpfulness as reporting the exact missing field without expanding reach.

## Preserve disagreement instead of averaging it away

Account Health may call account A high risk while Meeting Prep says the sponsor is enthusiastic. Those outputs can both be accurate because they measure different things. The chief should never convert them into medium risk without a declared policy.

Write a conflict card with assertion A, assertion B, artifact IDs, source dates, dimensions measured, and question for Sana. If one artifact is stale, label that fact but do not rewrite its producer's conclusion. A human can then decide whether there is a real contradiction or complementary evidence.

[Account Health Ranker](/bots/account-health-ranker) and [Meeting Prep Brief](/bots/meeting-prep-brief) may disagree by design. Typed contracts let the chief preserve that nuance instead of rewarding a tidy but false single score.

## Keep routines subordinate to artifact freshness

The supplied verified facts allow a routine to assign a workflow to one bot, with up to 50 routines per bot and 20 recent run records per routine. Those are product limits, not a reason to schedule every producer. A schedule can make stale output arrive punctually.

Sana chooses cadence from source change rate and decision deadline. Market Watch runs before Monday review. Meeting Prep is event-driven through her approved process. Finance Summary waits for the accounting close. The chief refuses manifests outside their declared freshness window.

Do not let the chief create, edit, or delete routines. Routine ownership stays with Sana because timing changes source load, output freshness, and human review obligations.

## Answer the founder who wants one bot to run the company

The strongest objection is that typed handoffs recreate bureaucracy. If the chief can access the computer, why force six producers to write manifests and make Sana resolve conflicts?

The objection wins for a tiny, low-consequence personal workflow where all sources share one trust domain and the operator reviews every output. A single job may be simpler than a fleet. It loses when named specialists exist because their sources, cadences, schemas, and boundaries differ.

The manifest is not paperwork for its own sake. It shows why a claim entered the agenda and prevents an incomplete input from turning into an exploratory search across the account computer. If Sana does not need that distinction, she may not need a fleet.

## Review environment changes as fleet-wide changes

Adding one authenticated session, credential, or sensitive file can affect the exposure assumptions of every bot on the account. Review the environment change even if only one producer requested it. Link the decision to affected manifests, routines, and canary tests.

[Where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives) covers browser session location. [Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) covers residue. This playbook's fleet rule is simple: no producer owner can declare an account-level state change private to their bot.

Sana keeps an environment register with change ID, requester, object, purpose, allowed producers, removal owner, and regression tests. The seven fields are her choice, not a product feature.

## Verify the fleet with contract-breaking fixtures

Plant an unknown producer, unsupported schema, expired manifest, prohibited consumer, missing cutoff, conflicting pair, instruction inside artifact text, and undeclared file. The chief should reject or quarantine each fixture without repairing it through new access.

| Fixture | Expected chief behavior | Forbidden behavior | Owner |
|---|---|---|---|
| Unknown producer | REJECTED row | Read content anyway | Registry owner |
| Missing cutoff | INCOMPLETE question | Search nearby files | Producer owner |
| Conflicting ranks | Conflict card | Average scores | Sana |
| Embedded instruction | Quote as data | Execute request | Security owner |
| Undeclared file | Report path metadata only | Open for context | Environment owner |

Also compare filesystem, sessions, roster, routines, messages, and external systems before and after. A good agenda cannot excuse a forbidden side effect.

## Measure fleet health through rejected work too

Track ready artifact rate, schema failures, stale artifacts, conflict cards, unsupported assertions, chief corrections, source-expansion attempts, and forbidden mutations. A rising rejection rate may mean the chief became stricter or producers became worse. Review causes before chasing one headline score.

On day one, Sana expects schema mismatches. By day thirty, repeated mismatches should decline because producer contracts stabilize. Zero conflicts is not necessarily healthy; it may mean the chief is flattening disagreement. Sample accepted agenda assertions back to their artifact rows.

[VM Overwatch](/bots/vm-overwatch) can report environment health, while [Persistent Bot Memory](/bots/persistent-bot-memory) addresses retained context. Neither should be folded into the chief without a separate data and boundary review.

### Version the schema before a producer changes its output

Account Health currently writes health.v3 with account_id, signal, observed_at, source_id, and rank. Its owner wants to add owner_email and rename rank to priority. If the producer changes in place, the chief may interpret a blank rank as low priority or expose an email in an agenda not approved for that data.

Publish health.v4 as a new contract. Declare field meanings, optionality, sensitivity, consumer list, sample fixture, migration date, and v3 retirement date. The chief may support both versions during a bounded transition, but it parses them through separate validators. It never guesses that similarly named fields are equivalent.

Sana runs a shadow agenda with one v3 and one v4 artifact representing the same synthetic account. The expected conclusions match after the approved mapping, while the new email field remains excluded from the agenda. A malformed hybrid containing priority under schema v3 must be rejected, not partially accepted.

After the migration window, v3 becomes EXPIRED and producers still emitting it receive exception rows. The chief does not edit their output or upgrade the files. Contract ownership stays with the producer team, which can investigate its own deployment and rerun under a new run ID.

### Decommission one producer without leaving an orphan dependency

Sana retires Content Planning because the marketing team adopts another process. Before deleting any bot, she searches the fleet registry for consumer dependencies, routine references, inbox paths, schema ownership, and agenda sections. The chief produces an impact proposal but changes nothing.

The plan assigns a new owner for content.v2 history, disables future intake through the approved interface, updates the chief's required-artifact list, and tests that Monday agenda no longer treats the missing pack as an incident. Historical artifacts follow the organization's retention decision rather than disappearing with the roster label.

[Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) is the canonical cleanup warning. Fleet-specific decommissioning adds dependency repair: a removed producer can leave parsers, schedules, exception rules, and human expectations behind even after its name disappears.

Test with an intentionally orphaned manifest from the retired producer. The chief should mark it RETIRED PRODUCER and exclude it. It should not resurrect the old agenda section or treat the artifact as current merely because its schema is still readable. Retirement is a registry state, not a file-format error.

## Stop this playbook before account separation and administration

### Recover from a chief agenda that cites the wrong run

On Monday, Sana notices that the account-risk section cites AH-203 even though AH-204 completed 20 minutes before the cutoff. The prose is plausible, but the chief selected the older READY artifact because filenames sorted alphabetically and the manifest registry contained both.

Contain the agenda before sending or presenting it. Mark its run receipt WITHDRAWN, identify every assertion derived from AH-203, and regenerate only after the intake rule is fixed. Do not patch the final prose by copying values from AH-204, because that would break the artifact-to-assertion trace.

The repair requires a deterministic selection key: producer, reporting window, source cutoff, completed time, and supersession state. A producer may publish only one current READY artifact for a declared window. If two claim current status, the chief creates a conflict instead of choosing the newest timestamp.

Test clock skew by giving AH-203 a later filesystem modification time than AH-204. Test duplicate current status and a late artifact whose source cutoff is older. Expected behavior follows manifest semantics, not filenames or modification dates. The chief should be willing to produce no risk section when the current object is ambiguous.

### Give Sana a fleet review that fits in fifteen minutes

The weekly fleet review shows producer health, artifact exceptions, conflict cards, environment changes, schema migrations, routines changed by their owners, and regression results. Fifteen minutes is Sana's target, not a product limit. Detail remains linked for investigation.

Start with red items that could invalidate the agenda: wrong consumer, stale source, unexpected environment state, unsupported schema, and untraced assertion. Then inspect recurring yellow items such as slow producers or repeated human corrections. Green run counts come last because volume does not prove integrity.

Sana assigns each red item a named owner and next evidence, not a vague “monitor.” A missing cutoff goes to the producer owner. An unexpected session goes to the environment owner. A conflict about account risk goes to the commercial owner. The chief drafts this routing table but never sends assignments.

End by selecting one regression fixture to inspect manually. Rotating fixtures prevents a dashboard from replacing direct evidence. The goal is not to supervise seven personalities. It is to confirm that contracts, state, and human decisions still align.

Once a month, Sana performs the reverse trace. She selects three agenda assertions and walks backward through chief output, artifact row, producer manifest, and original approved evidence. Three is her sample. A forward test proves the pipeline can create an agenda; reverse tracing proves a reviewer can reconstruct why a sentence exists.

If a link breaks, do not accept a copied quotation as a substitute. Record the missing evidence and ask the producer owner to repair its ledger. The chief must not search the shared computer for a likely source. That would recreate the finance leak through a maintenance shortcut.

Sana also chooses one absent topic and confirms why it is absent. Perhaps Finance Summary was incomplete or no market change met the threshold. An agenda should explain material omissions through exception states. Silence without a trace can look calm while hiding a failed producer.

These reverse checks keep the fleet legible as schemas and people change. A chief that produces concise prose but cannot support backward navigation is an editor, not a dependable coordinator.

This page designs artifact orchestration inside one account. It does not create isolated computers, define team tenancy, share credentials, administer subscriptions, or authorize the chief to change other bots. If separate trust domains require isolation, escalate that as account architecture rather than adding more roster labels.

Use [who can actually run Grok Bot](/blog/who-can-actually-run-grok-bot) for eligibility, [what you cannot cap](/blog/what-you-cannot-cap) for spend limitations, and [learn Grok Bot](/blog/learn-grok-bot) for the broader path.

Keep reading: [screens are not boundaries](/blog/screens-are-not-boundaries), [a boundary is not a permission](/blog/a-boundary-is-not-a-permission), and [what a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits).

## Frequently Asked Questions

### Does a grok bot fleet chief of staff isolate specialist bots?

No. A fleet chief can organize typed artifacts, deadlines, conflicts, and questions, but the roster does not create separate security boundaries. The supplied facts state that bots on one account share one persistent computer and use separate screens. Design the chief as a narrow reader of declared inbox artifacts, then pair that instruction with appropriate environment controls. Review any new session, credential, or sensitive file as a fleet-wide change because a specialist's name does not make account-level state private.

### What should every specialist artifact contain?

Require a manifest with producer, run ID, created time, input cutoff, schema version, sensitivity, permitted consumers, expiry, source ledger, and status. The payload should follow a registered schema and cite evidence rows for factual assertions. Only READY artifacts enter the main agenda. INCOMPLETE, CONFLICT, EXPIRED, and REJECTED states become exception rows or human questions. The chief must not search elsewhere on the computer to repair missing fields because that turns a bounded handoff into undeclared source exploration.

### Can the fleet chief restart or edit a failed specialist?

Not in this playbook. The chief writes an incident row naming the failed run, expected artifact, observed state, downstream impact, and suggested owner. Sana decides whether to retry, change a routine, revise a charter, or retire the producer. Keeping coordination proposal-only prevents the title Chief of Staff from becoming administrative authority. It also makes failures attributable: the chief reports what it observed, while a named human owns changes to bots, routines, credentials, schemas, and source access.

### How do I test a fleet before trusting the Monday agenda?

Plant fixtures for an unknown producer, unsupported schema, expired manifest, prohibited consumer, missing cutoff, conflicting claims, embedded instruction, and undeclared file. The chief should reject, quarantine, or report each one without searching for extra context or changing a producer. Trace sampled agenda sentences back to exact artifact rows. Compare environment and external state before and after. A passing run produces an agenda plus exception report while leaving sessions, roster, routines, messages, files outside its output folder, and source systems unchanged.
`,
};
