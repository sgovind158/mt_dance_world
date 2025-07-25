"use client";
import CustomInput from "@/Components/Input/CustomInput";
import CustomTextArea from "@/Components/Input/CustomTextArea";
import { msg } from "@/utils/message";
import { phoneRegexFun } from "@/utils/Validator";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loder, setLoder] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phone } = form;

    // Validates phone number and sends data to the server
    if (!phoneRegexFun(phone)) {
      toast.error(msg?.invalidPhone);
      return;
    }
    setLoder(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setForm({ name: "", email: "", phone: "", message: "" });
        toast.success(
          "Thank you for reaching out! We have received your message and will get back to you shortly."
        );
        setLoder(false);
      } else {
        toast.error("Failed to send message.");
        setLoder(false);
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
      setLoder(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-20 bg-[#1a1e2a] bg-[url('/assets/contact_form_img.png')] "
    >
      <div className=" ">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4">
          <CustomInput
            placeholder="Name*"
            req={true}
            handleChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            value={form?.name}
          />
          <CustomInput
            type="number"
            placeholder="Phone*"
            req={true}
            handleChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            value={form?.phone}
          />
          <CustomInput
            type="email"
            placeholder="Email"
            handleChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            value={form?.email}
          />

          <CustomTextArea
            placeholder="Message"
            handleChange={(e) => {
              setForm({ ...form, message: e.target.value });
            }}
            value={form?.message}
          />

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer"
            >
              {loder ? "Loading..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
