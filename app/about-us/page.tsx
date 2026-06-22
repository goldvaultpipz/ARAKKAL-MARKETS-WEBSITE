"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Cpu, Star, Quote } from "lucide-react";
import MagicRings from "../components/MagicRings";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function AboutPage() {
  // 2. Initialize the hook
  const isMobile = useIsMobile();

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Hero & Intro Section */}
      <section className="relative overflow-hidden pt-20 pb-16 z-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Tag/Badge matching main page */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> About Us
            </div>

            {/* Heading matching main page H2 sizing */}
            <h1 className="text-5xl font-normal tracking-tight lg:text-6xl text-white mb-8">
              ABOUT <br />
              <span className="text-[#FF4500]">Our Company</span>
            </h1>

            {/* Paragraphs matching main page sizing */}
            <p className="mx-auto max-w-2xl text-base text-gray-400 lg:text-lg">
              Arakkal Markets brings the future of online trading. Using cutting-edge technologies and advanced trading platforms. This means the fastest order execution, deep liquidity and tightest spreads.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 lg:text-lg">
              When you choose to start trading with Arakkal Markets, you get unparalleled advantages and institutional-grade liquidity, along with a host of other benefits.
            </p>
          </motion.div>

          {/* Quick Benefits Row */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {[
              "Tight Spreads",
              "Low Min Deposit",
              "Superior Execution",
              "24/5 Client Support"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 px-4 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-[#FF4500]" />
                <span className="text-sm lg:text-base font-medium text-white">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Our Driven Mission (Quotes Section) */}
      <section className="py-12 sm:py-20 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Quote 1 */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >
              <Quote className="absolute top-6 right-6 h-24 w-24 text-white/5" />
              <div className="relative z-10">
                <p className="text-2xl font-medium text-white leading-snug">
                  "We are driven to do the best job possible. We pride ourselves on cultivating lasting client relationships built on trust and mutual respect."
                </p>
              </div>
            </motion.div>

            {/* Quote 2 */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-[#FF4500]/20 bg-[#FF4500]/5 p-10 backdrop-blur-md"
            >
              <Quote className="absolute top-6 right-6 h-24 w-24 text-[#FF4500]/10" />
              <div className="relative z-10">
                <p className="text-2xl font-medium text-white leading-snug">
                  "The passion to see our traders’ success in financial market drives us everyday to consistently achieve our mission."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Core Pillars Grid */}
      <section className="py-12 sm:py-20 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Pillar 1 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-medium text-white">Global Infrastructure</h3>
              <p className="text-base leading-relaxed text-gray-400">
                Our company has experts and first-class technology used in trading with the world.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-medium text-white">Cutting-Edge Technology</h3>
              <p className="text-base leading-relaxed text-gray-400">
                The company has a modern operating system. With cloud computing, resulting in faster data transfers.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-medium text-white">Superb Experience</h3>
              <p className="text-base leading-relaxed text-gray-400">
                Leading technology combined with outstanding customer service to allow customers to experience the premium level.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. MetaTrader 5 CTA Section */}
      <section className="py-12 sm:py-20 relative z-30 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] py-24 shadow-2xl text-center"
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
                rotation={isMobile ? 90 : 0} // 3. Used the hook here!
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

            {/* Subtle dark vignette so text stays readable over the rings */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.75)_100%)]" />

            {/* Content */}
            <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center text-center px-6">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl font-normal tracking-tight lg:text-6xl text-white uppercase"
              >
                MetaTrader 5
              </motion.h2>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base text-gray-400 lg:text-lg"
              >
                Arakkal Markets provides you with the world-renown MetaTrader 5. Available on all major platforms, you can trade from anywhere at any time.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
              >
                <a
                  href="https://portal.arakkalmarkets.com/register"
                  className="w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto"
                >
                  Open Live Account
                </a>
                <a
                  href="https://portal.arakkalmarkets.com/opendemoaccount"
                  className="w-full rounded-lg border border-white/20 bg-black/40 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
                >
                  Open Demo Account
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}