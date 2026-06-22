"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserPlus, MailCheck, Users, BarChart3, ArrowRight, Briefcase } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import MagicRings from "../components/MagicRings";

export default function IBProgramPage() {

  const isMobile = useIsMobile();

  const steps = [
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
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 z-30">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> IB Program
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
              Introducing <br />
              <span className="text-[#FF4500]">Broker</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed mb-10">
              The process to become an IB is easy, quick and simple. Just follow these steps and start earning commissions at once!
            </p>

            <a
              href="https://portal.arakkalmarkets.com/register"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF4500] px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#E03E00]"
            >
              <Briefcase className="h-5 w-5" />
              Become partner
            </a>
          </motion.div>

          {/* Vertical Timeline Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* The Vertical Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden sm:block"></div>

            <div className="space-y-12 sm:space-y-24">
              {steps.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}
                  >

                    {/* Center Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 top-8 sm:top-1/2 h-4 w-4 rounded-full bg-[#111111] border-2 border-[#FF4500] shadow-[0_0_15px_rgba(255,69,0,0.5)] -translate-x-1/2 sm:-translate-y-1/2 hidden sm:block z-20">
                      <div className="absolute inset-0 rounded-full bg-[#FF4500] animate-ping opacity-50"></div>
                    </div>

                    {/* Empty Space for the other side of the timeline on desktop */}
                    <div className="hidden sm:block w-1/2"></div>

                    {/* Content Card */}
                    <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-12' : 'sm:pr-12'}`}>
                      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30">

                        {/* Giant Background Number */}
                        <div className="absolute top-4 right-6 text-7xl font-bold text-white/5 transition-colors duration-300 group-hover:text-[#FF4500]/10 select-none pointer-events-none">
                          {item.step}
                        </div>

                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-[#FF4500] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF4500] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]">
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>

                        <div className="relative z-10">
                          <div className="text-sm font-bold text-[#FF4500] mb-2">Step {item.step}</div>
                          <h3 className="mb-3 text-2xl font-medium text-white tracking-wide">{item.title}</h3>
                          <p className="text-base text-gray-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Global CTA Section */}
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
                Ready to become an <span className="text-[#FF4500]">IB?</span>
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base text-gray-400 lg:text-lg"
              >
                Join our network of successful partners today and start earning lucrative commissions with our transparent and reliable program.
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