import React from 'react';
import { Link } from 'react-router-dom';
import {
    Activity, Globe, Server, Zap, Layers, Database,
    Cpu, Shield, BarChart2, Anchor, ArrowRight, CheckSquare,
    Hexagon, Terminal, Radio
} from 'lucide-react';
import LiquidityBg from '../../assets/liquidity-bg.png';

const LiquidityServices = () => {
    return (
        <div className="bg-[#02050a] min-h-screen font-[var(--font-body)] text-white pt-20 md:pt-40">

            {/* Block 1: The Institutional Hero */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#334155]">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={LiquidityBg}
                        alt="Liquidity Blueprint"
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#02050a]/90 via-[#02050a]/60 to-[#02050a] z-0"></div>
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(185,156,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(185,156,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block border border-[var(--color-gold)] px-4 py-1 mb-6 text-[var(--color-gold)] font-mono text-xs uppercase tracking-[0.2em] bg-[rgba(185,156,0,0.1)]">
                        Infrastructure | Connectivity | Depth
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold font-[var(--font-heading)] text-white mb-6 uppercase tracking-tight">
                        Institutional-Grade <br />
                        <span className="text-gold-gradient">Liquidity Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light border-l-2 border-[var(--color-gold)] pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        Powering brokers, hedge funds, and professional trading firms with deep, multi-asset liquidity and ultra-low latency execution via our global data center network.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                        <div className="flex flex-col items-center gap-2">
                            <Server size={32} className="stroke-gold-gradient" />
                            <span className="font-mono text-xs text-gray-400 uppercase">Equinix NY4</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Server size={32} className="stroke-gold-gradient" />
                            <span className="font-mono text-xs text-gray-400 uppercase">Equinix LD4</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Server size={32} className="stroke-gold-gradient" />
                            <span className="font-mono text-xs text-gray-400 uppercase">Equinix TY3</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: The Multi-Asset Ecosystem */}
            <section className="py-24 border-b border-[#334155] bg-[#050c18] relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Hexagon size={120} className="stroke-gold-gradient stroke-[0.5]" />
                </div>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider flex items-center gap-4">
                        <span className="w-8 h-8 bg-gold-gradient"></span>
                        Multi-Asset Ecosystem
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#334155] border border-[#334155]">
                        {[
                            { icon: Globe, title: "Forex", desc: "80+ Pairs. Majors, Minors, Exotics." },
                            { icon: Layers, title: "Metals", desc: "Gold, Silver, Platinum. Tight Spreads." },
                            { icon: BarChart2, title: "Indices", desc: "Global access. US30, GER40, HK50." },
                            { icon: Zap, title: "Energies", desc: "WTI & Brent Crude. Deep Order Books." },
                            { icon: Cpu, title: "Crypto", desc: "Deep Liquidity. USDT-Settled Assets." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#02050a] p-8 group hover:bg-[#0a1629] transition-colors relative">
                                <item.icon size={40} className="text-[#334155] mb-6 group-hover-stroke-gold-gradient transition-colors" />
                                <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed rounded-none">{item.desc}</p>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 bg-gold-gradient"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 3: The Technology Stack (Connectivity) */}
            <section className="py-24 bg-[#02050a] border-b border-[#334155] relative overflow-hidden">
                {/* Tech Background Lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--color-gold)]"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-[var(--color-gold)]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold mb-16 uppercase tracking-wider flex items-center gap-4 justify-end text-right">
                        Liquidity Bridge
                        <span className="w-8 h-8 bg-gold-gradient"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        {/* 1 */}
                        <div className="border border-[#334155] p-8 relative">
                            <div className="absolute -top-4 -left-4 bg-[#02050a] p-2 border border-[#334155]">
                                <Terminal size={32} className="stroke-gold-gradient" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-4 font-mono">FIX API 4.4</h3>
                            <p className="text-gray-400 text-sm leading-7">
                                Seamlessly integrate our liquidity into your own trading engine or custom front-end. Standardized protocol for maximum compatibility.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="border border-[#334155] p-8 relative bg-[rgba(185,156,0,0.02)]">
                            <div className="absolute -top-4 -left-4 bg-[#02050a] p-2 border border-[#334155]">
                                <Database size={32} className="stroke-gold-gradient" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-4 font-mono">Aggregated Pricing</h3>
                            <p className="text-gray-400 text-sm leading-7">
                                Pricing sourced from a world-class network of Tier-1 banks, ECNs, and non-bank liquidity providers to ensure the best bid/ask.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="border border-[#334155] p-8 relative">
                            <div className="absolute -top-4 -left-4 bg-[#02050a] p-2 border border-[#334155]">
                                <Activity size={32} className="stroke-gold-gradient" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-4 font-mono">Cross-Margining</h3>
                            <p className="text-gray-400 text-sm leading-7">
                                Optimize your capital efficiency. Trade multiple asset classes under a single, unified margin structure to maximize leverage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: Why Firms Choose RadhikaFX (B2B Value) */}
            <section className="py-24 bg-[#050c18] border-b border-[#334155]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[var(--color-gold)] font-bold uppercase tracking-widest mb-4 text-sm">Flexibility</h4>
                            <h3 className="text-2xl font-bold text-white mb-6">Customized Pools</h3>
                            <p className="text-gray-400 leading-relaxed border-l border-[#334155] pl-4">
                                "We build liquidity streams tailored to your specific toxic/non-toxic flow requirements, ensuring sustainable execution relationships."
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[var(--color-gold)] font-bold uppercase tracking-widest mb-4 text-sm">Reliability</h4>
                            <h3 className="text-2xl font-bold text-white mb-6">Execution Stability</h3>
                            <p className="text-gray-400 leading-relaxed border-l border-[#334155] pl-4">
                                "Consistent pricing and deep liquidity even during high-impact economic events (NFP, Rate Decisions) where others widen or disconnect."
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[var(--color-gold)] font-bold uppercase tracking-widest mb-4 text-sm">Service</h4>
                            <h3 className="text-2xl font-bold text-white mb-6">Professional Onboarding</h3>
                            <p className="text-gray-400 leading-relaxed border-l border-[#334155] pl-4">
                                "Dedicated institutional account managers and 24/6 technical support to ensure your bridge and feed are always operational."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Technical Specifications (The B2B Table) */}
            <section className="py-24 bg-[#02050a] border-b border-[#334155]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-12 flex items-center justify-between">
                        <h2 className="text-3xl font-bold uppercase font-mono">Technical Specifications</h2>
                        <Radio className="text-[var(--color-gold)] animate-pulse" />
                    </div>

                    <div className="w-full border border-[#334155]">
                        {/* Header Row */}
                        <div className="grid grid-cols-2 bg-[#0a1629] p-4 border-b border-[#334155] font-mono text-sm uppercase text-[var(--color-gold)]">
                            <div>Feature</div>
                            <div>Institutional Specification</div>
                        </div>

                        {/* Rows */}
                        {[
                            { f: "Connectivity", v: "FIX API 4.4, Liquidity Bridge, MT5 White Label" },
                            { f: "Data Centers", v: "Equinix LD4 (London), NY4 (New York)" },
                            { f: "Execution Speed", v: "Ultra-Low Latency (<10ms Internal)" },
                            { f: "Reporting", v: "Real-time Back Office & STP Reports" },
                            { f: "Settlement", v: "Net Open Position / Daily Settlement" },
                            { f: "Asset Class Coverage", v: "Forex, Metals, Commodities, Indices, Crypto" }
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-2 p-6 border-b border-[#334155] hover:bg-[#0a1629] transition-colors group">
                                <div className="font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">{row.f}</div>
                                <div className="text-gray-400 font-mono text-sm">{row.v}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 6: The "Institutional Inquiry" CTA */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto border border-[var(--color-gold)] p-1 md:p-2 bg-[rgba(185,156,0,0.05)]">
                        <div className="border border-[#334155] bg-[#02050a] p-12 text-center relative">
                            {/* Decorative Corner Markers */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-gold)]"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-gold)]"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--color-gold)]"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-gold)]"></div>

                            <Anchor size={48} className="mx-auto stroke-gold-gradient mb-6" />
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)] uppercase">
                                Upgrade Your <span className="text-gold-gradient">Liquidity Today</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                                Ready to optimize your execution? Our liquidity specialists are ready to discuss a tailored solution for your brokerage or fund.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <Link to="/contact-us" className="px-12 py-4 btn-gold text-[var(--color-navy)] font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-none">
                                    Contact Institutional Sales
                                </Link>
                                <button className="px-12 py-4 border border-[var(--color-gold)] text-[var(--color-gold)] font-bold uppercase tracking-widest hover:bg-[rgba(185,156,0,0.1)] hover:text-gold-gradient transition-colors rounded-none">
                                    Download Liquidity Deck (PDF)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LiquidityServices;
