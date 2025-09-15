"use client";

import { useRef } from "react";
import gsap from "gsap";
import ProjectDetails from "./ProjectDetails";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { motion, MotionValue, useTransform } from "motion/react";
import { useIsMouseDevice } from "@/hooks/useMediaQuery";

interface ProjectData {
  id: string;
  name: string;
  category: string;
  date: string;
  additonal_details: {
    website: string;
    images: string[];
    description: string;
    challengesDescription: string;
    tools: string[];
  };
  borderBottomWidth: MotionValue<string>;
}

interface LinkProps {
  data: ProjectData;
  index: number;
  activeProject: number | null;
  setActiveProject: (index: number | null) => void;
  scrollYProgress: MotionValue<number>;
}

export default function Link({
  data,
  index,
  activeProject,
  setActiveProject,
  scrollYProgress,
}: LinkProps) {
  const { name, date, category, additonal_details, borderBottomWidth } = data;
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const isMouseDevice = useIsMouseDevice();

  // Refs for the hover animation elements
  const hoveredNameRef = useRef<HTMLParagraphElement>(null);
  const hoveredDateRef = useRef<HTMLParagraphElement>(null);

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: "-100%" });
      gsap.set(inner.current, { top: "100%" });
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });

    // Animate the hover elements getting closer with delay
    gsap.to(hoveredNameRef.current, {
      x: 10,
      duration: 0.4,
      delay: 0.1,
      ease: "power2.out",
    });
    gsap.to(hoveredDateRef.current, {
      x: -10,
      duration: 0.4,
      delay: 0.1,
      ease: "power2.out",
    });
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }

    // Reset the hover elements position immediately (no delay)
    gsap.to(hoveredNameRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(hoveredDateRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleClick = () => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  const firstLineWidth = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["93%", "100%"]
  );

  return (
    <div className="">
      {index === 0 && (
        <div className="flex flex-col wf">
          <div className="flex justify-between items-center py-3">
            <p className="text-[10px] 2xs:text-[12px] sm:text-xs uppercase tracking-wider w-[13.5rem]">
              Client
            </p>
            <p className="text-[10px] 2xs:text-[12px] sm:text-xs uppercase tracking-wider text-left sm:text-left sm:w-[21.5rem]">
              Category
            </p>
            <p className="hidden sm:block text-[10px] 2xs:text-[12px] sm:text-xs uppercase tracking-wider">
              Year
            </p>
          </div>
          <motion.div
            style={{ width: firstLineWidth }}
            className="h-[1px] bg-black"
          />
        </div>
      )}

      <div
        onClick={handleClick}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        className={cn(styles.el)}
      >
        <DefaultVisibleTableRows
          name={name}
          category={category}
          date={date}
          index={index}
          separatorWidth={borderBottomWidth}
        />

        {isMouseDevice && (
          <div ref={outer} className={styles.outer}>
            <div ref={inner} className={styles.inner}>
              <div key={index} className={styles.container}>
                <HoveredVisibleTableRows
                  name={name}
                  category={category}
                  date={date}
                  index={index}
                  nameRef={hoveredNameRef}
                  dateRef={hoveredDateRef}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <ProjectDetails
        index={index}
        details={additonal_details}
        activeProject={activeProject}
      />
    </div>
  );
}

const DefaultVisibleTableRows = ({
  name,
  category,
  date,
  separatorWidth,
}: {
  name: string;
  category: string;
  date: string;
  index: number;
  separatorWidth: MotionValue<string>;
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative group flex justify-between items-center top-0 overflow-hidden py-4 cursor-pointer text-sm sm:text-lg w-full uppercase">
        <p className="text-white w-full sm:w-[15rem]">{name}</p>
        <p className="text-right sm:text-left w-[20rem] text-white">
          {category}
        </p>
        <p className="hidden sm:block text-white">{date}</p>
      </div>
      <motion.div
        style={{ width: separatorWidth }}
        className="h-[1px] bg-black"
      />
    </div>
  );
};

const HoveredVisibleTableRows = ({
  name,
  category,
  date,
  nameRef,
  dateRef,
}: {
  name: string;
  category: string;
  date: string;
  index: number;
  nameRef: React.RefObject<HTMLParagraphElement | null>;
  dateRef: React.RefObject<HTMLParagraphElement | null>;
}) => {
  return (
    <div className="relative group hidden lg:flex justify-between items-center top-0 overflow-hidden py-2 cursor-pointer  text-lg w-full uppercase">
      <p ref={nameRef} className="text-white w-[15rem] will-change-transform">
        {name}
      </p>
      <p className="text-right sm:text-left w-[20rem] text-white">{category}</p>
      <p ref={dateRef} className="text-white will-change-transform">
        {date}
      </p>
    </div>
  );
};
