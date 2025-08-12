import { wait } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";

const ENTER_DURATION = 1000;
const HOLD_DURATION = 100;
const EXIT_DURATION = 1000;
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";
const OVERLAY_ID = "loader-overlay";

export const usePageLoader = () => {
  const router = useTransitionRouter();

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

  const isSameUrl = (href: string) => {
    try {
      const target = new URL(href, window.location.origin);
      const current = new URL(window.location.href);
      return (
        target.pathname === current.pathname &&
        target.search === current.search &&
        target.hash === current.hash
      );
    } catch {
      return false;
    }
  };

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    allowTransition: boolean = true
  ) => {
    if (!href) return;
    if (!allowTransition || isSameUrl(href)) return;
    e.preventDefault();
    navigateWithAnimation(href);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string,
    allowTransition: boolean = true
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      if (!href) return;
      if (!allowTransition || isSameUrl(href)) return;
      e.preventDefault();
      navigateWithAnimation(href);
    }
  };

  return { handleKeyDown, handleNavigate };
};
