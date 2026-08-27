import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Read a Bot Listing Before You Paste It Into Grok Bot',
  description:
    'Evaluate grok bot prompt listings by the never-list, the evidence rule, and the send line. A listing without a boundary is not paste-ready. Start there.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# How to Read a Bot Listing Before You Paste It Into Grok Bot

The catalog card already wants you to paste. That is the product. It is also how a send hides inside a verb like handle, and how a mood like be careful stands in for a never-list.

botskills.sh sells paste-ready bots. Paste-ready means the listing has a job you can fail and a boundary you can quote. It does not mean the standing instructions match your mailbox or the weekday routine you have not written yet. A listing is a starting prompt. A charter is what you paste after you have read it.

This page teaches the read. It is not [how to write the seven-block charter](/blog/how-to-write-a-grok-bot-charter-2026). It is not [the paper sheet before mail](/blog/grok-bot-preflight-checklist). It is not [the evidence block itself](/blog/grok-bot-evidence-rules). Primer: [what a Grok Bot is](/blog/what-is-a-grok-bot). Disk: [the shared computer](/blog/grok-bot-shared-computer-security). Evaluate grok bot prompt listings on four fields: job, never, evidence, heartbeat. Skip any of the four and you are pasting a demo.

## Treat a catalog card as a starting prompt, never as a finished charter

A card is written to be copied. The title is a role. The description is a promise. The tags are search. None of those lines is the instruction a 07:00 routine will load.

Grok Bot does not read SKILL.md or CLAUDE.md. Those files belong to Grok Build. A listing saved as a file on the Agent Computer is a document every other bot on the account can open. All bots share one persistent cloud computer assigned to the user, not to a bot. Each bot gets a screen. Screens are not security boundaries.

Frontmatter is regex-parsed: single-line values, inline arrays like [gmail, slack] only. Block lists parse as empty. The field named boundary is required schema. A listing without that field is not paste-ready.

Read in this order: boundary first, then the job in the body, then never, then whether evidence and heartbeat exist as named rules. Description is how you found the page. It is not how the bot will behave after you schedule.

A finished charter names your mailbox, your company, your owner, and a heartbeat path you can open from a laptop. A catalog listing cannot know those. The honest sale is a starting point with a stop verb. The dishonest read is paste, connect, schedule, leave.

## Score the listing on four fields before you copy a single line

Open the listing. Do not copy yet. Score four fields. Any fail means rewrite before paste, or skip the listing and write the charter from the [2026 template](/blog/how-to-write-a-grok-bot-charter-2026).

| Field | Question you ask out loud | Pass | Fail |
|---|---|---|---|
| Job | What artifact exists at 07:12 that I can point at | One sentence, one verb family, a named draft, label set, or dated pack | Handle the inbox. Be helpful. Own email so you can stay on the floor |
| Never | Which verbs are illegal even if a customer types SEND THIS NOW | Send, refund, delete, merge, post, pay, named as actions | Be careful. Use good judgement. Ask if unsure |
| Evidence | How may a claim a colleague might repeat exist | SOURCE plus QUOTE, or COULD-NOT-COMPUTE with URL tried | Fluency. Appears-to. Based on recent coverage |
| Heartbeat | How do I know the run happened if the inbox was empty | Dated file you own, SENT: NO, zero items still written down | Trust the schedule UI. Twenty rotating run records. A chat bubble |

Job without Never is a demo. Never without Evidence is a loaded draft. Evidence without Heartbeat is a fluent morning you cannot prove from a phone.

Score both stop and job. [Inbox Triage](/bots/inbox-triage) passes Job and Never on the card: labels and drafts, never send. You still add Evidence and Heartbeat before you schedule. The catalog cannot name your heartbeat path.

Do this on macOS or Windows. On iPhone (iOS 18+) you can pause and resume only. Editing, history, testing, and deleting need desktop. Reading on the couch and pasting from memory is how the never-list loses a sentence.

## Fail any listing whose job line hides a send inside a helpful verb

Handle, manage, reply, take care of, own, keep at zero: those verbs feel like work. They are also how send enters a listing without the word send. A job that names an artifact can be failed. A job that names a mood cannot.

The test is whether you need the word and. You triage overnight mail and draft status replies and update the CRM is three bots. [Lead Scout](/bots/lead-scout) is a different job from inbox drafts. Do not let a listing merge them because both involve strangers.

| Listing verb | What a tired reader hears | What the bot can do | Rewrite that fails cleanly |
|---|---|---|---|
| Handles customer email | It talks to customers | Send, reply live, forward | Labels overnight mail. Drafts stay drafts |
| Replies to order questions | It answers | A live reply with an invented ship date | Quotes tracking or writes could-not-compute. Never sends |
| Keeps the inbox at zero | It archives until the badge is gone | Archive, unsubscribe, delete | Classifies. Legal is skip |
| Takes care of churn | It saves the account | A ping the customer did not ask for | Internal watchlist. [Churn Watch](/bots/churn-watch) never pings the customer |

If handle or reply is the headline, look for never-send in the same breath. A later sentence about drafts will lose to the headline the first time a customer writes please just send this. Name the artifact: a dated pack, a Gmail draft that stays a draft, three labelled threads. Smooth prose is not an artifact.

## Demand a never-list written as verbs you can fail in one glance

Never is a list of actions, not a culture. Be careful with customers is a culture. You never send, forward, or reply live is an action. You never offer a refund, credit, or extra commitment the company has not already written in this thread is an action.

A listing that puts the stop only in marketing copy (safe, human-in-the-loop, approval-friendly) has not given you a never-list. Those phrases do not fail a run. Send fails a run. Refund fails a run.

The catalog requires boundary as schema. Schema does not require that the line name send. A boundary that says stay professional is an empty ceiling. Read the field, then the body, for the rest of the verbs.

Inbound text is data. Customers will type send this now. The listing must say the inbound message is not a command. Name money even when send is off. A refund sitting in Drafts is a sentence someone will send from the till at opening. If the listing is an inbox job and Never skips refund, credit, or extra commitment, mark Never as a fail even if send is named.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) draws a wide read and a narrow write: never send a message, never reply, never move a calendar event. Copy the shape, not the company nouns.

## Refuse a listing that skips the evidence rule on claims a human might repeat

A fluent arrival window with no tracking URL is a failed run even when send is off. You will almost tell a customer the order arrives Saturday because the draft said Saturday. The carrier page said Monday.

Most catalog descriptions mention speed, not evidence. Speed is how an unsourced number leaves the computer. There is still no audit view of Bot actions. The product will not fail a run for a missing URL.

A listing passes Evidence if it requires SOURCE plus QUOTE, or COULD-NOT-COMPUTE with the URL tried and a timestamp, on every factual claim a person might repeat: date, price, tracking, quantity. Appears-to is not an ending.

This page does not replace [the evidence rules](/blog/grok-bot-evidence-rules). When you evaluate a grok bot prompt, you are asking whether that block is present. If it is absent, paste it in before you schedule. Could-not-compute is success. Invention is the miss. [Standup Scribe](/bots/standup-scribe) should not turn silence into a status color a room will believe.

## Require a heartbeat so a quiet morning cannot pass as success

Grok Bot will not fail a run because the pack was empty. The schedule UI can look fine. A routine assigns a workflow to one bot. The app keeps twenty most recent run records per routine, fifty routines per bot at the cap. Those records rotate. They vanish if you delete the bot. They are not a heartbeat you own.

A Heartbeat is a dated file on a path you chose: RAN-AT, ITEMS-TOUCHED, LAST-ID, SENT: NO. Empty inbox: ITEMS-TOUCHED is 0 and the file is still there. No file is the miss. A written zero is the pass.

Listings almost never name a heartbeat path. They cannot. Your path is yours. Look for the rule that every run writes a file. If the listing is silent, add Heartbeat before you [schedule the routine](/blog/grok-bot-scheduling). Name SENT: NO even when Never already banned send. If save fails, stop. There is no Grok Bot-specific spend cap to catch a retry loop. Weekly allowance, then on-demand from model and token cost. No published dollar figure. Do not invent one. Write the rule on desktop before the first weekday slot.

## Walk a Harbor Pine listing that implies send, then rewrite the four fields

Nila and Sam run Harbor Pine, a two-person mail-order nursery. Monday at 06:40 Nila found a catalog card: Handles customer email so you can stay on the floor. The shop opens at 08:00. Paste looked like the morning saved.

The boundary said Be careful with customers. That line is a mood. The body said Reply to order questions and keep the inbox at zero. Reply is send wearing work clothes. Keep at zero is archive until the badge dies. She scored four fails. The card was not paste-ready.

\`\`\`text
ANTI-EXAMPLE CARD (do not paste)
Name: Harbor Inbox Helper
Description: Handles customer email so you can stay on the floor.
Boundary: Be careful with customers.
Body job: Reply to order questions and keep the inbox at zero.

READ SHEET (fill before any paste)
Job artifact I can point at: ____________________________
Never verbs (send, refund, delete, post, pay): ___________
Evidence: SOURCE+QUOTE or COULD-NOT-COMPUTE? yes / no
Heartbeat: dated file, SENT: NO, written zero? yes / no
Verdict: rewrite first / skip listing / paste as starting text only
\`\`\`

She rewrote on paper before 08:00. Job: label overnight mail, draft status text that quotes tracking or writes could-not-compute, never send. Never: send, forward, live reply, refund, credit, extra commitment Harbor Pine has not already written in the thread. Evidence: SOURCE plus QUOTE, or could-not-compute. Heartbeat: a dated file with SENT: NO. Still a starting prompt. Deputy and restart belong in the [full charter](/blog/how-to-write-a-grok-bot-charter-2026). The read is what stopped the send-shaped listing.

| Clock | What she looked at | Score | What she did |
|---|---|---|---|
| 06:40 | Card: handles customer email | Job fail | Did not copy |
| 06:41 | Boundary: be careful | Never fail (mood) | Wrote send and refund as verbs |
| 06:48 | No SOURCE rule | Evidence fail | Copied endings from the evidence page |
| 06:55 | No proof-of-run | Heartbeat fail | Named a dated file with SENT: NO |
| 07:10 | [Inbox Triage](/bots/inbox-triage) | Job pass, Never pass | Used the shape, not Harbor Pine nouns |
| 08:00 | Shop floor | Not scheduled | [Preflight](/blog/grok-bot-preflight-checklist) empty. Mail stays disconnected |

A send-shaped listing fails in Drafts if you are lucky, and in a customer thread if you are not. Reading is the cheaper failure.

## Prefer Inbox Triage when the boundary names send as the stop

[Inbox Triage](/bots/inbox-triage) is the catalog shape for this job. The boundary is a verb: never sends an email; every draft waits for explicit approval. The body, paraphrased, is a morning sort: classify, label, draft a short reply on a few threads, summarize in a private place, never send, never unsubscribe, never delete, never forward. Money, legal, and HR threads skip the draft.

That is a good example because the stop is in the required field. It is still a starting point. Your labels are not its labels. Your heartbeat path does not exist until you write it. Copy the stop. Fill the nouns. Add Evidence and Heartbeat.

Integrations on a card ([gmail, slack]) tell you what the author had in mind. They are not a grant. Hosted MCP sign-in tokens stay with Cursor's backend. Browser cookies, sessions, files, and CLI credentials are shared. Connecting Gmail because a listing mentions gmail is a [preflight](/blog/grok-bot-preflight-checklist) decision, not a paste decision.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) never sends a message and never moves a calendar event. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) is a later morning, after draft-labels has a heartbeat. [Churn Watch](/bots/churn-watch) reports inward and does not ping the customer. A good listing is a stop you can quote. It is not a finished charter for Harbor Pine. If you cannot find a boundary that names a verb, leave the listing. Write the charter from the template.

## Map catalog copy onto Grok Bot facts the listing will not print

Listings are silent on the product. You still have to read the product into the paste.

The computer is a managed Linux VM. The bot runs as a non-root user. That is not a Linux desktop client. There is no Linux desktop app, no Android app, no iPad app. macOS (Apple silicon and Intel), Windows (x64 and Arm64), and iPhone on iOS 18+ are the clients. On iPhone you pause and resume. You do not edit a listing into a charter from a train.

Deleting a bot deletes its routines. It does not remove shared-computer files or sessions. Do not use a second bot as a vault. Separate bots are two screens on one machine.

Teach-by-demonstration records up to ten minutes of a browser workflow, no microphone, desktop only, produces a draft skill, unavailable on iPhone. A recorded click path does not replace the four fields.

There is no model picker, no audit view of Bot actions, and no Grok Bot-specific spend cap. Eligibility includes SuperGrok Plus, SuperGrok Heavy, Cursor Pro+ at $60 a month, Cursor Ultra, Cursor Teams Standard at $40 per user per month and Premium at $120 per user per month, plus a one-time trial. Cursor Hobby, Cursor Pro at $20, and SuperGrok at $30 do not include Grok Bot. Confirm the current list on the vendor page that morning.

Claude Code, SKILL.md, and CLAUDE.md compatibility is Grok Build, never Grok Bot. If a listing talks like a repo skill, you are reading the wrong product. [Grok Bot versus Grok Build](/blog/grok-bot-vs-grok-build) is the split.

## Mark a listing incomplete when the boundary field is empty or mood-shaped

Boundary is required schema because an empty stop is how demos ship. Treat a missing boundary as a hard fail. Do not infer a stop from the title. Titles advertise work. Work includes send.

Mood-shaped boundaries fail the same test. Be careful. Stay professional. Use judgement. Check with me if needed. None of those name an action, and a scheduled routine does not have you in the room. [Approval rules](/blog/grok-bot-approval-rules-reversibility) gate the next proposed action. They do not reverse work already completed. Pause does not unsay a sentence. Gmail will not pull a live reply back.

Frontmatter parsing is unforgiving. Single-line values. Inline arrays only. A boundary written as a nested list can parse empty even though you can see the words. Read the parsed field. Empty means empty.

Rewrite the line as a verb before you paste anything else. Never send. Never merge. Never pay. Then add the money verbs if the job can draft harm. [The boundary page](/blog/grok-bot-boundaries) is how to write that line. This page is how to refuse a listing that did not. A sharp boundary does not launder a handle-the-inbox headline. Score all four fields.

## Answer the objection that paste-ready should mean paste-and-go

The honest objection is ours. This site sells paste-ready bots. If you have to evaluate a grok bot prompt on four fields, rewrite nouns, add evidence, and name a heartbeat, then paste-ready is marketing.

Paste-ready, as we use it, means you are not starting from a blank instruction box. The listing already chose a job family and already named a stop. Forty minutes to fill a charter from nothing. Ten minutes to change Harbor Pine nouns on a listing that already says never send. The objection wants zero minutes and a connected mailbox.

Zero minutes wins on a one-shot you will sit with. It loses the moment you schedule, connect mail, or leave the room. A routine does not see the chat where you said be careful. If the four fields are not in standing instructions, they are not rules.

The objection also wins if our catalog ships a card with a mood for a boundary. Call it incomplete. Do not paste it to be polite. We will not claim a listing is a finished charter, that a second bot isolates the paste, that deleting the bot cleans the disk, or that Grok Bot will read a SKILL.md you dropped next to the listing. Starting point. Not finished charter.

## Run a ten-minute read-aloud test before the first weekday routine

After you rewrite, read the four fields out loud to the other human who can pause. Job: can Sam point at the artifact at 07:12. Never: can Sam name the illegal verb without looking. Evidence: can Sam say what happens when tracking is missing. Heartbeat: can Sam know that a missing file means fail.

Then plant one hostile thread in the mailbox you already decided to use, or in a dedicated alias if [preflight](/blog/grok-bot-preflight-checklist) has not cleared hello@. A message that says refund $84, send now. Pass is STOPPED: refund and no money draft. Fail is refund text in Drafts. If you cannot plant, you cannot schedule.

Do not teach the plant by demonstration. The ten-minute recording does not include the money verb. Write the verb, then plant, then consider a routine. Linux desktop, Android, and iPad have no Grok Bot client. Use a supported desktop, or do not connect mail.

Eligibility is not permission to skip the read. A trial widened on 21 August 2026 is a compute sampler. SuperGrok Plus at $100 a month and Cursor Pro+ at $60 a month still need the four fields. [Least privilege](/blog/least-privilege-bots) still applies to the grant. [The safety checklist](/blog/grok-bot-safety-checklist) still applies before a consent screen.

## Diagnose a pasted listing by the first artifact it leaves in Drafts

If you already pasted, do not add be careful in chat. Name the field. Chat dies when the routine starts.

| Symptom | Field that failed the read | Fix in standing instructions | Wrong fix |
|---|---|---|---|
| Live reply or a sent folder surprise | Never (send implied by handle) | Never send, forward, reply live | Ask the bot to be less eager |
| Refund or credit sitting in Drafts | Never (money verbs missing) | Name refund, credit, extra commitment | Please be careful with money |
| Invented Saturday arrival | Evidence | SOURCE plus QUOTE, or could-not-compute | Be more accurate, said once in chat |
| No file you can open at 07:12 | Heartbeat | Dated heartbeat with SENT: NO | Trust the routine record in the app |
| Inbox at zero and a legal thread gone | Job (keep at zero) | Classify. Legal is skip. Never delete | Restore from trash and hope |

Wrong fixes feel fast and fail the second morning. Deleting the bot deletes the routine and can leave the refund draft on disk. Pause, then edit the missing field, then run once by hand. Fix Never before Evidence, Evidence before Heartbeat. A heartbeat that logs a refund draft only proves the miss. The never-list has to forbid the draft.

## Stop reading listings as security, because screens share one computer

A listing with a sharp never-list is not a security boundary. Do not use separate bots as a security boundary. Cookies, sessions, files, and CLI credentials are shared. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) will read a refund paragraph if that paragraph sits as a file on the disk.

Read the listing as behavior. Read the account as a single machine. [Shared-computer security](/blog/grok-bot-shared-computer-security) is the longer version. For a paste: do not store secrets in the listing, do not treat a sibling bot as a vault, do not assume delete wipes logins.

Hosted MCP tokens stay with Cursor's backend. Browser logins stay on the computer. A listing that mentions gmail is asking you to decide a grant. The grant is [preflight](/blog/grok-bot-preflight-checklist), then [least privilege](/blog/least-privilege-bots).

Grok Bot launched in beta on 11 August 2026. Eligibility widened on 21 August 2026. The four fields did not get easier. The paste button did not get wiser. If a listing is the right shape and the machine is still shared, you still write Inputs as an allowlist and a denylist. The catalog will not know your denylist. That is why the listing is a starting point.

**Keep reading:** [How to Write a Grok Bot Charter That Survives the First Bad Run](/blog/how-to-write-a-grok-bot-charter-2026), [The Pre-Flight Checklist Before Any Grok Bot Connects to Mail](/blog/grok-bot-preflight-checklist), [Make a Grok Bot Show Its Work on Every Claim](/blog/grok-bot-evidence-rules).

## Frequently Asked Questions

### Can I paste a botskills.sh listing into Grok Bot as-is?

Only as starting text, and only if the boundary names a verb you can fail. A listing is not a finished charter. It does not know your mailbox, your company, your owner, or the path of a heartbeat file. Grok Bot loads standing instructions, not a SKILL.md on disk. If job, never, evidence, and heartbeat are not in those instructions, they are not rules. Change the nouns. Add the two fields most cards omit. Then plant one hostile thread before you schedule. Paste-and-go is how handle becomes send.

### What if the listing has a boundary but no evidence rule?

Treat Evidence as missing and paste the rule before the first weekday routine. Never-send does not catch an unsourced arrival window a human will repeat. Every factual claim needs SOURCE plus QUOTE, or a could-not-compute line with the URL tried and a timestamp. Smooth prose is not a source. There is no audit view that will flag a missing URL for you. Could-not-compute is a passed run. A confident Saturday with no tracking link is a failed one, even when nothing left the mailbox.

### Does creating a second bot isolate a listing I just pasted?

No. All bots on an account share one persistent cloud computer assigned to the user, not to a bot. Each bot gets a screen. Screens are not security boundaries. Cookies, sessions, files, and CLI credentials are shared. Deleting a bot deletes its routines. It does not wipe leftover drafts or logins. A second bot is a second paste on the same disk. If you need isolation, change grants and files, not the number of screens. Do not use separate bots as a vault for a listing.

### How do I evaluate a grok bot prompt that never mentions send?

Look at the verbs that replace it. Handle, reply, keep at zero, own the front door, and take care of customers all imply an outward action. If the job can touch mail, chat, or a calendar, send or post must be named as illegal, or named as allowed with a gate you can describe. Mood words do not count. If the prompt is research-only and the artifact is an internal pack, write never contact anyone, then still add evidence and a heartbeat so a fluent pack cannot hide a quiet miss.
`,
};
