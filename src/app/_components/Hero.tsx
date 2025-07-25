import React from "react";
import BgImage from "@public/images/herobg.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="pr-[4.5rem] ">
        <div className="relative w-full h-[100vh]">
          <Image
            src={BgImage}
            alt="Background Image"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-[10.1875rem] justify-center w-full h-full flex items-center ">
            <div className="text-white max-w-3xl">
              <h1 className="text-h11 font-bold leading-[3.5rem]">
                Global Experts In <span className="text-[#0CBA4C]">Energy</span>{" "}
                IT Operations | Driving Stability, Scalability, And{" "}
                <span className="text-[#0CBA4C]">Sustainability</span>.
              </h1>
              <p className="mt-4 text-h4  text-[#ECEAE8] max-w-2xl">
                From Energy Trading System Reliability To Renewable Integration,
                Skedara Transforms IT Operations Into Engines Of Growth With
                Sustainable And Innovative Solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href={"/#service"}>
                  <button className="bg-[#0B2A67] hover:bg-[#0b2457] text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition">
                    Discover Our Services
                  </button>
                </Link>
                <Link href={"/#casestudy"}>
                  <button className="border border-white  hover:bg-white hover:text-[#001B75]  text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition">
                    Explore Case Studies
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
