import React from "react";

export const PersonalInfoSection = () => {
  return (
    <section className="w-full mt-20 lg:mt-32">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-8/12 mx-auto gap-y-10">
        <div className="text-[1.8rem] lg:text-4xl leading-[1.8rem] font-light text-black w-full lg:w-6/12">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At rerum
            minima minus expedita magnam aut animi iste, quis illo itaque sint
            sapiente quidem dolor dolorem voluptatem excepturi reprehenderit
            exercitationem vitae nam fugit.
          </p>
        </div>
        <div className="w-full lg:h-[60rem] aspect-[3/4] bg-slate-400"></div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
