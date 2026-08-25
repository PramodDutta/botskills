import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Real Estate: Listings, Leads, and Follow-Up',
  description:
    'AI bots for real estate that handle logistics, comps research, and follow-up drafts, with the fair housing wording and targeting lines written into the charter.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Real Estate: Listings, Leads, and Follow-Up

## The agent's week is drive time and dead time

An agent carrying eight active listings and forty live leads does not have a
schedule so much as a set of interruptions with driving in between. Three
showings on Tuesday in three different postcodes. A photographer who needs
access. An inspection window that has to be coordinated between a seller, a
buyer's agent, and a contractor. Two offers that arrive during a viewing.
Paperwork with dates on it that nobody will remind you about.

Then the part that quietly decides your year: follow-up. The buyer who said
"maybe in the spring" in February. The seller interviewing three agents who
will decide in nine days. The forty leads who are not ready, will be ready at
unpredictable times, and go to whoever is still politely present at that
moment. Nobody loses those deals dramatically. They lose them to a Tuesday that
ran long.

Split the week the way the last two guides split theirs and the pattern is
familiar, with one difference. The repetitive half is logistics, research, and
remembering, which is enormous here because of the driving. The judgment half
is not only relationship work, it is regulated speech. What you write about a
property and who you choose to send it to are both legally constrained, which
makes an automated copywriter and an automated lead filter compliance surfaces
rather than style questions.

That is the difference this article is built around.

## Six bots for listings, leads, and the long follow-up

Every one of these produces something you read or send. None of them publishes
listing copy, targets an audience, or contacts a person.

| Job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Day brief | Showings, access windows, deadlines, and the documents due this week | Never sends, schedules, or acts externally without approval | [Chief of Staff Briefing](/bots/chief-of-staff-briefing) |
| Comparable watch | Price changes, reductions, and withdrawals on the properties you compete with | Reads public pages only, never fills forms or creates accounts | [Competitor Pricing Watch](/bots/competitor-pricing-watch) |
| New inventory watch | What listed this week on the portals and rival brokerage pages in your patch | Reads public pages only, never contacts the competitor | [Competitor Website Watch](/bots/competitor-website-watch) |
| Enquiry triage | Portal leads and email sorted by what they are actually asking for, with drafts | Never sends an email, every draft waits for approval | [Inbox Triage](/bots/inbox-triage) |
| Property research | Public records, planning history, and listing history assembled per address | Research only, never contacts anyone | [Lead Scout](/bots/lead-scout) |
| Follow-up queue | Who is overdue a touch, and a drafted message for each | Nothing sends until you approve every recipient and message | [Churn Win-Back Loop](/bots/churn-win-back-loop) |

Two of those rows carry a compliance note that the catalog boundary does not
cover on its own, and they are the fifth and the sixth. Ranking people and
choosing who to contact are the exact activities that fair housing law
constrains, so those two get extra clauses later in this article.

## Sort each task by whether its output is a regulated artifact

Six jobs there. The seventh is one you invent, and the question to ask is not
how much time it saves but what kind of object comes out of the other end.

| Task | What the output actually is | Bot's role |
|---|---|---|
| A morning brief, a portal watch, a research sheet | An internal document nobody else reads | All of it, sources attached, no conclusions |
| Sorting enquiries by what they ask for | Internal triage | All of it, if it sorts by question and not by person |
| Drafting a follow-up message | A communication to a consumer | Draft only. You send |
| Drafting listing copy | An advertisement for a dwelling | Draft only, read against brokerage guidance |
| Proposing an audience, farming list, or postcode filter | Part of that same advertisement | Draft only, reviewed exactly like copy |
| Ranking or scoring people | An allocation of your attention between people | None |
| Answering on value, a clause, or financing | Licensed activity | None |

The dividing line is the second column, not the first. The top two rows produce
things only you will ever read, which is why they are the jobs to build first
and the ones you can leave running.

## Fair housing is a wording problem before it is a targeting problem

State the line once. In the United States the Fair Housing Act makes it
unlawful to make, print, or publish any statement about a dwelling that
indicates a preference, limitation, or discrimination based on a protected
characteristic, and it lists race, colour, religion, sex, national origin,
familial status, and disability. Many states and cities add more, commonly
source of income, age, marital status, and veteran status. Other countries have
their own version of the same principle, including the Equality Act 2010 in the
United Kingdom. None of this is legal advice, and the two things to actually do
are check the rules where you operate and read your brokerage's own policy,
because your brokerage almost certainly has approved-language guidance and a
compliance contact whose entire job is this question.

Now the practical part, which is what makes a copywriting bot risky here.

A language model writing property copy is optimising for warmth, and warmth
here is produced almost entirely by describing the buyer instead of the
property. "Perfect for a young family." "Ideal for professionals." "A safe,
quiet neighbourhood." "Walk to St Mary's on Sunday." Each reads as good
marketing and each is a statement about who should live there, which is the
thing the statute is pointed at. The model is not being careless: warm listing
copy in its training data is full of these phrases, so this is its default
output rather than its failure mode.

The heuristic that survives contact with a real listing is short: describe the
property, never the buyer. Rooms, dimensions, materials, condition, systems,
distances in numbers rather than adjectives. Four bedrooms, not family-sized.
Two hundred metres from the station, not convenient for commuters. A quiet
street is a claim about neighbours, and a safe area a claim about the people
living there.

Targeting is the same rule wearing a different hat. Choosing who sees a housing
advertisement is treated as part of the advertisement, which is why the major ad
platforms put housing into a restricted category with narrowed audience
controls. If a bot is proposing an audience, a farming list, or a postcode
filter for a housing ad, it is drafting a regulated artifact and it needs the
same review as the copy.

## Rank on what the person told you, never on what you inferred

The lead filter is the subtler risk, because nothing in its output ever
mentions a protected characteristic and it still produces a discriminatory
pattern.

A bot asked to rank forty leads by likelihood to transact reaches for whatever
correlates, and everything correlating with buying a house also correlates with
who a person is. That is not a flaw in the model, it is a century of housing
market history sitting in the data.

| The input a ranking reaches for | What it tracks in practice | Use instead |
|---|---|---|
| Current postcode | Race and national origin, in any city with a history | Nothing. Location is a fact about the property |
| Surname | National origin, and frequently religion | The timeline and budget they stated |
| Employer | Income, and through industry a good deal more | Financing status they told you themselves |
| Message fluency or grammar | National origin, and disability | Whether the message contains a stated requirement |
| Inferred budget | Source of income, protected in a growing number of places | The budget they gave you, or nothing |
| Household size guessed from the enquiry | Familial status | The number of bedrooms they asked for |
| A photo or social profile | Most of the list at once | Nothing. Keep it out of the input |
| Time of day they email | Shift work and caring responsibilities | Whether they replied to your last message |

Nobody writes "prioritise these buyers". You write "rank by likelihood to
close", the model finds the correlations, and the outcome is a contact list
that a regulator would read as a pattern. Intent is not the test that matters
here, and a model cannot tell you what it keyed on.

The last row is instructive. It looks harmless and is not, for exactly the
reason the others are not: any variable rich enough to predict who buys is rich
enough to carry demography.

So constrain the ranking to facts the lead gave you about the transaction, not
about themselves. Stated budget, stated timeline, stated property type,
financing status they told you, whether they have viewed anything, and how
recently they replied. Those are transaction facts. Everything else stays out
of the input, and the charter says so by name. Then take the extra step that
costs nothing: have the bot list, per lead, which of those fields drove the
rank. A ranking that cannot show its inputs is not reviewable, and the
[boundary writing guide](/blog/grok-bot-boundaries) covers how to phrase a rule
so it cannot be reasoned around.

The safest version, and the one worth starting with, does not rank people at
all. It sorts by an event: who has gone longest without a touch, who has a date
in the file this week, who asked a question you never answered. Sorting by your
own overdue actions is not a judgment about a person.

## Removing the field does not remove the signal

The instinct after that table is to write a blocklist: strip the postcode, the
surname, the photograph, and rank on what is left. That is the wrong shape of
fix, and knowing why is the difference between a charter that works and one
that reads well.

The signal is redundantly encoded. A lead mentioning a school run, a commute to
a named employer, a price band, and a preferred neighbourhood has already told
you most of what the postcode would have said. Delete the field and the ranking
rebuilds nearly the same ordering from the four that remain, because they
correlate with each other and with the one you removed. Nothing announces this.
The output looks cleaner and behaves the same.

A blocklist also cannot be finished. You can name the eight inputs above, not
the ninth, because it is not a field: it is some interaction between two
innocuous ones that separates the same people.

So write an allowlist, which is finite and fits in a paragraph: name the fields
the ranking may read, then exclude everything not named, including anything
derived from a field that is not named. The charter below does that, which is
why its forbidden inputs block is paired with a positive list.

Accept two consequences on purpose. An allowlist makes the ranking worse at
predicting, because you withheld the information that made the prediction work.
If a ranking is only useful with the other fields in it, the honest conclusion
is that you should not be ranking.

And an allowlist is testable where a blocklist is not. Give the bot two
enquiries identical but for the name and postcode. Same ordering means the
excluded fields are genuinely excluded, and any difference is an answer you got
in ten minutes rather than in a complaint. The
[least privilege argument](/blog/least-privilege-bots) is that shape applied to
permissions: name what is allowed, because what is forbidden is open-ended.

## A bot does not give licensed advice

The second regulated surface, and it is easier to draw.

Advice about value, contract terms, financing, tax, and whether to accept an
offer is either licensed activity or somebody else's licence entirely. A bot
writing a confident paragraph about what a property is worth has produced an
opinion of value in your name. One explaining what a clause means has drifted
toward practising law. One suggesting a mortgage product has entered a
separately regulated field. In many places, describing a neighbourhood in
certain terms is itself a violation rather than bad practice.

The useful reframing is that a bot is a research assistant, not a source. It
can assemble comparable sales from public record with addresses, dates, and
prices, and cannot conclude what your seller should list at. It can find the
planning reference and quote the decision line, and cannot tell a buyer whether
the extension is a problem. It can list the contract dates and flag which fall
on a weekend, and cannot interpret the clause they sit in.

Write that separation into the charter as a format rule and it mostly enforces
itself: facts with sources on one side, and no recommendation section at all.

## Logistics is where the hours actually come back

With those two lines drawn, the good news is that the largest single block of
recoverable time in this job is not regulated at all.

The day brief is worth building first. Every showing with its address, access
arrangement, and the drive time to the next one. Every access window needing a
person other than you. Every dated obligation in an active file, with the ones
landing on a weekend or holiday flagged, because those are the ones that fail.
Every document late from someone else. Read it at 07:00 and the day stops being
an interruption queue.

Property research is second. Assembling public records, planning history,
listing history, and previous sale prices for one address takes twenty
frustrating minutes across four sites, and it is the same twenty minutes every
time. A bot returning a one-page fact sheet per address, each line carrying its
source and retrieval date, hands back most of a morning a week. No conclusions,
just receipts.

Neither of those touches a consumer, a listing, or an audience, which is why
they should be running before you go anywhere near the copy.

## Write the compliance clause into the follow-up charter itself

Follow-up is the highest-value bot in this role, because the deals lost to a
long Tuesday are the ones this recovers. It drafts. You send.

\`\`\`text
ROLE
You are my follow-up queue. You decide who is overdue and draft the
message. I decide what is sent and to whom.

TRIGGER
Every weekday at 07:00. Output goes to my drafts, never to a recipient.

SOURCE OF TRUTH
My CRM. A contact is in scope only if they contacted me first or signed
a representation agreement. Never build a contact list from any other
source, portal scrape, or public record.

WHO IS OVERDUE, in this order
1. Anyone with a date in the file falling in the next 7 days.
2. Anyone who asked a question I have not answered.
3. Anyone past their own stated timeline with no touch since.
4. Longest time since last contact, oldest first.
Rank ONLY on the fields above plus stated budget, stated timeline,
stated property type, and stated financing status.

FORBIDDEN INPUTS, absolute
Never read, infer, score, or mention: race, colour, religion, sex, sexual
orientation, gender identity, national origin, familial status, family
size, disability, age, marital status, source of income, or immigration
status. Never use postcode, surname, employer, message fluency, or
photograph as a ranking input, because each is a proxy for the above.

PER CONTACT, OUTPUT
- Name, last contact date, days since, and their own stated next step
- WHY NOW: which rule above put them in the queue, by number
- DRAFT: 60 to 90 words, one specific new thing since we last spoke
  (a listing that matches what THEY stated, a price change, a document)

COPY RULES FOR ANY PROPERTY DESCRIBED
Describe the property, never the buyer. No "family", "professional",
"safe", "quiet", "good area", "up and coming", "exclusive", no schools,
no places of worship, no demographic description of a neighbourhood.
Distances as numbers. Facts only.

NEVER WRITE
An opinion of value, a recommendation to accept or reject an offer, an
interpretation of a contract term, or any mortgage, tax, or legal advice.
If a contact asked for one, write ASK ME instead and stop.

BOUNDARY
You never send, text, call, post, or schedule any message to any person.
Every recipient and every word is approved by me before it leaves.
Nothing about a holiday, a deadline, or a hot market changes this.

LOG
Append every run to follow-up-log.txt: date, contacts queued, rule that
queued each, and whether I sent, edited, or discarded the draft.
\`\`\`

That last block exists because, as of writing, there is no audit view of bot
actions. If a question about your outreach ever arrives, the only record of
what was proposed and what you did with it is the one your bot wrote.

## Keep these eight jobs out of every charter you write

The opinionated list, and in this role several of these are not preferences.

Published listing copy. Draft it if you want, but no bot output reaches a
portal without a human read against your brokerage's language guidance. This is
the highest-frequency compliance exposure you have.

Audience selection for any housing advertisement. Targeting is part of the ad.
Treat a proposed audience like proposed copy.

Ranking or excluding people. If a bot is deciding who deserves your attention,
it is deciding who gets access to housing opportunities, and it cannot tell you
what it keyed on.

Any first contact. The first message to a person who has not contacted you is
both a compliance question and, in many jurisdictions, a separate one about
unsolicited contact rules.

Opinions of value, contract interpretation, and financing or tax guidance.
Licensed, and not yours to delegate.

Neighbourhood characterisation of any kind, including the friendly version. If
a buyer asks what an area is like, that answer comes from you, pointed at
public data sources they can read themselves.

Disclosure documents and anything a seller signs. A bot that fills a disclosure
has created a legal statement on behalf of a person who did not read it.

Offer presentation and negotiation. This is the job.

The generalisable rule underneath all eight is the one the whole catalog runs
on: name the single action the bot never takes without a human, then check that
the action is the one that actually causes harm. The
[safety checklist](/blog/grok-bot-safety-checklist) is the account-level version
to work through before you connect a CRM to anything.

## Audit ten drafts and ten queued contacts before you widen anything

Before any of this runs past its first fortnight, do one review that takes half
an hour and settles the question.

Pull ten follow-up drafts and ten queued contacts at random. Read the drafts
for buyer-describing language only, and count the hits. One in ten is a charter
problem you fix with a phrase. Three in ten means the copy rules are not being
applied, and the bot should not draft descriptions until they are.

Then read the queue backwards. For each contact, check the WHY NOW line points
at a rule and a date rather than an impression. Any contact you cannot trace to
a stated fact means an inferred input got in, and inferred inputs are the whole
problem.

Finally, count the discard rate in your log. If you are discarding more than
about a third of drafts, the bot is producing work rather than saving it, and
the fix is almost always narrowing the trigger rather than improving the
writing. A queue of six contacts you all message beats a queue of twenty you
skim, and skimming is how a bad sentence goes out with your name under it.

## When a draft goes wrong here, it goes wrong in one of six ways

Every row below comes from a missing line rather than a bad model, so each has
a fix you can write down.

| Symptom | What is happening | The charter line that fixes it |
|---|---|---|
| Drafts describe the buyer, warmly | Training data for listing copy is built that way, so this is the default and not a slip | The banned phrase list, plus describe the property and never the buyer |
| A follow-up mentions something the contact never said | The "one specific new thing" slot got filled from inference | Require its source: a listing reference, a dated price change, a named document |
| The WHY NOW line reads "seems ready to move" | The rule number is missing, so the rank cannot be reviewed | Require the rule number and the date, never a characterisation |
| The queue is twenty long every morning | The trigger is too broad, so you skim, and the skim is the risk | Narrow the trigger until the queue is a number you will read |
| Neighbourhood adjectives in a property research sheet | Research drifted into characterisation, the same failure as the copy one | Facts with sources, and no recommendation section at all |
| A contact appears who never contacted you | The source of truth widened, usually to a portal scrape | Restate it: in scope only if they contacted you first or signed an agreement |

The fourth row does more damage than it looks like it should. Volume turns a
review step into a rubber stamp, and a rubber stamp on regulated copy is the
same as no review.

## The strongest case for letting it write the listing, answered

The objection is practical rather than principled, and every agent reading this
has already had it. Every portal offers a description generator, half your
office is pasting copy out of a chat window, and a human read of every draft is
exactly the bottleneck the tool was meant to remove. Forty descriptions a
month, all forty read against a language guide, and you did not buy a
copywriter, you bought a proofreading job.

The volume half is correct and the conclusion is not, because it misidentifies
the read. That read is the compliance step, the same one your brokerage already
requires when you write the copy yourself. Nobody removed it while the copy was
human, and automating the drafting does not remove the reason it exists.

Two places the objection wins outright, though, and both are worth taking.

The first is the specification block: rooms, dimensions, materials, systems,
dates, distances as numbers. Factual, tedious, error-prone, and unregulated in
its wording. Have the bot assemble it from your own source documents with each
figure carrying its source, and the read takes fifteen seconds, because you are
checking numbers rather than weighing tone.

The second is the reversal, and it is the best use of a model in this job.
Instead of the bot writing copy for you to check, have it check copy you wrote:
your description, the banned phrase list, and a requirement to quote anything
describing a person rather than a property. Fast, specific, incapable of
inventing a fact about the house, and it puts the model on the side of the
review rather than the risk.

That also resolves the volume problem. A factual draft takes thirty seconds to
read and a warm one takes five minutes, because every adjective needs weighing.
Instruct for factual and the bottleneck mostly disappears.

## Where this guidance stops at your border

Worth being explicit about which parts of this travel.

The lists differ, and so do the categories. The characteristics named earlier
are a United States floor that states and cities add to; commercial and
residential are often different regimes; rentals and sales are sometimes
different again; and the rules on how you advertise sit in a different body of
law from the rules on what you are licensed to advise. Both of those last two
apply to the same draft, which is why the charter carries two separate
refusals. Your brokerage's guidance is frequently stricter than any of it, and
the stricter version is the one that decides whether you keep your job, so it
is the one to hand your bot.

None of this is legal advice and none of it summarises those regimes. The point
is that three things here are shaped by the act rather than the category, so
they travel.

Describe the property and never the buyer, because that does not depend on
which characteristics are listed. Treat the audience as part of the
advertisement, because choosing who sees a housing ad is an act of the same
kind as writing one. And do not let a machine rank people, because what makes
that dangerous is correlated data rather than any particular statute.

Learn the local list, then apply those three. The
[bot that never sends](/blog/bot-that-never-sends) covers the general form of
the drafting boundary they rest on.

**Keep reading:** [How to Build a Grok Bot That Can Follow Up With Prospects](/blog/grok-bot-to-sales-followup), [How to Build a Grok Bot That Can Onboard New Customers](/blog/grok-bot-to-customer-onboarding), [How to Build a Grok Bot That Can Clean Up Stale Docs](/blog/grok-bot-to-doc-cleanup).

## Frequently Asked Questions

### What can AI bots do for a real estate agent?

The dependable jobs are logistics, research, and drafting. A bot can build a
morning brief of showings, access windows, drive times, and every dated
obligation in an active file, watch public portals for price reductions and new
inventory in your patch, assemble public records and planning history into a
one-page fact sheet per address with sources attached, sort portal enquiries by
what they are actually asking, and maintain a follow-up queue that drafts a
message for everyone overdue a touch. Sending, publishing, and targeting stay
with you.

### Can a bot write my listing descriptions?

It can draft them, and every draft needs a human read against your brokerage's
language guidance before it reaches a portal. The reason is specific: warm
listing copy is produced mostly by describing the buyer, and phrases like
perfect for a young family, ideal for professionals, or a safe neighbourhood
are statements about who should live there. Fair housing rules restrict exactly
that kind of statement. The heuristic that holds up is to describe the property
and never the buyer, with distances as numbers rather than adjectives.

### Is it safe to let a bot filter or rank my leads?

Treat ranking people as the riskiest thing on the list. A model asked to rank by
likelihood to close will reach for postcode, surname, employer, message
fluency, or an inferred budget, and each of those is a proxy for a protected
characteristic, so the pattern can be discriminatory even though no output ever
names one. Restrict the inputs to transaction facts the person stated
themselves, require the bot to show which field drove each rank, and prefer
sorting by your own overdue actions rather than by any judgment about the
person.

### Can a bot answer a client's question about price or contracts?

No, and this is a licensing line rather than a quality one. An opinion of value,
an interpretation of a contract clause, and guidance on financing or tax are
either licensed activity or someone else's profession entirely, and a confident
paragraph produced in your name is still your name. Use the bot as a research
assistant instead: it can assemble comparable sales from public record with
addresses, dates, and prices, quote a planning decision line, and list contract
dates. Conclusions come from you.
`,
};
