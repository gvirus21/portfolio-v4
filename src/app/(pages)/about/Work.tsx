import { H4 } from "@/components/ui/Typography";
import Copy from "@/components/Copy";

export const WorkSection = () => {
  return (
    <section className="lg:min-h-[80vh] lg:mt-[5rem] pt-20 px-4 sm:px-6">
      <Copy>
        <H4 className="text-5xl sm:w-[30rem] 2xl:w-[50rem] uppercase">
          Some of my Noteworthy works
        </H4>
      </Copy>

      <Copy>
        <h3 className="text-sm sm:text-base 2xl:text-xl md:w-[32rem] 2xl:w-[44rem] mt-8">
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
      image: "",
      website: "https://www.google.com",
    },
    {
      id: "bankless-website",
      name: "Bankless's Website",
      category: "Development, Design",
      year: "2023",
      image: "",
      website: "https://www.google.com",
    },
    {
      id: "forefront-website",
      name: "Forefront's Website",
      category: "Development, Design",
      year: "2023",
      image: "",
      website: "https://www.google.com",
    },
    {
      id: "codewalla-ios-app",
      name: "Codewalla",
      category: "Development",
      year: "2023",
      image: "",
      website: "https://www.google.com",
    },
  ];

  return (
    <div className="w-full max-w-7xl 2xl:max-w-full mx-auto mt-20 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6 2xl:gap-10">
        {workData.map((work) => (
          <a key={work.id} href={work.website ?? "#"} className="block">
            <div className="w-full overflow-hidden">
              <div className="w-full h-48 lg:h-[20rem] 2xl:h-[28rem] 3xl:h-[30rem] bg-gray-300">
                {/* Placeholder for variable-sized image */}
                {/* <img src={work.image} alt={work.name} /> */}
              </div>
              <div>
                <div className="flex items-start justify-between mt-3 mb-4">
                  <h4 className="text-sm 2xl:text-3xl tracking-tighter">
                    ({work.year})
                  </h4>
                  <div className="flex flex-col items-end tracking-tight">
                    <span className="text-[10px] 2xl:text-xl tracking-tighter font-medium block">
                      {work.category}
                    </span>
                    <span className="text-[10px] 2xl:text-base tracking-tighter uppercase block">
                      {work.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
