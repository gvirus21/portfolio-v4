"use client";

import { useState } from "react";
import ProjectItem from "./row";
import styles from "./style.module.scss";
import { MotionValue, useTransform } from "motion/react";
import { useIsMouseDevice } from "@/hooks/useMediaQuery";

const AnimatedWorkTable = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const isMouse = useIsMouseDevice();

  const scrollYProgressRange = isMouse ? [0, 0.4] : [0, 0.5];
  const scrollYProgressValues = [
    isMouse ? ["90%", "100%"] : ["80%", "100%"],
    isMouse ? ["80%", "100%"] : ["70%", "100%"],
    isMouse ? ["70%", "100%"] : ["60%", "100%"],
    isMouse ? ["60%", "100%"] : ["50%", "100%"],
  ];

  const firstLineWidth = useTransform(
    scrollYProgress,
    scrollYProgressRange,
    scrollYProgressValues[0]
  );
  const secondLineWidth = useTransform(
    scrollYProgress,
    scrollYProgressRange,
    scrollYProgressValues[1]
  );
  const thirdLineWidth = useTransform(
    scrollYProgress,
    scrollYProgressRange,
    scrollYProgressValues[2]
  );
  const fourthLineWidth = useTransform(
    scrollYProgress,
    scrollYProgressRange,
    scrollYProgressValues[3]
  );

  const projectsData = [
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
      borderBottomWidth: firstLineWidth,
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
      borderBottomWidth: secondLineWidth,
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
      borderBottomWidth: thirdLineWidth,
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
      borderBottomWidth: fourthLineWidth,
    },
  ];

  return (
    <div className={styles.table}>
      <div className={styles.body}>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={project.id}
            scrollYProgress={scrollYProgress}
            data={project}
            index={index}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedWorkTable;
