"use client";

import Link from "next/link";
import PillButton from "./ui/PillButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full pt-4 pb-3 px-10 flex justify-between items-start bg-white">
      <div className="font-light">
        <Link href="/">@gourav.kumar__</Link>
      </div>
      <div className="text-black font-light mt-1 text-sm">
        <span>WEB DEVELOPER & DESIGNER</span>
        <div className="text-sm text-gray-500">VIZAG, INDIA</div>
      </div>
      <PillButton title="Let's Talk" link="/contact" />
    </nav>
  );
};

export default Navbar;
