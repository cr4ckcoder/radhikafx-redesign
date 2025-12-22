import React, { useEffect, useState } from 'react';
import {
    Globe, Shield, TrendingUp, Users, CheckCircle,
    Lock, Server, Smartphone, Monitor
} from 'lucide-react';

const Counter = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * ease));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

const AboutUs = () => {
    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The Identity Hero */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#02040a]">
                    {/* World Map / Ticker placeholder Visual */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e9db8d_1px,transparent_1px)] [background-size:40px_40px]"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--color-gold)] opacity-5 rounded-full filter blur-[150px] animate-pulse"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold font-[var(--font-heading)] text-[var(--color-white)] mb-8 leading-tight">
                        The Bridge Between <br />
                        <span className="text-[var(--color-gold)]">Your Ambition</span> and <br />
                        Global Markets
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Radhika Capital Markets: A globally regulated brokerage built on transparency, ultra-low latency, and a commitment to trader success.
                    </p>
                </div>
            </section>

            {/* Block 2: Mission & Vision (Split Screen) */}
            <section className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-[#0a1629] min-h-[500px] relative overflow-hidden group">
                    {/* Placeholder for High Quality Office Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] to-transparent opacity-90 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20 p-12">
                        <div className="border border-[var(--color-gold)] p-8 rounded-lg">
                            <Globe size={64} className="text-[var(--color-gold)] mb-6 mx-auto" />
                            <h3 className="text-3xl font-bold text-white text-center">Our Vision</h3>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[var(--color-navy)] text-white">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-[var(--color-gold)] mb-4">Our Mission</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            "To democratize institutional-grade trading tools for retail investors worldwide."
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[var(--color-gold)] mb-4">Our Vision</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            "Becoming the most transparent financial partner by eliminating the barriers of high costs and slow execution."
                        </p>
                    </div>
                </div>
            </section>

            {/* Block 3: Numbers of Trust */}
            <section className="py-20 bg-[var(--color-dark)] border-y border-[rgba(255,255,255,0.05)]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-4xl md:text-6xl font-bold text-[var(--color-gold)] mb-2 font-[var(--font-heading)]">
                                <Counter end={500} suffix="+" />
                            </div>
                            <p className="text-gray-400 font-medium">Instruments to Trade</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-6xl font-bold text-[var(--color-gold)] mb-2 font-[var(--font-heading)]">
                                &lt;30<span className="text-3xl">ms</span>
                            </div>
                            <p className="text-gray-400 font-medium">Avg Execution Speed</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-6xl font-bold text-[var(--color-gold)] mb-2 font-[var(--font-heading)]">
                                24/7
                            </div>
                            <p className="text-gray-400 font-medium">Expert Human Support</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-6xl font-bold text-[var(--color-gold)] mb-2 font-[var(--font-heading)]">
                                0.0
                            </div>
                            <p className="text-gray-400 font-medium">Starting Spreads</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: Regulation & Security (Light Theme) */}
            <section className="py-24 bg-[#f8fafc] text-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full opacity-50"></div>
                                <Shield size={48} className="text-[var(--color-navy)] mb-6" />
                                <h2 className="text-4xl font-bold mb-4 font-[var(--font-heading)]">Your Funds,<br />Protected.</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    We operate with complete transparency. Radhika Capital Markets is a fully regulated broker, ensuring that your trading environment is secure, fair, and compliant with global financial standards.
                                </p>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest mb-1">FSC Mauritius License</p>
                                    <p className="text-2xl font-mono font-bold">GB25204826</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-md text-[var(--color-navy)]">
                                    <Server size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Segregated Accounts</h3>
                                    <p className="text-gray-600">Client funds are stored in separate, top-tier bank accounts, completely isolated from company assets.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-md text-[var(--color-navy)]">
                                    <Lock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">SSL Encryption</h3>
                                    <p className="text-gray-600">All data transfers and transactions are protected by industry-standard 256-bit SSL encryption.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-md text-[var(--color-navy)]">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Negative Balance Protection</h3>
                                    <p className="text-gray-600">Trade with confidence. You can never lose more than your initial deposit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: The Radhika Timeline */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">Our Journey</h2>
                        <p className="text-gray-400">A timeline of trust and growth.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative border-l-2 border-[rgba(233,219,141,0.2)] ml-4 md:ml-0 md:pl-0 space-y-12">

                            {/* Item 1 */}
                            <div className="relative flex flex-col md:flex-row items-center md:items-start group">
                                <div className="absolute left-[-9px] md:left-1/2 md:-ml-3 w-5 h-5 bg-[var(--color-gold)] rounded-full border-4 border-[#050c18] z-10"></div>
                                <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                                    <span className="text-[var(--color-gold)] font-bold text-xl">2021</span>
                                    <h3 className="text-2xl font-bold text-[var(--color-white)] mb-2">Foundation</h3>
                                    <p className="text-gray-400">Radhika Capital Markets was founded with a singular vision: to bring true transparency to retail FX trading.</p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="relative flex flex-col md:flex-row items-center md:items-start group">
                                <div className="absolute left-[-9px] md:left-1/2 md:-ml-3 w-5 h-5 bg-[var(--color-gold)] rounded-full border-4 border-[#050c18] z-10"></div>
                                <div className="hidden md:block md:w-1/2"></div>
                                <div className="md:w-1/2 md:pl-12 pl-8">
                                    <span className="text-[var(--color-gold)] font-bold text-xl">2023</span>
                                    <h3 className="text-2xl font-bold text-[var(--color-white)] mb-2">Global Expansion</h3>
                                    <p className="text-gray-400">Secured FSC Mauritius regulation and launched our state-of-the-art MT5 infrastructure.</p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="relative flex flex-col md:flex-row items-center md:items-start group">
                                <div className="absolute left-[-9px] md:left-1/2 md:-ml-3 w-5 h-5 bg-[var(--color-gold)] rounded-full border-4 border-[#050c18] z-10 animate-ping"></div>
                                <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
                                    <span className="text-[var(--color-gold)] font-bold text-xl">Today</span>
                                    <h3 className="text-2xl font-bold text-[var(--color-white)] mb-2">Empowering Traders</h3>
                                    <p className="text-gray-400">Serving thousands of traders globally with institutional conditions and seamless execution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 6: Meet the Technology */}
            <section className="py-24 bg-[var(--color-dark)] relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900 rounded-full filter blur-[150px] opacity-10"></div>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-6">
                                Powering your trades with <span className="text-[var(--color-gold)]">MetaTrader 5</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Experience advanced charting, automated trading (EAs), and institutional-grade liquidity directly from your pocket.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center text-white">
                                    <CheckCircle className="text-[var(--color-gold)] mr-4" size={20} />
                                    21 Timeframes
                                </li>
                                <li className="flex items-center text-white">
                                    <CheckCircle className="text-[var(--color-gold)] mr-4" size={20} />
                                    Algorithmic Trading (EAs)
                                </li>
                                <li className="flex items-center text-white">
                                    <CheckCircle className="text-[var(--color-gold)] mr-4" size={20} />
                                    One-Click Trading
                                </li>
                            </ul>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                                    <Monitor size={20} /> Desktop
                                </button>
                                <button className="flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                                    <Smartphone size={20} /> Mobile
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Abstract Tech Representation */}
                            <div className="relative w-full aspect-video bg-gradient-to-br from-[#1a2d4d] to-[#050c18] rounded-xl border border-[var(--glass-border)] shadow-2xl flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-10">
                                    {[...Array(144)].map((_, i) => (
                                        <div key={i} className="bg-white rounded-[1px]"></div>
                                    ))}
                                </div>
                                <div className="z-10 text-center">
                                    <p className="text-[var(--color-gold)] font-mono mb-2">RADHIKA.MT5.PRO</p>
                                    <h3 className="text-4xl font-bold text-white tracking-widest">LIVE</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 7: Final CTA */}
            <section className="py-24 bg-[var(--color-navy)] border-t border-[var(--glass-border)]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-10">
                        Ready to start your journey with a <br /><span className="text-[var(--color-gold)]">regulated partner?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-full hover:bg-[var(--color-white)] transition-all transform hover:scale-105 shadow-xl text-lg">
                            Open Live Account
                        </button>
                        <button className="px-10 py-4 bg-transparent border-2 border-[var(--color-gold)] text-[var(--color-gold)] font-bold rounded-full hover:bg-[rgba(233,219,141,0.1)] transition-colors text-lg">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
