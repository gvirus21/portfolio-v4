"use client";

import { DisplayMediumText, H2 } from "@/components/ui/Typography";
import PillButton from "@/components/ui/buttons/PillButton";
import Copy from "@/components/Copy";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  useIsMobile,
  useIsDesktop,
  useIsTouchDevice,
} from "@/hooks/useMediaQuery";
import useCursorState from "@/store/useCursorState";

const deliverySteps = [
  {
    id: 1,
    content:
      "Instead of providing a standardised solution, I respond to each project for what they actually need. I want to help brands not only build websites, I want to help brands communicate better, convert more, and create digital experiences that people visit and genuinely enjoy. I collaborate closely, ask the right questions, bridge design and development, and produce work that is beautiful, but most importantly, impacts the business.",
  },
];

// Hoisted image paths (8 images) used by the auto-cycling carousel
const IMAGE_PATHS = [
  "/assets/images/homepage/value-section/typography_01.webp",
  "/assets/images/homepage/value-section/batman.webp",
  "/assets/images/homepage/value-section/meron.webp",
  "/assets/images/homepage/value-section/typography_02.webp",
  "/assets/images/homepage/value-section/samurai.webp",
  "/assets/images/homepage/value-section/evangealion.webp",
  "/assets/images/homepage/value-section/figma_ss.webp",
  "/assets/images/homepage/value-section/gojo.webp",
];

export const ValueSection = () => {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  const isTouchDevice = useIsTouchDevice();
  const isLargeTouchDevice = isTouchDevice && isDesktop;

  const { setCursorState, setCursorText } = useCursorState();

  const copyDelay = isLargeTouchDevice ? 3.2 : 0;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const imageWidth = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.7] : [0, 0.5],
    ["50%", "100%"]
  );
  const maskSize = useMotionTemplate`${imageWidth} 100%`;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const totalImages = IMAGE_PATHS.length;
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }, 400);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section ref={container} className="pt-0 px-4 md:px-8 mt-24 sm:mt-40">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between">
          <Copy delay={copyDelay}>
            <H2
              onMouseEnter={() => setCursorState("lg-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="h-fit g:w-full 3xl:w-fit xl:text-[5rem] 3xl:text-[6rem] tracking-[-2px] xl:tracking-[-6px] 3xl:ml-5"
            >
              How I Deliver Value
            </H2>
          </Copy>

          <div className="flex flex-col justify-between items-start w-full lg:w-[90%] 2xl:w-10/12 3xl:w-[35%] mt-10 sm:mt-12 lg:mt-10 2xl:mt-20 3xl:mt-10 lg:mr-0 xl:mr-10 3xl:mr-[18rem]">
            <div className="space-y-5 border">
              {deliverySteps.map((step) => (
                <Copy key={step.id} delay={copyDelay}>
                  <DisplayMediumText
                    onMouseEnter={() => setCursorState("sm-hovered")}
                    onMouseLeave={() => setCursorState("regular")}
                  >
                    {step.content}
                  </DisplayMediumText>
                </Copy>
              ))}
            </div>
            <div
              onMouseEnter={() => {
                setCursorState("sm-hovered");
                setCursorText("Book a Call");
              }}
              onMouseLeave={() => {
                setCursorState("regular");
                setCursorText("");
              }}
              className="flex justify-end mt-8 sm:mt-14"
            >
              <PillButton link="/contact">Contact</PillButton>
            </div>
          </div>
        </div>

        {/* Image section */}
        <motion.div
          style={{
            WebkitMaskImage: "linear-gradient(#000, #000)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: maskSize,
            WebkitMaskPosition: "center",
            maskImage: "linear-gradient(#000, #000)",
            maskRepeat: "no-repeat",
            maskSize: maskSize,
            maskPosition: "center",
            willChange: "-webkit-mask-size, mask-size",
          }}
          className="relative mt-16 md:mt-20 xl:mt-44 aspect-[4/3] sm:aspect-[16/9] 3xl:w-10/12 mx-auto"
        >
          <Image
            src={IMAGE_PATHS[currentImageIndex]}
            alt="Value Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
