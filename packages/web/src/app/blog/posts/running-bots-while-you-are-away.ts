import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Two Weeks Off With Bots Still Running',
  description:
    'Bots keep working while you are on holiday, and approvals do not. What to pause, what to hand over, and the two failures that only appear when nobody is watching.',
  date: '2026-09-02',
  category: 'Playbook',
  content: `
# Two Weeks Off With Bots Still Running

The pitch for a bot is that it works while your laptop is shut. The version of that nobody plans for is that it also works while you are on a beach with no laptop at all, no intention of opening one, and no phone signal for six hours a day.

The bots do not know you are away. Routines fire on schedule, approval requests queue up against a person who is not reading them, and anything that was quietly depending on you noticing something is now depending on nothing.

## Sort the roster by what happens when nobody answers

Before deciding anything, put every bot in one of three buckets. The question is not what it does, it is what happens if it needs a human and none arrives for two weeks.

| Bucket | Behaviour with no human | Action before you go |
|---|---|---|
| Runs and produces, needs nobody | Keeps working, output accumulates | Leave running |
| Stops and waits for approval | Queues silently, work does not happen | Pause it or hand over the approval |
| Acts on a schedule with real consequences | Keeps acting, unwatched | Pause, or hand to a named person |

Almost every roster has bots in all three, and the middle one is where people are most often surprised. A bot that stops and waits looks safe, and it is safe, but the work it was doing simply is not happening, and you will return to a fortnight of it.

## Understand that pausing is not the same as it being safe

Pausing stops the routine. It does not clear what is already signed in on the shared computer, and that is the thing most likely to matter while you are away.

Every bot on the account shares one persistent cloud computer. Browser sessions, cookies and command line credentials sit on it and are visible across bots, and pausing one bot does not sign anything out. If a bot was signed into an admin console, that session is still there and still usable by anything else running on that account for the whole fortnight.

So the pre-holiday pass is two separate jobs. Pause what should not run, and separately, sign out of anything that should not sit logged in unattended. The second is the one people skip because pausing feels like it covered it.

## Hand approvals to a person, not to a rota

If a bot must keep running and it needs approvals, one named person holds them. Not the team, not whoever is around, not a shared inbox.

The failure with a rota is specific and predictable: approval requests arrive, everyone assumes someone else is on it, and the queue grows for four days before anyone checks. A single name means the queue is somebody's problem the day it starts.

That person needs three things, and giving them fewer produces a rubber stamp rather than a reviewer.

1. **The charter text**, so they can see what the bot is supposed to refuse. Approving is meaningless without knowing the boundary.
2. **What a normal request looks like**, ideally two or three real examples from the last fortnight, so an abnormal one is visible as abnormal.
3. **Explicit permission to say no and let it wait.** Without this they will approve rather than block your work, which is the opposite of useful.

## Write the away-charter amendment before you leave

Rather than reconfiguring bots, add a temporary block to the charter and remove it when you return. It is faster, it is visible to whoever is covering, and it does not lose the original setup.

\`\`\`
AWAY MODE, active 12 to 26 September. Remove this block on return.

While this block is present:
1. Approvals go to Dev, not to the usual operator. Dev may decline
   or defer anything. A deferred item waits; it does not proceed.
2. Do not send anything externally, to anyone, for any reason.
   Drafts accumulate and are reviewed on the 26th.
3. Do not start any job you cannot finish in one run. A job that
   would normally span two days is not started.
4. If a source is unreachable, report could-not-read and stop.
   Do not retry beyond twice, and do not find an alternative source
   without approval.
5. If anything is ambiguous, stop and write it to the queue rather
   than choosing. Ambiguity resolved by a bot with nobody watching
   is the specific risk this block exists for.
\`\`\`

Rule five is the one that earns its place. The ordinary operating assumption is that a slightly wrong choice gets caught on review within a day. For a fortnight that assumption is false, so the bar for acting alone has to rise.

## Watch a weekly report run four times into an empty room

Ana went away for two weeks and left everything running, on the reasoning that nothing she had was dangerous. That was correct and it was not the problem.

Her Monday report bot assembled a summary every week and posted it to a shared doc, where her team read it in a Monday meeting. The meeting did not happen while she was away, because she ran it. The bot posted on the 15th and the 22nd into a document nobody opened.

That is harmless. What was not harmless was the account brief bot, which prepared a customer brief every morning from a live pricing page. On day four the pricing page moved behind a login. The bot reported what it could still read, which was less, and the briefs got quietly thinner for ten days while looking exactly as authoritative as before.

She came back to eight briefs that were confidently incomplete, and had already been read by two colleagues who had no way to know they were degraded.

Nothing errored. Nothing alerted. The failure was silent by construction, and the only thing that would have caught it was a human noticing the briefs had got shorter, which is precisely what nobody was doing.

## Add a heartbeat that fails loudly instead of quietly

The lesson from that is worth generalising. The dangerous bots while you are away are not the ones that break. They are the ones that half-work and keep reporting.

The cheap defence is to require every unattended bot to state, in every output, which sources it successfully read and which it could not. Not a status page you would have to check, a line in the artefact somebody is already reading.

| Failure shape | What it looks like unattended | What the source line does |
|---|---|---|
| Bot stops entirely | No output arrives | Absence is noticed within a day |
| Bot errors visibly | Error in the output | Already visible |
| Source becomes unreadable | Thinner output, same confidence | Line shows the source as unread |
| Source returns nothing | A zero that reads as good news | Line distinguishes zero from unread |

The last row is the one that catches Ana's case. A number that is genuinely zero and a number that could not be read look identical in a report and mean opposite things.

## Decide what a returning operator reads first

Two weeks of accumulated output is its own problem. If your first act back is reading fourteen daily briefs, you will skim all of them and the one that mattered will pass unread.

Ask for a return summary instead. One bot, one job: on the day you come back, produce a single document listing what ran, what failed, what was deferred by whoever held approvals, and anything that changed shape mid-fortnight. Everything else stays available but unread.

The specific instruction that makes this useful is to lead with what did not happen. What was deferred, what was blocked, which sources went unread. The things that ran normally are the least informative part and they should be one line at the bottom.

## Turn tight cadences down before you go, not after

A five minute polling loop is expensive when you are watching it and pointless when you are not, because nobody is going to act on a five minute signal for a fortnight.

Going away is the natural moment to ask what latency each job actually needs, and the answer while you are away is almost always daily. Turning a five minute loop down to daily for two weeks is a very large reduction in consumption for zero lost value, since the value of speed was the ability to react quickly and nobody is reacting.

Write the date you will turn it back up in the same edit. Cadences changed for a specific period and never restored are the most common form of drift, and a holiday is exactly the kind of specific period that gets forgotten.

## Expect the queue to be the thing that breaks, not the bots

When people imagine this going wrong they picture a bot doing something dramatic. In practice the failure is almost always administrative: a queue of approvals nobody processed, so a fortnight of work sits undone, and the first three days back are spent on things that should have happened on day two.

That is a better failure than the dramatic one, and it is still worth avoiding. The fix is the named approver plus the rule that they may decline. A queue with an owner who is allowed to say no drains. A queue with an owner who feels obliged to approve everything is not a queue, it is a delay before automatic yes.

## Do the pass a week early, not the night before

The timing of this matters more than the checklist, and almost everyone gets it wrong in the same direction.

Done the evening before you leave, the pass becomes a rushed pause of everything you can remember, which is the bots you use daily, which are the ones least likely to cause trouble. The ones that matter are the ones you have stopped thinking about, and you will not think about them at eleven at night while packing.

Done a week early, two useful things happen. You still have a working week to notice what you missed, because a bot you wrongly paused will announce itself when somebody asks where the report went. And the person holding approvals gets to practise while you are still reachable, which converts their first real decision from a cold start into a second attempt.

| When you do it | What tends to happen |
|---|---|
| Night before | Pause what you remember, miss what you forgot |
| Morning of | Nothing, in practice, because the day fills |
| One week before | Mistakes surface while you can still fix them |
| Two weeks before | Fine, but the roster may change again before you go |

A week is the sweet spot. Long enough for errors to surface, short enough that the roster you prepared is the roster that runs.

## Write down what you paused, or you will not restore it

The return problem is quieter than the departure problem and it costs more over time.

You come back, catch up on two weeks of everything else, and the paused bots stay paused. Not by decision, just by nobody remembering. Three weeks later somebody asks why the weekly competitor summary stopped and the answer is that it stopped in September and nobody noticed for a month.

So the pause list is a written artefact with a restore date on it, kept somewhere you will actually look on your first day back. One line per bot: what it was, why it was paused, and whether it should come back automatically or be reconsidered.

That last distinction is worth making at the time rather than on return. Some bots you paused because they were unsafe unattended, and those come straight back. Others you paused and then realised nobody missed, and those deserve a conversation rather than an automatic restore. Deciding which is which while the reasoning is fresh saves you re-deriving it a fortnight later with worse recall.

## Treat the fortnight as free evidence about what you actually need

There is a genuine benefit hiding in all of this, and it is worth harvesting deliberately.

Two weeks with parts of the roster paused is the cleanest natural experiment you will ever get about which bots matter. Nobody set it up as a test, nothing was tuned for it, and the result is honest: the bots people asked about are the ones that matter, and the ones nobody mentioned for a fortnight are telling you something.

So on your return, before restoring anything, write down which paused bots anybody actually chased. Usually it is fewer than half. That list is better evidence than any usage metric, because it measures whether a human missed the output rather than whether the output was produced.

Fold it into the next roster cull rather than acting on it immediately. A single quiet fortnight is not proof, particularly if it fell over a period when the work was seasonal. But it is a strong signal, it cost nothing to gather, and it is the kind of evidence that is otherwise very hard to come by.

## Check what fires on a schedule you forgot you set

One last sweep before you go, and it catches the thing the bucket exercise misses.

The three buckets ask what a bot does when it needs a human. They do not ask what fires without needing one, and a fortnight is long enough for monthly and fortnightly schedules to come around. A month-end routine that runs on the 30th is invisible on the 12th when you are packing, because it has not run since August and will not run again until you are back.

| Cadence | Fires during two weeks away? | Usually remembered? |
|---|---|---|
| Hourly or daily | Yes, many times | Yes |
| Weekly | Yes, twice | Yes |
| Fortnightly | Yes, once, possibly on your last day | Rarely |
| Monthly | Maybe once, depending on dates | Almost never |
| Quarterly | Only if you are unlucky | Never |

The monthly ones are the risk. They tend to be the consequential routines, invoicing summaries, reporting packs, renewal checks, precisely because they are tied to a business cycle rather than a working rhythm. And they are the ones you have least recent memory of, since the last time you watched one run was four weeks ago.

Read the full routine list sorted by cadence rather than by bot, and look specifically at everything slower than weekly. It takes two minutes and it is the only reliable way to catch a routine that has not fired recently enough to be in your head.

## Answer the objection that you should just pause everything

The clean version: pause the entire roster, enjoy the holiday, unpause on return. No approvals to hold, no unattended action, no risk. Why complicate it?

For a small roster of bots that only serve you, that is genuinely the right answer and you should do it. The complication only earns its place when bots are serving other people.

If a support triage bot is drafting replies your colleagues send, pausing it means your colleagues do the drafting for two weeks, and you have exported your holiday to them. If a monitoring bot watches something that matters to the business, pausing it means nobody watches for a fortnight. In both cases the pause is not free, it just moves the cost somewhere less visible.

So the rule is: pause anything that only serves you, and hand over anything that serves someone else. The middle category, bots that produce something a colleague reads but does not depend on, is where judgment is needed, and pausing is usually still right there.

Where the objection wins completely: if you are unsure and nobody has volunteered to hold approvals, pause. An unattended bot with no owner is worse than a fortnight of the job not happening.

## Stop using this page when the shape is different

This page is about a planned absence with bots left running. It stops applying in three places.

If somebody is leaving permanently rather than going on holiday, that is a handover and not a pause, and [taking over someone else's bot](/blog/the-bot-nobody-owns) covers the ownership question underneath it. If the concern is a bot acting overnight on an ordinary week rather than during an absence, [on-call](/blog/grok-bot-on-call) is the stronger version of the same requirement. And if you are turning cadences down to save consumption rather than for safety, [the attribution page](/blog/which-bot-spent-the-week) has the wake ledger that tells you which ones to turn down.

Bots that help: [Chief of Staff Router](/bots/chief-of-staff-router) is where an away-mode block and the named approver should be recorded. [Stuck Bot Foreman](/bots/stuck-bot-foreman) distinguishes a frozen bot from a working one, which matters most when nobody is watching. [Bot Advisor](/bots/bot-advisor) reviews the roster and names what went silent. And [Agent Inbox](/bots/agent-inbox) keeps unattended mail work off a personal mailbox.

## Frequently Asked Questions

### Should I pause every bot before going on holiday?

Pause anything that only serves you, and hand over anything that serves someone else. For a small personal roster, pausing everything is genuinely the right answer and the simplest one. The complication only earns its place when colleagues depend on the output: pausing a triage bot that drafts replies your team sends does not remove the work, it moves it onto them, so you have exported your holiday. If you are unsure and nobody has volunteered to hold approvals, pause anyway, because an unattended bot with no owner is worse than the job not happening.

### Does pausing a bot make the account safe while I am away?

No, and this is the most common misunderstanding. Pausing stops the routine from running. It does not sign anything out. Every bot on the account shares one persistent cloud computer, and browser sessions, cookies and command line credentials sit on it visible across bots. A session a paused bot was using is still live and still usable by anything else on that account for the whole fortnight. Treat it as two jobs: pause what should not run, then separately sign out of anything that should not sit logged in unattended.

### Who should hold approvals while I am away?

One named person, never a rota or a shared inbox. With a rota, requests arrive and everyone assumes someone else is handling them, so the queue grows for days before anyone checks. Give that person three things: the charter text so they can see what the bot is supposed to refuse, two or three real examples of a normal request so an abnormal one stands out, and explicit permission to decline and let things wait. Without that last one they will approve rather than block your work, which defeats the purpose.

### What is the failure I am most likely to miss?

A bot that half-works and keeps reporting. Bots that stop are noticed because output stops arriving, and bots that error are noticed because the error is in the output. The dangerous case is a source that becomes unreadable partway through, after which the bot reports what it can still see and the output gets quietly thinner while looking equally authoritative. Defend against it by requiring every unattended bot to state, in every output, which sources it read and which it could not, and to print could-not-read rather than zero.
`,
};
