import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function HeaderMenuItems() {
  const currentPath = usePathname();
  const activeLink = 'text-yellow-600';
  const nonActiveLink = 'text-white';
  return (
    <div>
      <ul id="menuItems" className="flex gap-6 p-4">
        <li>
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
      </ul>
    </div>
  );
}
