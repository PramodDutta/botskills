import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'PTO Coverage for a Live Grok Bot',
  description:
    'pto coverage for a live grok bot is pause, a named desk cover, and no shared login. Routines are not team-level. iPhone is pause and resume only.',
  date: '2026-08-28',
  category: 'Guide',
  content: `
# PTO Coverage for a Live Grok Bot

Friday still has ninety minutes on the clock, the intern wants the Cursor password, and the live grok bot that drafts customer follow-ups is set to fire at 07:00 every weekday you will be gone. That password is not coverage. It is the whole computer walking out of the building for eight days.

PTO coverage for a live grok bot is three moves: pause every send-capable routine on the last desk day, name a cover person with their own eligible account, and recreate only the jobs that must still fire on that person's computer. Routines are not team-level. The cover cannot inherit yours. iPhone is pause and resume only. Editing, history, testing, and deleting wait for a Mac or a Windows desk.

This page is a planned absence. It is not a 3am page ([who is on call](/blog/grok-bot-on-call)), not the tap path for a freeze in a security line ([how to pause from iPhone](/blog/how-to-pause-a-grok-bot-on-iphone)), and not the intern who asked for the research bot by name ([share a grok bot](/blog/share-a-grok-bot)). Stay here when the calendar already shows empty workdays and a live bot is still on a weekday clock.

## Write PTO coverage as pause plus a named desk, never as a borrowed Cursor login

Write the plan as names and verbs. Coverage is a person at a supported desk, on their own eligible seat, with a written list of which clocks stay paused and which jobs get recreated. A Slack channel named #cover is not a desk. "The intern will keep an eye on it" is not a roster.

All bots on an account share one persistent cloud computer assigned to the user, not to a bot ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Screens are not security boundaries. Do not use separate Bots as a security boundary ([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)). Cookies, sessions, files, and command-line credentials are shared. Handing the intern your login hands them Gmail, staging, CLI tokens, and the home directory. Deleting a bot later does not take those with it.

Name the cover before the last Friday. Supported clients are macOS (Apple silicon and Intel), Windows (x64 and Arm64), and iPhone on iOS 18 or later ([FAQ](https://docs.x.ai/grok-bot/faq)). There is no Linux desktop app, no Android app, and no iPad app. The agent computer is a managed Linux VM, not a laptop the intern can SSH into. A Linux-only cover can pause from an iPhone if they have one. They cannot recreate a routine until they borrow a Mac or a Windows machine. Write three verbs into every send-capable charter: pause before leave, recreate on the cover's seat if the job must run, never share the password. [Inbox Triage](/bots/inbox-triage) is the shape a follow-up desk should already have: drafts wait.

## Pause every send-capable clock on the last Friday you still have a Mac

A live routine does not care that your calendar is empty. Closing the laptop does not pause the cloud computer. Airplane mode does not. A Slack OOO does not. The managed Linux VM keeps the clock ([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Do this at a desk on the last day you still have a Mac or a Windows machine. Open each send-capable bot. Pause every routine. Stay until frozen. There is no audit view of Bot actions yet ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). Pause freezes future work. It does not recall mail that already left. An approval controls the proposed action. It does not reverse work already completed.

Pause does not pause the machine. If [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) still has a weekday fire on the same Gmail cookie as Follow-up Clerk, you paused the wrong half of the risk. Pause every send-capable routine you can reach. Write the names in a note you own. Do not resume from the airport. Resume restarts the same standing instruction.

| Last-Friday move | What it does | Do it? |
|---|---|---|
| Pause every send-capable routine at a Mac or Windows desk | Future fires stop, if the control took. Cookies stay | Yes. First coverage move |
| Pause from iPhone if you forgot the desk | Same freeze. No edit, history, or create | Yes as salvage. Then stop |
| Leave the bot running with a Slack OOO | Nothing. The VM keeps the 07:00 clock | Never |
| Hand the intern the Cursor password | They receive the whole computer | Never |
| Delete the live bot so it cannot fire | Drops card, chat, and routines. Sessions stay | Never as a PTO tool |
| Recreate a must-run job on the cover's own eligible seat | A new routine on a different computer | Yes, only for jobs that must fire |

## Recreate only the jobs that must fire on the cover's own eligible computer

Most live bots should stay paused for a founder leave. The intern does not need your customer follow-up clerk or your mailbox cookie. They might need a Monday standup for their own mouth, or a morning brief of their own calendar. Those are new jobs on a new computer. They are not a transfer.

A routine assigns a workflow to one Bot. Max 50 routines per Bot. The app keeps the 20 most recent run records per routine. Deleting a Bot deletes its routines. Nothing is team-level ([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)). There is no documented move of a named bot, a computer, or a routine onto another person. Each eligible user gets their own persistent cloud computer.

If the cover must run a job, they create it on their account, on a bot they own, from a Mac or Windows client. iPhone cannot create, edit, test, or delete a routine. Teach by demonstration is unavailable on iPhone and is not a PTO clone button. Paste the charter as text. Export the /workspace pack they actually need. Point them at [Chief of Staff Briefing](/bots/chief-of-staff-briefing) or [Standup Scribe](/bots/standup-scribe) so they recreate the job shape, not your sessions.

Do not recreate send-capable follow-up on the intern's seat "just in case." If you are the person who would have sent, the honest coverage is pause. [Churn Watch](/bots/churn-watch) is a read-and-flag shape. If that flag must still land in a human folder, recreate it on the cover's computer with the cover named as owner, and keep send off. [How to schedule a routine](/blog/how-to-schedule-a-grok-bot-routine) is the create-and-verify how-to.

Count the cover's existing routines from a desk before they paste. A fifty-first routine does not schedule. The cap is per bot, not a team pool. The 20 run records are not an audit log ([Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet)). Leave your live bot paused, not deleted ([Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run)).

## Refuse eight days of intern coverage that starts with the founder password

The intern is in the office. You are on a plane. The bot already knows your sources. A password DM looks like eight days of continuity. It is eight days of the intern sitting inside your user account.

They get the persistent cloud computer assigned to you: every bot screen, cookies, sessions, files, and CLI credentials. Hosted MCP sign-in tokens stay with Cursor's backend ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)), and they still act as you because they are signed in as you. There is no audit view of Bot actions yet. Changing the password on day nine does not rewind copies from day two. [What Grok Bot actually isolates](/blog/grok-bot-shared-computer-security) is the architecture. [Hobby and Pro exclusion](/blog/grok-bot-hobby-and-pro-exclusion) is why Cursor Pro at $20 is not a door. Neither page is permission to lend them yours.

| Item on the founder's computer | Live for eight days if they have the login | After you change the password |
|---|---|---|
| Gmail, Slack, CRM, staging cookies | Yes. Every bot screen can load them | Mail they sent, and copies they exported, stay out |
| Files under /workspace | Yes | Downloads stay on their laptop |
| CLI credentials on the VM | Yes | Tokens they copied stay wherever they pasted them |
| Routines (max 50 per bot) plus 20 run records | Yes. They can pause, resume, or delete from a desk | Delete is not undone. Records die with the bot |
| Weekly usage, then on-demand token cost | Their clicks burn your pool. No Grok Bot-specific spend cap | The bill does not rewind |

## Walk Maren's 21 August leave from 16:40 desk to Ned's 16:52 password DM

Maren is the founder of Nockfield, a nine-person product shop. Ned is the intern through September. This story is invented. The eight-day clocks are an arbitrary example. The architecture is not.

Friday 21 August 2026, 16:40. Maren still has Follow-up Clerk on Cursor Pro+ at $60 a month, the cheapest paid path that includes Grok Bot as of 25 August 2026 ([Cursor pricing](https://cursor.com/pricing)). The bot owns four weekday routines, including a 07:00 fire that can send. Morning Brief sits on a second card in the shape of [Chief of Staff Briefing](/bots/chief-of-staff-briefing): read only. Standup Pack sits on a third. All three share one computer and one Gmail cookie.

At 16:52 she DMs Ned the Cursor password and a screenshot of Follow-up Clerk. She does not pause. Ned is on Cursor Hobby. Hobby does not include Grok Bot. Saturday 22 August, 07:18, he taps resume from iPhone on a compose sitting on ask. A follow-up leaves to a renewal thread she had been handling herself. Monday 24 August, 09:04, he deletes Follow-up Clerk because three cards look like duplicates. The four routines die. The Gmail session stays. Sunday 30 August she returns to a missing card, a customer who already has the mail, and a zip of /workspace on his laptop. Changing the password does not rewind Saturday.

The rewrite, same Friday, 16:10: she pauses Follow-up Clerk and the send-capable sibling on Mail Cleanup. She copies two charters into a doc. Ops buys Ned Cursor Teams Standard at $40 for the month, confirmed on [Cursor team pricing](https://cursor.com/docs/account/pricing) the morning they pay. He recreates a read-only brief on his own computer, send off. Follow-up Clerk stays paused until 30 August. No password leaves Slack.

| Clock | Wrong move | What actually moved |
|---|---|---|
| Fri 21 Aug 16:52 | Password DM, unsent pause | The whole VM, cookies, files, CLI, four live routines |
| Sat 22 Aug 07:18 | Ned resumes from iPhone | Mail leaves. Pause would have held |
| Mon 24 Aug 09:04 | Ned deletes Follow-up Clerk | Routines gone. Sessions remain |
| Sun 30 Aug 18:00 | Password change | Copies and the Saturday mail stay out in the world |

Walk that table once before you pack. The missing Friday pause is the failure, not the intern.

## Leave the founder's cookies signed in because a paused computer is still logged in

People pause, then tell themselves Gmail is signed out for the week. It is not. Pause does not sign out cookies. Sessions stay. Files stay. CLI credentials stay. Deleting a bot does not remove shared-computer files or sessions either ([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)). Pause is a clock interrupt on named routines. It is not a session kill. If you paused and also handed Ned the password, you froze the clock and then gave him the house key.

Logout is desk work in the browser on the Agent Computer, only for sessions you will re-auth when you return. Do not revoke the mailbox as a 16:55 panic unless send is already paused. Hosted MCP tokens do not flip when you pause. Privacy Mode (Legacy) blocks Grok Bot entirely: do not use it as a PTO switch unless you intend to stop every bot on the account. An intern on your session is still you, including on the VM's static egress IPs. [How to set approvals](/blog/how-to-set-grok-bot-approvals) parks send on ask. Ask is not a babysitter. Pause send-capable clocks anyway.

## Limit the airport iPhone to pause and resume, then wait for the cover's desk

Documented mobile scope, from the [mobile page](https://docs.x.ai/grok-bot/mobile): iPhone on iOS 18 or later can pause and resume a routine. Editing, history, testing, and deleting need a desktop. Teach by demonstration is unavailable on iPhone. You will not rewrite Follow-up Clerk, open the last twenty run records, fire a test, create Ned's replacement routine, or delete a bot from the jetway.

If Friday's desk pause did not happen, the airport tap is salvage. Open Grok Bot, not grok.com chat, not Cursor, not Mail. Pause each send-capable routine you can reach. Stay until frozen. Write the names and clock time in Notes. Do not resume when boarding group C is called. Ned cannot create the replacement brief from a pocket either. If the only machine in his bag is Linux, Android, or iPad, he is pause-only until he borrows macOS or Windows ([supported platforms](/blog/grok-bot-supported-platforms)). Staff the last Friday as a desk hour for both people.

[Grok Bot iPhone limits](/blog/grok-bot-iphone-cannot-edit) is the verb catalog. This page is why those limits make the last desk day load-bearing for a planned leave. A 3am misfire while you are already gone is [who is on call](/blog/grok-bot-on-call). For PTO, the on-call human for send is nobody, because send is paused.

## Pay for the cover's Teams Standard seat instead of lending Cursor Pro+

Ned on Hobby cannot open Grok Bot. Cursor Hobby and Cursor Pro at $20 do not include it. SuperGrok at $30 does not. Eligible paths, checked 25 August 2026: SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, Cursor Teams Standard and Premium, plus a one-time trial ([FAQ](https://docs.x.ai/grok-bot/faq), [Cursor pricing](https://cursor.com/pricing)). Confirm the live invoice the morning you pay.

Cursor Teams Standard at $40 per user per month includes Grok Bot as a per-person stamp ([Grok Bot on Cursor Teams Standard](/blog/grok-bot-teams-standard)). Pro+ at $60 is the cheapest paid individual path. Ultra at $200 includes. Teams Premium at $120 per user per month is the same Bot product on a richer Cursor SKU. None of those SKUs mint a shared bot. Each seat gets its own cloud computer.

Buy the seat (or a qualifying trial) on Friday morning. Recreate must-run jobs that day, from a desk. If ops will not buy a seat, pause and email exported packs. Do not paper over Hobby with her password. There is no Grok Bot-specific spend cap and no model picker. Overflow is on-demand from model and token cost. His clicks on her login burn her pool.

| Cover's current door | Own Grok Bot computer? | PTO move |
|---|---|---|
| Cursor Hobby, or Cursor Pro at $20 | No | Buy Teams Standard or Pro+, or a qualifying trial. Or pause |
| SuperGrok at $30 | No | SuperGrok Plus at $100, or a Cursor path above. Or pause |
| Cursor Pro+ at $60, Ultra at $200, SuperGrok Plus, SuperGrok Heavy | Yes, if the live invoice still says so | Recreate must-run jobs on their bot. Never on Maren's login |
| Cursor Teams Standard at $40/user/mo, Premium at $120/user/mo | Yes, per seat | Same recreate rule. Teams is not a shared bot |
| No seat, no trial, Linux-only bag | No create client. iPhone pause only if iOS 18+ | Pause Maren's send-capable clocks. Do not DM the password |

[Why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained) is the door. Pay it for the cover. Do not lend yours.

## Paste a PTO coverage charter block that names pause, cover, and no password

Standing text beats a pinned Slack message you will not reread at 16:52. Put the PTO block in the same charter the bot already rereads, next to the send rule, before the last Friday. The eight-day window below is Maren's leave. Use your own dates. The architecture does not care if the leave is three days or twenty.

\`\`\`text
PTO coverage (paste into every send-capable bot charter before last Friday)

Owner: Maren. Cover desk: Ned, only after he has his own eligible Grok Bot seat.
Window: 22 August 2026 through 29 August 2026.

Before leave (Mac or Windows, not iPhone):
- Pause every routine on this bot. Stay until the control shows frozen.
- Pause sibling send-capable routines on other bots that share this computer.
- Do not delete this bot. Deleting a bot deletes its routines. Sessions stay.
- Copy this charter into a doc the cover can open. Export only the /workspace
  packs they need. Strip customer mail and credentials.

While out:
- Cover does not receive the Cursor password, recovery codes, or 2FA phone.
- Cover does not resume this bot from iPhone.
- Jobs that must fire live on Ned's account, on Ned's bot, with Ned as owner.
- Ned never sends as Maren. Ned never opens Maren's Gmail cookie.
- iPhone: pause and resume only. Edit, history, test, and delete wait for a desk.

On return:
- Resume only from a Mac or Windows desk after reading /workspace and Sent.
- Do not treat a missing history row as proof nothing happened. There is no
  audit view of Bot actions yet. Check the destination.
- Offboard the cover's temporary bot on their account, not by deleting yours.
\`\`\`

If send is even possible on the card, add one more line: send stays paused for the whole window. [Inbox Triage](/bots/inbox-triage) already treats send as a human step. Borrow that boundary for the week you are not in the room.

## Answer the founder who says the intern can babysit the live bot from the office

The objection is strongest when Ned is sitting ten feet away. He is trusted. He already sees the customer Slack. He has a Windows desk. Why buy a second seat when he can watch Follow-up Clerk on her laptop, or log in from the office Mac she left unlocked.

Watching does not split the home directory. An unlocked office Mac with her session is her computer. A login from his house is her computer. Two people on one user account are still one cloud computer and one cookie jar. There is no audit view, so "I will look over his shoulder" is not a log. If he can resume, he can send. If he can tidy the sidebar, he can delete routines. If he can only watch, he needs exported packs and a pause that already held.

The objection wins one narrow case: Ned already owns his own eligible seat, the must-run job is already on his bot, send is off, and Maren's send-capable clocks are paused. That is the recreate path with a desk in the same room, not babysitting her live bot. If the real request is "keep answering customers in my voice for eight days," that is a human coverage problem. Do not solve it by putting Ned inside Maren's Gmail cookie. [Share a grok bot](/blog/share-a-grok-bot) is the page for an intern who asked for a named card. This page refuses the same login when the calendar says PTO.

## Prove Monday's pack appeared on the cover's computer, not on the founder's

These checks can come back false. If they do, you either left the bot running or you shared a computer and called it a shift.

| Check | Pass | Fail |
|---|---|---|
| Friday: every send-capable routine on Maren's account shows frozen | Pause held | A 07:00 still armed |
| Ned's sidebar shows a bot he created. Maren's still shows hers, paused | Two computers | He is on her laptop, or logged in as her |
| Saturday 07:12: no new Follow-up Clerk mail in Sent | Send did not fire | Pause missed a sibling, or someone resumed |
| Monday pack, if required, sits in Ned's /workspace or DM, Ned named as owner | Recreate worked | The pack landed in Maren's chat |
| After 30 August, Follow-up Clerk still exists on Maren's account | Pause, not delete | Ned tidied the sidebar |

Plant a harmless row you will recognize. An arbitrary example: a calendar event titled "PTO coverage probe" on Ned's calendar, not Maren's, and a line in his brief that must cite it. If Monday's brief cites Maren's calendar, he is on the wrong computer. If no brief exists and you had agreed to recreate, he never got a seat, or he tried to create from iPhone. Do not grade the week from chat. If a job went silent with files half written, that is [Grok Bot stalled](/blog/grok-bot-stalled), not a reason to DM the password.

## Keep the paused bot alive rather than delete it while you are out of the building

Delete feels like a clean OOO. Deleting a bot removes its profile, conversation, and routines. It does not retract mail, sign out of Gmail, empty /workspace, or clear the cookie jar. You also destroy the twenty most recent run records per routine. iPhone cannot delete anyway. Do not ask Ned to delete your bots as a favor. [How to delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely) is teardown for a planned retirement. A leave is not a retirement.

Coming soon, and not shipped: an admin Kill that deletes the VM while durable storage is kept. Do not staff PTO as if Kill were a leave button. Do not staff PTO as if a team-level ceiling on local execution had already landed ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). Pause is the verb that exists. Leave Follow-up Clerk in the sidebar, paused, charter intact, so resume on 30 August is a desk decision rather than a rebuild.

## Hand this page back when the absence is a 3am page, a share request, or a pocket freeze how-to

This page stops applying when the calendar is not the problem. A send that misfires at 03:12 while you are in town is staffing for a night: [who is on call](/blog/grok-bot-on-call). A job going wrong in a TSA line, with no PTO plan, is the click path: [how to pause from iPhone](/blog/how-to-pause-a-grok-bot-on-iphone). An intern who asked to borrow the research bot by name, with you still at the desk, is a handoff of text: [share a grok bot](/blog/share-a-grok-bot).

It also stops applying when there is no live send-capable routine and no must-run clock. A draft-only fleet can sit paused without a cover seat. A missed Monday because someone deleted the owner bot last week is [a routine that did not run](/blog/grok-bot-routine-did-not-run). Companies that need a vendor audit log, a team on-call calendar, and a dedicated VM per bot are describing a product Grok Bot does not ship today. Do not staff an eight-day leave as if it were filled.

**Keep reading:** [Who Is On Call When a Grok Bot Misfires at 3am](/blog/grok-bot-on-call), [How to Pause a Grok Bot From Your iPhone](/blog/how-to-pause-a-grok-bot-on-iphone), [How to Share a Grok Bot Without Sharing Your Computer](/blog/share-a-grok-bot).

## Frequently Asked Questions

### Can the intern keep my live grok bot running on PTO by using my login?

No. The login is the computer, not a coverage shift. All bots share one persistent cloud computer assigned to your user, not to a bot. Cookies, sessions, files, and CLI credentials go with whoever can sign in. Screens are not security boundaries. There is no audit view of Bot actions yet. Pause send-capable routines before you leave. If a job must fire, recreate it on the cover person's own eligible seat. Changing the password on day nine does not rewind copies they made on day two.

### If I pause everything, how does the cover person still run Monday standups?

They run Monday on their computer, not on yours. A routine belongs to one bot. Nothing is team-level. Buy them an eligible seat (Teams Standard at forty dollars per user per month is one path, checked 25 August 2026) or a qualifying trial, then recreate the standup on a bot they own, from a Mac or Windows desk. iPhone cannot create that routine. If you will not buy a seat, pause and skip the bot standup. Email a human checklist. Do not paste the founder password so their Monday pack can fire.

### Can I handle PTO coverage from iPhone at the airport?

You can pause. That is the documented pocket pair, with resume, and resume is the wrong leave verb. Editing, history, testing, and deleting need a desktop. You will not create the cover's replacement routine, open run records, or delete a bot from the jetway. If Friday's desk pause did not happen, pause every send-capable routine you can reach, stay until frozen, and write the names in Notes. Staff the last desk day for both people. A Linux-only or Android-only bag cannot recreate coverage until someone borrows a supported desk.

### Do routines transfer to the cover when I buy them a Teams seat?

No. Cursor Teams Standard includes Grok Bot as a per-person stamp. Each seat gets its own cloud computer. Named bots on your account do not appear in their sidebar. There is no documented move of a bot, a computer, or a routine onto another person. Max 50 routines per bot still applies on their card. Recreate must-run jobs from the charter on their seat. Leave your live send-capable bot paused, not deleted, so you can resume when you return. Confirm live prices on Cursor team pricing the morning you pay.
`,
};
