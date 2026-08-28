import type { BlogPost } from './index';

export const post: BlogPost = {
  title: "Why Is This Grok Bot in Someone Else's Dashboard",
  description:
    'Why is this grok bot in someone elses dashboard: a shared cookie, not a hack. Screens are not vaults. Delete does not sign you out of HubSpot.',
  date: '2026-08-28',
  category: 'Guide',
  content: `
# Why Is This Grok Bot in Someone Else's Dashboard

The research bot is parked on the HubSpot home, the mail bot signed in at 08:10, and you are already writing unauthorized access in the security channel.

That screenshot is the wrong-console incident. A grok bot in someone elses dashboard is almost never a break-in. It is a leftover cookie on one persistent cloud computer. Inbox Triage signed into HubSpot this morning. Lead Scout opened the same browser this afternoon. The sidebar still says research. The tab says CRM. Those two labels do not split a session.

This page is the incident, not the architecture lecture. Isolation you actually have lives on
[one computer, many screens: what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).
The window manager people confuse with a vault lives on
[one computer, many screens: what isolation you actually have](/blog/grok-bot-one-computer-many-screens).
An empty roster after Cursor auth lives on
[Grok Bot login failed](/blog/grok-bot-login-failed).
Stay here when a named bot is sitting in a SaaS console you never connected to that name.

## Read the HubSpot home on Lead Scout as leftover Inbox login, never as a break-in

You asked [Lead Scout](/bots/lead-scout) for public posts. You got the HubSpot home. The first story your brain writes is intrusion: someone else's portal, a stolen session, a bot that walked into a dashboard it was never invited to.

Write the ordinary story first. All bots on an eligible account share one persistent cloud computer assigned to the user, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
Browser cookies and signed-in sessions are shared. [Inbox Triage](/bots/inbox-triage)
signed into HubSpot during a mail run. Lead Scout later loaded the same site. The CRM did what browsers do: it restored an authenticated tab.

The documentation is blunt. Screens are separate work surfaces, not separate security boundaries. Do not use separate Bots as a security boundary
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
A tidy sidebar is a camera switch. It is not a tenant map.

A second ordinary story exists, and it is still not a Grok Bot hack. You signed into a colleague's HubSpot for one record on this computer. Every bot on the account is now that colleague. Confirm HubSpot session behaviour on HubSpot's own page before you brief anyone. An empty roster after Cursor auth is not this incident. That is [Grok Bot login failed](/blog/grok-bot-login-failed).

## Count one cookie jar per eligible Cursor user before you file a security ticket

The unit that holds HubSpot is the eligible user account. Ten named bots are ten cameras on one jar. Filing a ticket that says Lead Scout compromised Inbox's portal treats two labels as two computers. The [FAQ](https://docs.x.ai/grok-bot/faq)
says every bot on the account can access that computer. The computer is assigned to your user account, not to an individual Bot.

What the ticket can still be: a founder HubSpot user, an AE password typed into the Agent Computer after a 403, a contractor portal from a prior Friday. Those are cookie problems. They are not evidence that Grok Bot crossed a security boundary the docs told you not to rely on.

There is no audit view of Bot actions yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
The product will not name which screen opened HubSpot at 11:40. Keep the screenshot. Do not delete the mail bot to contain it. If the tab is HubSpot in a browser, the secret in play is a cookie. Hosted MCP tokens stay with Cursor's backend. That exception matters when you revoke. It does not rewrite the photo.

## Point the grok bot screen at the shared browser, never at a private vault

A screen lets you watch one job without the other job covering it. Inbox is mail. Lead Scout is ranking. You switch. That is the whole job.

Your laptop taught you the wrong analogy. Browser profiles split cookie jars because that is what a profile is for. Confirm that behaviour on the vendor's page if you need the comparison. Grok Bot screens are not profiles. The computer under the windows is one managed Linux VM. The Bot runs as a non-root user. Non-root is not a second machine.

People then assign tenancy to the UI because the UI looks like rooms. Lead Scout has no HubSpot connector. Inbox did the sign-in. The two windows do not share a tab strip. Those facts can all be true. They do not move the cookie.

If you completed a two-factor prompt on Inbox's HubSpot login, you wrote a live session into the jar. Finishing that prompt to unblock a mail lookup is how the research camera inherits an AE. Read
[Grok Bot hit a 2FA prompt](/blog/grok-bot-2fa-prompt)
when the field is on screen. This page is the afternoon after you already typed the code.

Pause on iPhone is not a vault either. On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop
([mobile](https://docs.x.ai/grok-bot/mobile)).
Pause freezes a job. It does not sign HubSpot out.

## Walk Kian from the 08:10 Inbox HubSpot sign-in to the 11:40 research tab

Kian runs sales-ops at a fourteen-person B2B shop. Fourteen is an arbitrary size, not a researched headcount. He holds one eligible Cursor user. He named two bots as if they were people: Inbox Triage for a mailbox that never sends, Lead Scout for public posts that never contact anyone.

Wednesday 26 August 2026, 08:10. He opens Inbox, takes the Agent Computer, and signs into Gmail. A thread names a company he thinks is already a contact. He opens HubSpot in that same browser for one lookup. HubSpot challenges him. He completes 2FA. The contact exists. He drafts nothing outbound. Inbox's charter forbids send. He switches back to mail and leaves HubSpot signed in, because signing out felt like extra work before standup.

11:40. He asks Lead Scout to rank five public posts (five is an arbitrary cap he typed that day) and to skip anyone already in the CRM so he does not chase a current customer. Lead Scout, trying to skip CRM people, opens HubSpot. The site is already authenticated as Kian, or as the AE whose password he borrowed at 08:12. The research screen fills with a deals home. Kian photographs it. He types why is this grok bot in someone elses dashboard into search. He drafts a message that says Lead Scout breached Inbox's portal.

He did not get hacked. He reused a browser the way the product is built. Lead Scout never needed a HubSpot connector. It needed the URL. Inbox never needed to hand over the session. The session was never Inbox's. It was the account's.

[Churn Watch](/bots/churn-watch)
on the same user would have opened the same home. A never-ping customer bot is a sending rule. It is not a second cookie jar. Confirm HubSpot login behaviour on HubSpot's page before you tell the founder the portal was stolen. An approval controls the proposed action. It does not reverse work already completed
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
A view that already happened is already done.

## Stamp the wrong-console incident onto a clock instead of a feeling

Feelings name the incident as a breach. Clocks name it as a leftover login. Use the clock. The times below are Kian's Wednesday, declared as an arbitrary worked example, not as telemetry.

| Clock (Wed 26 Aug 2026) | Screen he watched | What he believed | What the computer held |
|---|---|---|---|
| 08:10 | Inbox Triage | Mail, plus a one-record HubSpot lookup that belongs to this bot | A HubSpot cookie in the account browser |
| 08:18 | Inbox Triage, 2FA prompt | A code that unlocks Inbox's CRM | A live AE (or founder) session for every sibling screen |
| 08:40 | His own laptop, after standup | The lookup is done, HubSpot is theirs | The same cookie, still live |
| 11:40 | Lead Scout | Public posts, skip CRM people | HubSpot already authenticated |
| 12:05 | Security channel | Unauthorized access to someone else's dashboard | A research window on a leftover session |
| Next week | A new bot with an empty connector list | A clean room | The same jar, unless he signed out and revoked |

The 2FA field is not a per-bot door. If you would not hand that HubSpot user to Lead Scout, do not finish the prompt on this computer. Row six is the delete fantasy. A blank connector list is not a blank cookie jar.

## Refuse to treat a deleted Inbox bot as a HubSpot logout

Kian's next instinct is to delete Inbox so Lead Scout cannot use its login. Deleting a Bot does not remove shared-computer files or browser sessions
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
The named worker is gone. The HubSpot tab is not.

What deletion does remove is the part he may still want. Routines live on the bot, capped at 50 per Bot. The app keeps the 20 most recent run records per routine. Deleting a Bot deletes its routines. Nothing is team-level
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
He would throw away the mail cadence and keep the CRM session. That is the opposite of containment.

| Action | Removes the named bot | Clears the HubSpot cookie | Clears a hosted MCP HubSpot grant | What still sits on the computer |
|---|---|---|---|---|
| Delete Inbox Triage | Yes | No | No. That grant was never Inbox's | Files, cookies, CLI creds, the HubSpot tab |
| Pause Inbox on iPhone | No. Job frozen | No | No | The same cookie. Pause is not a wipe |
| Sign out of HubSpot in the shared browser | No | Yes, if the sign-out actually completed | No | Other cookies, files, CLI creds |
| Revoke the session on HubSpot's own page | No | Yes, after you confirm on the vendor UI | No | Whatever HubSpot still lists until you refresh |
| Revoke hosted MCP HubSpot in Cursor settings | No | No. Different object | Yes, if that was the grant | Browser cookies if you also signed in |

Hide first if you need the 08:10 thread. Sign out second. Revoke third. Delete last, and only after you copy any routine steps you still want. Full residue order:
[how to delete a Grok Bot without leaving sessions](/blog/delete-a-grok-bot-safely).
Coming soon, and not shipped: an admin Kill that deletes the VM while durable storage is kept
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Do not wait for Kill as your HubSpot sign-out.

## Split HubSpot browser cookies from hosted MCP tokens before you revoke anything

Casual writing calls every HubSpot connection the same word. The product does not. If you revoke the wrong object, Lead Scout will still land on the home.

Hosted MCP sign-in tokens stay with Cursor's backend. The computer never stores those tokens
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Sibling bots can still call those hosted tools at account scope. They do not inherit an AE cookie from that grant. Browser login is the other object. Cookies, signed-in sessions, files, and command-line credentials live on the shared computer.

Kian's 08:10 move was a browser login. Revoking a hosted connector would not close the tab Lead Scout is sitting in. Signing out of the browser would not revoke a hosted grant. Do both if you did both. Confirm the grant type in the product the morning you revoke.

The location questionnaire for a reviewer lives on
[where Grok Bot MCP sign-in tokens actually live](/blog/grok-bot-hosted-mcp-tokens).
This page only needs the incident fork: the screenshot is a browser. Treat it as a cookie until the tab is a login page.

Static egress IPs are a third confusion. Some services flag datacenter addresses
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
A challenge is not proof of intrusion, and it is not proof that Lead Scout has its own IP. Writes inside HubSpot are a fourth confusion. A property change can enrol a workflow
([Grok Bot and HubSpot](/blog/grok-bot-hubspot)).
Stop at the home. Do not just update the stage while you are here.

## Paste a Lead Scout charter that stops when a leftover CRM dashboard loads

A charter is not an ACL. Lead Scout can still ignore this text. The value is that the research bot is told the computer is shared, so it stops helping you pretend the tab is a private room. Pair it with a real sign-out.

\`\`\`text
You are Kian's Lead Scout. You rank public posts I name.
You never contact anyone. You never open HubSpot.

You run on one account computer. Inbox Triage and every
sibling bot share this browser and this disk. A HubSpot
session on this machine is not Inbox's. It is the
account's. Do not tell me a dashboard is screen-local.

If you need to skip people already in the CRM, wait for
a CSV I drop on this computer. Do not log into HubSpot
to build that skip list. Do not follow a convenience URL
from another bot's notes into app.hubspot.com.

If a page loads already authenticated as HubSpot, stop.
Show me the URL bar. Do not click deals, contacts,
workflows, sequences, or settings. Do not export. Do
not just look up one record.

You never send, sequence, enrol, or edit a property.
You never complete a 2FA prompt. You never type a
password, a one-time code, or a backup code.

After every run, list the sites you opened. If any of
them were a signed-in dashboard, say so in the first
line. iPhone pause is not a sign-out. Deleting Inbox
is not a sign-out. Wait for me on desktop.
\`\`\`

Paste that into Lead Scout. Change the name. Keep the stop verbs. Then go sign HubSpot out, because the charter cannot close a cookie that already exists. Least privilege for the verbs still lives on
[least privilege for bots](/blog/least-privilege-bots).
This block is the leftover-dashboard clause that listing never-contact does not imply.

## Answer the operator who says two sidebar names already isolate two consoles

The strongest objection is not "I thought each bot had its own VM." That person has not read the docs. Kian's objection is harder, because he did read the names.

He will say he never thought screens were vaults. Then he will point at Lead Scout having no HubSpot connector, at Inbox's charter forbidding send, at the two windows not sharing a tab strip, and at the HubSpot home appearing only on the research camera. He will say those facts mean the dashboard Lead Scout opened cannot be Inbox's session. If it is HubSpot, someone else signed in, which means a break-in.

Those facts are true. They do not move the cookie. Looking like a room is not being a room. A window manager lets you see two jobs. It can be good at that and useless at tenancy. Inferring the second from the first is how a never-contact research bot inherits an AE.

Connectors are not the cookie jar. A blank connection list can still open a URL. Charters are notes to the model. Inbox's never-send line did not partition HubSpot. If the objection is that HubSpot is not production AWS, say the contents out loud: open deals, contact emails, founder notes, sequences a workflow will fire if a stage moves. If that list is empty, a roster-wide session is a choice you can accept. If it is not, the sidebar is not your isolation. The engineer version is
[do not use separate Grok Bots as a security boundary](/blog/grok-bot-not-a-sandbox).

If Kian used a colleague's login, grant the someone else part. The dashboard is that colleague's. The cause is still the 08:10 choice, not a Grok Bot exploit. Rotate that session on HubSpot's page. Do not delete Lead Scout as punishment. Lead Scout was a camera.

## Fail today if a Probe bot with no connectors still loads HubSpot as the AE

Create a bot named Probe. Give it no connectors. Ask it to visit the HubSpot URL Kian used (confirm the live hostname on HubSpot's page) and tell you whether a portal is already signed in. If a deals home loads, the screen was never the wall. Do not ask Probe to edit a contact. Remove Probe after you have the answer. Removal does not close HubSpot.

| Check | Pass looks like | Fail looks like | Next move |
|---|---|---|---|
| Probe, no connectors, opens HubSpot | Login page, or a block you did not bypass | Deals home as Kian or as the AE | Sign out, then revoke at HubSpot |
| You revoked hosted MCP only | You expected the tab to die | Browser session remains | Different object. Sign out the browser |
| You signed out, then opened Probe again | Login page | Still in | Revoke on HubSpot's page. Confirm the vendor UI |

If the first row fails, stop arguing with the sidebar. Do not create a HubSpot session just to admire the leak. A second eligible account is a second computer. Confirm live SKUs on
[cursor.com/pricing](https://cursor.com/pricing)
and [x.ai/pricing](https://x.ai/pricing)
before you budget that seat. Cursor Pro+ at $60 a month is the cheapest paid path that includes Grok Bot, checked 25 August 2026. Hobby, Pro at $20, and SuperGrok at $30 do not include it.

## Sign HubSpot out in the shared browser, then kill the session on HubSpot's own page

Containment is two vendor clicks, not a roster edit. Take the Agent Computer on a Mac or Windows desktop. iPhone pause will not do this. Sign out of HubSpot in the shared browser until you see a login page. Then open HubSpot's own session or device UI (confirm the current labels on HubSpot's page) and revoke the session that belongs to this computer.

Do the Probe check after, not before you feel done. Feelings named it a breach. The login page is the pass.

If you completed 2FA as an AE, tell that AE and rotate. If Lead Scout already scrolled contacts, assume those records were seen. There is no audit view to tell you which rows. Delete leftover CSVs and portal URLs. Privacy Mode (Legacy) blocks Grok Bot entirely. It is not a HubSpot sign-out. Do not use it as panic containment.

## Keep HubSpot off this VM when Lead Scout must scrape public pages the same week

Keep using grok bot screens when the jobs can share a jar: public posts next to public posts, a CSV you drop and delete. Stop using the same computer for HubSpot and Lead Scout when open deals cannot sit next to a public scrape. Three honest setups, and only three.

| Setup | Eligible accounts | What screens still do | Where the HubSpot cookie lives | Use this when |
|---|---|---|---|---|
| One account, Inbox plus Lead Scout, HubSpot allowed | 1 | Parallel work, less tab chaos | The one computer, visible to both | Every remaining login is one you accept as roster-wide |
| Two eligible accounts, HubSpot on one, public scrape on the other | 2 | The same, on two computers | Only on the CRM account's computer | Deal records cannot sit next to a research prompt |
| One account, never sign into HubSpot on the Agent Computer | 1 | Research screens stay useful | Nowhere on this VM | You can export a skip list from your laptop, drop it, then delete it |

Two user accounts are two computers. A human who copies a deals CSV across those accounts has rebuilt a file leak by hand. A trial is not two isolated computers. One trial user is still one computer. Naming the trial bot Inbox and the paid bot Lead Scout on the same user does not split the jar. Hosted MCP for HubSpot keeps the sign-in token off the disk. Sibling bots can still call the tools. If the job is rank public posts, you do not need HubSpot tools on the research account at all.

## Leave this article when the screenshot is an empty roster, not a leftover dashboard

The wrong-console incident has a shape: a bot you can see, a SaaS home you did not connect to that bot, a sibling that signed in earlier. If you cannot see a bot, you are not in this incident.

If the Grok Bot window came back empty after Cursor took a password, that is
[Grok Bot login failed](/blog/grok-bot-login-failed).
If you wanted hostile mail, offboarding order, and the item list of cookies and files, that is
[what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).
If the object in your head is the window itself, a Figma cookie assigned to a name, that is
[what isolation you actually have](/blog/grok-bot-one-computer-many-screens).

Supported clients are macOS (Apple silicon and Intel), Windows (x64 and Arm64), and iPhone on iOS 18 or later
([FAQ](https://docs.x.ai/grok-bot/faq)).
Linux desktop, Android, and iPad have no client. If you have no supported desktop, you cannot take over the computer to sign HubSpot out. That is a platform miss, not a leftover dashboard. Stay here when the photo is a named research worker sitting in a CRM.

**Keep reading:** [One Computer, Many Screens: What Isolation You Actually Have](/blog/grok-bot-one-computer-many-screens), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [Grok Bot Login Failed: Cursor Auth, Eligibility, and Privacy Mode](/blog/grok-bot-login-failed).

## Frequently Asked Questions

### Why is this grok bot in someone elses dashboard if Lead Scout never got a HubSpot connector?

Connectors are not the cookie jar. All bots on an eligible account share one persistent cloud computer assigned to the user, not to a bot. Browser cookies and signed-in sessions are shared across that roster. If Inbox Triage signed into HubSpot this morning, Lead Scout can open the same site already authenticated. Screens are work surfaces, not security boundaries. The dashboard looks like it belongs to another named worker. It belongs to the account. Confirm HubSpot session behaviour on HubSpot's own page before you treat the tab as proof of a break-in.

### Does deleting Inbox Triage sign the computer out of HubSpot?

No. Deleting a bot removes that bot, its conversation, and its routines. Routines live on the bot, capped at 50, with 20 recent run records, and nothing is team-level. Shared-computer files and browser sessions are not isolated by bot and may remain. The HubSpot cookie stays until you sign out in the shared browser and revoke the session at HubSpot. Pause on iPhone is not a sign-out either. If you still need the mail transcript, hide the bot after you close the session. Do not treat roster cleanup as logout.

### Is a leftover HubSpot tab on Lead Scout a hack of Grok Bot?

Usually no. The ordinary incident is a leftover cookie from a sibling bot, most often Inbox signing into HubSpot during a mail run. Grok Bot has no audit view of Bot actions yet, so the product will not hand you a log that names which screen opened the CRM. The screen you are watching is the evidence. A datacenter IP can also make HubSpot challenge the session, because egress addresses are static and some services flag them. That is a network fact, not proof of intrusion. Sign out, revoke, then decide whether HubSpot belongs on this computer at all.

### How do I keep Lead Scout out of HubSpot without buying a second Cursor account?

Never sign into HubSpot on this Agent Computer. Export a skip list from your laptop if the research job needs account names, drop the file, then delete it when the run ends. Files on the shared disk are still readable by every bot, so the export is residue, not a vault. Hosted MCP HubSpot grants stay with Cursor's backend rather than as a browser cookie, but sibling bots can still call those tools. Confirm the grant type on the vendor pages. A charter that says do not open HubSpot is a note to the model, not a lock.
`,
};
