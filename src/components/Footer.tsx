"use client";

import SlidingLink from "@/components/ui/links/SlidingLink";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import React from "react";

const FOOTER_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_MEDIA_LINKS = [
  { name: "Instagram", href: "https://instagram.com/" },
  { name: "LinkedIn", href: "https://linkedin.com/" },
];

const DesktopFooterLinks: React.FC = React.memo(() => (
  <div className="flex justify-between w-full mt-5 lg:max-w-[24rem] 2xl:max-w-[30rem] text-sm">
    <nav className="flex flex-col justify-between space-y-4">
      {FOOTER_LINKS.map((link) => (
        <Link key={link.name} href={link.href} passHref legacyBehavior>
          <a>
            <span
              className="link-underline-anim"
              style={{ "--underline-height": "0.5px" } as React.CSSProperties}
            >
              {link.name}
            </span>
          </a>
        </Link>
      ))}
    </nav>
    {/* Social Media links */}
    <div>
      <nav className="flex flex-col h-[4rem] justify-between mr-[5rem] 2xl:mr-[8rem]">
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <SlidingLink
            key={link.name}
            link={link.href}
            underlineHeight="0.5px"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </SlidingLink>
        ))}
      </nav>
    </div>
  </div>
));
DesktopFooterLinks.displayName = "DesktopFooterLinks";

export const Footer: React.FC = () => (
  <section
    className="relative h-[65vh] md:h-[50vh] lg:h-[40vh]"
    style={{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    }}
  >
    {/* Desktop Footer */}
    <div className="fixed bottom-0 hidden lg:flex flex-col justify-between h-[40vh] w-full bg-black text-white pt-10 px-10">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-normal font-thin text-center lg:text-left">
          Do it Once, Do it right.
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:justify-between">
          <div className="flex flex-col items-center lg:items-start text-base sm:text-lg md:text-xl lg:text-lg mt-4 sm:mt-6 lg:mt-4">
            <p className="tracking-tighter">
              Your product deserves a better site,
            </p>
            <a
              href="mailto:gourav@example.com"
              className="mt-2 sm:mt-4 hover:underline underline-offset-4"
            >
              Drop me a Mail
            </a>
          </div>
          <DesktopFooterLinks />
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-between items-center text-[10px] sm:text-sm mb-10 text-gray-300">
        <p>VISHAKAPATNAM, INDIA</p>
        <p>
          <span className="text-white mr-1">©2025</span> Gourav Kumar
        </p>
      </div>
    </div>

    {/* Mobile footer */}
    <div className="fixed bottom-0 flex lg:hidden flex-col justify-between gap-4 h-[65vh] md:h-[50vh] w-full bg-black text-white pt-5 px-4">
      <div className="flex justify-between">
        <div className="text-3xl flex flex-col md:flex-row justify-between gap-0 md:gap-4 px-1 font-thin">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:underline underline-offset-4 transition-colors"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1 mr-4">
          {SOCIAL_MEDIA_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 uppercase font-thin hover:underline underline-offset-4 transition-colors"
            >
              {link.name}
              <TfiArrowTopRight className="font-thin mt-1 opacity-80" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-end gap-5">
        <div>
          <p className="text-xl font-thin tracking-tight mb-2">
            Your product deserves a better site.
          </p>
          <a
            href="mailto:gourav@example.com"
            className="hover:underline underline-offset-4 bg-white text-black rounded-full px-2 py-[2px] text-sm tracking-tighter"
          >
            Drop me a Mail
          </a>
        </div>

        <div className="h-[0.25px] w-full bg-gray-400/50 mt-6" />
        <h2 className="font-thin text-4xl tracking-tight">
          Do it Once, Do it right.
        </h2>
        <div className="flex justify-between items-center text-[12px] sm:text-sm mt-5 mb-4 text-slate-400/80 tracking-tighter">
          <p>VISHAKAPATNAM, INDIA</p>
          <p>
            <span className="mr-1">©2025</span> Gourav Kumar
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
