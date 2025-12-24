import React, { useState, useEffect } from 'react';
import { Download, Printer, ShieldCheck, Lock, ExternalLink } from 'lucide-react';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('section-1');

    const sections = [
        { id: 'section-1', title: '1. Introduction' },
        { id: 'section-2', title: '2. Privacy Protection' },
        { id: 'section-3', title: '3. Data We Collect' },
        { id: 'section-4', title: '4. Processing Purposes' },
        { id: 'section-5', title: '5. Disclosure' },
        { id: 'section-6', title: '6. Storage & Retention' },
        { id: 'section-7', title: '7. Your Rights' },
        { id: 'section-8', title: '8. Legal Disclaimer' },
        { id: 'section-9', title: '9. Contact Us' },
    ];

    const handlePrint = () => {
        window.print();
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 200; // Offset

        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section.id);
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="bg-[#02040a] min-h-screen pt-24 md:pt-44 pb-16 font-sans text-gray-300">
            {/* Header / Hero Section */}
            <div className="bg-[#0a1629] border-b border-gray-800 mb-12">
                <div className="container mx-auto px-6 max-w-7xl py-12">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4 text-[var(--color-gold)]">
                                <ShieldCheck size={32} />
                                <span className="font-bold tracking-widest uppercase text-sm">Data Security & Clarity</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                                Privacy Policy
                            </h1>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-500 font-mono">
                                <p>Radhika Capital Markets Ltd | Company No. 224657</p>
                                <p className="hidden md:block">|</p>
                                <p>Version 1.0 | Effective Date: 18/08/2025</p>
                            </div>
                        </div>
                        <div className="flex gap-4 no-print">
                            <button
                                onClick={handlePrint}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm text-gray-400 hover:bg-white/5 transition-all shadow-sm"
                            >
                                <Printer size={18} />
                                Print Page
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 btn-gold text-[var(--color-navy)] rounded-lg text-sm font-bold hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all shadow-lg">
                                <Download size={18} />
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-16">

                {/* Sidebar Navigation */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                    <div className="sticky top-32">
                        <h3 className="font-bold text-[var(--color-gold)] text-sm uppercase tracking-wider mb-6 border-b-2 border-[var(--color-gold)] pb-2 inline-block">
                            Quick Links
                        </h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block w-full text-left px-4 py-3 text-sm rounded-lg transition-all ${activeSection === section.id
                                        ? 'bg-[var(--color-gold)] text-[var(--color-navy)] font-bold shadow-md translate-x-1'
                                        : 'text-gray-500 hover:text-[var(--color-gold)] hover:bg-white/5'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>

                        {/* Trust Indicator in Sidebar */}
                        <div className="mt-12 p-6 bg-[#0a1629] rounded-xl border border-gray-800 text-center">
                            <Lock className="mx-auto text-[var(--color-gold)] mb-3" size={24} />
                            <p className="text-xs text-white font-bold mb-1">SSL Secured</p>
                            <p className="text-[10px] text-gray-500">Your data is encrypted and protected.</p>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 max-w-4xl">
                    <div className="space-y-16">

                        {/* 1. INTRODUCTION */}
                        <section id="section-1" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">1</span>
                                Introduction
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Radhika Capital Markets Ltd ("the Company") is committed to protecting the privacy and confidentiality of all personal information collected from clients and prospective clients in the course of delivering our products, services, and related information.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Your privacy is important to us, and safeguarding your data is a core priority. This Privacy Policy outlines how we collect, use, manage, and protect personal information. It also describes your rights relating to your personal data. Our Privacy Policy is reviewed and updated regularly to remain compliant with applicable data protection laws and privacy regulations.
                            </p>
                        </section>

                        {/* 2. PRIVACY PROTECTION */}
                        <section id="section-2" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">2</span>
                                Privacy Protection
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Radhika Capital Markets Ltd respects the privacy of all clients and website visitors. We take reasonable steps to safeguard personal and confidential data in line with international data protection laws and regulations.
                            </p>
                            <div className="bg-[#0a1629] p-6 rounded-lg border border-gray-800">
                                <h3 className="font-bold text-white mb-4 text-sm uppercase">Compliance Measures</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2"></div>
                                        <span>Our staff are trained to handle personal information responsibly.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2"></div>
                                        <span>A Data Protection Officer is appointed to oversee compliance.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2"></div>
                                        <span>Your personal information is securely stored and access is restricted to authorized staff only.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 3. PERSONAL INFORMATION WE COLLECT */}
                        <section id="section-3" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">3</span>
                                Personal Information We Collect
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                As part of the account opening process or to access our services, you may be required to submit personal information. This includes, but is not limited to:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Identity Data", desc: "Full name, date of birth, place of birth, gender, nationality/citizenship." },
                                    { title: "Contact Data", desc: "Residential address, phone number, email address." },
                                    { title: "Financial Data", desc: "Source of funds, financial status, bank details, income, and assets." },
                                    { title: "Trading Data", desc: "Trading history, account balances, investment activity." },
                                    { title: "Verification Data", desc: "Identification documents (passport, driver’s license, national ID)." },
                                    { title: "Professional Data", desc: "Employment and professional details." },
                                    { title: "Technical Data", desc: "Location data and authentication details (e.g., signature)." },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 border border-gray-800 rounded-lg bg-[#050c18] hover:border-[var(--color-gold)]/30 transition-colors">
                                        <strong className="block text-[var(--color-gold)] text-sm mb-1">{item.title}</strong>
                                        <span className="text-sm text-gray-400">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-4 italic">
                                We may also collect information from third parties, payment providers, and publicly available sources.
                            </p>
                        </section>

                        {/* 4. PURPOSES FOR PROCESSING YOUR DATA */}
                        <section id="section-4" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">4</span>
                                Purposes for Processing Your Data
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                We process personal data based on the following legal grounds:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Performance of a Contract", desc: "To deliver products and services, process transactions, and manage your account." },
                                    { title: "Legal Obligations", desc: "To comply with AML (Anti-Money Laundering), KYC (Know Your Customer), tax, financial services, and corporate governance laws." },
                                    { title: "Legitimate Interests", desc: "Including risk management, IT security, business continuity, and fraud prevention." },
                                    { title: "Consent", desc: "Where you have explicitly consented, such as for marketing communications." },
                                    { title: "Marketing & Service Updates", desc: "To keep you informed of products, services, and promotions (you may opt out at any time)." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="min-w-[4px] bg-[var(--color-gold)] rounded-full"></div>
                                        <div>
                                            <strong className="text-white block mb-1">{item.title}</strong>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5. DISCLOSURE OF PERSONAL INFORMATION */}
                        <section id="section-5" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">5</span>
                                Disclosure of Personal Information
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                We will not disclose client information to third parties except:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4 marker:text-[var(--color-gold)]">
                                <li>Where required by law, regulation, or court order.</li>
                                <li>Where necessary for business functions (e.g., service providers, banks, auditors).</li>
                                <li>With your explicit consent.</li>
                            </ul>
                            <p className="text-sm font-semibold text-[var(--color-gold)]">
                                All disclosures are made on a strict need-to-know basis.
                            </p>
                        </section>

                        {/* 6. DATA STORAGE & RETENTION */}
                        <section id="section-6" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">6</span>
                                Data Storage & Retention
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Your personal data will be stored securely and retained for the duration of your relationship with us, plus any additional period required by law (typically five years after account closure, as per AML regulations).
                            </p>
                        </section>

                        {/* 7. YOUR RIGHTS */}
                        <section id="section-7" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">7</span>
                                Your Rights
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                You have the following rights regarding your personal data:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Access", desc: "The right to request a copy of the personal information we hold about you." },
                                    { title: "Correction", desc: "The right to request corrections to inaccurate or incomplete information." },
                                    { title: "Erasure", desc: "The right to request erasure of your data, subject to legal retention obligations." },
                                    { title: "Object", desc: "The right to object to certain processing activities, including marketing." },
                                    { title: "Withdrawal", desc: "The right to withdraw consent where processing is based on consent." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#050c18] p-4 rounded-lg shadow-sm border border-gray-800">
                                        <strong className="block text-[var(--color-gold)] mb-2">{item.title}</strong>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 8. LEGAL DISCLAIMER */}
                        <section id="section-8" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">8</span>
                                Legal Disclaimer
                            </h2>
                            <div className="bg-[#1a0f0f] border-l-4 border-red-500 p-6 rounded-r-lg">
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Radhika Capital Markets Ltd may disclose personal data if required by regulatory authorities, law enforcement, or applicable laws. The Company is not responsible for unauthorized use of your personal information due to negligence in safeguarding login credentials or passwords.
                                </p>
                            </div>
                        </section>

                        {/* 9. HOW TO CONTACT US */}
                        <section id="section-9" className="scroll-mt-32">
                            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-sm font-bold">9</span>
                                How to Contact Us
                            </h2>
                            <div className="bg-[#0a1629] text-white p-8 rounded-xl shadow-lg border border-[var(--color-gold)]/20">
                                <p className="mb-6 opacity-90">
                                    If you have questions about this Privacy Policy or the way your personal data is handled, please contact us at:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                                            <ExternalLink size={20} className="text-[var(--color-gold)]" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider opacity-60 text-gray-400">Email</p>
                                            <a href="mailto:info@radhikafx.com" className="font-bold hover:text-[var(--color-gold)] transition-colors">info@radhikafx.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                                            <ShieldCheck size={20} className="text-[var(--color-gold)]" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider opacity-60 text-gray-400">Address</p>
                                            <p className="font-medium">Level 6, Ken Lee Building, 20 Edith Cavell Street, Port Louis 11302, Mauritius.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Regulatory Note / Footer Seal */}
                    <div className="mt-20 pt-8 border-t border-gray-800 text-center">
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                            <strong>Regulatory Note:</strong> Radhika Capital Markets Ltd is authorized and regulated by the Financial Services Commission (FSC), Mauritius under Licence No. GB25204826.
                        </p>
                    </div>

                </div>
            </div>

            <style>
                {`
                    @media print {
                        .no-print {
                            display: none !important;
                        }
                        body {
                            background: white;
                        }
                        .container {
                            max-width: 100%;
                            padding: 0;
                        }
                        /* Hide sidebar in print */
                        .hidden.lg\\:block {
                            display: none !important;
                        }
                        .lg\\:w-3\\/4 {
                            width: 100% !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default PrivacyPolicy;
