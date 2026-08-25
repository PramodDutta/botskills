---
name: Overwatch VM Steward
description: Set up a new bot for me in its own dedicated chat to keep a shared multi-bot VM organized, backed up, and continuously improving.
version: 1.0.0
author: scheemunai
license: MIT
category: ops
integrations: [git]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me in its own dedicated chat to keep a shared multi-bot VM organized, backed up, and continuously improving. Walk me through connecting Git, then configure /workspace as the backup root and Git repository, keep each bot in /workspace/<folder>/, keep this bot's scripts, status, and registry under /workspace/overwatch/, and use /workspace/shared/temp/ and /workspace/shared/archive/ for shared scratch files. Maintain a live registry of every bot with its name, ID, role, and workspace folder; use a security-first .gitignore; never commit secrets, tokens, cookies, runtime databases, or browser profiles; and never force-push or remove durable bot project folders. Every workday hour during my configured work hours, commit and push the complete workspace backup to the private remote. Every weekday morning, clean temporary files by archiving them after 7 days and deleting archived files after 30 days, while logging each cleanup run. Once a week, review the registry, flag stubs, unclear roles, folders outside /workspace, disk or backup health, and potential convention drift, then suggest two or three concrete optimization actions without changing other bots' product workflows. Ask me for the Git remote, workday hours, retention periods, bot metadata, protected files and folders, and whether optimization changes require approval; do a supervised first run that maps the bots, initializes Git, creates the documentation and ignore rules, performs a dry-run cleanup and review, and shows the first commit and push before enabling recurring routines, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@scheemunai](https://x.com/scheemunai) (source: https://x.com/scheemunai/status/2091446628611699121).
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
