import { useRef } from "react";
import { useScroll } from "motion/react";
import AnimatedWorkTable from "./AnimatedWorkTable";
import { H3 } from "@/components/ui/Typography";
import Copy from "@/components/Copy";
import useCursorState from "@/store/useCursorState";

export const WorkSection = () => {
  const container = useRef(null);
  const { setCursorState } = useCursorState();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={container} className="px-4 sm:px-10 mt-20 sm:mt-36 3xl:mt-48">
      <Copy>
        <H3
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
        >
          Brands I&apos;ve Worked With
        </H3>
      </Copy>
      <div className="flex flex-col justify-between mt-10 sm:mt-16 font-normal tracking-tighter">
        <AnimatedWorkTable scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
};

export default WorkSection;
