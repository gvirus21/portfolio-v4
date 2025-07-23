"use client";

// import Image from "next/image";
import PillButton from "@/components/ui/buttons/PillButton";
import Card from "./Card";
import Footer from "@/components/Footer";

const PRICING_CARDS = [
  {
    title: "Custom Website",
    priceRange: "$3500 - $8000",
    description:
      "A custom website is crafted from the ground up—uniquely designed and tailored to your business, ensuring you stand out online.",
    features: [
      "Fully responsive design for all devices",
      "Custom UI/UX tailored to your brand",
      "SEO optimization for better visibility",
      "Fast performance and easy content management",
    ],
  },
  {
    title: "Custom E-commerce",
    priceRange: "$4000 - $10000",
    description:
      "A business website is perfect for small businesses or startups looking for a professional online presence with essential features.",
    features: [
      "Responsive design",
      "Basic SEO setup",
      "Contact forms and lead capture",
      "Easy-to-manage content",
    ],
  },
  {
    title: "AWWWARDS Worthy",
    priceRange: "$20,000+",
    description:
      "A high-converting landing page designed for campaigns, product launches, or lead generation.",
    features: [
      "Conversion-focused design",
      "Mobile optimized",
      "Fast loading times",
      "Integrated analytics",
    ],
  },
];

const PricingHeader = () => (
  <div className="flex flex-col items-center gap-0 sm:gap-4 md:gap-6 mt-0 sm:mt-20 lg:-mt-10 2xl:mt-20 px-4 sm:px-0">
    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-thin text-white tracking-tight sm:tracking-tighter mt-6 sm:mt-10 mix-blend-difference text-center">
      <span className="font-light">Every</span> Project{" "}
      <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl ml-1 sm:ml-2">
        is
      </span>{" "}
      <span className="font-scotch">Unique</span>
    </h1>
    <div className="text-base sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl tracking-tight sm:tracking-tighter mt-6 sm:mt-10 w-full text-white mix-blend-difference max-w-[80vw] md:max-w-4xl lg:max-w-[32rem] xl:max-w-[44rem]">
      <p>
        There are so many variables to consider when deciding how much to spend
        on a website, We&apos;ve tried to simplify it with these average prices.
      </p>
      <p className="mt-6 sm:mt-8 lg:mt-5 xl:mt-8 italic">
        <span className="font-bold">*Please note:</span> These are just
        averages, and the final price will depend on the scope of the project.
        And we will do our best to accommodate your budget.
      </p>
    </div>
  </div>
);

const PricingCards = () => (
  <div className="flex flex-col lg:flex-row justify-center items-center mt-16 md:mt-40 lg:mt-32 gap-8 md:gap-12 lg:gap-6 h-auto px-2 sm:px-6 lg:px-40">
    {PRICING_CARDS.map((card) => (
      <Card
        key={card.title}
        title={card.title}
        priceRange={card.priceRange}
        description={card.description}
        features={card.features}
      />
    ))}
  </div>
);

const LowerBudgetSection = () => (
  <>
    <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-7xl tracking-tight text-center lg:text-left sm:tracking-tighter mt-20 sm:mt-40 italic px-2">
      Need a Website on a Lower Budget?
    </h2>
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-6 sm:mt-10 pb-20 sm:pb-40 px-2 sm:px-0 md:max-w-[40rem] lg:max-w-[55rem] xl:w-[60rem] xl:max-w-none md:mx-auto">
      <p className="text-base sm:text-2xl md:text-3xl lg:text-xl w-full tracking-tight sm:tracking-tighter text-center lg:text-left md:max-w-[40rem] lg:max-w-[40rem] xl:max-w-[40rem]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsum
        iusto! Laboriosam est nisi harum veritatis impedit debitis nemo nihil
        voluptate consequuntur inventore commodi, vel provident ut officiis cum
        ipsam earum quia, amet dolore molestias vero itaque? Alias, perspiciatis
        qui?
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
    <>
      <div className="relative w-full min-h-screen max-w-[100vw] mt-24 sm:mt-44 px-2 sm:px-6 md:px-20 lg:px-0 overflow-x-hidden flex flex-col items-center">
        {/* optional header image */}
        <PricingHeader />
        <PricingCards />
        <LowerBudgetSection />
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;

{
  // Header image - may add later
  /* <div  className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[100vw] aspect-video -z-20 overflow-hidden">
    <div className="h-full w-full bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 z-10 backdrop-blur-sm"></div>
    <Image
      src="/assets/images/pricing-section/header.jpg"
      alt="header"
      fill
      className="object-cover"
    />
  </div> */
}
