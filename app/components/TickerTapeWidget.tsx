"use client";

import React from "react";

export default function TickerTapeWidget() {
    const widgetConfig = {
        symbols: [
            { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
            { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
            { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
            { description: "Gold", proName: "OANDA:XAUUSD" },
            { description: "Silver", proName: "ACTIVTRADES:SILVER" },
            { description: "Bitcoin", proName: "BITSTAMP:BTCUSD" },
            { description: "Tetherus", proName: "BINANCE:BTCUSDT" }
        ],
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: "compact",
        colorTheme: "dark",
        locale: "en"
    };

    const encodedConfig = encodeURIComponent(JSON.stringify(widgetConfig));
    const iframeSrc = `https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#${encodedConfig}`;

    return (
        <div className="w-full overflow-hidden">
            <iframe
                scrolling="no"
                frameBorder="0"
                src={iframeSrc}
                title="ticker tape TradingView widget"
                className="w-full h-[62px] block"
                style={{ 
                    width: "100%", 
                    height: "62px",
                    minWidth: "100%" 
                }}
            />
        </div>
    );
}