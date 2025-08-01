"use client";

import PillButton from "@/components/ui/buttons/PillButton";
import Card from "./Card";

const PRICING_CARDS = [
  {
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

const PricingHeader = () => (
  <div className="flex flex-col items-center gap-0 sm:gap-4 md:gap-6 mt-16 sm:mt-20 lg:-mt-10 2xl:mt-20 px-4 sm:px-0">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-thin text-black tracking-tight sm:tracking-tighter mt-0 sm:mt-10 md:mt-20 lg:mt-40 xl:mt-60 text-center leading-6 sm:leading-auto">
      <span className="font-light">Every</span> Project{" "}
      <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl ml-1 sm:ml-2 leading-16">
        is
      </span>{" "}
      <span className="font-scotch">Unique</span>
    </h1>

    <div className="text-lg sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl tracking-tight sm:tracking-tighter mt-14 sm:mt-10 md:mt-14 lg:mt-8 xl:mt-10 2xl:mt-24 w-full text-black sm:max-w-[80vw] md:max-w-4xl lg:max-w-[32rem] xl:max-w-[44rem] 2xl:max-w-[50rem]">
      <p>
        There are so many variables to consider when deciding how much to spend
        on a website, We&apos;ve tried to simplify it with these average prices.
      </p>
      <p className="mt-6 sm:mt-8 lg:mt-4 xl:mt-8 italic">
        <span className="font-bold">*Please note:</span> These are just
        averages, and the final price will depend on the scope of the project.
        And we will do our best to accommodate your budget.
      </p>
    </div>
  </div>
);

const PricingCards = () => (
  <div className="flex flex-col lg:flex-row justify-center items-center mt-16 md:mt-40 lg:mt-28 xl:mt-32 2xl:mt-44 gap-8 md:gap-12 lg:gap-6 h-auto px-2 sm:px-6 lg:px-40">
    {PRICING_CARDS.map((card) => (
      <Card
        key={card.title}
        title={card.title}
        priceRange={card.priceRange}
        description={card.description}
        features={card.features}
        notIncluded={card.notIncluded}
        {...(card.premium ? { premium: card.premium } : {})}
      />
    ))}
  </div>
);

const LowerBudgetSection = () => (
  <>
    <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-7xl tracking-tight text-center lg:text-left sm:tracking-tighter mt-20 sm:mt-40 italic px-2">
      Need a Website on a Lower Budget?
    </h2>
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-6 sm:mt-10 pb-20 sm:pb-40 px-2 sm:px-0 md:max-w-[40rem] lg:max-w-[55rem] xl:w-[60rem] 2xl:w-[65rem] xl:max-w-none md:mx-auto">
      <p className="text-base sm:text-2xl md:text-2xl lg:text-xl 2xl:text-2xl w-full tracking-tight sm:tracking-tighter text-center lg:text-left md:max-w-[40rem] lg:max-w-[30rem] xl:max-w-[40rem] lg:leading-6 2xl:leading-8">
        Working with a tighter budget? We offer great options starting from
        $1,000 to $2,000, and we&apos;re committed to helping you build a
        website that fits your needs and your budget.
      </p>
      <div className="flex justify-center md:block w-full md:w-auto">
        <PillButton
          className="mt-4 sm:mt-6 md:mt-16 lg:mt-2 xl:mt-5"
          link="/contact"
        >
          Contact us
        </PillButton>
      </div>
    </div>
  </>
);

const PricingPage = () => {
  return (
    <div className="relative w-full min-h-screen max-w-[100vw] pt-10 px-2 sm:px-4 md:px-20 lg:px-0 overflow-x-hidden flex flex-col items-center">
      <PricingHeader />
      <PricingCards />
      <LowerBudgetSection />
    </div>
  );
};

export default PricingPage;

{
  /* <div className="relative w-full flex justify-center items-center my-12">
{/* Blurry gradient circle */
}
{
  /* <div
aria-hidden="true"
className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 "
style={{
width: "38rem",
height: "38rem",
background: "radial-gradient(circle at 50% 50%, #f89595 0%, #f5b873 100%)",
filter: "blur(120px)",
opacity: 0.3,
}}
/>
</div> */
}
