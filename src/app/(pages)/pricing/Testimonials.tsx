"use client";

import Copy from "@/components/Copy";
import { CaptionSmallText, DisplaySmallText } from "@/components/ui/Typography";

const TESTIMONIALS = [
  {
    id: 1,
    text: [
      "Gourav joined our team in early 2023 as our first and only frontend developer and I had the pleasure of working closely with him over the course of more than a year.",
      "During his time at Playgrounds, Gourav was responsible for developing and maintaining our entire frontend, from our landing page to our many products' interfaces, a job he performed admirably well.",
      "His deep understanding of the frontend stack was critical in making our ideas become reality. Working for a startup is not always easy, but as his direct supervisor, I was constantly impressed by his ability to adapt and shift gears as our priorities changed and products were dropped and new projects started.",
    ],
    name: "Christophe Vauclair",
    position: "CTO & Founder, Playgrounds",
  },
  {
    id: 2,
    text: [
      "I have had the pleasure of working with Gourav, and I can confidently say he is exceptional with frontend technologies.",
      "His expertise in crafting animations and creating minimalist designs is truly impressive. Gourav's attention to detail ensures not only aesthetically pleasing interfaces but also a stable and high-quality codebase.",
      "His commitment to maintaining code quality throughout the development process is admirable. I highly recommend Gourav for any project requiring top-notch frontend skills and a keen eye for design.",
    ],
    name: "Suvendu",
    position: "Senior Backend Engineer, VISA",
  },
  {
    id: 3,
    text: [
      "Gourav is quick to pick things up, easy to work with, and a great engineer.",
      "He understood our project details thoroughly and delivered the website ahead of schedule. Not only did he ensure a seamless conversion of our designs into a fully functional website, but he also optimized it for fast loading speeds.",
      "Working with Gourav was fantastic, and I highly recommend him for any website project.",
    ],
    name: "Active-glacier-instinct",
    position: "Frontend Developer, BanklessDAO",
  },
  {
    id: 4,
    text: [
      "We hired Gourav for a website redesign and to build a web-based in-house company tool. He successfully delivered both projects on time and even provided a free website audit to improve SEO and engagement. I highly recommend working with this mad lad!",
    ],
    name: "Sahil",
    position: "A Local Transport Business Owner",
  },
];

const Testimonials = () => {
  return (
    <section className="relative min-h-[30vh] w-screen max-w-full flex flex-col md:flex-row mt-20 overflow-x-hidden">
      <div className="w-3/12 pt-6">
        <Copy>
          <DisplaySmallText className="text-lg md:text-sm lg:text-lg w-[10rem]">
            Our Customers Describes us best
          </DisplaySmallText>
        </Copy>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 justify-between w-full overflow-x-scroll scrollbar-hide mt-4 md:mt-0">
        <div className="md:hidden h-[0.5px] w-full bg-slate-400 rounded-full" />

        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-between w-full sm:min-w-[24rem] xl:min-w-[28rem] 2xl:min-w-[28rem] min-h-0 3xl:max-h-auto 3xl:h-[30rem] mt-6 md:ml-10 rounded-xl"
          >
            <div className="space-y-3">
              {testimonial.text.map((paragraph, index) => (
                <Copy key={index}>
                  <CaptionSmallText className="font-light leading-relaxed">
                    {paragraph}
                  </CaptionSmallText>
                </Copy>
              ))}
            </div>

            <div className="mt-6 pt-4">
              <Copy>
                <CaptionSmallText className="text-sm font-light">
                  {testimonial.name}
                </CaptionSmallText>
              </Copy>
              <Copy>
                <CaptionSmallText className="text-gray-600 text-xs italic">
                  {testimonial.position}
                </CaptionSmallText>
              </Copy>
            </div>

            {index < TESTIMONIALS.length - 1 && (
              <div className="md:hidden h-[0.5px] w-full bg-slate-400 rounded-full mt-10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
