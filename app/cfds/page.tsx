"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Coins, Droplet, LineChart, TrendingUp, ShieldCheck, Zap, Percent, Clock } from "lucide-react";

export default function CFDsPage() {
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

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 z-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> Contracts for Difference
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
              Trade <span className="text-[#FF4500]">CFDs</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed mb-4">
              Contract for difference (CFD) is a contract that reflects the performance of the underlying index futures with the profit or loss calculated as the difference between the purchase price and the sale price.
            </p>
            <p className="text-base text-gray-400 lg:text-lg leading-relaxed">
              Arakkal Markets' range of CFDs includes Metals (Gold and Silver), Oil (Brent and Crude) and Indices (German30, Stoxx50, CAC40, FTSE100, WallStreet30, US Tech 100 and SPX500).
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Benefits Grid Section */}
      <section className="py-12 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Market Direction",
                desc: "Buy if you think the market will go up, sell if you think the market will fall.",
                icon: TrendingUp
              },
              {
                title: "Leveraged Trading",
                desc: "Open position with a margin from USD 400 per 1 lot – there is no need to pay the full value of the position.",
                icon: ShieldCheck
              },
              {
                title: "No Financing Charges",
                desc: "There is no financing charge if your position remains open at the end of the trading session.",
                icon: Clock
              },
              {
                title: "Zero Commission",
                desc: "There are absolutely no commission charges on our diverse range of index CFDs.",
                icon: Percent
              },
              {
                title: "Lower Spreads",
                desc: "Experience a wide variety of CFD products accompanied by highly competitive and lower spreads.",
                icon: Zap
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-[#FF4500] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF4500] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-2xl font-medium text-white">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-gray-400">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}

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

      {/* 4. Global CTA Section */}
      <section className="py-20 relative z-30 pb-32 mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#191717] py-24 shadow-2xl"
          >
            <Image
              src="/images/6752871d92d2860c7fca47cf_lightsbg.webp"
              alt="Stars background"
              fill
              className="object-cover opacity-80"
            />
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: "33.333%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 md:translate-y-1/2"
            >
              <Image
                src="/images/675652b827df88bb5eb52b72_moonv2.webp"
                alt="Moon horizon"
                width={1600}
                height={800}
                className="mx-auto h-auto w-[150%] max-w-none md:w-full opacity-60"
              />
            </motion.div>

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

                <a
                  href="https://portal.arakkalmarkets.com/opendemoaccount"
                  className="w-full rounded-lg border border-white/20 bg-black/40 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto block sm:inline-block"
                >
                  Try Demo Account
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}