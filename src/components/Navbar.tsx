"use client";

import Link from "next/link";
import { motion } from "motion/react";
import FlipLink from "./ui/links/FlipLink";
import SkeletonPillButton from "./ui/buttons/SkeletonPillButton";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import MobileMenuButton from "./ui/buttons/MobileMenuButton";

const Navbar = () => {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    const visited = window.sessionStorage.getItem("hasVisitedHome");
    setFirstLoad(Boolean(visited));
    window.sessionStorage.setItem("hasVisitedHome", "true");
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: firstLoad ? 2.7 : 1.5,
        }}
        className={cn(
          "fixed top-0 z-50 w-full pt-4 pb-3 px-4 sm:px-10 flex justify-between items-start",
          mobileMenuOpen
            ? "bg-transparent text-white"
            : "bg-background text-black"
        )}
      >
        <div className="text-base sm:text-base lg:text-sm xl:text-base font-light z-50">
          <Link href="/">@gourav.kumar__</Link>
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

        {/* mobile menu */}
        <MobileMenuButton
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
      </motion.nav>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};

export default Navbar;
