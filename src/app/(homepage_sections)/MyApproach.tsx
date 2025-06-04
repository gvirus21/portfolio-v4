import { H2 } from "../../components/ui/Text";

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
    <section className="h-[70vh] 2xl:h-[60vh] px-10">
      <H2>My Approach.</H2>

      <div className="mt-20">
        {approachItems.map((item, index) => (
          <div key={index}>
            <div className="h-[0.5px] w-full bg-black mt-14" />
            <div className="flex justify-between pt-5">
              <p className="text-xl 2xl:text-xl w-[14rem] tracking-[2%]">
                {item.title}
              </p>
              <div className="w-5/12">
                <p className="text-xl w-[32rem] tracking-wide">
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
