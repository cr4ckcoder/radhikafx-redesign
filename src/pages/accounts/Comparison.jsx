import React, { useState, useEffect } from 'react';
import {
    Check, X, HelpCircle, ChevronDown, Info, ShieldCheck,
    CreditCard, DollarSign, Award, Target, Zap
} from 'lucide-react';

const Comparison = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Sticky header logic (simplified for sticky positioning via CSS, but state can be used for styling changes if needed)
            const offset = window.scrollY;
            if (offset > 400) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        { name: "Ideal For", standard: "Beginners & Retail", pro: "Active Traders", prox: "Scalpers & High Volume" },
        { name: "Min. Deposit", standard: "$100", pro: "$1,000", prox: "$10,000" },
        { name: "Spreads From", standard: "3.0 Pips", pro: "2.5 Pips", prox: "0.0 Pips (Raw)" },
        { name: "Commission", standard: "$0", pro: "$0", prox: "$3.50 / lot" },
        { name: "Max Leverage", standard: "1:500", pro: "1:200", prox: "1:200" },
        { name: "Platform", standard: "MT5", pro: "MT5", prox: "MT5" },
        { name: "Min. Lot Size", standard: "0.01 Lots", pro: "0.01 Lots", prox: "0.01 Lots" },
        { name: "Execution", standard: "STP", pro: "STP", prox: "ECN (Raw)" },
        { name: "Expert Advisors", standard: <Check size={20} className="mx-auto text-green-500" />, pro: <Check size={20} className="mx-auto text-green-500" />, prox: <span className="font-bold text-gold-gradient">Optimized</span> },
        { name: "Personal Manager", standard: "Email/Chat", pro: "Priority Support", prox: "Direct Relationship Mgr" },
    ];

    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: Hero Section */}
            <section className="py-20 text-center container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
                    Choose the Account That <br /><span className="text-gold-gradient">Matches Your Ambition.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    From retail beginners to institutional pros—we provide the environment you need to succeed.
                </p>
            </section>

            {/* Block 2: The Core Comparison Table */}
            <section className="pb-24 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="overflow-x-auto relative shadow-2xl rounded-t-xl">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="text-white sticky top-[80px] z-30 shadow-lg">
                                    <th className="p-6 bg-[#0a1629] text-left w-1/4 border-b border-gray-800">Feature</th>
                                    <th className="p-6 bg-[#0a1629]/90 backdrop-blur border-b border-gray-700 w-1/4">
                                        <div className="text-sm uppercase tracking-widest opacity-70 mb-1">Standard</div>
                                        <div className="text-xl font-bold">Retail</div>
                                    </th>
                                    <th className="p-6 bg-[#1a2b4b]/90 backdrop-blur border-b border-gray-600 w-1/4 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-[var(--color-gold)] text-black text-[10px] font-bold px-2 py-0.5 transform rotate-0">POPULAR</div>
                                        <div className="text-sm uppercase tracking-widest opacity-70 mb-1">Pro</div>
                                        <div className="text-xl font-bold">Active</div>
                                    </th>
                                    <th className="p-6 bg-[rgba(233,219,141,0.15)]/90 backdrop-blur border-b border-[var(--color-gold)] w-1/4">
                                        <div className="text-sm text-gold-gradient uppercase tracking-widest opacity-70 mb-1">Pro X</div>
                                        <div className="text-xl font-bold text-white">Elite</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#050c18] divide-y divide-gray-800 text-gray-300">
                                {features.map((row, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-5 text-left font-bold text-white border-r border-gray-800 group-hover:text-gold-gradient transition-colors pl-8">
                                            {row.name}
                                        </td>
                                        <td className="p-5 border-r border-gray-800">{row.standard}</td>
                                        <td className="p-5 border-r border-gray-800 bg-[#0a1629]/50 font-medium text-white">{row.pro}</td>
                                        <td className="p-5 font-bold text-white">{row.prox}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Block 3: Hidden Costs Transparency */}
            <section className="py-24 bg-[var(--color-dark)] relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 rounded-full mb-8 text-[var(--color-gold)]">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Transparency First</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-12">No Hidden Fees. No Surprise Requotes.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-gray-800 rounded-2xl bg-[#0a1629] hover:border-[var(--color-gold)] transition-colors group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:text-[var(--color-gold)] transition-colors">
                                <DollarSign size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Funding</h3>
                            <p className="text-gray-400 text-sm">Instant USDT deposits with <span className="text-white font-bold">0% processing fees</span>.</p>
                        </div>
                        <div className="p-8 border border-gray-800 rounded-2xl bg-[#0a1629] hover:border-[var(--color-gold)] transition-colors group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:text-[var(--color-gold)] transition-colors">
                                <CreditCard size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Withdrawal</h3>
                            <p className="text-gray-400 text-sm">Standard (24h), Pro (Same Day), Pro X (Priority).</p>
                        </div>
                        <div className="p-8 border border-gray-800 rounded-2xl bg-[#0a1629] hover:border-[var(--color-gold)] transition-colors group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:text-[var(--color-gold)] transition-colors">
                                <Check size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Islamic / Swap-Free</h3>
                            <p className="text-gray-400 text-sm">Available upon request for all account types.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: "Which one is right for me?" */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Which one is right for me?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Standard */}
                        <div className="bg-[#050c18] border-t-4 border-gray-500 p-8 rounded-b-xl hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <Target className="text-gray-500" size={24} />
                                <h3 className="text-xl font-bold text-white">I am New</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed italic">
                                "I am new to trading and want to start with a small amount while learning market dynamics."
                            </p>
                            <div className="mt-6 text-sm font-bold text-gray-500 uppercase tracking-wider">
                                Choose Standard
                            </div>
                        </div>

                        {/* Pro */}
                        <div className="bg-[#050c18] border-t-4 border-white p-8 rounded-b-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="text-white" size={24} />
                                <h3 className="text-xl font-bold text-white">I Trade Frequently</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed italic">
                                "I trade frequently and want better pricing and faster support without paying a per-trade commission."
                            </p>
                            <div className="mt-6 text-sm font-bold text-white uppercase tracking-wider">
                                Choose Pro
                            </div>
                        </div>

                        {/* Pro X */}
                        <div className="bg-[#050c18] border-t-4 border-[var(--color-gold)] p-8 rounded-b-xl hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="text-gold-gradient" size={24} />
                                <h3 className="text-xl font-bold text-white">I am a Pro</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed italic">
                                "I am a professional or algorithm user who needs the lowest possible spreads (Raw) to maximize my edge."
                            </p>
                            <div className="mt-6 text-sm font-bold text-gold-gradient uppercase tracking-wider">
                                Choose Pro X
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Global FAQ */}
            <section className="py-24 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Common Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-[#0a1629] p-6 rounded-lg border border-gray-800 hover:border-[var(--color-gold)] transition-colors">
                            <h3 className="text-white font-bold mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-[var(--color-gold)]" /> Can I change my account type later?</h3>
                            <p className="text-gray-400">Yes, you can upgrade at any time through your dashboard. Simply request an account type change or open a new sub-account.</p>
                        </div>
                        <div className="bg-[#0a1629] p-6 rounded-lg border border-gray-800">
                            <h3 className="text-white font-bold mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-[var(--color-gold)]" /> Do you offer a Demo for all types?</h3>
                            <p className="text-gray-400">Yes, you can simulate all conditions for free before going live. Select the account type you wish to test when creating your demo in MT5.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Comparison;
