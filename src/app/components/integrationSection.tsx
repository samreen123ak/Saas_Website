"use client";

import React from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/assets/logo1.png", alt: "Logo" },
  { id: 2, src: "/assets/logo2.png", alt: "Logo" },
  { id: 3, src: "/assets/logo3.png", alt: "Logo" },
  { id: 4, src: "/assets/logo4.png", alt: "Logo" },
  { id: 5, src: "/assets/logo5.png", alt: "Logo" },
  { id: 6, src: "/assets/logo6.png", alt: "Logo" },
  { id: 7, src: "/assets/logo7.png", alt: "Logo" },
  { id: 8, src: "/assets/logo8.png", alt: "Logo" },
  { id: 10, src: "/assets/logo10.png", alt: "Logo" },
  { id: 11, src: "/assets/logo11.png", alt: "Logo" },
  { id: 12, src: "/assets/logo12.png", alt: "Logo" },
  { id: 13, src: "/assets/logo13.png", alt: "Logo" },
];

const IntegrationSection: React.FC = () => {
  return (
    <section className="py-20 px-6" data-aos="fade-up">
      {/* Title & Subtitle */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Partners and Integrations</h2>
        <p className="text-gray-500 text-sm">
          To streamline your operations, we collaborate with partners who share
          our ambition to simplify business processes. CleanManager can
          integrate with a range of other systems, eliminating the need for
          redundant work.
        </p>
      </div>

      {/* Icon Cards */}
      <div className="max-w-7xl mx-auto flex justify-center gap-6 flex-wrap">
        {images.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center w-40 h-40  rounded-lg border border-gray-200 shadow hover:shadow-lg transition"
          >
            <Image src={item.src} alt={item.alt} width={70} height={70} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationSection;
