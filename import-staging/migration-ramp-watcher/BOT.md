---
name: Migration Ramp Watcher
description: Set up a new bot for me to babysit a database migration ramp.
version: 1.0.0
author: ericzakariasson
license: MIT
category: ops
integrations: [datadog, slack]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me to babysit a database migration ramp. Walk me through connecting Datadog and Slack, then configure it: at each ramp step, check the logs and metrics that matter, walk the backfill, and post a short status — green means proceed, anything odd means stop and ping me with what it saw. Ask me for the ramp plan and the metrics that count as trouble, shadow one step read-only, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@ericzakariasson](https://x.com/ericzakariasson) (source: https://x.com/ericzakariasson/status/2087258964131979423).
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
