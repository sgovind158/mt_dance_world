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
    name: "Kavita Bhandari",
    img: "/assets/founder_img (1).svg",
    alt: "riya-img",
    position: "Student, Intermediate Batch",
    review:
      "The classes are full of energy and creativity! I've grown so much in confidence and rhythm since joining.",
  },
  {
    id: 2,
    name: "Dolly",
    img: "/assets/founder_img (1).svg",
    alt: "ananya-img",
    position: "Student, Beginner Batch",
    review:
      "As a beginner, I was nervous to start, but the instructors made me feel so comfortable. I've learned so much and gained confidence in every step!",
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
  {
    id: 4,
    name: "Ananya Verma",
    img: "/assets/founder_img (1).svg",
    alt: "ananya-img",
    position: "Student, Beginner Batch",
    review:
      "The instructors are so patient and encouraging. I’ve learned so much in just a few weeks!",
  },
  {
    id: 5,
    name: "Rohan Mehta",
    img: "/assets/founder_img (1).svg",
    alt: "rohan-img",
    position: "Student, Advanced Batch",
    review:
      "The advanced classes push me to my limits and help me grow as a dancer every day.",
  },
  {
    id: 6,
    name: "Priya Sharma",
    img: "/assets/founder_img (1).svg",
    alt: "priya-img",
    position: "Parent",
    review:
      "My daughter loves the classes! The instructors are professional and make learning fun.",
  },
  {
    id: 7,
    name: "Aarav Gupta",
    img: "/assets/founder_img (1).svg",
    alt: "aarav-img",
    position: "Student, Intermediate Batch",
    review:
      "The classes are so engaging, and I’ve improved my technique and confidence immensely.",
  },
  {
    id: 8,
    name: "Meera Kapoor",
    img: "/assets/founder_img (1).svg",
    alt: "meera-img",
    position: "Student, Beginner Batch",
    review:
      "I was hesitant to join, but now I can’t imagine my week without these amazing classes!",
  },
  {
    id: 9,
    name: "Vikram Singh",
    img: "/assets/founder_img (1).svg",
    alt: "vikram-img",
    position: "Student, Advanced Batch",
    review:
      "The choreography is challenging yet rewarding. I’ve grown so much as a dancer here.",
  },
  {
    id: 10,
    name: "Sanya Malhotra",
    img: "/assets/founder_img (1).svg",
    alt: "sanya-img",
    position: "Student, Beginner Batch",
    review:
      "The beginner classes are perfect for someone like me with no prior experience. Highly recommend!",
  },
  {
    id: 11,
    name: "Rahul Jain",
    img: "/assets/founder_img (1).svg",
    alt: "rahul-img",
    position: "Student, Intermediate Batch",
    review:
      "The instructors are so talented and make every class exciting and fun.",
  },
  {
    id: 12,
    name: "Ishita Roy",
    img: "/assets/founder_img (1).svg",
    alt: "ishita-img",
    position: "Student, Beginner Batch",
    review:
      "I’ve gained so much confidence and rhythm since joining the beginner batch.",
  },
  {
    id: 13,
    name: "Karan Patel",
    img: "/assets/founder_img (1).svg",
    alt: "karan-img",
    position: "Student, Advanced Batch",
    review:
      "The advanced batch is intense but incredibly rewarding. I’ve learned so much!",
  },
  {
    id: 14,
    name: "Simran Kaur",
    img: "/assets/founder_img (1).svg",
    alt: "simran-img",
    position: "Parent",
    review:
      "The instructors are amazing! My son has improved so much in his dancing skills.",
  },
  {
    id: 15,
    name: "Arjun Sharma",
    img: "/assets/founder_img (1).svg",
    alt: "arjun-img",
    position: "Student, Intermediate Batch",
    review:
      "The classes are so much fun, and I’ve made great friends along the way.",
  },
  {
    id: 16,
    name: "Neha Agarwal",
    img: "/assets/founder_img (1).svg",
    alt: "neha-img",
    position: "Student, Beginner Batch",
    review:
      "The instructors are so supportive and make learning dance an enjoyable experience.",
  },
  {
    id: 17,
    name: "Ravi Kumar",
    img: "/assets/founder_img (1).svg",
    alt: "ravi-img",
    position: "Student, Advanced Batch",
    review:
      "The advanced classes are challenging but have helped me grow as a dancer.",
  },
  {
    id: 18,
    name: "Pooja Singh",
    img: "/assets/founder_img (1).svg",
    alt: "pooja-img",
    position: "Student, Beginner Batch",
    review:
      "I’ve learned so much in such a short time. The instructors are fantastic!",
  },
  {
    id: 19,
    name: "Aman Verma",
    img: "/assets/founder_img (1).svg",
    alt: "aman-img",
    position: "Student, Intermediate Batch",
    review:
      "The classes are well-structured and cater to all skill levels. Highly recommend!",
  },
  {
    id: 20,
    name: "Ritika Das",
    img: "/assets/founder_img (1).svg",
    alt: "ritika-img",
    position: "Student, Beginner Batch",
    review:
      "The beginner batch is perfect for anyone starting their dance journey.",
  },
  {
    id: 21,
    name: "Aditya Malhotra",
    img: "/assets/founder_img (1).svg",
    alt: "aditya-img",
    position: "Student, Advanced Batch",
    review:
      "The advanced classes are intense but have taken my dancing to the next level.",
  },
  {
    id: 22,
    name: "Tanya Kapoor",
    img: "/assets/founder_img (1).svg",
    alt: "tanya-img",
    position: "Student, Beginner Batch",
    review:
      "The instructors are so encouraging, and I’ve gained so much confidence.",
  },
  {
    id: 23,
    name: "Nikhil Sharma",
    img: "/assets/founder_img (1).svg",
    alt: "nikhil-img",
    position: "Student, Intermediate Batch",
    review:
      "The classes are fun, engaging, and have helped me improve my technique.",
  },
  {
    id: 24,
    name: "Anjali Mehta",
    img: "/assets/founder_img (1).svg",
    alt: "anjali-img",
    position: "Student, Beginner Batch",
    review:
      "I’ve never felt more confident in my dancing. The beginner classes are amazing!",
  },
  {
    id: 25,
    name: "Rohit Khanna",
    img: "/assets/founder_img (1).svg",
    alt: "rohit-img",
    position: "Student, Advanced Batch",
    review:
      "The advanced batch has helped me refine my skills and grow as a dancer.",
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
          "text-center  font-[300] ",
          el?.id == 3 && "text-white"
        )}
      >
        {el?.review}
      </p>

      <div className="mt-[70px] flex justify-center gap-2">
        <div>
          <h3
            className={clsx(
              "text-[16px] text-[#000000] font-[300] text-center",
              el?.id === 3 && "text-white"
            )}
          >
            {el?.name}
          </h3>
          <p
            className={clsx(
              "text-[12px] text-[#000000] mb-0 text-center",
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
          <div className="xl:w-[60vw] lg:w-[80vw] sm:w-[95vw] mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center text-black h2Heading text-4xl"
            >
              Loved by <span className={clsx(styles.textImg)}>50,000+</span>{" "}
              Dance Enthusiasts of All Ages
            </motion.h2>
            <motion.p className="text-center text-[#3D3D3D] text-[18px] mt-[22px] xl:px-[70px]">
              Discover how our classes have helped{" "}
              <strong>build confidence, grace, and joy through movement</strong>{" "}
              in students from beginners to pros.
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
              spaceBetween={30}
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

export default TrustedBy500;
