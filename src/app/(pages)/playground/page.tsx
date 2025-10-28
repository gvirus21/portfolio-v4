"use client";

import { FC } from "react";
import CoolAnimationTryoutsSection from "./CoolAnimationTryoutsSection";
import WebDesignsSection from "./WebDesignsSection";
import ExperimentalWebsitesSection from "./ExperimentalWebsitesSection";
import Copy from "@/components/Copy";
import Image from "next/image";
import useCursorState from "@/store/useCursorState";
import { useFirstVisit } from "@/hooks/useFirstVisit";

const PlaygroundPage: FC = () => {
  const { setCursorState } = useCursorState();

  const FIRST_VISIT_KEY = "first-visit";
  const firstVisit = useFirstVisit(FIRST_VISIT_KEY);
  const textAnimationDelay = firstVisit ? 0.5 : 1;

  return (
    <div className="px-4 py-16 xl:pb-28">
      <header className="flex flex-col items-center text-center">
        <span className="flex justify-center items-center h-[40vh] md:h-[40vh] lg:h-[46vh]">
          <Copy delay={textAnimationDelay}>
            <h1
              onMouseEnter={() => setCursorState("lg-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              className="text-[2.7rem] md:text-6xl lg:text-7xl xl:text-7xl 3xl:text-9xl font-main xl:leading-[7rem] 3xl:leading-[10rem] w-full tracking-[-4px] md:tracking-[-6px] 3xl:tracking-[-4px] 3xl:font-light"
            >
              <span className="font-sourcecodepro font-[300] italic mr-2 text-4x xl:text-6xl 3xl:text-8xl">
                My
              </span>
              Playground
            </h1>
          </Copy>
        </span>
        <Copy delay={textAnimationDelay + 0.3}>
          <p className="text-sm  md:text-lg xl:text-lg 3xl:text-xl w-[20rem] md:w-[30rem] font-light font-[arial] leading-5 md:leading-6 tracking-tight">
            <span className="font-sourcecodepro font-semibold italic tracking-tighter">
              Welcome
            </span>{" "}
            to my Playground, my personal collection of random designs, ideas,
            and rejected versions of anything, that i can&apos;t find a place to
            show...
          </p>
        </Copy>

        <Copy delay={textAnimationDelay + 0.4}>
          <div className="relative flex justify-center items-center w-full py-[14vh] md:py-[12vh] lg:py-[8vh] xl:py-[10vh]">
            <Image
              src="/assets/svgs/arrow-down.svg"
              height={200}
              width={200}
              className="h-[1.4rem] lg:h-[1.8rem] opacity-90"
              alt="arrow-down"
            />
          </div>
        </Copy>
      </header>

      <div>
        <CoolAnimationTryoutsSection />
        <WebDesignsSection />
        <ExperimentalWebsitesSection />
      </div>
    </div>
  );
};

export default PlaygroundPage;
