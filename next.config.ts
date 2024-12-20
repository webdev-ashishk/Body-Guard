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
      'sspatnabouncer.com',
      'drive.google.com',
      'drive.usercontent.google.com',
      'do6gp1uxl3luu.cloudfront.net',
      'png.pngtree.com',
    ], // Add this line to allow images from this domain
  },
};

export default nextConfig;
