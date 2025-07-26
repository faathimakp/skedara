import React from "react";
import Image from "next/image";
import SkedaraLogo from "@public/svg/footerlogo.svg";
import Triangles from "@public/svg/rightcornerbg.svg";
import Linkedin from "@public/svg/linkdin.svg";
import Twitter from "@public/svg/twitter.svg";
import Facebook from "@public/svg/facebook.svg";
import Instagram from "@public/svg/instagram.svg";
import Footerbg from "@public/svg/footer.svg";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden pt-0 md:-mt-[8.2rem] " id="contact">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={Footerbg}
          alt="Footer Background Curve"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 z-0">
        <Image src={Triangles} alt="Footer Triangles" />
      </div>

      <div className="relative z-10 ~px-[1.5rem]/[4.5rem] pt-[4.5rem] pb-[4.625rem]">
        <div className="flex flex-col items-start md:items-end md:mb-[4rem]">
          <Image
            src={SkedaraLogo}
            alt="Skedara"
            className="w-[14.375rem] md:block hidden h-auto pb-[1.5625rem]"
          />
          <p className="max-w-[400px] text-[#D4D0CC] md:block hidden text-[1.125rem] leading-[1.6875rem]">
            On track to achieve ISO 27001, ISO 14001,
          </p>
          <p className="max-w-[400px] text-[#D4D0CC] md:block hidden text-[1.125rem] leading-[1.6875rem] pb-[5.4737rem]">
            and SOC 2 for operational excellence.
          </p>

          <div className="md:flex-row flex flex-col justify-start md:justify-center ~gap-[0rem]/[2.5rem] text-[1rem] text-[#FAFAFA] leading-[3rem] font-medium uppercase mb-[1rem] border-b border-[#FAFAFA]/30 pb-[1.5rem] w-fit">
            <a href={"/#service"} className="hover:text-[#0CBA4C]">
              Services
            </a>
            <a href={"/#casestudy"} className="hover:text-[#0CBA4C]">
              Case Studies
            </a>
            <a href={"/#blog"} className="hover:text-[#0CBA4C]">
              Blog
            </a>
            <a href={"/#work"} className="hover:text-[#0CBA4C]">
              About
            </a>
            <a href={"/#sustainability"} className="hover:text-[#0CBA4C]">
              Sustainability
            </a>
            <a href={"/#contact"} className="hover:text-[#0CBA4C]">
              Contact
            </a>
          </div>

          <div className="flex justify-end gap-6 mt-[1rem]">
            <a href="#">
              <Image
                src={Linkedin}
                alt="LinkedIn"
                className="size-[1.125rem]"
              />
            </a>
            <a href="#">
              <Image src={Twitter} alt="Twitter" className="size-[1.125rem]" />
            </a>
            <a href="#">
              <Image
                src={Facebook}
                alt="Facebook"
                className="size-[1.125rem]"
              />
            </a>
            <a href="#">
              <Image
                src={Instagram}
                alt="Instagram"
                className="size-[1.125rem]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
