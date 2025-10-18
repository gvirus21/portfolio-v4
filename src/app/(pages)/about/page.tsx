"use client";

import {
  HeroSection,
  PersonalInfoSection,
  ProcessSection,
  WorkSection,
} from "./index";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen font-main">
      <HeroSection />
      <PersonalInfoSection />
      <ProcessSection />
      <WorkSection />
    </div>
  );
}
