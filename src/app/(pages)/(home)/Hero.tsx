"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import Copy from "@/components/Copy";
import useCursorState from "@/store/useCursorState";

gsap.registerPlugin(SplitText);

const HERO_IMAGES = ["hero-01.webp", "hero-02.webp"];
const HOME_HERO_VISIT_KEY = "home-hero";

export const HeroSection = () => {
  const firstVisit = useFirstVisit(HOME_HERO_VISIT_KEY);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const { setCursorState } = useCursorState();

  const textAnimationDelay = firstVisit ? 3 : 0.6;

  const heroImageContainerVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: firstVisit ? 3.02 : 0.8,
      },
    },
  };

  const heroImageVariants = {
    initial: { scale: "110%" },
    animate: {
      scale: "100%",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.86, 0.45, 0.98],
        delay: firstVisit ? 3.02 : 0.8,
      },
    },
  };

  return (
    <section ref={containerRef} className="w-full mx-auto pt-44 px-4 sm:px-10">
      <div className="max-w-[38rem] mb-0 sm:mb-16 mt-[0rem] sm:mt-[10rem] md:mt-[12rem] xl:mt-[10rem]">
        <Copy delay={textAnimationDelay}>
          <h1
            onMouseEnter={() => setCursorState("sm-hovered")}
            onMouseLeave={() => setCursorState("regular")}
            ref={textRef}
            className={
              "text-lg md:text-xl xl:text-2xl 3xl:text-2xl w-full md:w-[30rem] xl:w-[44rem] 3xl:w-[37.5rem]"
            }
          >
            I&apos;m Gourav Kumar, a Web designer & Developer based in India. I
            like to solve design problems for businesses & Startups to elevate
            their business needs via website.
          </h1>
        </Copy>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-32 sm:mt-40 md:mt-28 lg:mt-40">
        {HERO_IMAGES.map((img, idx) => (
          <motion.div
            key={img}
            variants={heroImageContainerVariants}
            initial="initial"
            animate="animate"
            className="relative aspect-[4/3] w-full overflow-clip"
          >
            <motion.div
              variants={heroImageVariants}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={`/assets/images/homepage/hero-section/${img}`}
                alt={`Hero Image ${idx + 1}`}
                fill
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
