import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  priceRange: string;
  description: string;
  features: string[];
}

const Card: React.FC<CardProps> = (
  {
    title,
    priceRange,
    description,
    features,
  }
) => {
  return (
    <div
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
      className="relative aspect-[3/4] w-[20rem] sm:w-[30rem] md:w-[36rem] lg:w-[18rem] xl:w-[20rem] xl:max-w-[36rem] text-white p-6 md:p-8 mx-auto flex flex-col border-10 sm:border-16 lg:border-10 2xl:border-16 border-white overflow-hidden rounded-[40px] md:rounded-[60px] lg:rounded-[40px]"
    >
      <Image
        src="/assets/images/pricing-section/card-bg.png"
        alt="pricing-card-bg"
        fill
        className="object-cover "
      />

      {/* Frosty Glass Overlay */}

      <div className="absolute inset-0 bg-black/10 backdrop-blur-xl"></div>
      {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div> */}

      <div className="absolute bottom-10 left-0 px-6 md:px-8 z-50">
        <div className="flex justify-start items-center gap-2 bg-white px-3 py-1 rounded-full max-w-fit">
          <div className="h-3 w-3 bg-black rounded-full"></div>
          <p className="text-black text-sm uppercase">{title}</p>
        </div>
        <p className="text-5xl md:text-6xl font-thin mt-4 tracking-tighter italic">
          {priceRange}
        </p>
        <div className="mt-6 rounded-xl flex flex-col gap-4">
          <p className="text-xl md:text-2xl leading-tight tracking-tighter">
            {description}
          </p>

          <ul className="flex flex-col justify-between items-start mt-4 text-lg md:text-xl tracking-tight gap-2">
            {features.map((feature, idx) => (
              <li className="flex items-start gap-4" key={idx}>
                <span className="mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
