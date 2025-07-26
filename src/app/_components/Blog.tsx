import React from "react";
import Image from "next/image";
import Blog1 from "@public/images/blog1.png";
import Blog2 from "@public/images/blog2.png";
import Blog3 from "@public/images/blog3.png";
import Rightbg from "@public/svg/blogleft.svg";
import Leftbg from "@public/svg/blogright.svg";
import Arrow from "@public/svg/Arrow.svg";
import Link from "next/link";

const blogData = [
  {
    image: Blog1,
    title:
      "The Silent Power Behind Energy Stability: Why IT Operations are the Real MVPs",
    description:
      "Explore how IT operations quietly underpin energy stability, blending domain expertise technology...",
    link: "#",
  },
  {
    image: Blog2,
    title:
      "Green IT: How Sustainable Practices are Reshaping Energy Operations",
    description:
      "Discover how IT can lead the charge in ESG alignment and sustainability while optimizing energy operations...",
    link: "#",
  },
  {
    image: Blog3,
    title:
      "The Secret to Success: Why People Matter More Than Ever in IT Outsourcing",
    description:
      "Learn how a people-first approach transforms organizational success and client relationships...",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="relative bg-[#0B2A67] ~px-[1.5rem]/[4.5rem] ~pt-[2.5rem]/[6.5rem] ~pb-[8rem]/[20rem] overflow-hidden" id="blog">
      <Image
        src={Leftbg}
        alt="Left Background"
        className="absolute top-[26rem] left-[14.6875rem] z-0"
      />
      <Image
        src={Rightbg}
        alt="Left Background"
        className="absolute top-[6.5rem] right-[4.5rem] z-0"
      />

      <div className="relative z-10">
        <h4 className="text-[#0CBA4C] text-[1.5rem] font-normal uppercase mb-[2rem] leading-[1.5rem]">
          Blog
        </h4>
        <h2 className="text-[1.875rem] font-medium text-[#E0E0E0] leading-[2.5rem] mb-[2rem]">
          Insights That Matter: Thought <br /> Leadership From Skedara.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
          {blogData.map((item, index) => (
            <div key={index} className="relative shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover rounded-[1rem]"
              />
              <div className="hidden lg:block absolute top-[13.5rem] left-0 bg-white ~w-[18.6875rem]/[23.6875rem] h-full rounded-[1rem] px-[1.875rem] py-[2.5rem] shadow-lg">
                <h3 className="text-[1.25rem] font-semibold text-black mb-[1.5rem] leading-[2rem]">
                  {item.title}
                </h3>
                <p className="text-[#4D4D4DE5] text-[1rem] mb-[3.125rem] leading-[1.5rem] font-normal">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="text-[#0CBA4C] text-[0.875rem] leading-[1.5rem] font-medium flex items-center gap-[0.375rem]"
                >
                  <p> Read more </p>
                  <Image
                    src={Arrow}
                    alt="arrow"
                    className="w-[1.5rem] h-full"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
