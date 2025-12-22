import React, { useState } from 'react';
import { Shield, Clock, Database, Globe, ChevronDown, Download, Check, AlertTriangle, Zap } from 'lucide-react';

const TradingConditions = () => {
    const [activeTab, setActiveTab] = useState('Forex');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[var(--color-navy)] min-h-screen pt-20 font-[var(--font-body)] text-white">

            {/* 0. Quick Links / Jump To */}
            <div className="bg-[#02040a]/90 backdrop-blur-md border-b border-[var(--glass-border)] sticky top-20 z-40">
                <div className="container mx-auto px-6 py-4 flex gap-6 overflow-x-auto text-sm font-medium text-gray-400 no-scrollbar">
                    <button onClick={() => scrollToSection('execution')} className="hover:text-[var(--color-gold)] whitespace-nowrap transition-colors">Execution Policy</button>
                    <button onClick={() => scrollToSection('core')} className="hover:text-[var(--color-gold)] whitespace-nowrap transition-colors">Core Conditions</button>
                    <button onClick={() => scrollToSection('leverage')} className="hover:text-[var(--color-gold)] whitespace-nowrap transition-colors">Margin & Leverage</button>
                    <button onClick={() => scrollToSection('specs')} className="hover:text-[var(--color-gold)] whitespace-nowrap transition-colors">Contract Specs</button>
                    <button onClick={() => scrollToSection('swap')} className="hover:text-[var(--color-gold)] whitespace-nowrap transition-colors">Swap Rates</button>
                </div>
            </div>

            {/* 1. Transparency Hero */}
            <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-block px-3 py-1 bg-[rgba(255,215,0,0.1)] border border-[var(--color-gold)] text-[var(--color-gold)] rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        Technical Specification Sheet
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[var(--font-heading)] leading-tight">
                        Fair, Transparent, and <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">Competitive Conditions</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                        No hidden fees. No requotes. Just institutional-grade execution and ultra-tight pricing across all asset classes.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all transform hover:-translate-y-1">
                            View Live Spreads
                        </button>
                        <button className="px-8 py-4 border border-[var(--glass-border)] bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                            <Download size={18} /> Download Contract Specs
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Core Conditions (Icon Grid) */}
            <section id="core" className="py-24 bg-[#02040a]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-[var(--color-navy)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all group duration-300">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                <Database size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Account Base: USDT</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Simplified funding and accounting via Tether (USDT) stablecoin for fast and low-cost transfers.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[var(--color-navy)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all group duration-300">
                            <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Execution: STP/ECN</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Market-direct execution with absolutely no dealer intervention. Pure liquidity access.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[var(--color-navy)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all group duration-300">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Liquidity: Tier-1</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Aggregated deep liquidity ensuring minimal slippage even on large institutional orders.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-[var(--color-navy)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-all group duration-300">
                            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Hours: 24/7 Crypto</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Trade Forex 24/5 and Crypto assets 24/7. Never miss a market movement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Leverage & Margin Policy */}
            <section id="leverage" className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leverage & Margin Policy</h2>
                        <p className="text-gray-400">Critical risk management parameters for your trading.</p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-[var(--glass-border)] bg-[#02040a]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 text-[var(--color-gold)] text-xs uppercase tracking-widest font-bold">
                                    <th className="p-6 border-b border-[var(--glass-border)]">Account Type</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Max Leverage</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Margin Call Level</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Stop Out Level</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-300">
                                <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-bold text-white">Standard Account</td>
                                    <td className="p-6">Up to 1:500</td>
                                    <td className="p-6">100%</td>
                                    <td className="p-6 text-red-500 font-bold">50%</td>
                                </tr>
                                <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-bold text-white">Pro Account</td>
                                    <td className="p-6">Up to 1:200</td>
                                    <td className="p-6">100%</td>
                                    <td className="p-6 text-red-500 font-bold">50%</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-bold text-white">Pro X (Raw)</td>
                                    <td className="p-6">Up to 1:200</td>
                                    <td className="p-6">100%</td>
                                    <td className="p-6 text-red-500 font-bold">50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex items-start gap-4 bg-[rgba(255,215,0,0.05)] p-6 rounded-xl border border-[var(--color-gold)]/20 text-[var(--color-gold)]/90 text-sm">
                        <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                        <p className="leading-relaxed"><strong>Risk Warning:</strong> Leverage is a double-edged sword. While it can magnify profits, it also magnifies losses. We provide flexible options to suit your risk appetite and suggest using appropriate risk management.</p>
                    </div>
                </div>
            </section>

            {/* 4. Contract Specs */}
            <section id="specs" className="py-24 bg-[#02040a]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contract Specifications</h2>
                            <p className="text-gray-400">Detailed instrument data for our most popular assets.</p>
                        </div>
                        <div className="flex gap-2 mt-6 md:mt-0 p-1 bg-white/5 rounded-lg border border-white/10">
                            {['Forex', 'Metals', 'Indices', 'Crypto'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === tab ? 'bg-[var(--color-gold)] text-[var(--color-navy)] shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-[var(--glass-border)] bg-[var(--color-navy)]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-bold">
                                    <th className="p-6 border-b border-[var(--glass-border)]">Instrument</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Symbol</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Min Spread</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Contract Size</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Min/Max Lot</th>
                                    <th className="p-6 border-b border-[var(--glass-border)]">Swap (Long/Short)</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-300">
                                {activeTab === 'Forex' && (
                                    <>
                                        <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                            <td className="p-6 font-bold text-white">Euro vs US Dollar</td>
                                            <td className="p-6 font-mono text-[var(--color-gold)]">EURUSD</td>
                                            <td className="p-6 text-green-400 font-bold">0.0</td>
                                            <td className="p-6">100,000</td>
                                            <td className="p-6">0.01 / 100</td>
                                            <td className="p-6">-5.4 / -1.2</td>
                                        </tr>
                                        <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                            <td className="p-6 font-bold text-white">British Pound vs US Dollar</td>
                                            <td className="p-6 font-mono text-[var(--color-gold)]">GBPUSD</td>
                                            <td className="p-6 text-green-400 font-bold">0.1</td>
                                            <td className="p-6">100,000</td>
                                            <td className="p-6">0.01 / 100</td>
                                            <td className="p-6">-3.2 / -4.1</td>
                                        </tr>
                                        <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                            <td className="p-6 font-bold text-white">US Dollar vs Japanese Yen</td>
                                            <td className="p-6 font-mono text-[var(--color-gold)]">USDJPY</td>
                                            <td className="p-6 text-green-400 font-bold">0.1</td>
                                            <td className="p-6">100,000</td>
                                            <td className="p-6">0.01 / 100</td>
                                            <td className="p-6">4.2 / -8.5</td>
                                        </tr>
                                    </>
                                )}
                                {activeTab === 'Metals' && (
                                    <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-white">Gold vs US Dollar</td>
                                        <td className="p-6 font-mono text-[var(--color-gold)]">XAUUSD</td>
                                        <td className="p-6 text-green-400 font-bold">1.2</td>
                                        <td className="p-6">100 oz</td>
                                        <td className="p-6">0.01 / 50</td>
                                        <td className="p-6">-12.5 / 5.2</td>
                                    </tr>
                                )}
                                {activeTab === 'Indices' && (
                                    <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-white">US Tech 100</td>
                                        <td className="p-6 font-mono text-[var(--color-gold)]">NAS100</td>
                                        <td className="p-6 text-green-400 font-bold">1.5</td>
                                        <td className="p-6">10</td>
                                        <td className="p-6">0.1 / 100</td>
                                        <td className="p-6">-2.5 / -2.5</td>
                                    </tr>
                                )}
                                {activeTab === 'Crypto' && (
                                    <tr className="border-b border-[var(--glass-border)] hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-white">Bitcoin</td>
                                        <td className="p-6 font-mono text-[var(--color-gold)]">BTCUSD</td>
                                        <td className="p-6 text-green-400 font-bold">$12</td>
                                        <td className="p-6">1</td>
                                        <td className="p-6">0.01 / 10</td>
                                        <td className="p-6">-15 / -15</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="p-6 border-t border-[var(--glass-border)] bg-[#02040a] text-center">
                            <button className="text-[var(--color-gold)] font-bold text-sm hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto">
                                <Download size={16} /> Download Full Contract Specifications (PDF) - Updated Dec 2025
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Policies: Execution & Swap Free */}
            <section id="execution" className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* No Requote Shield */}
                        <div className="bg-[#02040a] rounded-2xl p-10 text-white relative overflow-hidden border border-[var(--glass-border)]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)] rounded-full filter blur-[100px] opacity-10"></div>
                            <div className="relative z-10">
                                <Shield className="text-[var(--color-gold)] mb-6" size={48} />
                                <h3 className="text-2xl font-bold mb-4">Execution & Requote Policy</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    We operate a strictly <strong>No Requote</strong> policy. Our ultra-low latency environment (avg. &lt;30ms) ensures that the price you see is the price you get.
                                </p>
                                <div className="p-5 bg-white/5 rounded-xl border border-white/10 text-sm text-gray-400 italic">
                                    "During extreme market volatility, orders are filled at the next best available market price (Slippage may occur in either direction)."
                                </div>
                            </div>
                        </div>

                        {/* Swap Free */}
                        <div className="bg-gradient-to-br from-[#0a1629] to-[#02040a] rounded-2xl p-10 border border-[var(--glass-border)] flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 border border-green-500/20">
                                    <Check size={28} />
                                    14</div>
                                <h3 className="text-2xl font-bold text-white">Islamic (Swap-Free) Trading</h3>
                            </div>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Radhika Capital Markets respects diverse trading needs. We offer <strong>100% Sharia-Compliant Swap-Free accounts</strong> for clients who cannot pay or receive interest for religious reasons. No widened spreads or hidden administrative fees.
                            </p>
                            <button className="self-start px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] font-bold rounded-lg hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-all">
                                Request Swap-Free Status
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default TradingConditions;
