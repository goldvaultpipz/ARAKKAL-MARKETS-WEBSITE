// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";


// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white">

//       {/* 1. Hero Section */}
//       <section className="relative h-screen w-full overflow-hidden">
//         {/* Background Image - Simple Fade In */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//           className="absolute inset-0 z-0"
//         >
//           <Image
//             src="/images/6752871d92d2860c7fca47cf_lightsbg.webp"
//             alt="Hero background"
//             fill
//             className="object-cover object-top"
//             priority
//           />
//         </motion.div>

//         {/* Bottom Moon Image - Slide Up from Bottom */}
//         <motion.div
//           initial={{ y: "100%", opacity: 0 }}
//           animate={{ y: "33.333%", opacity: 1 }} // Keeps the translate-y-1/3 framing
//           transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//           className="absolute bottom-0 left-1/2 z-20 w-full -translate-x-1/2"
//         >
//           <Image
//             src="/images/675652b827df88bb5eb52b72_moonv2.webp"
//             alt="Bottom image"
//             width={2000}
//             height={1000}
//             className="mx-auto h-auto w-[90vw] max-w-none"
//             priority
//           />
//         </motion.div>

//         {/* Hero Content - Staggered Slide Up */}
//         {/* ADDED: pt-32 to push content safely below the absolute Navbar on mobile */}
//         <div className="relative z-30 flex h-full flex-col items-center justify-center space-y-6 px-4 pt-32 text-center text-white pb-20 md:pt-0">

//           {/* Tag/Badge */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
//             className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
//           >
//             <span className="text-[#FF4500]">⚡</span> Premium Trading Platform
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
//             className="text-5xl font-normal tracking-tight lg:text-6xl"
//           >
//             The Ultimate <br />
//             <span className="text-[#FF4500]">Gold Trading Resource</span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
//             className="mx-auto max-w-2xl text-base text-gray-400 lg:text-lg px-2"
//           >
//             Unlock the full potential of your investments with real-time market data, advanced charting, and expert execution.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
//             className="flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
//           >
//             <button className="w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto">
//               Open Live Account
//             </button>
//             <button className="w-full rounded-lg border border-white/20 bg-black/40 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto">
//               Try Demo Account
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. Infinite Scrolling Marquee */}
//       <div className="relative overflow-hidden py-12 mt-32 z-30">
//         <p className="mb-10 text-center text-sm font-medium text-gray-400">
//           Partnering with top industry experts
//         </p>
//         {/* Marquee Container with Masked Edges for the "blur" fade-out effect */}
//         <div className="mx-auto flex max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
//           <div className="flex animate-marquee whitespace-nowrap">
//             {[...Array(12)].map((_, i) => (
//               <div
//                 key={i}
//                 className="mx-12 flex flex-shrink-0 items-center gap-3 text-2xl font-bold text-gray-500/70 transition-colors hover:text-gray-400"
//               >
//                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//                 </svg>
//                 Logoipsum
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 3. Why People Choose Us Section */}
//       <section className="py-20 relative z-30">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mb-16 flex flex-col items-center text-center">
//             <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
//               <span className="text-[#FF4500]">✦</span> Awesome Service
//             </div>
//             <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
//               Why People <span className="text-[#FF4500]">Choose Us</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {/* Card 1 */}
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//                 </svg>
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-white">Safe and Secure</h3>
//               <p className="text-sm leading-relaxed text-gray-400">
//                 We aim to provide you with a safe and secure trading platform, and that is why we have incorporated many supplementary protective mechanisms across all our activities.
//               </p>
//             </div>
//             {/* Card 2 */}
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
//                 </svg>
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-white">Ethical Trading Conditions</h3>
//               <p className="text-sm leading-relaxed text-gray-400">
//                 As a trusted and reputable partner, we let our client access and enjoy ethical tradition conditions.
//               </p>
//             </div>
//             {/* Card 3 */}
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
//                 </svg>
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-white">Fast Execution</h3>
//               <p className="text-sm leading-relaxed text-gray-400">
//                 We follow a strict no-rejections and no-re-quotes policy that enable us to execute more than 99% orders in a second.
//               </p>
//             </div>
//             {/* Card 4 */}
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-1.81.588l.992 5.48a.562.562 0 01-.816.592L12 17.525a.563.563 0 00-.54 0l-4.936 2.612a.562.562 0 01-.816-.592l.992-5.48a.563.563 0 00-.181-.588l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
//                 </svg>
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-white">Wealth of Experience</h3>
//               <p className="text-sm leading-relaxed text-gray-400">
//                 Our dedicated workforce comes with a wealth of experience. The sole aim of our leadership is to enhance the level of our credibility.
//               </p>
//             </div>
//             {/* Card 5 */}
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
//                 </svg>
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-white">Cost Efficiency</h3>
//               <p className="text-sm leading-relaxed text-gray-400">
//                 The cost of trading is the overall expense that has to incur in order to run their trading business.
//               </p>
//             </div>
//             {/* Card 6 */}
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3s-4.5 4.97-4.5 9 2.015 9 4.5 9z" />
//                 </svg>
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-white">High Liquidity</h3>
//               <p className="text-sm leading-relaxed text-gray-400">
//                 The term liquidity is generally used in the financial markets to describe the ease by which an asset can be converted into cash without difficulty.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. Key Features Section */}
//       <section className="py-20 relative z-30">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center text-center mb-16">
//             <div className="inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
//               <span className="text-[#FF4500] mr-2">✦</span> Key Features
//             </div>
//             <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
//               Engineered for <br />
//               <span className="text-[#FF4500]">Performance & Security</span>
//             </h2>
//             <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
//               Experience next-generation trading powered by decentralized <br className="hidden sm:block" />
//               technology, smart contracts, and unmatched speed.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {/* Feature 1 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-lg transition-transform group-hover:scale-[1.02]">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF4500]/10 to-transparent opacity-50"></div>
//                 <div className="absolute inset-0 flex items-center justify-between px-8">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-xl text-2xl z-10">👤</div>
//                   <div className="flex-1 relative mx-2">
//                     <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-[#FF4500]/40 -translate-y-1/2"></div>
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4500] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(255,69,0,0.5)] z-20">0.01s</div>
//                   </div>
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-xl text-2xl z-10">🏦</div>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-bold text-white">High speed and low costs</h3>
//               <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                 Immediate funding without third-parties. Smart contracts autonomously perform funding – collect and release payments.
//               </p>
//             </div>
//             {/* Feature 2 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-lg transition-transform group-hover:scale-[1.02] flex items-center justify-center p-6">
//                 <div className="w-full rounded-xl border border-white/10 bg-[#141414] p-4 shadow-2xl font-mono text-[10px] sm:text-xs text-gray-500">
//                   <div className="flex gap-1.5 mb-4">
//                     <div className="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
//                     <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
//                     <div className="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
//                   </div>
//                   <div className="text-purple-400">function <span className="text-blue-400">executeDeal</span>() {'{'}</div>
//                   <div className="pl-4 text-gray-400">verify(merchant, affiliate);</div>
//                   <div className="pl-4 text-green-400">transferFunds();</div>
//                   <div className="text-purple-400">{'}'}</div>
//                   <div className="mt-4 flex items-center gap-2 text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded w-fit">
//                     ✓ Smart Contract Verified
//                   </div>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-bold text-white">Fair deals only</h3>
//               <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                 Open-source smart contract ensures fair and transparent deals between merchants and affiliates.
//               </p>
//             </div>
//             {/* Feature 3 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-lg transition-transform group-hover:scale-[1.02] flex items-center justify-center">
//                 <div className="relative flex h-32 w-28 items-center justify-center">
//                   <svg className="absolute inset-0 h-full w-full text-[#FF4500]/10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
//                   <svg className="absolute inset-0 h-full w-full text-[#FF4500]/30 blur-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
//                   <svg className="relative z-10 h-12 w-12 text-[#FF4500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-bold text-white">Protection from hacking</h3>
//               <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                 On a decentralized platform, all user accounts are independent; if one account is hacked, this won’t breach the security of others.
//               </p>
//             </div>
//             {/* Feature 4 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-lg transition-transform group-hover:scale-[1.02]">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="relative h-full w-full">
//                     <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 150">
//                       <line x1="100" y1="50" x2="60" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
//                       <line x1="100" y1="50" x2="140" y2="100" stroke="#FF4500" strokeWidth="2" strokeDasharray="4" className="animate-pulse" />
//                       <line x1="60" y1="100" x2="140" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
//                     </svg>
//                     <div className="absolute top-[50px] left-[100px] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#1a1a1a] border border-white/20 z-10 flex items-center justify-center text-xs text-white">P1</div>
//                     <div className="absolute top-[100px] left-[60px] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#1a1a1a] border border-white/20 z-10 flex items-center justify-center text-xs text-white">P2</div>
//                     <div className="absolute top-[100px] left-[140px] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#FF4500]/20 border border-[#FF4500] shadow-[0_0_15px_rgba(255,69,0,0.4)] z-10 flex items-center justify-center text-xs text-white font-bold">You</div>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-bold text-white">Easy entry & fair competition</h3>
//               <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                 Open-source smart contract ensures fair and transparent deals between merchants and affiliates.
//               </p>
//             </div>
//             {/* Feature 5 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-lg transition-transform group-hover:scale-[1.02]">
//                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-10">
//                   {[1, 2, 3].map((i) => (
//                     <div key={i} className="h-10 w-full rounded-lg border border-white/10 bg-[#141414] flex items-center px-4 shadow-lg relative overflow-hidden">
//                       <div className={`absolute left-0 top-0 bottom-0 w-1 ${i === 2 ? 'bg-[#FF4500]' : 'bg-white/5'}`}></div>
//                       <div className="flex gap-2 ml-2">
//                         <div className={`h-2 w-2 rounded-full ${i === 2 ? 'bg-[#FF4500] animate-pulse' : 'bg-green-500'}`}></div>
//                         <div className="h-2 w-2 rounded-full bg-gray-600"></div>
//                       </div>
//                       <div className="ml-auto h-1.5 w-1/3 bg-white/5 rounded-full"></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-bold text-white">Real-time database</h3>
//               <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                 Scale economy through decentralization leading to significant decrease in transaction fees.
//               </p>
//             </div>
//             {/* Feature 6 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 shadow-lg transition-transform group-hover:scale-[1.02]">
//                 <div className="absolute inset-0 flex flex-col justify-end p-8">
//                   <div className="text-sm font-semibold text-white mb-6">Transaction Fees Trend</div>
//                   <div className="flex items-end gap-3 h-24 w-full border-b border-white/10 pb-0">
//                     <div className="flex-1 bg-white/10 h-[90%] rounded-t-md"></div>
//                     <div className="flex-1 bg-white/10 h-[65%] rounded-t-md"></div>
//                     <div className="flex-1 bg-white/10 h-[40%] rounded-t-md"></div>
//                     <div className="flex-1 bg-[#FF4500] h-[15%] rounded-t-md relative">
//                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-[#FF4500] bg-[#FF4500]/10 px-2 py-0.5 rounded border border-[#FF4500]/20">
//                         Low
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-xl font-bold text-white">Cost effective</h3>
//               <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                 Scale economy through decentralization leading to significant decrease in transaction fees.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. Templates Showcase Section */}
//       <section className="py-20 relative z-30">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center text-center mb-16">
//             <div className="inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
//               Take Full Control of Your Task
//             </div>
//             <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
//               Ready-to-use templates for <br />
//               <span className="text-[#FF4500]">streamlined sales</span>
//             </h2>
//             <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
//               Use our Performance Review Report template to present detailed <br className="hidden sm:block" />
//               analytics and evaluate key business metrics effectively
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//             {/* Template 1 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 shadow-lg transition-transform group-hover:scale-[1.02]">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF4500]/10 opacity-20"></div>
//                 <div className="relative z-10 flex items-center gap-4">
//                   <div className="text-3xl font-bold text-white">4k</div>
//                   <div className="rounded border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-500">↑ 12%</div>
//                 </div>
//                 <div className="relative z-10 mt-6 rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl w-4/5 mx-auto backdrop-blur-md">
//                   <div className="text-xs text-gray-500">Efficiency</div>
//                   <div className="font-semibold text-white">88 <span className="text-[#FF4500]">(+3.5%)</span></div>
//                   <div className="mt-3 text-xs text-gray-500">Cost Reduction</div>
//                   <div className="font-semibold text-white">55 <span className="text-[#FF4500]">(-20%)</span></div>
//                 </div>
//                 <div className="absolute bottom-6 left-0 right-0 flex items-end justify-between px-6 opacity-60">
//                   <svg className="w-full h-12" viewBox="0 0 100 30" preserveAspectRatio="none">
//                     <path d="M0,20 Q25,30 50,15 T100,25" fill="none" stroke="#FF4500" strokeWidth="1.5" />
//                     <path d="M0,10 Q25,25 50,10 T100,5" fill="none" stroke="#FF4500" strokeWidth="1" strokeDasharray="2 2" />
//                   </svg>
//                 </div>
//                 <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[10px] text-gray-600">
//                   <span>1.5</span><span>2.0</span><span className="text-white">2.5</span><span>3.0</span>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-2xl font-bold text-white">Performance Review Report</h3>
//               <p className="mt-3 text-gray-400">Use our Performance Review Report template to present detailed analytics.</p>
//             </div>
//             {/* Template 2 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-lg transition-transform group-hover:scale-[1.02] flex items-center justify-center">
//                 <div className="w-[85%] rounded-xl border border-white/5 bg-[#141414] p-5 shadow-2xl">
//                   <div className="mb-4 inline-flex items-center gap-2 rounded bg-black/50 px-2 py-1 text-[10px] font-medium text-[#FF4500]">
//                     <span>👤</span> Login Darken
//                   </div>
//                   <h4 className="text-xl font-bold text-white">Welcome back!</h4>
//                   <p className="mt-1 text-[10px] text-gray-500">Welcome back! Please enter your details. Your information is 100% private.</p>
//                   <div className="mt-4 space-y-3">
//                     <div>
//                       <div className="mb-1 text-[9px] text-gray-400">Email Address</div>
//                       <div className="h-7 w-full rounded border border-white/10 bg-black/40"></div>
//                     </div>
//                     <div>
//                       <div className="mb-1 text-[9px] text-gray-400">Password</div>
//                       <div className="h-7 w-full rounded border border-white/10 bg-black/40"></div>
//                     </div>
//                   </div>
//                   <div className="mt-4 h-8 w-full rounded-md bg-[#FF4500] flex items-center justify-center text-xs font-semibold text-white">
//                     Login
//                   </div>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-2xl font-bold text-white">Client Onboarding Kit</h3>
//               <p className="mt-3 text-gray-400">Simplify the onboarding process with our Client Onboarding Kit.</p>
//             </div>
//             {/* Template 3 */}
//             <div className="group flex flex-col">
//               <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 shadow-lg transition-transform group-hover:scale-[1.02]">
//                 <h4 className="text-sm font-semibold text-white">Financial Performance<br />Analysis - Q1 2024</h4>
//                 <div className="absolute inset-0 flex items-center justify-center pt-8">
//                   <div className="relative w-full h-full p-6">
//                     <div className="absolute inset-x-6 top-10 border-t border-white/5 border-dashed"></div>
//                     <div className="absolute inset-x-6 top-20 border-t border-white/5 border-dashed"></div>
//                     <div className="absolute inset-x-6 top-32 border-t border-white/5 border-dashed"></div>
//                     <div className="absolute bottom-12 left-10 text-xs font-bold text-[#FF4500]">US$ 3000<div className="text-[8px] text-gray-600 font-normal">Jan 2024</div></div>
//                     <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs font-bold text-[#FF4500]">US$ 3200<div className="text-[8px] text-gray-600 font-normal">Jan 2024</div></div>
//                     <div className="absolute top-16 right-10 text-xs font-bold text-[#FF4500]">US$ 3323<div className="text-[8px] text-gray-600 font-normal">Jan 2024</div></div>
//                     <svg className="absolute bottom-4 left-6 right-6 w-[calc(100%-3rem)] h-24 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
//                       <path d="M0,40 L20,35 L40,45 L60,20 L80,30 L100,5" fill="none" stroke="#FF4500" strokeWidth="1.5" />
//                       <path d="M0,45 L20,40 L40,50 L60,30 L80,35 L100,15" fill="none" stroke="#FF4500" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="mt-6 text-2xl font-bold text-white">Sales Pitch Deck</h3>
//               <p className="mt-3 text-gray-400">Our Sales Pitch Deck template is designed to help you create persuasive presentations.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. CTA Section */}
//       <section className="py-20 relative z-30 pb-32">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] py-24 shadow-2xl">
//             <Image
//               src="/images/67564129ae334f39cafe50ae_stars.webp"
//               alt="Stars background"
//               fill
//               className="object-cover opacity-80"
//             />
//             <div className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 translate-y-1/3 md:translate-y-1/2">
//               <Image
//                 src="/images/675652b827df88bb5eb52b72_moonv2.webp"
//                 alt="Moon horizon"
//                 width={1600}
//                 height={800}
//                 className="mx-auto h-auto w-[150%] max-w-none md:w-full"
//               />
//             </div>
//             <div className="relative z-20 mx-auto flex max-w-2xl flex-col items-center text-center px-6">
//               <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
//                 Start Your Trading <span className="text-[#FF4500]">Journey Today</span>
//               </h2>
//               <p className="mt-6 text-lg text-gray-400">
//                 Open an account today and experience our premium execution, <br className="hidden sm:block" />
//                 tight spreads, and world-class trading environment.
//               </p>
//               <div className="mt-10 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row">
//                 <button className="w-full rounded-xl bg-[#FF4500] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto">
//                   Open Live Account
//                 </button>
//                 <button className="w-full rounded-xl border border-white/20 bg-black/40 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto">
//                   Try Demo Account
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Award, Coins, Scale, ShieldCheck, Star, Trophy, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white">

      {/* 1. Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image - Simple Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/6752871d92d2860c7fca47cf_lightsbg.webp"
            alt="Hero background"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Bottom Moon Image - Slide Up from Bottom */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "33.333%", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-1/2 z-20 w-full -translate-x-1/2"
        >
          <Image
            src="/images/675652b827df88bb5eb52b72_moonv2.webp"
            alt="Bottom image"
            width={2000}
            height={1000}
            className="mx-auto h-auto w-[90vw] max-w-none"
            priority
          />
        </motion.div>

        {/* Hero Content - Staggered Slide Up */}
        <div className="relative z-30 flex h-full flex-col items-center justify-center space-y-6 px-4 pt-32 text-center text-white pb-20 md:pt-0">

          {/* Tag/Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <span className="text-[#FF4500]">⚡</span> Premium Trading Platform
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-5xl font-normal tracking-tight lg:text-6xl"
          >
            The Ultimate <br />
            <span className="text-[#FF4500]">Gold Trading Resource</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-base text-gray-400 lg:text-lg px-2"
          >
            Unlock the full potential of your investments with real-time market data, advanced charting, and expert execution.
          </motion.p>

          {/* Buttons */}
          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
          >
            <a
              href="https://portal.arakkalmarkets.com/register"
              className="w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto text-center"
            >
              Open Live Account
            </a>
            <a
              href="https://portal.arakkalmarkets.com/opendemoaccount"
              className="w-full rounded-lg border border-white/20 bg-black/40 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto text-center"
            >
              Try Demo Account
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Infinite Scrolling Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden py-12  z-30"
      >
        <p className="mb-10 text-center text-xl font-medium text-gray-400">
          Our Core Advantages
        </p>

        {/* Marquee Container with Masked Edges */}
        <div className="mx-auto flex max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap">

            {/* We map over the 5 items multiple times (e.g., 4 sets) 
              to ensure the screen is filled and the infinite scroll loop doesn't break. 
            */}
            {[...Array(4)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex">
                {[
                  {
                    text: "Globally Licensed",
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    ),
                  },
                  {
                    text: "Safety and Security of Funds",
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                  },
                  {
                    text: "Trading Conditions",
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    ),
                  },
                  {
                    text: "Regular Contests & Promotions",
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                      </svg>
                    ),
                  },
                  {
                    text: "Wide Range of Trading Instruments",
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    ),
                  }
                ].map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="mx-12 flex flex-shrink-0 items-center gap-3 text-2xl font-bold text-gray-500/70 transition-colors hover:text-gray-400"
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </motion.div>

      {/* 3. Learn About Us Section */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF4500]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side: Content */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
                <span className="text-[#FF4500]">✦</span> Learn About us
              </div>

              <h2 className="text-5xl font-normal tracking-tight lg:text-6xl text-white leading-[1.1]">
                Awards Winning <br />
                <span className="text-[#FF4500]">Digital Trading</span> Platform.
              </h2>

              <p className="mt-6 text-base text-gray-400 lg:text-lg leading-relaxed">
                Here at Arakkal Markets, we provide one of the safest online trading platforms to our clients and partners. We believe in developing a sustainable workforce through our years-long experience, in-depth knowledge of the financial market and the association of our trusted partners.
              </p>

              <p className="mt-4 text-base text-gray-400 lg:text-lg leading-relaxed">
                We have set an example of responsible trading that has made us a reliable platform for services like equity indices, energies, precious metals and CFDs.
              </p>

              <Link
                href="/about-us"
                className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-[#FF4500] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E03E00] hover:shadow-[#FF4500]/20"
              >
                Read more
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Right Side: Premium Glassmorphism Visual */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none lg:aspect-[4/3] flex items-center justify-center"
            >
              {/* Decorative background rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-8 rounded-full border border-[#FF4500]/10 animate-[spin_40s_linear_infinite_reverse]"></div>

              {/* Main Floating Glass Card */}
              <div className="relative z-20 w-3/4 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-[1.02]">

                {/* Glowing Trophy Icon */}
                <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF4500]/20 to-transparent border border-[#FF4500]/30 shadow-[0_0_30px_rgba(255,69,0,0.3)]">
                  <Trophy className="h-12 w-12 text-[#FF4500]" strokeWidth={1.5} />
                  {/* Sparkle icons */}
                  <Star className="absolute -top-2 -right-2 h-5 w-5 text-yellow-500 animate-pulse" fill="currentColor" />
                  <Star className="absolute top-1/2 -left-3 h-3 w-3 text-yellow-500 animate-pulse delay-150" fill="currentColor" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Industry Leaders</h3>
                <p className="text-sm text-gray-400">Recognized globally for excellence in digital trading and security.</p>

                {/* Animated Stats Bar */}
                <div className="mt-8 w-full space-y-3">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-400">Platform Reliability</span>
                    <span className="text-[#FF4500]">99.9%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#FF4500]"
                    />
                  </div>
                </div>

              </div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-30 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] p-4 shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Security</div>
                  <div className="text-sm font-bold text-white">Tier-1 Protected</div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 z-30 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] p-4 shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF4500]/10 text-[#FF4500]">
                  <Activity className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Execution</div>
                  <div className="text-sm font-bold text-white">Ultra-Fast</div>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 3 Our Focus Section (Asymmetric Split Layout) */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Subtle background glow for this specific section */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FF4500]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

            {/* Left Side: Main Focus Text */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left max-w-lg"
            >
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
                <span className="text-[#FF4500]">✦</span> Client-Centric Approach
              </div>
              <h2 className="text-5xl font-normal tracking-tight lg:text-6xl text-white leading-tight">
                Our focus is <br />
                <span className="text-[#FF4500] font-bold">you.</span>
              </h2>
              <p className="mt-6 text-base text-gray-400 lg:text-lg leading-relaxed border-l-2 border-[#FF4500]/50 pl-4">
                We’re always looking for innovative ways to improve and elevate your daily trading experience.
              </p>
            </motion.div>

            {/* Right Side: Feature Cards */}
            <div className="flex flex-col gap-6">

              {/* Feature Card 1: Value for money */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-white">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-medium text-white">Value for money</h3>
                    <p className="text-base leading-relaxed text-gray-400">
                      Keep your trading costs down with highly competitive spreads and low margins.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Card 2: Intuitive platform */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 text-white">
                  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
                </div>
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black/40 border border-white/5 text-[#FF4500]">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-medium text-white">Intuitive platform</h3>
                    <p className="text-base leading-relaxed text-gray-400">
                      Trade on our user-friendly, proprietary platform and highly responsive native apps.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full z-30 my-12">
        <motion.div
          // 1. Change animation to simple bottom to top slide-in
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} // animated when 30% in view
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Smooth cubic-bezier ease-out
          // 2. Add black shadow to image edges via the wrapping div
          className="w-full"
        >
          <Image
            src="/images/META TRADER MOCKUP 2.png"
            alt="MetaTrader Mockup"
            width={2560}
            height={1440}
            className="w-full h-auto block"
          />
        </motion.div>
      </section>

      {/* 4. Key Features Section */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Optional subtle background glow behind the grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <span className="text-[#FF4500]">✦</span> Key Features
            </div>
            <h2 className="mt-8 text-5xl font-normal tracking-tight lg:text-6xl text-white">
              Engineered for <br />
              <span className="text-[#FF4500]">Performance & Security</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 lg:text-lg">
              Experience next-generation trading powered by decentralized <br className="hidden sm:block" />
              technology, smart contracts, and unmatched speed.
            </p>
          </motion.div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Feature 1: High Speed (Wide - Spans 2 columns) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 group relative flex flex-col sm:flex-row items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              {/* Text Left */}
              <div className="relative z-20 sm:w-1/2 sm:pr-8 mb-8 sm:mb-0 text-left">
                <h3 className="text-2xl font-medium text-white mb-3">High speed and low costs</h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Immediate funding without third-parties. Smart contracts autonomously perform funding – collect and release payments.
                </p>
              </div>
              {/* Visual Right */}
              <div className="relative z-10 w-full sm:w-1/2 h-40 rounded-2xl border border-white/5 bg-black/40 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF4500]/10 to-transparent opacity-50"></div>
                <div className="flex w-full items-center justify-between px-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl text-xl z-10">👤</div>
                  <div className="flex-1 relative mx-2">
                    <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-[#FF4500]/40 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4500] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(255,69,0,0.5)] z-20 group-hover:scale-110 transition-transform">0.01s</div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl text-xl z-10">🏦</div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Fair Deals (Square - Spans 1 column) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="relative z-20 mb-8">
                <h3 className="text-2xl font-medium text-white mb-3">Fair deals only</h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Open-source smart contract ensures fair and transparent deals.
                </p>
              </div>
              <div className="relative z-10 mt-auto w-full rounded-xl border border-white/10 bg-[#141414] p-4 font-mono text-[10px] text-gray-500 shadow-2xl transition-transform group-hover:-translate-y-1">
                <div className="flex gap-1.5 mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-purple-400">function <span className="text-blue-400">execute()</span> {'{'}</div>
                <div className="pl-4 text-gray-400">verify();</div>
                <div className="pl-4 text-green-400">transfer();</div>
                <div className="text-purple-400">{'}'}</div>
              </div>
            </motion.div>

            {/* Feature 3: Protection (Square - Spans 1 column) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-1 group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="relative z-20 mb-8">
                <h3 className="text-2xl font-medium text-white mb-3">Protection from hacking</h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Independent decentralized accounts mean isolated, unbreakable security.
                </p>
              </div>
              <div className="relative z-10 mt-auto flex h-32 w-full items-center justify-center">
                <svg className="absolute inset-0 h-full w-full text-[#FF4500]/10 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <svg className="absolute inset-0 h-full w-full text-[#FF4500]/30 blur-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <svg className="relative z-10 h-10 w-10 text-[#FF4500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
            </motion.div>

            {/* Feature 4: Easy Entry (Wide - Spans 2 columns) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2 group relative flex flex-col sm:flex-row items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              {/* Visual Left */}
              <div className="relative z-10 w-full sm:w-1/2 h-40 mb-8 sm:mb-0 rounded-2xl border border-white/5 bg-black/40 overflow-hidden">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 150">
                  <line x1="100" y1="50" x2="60" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  <line x1="100" y1="50" x2="140" y2="100" stroke="#FF4500" strokeWidth="2" strokeDasharray="4" className="animate-pulse" />
                  <line x1="60" y1="100" x2="140" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                </svg>
                <div className="absolute top-[50px] left-[100px] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#1a1a1a] border border-white/20 z-10 flex items-center justify-center text-xs text-white">P1</div>
                <div className="absolute top-[100px] left-[60px] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#1a1a1a] border border-white/20 z-10 flex items-center justify-center text-xs text-white">P2</div>
                <div className="absolute top-[100px] left-[140px] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#FF4500]/20 border border-[#FF4500] shadow-[0_0_15px_rgba(255,69,0,0.4)] z-10 flex items-center justify-center text-xs text-white font-bold group-hover:bg-[#FF4500]/40 transition-colors">You</div>
              </div>
              {/* Text Right */}
              <div className="relative z-20 sm:w-1/2 sm:pl-8 text-left">
                <h3 className="text-2xl font-medium text-white mb-3">Easy entry & fair competition</h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Open-source smart contract ensures fair and transparent deals between merchants and affiliates globally.
                </p>
              </div>
            </motion.div>

            {/* Feature 5: Real-time DB (Wide - Spans 2 columns) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-2 group relative flex flex-col sm:flex-row items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              {/* Text Left */}
              <div className="relative z-20 sm:w-1/2 sm:pr-8 mb-8 sm:mb-0 text-left">
                <h3 className="text-2xl font-medium text-white mb-3">Real-time database</h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Experience true scale economy through decentralization, eliminating bottlenecks and third-party lags.
                </p>
              </div>
              {/* Visual Right */}
              <div className="relative z-10 w-full sm:w-1/2 h-40 rounded-2xl border border-white/5 bg-black/40 flex flex-col items-center justify-center gap-3 px-6 overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-full rounded-lg border border-white/10 bg-[#141414] flex items-center px-4 shadow-lg relative overflow-hidden transition-transform group-hover:translate-x-1" style={{ transitionDelay: `${i * 50}ms` }}>
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${i === 2 ? 'bg-[#FF4500]' : 'bg-white/5'}`}></div>
                    <div className="flex gap-2 ml-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${i === 2 ? 'bg-[#FF4500] animate-pulse' : 'bg-green-500'}`}></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                    </div>
                    <div className="ml-auto h-1 w-1/3 bg-white/5 rounded-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Feature 6: Cost Effective (Square - Spans 1 column) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-1 group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="relative z-20 mb-8">
                <h3 className="text-2xl font-medium text-white mb-3">Cost effective</h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Scale economy through decentralization drops transaction fees significantly.
                </p>
              </div>
              <div className="relative z-10 mt-auto w-full h-24 flex items-end gap-2 border-b border-white/10">
                <div className="flex-1 bg-white/10 h-[90%] rounded-t-md transition-all group-hover:h-[80%]"></div>
                <div className="flex-1 bg-white/10 h-[65%] rounded-t-md transition-all group-hover:h-[50%]"></div>
                <div className="flex-1 bg-white/10 h-[40%] rounded-t-md transition-all group-hover:h-[30%]"></div>
                <div className="flex-1 bg-[#FF4500] h-[15%] rounded-t-md relative transition-all group-hover:h-[10%]">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#FF4500] bg-[#FF4500]/10 px-1.5 py-0.5 rounded border border-[#FF4500]/20">
                    Low
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Why People Choose Us Section (Editorial List UI with Lucide Icons) */}
      <section className="py-24 relative z-30 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <span className="text-[#FF4500]">✦</span> Awesome Service
            </div>
            <h2 className="mt-6 text-5xl font-normal tracking-tight lg:text-6xl text-white">
              Why People <span className="text-[#FF4500]">Choose Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Safe and Secure",
                desc: "We aim to provide you with a safe and secure trading platform, and that is why we have incorporated many supplementary protective mechanisms across all our activities.",
                icon: ShieldCheck
              },
              {
                title: "Ethical Trading Conditions",
                desc: "As a trusted and reputable partner, we let our client access and enjoy ethical tradition conditions.",
                icon: Scale
              },
              {
                title: "Fast Execution",
                desc: "We follow a strict no-rejections and no-re-quotes policy that enable us to execute more than 99% orders in a second.",
                icon: Zap
              },
              {
                title: "Wealth of Experience",
                desc: "Our dedicated workforce comes with a wealth of experience. The sole aim of our leadership is to enhance the level of our credibility.",
                icon: Award
              },
              {
                title: "Cost Efficiency",
                desc: "The cost of trading is the overall expense that has to incur in order to run their trading business.",
                icon: Coins
              },
              {
                title: "High Liquidity",
                desc: "The term liquidity is generally used in the financial markets to describe the ease by which an asset can be converted into cash without difficulty.",
                icon: Activity
              }
            ].map((feature, index) => {
              const Icon = feature.icon; // Assign component to a variable to render it

              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative pt-8 pb-4"
                >
                  {/* Animated Top Border Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="absolute top-0 left-0 w-full h-[1px] bg-white/10 origin-left group-hover:bg-[#FF4500] transition-colors duration-300"
                  />

                  {/* Top Section: Icon and Giant Number */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-[#FF4500] group-hover:border-[#FF4500] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-6xl font-bold text-white/5 transition-colors duration-300 group-hover:text-[#FF4500]/10 select-none pointer-events-none">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content Section */}
                  <h3 className="mb-3 text-2xl font-medium text-white transition-colors duration-300 group-hover:text-[#FF4500]">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-400">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>



      {/* 6. Templates Showcase Section */}
      {/* <section className="py-20 relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <span className="text-[#FF4500]">✦</span> Control Your Task
            </div>
            <h2 className="mt-8 text-5xl font-normal tracking-tight lg:text-6xl text-white">
              Ready-to-use templates for <br />
              <span className="text-[#FF4500]">streamlined sales</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 lg:text-lg">
              Use our Performance Review Report template to present detailed <br className="hidden sm:block" />
              analytics and evaluate key business metrics effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all group-hover:scale-[1.02] group-hover:bg-white/10 group-hover:border-white/20 p-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF4500]/10 opacity-20"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="text-3xl font-bold text-white">4k</div>
                  <div className="rounded border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-500">↑ 12%</div>
                </div>
                <div className="relative z-10 mt-6 rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl w-4/5 mx-auto backdrop-blur-md">
                  <div className="text-xs text-gray-500">Efficiency</div>
                  <div className="font-semibold text-white">88 <span className="text-[#FF4500]">(+3.5%)</span></div>
                  <div className="mt-3 text-xs text-gray-500">Cost Reduction</div>
                  <div className="font-semibold text-white">55 <span className="text-[#FF4500]">(-20%)</span></div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 flex items-end justify-between px-6 opacity-60">
                  <svg className="w-full h-12" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,20 Q25,30 50,15 T100,25" fill="none" stroke="#FF4500" strokeWidth="1.5" />
                    <path d="M0,10 Q25,25 50,10 T100,5" fill="none" stroke="#FF4500" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                </div>
                <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[10px] text-gray-600">
                  <span>1.5</span><span>2.0</span><span className="text-white">2.5</span><span>3.0</span>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-medium text-white">Performance Review Report</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-400">Use our Performance Review Report template to present detailed analytics.</p>
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all group-hover:scale-[1.02] group-hover:bg-white/10 group-hover:border-white/20 flex items-center justify-center">
                <div className="w-[85%] rounded-xl border border-white/5 bg-[#141414] p-5 shadow-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded bg-black/50 px-2 py-1 text-[10px] font-medium text-[#FF4500]">
                    <span>👤</span> Login Darken
                  </div>
                  <h4 className="text-xl font-bold text-white">Welcome back!</h4>
                  <p className="mt-1 text-[10px] text-gray-500">Welcome back! Please enter your details. Your information is 100% private.</p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="mb-1 text-[9px] text-gray-400">Email Address</div>
                      <div className="h-7 w-full rounded border border-white/10 bg-black/40"></div>
                    </div>
                    <div>
                      <div className="mb-1 text-[9px] text-gray-400">Password</div>
                      <div className="h-7 w-full rounded border border-white/10 bg-black/40"></div>
                    </div>
                  </div>
                  <div className="mt-4 h-8 w-full rounded-md bg-[#FF4500] flex items-center justify-center text-xs font-semibold text-white">
                    Login
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-medium text-white">Client Onboarding Kit</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-400">Simplify the onboarding process with our Client Onboarding Kit.</p>
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all group-hover:scale-[1.02] group-hover:bg-white/10 group-hover:border-white/20 p-6">
                <h4 className="text-sm font-semibold text-white">Financial Performance<br />Analysis - Q1 2024</h4>
                <div className="absolute inset-0 flex items-center justify-center pt-8">
                  <div className="relative w-full h-full p-6">
                    <div className="absolute inset-x-6 top-10 border-t border-white/5 border-dashed"></div>
                    <div className="absolute inset-x-6 top-20 border-t border-white/5 border-dashed"></div>
                    <div className="absolute inset-x-6 top-32 border-t border-white/5 border-dashed"></div>
                    <div className="absolute bottom-12 left-10 text-xs font-bold text-[#FF4500]">US$ 3000<div className="text-[8px] text-gray-600 font-normal">Jan 2024</div></div>
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs font-bold text-[#FF4500]">US$ 3200<div className="text-[8px] text-gray-600 font-normal">Jan 2024</div></div>
                    <div className="absolute top-16 right-10 text-xs font-bold text-[#FF4500]">US$ 3323<div className="text-[8px] text-gray-600 font-normal">Jan 2024</div></div>
                    <svg className="absolute bottom-4 left-6 right-6 w-[calc(100%-3rem)] h-24 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0,40 L20,35 L40,45 L60,20 L80,30 L100,5" fill="none" stroke="#FF4500" strokeWidth="1.5" />
                      <path d="M0,45 L20,40 L40,50 L60,30 L80,35 L100,15" fill="none" stroke="#FF4500" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-medium text-white">Sales Pitch Deck</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-400">Our Sales Pitch Deck template is designed to help you create persuasive presentations.</p>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="relative w-full z-30 my-12">
        <motion.div
          // 1. Change animation to simple bottom to top slide-in
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} // animated when 30% in view
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Smooth cubic-bezier ease-out
          // 2. Add black shadow to image edges via the wrapping div
          className="w-full"
        >
          <Image
            src="/images/META TRADER MOCKUP 1.png"
            alt="MetaTrader Mockup"
            width={2560}
            height={1440}
            className="w-full h-auto block"
          />
        </motion.div>
      </section>

      {/* 7. CTA Section */}
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
                className="mx-auto h-auto w-[150%] max-w-none md:w-full"
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
                <Link
                  href="https://portal.arakkalmarkets.com/register"
                  className="w-full rounded-lg bg-[#FF4500] px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#E03E00] sm:w-auto"
                >
                  Open Live Account
                </Link>

                <Link
                  href="https://portal.arakkalmarkets.com/opendemoaccount"
                  className="w-full rounded-lg border border-white/20 bg-black/40 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
                >
                  Try Demo Account
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}