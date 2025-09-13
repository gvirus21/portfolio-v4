import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative h-screen xs:h-[80vh] xl:h-[180vh] lg:min-h-[70rem] 3xl:min-h-[160rem]  md:mt-20">
      {/* Hero image Container */}
      <div className="absolute top-1/2 xs:top-[60%] md:top-1/2 3xl:top-[55%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-[80vw] sm:w-[60vw] xl:w-[60vw] aspect-[3/4] max-w-[26rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[60rem] xl:max-w-none bg-slate-400 object-cover overflow-hidden">
        <Image
          src="/assets/images/about/hero/img-03.jpg"
          alt="hero"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <p className="w-[60%] sm:w-[50vw] md:w-[50vw] lg:w-[50vw] absolute top-20 xs:top-32 sm:top-40 md:top-10 lg:top-20 3xl:top-40 left-[5vw] text-2xl sm:text-[3.5vw] lg:text-[3.5vw] tracking-tight leading-[1.6rem] sm:leading-[3.5vw] lg:leading-[4vw] z-10 text-black">
        {/* black dot */}
        <span className="absolute top-2 md:top-1.5 lg:top-2.5 xl:top-5 3xl:top-10 left-0 h-3 md:h-4 lg:h-5 xl:h-6 3xl:h-10 aspect-square rounded-full bg-black 3xl:ml-4"></span>

        <span className="pl-10 md:pl-16 lg:pl-20 xl:pl-26 2xl:pl-32 3xl:pl-40">
          In the game for over 6 years, I&apos;m currently based in Ho Chi Minh
          city, working as an independent designer since July, 2022.
        </span>
      </p>
      <p className="w-[60%] sm:w-[50vw] md:w-[50vw] lg:w-[50vw] absolute bottom-[20vw] xs:bottom-6 sm:-bottom-5 md:bottom-20 3xl:bottom-40 right-[5vw] text-2xl sm:text-[3.5vw] lg:text-[3.5vw] tracking-tight leading-[1.6rem] sm:leading-[3.5vw] lg:leading-[4vw] z-10 text-right">
        In the game for over 6 years, I&apos;m currently based in Ho Chi Minh
        city, working as an independent designer since July, 2022.
      </p>
    </section>
  );
};

export default HeroSection;
