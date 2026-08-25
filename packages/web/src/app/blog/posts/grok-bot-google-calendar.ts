import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Google Calendar: Setups, Permissions, and What to Automate First',
  description:
    'A Grok Bot Google Calendar setup that proposes instead of schedules: free/busy versus full detail, the timezone failures to expect, and why it never sends an invite.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Google Calendar: Setups, Permissions, and What to Automate First

The calendar bot failure everyone eventually has looks like this. You ask it
to find a time for a review with the team. It finds one, and then, because
creating an event with attendees is a single write, it creates the event with
all eleven people attached. Eleven calendars now show a meeting. Eleven people
got an email. Three of them accept before you notice, and when you delete the
event they get a second email telling them it was cancelled.

Two rounds of notifications for a mistake that was supposed to be a
suggestion. The bot did nothing wrong by its own lights: you asked it to find
a time, and creating an event is what finding a time means in an API where
propose and schedule are the same endpoint with a different field populated.

Google Calendar was in the first wave of Grok connectors as of writing, and
the connector list changes, so confirm what your account offers at connect
time. The scope families and the failure modes below are what actually
determine whether this integration is useful or embarrassing.

## The invite that went out to eleven people

Start with the asymmetry, because it decides everything else.

Reading a calendar is one of the safest bot operations available. It is
bounded, structured, and non-destructive, and it feeds the single most useful
daily output a bot can produce: a brief of what is coming and what needs
preparation.

Writing to a calendar is one of the least safe, and not because the data is
precious. It is because a calendar write is a message to other humans wearing
a data structure. An event with attendees generates email, phone
notifications, and rows on other people's schedules, and those side effects
are not part of the object you created. They are triggered by it, and they do
not roll back when you delete it.

So the useful mental model is not "read is safe, write is risky." It is:
writes that touch only your own calendar are cheap, and writes that touch
another person's attention are not calendar operations at all. They are
outbound messages, and they belong under the same rule as sending email.

## Free/busy is a different product from full event detail

The most under-used control in the whole integration is that Google separates
availability from content.

A free/busy query returns time intervals where you are booked. No titles, no
attendees, no locations, no descriptions, no conference links. Just blocks.
For scheduling, which is what most people connect a calendar bot to do, that
is the entire job. The bot does not need to know what your Thursday afternoon
is, only that it is taken.

Most people grant full read access anyway, because it is what the setup flow
offers first and because it does not feel like a decision. It is worth
treating as one, because calendar titles are among the most sensitive short
text in any account. They are terse, unredacted, and written for one reader.
"Term sheet review", "1:1 re: performance", "Oncology follow-up", "Coffee with
[competitor's VP]". A mailbox buries that kind of thing in prose. A calendar
lists it in a column.

| Scope family | What the bot can see or do | Worst realistic outcome |
|---|---|---|
| Free/busy only | Busy intervals across your calendars. No titles or attendees. | Someone learns your working pattern and when you are bookable. That is close to the floor of risk. |
| Event read-only | Full event detail: titles, descriptions, attendees, locations, conference links. | Your entire schedule, including who you meet and about what, becomes summarizable elsewhere. |
| Calendar read-only | Everything above plus the calendar list, sharing, and settings. | The map of every calendar you subscribe to, including personal and shared ones you forgot were attached. |
| Event read and write | Create, edit, and delete events, and populate attendees. | Invitations and cancellations sent to other people, or a meeting silently moved on somebody's schedule. |
| Full calendar access | Everything above plus creating and deleting entire calendars and changing access rules. | A calendar deleted with all its history, or your schedule shared with someone you did not choose. |
| Attendee notification behavior | Whether a write emails the attendees. Controlled by a parameter, not a scope. | Invitations go out on a write you thought was silent, because the default differed from what you assumed. |

That last row is not a scope, and it is the one that bites. Whether a write
notifies attendees is controlled by a notification parameter, and the
effective default can differ between the raw API, the web interface, and
whatever wrapper your connector uses. Do not reason about it, and do not trust
a tutorial. Test it once against a second calendar you own, with a throwaway
attendee address you control, and find out what your specific setup does
before you point it at anything real.

## Proposing beats scheduling, and the difference is one field

The good news is that the fix is small. Propose and schedule differ by whether
the attendees list is populated.

Three proposal patterns, in increasing order of convenience:

**Text proposal.** The bot writes three candidate slots into your brief, in
both timezones, with a one-line rationale. You copy them into an email. This
requires no calendar write permission at all, and for a lot of people it is
where the setup should stop.

**Hold blocks.** The bot creates events on your own calendar with no attendees
and a "HOLD:" prefix in the title. Nobody is notified because nobody is
attached. You see the option in context, and the bot deletes its own holds
when the slot is confirmed or expires. This needs write access only to your
own calendar and produces zero outbound notifications.

**Draft event.** The event exists with the right time, title, description, and
conference link, and the attendees field is empty. You add the people and
press send. The bot did every mechanical part and none of the social part.

All three keep one property: the moment another person learns about the
meeting is a moment you chose. The [chief of staff briefing](/bots/chief-of-staff-briefing)
bot in the catalog is built on the same principle, and states it as a
boundary: it never sends, schedules, or acts externally without your approval.

## Timezone failures and how each one looks

Calendars are where time arithmetic goes wrong, and the failures are specific
enough to name. Each one has a recognizable signature.

**The default-calendar assumption.** The bot works in the calendar's default
timezone rather than the participant's. Signature: the meeting is correct for
you and wrong by a fixed offset for exactly the people in one region.

**The daylight saving drift.** A recurring slot pinned to a fixed offset
rather than a named zone. Signature: everything is fine for months, then a
weekly meeting moves by an hour for half the participants on the morning after
a clock change, and only for them.

**The all-day boundary.** All-day events are date-only, not timestamped.
Signature: a deadline or a day-long block appears on the wrong day for anyone
far enough east or west, and it is always exactly one day off.

**Prose arithmetic.** The bot converts times by reasoning in text instead of
using the timestamps it was given. Signature: an error that is not a whole
number of hours, or one that appears only for half-hour offset zones like
Asia/Kolkata and Australia/Adelaide.

One rule catches most of these before they reach anyone: require every time
the bot outputs to be written in a fixed format that shows its work.

\`\`\`text
Format every time you output as:
  2026-09-03 14:00 Asia/Kolkata  (08:30 UTC)  [Thu]

Always include the named IANA zone, never an abbreviation like IST or CST,
because those are ambiguous across regions.
Always include the UTC equivalent in parentheses.
Always include the weekday, because a wrong date is easier to see as a
wrong day name.
When a meeting involves more than one region, list every participant zone
on its own line before proposing any slot.
\`\`\`

A wrong conversion becomes visible in the brief, which costs you a second,
instead of becoming visible on somebody else's calendar, which costs you a
reschedule and a small amount of credibility.

## Recurring events are where calendar bots go to die

A recurring meeting is not a series of events. It is one rule plus a list of
exceptions, and every edit forces a choice the bot will get wrong at least
once: this event, this and following, or all events.

"All events" is the dangerous branch. Ask a bot to move next Tuesday's standup
because of a holiday, let it edit the series, and you have moved every standup
from now until forever, including the ones already in other people's plans.
The rule changed, so the past instances that were rendered from that rule
change with it.

Three constraints worth putting in the charter verbatim:

- Never modify a recurring series. Single instances only.
- Never modify or delete an event the bot did not create, recurring or not.
  Deleting an event you own cancels it for every attendee, and deleting one
  you were invited to is a decline in disguise.
- When a recurring meeting genuinely needs a change, describe the change in
  the brief and let a human make it. This happens rarely enough that
  automating it has almost no value and a large downside.

## The daily brief charter, calendar edition

The calendar brief is the highest-value read-only bot most people can run, and
it is worth more than any scheduling automation. Here is a version that
assumes read access plus write access to your own calendar for holds, and
nothing else.

\`\`\`text
You are my Calendar Brief bot for [calendar address].

// WHAT YOU OWN
Every weekday at 06:45 in [my zone], read today and the next 7 days.
Send me one brief:
  TODAY       every event, in my zone, with duration and location or link
  PREP        meetings where I owe an agenda, a document, or a decision,
              and what specifically is missing
  CONFLICTS   overlaps, back-to-backs with no gap, and anything that
              starts before 08:00 or ends after 19:00 in MY zone
  TRAVEL      events with a physical location and no travel gap before them
  NEXT WEEK   only what needs a decision from me this week
Use the time format: 2026-09-03 14:00 Asia/Kolkata (08:30 UTC) [Thu]

// WHAT GOOD LOOKS LIKE
For every external meeting, list the other participants' timezones.
Flag any meeting with no agenda in the description at least 24h ahead.
For a proposed slot, offer exactly three options, ranked, each with a
one-line reason, and check them against my working hours in my zone.
Say "nothing to flag" rather than inventing findings.

// WHERE YOU STOP
Never add an attendee to any event. Never send or forward an invitation.
Never accept, decline, or tentatively accept on my behalf.
Never modify or delete an event I did not create.
Never modify a recurring series, only single instances.
Never create, delete, or change sharing on a calendar.
You may create events on my own calendar ONLY if the title starts with
"HOLD:" and the attendee list is empty. Delete your own holds when
the slot is confirmed or the date passes.
\`\`\`

Paired bots make this more useful without widening the permission. The
[meeting double](/bots/meeting-double) only joins meetings you explicitly send
it to and always identifies itself as your bot, which is the right shape for
attendance: opt-in per meeting, never ambient. The
[flight check-in](/bots/flight-check-in) bot stops for a human at every 2FA or
captcha rather than trying to get past one, which is the travel equivalent of
the same restraint. If your calendar is driven from a shared planning
database, [marketing calendar sync](/bots/marketing-calendar-sync) runs one
way on purpose: it touches only your local calendar and never edits the shared
source.

## Week one boundary: never send an invite

Every integration in this series has one action that should stay yours in the
first weeks. For a mailbox it is send. For a code repository it is merge. For
a calendar it is the invitation.

The reasoning is not that invitations are complicated. It is that they are the
only calendar action that reaches into other people's attention and cannot be
retracted, only followed by a second notification saying the first one was a
mistake. Everything else a calendar bot does is confined to your own account
and reversible without anyone knowing.

There is a second reason, less obvious and more important over time. A bot
that can send invitations has to be right about timezone, availability,
duration, attendee list, agenda, and whether the meeting should exist at all.
That is six judgments, and it only takes one to be wrong for the whole thing
to be visibly wrong. A bot that proposes has to be right about none of them,
because you are checking. The proposal is worth nearly as much as the
scheduling and it fails privately.

Widen the boundary later if you want to, and widen it narrowly: internal
attendees only, one meeting type, an explicit list of addresses it may
invite, a duration cap. Never widen it to "meetings you are confident about,"
because confidence is the thing you are testing, not the thing that grants
permission. That progression, applied across every bot rather than just this
one, is the argument in the
[one-person company guide](/blog/one-person-company-grok-bot), and the reason
every listing on botskills.sh declares its boundary before its prompt is
explained in the [botskills introduction](/blog/introducing-botskills).

## Frequently Asked Questions

### Should a Grok Bot Google Calendar setup create events with attendees?

Not in the first weeks. Creating an event with attendees is not really a
calendar write, it is an outbound message: it emails those people, puts a
block on their schedules, and cancelling it sends a second notification. Have
the bot propose instead, either as three ranked slots in your daily brief or
as hold blocks on your own calendar with an empty attendee list and a "HOLD:"
title prefix. Nobody is notified when no attendees are attached, so you keep
all the mechanical benefit and none of the social risk.

### What is the difference between free/busy and full calendar read access?

A free/busy query returns only the intervals where you are booked, with no
titles, attendees, locations, or descriptions. Full read access returns the
entire event, including all of that detail. For scheduling, free/busy is the
whole job, which makes it the correct scope for most calendar bots. The reason
to care is that event titles are unusually sensitive short text: they name
counterparties, health appointments, and internal topics in a few words each.
Granting the narrower scope costs you nothing for scheduling and removes that
exposure entirely.

### How do I prevent timezone mistakes in calendar automation?

Force the bot to show its work in every output. Require a fixed format that
includes the named IANA zone, the UTC equivalent in parentheses, and the
weekday, so a bad conversion is visible in your brief rather than on someone
else's calendar. Insist on named zones like Asia/Kolkata rather than
abbreviations like IST, which are ambiguous across regions. Ban fixed UTC
offsets for recurring meetings, since those drift by an hour at daylight
saving transitions, and treat all-day events carefully because they are
date-only and shift for distant participants.

### Can a bot manage my recurring meetings?

It can read them safely and it should not edit them. A recurring meeting is
one rule plus exceptions, so any edit forces a choice between this instance,
this and following, and the whole series, and choosing the series rewrites
every occurrence including ones already in other people's plans. Moving next
week's standup for a holiday can silently move every future standup. Since
genuine changes to a recurring series are rare, automating them has little
value and a large downside. Have the bot flag the conflict in your brief and
make the change yourself.
`,
};
