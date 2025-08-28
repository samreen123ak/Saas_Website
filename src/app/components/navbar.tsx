// components/Navbar.tsx
"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent  px-6 py-4 flex items-center justify-between">
      {/* left: Logo */}
      <div>
        <h1 className="font-bold text-primary">CleaningWeb</h1>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <a href="#how-it-works" className="text-black hover:text-white">
            How it works
          </a>
        </li>
        <li>
          <a href="#about-us" className="text-black hover:text-white">
            About us
          </a>
        </li>
        <li>
          <a href="#features" className="text-black hover:text-white">
            Features
          </a>
        </li>
        <li>
          <a href="#about-us-2" className="text-black hover:text-white">
            About us
          </a>
        </li>
      </ul>
      {/* right: button */}

      <div>
        <button className="bg-primary text-white px-4 py-2 rounded-full cursor-pointer ">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
