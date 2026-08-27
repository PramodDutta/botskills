import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Retire a Grok Bot Without Leaving Sessions Behind',
  description:
    'Retire grok bot by signing out of consoles, rotating what it touched, then deleting the named bot. Delete does not wipe the shared computer. Routines die with the bot.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# How to Retire a Grok Bot Without Leaving Sessions Behind

Scratch bots named temp keep vendor sessions after you retire them from the sidebar. The named profile is gone. The trial cookie is not. The PDFs under \`/workspace\` are not. The Monday digest you parked on that disposable card is gone, and that last part is the one people notice a week later.

This page is the retirement checklist, not the delete-click walkthrough. That walkthrough lives on [How to Delete a Grok Bot Without Leaving Logins Behind](/blog/delete-a-grok-bot-safely). Here the job is sessions, files in \`/workspace\`, cookies, and any routine you still need. Recreate that routine on another bot first. Delete the named bot last.

All bots on an account share one persistent cloud computer assigned to your user account, not to a bot. Each bot gets a screen. Screens are not security boundaries. Cookies, sessions, files, and command-line credentials are shared. Deleting a Bot does not remove shared-computer files or browser sessions. Deleting a Bot does delete its routines. Plan around both facts, in that order.

## Separate this retirement checklist from the delete-click page

People search "retire grok bot" and "delete a grok bot" as if they were the same verb. They are not. Delete is a roster action: the name leaves the sidebar, the conversation goes, the routines go. Retirement is the human work around that action so the rest of the fleet does not inherit a live vendor console. If you only need the click, the sibling page is enough. If temp signed into a vendor, dumped files, and still holds a standing job, you need this page. The click is step last.

| Job you actually have | Page that owns it | What this page will not redo |
|---|---|---|
| Sidebar delete, hide, duplicate, iPhone cannot finish teardown | [Delete a Grok Bot safely](/blog/delete-a-grok-bot-safely) | The click itself and the HubSpot contractor story |
| Monday vanished after a disposable owner disappeared | [Routine did not run](/blog/grok-bot-routine-did-not-run) | Clock choice and the 20-record postmortem |
| Second eligible account, hosted MCP, never pasting keys onto this disk | [Isolate credentials](/blog/how-to-isolate-grok-bot-credentials) | Building a vault you do not have yet |
| Sessions, \`/workspace\` dumps, cookies, recreate-then-cut | This page | Isolation architecture and the delete UI |

Use the table as a routing rule. Hide if you might still need the chat. Pause if the job should stop tonight and you are not at a desk. Recreate if a standing job must outlive the scratch name. Delete only after the shared computer no longer holds what temp was allowed to hold. [What Is a Grok Bot?](/blog/what-is-a-grok-bot) is the product definition: a durable profile on an account-level computer. Retirement takes the profile down without pretending the computer went with it.

## Inventory every vendor console temp actually signed into

Open the bot while it still exists. Ask it to list every site, console, CLI profile, connector, skill, routine, and folder it used. Write that list somewhere you own. After delete you will not get the chat back, and there is no audit view of Bot actions yet.

People skip this because they remember "I only logged into the vendor." Temp rarely did only that. A pricing scrape often also opened a status page, a docs subdomain, a support portal, and a PDF under \`/workspace\`. The sibling that opens next, often [Inbox Triage](/bots/inbox-triage), gets the same cookie jar.

| What temp touched | Lives where | Survives named-bot delete? | Retirement move |
|---|---|---|---|
| Vendor trial cookie | Shared browser | Yes | Sign out, then revoke at the vendor |
| Status-page or docs cookie | Same cookie jar | Yes | Sign those out too |
| Files under \`/workspace/temp-[vendor]/\` | Shared disk | Yes | Delete or move them off this computer |
| Monday digest parked on temp | That bot only | No. Routines die with the bot | Recreate on a keeper bot first |
| Last twenty run records | That routine only | No | Copy what you still need |
| Skill saved from the scrape | Skill list, across bots | Yes | Disable it if it should not travel |
| Hosted MCP sign-in token | Cursor's backend | Not a disk leftover | Revoke the connection in settings |
| CLI token in a profile file | Shared home directory | Yes | Rotate at the issuer, then remove the file |

The inversion is the whole checklist. Digest wording and last runs die with the bot. The cookie, the dump, the CLI token, and the skill stay. If temp used hosted MCP instead of a browser login, say so in the list. Those tokens never land on the computer. Mixing the two drawers is how people "sign out" and leave the grant alive.

## Recreate keeper routines on a durable bot before you cut temp

A routine assigns a workflow to one Bot. Max 50 routines per Bot. The app keeps 20 most recent run records per routine. Deleting a Bot deletes its routines. Nothing is team-level. There is no org calendar that holds the Monday digest while temp goes away.

If the digest still matters, it must live on a bot you do not plan to retire. [Lead Scout](/bots/lead-scout) is named research that should still exist in November. [Standup Scribe](/bots/standup-scribe) is a named weekday job that posts only to your own DM. Temp is a scratch pad. Parking a standing job there is how you schedule a silent Monday.

Recreate while temp still exists. Copy the text, create it on the keeper, enable it, confirm ownership, then pause the copy on temp so you do not get two fires. Delete first and you reconstruct from memory. Twenty run records die with the routine.

| Standing job currently on temp | Still needed after retirement? | Recreate onto | If you skip recreate and delete |
|---|---|---|---|
| Monday vendor digest you still want | Yes | A durable research bot, often Lead Scout | The digest dies. Missed run, not a clock bug |
| One-shot "scrape the trial once" | No | Nowhere | Fine. Do not invent a standing job |
| Weekday standup parked because temp was open | Yes | Standup Scribe | Empty Monday. See the missed-run page |
| Overflow routine 51 you could not fit on the keeper | Wrong fix | Split or drop. Fifty is a stop | You used a disposable name as a second scheduler |

Copy the wording into a file you own if it took weeks to tune. Duplicate is not isolation. It copies profile, settings, skills, routines, and avatar. It does not copy conversation history or isolate the cookie. Both cards still stand on the same computer. If Monday is already empty, stop this checklist and read [Grok Bot Routine Did Not Run](/blog/grok-bot-routine-did-not-run).

## Sign the vendor out of the shared browser, then revoke at the source

Sign-out on the computer is not optional theatre. The security docs tell you to sign out of a service when it should no longer be available, because the delete control will not do it. Open Agent Computer. Open the vendor URL. Sign out until you see a login prompt, not the trial portal.

Then revoke at the vendor. Session cookies can outlive a polite sign-out. Confirm the labels on the vendor's current security, devices, or connected-apps page. This article will not invent those menu names. If the trial used a vendor-owned seat, ask them to disable it. If you reused a personal password on a 14-day trial, rotate it.

Do this for every console on the inventory. A docs subdomain, a status page, and a billing portal are three sessions more often than they are one. Hosted MCP is a different drawer: tokens stay with Cursor's backend, never on the computer. Revoke the connection in settings. A browser sign-out does not pull a backend grant, and a settings revoke does not clear a cookie.

Do not ask temp to reopen the vendor to "confirm." Confirmation is a login prompt on a page you opened. Reopening mints a fresh cookie while you are trying to kill the old one.

## Sweep /workspace research dumps so a sibling bot cannot open them

Files the bot wrote under \`/workspace\` stay on the shared disk after you delete the name. Research dumps are the quiet half of leftover sessions. Inbox Triage does not need the vendor cookie if last week's trial CSV is still sitting in a folder anyone can open.

Name the folder while temp still exists. \`/workspace/temp-nimbusops/\` is a handle you can delete. Files named \`pricing.pdf\` in the workspace root are how residue hides. Move strays into the named folder, then delete the folder after sign-out. Confirm with a directory listing. A tidy screen is not a tidy disk.

Screenshots of a live vendor dashboard are data. Delete the images. Do not archive them on this computer "for later." Later is another bot on this account. If a file contains a token, revoke the token at the issuer first, then delete the file.

Skills saved during the evaluation are available across bots. They do not die with temp. If the scrape method should not travel, disable or delete the skill. The wider map of the shared machine is in [One Computer, Many Screens](/blog/grok-bot-shared-computer-security). This section is the retirement pass: named folder, listing, gone.

## Rotate cookies and tokens temp used, then delete the named bot last

Rotation is the step people collapse into "I signed out." Signing out ends a browser session you can see. Rotation ends the credential that can mint a new one: a reused password, an API token minted to pull a CSV, a CLI profile, an app password created because 2FA was in the way.

Do it after inventory and after keeper routines exist on another bot. Do it before delete. Once the named bot is gone you still have the computer, but you have lost the chat that named the token file.

Delete last means last. After: keeper routine exists and is enabled, temp's copy is paused, vendor shows a login prompt, vendor-side revoke is done, MCP grant is pulled if you used one, \`/workspace\` dump is gone, skill is disabled if it should not travel, CLI profile is removed, token is rotated.

Then delete the named bot from a Mac or Windows desk. That click is documented on the delete-safely page. This page's job is to make that click boring. If you may need the conversation next month, hide instead of delete, and still do the session and file work. Hide does not pause routines and does not sign anyone out. Retirement that stops at hide is clutter. Retirement that stops at delete without the list above is how Inbox Triage inherits a vendor admin.

## Walk Jordan's NimbusOps trial temp from a live cookie to a dead session

Jordan needed a two-hour read of a vendor partner portal. Call the vendor NimbusOps in this walkthrough. Confirm real labels on the vendor's current page. Jordan created a bot named temp, signed into the 14-day trial, dumped a usage CSV into \`/workspace/temp-nimbusops/\`, saved a "NimbusOps scrape" skill, and attached a Monday 08:30 digest to temp because that card was already open. The evaluation ended. Jordan wanted to retire grok bot temp.

The failure path is one click. Temp disappears. Monday 08:30 does not fire, because routines die with the bot. [Lead Scout](/bots/lead-scout) opens NimbusOps on Tuesday already signed in. Inbox Triage can open the CSV. The scrape skill still sits in the \`/\` menu. "The vendor login is gone because the research bot is gone" is false on this runtime.

The retirement path, on desktop, while temp still exists:

1. Inventory. Temp lists NimbusOps trial, the vendor status page, \`/workspace/temp-nimbusops/\`, the scrape skill, the Monday 08:30 digest, and a CLI token minted to pull the CSV. Jordan copies that list off the computer.
2. Recreate. Copy the digest onto Lead Scout, enable it, confirm ownership, then pause the copy on temp.
3. Sign out until NimbusOps and the status page return login prompts.
4. Revoke the session and the CLI token on NimbusOps's current security or devices page. Rotate the password if it was reused.
5. Delete \`/workspace/temp-nimbusops/\` and confirm the path is gone.
6. Disable or delete "NimbusOps scrape."
7. Delete temp last.

Tuesday's check is not a feeling. From Inbox Triage, not from temp, open the NimbusOps URL. Login prompt is pass. Portal as the trial user is fail. Missing \`temp-nimbusops\` is pass. CSV still there is fail. Monday 08:30 on Lead Scout is pass. Digest only lived on temp is fail, and that fail is already a missed week. Substitute a CRM trial or a billing console and the order does not change. The product pages will. Read those on the day you retire.

## Keep standing jobs off any scratch card you already plan to retire

The cheapest retirement is the one you designed at create time. If the card is already called temp, do not attach a job you will still want in November. Create the standing job on the durable name first. Use temp only for the throwaway scrape. That split is roster hygiene, not isolation. Both bots still share the computer. You are only refusing to glue a calendar object to a name you intend to kill.

Write the owner in one sentence: "This Monday digest belongs to Lead Scout. If that bot is missing, the digest is missing." There is no team-level routine store. Fifty routines on one Bot is a hard stop. Using temp as overflow is how a scratch name becomes load-bearing.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) stays internal and never sends. It is supposed to still exist in November. That is a keeper. "Temp" is a kill instruction you wrote on day one. Cadence and timezone belong in [Grok Bot scheduling](/blog/grok-bot-scheduling). Ownership belongs here. A perfectly scheduled job on a bot you are about to retire is a perfectly scheduled deletion.

## Answer the claim that a fresh research name wipes the old vendor login

The strongest objection to this checklist is: skip it. Make a new research bot. Call it research-2. The old cookie belonged to temp. The new screen is a clean room. Deleting temp was the isolation step.

The docs contradict that. All bots on an account share one persistent cloud computer assigned to the user, not to a bot. Cookies, sessions, files, and command-line credentials are available across the roster. Do not use separate Bots as a security boundary. Screens are work surfaces, not security boundaries. Deleting a Bot does not remove shared-computer files or browser sessions.

research-2 is a new screen on the same managed Linux VM. The Bot runs as a non-root user on that VM. That is not a new machine, and it is not a Linux desktop client. NimbusOps still loads. The CSV still lists. You paid for a second row in the sidebar, not a factory reset.

Where the objection wins is narrow. If temp never left the computer (no login, no file, no token, no skill, no standing routine you still need), delete is a roster tidy. Most scratch bots people retire exist because they signed into something. If you actually need isolation, use a second eligible account or hosted MCP. Those moves live on [How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials). Renaming a screen is not on that menu. Call this week's work a session close.

## Fail Inbox Triage if it can still load the vendor as the trial user

A retirement you do not test is a story you told yourself. Run checks that are allowed to fail, from a sibling bot on the same account. [Inbox Triage](/bots/inbox-triage) is a good sibling because it was not supposed to be a vendor researcher. If it can still open the trial, the cookie is roster-wide. Checking from temp's own screen only tells you temp can see temp's leftovers.

| Check from Inbox Triage (not from temp) | Pass | Fail |
|---|---|---|
| Open the vendor URL in the shared browser | Login prompt | Portal loads as the trial user |
| Open the inventoried status page or docs subdomain | No authenticated banner | Session still live |
| List \`/workspace\` for the temp vendor folder | Path does not exist | CSV, PDF, or screenshot still there |
| Open the \`/\` skill menu | Vendor scrape skill absent or disabled | Skill still offered |
| Open routines on the keeper bot | The digest you still need exists there | The digest only lived on temp |
| Harmless read with the old CLI token | Authorisation error | Data comes back |

The fail column is the point. If NimbusOps still loads, you are not finished. If Monday 08:30 only lived on a deleted card, you are late. Recreate the keeper before the click. Teardown of a vendor session does not teardown Gmail. See [the safety checklist](/blog/grok-bot-safety-checklist) before you connect a mailbox. Sign out of the vendor. Leave the mailbox grant if it is still in scope.

## Treat admin Kill as a coming-soon VM halt that still keeps durable storage

Teams documentation describes an administrator Kill action that deletes the VM while durable storage is kept. Label that as coming soon, not shipped. This article will not invent a ship date. Do not wait for Kill. Do not file it as this week's wipe.

Even when it ships, durable storage is kept. Killing the VM is a halt of the running machine. It is not a promise that \`/workspace\` dumps vanish, that a vendor must re-auth, or that you get an audit log. An audit view of Bot actions does not exist yet. Kill would still not record what temp already did.

A related coming-soon control is a team-level ceiling on local execution (Never / Ask every time / Always), where members can choose a stricter option but not a looser one. That is about the Mac or Windows machine in front of you, not leftover vendor cookies on the cloud computer. Pause exists today and is also not a wipe. Pause routines if you are away from a desk, then do sign-out and file removal on a supported desktop.

Deleting the Cursor account is a different flow, via account settings. This page is how to retire grok bot profiles. It is not an account-deletion guide.

## Finish the named-bot delete from Mac or Windows, because iPhone cannot

On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop. Supported clients are macOS on Apple silicon and Intel, Windows on x64 and Arm64, and iPhone on iOS 18 or later. There is no Linux desktop app, no Android app, and no iPad app. The bots run on a managed Linux VM. The desk you drive it from cannot be a Linux desktop, and it cannot be your phone if the job is delete.

Pause from the phone if you are away. That stops the Monday digest from firing. It does not sign NimbusOps out, delete \`/workspace/temp-nimbusops/\`, or recreate the digest on Lead Scout. Those steps need a Mac or Windows machine. If the only machine in the room is Linux, wait for a supported desk. Do not invent an SSH story as a retirement method. Your local Linux laptop is not the control plane. Do not start retirement on a phone and call it done.

## Paste the retire grok bot order into temp before the first vendor login

The boundary that makes a scratch research bot safe to run is not only "never send, never purchase, never change vendor records." Those still matter. This page adds: never treat disappearance from the sidebar as a session close, and never park a keeper job on a name you already plan to kill. Put both in the bot's description so future you does not rediscover the order at 17:40 on a Friday.

Paste this block, then fill the bracketed names.

\`\`\`text
Role: scratch research bot named temp for [vendor] evaluation.
You read public docs and the trial console. You write files only under
/workspace/temp-[vendor]/. You never send, never purchase, never change
[vendor] records, never message the vendor. Drafts stay in this conversation.

Retirement is a human checklist. You never claim a sidebar delete signed
anyone out. You never claim a new bot name is a clean room.

When I say retire:
1. List every console, cookie, file path, skill, CLI token, and routine
   you used. Write them into /workspace/temp-[vendor]/RETIRE.md. Wait.
2. Pause your routines. I recreate any keeper job on [durable bot]
   before you disappear. You do not invent a replacement schedule.
3. I sign out of [vendor] on this computer and revoke at the source.
   You do not reopen [vendor] to "confirm."
4. After I confirm a login prompt, delete /workspace/temp-[vendor]/
   except RETIRE.md if I still need it, then stop.
5. I disable any skill from this evaluation that should not travel.
6. I delete you last. You do not volunteer "the login died with the
   name." That sentence is false on this runtime.

Boundary: you never sign into a second vendor on this computer, you
never attach a standing job I still want in November, and you never
tell me that isolation across bots will close a session.
\`\`\`

Three lines in that charter do the real work. Files go in a named folder so retirement has a path. Keeper jobs are forbidden on this card. The bot is forbidden from describing delete as a session close. Do not share a public bot link that contains vendor URLs or trial emails. A share link copies configuration, not your computer, but the configuration can still leak.

## Send isolation work and the delete click to the pages that own them

This checklist ends at a dead vendor session, a swept folder, a keeper routine that still exists, and a named bot that is safe to delete. It does not build a second computer or walk the sidebar control.

If the vendor was never supposed to share a disk with mail, isolate on [How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials). For the click itself, use [How to Delete a Grok Bot Without Leaving Logins Behind](/blog/delete-a-grok-bot-safely). If Monday is already empty, use [Grok Bot Routine Did Not Run](/blog/grok-bot-routine-did-not-run). Connect the minimum you keep on [Least Privilege for Bots](/blog/least-privilege-bots).

**Keep reading:** [How to Delete a Grok Bot Without Leaving Logins Behind](/blog/delete-a-grok-bot-safely), [Grok Bot Routine Did Not Run: The 20-Record Cap and the Deleted Bot](/blog/grok-bot-routine-did-not-run), [How to Isolate Grok Bot Credentials When Bots Share a Computer](/blog/how-to-isolate-grok-bot-credentials).

## Frequently Asked Questions

### Does retiring a Grok Bot sign the vendor out of the shared browser?

No. Retirement is the human checklist around delete. Deleting a Bot removes its active profile, conversation, and routines. Shared computer files and sign-ins are not isolated by Bot and may remain. The computer is a managed Linux VM assigned to your user account, not to that Bot, so every remaining bot keeps using the same disk and the same cookie jar. Sign out on the computer until you see a login prompt, then revoke at the vendor on that vendor's current security page. A new research name does not wipe the old session.

### What happens to routines when I delete the bot that owned them?

They die with the bot. A routine assigns a workflow to one Bot. Nothing is team-level. The app keeps twenty recent run records per routine, and those go too. Max fifty routines per Bot is a stop, not a reason to park overflow on a card named temp. If you still need the job, recreate it on a durable bot while the scratch owner still exists, enable the keeper copy, then pause the copy on temp. Delete first and you are reconstructing from memory, which is the missed-run case, not a timezone theory.

### Should I recreate a keeper routine before I retire temp?

Yes, if that job must outlive the scratch name. Recreate, enable, confirm ownership on the keeper, then pause temp, then sign out, then sweep files, then delete. Duplicate is not the same move. Duplicate copies profile, settings, skills, routines, and avatar. It does not copy conversation history or isolate the vendor cookie. Both cards still share the computer. Use recreate-on-a-keeper when the calendar object must survive and the name temp must not. Skip recreate only for one-shot work you do not want again.

### Does Admin Kill wipe leftover files after I retire a bot?

No. Admin Kill is documented as coming soon. It deletes the VM while durable storage is kept. There is no ship date in that description, and this page will not invent one. Even when it ships, kept durable storage means files you hoped would vanish may still be there. Kill is a halt, not an audit log, and not this week's substitute for sign-out and a directory listing. Pause exists today and also does not wipe the disk. Do the file pass yourself.
`,
};
