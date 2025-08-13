"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TfiArrowTopRight } from "react-icons/tfi";
import { motion } from "motion/react";

interface SlidingLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
  className?: string;
  underlineHeight?: string;
}

const SlidingLink = ({
  children,
  link,
  className,
  underlineHeight = "1px",
  ...props
}: SlidingLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      style={{ "--underline-height": underlineHeight } as React.CSSProperties}
      className={cn(
        "relative inline-flex items-center justify-center px-5 rounded-full h-8 text-sm font-light hover:opacity-90 transition-opacity overflow-clip link-underline-anim",
        className
      )}
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
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
        initial={{ y: 5 }}
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
  );
};

export default SlidingLink;
