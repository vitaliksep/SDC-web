/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  // rewrites удалены: яндекс-верификация обрабатывается через
  // /src/app/yandex_8d56ecca5f15b2ac.html/page.jsx
};

module.exports = nextConfig;
