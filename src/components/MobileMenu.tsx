import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TfiArrowTopRight } from "react-icons/tfi";
import Link from "next/link";

interface Props {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/pricing", label: "PRICING" },
  { href: "/www.instagram.com/gourav.kumar__", label: "INSTAGRAM" },
];

const containerVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      //   staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const linkVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: Props) => {
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col px-8 py-20 bg-[#222] text-white overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between w-full absolute top-6 left-0 px-6 font-light">
            <div className="text-sm sm:text-base lg:text-sm xl:text-base font-light">
              <Link href="/">@gourav.kumar__</Link>
            </div>
            <button
              className="font-light focus:outline-none uppercase tracking-tighter text-base"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              Close
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 mt-[20vh] overflow-hidden">
            {menuItems.map((item) => (
              <motion.div key={item.href} className="overflow-hidden">
                <motion.div variants={linkVariants}>
                  <Link
                    href={item.href}
                    className="text-6xl font-thin uppercase tracking-wide hover:opacity-70 transition-opacity block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              </motion.div>
            ))}

            {/* Contact Button */}
            <div className="overflow-hidden absolute bottom-20">
              <motion.button
                variants={linkVariants}
                className="flex border-b-[0.5px] text-3xl pt-1 pb-2  border-white font-thin"
              >
                <span>Let&apos;s talk</span>
                <TfiArrowTopRight className="text-xl ml-4 mt-3" />
              </motion.button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
