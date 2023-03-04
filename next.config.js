/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/books",
        permanent: true,
      },
    ];
  },
  env: {
    api_key: process.env.GRAFBASE_API_KEY,
    api_url: process.env.GRAFBASE_API_URL,
  },
};

module.exports = nextConfig;
