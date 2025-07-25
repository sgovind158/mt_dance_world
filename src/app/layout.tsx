import type { Metadata } from "next";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import Toast from "@/Components/Toast/Toast";
import { GoogleTagManager } from "@next/third-parties/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

// Add Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MT Dance World With Fitness",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
        <Toast />
        {process.env.NEXT_PUBLIC_GTM_ID && (
  <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
)}
      </body>
    </html>
  );
}
