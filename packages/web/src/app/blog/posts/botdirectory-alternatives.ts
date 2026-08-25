import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Where to Find Grok Bot Setups: Directories Compared',
  description:
    'An honest map of bot directory alternatives: the four places Grok Bot setups actually live, what each one does better, and the check to run before you paste.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Where to Find Grok Bot Setups: Directories Compared

You want a working setup for a bot runtime, not a blog post about one. The
question is where to get it. There are four real answers, they are good at
different things, and the honest version of this article has to start with a
disclosure: botskills.sh is one of them. We are a directory. An article about
directories written by a directory is self-interested by construction, so the
useful thing we can do is name what the others do better and let you check the
claims yourself.

Everything below about another project was read from that project's own site,
repository, or documentation on 25 August 2026, and linked at the point of the
claim. These projects ship weekly. Follow the links before you rely on any
number here.

## Four places a working setup actually comes from

A "setup" is a block of natural language you paste into a runtime so it
configures itself: which tools to connect, when to run, what to produce, and
what to never do. That artifact travels in four ways.

| Source | What it is | Coverage | How something gets in | What travels with it | Ordering |
|---|---|---|---|---|---|
| botdirectory.ai | Dedicated open directory | Roughly 230 listings when we looked | PR, or an X mention, or an API call | Name, category, contributor, integrations | Copy count, newest, alphabetical |
| The runtime itself | Your own account's skills and routines | Whatever you built | You build it | Nothing, it does not leave your account | None |
| GitHub repositories | Files under version control | Unbounded, unindexed | Commit it | Whatever the repo's schema requires | Repo search |
| Posts on X | Screenshots and pasted prompts | Enormous, unsearchable in practice | Someone posts it | Usually nothing | Engagement |
| botskills.sh | Dedicated directory | 37 setups, 32 of them imported from botdirectory under MIT | PR reviewed against a schema | Integrations, runtimes, and a required boundary line | Recorded copies |

Read that table as a statement about trade-offs, not a scoreboard. Coverage and
curation pull against each other. The largest source has the least structure.
The most structured source is the smallest. That is not a coincidence and it is
not something a directory can talk its way out of.

## botdirectory.ai, and what it does better than we do

[botdirectory.ai](https://botdirectory.ai/) is the established directory in this
space and the first place most people land. Its own framing is a directory of
Grok Bot prompts, organised into six categories with an integration filter, and
it defaults to sorting by copy count.

Four things it does better than we do, plainly:

**It is much bigger.** When we counted, the listing table ran to roughly 230
entries against our 37. If your job today is "find something that already exists
for my exact tool", breadth wins and it is not close.

**The whole thing is MIT licensed and public.** The site is backed by
[a public repository](https://github.com/elie222/botdirectory.ai) where a bot is
a single markdown file under a bots directory. You can clone the dataset, fork
it, or read every listing as plain text without asking anyone. We publish an API
and an llms.txt, but a permissive licence on the entire corpus is a stronger
guarantee than any API, and they got there first.

**You can contribute without touching git.** Their documented paths are a pull
request, an API call, or tagging their account on X and letting a mention bot
open the PR for you. That last one removes the single largest barrier to
contribution from non-engineers. We require a pull request. For a marketer with
a setup worth sharing, their path is better.

**The maintainer builds a runtime too.** The same author publishes
[Rakazo](https://github.com/elie222/rakazo), an open-source runtime where you
choose your own model and sandbox. Someone who maintains a runtime and a
directory has a grounded view of what a portable setup file needs to contain.

There is a fifth thing, and it is the one you should weigh most heavily when you
read our coverage number. Thirty-two of our 37 listings are imported from
botdirectory.ai under its MIT licence, with the original contributor credited on
each file and a link back to the source. We added a boundary line to each and
edited for the schema, and that is the extent of it. Five setups in our
catalogue are original. So our directory is, in large part, their corpus with a
safety field bolted on, which the licence explicitly permits and which we think
is a legitimate thing to build. It also means "our catalogue has 37 setups" is
not an independent claim, and anyone comparing the two should know that before
they compare anything else.

Where their design and ours genuinely differ is the contribution contract. Their
guide lists name, category, timestamp, and integrations as the required
frontmatter, with the prompt body carrying everything else. We looked for a
required field covering permissions, destructive actions, or approval, and did
not find one documented. Validation on a submission is structural: schema,
unique slug, known category, non-empty prompt. That is a deliberate design, and
it is the design that makes a directory grow fast, which is exactly what a young
category needs. It also means the sentence about what a bot will never do lives
in prose, if the author thought to write it, rather than in a field you can
filter on.

## Judge a listing by the fields it either has or lacks

The difference between sources is not really breadth, it is what each one is
obliged to record. A setup is a set of instructions you are about to give
something with access to your accounts, and the fields around it are the only
thing standing between you and finding out the hard way.

| Field | What it tells you before you paste | botdirectory's documented required frontmatter | botskills.sh | A post on X |
|---|---|---|---|---|
| Category | Where it sits and what its neighbours are | Required | Yes | No |
| Integrations | Which of your accounts it will ask you to connect | Required | Yes | Rarely |
| Timestamp | Whether the runtime it targeted still behaves that way | Required | Yes | The post date, which is not the write date |
| Contributor | Who to ask when it does not work | Yes | Yes, carried through on every import | The poster, until the post is deleted |
| The action it never takes without you | Whether anyone considered the blast radius | Not documented as a required field | A not-null column | No |
| The runtime it was actually run on | Whether "it works" means anything for your setup | Not documented as a required field | Runtimes are listed, but that is a compatibility claim rather than a test record | No |

Read the last row as a criticism of us as much as anyone. Listing which runtimes
a setup targets is not the same as recording that somebody ran it there and
watched, and no directory in this space does the second thing. Read "works with"
on any listing, ours included, as an intention.

## What the runtimes give you, and what they quietly do not

The obvious place to look for a setup is the product itself. Here the
documentation is worth reading closely, because the answer is narrower than
people assume.

Grok Bot's own documentation for skills and routines describes discovering and
installing connectors and packaged skills from settings, and it states that a
skill you save is available across your own Bots. We read that page looking for
a way to publish a skill to another person, export one, import one, or browse a
community gallery, and found none documented as of 25 August 2026. Check
[the skills and routines page](https://docs.x.ai/grok-bot/skills-routines-and-automations)
yourself before you plan around this.

Routines are tighter still. A routine belongs to one Bot, a Bot can own up to
50, the app keeps the 20 most recent run records per routine, and deleting the
Bot deletes its routines. Nothing there is team level. Teach-by-demonstration
records up to ten minutes of visible computer work and produces a draft skill,
which is genuinely the fastest way to capture a browser workflow you already do,
but the output stays in your account.

That is the real gap a directory fills. The runtime is excellent at letting you
build a thing and terrible at letting you hand that thing to somebody else. If
your teammate needs to run your process, there is no documented path inside the
product, so the artifact has to live somewhere outside it.

Rakazo inverts this. Because the runtime is itself an open repository, the
source of truth for how to configure it is the repo and its docs, and
self-hosting is a documented path rather than a feature request. If data
residency is a hard requirement in your organisation, that matters more than any
directory's catalogue size, and you should start at the repo rather than at us.

## Repositories beat bookmarks

Both serious directories in this space are also GitHub repositories, and that is
the most underrated fact in the whole comparison. A bookmark to a listing page
is a promise that someone else keeps the page up. A fork is a copy you control.

If you are assembling a set of setups your team depends on, put them in your own
repository, in whatever schema you like, and treat any directory as an upstream
you pull from rather than a service you depend on. Diffs on a prompt file are
how you catch the day a setup quietly gained a permission it did not have last
month. There is no directory feature, ours included, that replaces reading a
diff.

Beyond directories, plain repositories are where the best setups often sit:
somebody's dotfiles, an engineering team's internal automation folder, a
[persistent memory repository](/bots/persistent-bot-memory) written for exactly
this purpose. These are unindexed and you find them by search or word of mouth.
That is a real cost, and it is why directories exist at all.

## X is the fastest source and the worst provenance

Most people's first exposure to a bot setup is a screenshot on X. The speed is
unbeatable. Something works, someone posts it, and it spreads the same day. Two
of our own catalogue's most-copied ideas started life as a post.

The cost is that a post carries no metadata. You cannot tell which runtime it
was tested on, when it was written, whether the poster ran it end to end or is
describing an aspiration, or what happened the third time it ran. Engagement
sorts posts, and engagement rewards a setup that sounds impressive over one that
is careful. The most dangerous posts are the ones that read as a flex about how
much authority the author handed over.

botdirectory's mention flow is a genuinely good response to this: tag their
account and the post becomes a durable, versioned file with an attributed
contributor. That is a better answer than a bookmark folder, and it is the
feature we would most like to have.

## Where botskills.sh sits, stated plainly

Three specifics, so you can judge us on the same axes.

**Every listing carries a required boundary line.** It is a not-null column in
our schema and one sentence naming the action the bot never takes without you.
[Lead Scout](/bots/lead-scout) never contacts anyone. [Inbox Triage](/bots/inbox-triage)
never sends an email. [PR Review Sentinel](/bots/pr-review-sentinel) never merges,
approves, pushes, or requests changes. A submission without one does not pass
review. This is our only real design opinion and it is not free: it adds
friction to every submission, and someone has to write the line by hand for
every import. We are newer and roughly a sixth the size, and that requirement is
part of why.

**Ranking comes from recorded copies, not from self-reporting.** The leaderboard
counts copy events from the database and sorts on them. With no reachable
database it returns zeros rather than a plausible-looking number, because a
fabricated count is worse than an empty one.

**We sell sponsor slots and we do not put our own products in them.** Flat
monthly rates, no auction, one sponsor per category, rotation so every sponsor
gets an equal share. Placement never changes a listing's rank, because rank
comes from copies. On any directory, ours included, the questions worth asking
are who operates it, whether paid placement is labelled, and whether payment can
move a listing up the list. Ask them of us.

## The strongest objection: a required boundary field is a checkbox

The sharpest criticism of our one design opinion is that it does nothing. A field
is only as good as the sentence typed into it, nobody is stopped from writing
something vague, and the runtime never reads it. That is documentation, not a
control, and both halves are true.

What the field buys is narrower than it sounds and still worth the friction. It
makes an omission visible, because an empty column is obvious in a way a missing
sentence in paragraph four is not. It forces the author to think about blast
radius once, when they are best placed to know. And it hands the reader a line to
quote into their own charter, which is the only place it becomes a constraint.

Where it fails is worth naming too. "Never do anything harmful" passes a
not-null check as easily as a good line does, so the field is only as strong as
the review behind it, and on a read-only setup it is close to noise. Reviewing
every line by hand is tractable at 37 listings and a different job at 230, which
is part of why the larger directory is larger. Structure is not free, and
pretending otherwise would be its own kind of dishonesty.

## Ask any directory three questions it should be able to answer

Audit the source, not only the listing. These three have checkable answers, and a
directory that cannot produce them wants trust it has not earned.

| The question | How to check it without asking the operator | What a weak answer looks like |
|---|---|---|
| How many listings are there really | If the corpus is a public repository, count the files in the bots directory | A number on a marketing page with no artifact behind it |
| Where did the listings come from | Open a few files and look for a source link and a named contributor | No attribution anywhere, on a corpus that feels familiar |
| Can money move a listing up the ranking | Check whether paid slots are visibly labelled and whether the order derives from something countable | Ranking described as curated, with no stated input |

Run all three on us. Question one is countable in a repository. Question two is
answered above in the least flattering form available: 32 of our 37 listings are
imported. Question three is copy events, a number rather than an opinion, and it
is a check that can fail: if our leaderboard ever renders a plausible-looking
ranking while the database is unreachable, we have broken our own rule, because
it is built to return zeros instead.

## The check that works on any source, including ours

Whatever the source, the same five-minute read protects you, and you can hand it
to a bot. Paste this into a chat with your runtime along with the setup you
found, before you let it configure anything:

\`\`\`text
You are reviewing a bot setup I found online. Do not configure anything and do
not connect any tool. Read the setup below and answer six questions in plain
prose, quoting the exact line you relied on for each.

1. Every external action it can take: sending, posting, paying, merging,
   cancelling, deleting, or writing to a system of record. List each one.
2. Every credential or connected account it needs, and the narrowest scope
   that would still let it work.
3. The single most expensive thing it could do if it misread its input.
4. Whether the setup states an action it will never take without me. Quote it.
   If there is no such line, say so directly.
5. Anything irreversible. An approval controls a proposed action; it does not
   undo work already done.
6. Rewrite the setup with one added boundary line naming the action it must
   never take without my approval, and change nothing else.

End with a one-line verdict: safe to run as written, safe with the added
boundary, or do not run.
\`\`\`

Question four is the one that does the work. Run it on a listing from any
source, ours included. If a setup cannot survive being asked what it will never
do, that answer is the finding.

## Trace one setup from a screenshot to something you can rerun

Here is the concrete version. You see a post showing a bot that clears out a
cluttered mailbox. It looks excellent, and it has no date, no runtime, and no
author beyond a handle.

Day one takes ten minutes. You paste the audit above along with the setup. The
answers come back: it can archive, unsubscribe and delete, and it wants a mail
scope wide enough to do all three. Nothing in it says what it will not do. You
add that line, and it looks like the boundary on our
[Email Purger](/bots/email-purger) listing: nothing is deleted, unsubscribed or
sent until you have approved the full list. Then you run it once and watch,
rather than walking away.

Day two is the step everyone skips. You save the setup as a file in your own
repository with three lines at the top: where you found it, the date, and the
runtime you ran it on. It cost thirty seconds.

Day thirty is why you did it. The original was edited upstream, or the poster
deleted the thread, or the bot behaves differently from how you remember. You
have a diff and a date. Without the file you have a memory and a screenshot, and
the memory is wrong.

## What goes wrong between finding a setup and running it

These are the ordinary failures. Two are not caught by the audit, and it is worth
knowing which.

| What you thought you were pasting | What happened on the first run | The check that catches it |
|---|---|---|
| A setup that tidies your inbox | It archived a thread you needed, and archive is not undo in every client | Audit question 5, anything irreversible |
| A setup that drafts answers to common questions | It replied to a real customer in your name | Audit question 1, every external action listed |
| A setup that clearly worked for the person who posted it | It targeted a different runtime and half the tool names do not exist in yours | Nothing in the audit; check the runtime, or ask the contributor |
| A setup with its limit buried in paragraph four | A long charter, and the model summarised the limit away | Audit question 4, which demands the exact line quoted |
| A setup you pasted six months ago | Upstream edited it and your copy silently drifted | Nothing in the audit; this is a diff, which is why the file belongs in your repository |

The two rows with no audit answer are the argument for keeping your own copies.
An audit is a snapshot of one moment. Version control is the only thing that
notices the moment after.

## Picking a source by what you are actually short of

If you are short of options, start at botdirectory.ai. Breadth is the thing you
need and they have roughly six times our coverage.

If you are short of trust, because the bot will touch a customer, a repository,
or money, start with a source that puts the limit in a structured field you can
read before you paste, then run the audit above anyway.

If you are short of control, because compliance will ask where the data sits,
start at the Rakazo repository and self-host. No directory answers that
question.

If you are short of time and it is Tuesday afternoon, take the post from X, run
the audit, and add the boundary line yourself. That is a perfectly reasonable
way to work, as long as the audit is not the step you skip.

Each of those choices costs you something specific, so name the cost and the
check that covers it.

| What you are short of | Start here | The risk you are accepting | The check that covers it |
|---|---|---|---|
| Options | botdirectory.ai | Thinner structure, and the limit may exist only in prose, if at all | Run the six questions and write the boundary line yourself |
| Trust | A source that records the limit in a field you can read before pasting | A much smaller catalogue, so your exact tool may simply be absent | Read the boundary line, then run the six questions anyway |
| Control | The Rakazo repository, self-hosted | You are now the operator, with the patching and the backups | Confirm data residency before you migrate anything real onto it |
| Time | The post on X | No date, no runtime, no provenance, no author you can reach | The audit is the one step you cannot skip |
| A way to keep it working | Your own repository, treating directories as upstream | Nobody maintains it but you | A diff on every pull, which is how you catch a new permission |

Most people end up using three of the four. Our [starter roster of five bots](/blog/one-person-company-grok-bot)
came together that way: two from posts, two rewritten from repositories, one
built by demonstration and then written down so it could survive the bot being
deleted.

## Where a directory stops being the right answer

A directory is a shortcut past the blank page, which is a real service and a
limited one. Four situations where the shortcut is the wrong move.

Your process depends on things no stranger can know: your ticket taxonomy, your
naming conventions, the one client whose invoices work differently. A generic
listing gets you sixty percent of the way and the remaining forty is where the
value sits, so treat it as a starting shape rather than an answer.

Compliance needs an artifact with a reviewer attached. A listing page is not a
control. If somebody has to sign off on what the bot may do, the setup lives in
your version control with a pull request and an approver, and the directory is
where the first draft came from.

Your runtime is not one any listing targeted. The prose transfers, tool names do
not, and connector semantics vary enough that "it works" from somewhere else is a
hypothesis rather than a result.

And the honest one: a setup you write yourself after doing the job manually five
times beats anything on any directory, ours included. You know what good output
means for your work and a stranger does not. Directories are best at the jobs you
have never done, which is also where you are least equipped to spot a bad setup,
and that tension is the reason the audit exists.

**Keep reading:** [Grok Bot Alternatives Compared](/blog/grok-bot-vs-openclaw-vs-hermes-vs-buzz), [Grok Bot vs Lindy](/blog/grok-bot-vs-lindy), [Grok Bot vs n8n](/blog/grok-bot-vs-n8n).

## Frequently Asked Questions

### What are the alternatives to botdirectory.ai?

The realistic alternatives are the runtime's own skills feature, GitHub
repositories, posts on X, and other directories including botskills.sh. They
solve different problems. botdirectory.ai is the largest dedicated directory and
is MIT licensed and forkable. The runtime is where you build a setup but offers
no documented way to hand one to another person. Repositories give you version
history and diffs. X is fastest and carries the least provenance. Most people
end up using several rather than picking one, and the choice depends on whether
you are short of options, trust, or control.

### Can you share a Grok Bot setup with someone else?

Not through the product, based on the documentation as of 25 August 2026. Grok
Bot's skills and routines documentation describes installing connectors and
packaged skills, and states that a saved skill is available across your own
Bots, but we found no documented export, import, publish, or gallery flow that
moves a skill to another person or team. Routines are tighter still: a routine
belongs to one Bot and is deleted with it. That gap is precisely why setup
directories exist. To share a process, the artifact has to live outside the
runtime, in a repository, a directory listing, or a document.

### How do I know a bot setup I found online is safe to run?

Read it for what it can do to the outside world before you read it for what it
promises. List every send, post, payment, merge, cancellation, and delete it
could reach, and every account it wants connected. Then look for an explicit
sentence naming what it will never do without you. If that line is missing, add
it yourself before pasting. Pay particular attention to irreversible actions: an
approval prompt governs the action being proposed, not work already completed,
so anything that deletes or sends needs the limit written in rather than caught
later.

### Does botskills.sh rank listings by who pays?

No. Ranking comes from recorded copy events in the database, sorted by copy
count. Sponsorship is sold as flat monthly slots with no auction, one sponsor
per category, and rotation so each sponsor gets an equal share of impressions,
and sponsored placements are separate from the catalogue ordering. We do not
place our own products in sponsor slots. These are questions worth asking of any
directory: who operates it, whether paid placement is visibly labelled, and
whether money can move a listing up the ranked list.
`,
};
