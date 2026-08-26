import type { BlogPost } from './index';

export const post: BlogPost = {
  title: "Keep the Shared Grok Bot Computer Clean Without Deleting Anyone's Work",
  description:
    'A grok bot overwatch vm routine: inventory the one shared computer, archive temp on a cadence, back up non-secret files, and never delete a sibling bot work tree.',
  date: '2026-08-26',
  category: 'Guide',
  content: `
# Keep the Shared Grok Bot Computer Clean Without Deleting Anyone's Work

Disk pressure on a shared machine always shows up as an unrelated failure. Your
research bot stops mid-run, the error mentions a write it could not finish, and
the cause is three weeks of downloaded PDFs a different bot left in a folder
nobody named. Nothing malicious. Nobody tidy.

The public prompt feeds picked this up over the last few weeks, grokbot.dev
among them, and the pattern got a name: an overwatch bot whose entire job is
housekeeping the machine every other bot stands on. It is easy to build wrong,
because a janitor with delete rights is a demolition crew holding a mop.

The [vm overwatch](/bots/vm-overwatch) listing draws its boundary exactly there.
It never deletes another bot's working files without a named archive step you
approved, it never commits secrets, and it never pretends a second bot is a
second machine. Here is how to build that housekeeper and how to tell whether
its backups are real rather than reported.

## Housekeep the account computer, not a fantasy per-bot VM

Start with the platform fact that decides the whole design. All bots on a Grok
Bot account share one persistent cloud computer. The documentation states that
the computer is assigned to your user account, not to an individual bot. Each
bot gets its own screen, and the docs describe screens as separate work surfaces
rather than separate security boundaries.

That turns housekeeping into an account level job. There is one managed Linux VM,
the bot runs on it as a non-root user, and every folder on it is reachable by
everything else you have running.

| What people assume | What the docs actually say | What it means for cleanup |
|---|---|---|
| Each bot has its own machine | The computer belongs to the account, not the bot | One disk, one cleanup job, one owner |
| Screens isolate work | Screens are work surfaces, not security boundaries | A tidy screen tells you nothing about the disk |
| Separate bots separate credentials | Cookies, sessions, files, and CLI credentials are shared | Leftover logins are an account problem |
| Deleting a bot cleans up after it | Deleting a bot does not remove shared files or sessions | Retirement needs a manual sweep |
| A second bot is a sandbox | Verbatim: do not use separate bots as a security boundary | Overwatch cannot be sandboxed either |
| There is an audit trail to consult | An audit view of bot actions does not exist yet | Your registry file is the record |

The last row is why an overwatch bot writes things down. Without a log you own,
the only history of what moved on that disk is whatever a chat window still
holds. The
[shared computer security guide](/blog/grok-bot-shared-computer-security) covers
the wider picture.

## Inventory /workspace before you move a single folder

The first run should move nothing at all. It should produce a map. You cannot
decide what is temp until you know who wrote it, and on a shared machine
ownership is inferred rather than recorded.

Have it walk the top level of the workspace and record, per folder, the name,
the owner it can infer from a BOT file or a README inside, the last modified
date, the size, and whether anything is currently writing there. That last
column prevents most accidents.

| Inventory column | Where it comes from | Why the bot needs it |
|---|---|---|
| Folder name | Directory listing | The only stable handle you have |
| Inferred owner | A BOT file, README, or naming convention inside | Tells you who to ask before touching it |
| Last modified | Filesystem timestamp | Separates active work from residue |
| Size on disk | Directory total, not file count | Ranks what actually matters |
| In use right now | Open handles or a run in progress | Turns a risky move into a skip |
| Contains secrets by pattern | Filename match on env files, keys, cookies | Marks the folder as never-backed-up |

Two rules make the map trustworthy. Infer ownership, never assert it: a folder
with no owner gets flagged as unowned rather than assigned to whoever seems
likely. And report sizes as observed rather than estimated.

A first run that says "eleven folders, three unowned, one growing by 400 MB a
day" has earned its place. A first run that says "cleaned up, all good" has told
you nothing and possibly cost you something.

## Archive temp on a weekday cadence, then wait to delete

The safe motion is archive, then wait, then propose. Never archive and delete in
the same pass, because the value of an archive is entirely in the gap between
those two steps.

A workable default: obvious temp moves into a dated archive folder on a weekday
schedule. Archives younger than the retention window you set, fourteen days
unless you say otherwise, are untouchable. After retention the bot lists
candidates for deletion and stops there.

| Cadence step | Runs when | What the bot does | What it never does |
|---|---|---|---|
| Inventory | Every weekday | Rewrites the map and the registry | Move anything during the pass |
| Archive | Every weekday | Moves obvious temp into a dated folder | Touch a folder in use |
| Retention hold | Continuous | Leaves archives alone for 14 days | Delete early to reclaim space |
| Delete proposal | After retention | Lists candidates with sizes and owners | Execute the list |
| Weekly review | One named day | Files growth, staleness, one recommendation | Bundle a delete into the report |
| Emergency | Disk near full | Names the largest offenders and pages you | Free space by deleting on its own |

That emergency row is the one people argue about. A full disk is an outage, and
the temptation to grant "delete when critical" authority peaks exactly when your
judgement is worst. The better answer: the bot names the three biggest folders
and their owners inside a minute, so your manual decision is fast. Speed comes
from the map, not the delete permission.

"Obvious temp" has to stay narrow: downloads, extracted archives, build output,
screenshot dumps, caches. Anything ambiguous appears in the review instead.

## Back up the allowlist to private git and stop on secrets

Backup is where a housekeeping bot most easily becomes the incident. The pattern
is dull: a broad backup, a private repository that later becomes less private,
and an env file with a live key sitting in the history forever.

So the allowlist runs one direction only. You name the trees that get backed up
and everything unnamed is out. The bot then excludes secrets twice, by exact
filename and by pattern, and treats a match as a full stop.

| Excluded by | Examples | Why a skip is not enough |
|---|---|---|
| Exact name | Env files, credential files, token caches | These are the ones you know about |
| Extension pattern | Private keys, certificates, key stores | Named anything, still a key |
| Directory pattern | Cookie jars, browser profiles, keychains | A signed-in session is a credential |
| Content sniff | Long random strings next to the word key | Catches the file nobody named |
| Size anomaly | A sudden multi-gigabyte addition | Usually a dataset or a dump, not source |
| Unowned folder | Anything with no inferable owner | You cannot get consent from nobody |

State the stop-on-secret rule precisely, because "exclude and continue" sounds
equivalent and is not. If staged changes contain something that looks like a
secret, the bot halts the backup and names the file rather than quietly dropping
that path and pushing the rest. A backup that silently omits files trains you to
trust a process that is deciding things for you.

One platform constraint to expect: static egress IPs mean some services flag the
machine as a datacenter address, so a challenged push is usually fixed at the
provider rather than in the charter.

## Keep a live registry so colliding paths have an owner

The registry is the artifact that makes everything else possible. It is a plain
file in the workspace, named by you, holding one row per path: the path, the
owning bot, the purpose, the retention, whether it is shared on purpose, and the
date the bot last verified it.

Without it, two bots writing to the same directory looks exactly like one bot
behaving strangely. With it, a collision is a two-line report: this path has two
claimants, here is what each wrote last. The shared-on-purpose column matters
more than it looks, because it is the difference between a real conflict and a
folder you deliberately pooled.

Keep the registry small enough that you will read it. Sixty rows is a database,
and nobody audits a database by eye. If the workspace really has sixty top level
folders, the finding is the sprawl.

When the bot cannot find the registry, it says the registry is missing and stops.
A housekeeper that invents an ownership map is worse than one that refuses to
run.

## Skip directories that are mid-run instead of "tidying" them

Here is the failure that turns a helpful bot into a hated one. A sibling bot is
forty minutes into a long scrape, writing partial output. The overwatch pass sees
a directory of half-finished files and decides it looks like a mess.

The rule is a skip, not a judgement call. If a directory is being written to, or
a run that owns it is in progress, the bot notes it as in use and moves on. The
skip goes into the review, so a folder that is permanently "in use" and
permanently growing becomes visible.

Detecting mid-run state is imperfect and the charter should admit it. A
timestamp inside the last few minutes is a strong signal, a lock file is better,
and a registry entry plus an active-bot report is the best available answer
without being proof. When the signals conflict, the bot skips.

The trap on the other side: a folder untouched for three weeks is not
automatically dead. Quarterly jobs exist. Reference data exists. Staleness goes
into the review as an observation for you to judge, never into the archive queue
on its own.

The cost of a wrong skip is a messier disk for one day. The cost of a wrong move
is a failed run somebody debugs without knowing a janitor was involved.

## Paste an overwatch charter that refuses silent sibling deletes

Written in the spirit of the catalog listing, in original words. Do not paste
prompts from public feeds into a bot that can move your files.

\`\`\`text
You are my VM Overwatch. You keep the shared account computer usable for
every bot on it. You are a housekeeper, not an administrator.

// GROUND TRUTH
All bots on this account share ONE persistent cloud computer. Screens are
work surfaces, not security boundaries. Never tell me a second bot is a
second machine, and never reason as if one folder is isolated from another.

// WEEKDAY PASS, in this order
1. Inventory the top level of [workspace path]. For each folder record:
   name, owner inferred from a BOT file or README, last modified, size on
   disk, whether it is in use, and whether it matches a secret pattern.
   Write this to [registry path]. Overwrite, do not append forever.
2. Move OBVIOUS temp only (downloads, extracted archives, build output,
   caches, screenshot dumps) into [archive path]/YYYY-MM-DD.
   Anything ambiguous stays where it is and goes in the review instead.
3. Back up ONLY the trees in [allowlist] to [private git remote].
4. Flag collisions: two bots writing one path, a disk filling, a folder
   with no inferable owner.

// WHAT YOU NEVER DO
Never delete another bot's working files. Not on a schedule, not to free
space, not because a folder looks abandoned.
Never delete an archive younger than [14] days.
Never commit or push a secret. If staged changes contain an env file, a
private key, a cookie jar, a keychain, or a token cache, STOP the backup
and name the exact file. Do not drop the path and push the rest.
Never move a directory that is in use. Note it as in use and skip it.
Never claim work you did not do. If a step failed, say which step.

// DELETES
You may PROPOSE deletion of archives past retention, as a list with paths,
sizes, and inferred owners. You wait for my yes. A yes covers that list
only. If the list changes, ask again.

// WEEKLY REVIEW, [Friday]
File: what grew, what went stale, what looks like leftover credentials,
which folders were skipped as in use, and ONE recommended cleanup I must
approve. If the tree is already clean, say so in one line and stop.
Do not invent chores to look busy.

// STAY IN YOUR LANE
You do not restart, edit, or nag other bots. You do not read the contents
of another bot's files to summarize them. You report structure, not
substance.
\`\`\`

The line people delete first is the one forbidding deletes to free space. It
feels obstructive at 2am with a full disk. That is the moment it exists for.

## Walk one Friday review from disk map to an unsent cleanup list

Friday, 16:00. The pass runs. Fourteen top level folders, up from eleven three
weeks ago.

The map comes back with sizes. One unowned folder holds 9 GB of extracted zip
archives dated across nineteen days. A second belongs to the research bot by its
README and grew 1.2 GB this week, all PDFs. A third is timestamped four minutes
ago, so it is marked in use and skipped.

The archive step moves the extracted zips into a dated folder and does not
delete them, because the retention clock starts now. Nothing else qualifies as
obvious temp, so nothing else moves.

The backup step stages the two allowlisted trees, then halts. Staged changes
include a file matching an env pattern inside the research tree. The bot names
the exact path and stops the push. Nothing gets committed this week, which is
the correct outcome, and the review carries the reason on line one.

Then the review: three folders grew, one is unowned, one went stale, one looks
like a leftover credential, one directory was skipped as in use, and two registry
entries claim the same output path. One recommendation, the 9 GB archive folder,
eligible for deletion in fourteen days and not before.

Ninety seconds of reading bought the thing worth the whole setup: the env file
surfaced before it reached a git history.

## Diagnose filling disks, orphan credentials, and two bots one path

Housekeeping failures are quiet by nature. The bot keeps reporting, and the
thing it is reporting on has drifted.

| Symptom | Likely cause | Fix |
|---|---|---|
| Disk fills again days after a cleanup | Something is writing continuously and got archived, not addressed | Find the writer in the registry, fix the job, not the folder |
| Backups look green but the repo is stale | The backup halted on a secret and the report was skimmed | Make a halted backup the first line of the review |
| A sibling bot fails right after a pass | A directory in use was moved anyway | Require a skip on any recent write, and log every skip |
| The registry has not changed in weeks | The pass is failing early and reporting success | Check the last verified date, not the summary line |
| Credentials found in an unowned folder | A retired bot left a signed-in session or token behind | Revoke at the provider first, then remove the file by hand |
| Two bots overwrite each other's output | No owner recorded for a shared path | Assign one owner in the registry; shared on purpose is a separate flag |
| An archive folder is enormous | Retention passed and nobody approved the delete list | Approve or reject the list; an unread proposal is not a policy |
| Cleanup deleted something you needed | Delete authority was granted to the bot at some point | Remove that authority; restore from the backup you tested |

The orphan credential row deserves the most attention. Deleting a bot does not
remove shared computer files or browser sessions, so every retired bot leaves
residue the next bot can reach. Overwatch finding those files is useful.
Overwatch deleting them is not, because the revoke has to happen at the provider
first.

## Answer the case for giving the janitor delete rights to stay small

The strongest counter-argument goes like this. A cleanup bot that cannot delete
is not a cleanup bot. You end up with an archive folder growing forever, a
delete list you never read, and a disk that fills anyway, while the bot pings
you every Friday about work it could have done itself.

That case is fair and has a real cost. Two facts decide it.

First, an approval controls a proposed action and does not reverse work already
completed. That is documented in plain language. There is no undo on a delete.

Second, the bot's sense of ownership is a guess assembled from a README, a folder
name, and a timestamp. Enough to sort a list. Not enough to be the last decision
before permanent loss, given that folders belonging to other bots look exactly
like folders belonging to nothing.

Where the objection wins: archives the bot created itself, in a folder it owns,
past a retention window you set. Delete authority is reasonable there, because
the bot is cleaning up after its own move rather than someone else's work. Grant
that and nothing wider. The reasoning behind narrow grants is in
[bot boundaries](/blog/grok-bot-boundaries).

## Verify backup by restoring a dummy file, not by a green log

A backup you have never restored is a belief. Run this monthly, not once.

Write a file with today's date and a random string into an allowlisted tree by
hand, run the pass, then confirm that exact file with those exact contents is in
the private remote. Not "the repo has recent commits". The file, the string.

Now restore it elsewhere: clone the remote into a scratch directory and open the
file. Everybody skips this step, and it is the only one that proves the backup is
a backup rather than a write.

Next, plant a decoy secret: a file matching your excluded env pattern with an
obviously fake value, inside an allowlisted tree. The backup must halt and name
it. If it pushes and quietly omits the decoy, your exclusion is a filter rather
than a stop.

Finally, break something on purpose by renaming the registry file. The bot should
say the registry is missing and stop, not produce a plausible report from memory.
Remove the decoy and the dummy by hand afterwards.

Any failure here is a stop. Fix the rule, then run all four checks again a week
later instead of assuming the fix held.

## Leave fleet nags to the stuck-bot foreman, not this bot

Scope creep here always goes the same direction. The bot already knows which
folders are active, so it starts commenting on which bots are stalled, and now it
is a monitoring product with file write access.

Keep those jobs apart. The [stuck bot foreman](/bots/stuck-bot-foreman) watches
sibling bots for work that quietly stopped, nags a stuck one once, and pages you
only when a human has to step in. Its boundary is that it never restarts,
deletes, or rewrites another bot. It reads status and talks. Overwatch is the
opposite shape: it touches the disk and says nothing to other bots.

The separation is not tidiness. A bot that both moves files and decides which
runs are unhealthy has everything it needs to "fix" a stalled job by clearing its
working directory.

Run both if you want. Just never merge them into one charter because they happen
to look at the same machine.

## Treat screens as windows, never as lockboxes for .env files

The screen metaphor is the most misleading thing about this platform, and it
misleads in a specific direction. A separate screen per bot looks like a
separate desk in a separate office. It is a window onto one desk.

So an env file in a folder that "belongs" to one bot is a file on the account
computer. A signed-in browser session created by one bot is a session every bot
can use. Command-line credentials are shared. That is the documented design, and
the docs say directly that separate bots are not a security boundary.

Which changes what an overwatch bot is for. It is not enforcing isolation,
because there is no isolation to enforce. It is doing inventory and telling you
where credentials ended up. Reporting, not security.

Three consequences belong in the charter. Secrets never enter a backup, because
a backup moves them somewhere with a different access model. Overwatch reports
structure rather than substance, naming a path that matches a key pattern without
reading the value into a chat log. And revocation happens at the provider,
because removing a file on the VM does not invalidate a token the provider still
honours.

Hosted MCP sign-in tokens are the one documented exception: those stay with
Cursor's backend and are never stored on the computer.

## File the weekly org review even when the tree is already clean

The last habit is the one that makes the rest survive: the review gets filed
every week, including the weeks with nothing to report.

A clean week produces one line: the tree is clean, here is what I checked, no
recommendation. A bot that manufactures a chore to justify itself is training you
to skim its reports, and a skimmed report is where the halted backup and the
orphan credential go to die.

The review is also your only durable record. There is no audit view of bot
actions on this platform yet, and routines are per bot with only the twenty most
recent run records kept, all of which disappear when the bot does. Keep the
review inside the allowlisted tree so it gets backed up too.

| Review line | What it answers | Why you read it first |
|---|---|---|
| Backup status | Did the push complete or halt on a secret | A halted backup means no backup this week |
| Growth | Which folders grew and by how much | Predicts the next disk emergency |
| Staleness | What has not moved, with dates | Candidates for you to judge, not for the bot |
| Leftover credentials | Paths matching secret patterns | The highest value finding it produces |
| Skips | Directories in use during the pass | A permanent skip is a real problem |
| One recommendation | The single cleanup worth approving | Forces a priority instead of a list |

One recommendation, not five. A long queue of suggested actions gets approved in
bulk, and bulk approval of file operations is how you end up restoring from a
backup you never tested.

**Keep reading:** [How To Categorise Expenses And Keep The Exceptions](/blog/how-to-automate-expense-categorisation), [How To Stop Shipping Decks With Stale Pricing](/blog/how-to-keep-sales-decks-current), [Give a Grok Bot Its Own Inbox Without Using Your Personal Gmail](/blog/grok-bot-agentmail).

## Frequently Asked Questions

### Does each Grok Bot get its own VM to keep clean?

No, and this is the assumption that makes most cleanup plans wrong. Every bot on
the account shares one persistent cloud computer, and the documentation states
that the computer is assigned to your user account rather than to an individual
bot. Each bot gets its own screen on that machine, described in the docs as a
separate work surface rather than a separate security boundary. Cookies,
signed-in sessions, files, and command-line credentials are shared across all of
them. Housekeeping is therefore an account level job with one disk and one owner.

### Should the overwatch bot be allowed to delete files?

Only files it created itself, in a folder it owns, after a retention window you
set. Everything else is a proposal you approve. Two reasons: an approval
controls a proposed action and does not reverse work already completed, so a
wrong delete is permanent, and the bot's sense of ownership is inferred from
README files and timestamps rather than recorded anywhere authoritative. A folder
belonging to a sibling bot looks identical to a folder belonging to nothing.
Archive, hold, propose, wait. That sequence costs you a minute a week.

### What happens to leftover files when I delete a bot?

They stay. Deleting a bot does not remove shared computer files or browser
sessions, so the folders, the signed-in sessions, and any credential files that
bot created are all still on the machine and reachable by the next bot you
create. Retirement is a manual sequence instead: revoke the credential at the
provider first, sign out of the session on the machine, remove the files by hand,
then delete the bot last. Overwatch is useful here for finding the residue, and
it should report those paths rather than clean them.

### How do I know the backup is actually working?

Restore from it. Write a file with a random string into an allowlisted tree by
hand, run the pass, then clone the private remote into a scratch directory and
open that exact file. A green log line proves a command exited, not that your
data is recoverable. Run one more check while you are there: plant a fake secret
matching your exclusion pattern and confirm the backup halts and names the file
rather than pushing everything else without it. A silent omission is worse than
a loud failure.
`,
};
