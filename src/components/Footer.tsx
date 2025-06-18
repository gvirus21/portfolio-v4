"use client";

import SlidingLink from "@/components/ui/links/SlidingLink";

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
          <a key={link.name} href={link.href}>
            <span
              className="link-underline-anim"
              style={{ "--underline-height": "0.5px" } as React.CSSProperties}
            >
              {link.name}
            </span>
          </a>
        ))}
      </nav>
      {/* Social Media links */}
      <div>
        <nav className="flex flex-col h-[4rem] justify-between mr-[10rem]">
          {socialMediaLinks.map((link) => (
            <SlidingLink
              key={link.name}
              link={link.href}
              underlineHeight="0.5px"
            >
              {link.name}
            </SlidingLink>
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
