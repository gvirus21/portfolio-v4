"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { wait } from "@/lib/utils";

const menuLinks = [
  { path: "/", label: "home" },
  { path: "/about", label: "about" },
  { path: "/pricing", label: "pricing" },
  { path: "/playground", label: "playground" },
];

interface Props {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ mobileMenuOpen, setMobileMenuOpen }: Props) => {
  const pathname = usePathname();

  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const skipExitAnimation = useRef<boolean>(false);

  useGSAP(
    () => {
      if (container.current) {
        // Set initial state
        gsap.set(container.current.querySelectorAll(".relative"), {
          y: 75,
        });
        gsap.set(container.current.querySelector(".clip-path-hidden"), {
          visibility: "hidden",
        });
      }
    },
    { scope: container }
  );

  useEffect(() => {
    if (!container.current) return;

    const menuOverlay = container.current.querySelector(".clip-path-hidden");
    const menuLinkHolders = container.current.querySelectorAll(".relative");

    if (mobileMenuOpen) {
      // Clear any existing timeline
      if (tl.current) {
        tl.current.kill();
        tl.current = null;
      }

      // Reset to initial state before animating
      gsap.set(menuLinkHolders, { y: 75 });
      gsap.set(menuOverlay, {
        visibility: "visible",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });

      // Show and animate menu
      tl.current = gsap
        .timeline()
        .to(menuOverlay, {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(menuLinkHolders, {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    } else {
      // Hide menu
      if (skipExitAnimation.current) {
        // Skip animation and hide immediately when link is clicked
        gsap.set(menuOverlay, { visibility: "hidden" });
        gsap.set(menuLinkHolders, { y: 75 }); // Reset to initial state
        skipExitAnimation.current = false; // Reset flag
        // Clear timeline reference
        if (tl.current) {
          tl.current.kill();
          tl.current = null;
        }
      } else if (tl.current) {
        tl.current.reverse();
        tl.current.eventCallback("onReverseComplete", () => {
          gsap.set(menuOverlay, { visibility: "hidden" });
          // Clear timeline reference after reverse completes
          if (tl.current) {
            tl.current.kill();
            tl.current = null;
          }
        });
      } else {
        // If no timeline exists, just hide immediately
        gsap.set(menuOverlay, { visibility: "hidden" });
        gsap.set(menuLinkHolders, { y: 75 }); // Reset to initial state
      }
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    link: {
      path: string;
      label: string;
    }
  ) => {
    const isCurrentPage = pathname === link.path;

    if (isCurrentPage) {
      e.preventDefault();
      return;
    }

    // Set flag to skip exit animation
    skipExitAnimation.current = true;
    await wait(800);
    setMobileMenuOpen(false);
  };

  return (
    <div className="menu-container" ref={container}>
      <div className="fixed top-0 left-0 w-screen h-screen px-4 py-8 bg-[#202020] z-[100] flex clip-path-hidden invisible text-white">
        <MenuOverlay setMobileMenuOpen={setMobileMenuOpen} />
        <div className="flex-[4] flex flex-col justify-between px-2">
          <div className="mt-20 xs:mt-40">
            {menuLinks.map((link, index) => (
              <div
                key={index}
                className="w-max"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                <div
                  className="relative mb-4"
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  <Link
                    className="text-background font-thin text-5xl md:text-[60px] leading-[85%] tracking-[-0.02em] font-dmsans  uppercase"
                    href={link.path}
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-start justify-between w-full mb-24 font-light">
            <div className="flex flex-col justify-end text-sm xs:text-xl text-white w-fit">
              <a
                className="mb-2 w-fit"
                href="https://www.instagram.com/gourav.kumar__"
              >
                Instagram &#8599;
              </a>
              <a className="w-fit" href="#">LinkedIn &#8599;</a>
            </div>
            <div className="flex flex-col justify-end text-sm xs:text-sm text-white w-fit mt-2">
              <p className="mb-4  w-fit">gouravkumar2889@gmail.com</p>
              <p className=" w-fit">+91 0923 3984 23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

const MenuOverlay = ({
  setMobileMenuOpen,
}: {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="fixed top-4 left-0 flex items-center justify-between w-full z-50 px-4">
    <Link href="/">@gourav.kumar__</Link>
    <button
      className="text-white uppercase mr-3"
      onClick={() => setMobileMenuOpen(false)}
    >
      Close
    </button>
  </div>
);
