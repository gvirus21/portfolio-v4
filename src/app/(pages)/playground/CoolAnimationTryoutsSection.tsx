import Link from "next/link";
import AnimatedImage from "@/components/ui/AnimatedImage";
import useCursorState from "@/store/useCursorState";
import Copy from "@/components/Copy";
import { useFirstVisit } from "@/hooks/useFirstVisit";

const CoolAnimationTryoutsSection = () => {
  const { setCursorState, setCursorText } = useCursorState();

  const FIRST_VISIT_KEY = "first-visit-cool-animation";
  const firstVisit = useFirstVisit(FIRST_VISIT_KEY);

  const textAnimationDelay = firstVisit ? 0.8 : 1.4;
  const imageAnimationDelay = firstVisit ? 0.8 : 1.4;

  const COOL_ANIMATION_TRYOUTS = [
    {
      id: 1,
      title: "Meron",
      year: "2025",
      url: "/playground/animation-tryouts/animation-01",
      animationDelay: imageAnimationDelay,
      imageUrl: "/assets/images/homepage/work-section/bb-01.webp",
    },
    {
      id: 2,
      title: "Asphalt",
      year: "2025",
      url: "/playground/animation-tryouts/animation-02",
      animationDelay: imageAnimationDelay,
      imageUrl: "/assets/images/homepage/work-section/cw-01.webp",
    },
    {
      id: 3,
      title: "Nothing",
      year: "2025",
      url: "/playground/animation-tryouts/animation-03",
      animationDelay: imageAnimationDelay,
      imageUrl: "/assets/images/homepage/work-section/ff-01.webp",
    },
    {
      id: 4,
      title: "Collage",
      year: "2025",
      url: "/playground/animation-tryouts/animation-04",
      animationDelay: 0.3,
      imageUrl: "/assets/images/homepage/work-section/pg-01.webp",
    },
  ];
  return (
    <div className="font-main tracking-tighter">
      <Copy delay={textAnimationDelay + 0.1}>
        <h3>(01) Cool Animations Tryouts</h3>
      </Copy>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-20 auto-rows-[minmax(200px,auto)] mt-10">
        {COOL_ANIMATION_TRYOUTS.map((cool_animation) => (
          <div key={cool_animation.id} className={`overflow-hidden`}>
            <Link
              href={cool_animation.url}
              onMouseEnter={() => setCursorText("Open")}
              onMouseLeave={() => setCursorText("")}
            >
              <AnimatedImage
                src={cool_animation.imageUrl}
                alt={cool_animation.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
                animationDelay={cool_animation.animationDelay}
              />
              <div className="flex justify-between text-lg xl:text-xl 3xl:text-2xl mt-2">
                <h3
                  onMouseEnter={() => setCursorState("sm-hovered")}
                  onMouseLeave={() => setCursorState("regular")}
                >
                  {cool_animation.title}
                </h3>
                <p
                  onMouseEnter={() => setCursorState("sm-hovered")}
                  onMouseLeave={() => setCursorState("regular")}
                >
                  {" "}
                  ({cool_animation.year})
                </p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CoolAnimationTryoutsSection;
