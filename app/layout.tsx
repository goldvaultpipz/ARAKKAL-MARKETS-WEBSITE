// import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.arakkalmarkets.com"), 
//   title: {
//     default: "Arakkal Markets | Premium Global Trading Platform",
//     template: "%s | Arakkal Markets", 
//   },
//   description: "Experience the world's most powerful multi-asset trading platform. Trade Forex, Gold, and CFDs with Arakkal Markets. Enjoy ultra-fast execution, tight spreads, and tier-1 security.",
//   keywords: ["Arakkal Markets", "Forex Trading", "Gold Trading", "CFDs", "MetaTrader 5", "MT5", "Online Trading Platform"],
//   authors: [{ name: "Arakkal Markets" }],
//   creator: "Arakkal Markets",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.arakkalmarkets.com",
//     title: "Arakkal Markets | Premium Global Trading Platform",
//     description: "Unlock your investment potential. Trade Forex, Gold, and CFDs with tier-1 security and lightning-fast execution.",
//     siteName: "Arakkal Markets",
//     images: [
//       {
//         url: "/images/ARAKKALLOGO.png", 
//         width: 1200,
//         height: 630,
//         alt: "Arakkal Markets Trading Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Arakkal Markets | Premium Global Trading Platform",
//     description: "Unlock your investment potential. Trade Forex, Gold, and CFDs with tier-1 security.",
//     images: ["/images/ARAKKALLOGO.png"], 
//     creator: "@ArakkalMarkets", 
//   },
//   icons: {
//     icon: "/favicon.ico", 
//     apple: "/apple-touch-icon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${montserrat.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col font-sans">
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arakkalmarkets.com"), 
  title: {
    default: "Arakkal Markets | Premium Global Trading Platform",
    template: "%s | Arakkal Markets", 
  },
  description: "Experience the world's most powerful multi-asset trading platform. Trade Forex, Gold, and CFDs with Arakkal Markets. Enjoy ultra-fast execution, tight spreads, and tier-1 security.",
  keywords: ["Arakkal Markets", "Forex Trading", "Gold Trading", "CFDs", "MetaTrader 5", "MT5", "Online Trading Platform"],
  authors: [{ name: "Arakkal Markets" }],
  creator: "Arakkal Markets",
  
  // ADDED: Robots instructions for perfect Google indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.arakkalmarkets.com",
    title: "Arakkal Markets | Premium Global Trading Platform",
    description: "Unlock your investment potential. Trade Forex, Gold, and CFDs with tier-1 security and lightning-fast execution.",
    siteName: "Arakkal Markets",
    images: [
      {
        url: "/images/ARAKKALLOGO.png", 
        width: 1200,
        height: 630,
        alt: "Arakkal Markets Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arakkal Markets | Premium Global Trading Platform",
    description: "Unlock your investment potential. Trade Forex, Gold, and CFDs with tier-1 security.",
    images: ["/images/ARAKKALLOGO.png"], 
    creator: "@ArakkalMarkets", 
  },
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}