// components/HeroColumn.tsx
"use client";

import React from "react";
import {
  FaStar,
  FaHeart,
  FaRocket,
  FaSmile,
  FaCloud,
  FaBolt,
} from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center">
      {/* Top Gradient Section */}
      <div className="w-full flex flex-col items-center px-4 py-20 relative z-0">
        {/* White Button */}
        <button className="bg-white text-blue-700 px-6 py-2 rounded-lg shadow mb-8 hover:shadow-lg transition">
          White Button
        </button>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4 text-center">
          Amazing Title Here
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white mb-8 text-center max-w-xl">
          This is a subtitle explaining something interesting about the product.
        </p>

        {/* Blue Button */}
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mb-12 hover:bg-blue-800 transition">
          Blue Button
        </button>

        {/* Tilted Icons scattered in column */}
        <FaStar className="absolute top-10 left-10 text-white text-3xl -rotate-12 z-20" />
        <FaHeart className="absolute top-28 left-5 text-white text-4xl rotate-6 z-20" />
        <FaRocket className="absolute top-40 left-20 text-white text-3xl -rotate-6 z-20" />
        <FaSmile className="absolute top-16 right-10 text-white text-3xl rotate-12 z-20" />
        <FaCloud className="absolute top-32 right-5 text-white text-4xl -rotate-6 z-20" />
        <FaBolt className="absolute top-44 right-20 text-white text-3xl rotate-6 z-20" />
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[320px] flex justify-center">
        {/* Tiny White background under image */}
        <div className="absolute bottom-0 w-full h-12 bg-white z-0"></div>

        {/* Image mostly on blue */}
        <img
          src="https://images2.boardingschoolreview.com/photo/593/IMG-Academy-6r5kz9j4u144kso44sw8800k0-1122.jpg"
          alt="Hero"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-96 w-96 object-cover rounded-lg shadow-lg z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
