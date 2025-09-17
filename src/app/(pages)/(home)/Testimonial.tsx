import {
  H3,
  DisplaySmallText,
  CaptionSmallText,
} from "@/components/ui/Typography";

const hideScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .auto-scroll-container {
    animation: scroll 30s linear infinite;
  }
  
  .auto-scroll-container:hover {
    animation-play-state: paused;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }
`;

const testimonials = [
  {
    id: 1,
    clientName: "Christophe Vauclair",
    profileLink: "https://www.example.com",
    message:
      "Gourav joined our team in early 2023 as our first and only frontend developer, and I had the pleasure of working closely with him for over a year. He took full ownership of our frontend—from landing pages to product interfaces—and handled it all with great skill and dedication. His deep knowledge of the frontend stack turned our ideas into working products. Startups are fast-paced and unpredictable, but Gourav consistently adapted to shifting priorities, delivered under pressure, and kept our timelines on track. Beyond his technical abilities, his positive attitude brought great energy to the team, even during tough stretches. Whether it’s a fast-moving prototype or a complex product, I confidently recommend Gourav for any frontend development role.",
  },
  {
    id: 2,
    clientName: "active-glacier-instinct",
    profileLink: "https://www.example.com",
    message:
      "Gourav is a fast learner, highly reliable, and a pleasure to collaborate with. His ability to grasp complex concepts quickly and turn them into clean, efficient code makes him a standout engineer. He brings a positive attitude to every project and consistently delivers high-quality work. Simply put, working with Gourav makes the development process smoother and more enjoyable.",
  },
  {
    id: 3,
    clientName: "Suvendu sekhar Sahoo",
    profileLink: "https://www.example.com",
    message:
      "I have had the pleasure of working with Gourav, and I can confidently say he is exceptional with frontend technologies. His expertise in crafting animations and creating minimalist designs is truly impressive. Gourav's attention to detail ensures not only aesthetically pleasing interfaces but also a stable and high-quality codebase. His commitment to maintaining code quality throughout the development process is admirable. I highly recommend Gourav for any project requiring top-notch frontend skills and a keen eye for design.",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="min-h-[50vh] w-full mt-24 sm:mt-36 px-4 sm:px-10 ">
      <style>{hideScrollbarStyles}</style>
      <H3 className="lg:w-full 3xl:ml-5 text-[2.5rem] xl:text-[5rem] 3xl:text-[7rem] tracking-[-2px] xl:tracking-[-8px] 3xl:tracking-[-6px] leading-12 xl:leading-normal">
        Client Success Stories
      </H3>
      <DesktopTestimonial />
      <MobileTestimonial />
    </section>
  );
};

const DesktopTestimonial = () => {
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="hidden md:flex w-full mx-auto overflow-hidden mt-12">
      <div className="flex gap-4 auto-scroll-container items-start">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex flex-col justify-between h-auto p-6 pr-10 mx-2 flex-shrink-0"
          >
            <DisplaySmallText className="w-[32rem]">
              {testimonial.message}
            </DisplaySmallText>

            <a
              href={testimonial.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light italic mt-10 link-underline-anim w-fit"
              style={{ "--underline-height": "0.5px" } as React.CSSProperties}
            >
              <CaptionSmallText>{testimonial.clientName}</CaptionSmallText>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileTestimonial = () => {
  return (
    <div className="flex flex-col gap-6 mt-12 md:hidden">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex flex-col justify-between h-auto p-6 rounded-xl"
        >
          <DisplaySmallText className="mb-2">
            {testimonial.message}
          </DisplaySmallText>

          <a
            href={testimonial.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-light italic mt-6"
          >
            <CaptionSmallText>{testimonial.clientName}</CaptionSmallText>
          </a>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSection;
