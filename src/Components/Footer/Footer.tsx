import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
const Footer = () => {
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

  const socialLinks = [
    {
      href: "https://g.co/kgs/NBCepnu",
      label: "Google Profile",
      icon: <BsGoogle size={30} />,
    },
    {
      href: "https://www.instagram.com/mt_dance_with_fitness_world/",
      label: "Instagram",
      icon: <Instagram size={30} />,
    },
    {
      href: "https://youtube.com/@nayak27975?si=qhqVgq8qEsrLVq0e",
      label: "YouTube",
      icon: <Youtube size={30} />,
    },
    {
      href: "https://www.facebook.com/share/1CRbe5Gkde/",
      label: "Facebook",
      icon: <Facebook size={30} />,
    },
    // { href: "#", label: "Twitter", icon: <Twitter size={20} /> },
  ];

  const directionsUrl =
    "https://www.google.com/maps/place/MT+DANCE+WITH+FITNESS+WORLD/@22.7361515,75.8295663,17z/data=!4m16!1m9!3m8!1s0x3962fd0001c3e8f9:0xc5a850e1421c82f9!2sMT+DANCE+WITH+FITNESS+WORLD!8m2!3d22.7361466!4d75.8321412!9m1!1b1!16s%2Fg%2F11y6gcy66j!3m5!1s0x3962fd0001c3e8f9:0xc5a850e1421c82f9!8m2!3d22.7361466!4d75.8321412!16s%2Fg%2F11y6gcy66j?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D";
  return (
    <footer className="bg-[#0b183a] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <Link href={"/"}>
            <Image
              src="/assets/logo.png"
              alt="MT Dance Logo"
              width={80}
              height={80}
              className="mb-4 rounded-[50px]"
            />
          </Link>
          <p className="text-sm">
            MT Dance with Fitness World is your ultimate destination for dance
            and fitness excellence.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {links?.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`${item?.slug}`}
                    className="hover:underline simpalFont"
                  >
                    {item?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline simpalFont"
              >
                📍{" "}
                <span className="">
                  42-B SANGAM NAGAR Near RJ fitness Chhota Bangadda Road 
                </span>
                <span className="block">Indore, Madhya Pradesh 452006</span>
              </a>
            </li>
            <li className="flex gap-4">
              <a
                href="tel:+917869097195"
                className="hover:underline simpalFont"
              >
                📞 +91 7869097195
              </a>
              {"     "}
              <a
                href="tel:+916264294091"
                className="hover:underline simpalFont"
              >
                +91 6264294091
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:mohan1727nayak@gmail.com"
                className="hover:underline simpalFont"
              >
                mohan1727nayak@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="hover:text-gray-300"
                aria-label={social.label}
                target="_blank"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-white pt-4">
        &copy; {new Date().getFullYear()} MT Dance with Fitness World. All
        rights reserved.
      </div>

      <div className="text-center text-sm mt-2">
        Developed with ❤️ by{" "}
        <Link
          href="https://github.com/sgovind158"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Govind Sahu
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
