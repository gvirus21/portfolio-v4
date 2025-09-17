import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { TfiArrowTopRight } from "react-icons/tfi";
import { wait } from "@/lib/utils";

interface Props {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/pricing", label: "PRICING" },
  {
    href: "https://www.instagram.com/gourav.kumar__",
    label: "INSTAGRAM",
    should_transition: false,
  },
];

const containerVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
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
      staggerChildren: 0.1,
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
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 flex flex-col px-8 py-20 bg-[#d9d9d9] text-[#222] overflow-hidden"
        >
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 mt-[20vh] overflow-hidden">
            {menuItems.map((item) => (
              <motion.div key={item.href} className="overflow-hidden">
                <motion.div variants={linkVariants}>
                  <motion.a
                    className="text-5xl font-thin uppercase tracking-wide hover:opacity-70 transition-opacity block"
                    href={item.href}
                    onClick={async (e) => {
                      const isCurrentPage = pathname === item.href;
                      if (isCurrentPage) {
                        e.preventDefault();
                        return;
                      }

                      await wait(1000);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}

            {/* Contact Button */}
            <div className="overflow-hidden absolute bottom-20">
              <motion.button
                variants={linkVariants}
                className="flex border-b-[0.5px] text-3xl pt-1 pb-2  border-black font-thin"
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
