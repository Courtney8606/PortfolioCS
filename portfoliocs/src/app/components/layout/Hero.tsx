"use client";
import SocialMedia from "@/app/static/SocialMedia";
import Typing from "@/app/static/Typing";

function Hero() {
  return (
    <div
      id="Hero"
      className="flex items-center min-h-screen px-20 text-white bg-gradient-to-r from-gradientLeft to-gradientRight"
    >
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col z-20 pointer-events-none text-white w-3/5">
          <p className="text-[5vw] font-bold text-lightcyan w-full">
            Hi, I&apos;m Courtney
          </p>
          <p className="text-[3vw]">
            a developer specialising in web applications with <Typing />
          </p>
          <div className="flex mobile:hidden mt-6 justify-start w-[17vw]">
            <SocialMedia size={200} />
          </div>
        </div>
        <img
          className="w-2/5 object-contain self-center animate-scalepulse"
          src="/portraitdummy.webp"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Hero;
