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
    <div className="flex">
      {/* Left Side - Sticky */}
      <div className="w-1/2 p-12 flex flex-col justify-start sticky top-0 h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-start mt-0">
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-7xl font-light mb-8 inline-block tracking-tight leading-tight">
              Website design, application
              <br />
              design, interactive design,
              <br />
              prototyping, ecommerce
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side - Natural Scroll */}
      <div className="flex flex-col items-end w-1/2 pr-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex justify-between items-start h-[50vh] w-7/12 mt-28"
          >
            <span className="text-5xl font-light mt-4 tracking-tighter">
              {step.id}
            </span>

            <div className="">
              <h2 className="text-6xl font-light mt-4 mb-8">{step.title}</h2>
              <div className="mt-0">
                <div className="text-xs mb-2 ">{step.label}</div>
                <div className="text-xs uppercase tracking-wider">
                  {step.footer.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
              <p className="leading-relaxed max-w-lg mt-10 text-xl">
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
