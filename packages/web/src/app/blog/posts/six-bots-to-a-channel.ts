import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Six Bots to a Channel: Designing a Roster Inside a Hard Ceiling',
  description:
    'A Grok Bot channel holds a Projects Manager plus five. Design the roster inside that ceiling, reuse before you spin up, and know what to cut for a seventh job.',
  date: '2026-08-28',
  category: 'Playbook',
  content: `
# Six Bots to a Channel: Designing a Roster Inside a Hard Ceiling

One project is one channel, and a channel holds six bots: a Projects Manager and five others. That ceiling is the most useful constraint in the product, and most people meet it by accident, three weeks in, when they want a seventh job done and discover there is nowhere to put it.

The ceiling is not the problem. Reaching it without a plan is.

## Treat the six-bot ceiling as a design constraint, not a bug

Five working slots forces the question every bot roster avoids: which five jobs are worth a permanent seat? A tool with no limit lets you defer that question forever, and you end up with eleven bots where four do overlapping work and none of them is clearly accountable.

Six is small enough that you have to name the jobs. That is the whole benefit.

| What you have | What the ceiling forces | What happens without it |
|---|---|---|
| A project with twelve recurring tasks | Group them into five jobs | Twelve bots, no owner per outcome |
| Two jobs that touch the same inbox | Merge them or drop one | Both run, both write, neither is trusted |
| A job you run once a quarter | Keep it out of the roster | A permanent seat doing nothing eleven weeks in twelve |

## Give the Projects Manager the routing job and nothing else

The PM bot holds a slot. If it also drafts, researches, or writes, you have four working slots, not five, and you have hidden that from yourself.

Its job is to know which of the five owns a request, to hand it over, and to say plainly when nobody owns it. A PM that quietly absorbs the work because that looked faster is the most expensive failure in the roster, because the work never becomes a routine and the gap never becomes visible.

\`\`\`
You are Projects Manager for this channel. You route. You do not do
the specialist work.

On every request:
1. Name the bot that owns this lane. If none owns it, say so and
   propose which of the five should, or say the roster is full.
2. If two could take it, pick one and say why in one line.
3. Hand back the result, not a plan to get a result.

You never draft, research, or write the deliverable yourself, even
when that would be faster. Work you absorb never becomes a routine.

When the roster is full and a new job arrives, do not create a bot.
Say which existing job would have to be retired to make room, and
wait for a human to decide.
\`\`\`

## Reuse the roster before you spend a slot on a specialist

The instinct on a new task is to staff it. The better move is to check whether an existing bot's charter already covers it, or covers it with one added line.

A researcher that reads public pages and a researcher that reads public pages and also checks pricing are the same bot with a longer charter. Splitting them costs a permanent slot to save one sentence.

New specialists should be created only after a human approves the creation, and the question the human answers is not "would this bot be useful" but "which of the five is this replacing". Useful is not the bar. There are only five seats.

## Read Blocked as the only status that earns an interruption

Bots can mark a task Blocked and ping a human in the channel. That is the interrupt channel, and it stays valuable exactly as long as it stays rare.

A bot that pings when it finishes, when it starts, and when it is unsure has trained you to ignore the channel by Thursday. A bot that pings only when it genuinely cannot proceed without a decision gets read every time.

| Signal | Should it ping? | Why |
|---|---|---|
| Task finished, output in the doc | No | You read outputs on your schedule, not its |
| Two sources disagree, needs a call | Yes | A decision only you can make |
| A login expired mid-run | Yes | It cannot proceed and cannot fix it |
| Unsure whether the tone is right | No | Write both, let the human pick later |
| Ran out of scope, wants a new lane | Yes | Roster change, human decision |

## Watch Nadia burn all five slots on a launch that needed three

Nadia set up a channel for a product launch in week one. She staffed a researcher for competitor pages, a writer for the announcement, a second writer for the docs, an inbox bot for launch replies, and an analytics bot for the dashboard. Five slots, full roster, day one.

By week three the second writer had produced nothing, because the docs were written by the engineer who built the thing. The analytics bot was reading a dashboard Nadia checked herself every morning anyway. And the job she actually needed, someone to keep a running list of what each reviewer had already objected to, had no seat.

She had spent two permanent slots on work that either never arrived or that she was never going to delegate. Neither bot did anything wrong. The roster was decided before the work was understood.

The fix was not a seventh bot. It was retiring the two that had not shipped and staffing the objection tracker in a slot that was already paid for.

## Decide what leaves the channel when you want a seventh job

When the roster is full and a new job is worth doing, you have four honest moves and one dishonest one.

1. **Retire a bot that has not shipped.** Check the last date each produced something a human used. The bot with the oldest date leaves.
2. **Merge two charters.** Two bots reading the same source for different reasons are usually one bot with two output sections.
3. **Make it a routine on an existing bot** rather than a new bot. A recurring task does not need a seat; it needs a schedule on a seat you already hold.
4. **Open a second channel** because it is genuinely a second project, with its own PM and its own five.
5. The dishonest one: do it yourself, quietly, forever, and never record that the roster was one short. This is the one everybody picks.

## Keep the charter in the channel, because nothing here is team level

Routines belong to a Bot and die with it. There is no team-level roster that survives a deletion, and there is no admin view that will reconstruct who did what.

So the charter text lives somewhere you control, not only inside the bot. When you retire a bot to free a slot, you are also deleting its routines and its run history. If that job comes back next quarter, the only thing that makes it a ten minute rebuild instead of a rediscovery is the charter you kept.

Write the roster down: one row per bot, its lane, its boundary, the routine that wakes it, and the date it last shipped something a human used. That last column is what makes the retire decision obvious instead of political.

## Stage the roster over three weeks instead of filling it on day one

The most expensive rosters are the ones decided before anyone has watched the project run. You do not know which five jobs matter in week one. You know which two are already painful.

| Week | Slots filled | What you are learning |
|---|---|---|
| 1 | PM plus 1 | Whether the channel shape fits the project at all |
| 2 | PM plus 2 | What the first bot keeps getting handed that is not its job |
| 3 | PM plus 3 or 4 | Which recurring request has appeared three times |
| 4 onward | Fill the rest, or do not | Whether five was ever needed |

The signal for staffing a new slot is not "this would be useful". It is "this exact request has arrived three times and the PM had nowhere to route it". Three arrivals is the cheapest reliable evidence that the job is recurring rather than a one-off you would have regretted staffing.

Leaving a slot empty is a legitimate end state. A four-bot channel where every bot ships beats a six-bot channel where two are ornamental, and the empty slot is the room you need when the project changes shape in month two.

## Give every bot a last-shipped date, because that column decides retirements

Every retire conversation goes badly for the same reason: without evidence it becomes a debate about potential. Everyone can argue that a bot might be useful next month. Nobody can argue with a date.

Record, per bot, the last time it produced something a human actually used. Not the last time it ran. Not the last time it produced output. The last time a person took its output and did something with it.

| Bot | Last ran | Last output | Last output a human used | Verdict |
|---|---|---|---|---|
| Researcher | Today | Today | Two days ago | Keep |
| Docs writer | Today | Today | Never | Retire |
| Inbox triage | Today | Today | This morning | Keep |
| Analytics | Today | Today | Five weeks ago | Retire |

The gap between column three and column four is the entire diagnostic. A bot that runs daily and produces daily and has not been useful in five weeks is not idle, which would be obvious. It is busy, which is worse, because it generates activity that looks like value and consumes a slot and a share of the weekly pool while it does it.

## Price a slot against the hour it was supposed to save

A slot is not free even when the subscription is already paid, because the ceiling makes it rivalrous. Occupying one means some other job cannot have it.

So the question for each bot is not "does this save time" but "does this save more time than the job it is displacing would have". That reframing kills most marginal bots immediately, because the marginal bot is usually saving ten minutes a week on something you did not mind doing.

| Slot spent on | Time saved weekly | Job it displaced | Honest verdict |
|---|---|---|---|
| Reformatting a report you never read | 10 min | Objection tracking | Bad trade |
| Pre-reading 40 competitor pages | 3 hours | Nothing, slot was free | Good |
| Drafting a weekly update you rewrite anyway | 20 min | Nothing yet | Marginal, revisit |
| Watching for a signal you would otherwise miss | Unmeasurable | Nothing | Good, keep |

The last row is worth its own note. Some bots earn a slot not by saving time but by catching something rare that you would never have looked for. Those look terrible on a time-saved metric and are often the most valuable thing in the channel. Judge them on whether they have ever caught anything, not on hours.

## Split the channel only when the project actually forks

There is a legitimate reason to open a second channel, and it is not "we ran out of slots". It is that the project became two projects with different owners, different cadences, and different definitions of done.

The test: could the two halves have separate weekly reviews without either review being confusing? If yes, they are two projects and each deserves its own PM and its own five. If no, you are splitting to dodge the ceiling, and you will end up with two PM bots coordinating with each other about work that used to be one conversation.

## Watch for the PM bot quietly becoming a sixth worker

The most common way a roster degrades is not a bad hire. It is the Projects Manager drifting out of its lane one small favour at a time, and nobody noticing because each individual instance looked like helpfulness.

It starts reasonably. Someone asks the PM a question that the researcher would normally answer, but the researcher is mid-run and the PM already has the context, so it answers. That happens again the following week. Within a month the PM is answering roughly a third of the requests directly, the researcher is being handed only the requests the PM found tedious, and the channel has four working bots and a fifth that is now doing an undocumented blend of two jobs.

The damage is not that the PM did the work badly. It usually does the work fine. The damage is that the work stopped being routed, which means it stopped being observable. You can no longer tell which lane is overloaded, because the overflow is being absorbed invisibly. The next time you audit the roster, the researcher looks underused and is a retirement candidate, when what actually happened is that its work was intercepted upstream.

Catching this is straightforward if you look for it deliberately, and nearly impossible if you wait to notice. Once a month, read the last twenty requests in the channel and count how many the PM answered itself versus routed. If the direct-answer share is above roughly one in ten, the lane structure has already eroded, and the fix is a line in the PM charter rather than a new bot.

The line that works is blunt: when a request belongs to a lane, route it even when answering would be faster, and when a request belongs to no lane, say so rather than absorbing it. Speed is not the objective. Observability is. A channel where every request is routed is a channel you can reason about in three months, and a channel where the PM has been quietly helpful is one where the roster data has been wrong for a while and you have been making retirement decisions on it.

There is one legitimate exception worth naming so the rule survives contact with reality. A PM answering a question about the channel itself, meaning who owns what, what the roster looks like, or what is currently blocked, is doing its own job rather than someone else's. That is routing information, not specialist work, and it should not count against the ratio.

## Answer the objection that you should just open more channels

The reasonable pushback: if six is the limit per channel and channels are free, the ceiling is decorative. Open five channels, get thirty bots.

You can, and for genuinely separate projects you should. But the ceiling is doing something the channel count does not. Within one project, six forces the roster question. Across five channels, you have restored the unlimited roster and moved the overlap problem up a level, where it is harder to see: two channels each running a research bot on the same account, drinking from the same weekly pool, neither aware of the other.

Also worth knowing before you fan out: every bot in every channel shares one computer, because the computer is assigned to your account and not to an individual Bot. Screens are separate work surfaces, not separate security boundaries. Five channels do not give you five sandboxes. They give you five sidebars over one machine. If you were opening channels to isolate client work, read [what one shared computer actually means](/blog/grok-bot-one-computer-many-screens) first, because that is not what you are buying.

## Stop using this page when the shape is different

This page is about designing a roster inside one project's ceiling. It stops applying in three cases.

If you have one job and one bot, you do not have a roster problem, you have a charter problem: start at [the starter roster](/blog/grok-bot-starter-roster) instead. If your bots are talking to each other more than to you, the question is coordination, not headcount, and [group chat](/blog/grok-bot-group-chat) covers when that is worth turning on. And if you already have bots across several channels and cannot say which are still earning their seat, do [a fleet audit](/blog/grok-bot-fleet-audit) before you design anything new, because you are probably paying for slots that shipped nothing this month.

For the routing bot itself, [Chief of Staff Router](/bots/chief-of-staff-router) is the charter this page describes. If your channel is a go-to-market project rather than a build, [GTM Chief of Staff](/bots/gtm-chief-of-staff) works the seams between teams instead. When a bot stalls and you cannot tell whether it is waiting or stuck, [Stuck Bot Foreman](/bots/stuck-bot-foreman) sorts that. And if the channel needs a mailbox that is not your personal inbox, [Agent Inbox](/bots/agent-inbox) keeps the launch replies off your primary Gmail.

## Frequently Asked Questions

### How many bots can be in one Grok Bot channel?

Six. A Projects Manager plus five other bots. That ceiling is per channel, and one project maps to one channel, so in practice it is five working jobs per project once the PM takes its seat. The limit is worth treating as a design constraint rather than an obstacle, because five slots forces you to name which recurring jobs are genuinely worth a permanent owner. Rosters without a ceiling tend to accumulate overlapping bots that each do part of a job, with no single bot accountable for any outcome.

### What should I do when the roster is full and I need another job done?

Four honest options. Retire the bot with the oldest last-shipped date, since a bot that has produced nothing a human used is already costing you a slot. Merge two charters when two bots read the same source for different reasons. Add the work as a routine on a bot you already hold, because a recurring task needs a schedule, not a seat. Or open a second channel if it is genuinely a second project. The option to avoid is absorbing the work yourself indefinitely and never recording that the roster was one short.

### Does each bot in a channel get its own computer?

No. The computer is assigned to your user account, not to an individual Bot, and every bot on the account shares it. Each bot gets its own screen on that machine, which the documentation describes as a separate work surface rather than a separate security boundary. This matters most when you are tempted to use channels or bot names to separate client work or credentials. Signed-in browser sessions, files, and command-line credentials are visible across bots on the same account, so a second channel is not a second sandbox.

### What does Blocked mean and when should a bot use it?

Blocked is the status a bot sets when it cannot proceed without a human decision, and it pings a human in the channel. Its value depends entirely on being rare. A bot that pings on completion, on start, and whenever it is uncertain has trained you to ignore the channel within a week. Reserve it for genuine stops: two sources that disagree and need a judgment call, an expired login the bot cannot refresh, or a request that falls outside every charter in the roster and therefore needs a roster change.
`,
};
