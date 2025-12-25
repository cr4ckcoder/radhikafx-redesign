import React from 'react';
import {
    Clock, Lock, CheckCircle, Shield, AlertTriangle,
    ArrowRight, ChevronRight, Gauge, Zap, HelpCircle
} from 'lucide-react';

const Withdrawals = () => {
    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The "Financial Freedom" Hero */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(38,161,123,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 relative">
                            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                            <div className="absolute inset-0 border-t-4 border-[var(--color-gold)] rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-2 bg-[#02040a] rounded-full flex items-center justify-center">
                                <Gauge size={40} className="text-[var(--color-gold)]" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                        Your Profits, Delivered at the <br />
                        <span className="text-gold-gradient">Speed of Light.</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience seamless, 24/7 USDT withdrawals. We believe that getting your money out should be just as easy as putting it in.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 btn-gold text-[var(--color-navy)] font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)] flex items-center justify-center gap-2">
                            Request a Withdrawal <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded-lg hover:border-[var(--color-gold)] hover:text-gold-gradient transition-colors">
                            View History
                        </button>
                    </div>

                    <div className="mt-12 flex justify-center gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <Lock size={14} className="text-[var(--color-gold)]" /> Bank-Grade Security
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-[var(--color-gold)]" /> Blockchain Verified
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: The "Radhika Fast-Track" Promise */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-[#050c18] border-b-4 border-blue-500 rounded-t-xl hover:-translate-y-2 transition-transform duration-300">
                            <Clock size={32} className="text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Same-Day Processing</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                All withdrawal requests are reviewed and processed within <span className="text-white font-bold">2–4 hours</span> during business hours.
                            </p>
                        </div>

                        <div className="p-8 bg-[#050c18] border-b-4 border-[var(--color-gold)] rounded-t-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                            <Shield size={32} className="text-[var(--color-gold)] mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Zero Hidden Fees</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Radhika Capital Markets does not charge any internal fees for withdrawals. You only pay the standard network gas fee.
                            </p>
                        </div>

                        <div className="p-8 bg-[#050c18] border-b-4 border-green-500 rounded-t-xl hover:-translate-y-2 transition-transform duration-300">
                            <Zap size={32} className="text-green-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Secure & Direct</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Funds are sent directly to your whitelisted USDT (TRC20/ERC20) wallet address.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: The 3-Step Withdrawal Process */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-16">How it Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-700 -z-0"></div>

                        <div className="relative z-10 group">
                            <div className="w-24 h-24 bg-[#0a1629] border-4 border-gray-700 group-hover:border-[var(--color-gold)] rounded-full flex items-center justify-center text-white font-bold text-3xl mb-8 mx-auto transition-colors duration-300">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Request</h3>
                            <p className="text-gray-400 text-sm max-w-xs mx-auto">Log in to your Client Portal and select 'Withdraw'.</p>
                        </div>

                        <div className="relative z-10 group">
                            <div className="w-24 h-24 bg-[#0a1629] border-4 border-gray-700 group-hover:border-[var(--color-gold)] rounded-full flex items-center justify-center text-white font-bold text-3xl mb-8 mx-auto transition-colors duration-300">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Authenticate</h3>
                            <p className="text-gray-400 text-sm max-w-xs mx-auto">For your security, confirm the request via Email or 2FA.</p>
                        </div>

                        <div className="relative z-10 group">
                            <div className="w-24 h-24 bg-[#0a1629] border-4 border-gray-700 group-hover:border-[var(--color-gold)] rounded-full flex items-center justify-center text-white font-bold text-3xl mb-8 mx-auto transition-colors duration-300">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Receive</h3>
                            <p className="text-gray-400 text-sm max-w-xs mx-auto">Funds move via blockchain and land in your wallet in minutes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: Withdrawal Rules & Transparency Table */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-[#050c18] rounded-xl overflow-hidden border border-gray-800">
                        <div className="p-6 bg-gradient-to-r from-gray-900 to-[#050c18] border-b border-gray-800 flex items-center gap-3">
                            <Shield size={20} className="text-[var(--color-gold)]" />
                            <h3 className="text-xl font-bold text-white">Withdrawal Policy</h3>
                        </div>
                        <div className="divide-y divide-gray-800">
                            <div className="grid grid-cols-2 p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Minimum Withdrawal</span>
                                <span className="text-white font-bold text-right">$50</span>
                            </div>
                            <div className="grid grid-cols-2 p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Processing Fee</span>
                                <span className="text-[var(--color-gold)] font-bold text-right">0% <span className="text-gray-500 font-normal text-xs">(Standard Network fees apply)</span></span>
                            </div>
                            <div className="grid grid-cols-2 p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Available Networks</span>
                                <span className="text-white font-bold text-right">USDT (TRC20) & USDT (ERC20)</span>
                            </div>
                            <div className="grid grid-cols-2 p-6 hover:bg-white/5 transition-colors">
                                <span className="text-gray-400 font-medium">Withdrawal Hours</span>
                                <span className="text-white font-bold text-right">24/7 Requests <span className="text-gray-500 font-normal text-xs block sm:inline">(Processed Mon-Fri)</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: The "Security First" Whitelisting Notice */}
            <section className="py-12 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="border-l-4 border-[var(--color-gold)] bg-[#2a2305] p-6 rounded-r-lg flex items-start gap-4">
                        <AlertTriangle size={24} className="text-[var(--color-gold)] shrink-0 mt-1" />
                        <div>
                            <h4 className="text-[var(--color-gold)] font-bold uppercase tracking-wider text-sm mb-2">Security Notice</h4>
                            <p className="text-yellow-100/80 leading-relaxed text-sm">
                                To protect your funds from unauthorized access, we only allow withdrawals to <span className="text-white font-bold">verified, whitelisted wallet addresses</span>. Ensure your profile is fully KYC-verified before your first withdrawal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 6: Withdrawal FAQ */}
            <section className="py-24 bg-[#0a1629]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-2xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-[#050c18] p-6 rounded-lg border border-gray-800">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <HelpCircle size={18} className="text-blue-500" /> Why is my withdrawal pending?
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                All withdrawals undergo a manual security check to ensure account safety. This usually takes <span className="text-white">2-4 hours</span>. If requested outside business hours, it will be processed the next business day.
                            </p>
                        </div>

                        <div className="bg-[#050c18] p-6 rounded-lg border border-gray-800">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <HelpCircle size={18} className="text-blue-500" /> Can I withdraw to a different person's wallet?
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                <span className="text-red-400 font-bold">No.</span> To prevent money laundering (AML) and ensure security, we only process withdrawals to wallets owned by the account holder matching the KYC documents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Withdrawals;
