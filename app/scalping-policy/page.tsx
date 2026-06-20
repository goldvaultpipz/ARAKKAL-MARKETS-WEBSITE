// src/app/scalping-policy/page.tsx
import React from "react";


export default function ScalpingPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white">


      {/* Background Gradient Effect */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF4500]/5 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none"></div>

      {/* Page Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-40 pb-20 sm:px-6 lg:px-8 animate-fade-up">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm mb-6">
            Legal Information
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Scalping <span className="text-[#FF4500]">Policy</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Rules and definitions regarding scalping, stale trading, and price feeds.
          </p>
        </div>

        {/* Main Document Card */}
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl">

          <div className="space-y-12 text-base leading-relaxed text-gray-400">

            {/* 1. Scalping */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">1. Scalping</h2>
              <p>
                Scalping is a trading style that traders utilize to benefit from minor price changes during a short period. In Arakkal Markets Client Agreements, the definition of scalping transactions is when traders enter and exit positions in less than 180 seconds on Foreign Exchange and Metals trades and within 300 seconds on CFD contracts (including single name stocks, equity indices, metals, crypto CFDs).
              </p>
              <p className="mt-4">
                &quot;Scalping&quot; strategies are not permitted on our platform for traders. Introducing Brokers will not receive any fees for transactions that are defined as scalping transactions.
              </p>
            </section>

            {/* 2. Stale Trading */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">2. Stale Trading</h2>
              <p>
                In order to ensure the stability of the Arakkal Markets platforms and products, we define &apos;Stale Trading&apos; as a method traders use where they open and close trades within 10 seconds. Arakkal Markets considers these trades abusive and does not allow these trades on its platforms and products. Should stale trades occur in your account, Arakkal Markets reserves the right to cancel them immediately.
              </p>
            </section>

            {/* 3. Idle Prices */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">3. Idle Prices</h2>
              <p>
                We have an agency execution model and automatically cover all client positions with executing brokers and liquidity providers. On rare occasions the aggregated price feed which we provide to clients can become &quot;idle&quot;. We reserve the right to reverse the profit and loss realized from orders where an idle stroke happened.
              </p>
              <p className="mt-4">
                We will investigate these cases and notify the client via e-mail or telephone that trades are cancelled. We will always check to ensure that the reversal does not generate an unintended position. If the order is executed and subsequently reversed to open a position, any subsequent order(s) closing this position would also be reversed leaving the net P&amp;L at zero. This way the client will not be disadvantaged by this reversal due to our invalid price delivery.
              </p>
            </section>

            {/* 4. Misquotes */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">4. Misquotes</h2>
              <p>
                We have an agency execution model and automatically cover all client positions with executing brokers and liquidity providers. Although we mitigate the risk of invalid price feeds reaching clients through utilizing a price aggregation system which generates a price from multiple liquidity providers (typically in excess of 10 liquidity providers), there are rare occasions where the price can become &quot;skewed&quot;.
              </p>
              <p className="mt-4">
                In such rare instances, if orders are filled at that price, we reserve the right to reverse orders where the misquote occurred. We will investigate these cases and notify the client via e-mail or telephone that trades are cancelled. We will always check to ensure that the reversal does not generate an unintended position. If the order is executed and subsequently reversed to open a position, any subsequent order(s) closing this position would also be reversed leaving the net P&amp;L at zero. This way the client will not be disadvantaged by this reversal due to our invalid price delivery.
              </p>
            </section>

            {/* 5. Stale Quotes And Misquotes Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">5. Stale Quotes And Misquotes Policy</h2>
              <p>
                We have an agency execution model and automatically cover all client positions with executing brokers and liquidity providers. Although we mitigate the risk of invalid price feeds reaching clients through utilizing a price aggregation system which generates a price from multiple liquidity providers (typically in excess of 10 liquidity providers), there are rare occasions where the price can become &quot;skewed&quot;.
              </p>
              <p className="mt-4">
                In such rare instances, if orders are filled at that price, we reserve the right to reverse orders where the misquote occurred. We will investigate these cases and notify the client via e-mail or telephone that trades are cancelled. We will always check to ensure that the reversal does not generate an unintended position. If the order is executed and subsequently reversed to open a position, any subsequent order(s) closing this position would also be reversed leaving the net P&amp;L at zero. This way the client will not be disadvantaged by this reversal due to our invalid price delivery.
              </p>
            </section>

          </div>
        </div>
      </div>


    </main>
  );
}