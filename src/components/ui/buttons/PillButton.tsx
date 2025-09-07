
"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TfiArrowTopRight } from "react-icons/tfi";
import { motion } from "motion/react";

interface PillButtonProps {
  children: string;
  link: string;
  className?: string;
}

const PillButton = ({ children, link, className }: PillButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center px-5 bg-black rounded-full h-6 text-sm font-light hover:opacity-90 transition-opacity overflow-clip",
        className
      )}
    >
      <Link
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute top-[30%] left-0 text-white"
          animate={{
            x: isHovered ? -16 : 8,
          }}
        >
          <TfiArrowTopRight />
        </motion.div>

        <motion.div
          className="left-0 text-white z-10"
          initial={{ y: 0 }}
          animate={{
            x: isHovered ? -8 : 8,
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute top-[30%] right-0 text-white"
          initial={{ y: 1 }}
          animate={{
            x: isHovered ? -12 : 10,
          }}
        >
          <TfiArrowTopRight />
        </motion.div>
      </Link>
    </div>
  );
};

export default PillButton;
