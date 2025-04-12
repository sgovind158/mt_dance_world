import React from "react";

const WhyChooseUse = () => {
  return (
    <section className="bg-[#0b183a] py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl text-white font-bold mb-10">Why Choose Us</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          "Experienced Instructors",
          "Affordable Fees",
          "Flexible Timings",
          "Annual Performances",
        ].map((reason) => (
          <div
            key={reason}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex justify-center items-center"
          >
            <p className="text-lg font-medium text-pink-700">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUse;
