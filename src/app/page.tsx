import {
  HeroSection,
  TestimonialSection,
  ValueSection,
  WorkSection,
  MyApproachSection,
  Footer,
} from "./(homepage_sections)";

export default function Home() {
  return (
    <div className="h-screen bg-white max-w-screen font-main font-light">
      <HeroSection />
      <ValueSection />
      <WorkSection />
      <TestimonialSection />
      <MyApproachSection />
      <Footer />
    </div>
  );
}
