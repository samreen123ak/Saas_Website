"use client";

import React from "react";

const HeaderImage: React.FC = () => {
  return (
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
          className="top-[27%] left-6"
        />
        <SocialIcon
          icon={
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              in
            </div>
          }
          className="top-[27%] right-6"
        />
        <SocialIcon
          icon={
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm">
              tt
            </div>
          }
          className="bottom-[40%] left-6"
        />
        <SocialIcon
          icon={
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              yt
            </div>
          }
          className="bottom-[40%] right-6"
        />

        {/* Image */}
        <div className="max-w-5xl w-full relative">
          <img
            src="https://images2.boardingschoolreview.com/photo/593/IMG-Academy-6r5kz9j4u144kso44sw8800k0-1122.jpg"
            alt="TrendTide Analytics Dashboard"
            width={1000}
            height={800}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
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

export default HeaderImage;
