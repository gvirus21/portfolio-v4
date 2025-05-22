"use client";

import { H2 } from "../components/ui/Headings";
import PillButton from "../components/ui/PillButton";

const deliverySteps = [
  {
    id: 1,
    content:
      "Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla. Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    content:
      "Sit amet sapien fringilla. Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
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
                <p key={step.id} className="text-xl text-black tracking-[-2%]">
                  {step.content}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <PillButton title="Contact" link="/contact"></PillButton>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-44 relative aspect-[16/9] w-8/12 mx-auto overflow-hidden bg-gray-300"></div>
      </div>
    </section>
  );
};

export default ValueSection;
