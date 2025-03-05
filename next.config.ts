/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use a dynamic basePath and assetPrefix for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/miranda' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/miranda' : '',
}

module.exports = nextConfig
