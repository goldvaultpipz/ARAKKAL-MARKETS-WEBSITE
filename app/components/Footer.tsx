import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Useful Links": [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Account type", href: "/account-type" },
    { name: "Contact Us", href: "/contact" },
  ],
  "Products": [
    { name: "CFDs", href: "/cfds" },
    { name: "Metals", href: "/metals" },
  ],
  "Tools": [
    { name: "Economic Calendar", href: "/economic-calendar" },
  ],
  "Partners": [
    { name: "Introducing Broker", href: "/introducing-broker" },
  ],
};

const bottomLinks = [
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Risk Disclosure", href: "/risk-disclosure" },
  { name: "Scalping Policy", href: "/scalping-policy" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0a] pt-12 pb-8 overflow-hidden z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Section: Brand & Links */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 mb-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo Only */}
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Arakkal Markets Logo"
                width={160}
                height={160}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs mb-5 leading-relaxed">
              Take full control of your trading tasks and unlock the full potential of your investments with our advanced platform.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 text-gray-400">
              {/* X (Twitter) */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#FF4500]" aria-label="X (Twitter)">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#FF4500]" aria-label="Instagram">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#FF4500]" aria-label="Facebook">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#FF4500]" aria-label="YouTube">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h3 className="text-base text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-[#FF4500]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Legal & Disclaimers */}
        <div className="space-y-4 border-t border-white/10 pt-8 text-xs leading-relaxed text-gray-400">
          <p>
            <strong className="text-gray-300 font-semibold">Risk Warning : </strong>
            An investment in derivatives may mean investors may lose an amount even greater than their original investment. Anyone wishing to invest in any of the products mentioned should seek their own financial or professional advice. Trading of securities, stock market, commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money. Trading in the financial markets has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the markets. Don’t invest and trade with money which you can’t afford to lose. Before investing your money, make sure whether your country is allowing this or not.
          </p>
          <p>
            <strong className="text-gray-300 font-semibold">Restricted Regions : </strong>
            Arakkal Markets Limited does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, UAE, or Sudan. The services of Arakkal Markets Limited are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
          </p>
          <p>
            <strong className="text-gray-300 font-semibold">Legal : </strong>
            Arakkal Markets Limited is incorporated in St. Vincent & the Grenadines as an International Business Company with the registration number 25925 BC. The objects of the company are all subject matters not forbidden by International Business Companies (Amendment and Consolidation) Act in particular but not exclusively all commercial, financial, lending, borrowing, trading, service activities and the participation in other enterprises as well as to provide brokerage, training and managed account services in, commodities, indexes, CFDs and leveraged financial instruments.
          </p>
        </div>

        {/* Bottom Section: Copyright & Bottom Links */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Arakkal Markets Limited. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {bottomLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs text-gray-500 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}