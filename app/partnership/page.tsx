"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserPlus, MailCheck, Users, BarChart3, ArrowRight } from "lucide-react";

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Hero & Intro Section */}
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
              <span className="text-[#FF4500]">✦</span> Partnership
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
              How to become <br />
              <span className="text-[#FF4500]">a Partner</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed mb-10">
              The process to become an Introducing Broker (IB) is easy, quick and simple. Just follow these steps and start earning commissions at once!
            </p>

            <a
              href="https://portal.arakkalmarkets.com/register"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF4500] px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#E03E00]"
            >
              Register as partner
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* 4-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {[
              {
                step: "01",
                title: "Open a Partner Account",
                desc: "Open a Partner Account at Arakkal Markets to initiate your journey as an Introducing Broker.",
                icon: UserPlus
              },
              {
                step: "02",
                title: "Get Approved",
                desc: "Once you have successfully opened a Partner Account, you will receive an email confirmation for the approval of your IB status.",
                icon: MailCheck
              },
              {
                step: "03",
                title: "Introduce Clients",
                desc: "Congratulations! You are now an IB. Start introducing clients to Arakkal Markets and build your network.",
                icon: Users
              },
              {
                step: "04",
                title: "Track Your Business",
                desc: "Once you become an IB, you will be given access to your personal IB account where you can track your clients and business with utmost ease.",
                icon: BarChart3
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
                >
                  {/* Giant Background Number */}
                  <div className="absolute top-4 right-6 text-8xl font-bold text-white/5 transition-colors duration-300 group-hover:text-[#FF4500]/10 select-none pointer-events-none">
                    {item.step}
                  </div>

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-[#FF4500] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF4500] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]">
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>

                  <div className="relative z-10">
                    <div className="text-sm font-bold text-[#FF4500] mb-2">Step {item.step}</div>
                    <h3 className="mb-4 text-2xl font-medium text-white tracking-wide">{item.title}</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 2. Global CTA Section (Partner Focused) */}
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
                Ready to Join <span className="text-[#FF4500]">Our Network?</span>
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base text-gray-400 lg:text-lg"
              >
                Become an Introducing Broker today and partner with a globally recognized, secure, and intuitive digital trading platform.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
              >
                <a
                  href="https://portal.arakkalmarkets.com/register"
                  className="group w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto inline-flex justify-center items-center gap-2"
                >
                  Register as partner
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