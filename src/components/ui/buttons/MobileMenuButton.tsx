import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <button
      className="flex flex-col lg:hidden font-light focus:outline-none z-50 h-[1.3rem] overflow-hidden relative px-2"
      aria-label="menu toggle"
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      <p className="opacity-0 pointer-events-none">MENU+</p>

      <AnimatePresence mode="wait">
        {!menuOpen ? (
          <motion.div
            key="menu"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
            className="absolute inset-0 flex items-center px-2"
          >
            <p>MENU+</p>
          </motion.div>
        ) : (
          <motion.div
            key="close"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
            className="absolute inset-0 flex items-center px-2"
          >
            <p>CLOSE</p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default MobileMenuButton;
