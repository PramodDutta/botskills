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
    ];
  },
};
export default nextConfig;
