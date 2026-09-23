# Verified facts, 2026-09-23 (supersedes the earlier files wherever they differ)

Every line below was read on 2026-09-23 from the page named in brackets.
docs pages are under https://docs.x.ai/grok-bot/ ; plans is
https://cursor.com/help/grok-bot/plans ; pricing is https://cursor.com/pricing.
If a claim is not on this list or in an earlier facts file that this list does
not contradict, do not assert it. Write "the docs do not say" instead.

## What changed since 2026-08-25 (the old lines are now FALSE)

| Old claim (do not assert) | Current fact | Source |
|---|---|---|
| Cursor Pro ($20) does not include Grok Bot | Every paid individual Cursor plan includes it: Pro, Pro+, Ultra | [plans] |
| Cursor Pro+ at $60 is the cheapest paid path | Cursor Pro at $20/mo is the cheapest paid Cursor path | [plans], [pricing] |
| SuperGrok ($30) does not include Grok Bot | Individual SuperGrok, SuperGrok Plus, SuperGrok Heavy and X Premium+ can be linked | [plans] |
| Teams needs Standard or Premium seats / a Premium seat | Every member of a self-serve Cursor Teams plan has access, no Premium seat, no admin request | [plans] |
| There is no spend cap | No Grok Bot-specific spend cap, but the account-level On-demand monthly limit applies | [plans], [teams-and-enterprises FAQ] |
| iPad is not supported | The iOS app also runs on iPad (iPadOS 18 or later) | [faq], [mobile] |
| Run history and deleting a routine need the desktop | The phone shows Run history and can delete a routine; only editing and testing need desktop | [mobile] |
| There is no audit view of Bot actions | Enterprise has Audit logs and Action Recording; individuals and self-serve Teams do not | [security], [teams-and-enterprises] |
| Teach by demonstration | Now called "Teach a task" in the FAQ; ten-minute limit; gradual rollout | [faq] |

## Access, plans and billing [plans], [pricing]

- Access: included on every paid individual Cursor plan (Pro, Pro+, Ultra) and Cursor Teams. Weekly usage tiers: Pro below Pro+, Pro+ below Ultra, Ultra highest.
- Prices [pricing]: Pro $20/mo, Pro+ $60/mo, Ultra $200/mo. Do not quote any other price. Never print a SuperGrok Heavy or X Premium+ price.
- Self-serve Teams: every member has Grok Bot; no Premium seat; usage draws from the Teams seat allowance; on-demand is enabled by default for Teams.
- Enterprise: consult the account executive; managed by admin; "Enterprise access is rolling out" [faq].
- Linking: individual SuperGrok, SuperGrok Plus, SuperGrok Heavy, or X Premium+ can be linked from the Grok Bot plan screen. SuperGrok Team and SuperGrok Enterprise cannot link. SuperGrok Lite does not include Grok Bot.
- A link is a usage grant, not a Cursor plan. It does not change or cancel a Cursor plan.
- A link is PERMANENT once created: it cannot be unlinked or moved to a different Cursor account.
- Plans do not stack: a Cursor plan and a SuperGrok/X Premium+ link never add usage together. Upgrading within Cursor plans (Pro+ to Ultra) does raise usage. If you hold both, Grok Bot uses whichever has more usage [faq].
- Upgrading SuperGrok after linking: allow up to 24 hours for Weekly usage to move to the new tier; no need to relink.
- Downgrades take effect after the same refresh window, up to 24 hours; usage already spent this week still counts.
- Usage order: Weekly usage first; when it runs out, On-demand usage continues only if on-demand is enabled, billed through Cursor from model and token cost.
- The monthly limit is NOT a hard stop mid-run: a Bot already working can finish past it; after that on-demand stops until the limit is raised or the billing cycle resets. With on-demand off, Grok Bot stops when weekly usage runs out and the screen says you have reached your Grok Bot usage limit; it resets with weekly usage [plans].
- On-demand monthly limit: extra usage counts toward the "On-demand monthly limit" in Grok Bot, the same cap as "Monthly Limit" on the web. Set it in Grok Bot Settings (On-demand monthly limit, Enable if off; a card may need to be added on the web) or at cursor.com/dashboard -> Spending -> Monthly Limit. If you subscribed in the iOS or Android app, set the limit and enable on-demand on the web [plans].
- Usage is metered on the Cursor account, not on Grok or X. macOS and iOS share one usage bucket.
- Free trial: a usage credit plus a 7-day window; drawn down by agent steps and tokens, not message count; used credit is not restored or topped up; the trial never becomes a paid plan; "Cancel Trial" on free-plan accounts ends it immediately, removes remaining credit, and it cannot be claimed again. An iOS App Store intro offer is different: Apple runs it and it becomes a paid Apple subscription unless cancelled in Apple ID -> Subscriptions. Android has no in-app trial.
- Refunds: on-demand usage already consumed is not refundable; Cursor cannot refund App Store or Google Play charges.
- A separate Grok Bot spend cap is not available; account-level on-demand controls apply; per-product split is on cursor.com/dashboard/usage [teams-and-enterprises].

## Platforms [faq], [mobile], [get-started]

- Desktop: macOS (Apple silicon, Intel), Windows (x64, Arm64), Linux (x64, Arm64; .deb, .rpm, AppImage).
- Phone: iPhone iOS 18+, Android 9+ (Google Play). The iOS app also runs on iPad with iPadOS 18+.
- Mobile can: text, Start dictation, Start voice chat, play a voice memo, photo/file, mention a Bot or @everyone, threads, reactions; create a Bot (New Bot) or New Group Chat; edit a Bot profile; delete a Bot; open the computer and take over; see a routine's schedule, next run, instruction and Run history; toggle Active; delete a routine; search Messages/Bots/Group Chats/Files/Routines; Settings incl. Auto Review when available, Language, usage.
- Mobile cannot: edit a routine's schedule or instruction; test a routine; some advanced desktop controls and teach-by-demonstration.
- iPhone share sheet accepts photo, file, link or text into a chat; Android share sheet currently accepts text.
- Email or Slack drafts can appear as New Email / New Slack Message cards with Send Email / Send Message or Discard.
- Push delivery is still rolling out; in-app attention states work when push is not enabled.

## Computer [computer-and-apps], [troubleshooting], [settings-and-notifications], [security]

- One persistent cloud computer per USER, shared by every Bot of that user; files, browser sessions and command-line credentials are shared. Do not use separate Bots as a security boundary.
- Each user gets a dedicated Firecracker microVM with its own kernel, memory and virtual devices; hardware-level separation between users. "When a workload needs its own computer and credential set, give it its own Cursor user."
- Each Bot gets its own screen; one Bot runs one computer-use task on its screen at a time.
- Idle computers hibernate; hibernation is not deletion. Durable disk keeps files, browser sessions and anything saved in the browser. Connector tokens are never stored on the computer.
- Recovery order when the computer cannot be reached: Retry or reopen the conversation -> restart the app -> Recover computer ("Recover Grok Bot's Computer") -> Settings -> Updates -> Update under Grok Bot's Computer (phone: Settings -> Bot -> Bot Computer -> Update Computer / Reset Computer) -> wait for the replacement -> Reset only if recovery and update fail.
- Recover computer is offered only from the unreachable-computer error state, not in Settings [computer-and-apps]. Recover computer and Update preserve durable files and logins. Reset wipes and rebuilds from the last saved snapshot; recent or unsynced work can be lost. Use Reset as a last resort.
- App update and computer update are separate: Settings -> Updates -> Check for Updates / Restart to Update updates the app; Update under Grok Bot's Computer rebuilds the cloud computer and keeps files. Updating the desktop app does not reset the cloud computer.
- Computer setup states: "Starting your computer", "Updating your computer"; initial setup or an image update can take several minutes.
- Hosting: Cursor-hosted cloud computers only; no on-premises, no bring-your-own-image. Computers run in the United States today; that is not the same as Cursor's US-only data residency program, which does not apply to Grok Bot by default.
- Default network: shared static egress. "Route egress through this desktop" sends the computer's web traffic through the current desktop (destinations see the desktop IP); per desktop; an Enterprise admin can turn off Allow Local Egress (active routes stop within five minutes). Enterprise Team Setup can install a networking client (Tailscale, Cloudflare Tunnel) [private-networks].

## Stuck, errors, support [troubleshooting], [settings-and-notifications]

- A Bot appears stuck: check the status in the sidebar and conversation; open the computer to see whether it is waiting on a page; look for a question, approval, login, CAPTCHA or secret request; send a short redirect; send "Stop now" to end work. A computer-use task already active on that Bot's screen may need to finish or be redirected first. If usage is exhausted or an on-demand spending limit is reached, review Usage & Billing.
- Attention states in the sidebar: Needs attention (question, approval or handoff), Unread activity (new result), working or typing status.
- Errors appear above the composer under Notifications; some include "Copy request ID". Clearing a notice does not undo the external action.
- Attachments: up to 25 MB, or 200 MB for video; no more than six attachments at once on desktop; not encrypted or password-protected; upload finished; supported type. Try exporting to PDF, CSV, plain text or an image.
- Sign-in: keep Grok Bot open while browser auth runs; confirm the Cursor sign-in succeeded; return to the app manually; retry; confirm the account has access; with SSO use the organization login. Legacy Privacy Mode error means the account's data mode does not permit required storage.
- Before contacting support collect: Grok Bot version; OS and version; exact error message; Bot or routine name; approximate time and time zone; full request ID or conversation ID; whether retry, app restart or updating the computer changed the result. Never include passwords, codes, keys or secrets.
- Cursor help pages show a "Check system status" link; the docs do not document a Grok Bot status page URL. Do not invent one.

## Approvals and Auto Review [approvals-security-and-privacy], [settings-and-notifications]

- Auto Review evaluates tool calls and computer actions before they run. Settings -> General -> Bot -> Auto-review.
- "Ask first" rules always stop matching actions. "Allow automatically" rules let matching actions proceed only when the automated review finds no other reason to stop. If both match, Ask first wins.
- Team admins can enforce Auto Review (Enterprise); team rules appear locked ("Required by your admin. You can't edit or delete this rule."); personal rules can only make behavior stricter.
- Personal Auto-review rules are saved to the account and apply on every desktop you sign in to and on the Grok Bot computer.
- Auto Review is model-based and should complement, not replace, least privilege and explicit approval boundaries. Avoid broad rules like "allow everything in the browser".
- Desktop approval buttons: Allow once, Deny, Always allow (can save a matching rule). Phone: Allow, Deny, and Always allow when a rule is proposed; a local-command card offers Allow once and Deny.
- An approval controls the proposed action; it does not reverse work already completed.

## Sensitive inputs [approvals-security-and-privacy]

- Passwords, passkeys, 2FA codes, CAPTCHAs, payment confirmations: take over the computer (Agent Computer -> take control -> complete -> return control -> tell the Bot to continue). Never send a password or code in ordinary chat.
- Secure secret request: for a supported connection; the value is masked, excluded from the transcript, and not shown to the model. It is not a general-purpose password manager.
- Forms in chat: when a page needs you to type something (login, checkout address, phone number) the Bot can show one form per step and fill your answers into the page.
- Hardware security keys: with "Use hardware security keys" on under Settings -> General -> Security Key, the Bot's browser can use a key plugged into your desktop. On by default on macOS and Windows; not yet supported on Linux; every use asks for approval.

## Local computer execution [approvals-security-and-privacy], [security]

- Separate from the cloud computer. Bots can run commands, read files, and move files between the cloud computer and your machine.
- Settings -> General -> Bot -> Execution on Local Computer: Ask every time (default), Always allow, Never allow. Once computers are registered: Settings -> Computer -> Computers, per computer "Execution on this computer".
- First request shows "Allow Grok Bot and all Bots to run commands on your local computer?" with Always allow, Allow once, Never, Deny once (Esc). Always allow and Never apply to every Bot.
- Team admin can cap it; the stricter of team and member applies. Docs recommend Never allow unless a Bot has a specific reason. It is distinct from Auto Review.

## Privacy, data, certifications [faq], [approvals-security-and-privacy], [security], [security-faq]

- Grok Bot uses Cursor authentication and account data settings. Training opt-out follows the applicable Cursor account and privacy settings. With Privacy Mode enabled (team), customer data is not used for training.
- Grok Bot requires cloud data storage; Legacy Privacy Mode is not supported.
- Zero Data Retention follows Cursor's existing provider agreements; model providers do not keep prompts or outputs; providers may run abuse classifiers and flagged data may be stored.
- Model selection: Cursor manages it; no model picker; serving mix can change; usage analytics show the serving model; billing follows it. Team model allowlist is Enterprise only and enforcement is not guaranteed.
- Deletion of a Bot removes its profile, conversation and routines; files and logins on the computer may remain; "Hide" the Bot instead if you may need its work. Backend retention follows Cursor terms; DPA deletion or return within 30 days of written direction after service ends; daily encrypted backups. No per-organization retention policy; no customer point-in-time restore.
- Certifications: Anysphere holds ISO/IEC 27001 and ISO/IEC 42001 (issued by Schellman); Grok Bot is in the current ISO scope; reports at trust.cursor.com. The Grok Bot docs name NO other certification. Cursor's website footer shows company-level badges ("SOC 2 | ISO27001 | ISO42001 | AIUC-1 Certified", cursor.com/pricing, read 2026-09-23); a company badge does not state which products a report covers. So: do not claim Grok Bot is SOC 2 certified and do not claim it is not; say the Grok Bot docs list only the two ISO certifications and tell reviewers to confirm SOC 2 report scope with the account team. Never claim HIPAA compliance, a BAA or GDPR certification for Grok Bot.
- Prompt injection: outside content is marked untrusted; Auto Review plus network policy, per-action approvals and per-user isolation reduce but do not eliminate risk.

## Enterprise and teams [teams-and-enterprises], [security]

- Admin controls live on the Grok Bot page of cursor.com/dashboard/bot (admins only): Enable Grok Bot for your team + Manage Group Access; Cloud Agents (lets Bots delegate coding tasks to Cursor Cloud Agents; team-wide; on by default); Public template sharing (Enterprise starts off, others allowed); connector policy inherited from Cursor Team Marketplace (MCP allowlist Enterprise only; blocked shows "Disabled by team admin"); Execution on Local Computer cap; Team Rules (always required for Grok Bot); Enforce Auto-review (Enterprise, off by default); team Auto-review rules (Enterprise); Network Controls (Enterprise; teams without a policy default to allow-all).
- Audit logs (Enterprise only): admin, security, auth events plus Grok Bot control-plane events (Bot creation, member access changes, Team Setup manifests, MCP authentication, Slack account links, routines). Self-serve Teams do not get this log.
- Action Recording (Enterprise only, off by default): records connector tool calls, shell commands (secret-scrubbed), browser navigations (scheme://host/path + title, no query strings), computer-use sessions (action and screenshot counts and duration, no screenshots, clicks or typed text). 90-day retention in an internal store. Not shown on the Audit Log page. OpenTelemetry Export (Enterprise) streams events tagged cursor.surface=grok_bot. Legacy Privacy Mode forces recording off.
- Conversation Insights (Enterprise where rolled out) groups Bot conversations by Type of Work and Level of Automation.

## Bots, sharing, collaboration [bots], [faq], [chat-and-collaboration], [settings-and-notifications]

- Share: Share menu -> Create template -> Copy link -> Public link or Team-only (Enterprise defaults to Team-only). Recipients preview on x.ai and add a copy; they do not get your computer, logins or history. The link exposes the Bot configuration; strip secrets. Adding a shared Bot accepts the third-party bot terms.
- A Bot can be pinned, hidden, duplicated, shared or deleted. Edit one Bot: Name, Label (optional), Description, avatar, Notifications.
- Up to six Bots per channel (earlier facts file; unchanged).
- Voice: desktop dictation Cmd/Ctrl+D or Start voice input; phone Start dictation; Start voice chat is live conversation on desktop, iPhone and Android (a button, no keybinding); Bots can send a voice memo.
- Multiple accounts on desktop: account menu -> Switch account / Add account; Settings lists them with Remove on inactive rows.
- Language: more than 20 on desktop (Follow System); shorter list on phone (System).
- Timezone setting (Settings -> General -> Bot) is what routines use for schedules.
- Marketplace (sidebar) holds plugins and packaged skills; Your plugins -> Manage plugins and skills lists Installed plugins and Private skills.
- Routines: a Bot can own up to 50 routines; the app keeps the 20 most recent run records per routine; deleting a routine is immediate with no undo; deleting a Bot removes its routines [skills-routines-and-automations]. Test run can perform real external actions [troubleshooting].
- Unattended usage: Grok Bot may ask whether to keep routines running after a long period away and pause them if there is no response; review paused routines when you return [skills-routines-and-automations].

## Admin features that shipped (older pages call them "coming soon") [teams-and-enterprises], [computers], [identity-and-access]

- Team cap on Execution on Local Computer: available to team admins (Teams and Enterprise; not marked Enterprise only). Team default Always allow leaves the choice to members; Ask every time or Never allow tighten it; a member's own stricter setting still applies.
- Switching Grok Bot off for everyone: the organization-wide "Enable Grok Bot for your team" switch (with Manage Group Access) is ENTERPRISE ONLY; turning it off blocks every member without deleting their computers. On a self-serve Teams plan the same card is only a status line ("Grok Bot is enabled for your team") with no switch, so a self-serve Teams admin has no documented team-wide off switch.
- Member computers: "Grok Bot Computers" on the dashboard Grok Bot page, Enterprise only and organization admins only, can Recreate or Terminate members' computers in bulk. Both keep the durable disk; both remove apps members installed themselves. There is no feature called "Kill" in the current docs.
- Identity: Grok Bot uses the Cursor account; no separate Grok Bot app in Okta or Entra ID. Cursor SSO is SAML 2.0 (Okta, Microsoft Entra). SCIM 2.0 provisioning is Enterprise, with automatic deprovisioning.
- Mobile sign-in button: "Log In or Sign Up"; SuperGrok users then "Link Grok Account" and "Finished Linking? Refresh My Status" [mobile].
- A phone can edit a Bot profile (Name, Label, Description), and the Description is where standing boundaries live; what the phone cannot do is edit a routine's schedule or instruction, or test a routine [mobile], [settings-and-notifications].
