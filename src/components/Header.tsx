'use client';
import { fireConfetti } from '@/utils/Confetti';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import afterLogoText from '../../public/images/afterLogoText.png';
import logo from '../../public/images/logo.png';
import HeaderMenuItems from './HeaderMenuItems';
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  // Function to trigger confetti animation
  // TODO WRITING FUNCTION FOR TOGGLE MENU , line number 36,51 ......
  // function toggleMenu(){

  // }

  return (
    <div className="border-b-2 border-b-[#7a8999] bg-[#2a323c] top-0 header w-full m-auto sticky z-50">
      <nav className="flex items-center justify-between" id="nav">
        <h1 className="w-[9%] flex justify-center items-center">
          <Link
            href="/"
            className="ml-10 text-2xl font-bold text-yellow-600"
            onClick={() => {
              fireConfetti();
            }}
          >
            <Image src={logo} alt="logo" id="logo" className="" />
            <span className="flex items-center">
              <Image
                src={afterLogoText}
                alt="afterLogoText"
                className="hidden"
                id="imageAfterLogoText"
              />
              <b className="text-3xl text-orange-500 hidden" id="logoText">
                RBG
              </b>
            </span>
          </Link>
        </h1>
        <div className="flex items-center">
          <HeaderMenuItems />
          <ul
            id="menuButton"
            className={`hidden text-3xl font-extrabold mr-8 text-orange-400`}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? <IoMdClose /> : <RxHamburgerMenu className="" />}
            {/* <li>{getTheData}</li> */}
          </ul>
        </div>
      </nav>
      {openMenu && (
        <div
          className="h-64 absolute z-50 bg-gray-500 w-full"
          id="mobileHeader"
        >
          <ul className="flex flex-col justify-center items-center text-white ">
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
              <li onClick={() => setOpenMenu(!openMenu)}>
                <Link
                  href="/payNow"
                  className="focus:text-yellow-600 focus:font-bold block"
                >
                  Pay Now
                </Link>
              </li>
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
            <li className="rounded-full border-2 border-white" id="contactRBG">
              <div className="flex justify-center items-center text-orange-500 bg-[#2a323c] rounded-full ">
                <FaPhoneAlt />
                <p className="ml-2 font-extrabold text-2xl">8789-0333-03</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
