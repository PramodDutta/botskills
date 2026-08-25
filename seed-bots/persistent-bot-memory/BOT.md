---
name: Persistent Bot Memory
description: Set up a new bot that persists knowledge from my bots to one GitHub repo.
version: 1.0.0
author: TheCraigHewitt
license: MIT
category: productivity
integrations: [github]
runtimes: [grok-bot]
boundary: Never stores secrets, tokens, passwords, or customer data in memory.
tags: [imported, reviewed]
---

Set up a new bot that persists knowledge from my bots to one GitHub repo. Chat memory dies when the thread ends. Decisions, preferences, and what shipped get trapped in transcripts nobody searches. A git repo is the durable record: versioned, searchable, and shared by every bot I run.

Walk me through connecting GitHub. Ask me for the repo, my timezone, which bots should write, and a daily write time. Then set it up like this:

- One folder per bot.
- Each bot writes one markdown file per day (`YYYY-MM-DD.md`).
- Log only decisions, shipped work, and standing preferences.
- Never log secrets, tokens, passwords, customer data, or private messages.
- If nothing happened that day, stay quiet.
- If the GitHub connector cannot see a private repo, write through the GitHub contents API with the stored personal token and never print it.

Do one supervised first write I approve, then save the daily schedule.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@TheCraigHewitt](https://x.com/TheCraigHewitt).
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
