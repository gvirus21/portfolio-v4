import { H3 } from "@/components/ui/Typography";
import AnimatedWorkTable from "./AnimatedWorkTable";

export const WorkSection = () => {
  return (
    <section className="px-4 sm:px-10 mt-20 sm:mt-60">

      <H3>Brands I&apos;ve Worked With</H3>
      <div className="flex flex-col justify-between mt-10 sm:mt-28 font-normal tracking-tighter">
        <AnimatedWorkTable />
      </div>
    </section>
    );
};

export default WorkSection;
