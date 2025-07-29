"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(SplitText);

const HERO_IMAGES = ["herosection-img-1.jpg", "herosection-img-2.jpg"];

export const HeroSection = () => {
  const [hasVisited, setHasVisited] = useState(false);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const visited = window.sessionStorage.getItem("hasVisitedHome");
    setHasVisited(Boolean(visited));
    window.sessionStorage.setItem("hasVisitedHome", "true");
  }, []);

  useGSAP(
    () => {
      if (!textRef.current) return;

      gsap.set(textRef.current, { visibility: "visible" });

      const splitText = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "line-item",
      });

      splitText.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "line-wrapper";
        wrapper.style.overflow = "hidden";
        wrapper.style.display = "block";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.set(splitText.lines, { y: "100%" });

      gsap.to(splitText.lines, {
        y: "0%",
        duration: 1,
        stagger: 0.08,
        ease: "power2.out",
        // delay: hasVisited ? 0 : 1.3,
        delay: hasVisited ? 0 : 2.5,
      });

      return () => {
        splitText.revert();
      };
    },
    { scope: containerRef, dependencies: [hasVisited] }
  );

  const imageContainerVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        // delay: hasVisited ? 3.2 : 1.7,
        delay: hasVisited ? 3.2 : 2.7,
      },
    },
  };

  const imageVariants = {
    // initial: { scale: "140%" }, // 140% is for desktop version
    initial: { scale: "110%" },
    animate: {
      scale: "100%",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.86, 0.45, 0.98],
        // delay: hasVisited ? 2.5 : 1,
        delay: hasVisited ? 2.5 : 2.7,
      },
    },
  };

  return (
    <section ref={containerRef} className="w-full mx-auto pt-44 px-4 sm:px-10">
      <div className="max-w-[38rem] mb-0 sm:mb-16 mt-[0rem] sm:mt-[10rem]">
        <h1
          ref={textRef}
          className="text-lg md:text-3xl lg:text-2xl leading-6 sm:leading-8"
          style={{ visibility: "hidden" }}
        >
          I&apos;m Gourav Kumar, a Web designer & Developer based in India. I
          like to solve design problems for businesses & Startups to elevate
          their business needs via website.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32 sm:mt-40">
        {HERO_IMAGES.map((img, idx) => (
          <motion.div
            key={img}
            variants={imageContainerVariants}
            initial="initial"
            animate="animate"
            className="relative aspect-[4/3] w-full overflow-clip"
          >
            <motion.div
              variants={imageVariants}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={`/assets/images/${img}`}
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
