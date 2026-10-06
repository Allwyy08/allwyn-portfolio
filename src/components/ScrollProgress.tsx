"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transform-origin-left z-50 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
    />
  );
}
