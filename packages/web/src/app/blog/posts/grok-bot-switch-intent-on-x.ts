import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Find People on X Who Already Said They Want to Switch, Then Draft and Stop',
  description:
    'Let a grok bot find customers on x who already asked to switch, quote the sentence, and draft a note. It never DMs, replies, or emails them.',
  date: '2026-08-26',
  category: 'Tutorial',
  content: `
# Find People on X Who Already Said They Want to Switch, Then Draft and Stop

Cold outbound guesses who has the problem. Switch-intent search reads people
who already named it in public: they want an alternative, they are done with a
competitor, they asked for a recommendation. That is a cheaper list than a
demographic. It is also a list that can become harassment in one plugin click.

grokbot.dev has been circulating this as a weekly X scan plus an enrichment
connector plus outreach. The scan is the useful part. Auto-send is the part
this catalog will not ship. [Competitor Switch Scout](/bots/competitor-switch-scout)
flags public threads and drafts. It never DMs, replies, follows, or emails.
You send, if you send, from your own account, in your own words, after you
look at the permalink.

This is not [Lead Scout](/bots/lead-scout), which ranks a sheet and contacts
nobody, and not [Viral Tweet Scout](/bots/viral-tweet-scout), which explains
mechanisms and drafts no copy. Switch-intent is a third job: a verbatim ask,
a draft that references it, and a hard stop before the send plugin.

## Search for people who named the pain, not for a demographic guess

Start with competitor names, the product you actually sell, geographies to
skip, and a floor: recency, and whether the post is a real ask. "Anyone used
something other than X for Y" is a candidate. "X is trash, lmao" is usually
a dunk. Dunks waste the draft step and pick fights you did not mean to join.

Prefer the last 14 days. Older posts are people who already solved it or
already got a pile-on. Record permalink, handle, time, and one verbatim
sentence. If you cannot quote a sentence, you do not have switch intent. You
have a vibe.

Automated bulk collection can breach platform terms. This bot reads public
posts at a pace a person could. It does not scrape the site like a warehouse.
[Grok Bot on X](/blog/grok-bot-x-twitter) is about the session sitting on the
shared computer. This article is about what you do with public text without
turning the session into a spam cannon. See also
[content automation risks](/blog/grok-bot-x-content-automation-risks).

## Record permalink, time, and a verbatim sentence as evidence

A row without a permalink is a rumour. A row without a time is a row you
cannot defend when the person says they moved on. A paraphrase is how you
invent a buying signal. Quote them. Short. Exact.

The shared computer still applies. Every bot on the account can see the X
session if one bot signed in. A scout that can reply will reply unless the
charter and the permissions both forbid it. Do not use separate bots as a
security boundary. Write the stop on this scout even if a different bot is
"the poster."

| Evidence field | Why it is required | What happens if you skip it |
|---|---|---|
| Permalink | You can reopen the thread | You draft into a deleted or sarcastic post |
| Timestamp | Recency floor is checkable | You "warm" someone from last year |
| Verbatim sentence | Intent is theirs, not yours | You sell a problem they did not state |
| Handle | You know who you would address | You merge two people with similar names |
| Why it is switch intent | Review can disagree | The sheet fills with dunks |

Ten rows is plenty. A scout that always finds ten is not proving demand. It
is filling a quota. If the week is quiet, say so and show the best miss.

| Floor test | Keep | Drop |
|---|---|---|
| Asks for an alternative by name | Yes | "what's everyone using instead of [X]" |
| Names a pain you actually solve | Yes | Adjacent pain you do not ship |
| Posted in the last 14 days | Yes | Last year's rant |
| Joke, meme, or dunk | No | Even if the competitor is named |
| "Don't @ me" / "no vendors" | No | Even if the rest looks perfect |
| Already talking to a vendor in-thread | Maybe | Draft only if you can add a fact, not a pile-on |

Write the floor in the charter so a tired Friday run cannot widen it. A scout
that "found extra" by ignoring the floor is not being helpful. It is changing
the job.

## Drop jokes, pile-ons, and anyone who asked not to be contacted

Jokes look like complaints in a keyword search. Pile-ons look like consensus.
Neither is a person asking for an alternative. Anyone who wrote "don't @ me"
or "no vendors" is not a lead. Drop them. Do not draft a clever exception.

This is also where geographies and regulated pitches belong. If you cannot
sell there, do not draft there. A draft is not harmless when it sits next to
a permalink you will click while tired.

## Enrich company only from a connected tool, never from a display name

Display names lie. "Jane | VP Sales @ Something" is not a CRM record. If an
enrichment connector is on, use it read-only and write company and role from
that tool. If it is off, leave the fields blank. Inventing a company from a
handle is how you email the wrong employer.

Do not invent connector prices. If you use a sales plugin for enrichment,
read its current terms. Many of those plugins also send. Sending is out of
scope for this bot even if the plugin can do it. The catalog boundary is the
point.

[Lead research](/blog/grok-bot-to-lead-research) covers the broader public
signal sheet. Keep this scout narrower: switch language, verbatim quote,
unsent draft.

## Draft one short note per keeper and label the list unsent

The draft references the public sentence and offers a next step. It sounds
like you. It does not attach a calendar link unless you approved that
pattern in the charter. It does not claim you already hopped on a call. It
does not include a teammate's private pricing.

Label the list unsent in the artifact, not only in your head. Review is
scanning a column. If the column says unsent and a plugin sent anyway, you
have a permissions problem, not a copy problem.

Standing instructions such as "reach out to switchers weekly" are not
approval for a later DM. An approval controls a proposed action. It does
not reverse a message already delivered.

## Keep DMs, replies, likes, and follows out of this scout

Replies are public. DMs are private and easier to regret. Likes and follows
are still writes, visible to the recipient, and a common detection signal.
The scout reads. You engage, if you engage, as yourself.

This is the same split as Viral Tweet Scout, with one difference: this bot
is allowed to draft copy. Viral Tweet Scout is not, because its job is to
explain what travelled, not to write your next post. Do not merge them. A
combined bot will "just post the draft" on a week you are busy.

## Paste a switch-scout charter that stops before the send plugin

\`\`\`text
You are Competitor Switch Scout. You find public switch-intent. You never
contact anyone.

Never DM, reply, quote, like, follow, or email. Never run a send step in
any sales plugin. Enrichment, if connected, is read-only. Drafts wait here.

Weekly:
1. Competitors: [names]. We sell: [one line]. Skip: [geo, industries].
   Floor: last 14 days, real ask, not a dunk.
2. Search X for alternatives, named pain, or "I'm leaving [competitor]."
   Record permalink, handle, time, verbatim sentence.
3. Drop jokes, pile-ons, and anyone who asked not to be contacted.
4. Enrichment: if the tool is on, fill company and role from it.
   If off, leave blank. Do not invent a company from a display name.
5. Draft one short note per keeper in my voice, referencing the sentence.
   No calendar link unless I approved that pattern.
6. Return at most ten rows: permalink, quote, why switch-intent, draft.
   Label the list UNSENT.

If the week is quiet, say so and show the best miss with why it failed.
Collect at a human pace. Bulk scraping is not this job.
\`\`\`

If a plugin cannot separate enrich from send, do not connect it to this bot.

## Walk one competitor-complaint thread from search to an unsent row

You sell a quieter analytics tool. Someone posted, four days ago: "we need
to leave [Competitor] before renewal, what are people using for product
analytics that does not require a forward-deployed engineer." That is a
real ask. The scout quotes the sentence, leaves company blank because
enrichment is off, and drafts two lines that mention the renewal timing
without promising a migration. The row is unsent.

A second post says "[Competitor] is a scam" with a meme. The scout drops
it as a dunk and, if it is the best miss, shows it with that reason. You
do not get a draft into a pile-on. Day thirty you should see quiet weeks
in the log. A sheet that is always full is a quota, not a market.

A third post is a founder joking that they might rip out their own stack.
That is not a customer. Drop it. The scout's job is not to be clever about
irony. If you cannot tell, it failed the floor. Humans can still read irony
on the permalink later. The bot does not get to take a shot.

Grok Bot launched in beta on 11 August 2026 and eligibility widened on 21
August 2026. The cheapest paid path among listed individual plans is Cursor
Pro+ at $60 a month. SuperGrok Plus at $100 includes access. SuperGrok at
$30 does not. Cursor Hobby and Cursor Pro at $20 do not include it. There
is no model picker. Do not plan this scout around a model you chose. Plan
it around the stop verb and the X session sitting on the shared computer.

Run the first week next to you. Open every permalink. If you would not send
the draft, the floor is too loose or the voice is wrong. Fix the charter
before you put it on a routine. A routine assigns a workflow to one bot,
max 50 per bot, and dies if you delete the bot. Do not build a weekly send
fantasy on a routine. Build a weekly unsent sheet.

## Diagnose dunks misread as switch intent, and throw those rows out

| Symptom | Cause | Fix |
|---|---|---|
| Drafts into quote-tweet wars | Keyword matched a dunk | Require a verbatim ask for an alternative |
| Same person, three rows | No permalink dedupe | Dedupe on URL before drafting |
| Company name is the handle | Enrichment guessed | Blank the field unless the tool filled it |
| Calendar link in every draft | Copied a sales sequence | Remove unless the charter allows that pattern |
| DMs went out overnight | Send plugin shared on the VM | Disconnect. Sign out of X. Rewrite the stop |
| Empty week padded to ten | Scout optimizing for looking busy | Quiet week plus one miss is a valid output |

The DM row is the one that pays for the boundary. Sessions are shared.
Deleting the scout does not sign you out of X.

## Answer the case for auto-outreach from the same scan

The strongest objection is conversion. If they posted in public that they
want to switch, a same-day DM is just speed. Sales plugins exist to do
exactly that, and public writeups treat the send as the payoff.

Two problems. Platform terms and detection: bulk unsolicited DMs are how
accounts get restricted. Accuracy: a lot of "switch" language is venting,
jokes, or someone already mid-evaluation with a friend. A draft you send
yourself still lets you drop the ones that would make you look like a
bot. An auto-send loop does not.

Where the objection wins: a tiny list, people you already know, messages
you would send by hand today. That does not need a scout. Where it loses:
weekly automation plus a connector that sends. Keep enrichment if you
want. Keep send on a human.

Do not assert that each scout has its own VM. Do not assert a spend-cap dollar
figure. Do not assert SuperGrok Heavy costs $300 a month. Those claims show up
in roundups and they are either contradicted or unpublished. This scout is a
read-and-draft job on a shared computer. That is already enough risk.

## Verify no outbound left the account except the private sheet

A check that can fail:

1. Run the scout on a week with at least one obvious dunk and one real ask.
2. Confirm the dunk is dropped or marked as a miss, not drafted.
3. Confirm the ask has a permalink, a quote, and an unsent draft.
4. Confirm X has no new replies, DMs, likes, or follows from the bot.
5. Ask it to "just send the keepers." Confirm it refuses.

If step 4 fails, this is not a scout. Disconnect send-capable plugins,
sign out, and do not run it on a schedule until the check passes. There
is no Grok Bot spend cap to save you from a loop, only a weekly allowance
and on-demand overflow.

| Weekly check | Pass | Fail |
|---|---|---|
| Row count | Quiet week allowed | Always exactly ten keepers |
| Dunk handling | Miss with reason | Drafted anyway |
| Outbound | None from this bot | Any DM, reply, like, follow |
| Enrichment | Blank or tool-sourced | Guessed from a display name |
| "Just send" probe | Refusal | Standing instruction treated as yes |

Run the "just send" probe on purpose. Bots drift. A scout that passed in week
one can pick up a scheduler plugin in week three because you connected it for
a different job. Shared computer, shared plugins. The probe is how you notice.

Supported clients are macOS, Windows, and iPhone on iOS 18 or later. Linux
desktop, Android, and iPad are not supported. iPhone pauses and resumes. It
does not give you a good surface for reading ten permalinks and deciding
which draft is still true. Do that on desktop. A glance-approve on the phone
is how a dunk slips through.

SpaceX acquired xAI, and SpaceX's acquisition of Anysphere (Cursor) closed
in August 2026. That does not change the X terms. It also does not give you
a second computer per scout. Roundups that say otherwise are describing a
product that is not this one.

## Leave viral-mechanism research to Viral Tweet Scout, which drafts no copy

Viral Tweet Scout reads what is travelling and names the mechanism. It
drafts no post copy, on purpose, so it cannot become your ghostwriter.
Switch Scout drafts a private note and still does not post. If you need
both, keep the charters from inheriting each other. The viral bot should
not start "reaching out." The switch bot should not start explaining why
a meme got reach.

## Leave generic lead ranking to Lead Scout, which contacts nobody

Lead Scout scores fit and timing across several public signals and appends
a sheet. It never contacts anyone. Switch Scout is a subset of that world
with a draft attached. If you only need a ranked list, use Lead Scout and
skip the draft. If you need the sentence and a note, use Switch Scout and
skip the extra scoring theatre. Two bots doing both jobs is how a send
plugin sneaks into the "research" name.

If your week produces zero switch-intent and a thick generic lead list,
that is a market signal, not a broken scout. Do not loosen the floor to
feed the sheet. Loosening the floor is how dunks return. Put the generic
names on Lead Scout's sheet, still uncontacted, and keep this bot picky.

The static egress IPs on the Grok Bot computer are a datacenter range.
Some sites flag them. If X challenges the session, stop. Do not build a
workaround that looks like credential stuffing. A scout that cannot log
in is a scout that should stay off, not a puzzle to solve with more
plugins.

## Collect at a human pace so bulk scraping does not become the product

A person can read a few dozen posts. A warehouse crawl is a different
product with a different risk. Set a cap: ten keepers, a 14-day window, no
pagination through the entire site. If you need more, you need a process
and counsel, not a faster bot.

Grok Bot itself has no Linux, Android, or iPad client. You will run this
from a supported desktop, or you will glance at pause/resume on iPhone.
Do not treat mobile as the place you approve a stack of DMs. Approvals
that need editing still need desktop.

**Keep reading:** [Stop Burning Trial Quota on YouTube](/blog/grok-bot-youtube-transcripts), [Harden a Mail-Reading Grok Bot Against Prompt Injection](/blog/grok-bot-prompt-injection-email), [Catch Grok Bots That Quietly Quit Without a Status Page](/blog/grok-bot-workforce-checker).

## Frequently Asked Questions

### Can this Grok Bot send the draft if enrichment already confirmed the company?

No. Enrichment, even when it is accurate, is not permission to contact.
The catalog boundary is that the scout never DMs, replies, follows, or
emails. Company and role can stay blank if the tool is off. When the tool
is on, it still must be read-only. If a plugin cannot separate enrich from
send, do not connect it here. You send later, from your own account, after
you open the permalink and decide the post is still a real ask.

### How is switch-intent different from a generic lead scout?

Lead Scout ranks public signals and contacts nobody. Switch Scout looks
for people who already asked for an alternative or said they are leaving a
named competitor, quotes them, and drafts a private note. Viral Tweet Scout
is a third job: it explains why a post travelled and drafts no copy. Keep
the three split. A merged bot will either skip the quote or treat the draft
as a message that should go out.

### Will searching X with a bot get the account restricted?

It can, if you collect at warehouse speed or if the same session also
likes, follows, and DMs. Public terms restrict automated engagement and
bulk collection. This setup reads at a human pace, records permalinks, and
does not write. That is not a guarantee. It is the difference between a
research pass and a spam loop. Sign-in still lives on the shared computer,
so every other bot can see that session unless you keep write plugins off.

### Should I connect a sales outreach plugin to the same bot that scans?

Only if you can lock it to read-only enrichment, which many cannot. The
safer pattern is scan and draft here, send from a human inbox, or from a
separate tool you operate by hand. Shared sessions mean a send capability
on this account is available to more than the scout. Disconnect anything
that can DM or email until the weekly sheet has survived review without a
single outbound surprise.
`,
};
