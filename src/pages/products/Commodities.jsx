import React from 'react';
import {
    Flame, Droplet, Wheat, ArrowUpRight, ArrowDownRight,
    Shield, Layers, Zap, Scale, BarChart3, ChevronRight, Activity, Globe
} from 'lucide-react';
import TradingViewTicker from '../../components/TradingViewTicker';

const CommodityCard = ({ asset, type, price, change, isPositive, icon: Icon }) => (
    <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] p-6 rounded-2xl hover:border-[var(--color-gold)] transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(233,219,141,0.1)] flex items-center justify-center text-[var(--color-gold)]">
                    <Icon size={20} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{asset}</h3>
                    <p className="text-xs text-gray-400">{type}</p>
                </div>
            </div>
            <div className={`flex items-center text-sm font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
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

const Commodities = () => {
    const commoditySymbols = [
        { "proName": "TVC:USOIL", "description": "WTI Crude Oil" },
        { "proName": "TVC:UKOIL", "description": "Brent Crude Oil" },
        { "proName": "OANDA:XAUUSD", "description": "Gold" },
        { "proName": "OANDA:XAGUSD", "description": "Silver" },
        { "proName": "FX:NGAS", "description": "Natural Gas" },
        { "proName": "TVC:US02", "description": "US Wheat" },
        { "proName": "TVC:US09", "description": "US Corn" }
    ];

    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The Tactical Hero */}
            <section className="relative min-h-[600px] flex items-center bg-[#02040a] border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>

                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left: Content */}
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 border border-[var(--color-gold)] rounded-full text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest bg-[rgba(233,219,141,0.05)]">
                            Commodities Trading
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                            Trade Global Resources with <span className="text-[var(--color-gold)]">Institutional Spreads</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
                            From Energy to Agriculture—capitalize on global price movements with up to 1:20 leverage and lightning-fast execution on MT5.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-colors">
                                Start Trading Commodities
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] font-bold rounded-lg hover:bg-[rgba(233,219,141,0.1)] transition-colors">
                                View Contract Specs
                            </button>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    {/* Futuristic Chart Mockup */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-gold)] rounded-full filter blur-[100px] opacity-10"></div>
                        <div className="relative z-10 bg-[#0a1629] border border-gray-700 rounded-2xl p-4 shadow-2xl transform rotate-y-12 hover:rotate-0 transition-transform duration-500">
                            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                                <div className="text-white font-bold flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-xs"><Flame size={16} /></div>
                                    WTI Crude Oil
                                </div>
                                <div className="text-green-400 font-mono">+1.24%</div>
                            </div>
                            {/* Mock Chart Area */}
                            <div className="h-64 bg-gradient-to-b from-yellow-600/10 to-transparent rounded border border-gray-800 relative overflow-hidden">
                                <svg className="absolute bottom-0 left-0 w-full h-[80%]" preserveAspectRatio="none">
                                    <path d="M0,80 L20,75 L40,85 L60,60 L80,65 L100,40 L120,55 L140,30 L160,45 L180,20 L200,35 L220,10 L240,25" fill="none" stroke="#ca8a04" strokeWidth="3" />
                                    <path d="M0,80 L20,75 L40,85 L60,60 L80,65 L100,40 L120,55 L140,30 L160,45 L180,20 L200,35 L220,10 L240,25 V100 H0 Z" fill="url(#gradientCmd)" opacity="0.2" />
                                    <defs>
                                        <linearGradient id="gradientCmd" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
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
            <TradingViewTicker symbols={commoditySymbols} />

            {/* Block 2: Why Trade Commodities? */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Trade Commodities with Radhika Capital Markets?</h2>
                        <p className="text-gray-400">Diversify your portfolio across hard and soft commodities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-purple-900/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">No Requotes</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Instant execution even during high-volatility Inventory Reports (EIA).
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-purple-900/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Scale size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Flexible Sizing</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Trade from 0.01 lots—perfect for managing risk in volatile markets.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-purple-900/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Droplet size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Deep Liquidity</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Fill large orders at the best available market price without slippage.
                            </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors">
                            <div className="w-12 h-12 bg-purple-900/50 text-[var(--color-gold)] rounded-lg flex items-center justify-center mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Hedged Positions</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Go Long or Short on any commodity to protect your portfolio against inflation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: Market Leaders */}
            <section className="py-20 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Trade Essentials</h2>
                            <p className="text-gray-400">Energies, Metals, and Agriculture.</p>
                        </div>
                        <button className="text-[var(--color-gold)] font-bold hover:text-white transition-colors hidden md:block">
                            View All Commodities →
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <CommodityCard asset="WTI Crude Oil" type="Energy" price="74.20" change="1.20" isPositive={true} icon={Flame} />
                        <CommodityCard asset="Brent Oil" type="Energy" price="79.50" change="0.95" isPositive={true} icon={Droplet} />
                        <CommodityCard asset="Gold (XAU)" type="Metal" price="2,034.50" change="0.45" isPositive={true} icon={Layers} />
                        <CommodityCard asset="Silver (XAG)" type="Metal" price="22.80" change="-0.15" isPositive={false} icon={Layers} />
                        <CommodityCard asset="Natural Gas" type="Energy" price="2.84" change="3.10" isPositive={true} icon={Flame} />
                        <CommodityCard asset="Wheat" type="Agriculture" price="580.20" change="-1.05" isPositive={false} icon={Wheat} />
                    </div>
                </div>
            </section>

            {/* Block 4: Strategic Trading Tools (Split Section) */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-[#0a1629] to-[#050c18] border border-gray-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
                        {/* Background Tech Lines */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        {/* Visual */}
                        <div className="md:w-1/2 relative z-10 order-2 md:order-1">
                            <div className="bg-[#0f172a]/90 backdrop-blur rounded-xl border border-gray-700 p-6 shadow-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <Activity className="text-[var(--color-gold)]" />
                                    <span className="text-white font-bold">Volatile Events (Impact)</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-red-500/10 p-3 rounded border border-red-500/20">
                                        <span className="text-white text-sm">Crude Oil Inventories</span>
                                        <span className="text-red-400 font-bold text-xs uppercase">High Impact</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                                        <span className="text-white text-sm">OPEC Meetings</span>
                                        <span className="text-yellow-400 font-bold text-xs uppercase">Med Imapct</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-red-500/10 p-3 rounded border border-red-500/20">
                                        <span className="text-white text-sm">NFP (Gold Impact)</span>
                                        <span className="text-red-400 font-bold text-xs uppercase">High Impact</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative z-10 order-1 md:order-2">
                            <div className="inline-flex items-center space-x-2 text-[var(--color-gold)] mb-6 font-bold uppercase tracking-widest text-sm">
                                <BarChart3 size={18} />
                                <span>The Inventory Edge</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Stay Ahead of Supply & Demand
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Commodities are driven by fundamentals. Stay ahead with our Economic Calendar for weekly Crude Oil Inventories and USDA reports.
                            </p>
                            <button className="px-8 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-colors">
                                View Economic Calendar
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Closing Guarantee */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-yellow-600 to-yellow-900 rounded-full flex items-center justify-center shadow-lg shadow-yellow-900/30 mb-8 animate-pulse-slow">
                        <Globe size={40} className="text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Global Market Access
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        From the oil fields of Texas to the gold mines of South Africa, trade the raw materials that power the global economy.
                    </p>
                    <div className="text-[var(--color-gold)] font-bold text-lg tracking-widest border border-[var(--color-gold)] px-6 py-2 inline-block rounded-full">
                        Trade Commodities
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Commodities;
