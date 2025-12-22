import React, { useState, useEffect } from 'react';
import { Download, Printer, CheckCircle, ExternalLink, Shield } from 'lucide-react';

const TermsAndConditions = () => {
    const [activeSection, setActiveSection] = useState('section-1');
    const [agreed, setAgreed] = useState(false);

    const sections = [
        { id: 'section-1', title: '1. Introduction' },
        { id: 'section-2', title: '2. Services' },
        { id: 'section-3', title: '3. Risk Disclosure' },
        { id: 'section-4', title: '4. Client Categorisation' },
        { id: 'section-5', title: '5. Account Opening' },
        { id: 'section-6', title: '6. Trading Policies' },
        { id: 'section-7', title: '7. Fees & Charges' },
        { id: 'section-8', title: '8. Client Money' },
        { id: 'section-9', title: '9. AML & KYC' },
        { id: 'section-10', title: '10. Privacy Policy' },
        { id: 'section-11', title: '11. Intellectual Property' },
        { id: 'section-12', title: '12. Indemnity' },
        { id: 'section-13', title: '13. Termination' },
        { id: 'section-14', title: '14. Governing Law' },
        { id: 'section-15', title: '15. Contact' },
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
        <div className="bg-[#02040a] min-h-screen pt-24 pb-16 font-sans text-gray-300">
            {/* Header / Actions */}
            <div className="container mx-auto px-6 max-w-7xl mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-800 pb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                            Terms & Conditions / Client Agreement
                        </h1>
                        <p className="text-lg text-gray-400 mb-2">
                            Please read this agreement carefully before opening an account.
                        </p>
                        <p className="text-sm text-gray-500 font-mono">
                            Last Updated: August 2025 | Version 1.2
                        </p>
                    </div>
                    <div className="flex gap-4 no-print">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded text-sm text-gray-400 hover:bg-white/5 transition-colors"
                        >
                            <Printer size={16} />
                            Print Page
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 btn-gold text-[var(--color-navy)] font-bold rounded text-sm hover:opacity-90 transition-all shadow-lg">
                            <Download size={16} />
                            Download as PDF
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-12">

                {/* Block 2: Table of Contents (Sticky Sidebar) */}
                <div className="hidden lg:block w-1/4 relative">
                    <div className="sticky top-32 border-r-2 border-gray-800 pr-6">
                        <h3 className="font-bold text-[var(--color-gold)] text-xs uppercase tracking-wider mb-6">Table of Contents</h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block w-full text-left px-4 py-2 text-sm rounded transition-all ${activeSection === section.id
                                        ? 'btn-gold text-[var(--color-navy)] font-bold shadow-md'
                                        : 'text-gray-500 hover:text-[var(--color-gold)] hover:bg-white/5'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Block 3: Content Body */}
                <div className="lg:w-3/4">
                    <div className="space-y-16">

                        <section id="section-1">
                            <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                These Terms and Conditions ("Agreement") govern the relationship between Radhika Capital Markets Ltd ("RadhikaFX") and any individual or entity ("the Client") who opens a trading account or uses the services provided by RadhikaFX.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-400">
                                By accessing our website, opening an account, or trading on our platforms, you acknowledge that you have read, understood, and agreed to be bound by this Agreement.
                            </p>
                        </section>

                        <section id="section-2">
                            <h2 className="text-2xl font-bold text-white mb-6">2. Services Provided</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                Radhika Capital Markets is authorized to act as an Investment Dealer by the Financial Services Commission (FSC) of Mauritius. We provide execution-only services for transactions in Forex, Commodities, Indices, Shares, and Cryptocurrencies via Contracts for Difference (CFDs).
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-400 marker:text-[var(--color-gold)]">
                                <li>Execution of client orders on an "Execution Only" basis.</li>
                                <li>Acting as principal or agent in relation to client transactions.</li>
                                <li>Provision of trading platforms (e.g., MetaTrader 5).</li>
                                <li>Custody and safekeeping of client funds in segregated accounts.</li>
                            </ul>
                        </section>

                        {/* Standard Boilerplate Sections */}
                        <section id="section-3">
                            <h2 className="text-2xl font-bold text-white mb-6">3. Risk Disclosure</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                Trading leveraged products such as CFDs involves a high level of risk and may not be suitable for all investors. You should not risk more than you are prepared to lose. Before deciding to trade, you should ensure that you understand the risks involved taking into account your investment objectives and level of experience.
                            </p>
                        </section>

                        <section id="section-4">
                            <h2 className="text-2xl font-bold text-white mb-6">4. Client Categorisation</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                RadhikaFX categorises clients as Retail Clients or Professional Clients in accordance with applicable regulations. Retail Clients are afforded the highest level of protection. You have the right to request a different categorisation, but this may result in a lower level of protection.
                            </p>
                        </section>

                        <section id="section-5">
                            <h2 className="text-2xl font-bold text-white mb-6">5. Account Opening</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                To open an account, you must complete our online application form and provide all required Know Your Customer (KYC) documentation. We reserve the right to reject any application at our sole discretion without providing a reason.
                            </p>
                        </section>

                        <section id="section-6">
                            <h2 className="text-2xl font-bold text-white mb-6">6. Trading Policies</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                All trades are executed at market prices provided by our liquidity providers. We do not guarantee that your order will be filled at the exact price you requested (slippage may occur). We prohibit abusive trading strategies such as latency arbitrage.
                            </p>
                        </section>

                        <section id="section-7">
                            <h2 className="text-2xl font-bold text-white mb-6">7. Fees & Charges</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                Our services are subject to fees, commissions, spreads, and swap charges as detailed on our website and in the contract specifications. These costs may change from time to time.
                            </p>
                        </section>

                        <section id="section-8">
                            <h2 className="text-2xl font-bold text-white mb-6">8. Client Money</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                Funds deposited by the Client will be held in segregated bank accounts, separate from the company's own funds, in accordance with regulatory requirements.
                            </p>
                        </section>

                        <section id="section-9">
                            <h2 className="text-2xl font-bold text-white mb-6">9. AML & KYC</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                RadhikaFX complies strictly with Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) laws. Valid identification and proof of address are mandatory for all accounts. We report suspicious activities to relevant authorities.
                            </p>
                        </section>

                        <section id="section-10">
                            <h2 className="text-2xl font-bold text-white mb-6">10. Privacy Policy</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                We are committed to protecting your privacy and personal data. Your information is processed in accordance with our Privacy Policy and applicable data protection laws.
                            </p>
                        </section>

                        <section id="section-11">
                            <h2 className="text-2xl font-bold text-white mb-6">11. Intellectual Property</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                All content on the RadhikaFX website and trading platforms, including trademarks, logos, and software, is the property of Radhika Capital Markets Ltd or its licensors.
                            </p>
                        </section>

                        <section id="section-12">
                            <h2 className="text-2xl font-bold text-white mb-6">12. Indemnity</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                You agree to indemnify and hold RadhikaFX harmless from any losses, liabilities, costs, or expenses arising from your breach of this Agreement or your violation of any law or third-party rights.
                            </p>
                        </section>

                        <section id="section-13">
                            <h2 className="text-2xl font-bold text-white mb-6">13. Termination</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                Either party may terminate this Agreement at any time by giving written notice. Termination does not affect any accrued rights or obligations, including open positions which will be closed at current market prices.
                            </p>
                        </section>

                        <section id="section-14">
                            <h2 className="text-2xl font-bold text-white mb-6">14. Governing Law</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                This Agreement is governed by and construed in accordance with the laws of the Republic of Mauritius. The courts of Mauritius shall have exclusive jurisdiction to settle any disputes.
                            </p>
                        </section>

                        <section id="section-15">
                            <h2 className="text-2xl font-bold text-white mb-6">15. Contact</h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                If you have any questions regarding this Agreement, please contact our support team at <a href="mailto:support@radhikafx.com" className="text-[var(--color-gold)] hover:text-white font-bold transition-colors">support@radhikafx.com</a>.
                            </p>
                        </section>

                    </div>

                    {/* Block 4: The Regulatory Signature */}
                    <div className="mt-16 p-8 border-2 border-gray-800 rounded-lg bg-[#0a1629] flex items-start gap-4">
                        <Shield className="text-[var(--color-gold)] flex-shrink-0" size={32} />
                        <div>
                            <h4 className="font-bold text-white mb-1">Regulatory Information</h4>
                            <p className="text-gray-400">
                                Radhika Capital Markets is licensed and regulated by the Financial Services Commission, Mauritius as an Investment Dealer.<br />
                                <span className="font-mono text-sm mt-1 inline-block">Licence No: GB25204826</span>
                            </p>
                        </div>
                    </div>

                    {/* Block 5: Digital Acknowledgement */}
                    <div className="mt-12 p-8 bg-[var(--color-navy)] border border-[var(--color-gold)] rounded-lg text-white no-print shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <input
                                type="checkbox"
                                id="agree"
                                className="w-6 h-6 rounded border-gray-600 bg-black/50 text-[var(--color-gold)] focus:ring-[var(--color-gold)]"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <label htmlFor="agree" className="text-lg cursor-pointer select-none">
                                I, the undersigned, confirm that I have read, understood, and agreed to the terms and conditions set forth in this Agreement.
                            </label>
                        </div>
                        <button
                            disabled={!agreed}
                            className={`flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded font-bold text-lg transition-all ${agreed
                                ? 'btn-gold text-[var(--color-navy)] hover:scale-105 shadow-xl'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Open Live Account <ExternalLink size={20} />
                        </button>
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

export default TermsAndConditions;
