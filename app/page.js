"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// import { Poppins } from "next/font/google";
import Application from "@/components/Application";
import ShortAboutUs from "@/components/ShortAboutUs";
import Testimonial from "@/components/Testimonial";
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
            <button className="border border-white py-[14px] px-[35px] text-[13px] md:text-[15px] ml-[50px] mt-[30px] text-white]">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      <ShortAboutUs />
      <Application />
      <Testimonial />

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
        </div>
      </section>
    </main>
  );
}
