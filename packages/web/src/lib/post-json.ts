// The one way the browser posts to our own API. Callers decide what a failed
// response means; this only fixes the method, headers and encoding so the
// forms and telemetry beacons cannot drift apart.
export function postJson(url: string, body: unknown): Promise<Response> {
  return fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}
