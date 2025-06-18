import { H4 } from "../../components/ui/Text";

const hideScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .auto-scroll-container {
    animation: scroll 20s linear infinite;
  }
  
  .auto-scroll-container:hover {
    animation-play-state: paused;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const testimonials = [
  {
    id: 1,
    clientName: "Christophe Vauclair",
    profileLink: "https://www.example.com",
    testimonial:
      "Gourav joined our team in early 2023 as our first and only frontend developer, and I had the pleasure of working closely with him for over a year. He took full ownership of our frontend—from landing pages to product interfaces—and handled it all with great skill and dedication. His deep knowledge of the frontend stack turned our ideas into working products. Startups are fast-paced and unpredictable, but Gourav consistently adapted to shifting priorities, delivered under pressure, and kept our timelines on track. Beyond his technical abilities, his positive attitude brought great energy to the team, even during tough stretches. Whether it’s a fast-moving prototype or a complex product, I confidently recommend Gourav for any frontend development role.",
  },
  {
    id: 2,
    clientName: "active-glacier-instinct",
    profileLink: "https://www.example.com",
    testimonial:
      "Gourav is a fast learner, highly reliable, and a pleasure to collaborate with. His ability to grasp complex concepts quickly and turn them into clean, efficient code makes him a standout engineer. He brings a positive attitude to every project and consistently delivers high-quality work. Simply put, working with Gourav makes the development process smoother and more enjoyable.",
  },
  {
    id: 3,
    clientName: "Suvendu sekhar Sahoo",
    profileLink: "https://www.example.com",
    testimonial:
      "I have had the pleasure of working with Gourav, and I can confidently say he is exceptional with frontend technologies. His expertise in crafting animations and creating minimalist designs is truly impressive. Gourav's attention to detail ensures not only aesthetically pleasing interfaces but also a stable and high-quality codebase. His commitment to maintaining code quality throughout the development process is admirable. I highly recommend Gourav for any project requiring top-notch frontend skills and a keen eye for design.",
  },
];

export const TestimonialSection = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="min-h-[50vh] w-full px-10 mt-60">
      <style>{hideScrollbarStyles}</style>
      <H4 className="text-[6rem] tracking-[-6px]">Clients Success Stories</H4>

      <div className="overflow-hidden mt-24">
        <div className="flex gap-4 auto-scroll-container items-start">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col justify-between h-auto p-6 pr-10 mx-2 rounded-xl bg-gray-200 flex-shrink-0"
            >
              <p className="text-lg font-light mb-2 w-[32rem]">
                {testimonial.testimonial}
              </p>

              <div>
                <h1>Hello people how are you doing???</h1>
              </div>
              <p className="text-sm font-medium mt-10">
                <a
                  href={testimonial.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light italic"
                >
                  {testimonial.clientName}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
