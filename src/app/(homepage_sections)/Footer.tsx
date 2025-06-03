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
      <div>
        <nav className="flex flex-col justify-between space-y-2">
          {footerLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div>
        {/* Social Media links */}
        <nav className="flex flex-col justify-between space-y-2 mr-20">
          {socialMediaLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white">
              {link.name}
            </a>
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
