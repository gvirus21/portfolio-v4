import Image from "next/image";
import React from "react";
import Copy from "@/components/Copy";
import { useIsMobile } from "@/hooks/useMediaQuery";

export const PersonalInfoSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative w-full pt-0 sm:pt-32 md:pt-10 --bg-gray-200/50">
      <div className="flex flex-col-reverse sm:flex-row items-end sm:items-start justify-between lg:justify-between w-full">
        <div className="relative w-full sm:w-[16rem] md:w-[20rem] lg:w-[26rem] xl:w-[40rem] 3xl:w-[60rem] aspect-[3/4] sm:mt-0">
          <Image
            src="/assets/images/about/personalInfo/img-01.jpg"
            alt="my-image"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <Copy delay={isMobile ? 0.8 : 0}>
          <p></p>
        </Copy>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
