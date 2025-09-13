"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAnimationState } from "@/store/useAnimationState";

const Loader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { setAnimationComplete } = useAnimationState();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setIsComplete(true);
            setAnimationComplete(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);
          }, 500);
          return 100;
        }
        // Randomize progress increments for realistic feel
        const increment = Math.random() * 12 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, setAnimationComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 max-h-screen w-screen z-50 flex items-center justify-center bg-slate-100"
        >
          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between space-x-0 md:space-x-4"
          >
            <p className="text-[10px] md:text-sm text-gray-500 tracking-wide uppercase w-[8rem] md:w-[9.7rem]">
              Loading Experience
            </p>
            {/* Progress Bar */}
            <div className="w-26 md:w-32 h-[1px] md:h-[2px] bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-black"
              />
            </div>
            <div className="text-sm md:text-base font-light text-gray-600 w-10 ml-3 md:ml-0">
              {Math.round(progress)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
