"use client";

import Image from "next/image";
import React from "react";
const instructor = {
  name: "Mohan Nayak",
  image: "/assets/teacher/ins_img.jpg", // replace with your image path
  style: "Hip-Hop & Freestyle & Contemporary",
  experience: "15+ years",
  bio: `Mohan is a passionate and energetic dancer who has been teaching Hip-Hop, Bollywood, Classical, and Freestyle for over 15 years. Known for his high-energy sessions and innovative choreography, he has trained thousands of students across all age groups. Mohan’s classes focus on rhythm, confidence, and expression.`,
  styles: [
    "Hip-Hop",
    "Freestyle",
    "Bollywood Fusion",
    "Salsa",
    "Contemporary",
    "Classical",
    "House",
    "Popping",
  ],
  socials: {
    instagram:
      "https://www.instagram.com/mohannayak27world?igsh=MXVvZmZhMjV3Nzk0OA==",
    youtube: "https://youtube.com/@nayak27975?si=qhqVgq8qEsrLVq0e",
  },
};
const Bio = () => {
  return (
    <section className="mt-[112px] min-h-screen px-4 py-12 md:px-12 bg-white text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Instructor Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Instructor Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {instructor.name}
          </h1>
          <p className="text-xl text-[#555] mb-2 font-medium">
            Dance Style: <span className="text-black">{instructor.style}</span>
          </p>
          <p className="text-[#666] mb-4">
            Experience: <strong>{instructor.experience}</strong>
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">{instructor.bio}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Styles Taught:</h3>
            <ul className="flex flex-wrap gap-2">
              {instructor.styles.map((style, i) => (
                <li
                  key={i}
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm"
                >
                  {style}
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href={instructor.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Instagram
            </a>
            <a
              href={instructor.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              YouTube
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-md hover:bg-pink-700 transition cursor-pointer"
          >
            Book a Trial Class
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bio;
