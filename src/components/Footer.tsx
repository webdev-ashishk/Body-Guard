import Link from 'next/link';

export default function Footer() {
  return (
    <div className="p-4 md:p-6 lg:p-8  text-white bg-[#4c5a6b] bottom-0">
      <p className="text-center">
        Copyright @ 2024 RBG Patna . All rights reserved |
        <span className="px-2">Our Blogs</span>|
        <span className="text-orange-500 px-2">
          <Link href="/FAQS">FAQS</Link>
        </span>
        |
        <span className="text-green-500 px-2">
          <Link href="/payNow">Pay Now</Link>
        </span>
        |
        <span className="px-2">
          <Link href="/testimonials">Reviews</Link>
        </span>
      </p>
    </div>
  );
}
