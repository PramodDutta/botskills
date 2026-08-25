---
name: Mail Delivery Troubleshooter
description: Set up a new bot for me that investigates failed email deliveries and prepares the next action for a technician or customer.
version: 1.0.0
author: euboid
license: MIT
category: ops
integrations: [mailops, spf, dkim, dmarc, smtp-logs]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that investigates failed email deliveries and prepares the next action for a technician or customer. Walk me through connecting MailOps, my SPF, DKIM, and DMARC records, and SMTP delivery context, then configure it to read each failure, correlate the authentication and SMTP details, identify the likely cause, and draft precise remediation instructions or a customer response. Ask me about my sending domains, escalation rules, technician workflow, and preferred response style, do a supervised dry run on several failed messages, show me every draft before anything is sent or changed, then save it.

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
