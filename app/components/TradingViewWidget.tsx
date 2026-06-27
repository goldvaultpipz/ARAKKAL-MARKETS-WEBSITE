// "use client";

// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//     const container = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (container.current && !container.current.querySelector("script")) {
//             const script = document.createElement("script");
//             script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
//             script.type = "text/javascript";
//             script.async = true;
//             script.innerHTML = `
//         {
//           "lineWidth": 2,
//           "lineType": 0,
//           "chartType": "area",
//           "fontColor": "rgb(106, 109, 120)",
//           "gridLineColor": "rgba(242, 242, 242, 0.06)",
//           "volumeUpColor": "rgba(34, 171, 148, 0.5)",
//           "volumeDownColor": "rgba(247, 82, 95, 0.5)",
//           "backgroundColor": "rgba(0, 0, 0, 0)",
//           "isTransparent": true,
//           "widgetFontColor": "#DBDBDB",
//           "upColor": "#22ab94",
//           "downColor": "#f7525f",
//           "borderUpColor": "#22ab94",
//           "borderDownColor": "#f7525f",
//           "wickUpColor": "#22ab94",
//           "wickDownColor": "#f7525f",
//           "colorTheme": "dark",
//           "isTransparent": false,
//           "locale": "en",
//           "chartOnly": false,
//           "scalePosition": "right",
//           "scaleMode": "Normal",
//           "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//           "valuesTracking": "1",
//           "changeMode": "price-and-percent",
//           "symbols": [
//             [
//               "FOREXCOM:XAUUSD|1D"
//             ]
//           ],
//           "dateRanges": [
//             "all|1M"
//           ],
//           "fontSize": "10",
//           "headerFontSize": "medium",
//           "autosize": true,
//           "width": "100%",
//           "height": "100%",
//           "noTimeScale": false,
//           "hideDateRanges": false,
//           "hideMarketStatus": false,
//           "hideSymbolLogo": false
//         }`;
//             container.current.appendChild(script);
//         }
//     }, []);

//     return (
//         <div className="tradingview-widget-container w-full h-full" ref={container}>
//             <div className="tradingview-widget-container__widget w-full h-full"></div>
//         </div>
//     );
// }

// export default memo(TradingViewWidget);

"use client";

import React, { useEffect, useRef, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (container.current && !container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "lineWidth": 2,
          "lineType": 0,
          "chartType": "area",
          "fontColor": "rgb(106, 109, 120)",
          "gridLineColor": "rgba(242, 242, 242, 0.06)",
          "volumeUpColor": "rgba(34, 171, 148, 0.5)",
          "volumeDownColor": "rgba(247, 82, 95, 0.5)",
          "backgroundColor": "rgba(0, 0, 0, 0)",
          "isTransparent": true,
          "widgetFontColor": "#DBDBDB",
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f",
          "colorTheme": "dark",
          "locale": "en",
          "chartOnly": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "symbols": [
            [
              "FOREXCOM:XAUUSD|1D"
            ]
          ],
          "dateRanges": [
            "all|1M"
          ],
          "fontSize": "10",
          "headerFontSize": "medium",
          "autosize": true,
          "width": "100%",
          "height": "100%",
          "noTimeScale": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false
        }`;
        
      // Fade out the skeleton shortly after the script initializes
      script.onload = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500); // 1.5s delay allows the internal iframe time to render
      };

      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10 flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0a0a0a]/90 p-6 backdrop-blur-sm"
          >
            {/* Top Bar Skeleton */}
            <div className="flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/10"></div>
                <div className="h-6 w-24 rounded-md bg-white/10"></div>
              </div>
              <div className="h-6 w-20 rounded-md bg-white/10"></div>
            </div>

            {/* Chart Area Skeleton */}
            <div className="mt-2 flex-1 rounded-xl bg-white/5 animate-pulse"></div>

            {/* Bottom Axis Skeleton */}
            <div className="flex justify-between animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 w-10 rounded-md bg-white/10"></div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TradingView Widget Container */}
      <div className="tradingview-widget-container w-full h-full" ref={container}>
        <div className="tradingview-widget-container__widget w-full h-full"></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);