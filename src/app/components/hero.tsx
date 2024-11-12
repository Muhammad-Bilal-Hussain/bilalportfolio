"use client"
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between" id="home">
    <div className="flex flex-col justify-center font-bold ml-14 text-7xl lg:text-left text-center">
      <p className="text-2xl mb-0 text-white">Hello I'm</p>
      <h1 className="text-6xl font-black text-red-700">Muhammad Bilal Hussain</h1>
      <h2 className="mt-10 mb-14 text-white text-[40px]">
          <Typewriter
            options={{
              strings: [
                "Web Designer", "Web Developer", "UI/UX Designer",
                "Front End Developer", "Apps Designer", "Apps Developer"
              ],
              autoStart: true,
              loop: true,
            }}
          />
      </h2>
      <div className="flex gap-3 justify-center lg:justify-start">
        <div className="rounded text-center text-[20px] px-10 py-3 text-black bg-[red] hover:bg-[#9e201d] duration-500 hover:text-white">
          <a href="mailto:bh1977955@gmail.com" className="text-xl">Hire Me</a>
        </div>
      </div>
    </div>
  
    <div className="mt-10 lg:mt-0 lg:h-screen ml-0 flex justify-center lg:justify-end w-full">
      <Image
        src="/image/hero.png"
        alt="My image"
        height={80}
        width={450}
        className="max-w-full h-auto"
      />
    </div>
  </div>
  
  );
}

export default Hero;
