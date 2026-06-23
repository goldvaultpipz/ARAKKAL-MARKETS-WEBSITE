"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, UserPlus, ShieldCheck, Wallet } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import MagicRings from "../components/MagicRings";

export default function AccountTypePage() {

  const isMobile = useIsMobile();
  
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Header & Pricing Section */}
      <section className="relative overflow-hidden pt-20 pb-16 z-30">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> Account Type
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-6xl text-white mb-6">
              Types Of <span className="text-[#FF4500]">Accounts</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed">
              Trading Account That Suits Your Trading Style
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Account Card 1 (Swap Free) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
            >
              <div className="absolute top-0 right-0 rounded-bl-2xl bg-[#FF4500]/10 px-4 py-1.5 text-xs font-bold text-[#FF4500] border-b border-l border-[#FF4500]/20">
                Best Value
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-medium text-white mb-2">Gold Account</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">$1000</span>
                  <span className="text-sm text-gray-400">Min Deposit</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {[
                  { label: "Spread", value: "0.50" },
                  { label: "Platform", value: "MT5" },
                  { label: "Commission", value: "No" },
                  { label: "Swap", value: "Free", highlight: true },
                  { label: "Maximum Lot", value: "10" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`h-5 w-5 ${feature.highlight ? 'text-[#FF4500]' : 'text-gray-500'}`} />
                    <span className="text-base text-gray-300">
                      <span className="text-gray-400">{feature.label}:</span> {feature.value}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://portal.arakkalmarkets.com/register"
                className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#FF4500] hover:border-[#FF4500] hover:shadow-[0_0_20px_rgba(255,69,0,0.3)]"
              >
                Get Start Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </motion.div>

            {/* Account Card 2 (Swap Applicable) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
            >
              <div className="absolute top-0 right-0 rounded-bl-2xl bg-[#FF4500]/10 px-4 py-1.5 text-xs font-bold text-[#FF4500] border-b border-l border-[#FF4500]/20">
                High Volume
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-medium text-white mb-2">Gold Account</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">$1000</span>
                  <span className="text-sm text-gray-400">Min Deposit</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {[
                  { label: "Spread", value: "0.50" },
                  { label: "Platform", value: "MT5" },
                  { label: "Commission", value: "No" },
                  { label: "Swap", value: "Applicable" },
                  { label: "Maximum Lot", value: "30", highlight: true }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`h-5 w-5 ${feature.highlight ? 'text-[#FF4500]' : 'text-gray-500'}`} />
                    <span className="text-base text-gray-300">
                      <span className="text-gray-400">{feature.label}:</span> {feature.value}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://portal.arakkalmarkets.com/register"
                className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#FF4500] hover:border-[#FF4500] hover:shadow-[0_0_20px_rgba(255,69,0,0.3)]"
              >
                Get Start Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. 3 Steps Section */}
      <section className="py-12 sm:py-24 relative z-30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> Quick Start
            </div>
            <h2 className="text-4xl font-normal tracking-tight lg:text-5xl text-white mb-6">
              START TRADING IN <span className="text-[#FF4500]">3 STEPS</span>
            </h2>
            <p className="text-base text-gray-400 lg:text-lg">
              Learn how to trade stocks in just 3 steps — as well as our guide on how to choose the right stocks to help make you money.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01.",
                title: "REGISTER",
                icon: UserPlus,
                desc: "Fill in your details to create your secure Arakkal Markets account in minutes."
              },
              {
                step: "02.",
                title: "VERIFY",
                icon: ShieldCheck,
                desc: "Complete our quick identity verification process to ensure full account security."
              },
              {
                step: "03.",
                title: "FUND & TRADE",
                icon: Wallet,
                desc: "Make your first deposit and access global markets on our advanced MT5 platform."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 text-center flex flex-col items-center"
                >
                  {/* Giant Background Number */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-white/5 transition-colors duration-300 group-hover:text-[#FF4500]/10 select-none pointer-events-none">
                    {item.step.replace('.', '')}
                  </div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-[#FF4500] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF4500] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]">
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>

                  <div className="text-sm font-bold text-[#FF4500] mb-2">{item.step}</div>
                  <h3 className="mb-4 text-2xl font-medium text-white tracking-wide">{item.title}</h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. MetaTrader 5 CTA Section */}
      {/* 3. MetaTrader 5 CTA Section */}
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

            {/* Subtle dark vignette so text stays readable over the rings */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.75)_100%)]" />

            {/* Content */}
            <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center text-center px-6">
              
  {/* MT5 Logo added here */}
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="mb-6"
  >
    <Image
      src="/images/mt5.webp"
      alt="MetaTrader 5 Logo"
      width={96}
      height={96}
      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    />
  </motion.div>

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