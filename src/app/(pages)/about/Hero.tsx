import Image from "next/image";
import Copy from "@/components/Copy";
import useCursorState from "@/store/useCursorState";
import { useFirstVisit } from "@/hooks/useFirstVisit";

export const HeroSection = () => {
  const { setCursorState } = useCursorState();

  const FIRST_VISIT_KEY = "about-page-first-visit";
  const firstVisit = useFirstVisit(FIRST_VISIT_KEY);
  const textAnimationDelay = firstVisit ? 0 : 0.8;

  return (
    <section className="relative h-screen md:max-h-[32rem] lg:max-h-[36rem] xl:max-h-none md:mt-20 max-w-screen overflow-hidden">
      <div className="absolute top-1/2 md:top-[40%] xl:top-[43%] 2xl:top-[40%] 3xl:top-[45%] right-1/2 translate-x-1/2 md:translate-x-0 md:right-[6vw] lg:right-[3vw] -translate-y-1/2 aspect-[4/3] w-[300%] md:w-[70vw] object-cover overflow-hidden">
        {/* TODO: should have 2 images that changes on the percentage of scroll */}
        <Image
          src="/assets/images/about/hero/img-03.jpg"
          alt="hero"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <Copy delay={textAnimationDelay}>
        <p
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="absolute right-4 left-4 sm:left-10 xl:left-10 3xl:left-20 bottom-10 xs:bottom-10 md:bottom-14 lg:bottom-20 xl:bottom-40 3xl:bottom-48 xl:font-light text-4xl xl:text-5xl 3xl:text-8xl md:w-[80%] md:leading-[2.3rem] lg:leading-[2.4rem] xl:leading-[3.5rem] 3xl:leading-[7rem] trackin"
        >
          <span className="mr-10 md:mr-16 lg:mr-16 xl:mr-24 3xl:mr-40" />
          <span className="font-sourcecodepro italic mr- 3xl:text-9xl">I</span>n
          the game for over{" "}
          <span className="font-medium 3xl:font-normal tracking-tight 3xl:tracking-[-0.6rem]">
            5 years
          </span>
          , I&apos;m currently based in the beach city of
          <span className="font-medium 3xl:font-normal tracking-tight 3xl:tracking-[-0.6rem] ml-2 2xl:ml-3">
            Vizag
          </span>
          , India. I work as an independent website designer and developer.
        </p>
      </Copy>
    </section>
  );
};

export default HeroSection;
