"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

const patternData = [
  "chevron",
  "Straight",
  "herringbone",
  "chevron",
  "Straight",
  "herringbone",
  "chevron",
  "Straight",
  "herringbone",
];

export default function Home() {
  const [patterns, setPatterns] = useState([]);
  const [pattern, setPattern] = useState("all");

  const handlePatternSelect = (event) => {
    setPattern(String(event.currentTarget.innerText).toLowerCase());
  };

  useEffect(() => {
    if (pattern === "all") {
      return setPatterns(patternData);
    } else if (pattern !== "all") {
      const filtered = patternData.filter((pat) => {
        return String(pat).toLowerCase() === pattern;
      });
      setPatterns(filtered);
    }
  }, [pattern]);

  return (
    <main>
      <section className="hero h-screen">
        <div
          className="w-full h-full bg-cover bg-center flex justify-center sm:justify-end px-[15px] text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(/images/home/hero_image_1.jpg)`,
          }}
        >
          <div className="relative pr-[50px] my-auto xl:mr-[5%] 2xl:mr-[15%] 2xl:pr-0 after:content-[''] after:absolute after:left-0 after:top-0 after:h-[60px] after:w-[2px] after:bg-white">
            <h5 className="pl-[50px] mb-[15px] uppercase text-sm font-medium tracking-[4px]">
              Kandisky
            </h5>
            <h1 className="text-[35px] md:text-[50px] pl-[50px] font-bold">
              WOOD MEET ART
            </h1>
            <p className="text-[17px] max-w-[425px] pl-[50px] mt-[10px] text-[#aaa] leading-8">
              Sustainable and ethically sourced, KANDINSKY offers engineered
              timber for walls, ceilings, stairs, and flooring.{" "}
            </p>
            <button className="border border-white py-[8px] px-[15px] text-[15px] ml-[50px] mt-[30px] text-[#b19777]">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-[50px] px-[15px] py-[120px]">
        <div>
          <h6 className="uppercase mb-[15px] font-normal text-[12px] tracking-[4px] relative pl-[40px] text-[#b19777] before:content-[''] before:w-[25px] before:h-[1px] before:bg-[#b19777] before:absolute before:top-1/2 before:left-0">
            About Us
          </h6>
        </div>
      </section>

      <section className="container mx-auto mt-[50px] px-[15px] py-[120px]">
        <div>
          <h6 className="uppercase mb-[15px] font-normal text-[12px] tracking-[4px] relative pl-[40px] text-[#b19777] before:content-[''] before:w-[25px] before:h-[1px] before:bg-[#b19777] before:absolute before:top-1/2 before:left-0">
            Application
          </h6>
          <h2 className="font-semibold text-[28px] md:text-[40px] leading-[1.4] mb-[20px]">
            Handcrafted European Wood
          </h2>
        </div>
        <div className="md:flex md:flex-wrap md:mx-[-15px]">
          <div className="py-[60px] px-[40px] bg-gray-600 text-white border border-r-0 border-solid border-[#eee] transition-all duration-300 md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
            <h3 className="text-[40px] mb-[30px]">01</h3>
            <h2 className="font-semibold leading-6 text-base mb-[20px]">
              Floor
            </h2>
            <p className="text-[15px] font-normal text-[#eee] leading-8">
              Our natural wood flooring services are both durable and
              aesthetically pleasing.
            </p>
            <button className="mt-[30px]">Read More</button>
          </div>
          <div className="py-[60px] px-[40px] bg-gray-600 text-white border border-r-0 border-solid border-[#eee] transition-all duration-300 md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
            <h3 className="text-[40px] mb-[30px]">02</h3>
            <h2 className="font-semibold leading-6 text-base mb-[20px]">
              Ceiling
            </h2>
            <p className="text-[15px] font-normal text-[#eee] leading-8">
              Transform your space with our beautiful and elegant wood ceiling
              installation services.
            </p>
            <button className="mt-[30px]">Read More</button>
          </div>
          <div className="py-[60px] px-[40px] bg-gray-600 text-white border border-r-0 border-solid border-[#eee] transition-all duration-300 md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
            <h3 className="text-[40px] mb-[30px]">01</h3>
            <h2 className="font-semibold leading-6 text-base mb-[20px]">
              Stair
            </h2>
            <p className="text-[15px] font-normal text-[#eee] leading-8">
              We offer expert design and installation services to make your
              wooden stairs a stunning focal point.
            </p>
            <button className="mt-[30px]">Read More</button>
          </div>
          <div className="py-[60px] px-[40px] bg-gray-600 text-white border border-r-0 border-solid border-[#eee] transition-all duration-300 md:flex-[1_1_50%] md:max-w-1/2 lg:basis-1/4 lg:max-w-1/4">
            <h3 className="text-[40px] mb-[30px]">01</h3>
            <h2 className="font-semibold leading-6 text-base mb-[20px]">
              Wall
            </h2>
            <p className="text-[15px] font-normal text-[#eee] leading-8">
              Add warmth and charm to your space with our rustic wood wall
              installation services.
            </p>
            <button className="mt-[30px]">Read More</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[15px] py-[120px]">
        <div className="flex flex-wrap justify-center -mx-[15px] mb-[80px]">
          <h6 className="uppercase text-center w-full text-[15px] font-medium  text-[#b19777] mb-[10px] tracking-[2px]">
            best features
          </h6>
          <h4 className="text-[22px] text-center w-full font-semibold tracking-[2px] md:text-[40px]">
            Our Services
          </h4>
        </div>
        <div className="p-[15px] text-[#b19777] text-[12px] md:text-[13px] text-center">
          <div className="flex flex-wrap justify-center">
            <span
              onClick={handlePatternSelect}
              className="relative cursor-pointer my-[5px] mx-[15px] uppercase"
            >
              All
            </span>
            <span
              onClick={handlePatternSelect}
              className="relative cursor-pointer my-[5px] px-[15px] uppercase before:content-[''] before:w-[7px] before:h-[7px] before:bg-[#b19777] before:rounded-[50%] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
            >
              Chevron
            </span>
            <span
              onClick={handlePatternSelect}
              className="relative cursor-pointer my-[5px] px-[15px] uppercase before:content-[''] before:w-[7px] before:h-[7px] before:bg-[#b19777] before:rounded-[50%] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
            >
              Herringbone
            </span>
            <span
              onClick={handlePatternSelect}
              className="relative cursor-pointer my-[5px] px-[15px] uppercase before:content-[''] before:w-[7px] before:h-[7px] before:bg-[#b19777] before:rounded-[50%] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
            >
              Straight
            </span>
          </div>
        </div>

        <div className="md:flex md:flex-wrap">
          {patterns.map((pat, index) => {
            return (
              <div
                key={index}
                className="px-[15px] mt-[50px] md:flex-[1_1_50%] md:max-w-[50%]"
              >
                <div className="delay-300 visible bg-red-500 h-[450px] w-full">
                  {pat}
                </div>
                <div className="mt-[15px] py-[10px] px-[20px]">
                  <h6 className="font-semibold text-[18px] leading-[1.4]">
                    Natural Oak (Chevron)
                  </h6>
                </div>
              </div>
            );
          })}
          {/* <div>
            <div className="delay-300 visible bg-red-500 h-[450px] w-full"></div>
            <div className="mt-[15px] py-[10px] px-[20px]">
              <h6 className="font-semibold text-[18px] leading-[1.4]">
                Natural Oak (Chevron)
              </h6>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
