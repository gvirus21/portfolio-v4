import { motion, AnimatePresence } from "motion/react";
import { BsDot } from "react-icons/bs";
import PillButton from "@/components/ui/buttons/PillButton";
import Image from "next/image";
import {
  DisplayLargeText,
  DisplaySmallText,
  H6,
} from "@/components/ui/Typography";

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
        <DisplaySmallText>{tool}</DisplaySmallText>
      </li>
    ))}
  </ul>
);

const ProjectImages = ({ images }: { images: string[] }) => (
  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row mt-10 space-x-0 space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-5 xl:space-y-0 xl:space-x-5">
    {[images?.[0], images?.[1]].map((src, idx) => (
      <div
        key={idx}
        className="w-[26rem] sm:w-[18rem] md:w-[24rem] lg:w-[26rem] 2xl:w-[28rem] 3xl:w-[42rem] aspect-video relative overflow-hidden"
      >
        {src && (
          <Image
            src={src}
            alt={`Project image ${idx + 1}`}
            fill
            className="border border-black rounded-lg"
            sizes="(min-width: 1536px) 42rem, (min-width: 1535px) 28rem, (min-width: 1024px) 26rem, (min-width: 768px) 24rem, (min-width: 640px) 18rem, 26rem"
            priority={idx === 0}
          />
        )}
      </div>
    ))}
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
              <DisplayLargeText className="tracking-tight w-11/12 lg:w-[20rem] xl:w-[24rem] 2xl:w-[32rem] 3xl:w-[40rem]">
                {description}
              </DisplayLargeText>
              <PillButton link={website} className="inline-flex mt-6">
                Visit Website
              </PillButton>

              <div className="mt-10">
                <h5 className="text-3xl tracking-tighter uppercase mb-6">
                  Challenges We Worked on
                </h5>
                <DisplaySmallText className="w-11/12 lg:w-[20rem] xl:w-[24rem] 2xl:w-[24rem] 3xl:w-[32rem]">
                  {challengesDescription}
                </DisplaySmallText>
              </div>

              <div className="mt-12">
                <H6 className="mb-3">Technologies</H6>
                <ToolList tools={tools} />
              </div>
            </div>

            <ProjectImages images={details.images} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
