"use client";

import { FaCircle, FaRegCircle } from "react-icons/fa";
import { AiOutlineDropbox } from "react-icons/ai";
import { BiFilter, BiGitCompare } from "react-icons/bi";

export default function TrustedSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 mt-52">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h3 className="text-gray-500 uppercase tracking-wide text-sm mb-6 font-bold">
          Trusted by
        </h3>

        {/* Logos + Text Row */}
        <div className="flex flex-wrap justify-center items-center gap-20 opacity-80 mb-12">
          {/* GlobalBank */}
          <div className="flex items-center gap-3">
            <FaCircle className="w-6 h-6 text-gray-600" />
            <span className="text-gray-600 text-2xl font-bold">GlobalBank</span>
          </div>

          {/* Polymath */}
          <div className="flex items-center gap-3">
            <AiOutlineDropbox className="w-6 h-6 text-gray-600" />
            <span className="text-gray-600 text-2xl font-bold">Polymath</span>
          </div>

          {/* Epicurious */}
          <div className="flex items-center gap-3">
            <BiFilter className="w-6 h-6 text-gray-600" />
            <span className="text-gray-600 text-2xl font-bold">Epicurious</span>
          </div>

          {/* Acme Corp */}
          <div className="flex items-center gap-3">
            <BiGitCompare className="w-6 h-6 text-gray-600" />
            <span className="text-gray-600 text-2xl font-bold">Acme Corp</span>
          </div>

          {/* Boltshift */}
          <div className="flex items-center gap-3">
            <FaRegCircle className="w-6 h-6 text-gray-600" />
            <span className="text-gray-600 text-2xl font-bold">Boltshift</span>
          </div>
        </div>
      </div>
    </section>
  );
}
