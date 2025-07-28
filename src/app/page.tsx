"use client";

import { useState, useEffect } from "react";
import {
  HeroSection,
  TestimonialSection,
  ValueSection,
  WorkSection,
  MyApproachSection,
} from "./(homepage_sections)";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const variable = "Hello World";

const MainContent = () => (
  <main className="min-h-screen bg-background max-w-screen font-main font-light">
    <HeroSection />
    <ValueSection />
    <WorkSection />
    <TestimonialSection />
    <MyApproachSection />
    <Footer />
  </main>
);

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("hasVisitedHome");
      if (!hasVisited) {
        setShowLoader(true);
      }
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoader(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasVisitedHome", "true");
    }
  };

  return (
    <div className="relative">
      <MainContent />

      {/* Loader overlays on top */}
      {showLoader && (
        <div className="fixed inset-0 z-50">
          <Loader onComplete={handleLoadingComplete} />
          <footer>
            <li> {variable}</li>
          </footer>
        </div>
      )}
    </div>
  );
}
