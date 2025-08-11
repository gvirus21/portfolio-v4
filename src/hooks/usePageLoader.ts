import { wait } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";

const ENTER_DURATION = 1000;
const HOLD_DURATION = 100;
const EXIT_DURATION = 1000;
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";
const OVERLAY_ID = "loader-overlay";

export const usePageLoader = () => {
  const router = useTransitionRouter();

  const pageAnimation = async () => {
    const overlay = document.getElementById(OVERLAY_ID) as HTMLElement | null;
    if (!overlay) return;

    // Clean start: cancel any running animations and remove initial hiding class
    try {
      overlay.getAnimations?.().forEach((a) => a.cancel());
    } catch {}
    overlay.classList.remove("translate-y-full");

    // Enter
    const enter = overlay.animate(
      [{ transform: "translateY(100%)" }, { transform: "translateY(0%)" }],
      { duration: ENTER_DURATION, easing: EASING, fill: "forwards" }
    );

    try {
      await enter.finished;
      await wait(HOLD_DURATION);

      // Exit
      const exit = overlay.animate(
        [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
        { duration: EXIT_DURATION, easing: EASING, fill: "forwards" }
      );

      await exit.finished;
    } finally {
      // Fully clear any persisted animation effects (fill: forwards)
      try {
        overlay.getAnimations?.().forEach((a) => a.cancel());
      } catch {}
      overlay.style.transform = "";
      overlay.classList.add("translate-y-full");
    }
  };

  const navigateWithAnimation = async (href: string) => {
    const overlay = document.getElementById(OVERLAY_ID) as HTMLElement | null;
    if (!overlay) return;

    // Clean start: cancel any running animations and remove initial hiding class
    try {
      overlay.getAnimations?.().forEach((a) => a.cancel());
    } catch {}
    overlay.classList.remove("translate-y-full");

    // Enter animation
    const enter = overlay.animate(
      [{ transform: "translateY(100%)" }, { transform: "translateY(0%)" }],
      { duration: ENTER_DURATION, easing: EASING, fill: "forwards" }
    );

    // Wait for enter to complete, then change route
    await enter.finished;
    await wait(HOLD_DURATION);

    // Route changes while overlay is covering the screen
    router.push(href);

    // Exit animation (runs on the new page)
    const exit = overlay.animate(
      [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
      { duration: EXIT_DURATION, easing: EASING, fill: "forwards" }
    );

    await exit.finished;

    // Cleanup
    try {
      overlay.getAnimations?.().forEach((a) => a.cancel());
    } catch {}
    overlay.style.transform = "";
    overlay.classList.add("translate-y-full");
  };

  return { pageAnimation, navigateWithAnimation };
};
