import Image from "next/image";
import Link from "next/link";

const CoolAnimationTryoutsSection = () => {
  const COOL_ANIMATION_TRYOUTS = [
    {
      id: 1,
      title: "Meron",
      year: "2025",
      url: "/playground/animation-tryouts/animation-01",
      imageUrl: "/assets/images/homepage/work-section/bb-01.webp",
    },
    {
      id: 2,
      title: "Asphalt",
      year: "2025",
      url: "/playground/animation-tryouts/animation-02",
      imageUrl: "/assets/images/homepage/work-section/cw-01.webp",
    },
    {
      id: 3,
      title: "Nothing",
      year: "2025",
      url: "/playground/animation-tryouts/animation-03",
      imageUrl: "/assets/images/homepage/work-section/ff-01.webp",
    },
    {
      id: 4,
      title: "Collage",
      year: "2025",
      url: "/playground/animation-tryouts/animation-04",
      imageUrl: "/assets/images/homepage/work-section/pg-01.webp",
    },
  ];
  return (
    <div className="">
      <h3>(01) Cool Animations tryouts</h3>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-20 auto-rows-[minmax(200px,auto)] mt-10">
        {COOL_ANIMATION_TRYOUTS.map((design) => (
          <div key={design.id} className={`overflow-hidden`}>
            <Link href={design.url}>
              <Image
                src={design.imageUrl}
                alt={design.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="flex justify-between text-lg xl:text-2xl mt-2">
                <h3>{design.title}</h3>
                <p>({design.year})</p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CoolAnimationTryoutsSection;
