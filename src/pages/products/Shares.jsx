import React from 'react';
import {
    TrendingUp, TrendingDown, Calendar, PieChart,
    BarChart2, ArrowRight, DollarSign, Percent, Activity, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TradingViewTicker from '../../components/TradingViewTicker';

const ShareCard = ({ symbol, name, price, change, isPositive }) => (
    <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] p-6 rounded-2xl hover:border-[var(--color-gold)] transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xs text-white border border-gray-700">
                    {symbol.substring(0, 2)}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{symbol}</h3>
                    <p className="text-xs text-gray-400">{name}</p>
                </div>
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
        <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link to="/open-live-account" className="flex-1 py-1 text-xs bg-red-500/20 text-red-500 font-bold rounded hover:bg-red-500 hover:text-white transition-colors text-center">Sell</Link>
            <Link to="/open-live-account" className="flex-1 py-1 text-xs bg-green-500/20 text-green-500 font-bold rounded hover:bg-green-500 hover:text-white transition-colors text-center">Buy</Link>
        </div>
    </div>
);

const Shares = () => {
    const shareSymbols = [
        { "proName": "NASDAQ:NVDA", "description": "NVIDIA" },
        { "proName": "NASDAQ:TSLA", "description": "Tesla" },
        { "proName": "NASDAQ:AAPL", "description": "Apple" },
        { "proName": "NASDAQ:AMZN", "description": "Amazon" },
        { "proName": "NASDAQ:MSFT", "description": "Microsoft" },
        { "proName": "NASDAQ:GOOGL", "description": "Google" },
        { "proName": "NASDAQ:META", "description": "Meta" }
    ];

    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The "Iconic Brands" Hero */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                {/* Floating Logos Background Animation */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-white font-bold text-xl animate-float"
                            style={{
                                top: `${Math.random() * 80 + 10}%`,
                                left: `${Math.random() * 90}%`,
                                animationDuration: `${10 + Math.random() * 10}s`,
                                opacity: 0.2
                            }}
                        >
                            {['AAPL', 'TSLA', 'NVDA', 'AMZN', 'GOOGL', 'MSFT'][Math.floor(Math.random() * 6)]}
                        </div>
                    ))}
                </div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 border border-[var(--color-gold)] rounded-full text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest bg-[rgba(233,219,141,0.05)]">
                            Stocks & ETFs
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                            Own a Piece of the <br /><span className="text-[var(--color-gold)]">Global Giants</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Trade CFDs on 500+ of the world’s most powerful companies. Go long or short on Apple, NVIDIA, Tesla, and more—all from one platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/open-live-account" className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-colors shadow-lg shadow-yellow-900/20 text-center">
                                Start Trading Shares
                            </Link>
                            <Link to="/tools/trading-conditions" className="px-8 py-4 bg-transparent border border-[var(--color-white)] text-white font-bold rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors text-center">
                                View Full Symbol List
                            </Link>
                        </div>
                    </div>

                    {/* 3D Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-full filter blur-[100px] opacity-10"></div>
                        <div className="relative z-10 grid grid-cols-2 gap-4 transform rotate-y-12 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur p-4 rounded-xl border border-white/10 shadow-xl">
                                <div className="w-10 h-10 bg-green-500 rounded-lg mb-2 flex items-center justify-center font-bold text-white">N</div>
                                <div className="font-bold text-white">NVIDIA</div>
                                <div className="text-xs text-green-400">+2.45%</div>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur p-4 rounded-xl border border-white/10 shadow-xl mt-8">
                                <div className="w-10 h-10 bg-gray-500 rounded-lg mb-2 flex items-center justify-center font-bold text-white">A</div>
                                <div className="font-bold text-white">Apple</div>
                                <div className="text-xs text-green-400">+0.80%</div>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur p-4 rounded-xl border border-white/10 shadow-xl">
                                <div className="w-10 h-10 bg-red-600 rounded-lg mb-2 flex items-center justify-center font-bold text-white">T</div>
                                <div className="font-bold text-white">Tesla</div>
                                <div className="text-xs text-green-400">+1.12%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticker Widget */}
            <TradingViewTicker symbols={shareSymbols} />

            {/* Block 2: Benefits */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Trade Share CFDs?</h2>
                        <p className="text-gray-400">Unlock opportunities that traditional investing can't offer.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                                <DollarSign size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Lower Capital</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Trade with leverage—control a $1,000 position with a fraction of the cost. Maximize your exposure without tying up all your capital.
                            </p>
                        </div>

                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mb-6">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Profit in Any Direction</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Short-sell companies you think are overvalued and profit when their price drops. Don't just wait for the market to go up.
                            </p>
                        </div>

                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-6">
                                <PieChart size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Fractional Exposure</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                No need to buy a full expensive share; trade the size that fits your budget perfectly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Market Movers */}
            <section className="py-20 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Market Movers</h2>
                            <p className="text-gray-400">Most active stocks today.</p>
                        </div>
                        <Link to="/tools/trading-conditions" className="text-[var(--color-gold)] font-bold hover:text-white transition-colors hidden md:block">
                            View All Shares →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ShareCard symbol="NVDA" name="NVIDIA Corp" price="485.09" change="2.45" isPositive={true} />
                        <ShareCard symbol="TSLA" name="Tesla Inc" price="245.30" change="1.12" isPositive={true} />
                        <ShareCard symbol="AAPL" name="Apple Inc" price="192.50" change="0.80" isPositive={true} />
                        <ShareCard symbol="AMZN" name="Amazon.com" price="153.20" change="1.50" isPositive={true} />
                        <ShareCard symbol="MSFT" name="Microsoft" price="375.10" change="0.20" isPositive={false} />
                        <ShareCard symbol="META" name="Meta Platforms" price="350.20" change="1.80" isPositive={true} />
                    </div>
                </div>
            </section>


            {/* Block 4: Dividends Feature (Split) */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-blue-900/30 to-[var(--color-navy)] border border-blue-500/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[120px] opacity-20"></div>

                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6">Dividends Paid to You</h3>
                            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                Don't miss out on dividends. At RadhikaFX, we reflect dividend adjustments on your CFD positions.
                                If you hold a 'Long' position on a stock during its ex-dividend date, you receive the adjustment directly to your account.
                            </p>
                            <Link to="/tools/economic-calendar" className="flex items-center text-blue-400 font-bold hover:text-white transition-colors uppercase tracking-wide">
                                View Corporate Action Schedule <ArrowRight className="ml-2" />
                            </Link>
                        </div>

                        <div className="md:w-1/2 flex justify-center relative z-10">
                            {/* Calendar Visual */}
                            <div className="bg-[#0a1629] p-6 rounded-xl border border-gray-700 shadow-xl w-80">
                                <div className="text-white font-bold mb-4 border-b border-gray-700 pb-2">Upcoming Dividends</div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gray-800 p-2 rounded text-center min-w-[3rem]">
                                            <div className="text-xs text-gray-400">FEB</div>
                                            <div className="font-bold text-white">09</div>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Apple Inc.</div>
                                            <div className="text-green-400 text-xs">$0.24 / Share</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gray-800 p-2 rounded text-center min-w-[3rem]">
                                            <div className="text-xs text-gray-400">FEB</div>
                                            <div className="font-bold text-white">15</div>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Microsoft</div>
                                            <div className="text-green-400 text-xs">$0.75 / Share</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Closing Guarantee */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <PieChart size={64} className="text-[var(--color-gold)] mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Balance Your Risk
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            While Forex offers 24/5 volatility, Shares allow you to capitalize on the specific growth of sectors you know and use every day.
                        </p>
                        <div className="flex justify-center flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-gray-300">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div> Forex
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <div className="w-3 h-3 rounded-full bg-[var(--color-gold)]"></div> Shares
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <div className="w-3 h-3 rounded-full bg-purple-500"></div> Indices
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Shares;
