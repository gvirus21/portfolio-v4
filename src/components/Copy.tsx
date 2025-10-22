"use client";

import React, { useRef, ReactNode } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<Element[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<Element[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Check if device is mobile/touch screen
      const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // If mobile, just make content visible without animation
      if (isMobile) {
        const targets = containerRef.current.hasAttribute("data-copy-wrapper")
          ? [containerRef.current, ...Array.from(containerRef.current.children)]
          : [containerRef.current];

        gsap.set(targets, { visibility: "visible" });
        return;
      }

      splitRefs.current = [];
      lines.current = [];
      elementRefs.current = [];

      let elements: Element[] = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      gsap.set(elements, { visibility: "hidden" });

      elements.forEach((element) => {
        elementRefs.current.push(element);

        const split = SplitText.create(element as gsap.DOMTarget, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.3,
        });

        splitRefs.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;
        const letterSpacing = computedStyle.letterSpacing;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          (element as HTMLElement).style.textIndent = "0";
        }

        // Handle negative letter spacing by adding padding to prevent text cutoff
        if (letterSpacing && letterSpacing.includes("-")) {
          const negativeSpacing = parseFloat(letterSpacing.replace("px", ""));
          if (negativeSpacing < 0) {
            split.lines.forEach((line) => {
              (line as HTMLElement).style.paddingRight = `${
                Math.abs(negativeSpacing) * 2
              }px`;
            });
          }
        }

        lines.current.push(...split.lines);
      });

      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
        onStart: () => {
          const targets = [containerRef.current, ...elementRefs.current].filter(
            (el): el is Element => Boolean(el)
          );

          gsap.set(targets, { visibility: "visible" });
        },
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        splitRefs.current.forEach((split) => {
          if (split && typeof split.revert === "function") {
            split.revert();
          }
        });

        const targets = [containerRef.current, ...elementRefs.current].filter(
          (el): el is Element => Boolean(el)
        );

        if (targets.length) {
          gsap.set(targets, { clearProps: "visibility" });
        }
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1) {
    const child = React.Children.only(children);
    if (React.isValidElement<{ style?: React.CSSProperties }>(child)) {
      const existingStyle = child.props.style;
      return React.cloneElement(child, {
        ref: containerRef,
        style: { ...(existingStyle ?? {}), visibility: "hidden" },
      } as typeof child.props & { ref?: React.Ref<HTMLElement> });
    }
  }

  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      style={{ visibility: "hidden" }}
    >
      {children}
    </div>
  );
}
