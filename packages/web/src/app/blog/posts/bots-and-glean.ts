import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Internal Search Answers Are Only as Scoped as Your Permissions',
  description:
    'A bot querying internal search inherits your access, which is wider than you remember. What that means for summaries, and the rules that keep it contained.',
  date: '2026-09-02',
  category: 'Safety',
  content: `
# Internal Search Answers Are Only as Scoped as Your Permissions

Enterprise search tools like Glean are built on a sensible premise: index everything the company has, and show each person only what they are allowed to see. The permission model is the product.

Point a bot at it and something changes that is easy to miss. The bot searches as you. Every space you were added to for one meeting in 2024, every drive folder somebody shared broadly, every channel you joined and forgot, is inside the answer surface. You do not remember that access. The search does.

This is not a flaw in the search tool. It is faithfully doing what it was told, and the permission model is holding exactly as designed. The problem is that a person searching for one thing sees one result and moves on, while a bot searching on a schedule reads broadly and writes summaries, and the difference in exposure between those two behaviours is large.

## Your access is wider than your mental model of it

Ask anybody with three years at a company to list what they can see. They will name their team's spaces, the company wiki, and their own drive. They will be wrong by a wide margin.

| Where the forgotten access comes from | Typical case |
|---|---|
| A project that ended | Space access survives the project |
| A broad share | A folder shared with everyone, indexed |
| A previous team | Access rarely removed on internal moves |
| A one off meeting | Added to a channel, never left |
| A tool with loose defaults | Whole workspace readable by default |

None of these are unusual and none are anybody's fault. Access accumulates because removing it is nobody's job and there is no cost to leaving it. That is fine when the access is dormant. A bot makes it active. The distinction is worth holding onto: dormant access is a risk that requires somebody to go looking, and active access is a risk that arrives in a document every Monday whether anybody looks or not.

## What actually goes wrong

The failure is rarely dramatic. It is a summary that contains something the reader should not have.

A bot answers a question about a product decision. Internal search surfaces a document from a space you joined for a review last year, containing a compensation figure or an unannounced departure or a legal position. The bot summarises faithfully, because that document was in scope. The summary goes to five people, four of whom did not have access to the source.

Nothing was breached. The bot read a document it was permitted to read and shared a summary with people it was told to share with. Every step was authorised and the outcome is a leak. That is what makes this class of failure hard to argue about afterwards: there is no rule that was broken, only a design that combined two reasonable permissions into an unreasonable result.

The second failure is quieter and more common: the answer is right and its provenance is invisible. The bot says the renewal date is a certain month. Nobody can tell whether that came from a signed contract, a stale planning doc, or somebody's note from a call. All three are indexed. All three read the same in a summary.

## The two rules that do most of the work

Almost everything useful here comes down to two charter lines.

First, cite the source for every claim, with a link.

> Every statement in the output must name the document it came from and link to it. If a claim rests on more than one source, list them. If you cannot link the source, do not make the claim.

This fixes the provenance failure directly, and it fixes the exposure failure indirectly, because a summary with links makes it immediately obvious when it is quoting something from a space the reader cannot open. A summary without links hides that entirely.

Second, restrict the search surface explicitly.

> Search only these locations, named individually. If the answer is not there, say so. Do not widen the search to find an answer.

The second sentence is the important one. Without it, a bot that cannot answer within the stated scope will keep looking, because finding an answer reads as the goal. Naming the scope and permitting failure is what makes the scope real.

| Charter line | Failure it prevents |
|---|---|
| Cite every claim with a link | Confident answers with unknown provenance |
| Named search locations only | Forgotten access becoming an answer surface |
| Say so rather than widening | Scope creep dressed as helpfulness |
| Never quote compensation, personnel, or legal content | The categories that cause real damage |
| Name the spaces searched, in the output | Reader can judge completeness |

## Handle the sensitive categories by name

Generic instructions to be careful do not work. Name the categories.

Compensation and individual performance. Personnel matters, including departures not yet announced. Legal advice and anything touching a dispute. Security findings and unpatched issues. Unannounced commercial terms. Anything marked confidential by whoever wrote it.

> If a source falls into these categories, do not quote or summarise it. Say that a relevant document exists and that it is restricted, and name where it is so a person can decide.

That last clause matters. Silently omitting is worse than flagging, because the reader gets an answer that looks complete. "There is a document in this space that appears relevant and I have not summarised it" gives a person the ability to go and look with their own access, which is exactly the right outcome.

## Where the shared computer comes in

If the bot reaches internal search through a signed in session, understand what that means on this platform.

The shared computer is shared across your account, so signed in sessions, files and command line credentials are shared with every Bot on that account. A second Bot on the same account inherits the same signed in state. Do not use separate Bots as a security boundary: splitting an internal search bot away from your other bots does not split the access, and treating it as if it does is the specific mistake this creates.

That has one clear practical consequence. If internal search access is sensitive enough to want isolated, the isolation has to happen at the account level, and the account should hold only the access that work needs. [least privilege bots](/blog/least-privilege-bots) covers the shape of that, and [a boundary is not a permission](/blog/a-boundary-is-not-a-permission) covers why the charter lines above are a complement to access control rather than a substitute for it.

## Give the output a scope statement

A small habit with a large payoff: have the bot state what it searched, at the top of every output.

"Searched: engineering wiki, product space, the shared drive folder named in the charter. Not searched: anything else."

Three lines. What it buys you is that every reader can calibrate. An answer from three named locations is a different claim than an answer from everything the company has, and without the statement they look identical. Readers are not being careless when they miss this: nothing in an ordinary summary signals its own breadth, so they assume the breadth they would have used.

It also gives you a change detector. If the scope statement one week names a location you did not put in the charter, something drifted, and you found out by reading the top of a document instead of by an incident.

## Who the output goes to is part of the design

The access question has a second half that people skip: not what the bot can read, but who reads what it writes.

A summary assembled from restricted sources and posted into an open channel has effectively republished those sources to everybody in the channel. The permission model protected the documents and nothing protected the summary.

| Destination | What it implies |
|---|---|
| A private document only you open | Lowest exposure, defensible for broad search |
| A team channel | Everything in it is now team visible |
| A company wide space | Treat as published internally |
| Anything outbound | Do not, from an internal search bot |

Match the search scope to the destination rather than to your access. If the output goes to a team channel, the bot should search only what that team can already see, regardless of what you can see. That single alignment removes most of the exposure risk in this whole area, and it costs nothing except writing the locations down. It also has a pleasant side effect: it forces you to find out what the team can actually see, which is a question most people have never asked about their own team.

## Something like docs-self-serve-assistant, done carefully

The obvious application of internal search is answering questions people keep asking. [docs-self-serve-assistant](/bots/docs-self-serve-assistant) is that shape in the catalogue, and it is a good example of why scope and destination need to move together.

If it answers in a public internal channel, its sources must be documents everybody in that channel can open. Not "documents I can open". The moment those two diverge, the assistant becomes a way to read restricted material by asking a question, and nobody designed it to be that.

The same logic applies to anything briefing shaped. [meeting-prep-brief](/bots/meeting-prep-brief) is lower risk because it typically goes to one person, and it still deserves citations, because a prep note that states a fact with no source is a fact you will repeat in the meeting without being able to attribute it.

## Stale documents are the other half of the problem

Everything above is about breadth. There is a second failure that has nothing to do with permissions and everything to do with what an index contains: internal search returns old documents with the same confidence as current ones.

A company wiki accumulates. The planning doc from two reorgs ago is still indexed. The process page describing a tool you stopped using is still there. A person searching recognises the staleness from context, from a name that left, from a project that ended. A bot has no such context, and a document that says something clearly outranks one that hedges, so the confident stale page often wins.

| Signal a person uses | Whether a bot sees it |
|---|---|
| An author who left the company | No |
| A project name nobody uses now | No |
| A doc last edited two years ago | Only if told to check |
| Terminology that has been replaced | No |
| Being in an archived space | Sometimes |

The fix is to make recency a stated requirement rather than hoping for it:

> For every source, report the last modified date. If a source is older than a stated age, say so alongside the claim rather than presenting it as current. Prefer the most recently updated source when two disagree, and say that they disagreed.

That last clause is the valuable one. Two documents contradicting each other is a finding worth surfacing, and the default behaviour without instruction is to pick one silently. A bot that says "these two sources disagree, here are both with dates" has done something a person genuinely cannot do at speed across a large index.

## Test it with questions you already know the answer to

Before trusting an internal search bot with questions you cannot verify, ask it ten you can.

Pick questions where you know the correct answer and where you know which document holds it. Then check three things: whether the answer is right, whether the citation points at the document you expected, and whether it surfaced anything from a space you had forgotten you could see. The second check catches the case where the answer is correct by accident, which is more common than it sounds when several documents say similar things.

The third check is the one worth running deliberately, because it is the only cheap way to discover the breadth of your own access. Ask a broad question, look at the sources it drew from, and read the list of locations rather than the answer. Most people find at least one space in that list they did not know was in scope, and finding it during a test is much better than finding it in a summary that went to a channel.

Run the same ten questions again after any charter change. Ten minutes, and it catches the scope drift that otherwise shows up as an incident. Keep the ten written down with their expected answers, because a test set you have to reinvent each time is a test set that gets skipped when you are in a hurry, which is exactly when the charter changed.

## Decide what happens to the answers after they are written

An internal search bot produces documents, and those documents get indexed by the same internal search.

Think about that for a second, because the loop is not hypothetical. A weekly summary assembled from restricted sources, saved to a space with wider access, becomes a searchable document containing that material. The next question anybody asks may be answered from your summary rather than from the original, and the summary carries none of the original's access restrictions.

This is how a permission model gets undone without anybody bypassing it. Each step was authorised. The aggregate is a laundering pipeline nobody designed.

Three things keep it contained. Write the output somewhere with access no wider than the narrowest source it draws from. Mark generated summaries as generated, with the date and the bot that produced them, so a future reader knows they are looking at a derivative rather than a source. And prefer a short retention on anything assembled rather than authored: a summary that is regenerated weekly does not need last April's copy sitting in the index competing with the current one.

| Habit | What it prevents |
|---|---|
| Output access matches narrowest source | Restricted material republished by summary |
| Summaries marked as generated, with date | A derivative treated as an authority |
| Old summaries deleted, not archived | Stale generated answers polluting search |
| Bot named in the document | Somebody can find and fix the source |

The middle one deserves emphasis. An unmarked summary is indistinguishable from a document somebody wrote deliberately, and six months later it is cited in a decision as though a person had verified it. A single line at the top saying what produced it and when costs nothing and prevents that entirely.

## Answer the objection that citations make the output unreadable

Fair point. A summary with a link on every sentence is worse to read than a clean paragraph, and people will complain.

Two mitigations that keep both properties. Group the citations: one link per claim is the rule, but several claims from the same document can carry one reference rather than five. And put the source list at the end for anything long, with inline links reserved for the specific numbers and quotes, which are the claims that actually get repeated.

What you should not do is drop citations for readability. The readable version is the one that gets forwarded, and the forwarded version is the one where nobody can tell whether the renewal date came from a contract or a guess. If you have to choose, choose the ugly document that can be checked.

## Common questions

### Does the bot see more than I do?

No. It searches with your access, so its ceiling is your ceiling. The issue is that your ceiling is higher than you think and a bot uses more of it than you do, because it reads broadly and on a schedule rather than looking for one thing and stopping.

### Should I get a dedicated account for the bot?

If the work justifies it, yes, and it is the only mechanism here that actually narrows access rather than just constraining behaviour. An account holding only the access the work needs makes the scope real instead of contractual. Separate Bots on your own account do not do this.

### What if the answer genuinely requires a restricted document?

Then the bot should say that and stop. Name the document and where it lives so a person with the right access can open it and decide. An answer assembled from a restricted source, delivered to people without that access, is the failure this whole page is about.

### How often should I review what the bot can reach?

Quarterly, and also whenever you change teams or finish a project, because those are the moments when access is added and never removed. The review is not of the bot, it is of the account: list the spaces you can see, and remove the ones you no longer need. [The permission review checklist](/blog/bot-permission-review-checklist) has a working version of that pass.

## When this page stops applying

The specific mechanics here are current at the time of writing, and Grok Bot is in beta, so scheduling, access and session handling may change. If the platform ships per-bot credential scoping, the shared computer paragraph above needs rewriting and the isolation advice gets much simpler.

What will not change is the structural point. Enterprise search is a permission model plus an index, and pointing an automated reader at it converts your accumulated, forgotten access from something dormant into something active. The fix is not clever prompting. It is naming the locations, citing the sources, matching the scope to the destination, and holding the access at the account level where it can actually be enforced.
`,
};
