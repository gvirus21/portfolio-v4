import { H2 } from "../components/ui/Text";

const approachItems = [
  {
    title: "A Simple Philosophy Quality over Quantity",
    description:
      "Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
  {
    title: "Performance & Emotion You Need Both",
    description:
      "Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
];

export const MyApproachSection = () => {
  return (
    <section className="h-[70vh] 2xl:h-[60vh] px-10">
      <H2>My Approach</H2>

      {approachItems.map((item, index) => (
        <div key={index}>
          <div className="h-[1px] w-full bg-black mt-20" />
          <div className="flex justify-between pt-10 pb-10 2xl:pb-20">
            <p className="text-xl 2xl:text-2xl w-[16rem] tracking-[2%]">
              {item.title}
            </p>
            <p className="text-lg w-6/12">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyApproachSection;
