import Image from "next/image";
import React from "react";

export const WorkSection = () => {
  const Works = [
    {
      id: 1,
      title: "Playgrounds.xyz",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "BanklessDAO",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "ForefrontDAO",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Codewalla",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="min-h-[80vh] mt-0 lg:mt-[10rem]">
      <h2 className="text-3xl lg:text-8xl lg:w-7/12 font-light text-center mt-20 mb-10 mx-auto leading-[2rem] lg:leading-[5rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a
        incidunt rem distinctio excepturi explicabo.
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center overflow-x-auto w-full lg:w-10/12 gap-x-20 mx-auto mt-20 pb-28">
        {Works.map((work) => (
          <div
            key={work.id}
            className="flex flex-col items-center w-full"
          >
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
