import React from "react";
import { H2 } from "../components/ui/Headings";

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
  return (
    <section className="min-h-[50vh] w-full px-10 mt-[10rem]">
      <H2>Clients Success Stories</H2>

      <div className="flex mx-auto gap-4 py-0 mb-40 rounded-2xl mt-24">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-between min-h-[20rem] h-auto min-w-[26rem] p-6 pr-10 mt-0 mx-2 rounded-xl bg-gray-200"
          >
            <p className="text-md font-light mb-2">{testimonial.testimonial}</p>
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
    </section>
  );
};

export default TestimonialSection;
