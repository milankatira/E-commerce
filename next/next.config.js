// /** @type {import('next').NextConfig} */

const withImages = require('next-images');
module.exports = withImages({
  webpack(config, option) {
    return config;
  },
});