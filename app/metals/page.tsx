"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Coins, ShieldCheck, TrendingUp, Gem, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import MagicRings from "../components/MagicRings";

export default function MetalsPage() {

  const isMobile = useIsMobile();

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
        {/* Subtle radial ambient glow matching gold/amber accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> Precious Commodities
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
              Spot <span className="text-[#FF4500]">Metals</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed">
              Trade gold, silver, platinum, and palladium pairs. Expand your portfolio with tight spreads and high-liquidity underlying assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview & Features Grid Section */}
      <section className="py-12 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

            {/* Overview Card */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                <Gem className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-2xl font-medium text-white">Overview</h3>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Trade precious metal pairs including Gold, Silver, Platinum and Palladium. Competitive and flexible terms suitable for investors and hedgers.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Diversify your portfolio with precious metals, react to global events or take your position in our popular energy and agricultural commodities. Gold is often seen as a safe haven in times of uncertainty or economic turmoil. Silver has many industrial uses and is seen as a measure of economic growth.
              </p>
            </motion.div>

            {/* Metals Trading Card */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                <Layers className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-2xl font-medium text-white">Metals Trading</h3>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Trading spot metals allows investors to expand their portfolio by taking long or short positions on spot gold and silver. We ensure that your orders are executed at the most accurate and competitive prices.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Spot gold is more valuable than spot silver, but they both share strong price movements. Trade precious metals to take advantage of price movements or to diversify an existing portfolio.
              </p>
            </motion.div>

          </div>

          {/* Quick Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Safe Haven Assets", desc: "Utilize spot gold to buffer your accounts against high inflation or intense global marketplace volatility.", icon: ShieldCheck },
              { title: "Strong Price Volatility", desc: "Capitalize on regular macro-economic shifts and regular intraday trading patterns present across metals.", icon: TrendingUp },
              { title: "Ultra Flexible Terms", desc: "Execute with variable trade parameters and robust options built intentionally for both hedgers and scalpers.", icon: Coins }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-start gap-4"
                >
                  <div className="text-[#FF4500] shrink-0 mt-1">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">{pillar.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Contract Specification Table Section */}
      <section className="py-16 relative z-30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md shadow-2xl"
          >
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-medium text-white mb-4">Precious Metals Contract Specification</h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Join the global 3 trillion daily turnover world of currencies trading. Get access to the world´s largest financial markets and trade all major and cross currencies on highly competitive terms.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 shadow-inner">
              <table className="w-full text-left text-sm text-gray-300 min-w-[600px]">
                <thead className="border-b border-white/10 text-white font-medium uppercase tracking-wider text-xs bg-white/[0.02]">
                  <tr>
                    <th className="px-6 py-5">Markets</th>
                    <th className="px-6 py-5 text-right">Sell</th>
                    <th className="px-6 py-5 text-right">Buy</th>
                    <th className="px-6 py-5 text-right">Change, %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {contractData.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-white/5">
                      <td className="px-6 py-4 font-semibold text-white">{row.market}</td>
                      <td className="px-6 py-4 font-mono text-right">{row.sell}</td>
                      <td className="px-6 py-4 font-mono text-right">{row.buy}</td>
                      <td className={`px-6 py-4 font-bold text-right ${row.color}`}>
                        {parseFloat(row.change) > 0 ? "+" : ""}{row.change}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Global Premium Design CTA */}
      <section className="py-20 relative z-30 pb-32 mt-12">
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
                Trade Metals <span className="text-[#FF4500]">Securely</span>
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base text-gray-400 lg:text-lg"
              >
                Unlock liquidity hubs and instantly hedge your assets across institutional gold and silver spreads.
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