'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderMenuItems from './HeaderMenuItems';
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  // const menuRef = useRef(null);
  // const [getTheData, setGetTheData] = useState([]);
  // console.log(getTheData);
  return (
    <div className="bg-slate-600 sticky top-0 header w-11/12 m-auto z-50">
      <nav className="flex items-center justify-between" id="nav">
        <h1 className="ml-10">
          <Link href="/" className="font-bold text-2xl text-yellow-400">
            LOGO
          </Link>
        </h1>
        <div className="flex items-center mr-10">
          <HeaderMenuItems />
          <ul
            id="menuButton"
            className="hidden text-2xl font-bold"
            onClick={() => {
              setOpenMenu(!openMenu);
              // if (menuRef.current) {
              //   const menuItems =
              //     menuRef.current.querySelectorAll<HTMLLIElement>('li');
              //   menuItems.forEach((element) => {
              //     setGetTheData(element);
              //   });
              // }
            }}
          >
            {openMenu ? <IoMdClose /> : <RxHamburgerMenu />}
            {/* <li>{getTheData}</li> */}
          </ul>
        </div>
      </nav>
      {openMenu ? (
        <div className="h-52">
          <ul className="flex flex-col justify-center items-center ">
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/" className="focus:text-yellow-600 focus:font-bold">
                Home
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/about"
                className="focus:text-yellow-600 focus:font-bold"
              >
                About Us
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/services"
                className="focus:text-yellow-600 focus:font-bold"
              >
                Services
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/team"
                className="focus:text-yellow-600 focus:font-bold"
              >
                Team
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/testimonials"
                className="focus:text-yellow-600 focus:font-bold"
              >
                Testimonials
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/careers"
                className="focus:text-yellow-600 focus:font-bold"
              >
                Careers
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/contact"
                className="focus:text-yellow-600 focus:font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
