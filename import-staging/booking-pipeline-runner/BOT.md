---
name: Booking Pipeline Runner
description: Set up a new bot that keeps HubSpot deals and Soundcheck gigs in lockstep.
version: 1.0.0
author: steventt07
license: MIT
category: sales
integrations: [soundcheck, hubspot]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot that keeps HubSpot deals and Soundcheck gigs in lockstep. Walk me through signing into the Soundcheck web app at https://app.soundchecklive.io (use the signed-in browser; do not invent an MCP or API URL). Do not claim a native HubSpot OAuth inside Soundcheck; if this org already has the signed n8n HubSpot sync, use deal vs gig status, otherwise work the in-app Leads → Convert to Gig flow and treat HubSpot as the CRM this agent already has connected. Then configure a weekday check: HubSpot closed-won with no Active gig, Active gig with an unsigned contract, and won leads whose client is not invited to the portal. Draft the next step for each. Never convert a lead, send a contract, or invite a client without my yes. Point at https://docs.soundchecklive.io when a flow is unclear. Ask me which org, which HubSpot pipeline, and which weekday hour, shadow one run without sending, then save it as a scheduled bot.

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
