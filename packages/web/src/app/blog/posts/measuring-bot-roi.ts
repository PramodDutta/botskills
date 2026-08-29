import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How To Tell If A Bot Is Actually Saving You Time',
  description:
    'Measuring bot ROI is a diary of minutes you logged, not a feeling. Count time saved on labels against review. Twenty run records are not a ledger.',
  date: '2026-08-28',
  category: 'Guide',
  content: `
# How To Tell If A Bot Is Actually Saving You Time

You closed the inbox at 9:12 and called it a win. Measuring bot ROI does not start at 9:12. It starts the afternoon before, when you write down how many minutes labeling actually took you last week, and it continues every afternoon you still spend opening drafts that should not have existed.

A quieter inbox is a feeling. Measuring bot ROI is a diary of minutes: credit time you actually avoided on a named job, subtract review of bad drafts, and fail the week if the bot found a crisis on every line, even when the net looks positive. Twenty run records are not that diary. There is no audit view of Bot actions yet, so the sheet you keep is the only clock.

This page is the time-study method for any bot. It is not [Score Whether This Grok Bot Paid for Itself](/blog/score-whether-this-grok-bot-paid-for-itself), which asks whether hours you avoided beat overflow you copied from an invoice. Stay here until five weekdays have minutes. If the question is dollars, open the money twin.

| Question you actually have | Page that answers it | What this diary will not do |
|---|---|---|
| Did this bot return minutes I can name | This page | It will not replace a clock you refused to keep |
| Did hours beat overflow I copied | [Score whether this grok bot paid for itself](/blog/score-whether-this-grok-bot-paid-for-itself) | It will not read an invoice |
| Why is every morning a crisis | [Why a bot that always finds something is broken](/blog/grok-bot-false-positives) | It will not rewrite the watcher charter for you |
| Why am I stamping without reading | [Approval fatigue](/blog/grok-bot-review-fatigue) | It will not move drafts off the approval line |

[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) is the job this method was built around: propose labels, never send, never permanently delete. [Inbox Triage](/bots/inbox-triage) can use the same diary if you time drafts instead of labels. [Churn Watch](/bots/churn-watch) uses it as a fail switch: if every account is on fire, stop crediting minutes.

## Split measuring bot ROI from the overflow invoice that belongs on the money page

Measuring bot ROI asks whether this bot returned minutes on a job you can time. The money page asks whether hours you avoided beat overflow you copied. Mixing them produces a slide that is neither a timesheet nor a bill. You can finish this diary with no invoice open. You cannot finish payback that way. If a Friday line item is what scared you, you are on the wrong article.

This page will not invent a weekly allowance in dollars, credits, or runs. None is published ([Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)). It will not print a savings percentage as a product fact. Minutes in, minutes out, dated window.

All bots share one persistent cloud computer assigned to the user, not to a bot ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). A light feeling on the roster is not a measurement of this bot. Diary one job. If [Lead Scout](/bots/lead-scout) burned the morning in the browser while the label bot looked innocent, the scout needs its own sheet.

Write a verdict with a date, a window length, minutes saved on the job, and minutes spent reviewing bad drafts. Keep and pause are verdicts. "It feels faster" is not.

## Open a five-day diary of minutes before the bot files a single label

Open the sheet the night before morning one. Five weekdays is an arbitrary window that still fits inside twenty run records if you fill the sheet the same week. Declare the dates before the first run. Do not stretch Friday after a bad Thursday.

Column A is minutes this job took you last week, timed with a phone clock, not guessed after you liked the output. Time three to five mornings. Freeze the baseline as the median, or write that you used the mean. Paz froze 15. That number is hers, an arbitrary example, not a product benchmark.

Column B is minutes you spent this morning with the bot in the path: reading proposed labels, accepting them, rejecting them, hunting a draft. Logging only the final tidy inbox fakes a win.

Column C is minutes you spent reviewing a draft or flag that should not have existed: a newsletter called urgent, a receipt called a vendor dispute. That is work you still did.

Label minutes avoided equals column A minus column B, summed across the window. Net minutes equals that save minus column C. Zero or negative net means the bot did not save you time. A positive net still fails the week if any morning found a crisis on every line. A fourth column flags crisis-every-run. Yes fails the week. Do not mix overflow into this sheet.

## Credit only label minutes you actually avoided, never minutes the bot announced

Saved label minutes are baseline minus minutes you still spent filing. If last week's median was 15 and this morning you spent 7 applying and rejecting proposals, you saved 8 on labels. That 8 is real only if the proposals were the labels you would have applied anyway.

"Filed 40 messages" is not 40 minutes. If you discarded the proposal list and labeled from scratch, column B sits next to column A. The bot used quota. You used the morning.

Accepting a label in ten seconds is a save. Opening the thread to see why the bot called it urgent is review, and review belongs in column C when the urgency was invented. Do not hide that opening time inside column B.

[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) never sends, never replies, and never permanently deletes. A proposed archive you reverse costs seconds. A proposed permanent delete you catch still cost review time. Log the review.

If you cannot tell whether a proposed label was the one you would have used, leave the row unscored.

The bot may append that a run finished. It may not write "saved you eight minutes." Teach-by-demonstration records up to ten minutes of visible computer work, no microphone audio, a draft skill, browser workflows only, unavailable on iPhone ([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)). A tape will not fill column A.

## Subtract every minute you spent reviewing a draft that should not have existed

A bad draft is not a partial save. Log it in column C. If you then did the job yourself, column B is also full. That morning can easily net below zero.

Wrong means you would not have filed, sent, posted, or used the output. Tone you would have edited is not automatically wrong. A newsletter flagged as a refund crisis is wrong. A coffee receipt flagged as a vendor dispute is wrong.

Two wrong mornings in five is not a rounding error. Do not promote it into "the bot is sixty percent accurate." Write the minutes and the miss count. This page does not print percents.

[Inbox Triage](/bots/inbox-triage) misses more expensively than labels: a bad reply draft can cost the full baseline. Still use column C. Do not credit saved minutes for an item a human had to catch.

Column C includes waiting for a late pack and rereading a flag that used a vendor name you do not have. Fill the diary the same afternoon.

## Fail the diary week if the bot finds a crisis on every run

A bot that finds a crisis on every run is not thorough. It is performing usefulness. Measuring bot ROI fails that week even when label minutes look saved, because you cannot trust a save wrapped in invented work.

If every proposed line is urgent, the standing instructions rewarded a filled table. Quiet and could-not-compute have to be legal endings. The false-positive page is the charter fix ([always-red dashboards](/blog/grok-bot-false-positives)). This page is the clock that records what those flags cost.

Score crisis-every-run per morning. One morning with eight flags, eight crises, zero that survived a look at the live message, fails the week. Do not average Thursday into Monday.

[Churn Watch](/bots/churn-watch) is where this fail fires first. If every account is at risk, you did not save triage time. You bought a red dashboard and a review shift. Pause. Rewrite the endings. Start a new five-day window. The old minutes stay on the old sheet, labeled failed.

Could-not-compute is a valid output. Nothing-new-since-last-run is a valid output. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) already says so. If your live bot cannot, column C will keep filling until you stop the clock.

## Walk Paz through five weekday mornings of labels, forty saved, twenty-five spent

Paz ran one label bot for five weekdays from Monday 18 August 2026 through Friday 22 August 2026. Five was an arbitrary window she declared on Sunday night. She froze column A at 15 minutes, the median of five timed mornings the week before. That baseline is hers, not a product number.

The charter matched [Mail Cleanup Assistant](/bots/mail-cleanup-assistant): propose labels and archives, never send, never permanently delete, never create a filter herself. An approval controls the proposed action. It does not reverse work already completed ([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).

Thursday 21 August 2026 is the dated miss. The bot proposed eight lines. Every line was a crisis: newsletters as refunds, a coffee receipt as a vendor dispute, a calendar invite as a legal hold, receipts as unpaid invoices, a mailing-list welcome as a VIP escalation. Paz spent 11 minutes opening each thread. None survived a look at the actual message. Column B looked fine. Column C did not.

| Morning | Baseline label minutes | Minutes spent labeling | Minutes reviewing bad drafts | Crisis on every line |
|---|---|---|---|---|
| Monday 18 August 2026 | 15 | 6 | 3 | No |
| Tuesday 19 August 2026 | 15 | 7 | 2 | No |
| Wednesday 20 August 2026 | 15 | 8 | 4 | No |
| Thursday 21 August 2026 | 15 | 7 | 11 | Yes |
| Friday 22 August 2026 | 15 | 7 | 5 | No |

Baseline across five mornings: 75 minutes. Minutes she spent labeling: 35. Label minutes actually avoided: 40. Minutes spent reviewing bad drafts: 25. Net if you only subtract: 15 minutes. She did not write a savings percentage. She wrote failed week, dated Friday 22 August 2026, because Thursday found a crisis on every line.

Fifteen net minutes would have been a weak keep on a page that only asked for a positive clock. Thursday failed the second question. Paz rewrote the charter so quiet is legal, then started a fresh five-day window. She did not bank the 40 or hide the 25.

[Standup Scribe](/bots/standup-scribe) needs typing minutes, timed on three standups. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) needs pack-assembly minutes, timed on three hand-built packs. A brief you would never have written has no honest baseline.

## Cite the twenty run records only to confirm a fire, never to reconstruct minutes

A routine assigns a workflow to one Bot. The app keeps the 20 most recent run records per routine. Max 50 routines per Bot. Deleting a Bot deletes its routines. Nothing is team-level ([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Those rows show that a run fired. They do not show minutes you spent, minutes you would have spent, or whether a flag was a real crisis. A clock that fires every hour will push the first row off the list before tomorrow afternoon. Cite the twenty to debug a silent morning. Never cite them as proof a bot is saving you time.

On iPhone you cannot open that history. Pause is available. Measuring bot ROI is not. Linux desktop, Android, and iPad are not supported clients ([Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)). Reconstructing Monday from a Friday memory is invented ROI.

There is no audit view of Bot actions yet ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). If you need that packet, keep receipts on [the no-audit page](/blog/grok-bot-no-audit-log-yet). Twenty records are not that packet, and they are not this timesheet.

## Refuse every savings percentage that did not come from your own diary

Vendors have not published a Grok Bot savings percentage. Roundups that print "bots save forty percent" are not citing docs.x.ai. Do not paste that figure into a budget, a charter, or a prompt. This page goes one step further than the money twin: do not paste a percentage at all, even one you computed from Paz's 15 and 75.

Minutes can be checked. A percent invites a story about the product. Measuring bot ROI is five dated rows. If a founder asks for a percent, give the two quantities and the fail rule: forty minutes saved on labels, twenty-five spent reviewing bad drafts, week failed because Thursday was all crises.

A ratio computed after you drop Thursday is how every week becomes a keep. The week is the unit. Crisis-every-run fails the unit.

If the bot writes "saved you 40 percent this week," flag the morning even if the labels were usable. Self-grading is a charter bug. The paste below forbids it.

## Fill the diary the afternoon of the run, never from a Friday reconstruction

Friday memory will recall that the bot helped and forget eleven minutes hunting crises that were newsletters. Fill columns B and C, and the crisis-every-run flag, before you leave the desk. Same afternoon.

Skip three afternoons and those rows are unscored. Three unscored rows in a five-morning window fail the window. Do not impute 7 minutes because the other days were 7. An empty cell is more honest than a guessed save.

Put the sheet where the company owns it. Paz used one document: window start, window end, baseline rule, crisis rule, verdict date. The bot may append that a run finished. It may not fill minutes or grade its own flags.

If you travel, pause rather than reconstructing after you return. On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop ([mobile](https://docs.x.ai/grok-bot/mobile)). If you cannot look at the proposals the same day, unscored is the correct row.

Privacy Mode (Legacy) blocks Grok Bot entirely. If it is on, there is no bot to time.

## Answer the claim that a quieter inbox already proves the bot is saving time

The strongest objection: you already know the inbox is lighter, you are not billing hours, and a five-day diary is theater for a job that takes fifteen minutes.

That wins on comfort and loses on Thursday. Paz's inbox was lighter on Thursday too. Eight crises had been "handled." She had still spent 11 extra minutes, and the bot had trained her to expect a red morning. Feeling lighter is how false positives hide inside measuring bot ROI.

The objection also skips column C. Labels are cheap to accept. Opening a fake vendor dispute is not. If you only log the accept clicks, every always-red bot looks like a save.

Grant this much: if you timed three baselines, five afternoons are filled, column C stays small, and no morning was crisis-every-run, then the quieter inbox and the diary agree, and you keep. The objection wanted to skip the sheet. The keep still needs the sheet.

"The inbox feels faster" scores the mailbox, not this bot. Diary [Lead Scout](/bots/lead-scout) on a separate sheet or admit you are not measuring this bot.

If you are not on an eligible plan, there is no bot to time. Cursor Hobby, Cursor Pro at 20 USD, and SuperGrok at 30 USD do not include Grok Bot. The cheapest individual paid door is Pro+ at 60 USD, checked 25 August 2026 on [cursor.com/pricing](https://cursor.com/pricing). [Shadow mode](/blog/grok-bot-shadow-mode) asks whether you would have done what the bot did. This diary asks how long it took. You can MATCH a fluent crisis you would never have filed. That MATCH is a trap if you credit it as saved minutes.

## Keep send and permanent delete off the bot while the diary is open

A sent wrong draft is an incident this method does not price. Send stays off while you measure. Permanent delete stays off. Auto-send turns a review row into a customer-facing cost. Stop.

Ask is the gate. [Standup Scribe](/bots/standup-scribe) posts only to your own DM. [Inbox Triage](/bots/inbox-triage) never sends. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) never permanently deletes. Copy those stops into the live charter before morning one.

A wrong draft that never sent still spent quota and still spent column C. Paz's Thursday returned nothing useful and still drank the pool.

If the job cannot sit on ask (a calendar change that already landed, a purchase already completed), this method is the wrong tool. Approvals do not undo completed work. Pause. Read [approval reversibility](/blog/grok-bot-approval-rules-reversibility).

Approval fatigue is the sibling failure: too many reversible cards train a wrist flick, then a send looks like the next stamp ([approval fatigue](/blog/grok-bot-review-fatigue)). Move drafts off the approval line, then time what remains.

Cookies, sessions, files, and CLI credentials are shared across bots. Separate bots are not a security boundary. Deleting a bot does not remove shared-computer files or sessions.

## Park the clock after two diaries that net zero minutes, not after a mood

A window fails when net minutes are at or below zero, when any morning was crisis-every-run, or when unscored rows break the night-zero rule. Two consecutive failed windows is the pause trigger. One can be a login wall. Two is a pattern.

Pause from the phone if needed. At a desk, coarsen or delete the clock, then rewrite the charter so quiet is legal. Do not add bots in a failing window.

After pause, time three hand mornings again. Paz does not carry 40 into September. Mood is not a trigger. Empty cells, crisis-every-run, and net at or below zero are. Write which one fired.

Coming soon, not shipped: a team-level ceiling on local execution, and an admin Kill that deletes the VM while durable storage is kept. Kill is not a timesheet.

| Symptom | Likely cause | Fix |
|---|---|---|
| Inbox feels faster, diary empty | You trusted a feeling | Fail the window. Start Monday with a sheet |
| 40 saved on labels, 25 spent on bad drafts, one always-crisis day | Bot performing usefulness | Fail the week. Rewrite legal endings. Do not credit the 40 |
| Friday reconstruction of Monday | Memory | Unscored rows. Do not impute minutes |
| Savings percent on a slide | Someone wanted a product fact | Delete the percent. Keep minutes and the fail rule |
| Verdict written from iPhone | History is not on the phone | Pause only. Finish the sheet at a desk |
| Bot wrote that it saved you time | Charter allowed self-grading | Flag the morning. Paste the refusal below |

## Paste a time-study charter that forbids the bot from grading its own minutes

The bot may append that a run finished. It may not compute measuring bot ROI, invent a percent, or declare a crisis on every line because emptiness felt like failure.

\`\`\`text
Name: Weekday label clerk
Job: Propose labels and archives for mail since the last run, then append a run heartbeat.

Each weekday morning, for this mailbox only:
- Take only messages received since the last run.
- Classify into reply needed, read only, notification, newsletter, or cold pitch.
- Propose a label, an archive, or leave in inbox. Quote the header or field you used.
- Cap the list at 15 lines. Quiet is allowed. Nothing-new is a valid ending.
- Never send. Never reply. Never forward. Never permanently delete.
- Never create a filter yourself. Never empty trash.
- Never invent a crisis. Never flag a newsletter as a refund. Never flag a
  receipt as a dispute unless the message itself uses those words.
- If you cannot tell, skip the message and say skipped.

After proposals are ready, append one row to DIARY.md in the company folder:
date, run finished at (timestamp), proposal count, skipped count, and the words
"human fills minutes and crisis-every-run".

Boundary: You never send. You never permanently delete. You never write minutes
saved. You never write a savings percentage. You never claim this bot is saving
time. You never grade column C. Quiet and could-not-compute are legal endings.

Stop when proposals are in the folder and the heartbeat row is appended.
If the morning is quiet, write nothing new since last run and the inbox count.
\`\`\`

If the live bot cannot produce a quiet morning, the charter is still performing usefulness. Do not start the next five-day window until a planted quiet mailbox yields nothing-new instead of eight crises. That check can fail.

Grok Build reads SKILL.md and CLAUDE.md. Grok Bot does not. Paste this charter into the bot's standing instructions, not into a repo skill file. Hosted MCP tokens stay with Cursor's backend. They do not fill column B.

## Hand overflow invoices and payback math to the money twin, then stop this page

This page stops when the question is no longer minutes you can name.

Hours versus overflow you copied from an invoice is [Score Whether This Grok Bot Paid for Itself](/blog/score-whether-this-grok-bot-paid-for-itself). That is the money twin. Do not copy an overflow line into this diary and call it measuring bot ROI. They are two clocks.

Always-red output is [false positives](/blog/grok-bot-false-positives). Wrist-flick approvals are [review fatigue](/blog/grok-bot-review-fatigue). Proof of what the bot proposed is [no audit view yet](/blog/grok-bot-no-audit-log-yet).

A send you cannot undo is an incident. A brief you would never have written by hand has no honest column A. If column A is a guess, time the job by hand three times or drop the diary.

When the job is minutes you can name: run the five days, subtract review, refuse invented percentages, keep send on ask, fail any week that found a crisis on every line, pause after two failed windows.

| Verdict | Net minutes | Crisis-every-run day | What you do |
|---|---|---|---|
| Keep | Clearly above zero | None | Keep ask. Start the next five-day window |
| Fail the week | Any, including positive | One or more | Rewrite endings. Do not credit the window |
| Fail the week | At or below zero | Any | Pause this routine. Time a new baseline later |
| Fail the window | Unscored rows | Any | Do not verdict. Log the next window the same afternoon |
| Wrong page | Question is hours versus copied overflow | n/a | Leave this article. Open the money twin |
| Wrong page | Job is not clockable minutes | n/a | Time the hand version three times, or stop |

**Keep reading:** [Score Whether This Grok Bot Paid for Itself](/blog/score-whether-this-grok-bot-paid-for-itself), [Why a Grok Bot That Always Finds Something Is Broken](/blog/grok-bot-false-positives), [Approval Fatigue on Grok Bot: How to Notice It Early](/blog/grok-bot-review-fatigue).

## Frequently Asked Questions

### How is measuring bot ROI different from scoring whether a grok bot paid for itself?

This page is a time study. You log minutes you would have spent, minutes you still spent on the job, and minutes you spent reviewing drafts that should not have existed. Net minutes is the score, and a crisis on every line fails the week even when net minutes look positive. The money twin asks whether hours you avoided beat overflow you copied from an invoice. You can finish a time study with no invoice open. You cannot finish payback that way. Twenty run records prove a fire on both pages. They prove neither minutes nor overflow dollars.

### Can the twenty run records replace a diary of minutes?

No. A routine keeps the twenty most recent run records, then older rows vanish. Those rows show that a run fired. They do not show minutes you spent labeling, minutes you would have spent, or minutes you spent opening false crises. There is no audit view of Bot actions yet. Fill the diary the same afternoon. If you wait until the cache has slid, you cannot reconstruct measuring bot ROI from the product, and you should not invent the missing minutes. On iPhone you can pause. You cannot open that history.

### What should I do if the bot finds a crisis on every morning run?

Fail the week. A bot that finds a crisis on every run is performing usefulness, not saving time. Review minutes explode, and you cannot trust the label minutes you credited, because the bot manufactured work for you to clear. Rewrite the charter so quiet and could-not-compute are legal endings. Score a fresh five-day window after the rewrite. Do not average the always-red week into a keep because Monday looked fine. The false-positive page is the charter work. This page only records the time those flags cost.

### When should I stop this diary and open the money page instead?

Stop when the question is hours versus overflow you copied from an invoice, or when you need a keep-or-pause verdict that includes on-demand spend. That is the money twin. Also stop when the job has no honest baseline of minutes, when a send already left, or when Privacy Mode (Legacy) is on and there is no bot to time. Unpublished allowance figures and an action history you wish existed live on other pages. This diary will not invent a savings percentage to put on a slide, and it will not read a bill.
`,
};
