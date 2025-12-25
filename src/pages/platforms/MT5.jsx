import React, { useState } from 'react';
import {
    Monitor, Smartphone, Tablet, Calendar, Code, Clock,
    Layers, Zap, BarChart2, Check, Download, MousePointer,
    HelpCircle, ChevronDown, ChevronUp, Cpu
} from 'lucide-react';
import MT5Logo from '../../assets/mt5logo.svg';
import MT5Badge from '../../assets/MT5Badge.svg';
import PlatformBg from '../../assets/platform.jpg';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-[rgba(255,255,255,0.05)]">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="text-lg font-bold text-white pr-8">{question}</span>
                <span className={`text-[var(--color-gold)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const MT5 = () => {
    const [activeTab, setActiveTab] = useState('desktop');
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    const faqs = [
        {
            question: "Do I need to register with Radhika Capital Markets to access MT5?",
            answer: "Yes. You’ll need to open an account (Live or Demo) to credentials that link with the MT5 trading terminal."
        },
        {
            question: "Is MT5 compatible with phones and tablets?",
            answer: "Yes, MT5 runs smoothly on iOS, Android, and all desktop platforms (Windows/Mac). You can trade seamlessly across all your devices."
        },
        {
            question: "Can I open a demo account first?",
            answer: "Absolutely! Our demo account helps you test strategies without risking capital. It mirrors live market conditions perfectly."
        },
        {
            question: "What payment options are available?",
            answer: "We currently accept USDT for instant deposits. We are actively working on adding more payment methods including Bank Wire and Credit Cards."
        },
        {
            question: "Does Radhika Capital Markets support VPS for EAs?",
            answer: "Yes, we support VPS hosting which is highly recommended for pro traders using automated strategies (EAs) to ensure 24/7 uptime and ultra-low latency."
        }
    ];

    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The "Command Center" Hero */}
            <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 filter grayscale" style={{ backgroundImage: `url(${PlatformBg})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[rgba(2,4,10,0.8)] to-[rgba(2,4,10,0.4)]"></div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                            One Platform. <br /><span className="text-gold-gradient">Infinite Possibilities.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Harness the full power of MetaTrader 5 with Radhika Capital Markets. Institutional-grade execution, advanced technical analysis, and automated trading—all in one place.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-colors shadow-lg shadow-yellow-900/20 flex items-center gap-2">
                                <Download size={20} /> Download MT5 Now
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-[var(--color-white)] text-white font-bold rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                                WebTrader Access
                            </button>
                        </div>
                    </div>

                    {/* 3D Render Placeholder */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-gold)] rounded-full filter blur-[120px] opacity-10"></div>
                        <div className="relative z-10 transform lg:rotate-y-[-12deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
                            {/* Detailed Platform Mockup */}
                            <div className="bg-[#0f172a] rounded-xl border border-gray-700 shadow-2xl overflow-hidden aspect-video">
                                {/* Window Header */}
                                <div className="h-8 bg-gray-800 flex items-center px-4 space-x-2 border-b border-gray-700">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="ml-4 text-xs text-gray-400">Radhika Capital Markets MT5 Terminal</div>
                                </div>
                                {/* Window Body */}
                                <div className="flex h-full">
                                    {/* Sidebar */}
                                    <div className="w-64 bg-[#0a1629] border-r border-gray-700 p-2 hidden sm:block">
                                        <div className="text-xs text-gray-500 font-bold mb-2 uppercase">Market Watch</div>
                                        <div className="space-y-1">
                                            {['EURUSD', 'GBPUSD', 'USDJPY', 'XAUUSD', 'BTCUSD'].map((pair, i) => (
                                                <div key={i} className="flex justify-between items-center text-xs p-2 hover:bg-white/5 rounded">
                                                    <span className="text-white font-bold">{pair}</span>
                                                    <span className={i % 2 === 0 ? 'text-green-400' : 'text-red-400'}>{(1.05 + i * 0.1).toFixed(4)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Charts */}
                                    <div className="flex-1 bg-[#0f172a] p-4 relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
                                        {/* Mock Chart SVG */}
                                        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                            <path d="M0,150 L20,140 L40,160 L60,130 L80,145 L100,100 L120,110 L140,80 L160,95 L180,50 L200,70 L220,100 L240,80 L260,110 L280,90 L300,50 L320,60 L340,30 L360,50 L380,20 L400,40" fill="none" stroke="#22c55e" strokeWidth="2" />
                                            <defs>
                                                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                                                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M0,150 L20,140 L40,160 L60,130 L80,145 L100,100 L120,110 L140,80 L160,95 L180,50 L200,70 L220,100 L240,80 L260,110 L280,90 L300,50 L320,60 L340,30 L360,50 L380,20 L400,40 V200 H0 Z" fill="url(#chartFill)" stroke="none" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* MT5 Badge overlapping the mockup */}
                        <div className="absolute -bottom-10 -right-10 z-20 animate-fade-in-up">
                            <img src={MT5Badge} alt="MetaTrader 5 Badge" className="w-48 h-auto shadow-2xl rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: The "MT5 vs MT4" Edge */}
            < section className="py-24 bg-[var(--color-navy)]" >
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Upgrade to MT5?</h2>
                        <p className="text-gray-400">The standard has evolved. See why MT5 is the choice for modern traders.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
                        {/* MT4 Side */}
                        <div className="bg-[#050c18] p-8 md:p-12 md:border-r border-[rgba(255,255,255,0.05)] relative opacity-50 hover:opacity-100 transition-opacity">
                            <h3 className="text-2xl font-bold text-gray-500 mb-8 text-center">MT4 (Legacy)</h3>
                            <ul className="space-y-6">
                                <li className="flex items-center justify-between text-gray-500">
                                    <span>Timeframes</span>
                                    <span className="font-mono">9</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-500">
                                    <span>Pending Order Types</span>
                                    <span className="font-mono">4</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-500">
                                    <span>Economic Calendar</span>
                                    <span className="font-mono">No</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-500">
                                    <span>Depth of Market</span>
                                    <span className="font-mono">No</span>
                                </li>
                            </ul>
                        </div>

                        {/* MT5 Side */}
                        <div className="bg-[rgba(233,219,141,0.05)] p-8 md:p-12 relative border-t md:border-t-0 border-[var(--color-gold)]">
                            <div className="absolute top-0 right-0 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">MT5 (Advanced)</h3>
                            <ul className="space-y-6">
                                <li className="flex items-center justify-between text-white border-b border-[rgba(255,255,255,0.05)] pb-2">
                                    <span className="flex items-center gap-2"><Clock size={16} className="text-[var(--color-gold)]" /> Timeframes</span>
                                    <span className="font-mono font-bold text-gold-gradient">21</span>
                                </li>
                                <li className="flex items-center justify-between text-white border-b border-[rgba(255,255,255,0.05)] pb-2">
                                    <span className="flex items-center gap-2"><Layers size={16} className="text-[var(--color-gold)]" /> Pending Order Types</span>
                                    <span className="font-mono font-bold text-gold-gradient">6</span>
                                </li>
                                <li className="flex items-center justify-between text-white border-b border-[rgba(255,255,255,0.05)] pb-2">
                                    <span className="flex items-center gap-2"><Calendar size={16} className="text-[var(--color-gold)]" /> Economic Calendar</span>
                                    <span className="font-mono font-bold text-gold-gradient">Built-in</span>
                                </li>
                                <li className="flex items-center justify-between text-white border-b border-[rgba(255,255,255,0.05)] pb-2">
                                    <span className="flex items-center gap-2"><BarChart2 size={16} className="text-[var(--color-gold)]" /> Depth of Market</span>
                                    <span className="font-mono font-bold text-gold-gradient">Yes</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >

            {/* Block 3: The Multi-Device Ecosystem */}
            < section className="py-24 bg-[var(--color-dark)] relative overflow-hidden" >
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Trade Anywhere, Anytime</h2>
                    </div>

                    <div className="flex justify-center gap-4 mb-12">
                        {['desktop', 'mobile', 'web'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === tab
                                    ? 'bg-[var(--color-gold)] text-[var(--color-navy)]'
                                    : 'bg-[rgba(255,255,255,0.05)] text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="bg-[#0a1629] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 md:p-12 min-h-[400px] flex items-center justify-center relative">
                        {activeTab === 'desktop' && (
                            <div className="flex flex-col md:flex-row items-center gap-12 w-full animate-fade-in">
                                <div className="md:w-1/2">
                                    <Monitor size={64} className="text-[var(--color-gold)] mb-6" />
                                    <h3 className="text-3xl font-bold text-white mb-4">For the Power User</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        Experience the full capability of the terminal. Access 80+ built-in indicators, multi-window views for monitoring multiple assets, and full Expert Advisor (EA) support for automated trading.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Advanced Charting</li>
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Custom Indicators (MQL5)</li>
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Strategy Tester</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    {/* Abstract Desktop Visual */}
                                    <div className="w-full h-64 bg-gradient-to-tr from-blue-900/40 to-transparent border border-gray-700 rounded-lg relative overflow-hidden">
                                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-1 gap-1">
                                            <div className="bg-black/30 rounded border border-white/5"></div>
                                            <div className="bg-black/30 rounded border border-white/5"></div>
                                            <div className="bg-black/30 rounded border border-white/5 col-span-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'mobile' && (
                            <div className="flex flex-col md:flex-row items-center gap-12 w-full animate-fade-in">
                                <div className="md:w-1/2">
                                    <Smartphone size={64} className="text-[var(--color-gold)] mb-6" />
                                    <h3 className="text-3xl font-bold text-white mb-4">The Market in Your Pocket</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        Full account management on iOS and Android. Receive push notifications for price alerts, execute trades with one tap, and check your history on the go.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Real-time Quotes</li>
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Trading from Chart</li>
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Full Trade History</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    {/* Abstract Mobile Visual */}
                                    <div className="w-40 h-80 bg-black border-4 border-gray-800 rounded-[2rem] relative overflow-hidden shadow-2xl">
                                        <div className="absolute inset-x-0 top-0 h-6 bg-gray-800 rounded-b-lg mx-auto w-24"></div>
                                        <div className="p-4 pt-12 text-center">
                                            <div className="w-full h-32 bg-green-500/10 rounded mb-4 border border-green-500/20"></div>
                                            <div className="w-2/3 h-4 bg-gray-800 rounded mx-auto mb-2"></div>
                                            <div className="w-1/2 h-4 bg-gray-800 rounded mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'web' && (
                            <div className="flex flex-col md:flex-row items-center gap-12 w-full animate-fade-in">
                                <div className="md:w-1/2">
                                    <Monitor size={64} className="text-[var(--color-gold)] mb-6" />
                                    <h3 className="text-3xl font-bold text-white mb-4">Analyze on the Go</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        No download required. Access the MT5 web terminal directly from your browser. Optimized for fast access when you're on a public machine or tablet.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> No Installation</li>
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Works on Any OS</li>
                                        <li className="flex items-center text-gray-300"><Check size={16} className="text-green-400 mr-2" /> Secure Encryption</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    {/* Abstract Web Visual */}
                                    <div className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg relative overflow-hidden">
                                        <div className="h-6 bg-gray-800 w-full flex items-center px-2 space-x-1">
                                            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                            <div className="w-full h-4 bg-black/50 rounded ml-2"></div>
                                        </div>
                                        <div className="p-4 flex items-center justify-center h-full">
                                            <div className="text-gray-700 font-bold text-2xl">WEB TERMINAL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section >

            {/* Block 4: Feature Spotlight (The "Pro" Tools) */}
            < section className="py-24 bg-[var(--color-navy)]" >
                <div className="container mx-auto px-6 ">
                    <div className="flex flex-wrap justify-center gap-8">

                        <div className="group text-center p-6 border border-[rgba(255,255,255,0.05)] rounded-2xl hover:border-[var(--color-gold)] transition-colors w-full max-w-sm">
                            <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:bg-[var(--color-gold)] group-hover:text-black transition-colors">
                                <Code size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Algorithmic Trading</h3>
                            <p className="text-gray-400 text-sm">Deploy your bots (EAs) with 100% compatibility for the MQL5 language.</p>
                        </div>
                        <div className="group text-center p-6 border border-[rgba(255,255,255,0.05)] rounded-2xl hover:border-[var(--color-gold)] transition-colors w-full max-w-sm">
                            <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-[var(--color-gold)] group-hover:text-black transition-colors">
                                <MousePointer size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">One-Click Trading</h3>
                            <p className="text-gray-400 text-sm">Enter and exit positions in milliseconds directly from the chart.</p>
                        </div>
                        <div className="group text-center p-6 border border-[rgba(255,255,255,0.05)] rounded-2xl hover:border-[var(--color-gold)] transition-colors w-full max-w-sm">
                            <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 group-hover:bg-[var(--color-gold)] group-hover:text-black transition-colors">
                                <BarChart2 size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Superior Charting</h3>
                            <p className="text-gray-400 text-sm">Analyze with 38 advanced technical indicators and 44 analytical objects.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Block 4.5: Download Links (Added per user request) */}
            < section className="py-20 bg-black border-y border-[rgba(255,255,255,0.1)]" >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[var(--font-heading)]">
                        Start Trading with Radhika Capital Markets MT5
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
                        Get the MT5 platform tailored for Radhika Capital Markets clients — fast, secure, and optimized for pro-level performance.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {/* iOS Button */}
                        <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=RadhikaFxCapital-Trade" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 min-w-[200px]">
                            <Smartphone size={32} strokeWidth={1.5} />
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Download on the</div>
                                <div className="text-lg font-bold leading-none">App Store</div>
                            </div>
                        </a>

                        {/* Android Button */}
                        <a href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 min-w-[200px]">
                            <div className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-md relative overflow-hidden">
                                {/* Crude Play Store Triangle approximation using CSS or just generic icon */}
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1"></div>
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">GET IT ON</div>
                                <div className="text-lg font-bold leading-none">Google Play</div>
                            </div>
                        </a>

                        {/* Windows Button */}
                        <a href="https://download.mql5.com/cdn/web/radhikafx.capital.markets/mt5/radhikafxcapital5setup.exe" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 min-w-[200px]">
                            <Monitor size={32} strokeWidth={1.5} />
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">USE ON</div>
                                <div className="text-lg font-bold leading-none">Windows PC</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section >

            {/* Block 5: The "3-Step Setup" */}
            < section className="py-24 bg-[var(--color-dark)] border-t border-[rgba(255,255,255,0.05)]" >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Start Trading in Minutes</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-1 bg-[rgba(255,255,255,0.1)] z-0"></div>

                        <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
                            <div className="w-20 h-20 bg-[var(--color-navy)] border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">1</div>
                            <h3 className="text-xl font-bold text-white mb-2">Register</h3>
                            <p className="text-gray-400 px-4">Open your Radhika Capital Markets Live or Demo account in under 2 minutes.</p>
                        </div>
                        <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
                            <div className="w-20 h-20 bg-[var(--color-navy)] border-2 border-white rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">2</div>
                            <h3 className="text-xl font-bold text-white mb-2">Download</h3>
                            <p className="text-gray-400 px-4">Get MT5 for your preferred device (Windows, Mac, iOS, Android).</p>
                        </div>
                        <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
                            <div className="w-20 h-20 bg-[var(--color-gold)] text-[var(--color-navy)] rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-gold">3</div>
                            <h3 className="text-xl font-bold text-white mb-2">Login & Trade</h3>
                            <p className="text-gray-400 px-4">Enter your credentials and start trading 500+ global assets.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Block 6: The "Support & FAQ" Accordion */}
            < section className="py-24 bg-[var(--color-navy)]" >
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 text-gold-gradient mb-4 font-bold uppercase tracking-widest text-sm">
                            <HelpCircle size={18} />
                            <span>Support</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                    </div>

                    <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)] rounded-2xl p-6 md:p-10">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFaqIndex === index}
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                            />
                        ))}
                        <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.05)] text-center">
                            <p className="text-gray-400 mb-4">Still have questions?</p>
                            <button className="text-gold-gradient font-bold hover:text-white transition-colors">
                                Contact our 24/7 Support Team
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default MT5;
