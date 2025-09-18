
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
  variant?: "dark" | "light";
}

const PillButton = ({
  children,
  link,
  className,
  variant = "dark",
}: PillButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isLight = variant === "light";
  const backgroundClass = isLight ? "bg-white" : "bg-black";
  const textClass = isLight ? "text-black" : "text-white";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center px-5 rounded-full h-6 text-sm font-light hover:opacity-90 transition-opacity overflow-clip",
        backgroundClass,
        className
      )}
    >
      <Link
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className={cn("absolute top-[30%] left-0", textClass)}
          animate={{
            x: isHovered ? -16 : 8,
          }}
        >
          <TfiArrowTopRight />
        </motion.div>

        <motion.div
          className={cn("left-0 z-10", textClass)}
          initial={{ y: 0 }}
          animate={{
            x: isHovered ? -8 : 8,
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className={cn("absolute top-[30%] right-0", textClass)}
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
