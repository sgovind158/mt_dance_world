"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import styles from "./style/trustedBy500.module.scss";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "Kavita Bhandari",
    img: "/assets/founder_img (1).svg",
    alt: "riya-img",
    position: "Student, Intermediate Batch",
    review:
      "The classes are full of energy and creativity! I've grown so much in confidence and rhythm since joining.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    img: "/assets/founder_img (1).svg",
    alt: "priya-img",
    position: "Parent",
    review:
      "My daughter absolutely loves coming to class. The instructors are patient, professional, and make learning fun!",
  },
  {
    id: 3,
    name: "Govind Sahu",
    img: "/assets/founder_img (1).svg",
    alt: "anaya-img",
    position: "Student, Beginner Batch",
    review:
      "I had never danced before, but now I look forward to every session. The vibe is so supportive and uplifting!",
  },
];

interface TrustedCardProps {
  el: {
    id: number;
    review: string;
    img: string;
    alt: string;
    name: string;
    position: string;
  };
}

const TrustedCard: React.FC<TrustedCardProps> = ({ el }) => {
  return (
    <div
      key={el?.id}
      className={clsx(
        "bg-white rounded-lg px-6 pb-[55px] pt-[80px] border border-[#DADADA]",
        styles.boxShadow
      )}
      style={{
        background: el?.id === 2 ? "#FEF9F1" : el?.id === 3 ? "#070707" : "",
      }}
    >
      <p
        className={clsx(
          "text-center text-[20px] font-[300] ",
          el?.id == 3 && "text-white"
        )}
      >
        {el?.review}
      </p>

      <div className="mt-[70px] flex justify-center gap-2">
        <Image src={el?.img} alt={el?.alt} width="48" height="50" />
        <div>
          <h3
            className={clsx(
              "text-[16px] text-[#000000] font-[300]",
              el?.id === 3 && "text-white"
            )}
          >
            {el?.name}
          </h3>
          <p
            className={clsx(
              "text-[12px] text-[#000000] mb-0",
              el?.id === 3 && "text-white"
            )}
          >
            {el?.position}
          </p>
        </div>
      </div>
    </div>
  );
};
const TrustedBy500: React.FC = () => {
  return (
    <section className=" xxl:max-w-[1566px] xxl:m-auto px-[16px] md:px-[24px] xl:px-[66px] bg-[#FEF9F1]">
      <div
        className={clsx(
          "pt-[80px] lg:pt-[134px] pb-[47px] flex justify-center items-center "
        )}
      >
        <div className="xl:px-[100px] ">
          <div className="xl:w-[60vw] lg:w-[80vw] sm:w-[95vw] mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center text-black h2Heading text-4xl"
            >
              Loved by <span className={clsx(styles.textImg)}>500+</span> Dance
              Enthusiasts of All Ages
            </motion.h2>
            <motion.p className="text-center text-[#3D3D3D] text-[18px] mt-[22px] xl:px-[70px]">
              Discover how our classes have helped{" "}
              <strong>build confidence, grace, and joy through movement</strong>{" "}
              in students from beginners to pros.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-[30px] lg:mt-[60px]">
            {data?.map((el) => (
              <TrustedCard key={el?.id} el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy500;
