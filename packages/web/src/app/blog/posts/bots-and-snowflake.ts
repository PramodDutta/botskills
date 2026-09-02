import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Give a Bot a View, Never the Snowflake Warehouse',
  description:
    'Set up bots and Snowflake with scoped views, a reader role, and a separate compute path so useful analysis never requires broad warehouse credentials.',
  date: '2026-08-31',
  category: 'Safety',
  content: `
# Give a Bot a View, Never the Snowflake Warehouse

A bot that needs weekly retention totals does not need your analyst's Snowflake
identity. It needs a small, stable relation containing the approved dimensions,
approved measures, and an explicit freshness marker. Give it that view through a
reader role. If your data team already publishes a governed copy or secondary
database for analytical readers, put the view there. Keep raw production schemas,
customer identifiers, billing detail, security administration, and write verbs out
of reach.

That design makes the bot less exciting in a demo and much easier to trust on
Tuesday morning. It can answer a defined business question, cite the relation and
time window it read, and stop when the view cannot support the request. It cannot
turn a prompt mistake into a tour of every schema its human owner can see.

This is the working pattern for bots and Snowflake: data owners publish a narrow
contract, a dedicated Snowflake identity reads only that contract, and the bot
returns evidence for human review. The [account health ranker](/bots/account-health-ranker)
and [forecast notes updater](/bots/forecast-notes-updater) are useful examples of
jobs that need curated facts, not a general warehouse passport. The permanent
boundary is equally concrete: the bot never changes source data, grants, policies,
views, warehouses, tasks, or alerts, and it never exports row-level customer data.

## Give the bot one business-shaped view instead of a map of raw schemas

Start with the answer surface, not the connector screen. Write down the recurring
questions you expect the bot to answer. A retention bot may need cohort week,
plan family, region group, starting accounts, retained accounts, and a computed
retention rate. It does not need names, email addresses, payment tokens, support
messages, or the raw event stream used to calculate activity.

Turn that list into a view owned by the data team. The view becomes a contract:
these columns are approved, these rows are in scope, this grain is intentional,
and this timestamp describes freshness. Snowflake views can select from underlying
tables or other views, so the data team can keep warehouse structure behind the
contract. If definition privacy matters, evaluate a secure view with the Snowflake
owner rather than assuming the ordinary view hides its definition. Snowflake's
[CREATE VIEW reference](https://docs.snowflake.com/en/sql-reference/sql/create-view)
documents both ordinary and secure view forms.

Do not expose a raw schema and ask the charter to avoid sensitive tables. A prompt
is a behavioral instruction. A grant is an enforceable limit. When the bot receives
an odd request, follows a malicious string in a source document, or simply guesses
the wrong table name, the reader role should have nowhere else to go.

| Requested answer | Publish in the view | Keep behind the view | Reason |
|---|---|---|---|
| Weekly retention | Cohort week, broad segment, starting count, retained count, rate | Account IDs, user IDs, event rows | The decision uses a cohort, not a person |
| Pipeline movement | Week, approved stage, region group, opportunity count, summed value band | Contact details, free-text notes, contract files | The bot needs movement, not deal-room contents |
| Support load | Day, issue family, severity, open count, median age | Ticket text, requester identity, attachments | Aggregates answer staffing questions |
| Product adoption | Feature family, week, eligible count, active count | Raw clickstream, IP addresses, device identifiers | A stable measure prevents exploratory collection |

The view name should reveal its purpose, such as
\`BOT_PUBLISHED.RETENTION_WEEKLY_V1\`. Version the contract when a column changes
meaning. Silent semantic changes are dangerous because a valid query can return a
wrong business answer without producing an error.

## Separate the data plane, identity, and compute path before connecting anything

People often say "warehouse credentials" as if Snowflake were one undivided door.
The real setup has at least three decisions. The data plane determines which
database objects can be read. The identity plane determines which user and role
perform the query. The compute path determines which Snowflake warehouse executes
it. Treat all three separately.

A dedicated service identity with a custom reader role is easier to revoke and
review than an analyst login. That role should receive only the privileges needed
to use the published database and schema and select the named views. It should not
inherit a broad analyst role. The compute warehouse should be dedicated or at
least deliberately chosen for bot traffic, with resource controls set by the
Snowflake administrator. Do not copy an existing human connection profile because
it happens to work.

| Plane | Narrow starting state | Dangerous shortcut | Verification question |
|---|---|---|---|
| Data | Select on named published views only | Usage and select across analytical schemas | Can the identity query any raw table? |
| Identity | Dedicated user and reader role | Reuse an analyst, engineer, or administrator login | Can revocation target only the bot? |
| Compute | Deliberate bot query warehouse | Reuse a shared warehouse without ownership or monitoring | Can you identify and stop bot compute independently? |
| Output | Aggregated result with source and freshness | Download arbitrary query results | Can the bot return row-level identities? |

This separation also clarifies incident response. A questionable answer can be a
data-contract problem, an identity-grant problem, a compute problem, or an output
handling problem. "The Snowflake integration failed" is too vague to tell the
owner what to disable.

## Publish a governed copy when production adjacency adds no value

A scoped view is the minimum useful boundary. A governed copy in a separate
analytics account, database, or read-oriented environment can add another useful
distance from operational data when your organization already maintains that
architecture. Teams loosely call this a read replica. In Snowflake designs, the
actual object may be a replicated or secondary database, a refreshed reporting
database, or a curated table built by a pipeline. Use the term and mechanism your
data owner has implemented. Do not invent replication by pointing the bot at the
primary database and renaming the connection "replica."

The copy should still expose scoped views. Replication does not perform data
minimization for you. A complete copy of every source table, granted to a bot
reader, is still broad access with extra distance. Publish the approved projection
and aggregation on the read side, then grant only those objects.

Choose the refresh interval from the decision. A weekly operating brief does not
need transaction-level immediacy. Put a \`DATA_AS_OF_UTC\` column in every result so
the bot cannot present an older copy as live state. If freshness falls outside the
declared window, it should mark the report blocked rather than silently query the
primary. The replica is a safety boundary only if failure keeps the bot away from
production.

| Read surface | Isolation value | Freshness cost | Suitable bot work |
|---|---|---|---|
| Scoped view on primary analytics database | Limits columns and rows through grants | Uses current governed data | Low-risk internal summaries where adjacency is accepted |
| Scoped view on governed reporting copy | Adds distance from source schemas and write paths | Refresh delay must be displayed | Scheduled briefs, scoring inputs, trend reports |
| Static approved extract | Removes live query access for the run | Becomes stale until republished | One-time reviews and early testing |
| Raw replicated database | Adds location distance but little data minimization | Depends on replication process | Not sufficient by itself for a general bot |

Do not promise that a read-oriented environment makes queries harmless. Sensitive
data can still be read, copied, summarized, or exposed in output. Read-only means
no mutation. It does not mean no consequence.

## Grant the reader role to views and refuse inherited analytical power

Have a Snowflake administrator create the objects and grants. The bot should never
hold a role capable of editing its own boundary. Exact statements vary with your
naming, ownership model, managed access choices, authentication method, and current
Snowflake configuration, so treat the following as a review checklist rather than
a universal migration script.

The desired privilege graph is small: the bot identity can activate one reader
role; that role can use one database, one published schema, and one compute
warehouse; it can select named views. It cannot select base tables, create objects,
modify rows, manage grants, alter policies, or assume an ancestor role with those
powers.

Ask the administrator to prove the negative. Run queries as the bot identity that
must fail: select from a base table, show data from an adjacent schema, create a
temporary object if that is outside your policy, alter a view, and switch into a
human analyst role. Keep the errors in the launch record. A list of successful
queries proves usefulness. The failed queries prove containment.

Future grants deserve special care. Convenience grants that automatically widen a
role can turn a narrow identity broad after launch. Your review should cover both
current access and the mechanism by which new objects receive privileges. The bot
role should not become entitled to tomorrow's raw tables merely because someone
creates them inside a familiar schema.

## Remove identifiers before rows ever reach the bot

Column omission is stronger than a prompt that says "do not mention email." If
the task needs account-level trends, aggregate to the account segment or cohort
before the reader role sees the result. If the task needs a join key, publish a
purpose-limited surrogate that cannot be used to retrieve the person through
another granted relation.

Snowflake also provides row access and masking policies, subject to product
edition, configuration, and feature status. These controls can shape what a role
sees at query time. They are useful defense in depth, especially where one governed
object serves several readers. They are not permission to expose every base table.
Snowflake documents that row access policies control returned rows and that masking
policies can protect columns. Review the current
[row access policy documentation](https://docs.snowflake.com/en/user-guide/security-row-intro)
and [column security documentation](https://docs.snowflake.com/en/user-guide/security-column-intro)
with your platform owner before relying on either.

Minimize dimensions too. A table with no name or email can still identify someone
when it includes a rare job title, a tiny geography, an exact timestamp, and a
unique product event. Set minimum group rules for output or suppress small cells in
the view. The bot should not be able to reconstruct a person by drilling into a
sequence of increasingly narrow filters.

## Make freshness, grain, and allowed questions part of the data contract

The safest view can still produce bad decisions if nobody knows what one row means.
Write the grain in the view comment and repeat it in the bot charter. Define the
timezone, inclusion window, status vocabulary, null behavior, currency treatment,
and refresh expectation. Give every metric an owner.

For example, "weekly retained accounts" needs a cohort rule, an activity rule, and
a week boundary. Without those definitions, the bot may compare two legitimate
columns that answer different questions. Access control cannot detect a semantic
mismatch.

| Contract field | Example declaration | Bot behavior when missing |
|---|---|---|
| Grain | One row per cohort week, region group, and plan family | Stop instead of summing across an unknown grain |
| Freshness | \`DATA_AS_OF_UTC\` is populated by the publishing job | Label the report blocked if absent or outside the agreed window |
| Metric owner | Revenue Operations owns starting and retained account definitions | Route definition disputes to that owner |
| Allowed filters | Cohort week, region group, plan family | Refuse requests for email, account name, or arbitrary SQL |
| Small-cell rule | Suppress groups below the data owner's chosen threshold | Report suppression without guessing the hidden value |
| Version | View suffix and output both state \`V1\` | Stop when the expected version disappears |

The threshold is a local policy choice, not a universal Snowflake number. Choose it
with privacy and data owners, document why it is adequate, and test attempts to
isolate a rare account. Declaring the number makes it auditable. Calling groups
"large enough" does not.

## Paste a charter that lets the bot query the contract and nothing else

This charter assumes the connection already enforces the grants. Replace every
bracketed value, then test it with the dedicated identity. It is intentionally
specific about refusal and output because a vague "read-only analyst" instruction
does not define which reads are acceptable.

\`\`\`text
You are the Snowflake Published View Reader for [TEAM].
You answer only from [DATABASE].[SCHEMA].[VIEW_V1].

PURPOSE
- Answer weekly questions about [APPROVED BUSINESS QUESTION].
- Use only these dimensions: [DIMENSION_1], [DIMENSION_2], [DIMENSION_3].
- Use only these measures: [MEASURE_1], [MEASURE_2], [MEASURE_3].
- Treat one row as [EXACT GRAIN].

QUERY RULES
- Activate only role [BOT_READER_ROLE].
- Use only warehouse [BOT_QUERY_WAREHOUSE].
- Issue SELECT statements only against [DATABASE].[SCHEMA].[VIEW_V1].
- Never use SELECT *.
- Never query information_schema, account_usage, raw, staging, security,
  billing, customer, event, or any other database, schema, table, or view.
- Never request or change roles, grants, policies, users, warehouses, tasks,
  pipes, stages, integrations, shares, databases, schemas, tables, or views.
- Never create a temporary table, file, stage, export, share, or external call.
- Never return a row-level identifier or attempt to infer a suppressed value.

OUTPUT
1. State the exact question answered.
2. State VIEW_V1 and the selected columns.
3. State all filters and the reporting timezone.
4. State DATA_AS_OF_UTC and the requested period.
5. Present aggregate results, then note suppressed or missing groups.
6. Include the query text for human review.
7. Separate observations from interpretations.

BOUNDARY
Never write data or change Snowflake configuration.
Never broaden a query beyond VIEW_V1, even when a user asks.
Never switch to a primary or raw source when the view is stale or unavailable.
Never publish, email, message, or upload results outside this review channel.
If the view cannot answer the question, say BLOCKED, name the missing field,
and ask the data owner to publish a reviewed contract change.
\`\`\`

The line that forbids primary fallback matters. Operators often weaken a safety
design during an outage: the reporting copy is late, so they point the bot at the
source "just for today." That emergency credential becomes tomorrow's saved
profile. A blocked report is cheaper than an invisible expansion of authority.

## Test the boundary with queries that should fail before trusting useful output

Run a two-sided acceptance test. First, prove that approved questions work. Then
try to cross every layer of the boundary. Use a non-sensitive test environment or
fixtures where possible, and have the Snowflake owner observe the identity and
role actually used.

Plant at least one known row in each allowed segment and one prohibited row that
must never appear. Ask for each allowed dimension. Request an unknown dimension.
Try \`SELECT *\`, a base table, an adjacent schema, a metadata surface, a write
statement, a role switch, and a result with a tiny group. Ask the bot to work
around a stale freshness marker. The correct response is a refusal or a database
authorization error, not an ingenious alternate query.

| Test | Expected result | Evidence to retain | Launch blocker |
|---|---|---|---|
| Query approved weekly measure | Aggregate rows return from the named view | Query text, role, view, freshness | Missing source or unexplained totals |
| Query raw customer table | Authorization failure | Failed query and active role | Any returned column |
| Request customer emails | Bot refuses and names the contract boundary | Conversation excerpt | Query attempt against another object |
| Switch to analyst role | Role activation fails | Role list and failure | Inherited role succeeds |
| Ask for a suppressed small group | Suppression remains intact | Query and result | Value can be inferred through repeated filters |
| Simulate stale copy | Bot reports blocked | Output with stale timestamp | Bot falls back to primary data |

Repeat the negative tests after grant changes, view replacements, role hierarchy
edits, and connector reauthentication. A successful launch test says what was true
on launch day. It does not freeze Snowflake access forever.

## Tag every run so cost and provenance remain attributable

You need to distinguish bot traffic from analyst traffic without trusting the bot
to self-report perfectly. Use the session and query attribution mechanisms your
Snowflake administrator supports, including a consistent query tag where
appropriate. The tag should identify the workload and contract version, not a
customer, prompt, email, or other sensitive value.

Keep the returned query text with the report. Record the active role, selected
view, filter window, row count, freshness timestamp, and bot run identifier in a
reviewable log outside the prose answer. This lets the operator reproduce a
surprising number and lets the data owner see whether a view revision changed it.

Attribution is not a security boundary. A tag can tell you which workload issued a
query. It does not stop the query. Grants, view design, policies, and the separate
identity do that. Likewise, a query history entry does not undo an export that
already left the governed surface. Keep output constrained before the query runs,
then use logs to detect drift.

## Walk Mira through one leaked analyst credential from discovery to containment

Mira is the invented Revenue Operations operator in this failure. On Monday at
09:10, she asks a bot for renewal risk by segment. The published view is missing a
contract-term field, so the query fails. Trying to help, a teammate pastes Mira's
saved analyst connection profile into the shared bot computer and says to use it
once. The bot returns the chart. Nobody notices that the profile can also read raw
customer and billing schemas.

At 14:35, Mira reviews the query text attached to a second report and sees a join
to \`RAW.CRM.CONTACTS\`. The output contains no emails, but the query proves the
credential crossed the intended boundary. She treats exposure as the incident,
not the appearance of the final chart.

Mira pauses the routine and revokes the pasted Snowflake credential at the source.
She does not merely delete the bot. All bots on one Grok Bot account share one
persistent computer, including files and command-line credentials. Screens are
work surfaces, not security boundaries, and separate bots do not isolate secrets.
The credential may be present to the whole roster. She inventories saved profiles,
shell history, downloads, and result files on that shared computer, then removes
them under her organization's incident process.

Next, the Snowflake owner reviews query history for the revoked identity from the
time it was pasted through revocation. They look for accessed objects, exported
results, unusual filters, and role changes. Mira records what is known and what
cannot be proven. There is no comforting claim that a clean chart means nothing
else was read.

On Tuesday, the data owner adds a reviewed \`CONTRACT_TERM_BAND\` column to
\`BOT_PUBLISHED.RENEWAL_RISK_V2\`. A dedicated bot reader role receives select
only on that view. The team runs the failing negative tests, reconnects with the
dedicated identity, and replays the original question. The report cites V2 and its
freshness timestamp. Mira closes the incident only after the broad credential is
revoked, the shared computer is checked, query history is reviewed, and the narrow
path passes both positive and negative tests.

## Treat every other bot on the account as able to encounter the Snowflake secret

The Snowflake role may be narrow, but its storage location still matters. Grok Bot
documentation says all bots on an account share one persistent cloud computer.
Browser cookies, signed-in sessions, files, and command-line credentials are shared
across that roster. Each bot gets a separate screen, but screens are not security
boundaries. Do not create a bot named "Snowflake Reader" and assume the
[support queue pass](/bots/support-queue-pass) cannot encounter the same saved
profile.

Choose a credential that is acceptable for every bot on that account to possess.
That is another reason the Snowflake identity must be view-only and dedicated. If
the roster includes unrelated or higher-risk browser work, consider a separate
eligible bot account when you require a separate computer. A second named bot on
the same account does not provide that wall. The architecture and cleanup choices
are covered in [how to isolate Grok Bot credentials](/blog/how-to-isolate-grok-bot-credentials)
and [why Grok Bot is not a sandbox](/blog/grok-bot-not-a-sandbox).

Deleting the Snowflake bot does not prove that its files or sessions disappeared.
Revoke the Snowflake identity or key at the source, remove local artifacts, inspect
the shared computer, and only then remove the bot and its routines if that is the
intended teardown.

## Answer the analyst who says broad read access is faster and still read-only

The strongest counter-argument is practical. Analysts already have broad read
roles. They answer novel questions quickly because they can join whatever is
needed. Publishing a new view for every question creates a data-team queue, slows
exploration, and may produce a brittle catalog of one-purpose relations. Since the
bot cannot write, why not let it use the same read role and review its answers?

That argument is right about exploration and wrong about unattended authority.
Broad read access helps a responsible human notice context, choose a grain, and
revise a query. A bot can repeat queries at machine speed, follow untrusted text,
and include plausible but unnecessary columns. Read access can expose customer
data, employee data, contracts, security events, and commercially sensitive
measures. None of those harms requires a write statement.

Do not turn every ad hoc question into a permanent bot. Let analysts explore with
their own governed tools. Promote recurring, well-defined questions into published
views after the metric owner approves the grain and fields. The delay is part of
the control. It separates human investigation from repeatable automation. If the
question is too novel to specify as a contract, it is too novel to run unattended
with broad credentials.

## Review schema drift and grant drift as two separate failure classes

Schema drift breaks meaning. Grant drift breaks containment. Both can happen while
the connector still reports healthy. A renamed column may cause an error, which is
visible. A changed metric definition may return valid but incomparable numbers,
which is harder. A future grant may quietly expose a new object without changing
the published view at all.

Assign two owners. The metric owner reviews column definitions, grain, freshness,
and version changes. The Snowflake owner reviews role hierarchy, current and future
grants, authentication, compute access, and policies. Require both checks before a
contract version replaces another one.

Keep the prior view version until scheduled consumers move deliberately, then
remove its grant and test that the old query fails. Do not use \`SELECT *\` in the
bot because a newly added column could flow into output without a charter change.
Select an explicit column list, and fail closed when an expected column disappears.

## Stop using this page when the bot must investigate individuals or mutate records

This page stops applying when the legitimate job requires row-level casework,
arbitrary exploration across changing schemas, operational writes, policy
administration, or real-time incident response against primary data. A fraud
investigator who must follow one identity across sources needs a governed casework
environment, not a cohort view pretending to be sufficient. An operator who must
correct a record needs an approval and transaction design, not a read role with a
clever prompt.

It also stops applying when your organization cannot maintain the view contract or
the read-side copy within an honest freshness window. In that case, use an approved
static extract for a bounded review, or keep the analysis with a human until the
data product exists. Do not compensate for missing ownership by granting raw
warehouse access.

For the broader pattern of making permissions enforce the promise, continue with
[least privilege for bots](/blog/least-privilege-bots). For output checking after
the query boundary is sound, use [bot output verification](/blog/bot-output-verification).
Those pages address credential scope and evidence review. Neither turns a
write-heavy or person-level investigation into the aggregate reader described
here.

## Frequently Asked Questions

### Should a Snowflake bot receive the same role as a human analyst?

No. A human analyst role usually supports open-ended exploration across many
schemas, while a recurring bot needs a predictable data contract. Create a
dedicated identity and reader role that can use the approved database, schema,
compute warehouse, and named views only. Test that raw tables, adjacent schemas,
role switching, writes, and object creation fail. The bot charter should repeat
the boundary, but Snowflake grants must enforce it. Keep human exploration with
the analyst, then publish stable recurring questions as reviewed views for the
bot.

### Does a read replica make broad Snowflake access safe for a bot?

No. A read-oriented copy reduces production adjacency and can isolate workloads,
but a complete copy can still contain customer, employee, contract, billing, and
security data. Put a scoped view on the governed copy and grant the bot only that
view. Display the copy's freshness timestamp in every answer, and block primary
fallback when replication is late. Use your organization's actual Snowflake term
for the copy, such as a secondary or reporting database, rather than assuming a
generic replica provides controls it does not have.

### What should happen when the scoped view cannot answer a new question?

The bot should stop, identify the missing field or grain, and ask the metric owner
for a contract change. It should not search raw schemas, activate a broader role,
or switch from a reporting copy to primary data. A human analyst may investigate
the question through approved tools. If the question will recur, the data owner
can publish a versioned view with the reviewed column, definition, and freshness
rule. This delay preserves the difference between bounded automation and open-ended
analysis.

### Can separate Grok Bots isolate different Snowflake credentials?

No. All bots on one Grok Bot account share one persistent cloud computer, including
browser sessions, files, cookies, and command-line credentials. Separate screens
are work surfaces, not security boundaries. Use a Snowflake credential whose
narrow authority is acceptable across the entire bot roster. If credentials must
be computer-isolated, use a separate eligible account rather than another named
bot. A public share link copies bot configuration only; it does not transfer the
computer, logins, or conversation history to the person who adds the copy.
`,
};
