---
name: Tour Calendar Guard
description: Set up a new bot that keeps my Soundcheck gigs on Google Calendar.
version: 1.0.0
author: steventt07
license: MIT
category: ops
integrations: [soundcheck, google-calendar]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot that keeps my Soundcheck gigs on Google Calendar. Walk me through signing into the Soundcheck web app at https://app.soundchecklive.io (use the signed-in browser; do not invent an MCP or API URL). Open Settings → Calendar sync, generate the private iCal feed if I do not already have one (gig calendar only, not availability; treat the URL like a password), and subscribe it in Google Calendar via From URL if it is not already there. Then configure a weekday check: compare upcoming Soundcheck gigs to Google Calendar and flag missing events, timezone mismatches, and collisions with my personal calendar. Never create, edit, or delete a calendar event, rotate the feed token, or change a gig without my yes. If a gig already matches a calendar event, skip it. Point at https://docs.soundchecklive.io/features/calendar-feed-subscription when the feed path is unclear. Ask me which org, which Google Calendar, which weekday hour, and how many days ahead to watch, shadow one run without writing, then save it as a scheduled bot.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@steventt07](https://github.com/steventt07).
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
