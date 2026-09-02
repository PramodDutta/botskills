import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Search Results Are a Snapshot, Not a Source',
  description:
    'Six bots in this catalogue read search results. What a bot is actually seeing, why two runs disagree, and the rule that keeps a claim checkable.',
  date: '2026-09-02',
  category: 'Guide',
  content: `
# Search Results Are a Snapshot, Not a Source

A bot that searches and reports back looks like the most useful thing you can build, and it is, right up until somebody asks where a number came from and the honest answer is that it was on a results page on Tuesday.

Search is the most common input in this catalogue: six bots read it. It is also the input most likely to produce a claim that cannot be checked later, and the reason is not that search is unreliable. It is that a results page is not a document. It is a rendering, produced for one requester at one moment, and it does not exist afterwards.

## Understand what the bot is actually looking at

A results page is assembled per request. Two runs an hour apart can differ, and neither is wrong.

| Varies by | Why it matters to a bot |
|---|---|
| Time | Fresh content is promoted; ranking shifts through the day |
| Location | The machine's egress IP decides the regional flavour |
| Session state | A signed-in session personalises results |
| Query phrasing | Small wording changes reorder everything below the top few |
| The index itself | Pages are added and dropped continuously |

The practical consequence: a bot that reports "the top result says X" has reported something that may not reproduce for you, on your machine, five minutes later. That is not a malfunction. It is what a results page is.

There is a specific wrinkle worth knowing here. The cloud computer uses static egress IPs, and some services flag datacentre addresses. So the results a bot sees are the results served to a datacentre in a particular region, which is not the same as what you see on your laptop at home. When a bot's findings and yours disagree, that is usually the reason, and it is worth checking before assuming either party is wrong.

## Cite the page, never the results

This is the whole rule and everything else follows from it.

A search result is a pointer. The claim lives on the page it points at. So a bot must open the page and cite that, with its URL and its date, and never cite the search itself.

| What the bot writes | Checkable later? |
|---|---|
| "A search shows most vendors charge X" | No. The search is gone |
| "The third result said X" | No. Position is not stable |
| "Acme's pricing page, retrieved 2 Sep, lists X" | Yes |
| "Three vendor pages, all linked, list X, Y, Z" | Yes |

The middle two are what an unconstrained bot produces by default, because summarising the results page is easier than opening five pages, and the output reads identically to the good version.

\`\`\`
You are Search Research. You use search to find pages. You never
report a search result as a finding.

For every claim:
1. Open the page. Read it. Cite the URL and the date you read it.
2. If the page will not open, or is behind a login you do not have,
   the claim does not go in. Say could-not-open and name the URL.
3. Never write "search results show" or "most sources say" or
   "according to search". A search is how you found the page; it
   is not evidence of anything.
4. Never report a ranking position. Position is not a property of
   the page, and it will not be there when someone checks.

Per run, record the exact queries you used, verbatim, so the run
can be repeated and disagreements traced to phrasing.
\`\`\`

Rule five, recording the queries, is the one people leave out and the one that makes a disagreement diagnosable rather than an argument.

## Watch a competitor brief built on a phrase nobody chose

Dev ran a weekly competitor brief that searched for pricing across five vendors. It ran for two months and was well regarded. In week nine somebody in a call quoted a figure from it and the customer corrected them.

The brief had reported that a competitor's entry tier was a certain price. That price had been correct in June. In August the vendor restructured, and the old price survived on a legacy comparison page that still ranked well for the query the bot used.

The bot had opened a page. It had cited the URL. It had done almost everything right. What it had not done was check whether the page it opened was current, and the query phrasing, chosen once and never revisited, happened to favour a stale page over the vendor's actual pricing page.

The fixes were two lines. Prefer the vendor's own domain over any comparison site when both are available. And report the page's own date, if it has one, next to the claim, so a two-month-old page announces itself.

Neither of those is clever. Both would have caught it.

## Prefer primary domains, and say so explicitly

A search will return aggregators, comparison sites and listicles alongside the source, and aggregators frequently rank higher because they are optimised to. A bot with no preference will take whichever is first.

Write the preference into the charter as an order: the subject's own domain first, then official documentation, then reputable secondary coverage, and an aggregator only when nothing else exists and clearly labelled as such.

This matters most for exactly the claims people act on. Pricing, availability, feature presence and policy are all things where the subject's own page is authoritative and a third party's summary is a snapshot of some earlier moment.

## Make staleness visible rather than invisible

The failure in Dev's case was not a wrong page, it was an undated one. A claim with no date attached is indistinguishable from a current one, and the bot has no incentive to volunteer that the page it read was last updated in June.

So require three things beside every claim: the URL, the date the bot read it, and the page's own last-updated date where one exists. Where none exists, say so, because "no date on page" is itself useful information about how much weight to give it.

| What is attached | What a reader can do |
|---|---|
| Claim alone | Trust or ignore, nothing in between |
| Claim plus URL | Check it, eventually |
| Claim, URL, retrieval date | Know how old the reading is |
| Claim, URL, retrieval date, page date | Know how old the fact is |

The last row is what you want and it is one extra instruction away.

## Expect two runs to disagree, and design for it

Because results are assembled per request, a bot that runs weekly will produce findings that do not perfectly reconcile week to week, and that is normal rather than a bug to chase.

What is worth chasing is a specific pattern: a claim that appeared for several weeks and then quietly stopped appearing. That usually means the page moved, was removed, or dropped out of the queries being used, and none of those produce an error. The claim simply stops being restated, and nobody notices an absence.

The cheap defence is to have the bot carry forward a short list of previously reported claims and note which it could no longer confirm this run. Three words per line, and it converts a silent disappearance into a visible one.

## Keep the bot away from anything transactional

Search bots drift toward doing rather than finding, and the drift is easy to miss because each step seems small.

Finding a supplier is research. Opening a supplier's site is research. Filling in a contact form is not, and neither is starting a signup, requesting a quote, or adding anything to a basket. The boundary is that a search bot reads and reports, and any action that puts information into the world belongs to a human.

Worth stating in the charter explicitly rather than assuming, because the natural next step after finding a page is often to interact with it, and a helpful bot will.

## Handle the blocked and the unreadable honestly

Some pages will not open for a bot. Paywalls, logins, aggressive bot detection, and services that flag datacentre IPs will all produce a page the bot cannot read.

The dangerous response is for the bot to summarise whatever it did receive, which may be a paywall notice, a consent banner, or a login screen, and present it as content. That produces confident nonsense from a URL that looks correct.

Require the bot to distinguish three states in its output: read successfully, could not open, and opened but the content was a barrier rather than the page. The third is the one that needs naming, because it is the one that otherwise passes as a reading.

## Pin the queries, because phrasing is a hidden variable

The most under-appreciated source of week-to-week noise is the query itself, and it is the one thing entirely under your control.

A bot given a topic rather than a query will compose its own each run, and small differences in phrasing reorder everything below the top few results. That produces findings that drift for reasons nobody can reconstruct, because the query was never recorded.

| Approach | Reproducible? | When to use |
|---|---|---|
| Bot composes its own query from a topic | No | Exploratory only |
| Fixed query list in the charter | Yes | Anything reported weekly |
| Fixed list plus one free query | Mostly | Fixed for trend, free for discovery |

Write the queries out in the charter, verbatim, and have the bot report which ones it ran. Then a disagreement between two weeks becomes traceable: either the pages changed or the queries did, and you can tell which in seconds rather than guessing.

Keep one slot for a free query if you want discovery, but keep it labelled separately in the output so it never gets mistaken for the tracked set.

## Separate the tracked set from the interesting find

Related, and worth its own habit: a search bot produces two different kinds of output and they should not be mixed.

The tracked set answers a stable question over time. Same queries, same sources, week after week, and its value is entirely in comparability. The moment you add or drop a source, the series breaks and you have a new series that looks like a continuation of the old one.

The interesting find is whatever the bot noticed that was not part of the question. That is often the most valuable thing in the run, and it should be reported, but in its own section and never folded into the tracked numbers.

Mixing them produces a report where a jump in a metric might be a real change or might be a source that got added, and nobody can tell without re-reading the charter history. Two sections, clearly labelled, costs nothing and preserves both.

## Give it a rule for when the answer is nothing

A search bot asked a question it cannot answer will produce an answer anyway, because producing output is what it does and an empty report feels like failure.

That is where invented findings come from. Not deliberate fabrication, but a bot filling a section that was expected to have content, using whatever was loosely related on the pages it read.

So make the empty case explicit and legitimate. Tell it that "no pages found that address this" is a valid, expected, complete output, and that it will never be penalised for returning one. Then check the rate: a bot researching genuinely uncertain questions that never once returns nothing is not finding answers, it is manufacturing them.

## Decide how many sources is enough, in advance

Left unspecified, a search bot will either stop at the first plausible page or keep going until it runs out of patience, and both produce reports whose confidence bears no relation to their evidence.

Set the number in the charter, per claim type, and make the bot state how many it actually found.

A single-source claim is not automatically weak. If the vendor's own pricing page says a price, one source is correct and a second adds nothing. But a claim about what is typical, common, or best practice rests on a pattern, and a pattern from one page is not a pattern. The rule that works is: a fact about a specific entity needs that entity's own page, and a claim about a category needs at least three independent pages, with independent meaning not three aggregators copying each other.

That last qualifier matters more than the number. Three sources that all trace back to the same original are one source with three URLs, and a bot counting citations will report it as strong corroboration. Asking the bot to note when sources cite each other catches most of it, and it is the difference between a count and actual evidence.

There is a cheap way to enforce this without much charter text: require every category claim to be written as a fraction rather than a generalisation. Four of the six vendors checked publish a price is a sentence a reader can weigh immediately, and it is the same length as most vendors publish a price, which is not. The fraction also makes the sample visible without a separate methodology section that nobody reads.

State the found count in the output rather than only the conclusion. "Three independent pages agree" and "one page said so" are very different claims that read identically once compressed into a summary sentence, and the compression is where the information is lost.

## Answer the objection that this makes a search bot too slow to be useful

The fair version: opening every page, dating every claim, and preferring primary domains turns a fast survey into a slow crawl. The value of a search bot is breadth, and breadth is exactly what these rules trade away.

Two things, and the first grants the point.

Breadth genuinely does go down. A bot that opens five pages properly covers less ground than one that skims twenty results. If what you want is a rough map of who exists in a space, the loose version is fine and these rules are overhead.

But the moment an output feeds a decision, breadth is the wrong metric. A survey of twenty unopened results contains no checkable claims at all, which means its real information content is a list of names, and everything else in it is unsourced assertion dressed as research. Five properly cited pages beat twenty summaries, not marginally but categorically, because only one of the two can survive somebody asking where a number came from.

The practical split: use the loose version for discovery, where the output is a list of things to look at, and the strict version for anything that will be quoted. Say which mode a run is in, in the output, so a reader knows what they are holding.

## Stop using this page when the shape is different

This page is about a bot using general search as an input. It stops applying in three places.

If the bot is reading a specific known source on a schedule rather than searching, the failure modes are different and simpler; the relevant discipline is source verification rather than query design. If the searching is internal rather than public, permissions are the dominant concern and a bot inherits wider access than you remember. And if you are checking claims somebody else wrote rather than gathering new ones, that is verification and [source verifier](/bots/source-verifier) is built for it.

Bots that help: [Source Verifier](/bots/source-verifier) checks claims against primary sources and returns verdicts rather than edits. [Citation Checker](/bots/citation-checker) opens every link and confirms the source actually supports the sentence around it, which is the failure no link checker catches. [Competitor Website Watch](/bots/competitor-website-watch) monitors a known site rather than searching. And [Literature Scan](/bots/literature-scan) applies the same discipline to published work, including naming disagreements rather than averaging them.

Related reading: [static egress IPs](/blog/grok-bot-static-egress-ip) on why a datacentre address changes what a bot is served, and [bot observability](/blog/bot-observability) on sampling runs rather than re-doing the work.

## Frequently Asked Questions

### Why do two runs of the same search bot disagree?

Because a results page is assembled per request rather than stored. It varies with time, location, session state and query phrasing, and the index itself changes continuously. Two runs an hour apart can legitimately differ with neither being wrong. There is also a specific factor here: the cloud computer uses static egress IPs and some services flag datacentre addresses, so a bot sees results served to a datacentre in a particular region rather than what you see on your own machine. When findings disagree with yours, check that before assuming either is faulty.

### What should a search bot cite?

The page, never the search. A result is a pointer; the claim lives on the page it points at, so the bot must open that page and cite its URL plus the date it was read. Phrases like "search results show" or "the third result said" are not checkable, because position is not a property of a page and the results page will not exist when someone verifies. Add the page's own last-updated date where one exists, since a claim with no date is indistinguishable from a current one and that is how stale figures survive.

### How do I stop a bot reporting a stale page as current?

Two instructions. Prefer the subject's own domain over aggregators and comparison sites, because those often rank higher while carrying older information, and they are what an unguided bot will take. Then require the page's own date beside every claim, and where there is none, require it to say so. A comparison page from June describing pricing that changed in August will otherwise be reported with exactly the same confidence as the vendor's current page, and nothing in the output will distinguish them.

### Should a search bot ever interact with the pages it finds?

No. The boundary is that it reads and reports, and anything that puts information into the world belongs to a human. Finding a supplier is research and opening their site is research, but filling a contact form, starting a signup, requesting a quote or adding anything to a basket is not. This is worth writing into the charter explicitly rather than assuming, because the natural next step after finding a relevant page is often to interact with it, and a bot trying to be helpful will take that step unless told not to.
`,
};
