import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Rotate Vendor Access After a Bad Grok Bot Incident',
  description:
    'Rotate vendor access after a bad grok bot incident at the vendor. Deleting the named bot does not sign you out of cookies, files, or CLI credentials.',
  date: '2026-08-28',
  category: 'Guide',
  content: `
# Rotate Vendor Access After a Bad Grok Bot Incident

The research bot opened Shopify admin at 09:14 on 25 August 2026 because Monday's 2FA job left Reza's staff cookie in the shared browser, and deleting the payouts bot had not signed anyone out.

That is the incident. The named bot is gone from the sidebar. The vendor is still open. Logout is a person at the vendor, not a roster click.

This page is the incident rotate: sign out consoles, revoke OAuth, rotate keys, sweep files, then maybe delete the named bot. The delete click is [How to Delete a Grok Bot Without Leaving Logins Behind](/blog/delete-a-grok-bot-safely). The architecture is [One Computer, Many Screens](/blog/grok-bot-shared-computer-security). Planned teardown of a scratch card named temp is [How to Retire a Grok Bot Without Leaving Sessions Behind](/blog/grok-bot-retirement).

If the 2FA field is still on screen, stop and use [Grok Bot Hit a 2FA Prompt](/blog/grok-bot-2fa-prompt). This page starts after someone already typed the code.

## Treat a bad grok bot incident as a vendor rotate, not a sidebar delete

A bad grok bot incident is a live vendor identity on the account computer. The research bot did not break into Shopify. It opened a tab. The staff session was already there because a different named bot, on a different screen, completed 2FA the day before.

Your account holds one persistent cloud computer. Docs assign it to the user account, not to an individual bot. A screen is a work surface. The security docs say not to treat separate bots as a security boundary. Cookies, sessions, files, and command-line credentials travel with the computer. Deleting a Bot removes its profile, conversation, and routines. Shared-computer files and browser sessions may remain.

The rotate is vendor work. Close the identity where the vendor stores it, then decide whether the named bot still needs to exist. People reverse that order because the sidebar is closer than Shopify's security page.

| What already happened | This page | Send that work elsewhere |
|---|---|---|
| A remaining bot loaded a vendor as staff | Yes. Rotate at the vendor, then maybe delete | Not the delete UI |
| You want the sidebar click, hide, duplicate, and the iPhone gap | No | [Delete a Grok Bot safely](/blog/delete-a-grok-bot-safely) |
| You want why screens are not sandboxes | No | [Shared-computer security](/blog/grok-bot-shared-computer-security) |
| You planned to retire a scratch bot named temp | No | [Retire a Grok Bot](/blog/grok-bot-retirement) |
| The 2FA prompt is on the Agent Computer right now | No | [The 2FA incident page](/blog/grok-bot-2fa-prompt) |

If the vendor session is live, stay here. If you only need the click, leave. An incident does not wait for Friday.

## Write the incident inventory while the named bot still exists

Open the incident bot while the profile is still on the roster. Ask it to list every site, console, CLI profile, connector, skill, routine, and folder it used in the last week. Write that list in a file you own. After delete you will not get the chat back.

There is no audit view of Bot actions yet. The product will not print "Reza signed into Shopify admin on Monday at 16:40." The bot's recap is the inventory, and it expires when you delete the name.

People skip this because they remember "I only logged into Shopify." A 2FA run often also opened a docs subdomain, a payments page, and a CSV under \`/workspace\`. [Inbox Triage](/bots/inbox-triage) gets the same cookie jar even if it never asked for a store.

| What the incident bot touched | Lives where | Survives delete? | Rotate move |
|---|---|---|---|
| Vendor staff cookie | Shared browser | Yes | Sign out until a login prompt |
| OAuth or connected-app grant | Vendor's account | Yes | Revoke on the vendor's current apps page |
| API key or CLI token | Shared home directory | Yes | Rotate at the issuer, then remove the file |
| Hosted MCP sign-in token | Cursor's backend | Not a disk leftover | Revoke the connection in settings |
| Files under \`/workspace\` | Shared disk | Yes | Delete them off this computer |
| Routines and last twenty run records | That bot only | No | Pause now. Copy wording if you still need the job |
| Skill saved during the job | Skill list, across bots | Yes | Disable it if it should not travel |

Routines and run records die with the bot. The cookie, the OAuth grant, the key, the CSV, and the skill stay. If the job used hosted MCP instead of a browser login, write that on the list.

If the incident bot is already deleted, you still rotate. You lost the recap. You did not lose the cookie. Reconstruct from memory, then fail a sibling on purpose below.

## Sign every vendor console out on the Agent Computer yourself

Sign-out on the computer is not optional theatre. The security docs tell you to sign out of a service when it should no longer be available, because the delete control will not do it. Open Agent Computer. Open the vendor URL from the inventory. Sign out until you see a login prompt, not the admin home.

Do this for every console on the list. A docs subdomain, a payments page, and a partner dashboard are three sessions more often than they are one. Success is a login prompt on the page you opened.

Do not ask the incident bot to reopen the vendor to confirm. Reopening mints a fresh cookie. Do not ask [Lead Scout](/bots/lead-scout) to "just check if we are still in." That is the inheritance you are trying to stop.

You are the person at the vendor. Screens do not log out.

If a remaining bot has a routine that opens the vendor on a clock, pause that routine before you sign out, or the next tick logs you back in. Signing out while a weekday job still points at the admin is a rotate that undoes itself at 07:00.

## Revoke OAuth at the vendor after the cookie is gone

A cookie sign-out is not a grant kill. Many vendors mint a connected app or an OAuth token the first time you click Allow. That grant lives on the vendor's account. It can mint a new cookie, or it can keep calling the API with no browser at all.

Revoke at the vendor. Confirm the labels on that vendor's current security, devices, sessions, or connected-apps page. This article will not invent those menu names. Shopify changes admin chrome. Open the live account and look for sessions, staff, apps, and API credentials. Trust the page in front of you.

If the incident used a vendor-owned seat, ask the vendor admin to disable it. If you reused a personal password on a staff login, rotate that password too.

Skip this step and the cookie comes back. A remaining bot hits a login wall, the old Allow grant is still valid, and the next approval looks like housekeeping. [An approval gates the proposal](/blog/grok-bot-approval-rules-reversibility). It does not reverse a token that already exists.

If you cannot find an OAuth row, write "none found" on the inventory. Leaving the cell blank is how people claim they revoked.

## Rotate API keys and CLI tokens the incident bot could have read

Command-line credentials are shared across bots. A token that landed in a profile file during the payouts job is available to any bot that opens a terminal. Deleting the named bot does not shred the home directory.

Rotate at the issuer first. Create a new key on the vendor's current credentials page. Disable the old one. Then remove the local file on the Agent Computer. The other order leaves a live key in a transcript or a sibling directory.

Do not paste the new key into ordinary chat. If the product offers a masked secret request, use that. Otherwise type on the Agent Computer, in the vendor field, in the moment.

Arbitrary example, not a product limit: Reza had one Shopify Admin API key in \`/workspace/feltline/.env.payouts\`. That path is invented for this story. A sibling that can read the file can call the store.

If the key was for a reporting-only job, replace it with a narrower key after you read [Least Privilege for Bots](/blog/least-privilege-bots). Confirm scopes on Shopify's current credentials documentation. If you cannot grant read-only, do not mint a new key onto this computer.

Static egress IPs are documented. Some services flag datacenter addresses. A fresh login from the Agent Computer may trip a vendor challenge a home laptop would not. Complete that challenge yourself only if you intend the new session to exist.

## Pull hosted MCP grants in Cursor settings, not in the cookie jar

Hosted MCP sign-in tokens stay with Cursor's backend. They are never stored on the computer. That is the one genuine isolation win in the connection list, and it is easy to miss during an incident.

A browser sign-out does not pull a backend grant. A settings revoke does not clear a cookie. Deleting the named bot does not do either. [Where Grok Bot MCP Sign-In Tokens Actually Live](/blog/grok-bot-hosted-mcp-tokens) is the location page. This page is the incident move: open connection settings, revoke the grant the incident used, then fail a sibling if the tool still runs.

If the payouts job spoke to Shopify through hosted MCP, the research bot may still call the same tools after the admin cookie is dead. People say they signed out. They signed out of a drawer the token was never in. If the job used the browser and a different job used hosted MCP, write both rows. Two drawers. Two revokes.

Privacy Mode (Legacy) blocks Grok Bot entirely. It is not an incident rotate. Do not flip it as a panic switch unless you intend to stop every bot on the account. Pause the incident routines instead.

## Walk Reza's Shopify admin cookie from a 24 August 2FA job onto the research bot

Reza runs Feltline, an invented three-person apparel shop used only as an example. Cursor Pro+ at $60 a month is the cheapest paid path that includes Grok Bot after eligibility widened on 21 August 2026. The clocks below are an arbitrary example, not a product limit.

Monday 24 August 2026, 16:40. A named bot called payouts hits Shopify 2FA while pulling a payout CSV. Reza follows the documented path: open Agent Computer, take control, type the authenticator code into the site's field, return control. Eighteen minutes later the CSV is on disk. Reza deletes payouts at 17:05 because the name was always disposable.

Tuesday 25 August 2026, 09:14. Reza asks Feltline Watch, a research bot in the shape of [Lead Scout](/bots/lead-scout), to compare Feltline's public product grid with a competitor's public grid. The bot opens the store's admin host because Monday's staff cookie is still in the shared browser. The draft cites two unpublished SKUs and a draft discount code that never appeared on the storefront.

That is the bad grok bot incident. A research bot became a staff user. [Grok Bot and Shopify](/blog/grok-bot-shopify) is why that identity is dangerous: a browser session inherits whatever the logged-in staff account can do. Confirm current staff permissions on Shopify's own pages.

| Clock (arbitrary example) | What Reza did | What Reza believed | What was true |
|---|---|---|---|
| Mon 24 Aug 16:40 | Typed Shopify 2FA on the Agent Computer | One CSV needed a code | A staff session landed in the account cookie jar |
| Mon 16:58 | Saved \`feltline-payouts-2026-08.csv\` under \`/workspace\` | The file belongs to payouts | The file belongs to the computer |
| Mon 17:05 | Deleted the payouts bot | The session died with the name | Cookie, CSV, and any OAuth grant stayed |
| Tue 25 Aug 09:14 | Asked Feltline Watch for a public grid compare | Research stays on public pages | The bot opened admin as Reza |
| Tue 09:22 | Saw unpublished SKUs in the draft | The research bot went looking | The research bot used a leftover staff cookie |

The roster that morning is an arbitrary three: payouts (already deleted), Feltline Watch, and Inbox Triage. Three screens. One computer. Inbox Triage did not ask for Shopify. It can still open the tab.

Reza's rotate: sign Shopify out until the login prompt, revoke connected apps on Shopify's current account pages, rotate the Admin API key, revoke any hosted MCP connection, delete the payout CSV, pause any routine that would reopen admin, then sit at the Mac. The research bot can stay if the charter forbids admin hosts. The staff cookie cannot stay.

If Feltline Watch already wrote to the store, the rotate does not unwind that write. An approval controls the proposed action. It does not reverse work already completed. Handle the store, then finish the rotate.

## Delete payout CSVs and CLI profiles the incident left under /workspace

Files the bot wrote under \`/workspace\` stay on the shared disk after you delete the name. Feltline Watch does not need the Shopify cookie if Monday's payout CSV is still sitting in a folder anyone can open.

Open Agent Computer. List the inventory paths. Delete or move them off this computer. Moving them into another folder on the same disk is not a rotate. Inbox Triage can still read them.

CLI profile files are the same pass. A copied \`.env\` is a token on disk. If you find a file that looks like a token, rotate at the issuer, then delete the file. Deleting the file first leaves the issuer token live.

Skills saved during the payouts job remain available across bots. Disable or delete a skill that knows how to open admin. Duplicate is not isolation. It copies profile, settings, skills, routines, and avatar. It does not isolate the cookie.

Do not ask a remaining bot to clean up Monday's files. That bot will open them to clean them. You delete them.

## Answer the claim that deleting the named bot already signed you out

The strongest version of the objection is honest. The payouts bot is gone. The chat is gone. The weekday routine is gone. The last twenty run records are gone. So the session must be gone. If the product kept a live Shopify login after that, people would have written it on the delete button.

They did write it. Not on the button. On the security pages. Deleting a Bot does not remove shared-computer files or browser sessions. Remaining bots keep the same cookie jar. The delete control is a profile cut. It is not a vendor logout and not an OAuth revoke.

The objection also mixes drawers. Hosted MCP tokens never sat on the computer, so deleting the bot that connected HubSpot does not describe where that grant lives. Browser cookies do sit on the computer, so deleting the bot that opened Shopify does not sign Shopify out. API keys sit in files, so deleting the bot that ran the CLI does not rotate the key at the issuer. Three closes. One mistaken verb.

Where the objection wins: if the incident bot never signed into anything, never wrote a file, never saved a skill, never used hosted MCP, and never set a CLI token, then delete is mostly a roster tidy. You still pause routines first. You still fail a sibling on the vendor URL. Memory is a bad inventory.

Where the objection loses for Reza: Monday had 2FA. Tuesday had unpublished SKUs in a research draft. The named bot was already gone. The vendor was not.

A second eligible account is the isolation move when Shopify admin must never share a disk with mail. That is [How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials). Build the second computer after the cookie is dead, not instead of killing the cookie.

## Pause incident routines first, and delete the named bot only after vendors are dark

Delete last. Maybe. If you still need the chat that named the dirty folder, keep the profile and hide it after you rotate. Hide does not pause routines. Pause each routine when the job should stop.

On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop. If you are away from a desk with a live vendor cookie, pause from the phone now. Do the vendor rotate and the named-bot delete from a supported desk. Supported: macOS on Apple silicon and Intel, Windows on x64 and Arm64, iPhone on iOS 18+ for pause. Not supported: Linux desktop, Android, iPad. The computer is a managed Linux VM, not a Linux desktop client.

A routine assigns a workflow to one Bot. Max 50 routines per Bot. The app keeps 20 most recent run records per routine. Deleting a Bot also deletes its routines. Nothing is team-level. If a standing job must outlive the incident name, recreate it on a keeper bot while the incident bot still exists, enable the keeper copy, then pause the copy on the incident bot.

Do not delete as a calming action while the admin cookie is live. You lose the recap and you keep the blast radius. Pause, sign out, revoke, rotate, sweep. The roster action is last.

Admin Kill is documented as coming soon. It deletes the VM while durable storage is kept. There is no ship date in that description. Do not wait for it.

## Fail Lead Scout if it can still load the vendor as the incident user

A rotate you did not try to break is a story you told yourself. Use a remaining bot that was not the incident bot. [Lead Scout](/bots/lead-scout) is the research shape. [Inbox Triage](/bots/inbox-triage) is the mail shape that should never have been a staff user.

Ask that bot to load the vendor URL from the inventory. Pass is a login prompt. Fail is the admin home, unpublished products, a staff name in the corner, or a tool call that still returns store data.

Do not use the deleted bot. Do not use the incident bot to reopen the vendor. That mints a fresh cookie. Do not use your laptop browser. Your laptop is not the account computer.

| Check | Pass | Fail (you are not done) |
|---|---|---|
| Remaining bot opens the vendor URL | Login prompt | Admin home, unpublished SKUs, staff name visible |
| Vendor connected-apps or sessions page | Incident app and session absent | App still listed, or a cloud-computer session still live |
| Old API key used once from a scratch command | Rejected | 200 and data |
| Hosted MCP connection | Disconnected, tool missing | Tool still callable from a remaining bot |
| Inventory path under \`/workspace\` | Missing | CSV or \`.env\` opens |

Run the cookie check after sign-out, the OAuth check after revoke, and the key check after rotate. A pass on the cookie and a fail on the key means you closed one drawer.

If the remaining bot refuses the URL because the charter forbids admin hosts, that is not a pass. Open Agent Computer yourself and load the URL.

## Paste the rotate-before-delete order into the bot charter

Write the order where the next incident bot will see it, before the next 2FA job. A charter that only says "be careful with logins" will not survive 16:40. Name the vendor and the human who signs out.

Arbitrary example for Feltline, not a product template you must copy verbatim:

\`\`\`text
Name: Feltline payouts (incident-rotate charter)
Owner: Reza. Desk: Mac. iPhone may pause only.

Job: export the payout CSV I name. Stop. Never open admin for research.
Never open a competitor admin. Never mark an order fulfilled.

Boundary: you never tell me that deleting you signed the vendor out.
You never reopen Shopify to confirm a logout.
You never complete 2FA, a password, or a payment prompt in chat.
You never save backup codes, API keys, or .env files under /workspace.

After any vendor login I type on the Agent Computer:
1. I sign the console out myself until I see a login prompt.
2. I revoke OAuth on the vendor's current security or apps page.
3. I rotate any key you could have read, then I delete the local file.
4. I revoke hosted MCP in settings if that drawer was used.
5. I delete the CSV from this computer.
6. Only then may I delete this named bot.

If Lead Scout or Inbox Triage can still load Shopify as me, this run failed.
Confirm Shopify labels on Shopify's current pages, not in this charter.
\`\`\`

The bot is forbidden from describing delete as a session close. Confirmation is a login prompt you open, not a tab the bot opens. Put the same boundary on the research bot. Feltline Watch is who inherited the cookie.

Do not share a public bot link that contains vendor URLs or staff emails. A share link copies configuration, not your computer.

## Hand planned retirement, the delete click, and architecture to those pages

This page stops when the vendor identity is closed and a sibling fails closed on the vendor URL. It does not walk the sidebar delete control, explain the shared computer from first principles, or recreate keeper routines for a scratch bot you always planned to kill on Friday.

If the work is a planned teardown, use [How to Retire a Grok Bot Without Leaving Sessions Behind](/blog/grok-bot-retirement). If you need the click, hide, duplicate, and the iPhone gap, use [How to Delete a Grok Bot Without Leaving Logins Behind](/blog/delete-a-grok-bot-safely). If you need the isolation model, use [One Computer, Many Screens](/blog/grok-bot-shared-computer-security). If the 2FA field is on screen, use [Grok Bot Hit a 2FA Prompt](/blog/grok-bot-2fa-prompt). If admin must never share a disk with mail, use [How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials). If you still want a store reporter after the cookie is dead, use [Grok Bot and Shopify](/blog/grok-bot-shopify).

Connect the minimum you keep on [Least Privilege for Bots](/blog/least-privilege-bots). The safety pass before the next inbox connect is [the Grok Bot safety checklist](/blog/grok-bot-safety-checklist).

**Keep reading:** [How to Delete a Grok Bot Without Leaving Logins Behind](/blog/delete-a-grok-bot-safely), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [How to Retire a Grok Bot Without Leaving Sessions Behind](/blog/grok-bot-retirement).

## Frequently Asked Questions

### Does deleting a Grok Bot sign you out of vendor consoles?

No. Deleting a Bot removes its active profile, conversation, and routines. Shared computer files and sign-ins are not isolated by Bot and may remain. The computer is a managed Linux VM assigned to your user account, not to that Bot, so every remaining bot keeps the same disk and the same cookie jar. Logout is a person at the vendor. Sign out on the Agent Computer until you see a login prompt, then revoke OAuth and rotate keys on that vendor's current security page. Confirm those labels on the vendor page. A new research name does not wipe the old session.

### Where do hosted MCP tokens live after a bad grok bot incident?

Hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. Signing the vendor out of the shared browser does not pull that grant. Deleting the named bot does not pull it either. Revoke the connection in settings. Browser cookies, CLI files, and backend tokens are three drawers. Mixing them is how a rotate looks finished while a sibling bot can still call the vendor. The location writeup is the hosted MCP page. This page is the incident revoke.

### Should I delete the named bot before I rotate vendor access?

No. Delete last, and only if you no longer need the chat, the profile, or the routines. Deleting a Bot also deletes its routines. Max 50 routines per Bot, and the app keeps 20 most recent run records per routine. Those vanish with the name. The cookie, the OAuth grant, the API key, and the files do not. Pause on iPhone if you cannot reach a desk. Sign out, revoke, rotate, sweep, then sit at Mac or Windows to delete. iPhone cannot delete.

### How do I prove the research bot can no longer open the vendor as staff?

Open a remaining bot that was not the incident bot. Ask it to load the vendor URL you care about. Pass is a login prompt. Fail is the admin home, unpublished products, or a staff name in the corner. Do not ask the deleted bot, because it is gone. Do not ask the incident bot to reopen the vendor to confirm, because that mints a fresh cookie. Repeat the check after OAuth revoke and after key rotate. A pass on the cookie and a fail on the key means you closed one drawer, not the incident.
`,
};
