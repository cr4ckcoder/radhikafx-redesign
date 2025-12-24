import React from 'react';
import {
    Shield, Lock, FileCheck, ExternalLink,
    Scale, Building
} from 'lucide-react';

const Regulations = () => {
    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The Authority Hero */}
            <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#02040a]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a1629] border border-gray-700 rounded-full mb-8 shadow-sm">
                        <Scale size={16} className="text-[var(--color-gold)]" />
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Regulatory Compliance</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                        A Transparent & Regulated <br />
                        <span className="text-[var(--color-gold)]">Trading Environment.</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Radhika Capital Markets Ltd is authorized and regulated by the <span className="font-bold text-white">Financial Services Commission (FSC)</span> of Mauritius.
                    </p>
                </div>
            </section>

            {/* Block 2: The License Detail (The Core) */}
            <section className="py-24 bg-[var(--color-navy)] relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto bg-[#0a1629] rounded-xl shadow-2xl border border-[rgba(255,255,255,0.05)] overflow-hidden relative">
                        {/* Decorative Top Bar */}
                        <div className="h-1 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-gold)] to-[var(--color-navy)] w-full"></div>

                        <div className="p-12 text-center relative z-10">
                            <div className="w-20 h-20 bg-[#050c18] rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-800 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                                <Shield size={40} className="text-[var(--color-gold)]" />
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-2">Radhika Capital Markets Ltd</h2>
                            <p className="text-gray-500 text-sm uppercase tracking-wider mb-10">Licensed Investment Dealer</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-lg mx-auto mb-10">
                                <div className="bg-[#050c18] p-4 rounded border border-gray-800 hover:border-[var(--color-gold)] transition-colors">
                                    <div className="text-gray-500 text-xs font-bold uppercase mb-1">Registration No</div>
                                    <div className="text-lg font-bold text-white">224657</div>
                                </div>
                                <div className="bg-[#050c18] p-4 rounded border border-gray-800 hover:border-[var(--color-gold)] transition-colors">
                                    <div className="text-gray-500 text-xs font-bold uppercase mb-1">License No</div>
                                    <div className="text-lg font-bold text-white">GB25204826</div>
                                </div>
                            </div>

                            <div className="mb-10">
                                <div className="text-gray-500 text-xs font-bold uppercase mb-2">License Type</div>
                                <div className="text-gray-300 font-medium bg-[#050c18] inline-block px-4 py-2 rounded border border-gray-800">
                                    Investment Dealer (Full Service Dealer, Excluding Underwriting)
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded hover:bg-white transition-colors shadow-lg shadow-yellow-900/10"
                            >
                                Verify License on FSC Website <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* Watermark */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                            <Shield size={400} className="text-white" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: The Three Pillars of Protection */}
            <section className="py-24 bg-[#050c18]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#0a1629] rounded-full flex items-center justify-center shadow-lg border border-gray-800 mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform duration-300">
                                <Building size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Segregated Accounts</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Client funds are kept in top-tier banks, completely separate from company operating funds. Your capital is never used for our hedging or operational expenses.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#0a1629] rounded-full flex items-center justify-center shadow-lg border border-gray-800 mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform duration-300">
                                <FileCheck size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Regular Audits</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Our financial records are subject to strict oversight and independent audits to ensure full compliance and financial health.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#0a1629] rounded-full flex items-center justify-center shadow-lg border border-gray-800 mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform duration-300">
                                <Lock size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Negative Balance Protection</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Ensuring you never lose more than your account balance during market volatility. We absorb the risk of gap events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Regulations;
