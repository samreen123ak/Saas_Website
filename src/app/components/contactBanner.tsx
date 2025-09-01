"use client";

import React from "react";
import Link from "next/link";

const ContactBanner: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-400 to-blue-700 text-white py-20 px-6 text-center m-10  rounded my-10"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to get started?
      </h2>
      <p className="mb-8 text-lg md:text-xl">
        Contact us today and let’s take your business to the next level.
      </p>
      <Link href="/contact">
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Contact Us : 02036333784
        </button>
      </Link>
    </section>
  );
};

export default ContactBanner;
