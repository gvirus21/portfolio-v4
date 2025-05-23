import { BsDot } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@/app/components/ui/Text";
import { cn } from "@/lib/utils";

interface AdditionalDetails {
  website: string;
  images: string[];
  description: string;
  challengesDescription: string;
  tools: string[];
}

export const ProjectDetails = ({
  details,
  activeProject,
  index,
}: {
  index: number;
  details: AdditionalDetails;
  activeProject: number | null;
}) => {
  const { description, challengesDescription, tools, website } = details;
  return (
    <div
      className={cn(
        " overflow-y-hidden",
        index === activeProject ? "h-auto" : "h-0"
      )}
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
            className="bg-black px-4 py-2 rounded-full text-white text-sm"
          >
            <span className="">Visit Website</span>
          </Link>

          <div className="mt-6">
            <h3 className="text-xl tracking-[2%] mb-3">
              {" "}
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
            <ul className="space-y-1">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-center">
                  <BsDot className="text-xl mr-1" />
                  <Description variant="sm">{tool}</Description>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row mt-10 space-x-0 space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-5 xl:space-y-0 xl:space-x-10">
          <div className="w-[20rem] sm:w-[18rem] md:w-[24rem] lg:w-[26rem] 2xl:w-[28rem] 3xl:w-[42rem] aspect-video bg-slate-300 md:bg-slate-300" />
          <div className="w-[20rem] sm:w-[18rem] md:w-[24rem] lg:w-[26rem] 2xl:w-[28rem] 3xl:w-[42rem] aspect-video bg-slate-300 md:bg-slate-300" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
