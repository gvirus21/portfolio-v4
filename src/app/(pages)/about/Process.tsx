import React from "react";

export const ProcessSection = () => {
  const steps = [
    {
      id: "(a)",
      label: "01-02",
      title: "Direction",
      content:
        "In my opinion, deep understanding of the brief and client is a must in the starting point. Determining project goals and functional specifications, knowing competitors and target audiences, making researches will be taken at this stage in order to find a precise combination between Typography, Color, Composition, Motion and brand assets. For me, this process is the foundation for solving business problems and discovering a right direction for the perfect design.",
      footer: ["EXPERTISE", "AND PROCESS"],
    },
    {
      id: "(b)",
      label: "02-03",
      title: "Design",
      content:
        "After collecting a right mood and tone in the Direction stage, my mission at this point is connecting the dots and making various versions to find the proper design. My goal is always about creating an experience that not only emphasizes the characteristics of each project but also elegant and satisfied to use. To get that, I have to make sure to work closely with clients and users to get helpful feedbacks and insights for the evolution.",
      footer: ["CREATIVE", "AND VISUAL"],
    },
    {
      id: "(c)",
      label: "03-04",
      title: "Interaction",
      content:
        "Bringing designs to life through thoughtful interactions and user experience flows. This stage focuses on creating intuitive navigation, smooth transitions, and engaging micro-interactions that enhance the overall user journey. I ensure every click, hover, and scroll feels natural and purposeful, making the interface not just beautiful but truly functional and enjoyable to use.",
      footer: ["USER EXPERIENCE", "AND FLOW"],
    },
    {
      id: "(d)",
      label: "04-04",
      title: "Development",
      content:
        "Transforming designs into pixel-perfect, responsive websites and applications. Using modern technologies and best practices, I ensure clean, maintainable code that performs excellently across all devices and browsers. From front-end implementation to backend integration, every line of code is crafted with attention to performance, accessibility, and scalability.",
      footer: ["IMPLEMENTATION", "AND DELIVERY"],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row mt-10 px-4 sm:px-6">
      {/* Left Side - Sticky */}
      <div className="w-full pt-14 md:pt-16 flex flex-col justify-start sticky top-0 lg:h-[70vh]">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-start mt-0">
          <div className="flex justify-between items-start lg:mb-8 bg-background">
            <h1 className="relative text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-light mb-8 inline-block tracking-tight leading-tight">
              <span className="mr-6 md:mr-8 xl:mr-10 3xl:mr-14">
                <div className="absolute top-3 xl:top-4 3xl:top-5 left-0 w-3 h-3 xl:h-4 xl:w-4 3xl:h-6 3xl:w-6 bg-black rounded-full" />
              </span>{" "}
              Website design, application
              <br />
              Design,{" "}
              <span className="font-scotch font-regular">
                interactive design
              </span>
              ,
              <br />
              Prototyping, Ecommerce.
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side - Natural Scroll */}
      <div className="flex flex-col lg:items-end lg:w-[60%] lg:pr-16 3xl:pr-[10rem] lg:pt-60">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex justify-between items-start mb-12 lg:w-full max-w-[50rem] ${
              index === steps.length - 1 ? "lg:mb-0" : "lg:mb-10"
            }`}
          >
            <span className="text-xl lg:text-2xl font-light mt-4 tracking-tighter">
              {step.id}
            </span>
            <div className="w-[18rem] lg:w-[36rem]">
              <h2 className="text-2xl lg:text-3xl font-regular mt-4 mb-4 lg:mb-8 ml-1 ">
                {step.title}
              </h2>
              <div>
                <div className="text-xs mb-2">{step.label}</div>
                <div className="text-xs uppercase tracking-wider">
                  {step.footer.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
              <p className="pr-6 lg:pr-0 lg:leading-relaxed mt-6 lg:mt-10 text-sm xl:text-xl">
                {step.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
