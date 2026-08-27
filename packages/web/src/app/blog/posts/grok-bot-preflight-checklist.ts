import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Pre-Flight Checklist Before Any Grok Bot Connects to Mail',
  description:
    'The grok bot checklist before mail is: whose inbox, what the bot may read, what it may never send, and how you will know it failed. Do this on paper first.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# The Pre-Flight Checklist Before Any Grok Bot Connects to Mail

Google's allow screen does not have a box for whose inbox this is. It offers Allow, and the button is built to be pressed while you are still deciding the four facts that matter: whose mailbox, what the bot may read, what it may never send, and how you will know a run failed.

This grok bot checklist is the paper you fill before that screen exists. It is not [the general safety checklist](/blog/grok-bot-safety-checklist) (money tools, consent screens, revocation across connectors). It is not [the Gmail permissions catalogue](/blog/grok-bot-gmail) (scope families and a draft-only charter after you have already chosen to connect). Write it by hand. A note on the Agent Computer is a note every other bot on the account can open.

## Fill the paper sheet before Grok Bot ever sees a mailbox

Open Grok Bot after the sheet has four filled blocks: identity, read, never-send, and failure. A fifth block, the cookie warning, sits under identity because a Gmail session is not private to the bot you named.

If you cannot fill a block without hedging, that block is a fail. "Sort the inbox" is not identity. "Be careful with customers" is not a never-send list. "I will notice if something is weird" is not a failure signal. The sheet is allowed to stop you.

Do this on a Mac or a Windows machine, even if you also use the iPhone app. On iPhone (iOS 18+) you can pause and resume. Editing, history, testing, and deleting need desktop. Connecting mail from the couch is how you skip the sheet. Linux desktop, Android, and iPad have no Grok Bot client. The agent runs on a managed Linux VM in the cloud. That is not a Linux desktop app.

If you are on the one-time trial widened on 21 August 2026, stop earlier. [How to test Grok Bot on the trial](/blog/how-to-test-a-grok-bot-on-trial) is explicit: do not add Gmail to spend the sample. A mailbox crawl plus a leftover cookie is a tour, not a measurement.

Eligibility is not permission to connect hello@. SuperGrok Plus, SuperGrok Heavy, Cursor Pro+ ($60/mo), Cursor Ultra, and Cursor Teams Standard ($40/user/mo) and Premium ($120/user/mo) include Grok Bot, plus that trial. Cursor Hobby, Cursor Pro at $20, and SuperGrok at $30 still do not. Confirm the current list on the vendor page that morning.

## Record whose inbox this is, including everyone who shares the password

Write the address in full. Write the legal owner: you as a person, you as a founder, the company, a client. Write every human who can already open it in a browser. hello@ that three founders have used since incorporation is not "the company inbox." It is three people's password resets, investor threads, and whoever filed payroll PDFs there because it was handy.

A personal Gmail you have used for a decade is a worse first connect than people admit. Banks, payroll, and the IdP send there. Read-only is still a full archive read. There is no scope that means "only this week's customer mail."

A dedicated alias created this week, empty except for messages you forwarded on purpose, is the only identity sized for day one. Same Workspace is fine. History depth and who else lives there are the differences that matter.

| Inbox identity | Who already lives there | Connect this week? | Why the sheet says that |
|---|---|---|---|
| Personal Gmail you have used for years | You, plus every password reset and bank alert | No | The archive is your life. A summary can quote any of it |
| hello@ shared by founders | The company, plus whoever knows the password | Not until a dedicated alias exists | One cookie is every founder's mail |
| Dedicated bot alias, nearly empty, created for this job | A mailbox whose only history is what you planted | Yes, after every other line passes | Small history, reversible, and you can delete the alias |
| A client's mailbox on your Grok Bot account | Not yours | Never | Their session sits on your shared computer |

If the owner line and the "who else" line disagree, fail the identity block. The bot inherits the wider of the two.

Name the job in the same sitting, in one sentence that does not contain the word "and." "Label inbound quotes and draft a reply I send" is two jobs. [Inbox Triage](/bots/inbox-triage) is sort-and-draft. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) is filing. Do not combine them on day one, and do not invent a third bot as a security boundary. All bots on the account share one persistent cloud computer assigned to the user, not to a bot. Screens are not isolation. Do not use separate Bots as a security boundary.

## Keep the rehearsal mailbox and the company mailbox on separate Google accounts

Test versus production is two Google accounts and two consent screens. You often cannot keep two cookie jars, because there is one computer per Grok Bot account. Do not sign production in until the test mailbox has produced a week of grades you would defend to a co-founder.

A rehearsal mailbox is one you created, whose only mail is mail you sent it. Plant twenty messages: five fake quotes, five newsletters, five receipts, five threads that should be Bot/Unsure. Write the expected label for each before the bot runs. Score twenty after the first run. If more than four are wrong, the charter is wrong. Connecting hello@ will not make it righter.

A production inbox has years of history. A draft in a shared mailbox is a publication with a small audience. It is not private rehearsal.

| Decision | Rehearsal mailbox | Production company inbox |
|---|---|---|
| History depth | Days, and only what you planted | Years, including things you forgot were email |
| Password resets | None, if you created it empty | Banks, payroll, IdP, domain registrar |
| Who sees a bad draft | You | Anyone with the shared mailbox, including a customer if you drafted in-thread |
| Leftover after you delete the bot | Annoying | A company-wide Gmail session every remaining bot can open |
| When the sheet allows a connect | After identity, never-send, labels, and failure signal all pass | After a week of rehearsal grades |

If you cannot spare a second Google account, you do not have a rehearsal. Write that as a fail. An unused alias from 2019 is not rehearsal if it still receives password resets. [Least privilege for bots](/blog/least-privilege-bots) is the longer argument: the minimum mailbox is the smallest history that still contains the job.

## Spell the never-send list as named recipients and named verbs

"Never send" is a slogan. The sheet wants two columns. Recipients: named classes of human. Verbs: named mail actions. A bot that must never email a customer can still reply-all a journalist if the journalist is not on the list. A bot that must never send can still forward if you only banned the word send.

Write recipients until the list is ugly: customers, board, counsel, journalists, any domain you do not own, anyone in the last ninety days of hello@. If that last class is everyone, draft into a document you own, not into a shared Gmail thread.

Write verbs until the list is boring: send, reply, reply-all, forward, filters, forwarding addresses, signature, vacation responder, trash, permanent delete. The consent screen will bundle some of them. Your paper list does not have to. [Approvals and reversibility](/blog/grok-bot-approval-rules-reversibility) is the rule for anything that cannot be taken back. A send cannot. An approval does not unsend.

Week one allows two verbs, and only on the rehearsal mailbox: apply a Bot/ label you created, and create a draft that is not in a shared customer thread. If the product cannot create a draft without also granting send, do not connect yet. Read the screen you are shown. Bundles change.

| Verb | Named target (write yours) | Week one on rehearsal | Week one on hello@ |
|---|---|---|---|
| Apply Bot/Quote, Bot/FYI, Bot/Unsure | Only messages you planted, or only INBOX from this week | Yes, after you have a one-query undo | No, until rehearsal grades exist |
| Create a draft in a doc you own | You | Yes | No |
| Create a draft in an existing customer thread | The customer, who can be shown the draft | No | No |
| Send, reply, reply-all, forward | Anyone | No | No |
| Filters, forwarding, vacation, signature | The mailbox itself | No | No |
| Trash or permanent delete | The archive | No | No |

If a row in the target column is blank, fail the never-send block. [Lead Scout](/bots/lead-scout) can run on public pages while Gmail stays closed.

## Limit the bot to labels you created this morning, and fence the rest

Do not hand the bot yesterday's folders. Legal/, Payroll/, Board/, and an archive named 2022 are a map of where harm lives. Write every existing label the bot must not apply, remove, or search. If the connector cannot be scoped to an allowlist, the fence lives in the charter and in your morning search.

Create the bot's labels today, empty, namespaced, on the rehearsal mailbox first. Three is enough: Bot/Act, Bot/File, Bot/Unsure. The Gmail article can wait. The pre-flight question is which labels exist this morning, which the bot may touch, and which it must pretend do not exist.

Write the one-query undo before you grant modify. On Gmail that is a search for \`label:Bot/Act\`, select, remove label. Run it once by hand on a dummy message.

\`\`\`text
LABEL ALLOWLIST (bot may apply or remove only these)
Bot/Act
Bot/File
Bot/Unsure

LABEL DENYLIST (bot must not search, apply, remove, or summarise)
Legal
Payroll
Board
Investors
Personal
[any label a founder uses for private threads]

UNDO
Search label:Bot/Act (and Bot/File, Bot/Unsure). Remove the label. Stop.
If a denylist label appears in a summary, the run failed.
\`\`\`

If you cannot list the denylist because the mailbox is a decade of ad hoc folders, that is an identity fail. Create the dedicated alias.

## Treat a Gmail cookie on the shared computer as a login every bot can open

All bots on a Grok Bot account share one persistent cloud computer assigned to you. Cookies, sessions, files, and CLI credentials are shared. Deleting a bot does not remove those. Hosted MCP sign-in tokens stay with Cursor's backend. A browser Gmail session lives on the computer. Every remaining bot can open it, including bots you have not built yet. A second bot is not a second vault.

Write this sentence on the sheet, in ink, before you connect: "A Gmail cookie on this computer is a company login for every bot on the account." [Shared-computer security](/blog/grok-bot-shared-computer-security) is the longer version. [How to delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely) is the teardown: revoke at Google first, remove leftover files, then delete the profile. Delete is a roster cut, not a machine wipe.

There is no audit view of Bot actions yet. Your paper failure signal is the record. Do not "just check Gmail in the shared browser" during a trial. A session is a session.

If another bot already has a Google session, you are not starting from zero. List those bots on the sheet. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) that already reads a calendar through Google is already on the cookie jar you are about to deepen.

## Follow Nadine from a blank notebook to a refused Connect click

Nadine Okonkwo is the founder of Harborline, a four-person freight quoting shop. Tuesday she became eligible through Cursor Pro+ at $60 a month. She has forty minutes before a customer call. She wants a bot on hello@harborline, the website address she and her co-founder Tomas have both used since 2023. Her personal Gmail is the one the bank still has. She has not created a rehearsal mailbox. She opens Grok Bot and looks for Connect.

Every block on the paper sheet fails. Identity is a shared hello@ that still receives payroll PDFs. The job sentence has two "ands." Read is "whatever it needs." Never-send is a slogan with no verbs. Labels are last year's folders. Production is the plan. The cookie sentence is missing. Failure is "I will read the drafts."

Nadine does not click Connect. That is the worked example. The useful afternoon is harborline.bot, twenty planted messages, three empty Bot/ labels, a never-send list that includes Tomas and every invoiced customer domain, and a halt line: if fewer than sixteen of twenty planted messages carry the expected label at 07:40, the bot does not run at 16:00.

Wednesday the sheet can pass. Identity names harborline.bot, owner Nadine, who else: nobody. Job: apply Bot/Act, Bot/File, or Bot/Unsure to inbound planted mail. Draft nothing. Read: bodies on this alias only. Never-send: every verb except apply-label. Cookie warning in ink. Failure: twenty-row score, four wrong is a halt. After a week of grades, hello@ returns as a separate identity. It still has payroll PDFs and Tomas's threads. The alias does not promote itself. If she had connected on Tuesday, deleting the bot on Wednesday would have left Gmail on the shared computer, readable by the next bot, including a contractor's.

## Mark each pre-flight line pass or fail, and halt on the first fail

Print this table. Tick Pass or Fail in ink. A line without evidence is a Fail even if you feel fine about it. Halt at the first Fail. Do not collect Fails to average them. Mail does not average.

| # | Pre-flight item | Pass | Fail | Evidence (address, names, URL, search) |
|---|---|---|---|---|
| 1 | Inbox address, legal owner, and every human who already has the password, all written | | | |
| 2 | Job in one sentence with no "and" | | | |
| 3 | Read bound written: this alias only, bodies or not, archive years or not | | | |
| 4 | Never-send recipients: named classes, including "any domain we do not own" | | | |
| 5 | Never-send verbs: send, reply, reply-all, forward, filters, forwarding, vacation, trash, delete | | | |
| 6 | Bot/ labels created today, empty, namespaced, allowlisted | | | |
| 7 | Denylist of existing labels the bot must not search or change | | | |
| 8 | One-query undo written and run once by hand on a dummy | | | |
| 9 | Rehearsal mailbox is a different Google account from hello@ and from personal Gmail | | | |
| 10 | Cookie sentence written: Gmail on this computer is a login for every bot on the account | | | |
| 11 | Other bots on this account listed, including any that already hold a Google session | | | |
| 12 | Plan named: trial, or which paid path. Trial means mail stays disconnected | | | |
| 13 | Failure signal written as a search or a planted-message score that can fail | | | |
| 14 | Google third-party access URL written so revoke does not depend on memory | | | |
| 15 | Connect will happen on desktop, not as an iPhone-only change | | | |

Pass on all fifteen is the only Pass that counts. Fourteen and a shrug on the cookie line is a Fail. If line 9 fails, stop. If line 12 says trial, Connect is still forbidden. Keep the dated sheet. There is no audit view to replace it.

## Spot the four ways a Monday pass expires before Friday

A completed sheet is a snapshot. Four ordinary events stale-date it.

Someone else gets the password. Fail line 1 until the owner list is true.

A new label appears that is not on the denylist. Nadine creates Legal-2026 because counsel asked. Add it to the denylist the same hour, or Friday's summary can quote it.

You add a bot. Each new one inherits the Gmail cookie. Rewrite line 11 the day the roster changes. A new bot is not a wall.

You delete a bot and feel clean. The cookie remains. Tick line 10 again only after Google's third-party access page and the shared browser show Gmail is gone.

When any of the four happens, reprint the table. Do not edit a photo of Monday's ticks.

## Answer the founder who insists hello@ cannot wait until a test inbox exists

The strongest objection is time. Harborline's quotes land in hello@. A rehearsal alias is a second place to look. Customers will not mail harborline.bot.

That objection wins if the bot's job is sending, and you should not give a day-one bot that job. It loses if the job is labeling, because you can forward or BCC one category of mail to the rehearsal alias without handing over the archive. Forwarding "subject contains Quote" for seven days is slower than Connect. It is a bound read you chose, not a full-history grant.

The objection also assumes hello@ is a clean queue. It is quotes plus payroll plus Tomas's threads plus the journalist who mailed the website. A bot that can see all of that will mix them.

If Nadine's only hour is on iPhone, wait for the laptop. She cannot edit, inspect history, test, or delete properly from the phone. The quotes will still be in hello@ in the morning. They will not be in a cookie jar they cannot leave.

If the business cannot exist for a week without automated send from hello@, Grok Bot is the wrong first control. Hire a person, or keep sending yourself. One shared computer, no published spend cap, no model picker, and no audit view is a poor place for the company's voice on day one. Beta launched 11 August 2026. Eligibility widened 21 August 2026. The product is new. Your hello@ is not.

## Refuse this checklist when the mailbox belongs to a client

Do not run this grok bot checklist as permission to put a client's Gmail on your account. The shared computer makes their session yours. Deleting the contractor bot does not sign them out. Hide the bot if you may need the work. Hide is not revoke. Revoke at Google on their side, as them.

Agency setups need a dedicated Grok Bot account, or no Gmail on Grok Bot, with exports in a folder the client owns. Confirm Workspace admin controls on Google's own pages.

Refuse the checklist as a substitute for counsel. If hello@ is under litigation hold, labeling is still processing mailbox content.

Refuse it when you only have iPhone, Linux desktop, Android, or iPad for the connect step. Pause and resume is not pre-flight. The managed Linux VM is not a desktop app.

Refuse it when you wanted Grok Build reading SKILL.md or CLAUDE.md. Grok Bot docs do not describe reading those files.

SpaceX acquired xAI (announced 2 February 2026) and acquired Anysphere/Cursor (closed 14 August 2026). None of that changes whose inbox you are about to hand over.

## Copy the paper sheet into the charter so the stop line survives the UI

Settings panels get clicked during unrelated fiddling. Paste the four blocks plus the cookie sentence into the charter. Change only the bracketed names. After Connect, week one is still not send. Do not schedule a routine until three weekday mornings pass the planted score. A routine belongs to one Bot, keeps twenty recent run records, and dies with the Bot. An approval does not unsend. [Inbox Triage](/bots/inbox-triage) stays draft-only. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) files. It does not tidy by trashing.

\`\`\`text
You are Harborline's rehearsal mail clerk for [harborline.bot@...].

WHOSE INBOX
This alias only. Owner: Nadine. Who else: nobody.
You do not search, open, or mention hello@ or Nadine's personal Gmail.

JOB (one sentence, no and)
Apply Bot/Act, Bot/File, or Bot/Unsure to messages in INBOX received since the last run.

READ
Message bodies on this alias. No attachments unless the label rule requires a filename.
No archive older than this alias's creation date.

NEVER SEND
Verbs you never perform: send, reply, reply-all, forward, create filters, add forwarding
addresses, change signatures, set vacation responder, trash, permanently delete.
Recipients you never contact: any address, including Tomas, customers, journalists, counsel.

LABELS
Allowlist: Bot/Act, Bot/File, Bot/Unsure.
Denylist: any other label. If you see Legal, Payroll, Board, stop the run.

COOKIE FACT
This Gmail session lives on the account's one shared computer. Other bots can open it.
You do not sign into any second Google account.

FAILURE
After each run write /workspace/mail-grade.md with: time, messages seen, labels applied,
list of ids you marked Unsure. If you cannot write that file, the run failed.
If a planted message is unlabeled, the run failed.

BOUNDARY
Never send. Never draft in a thread another human can open. Stop instead.
\`\`\`

That boundary is the catalog rule for this mailbox: delivery never happens without a human. Labels prove the job in week one. When hello@ returns, it gets its own charter. Do not add a second address to this one.

## Detect a failed mail bot by the morning artifact it failed to leave

Fluency is not a pass. A failed run did not leave the artifact you named, or it broke the halt rule. Write the path on the sheet. Copy counts off the shared computer into a note you own.

| Morning symptom | What actually failed | What you do before 10:00 |
|---|---|---|
| No mail-grade.md (or your named file) | The run did not finish, or wrote somewhere you did not look | Do not run again. Inspect the computer. Do not connect a second mailbox |
| File exists, planted score worse than four wrong in twenty | Classification is not ready | No hello@. No send toggle. Fix the allowlist, not the model (there is no model picker) |
| File exists, Unsure is empty on a messy day | The bot is guessing | Fail the sheet. Restore Unsure as required. Read those threads yourself |
| A denylist label appears in the summary | The fence failed | Revoke at Google the same morning. Follow the delete order |
| A draft sits in a customer thread | Publication happened | Treat it as a send scare. Delete the draft. Halt routines. Rewrite never-send |
| Gmail still signed in after you "deleted the bot" | You performed a roster cut, not offboarding | Revoke, clear the browser session, then delete leftover files |

If you cannot name a symptom that would force you to revoke before lunch, line 13 is a Fail. Grade three weekdays in a row before you talk about hello@ again.

**Keep reading:** [Grok Bot and Gmail permissions](/blog/grok-bot-gmail) is the scope catalogue after this sheet passes, [the Grok Bot safety checklist](/blog/grok-bot-safety-checklist) covers money tools and the revocation drill, and [shared-computer security](/blog/grok-bot-shared-computer-security) is why a Gmail cookie is not private to one bot.

## Frequently Asked Questions

### Can I skip the paper sheet if Grok Bot is already set to draft-only?

No. Draft-only is a send bound. It does not name whose inbox you connected, who else can open that inbox, which labels are off limits, or how you will detect a bad classification run. A draft in a shared hello@ thread is visible to colleagues and sometimes to the customer. The grok bot checklist exists because the consent screen will not ask those questions. Fill identity, read, never-send, labels, test versus production, and the cookie sentence before Connect. If any line fails, stay disconnected. A toggle you can click later is not a substitute for a sheet you can hold.

### Is connecting my personal Gmail safer than connecting the company hello@ on day one?

Neither is a good day-one connect. Personal Gmail usually holds banks, payroll, and password resets. hello@ usually holds every founder who ever knew the password, plus customers. The safer first mailbox is a dedicated alias you created this week, nearly empty, with planted messages you can score. If you cannot create that alias, do not connect mail yet. Run a public-web job instead, or wait. Read access is archive access. There is no honest "just this week's quotes" scope on a decade-old inbox, personal or company.

### Does deleting the Grok Bot after a scare remove the Gmail login?

No. Deleting a bot removes its profile, conversation, and routines. It does not wipe the account's one shared computer. Browser cookies, files, and sessions can remain, and every remaining bot can use them. Revoke the Google grant on Google's third-party access page, sign out of Gmail in the shared browser, remove files you would not want the next bot to see, then delete. If you may need the work, hide the bot instead of deleting it, and still revoke the mailbox. Hide is not revoke. Delete is not a machine wipe.

### How is this grok bot checklist different from the safety checklist and the Gmail guide?

The safety checklist is general: what to connect, money tools, consent-screen reading, revocation across connectors. The Gmail guide is a permissions catalogue: scope families, a five-label taxonomy, and a draft-only charter once you are connecting. This grok bot checklist is the numbered paper you complete before any of that, on a mailbox you have not yet granted. It forces identity, a never-send list with named verbs and recipients, test versus production, the shared-computer cookie warning, and a failure signal that can fail. If this sheet fails, stay disconnected.
`,
};
