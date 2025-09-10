"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface CardProps {
  className?: string;
  dark?: boolean;
  parallax?: MotionValue<number>;
}

const ParallaxCard = ({ className, dark = false, parallax }: CardProps) => (
  <motion.div
    style={{ y: parallax }}
    className={cn(
      "flex flex-col justify-between w-[18vw] aspect-video pt-2 px-6 pb-[1.6vw]",
      dark ? "bg-[#111111]" : "bg-white",
      className
    )}
  >
    <h4
      className={cn(
        "text-[1.6vw] tracking-tighter font-light uppercase",
        dark ? "text-white" : "text-black"
      )}
    >
      Gourav KUMAR
    </h4>

    <div className="flex justify-between items-end">
      <div
        className={cn(
          "w-[1.4vw] aspect-[6/1]",
          dark ? "bg-background" : "bg-black"
        )}
      />
      <div
        className={cn(
          "flex flex-col space-y-6 text-[0.55vw] uppercase tracking-tighter",
          dark ? "text-background" : "text-black"
        )}
      >
        <div className="flex flex-col space-y-0 items-end">
          <p>Designer</p>
          <p>Frontend Developer</p>
        </div>
        <div className="flex flex-col space-y-0 items-end">
          <p>+91 824-908-0090 </p>
          <p>GOURAVKUMAR2889@GMAIL.COM</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const GetInTouch = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const leftCardParallax = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const centerCardParallax = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const rightCardParallax = useTransform(scrollYProgress, [0, 1], [250, 0]);

  const PARALLAX_CARDS = [
    {
      dark: true,
      className: "absolute top-[70%] -translate-y-1/2 left-[6vw] -rotate-10",
      parallax: leftCardParallax,
    },
    {
      dark: false,
      className:
        "absolute top-[2%] -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-26 -z-20",
      parallax: centerCardParallax,
    },
    {
      dark: true,
      className: "absolute -translate-y-[14%] right-[10vw] -rotate-20 -z-20",
      parallax: rightCardParallax,
    },
  ];

  return (
    <section
      ref={container}
      className="relative min-h-[16rem] h-[40vw] lg:h-[45vw] max-w-screen"
    >
      <div className="absolute top-[60%] lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-full">
        <div className="relative">
          <div className="hidden lg:block">
            {PARALLAX_CARDS.map((card, index) => (
              <ParallaxCard
                key={index}
                dark={card.dark}
                className={card.className}
                parallax={card.parallax}
              />
            ))}
          </div>

          <h2 className="text-[14vw] font-light text-center tracking-tight w-full">
            GET IN TOUCH
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
