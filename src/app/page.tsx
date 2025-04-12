import Navbar from "@/Components/Navbar/Navbar";
import HeroSection from "./(Home)/HeroSection";
import AboutUs from "./(Home)/AboutUs";
import DanceStyles from "./(Home)/DanceStyles";
import WhyChooseUse from "./(Home)/WhyChooseUse";
import Contact from "./(Home)/Contact";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <DanceStyles />
      <WhyChooseUse />
      <Contact />
      <Footer />
    </main>
  );
}
