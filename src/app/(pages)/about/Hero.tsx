import Image from "next/image";
import Copy from "@/components/Copy";
import useCursorState from "@/store/useCursorState";

export const HeroSection = () => {
  const { setCursorState } = useCursorState();

  return (
    <section className="relative h-screen md:max-h-[32rem] lg:max-h-[36rem] xl:max-h-none md:mt-20 max-w-screen overflow-hidden">
      <div className="absolute top-1/2 md:top-[40%] xl:top-[43%] 2xl:top-[40%] 3xl:top-[45%] right-1/2 translate-x-1/2 md:translate-x-0 md:right-[6vw] lg:right-[3vw] -translate-y-1/2 aspect-[4/3] w-[300%] md:w-[70vw] object-cover overflow-hidden">
        {/* TODO: should have 3 images that changes on the percentage of scroll */}
        <Image
          src="/assets/images/about/hero/img-03.jpg"
          alt="hero"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <Copy delay={0.8}>
        <p
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="absolute right-4 left-4 sm:left-10 xl:left-10 3xl:left-20 bottom-10 xs:bottom-10 md:bottom-10 lg:bottom-20 xl:bottom-40 3xl:bottom-48 xl:font-light text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 3xl:text-8xl md:w-[75%] lg:w-[80%] xl:w-[80%] 3xl:w-[80%] lg:leading-[3rem] xl:leading-[3.5rem] 3xl:leading-[6.5rem] tracking-tight"
        >
          <span className="mr-10 md:mr-16 lg:mr-16 xl:mr-24 3xl:mr-40" />
          In the game for over 5 years, I&apos;m currently based in the beach
          city of Vizag, India. I work as an independent website designer and
          developer.
        </p>
      </Copy>
    </section>
  );
};

export default HeroSection;
