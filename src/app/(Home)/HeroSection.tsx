"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Youtube } from "lucide-react";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";

const socialLinks = [
  {
    href: "https://g.co/kgs/NBCepnu",
    label: "Google Profile",
    icon: <BsGoogle size={30} />,
  },
  {
    href: "https://www.instagram.com/mt_dance_with_fitness_world/",
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
];

const HeroSection = () => {
  const directionsUrl =
    "https://www.google.com/maps/place/MT+DANCE+WITH+FITNESS+WORLD/@22.7361515,75.8295663,17z/data=!4m16!1m9!3m8!1s0x3962fd0001c3e8f9:0xc5a850e1421c82f9!2sMT+DANCE+WITH+FITNESS+WORLD!8m2!3d22.7361466!4d75.8321412!9m1!1b1!16s%2Fg%2F11y6gcy66j!3m5!1s0x3962fd0001c3e8f9:0xc5a850e1421c82f9!8m2!3d22.7361466!4d75.8321412!16s%2Fg%2F11y6gcy66j?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D";

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

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-4 max-w-[250px] justify-center items-center gap-1 mt-4 mx-auto flex bg-[#0b183a] hover:bg-[#0b183af5] px-6 py-3 rounded-full text-white hover:font-semibold cursor-pointer"
          aria-label="Get Directions"
        >
          <MapPin size={20} />
          Get Directions
        </a>
      </motion.div>
      <div className="bottom-28 left-10 absolute flex flex-col space-x-4 gap-1 ">
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
