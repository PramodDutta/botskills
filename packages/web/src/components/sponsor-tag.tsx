import type { SponsorKind } from '@/lib/sponsors';

// The corner tag that keeps the inventory honest: fictional demo brands say
// so, and unpaid picks are never mistaken for customers. Paid bookings carry
// no tag.
export function SponsorTag({ kind }: { kind: SponsorKind }) {
  if (kind === 'demo') return <span className="demo-tag mono">demo</span>;
  if (kind === 'featured') return <span className="demo-tag mono">free pick</span>;
  return null;
}
