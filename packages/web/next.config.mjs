/** @type {import('next').NextConfig} */
const nextConfig = {
  // seed-bots/ lives at the repo root; include it in the server bundle so the
  // file-catalog loader works on Vercel.
  outputFileTracingIncludes: { '/': ['../../seed-bots/**'] },
};
export default nextConfig;
