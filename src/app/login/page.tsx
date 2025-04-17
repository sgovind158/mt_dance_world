"use client";

import { setLocal } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      form,
      process.env.NEXT_PUBLIC_ADMIN_LOGIN_EMAIL,
      process.env.NEXT_PUBLIC_ADMIN_LOGIN_PASSWORD
    );

    if (
      form?.email === process.env.NEXT_PUBLIC_ADMIN_LOGIN_EMAIL &&
      form?.password === process.env.NEXT_PUBLIC_ADMIN_LOGIN_PASSWORD
    ) {
      setLocal("userData", form);
      router.push("/dashboard/contact");
    } else {
      toast.error("Wrong Creadential");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 simpalFont text-black">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={form?.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="focus:text-black placeholder:text-black text-black simpalFont w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={form?.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="placeholder:text-black text-black simpalFont w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
