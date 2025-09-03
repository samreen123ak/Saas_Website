"use client";

import React from "react";
import Image from "next/image";

export default function CustomerReviews() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 py-5 px-6 m-10 rounded">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">
          Customers testimonials
        </h2>
        <p className="text-gray-600">Real reviews from our happy clients</p>
      </div>

      <div className="grid grid-cols-3 gap-6 " data-aos="fade-up">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-lg rounded p-6 flex flex-col">
            <p className="text-gray-700 mb-4">
              Amazing service! The team really helped me grow my business. I had
              a fantastic experience! Everything was smooth and seamless. Will
              definitely use their service again.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src="https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"
                alt="profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">Entrepreneur</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded p-6 flex flex-col">
            <p className="text-gray-700 mb-4">
              Very reliable and professional experience, highly recommended! I
              had a fantastic experience! Everything was smooth and seamless.
              Will definitely use their service again.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src="https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E="
                alt="profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 (taller cards) */}
        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-lg rounded p-6 flex flex-col min-h-[260px]">
            <p className="text-gray-700 mb-4">
              I had a fantastic experience! Everything was smooth and seamless.
              Will definitely use their service again. I had a fantastic
              experience! Everything was smooth and seamless. Will definitely
              use their service again.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Michael Lee</h4>
                <p className="text-sm text-gray-500">Marketer</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded p-6 flex flex-col min-h-[260px]">
            <p className="text-gray-700 mb-4">
              Their dedication is unmatched. They truly care about their
              customers and it shows in every interaction. I had a fantastic
              experience! Everything was smooth and seamless. Will definitely
              use their service again.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src="https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs="
                alt="profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Emily Davis</h4>
                <p className="text-sm text-gray-500">Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-lg rounded p-6 flex flex-col">
            <p className="text-gray-700 mb-4">
              Quick support and easy to work with. They made everything simple.
              I had a fantastic experience! Everything was smooth and seamless.
              Will definitely use their service again.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                alt="profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Chris Brown</h4>
                <p className="text-sm text-gray-500">Freelancer</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded p-6 flex flex-col">
            <p className="text-gray-700 mb-4">
              Absolutely loved the experience, very smooth and professional. I
              had a fantastic experience! Everything was smooth and seamless.
              Will definitely use their service again.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Sophia Wilson</h4>
                <p className="text-sm text-gray-500">Blogger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
