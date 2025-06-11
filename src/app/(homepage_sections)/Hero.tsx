"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(SplitText);

export const HeroSection = () => {
  const textRef = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      if (!textRef.current) return;
      const splitText = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "line-item",
      });

      // Wrap each line in a container with overflow hidden
      splitText.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "line-wrapper";
        wrapper.style.cssText = `
          overflow: hidden;
          display: block;
        `;

        // Insert wrapper before the line
        line.parentNode?.insertBefore(wrapper, line);

        // Move line inside wrapper
        wrapper.appendChild(line);
      });

      // Set initial state - lines positioned below their containers
      gsap.set(splitText.lines, {
        y: "100%",
        opacity: 1,
      });

      // Animate lines sliding up into view
      gsap.to(splitText.lines, {
        y: "0%",
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay: 2.9,
      });

      // Cleanup function
      return () => {
        splitText.revert();
      };
    },
    { scope: container }
  );

  const imageVariants = {
    initial: {
      scale: "140%",
    },
    animate: {
      scale: "100%",
      transition: {
        delay: 2.5,
        duration: 1.5,
        ease: [0.25, 0.86, 0.45, 0.98],
      },
    },
  };

  return (
    <section ref={container} className="w-full mx-auto pt-44 px-10">
      <div className="max-w-[38rem] mb-16 mt-[10rem]">
        <h1 ref={textRef} className="text-lg md:text-3xl lg:text-2xl leading-8">
          I&apos;m Gourav Kumar, a Web designer & Developer based in India. I
          like to solve design problems for businesses & Startups to elevate
          their business needs via website.
        </h1>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 3.2,
          }}
          className="relative aspect-[4/3] w-full overflow-clip"
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/assets/images/herosection-img-1.jpg"
              alt="Hero Image"
              fill
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 3.2,
          }}
          className="relative aspect-[4/3] w-full overflow-clip"
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/assets/images/herosection-img-2.jpg"
              alt="Hero Image"
              fill
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
