import PillButton from "@/components/ui/buttons/PillButton";
import {
  DisplayMediumText,
  DisplaySmallText,
} from "@/components/ui/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Copy from "@/components/Copy";

const OtherQuestions = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const firstLineWidth = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["60%", "100%"]
  );
  const secondLineWidth = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ["60%", "100%"]
  );
  const thirdLineWidth = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ["60%", "100%"]
  );
  const forthLineWidth = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ["60%", "100%"]
  );
  const fifthLineWidth = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    ["60%", "100%"]
  );
  const QA_PAIRS = [
    {
      id: 1,
      question: "Why should I choose you?",
      answer:
        "I’ve been working in the industry for 5 years with dozens of international startups as both a developer and designer. I’ve built products in teams and also worked solo for reputed brands across AI, Web3, and design sectors. I prioritize working on a handful of projects, making sure each one gets the expert attention it deserves.",
      animatedLineWidth: firstLineWidth,
    },
    {
      id: 2,
      question: "What is the pricing for a website?",
      answer:
        "Pricing depends on scope, but most projects start at $3,500 and scale based on features, complexity, and timeline.",
      animatedLineWidth: secondLineWidth,
    },
    {
      id: 3,
      question: "How long does it take to build a website?",
      answer:
        "On average, a standard website takes 2–5 weeks. More complex projects may take longer depending on revisions and features.",
      animatedLineWidth: thirdLineWidth,
    },
    {
      id: 4,
      question: "Can you go cheaper than the mentioned prices?",
      answer:
        "Yes, I do offer pre-built website template solutions if your budget is tight. Here we might not go full crazy on custom design but will do the job for you without sacrificing on quality or functionality.",
      animatedLineWidth: forthLineWidth,
    },
    {
      id: 5,
      question: "Do you provide ongoing support after the website is launched?",
      answer:
        "Absolutely. I provide 2 years of free tech support and maintenance for every website. For site updates or adding new features, the level of support depends on the plan you choose.",
      animatedLineWidth: fifthLineWidth,
    },
  ];

  return (
    <section
      ref={container}
      className="relative flex flex-col lg:flex-row justify-between min-h-[40vh] 3xl:text-base w-screen max-w-full mt-20 lg:mt-40 pb-20"
    >
      <div className="2xl:w-3/12 3xl:w-5/12 pt-6">
        <Copy>
          <DisplaySmallText className="text-lg md:text-sm lg:text-lg w-[6rem] leading-6">
            Any Other Questions?
          </DisplaySmallText>
        </Copy>
      </div>

      <div className="flex flex-col justify-start lg:w-[75%]">
        <div className="w-full">
          {QA_PAIRS.map((qa) => (
            <div key={qa.id}>
              <motion.div
                style={{
                  width: qa.animatedLineWidth,
                }}
                className="h-[1px] w-full bg-foreground rounded-full mt-4"
              />

              <div className="flex flex-col sm:flex-row justify-between mt-6 mb-8 sm:mb-16 lg:mb-20">
                <Copy>
                  <DisplaySmallText className="sm:w-[13rem] text-2xl sm:text-base lg:w-[16rem] font-light tracking-tight mr-5">
                    <span>({String(qa.id).padStart(2, "0")}) </span>
                    {qa.question}
                  </DisplaySmallText>
                </Copy>
                <Copy>
                  <DisplaySmallText className="mt-4 sm:mt-0 w-[95%] sm:w-[20rem] md:w-[24rem] xl:w-[26rem] 2xl:w-[32rem] sm:mr-5 md:mr-10 xl:mr-[8vw] 2xl:mr-[8vw] text-base sm:text-base font-light tracking-tight">
                    {qa.answer}
                  </DisplaySmallText>
                </Copy>
              </div>
            </div>
          ))}
        </div>
        <div className="w-24">
          <PillButton link="/contact">Contact</PillButton>
        </div>
      </div>
    </section>
  );
};

export default OtherQuestions;
