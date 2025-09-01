"use client";

import { FaHospitalUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";

const FeaturesSection = () => {
  return (
    <div id="features" className="p-10  " data-aos="fade-up">
      {/* Button */}
      <div className="text-center mb-6">
        <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition">
          Our features
        </button>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Get more values from your tools
        </h2>
        <p className="text-gray-600">
          Connect your tools,connect your team.With over 100 apps already
          available in our directory.
          <br />
          Your team's favrioute tools are just a click away.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaHospitalUser className=" p-1 text-primary mb-4 bg-white h-8 w-8 border border-gray-200 rounded" />
          <h3 className="text-xl font-semibold mb-2">Monetization Tools</h3>
          <p className="text-gray-600">
            Experience lightning-fast speeds with our platform.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <MdDashboard className=" p-1 text-primary mb-4 bg-white h-8 w-8 border border-gray-200 rounded" />
          <h3 className="text-xl font-semibold mb-2">
            User Friendly Dashboard
          </h3>
          <p className="text-gray-600">
            Access our features seamlessly on any device.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <BsFileBarGraphFill className=" p-1 text-primary mb-4 bg-white h-8 w-8 border border-gray-200 rounded" />
          <h3 className="text-xl font-semibold mb-2">Real Time Insights</h3>
          <p className="text-gray-600">
            Keep your data safe and synchronized in the cloud.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <RiShoppingBag2Fill className=" p-1 text-primary mb-4 bg-white h-8 w-8 border border-gray-200 rounded" />
          <h3 className="text-xl font-semibold mb-2">Audience Deep Dive</h3>
          <p className="text-gray-600">
            We prioritize your security with top-notch measures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
