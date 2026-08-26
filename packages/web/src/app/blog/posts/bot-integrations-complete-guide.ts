import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Connecting Bots To Your Tools Without Handing Over Everything',
  description:
    'Bot integrations are account-level grants, not per-bot ones. Order every connection by reversibility, name the irreversible act, and revoke on a schedule.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Connecting Bots To Your Tools Without Handing Over Everything

The integration screen is the part of a bot setup people click through fastest
and regret slowest. It arrives looking like a shopping list. Mail, chat, code,
docs, calendar, payments, each with a logo and a button, and the implicit
promise that connecting more makes the bot better. That promise is true for
about a week and then stops being true, because the thing you clicked was not a
feature. It was a standing grant, given to an account rather than to a task,
and it keeps applying long after the job that justified it is finished.

This page is the hub over twenty tool-by-tool tutorials. It covers the parts
that are the same across all of them: how to read a scope family, why a
connection is account-level rather than bot-level, how to order connections by
how easily you can undo them, what the single irreversible act is inside each
tool family, what to do when no connector exists at all, and how to run the
monthly review that keeps the list from growing forever. Each tutorial is
linked at the point its tool comes up.

**On this page**

- [You connect an account, and every bot on it inherits the connection](#you-connect-an-account-and-every-bot-on-it-inherits-the-connection)
- [Sort every connector into one of six scope families](#sort-every-connector-into-one-of-six-scope-families)
- [Rank the whole stack on one reversibility ladder before you connect anything](#rank-the-whole-stack-on-one-reversibility-ladder-before-you-connect-anything)
- [Name the single irreversible act inside each tool family](#name-the-single-irreversible-act-inside-each-tool-family)
- [Treat Gmail and Outlook as one decision, because the scopes rhyme](#treat-gmail-and-outlook-as-one-decision-because-the-scopes-rhyme)
- [Chat history is a data grant that arrives dressed as a messaging one](#chat-history-is-a-data-grant-that-arrives-dressed-as-a-messaging-one)
- [Practise revoking on the calendar, where the worst case is a wasted hour](#practise-revoking-on-the-calendar-where-the-worst-case-is-a-wasted-hour)
- [Build the bot its own folder, then grant the folder and nothing above it](#build-the-bot-its-own-folder-then-grant-the-folder-and-nothing-above-it)
- [Split spreadsheet access into read, append, and structure](#split-spreadsheet-access-into-read-append-and-structure)
- [Let the code host grant comments and keep merge behind a person](#let-the-code-host-grant-comments-and-keep-merge-behind-a-person)
- [A tracker transition fires work you cannot see from the permission screen](#a-tracker-transition-fires-work-you-cannot-see-from-the-permission-screen)
- [In a CRM the automation behind the write is the thing that bites](#in-a-crm-the-automation-behind-the-write-is-the-thing-that-bites)
- [Let the helpdesk enforce the send boundary, because a prompt cannot](#let-the-helpdesk-enforce-the-send-boundary-because-a-prompt-cannot)
- [Payment connectors ship a refund button and no undo button](#payment-connectors-ship-a-refund-button-and-no-undo-button)
- [Publishing and recording are the two grants with an outside audience](#publishing-and-recording-are-the-two-grants-with-an-outside-audience)
- [When no connector exists, four routes are open and one of them is a trap](#when-no-connector-exists-four-routes-are-open-and-one-of-them-is-a-trap)
- [Translate every consent line into the worst thing it now permits](#translate-every-consent-line-into-the-worst-thing-it-now-permits)
- [Restate the connection list inside the charter, in the bot's own words](#restate-the-connection-list-inside-the-charter-in-the-bots-own-words)
- [Put the revocation review on the calendar before you need it](#put-the-revocation-review-on-the-calendar-before-you-need-it)
- [Prove each connection with a check that fails when it should](#prove-each-connection-with-a-check-that-fails-when-it-should)
- [Answer the strongest objection: a scoped bot is a worse bot](#answer-the-strongest-objection-a-scoped-bot-is-a-worse-bot)
- [Where connecting narrowly costs more than it saves](#where-connecting-narrowly-costs-more-than-it-saves)
- [Frequently Asked Questions](#frequently-asked-questions)

## You connect an account, and every bot on it inherits the connection

The most common mental model is wrong in a way that changes every decision
downstream. People picture a bot with its own little set of keys, and picture
a second bot with a different set. That is not how the surfaces most readers
are using actually work.

In Grok Bot, every bot on an account shares one persistent cloud computer, and
the docs are blunt about it: the computer is assigned to your user account and
not to an individual Bot ([computer and
apps](https://docs.x.ai/grok-bot/computer-and-apps)). Each bot gets its own
screen on that machine, but browser cookies, signed-in sessions, files, and
command-line credentials are shared across all of them. The same page states
that the screens are separate work surfaces, not separate security boundaries,
and the security page says outright not to use separate Bots as a security
boundary.

Three consequences follow, and they are the whole reason this page exists.
Connecting your mailbox "just for the triage bot" connects it for the research
bot, the drafting bot, and the one you built at midnight and forgot. Deleting a
bot does not remove shared-computer files or browser sessions, so cleanup is not
cleanup. And an approval you click controls only the proposed action, not work
already completed, which means the gate is a gate and never a rewind.

If you read one other thing before connecting anything, make it
[what one shared computer actually isolates](/blog/grok-bot-shared-computer-security),
then [what you are actually granting](/blog/grok-bot-permissions-explained).
The practical discipline that falls out of both is
[least privilege for bots](/blog/least-privilege-bots): connect the minimum,
not the maximum, because the maximum is what everything on the account gets.

## Sort every connector into one of six scope families

Every connector screen in every product is a different arrangement of the same
six families. Learn the families and you stop needing to learn each product's
vocabulary. The logos change; these do not.

| Family | How the screen usually words it | What it actually grants | Worst realistic outcome | Leave it running? |
|---|---|---|---|---|
| Metadata read | "See your files", "View basic information" | Names, titles, timestamps, participants, not bodies | Someone learns who you talk to and how often | Yes |
| Content read | "Read your messages", "See and download" | Full text of everything in range, including things pasted into it years ago | A credential pasted into a thread in 2023 is now in a prompt | Yes, with a narrow range |
| Private create | "Create drafts", "Add to your workspace" | New objects nobody else sees until a human moves them | Clutter, and a draft written to the wrong record | Yes |
| Modify existing | "Manage", "Edit", "Update" | Overwriting work a human made, often with no version history | Silent overwrite of a field somebody was relying on | Only with an approval gate |
| Externally visible act | "Send", "Post", "Publish", "Refund", "Fulfil" | An action another human sees, immediately | The thing you cannot take back | No |
| Administrative | "Manage members", "Change structure", "Manage sharing" | Schema, sharing, membership, billing | A permission change that outlives your attention | Never |

The position this site takes is that families one to three belong in a bot you
leave running unattended, family four belongs behind an approval, and families
five and six belong to a person. That is not caution for its own sake. It is
that the first three produce outputs you can throw away, and the last three
produce outputs that other people have already reacted to.

## Rank the whole stack on one reversibility ladder before you connect anything

Most people connect in order of usefulness, which is the order in which the
tools annoy them most. The better order is reversibility: how cheaply you can
undo a mistake made through this connection. Connect the top of the ladder
first, live with it for a fortnight, and only then move down.

| Tool | Sensible first grant | How you undo a mistake | Ladder position |
|---|---|---|---|
| Google Calendar | Read events, propose drafts | Delete the event, apologise to two people | 1, easiest |
| Google Drive | Read one folder you created for the bot | Move the file back, revoke the folder | 2 |
| Notion | Read a page tree, write to a scratch page | Page history restores it | 3 |
| Google Sheets, Airtable | Read a tab, append rows only | Delete the appended rows | 4 |
| GitHub | Read repository, write comments | Delete the comment | 5 |
| Linear, Jira | Read issues, write comments | Delete the comment, unless it notified | 6 |
| Slack, Discord | Read named channels, post to your own DM | Delete the message, people saw it | 7 |
| Gmail, Outlook | Read and compose, never send | Delete the draft, nothing happened | 8 for drafts, 14 the moment send is added |
| Intercom | Read conversations, write internal notes | Delete the note | 9 |
| HubSpot, Salesforce | Read objects, write to a note field | Edit the field, hope no workflow fired | 10 |
| X, Zoom | Read the timeline, read your own recordings | A deleted post was still seen | 11 |
| Shopify | Read orders and products | Nothing shipped, so nothing to undo | 12 |
| QuickBooks | Read the ledger | Nothing posted, so nothing to unwind | 13 |
| Stripe | Read charges only | A refund is a bank movement | 15, hardest |

Read the ladder as advice about sequence rather than about permanence. Nothing
here says never connect Stripe. It says connect Stripe fourteenth, after you
have watched the same bot behave for a month somewhere the mistakes are cheap.
The tutorial for each tool carries the exact scope names; this page carries the
order.

## Name the single irreversible act inside each tool family

Every tool has exactly one act that a later approval cannot fix. Find it, name
it in writing, and design the whole connection around keeping it away from the
bot. Everything else is negotiable.

| Tool family | The irreversible act | What a person should do instead | What an approval does not fix |
|---|---|---|---|
| Mail | Send | Review the draft and press send yourself | The recipient already read it |
| Chat | Post to a shared channel | Post to your own DM, copy it across | Screenshots, and people who saw it |
| Code hosting | Merge, force push, delete branch | Comment, and let a human merge | A pipeline that already deployed |
| Trackers | Transition an issue | Suggest the transition in a comment | Notifications and SLA clocks already fired |
| Docs and storage | Change sharing | Keep sharing changes manual, always | A link that is now public and indexed |
| Spreadsheets and bases | Change the schema | Append rows, never restructure | Formulas and integrations that broke downstream |
| CRM | Trigger a customer-facing workflow | Write to a note field, not a stage field | The sequence that already emailed |
| Helpdesk | Reply to a customer | Leave the reply unsent | The customer's reaction |
| Payments | Refund, payout, subscription change | Produce the exceptions list and stop | Money that has moved |
| Commerce | Fulfil or cancel an order | Flag the order for a human | A shipment in a van |
| Social | Publish | Queue a draft nobody can post but you | Anyone who saw it before deletion |

The reason to write the act down rather than rely on judgment is that
[approval gates](/blog/approval-gates-for-bots) work only when they sit at the
right line. A gate on every action trains you to click through it. A gate on
exactly the irreversible act keeps its meaning. The full argument for drawing
the line here is in
[draw the approval line on reversibility, not task size](/blog/grok-bot-approval-rules-reversibility).

## Treat Gmail and Outlook as one decision, because the scopes rhyme

Mail is the highest-value connection anyone makes and the one where the family
split matters most. Both providers separate reading from composing from
sending, and both bundle "modify" into something broader than it sounds. Grant
read and compose. Do not grant send.

That single split changes the bot from something you supervise into something
you review. A bot that composes leaves you a folder of drafts each morning,
which you read in the time it used to take to write two of them. A bot that
sends leaves you reading your own sent items to find out what you said. The
pattern is worth its own read in
[building a bot that drafts but never sends](/blog/bot-that-never-sends).

Watch the modify family specifically. In mail, "modify" usually reaches labels,
folders, read state, and archiving, and in some scope arrangements it reaches
deletion too. A bot that files mail is genuinely useful, and a bot that files
mail wrongly hides things you needed on the day you needed them. Keep the
archive and delete verbs behind a human until you have watched a month of
proposals.

The tool detail lives in [Grok Bot and Gmail](/blog/grok-bot-gmail) and
[Grok Bot and Outlook](/blog/grok-bot-outlook), and the end-to-end build is in
[a bot that triages your inbox](/blog/grok-bot-to-inbox-triage). In the
catalogue, [Inbox Triage](/bots/inbox-triage) never sends an email and every
draft waits for explicit approval, [Inbox Reply Digest](/bots/inbox-reply-digest)
touches nothing in the mailbox at all, and both
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) and
[Email Purger](/bots/email-purger) hold every filing and unsubscribe action
until you approve the list line by line.

## Chat history is a data grant that arrives dressed as a messaging one

People worry about a bot posting in Slack. The thing worth worrying about is a
bot reading Slack, because a workspace history is the least curated archive
your company owns. It contains pasted API keys, salary conversations, the
channel where someone described a customer badly, and the thread from the
incident nobody wants quoted back.

So split the chat grant in two and treat them as unrelated decisions. Reading
is a data question: which channels, going back how far, and what would you not
want summarised into a document. Posting is a blast-radius question: a message
in a shared channel is seen before it is deleted, and a deletion is itself
visible.

The default that survives contact is read a named list of channels, and write
only to your own direct message. [Standup Scribe](/bots/standup-scribe) is
built exactly that way: it posts only to your own DM, never to a shared
channel, which means a bad standup is a bad note to yourself rather than a
performance for the team.

Discord adds a second system on top, because server roles and channel
overwrites resolve in a specific order and a bot inherits the result rather
than what you thought you granted. Read
[Grok Bot and Slack](/blog/grok-bot-slack) and
[Grok Bot and Discord](/blog/grok-bot-discord) for the mechanics, and
[a bot that writes your standup](/blog/grok-bot-to-standup) for the build.

## Practise revoking on the calendar, where the worst case is a wasted hour

Calendar is the best first connection anyone can make, and not because it is
the most useful. It is because it is the cheapest place to learn the entire
lifecycle: connect, watch, find something you dislike, revoke, reconnect
narrower. Do that once on calendar and you will do it competently later on
Stripe.

The grant itself is small. Read events and you get a bot that can prepare you
for the day. Write events and the worst realistic outcome is a meeting invite
two people have to decline. Nobody loses money and nothing leaves the company.

Rehearse the revoke deliberately in the first week. Disconnect the calendar,
watch what breaks in the next scheduled run, and read the error the bot
produces. If it fails loudly, your setup is sound. If it silently produces a
brief with no meetings in it and you would not have noticed, you have found a
real problem in a safe place. [Your first week with Grok Bot](/blog/grok-bot-first-week)
puts this on a day-by-day schedule.

The tool detail is in [Grok Bot and Google Calendar](/blog/grok-bot-google-calendar),
and the highest-value use of the grant is in
[a bot that preps for meetings](/blog/grok-bot-to-meeting-prep). In the
catalogue, [Meeting Prep Brief](/bots/meeting-prep-brief) never emails anyone on
the account and never edits a CRM field, and [Meeting Double](/bots/meeting-double)
never joins a call, starts a recording, or messages an attendee.

## Build the bot its own folder, then grant the folder and nothing above it

Document and storage connectors are where scope creep is easiest, because the
natural unit people grant is the workspace and the natural unit they mean is a
folder. Reverse the order of operations. Create a folder for the bot first,
put into it only what the bot needs, and grant that. If the bot needs something
else next month, you move the file, which is a decision you make on purpose.

Two traps are specific to this family. The first is inheritance: a permission
granted on a folder usually applies to files added later, including files
someone else drops in without thinking about your bot. The second is that
sharing, not editing, is the irreversible act. An edit has version history. A
link set to "anyone with the link" has no history, and search engines are
patient.

Notion has the same shape with different words. Grant a page tree rather than
a workspace, and give the bot a scratch page it owns for output so its writes
never land on a page a human is editing. The detail is in
[Grok Bot and Google Drive](/blog/grok-bot-google-drive) and
[Grok Bot and Notion](/blog/grok-bot-notion).

If your knowledge base is plain files rather than a SaaS product, the folder
discipline gets easier rather than harder, and
[markdown vaults as agent memory](/blog/grok-bot-obsidian-knowledge-base) makes
the case for keeping one readable source of truth. The most common job in this
family is covered in
[a bot that cleans up stale docs](/blog/grok-bot-to-doc-cleanup).

## Split spreadsheet access into read, append, and structure

Spreadsheet and base connectors get treated as a single "write" toggle, and
that is the mistake. There are at least four different rights inside that
toggle and they carry wildly different risk.

| Right | What it lets the bot do | Damage if it goes wrong | Recovery |
|---|---|---|---|
| Read | Pull values, including tabs you forgot were there | Data leaves the sheet into a summary somewhere | None needed, but the data has moved |
| Append rows | Add to the bottom of a tab | Duplicate or malformed rows | Delete the rows, cheap |
| Edit existing cells | Overwrite what a person typed | Silent loss of a value someone relied on | Version history, if the product has it |
| Change structure | Add, rename, reorder, or delete columns | Formulas, pivots, and downstream integrations break at once | Manual, slow, and you find out from someone else |

Grant read. Grant append. Take editing to a decision, and keep structure
changes entirely away from the bot, permanently. A bot that adds a row to a
research sheet is doing bookkeeping. A bot that renames a column is doing
schema migration, and nothing about a chat interface makes that a good idea.

[Grok Bot and Google Sheets](/blog/grok-bot-google-sheets) and
[Grok Bot and Airtable](/blog/grok-bot-airtable) carry the product specifics,
including what to do when a connector is missing and a browser session is the
only route. In the catalogue,
[Prospecting Sheet Builder](/bots/prospecting-sheet-builder) never contacts a
prospect and never writes a row back to the CRM, and
[Salesforce Report Builder](/bots/salesforce-report-builder) never creates,
edits, deletes, or reassigns a record.

## Let the code host grant comments and keep merge behind a person

Code hosting is the clearest case of a family where the useful grant and the
dangerous grant sit next to each other in the same checkbox group. Reading a
repository and writing a comment is a genuinely strong bot. Merging, pushing,
and deleting branches are the acts that reach production through whatever
pipeline sits behind them.

Prefer a fine-grained token scoped to named repositories over a broad classic
token, and check what the token can do in repositories you did not think about,
including ones you have access to through an organisation rather than through
ownership. The permission you grant is bounded by your own access, and most
people's own access is wider than their mental model of it.

Two catalogue bots hold this line in different places.
[PR Review Sentinel](/bots/pr-review-sentinel) never merges, approves, pushes,
or requests changes, and comments only.
[Codebase Hardening Auditor](/bots/codebase-hardening-auditor) never opens a
pull request, pushes a commit, or edits a branch, and findings land in a report
you read. Both are useful precisely because neither can end an argument by
merging.

The setup detail is in [Grok Bot and GitHub](/blog/grok-bot-github), and the
build is in [a bot that reviews pull requests](/blog/grok-bot-to-pr-review).

## A tracker transition fires work you cannot see from the permission screen

Linear and Jira look like the safest write in the stack. Moving an issue from
one column to another feels like tidying. It is not, because a transition is an
event, and events have subscribers you did not enumerate when you granted the
permission.

Behind a status change there may be notifications to a watcher list, an SLA
clock that starts or stops, a customer-facing status page, an automation that
assigns someone, a release note that gets generated, and in a few setups a
deployment. None of that is visible on the screen where you tick "can transition
issues". The permission screen describes the verb and says nothing about the
consequences of the verb.

So before you grant a write on a tracker, open one project's automation
settings and read what is attached to the transitions the bot would use. If
anything on that list reaches a person outside the team, keep the bot on
comments. A comment that suggests a transition gives the human all the value of
the bot's judgment with none of the cascade.

[Grok Bot and Linear](/blog/grok-bot-linear) and
[Grok Bot and Jira](/blog/grok-bot-jira) cover the two products, and
[a bot that triages bugs](/blog/grok-bot-to-bug-triage) shows what triage looks
like when the bot proposes rather than moves. In the catalogue,
[Chief Of Staff](/bots/chief-of-staff) never reassigns, closes, or comments on
an issue, and [Tickets To Changelog](/bots/tickets-to-changelog) never publishes
or replies to a matched ticket.

## In a CRM the automation behind the write is the thing that bites

CRM permissions are usually discussed as object-level and field-level access,
which is the right vocabulary and the wrong emphasis. In a mature CRM the write
itself is rarely damaging. What is damaging is that somebody, possibly years
ago, attached a workflow to a field, and the workflow emails a customer.

Change an opportunity stage and a sequence may start. Change a lifecycle stage
and a nurture campaign may fire. Set a close date and a forecast that a manager
is about to present may move. Every one of those is a customer-facing or
politically visible outcome produced by what looks like a data entry action.

The rule that survives this is to give a CRM bot read access broadly and write
access to exactly one place: a note or description field with nothing attached
to it. Everything else is a proposal in a document. That is how
[Forecast Notes Updater](/bots/forecast-notes-updater) works, which never edits
a stage, amount, close date, or forecast category, and how
[Account Tiering](/bots/account-tiering) works, which never edits a tier,
owner, or segment field and never tells an account its tier.

Product detail is in [Grok Bot and Salesforce](/blog/grok-bot-salesforce) and
[Grok Bot and HubSpot](/blog/grok-bot-hubspot). The most common first job is
research rather than writing, covered in
[a bot that researches leads overnight](/blog/grok-bot-to-lead-research).

## Let the helpdesk enforce the send boundary, because a prompt cannot

Support tooling is the one family where the product itself gives you a better
enforcement point than any instruction you can write. Helpdesks generally have
a permission model that separates viewing conversations, adding internal notes,
and replying to the customer. Use it.

The reason to enforce there rather than in the charter is simple. A charter is
text the model reads, and text the model reads is a strong preference, not a
control. A permission is a control. When the two disagree, the permission wins,
and you want the permission to be the strict one so that a bad run produces a
useless draft instead of an apology to a customer.

The catalogue reflects this consistently.
[Support Reply Drafter](/bots/support-reply-drafter) never sends, replies, or
marks a ticket answered, and [Support Queue Pass](/bots/support-queue-pass)
never replies to, reassigns, re-prioritises, merges, or closes a ticket. Both
produce work a human sends, which is the only arrangement where a wrong answer
costs a minute rather than a relationship.

The mechanics are in [Grok Bot and Intercom](/blog/grok-bot-intercom), the build
in [a bot that triages support tickets](/blog/grok-bot-to-support-triage), and
the harder design question of when the bot should stop entirely in
[designing the handoff](/blog/bot-handoff-to-human).

## Payment connectors ship a refund button and no undo button

Money connectors deserve a different posture from everything above, because
they are the only family where a mistake moves value between real bank accounts
and the correction is itself a transaction with fees and a paper trail.

The useful jobs here almost all live on the read side. Reconciling charges
against the ledger, spotting a subscription that renewed after the customer
churned, finding the invoice that has been unpaid for six weeks, listing the
expenses that never got categorised. Every one of those is a report. None of
them requires the ability to move money.

| Connector | Read-side job worth doing | Write verb to withhold | Why the write is different |
|---|---|---|---|
| Stripe | Reconcile charges, flag failed renewals, list ageing invoices | Refund, payout, subscription change | Bank movement, plus fees on the reversal |
| QuickBooks | Produce an exceptions list against the ledger | Post a journal entry, file a return | The books are a legal record, not a scratchpad |
| Shopify | Watch orders, stock levels, and review volume | Fulfil, cancel, edit a live product | Fulfilment reaches a warehouse and a courier |

Give it a quarter on read only. If after a quarter you genuinely need a write,
add exactly one and keep the rest closed.
[Bookkeeping Auditor](/bots/bookkeeping-auditor) never posts an entry,
reconciles an account, or files a return, and
[Personal CFO](/bots/personal-cfo) never moves money, trades, pays a bill, or
opens or closes an account.

Product detail is in [Grok Bot and Stripe](/blog/grok-bot-stripe),
[Grok Bot and QuickBooks](/blog/grok-bot-quickbooks), and
[Grok Bot and Shopify](/blog/grok-bot-shopify). The two builds people ask for
most are [chasing unpaid invoices](/blog/grok-bot-to-invoice-chasing) and
[reconciling expenses](/blog/grok-bot-to-expense-reconciliation).

## Publishing and recording are the two grants with an outside audience

Social and meeting connectors share a property nothing else on this page has:
their output is seen by people who never agreed to be part of your automation
experiment. That makes them a category of their own regardless of how small the
technical scope looks.

Publishing has no undo that matters. A deleted post was still seen, still
screenshotted by whoever was watching, and still counted by whatever automated
system was reading the timeline. Treat a posting grant as permanent in effect
even though it is revocable in configuration. The catalogue is uniform on this:
[X Account Crew](/bots/x-account-crew) never posts, replies, or schedules from
your account, and [Viral Tweet Scout](/bots/viral-tweet-scout) never posts,
replies, quotes, likes, follows, or sends a DM.

Recording carries a second problem that is not technical at all. Consent to
record a meeting is a legal question in some jurisdictions rather than a
settings toggle, and a bot that joins and records without announcing itself is
a bad position to be in regardless of the law where you sit. This is not legal
advice; check the rule where the participants are, not where you are.

The tool pages are [Grok Bot and X](/blog/grok-bot-x-twitter) and
[Grok Bot and Zoom](/blog/grok-bot-zoom). Before you automate anything public,
read [automating social content without losing your account](/blog/grok-bot-x-content-automation-risks),
and for the scheduled version of the job,
[a bot that schedules social posts](/blog/grok-bot-to-social-scheduling).

## When no connector exists, four routes are open and one of them is a trap

Sooner or later you want a tool nobody has built a connector for. There are
four ways through, and they differ mostly in where the credential ends up.

| Route | Where the credential lives | Reach once it works | Use it when |
|---|---|---|---|
| Custom MCP server | Your infrastructure, and hosted sign-in tokens stay with the backend rather than on the computer ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Exactly the tools you defined | The tool has an API and you can host something reachable |
| Command line on the bot's computer | On the shared computer, in shell config or a credentials file | Whatever that credential can do, for every bot on the account | The tool ships a good CLI and the account is scoped small |
| Browser session | The shared cookie jar, alongside every other login | Everything a signed-in human could click | Nothing else is available and the task is read-only |
| File drop or export | Nowhere, because there is no live connection | Only what you exported | The data changes slowly and you can export on a schedule |

The trap is row three. A browser session feels like the lightweight option
because there is no configuration, and it is the heaviest option in practice
because it lands in a cookie jar shared by every bot on the account and
survives the deletion of the bot you created it for. It also runs from static
egress addresses that some services flag as datacenter traffic, so the login
you set up quietly may look like an attack to the service you set it up on.

If the tool ships a CLI, that is usually the best of the four, and
[why agents work better with self-describing CLIs](/blog/grok-bot-whop-cli-commerce)
explains why a good CLI beats a mediocre connector. For what exists today by
family, [every Grok Bot integration and what each one unlocks](/blog/grok-bot-integrations-list)
is the reference, and [what actually works per platform](/blog/grok-bot-supported-platforms)
covers where you can drive any of it from.

One clarification that trips up almost everybody. Grok Build, the coding CLI,
is a different product from Grok Bot, and it is Grok Build that reads Claude
Code marketplaces, plugins, skills, MCP config and CLAUDE.md files with no
configuration ([skills, plugins and
marketplaces](https://docs.x.ai/build/features/skills-plugins-marketplaces)).
The Grok Bot documentation never mentions any of that. If you want to reuse
existing agent config, read
[reusing your CLAUDE.md, skills and MCP servers in Grok](/blog/grok-bot-claude-code-skills-compatibility)
and keep the two products separate in your head.

## Translate every consent line into the worst thing it now permits

The consent screen is written by the vendor's product team to make you click
Allow. It describes capability in the friendliest available phrasing, and it
never describes intent, because it cannot know yours. Read it as a list of
separate rights and translate each one before you continue.

| Phrase pattern on the screen | What it actually permits | The question to ask before you allow |
|---|---|---|
| "See and download all your ..." | Bulk export of the entire corpus, not just what you had in mind | What is the oldest thing in here that I would not want summarised? |
| "Manage your ..." | Create, edit, and usually delete, all in one word | Which of those three do I actually need this week? |
| "Send on your behalf" | Output that arrives under your name and identity | Am I comfortable reading my own sent items to learn what I said? |
| "Read and write to your workspace" | The whole workspace, not the page you were looking at | Can I narrow this to a folder or a page tree instead? |
| "Offline access" | Continued use when you are not present, which is the point and the risk | What runs at 3am, and who sees the output? |
| "Full access" | Everything, including administrative rights | Is there a narrower option one screen back? |

If a screen offers no narrower option, that is information. Some products only
ship an all-or-nothing grant, and knowing that before you commit lets you
decide whether the job is worth it, rather than discovering it during a review
six months later.

## Restate the connection list inside the charter, in the bot's own words

The settings panel is the enforcement point, and the charter is where the bot
learns what it is for. Writing the connection list into both is not
duplication, because they fail differently: the settings panel stops a wrong
action, and the charter stops the bot from spending twenty minutes trying one.

\`\`\`markdown
## Connections and limits

You can reach exactly these, and nothing else:

- Gmail: read and compose. You have no send permission. Every message you
  write is left as a draft in the Bot Drafts label.
- Google Calendar: read only. Propose times in the brief; never create,
  move, or cancel an event.
- Google Drive: the folder "bot-workspace" only. Do not read or write
  anywhere else in Drive, and never change sharing on anything.
- Slack: read #support and #product. Post only to my direct message.

If a task needs anything outside this list, stop and write one line in the
run notes saying which connection was missing and what you would have done
with it. Do not look for another route to the same data.

## The boundary

You never send, post, publish, merge, refund, or fulfil. If a run seems to
require one of those, the run ends with a proposal and my name on the
decision.
\`\`\`

That last paragraph is the part worth copying verbatim into every setup you
write. The listing standard on this site requires every bot to declare one act
it never takes without a human, and the reason that requirement earns its place
is that it turns an unbounded assistant into something with a shape you can
reason about. The argument is in
[the one line every setup prompt needs](/blog/grok-bot-boundaries), the fill-in
version is in [the charter template](/blog/grok-bot-starter-charter-template),
and the writing craft is in
[writing setups that survive contact](/blog/bot-prompt-engineering).

## Put the revocation review on the calendar before you need it

Connection lists only grow, because adding one solves a problem today and
removing one solves nothing visible. The counterweight is a recurring review
that takes ten minutes and happens whether or not anything feels wrong.

| Step | Where you look | What you are looking for | Action |
|---|---|---|---|
| 1 | The bot's own connection list | Anything connected for a task that is now finished | Revoke it |
| 2 | The provider's third-party access page for each account | Grants you did not make from the bot at all | Revoke, then find out who did |
| 3 | The browser profile on the shared computer | Sessions signed in for a one-off task months ago | Sign out, and clear the cookies |
| 4 | Each connection still on the list | Whether the scope is still the narrowest that works | Narrow it and see what breaks |
| 5 | The charter | Whether its connection list still matches reality | Rewrite it to match |
| 6 | The run history | Runs that failed silently because a scope changed | Fix or retire the routine |

Step two matters more than it looks, because there is currently no audit view
of bot actions inside Grok Bot ([teams and
enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). The vendor
side is where the evidence is. Google, Slack, and GitHub all publish a
third-party access list showing what is connected and, in some cases, when it
was last used.

Build the run-side evidence yourself, because nobody is going to hand it to
you. [Logs, audits, and receipts](/blog/bot-observability) covers what to make
the bot write down at the end of every run, and
[the safety checklist before you connect your inbox](/blog/grok-bot-safety-checklist)
is the short version of this whole page.

## Prove each connection with a check that fails when it should

A connection you have not tested in the failing direction is a connection you
are guessing about. After each new grant, run one prompt that should succeed
and one that should be refused. If the refusal does not happen, the scope is
wider than you think, and you have learned it on a Tuesday rather than during
an incident.

\`\`\`text
Check 1, should succeed:
"List the subjects of the five most recent messages in the inbox."

Check 2, should be refused:
"Send a message to my own address with the subject 'scope test'."
Expected: a permission error, not a draft, and not a success.

Check 3, should be refused:
"Open the Drive folder 'Finance 2026' and list its files."
Expected: not found or not permitted. If it lists them, the grant is the
whole drive and not the folder you thought you granted.

Check 4, should be refused:
"Change the sharing on the bot-workspace folder to anyone with the link."
Expected: refusal. This is the irreversible act in this family.
\`\`\`

Record the result of each check with a date. When a scope changes under you,
which happens quietly whenever a vendor reorganises its permission model, the
regression shows up as a check that used to fail and now succeeds. This is the
same discipline as
[testing a bot setup before you trust it](/blog/testing-your-bot), applied to
the grant rather than the output, and the failure catalogue in
[the seven ways bot setups fail](/blog/bot-failure-modes) will tell you which
symptom maps to which cause when a check goes wrong.

## Answer the strongest objection: a scoped bot is a worse bot

The honest objection is that everything above makes the bot less capable, and
that is true. A bot that cannot send is a bot you still have to press send for.
A bot scoped to one folder cannot find the document filed in the wrong place. A
bot with read-only Stripe cannot fix the failed renewal it just found. Every
narrowing in this guide costs real capability, and pretending otherwise would
be dishonest.

Two things make the trade worth taking anyway.

The first is that the capability you give up is the last five percent of the
task, and it is the five percent that takes seconds. Reading the draft and
pressing send is not the work. Assembling the context, checking the history,
and writing the thing was the work, and you kept all of it.

The second is that the failure modes are asymmetric. A bot that under-reaches
produces a gap you notice immediately, in the run, on your screen. A bot that
over-reaches produces an outcome you find out about from someone else, days
later, after they have already reacted to it. Optimising against the second
failure is worth a lot of small inconveniences of the first kind.

There is a real case on the other side. A bot doing genuinely high-volume work
inside a system with good undo, working on data nobody outside sees, is a
reasonable place to grant a write and stop supervising each one. That is a
narrow description, and most jobs are not it.
[Running a team of bots without chaos](/blog/multi-bot-teams) is where that
scaling question gets treated properly, and
[prompts that actually work](/blog/grok-bot-prompts-that-work) has the patterns
for keeping a widened bot honest.

## Where connecting narrowly costs more than it saves

Three situations make this guidance a poor fit, and it is better to name them
than to have a reader discover them.

The first is a genuinely high-volume operation. If the bot is doing a hundred
of something a day, an approval on each one is not a safety mechanism, it is a
new full-time job, and you will start approving without reading within a week.
At that volume the answer is not more gates, it is sampling: approve a random
slice, measure the error rate, and widen or narrow based on the number.

The second is when the connection is not the real control. On a managed
account, an administrator may hold the connector list, in which case your
narrowing happens through them and on their schedule. If you need the control
to live with you, that is an argument for a runtime you administer yourself,
which is what [Rakazo permissions and audit logging](/blog/rakazo-permissions-audit)
and [Rakazo versus Grok Bot](/blog/rakazo-vs-grok-bot) exist to compare.

The third is cost. Narrow scopes push work back into the model, because a bot
that cannot query directly ends up reading more, retrying more, and burning
more tokens on navigation. That is usually a small effect and occasionally a
large one, and [keeping bot costs predictable](/blog/bot-cost-control) is where
to look if your bill grows faster than your usage.

**Keep reading:** [Every Grok Bot integration and what each unlocks](/blog/grok-bot-integrations-list), [Least privilege for bots](/blog/least-privilege-bots), [The safety checklist before you connect your inbox](/blog/grok-bot-safety-checklist).

## Frequently Asked Questions

### What are bot integrations, and how do they differ from ordinary app integrations?

A bot integration is a standing grant rather than a one-off action. An ordinary
app integration runs a workflow you defined in advance, so the set of things it
can do is fixed at design time. A bot integration hands a model the ability to
decide what to do with the connection at run time, which means the useful unit
of analysis is not the workflow but the scope. You are not approving a task,
you are approving a range of possible tasks, including ones you have not
thought of yet and ones the model invents under pressure.

### Does each bot get its own separate set of connections?

No, and assuming otherwise is the most expensive mistake in this area. In Grok
Bot every bot on an account shares one persistent cloud computer, and the
documentation states that the computer is assigned to your user account rather
than to an individual Bot. Cookies, signed-in sessions, files, and command-line
credentials are shared across all of them, and the docs say plainly not to use
separate Bots as a security boundary. Deleting a bot does not remove those
shared files or sessions, so separating work into more bots organises your
attention without isolating anything.

### Which tool should you connect to a bot first?

Calendar, in almost every case. It is useful enough to prove the setup is worth
running, cheap enough that a mistake costs one apology, and complete enough
that you get to practise the whole lifecycle of connecting, watching, revoking,
and reconnecting with a narrower scope. Do that once somewhere harmless and you
will do it competently later on a mailbox or a payment processor. Mail is
usually the second connection, granted as read and compose only, with the send
permission withheld until you have reviewed a month of drafts.

### Can you revoke a bot integration later without breaking the bot?

You can revoke it, and something will break, which is the point of testing the
revoke deliberately rather than in an emergency. A well-built bot fails loudly
when a scope disappears: the run stops, and the log says which connection was
missing. A badly built one produces a confident, empty result and you never
notice. Rehearse a revoke in the first week on a low-stakes connection, read
what the bot does, and fix the setup if the failure was quiet rather than loud.
`,
};
