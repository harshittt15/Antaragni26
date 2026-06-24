/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
  },
  {
    key: "X-Frame-Options",
    value: "DENY"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  }
];

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    "@repo/ui",
    "@repo/firebase",
    "@repo/store",
    "@repo/model"
  ],
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;