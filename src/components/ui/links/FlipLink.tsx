"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";

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
  const router = useTransitionRouter();
  const letters = children.split("");

  const pageAnimation = () => {
    const overlay = document.getElementById(
      "loader-overlay"
    ) as HTMLElement | null;
    if (!overlay) return;

    const ENTER_DURATION = 500;
    const HOLD_DURATION = 500;
    const EXIT_DURATION = 500;
    const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

    // Cancel any running animations
    try {
      overlay.getAnimations?.().forEach((a) => a.cancel());
    } catch {}

    // Use WAAPI sequence fully on current page
    const enter = overlay.animate(
      [{ transform: "translateY(100%)" }, { transform: "translateY(0%)" }],
      { duration: ENTER_DURATION, easing: EASING, fill: "forwards" }
    );

    enter.finished
      .then(() =>
        new Promise<void>((resolve) => setTimeout(resolve, HOLD_DURATION)).then(
          () =>
            overlay.animate(
              [
                { transform: "translateY(0%)" },
                { transform: "translateY(-100%)" },
              ],
              { duration: EXIT_DURATION, easing: EASING, fill: "forwards" }
            ).finished
        )
      )
      .catch(() => {});
  };

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
        router.push(href, {
          onTransitionReady: pageAnimation,
        });
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

// onClick={(e) => {
//   e.preventDefault();
//   if (pathname === href) {
//     return;
//   }
//   router.push(href, TransitionOptions);
// }}
