"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Apple, Smartphone, CheckCircle2, Download, ArrowRight } from "lucide-react";

export default function MetaTraderPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 z-30">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> Trading Platform
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
              Learn about <br />
              <span className="text-[#FF4500]">MetaTrader 5</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed">
              Experience the world's most powerful multi-asset platform. Choose your device below and discover unparalleled trading advantages.
            </p>
          </motion.div>

          {/* 3-Column Platforms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Windows Platform */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-white transition-colors group-hover:text-[#FF4500]">
                <Monitor className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-2xl font-medium text-white">MT5 for Windows</h3>
              <p className="mb-8 text-sm text-gray-400 border-b border-white/10 pb-6">
                What are the advantages of MetaTrader 5 for Windows?
              </p>

              <div className="flex-1 space-y-4 mb-10">
                {[
                  "One-click trading",
                  "Low spreads",
                  "Select time periods in the “History” tab",
                  "Active orders are displayed in the chart",
                  "Trade orders Close By and Multiple Close By",
                  "Editable parameters of graphic orders"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/arakkalmarkets5setup.exe"
                download
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF4500] px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#E03E00] mt-auto"
              >
                <Download className="h-5 w-5" />
                Download MT5
              </a>
            </motion.div>

            {/* iOS Platform */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-white transition-colors group-hover:text-[#FF4500]">
                <Apple className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-2xl font-medium text-white">MT5 for iOS</h3>
              <p className="mb-8 text-sm text-gray-400 border-b border-white/10 pb-6">
                What are the advantages of MetaTrader 5 for iOS?
              </p>

              <div className="flex-1 space-y-4 mb-10">
                {[
                  "Access the platform without downloading",
                  "One-click trading",
                  "Low spreads",
                  "Select time periods in the “History” tab",
                  "Active orders are displayed in the chart",
                  "Trade orders Close By and Multiple Close By",
                  "Editable parameters of graphic orders"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 mt-auto"
              >
                <Apple className="h-5 w-5" />
                App Store
              </a>
            </motion.div>

            {/* Android Platform */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-white transition-colors group-hover:text-[#FF4500]">
                <Smartphone className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-2xl font-medium text-white">MT5 for Android</h3>
              <p className="mb-8 text-sm text-gray-400 border-b border-white/10 pb-6">
                What are the advantages of the Android MetaTrader 5?
              </p>

              <div className="flex-1 space-y-4 mb-10">
                {[
                  "Application specifically designed for Android",
                  "All MT tools included",
                  "3 types of charts",
                  "50 powerful indicators",
                  "Detailed transaction history log",
                  "Interactive real-time charts can be expanded and scrolled"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3d5188148738187528045%26server%3dArakkalMarkets-Server"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 mt-auto"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.055.1205-.1455.211-.266.266L12 18.2324l-5.257-2.625c-.1205-.055-.211-.1455-.266-.266L4.764 9.1704c-.055-.1205-.055-.266 0-.3865l1.713-6.171c.055-.1205.1455-.211.266-.266L12 1.0964l5.257 1.2505c.1205.055.211.1455.266.266l1.713 6.171c.055.1205.055.266 0 .3865l-1.713 6.171zM12 2.3464l-4.525 1.077-1.475 5.31 4.525 2.263L12 2.3464zm.75 8.65L17.275 8.733l-1.475-5.31L12.75 2.346v8.65zm-.75 1.28L7.475 9.923l-1.475 5.31 5.25 2.625V12.276zm.75 0v5.582l5.25-2.625-1.475-5.31-3.775 2.353z" />
                </svg>
                Google Play
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Global CTA Section */}
      <section className="py-20 relative z-30 pb-32">
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
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
              >
                <a
                  href="https://portal.arakkalmarkets.com/register"
                  className="w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto inline-flex justify-center items-center gap-2 text-center"
                >
                  Open Live Account
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://portal.arakkalmarkets.com/opendemoaccount"
                  className="w-full rounded-lg border border-white/20 bg-black/40 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto text-center"
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