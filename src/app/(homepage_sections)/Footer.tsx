"use client";

import FlipLink from "@/components/ui/FlipLink";

const FooterLinks = () => {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialMediaLinks = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <div className="flex justify-between w-full max-w-[30rem] 2xl:max-w-[40rem] text-sm">
      
      <nav className="flex flex-col justify-between space-y-4">
        {footerLinks.map((link) => (
          <FlipLink key={link.name} href={link.href}>
            {link.name}
          </FlipLink>
        ))}
      </nav>
      {/* Social Media links */}
      <div>
        <nav className="flex flex-col h-[3.5rem] justify-between mr-[10rem]">
          {socialMediaLinks.map((link) => (
            <FlipLink key={link.name} href={link.href}>
              {link.name}
            </FlipLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <section
      className="relative h-[40vh]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="fixed bottom-0 flex flex-col justify-between h-[40vh] w-full bg-black text-white pt-10 px-10">
        <div className="">
          <h2 className="text-4xl tracking-normal font-thin">
            Do it Once, Do it right.
          </h2>
          <div className="flex justify-between">
            <div className="mt-10">
              <div>
                <p>Your product deserves a better site,</p>
                <a href="#" className="hover:underline underline-offset-4">
                  Drop me a Mail
                </a>
              </div>
            </div>
            <FooterLinks />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center mb-10">
          <p>VISHAKAPATNAM, INDIA</p>
          <p>
            <span className="text-white mr-1">©2025</span> Gourav Kumar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
