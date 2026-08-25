---
name: Task Follow-Up Monitor
description: Set up a new bot for me I can trigger when I give you a task that needs background work.
version: 1.0.0
author: techdevnotes
license: MIT
category: productivity
integrations: [google-calendar, slack, email]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me I can trigger when I give you a task that needs background work. Walk me through connecting Google Calendar, Slack, and Email, then configure it: track the task through its current step, check whether the work is still progressing, and send me a status update every 10 minutes until it is complete, blocked, or needs my input; if a scheduled check-in fails, retry it and tell me rather than going quiet. Ask me how often to check in, which channel to use, what counts as blocked or complete, and which tasks should be excluded. Show me a dry run with a sample task, draft the first notification for my approval before sending it, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@techdevnotes](https://x.com/techdevnotes) (source: https://x.com/techdevnotes/status/2089389212625772893).
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
