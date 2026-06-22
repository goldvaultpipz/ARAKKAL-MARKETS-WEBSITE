// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { MapPin, Building2, Phone, Mail, Send, ArrowRight } from "lucide-react";

// export default function ContactPage() {
//   const contactMethods = [
//     {
//       title: "Registered Address",
//       details: "Suite 305, Griffith Corporate Centre,\nKingstown, St. Vincent and the Grenadines.",
//       icon: MapPin
//     },
//     {
//       title: "Physical Address",
//       details: "No: 752, Level 5, Orion City, Dr Danister De Silva Mawatha, Colombo 00900, Sri Lanka",
//       icon: Building2
//     },
//     {
//       title: "Phone",
//       details: "+94 7813 52833",
//       icon: Phone,
//       isLink: true,
//       href: "tel:+94781352833"
//     },
//     {
//       title: "Email Address",
//       details: "support@arakkalmarkets.com",
//       icon: Mail,
//       isLink: true,
//       href: "mailto:support@arakkalmarkets.com"
//     }
//   ];

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

//       {/* 1. Hero Section */}
//       <section className="relative overflow-hidden pt-20 pb-16 z-30">
//         {/* Subtle background glow */}
//         <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div 
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
//           >
//             <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
//               <span className="text-[#FF4500]">✦</span> Support & Inquiries
//             </div>

//             <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
//               Contact <span className="text-[#FF4500]">Us</span>
//             </h1>

//             <p className="text-base text-gray-400 lg:text-lg leading-relaxed">
//               Who we are? If you have questions or would like more information, please get in touch with us. We endeavour to respond to all queries within 24 hours.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. Contact Grid & Form Section */}
//       <section className="py-12 relative z-30">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

//             {/* Left Side: Contact Cards Grid (Spans 2 columns on Desktop) */}
//             <div className="lg:col-span-2 flex flex-col gap-6">
//               <motion.h3 
//                 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
//                 className="text-3xl font-medium text-white mb-2"
//               >
//                 Get In Touch
//               </motion.h3>

//               {contactMethods.map((method, index) => {
//                 const Icon = method.icon;
//                 return (
//                   <motion.div 
//                     key={index}
//                     initial={{ y: 40, opacity: 0 }} 
//                     whileInView={{ y: 0, opacity: 1 }} 
//                     viewport={{ once: true }} 
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
//                   >
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF4500]/10">
//                       <Icon className="h-6 w-6" strokeWidth={1.5} />
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1.5">{method.title}</h4>
//                       {method.isLink ? (
//                         <a href={method.href} className="text-lg font-medium text-white hover:text-[#FF4500] transition-colors whitespace-pre-line">
//                           {method.details}
//                         </a>
//                       ) : (
//                         <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">
//                           {method.details}
//                         </p>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Right Side: Contact Form (Spans 3 columns on Desktop) */}
//             <motion.div 
//               initial={{ y: 40, opacity: 0 }} 
//               whileInView={{ y: 0, opacity: 1 }} 
//               viewport={{ once: true }} 
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="lg:col-span-3 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md shadow-2xl"
//             >
//               <h3 className="text-3xl font-medium text-white mb-8">Send us a message</h3>

//               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Name Input */}
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
//                     <input 
//                       type="text" 
//                       id="name" 
//                       className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   {/* Email Input */}
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
//                     <input 
//                       type="email" 
//                       id="email" 
//                       className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 {/* Subject Input */}
//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
//                   <input 
//                     type="text" 
//                     id="subject" 
//                     className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all"
//                     placeholder="How can we help you?"
//                   />
//                 </div>

//                 {/* Message Input */}
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
//                   <textarea 
//                     id="message" 
//                     rows={5}
//                     className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all resize-none"
//                     placeholder="Type your message here..."
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button 
//                   type="submit" 
//                   className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF4500] px-10 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E03E00] hover:shadow-[#FF4500]/20 mt-4"
//                 >
//                   Send Message
//                   <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </button>
//               </form>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* 3. Global CTA Section */}
//       <section className="py-20 relative z-30 pb-32 mt-12">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <motion.div 
//             initial={{ scale: 0.95, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#191717] py-24 shadow-2xl"
//           >
//             <Image
//               src="/images/6752871d92d2860c7fca47cf_lightsbg.webp"
//               alt="Stars background"
//               fill
//               className="object-cover opacity-80"
//               priority
//             />
//             <motion.div 
//               initial={{ y: "100%" }}
//               whileInView={{ y: "33.333%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//               className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 md:translate-y-1/2"
//             >
//               <Image
//                 src="/images/675652b827df88bb5eb52b72_moonv2.webp"
//                 alt="Moon horizon"
//                 width={1600}
//                 height={800}
//                 className="mx-auto h-auto w-[150%] max-w-none md:w-full opacity-60"
//               />
//             </motion.div>

//             <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center text-center px-6">
//               <motion.h2 
//                 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-5xl font-normal tracking-tight lg:text-6xl text-white"
//               >
//                 Start Your Trading <span className="text-[#FF4500]">Journey Today</span>
//               </motion.h2>
//               <motion.p 
//                 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
//                 className="mt-6 text-base text-gray-400 lg:text-lg"
//               >
//                 Open an account today and experience our premium execution, <br className="hidden sm:block" />
//                 tight spreads, and world-class trading environment.
//               </motion.p>
//               <motion.div 
//                 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
//                 className="mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
//               >
//                 <button className="group w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto inline-flex justify-center items-center gap-2">
//                   Open Live Account
//                   <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </main>
//   );
// }

"use client";

import { useRef, useState } from "react"; // Added imports
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Building2, Phone, Mail, Send, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser'; // Added import
import MagicRings from "../components/MagicRings";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ContactPage() {
  // --- Initialize Mobile Check ---
  const isMobile = useIsMobile();

  // --- EmailJS State & Ref ---
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | null, text: string }>({ type: null, text: '' });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: '' });

    // Pulling credentials from the .env.local file
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    // Safety check just in case the env variables are missing
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing!");
      setStatusMessage({ type: 'error', text: 'Configuration error. Please contact support.' });
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatusMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again later.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactMethods = [
    {
      title: "Registered Address",
      details: "Suite 305, Griffith Corporate Centre,\nKingstown, St. Vincent and the Grenadines.",
      icon: MapPin
    },
    {
      title: "Physical Address",
      details: "No: 752, Level 5, Orion City, Dr Danister De Silva Mawatha, Colombo 00900, Sri Lanka",
      icon: Building2
    },
    {
      title: "Phone",
      details: "+94 7813 52833",
      icon: Phone,
      isLink: true,
      href: "tel:+94781352833"
    },
    {
      title: "Email Address",
      details: "support@arakkalmarkets.com",
      icon: Mail,
      isLink: true,
      href: "mailto:support@arakkalmarkets.com"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white pt-24 pb-20">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 z-30">
        <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="text-[#FF4500]">✦</span> Support & Inquiries
            </div>

            <h1 className="text-5xl font-normal tracking-tight lg:text-7xl text-white mb-6">
              Contact <span className="text-[#FF4500]">Us</span>
            </h1>

            <p className="text-base text-gray-400 lg:text-lg leading-relaxed">
              Who we are? If you have questions or would like more information, please get in touch with us. We endeavour to respond to all queries within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Grid & Form Section */}
      <section className="py-12 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* Left Side: Contact Cards Grid */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="text-3xl font-medium text-white mb-2"
              >
                Get In Touch
              </motion.h3>

              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF4500]/30"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF4500]/10">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1.5">{method.title}</h4>
                      {method.isLink ? (
                        <a href={method.href} className="text-lg font-medium text-white hover:text-[#FF4500] transition-colors whitespace-pre-line">
                          {method.details}
                        </a>
                      ) : (
                        <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">
                          {method.details}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md shadow-2xl"
            >
              <h3 className="text-3xl font-medium text-white mb-8">Send us a message</h3>

              {/* Added ref and onSubmit here */}
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name" // CRITICAL FOR EMAILJS
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email" // CRITICAL FOR EMAILJS
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject" // CRITICAL FOR EMAILJS
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message" // CRITICAL FOR EMAILJS
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-[#FF4500] focus:outline-none focus:ring-1 focus:ring-[#FF4500] transition-all resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                {/* Status Message Display */}
                {statusMessage.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-xl text-sm font-medium ${statusMessage.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                  >
                    {statusMessage.type === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                    {statusMessage.text}
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF4500] px-10 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#E03E00] hover:shadow-[#FF4500]/20 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Global CTA Section */}
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
                colorTwo="#6366F1" // Consider changing these to "#FF4500" and "#E03E00" to match your brand!
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
                rotation={isMobile ? 90 : 0} // Uses your new hook!
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
            
            {/* Content */}
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
                <a href="https://portal.arakkalmarkets.com/register" className="group w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto inline-flex justify-center items-center gap-2">
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