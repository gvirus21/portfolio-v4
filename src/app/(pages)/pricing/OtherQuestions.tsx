import PillButton from "@/components/ui/buttons/PillButton";
import {
  DisplayMediumText,
  DisplaySmallText,
} from "@/components/ui/Typography";
import React from "react";

const OtherQuestions = () => {
  const QA_PAIRS = [
    {
      id: 1,
      question: "What is the pricing for a website?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, error. Dolore alias excepturi velit impedit asperiores praesentium voluptatem ducimus mollitia? Rerum ea fugit eveniet quaerat totam, accusantium dolores quidem distinctio!",
    },
    {
      id: 2,
      question: "What is the pricing for a website?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, error. Dolore alias excepturi velit impedit asperiores praesentium voluptatem ducimus mollitia? Rerum ea",
    },
    {
      id: 3,
      question: "What is the pricing for a website?",
      answer: "The pricing for a website is $1000.",
    },
  ];

  return (
    <section className="relative flex flex-col lg:flex-row justify-between min-h-[40vh] 3xl:text-base w-screen max-w-full mt-20 lg:mt-40 pb-20">
      <div className="2xl:w-3/12 3xl:w-5/12 pt-6">
        <DisplaySmallText className="text-lg md:text-sm lg:text-lg w-[6rem] leading-6">
          Any Other Questions?
        </DisplaySmallText>
      </div>

      <div className="flex flex-col justify-start lg:w-[75%]">
        <div className="w-full">
          {QA_PAIRS.map((qa) => (
            <div key={qa.id}>
              <div className="h-[0.5px] w-full bg-slate-400 rounded-full mt-4" />

              <div className="flex flex-col sm:flex-row justify-between mt-6 mb-8 sm:mb-16 lg:mb-20">
                <DisplayMediumText className="sm:w-[13rem] text-2xl sm:text-base md:text-lg lg:w-[16rem] font-light tracking-tight mr-5">
                  <span>({String(qa.id).padStart(2, "0")}) </span>
                  {qa.question}
                </DisplayMediumText>
                <DisplayMediumText className="mt-4 sm:mt-0 w-[95%] sm:w-[20rem] md:w-[24rem] xl:w-[26rem] 2xl:w-[32rem] sm:mr-5 md:mr-10 xl:mr-[8vw] 2xl:mr-[10vw] text-base sm:text-base md:text-lg font-light tracking-tight">
                  {qa.answer}
                </DisplayMediumText>
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
