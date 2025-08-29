"use client";

import React from "react";

const GrowthCard = () => {
  return (
    <div className="m-10 w-auto   h-screen bg-gradient-to-b from-blue-200 to-blue-50 flex items-center justify-center rounded-2xl  ">
      {/* Column 1 */}
      <div className="flex-1 flex flex-col items-start gap-3 p-10">
        {/* White Button */}
        <button className="bg-white text-black font-bold px-6 py-2 text-xs rounded-full shadow-md hover:bg-gray-100 transition">
          Know Your Followers Better
        </button>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800">
          Audience Growth & Analysis
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg">
          Track your audience growth in real time and analyize demographics,
          behaviours and interests.Understand who your Followers are and
          optimize your content to boost engagement and reach
        </p>

        {/* Blue Button */}
        <button className="bg-primary cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-md  transition">
          Book a demo
        </button>
      </div>

      {/* Column 2 */}
      <div className="flex-1 flex items-center justify-center pr-10">
        {/* Replace src with your graph image or video */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1585088328568-N71DZL4VV1CANX2G63EI/dailyvalgood.png"
          alt="Line Graph"
          className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
        />
        {/* OR if you want a video, replace <img> with <video> */}

        {/* <video
          src="/graph.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg"
        /> */}
      </div>
    </div>
  );
};

export default GrowthCard;
