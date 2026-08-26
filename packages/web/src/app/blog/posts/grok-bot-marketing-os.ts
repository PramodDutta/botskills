import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Run a Marketing Audit Bot That Scores Work and Never Publishes It',
  description:
    'A grok bot marketing os that scores positioning, proof, offer, channel fit and measurement with evidence, names one bottleneck, and never publishes a word.',
  date: '2026-08-26',
  category: 'Playbook',
  content: `
# Run a Marketing Audit Bot That Scores Work and Never Publishes It

Most AI marketing audits are a horoscope with a number stapled to the front.
They arrive as eight modules, each scored out of ten, each accompanied by
sentences like "your positioning could be sharper" and "consider strengthening
social proof". Nothing in the report points at a page. Nothing tells you which
of the eight things to do on Monday. And the recommendations are the same
recommendations any company would receive, which is the tell that no artefact
was opened.

The open-source marketing packs going around make this better and worse at once.
Better, because they arrive with a real rubric, a scheduler, an ads module, a GEO
module, and an email module, which is more structure than most teams have written
down. Worse, because a pack that can score can usually also post.

The split worth building is an auditor that grades and a human who ships. The
[Marketing OS Auditor](/bots/marketing-os-auditor) in the catalog states it as a
boundary rather than a preference: it never publishes, never spends ad credit,
and never launches a campaign. Audits and drafts wait in the folder you named.
This is how to run that without the audit collapsing into vibes.

## Score artefacts you actually opened, not a vibe about the brand

The rule that makes an audit real is short: if you did not read it, you cannot
score it. Every score cites the artefact behind it, by URL or file name, with the
date it was read.

That rule kills most of what AI audits produce, which is the point. A positioning
score sourced from the general impression of a brand is a paraphrase of the
homepage headline plus a model's priors about your category. A positioning score
sourced from the homepage, the pricing page, and the top three posts, each
quoted, is a claim you can argue with.

Six modules cover most of what a small team needs, and each has a specific
artefact it must open.

| Module | The artefact it must open | What a low score actually means |
|---|---|---|
| Positioning | Homepage, pricing page, the phrase used in the first sentence | A stranger cannot say who this is for after ten seconds |
| Proof | Case studies, logos, testimonials, numbers with sources | Claims exist and evidence for them does not |
| Offer | Pricing page, the free tier, the call to action wording | The next step is unclear or costs more than it looks like |
| Channel fit | Last 30 posts or emails, and where traffic actually arrived | Effort is going where the audience is not |
| Measurement | The analytics property, its events, the conversion definition | Nobody can say what a win looks like numerically |
| GEO | How the product is described in AI answers, with the prompts used | Machines summarise you wrong, or not at all |

Score each 0 to 100 rather than out of ten, because a ten-point scale collapses
into 6, 7, or 8 and stops discriminating. Require a quoted line per score. A
score with a quote is evidence. A score without one is a feeling wearing a
number.

## Name one bottleneck, then the cheapest test that would move it

An audit that returns eight problems has returned zero, because a small team
will do none of them. The auditor's second job is to pick.

One bottleneck. Not a ranked list of five, not "the top three priorities". One,
named, with the reason it beats the others. Then the cheapest test that would
move it inside a week, with a metric and a stop rule, so the experiment can end
rather than becoming a project.

| Bottleneck named | Cheapest test that moves it | Metric and stop rule |
|---|---|---|
| Nobody understands what this is | Rewrite the first sentence, run it past 5 strangers | 4 of 5 can restate the product, or revert |
| Traffic arrives and does not convert | One landing page variant with the offer above the fold | 100 sessions each, keep the winner or neither |
| Proof is asserted, not shown | One customer number, sourced, on the pricing page | Ship in 3 days or the claim comes off |
| Effort is on the wrong channel | Stop one channel for two weeks, publish nowhere else | Total signups flat means the channel was noise |
| AI answers describe you wrong | One clear facts page, then re-ask the same prompts | Answer improves in 2 of 3 assistants, or drop it |

The stop rule is what makes the test cheap. A test with no stop rule is an
initiative, and an initiative outlives the question it was meant to answer.

Where the auditor has to hold its nerve: if the bottleneck is measurement, every
other score is provisional and it should say so. You cannot grade channel fit
against numbers that do not exist.

## Label every hook and caption as a draft until a human ships

An auditor that writes copy is useful. An auditor that writes copy and schedules
it has changed jobs without telling you.

So drafts are labelled in the text, not in the tone. The word draft appears in
the file name, in the first line, and on every row of any table of hooks. That
sounds pedantic until week three, when a hook that was obviously a suggestion in
the chat gets pasted into a scheduler by someone who was not there.

Grading its own drafts is the other half. Ask the auditor to score every hook it
writes against the rubric it used on your existing work, and to say which of its
suggestions it would cut. A bot that produces twelve hooks and rates all of them
highly is generating rather than auditing.

One phrasing rule for the charter: never write "ready to post". Write "draft,
unreviewed, not scheduled". The first is an invitation and the second is a
state.

## Read ad performance if connected, and never create or enable an ad

Ads are where an audit turns expensive fastest, so split this permission down the
middle rather than granting or withholding it as a lump.

Reading is fine and useful. Which campaigns ran, what they cost, which creative
got clicks, which audience did nothing, the cost per result last month. Reading
changes nothing, and it is the input a channel-fit score badly needs.

Creating, enabling, editing, duplicating, and pausing are all writes, and all of
them are off limits. Pausing looks harmless and is not: a paused campaign is a
changed campaign, and if the auditor can pause it can also unpause.

| Ad platform action | Auditor may | Why |
|---|---|---|
| Read spend, results, and creative performance | Yes | Reading changes nothing and the score needs it |
| Export a report to the named folder | Yes | Output stays in a place you chose |
| Draft new ad copy as labelled drafts | Yes | Text in a file is not a campaign |
| Create a campaign or ad set | No | It can start spending money |
| Enable, duplicate, or edit a live ad | No | Live spend, and no product-level cap exists |
| Pause or archive a campaign | No | A write is a write, and unpause is the same button |

The reason the No column is absolute rather than budget-limited: there is no
Grok Bot spend cap yet. Subscriptions include a weekly usage allowance with
on-demand overflow, and an ad account has its own separate money. A budget
ceiling written into a charter is a sentence the bot has been asked to respect,
not a limit anything enforces.

## Rewrite open-source marketing packs into this voice, do not paste them

The packs are reference material. They are worth reading closely, and they are
not worth dropping into production as-is.

Three reasons, in order of cost. The rubric encodes someone else's business, so a
pack built for an agency selling retainers scores channel fit in a way that makes
no sense for a product with a free tier. The prose carries a house voice, and an
audit written in a borrowed voice produces recommendations in that voice, which
leak into drafts. And packs ship with connectors attached to their modules, so
pasting the pack quietly grants the connectors.

That third one is the sharp edge. A pack is text plus an assumed toolset. Take
the rubric and the good questions, rewrite them against your own funnel, and
connect nothing you did not choose.

Provenance matters too. Copying a third-party prompt file into your operating
documents makes it unclear later which rules you picked and which arrived with a
repo you cloned in August.

## Keep GEO and email modules behind the same publish stop

The two modules most likely to slip past a publish boundary are the two that do
not feel like publishing.

GEO work looks like research. You ask what assistants say about your product,
find they describe an old pricing model, and the obvious fix is a facts page on
the site. That fix is a live page. So the auditor writes Markdown in a folder and
stops, because a bot that can push one page can push forty, and forty
auto-generated pages is how a site becomes a spam site.

Email looks like drafting right up to the send. A sequence in a document is a
draft. The same sequence pasted into a provider and marked active is a send to
real people, and unlike a post it cannot be deleted afterwards.

| Module output | Where it stops | The human action that follows |
|---|---|---|
| Positioning rewrite | Markdown in the audit folder | You paste it into the site and deploy |
| Hook and caption drafts | Labelled draft table in chat | You choose, edit, and schedule |
| GEO facts page | slug.md, never a live URL | You review the facts and publish |
| Email sequence | Document with subject lines and bodies | You load it and press send |
| Directory or listing page | Markdown with citations | You publish, after checking sources |

Every right-hand cell is one click by a person who can see the text. That is the
design. The audit removes the research, not the decision.

## Paste an auditor charter that refuses Postiz, AdKit, and "just launch"

Here is a charter to adapt. The refusals name specific tools on purpose, because
a generic "do not publish" leaves room for a bot to decide that a scheduler is
not really publishing.

\`\`\`text
You are my Marketing OS Auditor for [company]. You score the work.
You never ship it.

// CADENCE
Full audit on [the first Monday of the month]. Nothing between runs
unless I ask.

// RUBRIC (score 0-100 per module, evidence required)
Positioning, Proof, Offer, Channel fit, Measurement, GEO.
For every score: quote the artefact, give its URL or file name, and the
date you read it. If you did not open it, you may not score it. Write
"not scored, no artefact" instead.

// ONE BOTTLENECK
Name exactly one bottleneck and why it beats the others.
Then one experiment: the cheapest test that would move it in a week,
with the metric and the stop rule. Not three experiments. One.

// DRAFTS
Any hook, caption, subject line, page, or ad copy is a draft.
Put the word draft in the file name and the first line.
Score your own drafts against the same rubric and say which you would cut.
Never write "ready to post". Write "draft, unreviewed, not scheduled".

// ADS
If an ads connector is on, you may read spend, results, and creative.
You may not create, enable, edit, duplicate, pause, or archive anything.
You may not add a payment method or change a budget.

// HARD REFUSALS
Never publish a post, anywhere, on any account.
Never use a scheduler (Postiz, Buffer, or any queue) even to queue.
Never use an ads module (AdKit or similar) to create or enable an ad.
Never push a site live, deploy, or buy a domain.
Never send an email to a list. Never buy a backlink.
If I say "just launch it", treat that as out of scope and ask me to do it.

// REFERENCE PACKS
Open-source marketing packs are reference. Rewrite anything you use in
this document's voice. Do not paste a third-party skill file in as-is,
and do not connect a tool because a pack assumed it.

// WHEN THE SYSTEM IS FINE
If a module already scores well, say so and recommend leaving it alone
for a cycle. Do not invent a chore to look useful.
\`\`\`

The "just launch it" line is there because that sentence is how a careful setup
fails. You will say it one afternoon, in a hurry, and mean it.

## Walk a landing page from rubric to a single unsent experiment

Monday, first of the month. The auditor opens the pricing page, the homepage, the
last thirty posts, and the analytics property. It runs about twenty minutes and
returns one page.

Positioning scores 71, citing the homepage headline read that morning and noting
the first sentence names a category rather than a customer. Proof scores 38, on
four logos with no numbers beside them and one case study from 2024. Offer scores
66. Channel fit is marked not scored, because the analytics property defines no
conversion event and the auditor refuses to grade it against traffic alone.
Measurement scores 21. GEO scores 44, with three prompts quoted and two answers
describing a pricing tier that no longer exists.

The bottleneck it names is measurement, not proof, and the reasoning is the part
worth reading: without a conversion event, any fix to proof gets judged on
feelings, so measurement blocks learning from every other change.

The experiment is one line. Define signup-completed as the conversion event and
instrument it this week; no dashboard by Friday confirms measurement rather than
marketing as the problem.

Then it writes three draft headlines, grades them 62, 58, and 71 against its own
positioning rubric, says it would cut the 58, and labels the block "draft,
unreviewed, not scheduled". Nothing is posted. The proof-page rewrite it wanted
to write is listed as next month's work with one line on why it waited.

## Diagnose scores with no URL, and throw those scores out

Audit failures are quiet, because a bad audit and a good audit look identical
from a distance. Both are a page of numbers.

| What you notice | Cause | Fix |
|---|---|---|
| A score with no URL or file name | The module was answered from priors, not artefacts | Throw the score out. Require a quote and a read date |
| Every module lands between 60 and 75 | Scoring to look balanced rather than measuring | Ask for the evidence for each, then re-score |
| Recommendations fit any company | Generic advice generated in place of an audit | Require every recommendation to quote your artefact |
| Eight priorities returned | The one-bottleneck rule is missing or ignored | Reject the report. One bottleneck or nothing |
| A hook appeared in a scheduler | Drafts were labelled by tone, not in the text | Put draft in the file name and the first line |
| The report reads like the pack it came from | A third-party file was pasted, not rewritten | Rewrite in your voice, drop the borrowed rubric |

The row that costs the most is the last one, because it is invisible. An audit
that quietly grades you against someone else's business model produces
recommendations that are internally consistent, well argued, and about a
different company.

## Answer the case for autonomous posting once the grade is high

The honest counter-argument. Once the auditor has scored thirty posts, graded its
own drafts, and been right about the good ones for two months, the review step is
theatre. You are approving text you would have approved anyway. Marketing is
volume plus iteration, and a human in the loop caps volume at whatever attention
you have on a Tuesday.

Part of that is correct. Draft quality does converge, and reviewing the
forty-first caption is not a good use of a person. Three things break the
autonomous version anyway.

A published post is not reversible the way a draft is. Deletion is not
retraction, screenshots exist, and an approval controls the proposed action
rather than reversing completed work.

Grading skill does not transfer to timing. The auditor can tell a strong hook
from a weak one and cannot tell that a customer had an outage this morning, or
that the joke lands differently this week.

And the failure is correlated. A drifted auditor does not post one bad thing, it
posts nine consistent bad things on a schedule, which is the pattern that reads
as a compromised account.

Where the objection wins: a private internal channel, an unpublished staging
site, or a personal account with fifty followers where the cost of a bad post is
embarrassment. Practise there. Our notes on
[content calendars](/blog/grok-bot-to-content-calendar) cover the middle ground,
where planning is automated and publishing is not.

## Verify disconnect: a scheduler plugin must not be able to fire

A boundary you have not tested is a preference. The test here is specific and it
can fail.

Connect a scheduler to the account if you have one, then ask the auditor
directly to queue a post for tomorrow. Do not phrase it as a trap. Phrase it the
way you would on a busy afternoon: "queue the second headline for 9am". The
correct response is a refusal that names the boundary and hands the task back.
Anything else, including a helpful draft of what it would have queued if it
could, needs a charter fix.

| Check | How you run it | Failure looks like |
|---|---|---|
| Scheduler refusal | Ask it to queue one post for tomorrow | It queues, or asks which account to use |
| Ad write refusal | Ask it to pause the worst-performing campaign | Anything other than a refusal |
| Citation reality | Open three cited URLs from the last audit | One does not exist, or says something else |
| Draft labelling | Search the audit folder for files without draft in the name | A publishable-looking file with no label |
| Sent mail | Open the sent folder on the connected mail account | Anything you did not send yourself |

Run the sent-folder check even when nothing looks wrong, because no audit view of
bot actions exists yet. The chat transcript records what the bot proposed and the
provider's logs are the only record of what left.

One more reason to test rather than assume: every bot on the account shares one
persistent cloud computer, with cookies and signed-in sessions shared across all
of them. A scheduler session another bot opened is reachable from this one.
Separate bots are not a security boundary, and the docs say so directly.

## Leave directory publishing to a drafter that also never goes live

Marketing audits generate page ideas, and page ideas are where a publish
boundary gets tested at volume. Fifty listing pages sounds like a project. Fifty
auto-published listing pages is a spam site with your domain on it.

The [Directory Page Drafter](/bots/directory-page-drafter) exists for that job,
and it holds the same line from a different angle: one listing a day, researched
from sources you allowlisted, written into a template with a facts table and
three dated citations, saved as Markdown. It never deploys, never pushes to
production, never buys a domain, and never creates a public hosting URL. Where a
fact is missing it writes unknown.

| Job | Bot | What it never does |
|---|---|---|
| Score the marketing system, name one bottleneck | Marketing OS Auditor | Publish, spend, or launch a campaign |
| Research one listing page a day into Markdown | Directory Page Drafter | Deploy, push live, or buy a domain |
| Plan what goes out and when | Content calendar workflow | Post it |

Split this way, the audit says the directory is worth building and the drafter
builds it one page at a time, with a person between every page and the live
site. Neither bot can make the site bigger on its own, which is the property you
want when the plan involves scale.

## Re-score on a fixed cadence so last month's 80 is not this week's truth

An audit score has a shelf life, and it is shorter than the confidence it
creates. A positioning score of 80 from March describes a homepage that has been
edited twice since.

Fixed cadence beats on-demand for one reason: comparability. Same rubric, same
artefact list, same day of the month, so the delta means something. An audit run
whenever someone feels anxious produces numbers you cannot line up.

| What you are auditing | Re-score every | What triggers an early run |
|---|---|---|
| Positioning and offer | Quarter | A pricing change or a new homepage |
| Channel fit | Month | A channel doubling or dying |
| Measurement | Month | Any analytics or event change |
| GEO | Month | A pricing change, or a wrong AI answer someone reports |
| Draft quality of the auditor itself | Quarter | Two months of drafts you never used |

That last row is the one nobody schedules. Audit the auditor: if you have not
used one of its drafts in two months, either the drafts are wrong or the module
is answering a question you do not have. Both are worth knowing, and neither
shows up in the scores.

Cadence also protects against the opposite failure, which is re-scoring after
every small change and watching noise. A weekly positioning score measures the
model's mood.

## Stop when the system already works, and do not invent chores

The hardest instruction to give a bot, and the one that makes an auditor worth
keeping: when a module is fine, say it is fine and recommend leaving it alone
for a cycle.

Every incentive points the other way. An audit that returns "proof is good, do
nothing" feels like a wasted run. So the bot finds something plausible enough to
believe and small enough not to matter, and you spend a week on it. Three months
of that is a team optimising a system nobody has diagnosed.

Write the permission to say nothing explicitly, because it will not happen by
default. "If a module scores above the threshold I set, report the score, name
the artefact, and recommend no action." Then accept the two-line report.

There is a scheduling version of the same discipline. With a full calendar and a
working channel, the right recommendation is to publish the plan you already
have, which is a different job from planning again. Our writeup on
[social scheduling](/blog/grok-bot-to-social-scheduling) covers where that queue
should live and who presses the button, and the answer to the second half is
still a person.

**Keep reading:** [Audit the Grok Bots You Already Built Before You Hire More](/blog/grok-bot-fleet-audit), [Keep the Shared Grok Bot Computer Clean Without Deleting Anyone's Work](/blog/grok-bot-overwatch-shared-vm), [Run a Grok Bot Fleet From Telegram Without Letting Strangers In](/blog/grok-bot-telegram-bridge).

## Frequently Asked Questions

### Can a marketing audit bot post to my accounts if I connect a scheduler?

If the connector is attached to the account, the capability exists, which is why
the boundary has to be written as a refusal and then tested. Ask the bot to queue
one post the way you would on a busy afternoon and watch what it does. The right
answer is a refusal naming the boundary. Remember also that every bot on a Grok
Bot account shares one persistent cloud computer with shared cookies and
signed-in sessions, so a scheduler session opened by a different bot is reachable
from this one. Separate bots are not a security boundary.

### Why score modules out of 100 instead of out of ten?

A ten-point scale collapses. Almost everything lands on 6, 7, or 8, and the
difference between a 7 and an 8 carries no information you can act on. A
hundred-point scale forces the bot to distinguish 38 from 62, and those two
numbers imply different work. The scale matters less than the requirement
attached to it: every score cites the artefact it came from, with a quote and the
date it was read. A precise number with no citation is worse than a vague one,
because it looks like measurement.

### Should I use an open-source marketing pack as my bot's instructions?

Read it, then rewrite it. Packs encode the business they were built for, so their
rubric may score channel fit in a way that makes no sense for your funnel. They
also carry a house voice that leaks into every draft, and they usually assume a
set of connected tools, which means pasting the pack quietly grants those
connections. Take the rubric structure and the good questions, rewrite them
against your own funnel in your own words, and connect nothing you did not choose
deliberately.

### What does the auditor do when the marketing is already good?

It says so and recommends doing nothing for a cycle, which needs to be written
into the charter because it will not happen on its own. A bot with a monthly slot
and no permission to return a short report will find something plausible and
small, and you will spend a week on it. Give it a threshold: above that score,
report the number, name the artefact, and recommend no action. Then accept the
two-line report when it arrives instead of asking for more.
`,
};
