/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/*",
        headers: [
          {
            key: "x-custom-header-config",
            value: "test2",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
