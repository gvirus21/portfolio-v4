"use client";

import { motion } from "motion/react";
import FlipLink from "./ui/links/FlipLink";
import SkeletonPillButton from "./ui/buttons/SkeletonPillButton";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import MobileMenuButton from "./ui/buttons/MobileMenuButton";
import { usePageLoader } from "@/hooks/usePageLoader";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [firstLoad, setFirstLoad] = useState(false);
  const { handleKeyDown, handleNavigate } = usePageLoader();

  const pathname = usePathname();

  useEffect(() => {
    const visited = window.sessionStorage.getItem("hasVisitedHome");
    setFirstLoad(Boolean(visited));
    window.sessionStorage.setItem("hasVisitedHome", "true");
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Background layer (bottom) */}
      <div className="fixed top-0 inset-x-0 h-16 sm:h-16 bg-background z-30 pointer-events-none" />

      <motion.nav
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: firstLoad ? 2.7 : 1.5,
        }}
        className={cn(
          "fixed top-0 w-full pt-4 pb-3 px-4 sm:px-10 flex justify-between items-start z-50"
        )}
      >
        <div className="flex items-center justify-between w-full z-50">
          <div className="text-base sm:text-base lg:text-sm xl:text-base font-light z-[100]">
            <a
              href={pathname === "/" ? undefined : "/"}
              onClick={(e) => handleNavigate(e, "/", "HOME")}
              onKeyDown={(e) => handleKeyDown(e, "/", "HOME")}
            >
              @gourav.kumar__
            </a>
          </div>

          <div className="hidden md:block lg:hidden xl:block absolute top-2 left-1/2 -translate-x-1/2 ml-10 xl:ml-0 text-black font-light mt-1 text-[12px] lg:text-sm">
            <span>WEB DEVELOPER & DESIGNER</span>
            <div className="text-sm text-gray-500">VIZAG, INDIA</div>
          </div>

          <div className="hidden lg:flex items-center lg:text-sm xl:text-base gap-4">
            <FlipLink underline className="uppercase" href="/about">
              About
            </FlipLink>
            <FlipLink underline className="uppercase" href="/pricing">
              Pricing
            </FlipLink>

            {/* will add "Playgrounds" & "Journal" links later */}
            <FlipLink
              underline
              className="uppercase"
              href="https://instagram.com/gourav.kumar__"
              should_transition={false}
            >
              Instagram
            </FlipLink>

            <SkeletonPillButton
              link="/about"
              className="lg:text-[12px] xl:text-base"
            >
              Let&apos;s talk
            </SkeletonPillButton>
          </div>

          {/* Mobile menu button (top layer) */}
          <MobileMenuButton
            menuOpen={mobileMenuOpen}
            setMenuOpen={setMobileMenuOpen}
          />
        </div>
      </motion.nav>

      {/* Mobile menu (middle layer) */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};

export default Navbar;
