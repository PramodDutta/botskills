import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Hide, Duplicate or Delete a Grok Bot: Pick the One You Can Undo',
  description:
    'Hide, duplicate or delete a Grok Bot without losing work: what each control keeps, why hiding never pauses routines, and the checklist to run before you delete.',
  date: '2026-09-23',
  category: 'Guide',
  content: `
# Hide, Duplicate or Delete a Grok Bot: Pick the One You Can Undo

You want a Bot out of the way. Maybe it finished its job, maybe you want to try a different version of it, maybe the sidebar has simply grown too long. Grok Bot gives you three controls for this, Hide, Duplicate and Delete, and they differ in the one way that matters: only some of what they do can be taken back.

Hide is fully reversible, and it does not stop the Bot. Duplicate adds a second Bot without touching the first, and the copy brings the original's routines with it. Delete takes the Bot's profile, conversation and routines with no documented way back, and leaves its files and logins behind on the computer. This page ranks the three by reversibility, walks one person through all of them, and ends with a checklist to run before the one you cannot undo. Its sources, as of 23 September 2026, are the Grok Bot docs pages on [creating and managing Bots](https://docs.x.ai/grok-bot/bots), the [FAQ](https://docs.x.ai/grok-bot/faq) and [skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## Rank the three controls by what you can take back

Start with the table, because every decision on this page comes back to it.

| Control | What it does | What survives | Can you undo it? | Do the Bot's routines keep running? |
|---|---|---|---|---|
| Hide from sidebar | Removes the Bot from the main list | Everything: profile, conversation, memory, routines | Yes, with Unhide | Yes; hiding pauses nothing |
| Duplicate | Creates a second Bot named after the first, plus "copy" | The original is untouched | Yes, by deleting the copy | The original's do; the copy arrives with the same routines |
| Delete | Removes the Bot's profile, conversation and routines | Files and logins on the shared computer | The docs describe no way to restore it | No; its routines are removed with it |

Two cells in that table catch people out. The first is the top-right one: hiding a Bot does not pause it or its routines, so a hidden Bot keeps working on its schedule, out of sight. The second is the middle one: a duplicate carries the original's routines, so a careless duplicate can leave two Bots doing one job.

The docs' own advice follows the ranking. If you may need a Bot's work later, they say, hide it instead of deleting it. That is the rule of thumb for this whole page: reach for the most reversible control that does the job, and treat Delete as the last step of a process, not the first.

## Hide a Bot to tidy the sidebar, never to stop it

Hide from sidebar takes a Bot off the main list without deleting any of its work. Its conversation, its learned context, its routines and its settings all stay exactly as they were. The Bot is simply not in front of you.

To get it back, open Hidden Bots at the bottom of the sidebar and choose Unhide. If you have hidden every Bot you own, the sidebar shows Show Hidden Bots instead. On iPhone and Android, the conversation actions offer pin and hide as quick controls, so you can tidy the list from your phone as well.

The sentence in the docs that deserves the most attention is also the shortest: hiding does not pause the Bot or its routines. A hidden Bot with a routine scheduled for 09:00 on weekdays will run at 09:00 on weekdays. It will use its connectors, open its websites and post its results into a conversation you are no longer looking at.

That makes Hide the right tool for exactly one job, which is decluttering. It is the wrong tool for parking a Bot you are not sure about, retiring a Bot whose job has ended, or quieting a Bot that is misbehaving. For all three of those, you need the control the next section covers. Pin is Hide's opposite number: it keeps active Bots at the top of the sidebar, and it is often the better fix for a crowded list, because it changes what you see without hiding anything that is still working.

## Pause the routines when what you mean is park

The docs describe no Archive control. The nearest thing is a combination: hide the Bot so it leaves the sidebar, then pause each of its routines so it stops acting on a schedule. The pause is what matters. The hide is cosmetic.

Pausing lives on the routine itself. On the desktop, open the Bot, choose View conversation details, then Routines, and use the control to enable or pause each one. On iPhone and Android, open the Bot's profile, where each routine shows its schedule, next run, instruction and Run history, and use the Active toggle to pause or resume it. The phone can also delete a routine, but deleting a routine is immediate and has no undo, so pause rather than delete when you are parking.

One more detail makes parked Bots worth a periodic look. If you have been away a long time, the docs say, Grok Bot may ask whether routines should carry on, and can pause them when no answer comes. That can pause routines you meant to keep running, and it happens without your deciding anything. Whenever you come back to Grok Bot after time away, check which routines are paused and whether you meant it.

A parked Bot still has everything it had before: its conversation, its memory, and its access to whatever the shared computer is signed into. Parking stops it acting on a schedule. It does not reduce what it could do if you, or a group chat, or another Bot, sent it a message.

## Watch Beatriz duplicate a working Bot on a Friday afternoon

Beatriz runs a three-person bookkeeping practice. Her most useful Bot is Invoice Chaser, which runs a weekday routine at 09:00: it reads the practice's aged-debtors report, drafts a payment reminder for each overdue invoice in Beatriz's own voice, and leaves every draft unsent for her to review. Its declared boundary, written in its description, is that it never sends anything.

For clients more than 60 days overdue she wants to try a firmer tone. She does not want to break the Bot that works. So at 17:30 on a Friday she chooses Duplicate on Invoice Chaser.

The copy appears as "Invoice Chaser copy". It has the same profile, settings, enabled skills and avatar, and the same weekday 09:00 routine. It does not have the original's conversation, the preferences it has learned over three months, or the aged-debtors spreadsheet she attached to the original's chat in August. She renames it Invoice Chaser Firm, rewrites its description for the new tone and the new scope, and opens its routines.

The docs do not say whether a copied routine starts active or paused, so she does not guess. She opens the routine's control and sets it deliberately to active, because she wants the firm version to run on Monday, rather than trusting whatever state it arrived in. Then, to keep the original out of the way while the experiment runs, she hides it. At 17:50 she shuts the laptop, satisfied that one Bot will run on Monday morning.

Two will. The next sections explain what Duplicate carried and why the hide did not do what she expected.

## Read what Duplicate copies and what it leaves behind

The docs describe Duplicate as the way to reuse a role as the starting point for a different scope, with the example of one account-health Bot per region. That framing matters: a duplicate is a new Bot with the same job description, not a clone of the first Bot's experience.

| Duplicate carries | Duplicate leaves behind |
|---|---|
| Profile | Conversation history |
| Settings | Learned memory |
| Enabled skills | Chat attachments |
| Routines | |
| Avatar | |

The left column is configuration: everything you set up. The right column is experience: everything the Bot accumulated by working. A Bot keeps stable preferences, important facts and summaries of its work so it can hold a role over time, and none of that comes across. Beatriz's copy did not know that one client is on a payment plan and must never be chased before the 15th, because she taught the original that in a conversation in July.

The docs give one instruction for every duplicate: rename it and give it its new scope before you assign it work. The name matters more than it seems. A copy called "Invoice Chaser copy" looks like a spare. A copy called Invoice Chaser Firm, with a description that says which invoices it owns, looks like a teammate with a job. If you use the optional Label field on the Bot's profile, put the scope there too.

The routines line in the left column is the one to act on immediately. Open the copy's routines straight after duplicating and decide, routine by routine, whether the copy should run it, run it on a different schedule, or not run it at all. Leaving that decision for later is how two Bots end up doing one job.

## Trace Monday's double run back to Friday's hide

At 09:00 on Monday both Bots ran. Invoice Chaser Firm drafted firm reminders for the 23 invoices more than 60 days overdue. Invoice Chaser, hidden but not paused, drafted gentle reminders for all overdue invoices, including the same 23. Beatriz opened her drafts at 09:15 and found 23 pairs of contradictory emails waiting for her.

Nothing reached a client. Both Bots were built on the same boundary, draft and never send, and that single line turned a potentially embarrassing morning into ten minutes of deleting drafts. This is the argument botskills makes for declaring a boundary on every Bot: not because the Bot will misbehave, but because you will, and a Friday-afternoon slip should cost you drafts, not clients. If Invoice Chaser had been allowed to send, 23 clients would have received two reminders each in different tones on the same morning.

At 09:20 Beatriz opened Hidden Bots at the bottom of the sidebar, opened the original, and paused its routine. Then she did the thing she should have done on Friday: she rewrote the original's description so that it owned only invoices up to 60 days overdue, and she left its routine paused until the experiment ended.

The cause was not Duplicate and it was not Hide. It was treating Hide as if it were pause. The docs say plainly that hiding does not pause the Bot or its routines, and the whole failure fits inside that sentence.

## Split the scope on both halves after a duplicate

A duplicate splits a role in two, and a role split in two needs both halves rewritten. Beatriz rewrote the copy's scope on Friday and the original's on Monday. The Monday edit was the one that actually prevented a repeat.

The rule this site uses is simple. Whenever you duplicate a Bot to change how part of a job is done, write down, in both descriptions, which part each one owns, in terms a Bot can check: invoices up to 60 days for one, over 60 for the other; the EMEA region for one, the Americas for the other. Then compare the two routine lists and make sure no schedule does the same work twice. A Bot can own up to 50 routines, so on a busy Bot that comparison is worth doing carefully rather than by eye.

If the duplicate is an experiment rather than a permanent split, decide in advance how it ends. Either the copy wins and the original is deleted, or the original wins and the copy is deleted, or both survive with separate scopes. Beatriz wrote her end date into the copy's description: two weeks, then one of them goes.

## Keep a duplicate and a shared template apart

Duplicate and Share are easy to confuse because both produce a second Bot from the first. They are for different people and they carry different risks.

| | Duplicate | Share a template |
|---|---|---|
| Who gets the new Bot | You, on the same account | Anyone who can open the link, on their own account |
| Where it runs | Your shared computer, with your logins | Their computer, without your logins or history |
| What it carries | Profile, settings, enabled skills, routines, avatar | The configuration, including identity, description, skills and routines |
| Main risk | Two Bots doing one job | Secrets or internal details inside a description or routine |

A duplicate lives on your computer and shares everything that computer is signed into, which is why it works on day one. A template recipient gets a copy on their own account with none of your computer, logins or conversation history. The docs warn that anyone holding a public link can open it, and tell you to strip API keys, internal URLs and customer data first. Enterprise accounts default to team-only links.

One question the docs leave open: if you create a template from a Bot and later delete that Bot, they do not say whether the template link keeps working. If you shared a template of a Bot you are about to delete, check the link afterwards rather than assuming it died with the Bot.

## Delete only after the work has somewhere else to live

Delete is the one control on this page with no documented way back. The docs say deleting a Bot removes its active profile, its conversation and its routines from Grok Bot. Routine deletion is immediate, with no undo, and a Bot's routines go when the Bot goes. Behind the scenes, backend retention follows Cursor's terms, but nothing in the docs describes restoring a deleted Bot from the app.

That makes the order of operations the whole skill. Delete should come at the end, after everything worth keeping has been moved somewhere that is not the Bot: the routine instructions into a document or into a successor Bot, the conversation's useful results into files, the Bot's learned preferences into text, and any attachments you still need onto the computer's workspace or your own disk.

Two weeks after the double run, Beatriz decided the firm Bot's approach was better for all overdue invoices, not just the older ones. The copy would become the only Invoice Chaser, and the original would be deleted. She scheduled the delete for 16:40 on a Friday, and spent the hour before it on the steps in the next two sections.

## Pull the memory out before the Bot goes

The most valuable thing the original Invoice Chaser had was the thing Duplicate did not copy: three months of learned preferences and client exceptions. The payment-plan client who must not be chased before the 15th. The client who wants reminders addressed to accounts payable rather than the owner. The standing rule to never mention late fees to the practice's two oldest clients. All of it lived in the original's conversation and memory, and all of it would go with the Bot.

At 15:40 Beatriz asked the original to write every standing preference, client exception and formatting rule it had learned into a file in the workspace, one line each, with the date she had taught it where it could find one. She then read the list against her own memory of the conversation, corrected two lines, and pasted the relevant rules into the successor's description, which is where the docs say durable rules belong. The docs also caution that a Bot's memory is not an authoritative source, so she treated the list as a draft to check, not as a transcript.

She did two smaller things in the same hour. She saved the aged-debtors spreadsheet from August into the workspace, because chat attachments stay in the conversation and the conversation was about to go. And she noted the original's last few runs from its Run history, since the app keeps only the 20 most recent run records per routine, and the docs give no reason to expect those records to outlive the routine.

## Leave the logins a successor still uses

The docs say that deleting a Bot leaves shared-computer files and sign-ins behind, because they belong to the computer rather than to the Bot. Retirement checklists, the docs' own included, therefore tell you to sign the computer out of the sites the Bot used. That step is right for a retirement, and wrong for a replacement.

Beatriz was replacing, not retiring. Invoice Chaser Firm used the same accounting system and the same mailbox, through the same signed-in sessions on the same computer. Signing the computer out of either would have broken the successor on its next run. So she signed nothing out, and removed nothing from the workspace except the original's scratch files.

| Step | Retiring the job | Replacing the Bot with a successor |
|---|---|---|
| Pause or delete the routines | Yes | Yes, for the Bot being deleted |
| Sign the shared browser out of the Bot's sites | Yes | Only sites the successor does not use |
| Uninstall connectors and revoke them at the source | Yes, if no other Bot uses them | No; connectors are account-wide, so the successor still needs them |
| Remove the Bot's files from the workspace | Yes | Only files the successor does not need |
| Extract memory and preferences to text | Optional | Yes; the successor starts without them |
| Delete the Bot | Last | Last |

For the retirement column, [how to delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely) walks through the teardown in order, and [how to retire a Grok Bot](/blog/grok-bot-retirement) covers the case where a job ends entirely. Both are written for the retirement case. Neither applies unchanged when a successor is inheriting the sessions.

## Run the pre-delete checklist

This is the list Beatriz ran from 15:40 to 16:40. Paste it into the conversation of any Bot you are about to delete, and work down it before you click.

\`\`\`text
PRE-DELETE CHECKLIST (run before deleting any Grok Bot)

[ ] Could I hide this Bot instead? If I may need its work later,
    hide it and pause its routines. Stop here.
[ ] Routines: copy each routine's schedule, time zone and full
    instruction into a document or into the successor Bot.
[ ] Run history: note anything I need from the recent runs; only
    the last 20 run records per routine are kept, and they go too.
[ ] Memory: ask the Bot to write its standing preferences and
    exceptions to a file, one line each. Check the list myself.
[ ] Results: save any files, links or attachments from the
    conversation that I still need. The conversation is deleted.
[ ] Templates: if I shared a template of this Bot, decide whether
    the link should stay live, and check it after deleting.
[ ] Groups: note which group chats this Bot is in.
[ ] Retire or replace? If retiring, sign the computer out of the
    Bot's sites and revoke connectors no other Bot uses. If a
    successor uses the same sessions, leave them signed in.
[ ] Workspace: remove files only this Bot used and nobody needs.
[ ] Delete. Then confirm the Bot's routines no longer appear.
\`\`\`

The first line is there on purpose. The docs' own rule is to hide when you may need the work later, and the checklist should force that question before any other.

## Split the job between phone and desktop

You can do much of this from a phone, but not all of it. The mobile page lists pinning and hiding a conversation, editing a Bot's profile and deleting a Bot. For routines, the phone shows the schedule, the next run, the instruction and Run history, has the Active toggle for pausing and resuming, and can delete a routine. Editing a routine's schedule or instruction and testing a routine still need the desktop app.

| Task | Phone | Desktop |
|---|---|---|
| Hide or pin | Yes, from conversation actions | Yes |
| Pause or resume a routine | Yes, with the Active toggle | Yes |
| Read Run history | Yes | Yes |
| Delete a routine | Yes | Yes |
| Delete a Bot | Yes | Yes |
| Duplicate a Bot | Not listed on the mobile page | Yes |
| Edit a routine's schedule or instruction | No | Yes |
| Test a routine | No | Yes |

The practical split follows. Use the phone to stop things quickly: pause a runaway routine from a train, as the docs make possible. Use the desktop to change things: duplicate, rewrite scopes, edit routines and run the pre-delete checklist, which involves reading more than a phone screen comfortably shows. Deleting from the phone is possible, but the checklist before it is a desk job.

## Give the roster Bot the record and keep the delete key yourself

If you run more than a handful of Bots, a roster Bot can keep track of which ones are hidden, which are parked and which are candidates for deletion. [Fleet Chief Of Staff](/bots/fleet-chief-of-staff) keeps a living TEAM.md with every Bot's lane, boundary, waking routine and the date it last shipped something, and proposes retiring lanes that have gone quiet. [Chief of Staff Router](/bots/chief-of-staff-router) runs a weekly review that scores who shipped and can propose retiring one of two Bots that overlap. Both are built to ask before anything that cannot be undone.

That boundary is exactly right for this topic. The docs describe Bots suggesting and even creating other Bots; they do not describe one Bot deleting another, and your roster Bot's charter should keep it that way. Let it maintain the record, propose the hide or the delete, and flag a hidden Bot whose routines are still active, which is precisely the case that caught Beatriz. Then you press the button.

Add one line to whichever roster Bot you use: every Bot marked hidden in TEAM.md must also list the state of its routines. A hidden Bot with active routines is either a deliberate choice or a mistake, and the roster should make you say which.

## Answer the reader who says delete is fine because a Bot is easy to rebuild

The best version of this objection is a fair one. A Bot is mostly configuration. You can rebuild it from its description, a saved skill, or a template in a few minutes, and a sidebar full of hidden Bots is its own kind of mess. Delete freely and rebuild when needed.

The configuration part is true. What it misses is everything that is not configuration. Delete takes the conversation, which is where months of corrections were made, and the learned memory that came out of those corrections, and neither of those is in the description, the skills or a template. It takes the routines and their recent run records. And a rebuilt Bot starts cold, which is exactly how Beatriz's copy started, without the payment-plan exception it would have needed on day one.

The objection also assumes delete gives you a clean slate. It does not. The files and logins the Bot used stay on the shared computer, available to every other Bot you run. So deleting freely costs you the part that was hard to rebuild and keeps the part that was risky to leave. If tidiness is the goal, hide the Bot and pause its routines, which is reversible and has the same effect on your sidebar.

## Check the morning after

The day after any hide, duplicate or delete, spend two minutes confirming it did what you meant. These checks can fail, which is why they are worth running.

After a hide, open Hidden Bots and check the hidden Bot's routines. If any are active and you did not intend that, pause them now. After a duplicate, confirm both Bots have distinct names, distinct scopes in their descriptions, and no routine that does the same work twice. After a delete, search your routines, which the phone's search covers as well as the desktop's, and confirm the deleted Bot's routines are gone, then check that any successor ran on schedule and produced one set of results rather than two.

Beatriz's check on the Monday after her delete took ninety seconds: one Invoice Chaser in the sidebar, one set of drafts from the 09:00 run, the payment-plan client handled correctly, and no trace of the original's routine in search.

## Learn when this page stops applying

Bot management is still settling while the product is in beta. What you read above matched the docs as of 23 September 2026. Several changes would turn parts of this page over: an Archive control that pauses routines as part of hiding, a documented answer on whether copied routines start active or paused, a way to restore a deleted Bot, or a Duplicate control on the phone.

If your app shows any of those, the app wins and this page is stale on that point. Re-read the page on [creating and managing Bots](https://docs.x.ai/grok-bot/bots) and the [skills and routines page](https://docs.x.ai/grok-bot/skills-routines-and-automations) before you rely on the ranking above. The ranking itself should outlast any of those changes: prefer the control you can undo, and treat delete as the last line of a checklist.

## Frequently Asked Questions

### Does hiding a Grok Bot stop its routines?

No. Hide from sidebar only removes the Bot from the main list; the docs say hiding does not pause the Bot or its routines, so a hidden Bot keeps running on its schedule. To park a Bot, hide it and then pause each routine, using the routine controls in the Bot's details on the desktop or the Active toggle on its profile on iPhone and Android. Restore a hidden Bot from Hidden Bots at the bottom of the sidebar with Unhide.

### What does duplicating a Grok Bot copy?

Duplicate creates a Bot named after the original with "copy" added. The copy takes the original's profile, settings, enabled skills, routines and avatar; it leaves behind the conversation history, the Bot's learned memory and any chat attachments. Because routines come across, open the copy's routines immediately and decide which should run, since the docs do not say whether copied routines start active. Rename the copy and give it a distinct scope before assigning any work.

### What happens when you delete a Grok Bot?

Deleting a Grok Bot removes its active profile, its conversation and its routines, and routine deletion is immediate with no undo. Files and sign-ins on the shared cloud computer are not tied to one Bot, so they can remain available to your other Bots. Backend retention follows Cursor's terms. As of 23 September 2026 the docs describe no way to restore a deleted Bot, and they advise hiding it instead if you may need its work later.

### Should I hide or delete a Grok Bot I no longer use?

Hide it if there is any chance you will need its work, and pause its routines so it stops acting on a schedule; both steps can be undone. Delete only after you have copied its routine instructions, saved the results and attachments you need, extracted its learned preferences to text, and decided whether its logins should stay for a successor. Deletion removes the Bot but not its files or sessions, so it does not clean the computer.
`,
};
