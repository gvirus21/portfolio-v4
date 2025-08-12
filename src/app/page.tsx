"use client";

import { useState, useEffect } from "react";
import {
  HeroSection,
  TestimonialSection,
  ValueSection,
  WorkSection,
  MyApproachSection,
} from "@/app/(pages)/(homepage_sections)";
import Loader from "../components/Loader";

const MainContent = () => (
  <main className="min-h-screen bg-background max-w-screen font-main font-light">
    <HeroSection />
    <ValueSection />
    <WorkSection />
    <TestimonialSection />
    <MyApproachSection />
  </main>
);

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const win = window as unknown as {
      __appInit?: boolean;
      __entryPath?: string;
    };

    if (!win.__appInit) {
      win.__appInit = true;
      win.__entryPath = window.location.pathname;

      setShowLoader(window.location.pathname === "/");
    } else {
      setShowLoader(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className="relative">
      {showLoader && (
        <div className="fixed inset-0 z-50">
          <Loader onComplete={handleLoadingComplete} />
        </div>
      )}

      <MainContent />
    </div>
  );
}
