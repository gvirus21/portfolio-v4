import { H4 } from "@/components/ui/Text";
import AnimatedWorkTable from "./AnimatedWorkTable";

export const WorkSection = () => {
  return (
    <section className="px-4 sm:px-10 mt-20 sm:mt-60">
      <H4 className="text-5xl sm:text-8xl">Brands I&apos;ve Worked With</H4>
      <div className="flex flex-col justify-between mt-10 sm:mt-28 font-normal tracking-tighter">
        <AnimatedWorkTable />
      </div>
    </section>
  );
};

export default WorkSection;
