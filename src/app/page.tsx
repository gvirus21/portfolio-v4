import {
  HeroSection,
  TestimonialSection,
  ValueSection,
  WorkSection,
  MyApproachSection,
  Footer,
} from "./(homepage_sections)";
// import WorkSection from "./(homepage_sections)/Work";

export default function Home() {
  return (
    <div className="min-h-screen bg-white max-w-screen font-main font-light">
      <HeroSection />
      <ValueSection />
      <WorkSection />
      {/* <WorkSection /> */}
      <TestimonialSection />
      <MyApproachSection />
      <Footer />
    </div>
  );
}
