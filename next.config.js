/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "mongo-blog.s3.eu-central-1.amazonaws.com",
      "images.pexels.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "github.com",
      "assets.codepen.io",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
