"use client";

import {
  HeroSection,
  // PersonalInfoSection,
  ProcessSection,
  WorkSection,
} from "./index";
import GetInTouch from "../pricing/GetInTouch";


export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      {/* <PersonalInfoSection /> */}
      <ProcessSection />
      <WorkSection />
      <GetInTouch />
    </div>
  );
}
