import React from "react";
import Why from "@public/images/whyskedra.png";
import Image from "next/image";
import Tailored from "@public/svg/tailored.svg";
import Leading from "@public/svg/leading.svg";
import Global from "@public/svg/global.svg";
import LeftCorner from "@public/svg/leftcorner.svg";

const cards = [
  {
    icon: Tailored,
    title: "Tailored Solutions With Excellence",
    desc: `From Energy Trading System Reliability To Renewable Integration, 
    Skedara Transforms IT Operations Into Engines Of Growth With Sustainable And Innovative Solutions.`,
  },
  {
    icon: Leading,
    title: "Leading IT Toward A Greener Future",
    desc: `Committed To Net Zero By 2025, 
    Skedara Integrates Green IT To Help Businesses Meet ESG Goals And Sustainability Mandates.`,
  },
  {
    icon: Global,
    title: "Global Talent Partnerships",
    desc: `Rooted In India’s Thriving Tech Ecosystem And Powered By Global Talent Networks, 
    Skedara Connects Expertise With Challenges To Deliver Measurable Results.`,
  },
];
const WhySkedara = () => {
  return (
    <> 
      <div className="px-[4.5rem] -mt-[4.5rem]" id="work">
        <Image src={Why} alt="Why Skedara" />
        <div className="pt-[4rem]">
          <section className="flex flex-col md:flex-row justify-center items-start gap-[1.0625rem] pl-[10.5rem]  bg-white">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#D2E0F6] rounded-xl p-6 w-full md:w-[22.6875rem] h-[30rem] shadow-sm relative"
                style={{
                  clipPath: "polygon(0 8%, 95% 0%, 100% 0, 100% 100%, 0% 100%)",
                  borderRadius: "1rem 1rem 1rem 1rem",
                }}
              >
                <h3 className="text-[#0B2A67] text-h2 leading-[2rem] font-semibold pt-[5.4375rem] mb-[2.125rem]">
                  {card.title}
                </h3>
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="size-[6rem] mb-[2.125rem]"
                />
                <p className="text-[#0B2A67E5] text-h3 leading-[1.5rem] mb-[1.875rem]">
                  {card.desc.split("Skedara").map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong>Skedara</strong>
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Image src={LeftCorner} alt="Why Skedara" />
    </>
  );
};

export default WhySkedara;
