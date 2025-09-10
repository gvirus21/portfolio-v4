"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useIsReadyForHeroEntry } from "@/store/useAnimationState";
import { heroImageContainerVariants, heroImageVariants } from "./anim";
import Copy from "@/components/Copy";

gsap.registerPlugin(SplitText);

const HERO_IMAGES = ["herosection-img-1.jpg", "herosection-img-2.jpg"];

export const HeroSection = () => {
  const [hasVisited, setHasVisited] = useState(false);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const isReadyForHeroEntry = useIsReadyForHeroEntry();

  // Show/animate only after loader completes, or on subsequent visits
  const ready = hasVisited || isReadyForHeroEntry;

  useEffect(() => {
    const visited = window.sessionStorage.getItem("hasVisitedHome");
    setHasVisited(Boolean(visited));
    window.sessionStorage.setItem("hasVisitedHome", "true");
  }, []);

  useGSAP(
    () => {
      if (!textRef.current || !ready) return;

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
        delay: 0.5,
      });

      return () => {
        splitText.revert();
      };
    },
    { scope: containerRef, dependencies: [ready] }
  );

  return (
    <section ref={containerRef} className="w-full mx-auto pt-44 px-4 sm:px-10">
      <div className="max-w-[38rem] mb-0 sm:mb-16 mt-[0rem] sm:mt-[10rem]">
        {/* <h1
          ref={textRef}
          className={typographyVariants["display-lg"]}
          style={{ visibility: ready ? "visible" : "hidden" }}
        >
          I&apos;m Gourav Kumar, a Web designer & Developer based in India. I
          like to solve design problems for businesses & Startups to elevate
          their business needs via website.
        </h1> */}
        <Copy>
          <h1
            ref={textRef}
            className={"text-lg md:text-xl xl:text-2xl 3xl:text-3xl w-full md:w-[36rem] xl:w-[44rem] 3xl:w-[50rem]"}
            style={{ visibility: ready ? "visible" : "hidden" }}
          >
            I&apos;m Gourav Kumar, a Web designer & Developer based in India. I
            like to solve design problems for businesses & Startups to elevate
            their business needs via website.
          </h1>
        </Copy>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 xl:gap-3 mt-32 sm:mt-40 md:mt-20 lg:mt-40">
        {HERO_IMAGES.map((img, idx) => (
          <motion.div
            key={img}
            variants={heroImageContainerVariants}
            initial="initial"
            animate={ready ? "animate" : "initial"}
            className="relative aspect-[4/3] w-full overflow-clip"
          >
            <motion.div
              variants={heroImageVariants}
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
