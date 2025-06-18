import React from "react";
export const HeroSection = () => {
  return (
    <section className="relative min-h-[150vh]">
      <p className="absolute top-[20%] left-[10%] text-[6rem] leading-[5.5rem] w-[55%] font-light text-black uppercase align-baseline z-50">
        <span className="absolute inline-block w-[30rem]"></span>
        In the game for over 6 years, I&apos;m currently based in Ho Chi Minh
        city, working as an independent designer since July, 2022
      </p>
      {/* Hero image */}
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] h-[80vh] aspect-[5/3] bg-slate-400"></div>

      {/* Text */}
      <p className="absolute bottom-[20%] right-[10%] text-right text-[5rem] leading-[5.5rem] w-[40%] font-light text-black uppercase align-baseline">
        Enthusiastic about crafting ideas, visual elements, motion and
        typography into memorable creations.
      </p>
    </section>
  );
};

export default HeroSection;
