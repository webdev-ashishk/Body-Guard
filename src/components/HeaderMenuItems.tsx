import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt } from 'react-icons/fa';
import { ModeToggle } from './ModeToggle';
export default function HeaderMenuItems() {
  const currentPath = usePathname();
  const activeLink = `bg-[#8a4319] px-[1.25rem] py-[0.8rem] rounded-full font-bold`;
  const nonActiveLink = 'text-white';
  return (
    <div>
      <ul id="menuItems" className="flex items-center gap-6 p-4">
        <li className="">
          <Link
            href="/"
            className={currentPath === '/' ? activeLink : nonActiveLink}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={currentPath === '/about' ? activeLink : nonActiveLink}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={currentPath === '/services' ? activeLink : nonActiveLink}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/payNow"
            className={currentPath === '/payNow' ? activeLink : nonActiveLink}
          >
            Pay Now
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className={currentPath === '/team' ? activeLink : nonActiveLink}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            href="/testimonials"
            className={
              currentPath === '/testimonials' ? activeLink : nonActiveLink
            }
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="/careers"
            className={currentPath === '/careers' ? activeLink : nonActiveLink}
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={currentPath === '/contact' ? activeLink : nonActiveLink}
          >
            Contact
          </Link>
        </li>
        <li className="rounded-full border-2 border-white" id="contactRBG">
          <div className="flex justify-between items-center text-orange-500 ">
            <FaPhoneAlt />
            <p className="ml-2 font-extrabold text-2xl">8789-0333-03</p>
          </div>
        </li>
        <li>
          {/* dark and light theme  */}
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
