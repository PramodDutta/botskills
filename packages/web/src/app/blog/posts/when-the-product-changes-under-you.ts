import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Vendor Shipped Something and Your Setup Broke',
  description:
    'Beta products move without asking. What actually breaks when they do, how to find out before your users do, and what to re-check after every change.',
  date: '2026-09-02',
  category: 'Guide',
  content: `
# A Vendor Shipped Something and Your Setup Broke

You did not change anything. The routine that ran fine for two months produced nothing on Monday, or produced something shaped differently, or started asking for a login it had never needed.

Somebody shipped. It might be the platform your bots run on, or a site one of them reads, or an internal system another team owns. From your side these all look identical: a working thing stopped working, and the commit history says you are innocent.

This is the ordinary condition of building on software in active development, and Grok Bot is in beta, which means it moves more than most. The useful skill is not preventing it. It is shortening the gap between the change landing and you knowing, because that gap is where the damage is: not in the break itself, but in the weeks of output produced after it and trusted anyway.

## The four things that actually change

Not all vendor changes break things the same way, and knowing which kind you are looking at tells you where to look.

| What changed | How it shows up | Typical delay before you notice |
|---|---|---|
| A page's structure | Output missing a section, or reading nonsense | Days to weeks |
| An access rule | A source that used to load now needs a login | Same day if the bot reports it |
| A platform behaviour | Routines fire differently, limits move, a feature appears | Immediately, if you were watching |
| A data definition | Numbers still arrive and now mean something else | Months, and this is the dangerous one |

The last row is the one worth fearing. A page restructure is loud. A definition change, where a vendor decides "active users" now excludes trials, produces output that is well formed, plausible, and wrong, and nothing in your setup can tell. The other three announce themselves eventually because something visibly stops arriving. This one arrives on time, in the right shape, every week, and the only thing wrong with it is the meaning.

## Structure changes are the common case and the easy one

Most breaks are this. A site the bot reads gets redesigned, the section it was pulling from moves or is renamed, and the bot either returns nothing for that section or returns the wrong block of text.

You catch these by asking the bot to report what it could not find rather than silently omitting it. That single charter line converts an invisible gap into a visible one:

> If a source does not load, or does not contain the section described here, say so at the top of the output by name. Never leave it out silently and never substitute a different section.

The failure without that line is not that the bot breaks. It is that the output looks complete. A weekly brief that used to cover five sources and now covers four is not obviously shorter, and nobody counts. Readers calibrate to whatever they receive, so the second week of a four source brief already feels normal, and by the fourth nobody remembers there was a fifth.

## Access changes are loud if you let them be

The second common case: a source moves behind a login, a paywall, or a bot check. This is increasingly normal and it is usually not aimed at you.

The bot cannot read it. What happens next depends entirely on your charter. With the reporting line above, you get told. Without it, the section is quietly empty.

What you should not do is route around it. If a source requires a login you have, the temptation is to leave that session signed in on the shared computer so the bot inherits it. Understand what you are choosing: the shared computer is shared across your account, so signed in sessions, files and command line credentials are shared with every Bot on that account. That is a real decision about blast radius, not a technicality, and it is covered properly in [the shared computer piece](/blog/grok-bot-shared-computer-security). Separate Bots do not separate it. Do not use separate Bots as a security boundary.

Often the better answer is to drop the source and say so, or find a published feed that serves the same purpose without the login.

This hits watcher-shaped bots hardest, because reading other people's pages is the whole job. [competitor-pricing-watch](/bots/competitor-pricing-watch) and [competitor-website-watch](/bots/competitor-website-watch) both live entirely on sources somebody else controls and redesigns without warning. If you run anything in that shape, the reporting line is not optional polish, it is the only thing standing between a redesign and a quarter of quietly incomplete briefs.

## Platform changes need a different habit

When the platform itself moves, the symptom is rarely a single broken bot. It is a set of small differences across everything you run.

Beta platforms ship changes without a changelog you can subscribe to, and the practical consequence is that you find out by noticing. So the habit that pays is checking the vendor's own documentation on a schedule rather than after an incident. Twice a month, open the docs and read the pages you depend on, not the front page.

| Where to look | What you are checking |
|---|---|
| The product's own docs pages | Whether the mechanic you rely on is described the same way |
| The product's changelog or release notes | Anything about scheduling, limits, or access |
| Your own oldest bot's last few runs | Whether behaviour drifted without an announcement |
| Anything you wrote down as a fact | Whether it is still true |

That last row is the one people skip and the one that compounds. If you have internal notes saying a limit is a certain number or a feature works a certain way, those notes rot silently. Date them, and re-verify anything load bearing before you rely on it in a decision.

## Definition changes are the ones that hurt

A vendor redefines a metric. The field name is identical, the number still arrives, the format is unchanged, and it now measures something else.

Nothing in your setup can detect this. Not a schema check, not a null check, not the bot's own reporting. The output is well formed. The only signal is the number itself moving in a way the underlying reality did not.

Which gives the one defence that works: watch for discontinuities you cannot explain. A metric that steps by a large amount between two consecutive periods, with no matching event in the world, is either a definition change or a data problem, and both need a person. The related failure, where output degrades slowly rather than stepping, is a different animal and is covered in [the piece on bots that got quietly worse](/blog/the-bot-that-got-quietly-worse).

The charter line that helps:

> If any headline number moves more than a stated amount from the previous period, flag it at the top with both values. Do not smooth it, explain it, or leave it out.

The bot cannot tell you why it moved. It can tell you it moved, which is all you need to go and look. Set the threshold from the metric's own history rather than from a round number: if the figure normally moves two or three percent a week, ten is a reasonable flag, and if it routinely swings thirty, a ten percent flag will fire every week until somebody turns it off. A threshold that fires constantly is the same as no threshold, with the added cost that it trains everybody to ignore the one week it means something.

## Write down what your setup assumes

Here is the thing almost nobody does, and it is the difference between an hour of debugging and a five minute check.

For each bot, write a short list of what it depends on being true. Not the steps, the assumptions. This page exists at this address. This section is called this. This export contains these columns. This number is a percentage rather than a count. This source updates on weekday mornings.

| Bot | Assumption | Last verified |
|---|---|---|
| Weekly market brief | Pricing page lists tiers in a table | 2026-08-19 |
| Weekly market brief | Competitor blog has an RSS feed | 2026-08-19 |
| Churn digest | Export column is a rate, not a count | 2026-07-02 |
| Support summary | Queue export includes closed tickets | 2026-08-30 |

When something breaks, you read the list instead of reasoning from scratch. When a vendor announces a change, you search the list instead of guessing which bots care. And when a number looks odd, you have a dated record of what it was supposed to mean.

Ten minutes per bot, once. It is the highest return documentation in this whole area and it is unglamorous enough that it rarely gets written. The reason it pays is that it converts debugging from an open ended question into a checklist: instead of asking what could possibly have changed, you read four lines and test each one. Most of the time the answer is in the first two.

## What to re-check after a change lands

Once you know something changed, resist fixing the one visible break and moving on. Run a short pass instead.

Start with the thing that broke, obviously. Then check every other bot that touches the same source or the same platform mechanic, because they are affected whether or not they have shown it yet. Then re-read the assumption list for those bots and update the dates on anything you just verified.

Finally, look back rather than only forward. If a source has been broken for three weeks, three weeks of output went to people who acted on it, and the repair does not address that. Work out the window from the run history rather than from memory, because the honest answer is almost always earlier than the one you would guess. Say so, briefly, to whoever read it. A short message naming the dates and the gap is much less painful than somebody discovering independently that a figure they repeated was wrong.

## Decide what a change is worth reacting to

Not every vendor change deserves a response, and treating them all as incidents is its own failure mode.

The question is whether the change touches something a decision depends on. A redesign that moves a section you read is worth an hour. A redesign that changes fonts is not. A limit that moves matters if you were near it and does not if you were not.

| Change | React now | Note and move on |
|---|---|---|
| A source you read is gone | Yes | |
| A source you read moved | Yes | |
| A metric definition changed | Yes, and look back | |
| A platform feature you do not use | | Yes |
| Cosmetic redesign, same content | | Yes |
| A limit moved, you are far below it | | Yes |

The value of writing this down is that it stops the two opposite failures: treating every announcement as an emergency, and treating the one that mattered as noise because the last four did not. The second is the more common one, and it is a habit rather than a decision: after enough irrelevant announcements, people stop reading them, and the relevant one arrives in the same envelope as the rest.

## Build a check the vendor cannot silently satisfy

The reporting line catches a source that fails to load. It does not catch a source that loads and has changed meaning, because from the bot's side that is a successful read.

For anything where a wrong answer is expensive, add a check with a known answer. Pick one item on the page whose value you can verify by hand and whose value should not move: a tier name, a published date on an old post, a column header, a row that always exists. Have the bot confirm that item every run and say so.

| Source type | A check that works | Why it survives a redesign |
|---|---|---|
| A pricing page | The name of the cheapest tier | Content, not layout |
| A blog or feed | The title of a known older post | Stable regardless of styling |
| An export | A column header, spelled exactly | Fails loudly if renamed |
| A status page | The label of a service you know exists | Independent of the page shell |

When the check fails, the bot says so and you look. When it passes, you have a small piece of evidence that the source is still the source. This is cheap and it is the only mechanism in this article that catches the definition change class before the numbers do.

Keep the check to one item per source. The instinct is to verify everything, which turns into a second system to maintain and gets switched off within a month. One good check that runs for a year beats twelve thorough ones that run for six weeks.

## Look at what did not change

The last diagnostic is the counterintuitive one: when something breaks, look at the parts that still work.

If four sources fail and one succeeds, the shared property of the four is your answer, and it is usually the platform rather than the sources. If one fails and four succeed, it is that source. If everything fails, check whether the bot ran at all, which is a different problem entirely and is covered in [the routine that did not run](/blog/grok-bot-routine-did-not-run).

This sounds obvious written down and it is routinely skipped, because the broken thing is loud and the working things are silent. Two minutes of looking at what still works will usually tell you which of the four change types you are dealing with, and that determines everything you do next.

## Answer the objection that this is a lot of process for a beta product

A fair reading of everything above is: you are proposing assumption lists, twice monthly doc reviews, and change passes, for a product that is in beta and might work differently in three months anyway.

Two honest responses. First, most of this is small. The assumption list is ten minutes per bot once. The reporting line is one sentence in a charter. The doc check is fifteen minutes twice a month. That is not a process, it is a habit, and the alternative is not zero effort, it is unpredictable effort concentrated at the worst moment.

Second, the beta status is the argument for doing it, not against. A stable product breaks rarely and loudly. A beta product changes often and quietly, which is precisely the condition where noticing is worth more than fixing.

What you should skip: elaborate monitoring, alerting infrastructure, and anything that needs maintaining itself. If your change detection is more complicated than the bots it watches, you have built a second problem.

## Common questions

### How do I find out about platform changes before they break something?

There is no reliable feed for a beta product, so the honest answer is that you check rather than get told. Read the vendor's docs pages for the mechanics you depend on twice a month, and treat any fact you wrote down as expiring. The second half of the answer is that your charters should report failures loudly, so the changes you do not catch in advance surface within one run instead of one quarter.

### Should I pin to an older version to avoid this?

Usually not available, and not the right instinct even when it is. Hosted products in beta move as a whole and you are not choosing a version. Put the effort into noticing changes quickly rather than into avoiding them, because the avoidance option mostly does not exist here.

### What if a source I depend on disappears entirely?

Say so in the output and stop, rather than substituting something similar. A brief that quietly swaps one source for another is worse than a brief with a named gap, because the reader cannot tell. Then decide deliberately: find a replacement, drop the section, or accept a smaller output. That decision belongs to a person and it belongs in the charter afterwards.

### How do I tell a vendor change from my own mistake?

Check whether anything on your side changed first, because it usually did. Read the charter's edit history and your own recent edits before blaming the vendor. If nothing changed on your side and the same source fails when you open it yourself in a browser, it is external. That last check takes thirty seconds and settles most of these.

## When this page stops applying

The specific mechanics here are the ones current at the time of writing, and Grok Bot is in beta, so the details will move. Some of what is described as awkward may become a feature. If the platform ships a proper change feed, half the doc checking habit becomes unnecessary and you should drop it.

What will not move is the underlying asymmetry. You depend on things other people control, they change them for their own reasons, and they have no obligation to tell you. The response to that is not defensive engineering, it is short feedback loops: charters that report what they could not do, a written record of what you assumed, and the habit of reading it when something looks off.

If you take one thing from this page, take the reporting line. A bot that names what it could not read turns most of these failures from a quiet quarter into a loud Monday, and a loud Monday is cheap.
`,
};
