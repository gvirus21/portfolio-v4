"use client";

import { H2 } from "../components/ui/Headings";
// import { useState, useEffect, useCallback } from "react";
// import NextImage from "next/image";
import PillButton from "../components/ui/PillButton";

// Define the delivery process steps with content matching the screenshot
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
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = useCallback(() => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === deliverySteps.length - 1 ? 0 : prevIndex + 1
  //   );
  // }, []);

  // Auto-transition effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000); //

  //   return () => clearInterval(interval);
  // }, [nextSlide]);

  return (
    <section className="py-16 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <H2>How I Deliver Value</H2>
        <div className="flex justify-between items-center">
          <div className="space-y-4 mt-10 px-10 w-10/12">
            {deliverySteps.map((step) => (
              <p key={step.id} className="text-xl text-black tracking-[-2%]">
                {step.content}
              </p>
            ))}
          </div>

          {/* Contact button that matches the screenshot */}
          <div className="flex justify-end mt-4">
            <PillButton title="Contact" link="/contact"></PillButton>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-20 relative aspect-[16/9] w-11/12 mx-auto overflow-hidden bg-gray-300"></div>
        {/* <div className="mt-12 relative aspect-[16/9] w-full overflow-hidden">
          <div className="relative h-full w-full">
            {deliverySteps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <NextImage
                  src={step.image}
                  alt="Portfolio work example"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ValueSection;
