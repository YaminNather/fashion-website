/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.shopify.com",
      "localhost",
      "allensolly.imgix.net",
      "firebasestorage.googleapis.com"
    ]
  }
}
