"use client";

import { DisplayMediumText } from "@/components/ui/Typography";
import Copy from "@/components/Copy";
import BlackDot from "./BlackDot";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const ProcessSection = () => {
  const steps = [
    {
      id: "(a)",
      label: "01-02",
      title: "Direction",
      content:
        "From the beginning, it is crucial to have a thorough understanding of the client and the brief. This stage involves defining  project objectives, functional specifications, audience and competitor research, and the proper combination of typography, color, composition, motion, and brand assets are all explored. This, in my opinion, is the cornerstone for determining the best course for design.",
      footer: ["EXPERTISE", "AND PROCESS"],
    },
    {
      id: "(b)",
      label: "02-03",
      title: "Design",
      content:
        "With the Direction stage as a guide, I look into ideas and apporaches to produce the optimum design. My goal  in this phase is to create experiences that showcase the characteristics of each project while looking elegant and simple to use. By working closely with clients and users, I ensure the final product is shaped by your valuable feedback.",
      footer: ["CREATIVE", "AND VISUAL"],
    },
    {
      id: "(c)",
      label: "03-04",
      title: "Interaction",
      content:
        "I make designs come to life through carefully considered interactions and user flows. I make sure that navigation is intuitive, transitions are smooth, and micro-interactions are stimulating and make interacting with the design enjoyable and natural for every click, hover, and scroll.",
      footer: ["USER EXPERIENCE", "AND FLOW"],
    },
    {
      id: "(d)",
      label: "04-04",
      title: "Development",
      content:
        "Here I turn my designs into fully responsive and pixel-perfect websites and apps. I utilize modern technologies and best practices to produce clean maintainable code that performs in all devices and browsers; every line of code is crafted with performance, accessibility, and scalability in mind.",
      footer: ["IMPLEMENTATION", "AND DELIVERY"],
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row mt-10 px-4 sm:px-6">
      {/* Left Side - Sticky */}
      <div className="xl:h-screen w-full pt-14 md:pt-16 flex flex-col justify-between sticky top-0">
        <div className="flex-1 flex flex-col justify-between mt-0">
          <div className="flex justify-between items-start lg:mb-8">
            <Copy>
              <h1 className="relative text-2xl md:text-3xl xl:text-4xl 3xl:text-6xl mb-8 inline-block tracking-[-0.09rem] md:tracking-[-0.12rem] xl:tracking-[-0.2rem] 3xl:tracking-[-0.35rem] leading-tight 3xl:leading-18">
                <BlackDot className="top-2.5 md:top-3.5 3xl:top-6" />
                <span className="mr-8 md:mr-10 lg:mr-12 xl:mr-14 3xl:mr-20" />
                Website design, Application
                <br />
                Design,{" "}
                <span className="italic --font-light">interactive design,</span>
                <br />
                Prototyping, Ecommerce.
              </h1>
            </Copy>
          </div>

          <LottieAnimation />
        </div>
      </div>

      {/* Right Side - Natural Scroll */}
      <div className="flex flex-col lg:items-end xl:w-[60%] xl:pr-16 3xl:pr-[20rem] pt-10 xl:pt-60">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex justify-between items-start mb-12 lg:w-full xl:max-w-[50rem] ${
              index === steps.length - 1 ? "lg:mb-0" : "lg:mb-24"
            }`}
          >
            <span className="text-xl lg:text-2xl --font-thin mt-4 xl:mt-5 tracking-tighter xl:mr-6">
              {step.id}
            </span>
            <div className="w-[18rem] xs:w-[20rem] md:w-[28rem] lg:w-[32rem] 3xl:w-[40rem]">
              <h4 className="text-2xl lg:text-4xl xl:text-3xl mt-4 mb-4 lg:mb-8 md:tracking-tight">
                {step.title}
              </h4>
              <div>
                <div className="text-xs mb-2">{step.label}</div>
                <div className="text-xs uppercase tracking-wider">
                  {step.footer.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
              <DisplayMediumText className="text-base md:text-xs lg:text-base xl:text-base font-light pr-6 lg:pr-0 mt-10 lg:mt-10">
                {step.content}
              </DisplayMediumText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;

const LottieAnimation = () => (
  <div className="absolute xl:relative top-13 xs:top-14 right-0 xl:top-0 xl:block aspect-4/3 w-1/2 md:w-[30%] xl:w-1/2 3xl:w-1/3 overflow-hidden opacity-80 md:opacity-100">
    <div className="absolute inset-0 scale-125 origin-center">
      <DotLottieReact
        src="https://lottie.host/8475bfbc-b72e-458a-abd4-2860e6f4ab70/kZuGafPuiS.json"
        loop
        autoplay
        className="h-full object-cover"
      />
    </div>
  </div>
);
