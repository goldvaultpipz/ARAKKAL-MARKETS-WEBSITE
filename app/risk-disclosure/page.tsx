// src/app/risk-disclosure/page.tsx
import React from "react";

export default function RiskDisclosure() {
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
            Risk <span className="text-[#FF4500]">Disclosure</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Important information regarding the risks associated with trading on our platform.
          </p>
        </div>

        {/* Main Document Card */}
        <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl">

          <div className="space-y-12 text-base leading-relaxed text-gray-400">

            {/* Acknowledgement */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">Acknowledgement</h2>
              <div className="space-y-5">
                <p>
                  <span className="font-bold text-white">1.</span> The Customer shall be responsible for the risks of financial losses caused by the failure of information, communication, electronic and other systems. The result of any system failure may be that his order is either not executed according to his instructions or it is not executed at all. The Company does not accept any liability in the case of such a failure.
                </p>
                <div>
                  <p>
                    <span className="font-bold text-white">2.</span> While trading through the Client Terminal the Customer shall be responsible for the risks of financial losses caused by:
                  </p>
                  <ul className="mt-3 space-y-2 pl-6 text-gray-300">
                    <li>(a) customer’s or Company’s hardware or software failure, malfunction or misuse;</li>
                    <li>(b) poor Internet connection either on the side of the Customer or the Company or both, or interruptions or transmission blackouts or public electricity network failures or hacker attacks, overload of connection;</li>
                    <li>(c) the wrong settings in the Client Terminal;</li>
                    <li>(d) delayed Client Terminal updates;</li>
                    <li>(e) the Customer disregarding the applicable rules described in the Client Terminal user guide and in the Company’s Website.</li>
                  </ul>
                </div>
                <p>
                  <span className="font-bold text-white">3.</span> The Customer acknowledges that at times of excessive deal flow the Customer may have some difficulties to be connected over the telephone with a Dealer, especially in a Fast Market (for example, when key macroeconomic indicators are released).
                </p>
              </div>
            </section>

            {/* Abnormal Market Conditions */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">Abnormal Market Conditions</h2>
              <div className="space-y-5">
                <p>
                  <span className="font-bold text-white">4.</span> The Customer acknowledges that under Abnormal Market Conditions the period during which the Instructions and Requests are executed may be extended.
                </p>
                <p>
                  <span className="font-bold text-white">5.</span> The Customer acknowledges that only one Request or Instruction is allowed to be in the queue at one time. Once the Customer has sent a Request or an Instruction, any further Requests or Instructions sent by the Customer are ignored and the “Order is locked” message appears until the first Request or Instruction is executed.
                </p>
                <p>
                  <span className="font-bold text-white">6.</span> The Customer acknowledges that the only reliable source of Quotes Flow information is that of the real/live Server’s Quotes Base. Quotes Base in the Client Terminal is not a reliable source of Quotes Flow information because the connection between the Client Terminal and the Server may be disrupted at some point and some of the Quotes simply may not reach the Client Terminal.
                </p>
                <p>
                  <span className="font-bold text-white">7.</span> The Customer acknowledges that when the Customer closes the order placing/modifying/deleting window or the position opening/closing window, the Instruction or Request, which has been sent to the Server, shall not be cancelled.
                </p>
                <p>
                  <span className="font-bold text-white">8.</span> In case the Customer has not received the result of the execution of the previously sent Instruction but decides to repeat the Instruction, the Customer shall accept the risk of making two Transactions instead of one, however the client may receive an “Order is locked” message as described in point 5 above.
                </p>
                <p>
                  <span className="font-bold text-white">9.</span> The Customer acknowledges that if the Pending Order has already been executed but the Customer sends the Instruction to modify its level and the levels of If-Done Orders at the same time, the only Instruction, which will be executed, is the Instruction to modify Stop Loss and/or Take Profit levels on the position opened when the Pending Order triggered.
                </p>
              </div>
            </section>

            {/* Communication */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">Communication</h2>
              <div className="space-y-5">
                <p>
                  <span className="font-bold text-white">10.</span> The Customer shall accept the risk of any financial losses caused by the fact that the Customer has received with delay or has not received at all any notice from the Company.
                </p>
                <p>
                  <span className="font-bold text-white">11.</span> The Customer acknowledges that the unencrypted information transmitted by email is not protected from any unauthorised access.
                </p>
                <p>
                  <span className="font-bold text-white">12.</span> The Customer is fully responsible for the risks in respect of undelivered trading platform internal mail messages sent to the Customer by the Company as they are automatically deleted within 3 (three) calendar days.
                </p>
                <p>
                  <span className="font-bold text-white">13.</span> The Customer is wholly responsible for the privacy of the information received from the Company and accepts the risk of any financial losses caused by the unauthorised access of a third party to the Customer’s Trading Account.
                </p>
                <p>
                  <span className="font-bold text-white">14.</span> The Company has no responsibility if authorized/unauthorised third persons have access to information, including electronic addresses, electronic communication and personal data, access data when the above are transmitted between the Company or any other party, using the internet or other network communication facilities, telephone, or any other electronic means.
                </p>
              </div>
            </section>

            {/* Force Majeure & Trading Risks */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">Force Majeure Event & Trading Risks</h2>
              <div className="space-y-5">
                <p>
                  <span className="font-bold text-white">15.</span> In case of a Force Majeure Event the Customer shall accept the risk of financial losses.
                </p>
                <p>
                  <span className="font-bold text-white">16.</span> In margin trading, the balance between the existing (available equity) and locked up funds (used margin) is called the margin level. Traders need to be careful not to let it go below 100%. The more free margin you have, the more trades can be opened simultaneously. If margin level reaches a predetermined percentage, brokers will initiate a margin call, asking traders to refill their account balance or close some positions until the balance is restored.
                </p>
                <p>
                  <span className="font-bold text-white">17.</span> The stop out occurs when the existing positions are going against the traders, which means they are losing money and the available equity is slowly reducing. When the margin level gets to 30%, will automatically start closing the positions until the previous level is restored.
                </p>
              </div>
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
                <p>Arakkal Markets site has something for every kind of market. Regardless of whether you are a retail or institutional client, we have just the right trading solutions for all your needs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Wide Range of Markets</h4>
                <p>Choose from a wide range of markets to trade using our impressive trading tools and instruments. We offer a spot metals and indices, CFDs, among many others.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Advanced Technology</h4>
                <p>Arakkal Markets site has the perfect account for every kind of trader. Our trading platforms are based on the latest technology to ensure reliability and security. We try our best to ensure they run smoothly on any device.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Comprehensive Education</h4>
                <p>To help you play an active part in your trading process, we provide quality and comprehensive education on the trading industry. You are sure to benefit greatly from this program.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}