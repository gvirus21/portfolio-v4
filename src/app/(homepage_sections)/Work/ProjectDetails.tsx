import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Description } from "@/app/components/ui/Text";
import { BsDot } from "react-icons/bs";

interface AdditionalDetails {
  website: string;
  images: string[];
  description: string;
  challengesDescription: string;
  tools: string[];
}

interface ProjectDetailsProps {
  index: number;
  details: AdditionalDetails;
  activeProject: number | null;
}

const ToolList = ({ tools }: { tools: string[] }) => (
  <ul className="space-y-1">
    {tools.map((tool, index) => (
      <li key={index} className="flex items-center">
        <BsDot className="text-xl mr-1" />
        <Description variant="sm">{tool}</Description>
      </li>
    ))}
  </ul>
);

const ProjectImages = () => (
  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row mt-10 space-x-0 space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-5 xl:space-y-0 xl:space-x-10">
    <div className="w-[20rem] sm:w-[18rem] md:w-[24rem] lg:w-[26rem] 2xl:w-[28rem] 3xl:w-[42rem] aspect-video bg-slate-300" />
    <div className="w-[20rem] sm:w-[18rem] md:w-[24rem] lg:w-[26rem] 2xl:w-[28rem] 3xl:w-[42rem] aspect-video bg-slate-300" />
  </div>
);

export const ProjectDetails = ({
  details,
  activeProject,
  index,
}: ProjectDetailsProps) => {
  const { description, challengesDescription, tools, website } = details;
  const isActive = index === activeProject;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={`project-${index}`}
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          style={{ overflow: "hidden" }}
        >
          <div className="flex flex-col justify-start lg:justify-between items-center xl:items-start lg:flex-row mb-6">
            <div className="mt-4">
              <Description
                variant="xl"
                className="w-11/12 lg:w-[20rem] xl:w-[24rem] 2xl:w-[30rem] mb-6"
              >
                {description}
              </Description>

              <Link
                href={website}
                className="bg-black px-4 py-2 rounded-full text-white text-sm hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="text-white capitalize">Visit Website</span>
              </Link>

              <div className="mt-6">
                <h3 className="text-xl tracking-[2%] mb-3">
                  Challenges We Worked on
                </h3>
                <Description
                  variant="sm"
                  className="w-11/12 lg:w-[20rem] xl:w-[24rem] 2xl:w-[30rem]"
                >
                  {challengesDescription}
                </Description>
              </div>

              <div className="mt-6">
                <h3 className="text-xl tracking-[2%] mb-3">Tools</h3>
                <ToolList tools={tools} />
              </div>
            </div>

            <ProjectImages />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
