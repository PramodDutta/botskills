// Google Search Console ownership proof for https://botskills.sh/.
// Google fetches this exact path and expects the one-line token as text/plain.
// There is no public/ directory in this app, so it is served as a route like
// robots.txt, llms.txt and the IndexNow key.
// Do not delete this after verification; Google rechecks it periodically.
export const dynamic = 'force-static';

export function GET() {
  return new Response('google-site-verification: google588d7027d90d9720.html', {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
