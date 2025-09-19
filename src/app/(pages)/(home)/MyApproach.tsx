import { DisplayMediumText, H4 } from "@/components/ui/Typography";
import Copy from "@/components/Copy";

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
    <section className="min-h-[50rem] md:min-h-[40rem] h-[85vh] sm:h-[80vh] md:h-[70vh] lg:h-[55vh] 2xl:h-[50vh] px-4 sm:px-10 mt-20 lg:mt-0 xl:mt-20">
      <H4>My Approach.</H4>

      <div className="mt-10 sm:mt-20">
        {approachItems.map((item, index) => (
          <div key={index}>
            <div className="h-[0.5px] w-full bg-black mt-14" />
            <div className="flex justify-between pt-5">
              <Copy>
                <DisplayMediumText className="text-base sm:text-xl 2xl:text-xl w-[7rem] sm:w-[14rem] tracking-[2%]">
                  {item.title}
                </DisplayMediumText>
              </Copy>
              <div className="md:w-[50%]">
                <Copy>
                  <DisplayMediumText className="w-[14rem] sm:w-[32rem] md:w-[20rem] xl:w-[28rem] 3xl:w-[32rem] tracking-wide">
                    {item.description}
                  </DisplayMediumText>
                </Copy>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyApproachSection;
