import React, { useState } from 'react';
import {
    Clock, Lock, Globe, AlertTriangle, CheckCircle,
    MessageCircle, ArrowRight, Copy, QrCode, Wallet,
    RefreshCw, ChevronRight
} from 'lucide-react';

const Funding = () => {
    // Tether Green accent color
    const accentColor = "#26A17B";

    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The "Instant Liquidity" Hero */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#26A17B1a] to-[#02040a]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="w-20 h-20 bg-[#26A17B20] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
                        <Wallet size={40} color={accentColor} />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                        Fast, Borderless Funding via <span style={{ color: accentColor }}>USDT</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience instant account funding with zero bank delays. Securely deposit Tether (USDT) directly into your trading account and start trading global markets in minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            className="px-8 py-4 font-bold rounded-lg text-white transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                            style={{ backgroundColor: accentColor, boxShadow: `0 10px 20px -10px ${accentColor}66` }}
                        >
                            Login to Deposit <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                            New User? Register Now
                        </button>
                    </div>

                    <div className="mt-12 flex justify-center gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <CheckCircle size={14} color={accentColor} /> Instant Processing
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={14} color={accentColor} /> Blockchain Verified
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={14} color={accentColor} /> 24/7 Availability
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: Why We Use USDT */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-[#050c18] rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#26A17B] transition-colors group">
                            <div className="w-14 h-14 bg-[#26A17B10] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#26A17B] transition-colors">
                                <Zap size={28} className="text-[#26A17B] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Instant Speed</h3>
                            <p className="text-gray-400 leading-relaxed">
                                No more waiting 3–5 business days for bank wires. Blockchain transfers are confirmed in minutes.
                            </p>
                        </div>

                        <div className="p-8 bg-[#050c18] rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#26A17B] transition-colors group">
                            <div className="w-14 h-14 bg-[#26A17B10] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#26A17B] transition-colors">
                                <Lock size={28} className="text-[#26A17B] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Privacy & Security</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Fund your account without sharing sensitive banking details or facing restrictive bank limits.
                            </p>
                        </div>

                        <div className="p-8 bg-[#050c18] rounded-2xl border border-[rgba(255,255,255,0.05)] hover:border-[#26A17B] transition-colors group">
                            <div className="w-14 h-14 bg-[#26A17B10] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#26A17B] transition-colors">
                                <Clock size={28} className="text-[#26A17B] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">24/7 Funding</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Markets move on weekends, and so do we. Deposit anytime, day or night.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Supported Networks */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Supported Networks</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* TRC20 Card */}
                        <div className="bg-[#050c18] border-2 border-[#26A17B] rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#26A17B] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#26A17B] rounded-full flex items-center justify-center text-white font-bold text-xl">T</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">USDT (TRC20)</h3>
                                    <p className="text-gray-400 text-sm">Tron Network</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300 text-sm"><CheckCircle size={16} className="text-[#26A17B] mr-2" /> Lowest Network Fees (~$1)</li>
                                <li className="flex items-center text-gray-300 text-sm"><CheckCircle size={16} className="text-[#26A17B] mr-2" /> Fastest Confirmation Time</li>
                            </ul>
                        </div>

                        {/* ERC20 Card */}
                        <div className="bg-[#050c18] border border-gray-700 rounded-2xl p-8 relative opacity-80 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl">E</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">USDT (ERC20)</h3>
                                    <p className="text-gray-400 text-sm">Ethereum Network</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={16} className="text-gray-600 mr-2" /> Standard Reliability</li>
                                <li className="flex items-center text-gray-400 text-sm"><CheckCircle size={16} className="text-gray-600 mr-2" /> Widely Supported</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg flex items-start gap-4">
                        <AlertTriangle size={24} className="text-red-500 shrink-0 mt-1" />
                        <p className="text-red-200 text-sm leading-relaxed">
                            <span className="font-bold text-red-100">Warning:</span> Please ensure you select the correct network. Sending funds to the wrong address/network may result in permanent loss of assets. Always double-check before confirming.
                        </p>
                    </div>
                </div>
            </section>

            {/* Block 4: The 4-Step Deposit Guide */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-16 text-center">How to Deposit</h2>

                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative max-w-6xl mx-auto">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-800 -z-0"></div>

                        {/* Step 1 */}
                        <div className="relative z-10 w-full md:w-1/4">
                            <div className="w-16 h-16 bg-[#050c18] border-4 border-[#0a1629] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">1</div>
                            <div className="bg-[#050c18] p-6 rounded-xl border border-gray-800 text-center h-full">
                                <h4 className="text-white font-bold mb-2">Login</h4>
                                <p className="text-gray-400 text-sm">Access your RadhikaFX Portal dashboard.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 w-full md:w-1/4">
                            <div className="w-16 h-16 bg-[#050c18] border-4 border-[#0a1629] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">2</div>
                            <div className="bg-[#050c18] p-6 rounded-xl border border-gray-800 text-center h-full">
                                <h4 className="text-white font-bold mb-2">Select Network</h4>
                                <p className="text-gray-400 text-sm">Choose USDT and select TRC20 or ERC20.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 w-full md:w-1/4">
                            <div className="w-16 h-16 bg-[#26A17B] border-4 border-[#0a1629] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto shadow-[0_0_20px_#26A17B66]">3</div>
                            <div className="bg-[#050c18] p-6 rounded-xl border border-[#26A17B] text-center h-full shadow-lg shadow-[#26A17B1a]">
                                <h4 className="text-white font-bold mb-2">Scan & Send</h4>
                                <p className="text-gray-400 text-sm">Scan the QR Code or copy the unique address.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative z-10 w-full md:w-1/4">
                            <div className="w-16 h-16 bg-[#050c18] border-4 border-[#0a1629] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">4</div>
                            <div className="bg-[#050c18] p-6 rounded-xl border border-gray-800 text-center h-full">
                                <h4 className="text-white font-bold mb-2">Confirm</h4>
                                <p className="text-gray-400 text-sm">Balance updates automatically after confirmation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Transparent Conditions Table */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-[#0a1629] rounded-xl overflow-hidden border border-gray-800">
                        <div className="p-6 bg-[#050c18] border-b border-gray-800 text-center">
                            <h3 className="text-xl font-bold text-white">Deposit Conditions</h3>
                        </div>
                        <div className="divide-y divide-gray-800">
                            <div className="flex justify-between p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Minimum Deposit</span>
                                <span className="text-white font-bold">$100 <span className="text-gray-500 font-normal">(or equivalent USDT)</span></span>
                            </div>
                            <div className="flex justify-between p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Deposit Fee</span>
                                <span className="text-[#26A17B] font-bold">0% <span className="text-gray-500 font-normal">(RadhikaFX free)</span></span>
                            </div>
                            <div className="flex justify-between p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Processing Time</span>
                                <span className="text-white font-bold">Instant <span className="text-gray-500 font-normal">(after confirmation)</span></span>
                            </div>
                            <div className="flex justify-between p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Availability</span>
                                <span className="text-white font-bold">24 / 7 / 365</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 6: Live Help / Troubleshooting */}
            <section className="pb-24 pt-8 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-gradient-to-r from-blue-900/40 to-[#0a1629] border border-blue-500/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Funds not reflecting?</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                If your transaction is confirmed on the blockchain but not in your dashboard, please have your TxID (Transaction ID) ready and contact our 24/7 support.
                            </p>
                        </div>
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors whitespace-nowrap flex items-center gap-2">
                            <MessageCircle size={18} /> Chat with Support
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper Icon for Zap (Lightning) since it wasn't imported initially but used in block 2 logic
const Zap = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

export default Funding;
