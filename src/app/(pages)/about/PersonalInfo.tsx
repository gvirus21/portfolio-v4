import Image from "next/image";
import React from "react";
import Copy from "@/components/Copy";
import { useIsMobile } from "@/hooks/useMediaQuery";
import BlackDot from "./BlackDot";

export const PersonalInfoSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative w-full mt-10 sm:mt-32 md:mt-10 md:pt-0 bg-gray-200/50">
      <div className="flex flex-col-reverse sm:flex-row items-end sm:items-start justify-between lg:justify-between w-full">
        <div className="relative w-full sm:w-[16rem] md:w-[20rem] lg:w-[26rem] xl:w-[40rem] 3xl:w-[60rem] aspect-[3/4] mt-16 sm:mt-0">
          <Image
            src="/assets/images/about/personalInfo/img-01.jpg"
            alt="my-image"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <Copy delay={isMobile ? 0.8 : 0}>
          <h2 className="relative text-xl sm:text-[3vw] md:text-[3.2vw] lg:text-[2.8vw] xl:text-4xl 3xl:text-6xl font-light inline-block tracking-tight leading-tight mx-4 sm:mx-0 sm:mr-4 lg:mr-10 mt-8 xl:mt-12 text-right">
            <BlackDot
              height="xl:h-4.5 3xl:h-7"
              className="top-[7px] sm:top-2 lg:top-2.5 xl:top-3.5 2xl:top-4 3xl:top-7 left-14 sm:left-14 md:left-16 lg:left-18 xl:left-24 2xl:left-[5.8rem] 3xl:left-40"
            />
            Otaku since day one,
            <br />
            Naruto&apos;s biggest fan, <br />
            19.3s PR in solving rubiks cube
            <br />
            PC master race believer 🎮&
            <br />
            victim of imposter syndrome and professional procastinator
          </h2>
        </Copy>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
