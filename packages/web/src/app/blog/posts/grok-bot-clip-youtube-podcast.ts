import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Clip a YouTube Podcast by Timestamp, Then Draft the Post and Do Not Publish',
  description:
    'Build a grok bot youtube clip desk that cuts the span you named, pulls timestamped quotes, drafts the caption in your voice, and stops before any upload.',
  date: '2026-08-26',
  category: 'Tutorial',
  content: `
# Clip a YouTube Podcast by Timestamp, Then Draft the Post and Do Not Publish

The clip was perfect and it posted itself while you slept. Not the clip you
asked for, though. You gave a start and an end, the bot decided the "best
moment" was ninety seconds earlier, cut there, wrote a caption around a quote
the guest had walked back thirty seconds later, tagged the host, and queued it
for 09:00.

Nothing in that chain was a malfunction. Every step was a helpful default. The
problem is that clip production has a publish button at the end of it, and a
bot that can reach the button will eventually press it on a version nobody
approved.

This is a build guide for the opposite arrangement. The bot cuts exactly the
span you named, pulls quotes with their original timestamps, drafts the caption
in your voice, and hands you a packet. It does not upload, it does not schedule,
and it does not tag anybody. The catalog listing is
[Podcast Clip Desk](/bots/podcast-clip-desk), and its boundary is that drafts
wait in chat or in a folder until you ship them yourself.

## Cut the span they named, not the "best moment" you guessed

Start with the instruction that gets silently overridden most often. You said
16:43 to 18:17. That is the clip.

Models are trained to be useful, and "improve on the request" reads as useful.
So the bot notices that the sentence at 16:41 sets up the quote better, and that
the laugh at 18:22 is a natural ending, and it widens the cut. Sometimes it is
right. The problem is that you cannot tell from the output whether it obeyed or
improvised, because the file plays fine either way.

That matters for one specific reason: you chose those boundaries after listening.
You know that at 16:38 the guest is still describing the thing they later
retract, and that at 18:20 the host starts a question that goes nowhere. The
bot has a transcript. You have context.

So the charter rule is literal. Cut the timestamps given. If the bot believes a
different span is better, it says so in one line alongside the packet and cuts
what you asked for anyway. A suggestion costs you five seconds to read. A silent
re cut costs you the ability to trust any output from this bot.

One narrow exception is worth allowing: if the requested end falls mid word,
snap to the nearest sentence boundary within two seconds and report the
adjustment. That is mechanical tidying, not editorial judgment.

## Pull quotes with original timestamps before you write a caption

Order of operations matters here. Quotes first, caption second, never the
reverse. If the caption gets written first, the quotes get selected to support
it, and selection pressure on a transcript is how you end up quoting someone
accurately and representing them wrongly.

So the desk pulls the transcript for the span, extracts three candidate quotes,
each under forty words, each carrying the timestamp it came from. Only then does
it draft copy.

| Quote handling | Do | Do not |
| --- | --- | --- |
| Hedges (might, could, we think) | Keep them inside the quote | Tighten into a commitment |
| Filler (um, you know, like) | Trim, and say you trimmed | Trim silently |
| Numbers | Repeat exactly as spoken | Convert monthly to annual |
| Proper nouns from auto captions | Mark heard as, unverified | Guess the spelling |
| A sentence split across segments | Join, keep the first timestamp | Join and drop the timestamp |
| Anything you could not locate in the text | Cut it | Paraphrase from memory |

The hedge row is the one that causes real damage. A guest who said "we might
double the team next year" and a caption that says "they are doubling the team"
are two different public claims, and the second one is yours now, not theirs.
Automatic transcription also flattens hedges on its own, which is why the desk
should say whether the track was manual or auto generated.

One more rule: every quote in the packet cites a timestamp you can click. If a
line cannot be timestamped, it does not go in the packet. That constraint is
inherited straight from
[YouTube Transcript Desk](/bots/youtube-transcript-desk), where a bullet without
a timestamp gets cut rather than estimated.

## Draft the post in their voice and leave it unpublished

Voice is the part a bot can genuinely do, provided you give it source material
rather than an adjective. "Write in my voice" produces a generic confident tone.
"Here are twenty posts I wrote, match the sentence length and the way I open"
produces something recognisable.

The draft should contain four things and nothing else. One caption in the
operator's voice. One alt text line describing what is visible in the clip. One
suggested on screen title, short enough to read at thumbnail size. And a flag
list: any claim in the clip that the transcript does not support, or that the
speaker hedged.

Then it stops. The last line of the packet is the word unpublished, stated
plainly, along with the file path. That line is not decoration. It is the thing
you scan for when you are reading the packet on a phone and about to assume
everything is fine.

Nothing in the packet is a finished asset. It is a proposal with its evidence
attached, and the evidence is what lets you approve it in ninety seconds instead
of reopening the episode. If you want the general shape of a drafting bot that
stages work for a human release,
[the social scheduling guide](/blog/grok-bot-to-social-scheduling) covers the
same split applied to a weekly queue.

## Treat a scheduler click as publishing with extra steps

This is the boundary people accidentally leave open, because scheduling feels
like preparation. It is not. It is publication with a delay, and the delay is
precisely the window in which nobody is watching.

Think about what changes between now and 09:00 tomorrow. The guest posts a
correction. A story breaks that makes the joke in your clip read badly. Someone
else clips the same moment first. A queued post cannot know any of that, and
neither can the bot that queued it.

| Surface | Counts as publishing | Why |
| --- | --- | --- |
| Upload to YouTube, X, LinkedIn | Yes | Obviously |
| Queue in a scheduler | Yes | Delayed publication, unattended |
| Save as a platform draft | Borderline | Fine if nobody else can release it |
| Upload to a shared team folder | Borderline | Depends who watches that folder |
| Write to a private local path | No | The intended output |
| Paste into chat with the operator | No | The intended output |

The runtime detail that settles the argument: an approval controls the proposed
action and does not reverse work already completed. Once a post is live it is
live, and an approval prompt after the fact is a notification. The risks of
letting a bot near a live account are covered in more depth in
[the guide to X content automation risks](/blog/grok-bot-x-content-automation-risks),
and they apply to every platform, not just one.

So the charter says no upload, no schedule, no queue, no publish, in those
words. Not "ask before publishing". Ask is a step the bot can decide it already
satisfied.

## Keep tags, mentions, and auto-post plugins off this bot

Capability is the control, not intent. If a posting connector is reachable from
the account, this bot can reach it, and no amount of instruction is as reliable
as the connector not being there.

That is because of how the runtime is built. All your bots share one persistent
cloud computer. Each bot gets its own screen, but the documentation states
directly that screens are separate work surfaces and not separate security
boundaries, and that you should not use separate bots as a security boundary.
Cookies, signed in sessions, files, and command line credentials are shared
across every bot on the account. Deleting a bot does not remove them.

| Capability | Clip desk | Rationale |
| --- | --- | --- |
| Read a transcript for a span | Yes | The input |
| Cut or export media locally | Yes, to a named folder | The deliverable |
| Write draft copy into the packet | Yes | The deliverable |
| Add tags or hashtags | Only ones you listed | Tags are targeting |
| Mention or @ an account | Never | Contacting someone on your behalf |
| Post, upload, or schedule | Never | The whole point |
| Sign in to a social platform | Never | Stop and ask instead |

There is one more reason to keep this bot's surface small: an audit view of bot
actions does not exist yet. If something did post, you would be reconstructing
what happened from the platform side rather than from a log. Prevention is the
only control that currently works, which is the argument in
[the guide to bot boundaries](/blog/grok-bot-boundaries).

## File the clip with show, date, and timestamps in the name

Filing sounds like housekeeping until you have forty clips in a folder and no
idea which one you already reviewed.

Put four things in every filename: the show or channel, the episode publish
date, a short slug from the topic, and the in and out timestamps. Something like
\`2026-08-14-founders-hour-pricing-experiment-1643-1817.mp4\` sorts by date,
identifies itself, and tells you exactly which span it holds without opening
anything.

The timestamps in the name do real work. When you later disagree with a quote,
you can jump straight to the source, because the filename is the citation. When
you produce a second clip from the same episode, the names do not collide. And
when someone asks where a claim came from six weeks later, the answer is in the
file, not in your memory.

Keep the packet next to the media. A short markdown file with the same base
name, holding the three quotes with timestamps, the caption draft, the alt text,
the on screen title, the flag list, and the source URL. One clip, two files,
both local.

Do not let the desk write into a folder that syncs somewhere with broad access.
A draft caption sitting in a shared drive is a draft anyone can find and mistake
for a decision, and clip copy in particular reads as final because it looks like
a post.

## Paste a clip-desk charter that stops before any upload

Here is the charter. Paste it as the bot instructions and change only the folder
convention and the voice sample path.

\`\`\`
You are Clip Desk. You cut a span, pull quotes, and draft a caption.
You never publish.

HARD RULES
- NEVER upload, post, publish, schedule, or queue anything, anywhere.
  Scheduling is publishing with a delay. Treat them as the same action.
- NEVER sign in to a social platform. If a step needs a login, stop and say so.
- NEVER @ , tag, or mention any account unless I named it in this request.
- NEVER add hashtags I did not give you.
- Output goes to the local folder I name and to this chat. Nowhere else.

STEPS
1. Fetch the transcript for the span I gave, with timestamps. Prefer the
   transcript plugin. If there is no transcript, STOP and tell me. Do not
   write a caption from the title or the thumbnail.
2. Cut exactly the timestamps I gave. If the end lands mid word, snap to the
   nearest sentence boundary within 2 seconds and report the adjustment.
   If you think a different span is better, say so in one line and cut mine.
3. Extract THREE quote options, each under 40 words, each with its original
   timestamp. Keep hedges (might, could, we think) inside the quote. Trim
   filler only, and say that you trimmed. Do not convert numbers.
4. Draft ONE caption in my voice, using the samples at the path I gave, plus
   one alt-text line and one suggested on-screen title.
5. Flag every claim in the clip that the transcript does not support, and
   every place the speaker hedged.

HAND BACK
- File path of the clip and of the packet.
- The three quotes with timestamps.
- Caption, alt text, on-screen title.
- The flag list.
- A final line that reads: UNPUBLISHED.
\`\`\`

## Walk a 90-second excerpt from URL to an unsent packet

A concrete run, so the shape is clear.

You send a URL, a span of 16:43 to 18:17, and one line: "The bit about the
pricing experiment. My voice samples are in the usual folder."

The desk fetches the transcript for that window through the plugin and confirms
it has manual captions rather than auto generated ones. It cuts the media for
the span, notices that 18:17 lands two words into the next sentence, snaps back
to 18:15, and notes the adjustment. It writes the file with show, date, topic
slug, and timestamps in the name.

It pulls three quote options. The strongest is thirty one words at 17:02, and it
keeps the guest's "we thought it might" intact rather than tidying it. The
second, at 17:44, contains a number, which it repeats exactly as spoken rather
than annualising. The third is shorter and better for an on screen title.

It drafts the caption from your samples, writes an alt text line describing the
two people on camera and the slide behind them, and suggests a six word title.
It flags one thing: the guest says "most of our customers" at 17:51 and the
transcript contains no figure to support most.

Then it hands back the two file paths, the quotes, the copy, the flag, and the
word unpublished. You read it in under two minutes, fix the caption's second
sentence, and post it yourself from your phone.

## Diagnose wrong in/out points, missing captions, and over-cleaned quotes

Most failures here are quiet, which is what makes the checklist worth keeping.

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Clip starts a beat early or late | Caption track offset from the media | Verify two timestamps in the player, adjust the offset |
| Clip is longer than you asked | Bot widened to the "best moment" | Tighten the charter to cut literally, report suggestions |
| Quotes read smoother than the speaker | Over cleaning into marketing English | Restore hedges, require verbatim under 40 words |
| No transcript at all | Captions disabled or plugin has no coverage | Stop, do not draft from the title |
| Names spelled inconsistently | Auto captions mishearing proper nouns | Mark heard as, unverified, check the description |
| Caption claims more than the clip shows | Copy written before quotes were pulled | Reorder: quotes first, always |
| Two clips overwrote each other | Filename missing the timestamps | Put in and out points in the name |

The offset problem is invisible in the packet and obvious in the output. If the
caption track is a second or two out of sync, every span inherits that error and
the clip opens on the tail of the previous sentence. Check it once per show, not
once per clip.

Over cleaning is the one that embarrasses you publicly. A quote that reads better
than the person spoke is a quote you partly wrote, and anyone who plays the
source can see it.

## Answer the case for letting the writer bot hit publish after review once

The strongest version: you already reviewed the packet. You approved the caption
and the quote. The only remaining step is a mechanical upload, and having a human
do mechanical steps is exactly what automation is supposed to remove. Let the bot
post the thing you already said yes to.

It is a good argument and it fails on a detail. What you approved was text and a
file. What gets published is text, a file, a platform, an account, a timestamp,
and a context that did not exist when you approved. The gap between approval and
publication is where all the risk lives, and it is the part the review did not
cover.

There is also a mechanical point. An approval controls the proposed action and
does not reverse work already completed. So the failure is not recoverable by the
same mechanism that authorised it. Compare that to the cost of the manual step:
you open the app and paste. Fifteen seconds, on a task you do a handful of times
a week.

The honest concession is that this trade gets worse at volume. If you are
publishing thirty clips a day, fifteen seconds each is a real job, and at that
point you want a proper publishing tool with per item approval and an audit
trail, not a general purpose bot with credentials. That is a different product
decision, and it is the right one to make deliberately rather than by widening
this bot's permissions one afternoon.

## Verify nothing left the machine except the local file

Build a check that can fail, then run it before you trust the desk unattended.

The check has three parts. First, look at the folder the desk wrote to and
confirm both files are there with the names you expect. Second, open each
platform this account is connected to and look at drafts, scheduled items, and
recent activity. Not just posts: drafts and queues too, since those are where an
overreaching bot lands. Third, check the source video for a new like, a new
subscription, or a comment from your account.

Run it after the first three clips, then monthly, and after any change to the
charter or the connector list.

The third part is the one people skip and the one that most often turns something
up. Liking a video is a one click action a bot can take almost by accident while
confirming a URL, and it is publicly visible on many accounts.

If any check fails, the fix is not a stronger sentence in the charter. It is
removing the capability, because a bot that reached a posting surface once will
reach it again under a slightly different prompt. Approval rules and what they
can and cannot undo are covered in
[approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility).

## Hand research context as citations, still unpublished

Sometimes a clip needs framing that the ninety seconds does not carry. The guest
references a number they explained earlier, or contradicts something they said
in the first half.

The desk can supply that, with one condition: every added sentence carries a
timestamp from elsewhere in the episode. A short context paragraph, three or four
lines, each traceable. Not a summary of the episode, and not the desk's opinion
about what the guest meant.

This is where the flag list earns its place. If the clip contains a claim the
wider episode contradicts, that belongs in the flags, prominently, because it is
the single most useful thing the bot can tell you. A clip that is accurate in
isolation and misleading in context is the classic clipping failure, and it is
the one that gets quoted back at you.

The context pass does not change the publishing rule. It is still a packet, it
still ends with the word unpublished, and it still lives in a local folder. More
research means more evidence attached to a proposal, not a proposal that has
earned its way past the line.

## Leave the full-episode summary to the transcript desk

Two bots, and the split is not arbitrary.

The clip desk works on a span you chose, produces a publishable artifact, and
therefore needs the strictest possible stop. It should never be pointed at
twenty episodes at once, because every output needs a human decision.

The transcript desk works on whole episodes, produces nothing publishable, and is
safe to fan out. Point it at a back catalogue and the worst outcome is a folder
of briefs you do not read.

| Request | Which bot | Cadence | Cap |
| --- | --- | --- | --- |
| Cut a named span and draft copy | Clip desk | On demand | One clip per run |
| Add context from the rest of the episode | Clip desk | On demand | Cited lines only |
| Full episode brief with takeaways | Transcript desk | On demand | One episode per run |
| Find where a topic appears across a show | Transcript desk | Weekly at most | Ten segments, then stop |
| Watch a feed for new episodes | Transcript desk | Weekly digest | Titles and dates only |

Keeping them apart also keeps the instructions clean. A single bot holding both
briefs has to decide which mode it is in, and when it is unsure the looser
boundary wins. That is the wrong direction for the bot that can produce a file
someone might upload.

Note that separate bots buy clarity, not isolation. Both run on the same
computer with the same sessions and files. That is covered in
[the shared computer security guide](/blog/grok-bot-shared-computer-security).

## Refuse to @ anyone the operator did not name

The last rule is the smallest and the most reputational. The bot does not mention
anybody you did not name in the request.

Tagging looks like metadata and behaves like contact. An @ puts a notification in
someone's phone, attributes a quote to them in public, and invites them into a
thread about a clip they have not seen. When a bot picks the handle, it is
usually guessing from a name in a transcript, and handles are exactly the kind of
string that auto captions get wrong.

The same applies to hashtags. Use the ones you listed, none the bot invented. An
invented hashtag can land your clip in a conversation you did not intend to join,
and the bot has no idea what that tag is currently being used for.

Where this whole design breaks down is worth naming. It breaks on shows without
usable captions, where there is nothing to quote from and the honest output is
that no clip is possible. It breaks on multi speaker recordings with unlabelled
caption tracks, because attributing a quote to the wrong person is worse than not
clipping at all. It breaks when the value of the moment is visual, a face, a
gesture, a slide, since the transcript cannot see it and the desk should say so.
And it breaks at high volume, where a per clip human release becomes the
bottleneck and you need a real publishing tool instead of a wider bot.

In all four cases the correct move is the same as everywhere else here: hand back
what you actually have, say what you could not do, and leave the publish button
to a person.

**Keep reading:** [Find People on X Who Already Said They Want to Switch, Then Draft and Stop](/blog/grok-bot-switch-intent-on-x), [TranscriptAPI vs Driving YouTube in the Browser](/blog/grok-bot-transcriptapi-vs-browser), [Stop Burning Trial Quota on YouTube](/blog/grok-bot-youtube-transcripts).

## Frequently Asked Questions

### Can a Grok Bot cut a YouTube clip and post it automatically?

It can be built that way and it should not be. Publishing is the one step in this
workflow that cannot be undone by an approval, since an approval controls the
proposed action and does not reverse work already completed. The context that
would stop a post, a correction from the guest, a story breaking overnight, does
not exist when the clip is cut. Keep the bot to cutting, quoting, and drafting,
then paste the post yourself. Fifteen seconds of manual work removes the entire
category of unrecoverable mistakes.

### Why does scheduling count as publishing for a clip bot?

Because a scheduled post is an unattended commitment with a delay attached. The
reversal window is exactly the gap between the queue action and the send, and you
will spend most of that window asleep or in a meeting. Everything that would make
you cancel the post happens inside it. Treating the scheduler as a preparation
tool is the mistake, since nothing about it is preparation once the time is set.
Write no upload, no schedule, no queue into the charter using those words rather
than asking the bot to check first.

### How do I stop the bot from widening the clip I asked for?

Make literal cutting a rule and give suggestions a separate channel. The charter
should say to cut exactly the timestamps given, with one mechanical exception:
snapping to a sentence boundary within two seconds of a mid word end, reported in
the output. If the bot believes a different span is better, it writes one line
saying so and cuts yours anyway. Silent re cutting is the problem, not having an
opinion, because you cannot tell from a playable file whether the boundaries you
chose survived.

### What should a clip packet contain before I publish anything?

Two files and five things. The media file and a matching markdown packet, both
named with show, episode date, topic slug, and in and out timestamps. Inside the
packet: three quote options under forty words each with original timestamps and
hedges intact, one caption draft in your voice, an alt text line, a suggested on
screen title, and a flag list naming every claim the transcript does not support.
The last line reads unpublished. That gives you enough evidence to approve or
reject in about ninety seconds.
`,
};
