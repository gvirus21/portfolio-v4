"use client";

import {
  HeroSection,
  PersonalInfoSection,
  ProcessSection,
  WorkSection,
} from "./index";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <PersonalInfoSection />
      <ProcessSection />
      <WorkSection />
      <Footer />
    </div>
  );
}
