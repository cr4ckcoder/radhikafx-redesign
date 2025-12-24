import React, { useState, useEffect } from 'react';
import {
    Globe, TrendingUp, Zap, Clock, PieChart,
    Smartphone, Monitor, ArrowUp, ArrowDown, Info, Shield, Layers, Activity
} from 'lucide-react';
import TradingViewTicker from '../../components/TradingViewTicker';

const ForexCard = ({ pair, name, price, change, isPositive }) => (
    <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] p-6 rounded-2xl hover:border-[var(--color-gold)] transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-xl font-bold text-white">{pair}</h3>
                <p className="text-xs text-gray-400">{name}</p>
            </div>
            <div className={`flex items-center text-sm font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                {change}%
            </div>
        </div>
        <div className="text-2xl font-mono font-bold text-white mb-4">
            {price}
        </div>
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">

            <div className={`h-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${Math.random() * 40 + 30}%` }}></div>
        </div>
    </div>
);


const Forex = () => {

    const forexSymbols = [
        { "proName": "FX_IDC:EURUSD", "description": "EUR/USD" },
        { "proName": "FX_IDC:GBPUSD", "description": "GBP/USD" },
        { "proName": "FX_IDC:USDJPY", "description": "USD/JPY" },
        { "proName": "FX_IDC:AUDUSD", "description": "AUD/USD" },
        { "proName": "FX_IDC:USDCAD", "description": "USD/CAD" },
        { "proName": "FX_IDC:USDCHF", "description": "USD/CHF" },
        { "proName": "FX_IDC:NZDUSD", "description": "NZD/USD" }
    ];

    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The Hero Section (Velocity & Scale) */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                {/* Simulated Time-lapse Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 filter blur-[80px] animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 border border-[var(--color-gold)] rounded-full text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest bg-[rgba(233,219,141,0.05)]">
                            Forex Trading
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                            Master the World’s <br /><span className="text-[var(--color-gold)]">Most Liquid Market</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Trade 60+ Currency Pairs with deep liquidity, no requotes, and spreads starting from 0.0 pips. Experience the Radhika Capital Markets edge in the $7.5 trillion-a-day market.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-colors">
                                Start Trading Forex
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-[var(--color-white)] text-white font-bold rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                                View Live Spreads
                            </button>
                        </div>
                    </div>
                    {/* 3D Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500 rounded-full filter blur-[100px] opacity-20"></div>
                        <div className="relative z-10 bg-[#0a1629] border border-gray-700 rounded-2xl p-6 shadow-2xl transform rotate-y-6 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-center mb-6">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin-slow"></div>
                                    <div className="absolute inset-2 rounded-full border-4 border-purple-500/30 animate-spin-reverse-slow"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                                        FX
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-gray-300 font-bold">EUR/USD</span>
                                    <div className="text-right">
                                        <div className="text-green-400 font-mono font-bold">1.08450</div>
                                        <div className="text-xs text-green-500/70">+0.15%</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-gray-300 font-bold">GBP/USD</span>
                                    <div className="text-right">
                                        <div className="text-red-400 font-mono font-bold">1.26120</div>
                                        <div className="text-xs text-red-500/70">-0.05%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticker Widget */}
            <TradingViewTicker symbols={forexSymbols} />

            {/* Block 2: Why Trade Forex? */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">The FX Advantage</h2>
                        <p className="text-gray-400">Why millions of traders choose the currency markets.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Spreads from 0.0</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Access raw institutional pricing on our Pro ECN accounts with no markup.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">1:500 Leverage</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Maximize your buying power. Control $100,000 with just $200 margin.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Negative Balance Protection</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Trade with confidence. You can never lose more than your initial deposit.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">24/5 Trading</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The market never sleeps during the week. Trade from Sunday opening to Friday close.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Major Pairs Gallery */}
            <section className="py-20 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Major Pairs</h2>
                            <p className="text-gray-400">Low spreads, high liquidity.</p>
                        </div>
                        <button className="text-[var(--color-gold)] font-bold hover:text-white transition-colors hidden md:block">
                            View All 60+ Pairs →
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ForexCard pair="EUR/USD" name="Euro vs US Dollar" price="1.0845" change="0.12" isPositive={true} />
                        <ForexCard pair="GBP/USD" name="Pound vs US Dollar" price="1.2630" change="0.05" isPositive={false} />
                        <ForexCard pair="USD/JPY" name="US Dollar vs Yen" price="148.20" change="0.30" isPositive={true} />
                        <ForexCard pair="USD/CAD" name="US Dollar vs CAD" price="1.3520" change="0.10" isPositive={true} />
                        <ForexCard pair="AUD/USD" name="Aussie vs US Dollar" price="0.6550" change="0.25" isPositive={false} />
                        <ForexCard pair="USD/CHF" name="US Dollar vs Swissy" price="0.8790" change="0.02" isPositive={true} />
                    </div>
                </div>
            </section>

            {/* Block 4: Strategic Trading Tools (Split Section) */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-[#0a1629] to-[#050c18] border border-gray-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
                        {/* Background Tech Lines */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        <div className="md:w-1/2 relative z-10">
                            <div className="inline-flex items-center space-x-2 text-[var(--color-gold)] mb-6 font-bold uppercase tracking-widest text-sm">
                                <Activity size={18} />
                                <span>Execution Speed</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Milliseconds Matter.
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Our Equinix NY4 servers connect you directly to top-tier liquidity providers. No dealing desk execution means no conflict of interest.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-white font-medium">
                                    <Zap className="text-[var(--color-gold)] mr-4" size={20} />
                                    Avg. Execution Speed: 25ms
                                </li>
                                <li className="flex items-center text-white font-medium">
                                    <Layers className="text-[var(--color-gold)] mr-4" size={20} />
                                    Deep Market Depth
                                </li>
                            </ul>
                        </div>

                        <div className="md:w-1/2 relative z-10">
                            {/* Visual for Execution */}
                            <div className="bg-[#02040a] rounded-xl border border-gray-700 p-6 shadow-2xl relative">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-white text-sm">Server Latency</span>
                                        </div>
                                        <span className="text-[var(--color-gold)] font-mono">1.2ms</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-white text-sm">Execution Time</span>
                                        </div>
                                        <span className="text-[var(--color-gold)] font-mono">24ms</span>
                                    </div>
                                    <div className="h-32 mt-4 bg-gray-800/20 rounded-lg flex items-end justify-between px-2 pb-2">
                                        {[4, 7, 3, 8, 5, 9, 6, 4, 8, 10, 7, 5, 8, 6, 9].map((h, i) => (
                                            <div key={i} className="w-2 bg-blue-500/40 rounded-t" style={{ height: `${h * 10}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Closing Guarantee */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-blue-600 to-blue-900 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/30 mb-8 animate-pulse-slow">
                        <Globe size={40} className="text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Global Access
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Trade with a regulated global broker. Your funds are segregated in top-tier banks, ensuring maximum security while you focus on the markets.
                    </p>
                    <div className="text-[var(--color-gold)] font-bold text-lg tracking-widest border border-[var(--color-gold)] px-6 py-2 inline-block rounded-full">
                        FSC Regulated
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Forex;
