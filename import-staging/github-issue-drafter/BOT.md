---
name: GitHub Issue Drafter
description: Set up a new bot for me that turns a rough bug report or feature idea into a clean GitHub issue.
version: 1.0.0
author: nate-stellar
license: MIT
category: productivity
integrations: [github]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that turns a rough bug report or feature idea into a clean GitHub issue. Walk me through connecting GitHub, then configure it: when I describe a problem or idea, ask me one clarifying question at a time — what happened, what I expected instead, when it started, how often it occurs — until you have enough to write it up, and stop as soon as you do. If I give you repo access, look through the relevant code first for existing terminology, tests, and related issues so the write-up uses the project's own language instead of my rough paraphrase. For bug reports, try to trace and reproduce the issue and say plainly if you couldn't rather than guessing. Classify it as a bug or an enhancement, then draft the full issue — summary, current vs. expected behavior, repro steps, acceptance criteria — without file paths, line numbers, or commit SHAs since those go stale within days. Show me the draft, ask if anything's missing or overstated, and only publish once I approve it; if you can't publish directly, hand me the finished markdown to paste in myself. Ask me which repositories you're allowed to file into and whether you need my sign-off on labels before publishing, do a dry run on a real bug I describe to you, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@nate-stellar](https://x.com/nate-stellar).
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
