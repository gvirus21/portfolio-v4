import React from "react";

export const PersonalInfoSection = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="flex justify-between items-start w-8/12 mx-auto">
        <div className="h-[60rem] aspect-[3/4] bg-slate-400"></div>
        <div className="text-4xl font-light text-black w-6/12">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At rerum
            minima minus expedita magnam aut animi iste, quis illo itaque sint
            sapiente quidem dolor dolorem voluptatem excepturi reprehenderit
            exercitationem vitae nam fugit illum quasi facilis? Ex eum sunt
            consequuntur tempora ducimus, doloribus tenetur autem natus
            incidunt, ad quos. Repellat, quae.
          </p>

          <p className="text-3xl mt-20">
            nam fugit illum quasi facilis? Ex eum sunt consequuntur tempora
            ducimus, doloribus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
