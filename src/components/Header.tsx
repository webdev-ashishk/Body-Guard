'use client';
import { fireConfetti } from '@/utils/Confetti';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderMenuItems from './HeaderMenuItems';
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  // Function to trigger confetti animation
  // TODO WRITING FUNCTION FOR TOGGLE MENU
  // function toggleMenu(){

  // }

  return (
    <div className="bg-slate-600 top-0 header w-11/12 m-auto sticky z-50">
      <nav className="flex items-center justify-between" id="nav">
        <h1>
          <Link
            href="/"
            className="ml-2 text-2xl font-bold text-yellow-600"
            onClick={() => {
              fireConfetti();
            }}
          >
            LOGO
          </Link>
        </h1>
        <div className="flex items-center mr-2">
          <HeaderMenuItems />
          <ul
            id="menuButton"
            className="hidden text-2xl font-bold"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? <IoMdClose /> : <RxHamburgerMenu />}
            {/* <li>{getTheData}</li> */}
          </ul>
        </div>
      </nav>
      {openMenu ? (
        <div
          className="h-52 absolute z-50 bg-gray-500 w-full top-12"
          id="mobileHeader"
        >
          <ul className="flex flex-col justify-center items-center ">
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/"
                className="focus:text-yellow-600 focus:font-bold block"
                onClick={() => {
                  fireConfetti();
                }}
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/about"
                className="focus:text-yellow-600 focus:font-bold block"
              >
                About Us
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/services"
                className="focus:text-yellow-600 focus:font-bold block"
              >
                Services
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/team"
                className="focus:text-yellow-600 focus:font-bold block"
              >
                Team
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/testimonials"
                className="focus:text-yellow-600 focus:font-bold block"
              >
                Testimonials
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/careers"
                className="focus:text-yellow-600 focus:font-bold block"
              >
                Careers
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link
                href="/contact"
                className="focus:text-yellow-600 focus:font-bold block"
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
