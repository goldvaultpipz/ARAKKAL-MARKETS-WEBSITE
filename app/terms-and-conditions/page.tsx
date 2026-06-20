// src/app/terms/page.tsx
import React from "react";


export default function TermsAndConditions() {
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
            Terms and <span className="text-[#FF4500]">Conditions</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>

        {/* Main Document Card */}
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl">

          <div className="space-y-10 text-base leading-relaxed text-gray-400">

            {/* Introduction */}
            <section>
              <p className="italic text-gray-300 mb-4">
                * By accessing this website you agree to be bound by the terms and conditions below pertaining to both this site and any material on it.
              </p>
              <p>
                Arakkal Markets reserves the right to change these terms and conditions at any time without notice to you. You are therefore responsible for regularly reviewing these terms and conditions. Continued use of this site following any such changes shall constitute your acceptance of such changes. If you do not agree with these terms and conditions, please do not access this website.
              </p>
            </section>

            {/* Disclaimer Section */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">Disclaimer of Warranty and Limitation of Liability</h2>
              <div className="space-y-4">
                <p>
                  The information on this site is provided “As it is”. Arakkal Markets does not warrant the accuracy of the materials provided herein, either expressly or impliedly, for any particular purpose and expressly disclaims any warranties of merchantability or fitness for a particular purpose. Arakkal Markets will not be responsible for any loss or damage that could result from interception by third parties of any information made available to you via this site.
                </p>
                <p>
                  Although the information provided to you on this site is obtained or compiled from sources we believe to be reliable, Arakkal Markets cannot and does not guarantee the accuracy, validity, timeliness or completeness of any information or data made available to you for any particular purpose. Neither Arakkal Markets, nor any of its affiliates, directors, officers or employees, nor any third party vendor will be liable or have any responsibility of any kind of loss that you incur in the event of any failure or interruption of this site, or resulting from the act or omission of any other party involved in making this site or the data contained therein available to you, or from any other cause relating to your access to, inability to access, or use of the site or these materials, whether or not the circumstances giving rise to such cause may have been within the control of Arakkal Markets or of any vendor providing software or services support.
                </p>
                <p>
                  Under no circumstances will Arakkal Markets be liable for any consequential, incidental, special, punitive or exemplary damages arising out of any use of or inability to use this site or any portion thereof, regardless of whether Arakkal Markets has been apprised of the likelihood of such damages occurring and regardless of the form of action, whether in Contract, Tort (including negligence), Strict Liability, or otherwise.
                </p>
                <p>
                  The information contained in this site is intended for information purposes only. Therefore it should not be regarded as an offer or solicitation to any person in any jurisdiction in which such an offer or solicitation is not authorised or to any person to whom it would be unlawful to make such an offer or solicitation, nor regarded as recommendation to buy, sell or otherwise deal with any particular investment. You are strongly advised to obtain independent investment, financial, legal and tax advice before proceeding with any investment. Nothing in this site should be read or construed as constituting investment advice on the part of Arakkal Markets, or any of its affiliates, directors, officers or employees.
                </p>
              </div>
            </section>

            {/* Privacy Section */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">Privacy</h2>
              <p>
                Any personal information you provide us will be treated as confidential and shared only within the Company, its affiliates and its business partners and will not be disclosed to any third party except under any regulatory or legal proceedings. Web site tracking systems may also collect data detailing the pages you have accessed, how you discovered this site, the frequency of visits and so on. The information we obtain is used to improve the content of our web site and may be used by us to contact you, by any appropriate means, and to provide you with any information we believe may be useful to you.
              </p>
            </section>

          </div>

          {/* Promotional / Benefits Section - Styled distinctively */}
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
                <p>Choose from a wide range of markets to trade using our impressive trading tools and instruments. We offer spot metals and indices, CFDs, among many others.</p>
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