import React from 'react';
import {
    Zap, Shield, Smartphone, Globe, CheckCircle,
    TrendingUp, Activity, BarChart2, ArrowRight
} from 'lucide-react';

const Standard = () => {
    // Standard Blue accent
    const accentColor = "#3b82f6"; // blue-500

    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The "Standard" Hero */}
            <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
                {/* Minimalist Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    {/* Glowing Emblem */}
                    <div className="w-24 h-24 mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-[var(--color-gold)] rounded-full opacity-20 filter blur-xl animate-pulse-slow"></div>
                        <div className="relative z-10 w-full h-full border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center">
                            <span className="text-3xl font-[var(--font-heading)] font-bold text-[var(--color-gold)]">S</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)] tracking-tight">
                        Standard <span className="text-[var(--color-gold)]">Account</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8 tracking-wide">
                        The Perfect Start.
                    </h2>

                    <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Kickstart your trading journey with full market access and zero commissions. Ideal for beginners and retail traders looking for simplicity.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-[var(--color-gold)]/20 pt-10">
                        <div className="text-center">
                            <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-2">Min Deposit</div>
                            <div className="text-3xl font-bold text-white">$100</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-2">Spreads</div>
                            <div className="text-3xl font-bold text-white">3.0 <span className="text-sm font-normal text-gray-500">Pips</span></div>
                        </div>
                        <div className="text-center">
                            <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-2">Commission</div>
                            <div className="text-3xl font-bold text-white">$0</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: Zero Commission Advantage */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">Zero Commissions</h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                Simplify your trading with our all-inclusive pricing. With the Standard account, you pay zero commissions on your trades—everything is built into the spread.
                            </p>
                            <div className="p-6 bg-[#0a0a0a] border-l-2 border-[var(--color-gold)]">
                                <p className="text-gray-300 italic">
                                    "Focus on the charts, not the fees. Our spread-only model makes calculating your P&L straightforward and transparent."
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)]/10 rounded-full blur-3xl"></div>
                                <div className="flex items-center justify-between mb-8">
                                    <div className="text-gray-400 font-bold uppercase text-sm">Cost Structure</div>
                                    <div className="bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-3 py-1 rounded text-xs font-bold">SIMPLE</div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                        <span className="text-gray-300">Commission Per Lot</span>
                                        <span className="text-white font-bold">$0.00</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                        <span className="text-gray-300">Platform Fees</span>
                                        <span className="text-white font-bold">$0.00</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                        <span className="text-gray-300">Deposit Fees</span>
                                        <span className="text-white font-bold">$0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Standard Features */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <Smartphone size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Mobile Trading</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Trade on the go with the full-featured MT5 mobile app for iOS and Android.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <Globe size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Global Access</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Access 500+ instruments across Forex, Commodities, Indices, and Crypto.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <Zap size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Instant Execution</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                STP execution ensures your orders are filled quickly without manual intervention.
                            </p>
                        </div>

                        <div className="p-8 bg-[#080808] border border-gray-800 hover:border-[var(--color-gold)] rounded-none transition-all duration-300 group">
                            <Shield size={32} className="text-gray-600 group-hover:text-[var(--color-gold)] mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-4">Negative Balance Protection</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Trade with confidence knowing you can never lose more than your deposit.
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
                                <span className="text-white font-bold font-mono">STP</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Max Leverage</span>
                                <span className="text-white font-bold font-mono">1:500</span>
                            </div>
                            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <span className="text-gray-500">Account Currency</span>
                                <span className="text-white font-bold font-mono">USD / USDT</span>
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

            {/* Block 5: Education Focus */}
            <section className="py-24 bg-black overflow-hidden relative">
                <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-[var(--color-gold)]/10 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-white mb-6">Learn as you Trade</h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Our Standard account comes with full access to our educational resources. Improve your skills with daily market analysis and webinars.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300">
                                <Activity size={18} className="text-[var(--color-gold)] mr-3" />
                                <span>Daily Market Updates</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <TrendingUp size={18} className="text-[var(--color-gold)] mr-3" />
                                <span>Beginner Trading Guides</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-[#121212] border border-gray-800 rounded-sm p-8 shadow-2xl relative">
                            <div className="text-[var(--color-gold)] font-bold mb-4 uppercase text-xs tracking-widest">Market Insight</div>
                            <h3 className="text-xl font-bold text-white mb-4">EURUSD Analysis</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Technical indicators suggest a bullish momentum following the recent central bank announcement...
                            </p>
                            <div className="h-32 bg-gradient-to-t from-[var(--color-gold)]/20 to-transparent rounded border border-[var(--color-gold)]/10 flex items-end p-2 relative">
                                {/* Simple Chart visualization */}
                                <div className="w-full flex items-end justify-between gap-1 h-full">
                                    {[40, 60, 45, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }} className="w-full bg-[var(--color-gold)]/40 rounded-t-sm"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 6: CTA */}
            <section className="py-32 bg-black text-center">
                <div className="container mx-auto px-6">
                    <p className="text-[var(--color-gold)] font-bold uppercase tracking-[0.2em] mb-4 text-xs">Start Your Journey</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-[var(--font-heading)]">Trading made simple.</h2>

                    <button className="bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                        Open Standard Account
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Standard;
