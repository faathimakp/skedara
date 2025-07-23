"use client";
import React from "react";
import Image from "next/image";
import bBgimage from "@public/images/servicebg.png";
import Point from "@public/svg/pointer.svg";



const Service = () => {
  return (
    <div className="bg-[#F4F7FC] pb-[17.125rem]">
      <div className="flex flex-col lg:flex-row items-start justify-between px-[4.5rem] pt-[6.5rem]  gap-[8.1875rem]">
        {/* Left Side Text */}
        <div className="flex-1 max-w-sm mt-[4.5625rem]">
          <h4 className="text-[#0367A1E5] text-[1.5rem] font-normal  mb-[2rem] leading-[1.5rem]">
            OUR SERVICES
          </h4>
          <h2 className="text-[1.875rem]  font-medium text-black leading-[2.5rem] mb-[1.5rem]">
            Transforming IT Operations Into Engines Of Growth And Innovation
          </h2>
          <p className="text-[#4D4D4D] text-[1.125rem] leading-[1.6875rem] font-normal mb-[3rem]">
            Skedara Delivers Energy IT Excellence And Tailored Solutions,
            Ensuring Resilience And Measurable Outcomes
          </p>
          <button className="bg-[#0B2A67] hover:bg-[#0b2457] text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition">
            Discover Our Services
          </button>
        </div>

        {/* Right Side with Image Background and Cards */}
        <div className="flex-1 relative w-full  ">
          <Image
            src={bBgimage}
            alt="Service Background"
            className="rounded-xl w-full object-cover"
          />

          <div className="absolute top-[6.25rem] inset-x-0 flex flex-col md:flex-row justify-center items-center gap-6 ">
            <div className="bg-white rounded-xl px-[1.5rem] py-[2.5rem] shadow-md  max-w-[19.75rem]">
              <h3 className=" text-[1.25rem] leading-[2rem] font-semibold text-black mb-[2rem]">
                Core Services: <br />
                <span className="font-bold">Energy IT Operations</span>
              </h3>
              <div className="flex items-center mb-[1rem] gap-[0.625rem]">
                  <Image src={Point} alt="Pointer" className=" size-[0.625rem]" />
                  <p className="text-[#0B2A67E5] text-[1rem] leading-[1.5rem]  font-semibold ">
                    Capabilities:
                  </p>
             </div>
              <p className="text-[1rem] leading-[1.5rem] font-normal text-[#4D4D4DE5] mb-[2rem]">
                24/7 Monitoring, Incident Management, Trading Reliability, SRE,
                And Compliance.
              </p>
              <div className="flex items-center mb-[1rem] gap-[0.625rem]">
                  <Image src={Point} alt="Pointer" className=" size-[0.625rem]" />
                  <p className="text-[#0B2A67E5] text-[1rem] leading-[1.5rem]  font-semibold ">
                   Value Proposition:
                  </p>
             </div>
              <p className="text-[1rem] leading-[1.5rem] font-normal text-[#4D4D4DE5] ">
                Ensuring Resilience And Scalability For Critical Energy Systems,
                Empowering Business Growth.
              </p>
            </div>

            <div className="bg-white rounded-xl px-[1.5rem] py-[2.5rem] shadow-md  max-w-[19.75rem]">
              <h3 className=" text-[1.25rem] leading-[2rem] font-semibold text-black mb-[2rem]">
                Beyond Energy: <br />
                <span className="font-bold">Tailored Industry Solutions</span>
              </h3>
             <div className="flex items-center mb-[1rem] gap-[0.625rem]">
                  <Image src={Point} alt="Pointer" className=" size-[0.625rem]" />
                  <p className="text-[#0B2A67E5] text-[1rem] leading-[1.5rem]  font-semibold ">
                    Capabilities:
                  </p>
             </div>
              <p className="text-[1rem] leading-[1.5rem] font-normal text-[#4D4D4DE5] mb-[2rem]">
                Offering business consulting, IT strategy and custom development
                for compliance workflows
              </p>
               <div className="flex items-center mb-[1rem] gap-[0.625rem]">
                  <Image src={Point} alt="Pointer" className=" size-[0.625rem]" />
                  <p className="text-[#0B2A67E5] text-[1rem] leading-[1.5rem]  font-semibold ">
                   Value Proposition:
                  </p>
             </div>
             
              <p className="text-[1rem] leading-[1.5rem] font-normal text-[#4D4D4DE5] ">
                Skedara delivers tailored IT solutions for finance and
                logistics, ensuring excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
