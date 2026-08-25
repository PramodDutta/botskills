---
name: Show Paperwork Ingester
description: Set up a new bot that turns promoter paperwork in Gmail into Soundcheck gig records.
version: 1.0.0
author: steventt07
license: MIT
category: ops
integrations: [soundcheck, gmail]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot that turns promoter paperwork in Gmail into Soundcheck gig records. Walk me through signing into the Soundcheck web app at https://app.soundchecklive.io (use the signed-in browser; do not invent an MCP or API URL). Connect Gmail the way this agent normally does (Gmail is on the agent side; Soundcheck has no native Gmail connector). Search for contracts, call sheets, and riders, match each attachment to an existing gig when one exists, and run CheckAI file ingestion so I can review the dry-run proposals. If the ingestion UI is missing for this org, stop and point at https://docs.soundchecklive.io/features/ai/file-ingestion. Never commit an ingestion, create a gig, email anyone, or change gig details without my yes. Ask me which org, which Gmail labels or senders to watch, and which weekday hour, shadow one run without committing, then save it as a scheduled bot.

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
