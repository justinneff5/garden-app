/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'plant.id', 'm.media-amazon.com'],
  },
}

module.exports = nextConfig;
