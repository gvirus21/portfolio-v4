"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { TransitionOptions } from "@/lib/page-transition-animation";

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
  underline?: boolean;
}

const DURATION = 0.4;
const STAGGER = 0.025;

const FlipLink: FC<FlipLinkProps> = ({
  children,
  href,
  underline,
  className,
}) => {
  const letters = children.split("");

  const router = useTransitionRouter();
  const pathname = usePathname();

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
      onClick={(e) => {
        e.preventDefault();
        if (pathname === href) {
          return;
        }
        router.push(href, TransitionOptions);
      }}
    >
      <div>
        {letters.map((letter, i) => (
          <motion.span
            key={`top-${i}-${letter}`}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
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
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
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
