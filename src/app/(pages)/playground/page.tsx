import { FC } from "react";
import CoolAnimationTryoutsSection from "./CoolAnimationTryoutsSection";
import WebDesignsSection from "./WebDesignsSection";
import ExperimentalWebsitesSection from "./ExperimentalWebsitesSection";

const PlaygroundPage: FC = () => {
  return (
    <div className="px-4 py-16">
      <header className="flex flex-col items-center text-center mt-[20rem] mb-96">
        <h1 className="text-9xl font-light mb-2 tracking-tight">
          My Playground
        </h1>
        <p className="text-3xl font-light tracking-tight w-[50rem] mt-60">
          Welcome to my Playground, my personal collection of random designs,
          ideas, and rejected versions of anything, that i can&apos;t find a
          place to show...
        </p>
      </header>

      <CoolAnimationTryoutsSection />
      <WebDesignsSection />
      <ExperimentalWebsitesSection />
    </div>
  );
};

export default PlaygroundPage;
