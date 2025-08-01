import React from "react";
export const HeroSection = () => {
  return (
    <section className="relative h-[30rem] xl:min-h-[150vh] mt-20">
      {/* Hero image Container */}
      <div className="absolute top-[10%] lg:top-[30%] left-[50%] -translate-x-[50%] h-[24rem] lg:h-[80vh] aspect-[3/4] bg-slate-400">
        {/* TODO: Add Image  */}
        {/* inner container */}
        <div className="relative h-full">
          <p className="absolute top-[-10%] lg:top-[20%] left-[-10%] lg:left-[10%] w-[14rem] lg:w-[55%] text-[1.5rem] lg:text-[6rem] leading-[1.5rem] lg:leading-[5.5rem] font-light text-black uppercase align-baseline z-50 tracking-tight">
            <span className="absolute inline-block w-[30rem]"></span>
            In the game for over 6 years, I&apos;m currently based in Ho Chi
            Minh city, working as an independent designer since July, 2022
          </p>
          {/* Text */}
          <p className="absolute bottom-[-10%] right-[-10%] lg:right-[10%] text-right text-[1.5rem] lg:text-[6rem] leading-[1.5rem] lg:leading-[5.5rem] w-[14rem] lg:w-[40%] font-light text-black uppercase align-baseline">
            Enthusiastic about crafting ideas, visual elements, motion and
            typography into memorable creations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
