"use client";

import React from "react";

const MonetizationCard = () => {
  return (
    <div className="m-12 w-auto   h-screen bg-gradient-to-b from-pink-100 to-pink-50 flex items-center justify-center rounded-2xl  ">
      {/* Column 1 */}
      <div className="flex-1 flex flex-col items-start gap-6 p-10">
        {/* White Button */}
        <button className="bg-white text-black font-bold px-6 py-2 text-xs rounded-full shadow-md hover:bg-gray-100 transition">
          Turn followers into clients
        </button>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800">
          Monetization and Advertising Management
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
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Post Activity</h2>
            <div className="flex gap-4 text-sm font-medium text-gray-500">
              <button className="hover:text-blue-600 transition">Today</button>
              <button className="hover:text-blue-600 transition">
                This Week
              </button>
              <button className="hover:text-blue-600 transition">
                This Month
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-600 text-sm ">
                  <th className="pb-3">Post</th>
                  <th className="pb-3">Earnings</th>
                  <th className="pb-3">Impressions</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {/* Row 1 */}
                <tr className=" hover:bg-gray-50 transition">
                  <td className="py-3 flex items-center gap-3">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFcvmHKM1inSOApmGcIYGT_XsE4KF9Pazuw&s"
                      alt="Post 1"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <span className="font-medium">Travel Vlog</span>
                  </td>
                  <td className="py-3">$120</td>
                  <td className="py-3">15.2k</td>
                </tr>

                {/* Row 2 */}
                <tr className=" hover:bg-gray-50 transition">
                  <td className="py-3 flex items-center gap-3">
                    <img
                      src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
                      alt="Post 2"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <span className="font-medium">Food Review</span>
                  </td>
                  <td className="py-3">$90</td>
                  <td className="py-3">10.8k</td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-3 flex items-center gap-3">
                    <img
                      src="https://advesa.com/wp-content/uploads/2022/08/tech-stack.webp"
                      alt="Post 3"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <span className="font-medium">Tech Update</span>
                  </td>
                  <td className="py-3">$150</td>
                  <td className="py-3">20.5k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationCard;
