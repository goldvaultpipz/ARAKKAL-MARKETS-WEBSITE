// src/app/privacy-policy/page.tsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-[#FF4500]/30 selection:text-white">
      {/* Import the floating Navbar */}

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
            Privacy <span className="text-[#FF4500]">Policy</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Learn how we collect, use, and protect your personal data.
          </p>
        </div>

        {/* Main Document Card */}
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl">

          <div className="space-y-10 text-base leading-relaxed text-gray-400">

            {/* Introduction / Copyright */}
            <section className="rounded-xl border border-white/5 bg-white/5 p-6 text-sm">
              <p className="mb-4">
                This website and its contents are subject to applicable copyright and intellectual property laws.
              </p>
              <p className="mb-4">
                You cannot use materials from this website or alter original text without permission from Arakkal Markets. If you wish to request permission, please contact us.
              </p>
              <p>
                Copying information from the Arakkal Markets website and publishing it elsewhere on the internet is only permitted if you indicate the information source in the heading and provide a link as to where you found this information.
              </p>
            </section>

            {/* 1. Commitment */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">1. Commitment</h2>
              <p>
                The privacy of our website visitors and clients, both existing and former, is very important to us. Arakkal Markets is committed to safeguarding any information we collect, use and hold about you.
              </p>
            </section>

            {/* 2. Data Collection */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">2. Data Collection</h2>
              <p className="mb-4">
                When you register for either a demo or a live account with Arakkal Markets, it is necessary that we collect some personal data from you for business purposes. By understanding your financial needs, we can treat you fairly as a client; we can provide you with the most suitable products and services, give you the appropriate information on investment strategies, process your requests and transactions and offer you both sales and post-sales services. We request the following Personal Data from you:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-300">
                <li>Personal and financial information needed during the online registration applications/forms</li>
                <li>Documents needed as proof of your identity and residency such as an International Passport, National ID, utility bills or bank statements</li>
              </ul>
              <p className="italic text-[#FF4500]">
                * Please note: that if and when you choose to end your working relationship with Arakkal Markets, we must keep your Personal Data on record for a further five years.
              </p>
            </section>

            {/* 3. Use of Personal Data */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">3. Use of Personal Data</h2>
              <p className="mb-4">
                The following list illustrates the reasons why Arakkal Markets may need to use your Personal Data:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-300">
                <li>To verify your identity</li>
                <li>To ensure that you meet the suitability requirements needed to use our products and services</li>
                <li>To manage the account you have with us</li>
                <li>To process your transactions</li>
                <li>To send you information about transaction/post-transaction services</li>
                <li>To keep you updated with news on our products, services and any other information relevant to your working relationship with Arakkal Markets</li>
                <li>For website improvement purposes</li>
                <li>For the analysis of statistical data which will help us provide you with better products and services in the future</li>
              </ul>
            </section>

            {/* 4. Cookies */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">4. Cookies</h2>
              <p>
                Cookies are small bits of data stored on a web browser when you visit a website for the first time. If you visit that website again in the future, the storage of cookies on your browser enables the website to remember how you browsed through it the first time. For example, it can remember your username and password. Cookies are used on this website in order to offer our users a more customized browsing experience. If you do not agree to our Cookie Policy you can disable Cookies and still access our website normally.
              </p>
            </section>

            {/* 5. Security & Protection */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">5. Security & Protection</h2>
              <p>
                Arakkal Markets is committed to safeguarding your Personal Data by adhering to strict security standards and using the most up to date security technologies.
              </p>
            </section>

            {/* 6. Your Consent */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">6. Your Consent</h2>
              <p>
                Once you access this website, you give consent to Arakkal Markets to keep, use and disclose your Personal Data in compliance with this privacy policy.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">7. Your Rights</h2>
              <p>
                In compliance with the Data Protection Act, every user is granted a number of rights in relation to their Personal Data. These rights include accessing and/or amending your Personal Data, putting a stop to the processing of this data and preventing undesirable marketing. Arakkal Markets will ensure that your personal data is protected in compliance with the applicable Laws and Regulations for the protection of Personal Data.
              </p>
            </section>

            {/* 8. Queries */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">8. Queries</h2>
              <p>
                If you have any questions which have not been covered in this Privacy Policy, or any further concerns regarding the use of Personal Data, please do not hesitate to contact us through email at{" "}
                <a href="mailto:support@arakkalmarkets.com" className="text-[#FF4500] hover:underline">
                  support@arakkalmarkets.com
                </a>
                .
              </p>
            </section>

          </div>

          {/* Promotional / Benefits Section */}
          <div className="mt-16 rounded-2xl border border-[#FF4500]/20 bg-[#FF4500]/5 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF4500] text-sm text-white">★</span>
              Your Benefits With Us
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-sm text-gray-300">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Something for Everyone</h4>
                <p>Arakkal Markets has something for every kind of market. Regardless of whether you are a retail or institutional client, we have just the right trading solutions for all your needs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Wide Range of Markets</h4>
                <p>Choose from a wide range of markets to trade using our impressive trading tools and instruments. We offer a spot metals and indices, CFDs, among many others.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Advanced Technology</h4>
                <p>Arakkal Markets has the perfect account for every kind of trader. Our trading platforms are based on the latest technology to ensure reliability and security. We try our best to ensure they run smoothly on any device.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Comprehensive Education</h4>
                <p>To help you play an active part in your trading process, we provide quality and comprehensive education on the trading industry. You are sure to benefit greatly from this program.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Import the Footer */}
    </main>
  );
}