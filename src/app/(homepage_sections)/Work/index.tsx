"use client";

import { useState } from "react";
import ProjectItem from "./row";
import { H2 } from "../../components/ui/Text";
import styles from "./style.module.scss";

interface Project {
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

const projects: Project[] = [
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
        "Overcame challenges by delivering innovative solutions that balanced brand creativity and functionality. Implemented optimised user experiences, ensured seamless cross-device functionality, and aligned projects with the company's evolving goals, all within tight deadlines.",
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
        "Contributed to the development of the new Re-design of the Bankless's new Website. Worked Closely with the Leading developer and built many pages & graphics for the site.",
      challengesDescription:
        "We collaborated to bring Bankless DAO's Web3 vision to life on their new website, refining it through multiple design and development iterations to achieve the perfect result.",
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
        "Collaborated with the Forefront team to help them design & develop their Squad's website",
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

  return (
    <section className="mt-10 pt-[1rem] lg:pt-[6rem] px-10">
      <H2>Brands I&apos;ve Worked With</H2>

      <div className="flex flex-col justify-between mt-10 font-normal tracking-tighter">
        <div className={styles.table}>
          <div className={styles.body}>
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                data={project}
                index={index}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
