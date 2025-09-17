"use client";

import { useEffect, useRef, useCallback, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useIsMobile } from "@/hooks/useMediaQuery";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);

  const isMobile = useIsMobile();

  const setOverlayVisible = (visible: boolean) => {
    const node = overlayRef.current;
    if (!node) return;
    node.style.display = visible ? "flex" : "none";
    node.style.pointerEvents = visible ? "auto" : "none";
  };

  const isModifiedClick = (e: MouseEvent) =>
    e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;

  const isInternalHref = (href: string | null): href is string =>
    !!href && href.startsWith("/");

  const coverPage = useCallback(
    (url: string) => {
      setOverlayVisible(true);

      // Mark that we should reveal on the next page mount (in-app navigation)
      try {
        window.sessionStorage.setItem("pt:shouldReveal", "1");
      } catch {}

      const tl = gsap.timeline({
        onComplete: () => router.push(url),
      });

      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.6,
        stagger: 0.02,
        ease: "power3.out",
        transformOrigin: "left",
      });
    },
    [router]
  );

  const revealPage = useCallback(() => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "left" });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.6,
      stagger: 0.02,
      ease: "power3.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = "none";
          overlayRef.current.style.display = "none";
        }
      },
    });
  }, []);

  const handleRouteChange = useCallback(
    (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    },
    [coverPage]
  );

  const onAnchorClick = useCallback(
    (e: Event) => {
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }

      const mouseEvent = e as MouseEvent;
      const target = e.currentTarget as HTMLAnchorElement;
      if (
        mouseEvent.metaKey ||
        mouseEvent.ctrlKey ||
        mouseEvent.shiftKey ||
        mouseEvent.altKey ||
        mouseEvent.button !== 0 ||
        target.target === "_blank"
      ) {
        return;
      }

      e.preventDefault();
      const href = target.href;
      const url = new URL(href).pathname;
      if (url !== pathname) {
        handleRouteChange(url);
      }
    },
    [pathname, handleRouteChange]
  );

  // Capture clicks anywhere in the document to handle dynamically injected links (e.g., mobile menu)
  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (isTransitioning.current) return;

      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!isInternalHref(href)) return; // only internal links

      // Ignore modifier clicks and new tab/window
      if (isModifiedClick(event) || anchor.target === "_blank") {
        return;
      }

      // If navigating to the same path, let it pass
      try {
        const url = new URL(href, window.location.origin).pathname;
        if (url === pathname) return;
        event.preventDefault();
        handleRouteChange(url);
      } catch {
        // fall back: do nothing
      }
    };

    // Use capture to intercept before framework handlers
    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [pathname, handleRouteChange]);

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];

      const BLOCKS_COUNT = isMobile ? 20 : 40;

      for (let i = 0; i < BLOCKS_COUNT; i++) {
        const block = document.createElement("div");
        block.className = "transition-block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();

    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

    // Only reveal if this mount is the result of an in-app navigation we initiated
    let shouldReveal = false;

    try {
      shouldReveal = window.sessionStorage.getItem("pt:shouldReveal") === "1";
    } catch {}

    setOverlayVisible(shouldReveal);

    if (shouldReveal) {
      try {
        window.sessionStorage.removeItem("pt:shouldReveal");
      } catch {}
      revealPage();
    }

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      link.addEventListener("click", onAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", onAnchorClick);
      });
    };
  }, [router, pathname, onAnchorClick, revealPage, isMobile]);

  return (
    <>
      <div ref={overlayRef} className="transition-overlay" />
      <div className="logo-overlay">
        <div className="logo-container text-4xl text-white">HOME</div>
      </div>
      {children}
    </>
  );
};

export default PageTransition;
