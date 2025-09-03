"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-transparent pr-5 flex items-center justify-between"
      data-aos="fade-down"
    >
      {/* left: Logo */}
      <div>
        <Image
          src="/assets/logo.png"
          alt="Company Logo"
          width={96} // same as h-24
          height={96} // same as w-24
          className="h-24 w-24"
        />
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
            href="/blog"
            className="text-black hover:text-primary font-bold"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-black hover:text-primary font-bold"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* right: button */}
      <div>
        <a href="tel:02036333784">
          <button className="bg-primary text-white px-4 py-2 rounded-full cursor-pointer">
            02036333784
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
