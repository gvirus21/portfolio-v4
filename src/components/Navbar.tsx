"use client";

import Link from "next/link";
import { motion } from "motion/react";
import FlipLink from "./ui/links/FlipLink";
import SkeletonPillButton from "./ui/buttons/SkeletonPillButton";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 2.7,
      }}
      className="fixed top-0 z-50 w-full bg-background pt-4 pb-3 px-10 flex justify-between items-start"
    >
      <div className="font-light">
        <Link href="/">@gourav.kumar__</Link>
      </div>
      <div className="absolute top-2 left-1/2 -translate-x-0.5 text-black font-light mt-1 text-sm">
        <span>WEB DEVELOPER & DESIGNER</span>
        <div className="text-sm text-gray-500">VIZAG, INDIA</div>
      </div>

      <div className="flex items-center gap-4">
        <FlipLink underline className="uppercase" href="/about">
          About
        </FlipLink>
        {/* <FlipLink underline className="uppercase" href="/about">
          Playground
        </FlipLink>
        <FlipLink underline className="uppercase" href="/about">
          Journal
        </FlipLink> */}
        <FlipLink underline className="uppercase" href="/pricing">
          Pricing
        </FlipLink>
        <FlipLink
          underline
          className="uppercase"
          href="https://instagram.com/gourav.kumar__"
        >
          Instagram
        </FlipLink>

        <SkeletonPillButton link="/about">Let&apos;s talk</SkeletonPillButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;
