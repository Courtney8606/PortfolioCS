"use client";
import SocialMedia from "@/app/static/SocialMedia";
import Typing from "@/app/static/Typing";
import Link from "next/link";
import Arrow from "@/app/static/Arrow";

function Hero() {
  return (
    <div
      id="Hero"
      className="flex items-center min-h-screen desktop:px-20 mobile:p-6 text-white bg-gradient-to-r from-gradientLeft to-gradientRight"
    >
      <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full">
        <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
          <p className="desktop:text-[5vw] desktop:pl-20 mobile:text-[8vw] font-bold text-lightcyan w-full">
            Hi, I&apos;m Courtney
          </p>
          <p className="desktop:text-[3vw] desktop:pl-20 mobile:text-[5vw]">
            a developer specialising in web applications with <Typing />
          </p>
          <div className="flex mt-6 desktop:pl-20 desktop:justify-start mobile:justify-center w-full md:w-[17vw]">
            <SocialMedia size={100} />
          </div>
        </div>
        <div className="relative w-full max-w-md h-96 rounded-lg mt-8 md:mt-0">
          {/* Background Image */}
          <img
            src="/media/torus.png"
            alt="Background"
            className="absolute inset-0 w-full object-cover"
          />
          {/* Overlay Image */}
          <img
            src="/media/profile1.png"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-contain self-center animate-scalepulse"
            style={{ zIndex: 10, maxHeight: "70%", maxWidth: "100%" }}
          />
        </div>
        <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
          <Link href={"/#About"} aria-label="About">
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
