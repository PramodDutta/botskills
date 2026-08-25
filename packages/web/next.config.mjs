/** @type {import('next').NextConfig} */
const nextConfig = {
  // seed-bots/ lives at the repo root; include it in the server bundle so the
  // file-catalog loader works on Vercel.
  outputFileTracingIncludes: { '/': ['../../seed-bots/**'] },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        // Agents may crawl the API (robots.txt allows it); search engines
        // must not index the raw JSON and markdown duplicates of bot pages.
        source: '/api/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};
export default nextConfig;
