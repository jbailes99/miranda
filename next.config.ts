import type { NextConfig } from 'next'

const isGithubPages = process.env.NODE_ENV === 'production' // Adjust for production builds

const nextConfig: NextConfig = {
  basePath: isGithubPages ? '/miranda' : '',
  assetPrefix: isGithubPages ? '/miranda' : '',
}

export default nextConfig
