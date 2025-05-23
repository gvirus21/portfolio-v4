"use client";

import { useState } from "react";
// import { Heading } from "@/components/ui";
import { cn } from "@/lib/utils";
import ProjectDetails from "./ProjectDetails";

import "./styles.css";
import { H2 } from "@/app/components/ui/Text";

const projects = [
  {
    id: "playgrounds-website",
    name: "Playground's Website",
    category: "Development",
    date: "Dec, 2023",
    additonal_details: {
      website: "https://www.google.com",
      images: ["https://www.google.com", "www.google.com"],
      description:
        "Led the development of multiple website projects for the Playgrounds Team, including landing pages, customer-facing web applications, and internal tools for the organisation.",
      challengesDescription:
        "Overcame challenges by delivering innovative solutions that balanced brand creativity and functionality. Implemented optimised user experiences, ensured seamless cross-device functionality, and aligned projects with the company&apos;s evolving goals, all within tight deadlines.",
      tools: ["Next.js", "TailwindCSS", "Framer Motion"],
    },
  },
  {
    id: "bankless-website",
    name: "Bankless's Website",
    category: "Development, Design",
    date: "Jun, 2022",
    additonal_details: {
      website: "https://www.google.com",
      images: ["https://www.google.com", "www.google.com"],
      description:
        "Contributed to the development of the new Re-design of the Bankless&apos;s new Website. Worked Closely with the Leading developer and built many pages & graphics for the site.",
      challengesDescription:
        "We collaborated to bring Bankless DAO&apos;s Web3 vision to life on their new website, refining it through multiple design and development iterations to achieve the perfect result.",
      tools: ["Next.js", "TailwindCSS", "Chakra UI", "Figma"],
    },
  },
  {
    id: "forefront-website",
    name: "Forefront's Website",
    category: "Development, Design",
    date: "Jun, 2022",
    additonal_details: {
      website: "https://www.google.com",
      images: ["https://www.google.com", "www.google.com"],
      description:
        "Collaborated with the Forefront team to help them design & develop their Squad&apos;s website",
      challengesDescription:
        "We designed and implemented complex features that integrated seamlessly with Web3 wallets, ensuring a smooth and intuitive user experience across our websites.",
      tools: ["Next.js", "TailwindCSS", "Figma"],
    },
  },
  {
    id: "codewalla-ios-app",
    name: "Codewalla",
    category: "Development",
    date: "Mar, 2022",
    additonal_details: {
      website: "https://www.google.com",
      images: ["https://www.google.com", "www.google.com"],
      description:
        "Completed iOS development training and collaborated with senior developers on multiple iOS apps at Codewalla.",
      challengesDescription:
        "Completed iOS development training in record time and quickly transitioned to working on production apps for clients.",
      tools: ["Swift", "XCode"],
    },
  },
];

export const WorkSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="mt-20 lg:mt-[28rem] xl:mt-[20rem] pt-[1rem] lg:pt-[6rem] px-10">
      <H2>Brands I&apos;ve Worked With</H2>

      <div className="flex flex-col justify-between tracking-wide font-medium mt-10">
        <div className="w-full h-[1px] bg-black/70" />
        {projects.map((project, index) => (
          <div key={index} className="">
            <div
              onClick={() =>
                setActiveProject((prev) => (prev === index ? null : index))
              }
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={cn(
                "relative group flex justify-between items-center top-0 overflow-hidden py-2 cursor-pointer text-[12px] 2xs:text-[14px] sm:text-base",
                hoveredProject === index && "active-work"
              )}
            >
              <p
                className={cn(
                  "sm:group-hover:translate-x-4 transition-all duration-400 ease-in-out z-10 w-[10rem]",
                  hoveredProject === index && "text-white"
                )}
              >
                {project.name}
              </p>

              <p
                className={cn(
                  "text-right sm:text-left w-[10rem]",
                  hoveredProject === index && "text-white z-10"
                )}
              >
                {project.category}
              </p>

              <p
                className={cn(
                  "group-hover:-translate-x-4 transition-all duration-400 ease-in-out hidden sm:block",
                  hoveredProject === index && "text-white z-10"
                )}
              >
                {project.date}
              </p>
            </div>
            <ProjectDetails
              index={index}
              details={project.additonal_details}
              activeProject={activeProject}
            />
            <div className="w-full h-[1px] bg-black/70" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
