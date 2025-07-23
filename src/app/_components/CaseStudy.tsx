"use client";
import React from "react";
import Bgimage from "@public/svg/casestudybg.svg";
import Man from "@public/images/man.png";
import Laptop from "@public/svg/laptop.svg";
import Downtime from "@public/svg/downtime.svg";
import Uptime from "@public/svg/uptime.svg";
import Image from "next/image";

const CaseStudy = () => {
  return (
    <div className="px-[4.5rem]">
      <div className="flex flex-col lg:flex-row items-start justify-between  pt-[6.5rem] gap-[7.875rem]">
        <div className="relative  pt-[6rem]">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between relative z-10">
            <div className="relative w-fit">
              <Image
                src={Man}
                alt="Handshake"
                className="rounded-[1rem] w-[22rem] md:w-[24.5625rem] object-cover"
              />

              {/* <div className="absolute -bottom-[-3rem] left-[1rem] flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
        <p className="text-[#4D4D4D] font-medium text-sm">Explore Case Studies</p>
        <div className="bg-[#0CBA4C] text-white rounded-full w-6 h-6 flex items-center justify-center">
          →
        </div>
      </div> */}

              <Image
                src={Laptop}
                alt="Laptop Data"
                className="absolute -bottom-[12rem] right-[-12rem] w-[19.3125rem]  object-cover"
              />
            </div>

            <div className="relative w-[14rem] md:w-[12.75rem]">
              <Image src={Uptime} alt="Uptime Card" className="w-full" />
              <Image
                src={Downtime}
                alt="Downtime Badge"
                className="absolute -top-8 -left-14 w-[6.0625rem]"
              />
            </div>
          </div>
        </div>

        {/* right Side */}
        <div
          className="flex-1 max-w-lg bg-no-repeat bg-top bg-contain"
          style={{
            backgroundImage: `url(${Bgimage.src})`,
          }}
        >
          <div className="pt-[10.6875rem]">
            {" "}
            <h4 className="text-[#0367A1E5] text-[1.5rem] font-normal uppercase mb-[2rem] leading-[1.5rem]">
              case study preview
            </h4>
            <h2 className="text-[1.875rem] font-medium text-black leading-[2.5rem] mb-[1.5rem]">
              Turning IT Challenges into Growth Opportunities.
            </h2>
            <p className="text-[#4D4D4D] text-[1.125rem] leading-[1.6875rem] font-normal mb-[3rem]">
              Enabled 99.9% uptime for a global energy leader, reducing downtime
              by 20% through proactive monitoring and optimized workflows.
              Delivered end-to-end migration support for improved reliability
              and compliance readiness.
            </p>
            <button className="bg-[#0B2A67] hover:bg-[#0b2457] text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
