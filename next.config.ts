// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: [
//       'cdn.create.vista.com',
//       'shutterstock.com',
//       'static.vecteezy.com',
//       '5.imimg.com',
//       'denetimservices.com',
//       'www.promansecuritech.com',
//       'sspatnabouncer.com',
//       'drive.google.com',
//       'drive.usercontent.google.com',
//       'do6gp1uxl3luu.cloudfront.net',
//       'png.pngtree.com',
//       'res.cloudinary.com',
//     ], // Add this line to allow images from this domain
//   },
// };

// export default nextConfig;

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.create.vista.com' },
      { protocol: 'https', hostname: 'shutterstock.com' },
      { protocol: 'https', hostname: 'static.vecteezy.com' },
      { protocol: 'https', hostname: '5.imimg.com' },
      { protocol: 'https', hostname: 'denetimservices.com' },
      { protocol: 'https', hostname: 'www.promansecuritech.com' },
      { protocol: 'https', hostname: 'sspatnabouncer.com' },
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'drive.usercontent.google.com' },
      { protocol: 'https', hostname: 'do6gp1uxl3luu.cloudfront.net' },
      { protocol: 'https', hostname: 'png.pngtree.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
