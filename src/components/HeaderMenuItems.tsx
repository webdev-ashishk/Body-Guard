import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
export default function HeaderMenuItems() {
  const currentPath = usePathname();
  const activeLink = `bg-[#8a4319] px-[1.25rem] py-[0.8rem] rounded-full font-bold text-white`;
  const nonActiveLink = 'text-white';
  const handleHover = () => {
    const aboutUS = document.getElementById('dropDown');
    aboutUS!.style.display = 'block';
  };
  const handleMouseOut = () => {
    const aboutUS = document.getElementById('dropDown');
    aboutUS!.style.display = 'none';
  };
  //TODO PUTS DropDown icons , using w3schools
  // TODO how we can use char , decimal , hex in jsx .
  // TODO how we can remove document.getelement ... and instead of use ref to solve this problems
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

        <li
          className="text-white"
          id="aboutUsMenuItems"
          onMouseOver={handleHover}
          onMouseLeave={handleMouseOut}
        >
          <div className="inline-block">About US</div>
          <div className="inline-block ml-2 font-bold align-middle">
            <IoMdArrowDropdown />
          </div>
          <ul
            className="absolute w-40 bg-[#2a323c] pl-2 py-2 my-2 hidden cursor-pointer text-center"
            id="dropDown"
          >
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
                className={
                  currentPath === '/careers' ? activeLink : nonActiveLink
                }
              >
                Careers
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
        <li className="rounded-full border-2 border-white" id="contactRBG">
          <div className="flex justify-between items-center text-orange-500 ">
            <FaPhoneAlt />
            <p className="ml-2 font-extrabold text-2xl">8789-0333-03</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
