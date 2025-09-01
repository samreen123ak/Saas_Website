// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-transparent  pr-5  flex items-center justify-between  "
      data-aos="fade-down"
    >
      {/* left: Logo */}
      <div>
        <img src="/assets/logo.png" alt="" className="h-24 w-24 " />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-black hover:text-primary font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="text-black hover:text-primary font-bold"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="/testimonials"
            className="text-black hover:text-primary font-bold"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="/integrations"
            className="text-black hover:text-primary font-bold"
          >
            Integrations
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="text-black hover:text-primary font-bold"
          >
            Blog
          </Link>
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
