import React from "react";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import Image from "next/image";

function Education() {
  return (
    <div>
      <h1 className="font-black text-center text-5xl text-white mt-5">EDUCATION</h1>
    <section id="Education">
      <div className="w-auto mx-7 my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0 py-12">
          {/* card strt  */}
          <div className="overflow-hidden rounded-2xl">
            <div className="relative block px-5 py-7 bg-[white]  group">
              <div className="absolute top-[0] left-[150px] h-6 w-28 rounded-full bg-black transition-transform duration-500 ease-out group-hover:scale-[20] hover:text-black"></div>
              <div className="min-h-[87px] mb-6 overflow-hidden font-bold text-xl text-red-700 relative">
                Certified Cloud Applied Generative AI Engineer (GenEng)
              </div>
              <p className="mb-6 text-red-700 relative">
                Governor House Karachi, Pakistan
              </p>
              <div className="text-lg text-red-700 relative">
                Start: 
                <span className="font-bold ml-5 text-red-700 transition-colors duration-500 ease-out">
                   Feb 2024
                </span>
              </div>
            </div>
          </div>



          <div className="overflow-hidden rounded-2xl">
            <div className="relative block px-5 py-7 bg-[white] text-white hover:no-underline group">
            <div className="absolute top-[0] left-[150px] h-6 w-28 rounded-full bg-black transition-transform duration-500 ease-out group-hover:scale-[20] hover:text-black"></div>
              <div className="min-h-[87px] mb-6 overflow-hidden font-bold text-xl text-red-700 relative">
                Graduation (B.com)
              </div>
              <p className="mb-6 text-red-700 relative">Karachi University</p>
              <div className="text-lg text-red-700 relative">
                Start:
                <span className="font-bold ml-5 text-red-700 transition-colors duration-500 ease-out">
                  March 2024
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div className="relative block px-5 py-7 bg-[white] text-white hover:no-underline group">
            <div className="absolute top-[0] left-[150px] h-6 w-28 rounded-full bg-black transition-transform duration-500 ease-out group-hover:scale-[20] hover:text-black"></div>
              <div className="min-h-[87px] mb-6 overflow-hidden font-bold text-xl text-red-700 relative">
                Amazon (Short Course)
              </div>
              <p className="mb-6 text-red-700 relative">
                JDC IT CITY Karachi, Pakistan
              </p>
              <div className="text-lg text-red-700 relative">
                Start:
                <span className="font-bold ml-5 text-red-700 transition-colors duration-500 ease-out">
                  January 2024
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div className="relative block px-5 py-7 bg-[white] text-white hover:no-underline group">
            <div className="absolute top-[0] left-[150px] h-6 w-28 rounded-full bg-black transition-transform duration-500 ease-out group-hover:scale-[20] hover:text-black"></div>
              <div className="min-h-[87px] mb-6 overflow-hidden font-bold text-xl text-red-700 relative">
                Intermediate (I.com)
              </div>
              <p className="mb-6 text-red-700 relative">
                Govt. Boys City College Karachi, Pakistan
              </p>
              <div className="text-lg text-red-700 relative">
                Start:
                <span className="font-bold ml-5 text-red-700 transition-colors duration-500 ease-out ">
                  April 2016
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div className="relative block px-5 py-7 bg-[white] text-white hover:no-underline group">
            <div className="absolute top-[0] left-[150px] h-6 w-28 rounded-full bg-black transition-transform duration-500 ease-out group-hover:scale-[20] hover:text-black"></div>
              <div className="min-h-[87px] mb-6 overflow-hidden font-bold text-xl text-red-700 relative">
                Certificate Information Technology (C.I.T)
              </div>
              <p className="mb-6 text-red-700 relative">
                Pak College and business Institute Karachi, Pakistan
              </p>
              <div className="text-lg text-red-700 relative">
                Start:
                <span className="font-bold ml-5 text-red-700 transition-colors duration-500 ease-out ">
                  june 2016
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div className="relative block px-5 py-7 bg-[white] text-white hover:no-underline group">
            <div className="absolute top-[0] left-[150px] h-6 w-28 rounded-full bg-black transition-transform duration-500 ease-out group-hover:scale-[20] hover:text-black"></div>
              <div className="min-h-[87px] mb-6 overflow-hidden font-bold text-xl text-red-700 relative">
                Matriculation (SSC)
              </div>
              <p className=" text-red-700 relative">
                Govt. Karachi Boys Secondary School Nazimabad Karachi, Pakistan
              </p>
              <div className="text-lg text-red-700 relative">
                Start:
                <span className="font-bold ml-5 text-red-700 transition-colors duration-500 ease-out">
                  Feb 2014
                </span>
              </div>
            </div>
          </div>
        </div>
                {/* Skills Section */}
                <div className="space-y-4">
          <div className="text-4xl flex items-center">
            <FaHtml5 />
            <p className="text-xl font-black text-red-700">HTML 5</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-white rounded-[20px] w-[90%] bg-[red] text-end mb-5">
              90%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <SiCss3 />
            <p className="text-xl font-black text-red-700">CSS 3</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-white rounded-[20px] w-3/4 bg-[red] text-end mb-5">
              75%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <RiTailwindCssFill />
            <p className="text-xl font-black text-red-700">Tailwind Css</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-white rounded-[20px] w-4/5 bg-[red] text-end mb-5">
              80%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <FaBootstrap />
            <p className="text-xl font-black text-red-700">BootStrap 5</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-white rounded-[20px] w-3/4 bg-[red] text-end mb-5">
              75%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <SiTypescript />
            <p className="text-xl font-black text-red-700">TypeScript</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-white rounded-[20px] w-[65%] bg-[red] text-end mb-5">
              65%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <IoLogoJavascript />
            <p className="text-xl font-black text-red-700">JavaScript</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-white rounded-[20px] w-[65%] bg-[red] text-end mb-5">
              65%
            </div>
          </div>

          <div className="text-4xl flex items-center">
            <RiNextjsFill />
            <p className="text-xl font-black text-red-700">NextJs</p>
          </div>
          <div className="w-full bg-[#ddd] rounded-[20px]">
            <div className="text-white rounded-[20px] w-4/5 bg-[red] text-end mb-5">
              80%
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Education;
