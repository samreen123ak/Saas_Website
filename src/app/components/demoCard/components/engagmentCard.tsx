"use client";

import React from "react";
import { FaUser, FaHeart } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 600 },
  { name: "Apr", uv: 200 },
  { name: "may", uv: 200 },
  { name: "jun", uv: 700 },
  { name: "july", uv: 500 },
];

const EngagmentCard = () => {
  return (
    <div className="m-12 w-auto   h-screen bg-gradient-to-b from-orange-100 to-orange-50-50 flex items-center justify-center rounded-2xl  ">
      {/* Column 1 */}
      <div className="flex-1 flex flex-col items-start gap-6 p-10">
        {/* White Button */}
        <button className="bg-white text-black font-bold px-6 py-2 text-xs rounded-full shadow-md hover:bg-gray-100 transition">
          Drive Deeper Connections
        </button>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800">
          Improving Engagment with Metrics Analysis
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg">
          Track your audience growth in real time and analyize demographics,
          <br /> behaviours and interests.Understand who your Followers are and
          <br />
          optimize your content to boost engagement and reach
        </p>

        {/* Blue Button */}
        <button className="bg-primary cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-md  transition">
          Book a demo
        </button>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center justify-center pr-10 gap-5">
        {/* Followers + Likes Row */}
        <div className="flex gap-2 mt-4 w-[500px]">
          {/* Followers Box */}
          <div className="flex flex-col items-start gap-3 bg-white px-4 py-3 rounded-xl shadow w-full">
            <div className="bg-white shadow-lg border border-gray-200 p-1 rounded">
              <FaUser className="text-blue-600 text-xl" />
            </div>
            <p className="text-sm text-black font-bold">Followers</p>
            <div className="flex items-center justify-center gap-5">
              <p className="text-2xl text-black font-bold">123,675</p>
              <p className="text-xs border border-green-500 px-1 rounded-full font-semibold text-green-700">
                25%
              </p>
            </div>
          </div>

          {/* Likes Box */}
          <div className="flex flex-col items-start gap-3 bg-white px-4 py-3 rounded-xl shadow w-full">
            <div className="bg-white shadow-lg border border-gray-200 p-1 rounded">
              <FaHeart className="text-red-600 text-xl" />
            </div>
            <p className="text-sm text-black font-bold">Likes</p>
            <div className="flex items-center justify-center gap-5">
              <p className="text-2xl text-black font-bold">123,675</p>
              <p className="text-xs border border-green-500 px-1 rounded-full font-semibold text-green-700">
                50%
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-64 bg-white rounded-xl shadow p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="uv" fill="#ea580c" animationDuration={3000} />
            </BarChart>
          </ResponsiveContainer>
        </div>
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

export default EngagmentCard;
