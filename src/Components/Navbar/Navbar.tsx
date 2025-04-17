"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getLocal, removeLocal } from "@/utils/storage";
import { useRouter } from "next/navigation";

const links = [
  {
    id: 1,
    slug: "/",
    label: "Home",
    hash: true,
  },
  {
    id: 2,
    slug: "#about",
    label: "About",
  },
  {
    id: 3,
    slug: "#styles",
    label: "Styles",
  },
  {
    id: 4,
    slug: "#contact",
    label: "Contact",
  },
  {
    id: 5,
    slug: `/instructor/mohan-nayak`,
    label: `Instructor`,
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = getLocal("userData");
  const router = useRouter();
  const handleLogout = () => {
    removeLocal("userData");
    router.push("/login");
  };
  return (
    <header className="bg-[#0b183a] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="MT Dance Logo"
              width={80}
              height={80}
              className="rounded-[50px]"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-white font-medium">
          {links?.map((item, index) => {
            return (
              <Link
                key={index}
                href={`${item.slug}`}
                className="hover:text-pink-500"
              >
                {item?.label}
              </Link>
            );
          })}
          {userData?.email && userData?.password && (
            <button
              onClick={handleLogout}
              className="hover:text-pink-500 cursor-pointer"
            >
              {"Logout"}
            </button>
          )}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b183a] px-4 pb-4">
          {links?.map((item, index) => {
            return (
              <Link
                key={index}
                href={`${item.slug}`}
                className="block py-2 text-white hover:text-pink-500"
              >
                {item?.label}
              </Link>
            );
          })}
          {userData?.email && userData?.password && (
            <button
              onClick={handleLogout}
              className="hover:text-pink-500 cursor-pointer"
            >
              {"Logout"}
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
