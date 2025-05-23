"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import styles from "./style.module.css";

export default function SliderAnimation() {
  const outer = useRef(null);
  const inner = useRef(null);

  return (
    <motion.div>
      <Link href="/">Hellooo</Link>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}></div>
      </div>
    </motion.div>
  );
}
