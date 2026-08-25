import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Markdown Vaults as Agent Memory: One Source of Truth',
  description:
    'Obsidian AI agent memory works because a vault is a folder of markdown. Structure one so every bot reads the same facts, keep it pruned, and version it in git.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Markdown Vaults as Agent Memory: One Source of Truth

Two of your bots answered the same question differently in the same week. The
support drafter said onboarding takes five business days. The sales research
bot said two weeks. Neither was lying. They were reading different things,
because nothing said which thing was the real one.

That is the actual problem with running more than one bot. It is not
capability and it is not cost. It is that every bot builds its own picture of
your company out of whatever it happened to touch, and nobody ever compares
the pictures.

The pattern that has quietly won among people running several bots is
unglamorous: keep one folder of markdown files, point every bot at it, and
treat it as the only place facts are allowed to live.

## Treat the folder itself as the integration surface

The reason a markdown vault works as shared agent memory has nothing to do
with any AI feature. It is a storage decision that happens to be perfect for
this.

Obsidian's own documentation is explicit about the format. Notes are stored as
[Markdown-formatted plain text files in a vault](https://obsidian.md/help/data-storage),
and a vault is "a folder on your local file system, including any subfolders."
The same page says outright that because the files are plain text, "you can
use other text editors and file managers to edit and manage notes," and that
Obsidian refreshes the vault to pick up external changes.

Read that as an integration spec and it is remarkable. There is no API to
authorise, no connector to grant, no export step, no rate limit, and no vendor
in the path. A bot that can read and write files on the machine where the
vault lives is already a fully capable client. So is \`grep\`. So are you, in a
text editor, at eleven at night, fixing the thing the bot got wrong.

This is also why the pattern is not really about Obsidian. Obsidian is a good
reader for humans, and its linking and search make the vault pleasant to
maintain. But the artefact is the folder. If you deleted the app tomorrow the
bots would not notice.

## Memory holds preferences, the vault holds facts

Here is the line that keeps this from turning into a mess, and it is worth
writing on the wall:

**Memory is not a substitute for an authoritative source.**

A bot's memory, whatever your runtime calls it, is a good place for how you
like things done. Your voice. Your formats. Who owns what. The fact that you
hate exclamation marks and want dates written as 14 Aug rather than 08/14.
Those are preferences, they change slowly, and being slightly stale costs you
nothing.

Facts are different. A price, a policy, a service level, an eligibility rule,
a deprecated plan name. Being stale on one of those is how a customer gets
told something untrue in writing with your name on it.

| Kind of thing | Where it belongs | Cost of it being stale |
| --- | --- | --- |
| Tone, formats, layout preferences | Runtime memory or the charter | Cosmetic, you fix it in the next draft |
| Policies, definitions, decisions | The vault, one note each | A wrong answer sent to a real person |
| Prices, stock, account status | Neither, query the live system | A confident wrong number nobody catches |
| Credentials, customer records | Nowhere a bot writes | A breach with no deletion path |

That third row is the one people fight. If pricing lives in a billing system,
the vault should hold a note that says where pricing is authoritative and what
the bot must do when it cannot reach it, not a copy of the numbers. Copying a
volatile fact into a document is how you build a second source of truth, which
is the exact thing you were trying to avoid.

The fourth row is a hard boundary, not a suggestion. A vault has no retention
policy, no access log, and no deletion path once a bot has read a note into a
draft. Our directory listing for [Persistent Bot Memory](/bots/persistent-bot-memory)
carries that as its stated boundary for a reason: the bot never stores secrets,
tokens, passwords, or customer data in memory. Apply the same line to the vault
and you never have to reason about it again.

## Decide how many vaults you need before you decide what goes in them

Layout is the second question. The first is how many folders exist at all, and
that one is expensive to reverse once bots have been pointed at paths.

Obsidian's documentation settles the mechanics. It says you can open multiple
folders as individual vaults, using work notes and school notes as the example,
and recommends against nesting them: "we recommend that you don't create vaults
within vaults," because links may not be updated correctly. Several vaults is a
supported shape. A vault inside a vault is not.

| Setup | When it is the right call | What it genuinely buys you | What it does not buy you |
| --- | --- | --- | --- |
| One vault, every bot reads it | One business, one confidentiality domain | No sync step, no duplicate facts, one place to fix a wrong answer | Nothing, and for most people that is the correct trade |
| Two vaults side by side, never nested | Two businesses, or client work alongside your own | An unambiguous answer to which company a note is about | Isolation between bots, which the section below explains |
| A vault plus live lookups | Anything volatile: prices, stock, account status | A note naming where the truth lives instead of a stale copy | An answer when the live system is down, which is deliberate |

The trap is the second row. Separating vaults feels like separating access and is
not. It is an organising device that helps you and helps retrieval, and on a
shared computer it stops there. Anything you would only be comfortable with
because it sits in the other folder belongs in neither.

## Structure it so a bot can find things without reading everything

A vault with two hundred notes and no shape is worse than five good files,
because a bot that cannot find the right note will happily answer from the
wrong one.

Two rules do most of the work. One note per fact, and a directory name that
tells you what kind of note is inside. Something like this holds up past a
hundred notes:

\`\`\`text
company-vault/
  00-index.md            one page, links every top-level area, bots read this first
  policies/              one note per policy, present tense, no history
    refund-policy.md
    support-hours.md
    data-retention.md
  definitions/           what a word means here, especially metrics
    qualified-lead.md
    active-customer.md
  decisions/             dated, append-only, never edited after the fact
    2026-07-14-retire-pro-plan.md
  sources-of-truth.md    where each live fact actually lives, and how to reach it
  people.md              who owns what, who to route to
  archive/               nothing in here is current, bots must not read it
\`\`\`

The \`00-index.md\` file earns its place. It is the one file every charter names,
and it is a map rather than content. If a bot only reads one file it should
still know that refund questions live in \`policies/refund-policy.md\` and that
prices are not in the vault at all.

The \`decisions/\` folder is the one people leave out and later wish they had.
It answers "why is it like this", which is the question that otherwise costs
you twenty minutes of scrollback archaeology every few weeks.

## Name and write each note so exactly one of them wins

Structure gets a bot to the right folder. Naming gets it to the right file, and
this is where most vaults quietly fail, because two notes that could both answer
a question produce a coin flip you never see.

Title the note with the question it answers rather than the topic it covers.
\`support-hours.md\` is a topic. \`when-can-a-customer-reach-us.md\` is a question,
and a question matches the way a bot arrives.

One fact per note, and never two current notes answering the same question. One
of the pair becomes a summary with \`authoritative: false\` and a \`source\` pointing
at the other, or it goes to the archive. This is the most common defect in a
vault that has been running a year.

Put the answer in the first two lines. Bots and people both stop reading, just at
different depths.

Spell out the words a real person would use, including the wrong ones. A refund
note that never contains the phrase "money back" will lose to a marketing page
that does.

| The question a bot is asked | The note that should win | Why it wins |
| --- | --- | --- |
| How long does onboarding take? | \`policies/onboarding-timeline.md\` | The title carries both the noun and the measure being asked about |
| Can this customer get money back after 40 days? | \`policies/refund-policy.md\` | The body spells out "money back" and "chargeback", not only "refund" |
| What counts as an active customer? | \`definitions/active-customer.md\` | A definitions folder keeps a metric from being answered by a policy that merely mentions it |
| Why did we retire the Pro plan? | \`decisions/2026-07-14-retire-pro-plan.md\` | Dated decision notes are the only place reasoning is allowed to live |
| What does the Team plan cost? | None. \`sources-of-truth.md\` routes to billing | The vault holds no volatile numbers, so nothing can win incorrectly |

That last row is the point of the table. A vault is as much a set of deliberate
absences as a set of notes, and a note saying "not here, go there" often does
more work than one that answers.

## Front matter is the part a bot can actually act on

Prose is for you. Front matter is for the bot. Give every note a small,
boring header and you get filtering, staleness detection, and a review queue
for free.

\`\`\`text
---
title: Refund policy
status: current          # current | superseded | draft
owner: Dana
last_reviewed: 2026-08-04
review_every: 90d
authoritative: true      # false means this note summarises something else
source: none             # or a URL/system that outranks this note
---

# Refund policy

Full refund within 30 days of the first charge, no questions asked.
After 30 days, prorated credit only, and only on annual plans.
Chargebacks are handled by Dana personally and never by a bot.
\`\`\`

Now the instruction you give a bot has teeth. It can be told to refuse any note
where \`status\` is not \`current\`, to flag anything past its \`review_every\`
window instead of quoting it, and to follow \`source\` upward when
\`authoritative\` is false rather than answering from the summary.

That last one matters more than it looks. Summaries are where drift starts.
A note that honestly declares itself a summary of something else is a note
that cannot quietly become the truth.

Five fields carry almost all the value, and a header that short never gets
skipped.

| Field | Allowed values | What a bot does with it |
| --- | --- | --- |
| \`status\` | current, superseded, draft | Refuses to use anything that is not current, including a missing value |
| \`authoritative\` | true, false | When false, follows \`source\` upward instead of answering from the note |
| \`source\` | none, or a URL or named system | Tells the bot where the real answer lives when this note is a summary |
| \`last_reviewed\` and \`review_every\` | a date, and a duration | Prints a STALE line in its report rather than quoting silently |
| \`owner\` | a person's name | Who the report goes to when the note turns out to be wrong |

Anything beyond those five is for you, not the bot. Tags and links are worth
having, and no charter rule should depend on them, because a field that only
sometimes exists produces behaviour that only sometimes happens.

## Pruning is the maintenance job nobody schedules

Every shared knowledge base dies the same way. It grows, nothing is ever
removed, and eventually the median note is wrong often enough that people stop
trusting any of them. The bot does not stop trusting them, which is worse.

Three habits keep it alive, and they cost about twenty minutes a month.

Move, do not delete. When a policy changes, the old note goes to \`archive/\`
with \`status: superseded\` and a line pointing at what replaced it. The charter
forbids reading \`archive/\`. You keep the history and the bot never sees it.

Let the review dates build your queue. Once a month, list every note whose
\`last_reviewed\` plus \`review_every\` is in the past. That list is the whole
job. Confirm or update each one and stamp the date. If a note has been
confirmed unchanged three times running, widen its \`review_every\` and stop
paying attention to it.

Cap the size of what gets read on every run. The index and the sources file
should stay short enough to read end to end in two minutes, because you will
need to do exactly that during a review. Everything else is looked up on
demand.

## Git turns the vault into the audit trail you do not otherwise have

This is the argument that convinces engineers and should convince everyone
else. The vault is plain text in a folder, so \`git init\` works, and once it
works you get things that are genuinely hard to build any other way.

You get a diff. When a bot updates a note, you can see the exact words that
changed, when, and next to what else. You get blame, so "when did we start
saying five business days" is one command rather than a memory test. You get
revert, so a bad automated edit is undone in seconds rather than reconstructed
from a draft someone still has open.

And you get a record of bot activity that does not depend on your runtime
providing one. That matters concretely with Grok Bot: as of writing, the
documentation states that an audit view of Bot actions
[does not exist yet](https://docs.x.ai/grok-bot/teams-and-enterprises). If you
want to know what your bots changed last week, a versioned vault is currently
the most reliable answer available to you.

Two practical notes. Commit on a schedule rather than on every write, or a
chatty bot will produce a commit log nobody can read. And add
\`.obsidian/workspace.json\` to \`.gitignore\`, since it tracks window layout and
changes constantly for reasons that are not interesting.

If you are weighing this against runtime memory features, the tradeoffs are
laid out in [what a Grok Bot actually remembers between runs](/blog/grok-bot-memory).
The short version: use both, and put anything you would be embarrassed to get
wrong in the vault.

## Every bot you run can read every note in it

The vault pattern fits Grok Bot's architecture unusually well, and it is worth
understanding why, because the same property is a warning.

Per the documentation, all bots on an account share one persistent cloud
computer, and that computer is
[assigned to your user account, not an individual Bot](https://docs.x.ai/grok-bot/computer-and-apps).
Each bot gets its own screen on that shared machine, but files, browser
cookies, signed-in sessions, and command-line credentials are shared across
all of them. The
[security documentation](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
puts it plainly: "Do not use separate Bots as a security boundary."

For a shared knowledge base this is exactly the behaviour you want. Write the
vault once, and your inbox triage bot, your research bot, and your
[Chief Of Staff](/bots/chief-of-staff) are all reading the same folder with no
sync step and no per-bot configuration.

It also means there is no such thing as a note only one bot can see. If you
were planning to keep a sensitive area of the vault away from a bot with
broad web access, the file system will not enforce that for you. The only
enforcement you get is what you choose not to put in the folder.

So the boundary belongs in the vault itself, and it is short: **no credentials,
no customer records, and nothing whose exposure you would have to report.**
Write it into \`00-index.md\` where every bot reads it, not just into the
charter of the one bot you were thinking about when you wrote it. The full
version of this argument is in
[what the shared computer really means for isolation](/blog/grok-bot-shared-computer-security).

## Paste this charter block into every bot that touches the vault

Drop this into any bot that touches the vault. It is deliberately boring, and
the refusal clauses are the load-bearing part.

\`\`\`text
KNOWLEDGE BASE

Read /company-vault/00-index.md at the start of every run, in full.
It maps every area of the vault. Follow it to find anything else.

Use a note only if its front matter says status: current.
If status is anything else, or missing, treat the note as not existing.

Never read anything under /company-vault/archive/. It is superseded by design.

If a note has authoritative: false, follow its source field and answer from
there. Never answer from a summary when the source is reachable.

If a note's last_reviewed plus review_every has passed, you may quote it, but
you must add a line to your report: "STALE: <note> last reviewed <date>."

Prices, stock levels, account status, and contact permission are never in the
vault. Read /company-vault/sources-of-truth.md and query the live system. If
that system is unreachable, stop and tell me. Do not use a remembered value.

WRITING TO THE VAULT

You may create and edit notes under decisions/ and definitions/.
You may not edit anything under policies/ ; propose the change in your report
and I will make it.
Every note you write gets full front matter, including owner and last_reviewed.
Never write credentials, API keys, passwords, customer names, customer email
addresses, or any personal data into any file in the vault. If a task appears
to require it, stop and ask.
\`\`\`

Two things about that block are worth noticing. The bot can write definitions
and decisions but not policies, because a policy is the kind of fact that
should change only when a human decides it has. And the staleness rule makes
the bot report its own uncertainty rather than hide it, which turns your review
queue into something the bots help maintain instead of something you maintain
alone.

If you are deciding which bot gets vault write access first, our
[Bot Advisor](/bots/bot-advisor) listing is a reasonable model for the shape of
a bot that reviews setups without rewriting them.

## Follow the onboarding contradiction back to the note that caused it

The two answers this article opened with are worth tracing down, because the
resolution is never "the model made it up" and is almost always something you can
see in a folder.

Ask both bots to cite. The support drafter says five business days and names a
note. The research bot says two weeks and names nothing, which is half the
diagnosis: it answered from a page on your own website, because nothing told it
where that fact lives. Two defects, then. One bot had no retrieval rule, and the
other cited a note written in March for a process that changed in June.

One fix each. The uncited bot gets the charter block above, which forbids
answering from memory or from a page it happened to find. The stale note gets
front matter with today's \`last_reviewed\`, \`review_every: 90d\`, and an owner who
is a person rather than a team.

On day three you find the third copy. The timeline is also in a sales deck and in
the welcome email template, neither of them in the vault. This is the step people
skip and the one that decides whether any of this works, because a fact stated in
four places has four expiry dates. Both become pointers at
\`policies/onboarding-timeline.md\`.

Thirty days later, ask both again. They agree, and more usefully they name the
same file. That distinction is the whole verification story: agreement on an
answer is weak evidence, since two bots can agree on a number they both inferred,
while agreement on a path is strong, because neither can invent a file the other
also read.

## Match a wrong answer to the vault defect behind it

Bad answers from a vault-backed bot are diagnosable in a way answers from memory
never are. The note either existed or it did not, and it either said what the bot
claimed or it did not.

| What you see | The defect | The fix |
| --- | --- | --- |
| Two bots answer the same question differently | The fact lives in two places, or in none | Make one note authoritative, turn the other into a pointer or archive it |
| A bot cites a note that is right but months out of date | No review dates, so nothing ever surfaces staleness | Add \`last_reviewed\` and \`review_every\`, then work the monthly queue |
| A confident answer with no note named | The charter does not require a citation | Require the note path in every answer and treat a missing one as a failed run |
| A retired policy quoted back to you | The old note was edited in place instead of archived | Move to \`archive/\` with \`status: superseded\` and a line naming its replacement |
| Slow, vague answers that touch twenty notes | The index has quietly become content instead of a map | Cut the index back to links and one line each |
| A bot edits a policy without asking | Write scope was never narrowed | Limit writes to \`decisions/\` and \`definitions/\`, everything else is a proposal |

Four of those six are fixed by editing a file rather than a prompt, which is the
argument for keeping facts in files in one line.

## The strongest objection is that a vault is one more copy to maintain

The honest case against all of this: a vault is itself a copy of reality, so you
have not removed a source of drift. You have added a document needing an owner, a
review cadence, and a monthly twenty minutes nobody is paid for.

True, and the alternative was never zero copies. It was the sales deck, the
welcome email, the help centre article, the pinned message, and one private
picture of the company inside every bot you run. The vault's claim is not that
copies disappear. It is that one copy has an owner and a review date and every
other is demoted to a pointer at it. You are not adding a document, you are
electing one.

It wins in two cases. With fewer than a dozen facts worth writing down, a single
page in the charter beats a folder structure. And if every fact you care about
already lives in one system a bot can query, the vault is a hop that can only be
staler than the system. There, write the routing file and nothing else: a vault
of one note is a perfectly good outcome.

## Ask three bots the same question on the first Monday of the month

The check that makes this real takes ten minutes and it can fail, which is what
separates it from a habit that only reassures you. Pick five questions you would
hate to get wrong in writing and ask every bot that reads the vault. Then ignore the answers and score the sources. No source named is a failure even
when the answer is right. Two bots naming different notes means the fact exists
twice. A note in \`archive/\` means the charter is ignored rather than enforced. A
page outside the vault means the bot is still answering from the open web.

Then run one command against the folder. Because the vault is plain text under
git, \`git log --since=30.days --name-only\` lists every note anything touched last
month, which is the record your runtime is not keeping for you.

One edge worth knowing before you treat deleting a bot as cleanup. The
[security documentation](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
states that deleting a Bot does not remove shared-computer files or browser
sessions. For the vault that is harmless, since notes were always meant to
outlive any single bot. For everything else that bot left behind, exports,
scratch files, a signed-in session, deletion is not cleanup and you still have to
go and look. The same discipline across several bots is in [running more than one
bot without them colliding](/blog/multi-bot-teams).

**Keep reading:** [Bot Boundaries](/blog/grok-bot-boundaries), [Every Grok Bot Integration and What Each One Unlocks](/blog/grok-bot-integrations-list), [Why Grok Bot Needs a Cursor Account and Every Way To Get Access](/blog/grok-bot-cursor-account-explained).

## Frequently Asked Questions

### Do I need Obsidian for this, or will any markdown folder work?

Any markdown folder works. Obsidian's documentation describes a vault as a
folder of Markdown-formatted plain text files on your local file system, and
states that other text editors and file managers can edit those files
directly. That is the whole mechanism. Obsidian adds a pleasant reader, good
search, and backlinks, which matter for the human half of the job. Nothing in
it is required by the bot. If you already keep notes in a folder of markdown
files, you have a vault and can point a bot at it today without installing
anything.

### What is the difference between bot memory and a knowledge vault?

Memory holds preferences and summaries, the vault holds facts. Preferences are
things like tone, formatting, and routing, where being slightly out of date
costs nothing. Facts are policies, definitions, and decisions, where being out
of date means someone gets told something untrue in writing. Keep facts in
files you can read, diff, and correct, and instruct the bot to read them at
the start of every run. Anything genuinely volatile, such as prices or account
status, belongs in neither: query the live system that owns it.

### Can I keep some notes private from one particular bot?

Not reliably, if you are running Grok Bot. The documentation states that all
bots on an account share one persistent cloud computer, that the computer is
assigned to your account rather than to a bot, and that files and sessions are
shared across bots. It also says directly that separate bots should not be
used as a security boundary. A charter instruction telling one bot to avoid a
folder is a convention, not enforcement. The reliable control is what you
choose not to put in the vault at all: no credentials, no customer records,
nothing you would have to report if it leaked.

### How large can the vault get before it starts hurting quality?

Total size matters less than what gets read on every run. Keep the index and
the sources-of-truth file short enough to read end to end in two minutes, and
let everything else be looked up on demand by path. The failure mode is not
volume, it is stale notes competing with current ones for the bot's attention.
Front matter with a status field and a review date fixes that: a bot that
refuses anything not marked current will behave well in a large vault and
badly in a small messy one. Prune monthly and move superseded notes to an
archive folder the charter forbids reading.
`,
};
