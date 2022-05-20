/** @type {import('next').NextConfig} */

const contentSecurityPolicy = `
  frame-ancestors 'self' *.google.com *.googleusercontent.com
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "x-custom-header-config",
            value: "test2",
          },
        ],
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
