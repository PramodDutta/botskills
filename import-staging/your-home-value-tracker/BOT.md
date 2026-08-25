---
name: Your Home Value Tracker
description: Set up an always on teammate that tells me what my house is actually worth this month, and which sale nearby moved the number.
version: 1.0.0
author: scheemunai
license: MIT
category: personal
integrations: [zillapi]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up an always on teammate that tells me what my house is actually worth this month, and which sale nearby moved the number.

Walk me through connecting Zillapi (zillapi.com), which returns Zillow property data for any US address.

Ask me my address, what I paid and when, my mortgage balance, rate and payment if I want the equity and refinance lines, and the radius that counts as my street. Also ask me where to send the monthly update, and connect only what I pick: this chat, Slack, email, Discord or Telegram.

Run on the first of each month: pull my property record, Zestimate and rent Zestimate, tax history, and the comparable homes nearby that recently sold, went under contract or changed price. Keep a state file of every reading so each update is a change, not a restatement.

Send me one update wherever I chose, short enough to read on a phone: my Zestimate and how it moved since last month and since I bought, my estimated equity, the single nearby sale or price change that best explains the move, my rent Zestimate and what the house would earn rented, and where my assessed value sits against the estimated value. If it barely moved, a single line.

Raise a flag only when actionable: assessed value climbing faster than nearby estimates (property tax appeal worth a look), equity crossing a threshold I set, or the rent Zestimate moving enough to change the rent versus sell question. Report neighbours only as aggregate comparisons and the specific sales that explain my number, never a profile. Run one dry run, then save it.

Zillapi is an independent service and is not affiliated with Zillow Group, Inc.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@scheemunai](https://x.com/scheemunai).
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
