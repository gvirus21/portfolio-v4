"use client";

// import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full mx-auto pt-44 px-10">
      {/* Text Content */}
      <div className="max-w-[38rem] mb-16 mt-[10rem]">
        <h1 className="text-lg md:text-3xl lg:text-2xl leading-8">
          I&apos;m Gourav Kumar, a Web designer & Developer based in India. I
          like to solve design problems for businesses & Startups to elevate
          their business needs via website.
        </h1>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-40">
        {/* First Image */}
        <div className="relative aspect-[4/3] w-full bg-gray-200">
          {/* <Image
            src="/workspace-image.jpg" // Replace with your actual image path
            alt="Developer working at desk"
            fill
            className="object-cover rounded-lg"
            priority
          /> */}
        </div>

        {/* Second Image */}
        <div className="relative aspect-[4/3] w-full bg-gray-200">
          {/* <Image
            src="/sunset-coding.jpg" // Replace with your actual image path
            alt="Developer coding at sunset"
            fill
            className="object-cover rounded-lg"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
