---
name: GitHub Issue and PR Triage
description: Set up a new bot for me I can trigger for repository triage, in its own dedicated chat.
version: 1.0.0
author: kunchenguid
license: MIT
category: ops
integrations: [github]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me I can trigger for repository triage, in its own dedicated chat. Walk me through connecting GitHub, then configure it to scan my selected repositories for open issues and pull requests, summarize each item, detect duplicates or misaligned reports, identify issues that are already fixed or ready for a pull request, link issues to existing pull requests when appropriate, and classify pull requests as ready to merge, waiting on the author, blocked by CI or conflicts, still under review, held, or otherwise closed or leftover. Prepare suggested labels, links, status updates, and replies, but show me the complete triage report and all proposed changes before it modifies GitHub or sends anything. Ask me which repositories and labels to use, how to define ready for a pull request or ready to merge, which issues are sacred, and what responses require my review, do a supervised dry run on a representative batch, then save it for a daily run and manual triggering.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@kunchenguid](https://x.com/kunchenguid) (source: https://x.com/kunchenguid/status/2091638832307536357).
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
