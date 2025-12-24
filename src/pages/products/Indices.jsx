import React from 'react';
import {
    Globe, TrendingUp, DollarSign, Layers, PieChart, Info,
    Smartphone, Zap, ArrowRight, BarChart, ArrowUpRight, ArrowDownRight, Activity
} from 'lucide-react';
import TradingViewTicker from '../../components/TradingViewTicker';

const IndexCard = ({ name, code, country, spread, isPositive }) => (
    <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] p-6 rounded-2xl hover:border-[var(--color-gold)] transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold px-2 py-0.5 bg-gray-700/50 rounded text-gray-300">{code}</span>
                    <span className="text-xs text-gray-400">{country}</span>
                </div>
            </div>
            <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                {isPositive ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
            </div>
        </div>
        <div className="flex justify-between items-end mt-4">
            <div>
                <div className="text-xs text-gray-500 mb-1">Spread from</div>
                <div className="text-xl font-mono font-bold text-[var(--color-gold)]">{spread}</div>
            </div>
            <button className="text-sm font-bold text-white border-b border-white/20 hover:border-white transition-colors">Trade</button>
        </div>
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-6">
            <div className="h-full bg-blue-500" style={{ width: `${Math.random() * 40 + 40}%` }}></div>
        </div>
    </div>
);


const Indices = () => {

    const indicesSymbols = [
        { "proName": "FOREXCOM:SPX500", "description": "S&P 500" },
        { "proName": "FOREXCOM:NSXUSD", "description": "US 100" },
        { "proName": "FOREXCOM:DJI", "description": "Dow 30" },
        { "proName": "FOREXCOM:GER40", "description": "DAX 40" },
        { "proName": "FOREXCOM:UK100", "description": "FTSE 100" },
        { "proName": "FX_IDC:JPN225", "description": "Nikkei 225" }
    ];

    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The Hero Section (Global Impact) */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                {/* Abstract Digital Globe Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] rounded-full border border-[rgba(255,255,255,0.05)] animate-spin-slow"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[rgba(233,219,141,0.1)] rounded-full animate-ping-slow"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 border border-[var(--color-gold)] rounded-full text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest bg-[rgba(233,219,141,0.05)]">
                            Indices Trading
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                            Trade the World’s <br /><span className="text-[var(--color-gold)]">Leading Economies</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Take a position on the global markets. Trade the world's most liquid Indices with 0.0 pips starting spreads and ultra-fast execution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-colors">
                                Start Trading Indices
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-[var(--color-white)] text-white font-bold rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                                Try Demo Account
                            </button>
                        </div>
                    </div>

                    {/* 3D Visual */}
                    <div className="relative flex justify-center">
                        <div className="relative w-80 h-96 bg-[rgba(255,255,255,0.02)] backdrop-blur-md rounded-2xl border border-white/10 p-6 transform rotate-y-[-10deg] shadow-2xl">
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">US</div>
                                    <div>
                                        <div className="text-white font-bold">US Tech 100</div>
                                        <div className="text-xs text-gray-400">NASDAQ</div>
                                    </div>
                                </div>
                                <div className="text-green-400 font-bold">+1.2%</div>
                            </div>
                            <div className="h-40 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg flex items-end px-2 space-x-1">
                                {[30, 45, 35, 60, 50, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                                    <div key={i} className="flex-1 bg-blue-500 rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="mt-6 flex gap-2">
                                <div className="flex-1 bg-green-500/20 text-green-500 text-center py-2 rounded font-bold">Buy</div>
                                <div className="flex-1 bg-red-500/20 text-red-500 text-center py-2 rounded font-bold">Sell</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticker Widget */}
            <TradingViewTicker symbols={indicesSymbols} />

            {/* Block 2: Benefits */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Maximize Opportunity. Minimize Cost.</h2>
                        <p className="text-gray-400">Indices trading offers a powerful way to speculate on the performance of an entire economy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Long or Short</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Profit from both rising and falling markets without owning the underlying shares.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                                <DollarSign size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Zero Commission</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Focus on your strategy with transparent pricing and zero hidden fees.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">High Leverage</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Access larger market exposure with a small initial margin (up to 1:100).
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                                <PieChart size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Instant Diversification</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                One trade gives you exposure to an entire basket of top-performing companies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Major Indices Grid */}
            <section className="py-20 bg-[var(--color-dark)] relative">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Global Benchmarks</h2>
                            <p className="text-gray-400">The pulse of the world's biggest economies.</p>
                        </div>
                        <button className="text-[var(--color-gold)] font-bold hover:text-white transition-colors hidden md:block">
                            View Contract Specs →
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <IndexCard name="US Tech 100" code="NAS100" country="USA" spread="1.2" isPositive={true} />
                        <IndexCard name="Wall Street 30" code="US30" country="USA" spread="2.0" isPositive={true} />
                        <IndexCard name="Germany 40" code="GER40" country="Germany" spread="1.8" isPositive={false} />
                        <IndexCard name="UK 100" code="UK100" country="UK" spread="1.5" isPositive={true} />
                    </div>
                </div>
            </section>

            {/* Block 4: Features */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-blue-900/20 to-[var(--color-navy)] border border-blue-500/20 p-10 md:p-16 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[120px] opacity-10"></div>

                        <div className="md:w-1/2 relative z-10">
                            <div className="inline-flex items-center space-x-2 text-blue-400 mb-6 font-bold uppercase tracking-widest text-sm">
                                <BarChart size={18} />
                                <span>Market Knowledge</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">What moves the Indices?</h2>
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                                Stay updated on Interest Rate Decisions, GDP Data, and Corporate Earnings Seasons. Our integrated Economic Calendar on MT5 ensures you never miss a market-moving event.
                            </p>
                            <button className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full transition-colors font-bold">
                                Explorer Economic Calendar
                            </button>
                        </div>
                        <div className="md:w-1/2 relative z-10 flex justify-center">
                            {/* Calendar Visual */}
                            <div className="bg-[#0a1629] p-6 rounded-xl border border-gray-700 shadow-2xl max-w-sm w-full">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-white font-bold">Economic Events</span>
                                    <div className="text-xs bg-red-500 text-white px-2 py-1 rounded animate-pulse">LIVE</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-12 text-center text-gray-400 text-xs">14:30</div>
                                        <div className="flex-1">
                                            <div className="text-white font-bold text-sm">Non-Farm Payrolls</div>
                                            <div className="text-gray-500 text-xs">USD • High Impact</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center opacity-50">
                                        <div className="w-12 text-center text-gray-400 text-xs">15:00</div>
                                        <div className="flex-1">
                                            <div className="text-white font-bold text-sm">ISM Services PMI</div>
                                            <div className="text-gray-500 text-xs">USD • Med Impact</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Closing Guarantee */}
            <section className="py-24 bg-[var(--color-navy)] border-t border-[rgba(255,255,255,0.05)]">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-blue-500 to-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/30 mb-8 animate-pulse-slow">
                        <Activity size={40} className="text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Execution in Milliseconds
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Our direct bridge to liquidity providers ensures that even during high-volatility news events, your orders are filled with precision.
                    </p>
                    <div className="text-[var(--color-gold)] font-bold text-lg tracking-widest border border-[var(--color-gold)] px-6 py-2 inline-block rounded-full">
                        Trade Indices
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Indices;
