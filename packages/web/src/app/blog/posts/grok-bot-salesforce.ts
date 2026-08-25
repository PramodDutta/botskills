import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Salesforce: Permissions and What to Automate',
  description:
    'A Grok Bot Salesforce setup built on reports instead of record writes: object and field permission families, why field history will not save you, and a safe charter.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Salesforce: Permissions and What to Automate

Ask a Salesforce admin what happened to a field value three weeks ago and
watch the answer arrive in two parts. The first part is confident: Salesforce
tracks everything, check field history. The second part is quieter: as long
as someone enabled tracking on that specific field, on that specific object,
before the change, and the retention window has not passed, and the field
type is one that stores its values.

Most of the time at least one of those is false. So the ordinary failure in a
CRM is not a deleted record, because deletion has a recycle bin and a recovery
story. It is a field that used to say one thing, now says another, and has no
evidence of ever having said the first. Amount. Close date. Stage. Email.
Owner. The record looks complete and maintained, and your forecast is wrong.

That is the failure a Salesforce bot is best positioned to cause, so it is the
one the setup designs around.

## Treat a quiet field overwrite as the failure to design around

Deleting a Salesforce record is loud and recoverable. It leaves the list view,
the recycle bin holds it for a limited window (commonly fifteen days), and
someone notices because their report count dropped.

Overwriting a field is neither. Nothing leaves any view, no count changes, and
a close date moves from March to June while the pipeline report simply says
something different than it said yesterday. If one run touched four hundred
records, the change is not individually visible at all: it is a shape change
in an aggregate somebody will rationalise as normal movement.

Rank the operations by that pair, recoverability and visibility, and the order
is not the one people expect.

| Operation | Where the previous value goes | How you get it back | Odds anyone notices |
|---|---|---|---|
| Delete a record | The recycle bin, for a limited window | Restore it | High. Report counts drop and someone asks |
| Overwrite a field | Field history, but only if tracking was enabled on that field in advance | Retype it, if you know what it said | Very low. Nothing leaves any view |
| Bulk update four hundred records | The same place, four hundred times | Nothing practical | Very low. It reads as normal pipeline movement |
| Merge duplicate records | Folded into a surviving record, with the losing values not preserved in a form you can pick apart | Rebuild by hand from an export you hopefully took first | Medium. The record count moves |
| Change record owner | The field, plus sharing, forecast rollup, and assignment rules | Set the field back, after the notifications and rollups have fired | Medium. Whoever lost the record notices eventually |
| Edit a shared report definition | Nowhere. No record changed at all | Rebuild the filter from memory | Very low. The team just sees a different number |

This is the inverse of most tools. In a git repository the destructive action
is loud and the additive action is quiet. In Salesforce the destructive action
is quiet and looks like maintenance. Any bot design that assumes writes are
fine and deletes are dangerous is exactly backwards here.

## Field history is opt-in, capped, and rarely on the field you need

Field history tracking is a real feature and worth turning on. It is also
worth understanding precisely, because people treat it as an always-present
audit log and it is not.

It is enabled per object and then per field, by an administrator, in advance.
It has a cap on how many fields you can track on an object, so on a heavily
customised Opportunity somebody already chose which fields matter, and they
chose for reporting reasons rather than for recovering from an automated
write. Retention is limited and varies with your edition and whether you have
an audit add-on, so old changes age out. Some field types never store their
old and new values at all, recording only that a change occurred, which is the
least useful outcome available when you are trying to restore a value.

Then the problem that shows up everywhere else on this platform: attribution.
All bots on a Grok account share one persistent cloud computer, and browser
sessions and signed-in credentials are shared across every bot on it. The
documentation says outright that separate bots are not a security boundary. A
write made through your session is recorded as your write, so history will
faithfully report that you changed four hundred close dates at 3am, and as of
writing there is no audit view of bot actions to check it against.

The conclusion is not "turn on more tracking". It is that recovery is not the
plan. Prevention is.

## Half a write is the normal failure here

The second Salesforce-specific hazard is that a write which fails partially
looks a lot like one that succeeded, and Salesforce has more ways to partially
fail than almost anything else you will connect.

A save passes through validation rules, duplicate rules, triggers, flows, and
required fields, and any one can reject a record. When a bot submits a batch,
the outcome turns on a setting most people never think about: either the whole
batch rolls back on one failure, or the successes commit and the failures do
not. The second is the default in a lot of tooling, and it produces the state
you least want, one hundred and eighty records updated and twenty not, with no
marker for which is which.

One gotcha is worth knowing before you let anything write. Fields marked
required on a page layout are a user interface constraint, and a write through
the API does not honour them. Fields required at the field definition level
do. So a bot can create a record a human at the same org could not have
created, missing fields your process assumes are always present, and every
downstream report inherits the gap.

Then the cascade: a write fires triggers and flows, which write other records,
which fire more automation, which can send email alerts. A bot that updates a
stage may have caused six other things to happen in systems it never touched.
None of them roll back when you fix the field by hand.

## Assemble the access model layer by layer, because permission sets only add

Salesforce access is assembled from several layers, and the one that matters
most for a bot is the layer people describe last.

| Layer | What it decides | Does it ever reduce access | The mistake it produces |
|---|---|---|---|
| Profile | The baseline for objects, fields, and system permissions | Yes. It is the floor everything else builds on | A generous profile nobody has re-read, sitting under a careful permission set |
| Permission set | Extra grants layered on the profile | No. Permission sets grant and never revoke | A least-privilege set assigned to a permissive user, mistaken for a restriction |
| Object permission | Whether records of that type can be read, created, edited, or deleted at all | Only by being absent | Edit granted because the profile was built for a human who needed it |
| Field level security | Per-field read and edit | The narrowest real control you have | Hidden fields read as blank, so the bot reports a populated record as empty |
| Organisation wide defaults | The floor for which records are in scope | Yes, and everything else opens it up from there | Assuming it is private because somebody said so years ago |
| Role hierarchy, sharing rules, teams, manual shares | Which specific records the account can reach | No. All four only widen | A bot scoped to one team reaching the whole pipeline through a rule |
| View All Data and Modify All Data | Everything, sharing ignored | They override the entire sharing model | Connecting an admin login and believing a charter narrows it |
| API Enabled | Whether the account can be used by an integration at all | Removing it stops every integration on that account | Enabling it on a user whose profile already grants far too much |

The second row is the one that catches people. Permission sets grant and never
revoke, so a carefully minimal set attached to a user whose profile already
allows editing Opportunity has restricted nothing at all.

View All Data and Modify All Data earn a second mention. They exist for
administrators and they turn every carefully designed sharing rule into
decoration. A bot should never hold either, and if the account you connect has
them, the bot has them too, because a connector acts as the user it
authenticated as.

That last sentence is the whole permissions decision. The bot has no access
level of its own, it inherits whatever account signed in. So the real control
is a dedicated integration user built for this job, not a carefully worded
charter attached to your admin login. The general form of that argument is in
[why every bot needs a boundary](/blog/grok-bot-boundaries).

It also decides the connection route. Confirm in the app whether a Salesforce
connector is available for your account rather than assuming, since
availability changes. Without one, an MCP server exposing the org keeps hosted
sign-in tokens with the provider's backend instead of on the machine the bot
runs on. A browser login handoff works too and hands over exactly the profile
of whoever signed in, so an administrator session gives the bot View All Data
and Modify All Data whatever the charter says about restraint.

## Read the permission set you are assigning, family by family

Names and groupings vary by edition and by how customised your org is. Read
the profile or permission set you are actually assigning rather than trusting
a list.

| Permission family | What it grants | Worst realistic outcome if the charter is wrong |
|---|---|---|
| Object read | Records of that type that sharing allows | Pipeline, contacts, and notes flow into the bot's context and into anything it writes on the shared computer. |
| Object create | Insert new records | Duplicate accounts and opportunities that pollute reports and route to the wrong owners. |
| Object edit | Change any field it can edit on records it can reach | A field overwritten with no history entry. The record still looks maintained. |
| Object delete | Remove records to the recycle bin | Recoverable within a limited window, and loud enough to be noticed. Genuinely less dangerous than edit. |
| Field level security, read | Per-field visibility | Compensation, margin, or personal fields readable because nobody revisited field security after the last customisation. |
| Field level security, edit | Per-field writability | The narrowest useful control in Salesforce, and the one worth an hour of your time. |
| View All or Modify All on an object | Reach every record of that type, sharing ignored | The bot works on the whole org's pipeline when it was scoped to one team. |
| View All Data | Read everything, sharing ignored | Total read exposure from a single checkbox. |
| Modify All Data | Write everything, sharing ignored | The most dangerous permission in the product. Never on an integration user. |
| API Enabled | Lets the account be used by an integration at all | Without it nothing connects. With it, everything above is reachable programmatically. |
| Reports and dashboards | Create, run, and modify reports | A modified shared report changes what a whole team believes, and it is easy to miss. |
| Manage users, permission sets, sharing rules | Administer access | The bot can widen its own access. |
| Setup and configuration | Objects, fields, flows, validation rules | The safety rails become editable by the thing they constrain. |

Two rows carry most of the risk and neither sounds alarming. Field level
security edit is where a quiet overwrite becomes possible, and being per-field
it is where an hour of configuration does the most good. Reports and
dashboards sounds like read access and is not: editing a report definition
changes what everyone sees without touching a single record.

## Record ownership is a routing decision wearing a data field

Owner looks like another field on the record. It behaves like an org-wide
routing switch.

Ownership drives sharing through the role hierarchy, so changing it can
silently remove a record from someone's view. It drives forecast rollups, so
moving records between owners moves numbers leadership reads. It frequently
triggers assignment rules and notification emails. In territory based orgs it
interacts with territory assignment in ways the record alone will not predict.

A bot that reassigns ownership is not editing a field, it is reorganising who
can see what and whose number changed. It also does it in bulk, because the
point of automating reassignment is that there are many records, so the blast
radius scales with the usefulness of the feature.

Leave ownership alone. If reassignment is genuinely the job, have the bot
produce a proposed list with a reason per row and let a human run the
transfer. Same shape as the catalog's [lead scout](/bots/lead-scout), which
researches and ranks and never contacts anyone: the ranking is the
deliverable, the action is yours.

## Ship a report instead of a record, because a report changes nobody's view

Here is the reframing that makes a Salesforce bot worth having.

A record is shared state. Everything in the org points at it, automation fires
on it, and changing it changes what other people see. A report you receive is
yours: a timestamped snapshot that names its own sources, changes nobody's
view of the pipeline, and costs you a delete if it is wrong.

Almost everything people want from a CRM bot exists in report form. Which
deals are stale. Which accounts have no activity in thirty days. Which
opportunities close this month with missing fields. Which contacts have
bounced. Where the same company exists twice under different names. All
analysis, and analysis needs write access to nothing.

The version people reach for instead is the bot that fixes those things,
filling missing fields, merging duplicates, updating stale stages. It is more
satisfying and it is where every unrecoverable outcome in this article comes
from. Merging deserves singling out: it picks a surviving record and folds the
others in, and the losing records' values are not preserved in a form you can
pick apart afterwards. That is a judgment about which version of a customer is
true, not a mechanical task, even when it looks like one.

Keep the bot on the analysis side of that line and it can read broadly and
still be safe. The [account expert](/bots/account-expert) pattern does exactly
this: it never messages the customer, and digests and answers stay internal to
you.

## Point the pipeline analyst charter at a read-only integration user

Paste this, fill the brackets, and point it at an integration user with read
access only.

\`\`\`text
You are my Pipeline Analyst for Salesforce. You authenticate as the
integration user [USERNAME], which has read access only. You do not
create, edit, delete, or transfer any record.

// WHAT YOU OWN
Every Monday at 07:30 [TIMEZONE], read Opportunity, Account, Contact,
Task, and Event records for [TEAM OR ROLE SCOPE] and report:
  STALE     open opportunities with no activity in 14+ days, sorted by
            amount, with owner, stage, close date, days since last touch
  SLIPPING  opportunities whose close date has moved more than once this
            quarter, with each previous value you can see in history
  THIN      opportunities closing in the next 30 days missing any of:
            amount, next step, primary contact, competitor
  DUPES     suspected duplicate accounts or contacts, with the matching
            evidence and the record ids, ranked by confidence
  QUIET     accounts with an open opportunity and zero logged activity
            in 30 days
  UNKNOWN   anything you could not evaluate, and why

// HOW YOU REPORT
One document per run. Every row carries the record id so I can open it.
Never state a field value you did not read this run. If field history
was not available for a field, say "no history available" rather than
inferring what it used to be.
Distinguish "the field is empty" from "I could not see the field", they
have different causes and different fixes.

// WHERE YOU STOP
Never create, edit, delete, undelete, merge, or transfer any record.
Never change an owner, and never propose an owner change as an action,
only as a row in a list I act on.
Never edit, create, or delete a report, dashboard, list view, or filter.
Never modify a field, object, validation rule, flow, or permission.
Never send an email from Salesforce, never log an activity, never post
to Chatter or any feed.
Never contact a customer, a prospect, or anyone outside my team.
If an opportunity looks like it needs urgent action, put it first in the
report and tag me. Urgency never converts into a write.
\`\`\`

The clause separating "empty" from "not visible" earns its place quickly.
Field level security makes hidden fields read as blank to whatever is asking,
so a bot without that instruction will confidently report a fully populated
record as missing half its data.

## Start with the pipeline hygiene sweep

The first setup should be one where you already know what a right answer looks
like, so you can grade it without building anything.

Pipeline hygiene qualifies. You already have a sense of which deals are stale
and which fields go missing, so a week of reports either matches your instinct
or exposes a gap in one of you. Run it a month before widening anything, and
grade each report on one question: how many rows led to someone doing
something? Under a quarter means the thresholds are wrong, not the model.

Second, activity gaps by account: the same read aimed at relationships rather
than deals, which pairs with a [churn watch](/bots/churn-watch) that reports
internally and never pings the customer.

Third, a data quality digest for the admin: fields nobody populates, picklist
values nobody selects, validation rules that fire constantly and are therefore
being routed around. That last one is the most valuable report here and the
least requested, because a rule people route around is a process problem
wearing a data problem's clothes.

Leave for later, possibly forever: bulk field updates, duplicate merging,
ownership reassignment, stage progression, and anything that logs an activity.
Every one is a write, and writes in Salesforce are the operation without an
undo. For the numbers-reporting side of this work,
[automated KPI reporting](/blog/grok-bot-to-kpi-reporting) covers how to make
the figures themselves defensible.

## Answer the case that a CRM bot should fix what it finds

The objection is fair and most admins raise it. A list of forty stale
opportunities somebody has to work through is not automation, it is a chore
that moved. Your admin already runs bulk updates from exported files and
nobody calls that reckless. If the bot identifies the forty correctly,
withholding the write is superstition about the last two percent of the job.

The distinction that survives is not bot versus human. It is whether the
change arrives as a file somebody applied or as an API call nothing recorded.

A bulk update run by an administrator has three properties a scheduled bot
write does not. There is a file, so the old and new values exist outside
Salesforce. There is an operator who saw the row count before pressing go. And
the attention scales with the change, because four hundred rows look like four
hundred rows in a file.

Keep all three and give up nothing. Have the bot produce exactly that file:
record id, field, current value, proposed value, reason. Your admin loads it
with whatever bulk tool they already use. You now have a diff you can keep, a
human who approved the batch, and a way to reverse it, because the previous
values sit in a column rather than in a history setting somebody forgot to
enable.

Where the objection wins ground: a field the bot itself owns. A last-reviewed
timestamp, a bot-generated score, a flag no process reads and no automation
listens for. If you have read the flows on that object and nothing fires,
writing there is genuinely low risk. The rule is not that a bot may never
write. It is that a bot may not write to fields the business believes.

## A sandbox proves your writes, not your data

Salesforce sandboxes are genuinely useful and they are the right place to test
anything before it touches production. Just be clear which half of the risk
they cover.

A sandbox tells you whether a write passes validation, whether it trips a
duplicate rule, which flows fire, and whether the cascade does something you
did not expect. That is exactly the class of failure described above.

It will not tell you whether the bot's judgment is right, because sandbox data
is a copy or a subset and often an old one. A bot that classifies a deal as
stale correctly there can still be wrong against your live pipeline, where the
messy cases live. And it says nothing about the permission set you will assign
in production, because those are different orgs with different drift.

Use the sandbox to prove the mechanics and a month of read-only production
reports to prove the judgment. In that order, with nothing writing until both
have passed.

## Prove the report is complete before you act on a single row

A bot's Salesforce report fails silently in both directions: it misses records
the account cannot see, and it calls a field empty when the field is merely
hidden. Both produce a confident, wrong document. Give the first report three
checks that can fail.

Run the same filter yourself as an ordinary Salesforce report and compare row
counts. Pick one record you know is restricted from the integration user and
confirm it is absent rather than assuming. Then pick one field you know is
populated and see whether the bot called it empty. Ten minutes, once, and it
settles the two failure modes that otherwise take a quarter to surface.

| Symptom | Cause | What to check | Fix |
|---|---|---|---|
| Fields the bot calls empty are populated | Field level security hides them, and hidden fields read as blank | The integration user's field permissions on that object | Grant read on exactly the fields the report needs, and make the bot separate empty from not visible |
| The bot's count is lower than yours | The sharing model, not a bug. It sees only what is shared with that user | Organisation wide defaults and which sharing rules reach it | Widen deliberately, and require the report to state its scope every run |
| A batch reported success and twenty records did not change | Partial commit: successes committed, failures rejected, no marker on either | The per-record result from that run, if anything kept one | Stop writing. If you must write, demand a per-record result file |
| Records exist that a human could not have created | Fields required on a page layout are a user interface constraint an API write does not honour | Whether the field is required at field definition level or only on the layout | Enforce it at the field definition, or do not create records at all |
| Field history says nothing about the field you need | Tracking was never enabled on it, or retention aged the change out | The object's tracked field list and your retention window | Accept that recovery is unavailable here, and prevent instead |
| The pipeline number changed and no record was edited | Somebody modified the shared report definition | The report's filter and who last modified it | Refuse report modification in the permission set, not only in the charter |

The last row catches teams who did everything else right. A report definition
is shared infrastructure, and the permission covering it does not look like a
write permission at all.

**Keep reading:** [Grok Bot and Airtable](/blog/grok-bot-airtable), [Grok Bot and Discord](/blog/grok-bot-discord), [Grok Bot and GitHub](/blog/grok-bot-github).

## Frequently Asked Questions

### Should a Grok Bot Salesforce integration be allowed to edit records?

Not at the start, and for most setups not ever. Overwriting a field in
Salesforce usually leaves no usable trace: field history has to be enabled
per object and per field in advance, it has a per-object cap, retention is
limited, and some field types never store their old values. Deletion is
actually the safer operation because the recycle bin holds records for a
short window and someone notices the missing rows. Have the bot read and
report, and let a person make changes that other people's forecasts depend
on.

### What Salesforce permissions does a reporting bot need?

Object read on the objects it reports on, field level security tuned so it
can read only the fields it genuinely needs, API Enabled so it can connect at
all, and nothing else. Refuse create, edit, and delete on every object,
refuse View All Data and Modify All Data, refuse report and dashboard
modification, and refuse anything under user or sharing administration.
Assign it to a dedicated integration user rather than your own login, because
a connector inherits the access of whichever account authenticated, and
permission sets only add access, they never remove what a profile already
grants.

### Why can a Salesforce bot fail halfway through a write?

Because every save passes through validation rules, duplicate rules,
triggers, flows, and required fields, and any one of them can reject an
individual record. When records are submitted in a batch, a common
configuration commits the successes and rejects the failures rather than
rolling back the whole set, so you end up with part of an update applied and
no obvious marker of which part. Writes through an integration also ignore
fields that are only required on a page layout, so a bot can create records a
human at the same org could not.

### Are Salesforce reports safer for a bot than record updates?

Yes, and it is the single most useful reframing for this integration. A
report you receive is a timestamped snapshot that changes nobody's view of
the pipeline, so a wrong one costs you the time to read it. A record is
shared state: automation fires on it, forecasts roll up from it, and other
people see the change. Almost everything asked of a CRM bot, including stale
deals, missing fields, activity gaps, and duplicate detection, is analysis
that needs no write access at all. Modifying a shared report definition is
the exception, so forbid that too.
`,
};
