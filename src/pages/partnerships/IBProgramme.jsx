import React from 'react';
import {
    Briefcase, TrendingUp, Users, PieChart, BarChart2,
    Gift, Shield, Globe, CheckCircle, Smartphone
} from 'lucide-react';

const IBProgramme = () => {
    return (
        <div className="pt-20 md:pt-40 bg-[#02040a] font-[var(--font-body)]">

            {/* Block 1: The Partnership Hero */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-[#02040a]/90 to-[#02040a]/70"></div>

                {/* Gold Glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-gold)]/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 rounded-full mb-8 backdrop-blur-md">
                        <Briefcase size={16} className="text-[var(--color-gold)]" />
                        <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-[0.2em]">Official Partnership</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-white mb-6 leading-tight">
                        Grow Your Business with a <br />
                        <span className="text-[var(--color-gold)]">Global Trading Leader.</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Partner with Radhika Capital Markets and earn industry-leading commissions. Benefit from real-time tracking, marketing support, and a scalable revenue model designed for your success.
                    </p>

                    <button
                        onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-[var(--color-gold)] text-[#02040a] font-bold rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                    >
                        Become a Partner Today
                    </button>
                </div>
            </section>

            {/* Block 2: The Earning Models (Visual Cards) */}
            <section className="py-24 bg-[#050505] relative border-b border-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-white mb-4">Flexible Earning Output</h2>
                        <p className="text-gray-400">Choose a model that fits your business strategy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Model 1 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-gold)]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[var(--color-gold)]/10 transition-colors"></div>

                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <BarChart2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Lot-Based Rebates</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Earn a fixed, competitive commission for every lot traded by your referred clients, regardless of trade outcome.
                            </p>
                        </div>

                        {/* Model 2 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-gold)]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[var(--color-gold)]/10 transition-colors"></div>

                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <PieChart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Revenue Sharing</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Get a percentage of the spread revenue generated by your network. Ideal for long-term partnerships.
                            </p>
                        </div>

                        {/* Model 3 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-gold)]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[var(--color-gold)]/10 transition-colors"></div>

                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Multi-Tier Structure</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Increase your earnings by referring other IBs (Master IB) and earning from their client base too.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: The IB Advantage (Feature Grid) */}
            <section className="py-24 bg-[#02040a]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[var(--color-gold)] mb-6 shadow-lg">
                                <Briefcase size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Real-Time Dashboard</h4>
                            <p className="text-sm text-gray-500">Monitor every trade and commission in real-time with our advanced partner portal.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[var(--color-gold)] mb-6 shadow-lg">
                                <Smartphone size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Marketing Toolkit</h4>
                            <p className="text-sm text-gray-500">Access high-converting banners, landing pages, and educational content.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[var(--color-gold)] mb-6 shadow-lg">
                                <Gift size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Weekly Payouts</h4>
                            <p className="text-sm text-gray-500">Get your commissions credited directly to your USDT wallet every week without delays.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[var(--color-gold)] mb-6 shadow-lg">
                                <Shield size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Personal Partner Manager</h4>
                            <p className="text-sm text-gray-500">Receive 1-on-1 strategic advice to help scale your referral network.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: How It Works (Timeline) */}
            <section className="py-24 bg-[#050505] border-y border-gray-900">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-[var(--font-heading)] font-bold text-white">How It Works</h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>

                        {[
                            { step: "1", title: "Register", desc: "Fill out the partner application form." },
                            { step: "2", title: "Promote", desc: "Use your unique link and our marketing tools to refer clients." },
                            { step: "3", title: "Earn", desc: "Receive commissions instantly as your clients start trading." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center relative z-10 bg-[#050505] px-4 py-8 md:py-0 w-full md:w-1/3">
                                <div className="w-14 h-14 rounded-full bg-[var(--color-gold)] text-[#02040a] font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                    {item.step}
                                </div>
                                <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm max-w-[250px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 5: The Registration Portal (Optimized Form) */}
            <section id="registration-form" className="py-24 bg-[#02040a] relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Side: Text */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-white mb-6">
                                Start Your Partnership Journey.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Join thousands of successful partners who trust Radhika Capital Markets. Complete the form to get started.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="text-[var(--color-gold)]" />
                                    <span className="text-gray-300">Fast Application Approval</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="text-[var(--color-gold)]" />
                                    <span className="text-gray-300">Dedicated Support Team</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="text-[var(--color-gold)]" />
                                    <span className="text-gray-300">Transparent Commission Structure</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="bg-[#0a1629] p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-xs font-bold uppercase mb-2">First Name</label>
                                        <input type="text" className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="+1 (555) 000-0000" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Years of Experience</label>
                                        <div className="relative">
                                            <select className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none">
                                                <option>New to Partnership</option>
                                                <option>1-2 Years</option>
                                                <option>3-5 Years</option>
                                                <option>5+ Years</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Average Monthly Volume</label>
                                        <div className="relative">
                                            <select className="w-full bg-[#050c18] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none">
                                                <option>0 - 50 Lots</option>
                                                <option>50 - 200 Lots</option>
                                                <option>200 - 500 Lots</option>
                                                <option>500+ Lots</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button type="button" className="w-full py-4 bg-[var(--color-gold)] text-[#02040a] font-bold rounded hover:bg-white transition-colors shadow-lg shadow-yellow-900/20">
                                    Submit Application
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default IBProgramme;
