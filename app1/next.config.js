// const nextConfig = {
//   reactStrictMode: true,
//   async headers() {
//     return [
//       {
//         source: "/",
//         headers: [
//           {
//             key: "x-custom-header-config",
//             value: "test1",
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

// const withNx = require("@nrwl/next/plugins/with-nx");
// const { ModuleFederationPlugin } = require("webpack").container;

/** @type {import('next').NextConfig} */
const path = require("path");

const contentSecurityPolicy = `
  frame-ancestors 'self' *.google.com *.googleusercontent.com
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

// /**
//  * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
//  **/
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/media/export/cms/products/:path*",
        destination: "https://www.origins.com/media/export/cms/products/:path*",
        permanent: false,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  // webpack: (config, { dev, isServer, ...options }) => {
  //   if (process.env.ANALYZE) {
  //     const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
  //     config.plugins.push(
  //       new BundleAnalyzerPlugin({
  //         analyzerMode: "static",
  //         reportFilename: options.isServer
  //           ? "../analyze/server.html"
  //           : "./analyze/client.html",
  //       })
  //     );
  //   }

  // config.experiments.topLevelAwait = true;

  // config.plugins.push(
  //   new ModuleFederationPlugin({
  //     remotes: {
  //       elc_service_analytics:
  //         "elc_service_analytics@http://localhost:8000/fe-elc-service-analytics/build/bundle.js",
  //     },
  //   })
  // );

  // if (process.env.CHECK_CIRCULAR_DEPS) {
  //   const CircularDependencyPlugin = require("circular-dependency-plugin");
  //   config.plugins.push(
  //     new CircularDependencyPlugin({
  //       exclude: /node_modules/,
  //     })
  //   );
  // }
  // const performance = dev
  //   ? config.performance
  //   : {
  //       hints: "error",
  //       // ±300kb gzipped
  //       maxAssetSize: 1200000,
  //       maxEntrypointSize: 1200000,
  //     };
  // config.performance = performance;
  // return config;
};

module.exports = nextConfig;
