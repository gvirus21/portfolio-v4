import { H2 } from "../components/ui/Text";

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
    clientName: "John Doe",
    profileLink: "https://www.example.com",
    testimonial:
      "Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
  {
    id: 2,
    clientName: "Jane Doe",
    profileLink: "https://www.example.com",
    testimonial:
      "Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
  {
    id: 3,
    clientName: "Jane Doe",
    profileLink: "https://www.example.com",
    testimonial:
      "Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
  {
    id: 4,
    clientName: "Jane Doe",
    profileLink: "https://www.example.com",
    testimonial:
      "Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
];

export const TestimonialSection = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="min-h-[50vh] w-full px-10 mt-[10rem]">
      <style>{hideScrollbarStyles}</style>
      <H2>Clients Success Stories</H2>

      <div className="overflow-hidden mt-24 mb-40">
        <div className="flex gap-4 auto-scroll-container">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col justify-between min-h-[20rem] h-auto min-w-[26rem] p-6 pr-10 mx-2 rounded-xl bg-gray-200 flex-shrink-0"
            >
              <p className="text-md font-light mb-2">
                {testimonial.testimonial}
              </p>
              <p className="text-sm font-medium">
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
