import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Handing Someone a Fleet They Did Not Build',
  description:
    'A new hire cannot inherit your bots. They need their own seat, an empty computer, and the charters as text. What to write down before their first day.',
  date: '2026-09-02',
  category: 'Playbook',
  content: `
# Handing Someone a Fleet They Did Not Build

Somebody joins, and the fastest way to make them useful is to give them the bots that already work. That instinct is right and the mechanism people reach for does not exist.

You cannot hand over a running fleet. What transfers is text and files. What does not transfer is the computer, the logins, the conversation history, or any of the accumulated context that makes your bots feel like they know things. Understanding that early is the difference between a useful first week and a fortnight of confusion.

## Accept what actually moves and what does not

Start here, because every onboarding decision follows from it.

| What you want to hand over | Transfers? | What the new person gets |
|---|---|---|
| The bot's charter | Yes, as text | The instructions, in full |
| A public share link to the bot | Yes | A copy of the configuration in their account |
| The computer it runs on | No | Their own, empty |
| Browser sessions and logins | No | Nothing; they sign in themselves |
| Conversation history | No | Nothing |
| Routines and their run records | No | They recreate the schedule |
| Files on the shared machine | Only as exported files | What you deliberately send them |

A share link copies configuration, not access. The docs are explicit that whoever adds a shared bot does not get your computer, your logins or your conversation history. That is the correct behaviour and it is also the thing that surprises people, because the word share implies more than it delivers.

## Get them their own eligible seat before anything else

Nothing in this page works until the new person has their own account. Not a login to yours.

This is worth being firm about because the shortcut is tempting during a first week when procurement is slow. Sharing your credentials hands them everything on your computer: every signed-in session, every file, every command line credential, across every bot on the account. That is not a scoped grant, it is your whole working surface, and it cannot be partially undone afterwards.

If the seat is genuinely blocked, the honest answer is that they cannot run bots yet. Give them the charters to read and something else to do.

## Write the fleet down before their first day

The artefact that makes onboarding work is a plain document, one entry per bot. It takes twenty minutes to write and replaces a week of questions.

Per bot, six things:

1. **What it does**, in one sentence a new person can understand without context.
2. **The boundary**, quoted from the charter. What it must never do.
3. **Who reads the output** and what they do with it. This is the part that is never written down and always needed.
4. **The cadence and why**, because the number without the reason invites tampering.
5. **What it is signed into**, so they know the blast radius before they run anything.
6. **The charter text itself**, in full, so they can recreate it on their own seat.

Item three is the one people omit and the one that determines whether the bot survives the handover. A new owner who does not know who reads something cannot judge whether it still matters, so they keep it running forever out of caution.

## Start them with one bot, not the fleet

The temptation is to hand over everything on day one so they are immediately productive. What that actually produces is somebody running six bots they do not understand, on a fresh account, with no sense of which outputs are normal.

Give them one. Preferably the least consequential one that still does real work: something that reads public sources and writes to a document. Let them recreate it on their own seat, run it for a few days, and read every output.

\`\`\`
Week one, one bot only:

Day 1  Recreate this charter on your own account. Do not connect
       anything beyond what the charter names.
Day 1  Run it once manually. Read the entire output, not the summary.
Day 2  Run it again. Compare against day one. Note what changed and
       whether the change makes sense.
Day 3  Read three of my old outputs from the last month. You are
       looking for what normal looks like, so abnormal is visible.
Day 4  Change one thing deliberately, cadence or a source, and see
       what happens to the output.
Day 5  Tell me what you think this bot is for and who reads it.
       If your answer differs from mine, that gap is the handover.

Add the second bot only after day five.
\`\`\`

Day five is the actual test. If they can say what it is for and who reads it, they own it. If they cannot, the fleet document was incomplete and you have found out cheaply.

## Explain the shared computer before they connect anything

This is the concept that most often has to be un-learned, because every mental model a new person brings predicts the opposite.

They will assume each bot is separate. Most software works that way. Here, every bot on their account shares one persistent cloud computer, and cookies, signed-in sessions, files and command line credentials on it are visible across all of them. The screens are separate work surfaces, not separate security boundaries.

The practical consequence to state on day one: whatever you sign into for one bot, every bot on your account can reach. So do not connect a production admin console for a research bot, and do not sign into anything on the shared machine that you would not hand to every bot you will ever create.

Say it before they connect anything, because the first login is the one that sets the pattern.

## Let them rewrite the charters rather than inherit them verbatim

A charter copied and run unchanged is a charter nobody understands. Ask them to rewrite each one in their own words before using it, then compare against yours.

Every difference is informative. Either they misread something, which you can correct now rather than after an incident, or you left something implicit that a person without your context could not infer. The second is more common than the first and it is the more valuable finding.

This also surfaces the parts that are scar tissue. Charters accumulate lines that exist because something went wrong once, and those lines look arbitrary to a new reader who will helpfully tidy them away. If a rule cannot be explained, it either needs its reason written next to it or it needs removing, and both are better than leaving it to be deleted by someone who assumed it was clutter.

## Hand over ownership explicitly, with a date

The most common failure in this whole area is silent: both people believe the other owns the bot, and nobody reads the output for a month.

Bots are almost never on a handover checklist. Accounts are, documents are, projects are. A bot that quietly does something useful transfers by assumption, and assumption is exactly what produces an unowned bot.

| Handover state | What happens next |
|---|---|
| Named owner, dated, both agree | The bot has a reader |
| "The team owns it" | Nobody reads it within a month |
| Assumed transferred, never said | Both parties stop looking, output accumulates |
| Explicitly not transferred, paused | Fine. A paused bot is honest |

The fourth row is worth as much as the first. If the new person is not going to own something, pausing it is a legitimate outcome and far better than leaving it running for nobody.

## Give them permission to retire things

A new owner will not retire anything unless you say they can. They have no context for what matters, so caution says keep everything, and the fleet grows a permanent layer of bots nobody will ever question.

Say explicitly, on day one, that retiring something is a valid outcome and will not be read as carelessness. Then give them the test: if nobody has used the output in six weeks and nobody objects to it pausing for three, it goes.

That single sentence does more for a fleet's health than any amount of documentation, because it converts a new person from a curator into an owner.

## Expect them to find things you stopped seeing

The genuine benefit of onboarding, and the reason to take the rewrite step seriously, is that a new reader sees what a familiar one cannot.

They will ask why a cadence is five minutes. They will notice that two bots read the same source for different reasons. They will point out that an output has a section nobody reads. All of these are visible to you in principle and invisible in practice, because you built them and stopped looking.

So treat their first-week questions as findings rather than as gaps in their understanding. The question you cannot answer is the one worth writing down.

## Sequence the connections so the blast radius grows slowly

The order in which a new person connects tools decides how much damage a misunderstanding can do in week one, and it is entirely within your control.

| Order | Connect | Why here |
|---|---|---|
| 1 | Nothing. Public sources only | They learn the loop with zero exposure |
| 2 | A read-only view of one internal source | First real data, still reversible |
| 3 | A dedicated mailbox, not a personal one | Mail work without the personal inbox on the machine |
| 4 | A structured connector for one tool | Scoped access, the safer kind |
| 5 | Anything with write access | Only after four weeks of watching outputs |

The principle is that every credential added to the shared computer is available to every bot on that account, including ones they have not built yet. So each connection is a permanent widening rather than a per-bot grant, and the sequence should reflect that.

What this rules out is the common shortcut of connecting everything on day one so they are unblocked. It feels efficient and it front-loads the entire blast radius before anybody knows what normal looks like.

## Watch a new starter connect the wrong console on day two

Priya onboarded an analyst and gave him the fleet document, a seat, and three bots to recreate. Good preparation by any standard.

On day two he hit a bot that needed store data. The charter said to use an export. The export was fiddly, the admin console was right there, and signing in took ten seconds. He signed in, got the data, finished the task, and moved on. Nobody would call that unreasonable.

What he had not internalised, because it was in the document but had not been said aloud, was that the console session now sat on the shared computer where every bot on his account could reach it, including a research bot he built the following week that browsed arbitrary sites.

Nothing went wrong. It easily could have, and the gap between the outcome and the risk is not something a first-week hire can be expected to see.

The fix Priya made afterwards was a sentence on day one rather than a paragraph in a document: whatever you sign into, every bot you ever create can reach. Say it before the first login, because the first login sets the pattern.

## Book a check-in at week four, not week one

Week one check-ins catch confusion, which is useful and mostly self-correcting. Week four catches drift, which is not.

By week four a new owner has changed some cadences, added a source, possibly built their own first bot, and formed opinions about which of the inherited ones are worth keeping. That is exactly when their view is most valuable and least likely to be volunteered, because none of it feels significant enough to raise.

Ask three things: what have you changed and why, what are you still running that you cannot explain, and what would you retire if I said yes. The third question reliably produces an answer, and it is usually right, because a new owner sees the fleet without the sunk cost that makes the rest of us keep things.

## Decide what they are allowed to break

The last thing to settle before day one, and the one that most affects how fast they actually get useful.

A new person who does not know what they may change will change nothing. They will run the inherited bots exactly as handed over, indefinitely, including the parts that are wrong, because every modification feels like it might be the one that breaks something important. That looks like caution and functions as paralysis.

| Area | Default for a new owner | Why |
|---|---|---|
| Cadence | Change freely, tell me after | Cheap, reversible, and usually wrong on inherited bots |
| Output format | Change freely | It is for them to read |
| Sources | Add freely, remove with a word | Removing may break a downstream claim |
| The boundary line | Never alone | It exists because of something |
| Retiring a bot | Allowed, after the pause test | Prevents permanent fleet growth |
| Connecting new tools | Ask first, every time | Widens the blast radius for every bot |

Writing this down converts a hundred small hesitations into two rules they can hold in their head. The two that matter are that boundaries are not theirs to relax alone, and that new connections need a conversation. Everything else they should feel free to touch.

The one to be most explicit about is the boundary. A new owner reading a charter often sees the never-send line as excessive caution from someone who did not trust the tooling, and relaxing it looks like a sensible modernisation. It is not, and the reason usually cannot be reconstructed from the artefact, which is exactly why it needs saying out loud rather than leaving in a document.

## Answer the objection that this is slow when you need help now

The fair version: you hired someone because there is more work than time, and a week of one bot plus documentation is a week of not getting help. Just give them access and let them figure it out.

The reason that does not work here is specific rather than general. In most software, giving someone access and letting them explore is fine because the blast radius of a confused new person is small. On a shared computer where every bot inherits every session, and where the bots act as the account holder, a confused new person's blast radius is the whole working surface.

There is also a compounding cost. A fleet handed over without the reader-and-purpose information becomes a fleet nobody will ever retire anything from, because no successor can tell what matters. That is a permanent tax on every future quarter, paid to save a week now.

Where the objection wins: if the bots genuinely cannot act, only read public sources and write to documents, then hand them over fast and skip most of this. The ceremony scales with what the bots can do, not with how many there are.

## Stop using this page when the shape is different

This page is about onboarding someone onto a fleet that already exists. It stops applying in three places.

If the person is inheriting a single bot rather than a fleet, the pass is narrower and [taking over someone else's bot](/blog/taking-over-someone-elses-bot) is the right shape. If the question is what can technically be handed over at all, [sharing a bot](/blog/share-a-grok-bot) covers the mechanics and the limits. And if the fleet has grown past what anyone can hold, do [the quarterly cull](/blog/the-quarterly-roster-cull) before onboarding rather than after, because handing over eleven bots when six would do is unkind.

Bots that help: [Chief of Staff Router](/bots/chief-of-staff-router) is where the roster and its owner lines belong, which is what makes any of this documentable. [Bot Advisor](/bots/bot-advisor) reviews the roster and names what overlaps or went silent, which is a good first task for a new owner. [Org Chart Keeper](/bots/org-chart-keeper) tracks ownership among people. And [Agent Inbox](/bots/agent-inbox) keeps a new person's mail work off their personal mailbox from day one.

## Frequently Asked Questions

### Can I transfer my running bots to a new team member?

Not as running bots. A public share link copies the configuration into their account, and the documentation is explicit that they do not get your computer, your logins, or your conversation history. So what transfers is the instructions; what does not is everything that makes the bot feel like it knows things. They need their own eligible seat, they start on an empty computer, and they sign into every tool themselves. Plan the handover as recreating a recipe rather than moving a working kitchen, and it goes smoothly.

### Should I give a new hire access to my account to speed things up?

No, and the reason is the shared computer rather than general caution. Every bot on an account uses one persistent cloud computer, and cookies, sessions, files and command line credentials on it are visible across all of them. Sharing your login therefore hands over your entire working surface rather than a scoped subset, and it cannot be partially undone afterwards. If their seat is genuinely blocked by procurement, the honest position is that they cannot run bots yet; give them the charters to read in the meantime.

### What is the one thing most fleet documentation leaves out?

Who reads each bot's output and what they do with it. Charters record what a bot does and what it must not do, and both are recoverable from the artefact. The downstream purpose exists only in the previous owner's head, and without it a new owner cannot judge whether a bot still matters. That produces the worst outcome: they keep everything running forever out of caution, and the fleet grows a permanent layer nobody will question. One sentence per bot prevents it.

### How many bots should a new person take on in week one?

One, and preferably the least consequential one that still does real work. Handing over six on day one produces somebody running six things they do not understand on a fresh account with no sense of what a normal output looks like. Give them one to recreate, run and read for a week, then ask them what it is for and who reads it. If their answer differs from yours, the gap is the handover and you have found it cheaply. Add the second bot only after that.
`,
};
