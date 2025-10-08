import { FC } from "react";
import CoolAnimationTryoutsSection from "./CoolAnimationTryoutsSection";
import WebDesignsSection from "./WebDesignsSection";
import ExperimentalWebsitesSection from "./ExperimentalWebsitesSection";
import Copy from "@/components/Copy";
import Image from "next/image";

const PlaygroundPage: FC = () => {
  return (
    <div className="px-4 py-16">
      <header className="flex flex-col items-center text-center">
        <Copy>
          <h1 className="flex justify-center items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[3.5rem] md:leading-[4.5rem] lg:leading-[5.5rem] xl:leading-[6.8rem] h-[30vh] md:h-[40vh] lg:h-[50vh] w-full">
            My Playground
          </h1>
        </Copy>
        <Copy>
          <p className="text-sm  md:text-lg xl:text-3xl w-[20rem] md:w-[26rem] xl:w-[50rem] font-light tracking-tight">
            Welcome to my Playground, my personal collection of random designs,
            ideas, and rejected versions of anything, that i can&apos;t find a
            place to show...
          </p>
        </Copy>

        <div className="relative flex justify-center items-center w-full py-[16vh] md:py-[12vh] lg:py-[8vh] xl:py-[10vh]">
          <Image
            src="/assets/svgs/arrow-down.svg"
            height={200}
            width={200}
            className="h-[1.4rem] lg:h-[1.8rem] opacity-90"
            alt="arrow-down"
          />
        </div>
      </header>

      <CoolAnimationTryoutsSection />
      <WebDesignsSection />
      <ExperimentalWebsitesSection />
    </div>
  );
};

export default PlaygroundPage;
