import React, { useState, useEffect } from 'react';
import {
    Zap, Shield, Wallet, Repeat, Clock, Activity,
    ArrowUpRight, ArrowDownRight, BarChart2, Lock
} from 'lucide-react';
import TradingViewTicker from '../../components/TradingViewTicker';

const CryptoCard = ({ pair, name, price, change, isPositive }) => (
    <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] p-6 rounded-2xl hover:border-[var(--color-gold)] transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-xl font-bold text-white">{pair}</h3>
                <p className="text-xs text-gray-400">{name}</p>
            </div>
            <div className={`flex items-center text-sm font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {change}%
            </div>
        </div>
        <div className="text-2xl font-mono font-bold text-white mb-4">
            ${price}
        </div>
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className={`h-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${Math.random() * 40 + 30}%` }}></div>
        </div>
    </div>
);

const Crypto = () => {
    const cryptoSymbols = [
        { "proName": "BITSTAMP:BTCUSD", "description": "Bitcoin" },
        { "proName": "BITSTAMP:ETHUSD", "description": "Ethereum" },
        { "proName": "BINANCE:SOLUSD", "description": "Solana" },
        { "proName": "BINANCE:XRPUSD", "description": "Ripple" },
        { "proName": "BINANCE:ADAUSD", "description": "Cardano" },
        { "proName": "BINANCE:DOGEUSD", "description": "Dogecoin" },
        { "proName": "BINANCE:BNBUSD", "description": "Binance Coin" }
    ];

    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The High-Action Hero */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                {/* Matrix-like background effect */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 border border-[var(--color-gold)] rounded-full text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest bg-[rgba(233,219,141,0.05)]">
                            Crypto CFDs
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                            Trade the <span className="text-[var(--color-gold)]">Future of Finance</span> 24/7.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Don't just HODL—Trade. Access 50+ of the world's most popular Crypto CFDs with up to 1:20 leverage, instant execution, and zero storage risks.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-colors">
                                Start Trading Crypto
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-[var(--color-white)] text-white font-bold rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                                View All Coins
                            </button>
                        </div>
                    </div>

                    {/* Futuristic Chart Mockup */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
                        <div className="relative z-10 bg-[#0a1629] border border-gray-700 rounded-2xl p-4 shadow-2xl transform rotate-y-12 hover:rotate-0 transition-transform duration-500">
                            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                                <div className="text-white font-bold flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">₿</div>
                                    BTC/USD
                                </div>
                                <div className="text-green-400 font-mono">+5.24%</div>
                            </div>
                            {/* Mock Chart Area */}
                            <div className="h-64 bg-gradient-to-b from-orange-500/10 to-transparent rounded border border-gray-800 relative overflow-hidden">
                                <svg className="absolute bottom-0 left-0 w-full h-[80%]" preserveAspectRatio="none">
                                    <path d="M0,80 L20,75 L40,85 L60,60 L80,65 L100,40 L120,55 L140,30 L160,45 L180,20 L200,35 L220,10 L240,25" fill="none" stroke="#f97316" strokeWidth="3" />
                                    <path d="M0,80 L20,75 L40,85 L60,60 L80,65 L100,40 L120,55 L140,30 L160,45 L180,20 L200,35 L220,10 L240,25 V100 H0 Z" fill="url(#gradient)" opacity="0.2" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 py-3 bg-red-500/20 text-red-500 font-bold rounded hover:bg-red-500 hover:text-white transition-colors">SELL</button>
                                <button className="flex-1 py-3 bg-green-500/20 text-green-500 font-bold rounded hover:bg-green-500 hover:text-white transition-colors">BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticker Widget */}
            <TradingViewTicker symbols={cryptoSymbols} />

            {/* Block 2: Why Crypto CFDs? */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">The Smarter Way to Trade Crypto</h2>
                        <p className="text-gray-400">Skip the exchange headaches. Trade price movements directly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Wallet size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">No Wallet Needed</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Skip the risk of private keys and exchange hacks. Securely trade price action.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <ArrowDownRight size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Profit on the Dip</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Easily short-sell Bitcoin or Ethereum if you think the market is overvalued.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Secure Regulation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Unlike unregulated exchanges, Radhika Capital Markets operates under strict FSC oversight.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-gray-700/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Instant Liquidity</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Enter and exit large positions in seconds without 'slippage'.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: The "Altcoin" Gallery */}
            <section className="py-20 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Market Leaders</h2>
                            <p className="text-gray-400">From the Big Two to the fastest Altcoins.</p>
                        </div>
                        <button className="text-[var(--color-gold)] font-bold hover:text-white transition-colors hidden md:block">
                            View All 50+ Coins →
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <CryptoCard pair="BTC/USD" name="Bitcoin" price="42,560.20" change="2.5" isPositive={true} />
                        <CryptoCard pair="ETH/USD" name="Ethereum" price="2,240.15" change="1.8" isPositive={true} />
                        <CryptoCard pair="SOL/USD" name="Solana" price="98.40" change="5.4" isPositive={true} />
                        <CryptoCard pair="AVAX/USD" name="Avalanche" price="35.20" change="3.1" isPositive={true} />
                        <CryptoCard pair="XRP/USD" name="Ripple" price="0.62" change="0.5" isPositive={false} />
                        <CryptoCard pair="LTC/USD" name="Litecoin" price="72.50" change="1.2" isPositive={true} />
                    </div>
                </div>
            </section>

            {/* Block 4: Strategic Trading Tools */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-[#0a1629] to-[#050c18] border border-gray-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
                        {/* Background Tech Lines */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        <div className="md:w-1/2 relative z-10">
                            <div className="inline-flex items-center space-x-2 text-[var(--color-gold)] mb-6 font-bold uppercase tracking-widest text-sm">
                                <Activity size={18} />
                                <span>Engineered for Volatility</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Our Technology <br /> Moves Faster.
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Crypto markets move fast. Use Guaranteed Stop Losses, Trailing Stops, and Automated Trading (EAs) to manage your risk while you sleep.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-white font-medium">
                                    <Lock className="text-[var(--color-gold)] mr-4" size={20} />
                                    Guaranteed Stop Losses
                                </li>
                                <li className="flex items-center text-white font-medium">
                                    <BarChart2 className="text-[var(--color-gold)] mr-4" size={20} />
                                    Depth of Market (DOM) View
                                </li>
                            </ul>
                        </div>

                        <div className="md:w-1/2 relative z-10">
                            {/* Mock Depth of Market */}
                            <div className="bg-[#02040a] rounded-xl border border-gray-700 p-4 font-mono text-xs shadow-2xl">
                                <div className="flex justify-between text-gray-500 mb-2 border-b border-gray-800 pb-2">
                                    <span>Bid Volume</span>
                                    <span>Bid</span>
                                    <span>Ask</span>
                                    <span>Ask Volume</span>
                                </div>
                                <div className="space-y-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="flex justify-between items-center h-6">
                                            <div className="w-1/4 bg-blue-500/20 text-blue-400 text-right pr-2 rounded-l relative overflow-hidden">
                                                <div className="absolute top-0 right-0 h-full bg-blue-500/20" style={{ width: `${Math.random() * 100}%` }}></div>
                                                <span className="relative z-10">{(Math.random() * 10).toFixed(2)}</span>
                                            </div>
                                            <div className="w-1/4 text-center text-blue-400 font-bold">42,5{(60 - i).toFixed(0)}</div>
                                            <div className="w-1/4 text-center text-red-400 font-bold">42,5{(65 + i).toFixed(0)}</div>
                                            <div className="w-1/4 bg-red-500/20 text-red-400 text-left pl-2 rounded-r relative overflow-hidden">
                                                <div className="absolute top-0 left-0 h-full bg-red-500/20" style={{ width: `${Math.random() * 100}%` }}></div>
                                                <span className="relative z-10">{(Math.random() * 10).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: The "Crypto Never Sleeps" 24/7 Guarantee */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-green-500 to-emerald-700 rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 mb-8 animate-pulse-slow">
                        <Clock size={40} className="text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Crypto Never Sleeps
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Forex stops on Friday, but Crypto keeps going. Enjoy uninterrupted access to digital markets even on weekends. Our dedicated crypto support team is available whenever the market is moving.
                    </p>
                    <div className="text-[var(--color-gold)] font-bold text-lg tracking-widest border border-[var(--color-gold)] px-6 py-2 inline-block rounded-full">
                        24 / 7 / 365
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Crypto;
