import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Find People on X Who Already Said They Want to Switch, Then Draft and Stop',
  description:
    'A grok bot find customers on x pass that quotes public switch-intent, drafts one short note per keeper, and never DMs, replies, follows, or emails anybody.',
  date: '2026-08-26',
  category: 'Tutorial',
  content: `
# Find People on X Who Already Said They Want to Switch, Then Draft and Stop

Every cold list starts with a guess about who has the problem. The guess is
usually a job title and a company size, which is why the first line of a cold
email so often describes a pain the recipient does not have. Meanwhile, every
week, people say it out loud in public: we are leaving this before renewal, does
anyone use something other than this, what are people running instead.

That is a better list, one keyword search away. It is also one plugin click away
from being harassment, which is why this build needs a boundary rather than a
workflow.

The [Competitor Switch Scout](/bots/competitor-switch-scout) in the catalog is
built for the reading half only. Its stated boundary: it never DMs, replies,
quote-tweets, follows, likes, or emails, and it never runs a sales plugin's send
step. It flags public threads, drafts a note per keeper, and stops. You send, if
you send, from your own account after opening the permalink.

Two neighbours matter for scope. [Lead Scout](/bots/lead-scout) ranks public
buying signals into a sheet and contacts nobody.
[Viral Tweet Scout](/bots/viral-tweet-scout) explains why a post travelled and
deliberately drafts no copy at all. Switch intent is a third job with a narrower
input and one extra output.

## Search for people who named the pain, not for a demographic guess

The search is built from four inputs, and three of them are exclusions. The
competitor names you are looking for. The product you actually sell, in one line.
The geographies and segments to skip. And a floor: how recent a post has to be,
and what counts as a real ask rather than a joke.

The floor is the part that decides whether this works. "Anyone using something
other than this for product analytics" is a real ask. "This tool is trash lmao"
is a dunk, and a draft aimed at it is a fight you did not mean to pick.

Prefer the last fourteen days. Older posts split into two groups, both useless:
people who already solved the problem, and people whose thread already turned
into a pile-on you would be joining late.

| What you searched for | What you get back | Verdict |
|---|---|---|
| Competitor name plus "alternative" | People mid-decision, asking peers | The core of the list |
| Competitor name plus "leaving" or "renewal" | People with a date attached | Best rows on the sheet |
| Competitor name alone | Every joke, meme, and outage complaint | Too noisy, needs the floor |
| A pain phrase with no competitor named | Sometimes real, often venting | Keep only with a verbatim ask |

Write the floor into the charter rather than carrying it in your head, because a
tired Friday run with a thin week will widen it. A scout that "found some extra
ones" by loosening the floor has changed its own job, and the rows it added are
the rows you would have deleted.

## Record permalink, time, and a verbatim sentence as evidence

Five fields per row, and none of them are optional. A row without a permalink is
a rumour. A row without a timestamp cannot be defended in three weeks when the
person has already picked something. A paraphrase instead of a quote is how a
buying signal gets invented.

The quote requirement does the most work, and it is worth stating as a test: if
the scout cannot produce one sentence, in their words, where they ask for an
alternative or say they are leaving, there is no switch intent in that row. There
is a keyword match and an inference.

| Evidence field | Why it is required | What breaks without it |
|---|---|---|
| Permalink | You can reopen the thread before writing | You draft into a deleted or sarcastic post |
| Timestamp | The recency floor becomes checkable | You warm someone who moved on in March |
| Verbatim sentence | The intent stays theirs | You sell a problem they never stated |
| Handle | You know who the note is for | Two people with similar names merge |
| Why it is switch intent | You can disagree with the row | The sheet quietly fills with dunks |

Ten rows is the cap, and the cap has a purpose beyond brevity. Forced to rank,
the scout has to say what it dropped, and a scout that hits exactly ten every
single week is filling a quota rather than reporting a market. A quiet week should
read as a quiet week, with the single best miss shown and the reason it failed the
floor.

One platform note that shapes this section. Every bot on a Grok Bot account
shares one persistent cloud computer, and cookies and signed-in sessions are
shared across all of them. If any bot signed into X, this scout is looking at
that session. The documentation says directly not to use separate bots as a
security boundary, so the stop has to be written on this scout even if a
different bot is the one you think of as the poster. Our notes on
[Grok Bot and X](/blog/grok-bot-x-twitter) cover the session side in more detail.

## Drop jokes, pile-ons, and anyone who asked not to be contacted

Three categories get dropped without exception, and every one of them survives a
keyword search looking like demand.

Jokes read as complaints. A meme about a competitor contains the competitor name,
a negative sentiment, and no intention to buy anything. Pile-ons read as
consensus: forty quote-tweets about one outage is a mood, not forty leads, and a
vendor note arriving in that thread is the reply everyone screenshots.

Then the explicit refusals. Anybody who wrote "no vendors", "don't @ me", or
"please stop DMing me about this" is out, regardless of how well the rest of the
post fits. There is no clever exception here, and a scout that drafts one anyway
has understood the search and missed the job.

Geography and segment exclusions belong in the same filter. A draft you cannot
sensibly act on is not harmless just because it is unsent: it sits in a sheet
next to a permalink, and at 6pm on a Thursday you will click one without
re-reading the exclusion list.

## Enrich company only from a connected tool, never from a display name

Display names are marketing copy. "Jane | VP Sales @ Something" might be current,
might be two jobs old, and might be a joke. Treating it as a CRM record is how a
note lands at the wrong employer.

So the rule splits by source. If an enrichment connector is on, company and role
come from that tool, read-only. If it is off, those fields stay blank. Blank is a
correct answer and an inferred company is not, which is the same discipline as
writing unknown rather than a plausible guess.

Read-only matters more than it sounds, because many enrichment tools also send.
The connector that fills in a company is frequently one screen away from a
sequence builder, and connecting it to this bot connects both halves. If a plugin
cannot be limited to enrichment, it does not belong on this scout.

The broader public-signal sheet is a different job, and
[lead research](/blog/grok-bot-to-lead-research) covers it. Keep this one narrow:
switch language, verbatim quote, unsent draft, at most ten rows.

## Draft one short note per keeper and label the list unsent

The draft is short, in your voice, and references the public sentence. It offers
one next step. It does not attach a calendar link unless you approved that
pattern, it does not claim a prior conversation, and it does not quote pricing you
have not published.

Length is a discipline rather than a style preference. Two or three sentences can
be read against the permalink in about ten seconds, which is what makes reviewing
ten of them realistic. A six-paragraph draft gets approved unread, which defeats
the entire arrangement.

Label the list unsent in the artefact itself, in a column, not in your memory of
what the bot is for. Review is a scanning exercise, and a column that says unsent
on every row gives you something to check. It also gives you a clean signal: if a
row says unsent and a message went out, you have a permissions problem, not a
copywriting problem.

One more phrasing trap. A standing instruction like "reach out to switchers every
week" is not approval for next Tuesday's DM. An approval controls the proposed
action and does not reverse work already completed, so approval for a message
means seeing that message before it leaves.

## Keep DMs, replies, likes, and follows out of this scout

All four are writes, and people underrate two of them.

Replies are public and permanent enough. DMs are private and easier to regret,
which is exactly why they are the tempting automation. Likes and follows feel
like nothing at all, and they are visible to the recipient, appear in their
notifications, and are a common signal in automated-behaviour detection. A bot
that likes forty posts about a competitor has announced itself.

| Action | Allowed for this scout | Who does it instead |
|---|---|---|
| Read public posts and threads | Yes, at a human pace | The scout |
| Draft a note per keeper | Yes, labelled unsent | The scout |
| Reply or quote-tweet | No | You, as yourself, if at all |
| Send a DM | No | You, from your own account |
| Like or follow | No | You, and probably not at all |
| Run a sales plugin's send step | No | Nobody. Send by hand |

The split is the same one Viral Tweet Scout holds, with one difference worth
keeping straight: this bot may draft copy and that one may not. Merging them
produces a bot that explains what travelled and writes your next post, and on a
busy week the difference between writing and posting is one sentence in a chat.

## Paste a switch-scout charter that stops before the send plugin

Here is a charter to adapt. The floor block is where your judgement goes; the
never block is what keeps the rest safe to run weekly.

\`\`\`text
You are my Competitor Switch Scout. You find public switch-intent and you
contact nobody.

// NEVER
Never DM, reply, quote-tweet, like, follow, or email.
Never run the send step in any sales plugin, even if it is connected.
Never sign in to a different account, and never solve a login challenge.
If I tell you to "just send the keepers", treat that as out of scope and
hand it back to me.

// INPUTS
Competitors: [names]. We sell: [one line]. Skip: [geographies, segments].
Floor: posted in the last 14 days, and a verbatim ask for an alternative
or a statement that they are leaving. A dunk is not an ask.

// WEEKLY
1. Search for people asking for alternatives to those competitors, naming a
   pain we actually solve, or saying they are leaving.
2. For each candidate record: permalink, handle, posted time, and one
   verbatim sentence. No quote means no row.
3. Drop jokes, pile-ons, anything outside the skip list, and anyone who
   asked not to be contacted ("no vendors", "don't @ me").
4. Enrichment: if the connector is on, fill company and role from it,
   read-only. If it is off, leave them blank. Never infer a company from a
   display name.
5. Draft one note per keeper, two or three sentences, in my voice,
   referencing their sentence. No calendar link unless I approved that.
6. Return at most ten rows: permalink, quote, why it is switch intent,
   draft. Add a column that says UNSENT on every row.

// QUIET WEEKS
If nothing clears the floor, say so and show the single best miss with the
reason it failed. Do not pad the sheet to ten.

// PACE
Read at a pace a person could. No pagination through the whole site, no
bulk collection. If X challenges the session, stop and tell me.
\`\`\`

If a connected plugin cannot separate enrichment from sending, the answer is not
a stricter sentence in this charter. It is disconnecting the plugin.

## Walk one competitor-complaint thread from search to an unsent row

You sell a quieter analytics tool. The scout runs on Monday and reads about
sixty posts across the competitor names you listed.

Row one clears the floor. Four days old: "we need to leave this before renewal,
what are people using for product analytics that does not need a
forward-deployed engineer." That is an ask, with a deadline, naming a pain you
ship against. The scout records the permalink, the handle, the time, and that
sentence verbatim. Enrichment is off, so company and role stay blank. The draft
is two sentences: it names the renewal timing, says what your tool does about the
engineer problem, and offers to send a short comparison. Marked unsent.

Row two is dropped. "This tool is a scam" plus a meme, sixty quote-tweets deep.
The competitor is named and there is no ask, so it fails the floor as a dunk. It
becomes the best miss for the week, shown with that reason.

Row three is dropped for a subtler cause. A founder joking that they might rip
out their own stack. Not a customer, not an ask, and irony is exactly where a
keyword scan is weakest. The charter's rule holds: if the sentence is not a plain
ask, it fails, and a human can still read the permalink later.

The week ends with three keepers, not ten. You open all three permalinks, send
one yourself from your own account, and delete the other two because one has
already picked a vendor in-thread and the other reads like someone venting about
a bad quarter. Total time, about four minutes.

Run the first few weeks beside it like this. If you would not send a draft, the
floor is too loose or the voice is wrong, and both are charter fixes rather than
reasons to review more carefully. Only after that does it earn a routine, and
routines are per bot, capped at fifty each, and deleted with the bot.

## Diagnose dunks misread as switch intent, and throw those rows out

| Symptom | Cause | Fix |
|---|---|---|
| Drafts aimed into quote-tweet wars | A keyword matched a dunk | Require a verbatim ask, not a sentiment |
| The same person on three rows | No dedupe on permalink | Dedupe by URL before drafting |
| Company name is just the handle | Enrichment guessed | Blank the field unless the tool filled it |
| A calendar link in every draft | A sales sequence pattern crept in | Remove it unless you approved that pattern |
| Exactly ten keepers every week | Quota behaviour, floor widened silently | Quiet weeks are valid output. Re-read the floor |
| DMs went out overnight | A send-capable plugin was reachable | Disconnect it, sign out of X, rewrite the stop |

The DM row is the one that pays for everything else in this article. Sessions and
plugins are shared across every bot on the account, so a scheduler or outreach
tool you connected in week three for a different job is reachable from this one in
week four. Deleting the scout does not sign you out of X either, because deletion
removes a bot and its routines while leaving shared sessions and files in place.

## Answer the case for Amplemarket-style auto-outreach from the same scan

The strongest objection is speed, and it has a real product category behind it.
Amplemarket and tools like it sell signal to sequence with nobody in the middle:
the same scan you just built, wired straight into a send. If somebody publicly
asked for an alternative this morning, a note this afternoon is not spam, it is
responsiveness, and a human review step guarantees you arrive third.

The speed argument is genuinely correct on its own terms. Same-day beats same-week
in competitive evaluations, and most of the notes you would have deleted were
deleted for taste rather than accuracy.

Two things break it anyway.

Platform terms and detection come first. Bulk unsolicited DMs and automated
engagement are what get accounts restricted, and the account at risk here is the
one your company posts from. The downside is not a bad reply, it is losing the
handle.

Accuracy is the second. A meaningful share of switch language is venting, joking,
or someone already three weeks into an evaluation with a friend's recommendation
in hand. Human review costs ten seconds per row and removes exactly the notes
that would make you look like a bot, which is the cost the auto-send version pays
in reputation instead.

Where the objection wins outright: a short list of people you already know, in a
category where you would have messaged them by hand today anyway. That does not
need a scout, it needs an afternoon. Where it loses: a weekly schedule plus a
connector that sends, running while you sleep. Our notes on
[X automation risks](/blog/grok-bot-x-content-automation-risks) go further into
what the platform actually restricts.

## Verify no outbound left the account except the private sheet

A boundary you have not tested is a preference. This test can fail, and it takes
about five minutes.

Run the scout on a week containing at least one obvious dunk and one real ask.
Confirm the dunk was dropped or shown as a miss rather than drafted. Confirm the
ask has a permalink, a verbatim quote, and a draft marked unsent. Then check the
account itself rather than the chat: no new replies, no DMs, no likes, no follows.
Finally, ask it directly to send the keepers, phrased the way you would on a busy
afternoon, and confirm it refuses.

| Weekly check | Pass | Fail |
|---|---|---|
| Row count | A quiet week is allowed | Exactly ten keepers, every week |
| Dunk handling | Shown as a miss with a reason | Drafted anyway |
| Outbound from the account | Nothing from this bot | Any DM, reply, like, or follow |
| Enrichment fields | Blank, or filled by the tool | Guessed from a display name |
| The "just send it" probe | A refusal that names the boundary | Treats a standing instruction as yes |

Run the probe deliberately, and run it again after any week where you connected a
new tool. Bots do not drift toward sending on their own; they drift because the
account gained a capability for a different job and this bot can see it.

The account check is the one that matters most, because no audit view of bot
actions exists yet. There is no log to reconstruct later, so the platform's own
notifications, replies tab, and DM list are your only independent record of what
left.

## Leave viral-mechanism research to Viral Tweet Scout, which drafts no copy

Two X-reading bots with overlapping searches is a recipe for one bot doing both
jobs badly, so keep the outputs distinct.

Viral Tweet Scout reads what is spreading in your topics and names the mechanism
behind each post: a specific number in the first line, a screenshot people wanted
to forward, a contrarian claim, a before and after. It records the numbers with
the time it read them, because those move hourly, and it drafts no post copy at
all. That refusal is deliberate, and it is what stops a research bot becoming a
ghostwriter.

Switch Scout points the other way. It does not care why a post travelled, and a
post with four likes is a perfect row if the sentence is right. It drafts private
copy and never posts.

Keep their charters from inheriting each other. The moment the viral bot picks up
"reach out to the author" or the switch bot picks up "explain the mechanism", both
have grown a second job, and the second job is always the one that touches the
account.

## Leave generic lead ranking to Lead Scout, which contacts nobody

Lead Scout is the wider net. It searches public signals overnight, scores fit and
timing from one to five each, discards anything below a threshold, and appends
deduplicated rows to a sheet with the exact post that was the signal. It never
DMs, replies, follows, or likes. Zero contact, by design.

| You want | Use | Because |
|---|---|---|
| A ranked sheet of public buying signals | Lead Scout | Scores fit and timing, contacts nobody |
| A verbatim ask plus a note you might send | Competitor Switch Scout | Quote-first, draft attached, stops before send |
| Why a post spread in your topic | Viral Tweet Scout | Names the mechanism, drafts no copy |
| Fewest send-capable surfaces on the account | Lead Scout | It has no drafting step to grow one |

If a week produces no switch intent and a thick generic lead list, that is
information rather than a broken scout. The correct response is to work the Lead
Scout sheet, still uncontacted, and leave this bot picky. Loosening the floor to
fill the sheet is precisely how dunks come back.

## Collect at a human pace so bulk scraping does not become the product

The last constraint is about volume rather than intent. A person reading a few
dozen posts and quoting five of them is research. A crawl that paginates through
everything mentioning a competitor is a different product with a different risk
profile, and it changes what you are doing even if the boundary on sending holds
perfectly.

Set the caps explicitly: ten keepers, a fourteen-day window, no pagination
through the entire site, and a stop the moment the platform challenges the
session. Automated bulk collection and unsolicited contact can breach platform
terms, and the scout's own listing says so rather than burying it.

The stop-on-challenge rule deserves emphasis, because the challenge is likely. The
shared computer uses static egress IPs, and some services flag datacenter address
ranges. So the honest response to a sign-in challenge is to stop and tell you,
not to route around it with another tool. A scout that cannot sign in is a scout
that stays off this week.

Review the sheet on a desktop. Supported clients are macOS, Windows, and iPhone
on iOS 18 or later, and iPhone allows pause and resume only, with editing,
history, and testing needing desktop. Ten permalinks and ten drafts are not a
phone task, and a glance-approve is how a dunk becomes a message.

**Keep reading:** [How to Build a Grok Bot That Can Research Leads Overnight](/blog/grok-bot-to-lead-research), [Grok Bot and X](/blog/grok-bot-x-twitter), [Automating Social Content Without Losing Your Account](/blog/grok-bot-x-content-automation-risks).

## Frequently Asked Questions

### Can this bot send the draft if enrichment already confirmed the company?

No, and the two things are unrelated. Enrichment tells you who someone works for;
it says nothing about whether they want to hear from you. The catalog boundary is
that the scout never DMs, replies, follows, or emails, so the draft waits either
way. Enrichment itself stays read-only, and if a plugin cannot separate the
lookup from the send step, do not connect it to this bot at all. You send later,
from your own account, after opening the permalink and confirming the ask is still
live.

### How is switch intent different from a generic lead scout?

The input is narrower and the evidence bar is higher. Lead Scout ranks a range of
public buying signals by fit and timing and appends them to a sheet without
contacting anyone. Switch Scout only keeps people who asked for an alternative or
said they are leaving a named competitor, and every row carries a verbatim
sentence, a permalink, and a timestamp. It also drafts one short note per keeper,
which Lead Scout does not. Viral Tweet Scout is a third job again: it explains why
a post spread and writes no copy.

### Will searching X with a bot get my account restricted?

It can, and the two behaviours that cause it are bulk collection and automated
engagement. This setup avoids both by reading at a pace a person could, capping
the window and the row count, and never liking, following, replying, or messaging.
That reduces risk rather than eliminating it. Remember also that the X session
lives on a shared computer that every bot on the account can reach, so keeping
write-capable plugins disconnected protects the handle more than any wording in a
single charter does.

### Should I connect an outreach plugin to the same bot that scans?

Only if it can be locked to read-only enrichment, and many cannot. The safer
pattern is to scan and draft here, then send from your own inbox or a tool you
operate by hand. Shared sessions mean any send capability on the account is
available beyond this bot, so the question is not whether this scout would use it
but whether anything could. Disconnect what can DM or email until the weekly sheet
has survived several reviews with no outbound surprises.
`,
};
