"use client";
import clsx from "clsx";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Coupons from "./_components/Coupons";
import LeftSidebar from "../../../Components/Sidebar/LeftSidebar";
import { getLocal } from "@/utils/storage";
import { useRouter } from "next/navigation";

export default function CouponsPage() {
  const userData = getLocal("userData");
  const router = useRouter();

  // If userData is not present, redirect to login page
  if (!userData?.email && !userData?.password) {
    router.push("/login");
    return;
  }
  return (
    <main className="min-h-screen">
      <Navbar />
      <div
        className={clsx(
          "  md:px-[24px] xl:px-[64px] mt-[120px] sm:mt-[160px] mb-[60px]"
        )}
      >
        <div className="flex flex-wrap ">
          <div className="hidden lg:block w-full lg:w-1/4 ">
            <LeftSidebar />
          </div>
          <div className="w-full lg:w-3/4 lg:ps-1 md:my-4 lg:my-0">
            <Coupons />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
