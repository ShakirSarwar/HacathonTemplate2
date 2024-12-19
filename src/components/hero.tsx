import React from "react";
import { FiArrowRight } from "react-icons/fi"; // React Icons Import


export default function HeroSection() {
  return (
    <div className="flex w-[1440px] h-[704px] bg-white items-center">
      <div className="w-[1280] h-[584] bg-[#2A254B] items-center ml-[60px]" >
        <div className="flex flex-col md:flex-row bg-#2A254B">
          {/* Left Section */}
          <div className="w-[1280] h-[584]  ml-[60px] gap-[41] text-white p-8 md:w-1/2 flex flex-col justify-center space-y-6">
            <h2 className=" font-normal-400 size-12px w-[513px] h-[187px] md:text-5xl font-semibold leading-snug">
              The furniture brand for the future, with timeless designs
            </h2>
            <button className="flex items-center w-[170px] h-[56px] bg-gray-600 px-6 py-3 rounded-md hover:bg-gray-500 transition duration-300 ">
              View collection
            </button>
            <p className="text-sm md:text-base leading-relaxed">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way to
              display things digitally using modern web technologies.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="md:w-1/2 flex justify-end items-center bg-#83a9ac">
            {/* Image Placeholder */}
            <div className='md:w-[550px] h-auto md:h-[584px] flex justify-center justify-items-end content-end'>
              <img src={'Chair.jpg'} width={800} height={700} alt='right' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};