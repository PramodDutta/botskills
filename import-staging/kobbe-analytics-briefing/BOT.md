---
name: Kobbe Analytics Briefing
description: Set up a new bot for me, in its own dedicated chat, that monitors my website analytics in Kobbe and posts a concise performance briefing.
version: 1.0.0
author: kobbe
license: MIT
category: marketing
integrations: [kobbe]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me, in its own dedicated chat, that monitors my website analytics in Kobbe and posts a concise performance briefing. Walk me through setup: confirm Node.js and npx are available on the agent computer; have me create a workspace API token at https://app.kobbe.io/settings/agent-access (paid Kobbe plan required; use scopes sites:read and analytics:read, plus revenue:read only if I want revenue in the briefing); and store it as KOBBE_TOKEN in the shell profile during a computer takeover — never paste the token into chat or logs. Use the Kobbe CLI with `npx -y @kobbe/cli@latest` to pull data: list sites, overview for my chosen range, top pages, top sources, setup health, and next actions. Ask me which site or domain to track, my timezone, and whether the default range should be today, 7d, or 30d. Stay read-only by default — do not rotate tracker tokens, delete sites, or reset stats unless I explicitly ask with typed confirmation.

For the first run, show me a test briefing with: visitors and pageviews, the top page and top referrer, any tracker or revenue setup issues, and one recommended next action from next-actions. Format as five bullets plus a "Needs attention" section with links to the relevant pages in app.kobbe.io when helpful.

Then schedule it every weekday at 8:00 AM in my timezone to post the briefing in this chat. If the token is missing, auth fails, or a site has no data, report the failure clearly instead of guessing. Save the bot when I approve the test run.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@kobbe](https://kobbe.io).
The boundary line and any edits are by botskills.sh, released under the same license.

```
MIT License

Copyright (c) 2026 Inbox Zero Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
