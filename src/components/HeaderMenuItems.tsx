import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';
export default function HeaderMenuItems() {
  const currentPath = usePathname();
  const activeLink = `bg-[#8a4319] p-[0.75rem] rounded-lg text-semibold`;
  const nonActiveLink = 'text-white';
  return (
    <div>
      <ul id="menuItems" className="flex items-center gap-6 p-4">
        <li className="p-[0.75rem]">
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
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
