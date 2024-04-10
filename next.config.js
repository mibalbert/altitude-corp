/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: [
      "resend.com",
      "mongo-blog.s3.eu-central-1.amazonaws.com",
      "images.pexels.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "github.com",
      "assets.codepen.io",
      "images.unsplash.com",
      "utfs.io"
    ],
  },
};

module.exports = nextConfig;
