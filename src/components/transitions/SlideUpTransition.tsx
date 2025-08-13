"use client";

import React, { useEffect, useState } from "react";
import { useAnimationState } from "@/store/useAnimationState";

const OVERLAY_ID = "loader-overlay";

export const SlideUpTransition = () => {
  const [displayLabel, setDisplayLabel] = useState("");

  const { pageLabel } = useAnimationState();

  useEffect(() => {
    if (pageLabel) {
      setDisplayLabel(pageLabel);
    }
  }, [pageLabel, displayLabel]);

  return (
    <div
      id={OVERLAY_ID}
      className="fixed inset-0 bg-[#202020] z-[999] translate-y-full flex items-center justify-center"
    >
      <p className="text-4xl text-white font-thin tracking-tighter">
        {displayLabel}.
      </p>
    </div>
  );
};

export default SlideUpTransition;
