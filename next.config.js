/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    ENV: 'production',
    // ENV: 'development',
    // API_URL: 'https://api.howardapi.com/api/v1',
    API_URL: 'https://austinhowardapi.azurewebsites.net/api/v1',
  }
}

module.exports = nextConfig
