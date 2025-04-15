"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.instagram.com/mohannayak27world?igsh=MXVvZmZhMjV3Nzk0OA==",
    label: "Instagram",
    icon: <Instagram size={30} />,
  },
  {
    href: "https://youtube.com/@nayak27975?si=qhqVgq8qEsrLVq0e",
    label: "YouTube",
    icon: <Youtube size={30} />,
  },
  {
    href: "https://www.facebook.com/share/1CRbe5Gkde/",
    label: "Facebook",
    icon: <Facebook size={30} />,
  },
  // { href: "#", label: "Twitter", icon: <Twitter size={20} /> },
];
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative mt-[112px] relative flex flex-col items-center justify-center h-screen bg-[url('/assets/img1.png')] bg-cover bg-center text-white text-center p-4 pt-28"
    >
      <motion.div
        className=" bg-opacity-60 p-8 rounded-xl max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          MT Dance with Fitness World
        </motion.h1>
        <motion.p
          className="text-2xl md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Discover your rhythm, embrace your energy!
        </motion.p>
        <motion.button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full text-white font-semibold cursor-pointer "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>
      </motion.div>
      <div className="bottom-28 left-10 absolute flex flex-col space-x-4 ">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            className="hover:text-gray-300"
            aria-label={social.label}
            target="_blank"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
