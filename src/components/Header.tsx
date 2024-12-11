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
    <div className="w-full md:w-11/12 m-auto">
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
                onClick={() => {
                  fireConfetti();
                }}
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/about">About Us</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/services">Services</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/payNow">Pay Now</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/team">Team</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/careers">Careers</Link>
            </li>
            <li onClick={() => setOpenMenu(!openMenu)}>
              <Link href="/contact">Contact</Link>
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
