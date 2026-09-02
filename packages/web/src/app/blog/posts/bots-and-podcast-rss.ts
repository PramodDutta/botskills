import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Watching a Feed That Publishes Whenever It Likes',
  description:
    'Podcast feeds ignore schedules. How to watch one without missing episodes or reporting the same one twice, and why you dedupe on GUID not title.',
  date: '2026-09-02',
  category: 'Tutorial',
  content: `
# Watching a Feed That Publishes Whenever It Likes

Most things a bot watches have a rhythm, and you can build the watcher around it. A pricing page changes rarely. A status page changes when something breaks. A daily report arrives daily.

Podcast feeds have no rhythm at all. A show publishes weekly for two years, then three episodes in a day around a conference, then nothing for a month, then a bonus episode at eleven at night. There is no schedule to align with, and any polling interval you pick is wrong for some part of that pattern.

That irregularity is the whole design problem. Everything else in this article follows from it: the polling interval, the identity rule, and the handling of silence are all answers to the same question, which is how to watch something that will not tell you when to look.

## Poll on a fixed interval and accept the lag

The instinct is to try to be clever: poll more often for active shows, less for dormant ones. Do not. Adaptive polling is a second system to maintain and it fails in the direction you care about, going quiet exactly when a dormant show wakes up, which is the one moment it was supposed to help with.

Pick one interval and apply it to every feed. Daily is right for almost every use of this. Twice daily if you genuinely act on episodes the day they land. Hourly is almost never justified and mostly signals that somebody wanted alerts rather than a digest.

| Interval | Worst case lag | When it fits |
|---|---|---|
| Hourly | About an hour | Rarely justified for podcasts |
| Twice daily | About twelve hours | You act on episodes same day |
| Daily | About a day | Nearly everyone |
| Weekly | About a week | A reading list, not a watcher |

The lag is not the enemy people assume. Almost nobody needs to know about an episode within an hour of publication, and a daily digest that arrives reliably beats a real time alert that trains you to ignore it. The irregularity of the feed is also an argument for the fixed interval rather than against it: since you cannot predict when the show publishes, no interval catches everything promptly, and a predictable one at least makes the lag knowable.

## Dedupe on the identifier, never on the title

This is the rule that makes the difference between a watcher that works and one that quietly annoys everybody.

Feed entries carry an identifier. In RSS it is the guid element, in Atom it is id. That identifier is what the publisher uses to say "this is the same item you already saw", and it is stable across edits to everything else.

Titles are not. A title changes when somebody fixes a typo, adds an episode number, appends a guest name, or reformats the whole back catalogue. Every one of those makes a title-keyed watcher report an episode you already heard about, as new.

> Track episodes by the feed's own item identifier. Never treat a title, a description, or a publication date as the identity of an item. If an item's identifier has been seen before, ignore it regardless of what else changed.

| Key you dedupe on | What breaks it |
|---|---|
| GUID or Atom id | Almost nothing, this is what it is for |
| Title | Typo fixes, renumbering, reformatting |
| Publication date | Backdated republishing, timezone handling |
| Audio file URL | Re-uploads, moving to a new host |
| Position in the feed | Anything at all, feeds reorder |

The last row deserves a note. Feeds are not guaranteed to be ordered, and some publishers pin an episode to the top. A watcher that assumes the first entry is the newest will report a pinned trailer every single day, and it will look like a bug in your setup rather than a choice by the publisher, so it usually gets debugged in the wrong place first.

## Publishers rewrite history and your watcher should not care

Podcast feeds get edited after the fact more than most sources. Descriptions get expanded with links. Titles get renumbered when a show restructures its seasons. Old episodes are re-uploaded to a new host, changing every audio URL in the back catalogue at once.

If your watcher keys on identity properly, none of this matters and you will not notice it happened. If it does not, a re-host looks like an entire back catalogue publishing at once, and you get four hundred notifications on a Tuesday.

That failure has a specific shape worth naming, because it is the single most common way these break: a feed migration produces an apparent flood of new items, the bot faithfully reports all of them, and whoever receives the output stops trusting it permanently. One bad Tuesday is enough.

Two defences. Key on the identifier, which is the real fix. And put a sanity limit in the charter:

> If more than a stated number of items appear as new in a single run, do not list them all. Report that the feed produced an unusual number of new items, name the count, and stop. A person will decide whether it is real.

## Handle the feed being unreachable as its own case

A feed that returns nothing and a feed that returns no new episodes look identical in the output unless you separate them.

This matters more here than for most sources, because "no new episodes" is the normal state. A dormant show and a broken feed URL produce the same silence, and the silence is unremarkable, so a feed that has been dead for two months will not be noticed by anybody.

> For every feed, report whether it was reached. If a feed could not be read, name it and say so at the top of the output. A feed with no new episodes and a feed that failed are different results and must never be reported the same way.

Add one more line for feeds that go quiet legitimately:

> If a feed has produced no new items for a stated period, note it once in the output so a person can check whether the show has ended.

Shows do end, and the feed usually stays up forever with nothing new in it. Very few podcasts announce that they have stopped: the last episode is published like any other, and the silence afterwards is the only signal. Without this line you will keep a dead show on the list for years, poll it every day, and never notice.

## What to actually put in the output

An episode notification is not useful. An episode entry is.

| Field | Why include it |
|---|---|
| Show name | You are watching several |
| Episode title | Obvious |
| Publication date | Distinguishes new from backfilled |
| Duration | Determines whether it fits today |
| Description or show notes, trimmed | The only basis for deciding to listen |
| Link | So a person can act |
| Guest names if listed | Often the actual reason to listen |

Duration is the field people forget and the one that changes behaviour most. A forty minute episode and a three hour one are different propositions, and knowing which before opening it is most of the value of a digest.

Trim the description rather than including it whole. Show notes routinely run to a thousand words of sponsor copy and timestamped chapter lists, and a digest that reproduces them is unreadable. Take the first paragraph or the first stated number of words, and link to the rest rather than trying to work out which part is the real description.

## Summarising the audio is a different project

The natural next thought is to have the bot listen and summarise. Be clear that this is a separate, much larger undertaking with its own failure modes.

Transcription of conversational audio with multiple speakers, crosstalk, and technical vocabulary is imperfect, and a summary built on an imperfect transcript inherits every error confidently. Attribution is the specific risk: a transcript that mixes up two speakers produces a summary saying one person said something the other said, and that is a claim about a real person that nobody can verify without listening to the thing you were trying to avoid listening to.

If you do it anyway, two rules. Attribute nothing to a named person unless the summary carries a timestamp so it can be checked. And say plainly at the top that the summary came from an automatic transcript, so the reader calibrates.

[podcast-summarizer](/bots/podcast-summarizer) and [podcast-clip-desk](/bots/podcast-clip-desk) in the catalogue both sit in this territory. Read their boundaries before adapting them, because the useful parts are the constraints rather than the instructions.

## Watching many feeds at once

The single-feed version is easy. The interesting version watches thirty.

Group the output by show rather than by time, so a reader can skip whole shows. Sort the shows consistently, so the same show is in the same place every day and eyes learn where to look. And keep the whole thing to one screen: a digest that scrolls is a digest that gets skimmed, and skimming defeats the point of having filtered.

If thirty feeds produce more than a screen on an average day, the answer is fewer feeds rather than a longer document. A watcher's value comes from the shows it excludes. Review the list quarterly and drop anything you have never opened, which is usually about a third of it.

## Store the state where you can read it

A feed watcher needs memory: the set of item identifiers it has already reported. Where that memory lives determines how much of this actually works.

The tempting version is to keep it implicit, letting the bot look at the last output it produced and infer what is new. This fails the first time an output is deleted, edited, or missed, and it fails silently, because an empty memory looks exactly like a feed with nothing in it.

Keep the state explicit and readable: a document listing every feed, the identifiers seen, and the date each was first reported. Boring, and it buys three things.

| What explicit state gives you | Why it matters |
|---|---|
| A missed run does not lose history | The next run catches up correctly |
| You can inspect what it thinks it has seen | Debugging takes minutes, not guesses |
| Removing one entry re-reports one episode | Testing without breaking everything |
| A new feed can be seeded deliberately | No flood on first run |

That last row is worth doing on purpose. When you add a feed, the entire back catalogue is new by definition, and a naive first run reports two hundred episodes. Seed the state with everything currently in the feed and report nothing on the first run, then start reporting from the next one. One line in the charter, and it prevents the worst first impression a watcher can make.

## Test it against the awkward feeds

Before trusting a watcher, point it at feeds you know are difficult and watch what it does.

Find a show that pins a trailer to the top of its feed, one that publishes several episodes on the same day, one that has renumbered its titles, and one that has been dormant for six months. Those four cover most of what goes wrong, and you can usually find all four in any twenty shows.

| Test feed | What a correct watcher does |
|---|---|
| Pinned item at the top | Reports it once, then never again |
| Three episodes on one day | Lists all three, grouped |
| Renumbered titles | Reports nothing, identity unchanged |
| Dormant for months | Says so once, does not repeat daily |

Run it twice in a row against each. The second run should produce nothing new, and if it produces anything at all, the dedupe key is wrong. That two-run check takes a minute and it is the single most informative test in this whole area, because almost every feed watcher failure shows up as something being reported twice.

## Be a polite client

A watcher hitting thirty feeds every day is a small but real load on somebody else's hosting, and podcast feeds are often hosted by independent shows on modest plans.

Most of the politeness is free. Poll on a fixed daily interval rather than repeatedly. Read the feed once per run rather than once per episode. Do not fetch the audio. Do not fan out into the show notes links unless something specific requires it.

Two habits are worth adding deliberately. Respect whatever the feed says about caching, if it says anything, so an unchanged feed costs the publisher almost nothing to serve. And stop polling feeds that have been unreachable for a long stretch, rather than requesting a dead URL daily forever. A charter line covers it:

> If a feed has failed on every run for a stated period, stop attempting it and list it as retired in the output so a person can remove or fix it.

None of this is about avoiding trouble. It is that a watcher which quietly hammers a dead URL for two years is badly built, and the fix is three sentences.

## Know what the feed does not tell you

A feed is a publishing record, not a description of a show, and there are things it structurally cannot give you.

It does not tell you whether an episode is good, obviously, but more usefully it does not reliably tell you what an episode is about. Show notes vary from a full outline to a single sentence to nothing. Two shows with identical publishing habits can give you completely different amounts to work with, and a digest that looks thin for one show is often reporting everything that exists.

It also does not tell you about anything published outside the feed. Shows increasingly release things on video platforms, member-only feeds, or social posts that never appear in the public RSS. A watcher on the public feed is watching the public feed, which is not the same as watching the show.

Say this in the output rather than leaving it implied. A one line note that the digest covers public feed items only sets the expectation correctly, and it prevents the conversation where somebody asks why an episode they saw discussed was not in yesterday's list. The answer, that it was never in the feed, is much easier to give in advance than after.

## Answer the objection that podcast apps already do this

A reasonable person points out that every podcast app already subscribes to feeds, dedupes correctly, and shows new episodes.

True, and if that is your requirement, use the app. It is better at this than anything you will build, and the marginal value of a bot doing the same job is zero.

The cases where the bot earns its place are the ones where the app cannot help. Watching shows you do not subscribe to and would not want in your library, because you are tracking what an industry is discussing rather than choosing what to listen to. Feeding a shared digest that goes to a team rather than an individual. Combining feed items with other sources in one brief, so podcasts sit alongside filings and posts. And filtering by criteria the app has no concept of, like only episodes over an hour, or only ones with a named guest.

If your use case is none of those, use the app. That is a genuine answer, not a rhetorical one.

## Common questions

### What if a feed has no GUID on its items?

Rare but it happens with hand-maintained feeds. Fall back to the audio file URL, which is more stable than the title, and accept that a re-host will produce duplicates. Note the weakness in the charter so whoever debugs it later knows why that feed behaves worse than the others.

### Should the bot download the audio?

No reason to, for a digest. Downloading turns a lightweight read into a storage question and adds nothing unless you are transcribing, which is the separate project described above. Link to it and let a person decide.

### How do I stop it reporting the same episode across two shows?

Cross-posted episodes are common, where a network runs the same interview on two feeds with two different identifiers. Dedupe within a run on the audio file URL as a secondary key, and report it once with both show names. Do not try to detect this by title similarity, which will collapse legitimately different episodes.

### Can it watch a YouTube channel or a newsletter the same way?

Any source with a proper feed, yes, and the same rules apply: fixed interval, identifier-based dedupe, report unreachable separately. A source without a feed needs a different approach entirely, closer to the page-watching pattern in [competitor website watch](/blog/grok-bot-to-competitor-monitoring), which is more fragile because it has no identity field to rely on.

## When this page stops applying

Grok Bot is in beta and the scheduling mechanics will change. [How to schedule a routine](/blog/how-to-schedule-a-grok-bot-routine) covers the current shape of that and is the page to check if the interval advice here stops matching what you see.

What will not change is the feed format, which has been stable for two decades and is unlikely to move. The identifier rule, the unreachable-versus-empty distinction, and the flood limit are properties of watching any irregular published feed, and they will still be the right answers when the surrounding tooling looks nothing like it does today.
`,
};
