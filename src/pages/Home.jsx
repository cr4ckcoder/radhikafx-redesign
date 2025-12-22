import React, { useState, useEffect } from 'react';
import {
    ArrowRight, CheckCircle, Globe, TrendingUp, Shield,
    Monitor, Zap, BarChart2, Layers, ChevronDown, Headphones,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBackground from '../assets/hero-background.png';
import WhyChooseUs from '../components/WhyChooseUs';
import TradingViewTicker from '../components/TradingViewTicker';

const Home = () => {
    // FAQ State
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    return (
        <div className="bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* NEW HERO SECTION */}
            <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
                {/* Background: Dubai Skyline */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBackground}
                        alt="Dubai Skyline"
                        className="w-full h-full object-cover object-bottom opacity-60"
                    />
                    {/* Dark Overlay Gradient - Fades from solid navy top to transparent bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-[#02040a]/80 to-transparent"></div>
                    {/* Bottom fade to blend with next section */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-navy)] to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 text-center mt-[-5vh]">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[var(--font-heading)] drop-shadow-2xl">
                        RadhikaFX <span className="text-gold-gradient">Global Markets</span> Trading
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-light drop-shadow-md">
                        Trade with the World's Largest and Most Regulated <br /> Financial Derivatives Institution
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                        <Link
                            to="/open-live-account"
                            className="px-10 py-4 btn-gold text-[#02040a] text-lg font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 block text-center"
                        >
                            Open a Live Account
                        </Link>
                        <Link
                            to="/open-demo-account"
                            className="px-10 py-4 bg-transparent border border-white/30 text-white text-lg font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm block text-center"
                        >
                            Try Risk-Free Demo
                        </Link>
                    </div>

                    {/* Platforms Section */}

                </div>
            </section>

            {/* Ticker - Placed immediately after Hero */}
            <div className="relative z-20 bg-[var(--color-navy)] border-y border-[var(--glass-border)]">
                <TradingViewTicker />
            </div>

            {/* Trust Bar / Awards Section */}


            {/* Rest of the Homepage Content */}
            <WhyChooseUs />

            {/* Market Markets Section - Quick Preview */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Trade Global Markets</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: 'Forex', link: '/products/forex' },
                            { name: 'Commodities', link: '/products/commodities' },
                            { name: 'Indices', link: '/products/indices' },
                            { name: 'Shares', link: '/products/shares' },
                            { name: 'Crypto', link: '/products/crypto' }
                        ].map((item) => (
                            <Link key={item.name} to={item.link} className="p-6 bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl hover:border-[var(--color-gold)] transition-colors cursor-pointer group block">
                                <div className="text-[var(--color-gold)] font-bold text-lg mb-2 group-hover:scale-110 transition-transform">{item.name}</div>
                                <div className="text-sm text-gray-500">View Spreads →</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 4: The "Platform Advantage" (MT5) */}
            <section className="py-24 bg-[#02040a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-900/10 blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block text-gold-gradient font-bold tracking-widest uppercase text-sm mb-4">Technology</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                The World's #1 Platform. <br />
                                <span className="text-gold-gradient">Enhanced.</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Trade on MetaTrader 5 (MT5) with RadhikaFX's superior infrastructure. We've optimized the environment for EAs, scalping, and high-frequency trading.
                            </p>

                            <ul className="space-y-6 mb-10">
                                {[
                                    "One Platform, 500+ Assets (Forex, Crypto, Stocks).",
                                    "Optimized for Expert Advisors (EAs) & Scalping.",
                                    "Advanced Technical Indicators & 21 Timeframes.",
                                    "Market Depth & One-Click Trading."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[rgba(185,156,0,0.15)] flex items-center justify-center text-[var(--color-gold)]">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/platforms/mt5" className="inline-flex items-center gap-2 text-gold-gradient font-bold hover:text-white transition-colors group">
                                Explore MT5 Features <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Visual */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative group perspective-1000">
                                <img
                                    src="/src/assets/mt5_tech_display.png"
                                    alt="MT5 Desktop and Mobile"
                                    className="rounded-2xl border border-gray-800 shadow-2xl relative z-10 transform transition-transform duration-700 group-hover:rotate-y-6"
                                />
                                {/* Glow behind */}
                                <div className="absolute inset-0 bg-[rgba(185,156,0,0.2)] blur-3xl -z-10 group-hover:bg-[rgba(185,156,0,0.3)] transition-colors"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: The "Product Tiles" (Interactive) */}
            <section className="py-24 bg-[#050c18]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Access Global Opportunity</h2>
                        <p className="text-gray-400">Trade the world's most popular markets from a single wallet.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { title: "Currencies", icon: Globe, pair: "EUR/USD", spread: "0.1", link: "/products/forex" },
                            { title: "Energies", icon: Zap, pair: "US Oil", spread: "0.04", link: "/products/commodities" },
                            { title: "Metals", icon: Layers, pair: "XAU/USD", spread: "0.15", link: "/products/commodities" },
                            { title: "Indices", icon: BarChart2, pair: "US 30", spread: "1.5", link: "/products/indices" },
                            { title: "Digital Assets", icon: Monitor, pair: "BTC/USD", spread: "15.0", link: "/products/crypto" }
                        ].map((product, index) => (
                            <Link
                                to={product.link}
                                key={index}
                                className="bg-[#0a1629] p-6 rounded-xl border border-gray-800 hover:border-[var(--color-gold)] transition-all group relative overflow-hidden h-48 flex flex-col justify-between"
                            >
                                <div>
                                    <product.icon className="text-gray-500 group-hover:text-[var(--color-gold)] mb-4 transition-colors" size={28} />
                                    <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">{product.title}</h3>
                                </div>

                                {/* Hover Reveal Content */}
                                <div className="absolute inset-0 bg-[var(--color-navy)] flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--color-gold)] rounded-xl">
                                    <div className="text-gray-400 text-xs mb-1">Most Traded</div>
                                    <div className="text-xl font-bold text-white mb-2">{product.pair}</div>
                                    <div className="text-xs text-[var(--color-gold)]">Spread from {product.spread}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 6: The "Account Comparison" */}
            <section className="py-24 bg-[#02040a]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Accounts Designed for Performance</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Standard */}
                        <div className="bg-[#0a1629] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                            <p className="text-gray-400 text-sm mb-6">For new traders.</p>
                            <div className="text-3xl font-bold text-gold-gradient mb-6">$100 <span className="text-sm text-gray-500 font-normal">min deposit</span></div>
                            <ul className="space-y-4 mb-8 text-sm text-gray-300">
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-gray-500" /> Spreads from 1.5</li>
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-gray-500" /> Zero Commission</li>
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-gray-500" /> MT5 Platform</li>
                            </ul>
                            <Link to="/accounts/standard" className="block w-full py-3 border border-gray-600 text-white text-center rounded-lg hover:bg-gray-800 transition-colors">View Details</Link>
                        </div>

                        {/* Pro (Highlighted) */}
                        <div className="bg-[#0a1629] border-2 border-[var(--color-gold)] rounded-2xl p-8 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                            <div className="absolute top-0 right-0 left-0 bg-gold-gradient text-[#02040a] text-center text-xs font-bold uppercase py-1 rounded-t-lg">Most Popular</div>
                            <h3 className="text-2xl font-bold text-white mb-2 mt-4">Pro</h3>
                            <p className="text-gray-400 text-sm mb-6">For experienced traders.</p>
                            <div className="text-3xl font-bold text-gold-gradient mb-6">$1,000 <span className="text-sm text-gray-500 font-normal">min deposit</span></div>
                            <ul className="space-y-4 mb-8 text-sm text-gray-300">
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[var(--color-gold)]" /> Spreads from 0.0</li>
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[var(--color-gold)]" /> $7/lot Commission</li>
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[var(--color-gold)]" /> Dedicated Manager</li>
                            </ul>
                            <Link to="/accounts/pro" className="block w-full py-3 btn-gold text-[#02040a] font-bold text-center rounded-lg hover:bg-white transition-colors">Start Trading</Link>
                        </div>

                        {/* Pro X */}
                        <div className="bg-[#0a1629] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-2">Pro X</h3>
                            <p className="text-gray-400 text-sm mb-6">For institutional volume.</p>
                            <div className="text-3xl font-bold text-gold-gradient mb-6">$5,000 <span className="text-sm text-gray-500 font-normal">min deposit</span></div>
                            <ul className="space-y-4 mb-8 text-sm text-gray-300">
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-gray-500" /> Spreads from 0.0</li>
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-gray-500" /> $3/lot Commission</li>
                                <li className="flex items-center gap-3"><CheckCircle size={14} className="text-gray-500" /> VPS Included</li>
                            </ul>
                            <Link to="/accounts/pro-x" className="block w-full py-3 border border-gray-600 text-white text-center rounded-lg hover:bg-gray-800 transition-colors">View Details</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 6: The "IB Partner" Ecosystem */}
            <section className="py-24 bg-[#050c18] border-y border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                                alt="Partnership"
                                className="rounded-2xl shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Turn Your Network into Revenue.
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Join our multi-tier IB program with real-time rebates, high-converting marketing tools, and dedicated partner managers.
                            </p>
                            <Link
                                to="/partnership/ib-programme"
                                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gold-gradient transition-colors"
                            >
                                Apply to be an IB
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 7: The "Radhika Education" Teaser (HIDDEN AS PER REQUEST) */}
            {/*
            <section className="py-24 bg-[#02040a]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Stay Ahead of the Market</h2>
                            <p className="text-gray-400">Daily technical analysis and economic insights.</p>
                        </div>
                        <Link to="/tools/economic-calendar" className="hidden md:flex items-center gap-2 text-[var(--color-gold)] font-bold">Read Blog <ArrowRight size={16} /></Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            "Gold Approaches All-Time Highs Amid Rates Talk",
                            "EUR/USD Technical Analysis: Key Resistance at 1.09",
                            "The Week Ahead: NFP and Central Bank Decisions"
                        ].map((title, i) => (
                            <Link to="/tools/economic-calendar" key={i} className="group cursor-pointer block">
                                <div className="bg-gray-800 h-48 rounded-xl mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gray-700 group-hover:bg-gray-600 transition-colors"></div>
                                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 text-xs text-white rounded">Market News</div>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">{title}</h3>
                                <p className="text-gray-500 text-sm mt-2">Dec 20, 2025 • Technical Analysis</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            */}

            {/* Block 8: FAQ (Accordion) */}
            <section className="py-24 bg-[#050c18]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Common Questions</h2>

                    <div className="space-y-4">
                        {[
                            { q: "Is RadhikaFX regulated?", a: "Yes, Radhika Capital Markets is fully licensed and regulated by the Financial Services Commission (FSC) of Mauritius (License #GB25204826)." },
                            { q: "What is the minimum deposit?", a: "You can start trading with a minimum deposit of just $100 on our Standard Account. For professional conditions, the Pro account starts at $1,000." },
                            { q: "How long do withdrawals take?", a: "We process USDT withdrawals 24/7. In most cases, funds are approved within a few hours and received instantly on the blockchain." },
                            { q: "Can I use Exper Advisors (EAs)?", a: "Absolutely. All our account types support the use of Expert Advisors (EAs), scalping, and hedging strategies without restriction." }
                        ].map((item, index) => (
                            <div key={index} className="bg-[#0a1629] rounded-xl border border-gray-800 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left text-white font-bold hover:bg-white/5 transition-colors"
                                >
                                    {item.q}
                                    <ChevronDown className={`transition-transform duration-300 ${faqOpen === index ? 'rotate-180 text-[var(--color-gold)]' : 'text-gray-500'}`} />
                                </button>
                                <div className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ${faqOpen === index ? 'max-h-40 py-4 border-t border-gray-800' : 'max-h-0'}`}>
                                    {item.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
