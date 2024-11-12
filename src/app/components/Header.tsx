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
    <nav className="h-[90px] p-6 sticky top-0 z-10 bg-black shadow-2xl">
      <div className="flex justify-between items-center">
        <Link
          className="flex items-center  uppercase text-white ml-12 no-underline font-[system-ui] font-bold text-4xl hover:text-red-700 transition-all duration-500 truncate"
          href="/"
        >
          <Image
            src="/image/logo-b.png"
            alt="My image"
            height={10}
            width={55}
          />
          Muhammad Bilal Hussain
        </Link>

        <button className="lg:hidden text-white p-2" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        <ul
          className={`flex gap-6 text-white mr-12 ${
            isMenuOpen
              ? "flex-col absolute top-20 text-center left-0 shadow-2xl w-full p-4"
              : "hidden lg:flex"
          }`}
        >
          <li>
            <Link
              className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
              href="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
              href="#About"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
              href="#Education"
            >
              EDUCATION
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
              href="#Skills"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
              href="#Assignments"
            >
              ASSIGNMENTS
            </Link>
          </li>
          <li>
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
  );
};

export default Navbar;
