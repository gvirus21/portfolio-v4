"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  //   const lenis = useLenis((lenis) => {
  //     console.log(lenis);
  //   });

  return <ReactLenis root>{children}</ReactLenis>;
}
