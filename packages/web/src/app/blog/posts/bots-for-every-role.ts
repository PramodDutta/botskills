import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots For Every Role: The Complete Directory',
  description:
    'A directory of ai bots by role: what each week actually repeats, the two or three catalogue bots worth starting with, and the risk named for that role.',
  date: '2026-08-25',
  category: 'Reference',
  content: `
# Bots For Every Role: The Complete Directory

Job titles are a bad way to choose automation, because a title describes what
you are responsible for and a bot can only help with what you repeat. Two
people with the same title on the same team have different weeks, and the
useful question is never "what do marketers automate". It is "what did I do
four times this month that produced the same shape of output every time".

This is the directory over fifteen role playbooks and the seventy-seven bots
in the catalogue. Each section below describes what that role's week actually
contains, names the two or three bots worth starting with by their real slug,
and states the one risk that is specific to that role rather than generic to
bots. Three of the roles carry constraints that are not advisory, and those
sections say so plainly.

**On this page**

- [Read your role as a week, not as a job title](#read-your-role-as-a-week-not-as-a-job-title)
- [Start with the whole directory in one table](#start-with-the-whole-directory-in-one-table)
- [Founders need a router before they need a specialist](#founders-need-a-router-before-they-need-a-specialist)
- [Sales work splits into research you can hand over and conversations you cannot](#sales-work-splits-into-research-you-can-hand-over-and-conversations-you-cannot)
- [Marketing gains the most and risks the most from a publishing grant](#marketing-gains-the-most-and-risks-the-most-from-a-publishing-grant)
- [Support is the role where drafting beats sending by the widest margin](#support-is-the-role-where-drafting-beats-sending-by-the-widest-margin)
- [Engineering wants a reviewer that comments and never merges](#engineering-wants-a-reviewer-that-comments-and-never-merges)
- [Product managers need synthesis, not another backlog groomer](#product-managers-need-synthesis-not-another-backlog-groomer)
- [Recruiting bots handle logistics and never touch the decision](#recruiting-bots-handle-logistics-and-never-touch-the-decision)
- [Finance bots produce exceptions lists, never entries](#finance-bots-produce-exceptions-lists-never-entries)
- [Agencies win back the reporting hours and nothing else](#agencies-win-back-the-reporting-hours-and-nothing-else)
- [Consultants should automate the deliverable scaffold, not the thinking](#consultants-should-automate-the-deliverable-scaffold-not-the-thinking)
- [Writers should automate the research and defend the draft](#writers-should-automate-the-research-and-defend-the-draft)
- [Educators keep the gradebook and the student roster off the bot](#educators-keep-the-gradebook-and-the-student-roster-off-the-bot)
- [Real estate bots are bound by fair housing on wording and on targeting](#real-estate-bots-are-bound-by-fair-housing-on-wording-and-on-targeting)
- [Ecommerce bots watch the queue and stay out of the warehouse](#ecommerce-bots-watch-the-queue-and-stay-out-of-the-warehouse)
- [Personal life is where the boring bots pay off fastest](#personal-life-is-where-the-boring-bots-pay-off-fastest)
- [Pick your first three by category, not by enthusiasm](#pick-your-first-three-by-category-not-by-enthusiasm)
- [Every bot in the directory holds the same shape of line](#every-bot-in-the-directory-holds-the-same-shape-of-line)
- [Build from the nearest neighbour when your role has no bot yet](#build-from-the-nearest-neighbour-when-your-role-has-no-bot-yet)
- [Check at thirty days whether the role bot still earns its seat](#check-at-thirty-days-whether-the-role-bot-still-earns-its-seat)
- [Answer the strongest objection: a role bot is a prompt with a logo](#answer-the-strongest-objection-a-role-bot-is-a-prompt-with-a-logo)
- [Where the role framing stops being useful](#where-the-role-framing-stops-being-useful)
- [Frequently Asked Questions](#frequently-asked-questions)

## Read your role as a week, not as a job title

Open last week's calendar and inbox and sort what you find into three piles.

The first pile is work only you can do: the pricing conversation, the decision
to cut a feature, the difficult reply to a customer who is about to leave, the
judgment call that has your name on it. It is smaller than it feels, usually
between five and eight hours.

The second pile is work that repeats with identical steps and teaches you
nothing after the fifth time. Rebuilding the same account brief from twenty
browser tabs. Checking whether a competitor moved. Retyping the same three
replies. Reconciling two systems that should agree and never do. This pile is
where the calendar quietly went, and it is the entire target for a bot.

The third pile is the trap: work that repeats and still teaches you something
every time. Reading churn notes. Sitting inside a support ticket. Writing the
weekly update. From outside it looks exactly like pile two, and handing it over
buys back hours while quietly removing the input that keeps your judgment
current.

Every section below is a claim about which parts of a particular week land in
pile two. If your week disagrees, trust your week.
[What is a Grok Bot](/blog/what-is-a-grok-bot) is the plain explanation if you
are still deciding whether any of this applies, and
[how to create a Grok Bot](/blog/how-to-create-a-grok-bot) is the mechanical
first setup.

## Start with the whole directory in one table

Fifteen roles, the residue in each one, where to start, and the risk that
belongs to that role specifically rather than to bots in general.

| Role | The repeating residue | Start with | The risk named for this role |
|---|---|---|---|
| Founders | Routing everything, and remembering what you promised | [Chief Of Staff](/bots/chief-of-staff), [Inbox Triage](/bots/inbox-triage) | Hiring a specialist before you have a router |
| Sales | Rebuilding the same brief, chasing the same follow-up | [Lead Scout](/bots/lead-scout), [Meeting Prep Brief](/bots/meeting-prep-brief) | A bot that contacts a prospect |
| Marketing | Calendar upkeep, competitor checks, repurposing | [Content Planner Manager](/bots/content-planner-manager), [Competitor Pricing Watch](/bots/competitor-pricing-watch) | A publishing grant |
| Support | Triage, first-draft replies, help centre drift | [Support Queue Pass](/bots/support-queue-pass), [Support Reply Drafter](/bots/support-reply-drafter) | A wrong answer sent under the company name |
| Engineering | Review passes, standups, dependency and config drift | [PR Review Sentinel](/bots/pr-review-sentinel), [Standup Scribe](/bots/standup-scribe) | Anything that can merge |
| Product | Feedback synthesis, changelog assembly, promise tracking | [Tickets To Changelog](/bots/tickets-to-changelog), [What Did We Promise](/bots/what-did-we-promise) | One loud customer laundered into "users say" |
| Recruiting | Scheduling, reformatting, chasing confirmations | [Inbox Triage](/bots/inbox-triage), [Org Chart Keeper](/bots/org-chart-keeper) | Anything that scores, ranks, or rejects |
| Finance | Reconciliation, exceptions, subscription sprawl | [Bookkeeping Auditor](/bots/bookkeeping-auditor), [Subscription Pruner](/bots/subscription-pruner) | A posted entry |
| Agencies | Client reporting, the same deck twelve times | [QBR Pack Builder](/bots/qbr-pack-builder), [Competitor Ad Watch](/bots/competitor-ad-watch) | A client-visible artefact nobody read |
| Consultants | Deck upkeep, research digests, meeting prep | [Deck Updater](/bots/deck-updater), [Brand Deck Keeper](/bots/brand-deck-keeper) | Automating the thinking you are paid for |
| Writers | Source gathering, outlining, repurposing | [Content Idea Generator](/bots/content-idea-generator), [Podcast Summarizer](/bots/podcast-summarizer) | Publishing something with your name and nobody's voice |
| Educators | Planning, resource hunting, feedback drafting | [Content Idea Generator](/bots/content-idea-generator), [Persistent Bot Memory](/bots/persistent-bot-memory) | Student data, and autonomous grading |
| Real estate | Lead sorting, listing prep, long follow-up | [Motivated Seller Finder](/bots/motivated-seller-finder), [Booking Pipeline Runner](/bots/booking-pipeline-runner) | Fair housing, in wording and in targeting |
| Ecommerce | Order queue, review volume, price watching | [Support Autopilot](/bots/support-autopilot), [Competitor Pricing Watch](/bots/competitor-pricing-watch) | Anything that reaches fulfilment |
| Personal life | Groceries, bills, renewals, travel admin | [Grocery Autopilot](/bots/grocery-autopilot), [Subscription Pruner](/bots/subscription-pruner) | A payment made without you |

Read the last column as the thing to design against. Everything else on the row
is upside, and upside takes care of itself.

## Founders need a router before they need a specialist

A founder's week is five jobs wearing one hat, and the failure is always the
same: you build the impressive specialist bot first, because it is the
interesting one to build, and you still have no idea what is on fire on Monday
morning.

Build the router first. A router reads across mail, calendar, tracker, and
whichever channel your customers actually use, and produces one document that
says what needs you today and what is drifting. It decides nothing. That is the
job of [Chief Of Staff](/bots/chief-of-staff), which never reassigns, closes,
or comments on an issue and never posts in Slack, and of
[Chief of Staff Briefing](/bots/chief-of-staff-briefing), which never sends a
message, replies to a thread, or moves a calendar event.

Add [Inbox Triage](/bots/inbox-triage) second, because a founder inbox is where
sales, support, and finance all arrive wearing the same envelope, and add
[Personal CFO](/bots/personal-cfo) third if your company finances and personal
finances are still the same conversation.

The full argument for five and only five is in
[bots for solo founders](/blog/bots-for-founders), the comparison shortlist is
[the best AI bots for founders](/blog/best-ai-bots-for-founders), the routing
setup itself is in
[the chief of staff bot](/blog/grok-bot-chief-of-staff-setup), and the wider
case is [building a one-person company](/blog/one-person-company-grok-bot).

## Sales work splits into research you can hand over and conversations you cannot

The sales week divides cleanly, which is why it is the best-served role in the
catalogue with thirty-one bots. Everything before the conversation is
assemblable. The conversation is not.

| Task | Hand it over | Keep it | Why |
|---|---|---|---|
| Account and person research | Yes | | Public sources, repeatable shape, checkable |
| Pre-call brief | Yes | | You read it in ninety seconds and know if it is wrong |
| Follow-up draft | Yes, as a draft | | The words are yours; the assembly is not |
| CRM notes | Yes, to a note field | | Nothing fires off a note field |
| Stage and close date changes | | Yes | A workflow behind the field emails the customer |
| The pricing conversation | | Yes | The value is that you heard the hesitation |
| First outbound contact | | Yes | A bot contacting a prospect is the role's named risk |

Start with [Lead Scout](/bots/lead-scout), which never contacts anyone and does
research and ranking only, then [Meeting Prep Brief](/bots/meeting-prep-brief),
which never emails or messages anyone on the account. Add
[Call Follow-Up Drafter](/bots/call-follow-up-drafter) once you trust the first
two, and [Prospecting Sheet Builder](/bots/prospecting-sheet-builder) or
[LinkedIn Signal Watch](/bots/linkedin-signal-watch) when volume justifies it.
If you want drafts in your own voice waiting for you rather than sent,
[Outbound In Your Voice](/bots/outbound-in-your-voice) never sends a message
and never sends a connection request.

Depth lives in [bots for sales reps](/blog/bots-for-sales-reps) and
[the best AI bots for sales teams](/blog/best-ai-bots-for-sales), with the two
builds in [researching leads overnight](/blog/grok-bot-to-lead-research) and
[following up with prospects](/blog/grok-bot-to-sales-followup).

## Marketing gains the most and risks the most from a publishing grant

Marketing is the role where a bot most obviously pays for itself and most
obviously embarrasses you, and both come from the same permission. The upside
is that a marketing week contains an enormous amount of assembly: calendar
upkeep, competitor checks, repurposing one asset into six, briefing the same
brief again. The downside is that the output is public.

| Grant | What it buys you | What it costs when wrong | Verdict |
|---|---|---|---|
| Read competitor pages | An early warning on pricing and positioning | Nothing, it is public | Take it |
| Write to the content calendar | The calendar stops rotting | A wrong date somebody notices | Take it, with review |
| Draft posts | The blank page disappears | Slop in your drafts folder | Take it, and edit hard |
| Schedule or publish | Nothing you cannot get by pressing a button yourself | A post the internet saw before you deleted it | Refuse it |

The catalogue is uniform here.
[Content Planner Manager](/bots/content-planner-manager) never publishes and
proposes every status change, [Evergreen Content Flywheel](/bots/evergreen-content-flywheel)
leaves recycled drafts unscheduled with no slot time,
[X Account Crew](/bots/x-account-crew) never posts or schedules from your
account, and [Ad Creative Generator](/bots/ad-creative-generator) never launches
a campaign or spends a credit. Pair one of those with
[Competitor Pricing Watch](/bots/competitor-pricing-watch) or
[Competitor Ad Watch](/bots/competitor-ad-watch), which read published sources
and nothing else.

Read [bots for marketers](/blog/bots-for-marketers) and
[the best AI bots for marketing teams](/blog/best-ai-bots-for-marketing) for
the roster, [running a content calendar](/blog/grok-bot-to-content-calendar) and
[monitoring competitors](/blog/grok-bot-to-competitor-monitoring) for the
builds, [how to stop your bot producing slop](/blog/grok-bot-avoiding-ai-slop)
for the quality problem, and
[automating social content without losing your account](/blog/grok-bot-x-content-automation-risks)
for the platform risk.

## Support is the role where drafting beats sending by the widest margin

Support has the highest volume of near-identical work of any role here, which
makes it the most tempting place to let a bot reply and the worst place to
learn that it should not have.

The split that works is simple and it holds across every helpdesk. The bot
reads the queue, groups what is actually the same ticket wearing different
words, writes the first draft, cites the article it drew from, and stops. A
human reads and sends. That last step takes seconds and is the entire
difference between a fast team and an apology.

| Step in the ticket | Bot | Human |
|---|---|---|
| Read and classify the queue | Yes | No |
| Spot the six tickets that are one bug | Yes | Confirms |
| Draft the reply with a source citation | Yes | No |
| Decide the answer is right | No | Yes |
| Send it | No | Yes |
| Change status, assignee, or priority | No | Yes |

[Support Queue Pass](/bots/support-queue-pass) never replies, reassigns,
re-prioritises, merges, or closes a ticket.
[Support Reply Drafter](/bots/support-reply-drafter) never sends or marks a
ticket answered. [Support Autopilot](/bots/support-autopilot) leaves unsent
drafts and internal notes only, and
[Help Center Updater](/bots/help-center-updater) ships each change as current
text beside proposed text for a human to paste.

The role guide is [bots for support leads](/blog/bots-for-support-leads), the
shortlist is [the best AI bots for customer support](/blog/best-ai-bots-for-support),
the build is [triaging support tickets](/blog/grok-bot-to-support-triage), and
the design question of when to stop entirely is in
[designing the handoff](/blog/bot-handoff-to-human).

## Engineering wants a reviewer that comments and never merges

Engineers automate for a living, so the bar for a bot in this role is higher
and the useful set is narrower. What survives is the work that is genuinely
repetitive and genuinely low-stakes: a first review pass that catches the
obvious things before a human spends attention, a standup note assembled from
commits and tickets, a periodic sweep for the config and dependency drift
nobody has time to look for.

What does not survive is anything that can merge. A review bot with merge
rights is a deployment pipeline with a language model at the front of it, and
the failure mode is not a bad review, it is a bad review that shipped.
[PR Review Sentinel](/bots/pr-review-sentinel) never merges, approves, pushes,
or requests changes and comments only.
[Codebase Hardening Auditor](/bots/codebase-hardening-auditor) never opens a
pull request or pushes a commit, and findings land in a report you read.
[Engineering Agent Manager](/bots/engineering-agent-manager) never merges,
approves, or pushes to the default branch.

[Standup Scribe](/bots/standup-scribe) is the cheapest win in the whole
catalogue for this role, and it posts only to your own direct message rather
than to a shared channel, which means a wrong standup is a note to yourself.

Read [bots for engineers](/blog/bots-for-engineers) and
[the best AI bots for developers](/blog/best-ai-bots-for-developers), then the
builds in [reviewing pull requests](/blog/grok-bot-to-pr-review) and
[writing your standup](/blog/grok-bot-to-standup).

## Product managers need synthesis, not another backlog groomer

The product week is mostly reading: tickets, calls, sales notes, support
threads, analytics, the churn survey nobody reads. The bottleneck is not
capture, it is synthesis, and synthesis is exactly where a bot is good and
where it is dangerous in the same motion.

Good, because a bot will actually read all four hundred tickets rather than the
twelve you remember. Dangerous, because a summary flattens intensity: one
furious enterprise customer and forty mild mentions come out of the blender as
"users say", and you cannot tell which from the output. The fix is to require
counts and quotes rather than adjectives, and to keep the raw list attached to
every summary so you can check the claim.

[Tickets To Changelog](/bots/tickets-to-changelog) never publishes or replies
to a matched ticket, [What Did We Promise](/bots/what-did-we-promise) never
contacts the account and never answers a promise on your behalf, and
[Churn Watch](/bots/churn-watch) never pings the customer.
[Docs Self-Serve Assistant](/bots/docs-self-serve-assistant) produces a ranked
gap list for a human writer and never edits a page.

The role guide is [bots for product managers](/blog/bots-for-product-managers),
with adjacent builds in [triaging bugs](/blog/grok-bot-to-bug-triage),
[catching churn early](/blog/grok-bot-to-churn-watch), and
[cleaning up stale docs](/blog/grok-bot-to-doc-cleanup).

## Recruiting bots handle logistics and never touch the decision

Recruiting has the clearest line of any role on this page, and it is not a
matter of taste. A recruiting bot does logistics. It never rejects a candidate,
never scores one, never ranks or orders a list of them, and never contacts an
applicant directly. Extraction is fine: pulling stated years of experience or a
named certification out of an application is reading. Producing a number, an
order, or a decision is not, and a total is a score even when you call it a
summary.

That leaves a large amount of genuinely useful work, because the recruiting
week is mostly scheduling across four calendars, reformatting the same
information, chasing confirmations, and keeping notes consistent. None of it
touches the decision.

The catalogue has no recruiting-specific bot as of writing, so build from
neighbours: [Inbox Triage](/bots/inbox-triage) for the application inbox,
[Org Chart Keeper](/bots/org-chart-keeper) for mapping a team you are hiring
into, and [Persistent Bot Memory](/bots/persistent-bot-memory) for keeping
notes consistent, which never stores secrets or customer data at all.

Employment decisions are regulated differently in different places and the rules
move. This is not legal advice, and the safe reading is that a bot which never
scores, ranks, rejects, or contacts stays clear of the question entirely.
[Bots for recruiters](/blog/bots-for-recruiters) works through the line in
detail, and [screening job applicants](/blog/grok-bot-to-hiring-screening) shows
what extraction looks like when it stays extraction.

## Finance bots produce exceptions lists, never entries

Finance is the role where the useful output is a list of things that look
wrong. Not a fix, not a posted entry, not a reconciled account. A list, with
the evidence attached, that a person works through in twenty minutes instead of
three hours.

| Task | What a mistake costs to unwind | Bot posture |
|---|---|---|
| Flagging a charge with no matching invoice | Nothing, you check it | Full autonomy |
| Listing subscriptions nobody has opened in ninety days | Nothing, it is a list | Full autonomy |
| Categorising an expense | A correcting entry | Propose, human applies |
| Posting a journal entry | A correction in a legal record | Never |
| Issuing a refund or payout | A bank movement plus fees | Never |
| Filing a return | Professional and legal exposure | Never |

[Bookkeeping Auditor](/bots/bookkeeping-auditor) never posts an entry,
reconciles an account, or files a return, and produces the exceptions list and
stops. [Subscription Pruner](/bots/subscription-pruner) never cancels or
unsubscribes anything, and
[Subscription Cancellation Advisor](/bots/subscription-cancellation-advisor)
hands you the path and the date and leaves the decision with you.
[Personal CFO](/bots/personal-cfo) never moves money or trades.

Read [bots for finance](/blog/bots-for-finance) for the role, then
[reconciling expenses](/blog/grok-bot-to-expense-reconciliation),
[chasing unpaid invoices](/blog/grok-bot-to-invoice-chasing), and
[auditing subscriptions](/blog/grok-bot-to-subscription-audit) for the three
builds that cover most of it.

## Agencies win back the reporting hours and nothing else

Agency work has one enormous, obvious target: the same report, rebuilt for
twelve clients, from the same four dashboards, on the same week of the month.
It is pure assembly, it is high volume, and nobody enjoys it. Automate that and
you have recovered a meaningful share of a month.

Be honest that this is the whole prize. The parts of agency work clients
actually pay for are the recommendation, the creative judgment, and the
relationship, and none of those improve when a bot writes the commentary. A
report with generated commentary that nobody read before it went out is worse
than a bare table, because it commits your agency to a claim in writing.

[QBR Pack Builder](/bots/qbr-pack-builder) never shares, sends, or presents the
deck to the customer and leaves it a private draft for the account owner.
[Account Expert](/bots/account-expert) never messages anyone at the account.
[Enablement Pack Builder](/bots/enablement-pack-builder) lands as an internal
draft link for one teammate. Add
[Competitor Ad Watch](/bots/competitor-ad-watch) for the client-facing
intelligence that is genuinely differentiating.

The role guide is [bots for agencies](/blog/bots-for-agencies), the build is
[reporting weekly KPIs](/blog/grok-bot-to-kpi-reporting), and once you are
running one bot per client account,
[running a team of bots without chaos](/blog/multi-bot-teams) is the next
problem you will have.

## Consultants should automate the deliverable scaffold, not the thinking

Consulting looks similar to agency work and behaves differently, because the
deliverable is the thinking rather than the report. The repeatable residue sits
either side of it: assembling background before an engagement, keeping a deck
library current, turning three hours of interviews into a structured note,
localising the same material for a different market.

The line to hold is that a bot may build the scaffold and never fill the
argument. A structured note listing what each interviewee said, with quotes and
attribution, is a scaffold. A paragraph beginning "the key insight is" is the
thing the client is paying you for, and outsourcing it produces work that reads
like everybody else's.

[Deck Updater](/bots/deck-updater) never edits a slide or touches the live deck
and sends a correction list to the owner.
[Brand Deck Keeper](/bots/brand-deck-keeper) never edits the master deck or the
shared library. [Deck Localizer](/bots/deck-localizer) produces a separate copy
and a register for a human approver rather than softening a flagged claim.
[Podcast Summarizer](/bots/podcast-summarizer) never posts or shares anything,
and [Meeting Prep Brief](/bots/meeting-prep-brief) keeps the brief internal.

[Bots for consultants](/blog/bots-for-consultants) covers the research and
deliverable split, and [prepping for meetings](/blog/grok-bot-to-meeting-prep)
is the build most consultants run first.

## Writers should automate the research and defend the draft

A writer's week has two halves and only one of them should be handed over. The
first half is gathering: finding sources, reading them, extracting the numbers,
noticing what everyone else has already said, checking whether the claim you
half-remember is true. That half is assembly, it is slow, and a bot is good at
it.

The second half is the draft. Hand it over and you get output that is
grammatical, on-topic, and completely without a point of view, which is the
thing readers were coming for. The economics of this are worth stating plainly:
generated prose is cheap and abundant, which means it has approximately no
value, and the scarce thing is a person who noticed something.

[Content Idea Generator](/bots/content-idea-generator) ends at a ranked idea
list and never writes a script or a draft.
[Podcast Summarizer](/bots/podcast-summarizer) brings episode briefs back to
you alone. [Evergreen Content Flywheel](/bots/evergreen-content-flywheel) never
publishes or schedules a recycled post.

Read [bots for writers](/blog/bots-for-writers) for the workflow,
[how to stop your bot producing slop](/blog/grok-bot-avoiding-ai-slop) for the
quality argument in full, and
[digesting your newsletters](/blog/grok-bot-to-newsletter-digest) for the
research build that pays off fastest.

## Educators keep the gradebook and the student roster off the bot

Teaching splits into contact hours and everything around them, and the
everything around them is enormous: planning, resource hunting, differentiating
the same material three ways, writing feedback, and the administrative layer
that grows every year.

Two constraints hold here and neither is negotiable. First, no bot grades
autonomously. A bot may draft feedback that a teacher reads, edits, and owns,
because the editing is the reading. A bot may not produce a mark that goes into
a record without a human forming the judgment. Second, student data is
protected, and the practical version of that rule is that names, identifiers,
and anything that could reconstruct a specific child do not get pasted into a
bot at all. Strip before you paste, not after.

That leaves the planner, which never sees a name and is the single best bot in
this role. [Content Idea Generator](/bots/content-idea-generator) produces
ranked ideas and outlines with no student data anywhere near it.
[Podcast Summarizer](/bots/podcast-summarizer) turns long source material into
briefs. [Persistent Bot Memory](/bots/persistent-bot-memory) never stores
secrets or customer data, which is the right default when the data is a
classroom.

Student records are governed by different laws in different countries and
sometimes by your institution's own policy on top. This is not legal advice, and
the check that matters is your institution's, before the first paste.
[Bots for educators](/blog/bots-for-teachers) works through planning and
feedback support in detail.

## Real estate bots are bound by fair housing on wording and on targeting

Real estate has more repetitive work than almost any role on this page. The
week is drive time, dead time, lead sorting, listing preparation, and a
follow-up cycle that runs for months. All of that is automatable in shape.

One constraint governs the whole role, and it applies twice. Fair housing rules
reach the wording of a listing or a message, which is the part everybody
expects, and they reach the targeting of who sees it, which is the part that
catches people out. A bot that writes a listing describing an ideal resident
rather than a property is a problem. A bot that filters or ranks a lead list on
a proxy for a protected characteristic is the same problem wearing a
spreadsheet, and removing the obvious field does not remove the signal, because
a postcode carries it.

So keep the bot on facts the person told you and on logistics.
[Motivated Seller Finder](/bots/motivated-seller-finder) never contacts an
owner, agent, or occupant and never loads a list into a dialer or a mail
campaign. [Booking Pipeline Runner](/bots/booking-pipeline-runner) never sends
a calendar invite, a reschedule, or an email.
[Inbox Reply Digest](/bots/inbox-reply-digest) never replies, forwards,
archives, or labels, and the digest is read only.

Housing advertising and lead handling are regulated, the rules differ by
jurisdiction, and none of this is legal advice. Check the rule where the
property is.
[Bots for real estate](/blog/bots-for-real-estate) goes through wording,
targeting, and the follow-up charter clause.

## Ecommerce bots watch the queue and stay out of the warehouse

An ecommerce week is a queue with a warehouse attached, and the distinction
between those two halves is the whole design. The queue half is information:
which orders look wrong, which reviews are saying the same thing, which
competitor moved a price, which support tickets are one bug. A bot handles all
of that well.

The warehouse half is physical. A fulfilment action reaches a picker, a box,
and a courier, and the undo involves a human driving somewhere. Cancellations
have the same property in reverse. Keep both away from the bot permanently, and
notice that "edit a live product" belongs in the same category, because a price
typo on a live listing sells at the typo.

[Support Autopilot](/bots/support-autopilot) never sends a reply and never
changes a conversation's status, assignee, or tags.
[Support Ticket Fixer](/bots/support-ticket-fixer) never posts or sends a
message in the thread and never closes or merges a ticket.
[Competitor Pricing Watch](/bots/competitor-pricing-watch) reads published
pages only and never fills a form or starts a trial.
[Bookkeeping Auditor](/bots/bookkeeping-auditor) closes the loop between the
payment processor and the books.

The role guide is [bots for ecommerce](/blog/bots-for-ecommerce), and the two
connections that matter are covered in
[Grok Bot and Shopify](/blog/grok-bot-shopify) and
[Grok Bot and Stripe](/blog/grok-bot-stripe).

## Personal life is where the boring bots pay off fastest

The personal bots are the least impressive and the most consistently useful,
because household admin is pure repetition with no upside for doing it well.
Nobody is promoted for renewing insurance on time.

| Chore | Bot | What it must never do |
|---|---|---|
| The weekly shop | [Grocery Autopilot](/bots/grocery-autopilot) | Place the order or pay |
| Travel admin | [Flight Check-In](/bots/flight-check-in) | Check in, select a seat, or change a booking |
| Inbox rot | [Email Purger](/bots/email-purger) | Delete, empty trash, or unsubscribe |
| Filing and filters | [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) | Send, reply, or permanently delete |
| Subscription creep | [Subscription Cancellation Advisor](/bots/subscription-cancellation-advisor) | Cancel, downgrade, pause, or contact the vendor |
| Money | [Personal CFO](/bots/personal-cfo) | Move money, trade, or pay a bill |

Every one of those stops one step before the irreversible act, and that is not
timidity. It is that the entire value of a household bot is not having to think
about the chore, and a bot that pays a bill wrongly puts the chore back in your
week with interest.
[Bots for personal life](/blog/bots-for-personal-life) has the full set.

## Pick your first three by category, not by enthusiasm

Seventy-seven bots spread unevenly across six categories, which tells you
something about where repeatable work actually accumulates.

| Category | Bots | What the concentration tells you |
|---|---|---|
| Sales | 31 | The most assemblable role there is, because the research is public |
| Customer success | 15 | High volume, near-identical, and a clear send boundary |
| Marketing | 12 | Lots of drafting, and a publishing line everybody must hold |
| Personal | 7 | Small, boring, and the fastest payback per hour of setup |
| Productivity | 6 | Cross-role plumbing: triage, memory, meetings |
| Operations | 6 | Reporting and review, where the output is a document |

Pick one from your role, one from productivity, and one from personal. The role
bot proves the concept on work you care about, the productivity bot compounds
across everything else, and the personal bot is the one that keeps running when
you get busy, which is the real test.

\`\`\`markdown
## Role and scope

You are my [role] bot. You work on exactly these recurring jobs:

1. [job one, with the source it reads and the document it writes]
2. [job two]
3. [job three]

Anything outside those three is out of scope. If something looks urgent and
is out of scope, write one line about it in the run notes and stop.

## Boundary and escalation

You never [send / post / merge / pay / grade / score / fulfil]. When a run
reaches that point it ends with a proposal in [document], with my name on
the decision.

## Output

One document per run, at [path]. Sections: what changed, what needs me
today, what I am ignoring on purpose, and sources for every claim.
\`\`\`

[The starter roster](/blog/grok-bot-starter-roster) argues for which three, and
[the charter template](/blog/grok-bot-starter-charter-template) is the fill-in
version of the block above.

## Every bot in the directory holds the same shape of line

Read down the boundary column of any role above and the same grammar keeps
appearing. That is deliberate: a listing on this site has to declare one act
the bot never takes without a human, and the declaration is what makes the bot
safe to leave running rather than something you supervise.

| Boundary verb | Roles where it is the line | Why it is the line |
|---|---|---|
| Never sends | Founders, sales, support, recruiting, personal | The recipient reacted before you knew |
| Never posts or publishes | Marketing, writers, agencies | A deleted post was still seen |
| Never merges or pushes | Engineering | A pipeline runs behind the merge |
| Never edits the record | Sales, finance, product, real estate | A workflow behind the field reaches a customer |
| Never moves money | Finance, personal, ecommerce | The reversal is itself a transaction |
| Never scores or ranks people | Recruiting | The output is a decision wearing a number |
| Never grades | Education | The judgment is the job |

Notice that the line is always the same kind of thing: the first act with an
audience outside the run. That is the general rule behind all seventy-seven
listings, and it is easier to apply than a list of forbidden tools.
[The one line every setup prompt needs](/blog/grok-bot-boundaries) makes the
case, [approval gates](/blog/approval-gates-for-bots) covers where to put the
stop, and [least privilege for bots](/blog/least-privilege-bots) covers the
permissions that make the line enforceable rather than aspirational.

## Build from the nearest neighbour when your role has no bot yet

The catalogue leans heavily towards go-to-market work, so plenty of roles have
no exact match. That is a naming problem more often than a capability one. Find
the bot whose shape matches yours and change the nouns.

| Your role | Nearest neighbour | What to change |
|---|---|---|
| Recruiter | [Inbox Triage](/bots/inbox-triage) | Sources become the application inbox; categories become stage names |
| Teacher | [Content Idea Generator](/bots/content-idea-generator) | Audience becomes a year group; output becomes a lesson outline |
| Analyst | [Salesforce Report Builder](/bots/salesforce-report-builder) | Swap the source system, keep the read-only posture |
| Ops manager | [Chief Of Staff](/bots/chief-of-staff) | Swap the trackers, keep the routing and the no-decisions rule |
| Community manager | [Support Queue Pass](/bots/support-queue-pass) | Queue becomes the forum; the never-reply line stays |
| Solo creator | [Account Growth Planner](/bots/account-growth-planner) | Keep the plan-only boundary, change the platform |

Three things must survive the rename: the boundary, the output shape, and the
source list. If you change all three you are not adapting a bot, you are
writing a new one, and
[the four layers of a bot system](/blog/bot-system-architecture) is the better
starting point for that.
[Twenty-five real setups people run daily](/blog/grok-bot-examples) is worth
skimming for a shape close to yours.

## Check at thirty days whether the role bot still earns its seat

A role bot is a hire, and hires get reviewed. Put the review in the calendar
when you build the bot, because you will not think to schedule it later.

| Check | What good looks like | What to do if it fails |
|---|---|---|
| Did you read every run? | Yes, or you skimmed and it was fine | Reduce frequency before you improve the prompt |
| How often was the output wrong? | You can state a number | Start counting; you cannot tune what you do not measure |
| Did it ever act outside its boundary? | Never | Stop the bot today and fix the permission, not the wording |
| Did it fail loudly when a source broke? | Yes | Add a check that can fail; silence is the worst failure |
| Is it cheaper than the hour it saves? | Comfortably | Reduce scope or frequency |
| Would you notice tomorrow if it stopped? | Yes | Retire it |

That last row retires more bots than any other, and retiring one is a good
outcome rather than a failure. [Testing a bot setup before you trust it](/blog/testing-your-bot)
covers the checks, [the seven ways bot setups fail](/blog/bot-failure-modes)
maps symptoms to causes, [logs, audits, and receipts](/blog/bot-observability)
covers the evidence, and [keeping bot costs predictable](/blog/bot-cost-control)
plus [what Grok Bot costs](/blog/grok-bot-cost) cover the money side.

## Answer the strongest objection: a role bot is a prompt with a logo

The fair objection is that nothing on this page is a product. A role bot is a
prompt, a schedule, and two or three connections, and calling it a hire is
marketing. That is largely correct, and it is still the right framing for three
reasons.

Naming forces scope. "My sales bot" gets asked to do anything sales-adjacent
and degrades within a fortnight. "Lead Scout, which researches and ranks and
never contacts anyone" refuses the wrong request by construction, because the
refusal is in its description rather than in your memory.

Naming forces a boundary. Every listing in this directory declares one act it
never takes, and that declaration is what lets you leave it running. An unnamed
prompt has no such declaration and drifts to whatever the last conversation
implied.

Naming forces review. You can ask whether a named bot still earns its seat. You
cannot ask that of a prompt you paste sometimes.

Where the objection genuinely wins: if you only have one recurring job, do not
build a roster. Build one bot, run it for a month, and read
[the starter roster](/blog/grok-bot-starter-roster) only when the second job
appears.

## Where the role framing stops being useful

Three cases break this page, and they are worth naming rather than discovering.

The first is a role that is genuinely all judgment. Some jobs are eight hours
of decisions with almost no residue: an early-stage designer, a founding
salesperson at week two, a therapist. There is nothing here to hand over, and a
bot will manufacture busywork to look useful. That is not a bot problem, it is
a correct answer.

The second is shared work. Every bot in this directory reports to one person,
and in Grok Bot a routine belongs to a single bot rather than to a team, so
nothing here is a team-level asset as of writing. If four people need the same
output, four people build the same bot, and it drifts.
[Running a team of bots without chaos](/blog/multi-bot-teams) is the current
best answer, and it is a workaround rather than a feature.

The third is that role boundaries are not tool boundaries. A marketing bot and
a sales bot on the same account share one computer and one set of connections,
so separating work by role organises your attention without isolating anything.
[Connecting bots to your tools without handing over everything](/blog/bot-integrations-complete-guide)
covers what a connection actually grants, and
[what one shared computer isolates](/blog/grok-bot-shared-computer-security)
covers why the separation is not a security boundary.

**Keep reading:** [The starter roster](/blog/grok-bot-starter-roster), [Bot boundaries](/blog/grok-bot-boundaries), [Introducing botskills.sh](/blog/introducing-botskills).

## Frequently Asked Questions

### Which AI bot should you start with for your role?

Start with whichever bot removes the job you did four times last month with an
identical output each time, not the most impressive one available. For most
roles that is a research or triage bot rather than a drafting bot, because
research is assembly and assembly is what a bot does reliably. Then add one
productivity bot that compounds across every role, usually inbox triage or a
routing brief, and one personal bot, because household admin is the work you
abandon first when you get busy and the easiest place to see whether a setup
actually holds up.

### Are there AI bots that are safe for recruiting and hiring?

Only for logistics. A recruiting bot can schedule interviews across calendars,
reformat information, chase confirmations, and extract facts a candidate stated
themselves. It must not score candidates, rank or order them, reject anyone, or
contact an applicant, and a total presented as a summary is still a score.
Employment decisions are regulated differently across jurisdictions and the
rules move, so this is not legal advice. The safe construction is a bot whose
description makes the decision impossible rather than one instructed not to
make it.

### Can a bot handle work for more than one role at once?

It can, and it degrades quickly when it does. A bot asked to cover sales and
support drifts because the two jobs want different sources, different output
shapes, and different boundaries, and the broadest boundary wins by default.
Two narrow bots with separate charters hold their shape far longer than one
wide one. Be aware that splitting by role organises your attention rather than
isolating anything technically, since bots on the same account share a computer
and a set of connections.

### How many bots does one person actually need?

Three to five for most people, and the fifth is usually a mistake. Each bot
costs attention to review, and a roster you stop reading is worse than no
roster because it produces confident output nobody checks. The practical test
at thirty days is whether you would notice tomorrow if a given bot stopped
running. If the honest answer is no, retire it. Adding the sixth bot almost
always means the first three were scoped too narrowly rather than that you
found new work.
`,
};
