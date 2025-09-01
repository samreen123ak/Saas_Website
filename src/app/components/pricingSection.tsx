// components/PricingSection.tsx
"use client";

import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);

  const features = [
    "Responsive Design",
    "Fast Loading Speed",
    "SEO Friendly",
    "Secure & Reliable",
    "Easy Customization",
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        {/* Top Badge */}
        <button className="px-7 py-1 bg-white rounded-full font-bold text-sm  shadow">
          Pricing
        </button>

        {/* Title + Subtitle */}
        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          Flexible Plans for Every Need
        </h2>
        <p className="text-gray-600 mt-2">
          Weather you are a solo creator or managing team.We offers pricing
          <br />
          options according to your needs
        </p>

        {/* Toggle (UI only) */}
        <div className="mt-6 flex justify-center">
          <div className="relative flex bg-gray-100 rounded-full  p-1 w-60 shadow">
            <span
              className={`absolute top-1 bottom-1 w-1/2  rounded-full transition-transform ${
                isMonthly ? "translate-x-0" : "translate-x-full"
              }`}
            />
            <button
              className={`relative z-10 w-1/2 text-sm font-medium ${
                isMonthly
                  ? "text-black bg-white rounded-full"
                  : "text-gray-600 bg-gray-100 rounded-full"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly Billing
            </button>
            <button
              className={`relative z-10 w-1/2 text-sm font-medium ${
                !isMonthly
                  ? "text-black bg-white rounded-full"
                  : "text-gray-600 bg-gray-100 rounded-full"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Annual Billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start">
            <div className=" mb-4">
              <div className="w-8 h-8 bg-white border border-gray-100 text-primary flex items-center justify-center rounded">
                <FaUser />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Individual Creator</h3>
            <p className="text-gray-500 mb-4 text-start">
              Perfect for influencers ,bloggers and freelancer
            </p>
            <p className="text-3xl font-bold mb-6">
              $10<span className="text-base">/month</span>
            </p>

            <ul className="space-y-3 text-left mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <FaCheckCircle className="w-5 h-5 text-green-500" /> {feature}
                </li>
              ))}
            </ul>

            <button className="bg-primary text-white  py-2 font-medium w-full rounded-full cursor-pointer transition">
              Subscribe Now
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Need more information?{" "}
              <span className="text-primary underline cursor-pointer">
                Let's chat
              </span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start">
            <div className=" mb-4">
              <div className="w-8 h-8 bg-white border border-gray-100 text-primary flex items-center justify-center rounded">
                <FaShoppingBag />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Team & Agencies</h3>
            <p className="text-gray-500 mb-4 text-start">
              Perfect for influencers ,bloggers and freelancer
            </p>
            <p className="text-3xl font-bold mb-6">
              $10<span className="text-base">/month</span>
            </p>

            <ul className="space-y-3 text-left mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <FaCheckCircle className="w-5 h-5 text-green-500" /> {feature}
                </li>
              ))}
            </ul>

            <button className="bg-primary text-white  py-2 font-medium w-full rounded-full cursor-pointer transition">
              Subscribe Now
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Need more information?{" "}
              <span className="text-primary underline cursor-pointer">
                Let's chat
              </span>
            </p>
          </div>

          {/* Card 3 */}

          <div className="bg-gradient-to-b from-blue-200 to-blue-100 rounded-2xl shadow-lg p-8 flex flex-col items-start">
            <div className=" mb-4">
              <div className="w-8 h-8 bg-white border border-gray-100 text-primary flex items-center justify-center rounded">
                <BsStars />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Let's Talk</h3>
            <p className="text-gray-500 mb-4 text-start">
              Perfect for influencers ,bloggers and freelancer
            </p>
            <p className="text-3xl font-bold mb-6">
              $10<span className="text-base">/month</span>
            </p>

            <ul className="space-y-3 text-left mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <FaCheckCircle className="w-5 h-5 text-green-500" /> {feature}
                </li>
              ))}
            </ul>

            <button className="bg-primary text-white  py-2 font-medium w-full rounded-full cursor-pointer transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
