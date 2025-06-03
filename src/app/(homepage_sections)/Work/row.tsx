"use client";

import { useRef } from "react";
import gsap from "gsap";
import ProjectDetails from "./ProjectDetails";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

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
}

interface LinkProps {
  data: ProjectData;
  index: number;
  activeProject: number | null;
  setActiveProject: (index: number | null) => void;
}

export default function Link({
  data,
  index,
  activeProject,
  setActiveProject,
}: LinkProps) {
  const { name, date, category, additonal_details } = data;
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

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
    // If clicking on the already active project, close it
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      // Otherwise, open this project (and close any other)
      setActiveProject(index);
    }
  };

  return (
    <div className="">
      {index === 0 && (
        <div className="flex justify-between items-center py-3">
          <p className="text-gray-400 text-[10px] 2xs:text-[12px] sm:text-xs uppercase tracking-wider w-[13.5rem]">
            Client
          </p>
          <p className="text-gray-400 text-[10px] 2xs:text-[12px] sm:text-xs uppercase tracking-wider text-left sm:text-left w-[10rem]">
            Category
          </p>
          <p className="text-gray-400 text-[10px] 2xs:text-[12px] sm:text-xs uppercase tracking-wider">
            Year
          </p>
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
        />

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
}: {
  name: string;
  category: string;
  date: string;
  index: number;
}) => {
  return (
    <div className="relative group flex justify-between items-center top-0 overflow-hidden py-2 cursor-pointer text-[12px] 2xs:text-[14px] sm:text-sm w-full">
      <p className="text-white w-[15rem]">{name}</p>

      <p className="text-right sm:text-left w-[10rem] text-white">{category}</p>

      <p className="text-white">{date}</p>
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
    <div className="relative group flex justify-between items-center top-0 overflow-hidden py-2 cursor-pointer text-[12px] 2xs:text-[14px] sm:text-sm w-full">
      <p ref={nameRef} className="text-white w-[15rem] will-change-transform">
        {name}
      </p>

      <p className="text-right sm:text-left w-[10rem] text-white">{category}</p>

      <p ref={dateRef} className="text-white will-change-transform">
        {date}
      </p>
    </div>
  );
};
