---
name: Nightly Rate Optimizer
description: Set up an always on teammate that prices my short term rental like a revenue manager instead of like a guess.
version: 1.0.0
author: scheemunai
license: MIT
category: ops
integrations: [stayingapi]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up an always on teammate that prices my short term rental like a revenue manager instead of like a guess.

Walk me through connecting StayingAPI (stayingapi.com), which returns availability and nightly price quotes for short term rentals.

Ask me my listing and platform, my location and the radius that is my real competition, bedrooms, capacity and equivalent amenities, my floor price, minimum stay rules, and how far ahead to look. Also ask me where to deliver the weekly briefing (this chat, Slack, email, Discord or Telegram) and where to keep the night by night table (a Google Sheet, a Notion database, or a state file), and connect only what I pick.

Run every Monday: build my comp set of eight to fifteen genuinely equivalent listings, then for every night in the next ninety days pull my nightly price alongside the comp set's prices and availability. For each night work out where I sit against the comp median and how much of the comp set is already booked. Keep a state file of my price, comp median and comp booked share for every night.

Send me one briefing wherever I chose, only the nights that need a decision, in three lists: nights I am still open while more than half my comps are booked and I am at or below median (money left on the table, with a suggested raise); nights I am above median and still open in the booking window (suggested cut); nights where my comp set moved more than my threshold since last week. Put comp median, my price and the gap percentage on every line. Write the full night by night table to my chosen record every run. If nothing needs a decision, a single line.

Never change a price, edit my listing or message a guest. Give me the number and the reason. Run one dry run over the next thirty days, then save it.

StayingAPI is an independent service and is not affiliated with Airbnb, Booking.com, Vrbo or Google Hotels.

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
