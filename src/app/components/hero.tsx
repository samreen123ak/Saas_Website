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

const SocialIcon = ({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`absolute w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer ${className}`}
  >
    {icon}
  </div>
);

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

      {/* Image Section with Icons */}
      <div className=" w-full p-6 relative">
        <div className="flex items-center justify-center min-h-screen relative">
          {/* Social Media Icons positioned relative to image wrapper */}
          <SocialIcon
            icon={
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm"></div>
            }
            className="top-6 left-6"
          />
          <SocialIcon
            icon={
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                t
              </div>
            }
            className="top-6 right-6"
          />
          <SocialIcon
            icon={
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                ig
              </div>
            }
            className="top-1/3 left-6"
          />
          <SocialIcon
            icon={
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                in
              </div>
            }
            className="top-1/3 right-6"
          />
          <SocialIcon
            icon={
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm">
                tt
              </div>
            }
            className="bottom-1/3 left-6"
          />
          <SocialIcon
            icon={
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                yt
              </div>
            }
            className="bottom-1/3 right-6"
          />

          {/* Image */}
          <div className="max-w-6xl w-full relative">
            <img
              src="https://images2.boardingschoolreview.com/photo/593/IMG-Academy-6r5kz9j4u144kso44sw8800k0-1122.jpg"
              alt="TrendTide Analytics Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
