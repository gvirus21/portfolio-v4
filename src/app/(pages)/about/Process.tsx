import { DisplayMediumText } from "@/components/ui/Typography";
import Copy from "@/components/Copy";
import BlackDot from "./BlackDot";

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
    <div className="flex flex-col lg:flex-row mt-10 px-4 sm:px-6">
      {/* Left Side - Sticky */}
      <div className="w-full pt-14 md:pt-16 flex flex-col justify-start sticky top-0 lg:h-[70vh]">
        <div className="flex-1 flex flex-col justify-start mt-0">
          <div className="flex justify-between items-start lg:mb-8 bg-background">
            <Copy>
              <h1 className="relative text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-light mb-8 inline-block tracking-tight leading-tight">
                <BlackDot className="top-2.5 md:top-3.5 3xl:top-4.5" />
                <span className="mr-8 md:mr-10 lg:mr-12 xl:mr-14 3xl:mr-24" />
                Website design, application
                <br />
                Design,{" "}
                <span className="italic font-light">interactive design,</span>
                <br />
                Prototyping, Ecommerce.
              </h1>
            </Copy>
          </div>
        </div>
      </div>

      {/* Right Side - Natural Scroll */}
      <div className="flex flex-col lg:items-end lg:w-[60%] lg:pr-16 3xl:pr-[20rem] lg:pt-60">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex justify-between items-start mb-12 lg:w-full max-w-[50rem] ${
              index === steps.length - 1 ? "lg:mb-0" : "lg:mb-10"
            }`}
          >
            <span className="text-xl lg:text-2xl font-thin mt-4 tracking-tighter">
              {step.id}
            </span>
            <div className="w-[18rem] lg:w-[36rem]">
              <h4 className="text-2xl lg:text-4xl font-light mt-4 mb-4 lg:mb-8 ml-1 ">
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
              <DisplayMediumText className="font-light pr-6 lg:pr-0 mt-6 lg:mt-10">
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
