"use client";
import clsx from "clsx";
import React from "react";
import styles from "./style/trustedBy500.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const data = [
  {
    id: 1,
    img: "/assets/awards/mt_img1.png",
    alt: "awards1",
  },
  {
    id: 2,
    img: "/assets/awards/mt_img2.png",
    alt: "awards1",
  },
  {
    id: 3,
    img: "/assets/awards/mt_img3.png",
    alt: "awards1",
  },
  {
    id: 4,
    img: "/assets/awards/mt_img4.png",
    alt: "awards1",
  },
  {
    id: 5,
    img: "/assets/awards/mt_img5.png",
    alt: "awards1",
  },
  {
    id: 6,
    img: "/assets/awards/mt_img6.png",
    alt: "awards1",
  },
  {
    id: 7,
    img: "/assets/awards/mt_img7.png",
    alt: "awards1",
  },
];

interface TrustedCardProps {
  el: {
    id: number;
    img: string;
    alt: string;
  };
}

const TrustedCard: React.FC<TrustedCardProps> = ({ el }) => {
  return (
    <div
      key={el?.id}
      className={clsx(
        "rounded-lg aspect-[4/3] overflow-hidden ",
        styles.boxShadow
      )}
      style={{
        background: "#070707",
      }}
    >
      <img src={el?.img} alt={el?.alt} className="w-full h-full object-cover" />
    </div>
  );
};

const Awards: React.FC = () => {
  return (
    <section className=" xxl:max-w-[1566px] xxl:m-auto px-[16px] md:px-[24px] xl:px-[66px] bg-[#FEF9F1]">
      <div
        className={clsx(
          "pt-[80px] lg:pt-[134px] pb-[47px] flex justify-center items-center "
        )}
      >
        <div className="xl:px-[100px] ">
          <div className="xl:w-[60vw] lg:w-[80vw] sm:w-[95vw] mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center text-black h2Heading text-4xl"
            >
              Celebrating{" "}
              <span className={clsx(styles.textImg)}>Our Achievements</span>
              <br />& Prestigious Awards
            </motion.h2>
            <motion.p className="text-center text-[#3D3D3D] text-[18px] mt-[22px] xl:px-[70px]">
              Explore the milestones and honors that showcase our commitment to
              excellence in dance education. Our awards reflect the passion,
              dedication, and talent of our students and instructors.
            </motion.p>
          </div>

          <div className="w-[96vw] max-w-6xl mx-auto mt-[30px] lg:mt-[60px] px-4 sm:px-6">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={20}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              loop={true}
            >
              {data?.map((el) => (
                <SwiperSlide key={el?.id}>
                  <div className="">
                    <TrustedCard el={el} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
