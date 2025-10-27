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
import { useRef } from "react";
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

  return (
    <section ref={container} className="pt-0 px-4 md:px-8 mt-24 sm:mt-40">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between">
          <Copy delay={copyDelay}>
            <H2
              onMouseEnter={() => setCursorState("lg-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="h-fit g:w-full 3xl:w-fit xl:text-[5rem] 2xl:text-[5rem] 3xl:text-[6rem] tracking-[-2px] xl:tracking-[-6px] 3xl:ml-5 overflow-visible"
            >
              How I Deliver Value
            </H2>
          </Copy>

          <div className="flex flex-col justify-between items-start w-full lg:w-[60%] xl:w-[50%] 3xl:w-[35%] mt-10 sm:mt-12 lg:mt-6 xl:mt-10 3xl:mt-10 lg:mr-0 xl:mr-10 3xl:mr-[18rem]">
            <div className="space-y-5">
              {deliverySteps.map((step) => (
                <Copy key={step.id} delay={copyDelay}>
                  <DisplayMediumText>
                    <span
                      onMouseEnter={() => setCursorState("sm-hovered")}
                      onMouseLeave={() => setCursorState("regular")}
                    >
                      {step.content}
                    </span>
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source
              src="/assets/videos/portfolio-designs.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
