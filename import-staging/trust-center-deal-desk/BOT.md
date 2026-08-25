---
name: Trust Center Deal Desk
description: Set up a new bot that handles customer Trust Center requests.
version: 1.0.0
author: elie2222
license: MIT
category: sales
integrations: [comp-ai, slack]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot that handles customer Trust Center requests. Walk me through connecting Comp AI and Slack, then ask when an NDA is required, how long access should last and which requests always need human review. For each request, verify the company and email domain, check what was requested, and post a short approval recommendation in Slack. Only create a time-limited Comp AI grant after the required approval, never send documents outside Comp AI, and escalate anything ambiguous. Run a read-only pass over recent requests so I can check the rules, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@elie2222](https://x.com/elie2222).
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
