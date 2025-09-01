"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0D17] text-gray-300 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: About */}
        <div className="flex-1">
          <p className="text-lg font-medium mb-4">
            Get real-time insights on audience growth, follower trends, and
            potential clients, all in one place
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle: Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <h3 className="text-white font-semibold mb-3 text-left">
            Quick Links
          </h3>
          <div className="flex flex-col gap-1 text-left">
            <a href="#" className="hover:text-white">
              How it works
            </a>
            <a href="#about-us" className="hover:text-white">
              About Us
            </a>
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
          </div>
        </div>

        {/* Right: Subscribe */}
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-xs mb-3">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full bg-gray-800 outline-none rounded text-white"
            />
            <button className="bg-primary ml-2 rounded-full cursor-pointer px-4 py-2 text-white font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-3">
            By subscribing you agree to with our privacy policy and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400  border-gray-700 pt-6">
        <p>© 2024 CleaningWeb. All rights reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of use
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
