'use client';

import type { ReactNode } from 'react';
import { isValidElement } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import { MermaidBlock } from '@/components/mermaid-block';

/** Pull the source out of the <code> child of a fenced ```mermaid block. */
function mermaidSource(children: ReactNode): string | null {
  if (!isValidElement(children)) return null;
  const props = children.props as { className?: string; children?: ReactNode };
  // rehype-sanitize keeps language-* class names on <code>, which is how a
  // fenced mermaid block survives far enough to be swapped here.
  if (props.className !== 'language-mermaid') return null;
  return String(props.children ?? '').trim() || null;
}

export function PostBody({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        pre({ children, ...props }) {
          const chart = mermaidSource(children);
          // Render the diagram in place of the <pre> rather than inside it, so
          // the SVG is not trapped in a monospace preformatted context.
          if (chart) return <MermaidBlock chart={chart} />;
          return <pre {...props}>{children}</pre>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
