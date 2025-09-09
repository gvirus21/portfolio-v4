"use client";
import Copy from "@/components/Copy";

const Hero = () => {
  return (
    <section className="relative h-screen w-screen max-w-full">
      <Copy delay={0.6}>
        <p className="absolute left-0 bottom-30 md:bottom-40 font-light text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl w-[90%] lg:w-[80%] leading-20">
          From one-off websites to complex, long-term builds, we tailor scope to
          your goals and budget—clear deliverables, transparent estimates, and
          flexible options—so you get premium quality, fair timelines, and the
          best value for every project.
        </p>
      </Copy>
    </section>
  );
};

export default Hero;
