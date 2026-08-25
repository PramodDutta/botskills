import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Agencies: Client Reporting on Autopilot',
  description:
    'AI bots for agencies can draft every client report and watch every competitor. The hard part is keeping seven clients apart on one shared machine.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Agencies: Client Reporting on Autopilot

Seven retainers. Thursday is reporting day and reporting day eats Thursday. One
client wants a dashboard link, one wants a PDF, one wants it as a Slack message
their CFO can forward, and one has a template with a slide you have never been
able to fill in properly. The numbers come from five platforms, three of which
changed their export layout this year.

None of that is billable. In most retainer structures reporting sits inside the
fee, so every hour you cut is margin you keep. That economic fact is why
agencies automate reporting before anything else, and it is also why they do it
badly: the fastest possible build is one bot with access to everything, which is
also the build that puts your entire client list one careless paragraph away
from each other.

This is the roster that gets Thursday back without creating that problem.

## Seven retainers, seven reporting formats, one Thursday

An agency week has five kinds of work in it and only two of them are what the
client is actually paying for.

Pulling numbers. Per client, per platform, weekly, and mechanically identical
every time apart from the layout changes nobody announces.

Writing commentary. Genuinely valuable, and about seventy percent formulaic. The
paragraph explaining that spend rose while cost per acquisition held is a
paragraph you have written two hundred times. The one explaining why a channel
collapsed is not.

Client communication. Relationship work, which is the reason retainers renew.

The delivery itself, which is the thing they hired you for.

New business, which loses to reporting day every single week and is the reason
agencies plateau.

Bots take the first job entirely, most of the first draft of the second, and
none of the other three. That division holds up better than any tooling decision
you will make this year.

## Six bots for a client roster, and what each is not allowed to touch

| The job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Client and market rundown | Assembles what happened around one client's business this week, in their own market | Never contacts anyone at the account, rundowns go to you alone | [Account Media Rundown](/bots/account-media-rundown) |
| Content calendar per client | Keeps the slot plan current, drafts what is due, flags what slipped | Never publishes, every draft and edit waits for your review | [Content Planner Manager](/bots/content-planner-manager) |
| Competitor ad watch | Tracks what a client's competitors are running publicly and what changed | Reports only what the Ad Library shows, never contacts competitors | [Competitor Ad Watch](/bots/competitor-ad-watch) |
| Social drafts on a client account | Writes the week's posts and reply options in the client's voice | Everything is drafts and reports, nothing posts or replies without you | [X Account Crew](/bots/x-account-crew) |
| Creative variants for a campaign | Produces headline, body, and format variations from an approved brief | Never spends credits or launches anything without your explicit go | [Ad Creative Generator](/bots/ad-creative-generator) |
| Internal roster status | Pulls together where every account stands before your Monday call | Posts only to your own DM, never to a shared channel | [Standup Scribe](/bots/standup-scribe) |

The fifth boundary is the one that pays for itself in a single incident. A
creative bot that can launch is a bot that can spend a client's budget at
machine speed on a variant nobody read, and the money is not yours. The sixth is
subtler and just as useful: an internal status that lands in your own DM cannot
be accidentally posted into a channel a client sits in.

The metric-level build underneath the reporting bot, including how to make a
number carry its own provenance, is in
[the KPI reporting setup](/blog/grok-bot-to-kpi-reporting). The watching side
has its own walkthrough in
[the competitor monitoring guide](/blog/grok-bot-to-competitor-monitoring).

## One bot with access to seven clients is a leak waiting to happen

The confidentiality failure in an agency is never dramatic. Nobody exports a
database. It is one sentence in a document, and it looks like this.

The report for client A contains a helpful line noting that another brand in
their category saw three times the return from the same channel. Anonymised, so
it feels fine. In a category with four serious players and an agency that
publicly lists its clients, anonymised is identifiable, and the person reading
it works out who you meant before they finish the sentence.

Or a bot with memory across accounts learns what worked for B and writes it into
A's strategy document, which is precisely the thing B pays you not to do. Or a
screenshot lands in the wrong deck because both files sat in one folder. Or the
bot pulls a dashboard while signed into whichever account was used last, and the
numbers in A's report are B's numbers, which nobody catches because they look
plausible.

What makes this structural rather than careless is the shape of the runtime. All
bots on your account share one persistent cloud computer, and that computer is
assigned to your user account rather than to an individual bot. Browser cookies,
signed-in sessions, files, and command line credentials are shared across every
bot. Each bot gets its own screen, and the documentation states directly that the
screens are separate work surfaces and not separate security boundaries, along
with the instruction not to use separate bots as a security boundary at all.
Deleting a bot does not remove the shared files or the browser sessions behind
it.

So the intuitive fix, one bot per client, is explicitly the wrong one. It gives
you seven review surfaces and exactly one blast radius.

One more thing to check before any of this touches client data: most master
services agreements and data processing agreements say something about
subprocessors, confidentiality, and where client data may be processed. That is
a contract question rather than legal advice from an article, and it is a
cheaper question to ask now than after a client asks it.

## Rank the separation options by what each one actually buys

Given the platform reality above, here is the ranking, strongest first, with the
part everyone skips: what each option does not buy you.

| Option | What it actually isolates | What it does not fix | What it costs |
| --- | --- | --- | --- |
| A separate account per client | Everything, because the computer belongs to an account | Your own habits, and anything you paste across windows | A second subscription and a second setup for every client on it |
| Exports instead of signed-in sessions | Every failure that starts with the wrong session | A file dropped in the wrong folder | A recurring ask of the client, and a delay when an export breaks |
| One folder per client, named in an allowlist | Accidental reads of another client's material | A deliberate route around the allowlist | Nothing except discipline |
| Client code in every heading | Nothing, but it makes a wandering document announce itself | The document that never gets read | Nothing |
| No cross-client memory, ever | The strategy doc that quietly learns from another account | Anything the model saw in the same run | A memory file that is less useful than it could be |
| A written offboarding checklist | The long tail after a client leaves | Anything you did not write down at the time | Twenty minutes, once, per departure |

Read that table top down and one thing becomes obvious. Only the first row is a
technical boundary. Everything below it is a procedure, and procedures fail
quietly, which is why the ones listed here are chosen for being checkable rather
than for being strict.

Separate accounts, which means separate computers, is the only genuine isolation
available to you, because the computer belongs to a user account. For a client
whose contract demands it, or whose data is regulated, that is the answer, and
it costs what it costs.

Everything else is defence in depth around a shared machine. That is a
legitimate position, and it is a different claim from "the clients are
separated". Be honest with yourself about which one you are making, because you
may eventually have to make it to a client.

The memory row deserves one extra sentence, because it is the row people relax
first. Treat client identity the way
[Persistent Bot Memory](/bots/persistent-bot-memory) treats secrets and customer
data, which is as something that does not go in at all.

## Six ways client data crosses accounts, and the sentence that does it

None of these involves a breach. Every one is a normal day.

| How it happens | The moment it goes wrong | The control that catches it |
| --- | --- | --- |
| The helpful benchmark | A report says "another brand in your category saw 3x" | Charter forbids any comparison, benchmark, or average |
| The learned tactic | A strategy doc reuses what worked for a different client | Per-client memory file that never names another client |
| The wrong session | A dashboard is pulled while signed in as the previous client | Exports only, so no session exists to be wrong |
| The shared folder | A screenshot from one client lands in another's deck | Allowlist naming exactly one path, per charter |
| The wandering document | A file is opened, edited, and saved in the wrong place | Client code in every heading, so the document announces itself |
| The stale access | A departed client's session is still signed in six months later | Written offboarding checklist run on the day |

Rows one and two are the ones that survive every technical control, because they
are the bot being useful. A model that has seen two accounts will draw on both
unless told not to, and the instruction has to be absolute rather than tasteful:
no comparison, no benchmark, no average, no "brands like yours". A hedged
version of that rule is not a rule.

## Ask for exports instead of logins, and say why on the call

This is the highest-leverage habit on the list, and it is worth doing
deliberately rather than by default, because it changes what you ask clients
for.

Do not sign a bot into a client's ad platform, analytics, CRM, or CMS on a
shared machine. Instead ask for a scheduled export delivered to a folder, or
pull a read-only viewer seat yourself and drop the file there. A bot that never
holds a session cannot use the wrong one, and that single property removes the
majority of the failure table above.

Say the reason out loud when you ask. "We do not connect automation directly to
your ad account; we work from exports so nothing of yours is ever signed in on a
machine that touches another client" is a sentence that wins trust rather than
costing it, and it is a considerably better conversation than the one where a
client asks how their credentials are stored and you improvise.

When a client cannot provide an export, the fallback order is: a read-only
viewer seat you hold and export from yourself, then a manual export you take
each week, then a signed-in session on a separate account created for that
client alone. What is not on that list is a signed-in session on the shared
machine. The static egress addresses the runtime uses are worth knowing about
here too: bots browse from fixed datacenter IP addresses and some services flag
those, so a platform that refuses to load for the bot is a nudge toward the
export path rather than a problem to route around.

## Offboard by checklist, because deleting a bot cleans up nothing

This is the part agencies discover late, usually during a security questionnaire
from a client who is still with them.

Start from the documented behaviour. Deleting a bot does not remove
shared-computer files or browser sessions. Deleting a bot does delete its
routines, and nothing is stored at team level, so the automation disappears
while the artifacts it created do not. There is no audit view of bot actions
yet, and the app keeps only the twenty most recent run records per routine, with
a maximum of fifty routines per bot. Put those together and the position is
uncomfortable: your record of what a bot touched for a departing client is thin,
capped, per bot, and deleted along with the bot that made it.

There is a team-level control described as coming soon rather than shipped, an
admin action that deletes the machine while keeping durable storage. Note the
second half of that sentence. Even the future version is not an eraser. The
full picture of what shared means, item by item, is in
[the shared computer security guide](/blog/grok-bot-shared-computer-security).

So write the checklist now, and run it on the day the engagement ends.

| Step | Why it is on the list | Done when |
| --- | --- | --- |
| Export the run records you still have | They are capped at 20 per routine and vanish with the bot | The file is in your own records, outside the tool |
| Sign out every session belonging to that client | Sessions are shared and survive bot deletion | You have opened each one and confirmed it is signed out |
| Delete the client's folder and every export in it | Files are shared and survive bot deletion | The path returns nothing |
| Revoke the viewer seats you hold on their platforms | Access you kept for convenience outlives the retainer | You have checked from the client's side, not yours |
| Remove any taught workflow recorded on their systems | Teach-by-demonstration records visible interaction with a screen | The recording and any draft skill from it are gone |
| Delete the per-client memory file | It is the one artifact designed to persist | The file is gone and its replacement is not |
| Delete the bot itself, last | It takes its routines with it, and nothing else | The bot is gone |
| Note the date and who ran the list | You may be asked in a year | The note exists somewhere you will find it |

Order matters in exactly one place. Deleting the bot goes last, because it is
the step that destroys your own record of what the bot did, and every step above
it is easier to perform while you can still see the bot's routines.

The uncomfortable conclusion is that offboarding is a manual, human, twenty
minute job on a platform designed to make everything else automatic. Budget for
it in your engagement close, the same way you budget for the final invoice.

## Run a monthly cross-contamination check that can actually fail

Controls you never test are controls you are assuming. This check takes about
ten minutes a month and is designed so that a pass means something.

Take last month's outgoing client documents, all of them, and search each one
for the name of every other client on your roster and every one of their
products and brands. That is a single grep, run across a folder, and it will
almost always return nothing. Run it anyway, because the one time it returns
something is the incident that loses an account.

Then check the things a document search cannot see. Open the folder of one
client at random and confirm every file in it belongs to that client. Look at
the signed-in sessions on the machine and confirm that every one of them has a
reason to exist today. Open one memory file and read it end to end, looking for
a single sentence that mentions anyone else.

Record the date and the result each month, even when the result is nothing.
Three lines in a text file is enough, and it converts "we are careful about
client separation" from a belief into a thing you can show somebody.

If any of those four checks fails, the fix is upstream. A file in the wrong
folder means the allowlist in a charter is missing or wrong, and rerunning the
bot changes nothing about next month.

## Prove the report is true before the client reads it

A client report is the one artifact in this roster where a mistake is read by
someone outside your company. It needs a verification pass cheap enough that you
actually run it every week, which means four things and about ten minutes.

Definitions written once, in the client's own words. What conversions means, in
which tool, over which window, attributed how. Definition drift is the failure
that makes three months of reports indefensible in one meeting, and
[the KPI reporting setup](/blog/grok-bot-to-kpi-reporting) treats it properly.

Every number carries source, query, and timestamp on the same line. A number
that cannot carry those is deleted rather than published. This is the rule that
turns "the dashboard said so" into something you can defend.

The could-not-compute section survives into the client version. "Paid search is
missing for the 14th because the export failed" is a better sentence to send
than a silently smaller number, and clients respect it more than you expect.

Then the check that is specific to agencies and takes eight seconds: before
anything goes out, search the document for the name of every other client and
every other client's product on your roster. Not because you expect a hit. You
run it precisely because the one time it hits, it is the incident that loses an
account, and no amount of charter text substitutes for a grep you actually
performed.

## Nine things an agency never hands to a bot

Sending anything to a client. The report is a draft until a human presses send,
including the routine ones, including the good news.

Publishing to any account you do not own. Posts, replies, DMs, stories,
comments. A client handing you their credentials is trust in your judgment, and
that trust does not transfer to your automation.

Launching, editing, pausing, or rebudgeting paid campaigns. Money that is not
yours moving at machine speed with no undo, and an approval prompt governs the
proposed action rather than reversing spend already committed.

The unhappy client email. Performance complaints, scope disputes, late
deliverables. Whatever the bot writes will be fluent and slightly defensive, and
the recovery conversation is the account.

Anything with a contract number in it: scope, deliverable counts, timelines,
rates.

Causal commentary. The bot states what moved and by how much. Why it moved is
the judgment your retainer is paying for, and it is the sentence a client
repeats to their board.

Cross-client benchmarking, in any form, including anonymised. With seven clients
in one niche, anonymised is a puzzle with one answer.

Case studies, testimonials, and award entries that quote client results before
the client has approved the wording.

Deciding which account gets attention this week. That is a resourcing decision
with margin consequences and it belongs to a person who will answer for it.

## Paste one reporting charter per client, with the code baked in

One charter per client, and the client code is baked in rather than passed as a
parameter. That is deliberate: a bot that can take a client code can take the
wrong one.

\`\`\`text
You are the Reporting bot for ONE client: <CLIENT CODE>. You know
nothing about any other client and you never go looking.

// TRIGGER
Thursdays 06:00 <IANA zone>. One run per week.

// WHAT YOU MAY READ, EXHAUSTIVE
- /clients/<CLIENT CODE>/exports/      (files I put there)
- /clients/<CLIENT CODE>/brief.md      (the metric definitions)
- /clients/<CLIENT CODE>/last-report.md
You may not open any other folder under /clients, any shared drive, or
any signed-in dashboard. You never sign into a client platform. If a
file you need is missing, say so and continue. Never substitute
another source.

// DEFINITIONS ARE FIXED
Use the metric definitions in brief.md verbatim, including the
attribution window and which tool each number comes from. If a
definition is ambiguous, do not resolve it yourself: put it under OPEN
QUESTIONS and leave that metric out of the report.

// OUTPUT -> /clients/<CLIENT CODE>/drafts/<YYYY-MM-DD>-report.md
1. HEADER: client code, period covered, and the newest row timestamp
   found in each source file.
2. THE NUMBERS: per metric, the value, the prior period value, the
   change, and on the same line the source file, the filter used, and
   the export timestamp. A number with no source line is deleted, not
   published.
3. WHAT MOVED: at most five factual observations, each naming a metric
   and the size of the change. State what changed, never why. Causal
   claims are mine to write.
4. COULD NOT COMPUTE: every metric you could not produce and the
   specific reason, in plain language a client can read.
5. OPEN QUESTIONS: anything ambiguous, one line each.

Every heading starts with <CLIENT CODE>. Never mention, compare to, or
reference any other company we work with, any industry benchmark, or
any average. You have no basis for one and no permission to imply one.

// WHERE YOU STOP
You never send, email, share, or upload the report anywhere.
You never post, reply, or message from any account, ours or a
client's.
You never create, edit, pause, or rebudget an ad campaign, and never
spend anything.
You never write into a client's own systems: CMS, CRM, ad platform,
analytics, or project tool.
You never write to any path outside /clients/<CLIENT CODE>/.

If a task cannot be completed without crossing one of those lines,
stop, say what you would have done, and wait. Failing is the correct
outcome. Do not find another route to the same effect.
\`\`\`

Run it against a client whose last three reports you still have, compare line by
line, and only then add the second client.

Two lines in there are the ones to keep verbatim when you adapt it. The
exhaustive read list, because "you may read the client's folder" and "you may
read exactly these three paths" behave differently the first time a file is
missing. And the sentence forbidding benchmarks and averages, because that is
the single instruction standing between a useful model and the most common way
an agency leaks.

## The objection: separate accounts cost more than the problem is worth

The strongest argument against the ranking above is money. A separate account
per client is a separate subscription per client, and for a seven-person shop
with seven retainers that is a real line item to protect against a failure that
has never happened to you.

That objection is right for most of the roster and wrong for part of it, and the
useful move is to stop treating the decision as one decision. Sort your clients
into three groups. The ones whose contract or regulator requires isolation get
their own account, and you price it into the retainer rather than absorbing it.
The ones with a direct competitor also on your roster get their own account, or
you accept that a single sentence is the whole risk. Everyone else runs on the
shared machine with exports, allowlists, and the monthly check.

Two or three isolated accounts out of seven is a very different bill from seven,
and it puts the money exactly where the risk is.

The version of this objection that does not survive is the one that skips the
procedures because the accounts are too expensive. Exports instead of logins,
an allowlist per charter, a memory file that names nobody else, and a monthly
grep cost nothing at all. If the budget argument is real, those four are the
things it obliges you to do, not the things it excuses you from.

## Where one charter per client stops scaling

Copying a charter per client works cleanly up to about ten clients and then
starts to hurt, because a change to the reporting format means editing ten
files, and the tenth one gets missed.

At that point the honest options are limited, and none of them is a bot that
takes a client code as input. Keep a template file that is the source of truth
and regenerate the per-client charters from it, so the copies stay copies.
Reduce the number of clients whose report differs structurally, which is usually
a sales conversation rather than a tooling one. Or accept the editing cost as
the price of the property you actually wanted, which is that no single bot can
address more than one client.

The other place it strains is a client with several brands under one contract.
Treat each brand as its own client code if their teams do not overlap, and as
one code if the same three people read every report. The question is never how
the contract is structured, it is who would be surprised to see brand B's
numbers in brand A's document.

The same separation problem shows up one engagement at a time for independents,
which [the consultant roster](/blog/bots-for-consultants) picks up from there.

**Keep reading:** [Bots for Ecommerce](/blog/bots-for-ecommerce), [Bots for Engineers](/blog/bots-for-engineers), [Bots for Finance](/blog/bots-for-finance).

## Frequently Asked Questions

### Can AI bots write client reports for an agency?

They can produce the entire draft, which is most of reporting day. A bot pulls
the numbers from exports you provide, applies the metric definitions you wrote,
states what changed and by how much, and lists everything it could not compute
and why. What it should not write is the causal commentary, because explaining
why a channel moved is the judgment the retainer pays for. And it should never
send anything: the report stays a draft until a person has read it end to end.

### How do you keep client data separate when one bot serves several accounts?

Understand first that separate bots do not do it. Every bot on an account shares
one persistent cloud computer, with shared files, cookies, and signed-in
sessions, and the documentation says explicitly not to treat separate bots as a
security boundary. Real separation comes from separate accounts, from working
off exports instead of signed-in sessions, from one charter per client with an
allowlist naming a single folder, and from never letting a memory file mention a
second client. Offboarding is a manual checklist, since deleting a bot cleans up
nothing.

### What should an agency bot never be allowed to do?

Send to a client, publish on an account you do not own, or spend money. Those
three cover most of the damage. Add the unhappy client email, anything quoting
contract scope or rates, causal explanations of performance, and cross-client
benchmarking of any kind, including anonymised comparisons, which are rarely
anonymous inside a niche. The reliable test is whether an error would be visible
to someone outside your company, and whether it could be withdrawn afterwards.
If the answer is visible and no, a person does it.

### Is it safe to give a bot access to a client ad account?

Treat a signed-in client session on a shared machine as available to everything
on that machine, because cookies and sessions are shared across all your bots
and deleting a bot does not remove them. There is also no audit view of bot
actions yet, so you would be reconstructing any incident by hand. Use exports or
a read-only viewer seat you pull yourself, keep spending authority with a human,
and check what your client contract says about processing their data on
third-party systems before you connect anything.
`,
};
