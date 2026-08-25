import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Jira: Permissions and What to Automate',
  description:
    'A Grok Bot Jira setup built on JQL reads instead of transitions: what a status change actually fires, the permission families to grant, and a query-allowlist charter.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Jira: Permissions and What to Automate

Somebody in your organisation has built things on top of Jira transitions.
You may not know who, and there is a good chance they no longer work there.
A rule that emails a distribution list when a ticket reaches Ready for QA. A
webhook that pings a deployment service. A post function that stamps the
resolution field. An SLA clock that starts on one status and stops on
another. A rule that creates three subtasks whenever a parent moves to In
Progress.

None of that is visible from the ticket. You see a dropdown with a few
options in it, and every option looks like changing a field.

This is the thing to understand before you connect a bot to Jira: a
transition is not a write to a database row. It is a trigger that runs
whatever the organisation has attached to it over the last several years.
Moving an issue back afterwards does not run any of it in reverse.

## A transition is an event, not a field change

Compare it against the thing it superficially resembles. Editing the summary
field of a Jira issue is a data change. The old text is in the issue history,
you can put it back, and the world is where it was.

Transitioning that same issue from In Progress to Done does at least five
distinct things in a typical configuration. It changes the status. It very
likely sets the resolution through a post function, which is what actually
removes the issue from open filters. It fires an issue event the notification
scheme turns into email. It matches any automation rule listening for that
transition. And it changes what the board, the sprint report, and any version
release notes compute.

Move it back and exactly one of those five reverses: the status. The mail is
delivered. The automation ran. The webhook posted. A stopped SLA clock has its
elapsed time recorded that way. The sprint report recorded a completion at a
point in time.

One version of this failure is common enough to name. If a bot sets a status
without going through the transition that carries the resolution post
function, the issue displays as Done and still matches every filter for
unresolved work. The board looks right, the reports do not, and diagnosing it
takes an afternoon because the ticket looks fine.

## Inventory what is attached to a transition before you grant one

Four layers can hang off one transition, and the audit you owe yourself before
connecting anything is an inventory of them.

**Post functions** sit on the workflow transition itself. They set fields,
assign issues, create linked issues, and fire events. They are invisible
unless you open the workflow editor, and on an old project there are more of
them than anyone remembers.

**Automation rules** live outside the workflow and listen for events. A rule
triggered by a transition can update other issues, mail addresses that are not
project members, create issues in other projects, and call external services.
Rules also chain, so one rule's action is another rule's trigger.

**Webhooks** carry the event out of Jira entirely, into deployment pipelines,
status tooling, or an internal service somebody wrote in 2021. Whatever they
trigger is outside your ability to undo from Jira.

**SLA clocks** in service management projects start, pause, and stop on
status. A transition at the wrong moment stops a clock that should have run or
restarts one that should not have, and that report is what somebody uses to
argue about a contractual commitment.

Every write in Jira has a fan-out profile, and they are not close to equal.

| Write | What fires beyond the field itself | What moving it back reverses | Who hears |
|---|---|---|---|
| Edit summary or description | Nothing structural. The old text is in history | Everything | Watchers, if the scheme covers issue updated |
| Edit assignee, priority, or due date | Automation rules listening on field change | The field. Not the rules that ran | Assignee, reporter, watchers |
| Add a comment | Comment notification, and in service management possibly a customer-visible reply | Nothing. The mail is delivered with the text in it | Every role and watcher in the scheme |
| Transition an issue | Post functions, automation chains, webhooks, SLA start or stop, board and sprint state | The status only | Everyone the issue event maps to |
| Bulk transition | All of the above, multiplied by the result set, with mail governed by one checkbox | The statuses, one at a time, by hand | Potentially the whole project |
| Complete a sprint | The sprint report snapshot, and the rollover of incomplete issues | Nothing useful. The snapshot is history | The board's audience, at review time |
| Release a version | Release notifications and any downstream release tooling | The flag, not the notifications | Whoever subscribes to releases |
| Create an issue | Creation rules, assignment automation, triage queues | Delete it, in a second | The project's creation recipients |
| Delete an issue | Removal from every filter, report, and link that referenced it | Nothing. In most configurations there is no recycle bin | Nobody, which is the problem |

People expect the danger at the bottom of that table. It sits in the middle.
So: before a bot transitions anything, someone opens the workflow and the
automation list and reads what is attached. If nobody will do that audit, the
bot does not get transition permission. That is a fair trade, because the read
side of Jira is where the value is anyway.

## Notification schemes send mail to roles, not to people you picked

Jira's notification model does not match most people's mental image of it.

A notification scheme maps issue events to recipients, and the recipients are
defined by role rather than by name. Current assignee. Reporter. All watchers.
A project role. A user group. Nobody chose an individual list, so nobody can
tell you how many people receive a given event without opening the scheme and
expanding each group.

Two consequences. The audience for any action is unknowable from the ticket
and is usually larger than the participants, because watchers accumulate:
people watch an issue once during an incident and stay subscribed for years.
And volume compounds invisibly. A nightly sweep touching sixty issues does not
send sixty emails, it sends sixty times the expanded recipient count, at
whatever hour the bot runs.

The end state is not anger, it is filtering. Someone builds a mail rule that
files all Jira notifications away, and from then on the channel is dead for
the messages that mattered. You did not just add noise, you removed a working
alerting channel.

So the volume cap belongs in the charter next to the permission rules, and
digests to one person beat per-issue writes almost every time. The
[standup scribe](/bots/standup-scribe) pattern in the catalog takes the
strict version of this and posts only to your own DM, never to a shared
channel.

## Permission schemes decide what your bot can do, not its account type

People connect a bot, find it cannot transition an issue, and conclude the
integration is broken. Usually nothing is broken. Jira access is assembled
from more layers than most tools, and the account type is the least important
of them.

Global permissions apply across the instance. Permission schemes attach to
projects and grant individual permissions to project roles, groups, or users,
which is why the same person can edit issues in one project and not the next.
Issue security schemes sit underneath and hide individual issues from people
who otherwise have full project access. Project roles are the indirection
layer that ties it together, configured per project.

Three implications for setup.

A bot inherits the access of the account it authenticated as, exactly like any
other integration. There is no separate bot permission level, so your only
real control is which account it uses. Create one for this purpose rather than
connecting your administrator login.

Permissions are per project, so a bot scoped to one project by intention can
be scoped to twelve by accident, because the account you gave it sits in a
group that appears in twelve permission schemes.

And issue security means a report can be silently incomplete. If the account
cannot see security-restricted issues, the counts are wrong and nothing says
so. Every Jira reporting charter needs a clause requiring the bot to state the
scope it actually queried.

The same reasoning decides how you connect. Confirm in the app whether a Jira
connector is available for your account rather than assuming, because
availability changes constantly. Without one, an MCP server keeps hosted
sign-in tokens with the provider's backend rather than on the persistent
computer every bot on your account shares. A browser login handoff also works
and grants whatever the signed-in account can do, which in Jira is decided by
group and scheme membership you have probably never audited. Audit it before
you sign in, not after.

## Read the permission scheme as families, not as checkboxes

Permission names vary between Jira products and between Cloud and self-hosted
deployments, and authorisation screens group them differently again. Read the
scheme or consent screen in front of you and map it onto these families.

| Permission family | What it grants | Worst realistic outcome if the charter is wrong |
|---|---|---|
| Browse projects (read) | Issues, comments, attachments, and history in the project | Internal discussion, customer detail, and security findings flow into the bot's context and onto the machine it runs on. |
| Search and query | JQL across everything the account can browse | Wide reads across projects nobody meant to include, invisible because a query returns rows either way. |
| Create issues | File new issues in the project | Duplicate tickets and triage noise. Reversible, and the mildest write here. |
| Add comments | Post on issues | Notification fan-out to every watcher and role in the scheme, at scale, at night. |
| Edit issues | Change fields on existing issues | Field values replaced, with history only useful if somebody knows to look. |
| Transition issues | Move issues through the workflow | Post functions, automation, webhooks, and SLA clocks all fire. Moving the status back reverses none of it. |
| Manage sprints and boards | Start and complete sprints, move issues between them | Completing a sprint snapshots the report. A wrongly completed sprint is history. |
| Manage versions and releases | Create and release versions | A release can notify and can drive downstream release tooling. |
| Delete issues | Remove issues | Usually permanent, with no recycle bin. The one grant to refuse without discussion. |
| Administer project | Permission scheme, workflow, notification scheme, roles | The rails become editable by the thing they constrain. |
| Global administration | The whole instance | Every project, every scheme, every user. |

The underrated row is transition, which reads like a field change and behaves
like running a program. The overrated row is create issues, the one write
worth considering early, because a wrong ticket is deleted in a second.

## JQL is the read-only half of Jira and it is the good half

Jira has a query language that is genuinely excellent, and it is the reason a
Jira bot can be useful while writing nothing at all.

JQL is declarative, it is precise, and a query is auditable. You can paste the
exact query into Jira and see the same rows the bot saw, which is a stronger
verification story than most integrations offer, where the bot's account of
what it looked at is itself the thing you have to trust.

Five read patterns cover most of what a team actually wants to know, and each
one answers a different question about the same project.

| The question you actually have | The clause that answers it | What a non-empty result usually means |
|---|---|---|
| What is claimed as active but is not moving | status In Progress plus updated older than ten days | Work in progress that is really blocked, or a status nobody exits |
| Which issues look finished and are not | statusCategory Done plus resolution IS EMPTY | A workflow defect: a transition somewhere is missing its resolution post function |
| What arrived and was never picked up | assignee IS EMPTY plus created older than three days | A triage gap, usually at a specific intake channel |
| Which bugs nobody has responded to | issuetype Bug plus comment IS EMPTY plus recent created | Reports going unanswered, which is what people escalate over |
| What is aging in a queue | status NOT IN the closed set, ordered by created ascending | The oldest items, which are almost never the ones being discussed |

Written out, the same five look like this:

\`\`\`text
# Work that claims to be in progress and is not moving
project = ENG AND status = "In Progress" AND updated <= -10d
  ORDER BY updated ASC

# The classic broken state: done but never resolved
project = ENG AND statusCategory = Done AND resolution IS EMPTY

# Tickets aimed at nobody
project = ENG AND assignee IS EMPTY AND status != Done
  AND created <= -3d

# Bugs raised this sprint that nobody has looked at
project = ENG AND issuetype = Bug AND created >= -14d
  AND status = "To Do" AND comment IS EMPTY

# Aging in the queue, oldest first
project = SUP AND status NOT IN (Done, Closed, Resolved)
  ORDER BY created ASC
\`\`\`

One thing to understand before you relax: the query that produces a report is
also what drives a bulk change. Jira's bulk operations take a result set and
transition, edit, or delete everything in it, and the mail behaviour on a bulk
change is a checkbox somebody has to get right. The query language is safe and
the tooling wrapped around it is not. Grant search without granting
bulk-capable write permissions and the distinction stays where you want it.

## Write the queries into the charter instead of letting the bot compose them

The version of this charter that works has one unusual feature: the queries
are written in the charter rather than composed by the bot. A composed query
is a small piece of code the bot writes and runs against production, and you
have no way to verify it after the fact. A fixed list you approved once is
reproducible forever.

\`\`\`text
You are my Jira Reporter for project [KEY]. You read and you report.
You never transition, edit, comment on, or create an issue.

// THE ONLY QUERIES YOU MAY RUN
Run exactly these, unmodified, every weekday at 08:15 [TIMEZONE]:
  Q1 project = [KEY] AND status = "In Progress" AND updated <= -10d
  Q2 project = [KEY] AND statusCategory = Done AND resolution IS EMPTY
  Q3 project = [KEY] AND assignee IS EMPTY AND status != Done
       AND created <= -3d
  Q4 project = [KEY] AND issuetype = Bug AND priority IN (Highest, High)
       AND status != Done
  Q5 project = [KEY] AND duedate <= 3d AND status != Done
If you believe a different query would help, put the query text in the
report as a suggestion. Do not run it.

// WHAT THE REPORT CONTAINS
One message per run, under 400 words:
  STUCK     Q1 results: key, summary, assignee, days since update
  BROKEN    Q2 results, which are almost always a workflow bug, not work
  ORPHANED  Q3 results: unassigned and aging
  RISK      Q4 and Q5 combined, highest severity first
  SCOPE     the exact projects and issue counts you queried, and an
            explicit note if any issue was not visible to your account
  NOTHING   if every query is empty, say so in one line and stop
Every row carries the issue key. Never describe an issue you did not
read this run. Never infer a status from a comment.

// WHERE YOU STOP
Never transition an issue, for any reason, including moving it back to
a status it previously held.
Never edit a field, including labels, priority, assignee, due date,
sprint, fix version, or resolution.
Never comment on an issue, and never add or remove a watcher.
Never create, clone, link, or delete an issue.
Never start, complete, or modify a sprint, board, version, or filter.
Never run a bulk change, ever, under any wording.
Never email anyone or post anywhere outside this report to me.
If something looks urgent, put it at the top and tag me. Urgency is a
reason to escalate and never a reason to act.
\`\`\`

The SCOPE line is the clause that saves you. Issue security and permission
schemes mean a report can be quietly partial, and a bot that says "14 stuck
issues" when it could only see 9 of the 14 is worse than no report, because
you will act on the number.

## The stale issue sweep is the first thing worth wiring

Sequence the rollout so the reads prove themselves before any write is even
discussed.

**First, the stuck-work sweep.** Q1 and Q2 above. It costs nothing and touches
nothing, and Q2 tends to find a genuine workflow defect on the first run
against any project older than a year. Fixing that is worth more than the
automation you were planning.

**Second, the reporting pack.** Sprint scope changes, bugs opened versus
closed, average age in each status, the three oldest items in each queue. All
read-only, all reproducible because the queries are fixed. This is the shape
the
[chief of staff briefing](/bots/chief-of-staff-briefing) uses more broadly:
it never sends, schedules, or acts externally without approval, and the
briefing is the deliverable.

**Third, release note drafting.** A version has a fixed set of issues, so the
input is fully determined, and the rule that makes the output trustworthy is
that every line cites an issue key. No key, no line. That single constraint
removes the failure where a plausible feature nobody built appears in your
release notes. The draft goes to you, and you publish it.

**Only after all of that, and only with the workflow audit done: creating
issues.** Filing is the mildest write in Jira and the one that genuinely saves
work, when a bot turns a monitoring alert or a recurring check into a ticket
with the evidence attached. The
[codebase hardening auditor](/bots/codebase-hardening-auditor) is the same
idea aimed at a repository: it works only there and never touches production.

What never gets automated, regardless of how long it has been running well:
transitions, bulk changes, sprint completion, and deletion. Those four are
where every unrecoverable outcome in this article lives. The full
pre-connection pass is in the
[bot safety checklist](/blog/grok-bot-safety-checklist), and the broader case
for running a business this way is in the
[one-person company guide](/blog/one-person-company-grok-bot).

## Comments are messages to people, and they are the easy write to regret

Comments feel like the safe write. They change no field, they break no
report, and they are deleteable. People grant comment permission early for
exactly that reason.

The problem is that a comment is a message from your organisation to whoever
is watching the issue, and in a service management project it may be a message
to a customer. Internal note versus public reply is a control in the
interface, so it is a control a bot can get wrong, and the gap between those
outcomes is the gap between a private mistake and a customer reading a
machine's guess about their problem.

Even internally, deletion is not a fix. The notification went out with the
full text in it and everyone who received it has read it. The comment
vanishing afterwards mostly makes the thread confusing.

If you want the bot's analysis attached to a ticket, the honest version is
that you paste it. It takes eight seconds, it puts a human name on the
statement, and it means somebody read the thing before your team did.

## Answer the objection that a report nobody actions is not automation

The honest counter-argument goes like this. A bot that only reports moves work
from Jira into your inbox. Somebody still opens each stale issue and moves it,
the sweep runs weekly, the list gets skimmed, and within a month the report is
one more notification you filter. Jira exists to be transitioned. Refusing the
one operation the tool is built for looks like ceremony.

Price the volume first. A stuck-work sweep on a healthy project returns
single-digit rows, and moving nine issues is ninety seconds of clicking once a
week. What the bot removed was never the clicking, it was the looking: finding
those nine among four hundred, with a reason attached to each.

The audit is the stronger version of the objection. Reading a workflow and an
automation list costs an hour of somebody with admin access, which is real. It
is also the same hour you owe every automation already attached to that
project, none of which anyone has read either.

Where the objection wins outright: a project you created, whose workflow you
own, with no automation rules, no webhooks, no SLA, and a notification scheme
that reaches nobody but you. There the fan-out is empty, a transition really
is a field change, and a bot moving issues costs nothing. That description
fits a solo backlog and very little else. The moment a second person watches
an issue, it stops fitting.

## Rehearse in a throwaway project, not in a copy of production

The last piece of setup advice is specific to Jira's shape, and it is a
correction of the instinct people arrive with.

The instinct is to copy a real project so the test data is realistic. That
copies the permission scheme, the notification scheme, and often the
automation rules, which means your rehearsal fires real automation at real
people. It is the worst of both worlds: fake work, real consequences.

Create an empty project instead, with its own workflow and a notification
scheme that reaches nobody but you. Then attach, one at a time, the specific
things you want to observe. Add one post function and watch it fire. Add one
automation rule and watch it chain. Transition an issue and read what
arrived in your own mailbox. Half an hour there tells you more about your
Jira than a week of reading configuration screens, and every surprise happens
where nothing is listening.

Then take the read-only charter to the real project and leave it there for a
month. A bot that has never written anything to Jira and produces a correct
stuck-work report every morning is already worth more than most of the
automation attached to your transitions.

## Reproduce every count in the report before you act on a row

Give the reports a check that can actually fail. Take the first Monday report,
paste each charter query into Jira as yourself, and compare row counts. Two
numbers per query, written down. If your count is higher, the bot's account
cannot see something: issue security, a project role, or a scheme. If the
bot's is higher, the queries are not the ones you approved. Repeat a month
later, because group membership drifts and nothing announces it.

After that, most problems arrive as one of these.

| Symptom | Cause | What to check | Fix |
|---|---|---|---|
| Issue shows Done and still matches open filters | A status set without the transition carrying the resolution post function | The workflow transition, not the ticket | Move it through the real transition, and keep the bot out of transitions |
| The bot's count is lower than yours | Issue security or a scheme hiding rows from its account | That account's project roles and groups | Fix the account, and make the report state its scope every run |
| Issues appeared in another project overnight | An automation rule chained off a transition | The project's automation rule list | Remove transition permission, then read the rules |
| Mail arrived at 3am for people not on the issue | The notification scheme expanded roles, groups, and watchers | The scheme, with every group expanded | Cap volume in the charter and digest to one person |
| An SLA figure moved and no work moved | A transition started or stopped a clock at the wrong moment | The SLA start and stop conditions | Nothing recovers elapsed time. Keep the bot out of service management workflows |
| Every query returns nothing and the report reads clean | An empty result treated as a clean bill of health | Whether the project key and status names still exist | Require the report to separate zero rows from a query that failed |

The last row goes unnoticed longest, because a quiet report looks exactly like
a healthy project.

**Keep reading:** [How to Build a Grok Bot That Can Clean Up Stale Docs](/blog/grok-bot-to-doc-cleanup), [How to Build a Grok Bot That Can Screen Job Applicants](/blog/grok-bot-to-hiring-screening), [How to Build a Grok Bot That Can Triage Your Inbox](/blog/grok-bot-to-inbox-triage).

## Frequently Asked Questions

### Should a Grok Bot Jira integration transition issues?

Not without an explicit audit of what is attached to that workflow, and for
most teams the honest answer is no. A Jira transition is not a field update,
it is a trigger: post functions set fields, automation rules fire and chain,
webhooks reach systems outside Jira, notification schemes mail everyone in
the relevant roles, and service management SLA clocks start or stop. Moving
the issue back changes only the status. The mail is delivered, the webhook
posted, and the sprint report recorded a completion. Have the bot report what
should move and let a person move it.

### What Jira permissions does a reporting bot need?

Browse project access on the specific projects it reports on, plus the
ability to run searches, and nothing else. Refuse edit, transition, comment,
bulk change, sprint and version management, project administration, and
delete, which in most configurations is permanent with no recycle bin.
Remember that a bot inherits the access of the account it authenticated as
and Jira permissions are granted per project through schemes, so use an
account created for this purpose rather than an administrator login, and
check which groups that account belongs to before you connect anything.

### Can JQL make a Jira bot safe to run unattended?

It makes it verifiable, which is most of the way there. A JQL query is
declarative and reproducible, so you can paste the same query into Jira and
see exactly the rows the bot saw, which is a stronger check than trusting a
description of what it looked at. Write the queries into the charter as a
fixed allowlist rather than letting the bot compose them, so the reads stay
auditable over time. The caution is that the same query can drive a bulk
change, so grant search without granting the write permissions that bulk
operations require.

### Why should a bot not comment on Jira issues?

Because a comment is a message from your organisation to everyone the
notification scheme reaches, and those recipients are defined by role rather
than by name, so the audience is larger than the participants and includes
watchers who subscribed during an incident years ago. In a service management
project the internal note versus public reply distinction is a control the
bot can get wrong, which puts a machine's guess in front of a customer.
Deleting the comment later does not help, since the notification already went
out with the full text. Paste the analysis yourself instead.
`,
};
