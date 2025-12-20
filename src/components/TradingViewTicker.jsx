import React, { useEffect, useRef, memo } from 'react';

const TradingViewTicker = memo(({ symbols }) => {
    const container = useRef();

    useEffect(() => {
        if (!container.current) return;

        // Clear previous script to avoid duplicates
        container.current.innerHTML = '';

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;

        // Default symbols if none provided (Homepage Mix)
        const defaultSymbols = [
            { "proName": "FOREXCOM:SPX500", "description": "S&P 500" },
            { "proName": "FOREXCOM:NSXUSD", "description": "US 100" },
            { "proName": "FX_IDC:EURUSD", "description": "EUR/USD" },
            { "proName": "FX_IDC:GBPUSD", "description": "GBP/USD" },
            { "proName": "BITSTAMP:BTCUSD", "description": "Bitcoin" },
            { "proName": "BITSTAMP:ETHUSD", "description": "Ethereum" },
            { "proName": "OANDA:XAUUSD", "description": "Gold" },
            { "proName": "OANDA:XAGUSD", "description": "Silver" }
        ];

        const widgetConfig = {
            "symbols": symbols || defaultSymbols,
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en",
            "largeChartUrl": "https://www.radhikafx.com/markets",
        };

        script.innerHTML = JSON.stringify(widgetConfig);
        container.current.appendChild(script);

    }, [symbols]);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ width: "100%" }}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
});

export default TradingViewTicker;
