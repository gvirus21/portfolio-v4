"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePageLoader } from "@/hooks/usePageLoader";

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
  underline?: boolean;
}

// Animation timing
const DURATION = 0.4;
const STAGGER = 0.025;

const FlipLink: React.FC<FlipLinkProps> = ({
  children,
  href,
  underline,
  className,
}) => {
  const letters = useMemo(() => children.split(""), [children]);
  const { handleKeyDown, handleNavigate } = usePageLoader();

  // const handleNavigate = (e: MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   if (!href) return;
  //   navigateWithAnimation(href);
  // };

  // const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
  //   if (e.key === "Enter" || e.key === " ") {
  //     e.preventDefault();
  //     navigateWithAnimation(href);
  //   }
  // };

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative block overflow-hidden whitespace-nowrap leading-5",
        underline && "link-underline-anim",
        className
      )}
      href={href}
      onClick={(e) => handleNavigate(e, href)}
      onKeyDown={(e) => handleKeyDown(e, href)}
      role="link"
      aria-label={children}
    >
      <div>
        {letters.map((letter, i) => (
          <motion.span
            key={`top-${i}-${letter}`}
            className="inline-block"
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            transition={{
              duration: DURATION,
              delay: i * STAGGER,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {letters.map((letter, i) => (
          <motion.span
            key={`bottom-${i}-${letter}`}
            className="inline-block"
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{
              duration: DURATION,
              delay: i * STAGGER,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
