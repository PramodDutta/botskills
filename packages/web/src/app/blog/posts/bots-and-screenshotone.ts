import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Screenshot Is Evidence With a Timestamp',
  description:
    'Capturing what a page said, on the day it said it, for claims that need proof later. What a capture proves, what it does not, and how to store it.',
  date: '2026-09-02',
  category: 'Tutorial',
  content: `
# A Screenshot Is Evidence With a Timestamp

A bot that watches a page tells you it changed. A bot that captures the page tells you what it said before it changed, which is a different and often more valuable thing, because the change event expires and the record does not.

The distinction matters when somebody disputes it. A note saying a competitor listed a price in August is a claim. An image of the page, with a date, is something a person can look at. Six months later, when the page has been redesigned twice and nobody remembers, only one of those survives.

This article is about building that habit properly: what a capture actually proves, what it does not, and how to store the images so they are still useful when you need them.

## Why the note is not enough

The usual objection is that a bot already writes down what the page said, so the image is redundant.

It is not, for three reasons that show up at different times.

A note is a summary and summaries lose the thing you did not know you would need. The note records the price. Six months later the question is about the terms next to the price, which nobody thought to record.

A note is not checkable. Somebody reading "the page listed this in August" has to trust that the bot read it correctly. An image lets them look.

And a note cannot be verified against the original, because the original is gone. Once a page changes, the only remaining record of what it said is whatever you kept.

| Situation | Note alone | Note plus capture |
|---|---|---|
| Routine tracking | Fine | Unnecessary |
| Somebody disputes what it said | Weak | Settles it |
| A detail nobody recorded | Lost | Still there |
| Handover to a new person | Requires trust | Self-evident |
| Anything with legal or contractual weight | Insufficient | The minimum |

The first row is the honest one. Most of the time you will not need the image, and that is exactly why the decision has to be made in advance rather than when the dispute arrives. By the time anybody wants the August page, August is gone, and no amount of urgency retrieves it.

## What a capture actually proves

Be precise about this, because overstating it is the mistake that turns evidence into a liability.

A capture proves that a rendering process, running under your control, produced this image at this time from this URL. That is genuinely useful and it is narrower than "the page said this".

| Claim | Whether a capture supports it |
|---|---|
| This is what your process saw at this time | Yes |
| This URL rendered this way for that request | Yes |
| Every visitor saw the same thing | No, pages vary by visitor |
| The page said this on the previous day | No, only at capture time |
| This is unaltered | Only as far as your storage is trusted |

The third row is the one that catches people. Pages differ by region, by whether you are signed in, by test allocation, and by device. A capture of a pricing page shows one visitor's view of that page, and a competitor running a regional test may genuinely never have shown that price where you are standing.

Record the conditions alongside the image so the claim stays accurate: the URL, the time with a timezone, the viewport, the apparent region, and whether the session was signed in. Without those, the image invites a stronger claim than it can support, and the person making the stronger claim will usually be somebody who was not there when it was captured.

## Capture the whole thing, not the visible part

A viewport screenshot captures what fits on a screen. That is almost never the part you will want later.

Capture the full page. Terms sit below pricing, footnotes sit below tables, and the qualifier that changes the meaning of a headline number is reliably the part that was off screen. The rule of thumb is that whatever a publisher put below the fold is what they were least keen for you to read, which makes it the part most worth having a year later.

Where a full page capture is impractical, capture the region you care about plus generous surrounding context, and record that you did so. A cropped image with no indication that it was cropped is the sort of evidence that damages the person presenting it, because the first question anybody asks about a crop is what was outside it.

Save the page text alongside the image where you can. Images are not searchable, and six months later the question is usually "which of these two hundred captures mentions this term", which is a text question. The image is the evidence and the text is the index.

## Name the files so they are findable in a year

The most common failure in this whole area is not capture. It is retrieval.

A folder of images named with random identifiers is not evidence, it is a pile. Somebody looking for what a page said in August needs to find it in under a minute, or they will give up and use the note instead.

| Naming component | Why |
|---|---|
| Source or company | The first thing anybody filters on |
| What the page is | Pricing, terms, changelog |
| Date, year first | Sorts correctly in every tool |
| Time and timezone | Multiple captures in one day |

Something like source, page type, date, time. Consistent, sortable, readable by a person who has never seen the folder. Then keep an index document listing every capture with its URL, timestamp, conditions, and a one line note about what changed, because scanning a text index is faster than opening images.

The index is the part people skip and the part that makes the archive usable. Without it, you have a backup. With it, you have a record. Have the bot append to it on every run rather than maintaining it by hand, because a hand-maintained index falls behind within a month and a stale index is worse than none: it tells you confidently that a capture does not exist.

## Decide the retention period on purpose

Captures accumulate quickly and most of them will never be looked at.

The right period depends on why you are capturing. Competitive tracking rarely needs more than a year. Anything supporting a contractual or compliance position should be kept as long as the obligation lasts, which is a question for whoever owns that obligation rather than for you.

The rule that matters is that the period is stated and applied. An archive that grows forever because nobody decided is the same archive that gets deleted wholesale in a cleanup, usually the week before somebody needs it.

Two additional habits. Do not delete anything that has been referenced in a decision, a document, or a dispute, even if the schedule says it is due. And if you have captured anything containing personal data, the retention conversation is a different one with stricter answers, and the sourcing rules in [sourcing that stops before first contact](/blog/source-candidates-without-contacting-them) are the relevant starting point.

## The boundary for a capture bot

Capture is a read operation and the boundary is correspondingly simple, which is exactly why it should be written down before somebody widens it.

> Capture and store only. Do not sign in to any site to reach a page. Do not accept terms, dismiss consent dialogs by agreeing, complete forms, or click anything that submits. If a page cannot be reached without one of those, report that it could not be captured and stop.

The consent dialog clause is the practical one. A great many pages present a banner, and the tempting instruction is to have the bot accept it so the capture is clean. Accepting terms on your behalf is a commitment made by a scheduled process, and it is not something you want happening on a schedule you have stopped watching. Capture the page with the banner in it, or do not capture that page.

The sign-in clause matters for a platform-specific reason. The shared computer is shared across your account, so signed in sessions, files and command line credentials are shared with every Bot on that account. A capture bot that reaches pages behind a login has made that login available to everything else running. Do not use separate Bots as a security boundary. Public pages only is not a limitation here, it is the design.

## What to capture, and what not to bother with

Capture where a claim might be disputed or where a detail might matter later. Skip the rest, and be harder about the skipping than feels natural.

| Worth capturing | Not worth it |
|---|---|
| Pricing and packaging pages | A blog post that will stay up |
| Terms of service and policies | Anything you already have a copy of |
| Public commitments and announcements | Pages that change hourly by design |
| Status and incident pages during an incident | Your own site, which you control |
| A listing or offer you may rely on | Search results, which are personalised |

The last row is worth expanding. Search results vary so much by person, place, and moment that a capture of them supports almost no claim beyond what your process saw, and people routinely over-read them. If you capture search results, label them heavily.

[competitor-pricing-watch](/bots/competitor-pricing-watch) and [competitor-website-watch](/bots/competitor-website-watch) are the two catalogue entries this pairs with most naturally. Both detect change; adding capture to either turns a change alert into a record of what changed, which is the version that is still useful next year.

## Capture the same page the same way every time

An archive is only comparable if the captures are comparable, and the easiest way to ruin that is to let the capture conditions drift.

If August was captured at one width and February at another, the two images differ in layout for reasons that have nothing to do with the page changing. Somebody comparing them will spend twenty minutes working out whether a moved element is a redesign or a viewport difference, and the answer will be disappointing.

Fix the conditions in the charter and keep them fixed: one width, one full-page mode, one approximate time of day, one signed-out state. Write the values down rather than leaving them to whatever the default is, because defaults change under you and a silently changed default is exactly the drift you are trying to avoid.

| Condition | Keep it fixed because |
|---|---|
| Viewport width | Layout differences read as page changes |
| Full page versus visible area | Otherwise captures cover different content |
| Time of day | Some pages rotate content by hour |
| Signed-out state | Signed-in views are a different page |
| Region, as far as you can tell | Pricing and terms vary by geography |

When you do have to change a condition, note the change in the index on the date it happened. A single line saying the capture width changed on this date turns a future comparison from a mystery into a known step.

## Store the text next to the image, always

Worth its own section because it is the habit that makes an archive searchable rather than merely complete.

An image answers "what did it look like". A text copy answers "which of these mentions this phrase", and the second question is the one you will actually ask. Nobody browses a capture archive. They search it, fail, and fall back to guessing at dates.

Save the page's visible text as a plain file alongside each image, with the same base name. Then a plain search across the folder finds the right date in seconds, and the image next to it is the evidence you were looking for.

This also gives you a cheap change detector for free. Two text files from consecutive captures can be compared directly, and the difference tells you what changed in words rather than in pixels. A pixel comparison flags every layout tweak; a text comparison flags the sentence that changed, which is the thing anybody cares about.

Keep both. The text is how you find it, and the image is what you show somebody who does not believe you.

## Check that the capture is a capture

The failure nobody plans for: the archive is full of images and a third of them are of a cookie wall, an error page, or a bot check.

This happens silently, because from the bot's side every one of those was a successful capture. An image was produced. The file exists. The index has an entry. It is only when somebody opens it, months later, looking for the thing they need, that anybody discovers the August capture is a consent banner.

The check is cheap. Have the bot confirm that the captured page contains a piece of text it expects to be there, named per source, and report when it does not.

> For each source, verify that the captured page contains the stated marker text. If the marker is absent, keep the capture, mark it as unverified in the index, and report it. Never record an unverified capture as a clean one.

Pick a marker that is stable and specific: the product name in a heading, a section title, a term that appears in the body. Not something layout-dependent, and not something so generic it appears on an error page too.

| What you captured | Marker check result |
|---|---|
| The real page | Passes, capture is trustworthy |
| A consent wall | Fails, flagged the same day |
| An error or maintenance page | Fails, flagged |
| A bot check | Fails, flagged |
| A redesigned real page | Fails, and that is a useful signal too |

The last row is a bonus rather than a false positive. A marker disappearing usually means the page changed substantially, which is precisely the event a watcher exists to catch.

## Answer the objection that this is over-preparing

The objection: this is an archive, an index, a retention policy, and a naming scheme, for images almost nobody will ever open.

Correct on the frequency and wrong on the conclusion. The value of a capture archive is not spread evenly across the images. It is concentrated in the two or three you need, and you cannot know in advance which those are. That is the same shape as a backup, and nobody argues that backups are over-preparation because most of them are never restored.

The reasonable version of the objection is about scope. Capturing every page you watch is over-preparing. Capturing the pricing page, the terms, and public commitments, for the handful of organisations whose statements might matter to you, is about twenty pages, and the whole apparatus described here takes an afternoon to set up and no maintenance.

If you find yourself with thousands of captures, you captured too broadly rather than too carefully. Narrow the source list rather than shortening the retention, because the pages worth keeping are worth keeping for a long time and the ones that are not should never have been in the archive.

## Common questions

### Does a screenshot count as proof?

It depends entirely on the forum and the question, and this is not legal advice. What a capture reliably gives you is a dated record produced by a process you control, which is far better than a recollection and weaker than a formal preservation process. If the stakes are genuinely legal, ask somebody qualified what form they need before you rely on your own archive.

### Should the bot capture on a schedule or only on change?

Both, and they answer different questions. A capture on every detected change records the transitions. A periodic capture regardless of change proves the page was still saying the same thing, which is a claim you sometimes need and cannot reconstruct from change events alone. Monthly baseline plus on-change is a sensible default.

### What about pages behind a login?

Do not. Reaching them requires a signed in session, and signed in sessions, files and command line credentials are shared with every Bot on that account, so that login becomes available to everything you run. If you genuinely need a capture of a page behind a login, take it yourself and file it in the same archive by hand.

### How do I know the image has not been altered?

Within your own archive, you do not, beyond trusting your storage. If that matters, record a checksum of each file in the index when it is captured, and store the index somewhere with its own history. That is a meaningful improvement over nothing and it is still not a formal chain of custody, which is a different thing entirely.

## When this page stops applying

Grok Bot is in beta and the mechanics of capturing and storing files will change. Whatever the current tooling looks like, the questions here stay the same: full page rather than viewport, conditions recorded alongside the image, a findable naming scheme, a text index, and a stated retention period.

The one thing worth re-checking as the platform changes is where captures are stored and who can reach them. [Evidence rules](/blog/grok-bot-evidence-rules) covers the broader principle that a claim should carry its source, and a capture archive is the strongest form of that: not a link that may rot, but the thing itself, on the day it said what it said.
`,
};
