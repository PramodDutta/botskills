---
name: Remote CLI Development Planner
description: Set up a new bot for me that plans software work and delegates implementation to command-line coding agents on a remote machine.
version: 1.0.0
author: iannuttall
license: MIT
category: productivity
integrations: [remote-vm, codex-cli, claude-code]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that plans software work and delegates implementation to command-line coding agents on a remote machine. Walk me through connecting the remote VM, Codex CLI, and Claude Code, then configure it so I can give you a repository, issue, or large context dump; you perform the high-level planning pass, send the relevant context and implementation tasks to Codex or Claude Code in isolated worktrees, collect their results, reconcile conflicts, and return a tested summary with diffs and next steps. Ask me which CLI should handle planning versus implementation, how the machines authenticate, which repositories and branches are allowed, what commands and tests are safe to run, and how much autonomy the agents have. Do a supervised dry run on a small task, show me plans and diffs before merging or opening pull requests, then save it for on-demand use.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@iannuttall](https://x.com/iannuttall) (source: https://x.com/iannuttall/status/2089317485975609387).
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
