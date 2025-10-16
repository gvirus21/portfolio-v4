import Link from "next/link";
import { H4 } from "@/components/ui/Typography";
import Copy from "@/components/Copy";
import AnimatedImage from "@/components/ui/AnimatedImage";
import useCursorState from "@/store/useCursorState";

const IMG_DIR = "/assets/images/about/work";

export const WorkSection = () => {
  const { setCursorState } = useCursorState();

  return (
    <section className="pt-20 lg:pt-[10em] 2xl:pt-[14rem] 3xl:pt-[18rem] lg:pb-[5rem] px-4 sm:px-6">
      <Copy>
        <H4
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="text-5xl sm:w-[40rem] md:text-5xl md:w-[32rem] lg:text-6xl xl:text-7xl 3xl:text-8xl lg:w-[40rem] xl:w-[50rem] 3xl:w-[60rem] uppercase"
        >
          Some of My Noteworthy Works
        </H4>
      </Copy>

      <Copy>
        <h3
          onMouseEnter={() => setCursorState("sm-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="text-base md:text-lg lg:text-xl xl:text-2xl md:w-[36rem] lg:w-[44rem] xl:w-[50rem] 3xl:w-[60rem] xl:font-light mt-10 lg:mt-16 xl:mt-12 3xl:mt-16"
        >
          Throughout my career, I have worked with some of the most Ambitious
          and fun brands in the industry, here are some of my favourite ones.
        </h3>
      </Copy>
      <MasonryGrid />
    </section>
  );
};

export default WorkSection;

const MasonryGrid = () => {
  interface Project {
    id: string;
    name: string;
    category: string;
    year: string;
    image: string;
    website: string;
  }

  const workData: Project[] = [
    {
      id: "playgrounds-website",
      name: "Playground's Website",
      category: "Development",
      year: "2023",
      image: `${IMG_DIR}/pg-01.webp`,
      website: "https://playgrounds.network/",
    },
    {
      id: "bankless-website",
      name: "Bankless's Website",
      category: "Development, Design",
      year: "2023",
      image: `${IMG_DIR}/bb-01.webp`,
      website: "https://www.bankless.com/",
    },
    {
      id: "forefront-website",
      name: "Forefront's Website",
      category: "Development, Design",
      year: "2023",
      image: `${IMG_DIR}/ff-01.webp`,
      website: "https://forefront.mirror.xyz/",
    },
    {
      id: "codewalla-ios-app",
      name: "Codewalla",
      category: "Development",
      year: "2023",
      image: `${IMG_DIR}/cw-01.webp`,
      website: "https://www.codewalla.com/",
    },
  ];

  const { setCursorState, setCursorText } = useCursorState();

  return (
    <div className="w-full mt-20 lg:mt-28 xl:mt-24 3xl:mt-28">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-10 2xl:gap-12">
        {workData.map((work) => (
          <Link
            onMouseEnter={() => setCursorText("Open")}
            onMouseLeave={() => setCursorText("")}
            key={work.id}
            href={work.website ?? "#"}
            className="block"
          >
            <div className="w-full overflow-hidden">
              <div className="flex flex-col justify-center h-32 lg:h-[14rem] 3xl:h-[24rem] bg-gray-200 relative overflow-hidden">
                <AnimatedImage
                  src={work.image}
                  alt={work.name}
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <div className="flex items-start justify-between mt-3 mb-4">
                  <h4
                    onMouseEnter={() => setCursorState("sm-hovered")}
                    onMouseLeave={() => setCursorState("regular")}
                    className="text-xs xs:text-sm xl:text-xl tracking-tighter"
                  >
                    ({work.year})
                  </h4>
                  <div className="flex flex-col items-end space-y-1 xl:space-y-0">
                    <span
                      onMouseEnter={() => setCursorState("sm-hovered")}
                      onMouseLeave={() => setCursorState("regular")}
                      className="text-[10px] xl:text-lg tracking-tighter font-medium block"
                    >
                      {work.category}
                    </span>
                    <span
                      onMouseEnter={() => setCursorState("sm-hovered")}
                      onMouseLeave={() => setCursorState("regular")}
                      className="text-[10px] xl:text-base tracking-tighter uppercase block text-right"
                    >
                      {work.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
