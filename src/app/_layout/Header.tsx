"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@public/svg/HeaderLogo.svg";
import Link from "next/link";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "SUSTAINABILITY", path: "/sustainability" },
  { name: "WORK", path: "/work" },
  { name: "SERVICE", path: "/service" },
  { name: "BLOG", path: "/blog" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between w-full px-[4.5rem] py-4 shadow-md bg-white">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Skedara Logo"
            className="w-[14.375rem] h-[3.25rem] object-cover"
          />
        </div>
      </Link>
      <nav className="hidden md:flex gap-[2.5rem] items-center">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <div key={index} className="relative group">
              <Link
                href={item.path}
                className={`text-h3  transition ${
                  isActive
                    ? "text-[#37474F] font-bold"
                    : "text-[#37474F] hover:text-black"
                }`}
              >
                {item.name}
              </Link>
              {isActive && (
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 h-[2px] w-full bg-[#0CBA4C] rounded-md" />
              )}
            </div>
          );
        })}
        <div>
          <button className="bg-[#0B2A67] hover:bg-[#0b2457] text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition">
            Talk To Experts
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
