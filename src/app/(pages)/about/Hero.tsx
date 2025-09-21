import Image from "next/image";
import Copy from "@/components/Copy";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import BlackDot from "./BlackDot";

export const HeroSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative h-screen xs:h-[80vh] xl:h-[180vh] lg:min-h-[75rem] 3xl:min-h-[160rem]  md:mt-20">
      <div className="absolute top-1/2 xs:top-[60%] md:top-1/2 3xl:top-[52%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-[80vw] sm:w-[60vw] xl:w-[60vw] aspect-[3/4] max-w-[26rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[60rem] xl:max-w-none bg-slate-400 object-cover overflow-hidden">
        <Image
          src="/assets/images/about/hero/img-03.jpg"
          alt="hero"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <Copy delay={0.8}>
        <p className="absolute top-20 xs:top-32 sm:top-40 md:top-10 lg:top-20 3xl:top-40 left-[5vw] w-[60%] sm:w-[50vw] md:w-[50vw] lg:w-[50vw] text-2xl sm:text-[3.5vw] lg:text-[3.5vw] tracking-tight leading-[1.6rem] sm:leading-[3.5vw] md:leading-[3.8vw] lg:leading-[4vw] z-10 text-black">
          <BlackDot className="xl:h-[1.5vw] 3xl:h-[1.6vw] top-2 md:top-2 lg:top-3.5 xl:top-5 3xl:top-9 left-0 3xl:ml-8" />
          <span className="mr-10 md:mr-12 lg:mr-16 xl:mr-24 3xl:mr-40" />
          In the game for over 6 years, I&apos;m currently based in Ho Chi Minh
          city, working as an independent designer since July, 2022.
        </p>
      </Copy>
      <Copy delay={!isDesktop ? 0.8 : 0}>
        <p className="w-[60%] sm:w-[50vw] md:w-[50vw] lg:w-[50vw] absolute bottom-[20vw] xs:bottom-6 sm:-bottom-5 md:bottom-20 lg:bottom-28  3xl:bottom-[26rem] right-[5vw] text-2xl sm:text-[3.5vw] lg:text-[3.5vw] tracking-tight leading-[1.6rem] sm:leading-[3.5vw] md:leading-[3.8vw] lg:leading-[4vw] z-10 text-right">
          In the game for over 6 years, I&apos;m currently based in Ho Chi Minh
          city, working as an independent designer since July, 2022.
        </p>
      </Copy>
    </section>
  );
};

export default HeroSection;
