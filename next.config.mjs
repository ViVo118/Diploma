/** @type {import('next').NextConfig} */
// next.config.mjs

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'millor-shop.ru',
        port: '',
        pathname: '/**',
      },
    ],
    loader: 'default',
  },
};

export default config;

  

