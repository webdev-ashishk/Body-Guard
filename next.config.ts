import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'cdn.create.vista.com',
      'shutterstock.com',
      'static.vecteezy.com',
      '5.imimg.com',
      'denetimservices.com',
      'www.promansecuritech.com',
    ], // Add this line to allow images from this domain
  },
};

export default nextConfig;
