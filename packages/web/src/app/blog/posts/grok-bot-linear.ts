import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Linear: Permissions and What to Automate',
  description:
    'A Grok Bot Linear setup that triages without moving the board: what a status change signals to your team, the token scope families, and a labels-only charter.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Linear: Permissions and What to Automate

Linear's central design argument is that the tracker should never be the slow
part of the work. Every action is a keystroke. Nothing has a confirmation
dialog. You move an issue from Todo to In Progress in the time it takes to
think about moving it, and the interface gets out of the way immediately.

That is a genuinely good product decision and it creates a specific blind
spot when you add a bot. Because the action is instant and costs you nothing,
it reads as cheap. It is not cheap. It is cheap for you. For everyone else on
the team, that keystroke changed which column your issue sits in, pushed a
notification into somebody's inbox, told your teammate their thing is now
being worked on, and adjusted a graph that gets used in a planning
conversation on Friday.

So the question for a Linear bot is not what it is technically able to do.
Linear will happily let a token do all of it. The question is which of those
actions are statements to other humans, because those are the ones a bot
should not be making on your behalf.

## Speed is why Linear bots overreach

Watch what people build first in every tracker and the pattern is identical:
a bot that keeps the board tidy. It closes issues that look finished, moves
stale ones back to backlog, bumps priorities, reassigns anything sitting with
someone on holiday.

In a slow tracker that instinct dies on contact with the interface, because
each of those actions costs six clicks and a page load and you give up. In
Linear it survives, because the API is clean and the actions are trivial. So
Linear is where the tidy-board bot actually gets built, and where it does the
most damage per unit of effort.

The damage is not corrupted data. The damage is that the board stops meaning
anything. A board is a shared belief about what is happening. Once a machine
is moving cards for reasons nobody can reconstruct, your teammates stop
reading it as a description of reality and start reading it as a system that
has to be periodically corrected. You can be back at that point within two
weeks, and getting out of it takes longer than getting into it.

## Read each state category as a message to your team

Linear's workflow states group into categories: backlog, unstarted, started,
completed, and cancelled. The API makes those look interchangeable. Socially
they are four different sentences.

| Moving an issue | What it tells the team | What moves with it | What setting it back recovers |
|---|---|---|---|
| Into started | A person is working on this now | The active view, usually an assignee, and in many workspaces the issue is pulled into the current cycle automatically | The field. Not the sprint scope you just changed |
| Into completed | The work is done, which is a claim about reality | It leaves everyone's active view and counts toward the cycle's completed total | The field. Whoever filed it already stopped waiting |
| Into cancelled | We decided not to do this | The issue leaves the queue, and when it came from a customer report the decision was about a customer | The field. The decision has been read |
| Back to backlog | This is not a priority now | It comes off somebody's plate without a conversation | The field. The judgment landed and was resented |

The last row is the one people underestimate. It looks like the gentle option
and it reads as a verdict on someone else's priorities.

None of the four are reversible in the sense that matters. You can set the
state back in a second, and the notification is already delivered, the cycle
graph already recorded the change, and the person already read it. The state
field is reversible. The communication is not.

## Labels are cheap, status is social

Here is the split that should drive your whole Linear setup, and it is
unusually clean in this tool.

Some fields describe the issue. Some fields direct people. Labels, and any
custom classification you have added, are description: they say what kind of
thing this is. Removing a wrong label costs a keystroke, it does not appear
in anybody's list of things demanding attention, and in most default
configurations a label change lands in the issue's activity feed rather than
in someone's notification inbox. Confirm that in your own workspace settings,
because notification behaviour is configurable, but the general shape holds.

Status, assignee, priority, cycle, project, and estimate are direction. Each
one changes what somebody is expected to do, or changes a number used to
decide what a team can take on. Each one produces a notification for the
people subscribed to the issue.

Sorted that way, the whole permission question resolves itself.

| Write | Description or direction | Who hears it | What undoing it recovers | Bot may do it |
|---|---|---|---|---|
| Add or remove a label | Description | The issue's activity feed, in most default configurations | Everything | Yes |
| Custom classification field | Description | Same | Everything | Yes |
| Change status | Direction | Every subscriber | The field, not the message | No |
| Assign or reassign | Direction | Both assignees | The field. The interruption stands | No |
| Set priority | Direction | Subscribers | The field. Somebody already reordered their day | No |
| Set an estimate | Direction, and a number in a planning chart | Nobody, which is the problem | The value. The chart already moved | No |
| Move between cycles or projects | Direction, and scope for a period being measured | Subscribers | Nothing that matters | No |
| Comment | A message | Every subscriber | Nothing. The notification carried the text | No |
| Mark duplicate, archive, or cancel | A decision | Subscribers and the reporter | The state, never the signal | No |
| Create an issue | Additive | The team's triage recipients | Delete it, in a second | Only once it has earned it |

Give the bot the description rows and withhold the direction rows. That single
line settles most of the design questions you would otherwise argue about, and
it maps onto boundaries already declared in the catalog: the
[PR review sentinel](/bots/pr-review-sentinel) never merges, approves, pushes,
or requests changes, and comments only. Same idea, aimed at a tracker instead
of a repository.

## Keep the bot out of cycles and estimates, because those numbers are history

Linear's cycle mechanics are where an automated write does damage you cannot
see for weeks.

A cycle records what was scoped and what was completed, and those two numbers
are how teams decide what to commit to next time. Move issues into or out of
an active cycle and you have changed the scope figure for a period that is
still being measured. Move an issue after the cycle closes and you have
changed history: a past cycle now shows a different completion rate than it
showed when the team reviewed it.

Estimates make it worse, because estimates feed the same charts. A bot that
helpfully assigns a point value to unestimated issues is not filling in
missing metadata. It is voting on capacity, using a guess, in a number
somebody will later divide by to decide whether the team is behind.

There is no meaningful undo here. You can set the values back, and the graphs
that were screenshotted for a planning meeting are already wrong, and nobody
has a record of what the original estimate was because there was no original
estimate. This is the same class of problem as an overwritten spreadsheet
formula: the artifact renders fine afterwards, so the mistake survives
review.

Keep the bot entirely out of cycle assignment, estimates, and project
membership. If you want an estimate suggested, it goes in a report to you
with the reasoning attached, not into the field.

## Treat duplicate marking and archiving as decisions, not as cleanup

Two Linear operations deserve naming specifically because they look like
cleanup and behave like decisions.

**Marking an issue as a duplicate.** This closes the issue and points it at
another one. It is a claim that two reports describe the same underlying
problem, which is exactly the judgment that a language model is confident and
frequently wrong about, because two issues with similar wording often
describe different failures and two issues with different wording often
describe the same one. You can unmark it, and the close already happened and
the reporter already saw it, and the conversation that would have surfaced
the distinction did not happen. A wrong duplicate does not just close an
issue, it deletes a signal, because the second report was evidence of
frequency.

**Archiving.** Archiving pulls an issue out of active views and default
search. It is recoverable if you know what you are looking for, and the
practical effect is that the issue leaves the shared field of view, which for
a backlog item is functionally the same as deleting it. Deletion proper goes
to a trash area with a retention window you should check in your own
workspace rather than assume.

Neither belongs to a bot. Both are excellent things for a bot to propose in a
list you scan in four minutes.

## Scope the token, then check the membership sitting behind it

Linear supports both personal keys and application authorisation, and the
difference matters more than the naming suggests.

A personal key acts as you. It carries your membership of every team in the
workspace and every permission you hold, including in teams the bot has no
business reading. There is no way to narrow a personal key to one team by
choosing a smaller option, because there is no smaller option. If the only
credential you can create is a personal key, the person it belongs to should
be an account created for this bot with membership of exactly one team.

Application authorisation asks for capability families, and you approve them
on a consent screen. Names differ and change, so read the screen you are
shown and map it onto these families.

| Scope family | What it grants | Worst realistic outcome if the charter is wrong |
|---|---|---|
| Read | Every issue, comment, project, document, and attachment the authorising account can see | Customer reports and internal discussion flow into the bot's context and onto the shared computer it runs on. |
| Create issues only | Filing new issues, nothing else | Duplicate filings that bury the triage queue. Annoying, entirely reversible. |
| Create comments only | Posting comments, nothing else | Every subscriber on the issue gets notified. Volume is the failure here, not content. |
| Write | Editing issues: status, assignee, priority, labels, estimates, cycle, project, relations | A tidied board nobody trusts, plus cycle and estimate history that is now fiction. |
| Admin | Workspace settings, teams, members, workflow states, integrations | The workflow itself becomes editable by the thing the workflow was constraining. |
| Per-team membership (not a scope, but the real limit) | Which teams the authorising account belongs to | A bot scoped to support reads engineering, or a private team, because the account it uses is in both. |

The last row is the one that catches people. Scopes decide what kinds of
action are possible. Membership decides which issues exist as far as this
credential is concerned, and it is set on the account rather than on the
consent screen. Getting the scopes right and using an account that sits in
eleven teams gives you a narrow bot with a wide view. The general version of
this reasoning is laid out in
[what Grok Bot permissions actually mean](/blog/grok-bot-permissions-explained).

## Count the audience before you decide what the bot may write

Before you decide what the bot may write, work out who finds out. Linear
subscribes people to issues automatically as they interact, so the audience
for any given write is larger and less predictable than the assignee field
suggests. Creators, assignees, previous assignees, anyone who commented, and
anyone who subscribed deliberately are all in scope.

Practically, that means a bot commenting on forty issues in a nightly sweep
does not produce forty notifications. It produces forty times the average
subscriber count, delivered at 3am, to people who did not opt into a robot.
The first morning is confusing. The second morning people mute the project,
and once a project is muted the notification channel is dead for real
messages too.

So the volume rule matters as much as the permission rule. One comment per
issue per run, at most. A daily digest sent to you instead of a per-issue
comment, wherever a digest carries the same information. And a hard cap in
the charter, because the failure here is quantitative and a model has no
sense of how many notifications is too many. The
[standup scribe](/bots/standup-scribe) in the catalog takes the strictest
version of this: it posts only to your own DM, never to a shared channel.

## Run the triage groomer from a closed list of labels

Linear gives you something most trackers do not: a triage inbox that is
explicitly a staging area, where issues arrive from integrations and support
before they are accepted into a team's board. That is the correct place for a
bot, because everything in it is already understood to be unsorted.

\`\`\`text
You are my Triage Groomer for the [TEAM] team in Linear. You classify.
You do not schedule, assign, or resolve.

// WHAT YOU OWN
Twice a day at 09:00 and 16:00 [TIMEZONE], read every issue in the
Triage inbox that you have not already processed. For each one:
  1. Apply labels from this list only, at most three per issue:
     type/bug type/feature type/question
     area/api area/web area/billing area/docs
     severity/high severity/low
     needs-repro unclear
  2. Add nothing else. No status, no assignee, no priority, no
     estimate, no cycle, no project, no relations.

// THE DIGEST YOU SEND ME
After each run, send me one message containing:
  NEW       count processed, broken down by the labels you applied
  DUPES     issues you believe duplicate an existing one, with both
             ids, the specific overlapping detail, and a confidence
             word: likely, possible, weak. Never mark a duplicate.
  URGENT    anything mentioning data loss, a security concern, a
             payment failure, or more than one affected customer
  UNCLEAR   what you labelled unclear, with the one question that
             would resolve it
  STALE     issues that have been in Triage more than 5 days
Cap the digest at 400 words. If there is nothing worth reporting,
say "nothing new" and stop.

// WHERE YOU STOP
Never change an issue's status, including moving it out of Triage.
Never assign, unassign, or reassign anyone.
Never set or change priority, estimate, cycle, or project.
Never mark an issue as duplicate, and never archive, cancel, close,
or delete anything.
Never comment on an issue. Your output is the digest to me.
Never create an issue.
Never use a label that is not on the list above. If none fit, use
unclear and tell me which label you wanted.
Never touch any issue outside the [TEAM] Triage inbox.
\`\`\`

The label allowlist is doing real work. Given an open vocabulary a
classifier invents labels, and Linear will create a new label rather than
refuse one, so within a month you have four labels that all mean bug and
nobody can filter reliably again. Ten labels, plus an honest unclear option,
outperforms a rich taxonomy every time. Without the unclear escape hatch,
every ambiguous issue receives a confident wrong label instead.

## Triage the inbox, never the board

Sequence the rollout so that the risky capabilities are the ones you never
get around to needing.

**Week one: classify triage, digest to you.** Exactly the charter above.
Grade it on one number: what fraction of its labels did you keep. Under
eighty percent and the vocabulary is wrong, not the model.

**Week two or three: the stale sweep, as a list.** Issues in progress with no
update in ten days, issues assigned to someone with nothing else moving,
issues in the current cycle that have not started with three days left. All
of it lands in a report. You move the ones that need moving, in one sitting,
in about four minutes.

**Later, if it earns it: filing from other systems.** Creating issues is the
one write worth considering, because a duplicate filing is fully reversible
and the alternative is a support report nobody wrote down. Require a
deduplication check against open issues first, and require the issue body to
quote the source rather than paraphrase it.

**Never, in any week: status, assignee, cycle, estimate, duplicate marking,
archive.** If the report keeps telling you the same thing every week, the fix
is a process change, not a wider grant. If you are running several
engineering bots at once, the
[engineering agent manager](/bots/engineering-agent-manager) exists for that
coordination layer and declares the same shape of boundary. And when the
bot's real subject is code rather than tickets, the
[GitHub setup](/blog/grok-bot-github) covers the repository side, where merge
and force push are the two lines that matter.

## Answer the objection that a tidy board is worth the notifications

The counter-argument is stronger here than in slower trackers, so state it
properly. A board where half the started column has not moved in a month is a
board nobody reads, and once nobody reads it the tracker has stopped doing its
only job. A bot that closes obviously dead issues and pushes stale ones back
buys that meaning back every week, for the price of some notifications people
will get used to. Notifications are cheap. A dead board is not.

The first half of that is true. The pricing is where it fails.

You do not pay the notification cost, your team does, and the currency is not
annoyance, it is trust in the channel. Once someone mutes a project because a
machine writes to it nightly, they have muted it for the real messages too,
and nobody tells you they did it. That cost lands once and does not come back
when you tune the bot later.

The second problem is that a weekly correction hides a process fault
permanently. A column that fills with stale issues is telling you something
about how work is started, or about who is expected to close things, or about
a status nobody exits. A bot that keeps sweeping it makes the signal
disappear while the cause stays exactly where it was.

And the reversed shape keeps the win. The bot picks out the eleven issues that
need moving from six hundred and lists them with a reason each. You move them
in one sitting, in five minutes, with your name on the change. The board stays
meaningful and the notifications come from a person who read the issue.

Where the objection wins: a workspace where you are the only member, so you
are the only subscriber and the only reader of the cycle graph. There a status
write is a note to yourself and none of this applies.

## Choose the connection route by where the token ends up

Connector availability changes constantly, so check what is actually
available in the app for your account rather than trusting any list,
including this one. If a Linear connector exists for you, connect it and read
the consent screen against the scope table above.

If there is not one, you have two routes and they have different footprints.
An MCP server, if one is available for Linear, keeps hosted sign-in tokens
with the provider's backend rather than leaving them on the machine the bot
runs on, which is the cleaner option. Driving the web app in a browser with a
login handoff also works and carries a consequence worth understanding: all
bots on a Grok account share one persistent cloud computer, and browser
sessions on it are shared across every bot, so a Linear session opened by one
bot is reachable by all of them and survives deleting the bot that opened it.
Static egress addresses can also trigger sign-in challenges, so expect
occasional friction on that route.

Whichever path you take, the boundary is unchanged, because it is a property
of your workspace rather than of the connection. Labels are description.
Status is direction. The bot gets description.

## Grade the bot on the labels you kept, not the labels it applied

There is one number that tells you whether a triage groomer is working, and it
is not accuracy as the bot reports it. After each of the first ten runs, look
at the issues it labelled a day later and count how many of its labels are
still there. That is the keep rate, it is a check that can fail, and eighty
percent is the line. Below that, the vocabulary is wrong, not the model, and
widening the list makes it worse rather than better.

Run one day of triage manually alongside it before you stop watching. Label
twenty issues yourself without reading the digest, then compare. Disagreements
cluster, and the cluster names the label you need to rewrite.

| Symptom | Cause | What to check | Fix |
|---|---|---|---|
| Labels multiply until filters stop working | An open vocabulary. Linear creates an unknown label rather than refusing it | The team's label list, newest first | Close the list in the charter, then delete the strays yourself |
| The bot reads issues from teams it should not | A personal key inherits its account's membership of every team | The account's team memberships, not the scopes | Move the bot to an account that belongs to exactly one team |
| Notifications arrive at 3am | Auto-subscription plus a per-issue write in a scheduled run | The run time and the write type | Digest to one person, and cap volume in the charter |
| A closed cycle's completion rate changed | Issues moved into or out of a cycle after it ended | The cycle's scope history | Keep the bot out of cycles. The graph does not restore |
| Almost everything comes back unclear | The vocabulary does not match the work actually arriving | The last twenty triage issues against your ten labels | Rewrite the list from the issues, not from the taxonomy you wanted |
| Duplicate proposals are mostly wrong | Wording similarity standing in for the same underlying failure | The specific overlapping detail in each proposal | Require that detail plus a confidence word, and act only on the strong ones |

The keep rate is worth tracking even after the bot is settled, because it
drifts when the work changes. A team that starts shipping a new surface will
push the rate down within a fortnight, and that is the signal to add one label
rather than five.

**Keep reading:** [How to Build a Grok Bot That Can Prep For Meetings](/blog/grok-bot-to-meeting-prep), [How to Build a Grok Bot That Can Digest Your Newsletters](/blog/grok-bot-to-newsletter-digest), [How to Build a Grok Bot That Can Review Pull Requests](/blog/grok-bot-to-pr-review).

## Frequently Asked Questions

### Should a Grok Bot Linear setup be allowed to change issue status?

No, and the reason is social rather than technical. A status change tells
other people something: that work has started, that it is finished, that it
was cancelled, or that someone's priority has been overruled. It also fires
notifications to every subscriber and, in workspaces configured to pull
started issues into the active cycle, changes what is in scope for the
current sprint. Setting the field back afterwards does not un-deliver the
notification or un-record the cycle change. Let the bot apply labels and
report what looks stale, and leave transitions to people.

### What Linear permissions does a triage bot need?

Read access to the team it works in, plus whichever capability family covers
applying labels, and nothing else. Refuse general write access, refuse issue
and comment creation until the bot has earned it, and refuse admin entirely.
The scope list is only half the control: a personal API key acts as the
account that created it and inherits its membership of every team, so a
correctly scoped key on an account sitting in eleven teams still sees all
eleven. Use an account that belongs to exactly the team the bot works in, and
read the consent screen you are shown rather than assuming the grouping.

### Why are labels safe for a bot when other fields are not?

Because labels describe the issue rather than directing a person. Removing a
wrong label takes one keystroke, it changes nobody's workload, and in most
default configurations it lands in the issue's activity feed rather than in
somebody's notification inbox. Status, assignee, priority, cycle, and
estimate all change what a human is expected to do or change a number used
for planning. Give the bot a closed label vocabulary of about ten values plus
an explicit unclear option, since an open vocabulary produces four different
labels that all mean bug within a month.

### Can a bot mark duplicate issues in Linear?

It can propose duplicates and it should not mark them. Marking a duplicate
closes an issue and asserts that two reports describe one underlying problem,
which is precisely the judgment models get confidently wrong in both
directions: similar wording often hides different failures, and different
wording often hides the same one. A wrong duplicate also destroys a signal,
because a second independent report was evidence about frequency. Have the
bot list suspected pairs with the specific overlapping detail and a
confidence word, then spend the two minutes confirming before anything
closes.
`,
};
