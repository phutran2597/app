/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/assets/css')],
  },
  trailingSlash: true
}

module.exports = nextConfig
