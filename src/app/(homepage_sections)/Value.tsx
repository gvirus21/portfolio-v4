"use client";

import { H2 } from "../../components/ui/Text";
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
    <section className="py-16 px-4 md:px-8 mt-60">
      <div className="w-full">
        <div className="flex justify-between">
          <H2>How I Deliver Value</H2>
          <div className="flex justify-between items-center w-6/12">
            <div className="space-y-4">
              {deliverySteps.map((step) => (
                <p
                  key={step.id}
                  className="text-lg 2xl:text-xl text-black tracking-wide"
                >
                  {step.content}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <PillButton link="/contact">Contact</PillButton>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-44 relative aspect-[16/9] w-10/12 2xl:w-8/12 mx-auto overflow-hidden bg-gray-300"></div>
      </div>
    </section>
  );
};

export default ValueSection;
