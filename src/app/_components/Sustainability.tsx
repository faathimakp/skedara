import React from "react";
import Bulb from "@public/svg/bulb.svg";
import Arrow from "@public/svg/bulbarrow.svg";
import Image from "next/image";
import Link from "next/link";

const skedaraItems = [
  { label: "SYSTEM", value: "S" },
  { label: "KNOWLEDGE", value: "K" },
  { label: "EXCELLENCE", value: "E" },
  { label: "STREAM", value: "DARA" },
];

const Sustainability = () => {
  return (
    <div className="flex  w-full  " id="sustainability">
      <div className="flex flex-col items-center gap-[3.5625rem] pt-[6.5rem]  pb-[3.5rem]   w-[28%] bg-white  ">
        {skedaraItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center ">
            <div className="w-[6.25rem] h-[6.25rem] rounded-full bg-[#D9D9D9B2]   px-[1.9375rem] py-[0.875rem] flex items-center mb-[1.5rem]">
              <span className="text-[#0B2A67] font-semibold text-[3.5rem] leading[4.5rem]">
                {item.value}
              </span>
            </div>
            <p className="text-black text-[1.625rem] font-medium leading-[3rem]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[72%] bg-[#F4F7FC] relative ">
        <Image
          src={Arrow}
          alt="Bulb"
          className="w-[6.5rem] h-[4.25rem]  absolute top-[15.625rem] right-[19rem]"
        />
        <Image
          src={Bulb}
          alt="Bulb"
          className="w-[40.875rem] h-auto  absolute top-[14.75rem] right-[9.8125rem]"
        />
        <div className="px-[7.3125rem] pt-[6.5rem] max-w-xl">
          {" "}
          <h4 className="text-[#0367A1E5] text-[1.5rem] font-normal uppercase mb-[2rem] leading-[1.5rem]">
            Sustainability
          </h4>
          <h2 className="text-[1.875rem] font-medium text-black leading-[2.5rem] mb-[2rem]">
            Shaping a Sustainable Future Together.
          </h2>
          <p className="text-[#4D4D4D] text-[1.125rem] leading-[1.6875rem] font-normal mb-[3.5rem]">
            At Skedara, sustainability is at the core of every service we
            deliver. Our green IT practices and ESG-aligned solutions empower
            clients to operate responsibly while building future-ready systems.
          </p>
         <Link href={"/#sustainability"}>
              <button className="bg-[#0B2A67] hover:bg-[#0b2457] text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition">
                Explore Sustainability Goals
              </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
