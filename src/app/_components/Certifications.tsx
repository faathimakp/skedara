"use client";
import React from "react";
import Image from "next/image";
import RightIcon from "@public/svg/certificaterighticon.svg";
import Iso1 from "@public/svg/iso4.svg";
import Iso2 from "@public/svg/iso2.svg";

const Certifications = () => {
  return (
    <div className=" pt-[16rem] h-screen">
      <div className="relative pb-[6rem] px-[4.5rem] bg-white overflow-hidden">
        <div className="absolute right-0 top-0 z-0">
          <Image
            src={RightIcon}
            alt="Right icon"
            className="w-[10rem] md:w-[12.5rem]"
          />
        </div>

        <div className="relative z-10">
          <h4 className="text-[#0367A1E5] text-[1.5rem] font-normal uppercase mb-[2rem] leading-[1.5rem]">
            Certifications
          </h4>
          <h2 className="text-[1.875rem] font-medium text-black leading-[2.5rem] mb-[2rem]">
            Building Trust with Industry <br /> Standards.
          </h2>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row items-center gap-[3.375rem] mb-[2rem]">
              <Image src={Iso1} alt="ISO 14001" className="size-[8.0625rem]" />
              <div className="bg-white rounded-[1rem] shadow-md px-[3.1875rem] py-[3.5rem] md:w-[43.25rem] ">
                <h3 className="text-[#0B2A67] font-semibold text-[1.625rem] leading-[2rem] mb-[2rem]">
                  ISO 14001:
                </h3>
                <p className="text-[#0B2A67E5] font-normal text-[1.5rem] leading-[2rem]">
                  Committed to Net Zero Emissions by 2025, reflecting our
                  dedication to <br /> sustainable practices.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-[3.375rem]">
              <div className="bg-white rounded-[1rem] shadow-md px-[3.1875rem] py-[3.5rem] md:w-[43.25rem] ">
                <h3 className="text-[#0B2A67] font-semibold text-[1.625rem] leading-[2rem] mb-[2rem]">
                  ISO 27001:
                </h3>
                <p className="text-[#0B2A67E5] font-normal text-[1.5rem] leading-[2rem]">
                  Strengthening secure IT operations for energy and finance
                  clients.
                </p>
              </div>
              <Image src={Iso2} alt="ISO 27001" className="size-[8.0625rem]" />
            </div>

            <div className="mt-[3rem] ">
              <button className="bg-[#0B2A67] hover:bg-[#0b2457] text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition">
                Learn Certificates
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
