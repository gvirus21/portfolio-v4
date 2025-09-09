import React from "react";
export const HeroSection = () => {
  return (
    <section className="relative h-screen xs:h-[80vh] xl:h-[180vh] lg:min-h-[70rem] 3xl:min-h-[200rem]  md:mt-20">
      {/* Hero image Container */}
      <div className="absolute top-1/2 xs:top-[60%] md:top-1/2 3xl:top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-[80vw] sm:w-[60vw] xl:w-[60vw] aspect-[3/4] max-w-[50rem] md:max-w-[40rem] lg:max-w-[60rem] xl:max-w-none bg-slate-400"></div>

      <p className="absolute top-[5vw] left-20 text-[4vw] tracking-tight leading-[4vw] w-[45vw] z-10">
        <span className="absolute top-8 left-0 h-[1.5vw] aspect-square rounded-full bg-black"></span>
        <span className="pl-40">
          In the game for over 6 years, I&apos;m currently based in Ho Chi Minh
          city, working as an independent designer since July, 2022.
         </span>
      </p>
      <p className="absolute bottom-[20vw] right-20 text-right text-[4vw] tracking-tight leading-[4vw] w-[45vw] z-10">
        In the game for over 6 years, I&apos;m currently based in Ho Chi Minh
        city, working as an independent designer since July, 2022.
      </p>
    </section>
  );
};

export default HeroSection;

