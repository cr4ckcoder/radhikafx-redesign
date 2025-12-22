import React from 'react';
import {
    TrendingUp, MousePointer, DollarSign, BarChart2,
    Smartphone, Layers, Globe, Zap, Target, ArrowRight,
    Check
} from 'lucide-react';

const CPAAffiliate = () => {
    return (
        <div className="pt-20 bg-[#02040a] font-[var(--font-body)]">

            {/* Block 1: The "High-Yield" Hero */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                {/* Digital World Map Background (CSS Pattern or Image) */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 hover:opacity-25 transition-opacity duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/80 to-transparent"></div>

                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 rounded-full mb-8 backdrop-blur-md animate-pulse">
                        <Zap size={16} className="text-[var(--color-gold)]" />
                        <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-[0.2em]">High Impact Network</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Turn Your Traffic into <br />
                        <span className="text-gold-gradient">Premium Commissions.</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Join the RadhikaFX CPA Affiliate Program. Get paid for every qualified trader you refer—no long-term management required. Just high-converting tools and high-value payouts.
                    </p>

                    <div className="inline-block bg-[#0a1629] border border-[var(--color-gold)]/30 px-6 py-3 rounded-xl mb-10 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                        <span className="text-gray-400 text-sm uppercase tracking-wider mr-2">Performance Badge</span>
                        <span className="text-white font-bold text-lg">Earn up to <span className="text-[var(--color-gold)]">$500</span> per qualified lead</span>
                    </div>

                    <div>
                        <button
                            onClick={() => document.getElementById('affiliate-form').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 btn-gold text-[var(--color-navy)] font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all transform hover:-translate-y-1"
                        >
                            Start Earning Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Block 2: Why Choose CPA with RadhikaFX? */}
            <section className="py-24 bg-[#050505] relative border-b border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)]/50 transition-colors group">
                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">High Conversion Rates</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Our optimized landing pages and global brand reputation mean more of your traffic turns into profit.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)]/50 transition-colors group">
                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <DollarSign size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Flexible Payouts</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Get paid in USDT as soon as your referrals meet the simple qualification criteria. No hidden delays.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)]/50 transition-colors group">
                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <BarChart2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Superior Tracking</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Use our professional affiliate dashboard to track clicks, registrations, and conversions in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: The "Qualified Lead" Transparency */}
            <section className="py-24 bg-[#02040a] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <div className="bg-[#0a1629]/80 backdrop-blur-md rounded-2xl p-10 border border-gray-800 shadow-2xl relative">
                        {/* Glowing Border effect */}
                        <div className="absolute inset-0 rounded-2xl border border-[var(--color-gold)]/20 pointer-events-none"></div>

                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white mb-2">How it Works: The CPA Trigger</h2>
                            <p className="text-gray-400">Simple, transparent qualification criteria.</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold border border-gray-700">1</div>
                                <p className="text-white font-medium">Registers Account</p>
                            </div>
                            <div className="hidden md:block w-full h-0.5 bg-gray-700"></div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold border border-gray-700">2</div>
                                <p className="text-white font-medium">Deposits Minimum</p>
                            </div>
                            <div className="hidden md:block w-full h-0.5 bg-gray-700"></div>
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-navy)] font-bold shadow-[0_0_20px_rgba(255,215,0,0.5)] animate-bounce-slow">
                                    <Check size={32} />
                                </div>
                                <p className="text-[var(--color-gold)] font-bold">Completes First Trade</p>
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-500">YOU GET PAID </div>
                            </div>
                        </div>

                        <div className="mt-10 text-center bg-[var(--color-gold)]/10 rounded-lg p-4 border border-[var(--color-gold)]/30">
                            <p className="text-[var(--color-gold)] text-sm font-medium">It’s that simple. No complex rebate calculations.</p>
                        </div>
                    </div>
                </div>

                {/* Background Tech Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 left-10 w-32 h-32 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Block 4: Marketing Toolkit Showcase */}
            <section className="py-24 bg-[#050505] border-y border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <div className="inline-block text-[var(--color-gold)] text-sm font-bold uppercase tracking-widest mb-4">Marketing Support</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Tools to Help You Scale.
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                We provide everything you need to succeed: High-resolution banners, multilingual landing pages, and deep-linking tools for targeted campaigns.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "High-Converting Banners (Static & HTML5)",
                                    "Customizable Landing Pages",
                                    "Real-Time Tracking Links",
                                    "Email Marketing Templates"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-8">
                                    <div className="bg-[#0a1629] p-4 rounded-xl border border-gray-800 h-40 flex items-center justify-center hover:border-[var(--color-gold)] transition-colors">
                                        <Globe size={40} className="text-gray-600 hover:text-[var(--color-gold)] transition-colors" />
                                    </div>
                                    <div className="bg-[#0a1629] p-4 rounded-xl border border-gray-800 h-56 flex items-center justify-center hover:border-[var(--color-gold)] transition-colors">
                                        <Smartphone size={40} className="text-gray-600 hover:text-[var(--color-gold)] transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-[#0a1629] p-4 rounded-xl border border-gray-800 h-56 flex items-center justify-center hover:border-[var(--color-gold)] transition-colors">
                                        <Layers size={40} className="text-gray-600 hover:text-[var(--color-gold)] transition-colors" />
                                    </div>
                                    <div className="bg-[#0a1629] p-4 rounded-xl border border-gray-800 h-40 flex items-center justify-center hover:border-[var(--color-gold)] transition-colors">
                                        <MousePointer size={40} className="text-gray-600 hover:text-[var(--color-gold)] transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: CPA vs. IB (Which one is for you?) */}
            <section className="py-24 bg-[#02040a]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Choose Your Path</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Affiliate Card */}
                        <div className="bg-gradient-to-b from-[#0a1629] to-[#050c18] border border-[var(--color-gold)]/50 rounded-2xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold rounded-bl-lg">RECOMMENDED</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Affiliate (CPA)</h3>
                            <p className="text-sm text-gray-400 mb-8 border-b border-gray-700 pb-6">Best for Media Buyers, Bloggers, and Social Media Influencers.</p>

                            <div className="text-4xl font-bold text-[var(--color-gold)] mb-2">One-Time</div>
                            <p className="text-gray-400 text-sm mb-6">High payout per qualified client.</p>

                            <div className="flex items-center gap-2 text-[var(--color-gold)] text-sm">
                                <Check size={16} /> Instant Cash Flow
                            </div>
                        </div>

                        {/* IB Card */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">Introducing Broker (IB)</h3>
                            <p className="text-sm text-gray-500 mb-8 border-b border-gray-700 pb-6">Best for Educators, Signal Providers, and Fund Managers.</p>

                            <div className="text-4xl font-bold text-white mb-2">Ongoing</div>
                            <p className="text-gray-500 text-sm mb-6">Commission based on trading volume.</p>

                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Check size={16} /> Long-term Passive Income
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 6: The Affiliate Registration Form */}
            <section id="affiliate-form" className="py-24 bg-[#050505] relative">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Join the Affiliate Program</h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Full Name</label>
                                <input type="text" className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Enter your name" />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Email Address</label>
                                <input type="email" className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Enter your email" />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Website / Social Media URL</label>
                                <input type="url" className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="https://" />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Primary Traffic Source</label>
                                <div className="relative">
                                    <select className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none">
                                        <option>Paid Ads (PPC/Display)</option>
                                        <option>SEO / Organic Search</option>
                                        <option>Social Media</option>
                                        <option>Email Marketing</option>
                                        <option>Offline / Events</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="w-full py-4 btn-gold text-[var(--color-navy)] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all mt-4">
                                Convert Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CPAAffiliate;
