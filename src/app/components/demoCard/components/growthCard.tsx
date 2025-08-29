"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 90 },
  { name: "Mar", value: 160 },
  { name: "Apr", value: 110 },
  { name: "May", value: 180 },
  { name: "Jun", value: 140 },
];

const GrowthCard = () => {
  return (
    <div className="m-10 w-auto   h-screen bg-gradient-to-b from-blue-200 to-blue-50 flex items-center justify-center rounded-2xl  ">
      {/* Column 1 */}
      <div className="flex-1 flex flex-col items-start gap-3 p-10">
        {/* White Button */}
        <button className="bg-white text-black font-bold px-6 py-2 mb-5 text-xs rounded-full shadow-md hover:bg-gray-100 transition">
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
        <div className="w-full h-64 bg-white rounded-xl shadow p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 24, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ea580c" // Tailwind orange-600
                strokeWidth={3}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
                animationDuration={3000}
                animationBegin={0}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GrowthCard;
