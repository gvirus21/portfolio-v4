import { H2 } from "../components/ui/Headings";

export const MyApproachSection = () => {
  return (
    <section className="h-[80vh] px-10">
      <H2>My Approach</H2>

      <div className="h-[1px] w-full bg-black mt-20" />
      <div className="flex justify-between pt-10 pb-20">
        <p className="text-2xl w-[16rem] tracking-[2%]">
          A Simple Philosophy Quality over Quantity
        </p>
        <p className="text-lg w-6/12">
          Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et
          massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla.
        </p>
      </div>
      <div className="h-[1px] w-full bg-black" />
      <div className="flex justify-between pt-10 mt-10 pb-20">
        <p className="text-2xl w-[16rem] tracking-[2%]">
          Performance & Emotion You Need Both
        </p>
        <p className="text-lg w-6/12">
          Personal Intro - sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla.Personal Intro - sit amet consectetur adipiscing elit Ut et
          massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla.
        </p>
      </div>
    </section>
  );
};

export default MyApproachSection;
