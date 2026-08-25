#!/usr/bin/env node
// Ping IndexNow (Bing, Yandex, Naver, Seznam) with newly published URLs.
// Google does not participate; it finds posts through the sitemap.
//   node scripts/indexnow.mjs <slug> [<slug>...]   submit specific blog slugs
//   node scripts/indexnow.mjs --all                submit every URL in the sitemap
const KEY = 'f6d49f900b4026446799c50d00a8e80a';
const HOST = 'botskills.sh';

const args = process.argv.slice(2);
if (!args.length) {
  console.error('usage: node scripts/indexnow.mjs <slug>... | --all');
  process.exit(1);
}

let urlList;
if (args[0] === '--all') {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} else {
  urlList = args.map((s) => `https://${HOST}/blog/${s}`);
}

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
});

for (const endpoint of ['https://www.bing.com/indexnow', 'https://api.indexnow.org/indexnow']) {
  try {
    const r = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    console.log(`${endpoint} -> ${r.status}`);
  } catch (e) {
    console.log(`${endpoint} -> failed: ${e.message}`);
  }
}
console.log(`submitted ${urlList.length} urls`);
