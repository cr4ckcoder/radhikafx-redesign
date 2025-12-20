import React from 'react';
import {
    Cpu, Zap, BarChart2, CheckCircle, Shield, Award,
    Terminal, ArrowRight, Layers, Sliders, TrendingUp, Anchor,
    Server, Activity
} from 'lucide-react';

const Pro = () => {
    // Pro Silver accent
    const accentColor = "#94a3b8"; // slate-400

    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The "Pro" Hero */}
            <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
                {/* Minimalist Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    {/* Glowing Emblem */}
                    <div className="w-24 h-24 mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-slate-400 rounded-full opacity-20 filter blur-xl animate-pulse-slow"></div>
                        <div className="relative z-10 w-full h-full border-2 border-slate-400 rounded-full flex items-center justify-center">
                            <span className="text-3xl font-[var(--font-heading)] font-bold text-slate-400">P</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)] tracking-tight">
                        Pro <span className="text-slate-400">Account</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8 tracking-wide">
                        Optimized for Performance.
                    </h2>

                    <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Lower spreads, faster execution, and advanced tools. Designed for experienced traders who require precision in every pip.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-400/20 pt-10">
                        <div className="text-center">
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Min Deposit</div>
                            <div className="text-3xl font-bold text-white">$1,000</div>
                        </div>
                        <div className="text-center">
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Spreads</div>
                            <div className="text-3xl font-bold text-white">2.5 <span className="text-sm font-normal text-gray-500">Pips</span></div>
                        </div>
                        <div className="text-center">
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Commission</div>
                            <div className="text-3xl font-bold text-white">$0</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: Performance Value Prop */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">Why Upgrade to Pro?</h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                Moving to a Pro account allows you to scale your trading volume efficiently. Benefit from decreased costs and prioritized order flow.
                            </p>
                            <div className="p-6 bg-[#0a0a0a] border-l-2 border-slate-400">
                                <p className="text-gray-300 italic">
                                    "When volatility hits, you need execution you can trust. The Pro account connects you to deeper liquidity tiers for better stability."
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            {/* Server Performance Visual */}
                            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/10 rounded-full blur-3xl"></div>
                                <h3 className="text-gray-400 text-sm font-bold uppercase mb-8 text-center">Execution Latency</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 text-gray-500">
                                            <span>Standard Routing</span>
                                            <span>~300ms</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-600 w-3/4"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 text-slate-400 font-bold">
                                            <span>Pro Routing</span>
                                            <span>&lt; 50ms</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-400 w-1/6 shadow-[0_0_10px_rgba(148,163,184,0.5)]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-center gap-4">
                                    <div className="px-4 py-2 bg-slate-500/10 border border-slate-500/20 rounded text-xs font-mono text-slate-300">
                                        <Server size={14} className="inline mr-2" /> NY4 Equinix
                                    </div>
                                    <div className="px-4 py-2 bg-slate-500/10 border border-slate-500/20 rounded text-xs font-mono text-slate-300">
                                        <Activity size={14} className="inline mr-2" /> 99.9% Uptime
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Pro Features */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-slate-400 transition-all duration-300 group">
                            <Anchor size={32} className="text-gray-600 group-hover:text-slate-400 mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Zero Requotes</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Direct Market Access (DMA) ensures your price is filled without rejection.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-slate-400 transition-all duration-300 group">
                            <Cpu size={32} className="text-gray-600 group-hover:text-slate-400 mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">EA Friendly</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                No restrictions on automated strategies, scalping, or hedging.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-slate-400 transition-all duration-300 group">
                            <Award size={32} className="text-gray-600 group-hover:text-slate-400 mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Dedicated Manager</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Priority support and a personal account manager for your specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: Detailed Specifications */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white">Account Specifications</h2>
                    </div>

                    <div className="border-t border-b border-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Execution Model</span>
                                <span className="text-white font-bold font-mono">DMA / STP</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Max Leverage</span>
                                <span className="text-white font-bold font-mono">1:400</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Account Currency</span>
                                <span className="text-white font-bold font-mono">USD / EUR</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Min Lot Size</span>
                                <span className="text-white font-bold font-mono">0.01</span>
                            </div>
                            <div className="p-6 md:border-r border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Margin Call</span>
                                <span className="text-white font-bold font-mono">100%</span>
                            </div>
                            <div className="p-6 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Stop Out</span>
                                <span className="text-white font-bold font-mono">50%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Code / Algo Section */}
            <section className="py-24 bg-black overflow-hidden relative">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-900/10 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="bg-[#121212] border border-gray-800 rounded-sm p-6 shadow-2xl font-mono text-xs">
                            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-gray-500 ml-2">algo_strategy.mq5</span>
                            </div>
                            <div className="space-y-1 text-gray-400">
                                <div><span className="text-purple-400">input</span> double LotSize = <span className="text-green-400">1.0</span>;</div>
                                <div><span className="text-purple-400">input</span> int MagicNumber = <span className="text-green-400">123456</span>;</div>
                                <div className="mt-2"><span className="text-gray-500">// Execution logic</span></div>
                                <div><span className="text-blue-400">if</span>(ConditionsMet()) {'{'}</div>
                                <div className="pl-4">OrderSend(_Symbol, OP_BUY, LotSize, Ask, <span className="text-green-400">0</span>, ...);</div>
                                <div>{'}'}</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 text-slate-400 mb-4 font-bold uppercase tracking-widest text-xs">
                            <Terminal size={14} /> Built for Automation
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Run Your Algos 24/5</h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            The Pro Account environment is optimized for stability, making it the perfect choice for running Expert Advisors (EAs) and automated trading scripts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Block 6: CTA */}
            <section className="py-32 bg-black text-center">
                <div className="container mx-auto px-6">
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] mb-4 text-xs">Upgrade Your Trading</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-[var(--font-heading)]">Professional Grade.</h2>

                    <button className="bg-transparent border border-slate-400 text-slate-400 px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                        Open Pro Account
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Pro;
