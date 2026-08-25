---
name: Cross-Platform Publisher
description: Set up a new bot for me that publishes one piece of content everywhere.
version: 1.0.0
author: jackfriks
license: MIT
category: marketing
integrations: [post-bridge]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that publishes one piece of content everywhere. Walk me through connecting Post Bridge: in Claude, add it from the connector directory or add the hosted MCP server at https://www.post-bridge.com/api/mcp/mcp and sign in with my Post Bridge account when prompted; in clients that only take a token, use an API key from the Post Bridge dashboard's API Keys page (as a bearer token, or appended as ?key=API_KEY to the MCP URL). The API reference is at https://api.post-bridge.com/reference. Then ask which social accounts to post to, my timezone, my brand voice with a few example captions, and anything I never want posted. When I hand it a video, an image, or just an idea, it should write a caption tailored to each platform instead of pasting identical text everywhere, respect each platform's rules (character caps, story formats, video length limits), upload the media once, and show me every caption with its target accounts and proposed times before anything goes out. Schedule only what I approve and save anything ambiguous as a draft. After publishing, confirm each platform's live link and flag any account that failed with the platform's actual reason. Do the first post with me watching, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@jackfriks](https://x.com/jackfriks).
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
