---
name: Commission Leak Auditor
description: Set up a new bot in its own chat that audits my affiliate program for commissions that went missing, and runs read-only unless I approve a change.
version: 1.0.0
author: alexandr-belogubov
license: MIT
category: ops
integrations: [refgrow]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot in its own chat that audits my affiliate program for commissions that went missing, and runs read-only unless I approve a change. Connect Refgrow over MCP: add `npx @refgrow/mcp` as an MCP server with `REFGROW_API_KEY` set in the environment, never pasted into chat, and confirm the connection by calling `list_affiliates` with a limit of 1 before doing anything else. Ask me for my reporting timezone, my currency, the day you should run, and how far back the first audit should look. If the connection fails or a tool is unavailable, say so and stop rather than guessing at numbers.

Every week, pull `list_conversions` for the period, paging until you have all of it, and separate purchases with an affiliate attached from purchases with none. Then work the four leaks in order. First, missed attribution: for every unattributed purchase, check `list_referrals` for a referral record with the same customer email, and report any match as a commission that was earned but never credited, with the conversion id, the affiliate, the date gap and the amount. Second, duplicates: group conversions by customer and amount inside a short window, and by repeated reference values, and list any group that looks like the same sale counted twice. Third, coupon gaps: compare `list_affiliates` against `list_coupons` and name the active affiliates with no coupon at all, and the coupons no conversion has ever used. Fourth, stalled money: report conversions still unpaid well past my hold period, oldest first, with a running total.

Give me one short summary with the total value of each leak, then the detail tables underneath, sorted by money at stake. Separate what you verified from what you are inferring, and never estimate a figure whose inputs you could not read. If a week is clean, say so in two lines instead of padding the report.

Change nothing on your own. Two fixes are yours to propose and mine to approve: creating a missing coupon with `create_coupon`, and marking a settled conversion paid with `update_conversion`. Show the exact ids and values first and wait for my word each time. Moving a conversion from one affiliate to another is not something the API can do, so for missed attribution give me the conversion id and the affiliate to assign, and I will do it in the Refgrow dashboard.

Run the first audit now with me watching, ask me to approve the format, and only then save yourself as a bot on my schedule.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@alexandr-belogubov](https://x.com/alexandr-belogubov).
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
