"use client";

import { motion } from "motion/react";

export default function SlideUpTransition() {
  return (
    <motion.div id="loader-wall" className="relative">
      <div
        id="loader-overlay"
        className="fixed inset-0 z-[100] translate-y-full bg-black origin-bottom pointer-events-none"
      />
    </motion.div>
  );
}