"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="max-w-full sticky top-0 z-10 bg-black">
        <div className="max-w-7xl px-10 py-4 flex justify-between items-center">
          <Link
            className="flex items-center uppercase text-white ml-12 no-underline font-[system-ui] font-bold text-2xl hover:text-red-700 transition-all duration-500 truncate"
            href="/"
          >
            <Image
              src="/image/logo-b.png"
              alt="My image"
              height={10}
              width={55}
            />
            PortFolio
          </Link>

          <button className="lg:hidden text-white p-2" onClick={toggleMenu}>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>

          <ul
            className={`text-white gap-6 mr-12 ${
              isMenuOpen
                ? "flex flex-col w-full bg-black lg:bg-transparent"
                : "hidden lg:flex"
            } lg:flex lg:flex-row absolute lg:static top-full left-0 lg:top-auto lg:left-auto shadow-lg lg:shadow-none`}
          >
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
                href="#About"
              >
                ABOUT
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
                href="#Education"
              >
                EDUCATION
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
                href="#Skills"
              >
                SKILLS
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
                href="#Assignments"
              >
                ASSIGNMENTS
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
                href="#ContactUs"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content below the Navbar */}
      <div className={`transition-all duration-500 ${isMenuOpen ? "mt-[20rem]" : "mt-0"}`}>
        <div className="p-4">
        </div>
      </div>
    </div>
  );
};

export default Navbar;
