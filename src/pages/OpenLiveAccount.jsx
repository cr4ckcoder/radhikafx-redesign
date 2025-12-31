import React, { useEffect } from 'react';
import {
    Lock, ChevronRight, CheckCircle, Globe, Building2, User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LiveAccountForm from '../components/LiveAccountForm';

const OpenLiveAccount = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#091830] font-[var(--font-body)] pt-20 md:pt-40">
            {/* Block 1: The "Low-Friction" Hero */}
            <section className="relative bg-[#050A14] py-16 border-b border-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2070&auto=format&fit=crop')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050A14]/80 to-[#091830]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-white mb-4">
                        Start Your Trading Journey <span className="text-gold-gradient">in 3 Simple Steps</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-6">Join thousands of traders globally. Registration takes less than 2 minutes.</p>
                    <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-bold border border-green-500/20">
                        <CheckCircle size={16} /> No credit card required for registration
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* LEFT: The Multi-Step Form */}
                        <div className="lg:col-span-8">
                            <LiveAccountForm />
                        </div>

                        {/* RIGHT: The "Peace of Mind" Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Privacy Guarantee */}
                            <div className="bg-[#0a1629] border border-gray-800 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <Lock className="text-[var(--color-gold)] shrink-0" size={24} />
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Privacy Guarantee</h4>
                                        <p className="text-sm text-gray-400">Your data is 256-bit SSL encrypted and will never be shared with third parties.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Regulated Status */}
                            <div className="bg-[#0a1629] border border-gray-800 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <Building2 className="text-[var(--color-gold)] shrink-0" size={24} />
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Regulated Broker</h4>
                                        <p className="text-sm text-gray-400">Radhika Capital Markets is a fully licensed broker (FSC Mauritius).</p>
                                    </div>
                                </div>
                            </div>

                            {/* Human Help */}
                            <div className="bg-[#0a1629] border border-gray-800 rounded-xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <User size={100} />
                                </div>
                                <h4 className="text-white font-bold mb-2">Need help?</h4>
                                <p className="text-sm text-gray-400 mb-4">Our onboarding specialists are ready to assist you.</p>
                                <Link to="/contact-us" className="text-gold-gradient text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Contact Support <ChevronRight size={16} />
                                </Link>
                            </div>

                            {/* Info Block */}
                            <div className="bg-gradient-to-br from-[#0a1629] to-[#0fd176]/10 border border-[#0fd176]/20 rounded-xl p-6">
                                <h4 className="text-white font-bold mb-3 border-b border-gray-700 pb-2">Why join us?</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#0fd176]" /> FSC Regulated</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#0fd176]" /> 24/7 Global Support</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#0fd176]" /> Instant Funding</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Block 4: The "Social Proof" Footer */}
            <section className="py-10 border-t border-gray-900 bg-[#050A14]">
                <div className="container mx-auto px-6 text-center">
                    <p className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                        <Globe size={16} className="text-[var(--color-gold)]" />
                        Over <span className="text-white font-bold">5,000+ traders</span> joined us this month. Your gateway to global markets is one click away.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default OpenLiveAccount;
