"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Coins, Droplet, LineChart, Shield, Target } from "lucide-react";
import MagicRings from "../components/MagicRings";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ProductsPage() {

  const isMobile = useIsMobile();
  
  // Table Data Structures
  const metalsData = [
    { symbol: "XAU/USD", lot: "100 troy oz", value: "$1(USD)", currency: "USD", minLot: "Mini Lot", spread: "2.0~3.5", leverage: "up to 200:1", hours: "18:00~17:00" },
    { symbol: "XAU/USD (mini)", lot: "10 troy oz", value: "$0.1(USD)", currency: "USD", minLot: "Mini Lot", spread: "2.0~3.5", leverage: "up to 200:1", hours: "18:00~17:00" },
    { symbol: "XAU/EUR", lot: "100 troy oz", value: "$1(EUR)", currency: "EUR", minLot: "Mini Lot", spread: "2.0~3.5", leverage: "up to 200:1", hours: "18:00~17:00" },
    { symbol: "XAU/AUD", lot: "100 troy oz", value: "$1(AUD)", currency: "AUD", minLot: "Mini Lot", spread: "2.0~3.5", leverage: "up to 200:1", hours: "18:00~17:00" },
    { symbol: "XAG/USD", lot: "5,000 troy oz", value: "$5(USD)", currency: "USD", minLot: "Mini Lot", spread: "3.0~4.5", leverage: "up to 200:1", hours: "18:00~17:00" },
    { symbol: "XAG/AUD", lot: "5,000 troy oz", value: "$5(AUD)", currency: "AUD", minLot: "Mini Lot", spread: "3.0~4.5", leverage: "up to 200:1", hours: "18:00~17:00" },
    { symbol: "XPD/USD", lot: "100 troy oz", value: "$1(USD)", currency: "USD", minLot: "Mini Lot", spread: "12~14", leverage: "up to 200:1", hours: "18:00~17:00" },
    { symbol: "XPT/USD", lot: "50 troy oz", value: "$0.5(USD)", currency: "USD", minLot: "Mini Lot", spread: "13~15", leverage: "up to 200:1", hours: "18:00~17:00" },
  ];

  const oilGasData = [
    { symbol: "Brent", lot: "1,000 barrels", value: "$10(USD)", currency: "USD", minLot: "Mini Lot", spread: "1", leverage: "up to 100:1", hours: "20:00~17:00" },
    { symbol: "Crude", lot: "1,000 barrels", value: "$10(USD)", currency: "USD", minLot: "Mini Lot", spread: "0.9", leverage: "up to 100:1", hours: "18:00~17:00" },
    { symbol: "NGas", lot: "10,000 MMBTUs", value: "$10(USD)", currency: "USD", minLot: "Mini Lot", spread: "1.5", leverage: "up to 100:1", hours: "18:00~17:00" },
  ];

  const indexData = [
    { symbol: "DE30", desc: "Germany30", value: "2.5 EUR", minLot: "Mini", spread: "1.5", margin: "10%", exchange: "Eurex", hours: "02:05~16:00" },
    { symbol: "DE30(mini)", desc: "Germany30(mini)", value: "1 EUR", minLot: "Mini", spread: "1.5", margin: "10%", exchange: "Eurex", hours: "02:05~16:00" },
    { symbol: "EU50", desc: "Stoxx50", value: "1 EUR", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "Eurex", hours: "17:05~17:00" },
    { symbol: "UK100", desc: "FTSE100", value: "1 GBP", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "NYSE Euronext", hours: "17:05~17:00" },
    { symbol: "FR40", desc: "CAC40", value: "1 EUR", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "NYSE Euronext", hours: "17:05~17:00" },
    { symbol: "JP225", desc: "Nikkei225", value: "100 JPY", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "TSE", hours: "17:05~17:00" },
    { symbol: "AU200", desc: "ASE200", value: "1 AUD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "ASE", hours: "17:05~17:00" },
    { symbol: "US30", desc: "WallStreet30", value: "1 USD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "CBOT", hours: "17:05~17:00" },
    { symbol: "US30(mini)", desc: "WallStreet30(mini)", value: "0.1 USD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "CBOT", hours: "17:05~17:00" },
    { symbol: "US100", desc: "US Tech100", value: "10 USD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "CME", hours: "17:05~17:00" },
    { symbol: "US100(mini)", desc: "US Tech100(mini)", value: "1 USD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "CME", hours: "17:05~17:00" },
    { symbol: "SP500", desc: "SPX500", value: "25 USD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "CME", hours: "17:05~17:00" },
    { symbol: "SP500(mini)", desc: "SPX500(mini)", value: "10 USD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "CME", hours: "17:05~17:00" },
    { symbol: "Spain35", desc: "IBEX35", value: "1 EUR", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "MSE", hours: "03:00~14:00" },
    { symbol: "HK50", desc: "Hong Kong50", value: "1 HKD", minLot: "Mini", spread: "1.5", margin: "0.5%", exchange: "SEHK", hours: "21:15~11:45" },
  ];

  const contractData = [
    { market: "GOLD SPOT", sell: "1401.15", buy: "1401.42", change: "-0.54", color: "text-red-500" },
    { market: "GOLDEURO", sell: "1252.25", buy: "1252.55", change: "-0.54", color: "text-red-500" },
    { market: "GOLDgr", sell: "41.575", buy: "41.583", change: "0.05", color: "text-green-500" },
    { market: "GOLDoz", sell: "1293.11", buy: "1293.43", change: "0.05", color: "text-green-500" },
    { market: "PLATINUM", sell: "901.65", buy: "903.15", change: "0.84", color: "text-green-500" },
    { market: "SILVER SPOT", sell: "15.575", buy: "15.599", change: "0.63", color: "text-green-500" },
    { market: "SILVEREURO", sell: "13.289", buy: "13.327", change: "-0.21", color: "text-red-500" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 z-30">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> Global Instruments
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
              Trade <span className="text-[#FF4500]">Products</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed mb-10">
              Access the world's largest financial markets and trade major instruments on competitive terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview & Metals Trading Info */}
      <section className="py-12 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-medium text-white">Overview</h3>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Trade precious metal pairs including Gold, Silver, Platinum and Palladium. Competitive and flexible terms suitable for investors and hedgers.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Diversify your portfolio with precious metals, react to global events or take your position in our popular energy and agricultural commodities. Gold is often seen as a safe haven in times of uncertainty.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-medium text-white">Metals Trading</h3>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Trading spot metals allows investors to expand their portfolio by taking long or short positions on spot gold and silver. We ensure that your orders are executed at the most accurate and competitive prices.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Spot gold is more valuable than spot silver, but they both share strong price movements, allowing for excellent trading opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Tables Section */}
      <section className="py-20 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">

          {/* METALS TABLE */}
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4500]/10 text-[#FF4500]">
                <Coins className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-medium text-white">Metals</h2>
                <p className="text-gray-400 text-sm mt-1">Metal Tradable from Gold and Silver major metal CFDs.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <table className="w-full text-left text-sm text-gray-300 min-w-[800px]">
                <thead className="border-b border-white/10 bg-black/40 text-white font-medium uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-5">Symbol</th>
                    <th className="px-6 py-5">Standard Lot</th>
                    <th className="px-6 py-5">Point Value</th>
                    <th className="px-6 py-5">Currency</th>
                    <th className="px-6 py-5">Min Lot Size</th>
                    <th className="px-6 py-5">Spread From</th>
                    <th className="px-6 py-5">Leverage</th>
                    <th className="px-6 py-5">Trading Hours (NY)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {metalsData.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-white/5">
                      <td className="px-6 py-4 font-semibold text-white">{row.symbol}</td>
                      <td className="px-6 py-4">{row.lot}</td>
                      <td className="px-6 py-4">{row.value}</td>
                      <td className="px-6 py-4">{row.currency}</td>
                      <td className="px-6 py-4">{row.minLot}</td>
                      <td className="px-6 py-4 text-[#FF4500] font-medium">{row.spread}</td>
                      <td className="px-6 py-4">{row.leverage}</td>
                      <td className="px-6 py-4 text-gray-500">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* OIL & GAS TABLE */}
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4500]/10 text-[#FF4500]">
                <Droplet className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-medium text-white">Oil & Gas</h2>
                <p className="text-gray-400 text-sm mt-1">WTI and Brent Crude major trading classification.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <table className="w-full text-left text-sm text-gray-300 min-w-[800px]">
                <thead className="border-b border-white/10 bg-black/40 text-white font-medium uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-5">Symbol</th>
                    <th className="px-6 py-5">Standard Lot</th>
                    <th className="px-6 py-5">Point Value</th>
                    <th className="px-6 py-5">Currency</th>
                    <th className="px-6 py-5">Min Lot Size</th>
                    <th className="px-6 py-5">Spread From</th>
                    <th className="px-6 py-5">Leverage</th>
                    <th className="px-6 py-5">Trading Hours (NY)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {oilGasData.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-white/5">
                      <td className="px-6 py-4 font-semibold text-white">{row.symbol}</td>
                      <td className="px-6 py-4">{row.lot}</td>
                      <td className="px-6 py-4">{row.value}</td>
                      <td className="px-6 py-4">{row.currency}</td>
                      <td className="px-6 py-4">{row.minLot}</td>
                      <td className="px-6 py-4 text-[#FF4500] font-medium">{row.spread}</td>
                      <td className="px-6 py-4">{row.leverage}</td>
                      <td className="px-6 py-4 text-gray-500">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* INDICES TABLE */}
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4500]/10 text-[#FF4500]">
                <LineChart className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-medium text-white">Index</h2>
                <p className="text-gray-400 text-sm mt-1">Tradable from some of the major index CFDs globally.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <table className="w-full text-left text-sm text-gray-300 min-w-[900px]">
                <thead className="border-b border-white/10 bg-black/40 text-white font-medium uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-5">Symbol</th>
                    <th className="px-6 py-5">Description</th>
                    <th className="px-6 py-5">Point Value</th>
                    <th className="px-6 py-5">Min Lot Size</th>
                    <th className="px-6 py-5">Spread From</th>
                    <th className="px-6 py-5">Required Margin</th>
                    <th className="px-6 py-5">Exchange</th>
                    <th className="px-6 py-5">Trading Hours (NY)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {indexData.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-white/5">
                      <td className="px-6 py-4 font-semibold text-white">{row.symbol}</td>
                      <td className="px-6 py-4">{row.desc}</td>
                      <td className="px-6 py-4">{row.value}</td>
                      <td className="px-6 py-4">{row.minLot}</td>
                      <td className="px-6 py-4 text-[#FF4500] font-medium">{row.spread}</td>
                      <td className="px-6 py-4">{row.margin}</td>
                      <td className="px-6 py-4 text-gray-400">{row.exchange}</td>
                      <td className="px-6 py-4 text-gray-500">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Contract Specification (Ticker Table) */}
      <section className="py-12 relative z-30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-[#FF4500]/20 bg-[#FF4500]/5 p-8 md:p-12 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-medium text-white mb-4">Precious Metals Contract Specification</h2>
              <p className="text-gray-400">
                Join the global 3 trillion daily turnover world of currencies trading. Get access to the world´s largest financial markets and trade the all major and cross currencies on competitive terms.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="border-b border-white/10 text-white font-medium uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-4">Markets</th>
                    <th className="px-6 py-4">Sell</th>
                    <th className="px-6 py-4">Buy</th>
                    <th className="px-6 py-4">Change, %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {contractData.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-white/5">
                      <td className="px-6 py-4 font-semibold text-white">{row.market}</td>
                      <td className="px-6 py-4 font-mono">{row.sell}</td>
                      <td className="px-6 py-4 font-mono">{row.buy}</td>
                      <td className={`px-6 py-4 font-bold ${row.color}`}>
                        {parseFloat(row.change) > 0 ? "+" : ""}{row.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Global CTA Section */}
      {/* Global CTA Section */}
      <section className="py-20 relative z-30 pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] py-24 shadow-2xl"
          >
            {/* MagicRings Background — full bleed behind content */}
            <div className="absolute inset-0 z-0">
              <MagicRings
                color="#A855F7"
                colorTwo="#6366F1"
                ringCount={6}
                speed={1}
                attenuation={10}
                lineThickness={2}
                baseRadius={0.5}
                radiusStep={0.1}
                scaleRate={0.1}
                opacity={1}
                blur={0}
                noiseAmount={0.1}
                rotation={isMobile ? 90 : 0} // Uses the hook here!
                ringGap={1.5}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={false}
                mouseInfluence={0.2}
                hoverScale={1.2}
                parallax={0.05}
                clickBurst={false}
              />
            </div>

            {/* Subtle dark vignette so text stays readable */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.75)_100%)]" />

            <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center text-center px-6">
              <motion.h2
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl font-normal tracking-tight lg:text-6xl text-white"
              >
                Start Your Trading <span className="text-[#FF4500]">Journey Today</span>
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base text-gray-400 lg:text-lg"
              >
                Open an account today and experience our premium execution, <br className="hidden sm:block" />
                tight spreads, and world-class trading environment.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
              >
                <a
                  href="https://portal.arakkalmarkets.com/register"
                  className="group w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto inline-flex justify-center items-center gap-2"
                >
                  Open Live Account
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}