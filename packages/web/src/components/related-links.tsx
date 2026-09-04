import Link from 'next/link';
import type { ParsedBot } from '@botskills/shared';
import type { RelatedPost } from '@/lib/related';

// Server component: plain links, no interactivity. Renders nothing when there
// is nothing related rather than an empty heading.
export function RelatedLinks({
  posts,
  bots,
  heading = 'Related',
}: {
  posts: RelatedPost[];
  bots?: ParsedBot[];
  heading?: string;
}) {
  const hasBots = !!bots && bots.length > 0;
  if (!posts.length && !hasBots) return null;
  return (
    <nav className="related" aria-label={heading}>
      <h2>{heading}</h2>
      {hasBots && (
        <>
          <p className="ds">Bots</p>
          <ul>
            {bots!.map((b) => (
              <li key={b.slug}>
                <Link href={`/bots/${b.slug}`}>{b.name}</Link>
                <span className="ds"> {b.description}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      {posts.length > 0 && (
        <>
          <p className="ds">Guides</p>
          <ul>
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                <span className="ds"> {p.category}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
