// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about-us" },
//   { name: "Trading", href: "/account-type" },
//   { name: "Platform", href: "/metatrader-5" },
//   {
//     name: "Partnership",
//     href: "/partnership",
//     subLinks: [
//       { name: "Introducing Broker", href: "/ib-program" }
//     ]
//   },
//   {
//     name: "Products",
//     href: "/products",
//     subLinks: [
//       { name: "CFDs", href: "/cfds" },
//       { name: "Metals", href: "/metals" }
//     ]
//   },
//   { name: "Contact Us", href: "/contact-us" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

//   return (
//     <div className="absolute top-6 left-0 z-50 w-full px-4 sm:px-6 lg:px-8">
//       {/* Main Navbar Bar - Simple Fade In */}
//       <motion.nav
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-colors hover:bg-white/10"
//       >

//         {/* Logo */}
//         <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
//           <Image
//             src="/images/ARAKKALLOGONEW.png"
//             alt="Arakkal Markets Logo"
//             width={256}
//             height={256}
//             className="h-16 w-auto sm:h-20 object-contain"
//             priority
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex lg:items-center lg:space-x-8">
//           {navLinks.map((link) => (
//             <div
//               key={link.name}
//               className="relative"
//               onMouseEnter={() => setHoveredMenu(link.name)}
//               onMouseLeave={() => setHoveredMenu(null)}
//             >
//               <Link
//                 href={link.href}
//                 className="flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white py-4"
//               >
//                 {link.name}
//                 {link.subLinks && (
//                   <motion.svg
//                     animate={{ rotate: hoveredMenu === link.name ? 180 : 0 }}
//                     transition={{ duration: 0.2 }}
//                     className={`h-3 w-3 ${hoveredMenu === link.name ? 'text-[#FF4500]' : 'text-gray-400'}`}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2.5}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                   </motion.svg>
//                 )}
//               </Link>

//               {/* Desktop Submenu - Simple Fade In */}
//               <AnimatePresence>
//                 {hoveredMenu === link.name && link.subLinks && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.15 }}
//                     className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2"
//                   >
//                     <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-2xl">
//                       <div className="p-2 space-y-1">
//                         {link.subLinks.map((subLink) => (
//                           <Link
//                             key={subLink.name}
//                             href={subLink.href}
//                             className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-[#FF4500]"
//                           >
//                             {subLink.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

//         {/* Desktop Right - Sign Up */}
//         <div className="hidden lg:flex lg:items-center">
//           <a
//             href="https://portal.arakkalmarkets.com/register"
//             className="group flex items-center gap-2 rounded-xl bg-[#FF4500] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E03E00] hover:shadow-[#FF4500]/20"
//           >
//             <svg
//               className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//             Sign up
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </motion.nav>

//       {/* Mobile Dropdown Menu - Simple Fade In */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2 }}
//             className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#111111] lg:hidden shadow-2xl"
//           >
//             <div className="flex flex-col px-4 py-6 space-y-2">
//               {navLinks.map((link) => (
//                 <div key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="block rounded-lg px-4 py-3 text-base font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
//                     onClick={() => !link.subLinks && setIsOpen(false)}
//                   >
//                     {link.name}
//                   </Link>

//                   {/* Mobile Sub-links */}
//                   {link.subLinks && (
//                     <div className="ml-6 mt-1 flex flex-col space-y-1 border-l border-white/10 pl-4">
//                       {link.subLinks.map((subLink) => (
//                         <Link
//                           key={subLink.name}
//                           href={subLink.href}
//                           className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/10 hover:text-[#FF4500]"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {subLink.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               <div className="pt-4 mt-2 border-t border-white/10">
//                 <a
//                   href="https://portal.arakkalmarkets.com/register"
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF4500] px-4 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#E03E00]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                   Sign up
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Trading", href: "/account-type" },
  { name: "Platform", href: "/metatrader-5" },
  {
    name: "Partnership",
    href: "/partnership",
    subLinks: [
      { name: "Introducing Broker", href: "/ib-program" }
    ]
  },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "CFDs", href: "/cfds" },
      { name: "Metals", href: "/metals" }
    ]
  },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <div className="absolute top-6 left-0 z-50 w-full px-4 sm:px-6 lg:px-8">
      {/* Main Navbar Bar - Simple Fade In */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-colors hover:bg-white/10"
      >

        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/images/Arakalfinallogo.png"
            alt="Arakkal Markets Logo"
            width={256}
            height={256}
            className="h-14 w-auto sm:h-20 object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(link.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white py-4"
              >
                {link.name}
                {link.subLinks && (
                  <motion.svg
                    animate={{ rotate: hoveredMenu === link.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`h-3 w-3 ${hoveredMenu === link.name ? 'text-[#FF4500]' : 'text-gray-400'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                )}
              </Link>

              {/* Desktop Submenu - Simple Fade In */}
              <AnimatePresence>
                {hoveredMenu === link.name && link.subLinks && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2"
                  >
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-2xl">
                      <div className="p-2 space-y-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-[#FF4500]"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Right - Login & Sign Up */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href="https://portal.arakkalmarkets.com/login"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Log in
          </a>
          <a
            href="https://portal.arakkalmarkets.com/register"
            className="group flex items-center gap-2 rounded-xl bg-[#FF4500] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#E03E00] hover:shadow-[#FF4500]/20"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu - Simple Fade In */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#111111] lg:hidden shadow-2xl"
          >
            <div className="flex flex-col px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => !link.subLinks && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {/* Mobile Sub-links */}
                  {link.subLinks && (
                    <div className="ml-6 mt-1 flex flex-col space-y-1 border-l border-white/10 pl-4">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/10 hover:text-[#FF4500]"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 mt-2 flex flex-col gap-3 border-t border-white/10">
                <a
                  href="https://portal.arakkalmarkets.com/login"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="https://portal.arakkalmarkets.com/register"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF4500] px-4 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#E03E00]"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Sign up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}