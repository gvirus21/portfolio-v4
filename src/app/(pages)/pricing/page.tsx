"use client";

import { motion } from "motion/react";
import Hero from "./Hero";
import PricingTable from "./PricingTable";
import Testimonials from "./Testimonials";
import OtherQuestions from "./OtherQuestions";
import GetInTouch from "./GetInTouch";

const PricingPage = () => {
  return (
    <motion.section className="relative w-full min-h-screen max-w-[100vw] pt-10 px-4 sm:px-6">
      <Hero />
      <PricingTable />
      <Testimonials />
      <OtherQuestions />
      <GetInTouch />
    </motion.section>
  );
};

export default PricingPage;
