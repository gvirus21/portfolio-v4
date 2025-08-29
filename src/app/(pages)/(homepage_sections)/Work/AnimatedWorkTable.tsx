"use client";

import { useState } from "react";
import ProjectItem from "./row";
import styles from "./style.module.scss";
import { projectsData } from "./data";


const AnimatedWorkTable = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className={styles.table}>
      <div className={styles.body}>
        {projectsData.map(( project, index) => (
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
  );
};

export default AnimatedWorkTable;
