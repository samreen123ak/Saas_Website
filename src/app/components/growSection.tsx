"use client";

import React from "react";
import Image from "next/image";

const GrowSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-b from-blue-100 to-blue-50 pt-10 m-12"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Small White Button */}
        <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow mb-8 hover:shadow-lg transition">
          Know your followers better
        </button>

        {/* Title */}
        <h2 className="text-4xl  font-bold text-gray-800 mb-4">
          Let's Grow Your Social Media Together!
        </h2>

        {/* Blue Button */}
        <button className="bg-primary cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-md  transition my-10">
          Book a demo
        </button>

        {/* Image (Half Screen Height) */}
        <div className="w-full flex justify-end items-end overflow-hidden">
          <Image
            src="/assets/heroimg.svg"
            alt="Grow illustration"
            width={1000} // bigger width
            height={800} // bigger height
            className="object-contain -mb-50" //  negative margin pushes half outside
          />
        </div>
      </div>
    </section>
  );
};

export default GrowSection;
