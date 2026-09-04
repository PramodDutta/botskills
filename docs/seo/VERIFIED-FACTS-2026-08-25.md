# Verified Grok Bot facts, checked 2026-08-25

Every row below was checked against a PRIMARY source (docs.x.ai, x.ai, cursor.com).
Anything not on the SAFE list does not go in an article. Re-verify before reuse;
this product ships weekly.

Tip: every docs.x.ai page has a raw markdown twin at `<path>.md`,
e.g. https://docs.x.ai/grok-bot/faq.md

## SAFE TO ASSERT

### Isolation (the big one, and every viral post gets it wrong)
- All bots on an account share ONE persistent cloud computer. docs.x.ai/grok-bot/faq
- "The computer is assigned to your user account, not an individual Bot." docs.x.ai/grok-bot/computer-and-apps
- Each Bot gets its own SCREEN on that shared computer. Same source.
- Browser cookies, signed-in sessions, files, and command-line credentials are all shared across bots. Same source.
- Verbatim: "Do not use separate Bots as a security boundary." docs.x.ai/grok-bot/approvals-security-and-privacy
- Verbatim: "The screens are separate work surfaces, not separate security boundaries." computer-and-apps
- Deleting a Bot does NOT remove shared-computer files or browser sessions. approvals-security-and-privacy
- The computer is a managed Linux VM; the Bot runs as a non-root user. teams-and-enterprises
- Hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. teams-and-enterprises
- Static egress IPs; some services flag datacenter IP addresses. teams-and-enterprises
- Privacy Mode (Legacy) blocks Grok Bot entirely. teams-and-enterprises
- An audit view of Bot actions does not exist yet. teams-and-enterprises
- "An approval controls the proposed action. It does not reverse work already completed." approvals-security-and-privacy

### Platforms
- Supported: macOS (Apple silicon and Intel), Windows (x64 and Arm64), iPhone on iOS 18+. docs.x.ai/grok-bot/faq
- NOT supported: Linux desktop, Android, iPad. Same source.
- Verbatim: "Is there a Linux desktop app? No." teams-and-enterprises

### Access and pricing (expanded Aug 21 2026, which makes every competing article stale)
- Eligible: SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, Cursor Teams Standard and Premium. docs.x.ai/grok-bot/faq
- Cursor Pro+ $60/mo -> includes Grok Bot. CHEAPEST PAID PATH. cursor.com/pricing
- Cursor Ultra $200/mo -> includes. cursor.com/pricing
- Cursor Teams Standard $40/user/mo, Premium $120/user/mo -> both include. cursor.com/docs/account/pricing
- Cursor Hobby (free) and Cursor Pro ($20/mo) -> do NOT include. cursor.com/pricing
- SuperGrok Plus $100/mo -> includes "Grok Bot access". SuperGrok $30/mo -> does not. x.ai/pricing
- A one-time trial is an eligibility path for individuals. teams-and-enterprises
- Eligibility widened Aug 21 2026 to SuperGrok Plus, Cursor Pro+, and all Cursor Teams plans. x.ai/news/grok-bot-more-plans
- With both a Cursor and a SuperGrok subscription, Grok Bot uses whichever has more usage. faq
- Cursor has an India-only "Start" plan at Rs 649/mo. cursor.com/pricing

### Corporate
- Grok Bot launched in beta Aug 11 2026. x.ai/news/introducing-grok-bot
- SpaceX acquired xAI, announced Feb 2 2026. x.ai/news
- SpaceX's acquisition of Anysphere (Cursor) CLOSED Aug 14 2026. cursor.com/blog/joining-spacex
- The $60B agreement was announced June 16 2026 (SECONDARY, CNBC only).
- The org now trades as SpaceXAI ("(c) 2026 SpaceXAI LLC"). x.ai/news
- Grok Build went open source Jul 16 2026. x.ai/news

### Models
- Verbatim: "Grok Bot has no model picker, for members or admins. We do not plan to allow admin or user choice." teams-and-enterprises
- Fixed model set per surface with automatic failover; billing follows the actual serving model. teams-and-enterprises
- grok-4.6 is real and current, knowledge cutoff Feb 1 2026, powers Grok Build. docs.x.ai/developers/models
- Documented inconsistency worth naming: settings-and-notifications lists "Default Model, when model selection is available", which sits awkwardly against the no-picker language.

### Spend
- Verbatim: "There is no Grok Bot-specific spend cap yet." teams-and-enterprises
- Subscriptions include a WEEKLY usage allowance; overflow is on-demand, billed from model and token cost. faq

### Claude Code compatibility (attribute to GROK BUILD, never to Grok Bot)
- Verbatim: "Grok is fully compatible with Claude Code with zero configuration needed." docs.x.ai/build/features/skills-plugins-marketplaces
- Grok Build auto-reads Claude Code marketplaces, plugins, skills, MCPs, agents, hooks, and CLAUDE.md / Claude.md / CLAUDE.local.md / .claude/rules/. Same source.
- Also reads the AGENTS.md family, ~/.agents/skills/, ~/.agents/commands/. Same source.
- GOTCHA nobody has written up: Grok accepts but does NOT apply SKILL.md `model`, `effort`, `license`, `compatibility`; `allowed-tools` grants and restricts nothing. Same source.
- The Grok Bot docs never mention Claude Code, SKILL.md, or CLAUDE.md. Conflating Grok Build with Grok Bot is the most likely error in this whole topic.

### Teaching and routines
- Teach-by-demonstration records visible computer interaction for up to TEN MINUTES, no microphone audio, produces a DRAFT skill, browser workflows only, unavailable on iPhone. skills-routines-and-automations
- A routine assigns a workflow to ONE Bot. Max 50 routines per Bot; the app keeps the 20 most recent run records per routine. Same source.
- Deleting a Bot also deletes its routines. Nothing is team-level. Same source.
- On iPhone you can pause and resume only; editing, history, testing and deleting need desktop. mobile

### Coming soon (label as not shipped)
- Team-level ceiling on local execution with Never / Ask every time / Always, where "members can choose a stricter option, but not a looser one." teams-and-enterprises
- Admin "Kill" deletes the VM but durable storage is kept. teams-and-enterprises

## DO NOT ASSERT

- "Each Grok Bot gets its own computer or own VM" -> CONTRADICTED by docs.
- "Separate bots isolate credentials" -> CONTRADICTED three times in docs.
- "Deleting a bot cleans up its logins and files" -> CONTRADICTED.
- "There is a Linux desktop client / Android app / iPad app" -> CONTRADICTED.
- "Minimum access is $120 / $200 / $300 a month" -> STALE since Aug 21 2026. Pro+ is $60.
- "There is no cheaper path" -> CONTRADICTED. Pro+ $60, plus a one-time trial.
- "SuperGrok Heavy costs $300/mo" -> UNVERIFIABLE, not published anywhere. Never print this number.
- "xAI acquired Cursor" -> WRONG. SpaceX acquired Anysphere; SpaceX had already acquired xAI.
- "Grok Bot runs grok-4.6" -> UNVERIFIABLE. The model set for Grok Bot is not published.
- "Admins can choose or restrict the model" -> CONTRADICTED.
- "There is a spending cap or budget limit" -> CONTRADICTED.
- "The included allowance is X dollars or credits" -> UNVERIFIABLE, no figure published.
- "Grok Bot reads SKILL.md / CLAUDE.md / MCP config" -> WRONG AS WRITTEN. That is Grok Build.
- "Claude Code can consume Grok-authored skills" (reverse direction) -> UNVERIFIABLE.
- "Routines save at team level" -> CONTRADICTED. Per-Bot, and they die with the Bot.

### CORRECTION 2026-09-04: platforms (supersedes the Platforms section above)
Checked docs.x.ai/grok-bot/faq and docs.x.ai/grok-bot/mobile on 2026-09-04. The mobile page carries "Last updated: September 2, 2026".
- Desktop app: macOS (Apple silicon and Intel), Windows (x64 and Arm64), Linux (x64 and Arm64, "as a .deb package, an .rpm package, or an AppImage"). faq
- Companion app: "iPhone on iOS 18 or later", "Android 9 or later". "Download Grok Bot from the App Store on iPhone or Google Play on Android." faq, mobile
- Verbatim: "iPad is not supported at initial launch." faq. Verbatim: "Grok Bot is currently designed for phones, not iPad." mobile
- Verbatim: "Use the Grok Bot desktop app on macOS, Windows, or Linux, or the companion app on iOS or Android. The same Bots and conversations sync across your signed-in devices." faq
- Mobile CAN: send text, dictate, attach a photo or file, mention another Bot or @everyone in a group, reply in a thread, react; create Bots and groups (New Agent, New Group Chat); edit a Bot profile, manage group members, pin or hide a conversation, delete a Bot; open the computer to watch work, take over for a password, two-factor code or CAPTCHA, inspect the screen, return control; inspect a routine's schedule, next run and instruction and use Active to pause or resume it; search prior work; manage account, plugins, Bot settings, Auto Review when available, appearance, usage and an App Store or Google Play subscription. mobile
- Mobile CANNOT: "Editing the schedule or instruction, viewing run history, testing, and deleting a routine currently require the desktop app." "Some advanced desktop controls and teach-by-demonstration workflows are not available on mobile." mobile
- Eligibility verbatim on the mobile page: "SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, or Cursor Teams Standard or Premium (sign in with your Cursor account)".
- "Push delivery is still rolling out; in-app attention states remain available when push is not enabled for the account." mobile
- "Work continues in the cloud when the app is closed." mobile

DO NOT ASSERT any more: "no Linux desktop app", "no Android app", "iPhone is pause and resume only", "Supported: macOS, Windows, iPhone". iPad remains unsupported and that line stays.
Corpus status on 2026-09-04: about 90 articles still carry one of the old lines. Rewritten: grok-bot-android-status. Dated correction callouts added: grok-bot-ipad-status, grok-bot-iphone-app, why-grok-bot-has-no-linux-app, grok-bot-supported-platforms, download-grok-bot. A scripted sweep of the rest is pending.
