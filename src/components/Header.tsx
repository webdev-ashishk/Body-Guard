'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const [getTheData, setGetTheData] = useState([]);

  return (
    <div className="bg-slate-600 sticky top-0 header w-11/12 m-auto z-50">
      <nav className="flex items-center justify-between">
        <h1 className="ml-10">LOGO</h1>
        <div className="flex items-center mr-10">
          <ul ref={menuRef} id="menuItems" className="flex gap-6 p-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul
            id="menuButton"
            className="hidden text-2xl font-bold"
            onClick={() => {
              setOpenMenu(!openMenu);
              if (menuRef.current) {
                const menuItems =
                  menuRef.current.querySelectorAll<HTMLLIElement>('li');
                menuItems.forEach((element) => {
                  setGetTheData(element);
                });
              }
            }}
          >
            {openMenu ? <IoMdClose /> : <RxHamburgerMenu />}
            <li>{getTheData}</li>
          </ul>
        </div>
      </nav>
      {openMenu ? (
        <h1 className="h-52"> id added {getTheData} </h1>
      ) : (
        <h1> id removed</h1>
      )}
    </div>
  );
}
