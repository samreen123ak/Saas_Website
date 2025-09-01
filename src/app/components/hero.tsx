// components/HeroColumn.tsx
"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center "
      data-aos="fade-up"
    >
      {/* Top Gradient Section */}
      <div className="w-full flex flex-col items-center px-4  relative z-0">
        <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow mb-8 hover:shadow-lg transition">
          Instant Invoicing
        </button>

        <h1 className="text-5xl font-extrabold text-black mb-4 text-center">
          Track, Analyze, and Grow Your
          <br /> Social Media With Ease
        </h1>

        <p className="text-lg text-gray-500 mb-8 text-center max-w-xl">
          get real-time insights on audience growth, follower trends
          <br /> and potential clients, all in one place
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-full mb-12 cursor-pointer transition">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
