import Link from "next/link";
import AnimatedImage from "@/components/ui/AnimatedImage";

const ExperimentalWebsitesSection = () => {
  const EXPERIMENTAL_WEBSITES = [
    {
      id: 1,
      title: "Meron",
      year: "2025",
      website: "https://google.com",
      imageUrl: "/assets/images/homepage/work-section/bb-01.webp",
    },
    {
      id: 2,
      title: "Asphalt",
      year: "2025",
      website: "https://google.com",
      imageUrl: "/assets/images/homepage/work-section/cw-01.webp",
    },
    {
      id: 3,
      title: "Nothing",
      year: "2025",
      website: "https://google.com",
      imageUrl: "/assets/images/homepage/work-section/ff-01.webp",
    },
  ];

  return (
    <div className="pt-20">
      <h3>(03) Fun / Experimental Websites</h3>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-20 auto-rows-[minmax(200px,auto)] mt-10">
        {EXPERIMENTAL_WEBSITES.map((website) => (
          <div key={website.id} className={`overflow-hidden`}>
            <Link href={website.website}>
              <AnimatedImage
                src={website.imageUrl}
                alt={website.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="flex justify-between text-lg xl:text-2xl mt-2">
                <h3>{website.title}</h3>
                <p>({website.year})</p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ExperimentalWebsitesSection;
