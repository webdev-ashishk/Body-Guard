'use client';
import dynamic from 'next/dynamic';

// Dynamically import the Gallery component with SSR disabled
const Gallery = dynamic(() => import('../gallery/GalleryComponent'), {
  ssr: false,
});

export default function GalleryPage() {
  return <Gallery />;
}
