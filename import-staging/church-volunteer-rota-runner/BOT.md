---
name: Church Volunteer Rota Runner
description: Set up a new bot for me that runs the weekly volunteer rota for our services without nagging anyone.
version: 1.0.0
author: bumbmatei-sys
license: MIT
category: ops
integrations: [google-calendar, google-sheets, gmail]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that runs the weekly volunteer rota for our services without nagging anyone. Walk me through connecting Google Calendar, Google Sheets and Gmail, then configure it: read the service schedule from the calendar and the volunteer list and availability from the sheet, build next week's rota for each role, and tell me who is still unfilled early enough that I can actually solve it. Ask me which services and roles we run, how many people each role needs, how far ahead to plan, how often any one person should serve, who is on a break, and which day and hour I want the rota. Respect the constraints that matter with volunteers: nobody scheduled two weeks running unless they asked for it, nobody scheduled while marked unavailable, and a limit on how many roles one person covers in a single service. Treat unfilled roles as the headline, not a footnote. Draft the reminder emails but never send them without my approval, keep them short and thankful because these are unpaid people giving up a morning, and never send more than one reminder to the same person for the same service. Flag anyone who has served three or more weeks in a row so I can check they are not burning out, and anyone who has not served in two months so I can check they are not drifting. Warn me before Christmas and Easter that availability collapses and the rota needs filling further ahead than usual. Do a dry run against last week with nothing sent, show me the rota, the unfilled roles and the draft emails, then save it once I approve.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@bumbmatei-sys](https://x.com/bumbmatei-sys).
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
