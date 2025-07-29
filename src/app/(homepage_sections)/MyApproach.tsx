import { H4 } from "../../components/ui/Text";

const approachItems = [
  {
    title: "A Simple Philosophy Quality over Quantity",
    description:
      "I approach every project with a mix of curiosity, strategy, and craft. My goal isn’t just to build websites—it’s to help brands communicate better, convert more, and create digital experiences people genuinely enjoy. Every decision, from layout to line of code, is made with intention.",
  },
  {
    title: "Performance & Emotion You Need Both",
    description:
      "A fast site that feels soulless won’t convert. A beautiful site that loads like a snail won’t be seen. That’s why I blend performance with emotion—balancing speed, responsiveness, and SEO with design choices that stir curiosity, build trust, and leave a lasting impression.",
  },
];

export const MyApproachSection = () => {
  return (
    <section className="h-[80vh] sm:h-[70vh] 2xl:h-[60vh] px-4 sm:px-10 mt-20 sm:mt-40">
      <H4 className="text-3xl sm:text-6xl capitalize font-light tracking-[-1px] ">
        My Approach.
      </H4>

      <div className="mt-10 sm:mt-20">
        {approachItems.map((item, index) => (
          <div key={index}>
            <div className="h-[0.5px] w-full bg-black mt-14" />
            <div className="flex justify-between pt-5">
              <p className="text-base sm:text-xl 2xl:text-xl w-[5rem] sm:w-[14rem] tracking-[2%]">
                {item.title}
              </p>
              <div className="">
                <p className="text-base sm:text-xl w-[14rem] sm:w-[32rem] tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyApproachSection;
