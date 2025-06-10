"use client";

import Link from "next/link";
import FlipLink from "./ui/links/FlipLink";
import SkeletonPillButton from "./ui/buttons/SkeletonPillButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white pt-4 pb-3 px-10 flex justify-between items-start">
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
        <FlipLink
          underline
          className="uppercase"
          href="https://instagram.com/gourav.kumar__"
        >
          Instagram
        </FlipLink>
        {/* <p>Playground</p> */}
        {/* <p>Blog</p> */}

        <SkeletonPillButton link="/about">Let&apos;s talk</SkeletonPillButton>
      </div>
    </nav>
  );
};

export default Navbar;
