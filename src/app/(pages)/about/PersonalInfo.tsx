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
          <div className="absolute h-full w-full bg-gray-400 opacity-70 md:hidden"></div>
        </div>
        <div className="absolute top-6 md:top-12 lg:top-20 right-4 md:right-10 flex flex-col justify-between items-end">
          <Copy delay={isMobile ? 0.8 : 0}>
            <p className="font-dmsans text-4xl leading-[2.4rem] xl:text-5xl xl:leading-[3rem] 3xl:text-7xl 3xl:leading-[5.2rem] text-right tracking-tighter">
              Big One Piece Fan, <br />
              Love to Cook, Hangout, and Build <br />
              Learning New Things, Growing <br />
            </p>
          </Copy>
          <Copy>
            <p className="text-lg xs:text-xl md:w-[50vw] xl:w-[44vw] mt-8 xl:mt-16 ml-4 md:ml-0 3xl:text-3xl 3xl:w-[36vw] md:mt-12 3xl:mt-20 md:text-right font-medium md:font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              facilis culpa vel eveniet. Consectetur unde nihil vitae ipsum
              consequuntur saepe quis. Deserunt autem possimus voluptas
              repudiandae perspiciatis ullam iste cupiditate quasi libero, neque
              omnis quis, maxime eius, et officia fugiat.
            </p>
          </Copy>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
