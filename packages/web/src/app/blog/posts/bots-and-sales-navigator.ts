import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Research That Leaves a Footprint on the Person You Researched',
  description:
    'Most bot research is invisible to its subject. Profile-based prospecting is not, and that changes what a bot should be allowed to open, not just what it may send.',
  date: '2026-09-02',
  category: 'Safety',
  content: `
# Research That Leaves a Footprint on the Person You Researched

Almost every research bot on this site reads things that do not know they are being read. A pricing page, a changelog, a filing. The subject learns nothing.

Professional network research is different in a way that is easy to forget and expensive to remember late: opening a profile can be visible to the person whose profile it is. Your research becomes an event in their day.

That single property changes what a bot should be allowed to do, and it is not primarily a privacy question. It is that a bot browsing at machine speed generates a signal you did not intend to send, to people you have not decided to contact yet.

## Understand that reading is an action here

The mental model most people bring is that reading is passive and sending is active, and the boundary belongs between them. That model is correct nearly everywhere and wrong here.

| Research surface | Subject learns you looked? | So reading is |
|---|---|---|
| Company website | No | Passive |
| Public filings | No | Passive |
| Changelog or docs | No | Passive |
| News coverage | No | Passive |
| A person's profile | Often yes | An action |

When reading is an action, the never-send boundary is not sufficient on its own. A bot that never messages anyone can still have announced itself to four hundred people in an afternoon, and from the recipient's side that is indistinguishable from being targeted.

## Decide what the bot may open, not just what it may send

So the charter needs a second boundary, upstream of sending, about what gets opened at all.

The version that works: the bot may read anything the company publishes about itself, and may not open individual profiles. Where it needs a person, it names the role and lets a human open the profile if they decide to pursue it.

That sounds like it removes most of the value and it does not, because the expensive part of prospecting was never viewing profiles. It was working out which accounts are worth the attention, and that is almost entirely company-level research the bot can do freely.

\`\`\`
You are Account Research. You research companies. You do not open
individual profiles and you do not contact anyone.

You may read:
  company sites, careers pages, public filings, changelogs,
  published pricing, news coverage, and anything the company
  publishes about itself.

You may not:
  open a person's profile, follow anyone, request a connection,
  view a page where viewing is visible to its subject, or take any
  action a human on the other side could observe.

For each account, output the fit assessment, the sourced evidence,
and the ROLE you would approach with the reason that role rather
than another. Never a named individual.

A human decides whether to pursue the account. A human opens the
profile. A human sends the message.

If you cannot assess an account without opening a profile, say so
and stop. That is a finding, not an obstacle.
\`\`\`

The last rule matters most. Without it a bot that hits the boundary will route around it, usually by finding the same person somewhere the boundary does not mention.

## Watch four hundred views arrive in one afternoon

Priya built a prospecting bot that scored accounts and identified contacts. It worked well for a fortnight on a small list.

Then she pointed it at a list of four hundred, on a Thursday, and went to a meeting.

Nothing broke. The bot researched every account correctly, identified a contact at each, and produced a clean review list with no messages sent. The never-send boundary held perfectly.

What she had not thought about was that identifying a contact meant opening a profile, and four hundred profile views from one account in an afternoon is a pattern. Several recipients noticed. Two mentioned it, one of them a customer who had not been filtered out because the exclusion check ran on the CRM after the research rather than before it.

No message went out. She still had a conversation she did not want to have, about why her company was systematically looking at people who had not asked to be looked at.

The bot did what it was told. What it was told did not include the idea that looking is doing, and that omission was not carelessness on her part: every other research bot she had built read things that could not notice being read, so the distinction had never needed making before. It is the kind of assumption you only discover you were carrying once it turns out to be wrong.

## Filter the list before you research it, not after

That incident had a second cause worth separating, because it recurs independently.

Exclusion checks belong before the research, not after. Checking the CRM at the end to drop existing customers from the output is too late when the research itself has already generated visible activity. Whatever the bot did while researching, it did to everyone on the list including the people you meant to exclude.

| Order | What happens |
|---|---|
| Research, then exclude | Excluded people were still researched, and know it |
| Exclude, then research | Only the intended list is touched |
| Exclude, research, exclude again | Belt and braces, catches CRM changes mid-run |

The third row is worth the extra step on any list that takes more than a few hours to work through, because active-sequence and customer status change while a long run is in progress.

## Respect the rate as well as the total

Even a correctly filtered list has a rate problem. Four hundred views over a fortnight reads as a person doing their job. Four hundred in an afternoon reads as automation, and it is the shape rather than the count that gets noticed.

If profile-level activity is genuinely required, and it usually is not, pace it. Spread across days, cap per day, and let the bot report that it stopped for the day rather than working through the list at machine speed.

Better: have the bot produce the list and let a human open profiles as they work through it. That is naturally paced because a person is doing it, and it puts the visible action with the person whose account it is. It also means the footprint scales with genuine intent rather than with list length, which is the property you actually wanted and the one automation removes by default.

## Keep the record proportionate to the purpose

Related and worth stating plainly: record only what the assessment needs.

A research bot with an instruction to build a profile of a person will build one, and it will be thorough, because thoroughness is what it optimises for. But a dossier assembled about an individual who has not asked to be contacted is a different artefact from a note about why an account fits, and it is much harder to justify if anyone ever asks to see it.

So the output is about the account. Where a person is unavoidable, keep it to the role, the reason that role, and nothing about them personally that does not bear directly on whether the product is relevant to their work. The test is whether every line would still look reasonable if the subject read it, which is a lower bar than it sounds and one that thorough dossiers routinely fail.

## Ask whether the region changes the answer

Rules about processing personal information vary, and this is a place where the bot cannot infer the right behaviour.

The bot does not know which rules apply to your list. It should be told, once, in the charter, and if it has not been told it should ask rather than guess. A bot researching people across several jurisdictions with no instruction about any of them is making a decision by default, and defaults are not a defence.

This is not legal advice and this page is not the place to get it. The operational point is narrower: the charter should state which rules the operator says apply, and the bot should stop and ask when it is pointed at something outside that. A bot that silently widens its own scope to a new region because a list happened to include one is making a decision nobody reviewed.

## Prefer the company's own signals over the person's

The practical consequence of all of this is a research approach that is both safer and usually better.

| Signal | Source | Visible to anyone? |
|---|---|---|
| They are hiring for a role your product serves | Careers page | No |
| They shipped something relevant | Changelog | No |
| They changed pricing or packaging | Their site | No |
| They published a case study naming a problem | Their site | No |
| A named person's job history | Their profile | Often |

The first four are stronger buying signals than anything on an individual profile, they are all invisible to the subject, and they are all things a bot can read at any rate you like. A careers page listing four roles your product supports tells you more about whether an account is worth pursuing than any individual's background does, and it is a fact about the company rather than an inference about a person, which makes it both stronger evidence and cheaper to defend.

## Separate the two questions a rep actually asks

Prospecting research answers two different questions, and conflating them is what pushes a bot toward profiles it should not open.

| Question | Best source | Visible to anyone? |
|---|---|---|
| Is this account worth my time? | Company signals | No |
| Who at this account should I approach? | The org, then a profile | Sometimes |
| What do I say to them? | Company signals again | No |
| Are they already in a sequence? | Your own CRM | No |

Three of the four are answered without touching a person, and the third is the one people assume needs a profile. It does not. What you say comes from what the company is doing: a role they are hiring for, a change they shipped, a problem they described in their own case study. Those make a stronger first message than anything on someone's profile, because they are about the recipient's work rather than about them.

That leaves exactly one question that might need a profile, asked only for accounts you have already decided to pursue, which is a much smaller number than the list you started with. The funnel does the volume reduction that makes the manual step affordable.

## Log what the bot opened, so volume is visible before it is a problem

The failure in Priya's case was invisible until somebody outside told her. That is avoidable with one instruction.

Have the bot record, per run, how many pages it opened and of what kind, and print the count in its output. Not a status dashboard nobody checks, a line at the top of the artefact somebody is already reading.

A report that opens with "researched 400 accounts, opened 0 profiles" is reassuring and takes a second to read. The same report opening with "opened 400 profiles" would have stopped the run on day one rather than after the fact. The number is trivial to produce and it is the only thing that makes rate visible before somebody else makes it visible for you.

## Treat a plugin as narrower than a browser, not safer in principle

Where a structured integration exists, prefer it, and understand exactly what that buys you.

A connector generally does what its scopes permit and nothing else, which is genuinely useful: it cannot wander onto an adjacent page, follow a link somewhere unexpected, or take an action nobody scoped for. A browser session can do all three, because a browser is a general-purpose instrument pointed at a specific site.

What a connector does not do is make the underlying action invisible. If the scope permits reading profiles, and reading profiles is visible to their subjects, then it is visible whether a connector or a browser did it. The mechanism changed; the footprint did not.

So the reasoning stays where it was. Decide first what the bot may do, on the basis of what the person on the other end experiences. Then choose the narrowest mechanism that does it. Choosing the mechanism first and inferring the permissions from what it happens to allow is how a scope becomes a policy by accident.

## Ask what you would say if the subject asked

The test that resolves most of the ambiguous cases quickly, and it needs no policy document.

Imagine the person whose profile the bot opened emails to ask why. There is a comfortable answer and an uncomfortable one, and you can usually tell which you have in about two seconds.

Comfortable: a rep was researching your company because you are hiring for three roles our product supports, saw your profile while working out who owns that area, and was about to get in touch. That is a normal professional interaction described plainly.

Uncomfortable: an automated process opened your profile along with three hundred and ninety-nine others while scoring a list, and nobody had decided whether to contact you. Same action, and the difference is entirely whether a person had made a decision about this specific individual before the system touched them.

That test is not a legal standard and it does not replace one. But it is quick, it is available at the moment you are writing the charter rather than afterwards, and in practice it points the same direction as every more formal analysis: the problem is not looking, it is looking at volume without a decision behind each look.

## Answer the objection that this makes prospecting research useless

The strongest version: identifying the right person is the job. An account-level assessment with no contact is half a piece of work, and handing a rep a company name and a role title means the rep does the actual research manually, which is what the bot was supposed to remove.

Two responses.

The first is that the split is not even. Assessing whether an account is worth pursuing is the slow, tedious, high-volume part, and it is entirely company-level. Finding the right person at an account you have already decided to pursue takes a rep a couple of minutes and is the part they are good at. Automating the two hours and leaving the two minutes is not half a piece of work.

The second is about what you are actually buying with the manual step. A profile view attached to a real person who is about to send a real message is a normal professional interaction. The same view generated in bulk by an automated pass over a list is a different thing to be on the receiving end of, and it is the difference between research and surveillance in the only place that matters, which is how it looks to the person it happened to.

Where the objection wins: for a small, carefully chosen list where a human reviews each account anyway, the bot opening profiles is closer to a person doing it slowly, and the concern shrinks considerably. The problem is volume, and volume is exactly what automation adds.

## Stop using this page when the shape is different

This page is about research where reading is visible to the subject. It stops applying in three places.

If the research is entirely company-level and public, none of this binds and you should let the bot read freely; the relevant discipline is sourcing rather than restraint. If you are drafting outbound rather than deciding who to approach, [the outbound setup](/blog/grok-bot-sales-outbound) has the never-send charter and the two-account pause. And if the problem is that search results are being cited as sources, that is [a different failure](/blog/bots-and-google-search) with a different fix.

Bots that help: [ICP Scored Outbound List](/bots/icp-scored-outbound-list) scores accounts against a written profile and returns a review list without sending. [LinkedIn ICP Prospect Tracker](/bots/linkedin-icp-prospect-tracker) maintains a roster and is the one to read the boundary on carefully before running at volume. [Lead Scout](/bots/lead-scout) works from public sources. And [Competitor Website Watch](/bots/competitor-website-watch) is the purely company-level version of the same instinct.

## Frequently Asked Questions

### Why is profile research different from other bot research?

Because reading can be visible to the subject. Almost everything else a research bot reads, company sites, filings, changelogs, news, has no idea it is being read, so the passive-reading and active-sending distinction holds and the never-send boundary is sufficient. On a professional network, opening a profile can generate a signal to the person whose profile it is. A bot that never messages anyone can still have announced itself to hundreds of people in an afternoon, and from their side that is indistinguishable from being deliberately targeted.

### What boundary should the charter carry?

Two, not one. The usual never-contact boundary, plus an upstream boundary about what may be opened at all: the bot reads what companies publish about themselves and does not open individual profiles. Where a person is needed, it names the role and the reason that role, and a human opens the profile if they decide to pursue the account. Add an explicit rule that hitting this boundary is a finding rather than an obstacle, otherwise a bot will route around it by locating the same person somewhere the rule does not mention.

### When should exclusions be applied?

Before the research, never after. Filtering the output to drop existing customers is too late if the research itself generated visible activity, because whatever the bot did while researching it did to everyone on the list including the people you meant to exclude. On any list long enough to span hours, check twice: once before starting and once before the output is used, since customer status and active-sequence membership change while a long run is in progress.

### Does this make prospecting research not worth automating?

No, because the split is uneven in your favour. Assessing which accounts are worth pursuing is the slow, high-volume, tedious part and it is entirely company-level: hiring pages, changelogs, pricing changes and published case studies are all stronger buying signals than anything on an individual profile, and all invisible to the subject. Finding the right person at an account you have already chosen takes a rep a couple of minutes. Automating the two hours and leaving the two minutes is a good trade, not half a job.
`,
};
