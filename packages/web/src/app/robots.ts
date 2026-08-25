import type { MetadataRoute } from 'next';

// Machine endpoints are deliberately OPEN to AI crawlers: the catalog API and
// raw markdown are the product for agents. Only truly private paths are blocked.
export default function robots(): MetadataRoute.Robots {
  const allow = ['/', '/api/bots'];
  const disallow = ['/api/telemetry'];
  const agents = ['*', 'GPTBot', 'ClaudeBot', 'PerplexityBot', 'GrokBot', 'Amazonbot'];
  return {
    rules: agents.map((userAgent) => ({ userAgent, allow, disallow })),
    sitemap: 'https://botskills.sh/sitemap.xml',
  };
}
