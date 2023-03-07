/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  env: {
    customKey: "customValue",
  },
  compress: true,
  async redirects() {
    return [
      {
        source: "/hola",
        destination: "/",
        permanent: false,
      },
    ];
  },
  images: {
    domains: [
      "placeimg.com",
      "loremflickr.com",
      "fakestoreapi.com",
      "api.lorem.space",
      "picsum.photos",
      "www.apple.com",
    ],
  },
};

module.exports = nextConfig;
