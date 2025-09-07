"use client";

// TODO: "make responsive for md screen"

import { DisplaySmallText } from "@/components/ui/Typography";

const PRICING_CARDS = [
  {
    id: 1,
    title: "Custom Website",
    priceRange: "$3,500 - $12,000",
    description:
      "A fully custom website designed and built specifically for you...",
    features: [
      "Custom design phase",
      "Custom coded development",
      "Blog/articles section",
      "CMS if required",
      "Mobile-first responsive code",
    ],
    notIncluded: [
      "eCommerce functionality",
      "Advanced automations and analytics available additionally",
    ],
  },
  {
    id: 2,
    title: "Custom E-commerce",
    priceRange: "$4,000 - $20,000",
    description:
      "A business website is perfect for small businesses or startups looking for a professional online presence with essential features.",
    features: [
      "Everything from before plus...",
      "Conversion-optimized design",
      "Custom-coded Shopify theme",
      "Advanced product sorting + filtering",
      "Blog/newsletter section",
    ],
    notIncluded: ["Post-purchase upsell systems available extra"],
  },
  {
    id: 3,
    title: "AWWWARDS Worthy",
    priceRange: "$20,000+",
    description:
      "A high-converting landing page designed for campaigns, product launches, or lead generation.",
    features: [
      "Pixel-perfect development",
      "Complete UX mapping",
      "Full-page transitions",
      "Interactive scroll-based animations",
      "Advanced performance optimizations",
    ],
    notIncluded: ["WebGL or 3d integrations"],
    premium: true,
  },
];

const PricingTable = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between min-h-[40vh] 3xl:text-base w-screen max-w-full lg:mt-20 xl:mt-40">
      <div className="2xl:w-3/12 3xl:w-5/12 pt-6">
        <DisplaySmallText className="text-lg md:text-sm lg:text-lg">
          Our Pricing
        </DisplaySmallText>
      </div>

      <div className="md:w-[80%] xl:w-9/12 2xl:w-10/12 3xl:w-9/12">
        {PRICING_CARDS.map((card) => (
          <div key={card.id}>
            <div className="h-[0.5px] w-full bg-slate-400 rounded-full mt-4" />

            <div className="flex justify-between  mt-6 mb-8 sm:mb-16 lg:mb-20">
              <div className="flex justify-between w-full sm:w-auto">
                <DisplaySmallText className="w-[9rem] lg:w-[16rem] sm:text-sm md:text-sm">
                  <span>({String(card.id).padStart(2, "0")}) </span>

                  {card.title}
                </DisplaySmallText>
                <div className="ml-4 sm:ml-10 md:ml-14 lg:ml-10 xl:ml-28 2xl:ml-40 3xl:ml-[16rem] w-[14rem] sm:w-auto">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <DisplaySmallText className="sm:text-sm md:text-sm mb-1">
                        {feature}
                      </DisplaySmallText>
                    </div>
                  ))}
                  <p className="text-lg mt-10 sm:hidden">{card.priceRange}</p>
                </div>
              </div>
              <DisplaySmallText className="hidden sm:block text-xs sm:text-sm md:text-sm">
                {card.priceRange}
              </DisplaySmallText>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
