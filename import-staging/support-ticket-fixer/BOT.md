---
name: Support Ticket Fixer
description: Set up a new bot for me that runs when a support ticket arrives, in its own dedicated chat.
version: 1.0.0
author: euboid
license: MIT
category: success
integrations: [ferndesk, axiom, github, infisical, codex]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that runs when a support ticket arrives, in its own dedicated chat. Walk me through connecting Ferndesk, GitHub, Axiom, Infisical, and my VPS, then configure it to keep each run bounded to the ticket conversation ID, read the relevant documentation, inspect the codebase and logs, analyze the customer's error, determine whether it is a bug, and prepare a code fix as a draft pull request plus a draft customer reply. Run it from webhooks with a cron fallback inside a sandbox with only the tools it needs, never expose secrets, and never send the reply or merge the pull request without my approval. Ask me which repositories, log sources, documentation areas, ticket labels, and approval rules to use, do a supervised dry run on a representative ticket, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@euboid](https://x.com/euboid) (source: https://x.com/euboid/status/2089291320271482895).
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
