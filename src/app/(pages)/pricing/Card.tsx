import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  priceRange: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  premium?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  priceRange,
  description,
  features,
  notIncluded = [],
  premium = false,
}) => {
  return (
    <div
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
      className="relative aspect-[3/4.5] 2xl:aspect-[3/4] w-[20rem] sm:w-[30rem] md:w-[32rem] lg:w-[18rem] xl:w-[22rem] 2xl:w-[30rem] text-white p-6 md:p-8 mx-auto flex flex-col border-10 sm:border-16 lg:border-10 2xl:border-12 border-white overflow-hidden rounded-[40px] md:rounded-[60px] lg:rounded-[40px]"
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

      {/* Premium Badge */}
      {premium && (
        <div className="absolute top-4 right-4 z-50">
          <span className="bg-white text-black font-bold px-4 py-1 rounded-full text-xs shadow-lg uppercase tracking-wider font-scotch">
            Premium
          </span>
        </div>
      )}

      <div className="absolute top-10 sm:top-26 lg:top-10 left-0 px-6 md:px-8 lg:px-6 xl:px-8 z-50">
        <div className="flex justify-start items-center gap-2 bg-white px-3 py-1 rounded-full max-w-fit">
          <div className="h-2 w-2 sm:h-3 sm:w-3 lg:h-2 lg:w-2 2xl:h-3 2xl:w-3 bg-black rounded-full"></div>
          <p className="text-black text-[10px] sm:text-sm lg:text-[10px] xl:text-sm uppercase">
            {title}
          </p>
        </div>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-thin mt-4 sm:mt-8 lg:mt-4 2xl:mt-6 tracking-tighter italic">
          {priceRange}
        </p>
        <div className="mt-4 sm:mt-6 lg:mt-4 rounded-xl flex flex-col gap-4">
          <p className="sm:text-xl md:text-2xl lg:text-sm xl:text-lg 2xl:text-xl leading-tight tracking-tighter">
            {description}
          </p>

          <div>
            <h1>This is a card</h1>
          </div>

          <ul className="flex flex-col justify-between items-start mt-2 sm:mt-8 lg:mt-2 2xl:mt-4 text-sm sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-xl tracking-tight gap-1 sm:gap-2 lg:gap-0.5 2xl:gap-1">
            {features.map((feature, idx) => (
              <li className="flex items-start gap-4" key={`feature-${idx}`}>
                <span className="mt-1 text-green-400">✓</span>
                <span>{feature}</span>
              </li>
            ))}
            {notIncluded.length > 0 &&
              notIncluded.map((item, idx) => (
                <li
                  className="flex items-start gap-4 opacity-60 line-through"
                  key={`notincluded-${idx}`}
                >
                  <span className="mt-1 text-red-400">✗</span>
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
