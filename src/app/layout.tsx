import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import { LenisProvider } from "./providers";
import type { Metadata } from "next";
import CustomCursor from "@/components/custom-cursor";
import "./globals.css";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import SlideUpTransition from "@/components/transitions/SlideUpTransition";

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

const scotch = localFont({
  display: "swap",
  variable: "--font-scotch",
  src: "../../public/fonts/Scotch Display Light.otf",
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
    <ViewTransitions>
      <html lang="en">
        <LenisProvider>
          <body
            className={`${sequelSans.variable} ${scotch.variable} antialiased font-main bg-background`}
          >
            <SlideUpTransition  />
            <Navbar />
            {children}
            <Footer />
            <CustomCursor />
          </body>
        </LenisProvider>
      </html>
    </ViewTransitions>
  );
}
