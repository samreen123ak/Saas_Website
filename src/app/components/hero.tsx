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
        <button className="bg-white text-blue-700 px-6 py-2 rounded-lg shadow mb-8 hover:shadow-lg transition">
          White Button
        </button>

        <h1 className="text-5xl font-bold text-white mb-4 text-center">
          Amazing Title Here
        </h1>

        <p className="text-lg text-white mb-8 text-center max-w-xl">
          This is a subtitle explaining something interesting about the product.
        </p>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mb-12 hover:bg-blue-800 transition">
          Blue Button
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
