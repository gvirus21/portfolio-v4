"use client";

import { type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiArrowTopRight } from "react-icons/tfi";

import SlidingLink from "@/components/ui/links/SlidingLink";
import PillButton from "../ui/buttons/PillButton";

const FOOTER_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Playground", href: "/playground" },
  // { name: "Journal", href: "/journal" },
];

const SOCIAL_MEDIA_LINKS = [
  { name: "Instagram", href: "https://instagram.com/" },
  { name: "LinkedIn", href: "https://linkedin.com/" },
];

const CONTACT_EMAIL = "gouravkumar2889@gmail.com";

const underlineStyle: CSSProperties & { "--underline-height": string } = {
  "--underline-height": "0.5px",
};

const DesktopFooterLinks = () => {
  return (
    <div className="flex justify-between w-full lg:max-w-[24rem] 2xl:max-w-[30rem] text-sm lg:mt-8 xl:mt-12">
      <nav className="flex flex-col space-y-2 2xl:space-y-2">
        {FOOTER_LINKS.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="link-underline-anim w-fit"
            style={underlineStyle}
          >
            {name}
          </Link>
        ))}
      </nav>
      <nav className="flex flex-col">
        {SOCIAL_MEDIA_LINKS.map(({ name, href }) => (
          <SlidingLink
            key={name}
            link={href}
            underlineHeight="0.5px"
            target="_blank"
            rel="noopener noreferrer"
            className="-mb-1 xl:mb-0"
          >
            {name}
          </SlidingLink>
        ))}
      </nav>
    </div>
  );
};

export function Footer() {
  const pathname = usePathname();

  const preventDuplicateNavigation =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (pathname === href) {
        event.preventDefault();
      }
    };
  return (
    <section
      className="relative h-[80vh] xs:h-[32rem] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] 2xl:h-[50vh] 3xl:h-[36vh] lg:min-h-[26rem] xl:min-h-0 font-thin md:font-light"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {/* Desktop Footer */}
      <div className="fixed bottom-0 hidden lg:flex flex-col justify-between h-[40vh] xl:h-[45vh] 2xl:h-[50vh] 3xl:h-[36vh] lg:min-h-[26rem] xl:min-h-0 w-full bg-black text-white pt-6 xl:pt-0 px-10">
        <div className="flex justify-between">
          <div>
            <h2 className="lg:text-4xl 3xl:text-5xl tracking-normal  text-center lg:text-left xl:mt-8 3xl:mt-14">
              Do it Once, Do it right.
            </h2>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:justify-between">
              <div className="flex flex-col items-center lg:items-start mt-4 sm:mt-6 lg:mt-2">
                <p className="text-base sm:text-lg 3xl:text-xl tracking-tight ">
                  Your product deserves a better site.
                </p>
                <p className="lg:mt-20 xl:mt-16 2xl:mt-14 3xl:mt-20 text-gray-200">
                  <span className="text-sm">New Business: </span>
                  <br />
                  gouravkumar2889@gmail.com
                </p>
                <div className="mt-6">
                  <PillButton variant="light" link={`mailto:${CONTACT_EMAIL}`}>
                    Drop me a Mail
                  </PillButton>
                </div>
              </div>
            </div>
          </div>

          <div className="mr-[5rem] 2xl:mr-[6rem] 3xl:mr-[10rem]">
            <DesktopFooterLinks />
            <div className="flex justify-between lg:space-x-32 xl:space-x-44 3xl:space-x-48 lg:mt-8 xl:mt-10 2xl:mt-10 3xl:mt-20 items-end text-white">
              <p className="text-sm">VSKP &#8212; INDIA</p>
              <p className="text-sm">
                <span className="mr-1">©2025</span> <br /> Gourav Kumar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile footer */}
      <div className="fixed bottom-0 flex lg:hidden flex-col justify-between gap-4 h-[80vh] xs:h-[32rem] md:h-[35vh] w-full bg-[#131313] text-white pt-5 px-4">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row flex-wrap w-[80%] space-x-2 gap-1 md:gap-3 px-1 font-dmsans font-thin tracking-tight">
            {FOOTER_LINKS.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={preventDuplicateNavigation(href)}
                className="hover:underline underline-offset-4 text-3xl transition-colors"
              >
                {name.toUpperCase()}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1 mt-1 mr-6 font-dmsans font-thin">
            {SOCIAL_MEDIA_LINKS.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 uppercase hover:underline underline-offset-4 transition-colors"
              >
                {name}
                <TfiArrowTopRight className=" mt-1 opacity-80" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-end gap-2 md:gap-4">
              <p className="md:text-lg  tracking-tight">
                Your product deserves a better site.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:underline underline-offset-4 bg-white text-black rounded-full px-2 py-[2px] text-[12px] md:text-sm tracking-tighter font-light w-fit"
              >
                Drop me a Mail
              </a>
            </div>

            <div className="flex justify-between items-end w-full md:w-[14rem] text-[10px] text-white/30 md:text-white mt-4 ml-auto mr-8">
              <p>VSKP &#8212; INDIA</p>
              <p>
                <span className="mr-1">©2025</span> <br /> Gourav Kumar
              </p>
            </div>
          </div>

          <div className="h-[0.25px] w-full bg-gray-400/50 mt-0 md:mt-2" />
          <h2 className=" text-4xl tracking-tight mb-10">
            Do it Once, Do it right.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;
