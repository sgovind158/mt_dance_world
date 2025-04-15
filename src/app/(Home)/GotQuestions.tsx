"use client";
// import Image from "next/image";
import React from "react";
// import Acc1 from "../components/client/Accrodian/Acc1";
import { motion } from "framer-motion";
import Acc1 from "@/Components/Accrodian/Acc1";

const accordionItems = [
  {
    id: 1,
    title: "What dance styles do you offer?",
    content:
      "We offer a variety of dance styles including Bollywood, Hip-Hop, Contemporary, Classical,house ,Freestyle and many more. There's something for every age and skill level!",
  },
  {
    id: 2,
    title: "Are the classes suitable for beginners?",
    content:
      "Absolutely! We have special beginner batches where no prior experience is needed. Our instructors guide each student step-by-step.",
  },
  {
    id: 3,
    title: "What age groups do you teach?",
    content:
      "We have classes for kids (5+), teens, and adults. Each batch is designed to match the energy, learning pace, and style preferences of the age group.",
  },
  {
    id: 4,
    title: "How can I register for a class?",
    content:
      "You can register online through our website or visit our studio in person. Our team is happy to assist you with class timings and availability.",
  },
  {
    id: 5,
    title: "Do you offer trial classes?",
    content:
      "Yes! We offer a free trial class so you can experience the vibe and see if it’s the right fit for you before enrolling.",
  },
  {
    id: 6,
    title: "What should I wear and bring to class?",
    content:
      "Wear comfortable clothing you can move freely in, and bring a water bottle. Dance shoes are optional depending on the style you're learning.",
  },
  {
    id: 7,
    title: "What are the class timings?",
    content:
      "We have flexible batch timings throughout the week, including evenings and weekends. Morning batches: 8 AM - 11 AM. Evening batches: 5 PM - 9 PM. Weekend special batches are also available.",
  },
  {
    id: 8,
    title: "What are the fees for the dance classes?",
    content:
      "Our monthly fee starts at ₹1,000, depending on the dance style and batch. Discounts are available for quarterly, half-yearly, and yearly enrollments.",
  },
];
const GotQuestions: React.FC = () => {
  return (
    <section className="  xxl:max-w-[1566px] xxl:mx-auto px-[16px] bg-[#0b183a]">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-[24px] lg:gap-[40px] xl:gap-[80px] items-center py-[60px] ">
        {/* faq */}
        <div className="max-w-[610px] mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="h2Heading font-normal text-center text-5xl text-white mb-11"
          >
            Got Questions? We’ve Got Answers.
          </motion.h2>
          <div className="">
            <Acc1 accordionItems={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GotQuestions;
