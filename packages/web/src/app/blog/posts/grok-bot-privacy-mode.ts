import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Why Legacy Privacy Mode Blocks Grok Bot Entirely',
  description:
    'Legacy Privacy Mode blocks grok bot privacy mode eligibility entirely. That is a Cursor setting, not a Grok Bot toggle. Turning it off is policy, not a download fix.',
  date: '2026-08-27',
  category: 'Safety',
  content: `
# Why Legacy Privacy Mode Blocks Grok Bot Entirely

The policy PDF still requires Legacy Privacy Mode, the Cursor invoice now lists eight Pro+ seats, and every designer still sees Privacy Mode (Legacy) blocks Grok Bot.

That pairing is grok bot privacy mode. It is a Cursor data setting, not a Grok Bot toggle. Grok Bot uses Cursor authentication and account data settings
([FAQ](https://docs.x.ai/grok-bot/faq)).
It requires cloud data storage. Legacy Privacy Mode is not supported. Privacy Mode (Legacy) blocks Grok Bot entirely
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
A paid SKU cannot buy through that line. A second installer cannot either.

This page is only that setting: what it is, why the bot cannot run with it, and what a security team is actually choosing. Mixed login failures that also cover a $20 Pro invoice or the wrong SSO identity live on
[Grok Bot login failed](/blog/grok-bot-login-failed).
Why sign-in is a Cursor identity lives on
[the Cursor account explainer](/blog/grok-bot-cursor-account-explained).
The $40 seat path lives on
[Teams Standard](/blog/grok-bot-teams-standard).

This page will not invent how Privacy Mode stores data, what it encrypts, or which subprocessors see which bytes. Read
[Cursor's privacy policy](https://cursor.com/privacy) and
[security information](https://cursor.com/security)
the morning you change anything. Confirm the live control at
[Cursor privacy settings](https://cursor.com/dashboard/settings?openPrivacy=true).

## Read grok bot privacy mode as a Cursor Team Settings line outside the app

Grok Bot is a client. The identity is a Cursor user. The data mode is a Cursor account setting. On a team it is a Team Settings line, not a switch inside the bot window.

Official language is blunt. Grok Bot requires cloud data storage, so Legacy Privacy Mode is not supported
([FAQ](https://docs.x.ai/grok-bot/faq),
[get started](https://docs.x.ai/grok-bot/get-started)).
An error about it means the account is using a data mode that does not permit Grok Bot's required storage. Update the Cursor account data setting, or contact the organization administrator
([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

On a team, check Team Settings. If Privacy Mode (Legacy) is on, you will be prompted to change it before enabling Grok Bot. The Grok Bot page in the Cursor dashboard walks admins through privacy mode. Members see an error string and a prompt to ask an admin.

| Belief about grok bot privacy mode | Documented position | Where to confirm it |
|---|---|---|
| It is a Grok Bot privacy toggle in the bot app | Grok Bot uses Cursor authentication and account data settings | [FAQ](https://docs.x.ai/grok-bot/faq) |
| Buying Pro+ or Ultra turns it off | Privacy Mode (Legacy) blocks Grok Bot entirely on every eligible plan | [teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises) |
| A member can weaken it from their laptop | The team's privacy mode governs. Members cannot weaken it | Same page, privacy FAQ |
| Leaving Legacy is a download fix | It is a Cursor data-setting change | [Cursor privacy settings](https://cursor.com/dashboard/settings?openPrivacy=true) |

On a team this is a Team Settings line. On an individual account it is the same Cursor data setting, without an admin to ask.

## Admit the cloud-storage requirement that no paid SKU can waive

The reason Legacy is a hard stop is published as a storage requirement, not as a marketing preference. Grok Bot work runs on a persistent cloud computer assigned to the user, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
Files, browser sessions, and logins live on that computer. A data mode that does not permit the required storage cannot host the product. The docs say that. They do not publish a disk diagram, and this page will not invent one.

Eligible plans, from the FAQ and teams docs: SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, Cursor Teams Standard, Cursor Teams Premium, plus a one-time trial for individuals. Eligibility widened on 21 August 2026
([xAI announcement](https://x.ai/news/grok-bot-more-plans)).
Confirm live SKUs on
[Cursor pricing](https://cursor.com/pricing)
before you pay. Prices dated 25 August 2026: Cursor Pro+ at $60 is the cheapest documented paid individual door. Teams Standard at $40 per user per month also includes Grok Bot. None of those stamps waive Legacy.

Hobby, Cursor Pro at $20, and SuperGrok at $30 are closed doors for a different reason. They belong on the login-failed page. If the invoice already says Pro+, Ultra, Teams, Plus, Heavy, or trial, and the screen still names Privacy Mode (Legacy), you are in a data-mode miss.

## Hedge every encryption story until Cursor's privacy page is the source

Security review will ask what Legacy encrypts, where the bytes sit, and whether leaving it sends source or mail to a model vendor. This article will not answer those questions as facts, because the Grok Bot docs do not publish that map.

What they do publish: privacy and data-sharing choices are managed through Cursor account settings. Training opt-out follows the applicable Cursor account and privacy settings. Data training follows your team's privacy settings, the same as Cursor. Standard privacy modes work. Privacy Mode (Legacy) is the mode that blocks the product entirely. Review the current Cursor Privacy Policy and security information for contractual details.

On the shared computer, the docs refuse a broader guarantee: do not treat user assignment as a guarantee that is broader than Cursor's published security documentation. Review current infrastructure and encryption controls there. Hosted MCP sign-in tokens stay with Cursor's backend. That split is not a description of Legacy Privacy Mode. Cookies, sessions, files, and CLI credentials on the computer are still shared across bots on that user. If legal needs a subprocessor list, contact the Cursor account team. Grok Bot has no model picker. Do not invent one as a privacy control.

## Let the team's privacy mode govern members who cannot weaken it

While a member is on your team, the team's privacy mode applies to them. Privacy Mode (Legacy) blocks Grok Bot entirely. Members on such teams see "Privacy Mode (Legacy) blocks Grok Bot" and a prompt to ask an admin. Members cannot weaken the team's privacy mode.

That is the sentence that wastes the Pro+ cart. Finance can post eight individual upgrades. Each person can still be a member of the team that mandated Legacy. The work SSO identity still sits inside that team. The team's mode still governs. A personal Cursor Pro+ on a different email is a different user, not an override.

Two Cursor users can share a laptop. They do not share a data mode or a cloud computer. If Sana signs in with organization SSO, she gets the team setting. If she signs in with a 2014 Gmail that is not on the team, she is not on the company identity either. This page will not recommend that path as a workaround.

If you are an individual, not on a team, the same storage rule still applies. Open the privacy dashboard on that Cursor user. There is no admin to ask. The setting is still Cursor's, not a Grok Bot menu. Enterprise access is rolling out. This page will not invent an enterprise SKU.

## Stop treating a Pro+ cart as a workaround for a Legacy mandate

Cursor Pro+ at $60 includes Grok Bot when privacy allows it
([Cursor Pro+ and Grok Bot](/blog/grok-bot-cursor-pro-plus)).
Cursor Teams Standard at $40 per user per month includes it too, on each seat, when privacy allows it
([Teams Standard](/blog/grok-bot-teams-standard)).
Ultra, Teams Premium, SuperGrok Plus, SuperGrok Heavy, and the one-time trial are the rest of the FAQ list. SuperGrok Heavy's price is not printed here.

A mandate that still requires Legacy Privacy Mode makes every row on that list decorative for the identities it covers. The cart is not wrong as a SKU. It is early as a rollout.

| What finance bought | What grok bot privacy mode still does | What to do instead of another cart |
|---|---|---|
| Eight Cursor Pro+ seats on people who are team members | Team Legacy still governs those identities | Admin leaves Legacy, or you keep Legacy and skip the product |
| Teams Standard seats you already had | Same block. Standard already included Grok Bot | Do not "upgrade to Pro+" to dodge a team setting |
| Ultra on a CISO personal card, work SSO still used in the app | Work identity is still on the team | Sign-in identity, not the credit card, is the check |

If the company already pays Teams Standard or Premium, incremental Grok Bot cost on those seats is zero once Legacy is off. Buying Pro+ on top of a Teams seat to get a different privacy mode is not a documented move. Privacy mode is the Team Settings line. The SKU is the eligibility stamp. There is no Grok Bot-specific spend cap, and no published dollar figure for the weekly allowance. None of that overrides Legacy.

## Follow Kestrel Path from the 2025 Legacy rule to an August Pro+ invoice

Kestrel Path writes software for diagnostic labs. Forty people. In late 2025, Naveen (CISO) mandated Legacy Privacy Mode for every Cursor workspace when they rolled out the editor. The mandate was written before Grok Bot existed. It became expensive on 21 August 2026, when eligibility widened to Cursor Pro+ and all Cursor Teams plans.

Sana (VP Product) wants
[Lead Scout](/bots/lead-scout)
shaped work: public competitor labeling pages, a dated file, a stop before login walls. No Gmail. No lab portal.

Finance reads the FAQ, sees Pro+ at $60, and posts eight seats because the designers already sit on Cursor Pro at $20. The invoice is eligible. Sign In with Cursor uses organization SSO. Every designer sees "Privacy Mode (Legacy) blocks Grok Bot" and a prompt to ask an admin. Two people reinstall Windows. Naveen buys Ultra on a personal card and still signs in with work SSO. The error does not change.

| Clock | What Kestrel Path did | What that actually proved |
|---|---|---|
| 2025 policy | Naveen mandates Legacy Privacy Mode for Cursor | A data mode. No Grok Bot yet, so no collision |
| 21 Aug 2026 | Eligibility widens to Pro+ and Teams | The SKU door opens. The Legacy door stays shut |
| 24 Aug 2026 | Finance posts eight Pro+ seats | Eligibility stamps on identities the team setting still wraps |
| 25 Aug 2026 | Naveen pays Ultra on a personal card, then uses work SSO | The work identity is still on the team. Members cannot weaken it |
| 27 Aug 2026 | Admin opens Team Settings | Privacy Mode (Legacy) is still on. That is the whole incident |

Sana now has three honest options, and only two of them are company options. Keep Legacy and skip Grok Bot. Leave Legacy for a supported Cursor data setting, confirm standard privacy modes on Cursor's current pages, then start a public-source bot. Or leak the job onto a personal Cursor user that is not on the team. The third option is a second computer the company does not admin. This page treats that as a failure.
[Inbox Triage](/bots/inbox-triage)
and
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant)
wait until the vote is recorded.

## Keep mixed login failures on the three-cause page, not on this toggle

[Grok Bot login failed](/blog/grok-bot-login-failed)
owns three causes: a closed plan (Hobby, Pro at $20, SuperGrok at $30), Legacy Privacy Mode, and the wrong Cursor user relative to the seat. This page is cause two only. If the invoice says Pro $20 and the screen is empty, you are in a SKU miss. If the browser signed into personal Google while the studio pays Teams, you are in a membership miss.

Use the exact text. Guessing "maybe Windows" is how Kestrel Path lost a day.

| What you see | This page owns it? | Where to go |
|---|---|---|
| Exact text: Privacy Mode (Legacy) blocks Grok Bot | Yes | Stay. Admin conversation, not a cart |
| Prompt to ask an admin, Team Settings still show Legacy | Yes | Member cannot weaken the team mode |
| Sign-in returns an empty product, invoice says Hobby or Pro $20 | No | [Login failed](/blog/grok-bot-login-failed) |
| Browser signed into personal Google, studio pays Teams | No | Same login page, cause three |
| No client because the machine is Linux desktop, Android, or iPad | No | [Supported platforms](/blog/grok-bot-supported-platforms) |
| App launched, Starting your computer still changing | No | Setup, not privacy. Keep the app open |

Do not reset the agent computer to fix Legacy. Official desktop path: [x.ai/bot](https://x.ai/bot). iPhone can pause and resume only. A phone sign-in that still cannot author is the mobile surface, unless the error names Legacy.

## Write the governance brief as a storage-policy vote, not as a ticket

Turning Legacy off so Grok Bot can start is a policy choice. It is not a download ticket. Write the vote down before anyone clicks the dashboard, because the product will not produce an audit view of Bot actions to reconstruct the decision later. An audit view of Bot actions does not exist yet
([no audit view yet](/blog/grok-bot-no-audit-log-yet)).

Naveen's brief has to name three things the Grok Bot docs actually say, and it has to refuse to name encryption details they do not say.

\`\`\`text
Kestrel Path, Grok Bot data-mode brief
Owner: Naveen (CISO). Requester: Sana (Product). Date: 27 August 2026.

Decision: keep Privacy Mode (Legacy), which blocks Grok Bot entirely, or
move this Cursor team to a supported data setting so Grok Bot can start
for eligible seats.

Confirm on Cursor pages the morning we vote, not in this file: current
privacy policy, security page, and cursor.com/dashboard/settings?openPrivacy=true.
This brief will not claim what Legacy encrypts, where bytes sit, or which
subprocessors see them.

What the Grok Bot docs already say, checked 25 August 2026:
- Grok Bot requires cloud data storage. Legacy Privacy Mode is not supported.
- Standard privacy modes work. Training opt-out follows Cursor settings.
- While a member is on the team, the team's privacy mode governs.
- Members cannot weaken it. They see a prompt to ask an admin.
- One persistent cloud computer per user. Screens are not security boundaries.
- No audit view of Bot actions yet. No Grok Bot-specific spend cap.
- No model picker for members or admins.

If we keep Legacy: no Grok Bot on team identities. Stop the Pro+ rollout
story. Do not open personal Cursor users as a shadow path.

If we leave Legacy: first bot is public competitor pages only. No Gmail, no
lab portal, no design-file host, no bank. Human review before any design
change. Boundary is never send, never publish, never sign in.

Vote recorded by: ________  Setting changed by: ________  Date: ________
\`\`\`

If legal cannot sign a sentence that says we confirmed Cursor's current pages, you are not ready to leave Legacy, and you should not connect a mailbox to debug the hesitation.

## Confirm that standard privacy modes still work after you leave Legacy

The strongest fear in Naveen's review is that the only two states are Legacy (blocked, safe) and everything else (unblocked, training on). The Grok Bot docs do not describe that binary.

They say Privacy Mode (Legacy) blocks Grok Bot entirely. They say standard privacy modes work. They say training opt-out follows the applicable Cursor account and privacy settings.

Leaving Legacy lets the product start. It is not, by itself, a published statement that training is on. Which standard modes exist and how opt-out is worded this week are Cursor questions. Answer them on Cursor's privacy and security pages. If those pages disagree with this article, those pages win.

After you leave Legacy you still have the Grok Bot isolation model, which is not a privacy-mode gift. All bots on an account share one persistent cloud computer. Each bot gets a screen. Screens are work surfaces, not vaults. Deleting a bot does not remove shared-computer files or sessions. "Do not use separate Bots as a security boundary"
([shared computer security](/blog/grok-bot-shared-computer-security),
[least privilege](/blog/least-privilege-bots)).
Do not write "we will have an org audit log after we change privacy mode" into a questionnaire. That view is not shipped.

## Fail Grok Bot enablement on purpose while Legacy is still showing

Verification has to be able to fail. A green invoice is not enough. Kestrel Path's Pro+ invoice was green. Run the table. If a row fails, stop.

| Check | Pass | Fail |
|---|---|---|
| Team Settings do not show Privacy Mode (Legacy) | grok bot privacy mode is not the block | Admin conversation is still the work |
| Exact error text is gone after a fresh Sign In with Cursor | Identity and setting agree | Someone is still on the old user or the old mode |
| A named bot can finish one public-source brief without a login | The computer works | Do not connect Gmail to debug a bad brief |
| No org screen lists Bot actions across the team | The missing audit view is still missing | Do not write "we have a privacy-mode audit log" into a form |
| First charter still forbids send, publish, and authenticated apps | You left Legacy without filling the cookie jar | Sessions are already shared across every future bot |

If all five pass, grok bot privacy mode is done as a gate. Next is a bounded first charter and
[the safety checklist](/blog/grok-bot-safety-checklist)
before any inbox.

## Answer the CISO who calls leaving Legacy a gift of the company's only control

The strongest case against this page is Naveen's original mandate: Legacy Privacy Mode was the control. Grok Bot is a nice-to-have. Changing a data mode so a beta teammate can run is how companies sleepwalk into a new processing activity. The designers can keep using the editor. Product can paste public URLs into a doc by hand. Turning Legacy off is reckless by default.

Grant the mandate. If Legacy is a hard requirement, you do not get Grok Bot on those identities. No SKU buys through it. The honest memo is we keep Legacy, we skip Grok Bot, we stop telling finance the FAQ list is a rollout plan.

The objection loses when it claims two extra things the docs do not say. First, that leaving Legacy is the same as turning training on. Training opt-out follows Cursor privacy settings. Standard privacy modes work. Confirm the current wording. Second, that keeping Legacy is what isolates Gmail from a research bot. It is not. Isolation, once you are in, is still one computer per user. Named bots are screens. Least privilege and a send stop are the controls
([approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility)).
Legacy never ran those bots. It refused them.

The objection also loses the shadow-IT version. Keeping Legacy on the team while Sana runs Pro+ on a personal Gmail is not keeping the control. It is a second computer the CISO does not see.
[Grok Bot versus Claude Cowork](/blog/grok-bot-vs-claude-cowork)
and
[Grok Bot versus ChatGPT Work](/blog/grok-bot-vs-chatgpt-work)
will not flip Cursor Team Settings. Confirm those vendors' current pages if the job already lives there.

## Leave mail and studio consoles off the computer until the vote is recorded

The dangerous minute is the first success after Legacy is off, not the error while it is on. People unblock grok bot privacy mode and immediately connect mail so the bot feels real. Sessions live on the account computer. Every bot you add later can open that mailbox.

Sana's first bot after a successful login is a public-page brief. It never sends, never publishes, never signs into Figma, Gmail, lab software, analytics, or a bank. An approval does not reverse work already completed. Read
[Gmail guidance](/blog/grok-bot-gmail)
only after you intend to keep this Cursor user and this data mode.

\`\`\`text
Name: Label Brief
Owner: Sana (this Cursor team identity, this user account)
Job: Once per weekday, open the five public competitor URLs in the list I
provide. For each URL, write: current headline, primary CTA label, visible
claims if any, and a one-line change since the last saved snapshot. Save
the brief as a dated file I own. Quote the page. If a page is behind a
login, CAPTCHA, or geo wall, write BLOCKED and stop that row.

Boundary: Never send email, never post, never comment, never create accounts,
never sign into Gmail, lab portals, design-file hosts, analytics, ads, or
banking. Never store passwords. Never click through a login wall. Never
treat another Bot as isolation. All bots on this account share one computer.

Sources: Public pages only. No authenticated app.
Deliverable: A brief with URLs I can open. Fluency without a URL is a miss.
Review: I read it before any design change. The bot does not ship UI.
\`\`\`

That is close to
[Lead Scout](/bots/lead-scout)
and a read-only
[Chief of Staff Briefing](/bots/chief-of-staff-briefing).
[Churn Watch](/bots/churn-watch)
and
[Standup Scribe](/bots/standup-scribe)
wait until Naveen has recorded the data-mode vote.

## Send refusals that never mention Privacy Mode back to the login diagnosis

This page stops when the error is not a privacy-mode error. If org SSO succeeds, Legacy is off, the seat is eligible, and it still refuses, collect Grok Bot version, operating system, the exact error, whether Legacy is on, the invoice plan name, whether org SSO was used, and whether retry changed the result. Do not include passwords or one-time codes.

There is no Linux desktop app. The cloud computer is a managed Linux VM where the bot runs as a non-root user. A community wrapper that asks for your Cursor identity is a credential hazard, not a privacy fix. Grok Build reading SKILL.md is a different product
([Grok Bot versus Grok Build](/blog/grok-bot-vs-grok-build)).
[What a Grok bot is](/blog/what-is-a-grok-bot)
and
[whether it is worth it](/blog/is-grok-bot-worth-it)
will not flip Team Settings.

## Hold the first public-source charter until an admin has actually left Legacy

Do not paste a charter into a product that refused you. Wait until Team Settings no longer show Privacy Mode (Legacy), until Sign In with Cursor lands on the member identity, and until you can create a bot. Then paste the stop line before you connect a mailbox.

If they vote to leave Legacy: Naveen records the brief with Cursor URLs from that morning. An admin changes the setting. Sana signs in with organization SSO, creates one bot, and runs the public-page job by hand once. She does not schedule a routine on day one. Routines are per bot, not team-level.

If they vote to keep Legacy: stop the Pro+ story. The seats are Cursor seats, not Grok Bot seats, until the data mode changes. Do not open personal Pro+ identities as a quiet exception.

Turning it off is a policy choice. Leaving it on is a policy choice. Downloading another build is neither.

**Keep reading:** [Grok Bot Login Failed: Cursor Auth, Eligibility, and Privacy Mode](/blog/grok-bot-login-failed), [Why Grok Bot Needs a Cursor Account, and How To Get Access](/blog/grok-bot-cursor-account-explained), [Grok Bot on Cursor Teams Standard: The $40 Seat Path](/blog/grok-bot-teams-standard).

## Frequently Asked Questions

### Why does grok bot privacy mode block a plan that already includes Grok Bot?

Because grok bot privacy mode is a Cursor account data setting, not a switch inside the bot. Grok Bot requires cloud data storage, so Legacy Privacy Mode is not supported. Privacy Mode (Legacy) blocks Grok Bot entirely, even when the invoice already lists Cursor Pro+, Ultra, Teams Standard, Teams Premium, SuperGrok Plus, SuperGrok Heavy, or a trial. The installer cannot buy through that line. Update the Cursor account data setting or contact the organization administrator, then sign in again. Confirm the live wording on Cursor's privacy page before you treat any article as a contract.

### Can a member turn off Legacy Privacy Mode from their own Grok Bot window?

No. While a member is on a team, the team's privacy mode governs, and members cannot weaken it. Members on such teams see Privacy Mode (Legacy) blocks Grok Bot and a prompt to ask an admin. A personal Pro+ card on a different Cursor user is a different identity, not an override of the team setting that still wraps the work login. If you are an individual not on a team, review the Cursor privacy dashboard yourself. If you are on a team, the next step is an administrator conversation about leaving Legacy, not a second installer from x.ai/bot.

### Does leaving Legacy Privacy Mode mean vendors will train on our Grok Bot data?

Not as a documented automatic. Training opt-out follows the applicable Cursor account and privacy settings, the same family of controls the editor already uses. Standard privacy modes work with Grok Bot. Legacy is the data mode that does not permit the storage Grok Bot requires. Leaving Legacy is a storage-policy choice so the product can start. It is not, by itself, a published statement that training is on. Read Cursor's current privacy policy and security pages for contractual detail. This page will not invent what those pages encrypt or where bytes sit.

### Our company mandated Legacy Privacy Mode, then bought Cursor Pro+. What should we do next?

Treat the Pro+ receipt as eligibility you cannot use until Team Settings no longer show Privacy Mode (Legacy). Gather the exact error text, the invoice SKU, and whether members signed in with organization SSO. Take that packet to whoever owns data governance. The live choices are keep Legacy and skip Grok Bot, or leave Legacy for a supported Cursor data setting and then start a bounded first job. Do not open a personal Cursor user as a shadow path. Do not reinstall. Confirm the current setting from the Cursor privacy dashboard the morning you vote.
`,
};
