import { createHash } from 'node:crypto';

// A stable, non-reversible id for one visitor: IP and user agent, hashed, and
// never stored raw. Dedupes votes and counts live visitors.
export function requestFingerprint(request: Request): string {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const ua = request.headers.get('user-agent') ?? '';
  return createHash('sha256').update(`${ip}|${ua}`).digest('hex').slice(0, 24);
}

// Deliberately loose: it rejects obvious junk and nothing legitimate. An
// address is confirmed by replying to it, not by a regex.
export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}
