import React from "react";

export const PersonalInfoSection = () => {
  return (
    <section className="relative w-full mt-0 md:mt-20 bg-[#DADADA] pt-14 md:pt-0">
      <div className="flex flex-col-reverse sm:flex-row items-end sm:items-start justify-between lg:justify-between w-full">
        <div className="w-full sm:w-[16rem] md:w-[20rem] lg:w-[26rem] xl:h-screen xl:w-auto aspect-[3/4] bg-slate-400 mt-10 sm:mt-0"></div>
        <p className="relative text-xl sm:text-lg md:text-2xl xl:text-4xl 2xl:text-5xl text-right mt-10 lg:mt-12 leading-tight w-[20rem] sm:w-[20rem] md:w-[24rem] lg:w-[32rem] xl:w-[40rem] 2xl:w-[55rem] px-4 sm:px-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At rerum
          minima minus expedita magnam. At rerum minima minus expedita magnam.
        </p>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
