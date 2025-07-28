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
      // Check if this is a page reload or direct URL visit
      const isPageReload =
        window.performance.getEntriesByType("navigation")[0]?.type ===
          "reload" ||
        window.performance.navigation?.type ===
          window.performance.navigation?.TYPE_RELOAD;

      // Check if user came from external source (no referrer or different domain)
      const isExternalNavigation =
        !document.referrer ||
        !document.referrer.includes(window.location.origin);

      // Check if this is the first page load in the session
      const isFirstVisit = !sessionStorage.getItem("appNavigated");

      // Show loader if it's a reload, external navigation, or first visit
      if (isPageReload || isExternalNavigation || isFirstVisit) {
        setShowLoader(true);
      }

      // Mark that user has navigated within the app
      sessionStorage.setItem("appNavigated", "true");
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className="relative">
      <MainContent />

      {/* Loader overlays on top */}
      {showLoader && (
        <div className="fixed inset-0 z-50">
          <Loader onComplete={handleLoadingComplete} />
        </div>
      )}
    </div>
  );
}
