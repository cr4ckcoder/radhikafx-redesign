import React from 'react';
import {
    Diamond, Clock, Globe, UserCheck, TrendingDown,
    Activity, ShieldCheck, Zap, Server, ChevronRight
} from 'lucide-react';

const ProX = () => {
    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The "Elite Tier" Hero */}
            <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
                {/* Minimalist Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    {/* Glowing Emblem */}
                    <div className="w-24 h-24 mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-[var(--color-gold)] rounded-full opacity-20 filter blur-xl animate-pulse-slow"></div>
                        <div className="relative z-10 w-full h-full border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center">
                            <span className="text-3xl font-[var(--font-heading)] font-bold text-[var(--color-gold)]">X</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)] tracking-tight">
                        Pro <span className="text-[var(--color-gold)]">X</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8 tracking-wide">
                        Trading Without Compromise.
                    </h2>

                    <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Our flagship account for those who demand the absolute minimum in trading costs. Get direct access to raw spreads from 0.0 pips, sourced from top-tier liquidity providers.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-[rgba(255,215,0,0.2)] pt-10">
                        <div className="text-center">
                            <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-2">Min Deposit</div>
                            <div className="text-3xl font-bold text-white">$15,000</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-2">Spreads</div>
                            <div className="text-3xl font-bold text-white">0.0 <span className="text-sm font-normal text-gray-500">Pips</span></div>
                        </div>
                        <div className="text-center">
                            <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-2">Commission</div>
                            <div className="text-3xl font-bold text-white">$3.50 <span className="text-sm font-normal text-gray-500">/ side</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: The "Raw Spread" Advantage */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">Why Raw Spreads?</h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                In high-frequency trading, every decimal matters. Pro X connects you directly to the interbank market, allowing you to trade at the same prices as global banks and hedge funds.
                            </p>
                            <div className="p-6 bg-[#0a0a0a] border-l-2 border-[var(--color-gold)]">
                                <p className="text-gray-300 italic">
                                    "When you're scaling into positions, paying the spread twice hurts. With Pro X, entry is cleaner, and breakeven comes faster."
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            {/* Comparison Chart */}
                            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8">
                                <h3 className="text-gray-400 text-sm font-bold uppercase mb-8 text-center">Average Spread Cost (EURUSD)</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 text-gray-500">
                                            <span>Standard Account</span>
                                            <span>1.5 Pips</span>
                                        </div>
                                        <div className="h-10 bg-gray-800 rounded relative overflow-hidden">
                                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-600 to-gray-500"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 text-[var(--color-gold)] font-bold">
                                            <span>Pro X (Raw)</span>
                                            <span>0.1 Pips</span>
                                        </div>
                                        <div className="h-10 bg-gray-800 rounded relative overflow-hidden">
                                            <div className="absolute top-0 left-0 h-full w-[10%] bg-[#ffd700] shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <span className="inline-block px-4 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                                        93% Lower Spread Cost
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: VIP Feature Set */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <TrendingDown size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Deepest Liquidity</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Execute large lot sizes with minimal slippage thanks to our aggregated liquidity pool.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <Server size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Lowest Latency</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Co-located servers in London (LD4) and New York (NY4) for execution speeds under 10ms.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <Zap size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Priority Withdrawals</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Pro X members receive expedited processing on all withdrawal requests.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <UserCheck size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Personalized Concierge</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Direct access to our senior relationship managers for account and technical optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: Detailed Specifications */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white">Institutional Grade Specs</h2>
                    </div>

                    <div className="border-t border-b border-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Execution Model</span>
                                <span className="text-white font-bold font-mono">ECN / DMA (Raw)</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Max Leverage</span>
                                <span className="text-white font-bold font-mono">1:200</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Account Currency</span>
                                <span className="text-white font-bold font-mono">USD / USDT</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Negative Balance Protection</span>
                                <span className="text-[var(--color-gold)] font-bold font-mono uppercase">Included</span>
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

            {/* Block 5: The Scalper’s Paradise */}
            <section className="py-24 bg-black overflow-hidden relative">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#0f172a] to-transparent opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        {/* Level II Depth Mockup */}
                        <div className="bg-[#121212] border border-gray-800 rounded-sm font-mono text-xs shadow-2xl">
                            <div className="bg-[#1a1a1a] p-2 flex justify-between items-center border-b border-gray-800">
                                <span className="text-white font-bold">Market Depth: EURUSD</span>
                                <span className="text-green-500">1.08450</span>
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-800">
                                <div>
                                    <div className="p-2 bg-[#0a0a0a] text-center text-gray-500 text-[10px] uppercase">Bid</div>
                                    {['1.08450', '1.08449', '1.08448', '1.08445'].map((price, i) => (
                                        <div key={i} className="flex justify-between px-3 py-1 text-blue-400 hover:bg-blue-900/20 cursor-pointer">
                                            <span>{price}</span>
                                            <span className="text-gray-500">{50 - i * 10}M</span>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="p-2 bg-[#0a0a0a] text-center text-gray-500 text-[10px] uppercase">Ask</div>
                                    {['1.08450', '1.08451', '1.08452', '1.08455'].map((price, i) => (
                                        <div key={i} className="flex justify-between px-3 py-1 text-red-400 hover:bg-red-900/20 cursor-pointer">
                                            <span>{price}</span>
                                            <span className="text-gray-500">{45 - i * 8}M</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-white mb-6">Engineered for Scalping</h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            With zero markups on spreads and lightning-fast fills, Pro X is the ultimate environment for manual scalpers and high-frequency Expert Advisors (EAs).
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300">
                                <Activity size={18} className="text-[var(--color-gold)] mr-3" />
                                <span>Tick-by-tick precision data</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <ShieldCheck size={18} className="text-[var(--color-gold)] mr-3" />
                                <span>Anonymous execution (No Last Look)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Block 6: The "Elite Entry" Call to Action */}
            <section className="py-32 bg-black text-center">
                <div className="container mx-auto px-6">
                    <p className="text-[var(--color-gold)] font-bold uppercase tracking-[0.2em] mb-4 text-xs">Exclusivity Redefined</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-[var(--font-heading)]">The pinnacle of trading starts here.</h2>

                    <button className="bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                        Apply for Pro X Account
                    </button>
                </div>
            </section>

        </div>
    );
};

export default ProX;
