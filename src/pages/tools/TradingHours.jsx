import React, { useState, useEffect } from 'react';
import { Clock, Globe, Calendar, AlertTriangle, Smartphone, Info, Check, MapPin } from 'lucide-react';

const TradingHours = () => {
    const [time, setTime] = useState(new Date());

    // Update clock every second (Simulating GMT+3 Server Time)
    useEffect(() => {
        const timer = setInterval(() => {
            // Get current UTC time
            const now = new Date();
            // Add 3 hours for GMT+3
            const serverTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
            setTime(serverTime);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' });
    };

    const MarketStatus = ({ label, isOpen }) => (
        <span className={`${isOpen ? 'text-green-500' : 'text-red-500'} flex items-center gap-1`}>
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            {label} {isOpen ? 'Open' : 'Closed'}
        </span>
    );


    return (
        <div className="bg-[var(--color-navy)] min-h-screen pt-20 md:pt-40 font-[var(--font-body)] text-white">

            {/* Block 1: The "Ready to Trade" Hero */}
            <section className="py-20 bg-[var(--color-navy)] border-b border-[var(--glass-border)] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[150px] opacity-5"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <Globe size={14} /> Global Market Synchronization
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[var(--font-heading)]">
                        Stay Synchronized with <br /> <span className="text-gold-gradient">Global Markets</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
                        Plan your trading week with precision. View real-time server hours, session openings, and upcoming holiday adjustments.
                    </p>

                    {/* Live Server Time Clock */}
                    <div className="inline-block relative">
                        <div className="absolute -inset-1 bg-gold-gradient rounded-2xl blur opacity-30"></div>
                        <div className="relative bg-[#02040a] border border-[var(--glass-border)] rounded-xl p-8 shadow-2xl">
                            <div className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">Server Time (GMT+3)</div>
                            <div className="text-6xl md:text-8xl font-mono font-bold text-white tracking-widest tabular-nums text-shadow-glow">
                                {formatTime(time)}
                            </div>
                            <div className="mt-4 flex justify-center gap-4 text-xs font-bold uppercase flex-wrap">
                                <MarketStatus label="London" isOpen={time.getUTCHours() >= 10 && time.getUTCHours() < 19} />
                                <MarketStatus label="New York" isOpen={time.getUTCHours() >= 15 && time.getUTCHours() <= 23} />
                                <MarketStatus label="Tokyo" isOpen={time.getUTCHours() >= 2 && time.getUTCHours() < 11} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: Interactive Session Map */}
            <section className="py-20 bg-[#02040a] border-b border-[var(--glass-border)]">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                        <MapPin className="text-[var(--color-gold)]" /> Market Sessions Overview (GMT+3)
                    </h2>

                    {/* Visual Timeline Bar */}
                    <div className="relative h-24 bg-[var(--color-navy)] rounded-xl border border-[var(--glass-border)] overflow-hidden flex items-center">
                        {/* Grid Lines */}
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="flex-1 h-full border-r border-white/5 relative group">
                                <span className="absolute bottom-1 right-1 text-[10px] text-gray-600 group-hover:text-white">{i}:00</span>
                            </div>
                        ))}

                        {/* Session Blocks - Positioned absolutely based on percentages approx */}
                        {/* Sydney: 00:00 - 09:00 */}
                        <div className="absolute top-2 bottom-12 left-[0%] w-[37.5%] bg-blue-500/20 border border-blue-500/50 rounded-md flex items-center justify-center text-xs font-bold text-blue-300">
                            Sydney
                        </div>
                        {/* Tokyo: 02:00 - 11:00 */}
                        <div className="absolute top-4 bottom-10 left-[8.33%] w-[37.5%] bg-purple-500/20 border border-purple-500/50 rounded-md flex items-center justify-center text-xs font-bold text-purple-300">
                            Tokyo
                        </div>
                        {/* London: 10:00 - 19:00 */}
                        <div className="absolute top-8 bottom-6 left-[41.6%] w-[37.5%] bg-green-500/20 border border-green-500/50 rounded-md flex items-center justify-center text-xs font-bold text-green-300">
                            London
                        </div>
                        {/* New York: 15:00 - 24:00 */}
                        <div className="absolute top-10 bottom-4 left-[62.5%] w-[37.5%] bg-orange-500/20 border border-orange-500/50 rounded-md flex items-center justify-center text-xs font-bold text-orange-300">
                            New York
                        </div>
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-4">
                        *Highlight indicates "Golden Hours" of high liquidity overlap between London & New York (15:00 - 19:00 GMT+3).
                    </p>
                </div>
            </section>

            {/* Block 3: Asset-Specific Trading Hours */}
            <section className="py-20 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Instrument Trading Schedule</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Forex Card */}
                        <div className="bg-[#02040a] p-6 rounded-xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Forex</h3>
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">24/5</span>
                            </div>
                            <div className="space-y-3 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Opening:</span>
                                    <span className="text-white">Mon 00:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Closing:</span>
                                    <span className="text-white">Fri 23:55</span>
                                </div>
                                <div className="p-3 bg-white/5 rounded border border-white/5 mt-4 text-xs italic">
                                    Continuous trading with no daily breaks.
                                </div>
                            </div>
                        </div>

                        {/* Metals Card */}
                        <div className="bg-[#02040a] p-6 rounded-xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Metals</h3>
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">Daily Break</span>
                            </div>
                            <div className="space-y-3 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Opens:</span>
                                    <span className="text-white">Mon 01:05</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Daily Break:</span>
                                    <span className="text-white">23:55 - 01:05</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Closes:</span>
                                    <span className="text-white">Fri 23:55</span>
                                </div>
                            </div>
                        </div>

                        {/* Crypto Card */}
                        <div className="bg-[#02040a] p-6 rounded-xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Crypto</h3>
                                <span className="px-2 py-1 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold rounded">24/7/365</span>
                            </div>
                            <div className="space-y-3 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Availability:</span>
                                    <span className="text-white font-bold">Always Open</span>
                                </div>
                                <div className="p-3 bg-white/5 rounded border border-white/5 mt-4 text-xs italic">
                                    The only market that never sleeps. Maintenance may occur weekends.
                                </div>
                            </div>
                        </div>

                        {/* Indices Card */}
                        <div className="bg-[#02040a] p-6 rounded-xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Indices (US30)</h3>
                                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded">Session</span>
                            </div>
                            <div className="space-y-3 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Pre-Market:</span>
                                    <span className="text-white">01:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Break:</span>
                                    <span className="text-white">23:15 - 23:30</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Break 2:</span>
                                    <span className="text-white">00:00 - 01:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Share Card */}
                        <div className="bg-[#02040a] p-6 rounded-xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">US Shares</h3>
                                <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded">NYSE/NASDAQ</span>
                            </div>
                            <div className="space-y-3 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Open:</span>
                                    <span className="text-white">16:30 (GMT+3)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Close:</span>
                                    <span className="text-white">23:00 (GMT+3)</span>
                                </div>
                                <div className="p-3 bg-white/5 rounded border border-white/5 mt-4 text-xs italic">
                                    Strictly follows US Market hours. Closed on US Holidays.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: Holiday Notice & Tech Info */}
            <section className="py-20 bg-[#02040a] border-t border-[var(--glass-border)]">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Holiday Bulletin */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Calendar className="text-[var(--color-gold)]" size={24} />
                            <h2 className="text-2xl font-bold text-white">Upcoming Market Adjustments</h2>
                        </div>
                        <div className="bg-[var(--color-navy)] rounded-xl border border-[var(--glass-border)] p-6">
                            {/* Empty State / Normal State */}
                            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[var(--glass-border)]">
                                <div className="p-3 bg-green-500/10 rounded-full text-green-500">
                                    <Check size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Standard Schedule Active</h4>
                                    <p className="text-gray-400 text-sm">Currently, all markets are operating on a standard schedule. No upcoming holidays for this week.</p>
                                </div>
                            </div>

                            {/* Example Holiday (Commented out or Static for visual) */}
                            {/*
                             <div className="flex items-start gap-4 pb-0 opacity-50">
                                <div className="p-3 bg-red-500/10 rounded-full text-red-500">
                                    <AlertTriangle size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Dec 25 - Christmas Day</h4>
                                    <p className="text-gray-400 text-sm">All Markets Closed (Crypto Open).</p>
                                </div>
                            </div>
                            */}
                            <button className="w-full mt-2 py-2 text-sm text-[var(--color-gold)] font-bold hover:bg-white/5 rounded">
                                View Full Holiday Calendar →
                            </button>
                        </div>
                    </div>

                    {/* Technical Info & Sync */}
                    <div className="space-y-6">
                        <div className="bg-[var(--color-navy)] p-6 rounded-xl border border-[var(--glass-border)]">
                            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                <Info size={18} className="text-blue-400" /> Maintenance Windows
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Every weekend between <strong>Saturday 00:00 and Sunday 23:00</strong>, our servers may undergo maintenance. Trading for Currencies/Shares is closed, but Crypto trading generally remains available.
                            </p>
                        </div>

                        <div className="bg-gold-gradient p-6 rounded-xl text-[var(--color-navy)] flex items-center gap-6 shadow-lg">
                            <div className="hidden sm:block">
                                <Smartphone size={48} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">See Hours on MT5</h3>
                                <p className="text-sm font-medium opacity-90 mb-0">
                                    To view specific trading hours for any instrument, right-click the asset in <strong>'Market Watch'</strong> and select <strong>'Specification'</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default TradingHours;
