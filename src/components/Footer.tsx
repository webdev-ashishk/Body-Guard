import Link from 'next/link';

export default function Footer() {
  return (
    <div className="p-16 md:p-6 lg:p-8  text-white bg-[#2a323c] bottom-0">
      <p className="text-center">
        Copyright @ 2024 RBG Patna . All rights reserved |
        <span className="px-2">Our Blogs</span>|
        <span className="text-green-500 px-2">
          <Link href="/payNow">Pay Now</Link>
        </span>
        ||
        <span className="ml-2">
          Developed by
          <Link
            href="https://growwithok.com"
            target="_blank"
            className="pl-2 font-bold text-blue-500"
          >
            growwithok.com
          </Link>
        </span>
      </p>
    </div>
  );
}
