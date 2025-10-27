"use client";

import Copy from "@/components/Copy";
import { CaptionSmallText, DisplaySmallText } from "@/components/ui/Typography";
import useCursorState from "@/store/useCursorState";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import wheelGestures from "embla-carousel-wheel-gestures";

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
    profileLink: "https://www.linkedin.com/in/christophe-v-825286161/",
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
    profileLink: "https://www.linkedin.com/in/suvendu-sekhar-sahoo/",
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
    profileLink: "https://x.com/ActivateGlacier",
  },
  {
    id: 4,
    text: [
      "We hired Gourav for a website redesign and to build a web-based in-house company tool. He successfully delivered both projects on time and even provided a free website audit to improve SEO and engagement. I highly recommend working with this mad lad!",
    ],
    name: "Sahil",
    position: "A Local Transport Business Owner",
    profileLink: "https://www.instagram.com/_ksahil_/",
  },
];

const Testimonials = () => {
  const { setCursorState } = useCursorState();

  return (
    <section className="relative min-h-[30vh] w-screen max-w-full flex flex-col md:flex-row md:justify-between mt-20 overflow-x-hidden">
      <div className="w-3/12 pt-6">
        <Copy>
          <DisplaySmallText
            className="text-lg md:text-sm lg:text-lg w-[10rem]"
            onMouseEnter={() => setCursorState("sm-hovered")}
            onMouseLeave={() => setCursorState("regular")}
          >
            Our Customers Describes us best
          </DisplaySmallText>
        </Copy>
      </div>

      <div className="md:w-[75%] lg:w-[80%]  mt-4 md:mt-0">
        <div className="md:hidden h-[0.5px] w-full bg-slate-400 rounded-full mb-6" />

        <DesktopTestimonials />
        <MobileTestimonials />
      </div>
    </section>
  );
};

export default Testimonials;

const DesktopTestimonials = () => {
  const { setCursorState, setCursorText } = useCursorState();
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: true,
    },
    [wheelGestures()]
  );

  return (
    <div className="hidden md:block overflow-hidden" ref={emblaRef}>
      <div className="flex space-x-4 sm:space-x-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="flex-none flex flex-col justify-between w-[90vw] sm:w-[24rem] xl:w-[28rem] 2xl:w-[28rem] min-h-0 3xl:max-h-auto 3xl:h-[24rem] rounded-xl"
          >
            <div className="space-y-3">
              {testimonial.text.map((paragraph, idx) => (
                <Copy key={idx}>
                  <CaptionSmallText className="font-light leading-relaxed">
                    {paragraph}
                  </CaptionSmallText>
                </Copy>
              ))}
            </div>

            <div className="mt-6 pt-4">
              <Copy>
                <Link
                  href={testimonial.profileLink}
                  style={
                    { "--underline-height": "0.5px" } as React.CSSProperties
                  }
                  target="_blank"
                  className="link-underline-anim w-fit"
                >
                  <CaptionSmallText
                    className="text-sm font-light"
                    onMouseEnter={() => {
                      setCursorState("sm-hovered");
                      setCursorText("Visit Profile");
                    }}
                    onMouseLeave={() => {
                      setCursorState("regular");
                      setCursorText("");
                    }}
                  >
                    {testimonial.name}
                  </CaptionSmallText>
                </Link>
              </Copy>
              <Copy>
                <CaptionSmallText
                  className="text-gray-600 text-xs italic"
                  onMouseEnter={() => setCursorState("sm-hovered")}
                  onMouseLeave={() => setCursorState("regular")}
                >
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
    </div>
  );
};

const MobileTestimonials = () => {
  return (
    <div className="flex flex-col md:hidden space-y-10">
      {TESTIMONIALS.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className="flex-none flex flex-col justify-between w-[90vw] rounded-xl"
        >
          <div className="space-y-3">
            {testimonial.text.map((paragraph, idx) => (
              <Copy key={idx}>
                <CaptionSmallText className="font-light leading-relaxed">
                  {paragraph}
                </CaptionSmallText>
              </Copy>
            ))}
          </div>

          <div className="mt-6 pt-4">
            <Copy>
              <Link
                href={testimonial.profileLink}
                style={{ "--underline-height": "0.5px" } as React.CSSProperties}
                target="_blank"
                className="link-underline-anim w-fit"
              >
                <CaptionSmallText className="text-sm font-light">
                  {testimonial.name}
                </CaptionSmallText>
              </Link>
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
  );
};
