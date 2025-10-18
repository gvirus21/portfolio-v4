import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "../components/page-sections/Navbar";
import GetInTouch from "@/components/page-sections/GetInTouch";
import Footer from "@/components/page-sections/Footer";
import CustomCursor from "@/components/ui/custom-cursor";
import PageTransition from "@/components/transitions/PageTransition";
import { LenisProvider } from "./providers";
import "./globals.css";

const sequelSans = localFont({
  display: "swap",
  variable: "--font-sequel-sans",
  src: [
    {
      path: "../../public/fonts/Sequel Sans Light Disp.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sequel Sans Light Obl Disp.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Sequel Sans Book Body.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sequel Sans Book Obl Body.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Sequel Sans Medium Head.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sequel Sans Medium Obl Body.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Sequel Sans Semi Bold Disp.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sequel Sans Semi Bold Obl Disp.otf",
      weight: "600",
      style: "italic",
    },
  ],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["100", "300", "500", "600", "800"],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sourcecodepro",
  weight: ["200", "300", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Gourav Kumar",
  description: "web portfolio of Gourav Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body
          className={`${sequelSans.variable} ${dmSans.variable} ${sourceCodePro.variable} antialiased font-main bg-background`}
        >
          <PageTransition>
            <Navbar />
            {children}
            <GetInTouch />
            <Footer />
            <CustomCursor />
          </PageTransition>
        </body>
      </LenisProvider>
    </html>
  );
}
