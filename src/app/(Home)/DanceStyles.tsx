"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Hip Hop",
    img: "/assets/hip-hop2.png",
  },
  {
    id: 2,
    name: "Contemporary",
    img: "/assets/contempory.png",
  },
  {
    id: 3,
    name: "Bharatnatyam",
    img: "/assets/natyam.png",
  },
  {
    id: 4,
    name: "Salsa",
    img: "/assets/salsa.png",
  },
];
const DanceStyles = () => {
  return (
    <section id="styles" className="py-16 px-6 md:px-20 bg-black">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dance Styles We Teach
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {data.map((item, index) => {
          return (
            <motion.div
              key={index}
              className=" p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={item?.img}
                alt={item?.name}
                width={300}
                height={200}
                className="rounded-md mb-4 object-cover w-full h-[385px]"
              />
              <h3 className="text-xl font-semibold mb-2 text-pink-600 text-center">
                {item?.name}
              </h3>
              <p className=" text-sm text-white text-center">
                Join our expert-led {item?.name} classes designed for all
                levels.
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DanceStyles;
