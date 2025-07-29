"use client";

import { H4 } from "../../components/ui/Text";
import PillButton from "../../components/ui/buttons/PillButton";

const deliverySteps = [
  {
    id: 1,
    content:
      "I approach every project with a mix of curiosity, strategy, and craft. My goal isn’t just to build websites—it’s to help brands communicate better, convert more, and create digital experiences people genuinely enjoy. Every decision, from layout to line of code, is made with intention.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    content:
      "Rather than offering one-size-fits-all solutions, I adapt to what each project truly needs. I collaborate closely, ask the right questions, and bring design and development together to create work that not only looks beautiful but delivers real business impact.",
    image: "/placeholder.svg?height=600&width=800",
  },
];

export const ValueSection = () => {
  return (
    <section className="pt-16 px-4 md:px-8 mt-20 sm:mt-60">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-between">
          <H4 className="text-5xl sm:text-8xl">How I Deliver Value</H4>
          <div className="flex flex-col justify-between items-start w-11/12 sm:w-5/12 mt-10 sm:mt-16 mr-[14rem]">
            <div className="space-y-5">
              {deliverySteps.map((step) => (
                <p
                  key={step.id}
                  className="text-lg 2xl:text-xl text-black tracking-wide"
                >
                  {step.content}
                </p>
              ))}
            </div>
            <div className="flex justify-end mt-5 sm:mt-10">
              <PillButton link="/contact">Contact</PillButton>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-20 sm:mt-44 relative aspect-[4/3] sm:aspect-[16/9] w-full 2xl:w-8/12 mx-auto overflow-hidden bg-gray-300"></div>
      </div>
    </section>
  );
};

export default ValueSection;
