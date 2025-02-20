import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
export default function HeaderMenuItems() {
  const currentPath = usePathname();
  const activeLink = `bg-[#8a4319] px-[1.25rem] py-[0.8rem] rounded-full font-bold text-white`;
  const nonActiveLink = `text-white hover:text-blue-600`;
  const handleHover = () => {
    const aboutUS = document.getElementById('dropDown');
    aboutUS!.style.display = 'block';
  };
  const handleMouseOut = () => {
    const aboutUS = document.getElementById('dropDown');
    aboutUS!.style.display = 'none';
  };
  // TODO how we can remove document.getelement ... and instead of use ref to solve this problems
  // desktop Header
  return (
    <div>
      <ul id="menuItems" className="flex items-center gap-1 p-4">
        <li className="">
          <Link
            href="/"
            className={currentPath === '/' ? activeLink : nonActiveLink}
          >
            Home
          </Link>
        </li>

        <li
          className="text-white"
          id="aboutUsMenuItems"
          onMouseOver={handleHover}
          onMouseLeave={handleMouseOut}
        >
          <div className="inline-block">Company</div>
          <div className="inline-block ml-2 font-bold align-middle text-2xl">
            <IoMdArrowDropdown />
          </div>
          <ul
            className="absolute w-40 bg-[#2a323c] hidden cursor-pointer text-center my-2"
            id="dropDown"
          >
            <li className="">
              <Link
                href="/aboutus"
                className={
                  currentPath === '/aboutus' ? activeLink : nonActiveLink
                }
              >
                About US
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={
                  currentPath === '/gallery' ? activeLink : nonActiveLink
                }
              >
                Gallery
              </Link>
            </li>
            <li className="">
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
                className={
                  currentPath === '/careers' ? activeLink : nonActiveLink
                }
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/director"
                className={
                  currentPath === '/director' ? activeLink : nonActiveLink
                }
              >
                Director
              </Link>
            </li>
          </ul>
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
            href="/contact"
            className={currentPath === '/contact' ? activeLink : nonActiveLink}
          >
            Contact
          </Link>
        </li>
        <li
          className="rounded-full border-2 border-[#ff914d] text-[#ff914d]"
          id="contactRBG"
        >
          <div className="cursor-pointer flex justify-between items-center">
            <FaPhoneAlt />
            <Link
              href={`tel:${8789033303}`}
              className="ml-2 font-extrabold text-1xl md:text-[1.2rem]"
            >
              8789-0333-03
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
