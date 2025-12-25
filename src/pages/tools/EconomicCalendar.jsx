import React, { useEffect, memo } from 'react';
import { Radio, Activity, TrendingUp, AlertTriangle, Smartphone, Info, Calendar as CalendarIcon, Filter, Layers } from 'lucide-react';

// Wrapper for the TradingView Widget
const TradingViewCalendar = memo(() => {
    useEffect(() => {
        const container = document.getElementById('tradingview-calendar-widget');
        if (container) {
            container.innerHTML = ''; // Clear previous
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
            script.type = 'text/javascript';
            script.async = true;
            script.innerHTML = JSON.stringify({
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "800",
                "locale": "en",
                "importanceFilter": "-1,0,1",
                "currencyFilter": "USD,EUR,GBP,JPY,AUD,CAD,CHF,NZD,CNY",
                "countryFilter": "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
                "eventsFilter": "0",
                "enableEvents": true,
                "enableNews": false,
                "enableWatchlist": false,
                "enableDetails": true,
                "enableContext": true,
                "showLive": true,
                "showNews": false,
                "showWatchlist": false,
                "showDetails": true,
                "showContext": true,
                "showFilter": true,
                "showDate": true,
                "showTime": true,
                "showTodayBtn": true,
                "showWeekBtn": true,
                "showMonthBtn": true,
                "showYearBtn": false,
                "showTitle": false,
                "showDescription": false,
                "showBorder": false,
                "showLink": false,
                "showLogo": false,
                "showSymbolLogo": true
            });
            container.appendChild(script);
        }
    }, []);

    return (
        <div className="tradingview-widget-container w-full h-[800px]" id="tradingview-calendar-widget">
            <div className="tradingview-widget-container__widget w-full h-full"></div>
        </div>
    );
});

const EconomicCalendar = () => {
    return (
        <div className="bg-[var(--color-navy)] min-h-screen pt-20 md:pt-40 font-[var(--font-body)] text-white">

            {/* Block 1: The Tactical Hero */}
            <section className="py-16 bg-[var(--color-navy)] border-b border-[var(--glass-border)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[var(--color-gold)]/5 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-500 rounded-full text-xs font-bold uppercase tracking-wide mb-6 animate-pulse">
                            <Activity size={14} /> Live Market Data
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)]">
                            Never Miss a <br /> <span className="text-[var(--color-gold)]">Market-Moving Event</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            From NFP reports to Central Bank interest rate decisions—track global economic data in real-time and plan your trades with institutional-grade insights.
                        </p>
                    </div>

                    {/* Quick Stats / Sidebar Teaser (Mobile/Desktop) */}
                    <div className="hidden lg:block w-full max-w-sm bg-[#02040a] p-6 rounded-xl border border-[var(--glass-border)] shadow-xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                            <Radio className="text-red-500" size={20} />
                            <span className="font-bold text-white">Upcoming High Impact</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <div className="text-xs text-gray-500 mb-1">Thursday 15:30</div>
                                    <div className="text-sm font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">US Core CPI (YoY)</div>
                                </div>
                                <div className="flex gap-0.5">
                                    <AlertTriangle size={12} className="text-red-500 fill-red-500" />
                                    <AlertTriangle size={12} className="text-red-500 fill-red-500" />
                                    <AlertTriangle size={12} className="text-red-500 fill-red-500" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <div className="text-xs text-gray-500 mb-1">Friday 15:30</div>
                                    <div className="text-sm font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">Nonfarm Payrolls</div>
                                </div>
                                <div className="flex gap-0.5">
                                    <AlertTriangle size={12} className="text-red-500 fill-red-500" />
                                    <AlertTriangle size={12} className="text-red-500 fill-red-500" />
                                    <AlertTriangle size={12} className="text-red-500 fill-red-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: The Economic Calendar Widget (Full Width) */}
            <section className="py-10 bg-[#02040a]">
                <div className="w-[98%] max-w-[1920px] mx-auto px-2 md:px-6">
                    <div className="bg-[var(--color-navy)] rounded-xl border border-[var(--glass-border)] shadow-2xl overflow-hidden p-4 min-h-[800px]">
                        <div className="flex items-center justify-between mb-4 px-2">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Filter size={16} /> Filters Applied: <span className="text-white">High Impact</span>, <span className="text-white">Major Currencies</span>
                            </div>
                            <div className="text-xs text-gray-500 italic">
                                *Auto-refreshes every 60s
                            </div>
                        </div>
                        <TradingViewCalendar />
                    </div>
                </div>
            </section>

            {/* Block 3: Education & MT5 Integration */}
            <section className="py-20 bg-[var(--color-navy)] border-t border-[var(--glass-border)]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Education - Step 1 */}
                        <div className="bg-[#02040a] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all group">
                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">1. Identify High Impact</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                precise volatility alerts. Look for events marked with <strong>Red (3 Stars)</strong>. These releases (like FOMC, CPI, NFP) typically drive the biggest moves in the forex markets.
                            </p>
                        </div>

                        {/* Education - Step 2 */}
                        <div className="bg-[#02040a] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">2. Compare Data</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Analyze the <strong>"Actual" vs. "Forecast"</strong>. If the Actual number deviates significantly from the Forecast, expect a sharp, immediate price correction.
                            </p>
                        </div>

                        {/* Education - Step 3 */}
                        <div className="bg-[#02040a] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all group">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">3. Manage Risk</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                News trading is volatile. Use wider Stop Losses, lower your leverage, or wait for the initial whip-saw capability to settle before entering.
                            </p>
                        </div>
                    </div>

                    {/* MT5 Integration Block */}
                    <div className="mt-16 bg-gold-gradient rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-xl text-[var(--color-navy)]">
                                <h2 className="text-3xl font-bold mb-4">Integrated Trading on MT5</h2>
                                <p className="font-medium opacity-90 text-lg mb-8">
                                    Did you know our MetaTrader 5 platform has an Economic Calendar built-in? Get alerts directly on your charts so you never get caught off guard.
                                </p>
                                <button className="px-8 py-3 bg-[var(--color-navy)] text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                                    <Smartphone size={20} /> Download MT5
                                </button>
                            </div>
                            {/* Mockup visual */}
                            <div className="hidden md:block relative">
                                <CalendarIcon size={120} className="text-[var(--color-navy)] opacity-20 absolute -bottom-10 -right-10 rotate-12" />
                                <div className="bg-[#1e222d] w-80 rounded-lg shadow-2xl border border-gray-700 overflow-hidden rotate-3 transform hover:rotate-0 transition-all duration-500">
                                    {/* Mockup Header */}
                                    <div className="bg-[#2a2e39] p-3 border-b border-gray-700 flex items-center justify-between">
                                        <div className="text-xs font-bold text-gray-400">Economic Calendar</div>
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                        </div>
                                    </div>
                                    {/* Mockup Content */}
                                    <div className="p-4 space-y-3">
                                        <div className="flex items-center gap-3 text-[10px] text-gray-400 border-b border-gray-700/50 pb-2">
                                            <div className="w-8">Time</div>
                                            <div className="flex-1">Event</div>
                                            <div className="w-6">Act</div>
                                        </div>
                                        {[
                                            { time: '14:30', event: 'US CPI (YoY)', actual: '3.2%', color: 'text-green-400' },
                                            { time: '15:15', event: 'ECB Rate Decision', actual: '4.5%', color: 'text-white' },
                                            { time: '17:00', event: 'Crude Oil Inv', actual: '-2.1M', color: 'text-red-400' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-[10px]">
                                                <div className="w-8 text-gray-500">{item.time}</div>
                                                <div className="flex-1 text-gray-300 truncate">{item.event}</div>
                                                <div className={`w-6 font-mono ${item.color}`}>{item.actual}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                        <p className="text-sm text-gray-500 italic">
                            <Info size={14} className="inline mr-1 mb-0.5" />
                            <strong>Disclaimer:</strong> Past performance of economic data is not an indicator of future market results. High-impact news can lead to significant slippage and price gaps. Radhika Capital Markets is not responsible for trading losses incurred during news events.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default EconomicCalendar;
