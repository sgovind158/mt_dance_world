"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-20 bg-[#0b183a] text-center "
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About MT Dance with Fitness World
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {`At MT Dance with Fitness World, we believe dance is more than movement—it's a celebration of life and energy. Our studio is a vibrant community for dancers of all levels, where passion meets discipline and creativity thrives.`}
      </motion.p>
    </section>
  );
};

export default AboutUs;
