import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Google Sheets: Permissions and What to Automate',
  description:
    'A Grok Bot Google Sheets setup that reports without wrecking your model: the scope families to grant, a bot-owned scratch tab, and the one write it must never make.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Google Sheets: Permissions and What to Automate

Half of a working spreadsheet is not data. It is code that renders as data.
Cell B7 shows 41,208 and cell C7 shows 41,208, and one of them is a number
somebody typed in March while the other is a formula that has been
recalculating quietly ever since. Nothing on screen tells them apart.

That single fact is the whole problem with putting a bot in a spreadsheet.
When a bot writes 41,315 into B7 because the number changed, it does not
update a value. It replaces a formula with a constant. The sheet still looks
correct. It looks correct for weeks. It stops being correct the moment the
inputs move and B7 does not, and by then nobody can point at the edit that
did it.

Sheets is still worth connecting, because it is where most small operations
keep the numbers they actually run on. It just needs a different shape of
setup than a mail or chat integration. The shape is this: the bot gets a tab
of its own, it writes only there, and it never reads its own output back as
truth.

## Treat every cell as a formula until you have proved it is not

There is no undo for this one in the place it happens. Type over a formula
and the formula is not moved to a recycle bin or kept in a shadow column. It
ceases to exist in that cell. The only record is the file's version history,
which is a whole-file snapshot rather than a per-cell trail, and which you
have to already suspect something to go looking in.

Compare that to the equivalent mistake anywhere else in your stack. A bad
Slack message can be deleted. A bad email draft sits in a folder. A bad
commit is still in the history even after a revert. A formula overwritten by
a value leaves the sheet in a state that renders identically to the correct
one, which is why it survives review. Reviewing a bot's spreadsheet run by
looking at the spreadsheet does not work: the display is exactly what the
display was before.

So the rule is not "check the bot's work carefully". The rule is that the bot
never gets the opportunity, because the cells it can write are cells that
never contained a formula in the first place.

## A write in one tab breaks a chart in another

The second Sheets-specific hazard is that a spreadsheet is a graph of
dependencies and none of the edges are visible from any single cell. Write
into a range and you may have changed something several tabs away with no
warning at either end.

The dependencies that catch people, roughly in order of how often they do it:

- **Named ranges.** A formula somewhere refers to a friendly name. The name
  points at an address. Insert a row above that address and the name still
  resolves, but to different rows than the author meant.
- **Cross-tab lookups.** A lookup keyed on column A breaks silently when the
  bot sorts the range and the keys move relative to the values.
- **Imported ranges.** Another file pulls from this one on a refresh schedule,
  so your bot's write propagates into a document owned by someone who agreed to
  none of this.
- **Pivot tables and charts.** Both anchor to a source range. Delete rows and
  the anchor shrinks. Add rows below it and they are not included, so the chart
  goes wrong in the quiet direction.
- **Conditional formatting and data validation.** Both carry ranges too, and
  both fragment after enough programmatic row surgery.

None of these produce an error. They produce a number that is off, somewhere
nobody is watching, found eventually by someone reconciling against something
external.

This is why the interesting boundary for a Sheets bot is not about deletion.
It is about row and column structure. A bot that only ever writes values into
a fixed block cannot break a dependency graph. A bot that inserts a row can.

## Drive scope is the filing cabinet, not the file

Google's access model has a dimension that trips people who are used to
thinking in verbs. The important question is not read versus write. It is
which files, and the answer is often "more than you pictured".

Grants come in roughly two units. Per-file access, where you pick the
specific documents in a chooser and nothing else is reachable, and
account-wide access, where the grant covers every spreadsheet or every file
your account can open. That second category quietly includes files other
organisations shared with you. If a client shared their pricing model with
your account eighteen months ago, an account-wide read grant covers it.

Prefer the per-file unit every single time it is offered, even though it is
more clicking, and even though it means going back to add a file later.
Adding a file later is a thirty second job. Explaining to a client why your
bot read their model is not.

## Match each Google grant to the worst thing it enables

Consent screens differ between connectors and they change without notice.
Read the one you are shown and match it against these families rather than
assuming a connector asks for the minimum.

| Grant family | What it actually covers | Worst realistic outcome |
|---|---|---|
| Spreadsheets, read only | Every value, formula, comment, and tab in the files in range, including hidden tabs and hidden columns | The old salary tab was hidden, not protected. Hidden is a display setting. It is now in the bot's context and in whatever the bot writes next. |
| Spreadsheets, read and write | Overwrite any cell, add and remove tabs, change values and formulas | A formula silently replaced with a constant in a cell that feeds your forecast. |
| Structural edits (insert or delete rows and columns) | Shift every range below the edit point | Named ranges, pivot sources, and chart anchors drift. Numbers stay plausible and stop being true. |
| Per-file access chosen in a picker | Only the documents you personally selected | Small, bounded, correct. This is the grant to want. |
| All spreadsheets in the account | Every sheet you own or can open, including files shared to you by other companies | A client's model is in scope because of a share link from two years ago. |
| Full Drive read | Every file type, not only sheets: contracts, exports, scans, screenshots | The largest data exposure on this list, wearing the most boring label. |
| Sharing and permissions | Add or remove collaborators, change link visibility | A finance sheet becomes visible to anyone holding the URL, and nothing in the sheet looks different afterwards. |
| Attached scripts and triggers | Create or edit bound scripts, install time-based triggers | Code that keeps running on a schedule long after you disconnect the bot. |
| Drive metadata and file listing | File names, folder structure, owners, timestamps | Your file names map your business. That is frequently enough on its own. |

Two rows deserve more attention than they get. Attached scripts outlive the
connection, so a grant you revoke on Friday can still be executing on
Saturday. And sharing changes are invisible after the fact: the document does
not display differently when its link visibility widens, so this is a change
you will only find by auditing for it deliberately. The wider argument for
grading grants this way is in
[what Grok Bot permissions actually mean](/blog/grok-bot-permissions-explained).

## Version history is a worse undo than people assume

People wave at version history as the safety net that makes all of this fine.
It is a real feature and it does real work, but it is the wrong shape for
this failure.

It restores whole files, not cells. Rolling back to Tuesday morning to
recover one formula also discards every human edit made since Tuesday
morning, which on a shared operational sheet is usually unacceptable, so what
people actually do is open the old version in a second window and retype the
formula by hand. That works if you know which formula. The failure we are
describing is one where you do not.

Granularity also degrades. Recent edits are fine grained, older activity gets
consolidated, and the compaction is not something you control from inside the
document. Your recovery window is shorter than the file's age suggests.

Then there is attribution, and this is where a Grok Bot detail matters more
than the Google detail. Every bot on your account shares one persistent cloud
computer, and the browser sessions and signed-in accounts on that computer
are shared across all of them. The documentation is blunt about it: do not
use separate Bots as a security boundary. So when a bot edits a sheet through
your signed-in session, the edit is attributed to you. Version history will
not tell you a bot did it, and as of writing there is no audit view of bot
actions to cross-reference. Running three bots and hoping the history sorts
out which one misbehaved is not a plan.

## Decide where the bot's numbers are allowed to live

Before the permissions question there is a layout question, and answering it
well makes most of the permissions question moot. Four places the output can
land, and they are not equivalent.

| Where the output goes | Who can depend on it | What a bad run costs | Choose it when |
|---|---|---|---|
| A tab inside the same file, owned by the bot | Humans reading it. No formula, by rule | A wrong report for a week | Default. Numbers sit beside the source and nothing points at them |
| A separate file the bot owns | Anyone you share it with, and IMPORTRANGE if you allow it | A wrong file, and a stale one if runs stop | The source has many editors, or needs write access you will not grant |
| A message or a document | Whoever reads it | Nothing structural, it is text | The output is prose, or the numbers serve one decision and then die |
| Cells inside the model itself | Every formula, chart, pivot and importing file downstream | A silently wrong model, found when inputs move | Almost never, and never on a cell that once held a formula |

The first row wins for most operational sheets, for a reason that has nothing to
do with trust. Output beside the source gets read, because you are already in
that file on Monday. Output in a separate file gets read for three weeks and
then stops.

Row four is worth arguing about once. When somebody insists the bot must update
a figure inside the model, ask which formula that cell held, and whether anyone
can still tell.

## Give the bot a tab it owns and never read it back

Here is the setup that makes the rest of this survivable, and it is one
structural decision rather than a list of habits.

Create a tab that belongs to the bot. Call it something nobody will
accidentally treat as production: BOT_OUTPUT works. Park it at the far right.
Row one carries the run timestamp, the bot's name, and the list of tabs it
read. Everything the bot produces goes there, as values, never as formulas.

Then three rules that give the pattern its teeth.

**Humans read it, the bot does not.** The bot recomputes from the source tabs
on every single run, even when last week's answer is sitting one row up. The
moment a bot reads its own output as an input, one bad run stops being a bad
run and becomes a permanent premise. Errors compound instead of expiring.

**No human formula points at it.** The temptation is immediate: the number is
right there, so reference it. Do that and you have handed the bot write
access to your model through the back door, and the tab you carefully
isolated is now load bearing. If you eventually decide a dependency is worth
it, make that a deliberate one-time decision and write it down next to the
formula.

**The bot rewrites the whole tab, it never patches it.** Clear and rewrite is
idempotent and it makes a partial run obvious, because you get a short tab
instead of a plausible mixture of last week and this week.

The parallel is a bot that drafts and never sends: the output lands where you
already look, and the system of record stays untouched until a person moves it.
The catalog's [bookkeeping auditor](/bots/bookkeeping-auditor) draws the same
line for accounts, never editing the live books, and the
[personal CFO](/bots/personal-cfo) recommends a rebalance rather than executing
one.

## Paste the scratch tab reporter charter and grade the first three runs

Paste this, replace the bracketed parts, and read the first three runs
carefully before you trust the fourth.

\`\`\`text
You are my Weekly Numbers Reporter for the spreadsheet [FILE NAME OR URL].

// WHAT YOU OWN
Every Monday at 07:00 [TIMEZONE], read these tabs and no others:
  Sales, Expenses, Subscriptions
Compute and report:
  REVENUE   total of the amount column in Sales for the last completed
            week, Monday to Sunday
  DELTA     that figure against the previous week, absolute and percent
  TOP5      the five largest rows by amount, each with its row number
  ANOMALY   rows where the amount is blank, negative, text in a numeric
            column, or more than 3x the trailing 8 week median
  BROKEN    every cell in those three tabs currently showing an error
            value, listed by exact address, for example Expenses!F212
  SKIPPED   anything you could not compute, and the reason

// WHERE YOU WRITE
Write only to the tab named BOT_OUTPUT.
Clear BOT_OUTPUT and rewrite it in full on every run.
Row 1 is always: run timestamp, your bot name, tabs read.
Write values only. Never write a formula anywhere, including BOT_OUTPUT.
Put the arithmetic you used in the column beside each figure so I can
check it without rebuilding it.

// WHERE YOU STOP
Never write, edit, clear, sort, or reformat any cell outside BOT_OUTPUT.
Never insert or delete a row or column outside BOT_OUTPUT: an insert
shifts every range that points below it, in this file and in any file
importing from it.
Never rename, hide, duplicate, or delete a tab.
Never change sharing, link visibility, or collaborators.
Never create or edit an attached script or an installed trigger.
Never read BOT_OUTPUT as an input. Recompute from source every run.
If a source tab is missing, renamed, or its header row has changed,
stop and tell me. Do not guess which column replaced it.
\`\`\`

The header row clause is not padding. Header drift is the most common way a
scheduled spreadsheet job starts producing confident nonsense, because a
renamed column does not raise an error, it just makes the bot pick the
nearest plausible one.

## Run the Monday rollup for eight weeks before you trust it

Eight weeks is roughly how long a spreadsheet bot takes to stop surprising you.
The interesting weeks sit in the middle.

Week one you already know the answer, because you did last week's rollup by
hand. Compare line by line. Two of the five figures will be wrong for the same
boring reason: a filtered row you count and it does not, or a date boundary you
read as inclusive and it does not. Fix the charter, not the sheet.

Week two the ANOMALY block earns its place, flagging a negative amount that
turns out to be a refund your model was double counting. That is the first thing
it finds that you were not looking for, and it found it by listing rather than
fixing.

Week three is the header rename. Somebody relabels Amount to Amount (net), the
bot stops and says the header row changed, and you spend two minutes deciding
whether that was deliberate. Without the clause it would have picked the nearest
plausible column and reported confident numbers all quarter.

Week five is the row insert. Someone adds three correction rows at the top of
Sales. Your bot recomputes from source every run so its figure moves correctly,
while the dashboard chart keeps its old anchor and excludes them. The bot is
right, the dashboard is wrong, and you notice only because they disagree.

Week eight the check takes twenty seconds and the tab is boring, which is the
deliverable. What you have is not a robot accountant. It is a weekly list of
what looks wrong, from something that has never written a formula or moved a
row.

## Find the wrong number by the shape of the wrongness

Spreadsheet failures rarely raise errors, they change shape. Each shape points
at its own cause, which saves you auditing the wrong tab.

| What you are seeing | What it usually is | Where to look |
|---|---|---|
| A figure that stopped moving when its inputs moved | A formula overwritten with a constant | The formula bar, then version history for the date |
| A chart that is right but short | Rows added below a fixed source range | The chart's data range, not the data itself |
| A total right on one tab and wrong on the summary | A cross-tab lookup keyed on a column that got sorted | The sort, and whether keys and values moved together |
| Numbers changed in a file nobody edited | An IMPORTRANGE pulling from the file your bot writes to | The importing file, and who owns it |
| A confident report built on the wrong column | A renamed header matched to the nearest plausible column | The header row, against what the charter names |
| A pivot missing recent rows | The pivot's source range never grew | The pivot source, and whether it spans a whole column |

Only the first row is a data problem. The other six are range problems, which is
why the boundary that matters here is structural: a bot that never inserts,
deletes, sorts or reformats outside its own tab cannot cause rows two to seven
at all.

## Prove the formulas survived with a canary you can read

The failure this article opens with cannot be checked by looking at the sheet,
because the sheet looks identical either way. Put the check inside the sheet, in
the bot's own tab, where it costs nothing and is visible weekly.

\`\`\`text
BOT_OUTPUT row 1   run timestamp, bot name, tabs read
BOT_OUTPUT row 2   header row of each source tab, copied as text
CANARY block
  =IF(ISFORMULA(Model!B7), FORMULATEXT(Model!B7), "OVERWRITTEN")
  =IF(ISFORMULA(Model!C7), FORMULATEXT(Model!C7), "OVERWRITTEN")
  independent total   =SUM(Sales!D2:D5000)
  model total         =Model!B7
  row counts          Sales, Expenses, Subscriptions
\`\`\`

FORMULATEXT returns a formula as a string, per
[Google's function reference](https://support.google.com/docs/answer/9365792),
so a mirror of each load-bearing cell prints the formula you expect and prints
OVERWRITTEN the moment that cell holds a value instead. Pair it with a total
computed independently from the raw column: when the model figure and the
independent figure diverge, something between the source and the headline
changed, and you learn it that week rather than that quarter.

| Canary | What it catches | Where it sits |
|---|---|---|
| A FORMULATEXT mirror of a load-bearing cell | A formula replaced by a constant | One row per watched cell |
| An independent total from the raw column | A headline figure that stopped tracking its inputs | Beside the model total |
| A row count per source tab | Rows inserted or deleted under a chart or pivot anchor | One line per source tab |
| The header row copied as text | A renamed column the bot would otherwise guess at | Row 2 |
| The run timestamp | A run that quietly stopped happening | Row 1 |

Watch three or four cells, not thirty. Cover the figures other people quote, not
the whole model, and remember that a canary block nobody reads is the same as no
canary.

## Automate the rollup first and the in-place cleanup never

Order matters here more than in most integrations, because the safe jobs and
the tempting jobs are different jobs.

**First: the weekly rollup you currently do by hand.** Pure read, single
write target, and you already know what the right answer looks like, which
makes grading trivial for the first month.

**Second: a hygiene report that fixes nothing.** Duplicate keys, blank
required fields, cells with error values, numbers stored as text, dates in
two formats in one column. Output is a list of cell addresses and a
description. You do the fixing. This is where a spreadsheet bot earns its
keep fastest, because finding those cells is tedious and correcting them
needs judgment about which value was right.

**Third: reconciliation between two sources.** Sheet against an export,
this month against last month, a matched list and an unmatched list. The
unmatched list is the product, exactly as it is in accounts work.

**Fourth: a chart-ready extract.** The bot assembles a clean block in its own
tab, you point a chart at that block once, and the chart never needs
structural surgery again.

What not to automate first, no matter how obviously mechanical it looks:
in-place cleanup, dedupe by row deletion, blank filling, reformatting, and
anything that sorts a range. All of them are structural, all of them move
rows, and all of them are how the dependency graph breaks. If you want the
larger version of this argument about which numbers a bot should touch at
all, [automated KPI reporting](/blog/grok-bot-to-kpi-reporting) covers the
reporting side of it.

## Answer the objection that a bot fixing nothing is barely worth it

The fair version: you have described a bot that reads a spreadsheet, writes a
list, and may not touch anything that matters. The duplicate keys are still
duplicated, the numbers stored as text are still text, and somebody still has to
fix them.

Two answers, and the second changes practice.

First, the finding is the expensive half. Locating every error value across
three tabs, every date stored in two formats, and every key that appears twice
is tedious work a bot does in seconds and a person does badly at 17:40. Deciding
which duplicate is correct needs context the bot lacks, and takes a tenth of the
time.

Second, if you want fixes, ask for a patch list rather than a patch. Have the
bot output the cell address, the current value and the value it proposes, by
tab, in its own tab. You read it, delete what you disagree with, and apply the
rest in one pass. The write stays human-authored, the reasoning stays automated,
and nothing in that workflow replaces a formula with a constant while you are
not looking.

Where the objection wins: a private sheet with no formulas, no charts, no
imports and one editor is a table rather than a model, and none of this caution
buys anything. Grant the write, let it clean, and revisit the day somebody
points a chart at it.

## Work around a missing Sheets connector in one of two ways

Connector availability moves constantly, so confirm what exists for your
account in the app rather than trusting any article, including this one. If
there is a Sheets connector on your plan, connect it and read the consent
screen against the table above.

If there is not, you have two honest paths.

Drive the web interface in a browser with a login handoff: the bot works in a
browser on the shared computer, you sign in yourself, and it proceeds from
there. Two consequences to plan for. The session persists on that shared
computer and is reachable by every other bot on the account, and deleting a
bot does not clear it. And bot traffic comes from static egress addresses,
which some services treat as datacenter traffic and challenge, so expect
sign-in friction and expect it at the least convenient time.

Or reach the spreadsheet through an MCP server that exposes it, which keeps
hosted sign-in tokens with the provider's backend rather than sitting on the
computer. Whichever route you take, the scratch tab rule is unchanged. It is
a property of your sheet layout, not of the connector, which is exactly why
it keeps working when the connector changes underneath you.

**Keep reading:** [Bots for Personal Life](/blog/bots-for-personal-life), [Bots for Product Managers](/blog/bots-for-product-managers), [Bots for Real Estate](/blog/bots-for-real-estate).

## Frequently Asked Questions

### Is it safe to let Grok Bot write to Google Sheets?

It is safe if the bot writes only to a tab that exists for that purpose and
nothing else in the file depends on. The specific danger in Sheets is not
deletion, it is overwriting a formula with a value: the cell displays
identically afterwards, so the mistake survives review and only surfaces
weeks later when the inputs move and the number does not. Give the bot one
output tab, forbid writes anywhere else, forbid row and column inserts
outside that tab, and the worst case becomes a wrong report rather than a
broken model.

### What Google permissions does a Sheets bot need?

Read access to the specific spreadsheets it reports on, and write access
scoped as narrowly as the connector allows. Prefer per-file access chosen in
a picker over any account-wide grant, because account-wide covers every
spreadsheet your account can open, including files other companies shared
with you. Refuse full Drive read, refuse sharing and permission changes, and
refuse anything that creates attached scripts or installed triggers, since
those keep running on a schedule after you disconnect the bot. Read the
consent screen you are actually shown; connectors bundle differently and
change without notice.

### Why should a bot write to its own tab instead of the real sheet?

Because a spreadsheet is a dependency graph and none of the edges are visible
from the cell you are editing. Named ranges, cross-tab lookups, imported
ranges, pivot sources, and chart anchors all point at addresses, so a write
or a row insert can change a number several tabs away with no error anywhere.
A dedicated output tab that no human formula references cannot participate in
that graph. The second half of the rule matters just as much: the bot must
never read that tab back as input, or one bad run becomes a permanent premise
instead of a bad week.

### Can version history undo a bot's spreadsheet mistake?

Only partially, and less often than people expect. Version history restores
whole files rather than individual cells, so recovering one formula also
discards every human edit made since that snapshot. Older activity gets
consolidated over time, which shortens your real recovery window. Attribution
is the bigger gap: because all bots on an account share one computer and its
signed-in browser sessions, an edit made through your session is recorded as
yours, and as of writing there is no audit view of bot actions to check
against. Prevent the write instead of planning to reverse it.
`,
};
