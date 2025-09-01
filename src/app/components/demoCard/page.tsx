"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import EngagmentCard from "./components/engagmentCard";
import GrowthCard from "./components/growthCard";
import MonetizationCard from "./components/monetizationCard";

export default function DemoCard() {
  const cards = [
    { id: 1, component: <GrowthCard /> },
    { id: 2, component: <EngagmentCard /> },
    { id: 3, component: <MonetizationCard /> },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div
      id="about-us"
      className="relative w-full h-[600px] mb-10 overflow-hidden "
    >
      <div className="relative w-full h-full   shadow-lg bg-white">
        <AnimatePresence>
          <motion.div
            key={cards[index].id}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {cards[index].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
