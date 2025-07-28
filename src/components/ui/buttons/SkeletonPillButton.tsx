"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TfiArrowTopRight } from "react-icons/tfi";
import { motion } from "motion/react";

interface SkeletonPillButtonProps {
  children: string;
  link: string;
  className?: string;
}

const SkeletonPillButton = ({ children, link, className }: SkeletonPillButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={cn(
        "relative flex justify-center items-center lg:px-3 lg:pr-4 xl:px-5 lg:h-7 xl:h-8 text-sm text-black rounded-full font-light hover:opacity-90 transition-opacity overflow-clip border border-black",
        className
      )}
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 40 : 1,
          backgroundColor: isHovered ? "black" : "black",
        }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="absolute top-[50%] -translate-y-0.5 lg:left-2 xl:left-3 h-[6px] w-[6px] rounded-full bg-black"
      />
      <motion.span
        className="z-10"
        animate={{
          x: isHovered ? -8 : 8,
          color: isHovered ? "white" : "black",
        }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute top-[30%]"
        animate={{
          x: isHovered ? 30 : 60,
          color: isHovered ? "white" : "black",
        }}
      >
        <TfiArrowTopRight />
      </motion.div>
    </Link>
  );
};

export default SkeletonPillButton;
