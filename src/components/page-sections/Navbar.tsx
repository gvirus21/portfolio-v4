"use client";

import { motion } from "motion/react";
import FlipLink from "../ui/links/FlipLink";
import SkeletonPillButton from "../ui/buttons/SkeletonPillButton";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import useCursorState from "@/store/useCursorState";

const Navbar = () => {
  const pathname = usePathname();
  const { setCursorState } = useCursorState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-16 sm:h-16 bg-background z-30 pointer-events-none" />

      <motion.nav
        // initial={{ opacity: 0, y: 16 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   duration: 0.8,
        //   ease: [0.25, 0.46, 0.45, 0.94],
        //   delay: pathname === "/" ? 2.8 : 0.2, //only accounts for the reload in that particular page
        // }}
        className={cn(
          "fixed top-0 w-full pt-4 pb-3 px-4 sm:px-6 flex justify-between items-start z-50"
        )}
      >
        <div className="flex items-center justify-between w-full z-50">
          <div className="text-base sm:text-base lg:text-sm xl:text-base font-light z-[100]">
            <a
              href={pathname === "/" ? undefined : "/"}
              onMouseEnter={() => setCursorState("sm-hovered")}
              onMouseLeave={() => setCursorState("regular")}
            >
              @gourav.kumar__
            </a>
          </div>

          <div className="hidden md:block lg:hidden xl:block absolute top-2 left-1/2 md:-translate-x-[70%] xl:-translate-x-1/2 ml-10 xl:ml-0 text-black font-light mt-1 text-[12px] lg:text-sm">
            <span>WEB DEVELOPER & DESIGNER</span>
            <div className="text-sm text-gray-500">VIZAG, INDIA</div>
          </div>

          <div className="lg:w-[24rem] xl:w-[28rem] hidden lg:flex items-center justify-between lg:text-sm xl:text-base">
            <div className="flex gap-4">
              <FlipLink underline className="uppercase" href="/">
                Home
              </FlipLink>
              <FlipLink underline className="uppercase" href="/about">
                About
              </FlipLink>
              <FlipLink underline className="uppercase" href="/pricing">
                Pricing
              </FlipLink>
              <FlipLink underline className="uppercase" href="/playground">
                Playground
              </FlipLink>
              {/* <FlipLink underline className="uppercase" href="/journal">
              Journal
              </FlipLink> */}
              {/* <FlipLink
              underline
              className="uppercase"
              href="https://instagram.com/gourav.kumar__"
              should_transition={false}
              >
              Instagram
              </FlipLink> */}
            </div>
            <div
              onMouseEnter={() => {
                setCursorState("sm-hovered");
              }}
              onMouseLeave={() => {
                setCursorState("regular");
              }}
              className=""
            >
              <SkeletonPillButton
                link="/about"
                className="group lg:text-[12px] xl:text-base"
              >
                <span className="group-hover:mr-3">Let&apos;s talk</span>
              </SkeletonPillButton>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex flex-col text-[#222] lg:hidden font-light focus:outline-none z-50 h-[1.3rem] overflow-hidden relative px-2"
            aria-label="menu toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            MENU+
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};

export default Navbar;
