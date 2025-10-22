"use client";
import Copy from "@/components/Copy";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import useCursorState from "@/store/useCursorState";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";

const Hero = () => {
  const FIRST_VISIT_KEY = "pricing-page-first-visit";
  const firstVisit = useFirstVisit(FIRST_VISIT_KEY);
  const textAnimationDelay = firstVisit ? 0.4 : 0.8;
  const { setCursorState } = useCursorState();
  const isTouchDevice = useIsTouchDevice();

  return (
    <section className="relative h-screen w-screen max-w-full">
      <Copy delay={textAnimationDelay}>
        <p
          className="absolute left-0 bottom-10 xs:bottom-30 md:bottom-40 xl:bottom-20 3xl:bottom-32 font-light text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl w-[90%] lg:w-[90%] xl:leading-[3.4rem] 3xl:leading-20"
          onMouseEnter={() => !isTouchDevice && setCursorState("lg-hovered")}
          onMouseLeave={() => !isTouchDevice && setCursorState("regular")}
        >
          From one-off websites to complex, long-term builds, I tailor the scope
          to your ideas, goals, and budget—providing clear deliverables,
          transparent estimates, and flexible options. That way, you get premium
          quality, fair timelines, and the best value for every project.
        </p>
      </Copy>
    </section>
  );
};

export default Hero;
