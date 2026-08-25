// IndexNow ownership proof. The file must return the bare key as text/plain at
// this exact path, or Bing rejects submissions with SiteVerificationNotCompleted.
// There is no public/ directory in this app, so it is served as a route.
export const dynamic = 'force-static';

export function GET() {
  return new Response('f6d49f900b4026446799c50d00a8e80a', {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
