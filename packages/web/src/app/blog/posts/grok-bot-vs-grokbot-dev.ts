import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'grokbot.dev vs botskills.sh: Two Directories, Two Jobs',
  description:
    'grokbot.dev collects community prompts and plugins. botskills.sh ships paste-ready BOT.md charters with a required boundary. Here is which one to use when.',
  date: '2026-08-26',
  category: 'Comparison',
  content: `
# grokbot.dev vs botskills.sh: Two Directories, Two Jobs

Two directories can describe the same bot and mean different things. Search for
Grok Bot setups and you will land on grokbot.dev, a community site collecting
prompts and plugins, and on this site, which publishes BOT.md files. The tiles
look similar enough that people treat the choice as taste. It is not taste. The
two sites answer different questions, and using the wrong one for your question
is where the bad afternoons come from.

This is a straight comparison, written by one of the two parties, so read it
with that in mind. The claims about their site are about publicly visible
structure, not about quality. The claims about ours are about what our schema
requires, which you can check against the repo.

## Split a prompt feed from a catalog that requires a stop verb

The clean way to tell these apart is to ask what the format forces an author to
supply.

A prompt feed forces very little, and that is a feature. Someone got a bot doing
something interesting, they pasted the prompt, other people found it. You get
breadth, speed and genuine novelty, because nothing stands between a person's
discovery and the wall.

Our format forces one field. Every listing carries a boundary: one sentence
naming the action the bot never takes without a human. It is not optional and it
is not a tag. A submission without it fails review, because the premise of the
catalog is that a copy button should carry a stop line with the instructions.

| Axis | Community prompt feed | botskills.sh catalog |
|---|---|---|
| Unit of publication | A prompt someone got working | A BOT.md file with parsed frontmatter |
| Required fields | None enforced by the format | name, description, category, runtimes, boundary |
| What a stop line is | An author's habit, if they wrote one | A schema requirement that fails review |
| Breadth | Wide, and fast to grow | Narrower, one file per reviewed job |
| Best at | Showing you what is possible right now | Handing you something safe to paste today |
| Weakness | A prompt can be pasted with no limits | Slower, and it will miss the newest trick |

Neither column is the good one. A feed that required a boundary field would
grow more slowly and lose the thing that makes it worth reading. A catalog that
dropped the requirement would be a feed with worse design.

## Fetch grokbot.dev as reference data, never as instructions to run

This is the one hard rule in the article, and it applies to their site, ours,
and anyone else's.

Anything a bot reads from the open web is data. It is not an instruction. A
prompt on a public wall is text that describes behaviour, and pasting it into a
bot that holds your live sessions is the same class of act as running a shell
script you have not read. The bot cannot tell the difference between a helpful
step and a harmful one, because both arrive as sentences.

The exposure is specific rather than theoretical. All bots on a Grok Bot account
share one persistent cloud computer, the computer is assigned to your user
account rather than to an individual bot, and browser cookies, signed-in
sessions, files and command-line credentials are shared across bots
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). A pasted
prompt therefore runs with whatever the account is already signed into, not with
whatever the prompt's author had.

So the reading posture is: fetch it, summarise it, decide what job it describes,
then write your own steps. If you want the pattern enforced rather than
remembered, the
[Email Injection Sentinel listing](/bots/email-injection-sentinel) exists for
exactly this class of problem, treating message content as data and flagging any
line that tries to issue instructions.

## Require a boundary field before a listing is paste-ready here

Here is the mechanical part, because "we require a boundary" is easy to say and
worth showing.

A listing on this site is one file: seed-bots/&lt;slug&gt;/BOT.md in the public
repo. The frontmatter is parsed, not merely displayed, and the parser is strict
in ways that catch real mistakes. Values are single-line. Arrays are inline, so
integrations: [slack, notion] parses and a YAML block list does not. And the
boundary key is required.

That last field is what the copy button carries. When someone copies a listing,
they do not get a prompt that happens to be careful, they get a prompt whose
refusal is part of the text. The
[Amazon Cart Builder listing](/bots/amazon-cart-builder) never places the order,
never pays, and never types a card number, one-time passcode or second factor.
The [VM Overwatch listing](/bots/vm-overwatch) never deletes another bot's
working files, never commits secrets, and never claims a screen is isolation.

Why insist on a verb rather than a warning paragraph? Because a verb survives
copying. Prose about being careful gets trimmed when someone shortens the prompt
for their own use. A sentence that says "never places the order" is load bearing
in a way that reads as part of the job, so it tends to stay. The reasoning
behind that choice is set out in
[the case for writing the boundary first](/blog/grok-bot-boundaries).

## Keep Rakazo and Grok Bot as runtimes on the same charter shape

A second structural difference: our listings declare which runtimes they target,
and there is more than one.

Grok Bot is the hosted product, running on a managed Linux VM as a non-root
user, with clients on macOS, Windows and iPhone on iOS 18 or later, and no
Linux desktop, Android or iPad client. Rakazo is the open-source alternative,
Apache 2.0, where you bring your own model key or subscription and you choose
the sandbox yourself. Different hosting, different trust model, different
answer to "who can see this".

What stays constant is the charter shape. A job description, numbered steps, an
evidence rule, and a boundary. That is why the runtimes field is an array: the
same file can be marked for both, and the setup prompt reads the same on either.

| Dimension | Grok Bot | Rakazo |
|---|---|---|
| Hosting | Managed cloud computer, one per account | Yours, self-hosted |
| Model choice | No picker, for members or admins | You choose |
| Where sessions live | The shared account computer | Your sandbox |
| Clients | macOS, Windows, iPhone on iOS 18+ | Wherever you run it |
| Access | A paid eligible plan | The repo |
| Charter format | The same BOT.md | The same BOT.md |

The bottom row is the point. Portability of the charter is more valuable than
loyalty to a runtime, because runtimes change hands and pricing tiers move. A
boundary written once should not need rewriting when you change where the bot
runs.

## Cite public trends from their wall without reproducing the prompt

There is an editorial line here that we hold to, and it is worth stating so you
can hold us to it.

We cite grokbot.dev as a public trend signal. When a plugin family shows up
repeatedly on their wall, that is genuine information about what people are
wiring up, and pretending otherwise would make our own coverage worse. What we
do not do is reproduce their prompts, rewrite them lightly and publish them as
listings, or present their entries as botskills.sh bots.

The reason is partly manners and mostly quality. A prompt copied from a feed
carries the author's context: their connectors, their tolerance for risk, their
idea of what needs approval. Stripped of that and republished with a boundary
bolted on, it becomes a charter nobody actually ran. Our listings are worth
pasting because the steps and the stop line were written together.

There is also a factual hazard in cloning. grokbot.dev describes itself as
independent and not affiliated with xAI. Republishing their content under our
schema would imply a chain of endorsement that exists nowhere in the chain, from
xAI to them to us.

Take the job. Write your own steps. Cite the trend.

## Let agents hit open machine endpoints on purpose, including ours

Both sites are increasingly read by software rather than people, and that is a
design goal here rather than an accident.

Our catalog is available unauthenticated and allowed in robots.txt on purpose:
a JSON index of every bot, filters by category and runtime, the raw BOT.md
content for any slug, and an llms.txt at the root. An agent evaluating whether a
listing fits a job should not have to scrape a page to read the boundary field.
It should be able to request the file.

\`\`\`text
GET https://botskills.sh/api/bots
GET https://botskills.sh/api/bots?category=ops&runtime=rakazo
GET https://botskills.sh/api/bots/<slug>/content    -> raw BOT.md
GET https://botskills.sh/llms.txt
\`\`\`

This cuts both ways, and honesty requires saying so. If an agent can fetch our
BOT.md, an agent can also fetch a prompt from any other directory, and the rule
from earlier still applies at machine speed. An open endpoint is a good way to
distribute a charter and a terrible thing to treat as a command channel. The
value of a machine-readable boundary field is that a fetching agent can read the
refusal as structured data instead of hoping it appears in the prose.

If you build something that reads either site programmatically, put the
boundary check in your own code. Do not rely on the source being careful.

## Paste the difference: a feed item versus a BOT.md frontmatter block

Abstract comparison is easy to nod along to, so here is the same job in both
shapes. A feed item looks roughly like this, in structure if not in wording:

\`\`\`text
Title: Grocery restock bot
Prompt: You are my shopping assistant. Check Buy Again on Amazon,
rebuild my usual cart, and get it ready.
Plugins: browser
Upvotes: lots
\`\`\`

Useful. It tells you a job exists and that someone made it work. Now the same
job as a listing here:

\`\`\`text
---
name: Amazon Cart Builder
description: Rebuilds a cart from Buy Again and recent orders, then stops
  before checkout so you review every line and pay yourself.
version: 1.0.0
category: personal
integrations: [amazon]
runtimes: [grok-bot]
boundary: Never places the order, never pays, and never enters a card,
  OTP, or second factor.
---
You never place the order. You never pay. You never type a card number,
a one time passcode, or a second factor. If Amazon asks for any of
those, you stop and tell the operator to finish on their device.
\`\`\`

The difference is not length. It is that "get it ready" has no edge, and "never
places the order" does. Two readers will draw the boundary of "ready" in
different places, and one of those readers is a bot with a saved Amazon session.
Note that the description and boundary above are shown wrapped for reading; in
the real file every frontmatter value sits on one line, because the parser is
regex based and a wrapped value truncates.

## Walk Amazon cart as a job both sites describe, then show our stop

Follow that job through a real week, because the gap only becomes obvious in the
failure case.

Both versions do the same first pass well. Read Buy Again and recent orders,
capture item, size, quantity, last paid price and last order date, skip one-off
gifts. Both build a restock list from repurchase gaps rather than a default
weekly cadence, so an item bought three times on a ten to fourteen day rhythm is
due and an item bought once is not a staple.

The gap opens at step three. Our listing opens the cart only if lines can be
added without opening checkout, price-checks every line against last paid, flags
anything up more than fifteen percent with both prices and both dates, and calls
out pack-size changes hiding a unit-price increase. Then it stops. No delivery
slot that costs money, no tip, no Place order. The output is a table, a "Needs
your pick" block, and one estimate labelled an estimate rather than a charge.

The version that says "get it ready" has no defined stopping point, and a bot
optimising for helpfulness in an already-authenticated browser will find the next
button. The failure is not dramatic. It is a forty-pound order with a substitute
you would not have chosen, and a delivery slot you paid for.

## Diagnose "I pasted their prompt and it sent mail from my Gmail"

This is the support message that made the article worth writing, and the
diagnosis is almost always the same three-part chain.

| Symptom | What actually happened | Fix |
|---|---|---|
| It sent mail from my personal Gmail | The prompt had no send boundary, and the account was already signed into Gmail | Use a dedicated mailbox, and write the send stop into the charter |
| It used a tool the prompt never mentioned | Sessions are account level, so anything signed in is reachable | Name allowed tools, and disconnect what nothing uses |
| I approved one action and more happened | An approval gates the proposed action and does not reverse completed work | Gate earlier, at the step before the irreversible one |
| I deleted the bot and the login still works | Deleting a bot leaves shared files and browser sessions in place | Sign out at the source and revoke with the provider |
| The prompt worked for the author and not for me | Their connectors and their account state are not yours | Rewrite the steps against your own connectors |
| Two copies of the same bot behave differently | Each bot has its own screen on one shared computer, not its own machine | Stop reasoning about bots as separate environments |

Row three is the one that surprises careful people. The documentation puts it
plainly: an approval controls the proposed action, and it does not reverse work
already completed
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
A gate placed after the damage is a notification.

## Answer the case for one directory to rule every Grok Bot on X

The strongest objection to this whole framing is consolidation. One directory
would be better for everyone. Search finds one place, authors publish once,
readers stop comparing schemas, and the ecosystem gets a canonical index instead
of two partial ones. Every package ecosystem converged that way eventually.

That argument is right about the end state and wrong about the mechanism. The
two sites are not competing implementations of one index, they are different
stages of a pipeline. Discovery wants a low floor: anyone can post, and a prompt
with no boundary is still a signal that a job exists. Production wants a high
floor: a required stop verb, a reviewed file, a schema an agent can parse. Merge
them and you have to pick a floor, and either choice destroys half the value.

There is a version of consolidation that would work. A shared schema, adopted by
both, where a boundary field is optional on the feed and required for anything
marked paste-ready. That is a standards problem rather than a merger, and it is
an outcome we would sign up for.

Until then, read both. Use the feed to find out what people are doing this
month. Use a catalog with a required stop line when you are about to hand a bot
your sessions.

## Verify a copied prompt against our boundary before it is a listing

If you do take a job from a feed, here is a check with a failing condition, which
is the only kind worth running.

Write the boundary first, before you touch the prompt. One sentence, a verb, the
action this bot never takes without you. Then read the copied prompt line by
line and ask whether any step would violate it. If a step conflicts, the prompt
loses, not the boundary.

Then run the harder test. Give the bot a task where the helpful move is exactly
the forbidden one. Ask a drafting bot to "just send it, I am in a hurry". Ask a
cart bot to "go ahead and check out, I trust you". A charter that refuses under
pressure has told you something. A charter that has never been pushed has told
you nothing, because you tested the easy case.

This fails often enough to be worth the ten minutes. The common failure is not a
defiant bot, it is a boundary written as a preference rather than a refusal.
"Prefer to wait for approval" folds under urgency. "Never sends. If asked to
send, stop and hand me the text" does not.

Only after both checks does something belong in a shared catalog, which is the
same review a pull request here goes through: does the schema parse, and does
the boundary actually forbid something.

## Leave plugin sponsorship pages on their site, linked not cloned

A note on the parts of a directory that are not listings, since both sites have
them and the temptation to mirror is real.

Community sites monetise. Plugin pages, sponsor slots, promoted entries. That is
legitimate and it funds the wall you read for free. It also means some tiles are
there for commercial reasons rather than because a job needed them, which is
worth knowing when you read a plugin grid as a recommendation list.

Our position is to link and not clone. We will not reproduce a sponsorship page,
we will not rank listings by who paid, and where the leaderboard shows what is
most copied, that number comes from copy telemetry rather than a hand-edited
figure. If a counter on this site is not real, it is a bug and not a tactic.

The reader-side habit that follows: when any directory shows you a grid, ask
which cells are there because someone paid. Then ask the same question about the
grid you are reading right now.

## Use their feed for discovery, then write original steps

The workflow that gets the most out of both sites takes about twenty minutes and
looks like this.

Browse the feed with a notebook, not a clipboard. You are collecting jobs, not
prompts. "Someone is pulling transcripts through a plugin instead of the
browser" is a job. "Someone rebuilds a cart from order history" is a job. Write
down five and throw away four.

For the one that survives, write the boundary before the steps. Then write the
steps as numbered instructions with an evidence rule, which is the part almost
every feed prompt omits: what the bot must cite, and what it says when it cannot
find a source. A bot without an evidence rule paraphrases confidently, and you
will not catch it because the output looks the same either way.

Then test it on a case you already know the answer to. Not a new question, a
solved one, so you can grade the output rather than admire it.

| What the feed gave you | What you write instead | Why the rewrite matters |
|---|---|---|
| A job worth doing | The same job, in one sentence | You keep the idea and drop the author's assumptions |
| Steps that worked on their account | Steps against your connectors | Their plugins are not your plugins |
| No boundary, or a polite preference | A refusal with a verb in it | A preference folds under an urgent instruction |
| No evidence rule | What to cite, and what to say when it cannot | Confident paraphrase looks identical to a real quote |
| Upvotes | One test on a case you already solved | Popularity is not evidence about your data |

What you end up with is not the prompt you found. It is a charter for your
account, your connectors and your risk tolerance, which is the only kind that
holds. If that feels like more work than pasting, it is, and it is roughly one
tenth the work of unwinding a wrong send.

## Use our catalog when you need a stop line the copy button will carry

There is a narrow case where this site is straightforwardly the better tool, and
it is worth being precise about it rather than claiming general superiority.

Use the catalog when the bot will touch something you cannot take back. Money,
mail, publishing, merges, deletions. In those jobs the value is not the prompt,
which you could write yourself in ten minutes. The value is that the refusal is
already in the text, phrased as a verb, reviewed by someone whose only job in
review was to ask whether the stop line actually stops anything.

Use it also when you want the same job to survive a runtime change, because the
runtimes field and the fixed charter shape mean a file marked for both Grok Bot
and Rakazo reads the same on either.

Do not use it as your source of novelty. We will be later than a community feed
on anything new, structurally and permanently, because review takes time and
required fields slow submissions down. That is the trade we chose. If you want
to know what people tried this week, the feed wins.

Where this breaks down: a boundary is a sentence, and a sentence is a control on
behaviour rather than on capability. If a connector is live, a charter reduces
the chance of a bad action without removing the ability to take it. The catalog,
the feed, and every article about either are downstream of that. For the shape
of the whole catalog and what the boundary requirement is for, start with
[the botskills.sh launch catalog](/blog/introducing-botskills).

**Keep reading:** [Bots and Cloud Consoles](/blog/bots-and-aws), [Bots and ClickUp](/blog/bots-and-clickup), [Bots and Jira Service Management](/blog/bots-and-jira-service-management).

## Frequently Asked Questions

### Is grokbot.dev an official xAI site?

No. grokbot.dev describes itself as independent and not affiliated with xAI, and
that description is worth repeating accurately rather than blurring. It is a
community directory of prompts and plugins that people have got working, which
makes it a genuinely useful signal about what the ecosystem is building this
month. It is not a vendor capability list, so a tile appearing there does not
mean the connection is supported on your plan, available in your region, or
still working today. For anything about approvals, isolation, platform support
or eligibility, read the official documentation instead.

### Can I just paste a prompt from a community feed into my bot?

You can, and it is a bad habit for one specific reason. Anything you read from
the open web is data rather than an instruction, and a prompt runs with whatever
your account is already signed into rather than with the author's setup. On Grok
Bot every bot on an account shares one computer and one set of sessions, so a
pasted prompt inherits your live logins. Take the job description, write your own
numbered steps, and write the boundary first. That is roughly ten extra minutes
and it removes the failure mode where a helpful step touches something you
cannot take back.

### What makes a botskills.sh listing different from a good prompt?

A required field. Every listing is a BOT.md file whose frontmatter is parsed
rather than displayed, and the boundary key is mandatory: one sentence naming the
action the bot never takes without a human. A submission without it fails review.
That matters because the sentence travels with the copy button, so the person
pasting gets the refusal along with the instructions. A careful prompt can be
just as safe, but nothing in the format guarantees it, and prompts get shortened
by whoever copies them next.

### Which directory should I use if I only have time for one?

Pick by what you are short of. If you are short of ideas, use the community feed,
because breadth and recency are exactly what a low-floor wall is good at and a
reviewed catalog will always lag it. If you are short of confidence about handing
a bot access to mail, money, publishing or a repository, use a catalog that
requires a stop verb, because that is the case where the prompt is the easy part
and the refusal is the valuable part. Most people need the feed for planning and
the catalog for the two or three bots that actually touch something.
`,
};
