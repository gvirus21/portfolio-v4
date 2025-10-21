"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useMediaQuery";
import useCursorState from "@/store/useCursorState";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  animationDelay?: number; // Add custom delay prop
}

const AnimatedImage = ({
  src,
  alt,
  width = 1000,
  height = 1000,
  className,
  animationDelay = 0,
}: Props) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  const { setCursorState } = useCursorState();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't animate until we know the screen size
  if (!mounted) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div className="w-full h-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setCursorState("sm-hovered")}
      onMouseLeave={() => setCursorState("regular")}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        initial={isMobile ? { rotate: 0, scale: 1 } : { rotate: 5, scale: 1.2 }}
        whileInView={
          isMobile
            ? { rotate: 0, scale: 1 }
            : {
                rotate: 0,
                scale: 1,
              }
        }
        transition={
          isMobile
            ? { duration: 0 }
            : {
                delay: animationDelay + 0.1,
                // delay: 0.2,
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }
        }
        viewport={{ once: true }}
        className="w-full h-full origin-center"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {!isMobile && (
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: "100%" }}
          transition={{
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
            delay: animationDelay,
          }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full bg-gray-200"
        />
      )}
    </div>
  );
};

export default AnimatedImage;
