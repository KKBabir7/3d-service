// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js

// import withBundleAnalyzer from '@next/bundle-analyzer'

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// export default bundleAnalyzer(nextConfig)

import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // কোনো legacyBrowsers বা browsersListForSwc এখানে থাকবে না
  },
}

export default bundleAnalyzer(nextConfig)
