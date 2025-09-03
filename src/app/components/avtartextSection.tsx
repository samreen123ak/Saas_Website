"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AvatarTextSection() {
  const textBeforeImages = "Whether you're aiming to grow your";
  const textAfterImages =
    "audience, identify new opportunities, or improve engagement, our dashboard delivers actionable metrics that help you refine your strategy and achieve lasting success.";

  const animateWords = (text: string) =>
    text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        className=" relative font-bold text-3xl leading-12 "
        initial={{ color: "#9CA3AF" }}
        whileInView={{ color: "#000000" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay: index * 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        style={{ marginRight: "1.8rem" }}
      >
        {word}
      </motion.span>
    ));

  return (
    <div className="flex justify-center ">
      {/* add vertical spacing to test scroll */}
      <p className="max-w-6xl text-gray-700 text-4xl leading-relaxed flex flex-wrap">
        {animateWords(textBeforeImages)}

        <span className="inline-flex items-center -space-x-2  mr-5">
          <Image
            src="https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8="
            alt="User1"
            width={40}
            height={40}
            className="rounded-full border-2 border-white h-10 w-10"
          />
          <Image
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="User2"
            width={40}
            height={40}
            className="rounded-full border-2 border-white h-10 w-10"
          />
          <Image
            src="https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.jpg?s=612x612&w=0&k=20&c=D14m64UChVZyRhAr6MJW3guo7MKQbKvgNVdKmsgQ_1g="
            alt="User3"
            width={40}
            height={40}
            className="rounded-full border-2 border-white h-10 w-10"
          />
        </span>

        {animateWords(textAfterImages)}
      </p>
    </div>
  );
}
