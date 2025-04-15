import { Metadata } from "next";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Bio from "./_com/Bio";
import Contact from "@/app/(Home)/Contact";

export const metadata: Metadata = {
  title: "Instructor Bio - Dance Academy",
};

//instructors
const InstructorPage = () => {
  return (
    <>
      <Navbar />
      <Bio />
      <Contact />
      <Footer />
    </>
  );
};

export default InstructorPage;
