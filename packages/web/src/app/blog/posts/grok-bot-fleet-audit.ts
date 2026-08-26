import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Audit the Grok Bots You Already Built Before You Hire More',
  description:
    'Run a grok bot audit existing bots pass: overlapping jobs, shared logins left by deleted bots, routine caps, send-capable plugins, and the seats actually empty.',
  date: '2026-08-26',
  category: 'Guide',
  content: `
# Audit the Grok Bots You Already Built Before You Hire More

Nobody plans a fleet of nine bots. You build one that works, then a second for a
job the first kept drifting into, then three during a week when everything felt
automatable, then two more from a thread you read on a Sunday. Six weeks later
you have a roster nobody wrote down, two bots doing the same job slightly
differently, and a signed-in session belonging to a bot you deleted in July.

The pressure right now is to add. Every demo shows one prompt producing four
named teammates with roles and a hierarchy, and the implied next step is always a
bigger org chart. That pressure is exactly when an audit pays, because a fleet
you cannot describe is a fleet you cannot secure, and hiring on top of it copies
the confusion forward.

This is the audit pass. It produces a report and changes nothing. The
[Stuck Bot Foreman](/bots/stuck-bot-foreman) is the closest catalog listing in
spirit, since it watches siblings and never touches them, and the same discipline
applies here: an auditing bot that can rewire the fleet is a second problem
wearing a clipboard.

## List every named bot, its job, and the verb it must never do

Start with the thing that does not exist yet, which is a written roster. No audit
view of bot actions exists on the platform, so there is no page listing your
bots, their runs, or their permissions. Your roster is whatever you can
reconstruct from the app plus memory, and reconstruction is the first finding.

Three columns per bot, and the third is the one that matters. Name, one-sentence
job, and the verb it must never perform. If you cannot fill the third column from
the bot's own instructions, that bot has no boundary, and "be careful" does not
count.

| Bot | Job in one sentence | Verb it must never do | Boundary written down? |
|---|---|---|---|
| Inbox triage | Sorts and drafts replies to the shared inbox | Never sends | Yes, in its charter |
| Lead scout | Ranks public buying signals into a sheet | Never contacts anyone | Yes |
| Content helper | Writes posts and captions | Unclear | No, says "use good judgement" |
| Invoice chaser | Drafts overdue invoice reminders | Never sends? | Ambiguous, sent once in July |
| Research bot | Summarises competitor pages | Nothing named | No |
| Calendar bot | Books internal meetings | Never invites externals | Partly |

The right-hand column is your audit in miniature. Two "no" rows and one
"ambiguous" row is a normal starting position, and the ambiguous one is the
dangerous one, because a boundary that held once by accident reads as a boundary
that holds. Do this from the app, bot by bot. The bots you forgot are the point
of the exercise.

## Collapse two bots that do one job before you hire a third

Overlap is the most common finding and the easiest to fix. Two bots that both
summarise competitors. A drafting bot and a content bot that both write captions.
An inbox bot and a support bot both reading the same mailbox.

Overlap is not just untidy. Two bots on one job produce two answers with no
tiebreak, so you become the reconciliation step, which is the work you wanted
removed. Both also carry permissions, so the same mailbox is reachable from two
charters and you must read both to know what can happen to it.

| Signal of overlap | What it costs | Action |
|---|---|---|
| Two bots read the same source | Duplicate work, two answers, no tiebreak | Keep the narrower one |
| Two bots write the same artefact | Silent overwrites on a shared machine | Keep one writer, make the other read-only |
| You always ask both then compare | You are the merge step | Collapse into one with a better brief |
| One was built because the other drifted | The drift was a briefing problem | Fix the brief, retire the second bot |
| Both have the same integration attached | Two paths to the same permission | Disconnect the one you use less |

Keep the narrower one. When two bots could own a job, tighter scope is easier to
review, easier to brief, and less likely to wander. Collapsing is not deleting
yet, so mark it and read the next section before removing anything.

## Mark logins that sit in the shared cookie jar after "deleted" bots

Here is the finding people do not expect. Deleting a bot does not remove
shared-computer files or browser sessions. It deletes the bot and its routines,
and it leaves behind whatever that bot signed into.

That follows from the architecture. All bots on an account share one persistent
cloud computer, assigned to your user account rather than to any individual bot.
Each bot gets its own screen, and the documentation states plainly that screens
are separate work surfaces rather than separate security boundaries. Cookies,
sessions, files, and command-line credentials are shared across every bot.

So a bot you deleted in July may have left a session a bot you built in August
can reach. Nothing went wrong; the session was never the deleted bot's. It was
account state on a shared machine.

The audit step is a session inventory, done by hand because nothing enumerates it
for you. Open the browser on the shared computer, list what is signed in, and ask
which current bot needs each one. Anything with no current owner is a leftover,
and signing leftovers out is the cheapest security win available.

Write the finding as a sentence you can act on. Not "old sessions exist" but
"the accounting portal, an ads manager, and a personal social account are signed
in, and no bot on the current roster needs the last two."

## Count routines per bot against the documented cap of fifty

Routines are per bot. A routine assigns a workflow to one bot, the cap is fifty
routines per bot, the app keeps the twenty most recent run records per routine,
and deleting a bot deletes its routines. Nothing here is team-level.

Those numbers make two audit questions concrete. How close is any bot to fifty,
and how many of its routines have not usefully fired in a month?

A bot near the cap is usually a bot doing several jobs, which is the overlap
problem from the other direction. Twenty-eight routines on one bot means most are
variants nobody chose, added during a week when scheduling felt like progress.

| What you find | What it means | Action |
|---|---|---|
| A bot with 30+ routines | It is several bots wearing one name | Split by job, or delete the variants |
| Routines that never produced output | Scheduled into a signed-out session or a dead path | Delete, do not fix |
| Two routines on the same schedule | Duplicate work, or a forgotten retry | Keep one |
| A routine you cannot explain | Added during a burst, purpose lost | Delete it. You will notice if it mattered |
| Run records all showing errors | The job has been failing quietly | Fix the job or retire the bot |

The twenty-record window matters before you investigate. A routine that has
failed for six weeks shows its last twenty attempts and nothing earlier, so the
history you want may be gone. Copy the error text into your notes. And since
retiring a bot takes its routines with it, record what they did before you delete
anything.

## Find plugins that can post or pay and disconnect the unused ones

Integrations accumulate faster than bots. You connect something to try it, the
trial ends, the connection stays. The audit question is not "is this connected"
but "can this send, spend, or publish, and does any current bot need it".

Sort every connection into three buckets and act on the middle one hardest.

| Connection type | Example capability | If no current bot needs it |
|---|---|---|
| Read-only | Reads a doc, a sheet, a page | Low priority, disconnect when convenient |
| Can post or publish | Social scheduler, site deploy, blog | Disconnect now |
| Can send to people | Mail, DM, SMS, ticket replies | Disconnect now |
| Can move money | Payments, ads, subscriptions | Disconnect now, and check for charges |
| Can change code | Repo write, merge, deploy | Disconnect now |

"Disconnect now" is stronger than it looks, because of the shared computer. A
connection is not scoped to the bot that uses it. Hosted sign-in tokens stay with
the backend rather than sitting on the machine, which helps, but a signed-in
browser session there is reachable from any screen. Every send-capable connection
you keep is one every bot has.

There is no product-level spend cap yet either, so a money-capable connection is
bounded by nothing you configured. That makes "we might use it later" an
expensive reason to keep an ads or payments integration attached. Note what you
disconnect, with the date, because you will consult that list in six weeks.

## Refuse a new hire until the coverage map has empty seats, not vibes

Now the rule that gives the audit teeth. A new bot needs an empty seat on a
written coverage map, not a feeling that more capacity would help.

A coverage map is a list of the jobs you actually want done, with the bot that
owns each one. Jobs, not roles. "Chief of staff" is a role and it covers nothing
specific. "Turns Monday's inbox into a ranked list of things needing a reply" is
a job, and you can tell whether it has an owner.

Write the map, then check three things before hiring. Is this job on the map? Is
the seat genuinely empty, or occupied by a bot that drifts because its brief is
vague? And can you write the never-verb before you create the bot?

The third question kills most hires, usefully. If you cannot name what a bot must
never do, you do not yet know what it does. Our
[starter roster](/blog/grok-bot-starter-roster) is a reasonable set of seats to
compare against, and the point of comparing is finding seats you do not need.

Add a cap. Pick the number of bots you will review monthly and treat hiring past
it as a decision to stop reviewing. Most people land between three and six.

## Paste an audit charter that only files a report, never rewires the fleet

Here is a charter for the audit itself. Notice how much of it is refusals: the
auditor's whole value depends on it having no authority.

\`\`\`text
You are my Fleet Auditor. You produce a report. You change nothing.

// WHEN
On demand, and on [the first Monday of each month].

// WHAT YOU COLLECT (from what I paste or what you can read)
For every bot on this account:
  name, job in one sentence, the verb it must never do, whether that
  boundary is written in its own instructions or only in my head,
  integrations attached, routine count, last output date.
If you cannot see a bot's status or instructions, write "not visible"
and say so in the report. Never infer a bot's boundary from its name.

// WHAT YOU FLAG
1. Bots with no never-verb, or a boundary phrased as an attitude
   ("be careful", "use judgement", "be professional").
2. Two or more bots reading or writing the same source.
3. Signed-in sessions on the shared computer that no current bot needs,
   including any left by bots I deleted.
4. Any bot near [50] routines, and any routine with no useful output
   in [30] days.
5. Connections that can send, publish, deploy, or spend, where no
   current bot needs them.
6. Send-capable bots with no exact-text approval gate.

// OUTPUT
One table: bot, job, never-verb, findings, recommendation
(keep / narrow / collapse into X / retire).
Then one short list of the seats on my coverage map that are genuinely
empty. If there are none, say hiring is not justified this month.

// NEVER
Never delete, pause, resume, edit, or create a bot.
Never disconnect or connect an integration.
Never sign anything out, or sign anything in.
Never delete a routine or a file.
Never act on your own recommendation. I do all of it by hand.

// WHEN THE FLEET IS FINE
Say so in three lines and recommend no changes. Do not manufacture
findings to justify the run.
\`\`\`

The last block matters as much as the refusals. An auditor with a monthly slot
and no permission to return a short report will find something, and you will
spend a Saturday on it.

## Walk a six-bot roster from screens to a retire-or-keep table

Here is a real-shaped pass. Six bots, forty minutes, one table at the end.

Opening each bot's screen and reading its instructions takes most of the time.
Two have proper never-verbs. One says "be careful with customer data", which is
an attitude. Two say nothing about limits. One, the invoice chaser, says "send
reminders after approval", which turns out to mean it asked once in July and has
been treating that as standing permission since.

Session inventory next. Seven signed-in sessions on the shared computer. Two
belong to bots that no longer exist, including a social account nobody needs, and
one is a personal login that ended up there during setup.

Routine count: one bot has twenty-two routines, four have between one and three,
and one has none despite being described as a daily briefing bot, which explains
why the briefing stopped in July.

| Bot | Finding | Recommendation |
|---|---|---|
| Inbox triage | Clean boundary, one job, three routines | Keep |
| Lead scout | Overlaps research bot on competitor pages | Narrow to buying signals only |
| Research bot | No never-verb, 22 routines, several jobs | Split, or retire and fold into lead scout |
| Invoice chaser | Treats a July approval as standing permission | Stop it today. Add an exact-text gate |
| Daily briefing | No routines at all, silent since July | Retire. Nothing was lost |
| Content helper | Boundary is "be careful", scheduler attached | Rewrite the boundary, disconnect scheduler |

Six bots in, four out the other side, two sessions signed out, one scheduler
disconnected, and one genuine emergency: the invoice chaser sending on a standing
assumption. That last row is the audit paying for itself, and no amount of hiring
would have surfaced it.

## Diagnose copy-paste charters that all claim "be careful"

The most common defect in an established fleet is not a missing bot. It is six
charters descended from the same paste, all carrying the same non-boundary.

| What the charter says | Why it fails | What to write instead |
|---|---|---|
| Be careful with sensitive data | Not an action, cannot be checked | Never open [account]. Never paste credentials |
| Use good judgement | Delegates the boundary to the model | Never send. Never merge. Never pay |
| Only act when confident | Confidence is not a permission | Ask before any action outside this chat |
| Ask if unsure | The bot decides what unsure means | Ask before every send, on the exact text |
| Do not do anything risky | Risk is undefined | List the three actions that are off limits |
| Follow best practices | Means nothing operationally | Name the practice as a verb |
| Keep me informed | Compatible with acting first | Report before acting, not after |

The test is whether a stranger could tell from the output alone whether the rule
held. "Never post to #general" passes. "Be professional" does not.

Copy-paste has a second symptom worth catching: identical charters produce
identical drift. If four bots share a paste and one of them started doing
something you did not expect, check the other three, because the behaviour came
from shared text rather than from that bot's job. Our
[boundaries guide](/blog/grok-bot-boundaries) covers phrasings that survive an
enthusiastic model.

## Answer the case for Atlas hiring four teammates from one prompt

The strongest argument against auditing: this is bureaucracy applied to
something that is supposed to be cheap. Tools now demo a single prompt producing
four named teammates with roles and handoffs. Spinning up a bot costs a minute.
Deleting one costs less. Auditing six bots costs an afternoon, which is more than
the bots cost to create, so the audit is the expensive part of the system.

The cost argument is right and measuring the wrong thing. Creating a bot is
cheap. The state each bot leaves on a shared machine is not: sessions,
connections, files, and standing assumptions in its instructions. Deletion clears
none of that, so cheap creation plus cheap deletion produces residue nothing
enumerates for you.

The four-teammates demo hides the same fact it makes vivid. Four bots from one
prompt are four screens on one computer sharing one cookie jar. They look like an
org chart and they are one machine with four work surfaces. Any isolation you
infer from the diagram is not there, and the docs say directly not to use
separate bots as a security boundary.

There is a real capability question underneath, and the honest answer is that
child bots and multi-bot teams do work, they just do not partition anything. If
you want the team, run it and audit it. Where the objection wins outright: the
first two weeks, on read-only jobs, on a fresh account with nothing signed in.
Hire freely there, then audit before anything gains a send.

## Verify the audit by picking one retired bot and confirming it is gone

An audit report is a claim, and the cheap way to test it is to follow one
recommendation all the way through and check what actually happened.

Pick the bot you retired. Delete it, then verify the three things deletion does
and does not do. Its routines should be gone, since routines die with the bot.
Its sessions should still be there, because deletion does not remove them, and if
you assumed otherwise this is where you find out. Its files should still be on
the shared computer for the same reason.

| Check | How you run it | Failure looks like |
|---|---|---|
| Bot gone | Look for it in the app | Still listed, or paused rather than deleted |
| Routines gone | Its schedule produces nothing next cycle | An output arrives from a bot you retired |
| Sessions still signed in | Open the browser on the shared computer | You assumed deletion cleaned them |
| Files still present | List the workspace | You assumed deletion cleaned those too |
| No new sends | Check the sent folder for the audit window | Anything you did not send yourself |
| Boundary rewrites held | Re-read the two charters you fixed | The old paste is back |

The sent-folder check is the one to run regardless of what the report said. There
is no audit view of bot actions, so a provider's own sent items are the only
independent record of what left the building.

Do this on the desktop app. Editing, history, testing, and deleting all require
desktop; the iPhone app allows pause and resume only, so an audit conducted from
your phone is a reading exercise.

## Leave Overwatch to clean files, and the foreman to catch stalls

The audit finds three kinds of mess and should only fix one of them. Knowing
which bot owns which mess keeps the auditor from turning into a janitor with
delete permissions.

| Mess | Owner | Boundary that makes it safe |
|---|---|---|
| Stale files, temp folders, filling disk | VM Overwatch | Never deletes a working tree without an approved archive step |
| A bot that quietly stopped producing | Stuck Bot Foreman | Never restarts, edits, or deletes another bot |
| Overlapping jobs, missing boundaries, leftover logins | Fleet audit | Files a report, changes nothing |

The split is not bureaucratic. Each job fails differently, so each needs a
different never-verb. A housekeeping bot that catches stalls starts restarting
things to tidy up. A watchdog that cleans files deletes a directory mid-run. An
auditor with either capability becomes the thing it was built to inspect. Keep
the foreman's registry and your audit roster in one file, because it is the only
durable list of what exists.

## Bring a disruptor in on any plan to "just add a chief of staff"

The recommendation that survives most audits is "add a coordinator", and it is
the one worth arguing with hardest. A chief of staff bot sounds like structure
and often means an extra hop between you and the work, with a new set of
permissions attached.

That argument is a job for the
[Disruptor Advocate](/bots/disruptor-advocate), which exists to disagree on
purpose before a plan hardens. It restates the claim, gives the strongest case
for it cited to your own document, then names missing evidence, irreversible
steps, blast radius on the shared computer, spend with no cap, and any boundary
written as an attitude instead of a verb. It files the dissent privately, never
posts it, and never writes as if it had veto power.

Ask for two cheaper tests. For a coordinator hire those usually look like: route
this week's asks by hand and see whether routing was the bottleneck, or tighten
one existing brief and see whether the drift stops. Both take days and both can
kill the hire. Accept a short dissent when the plan is already narrow, because a
critic that finds ten problems every time is performing.

## Stop hiring while send-capable bots still lack an exact-text gate

The last rule is the hiring freeze condition, and it is a single question: can
any bot on this account send, publish, spend, or merge without you seeing the
exact text or diff first? If yes, that is this week's work and hiring is next
month's.

An exact-text gate is narrow on purpose. Not "ask before sending", which the bot
interprets. Not a standing approval, which is a configuration masquerading as a
decision. Show the recipient, the subject, and the body, then wait. Approve that
one message. The next one asks again.

The mechanic behind the rule: an approval controls the proposed action and does
not reverse work already completed. So an approval that arrives after the send is
a notification. Sequence is the entire control, and no audit trail exists to
reconstruct what happened later.

One coming-soon note, labelled as not shipped: a team-level ceiling on local
execution with Never, Ask every time, and Always options has been described,
where members can choose a stricter option but not a looser one. An admin Kill
action that deletes the VM while keeping durable storage has also been described.
Neither is available to lean on today, which is why the gate lives in each bot's
own instructions and gets re-checked every audit.

Finish the pass with one line at the top of the report: how many bots can act
outside this chat, and how many of those you reviewed text-by-text this month. If
the second number is smaller than the first, you already know what to do before
you hire anyone.

**Keep reading:** [Build a Grok Bot That Fills Your Amazon Cart and Stops Before Checkout](/blog/grok-bot-amazon-cart), [Run a Marketing Audit Bot That Scores Work and Never Publishes It](/blog/grok-bot-marketing-os), [Find People on X Who Already Said They Want to Switch, Then Draft and Stop](/blog/grok-bot-switch-intent-on-x).

## Frequently Asked Questions

### Does deleting a Grok Bot clean up its logins and files?

No, and this is the assumption worth correcting first. Deleting a bot removes the
bot and its routines, and it leaves shared-computer files and browser sessions
exactly where they were. That follows from the architecture: all bots on an
account share one persistent cloud computer assigned to your user account, with
cookies, signed-in sessions, files, and command-line credentials shared across
every bot. So a session a retired bot signed into is still reachable from the bots
you keep. Sign leftover sessions out by hand as part of the audit.

### How many bots is too many?

The useful limit is how many you are willing to review monthly, not a number the
platform imposes. Each bot carries instructions to re-read, integrations to
justify, routines to check, and sessions it may have opened, and all of that lands
on one shared computer with no audit view to help you. Most people find three to
six reviewable and nine not. If you cannot name every bot's job and the verb it
must never perform, you are already past your limit and hiring will not fix the
part that hurts.

### How do I tell whether two bots are doing the same job?

Look at inputs and outputs rather than descriptions. Two bots reading the same
source, or writing the same artefact, are one job with two implementations, no
matter how differently their charters are worded. The other reliable tell is
behavioural: if you routinely ask both and compare, you are the merge step, which
is the work you were trying to remove. Keep the one with the narrower scope,
because narrow bots are easier to brief and drift less, then fix the brief that
made you build the second one.

### Can I run the audit from my phone?

Only as a reading exercise. On iPhone you can pause and resume a bot, while
editing, history, testing, and deleting all require the desktop app. So you can
review charters, read outputs, and pause something alarming from a phone, but the
actions the audit recommends need a desktop session. There is also no fleet
dashboard anywhere, since an audit view of bot actions does not exist yet, which
means the roster you keep in a file is the only complete list of what you are
running.
`,
};
