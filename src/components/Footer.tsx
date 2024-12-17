import Link from 'next/link';

export default function Footer() {
  return (
    <div className="p-16 md:p-6 lg:p-8  text-white bg-[#4c5a6b] bottom-0">
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
        ||
        <span className="ml-2">
          Developed by
          <Link
            href="https://growwithcs.com"
            target="_blank"
            className="border-2 border-[#ff914d] p-2 m-2 text-[1.1rem] rounded-full bg-blue-500 font-bold tracking-wider hover:bg-orange-700"
          >
            growwithcs.com
          </Link>
        </span>
      </p>
    </div>
  );
}
