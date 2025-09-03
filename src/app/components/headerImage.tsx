"use client";

import React from "react";
import Image from "next/image";

const HeaderImage: React.FC = () => {
  return (
    <div className="w-full p-6 relative">
      <div className="flex items-center justify-center min-h-screen relative">
        {/* Social Media Icons with animations */}
        <SocialIcon
          src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png"
          alt="Facebook"
          className="top-6 left-30 rotate-6"
          imgClassName="h-10 w-10"
          animation="fade-right"
        />
        <SocialIcon
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png"
          alt="Twitter"
          className="top-6 right-30 -rotate-6"
          imgClassName="h-10 w-10"
          animation="fade-left"
        />
        <SocialIcon
          src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
          alt="LinkedIn"
          className="top-[27%] left-20 -rotate-12"
          imgClassName="h-15 w-15"
          animation="fade-right"
        />
        <SocialIcon
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
          alt="Instagram"
          className="top-[27%] right-20 rotate-12"
          imgClassName="h-10 w-10"
          animation="fade-left"
        />
        <SocialIcon
          src="https://static.vecteezy.com/system/resources/previews/018/930/573/non_2x/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.png"
          alt="TikTok"
          className="bottom-[40%] left-30 rotate-6"
          imgClassName="h-20 w-20"
          animation="fade-up"
        />
        <SocialIcon
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YouTube.width-500.format-webp.webp"
          alt="YouTube"
          className="bottom-[40%] right-30 -rotate-6"
          imgClassName="h-10 w-10"
          animation="fade-up"
        />

        {/* Image */}
        <div
          className="max-w-3xl w-full mt-15 relative rounded"
          data-aos="fade-up"
        >
          <Image
            src="/assets/heroimg.svg"
            alt="TrendTide Analytics Dashboard"
            width={1000}
            height={700}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({
  src,
  alt,
  className,
  imgClassName,
  animation,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  animation?: string;
}) => (
  <div
    data-aos={animation}
    className={`absolute w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer ${className}`}
  >
    <Image
      src={src}
      alt={alt}
      width={50}
      height={50}
      className={`object-contain ${imgClassName}`}
    />
  </div>
);

export default HeaderImage;
