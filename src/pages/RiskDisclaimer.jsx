import React from 'react';
import { Download, Printer, ShieldCheck } from 'lucide-react';

const RiskDisclaimer = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-[#02040a] min-h-screen pt-24 md:pt-44 pb-16 font-sans text-gray-300">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header Actions */}
                <div className="flex justify-end gap-4 mb-8 no-print">
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded text-sm text-gray-400 hover:bg-white/5 transition-colors"
                    >
                        <Printer size={16} />
                        Print to PDF
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 btn-gold text-[var(--color-navy)] rounded text-sm font-bold hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all shadow-lg">
                        <Download size={16} />
                        Download Full Document
                    </button>
                </div>

                {/* Block 1: The Formal Hero */}
                <div className="border-b-2 border-gray-800 pb-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                                Website Disclaimer & Risk Disclosure
                            </h1>
                            <p className="text-sm text-gray-500 font-mono">
                                Document Version 1.0 | Effective Date: August 18, 2025
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#0a1629] px-4 py-2 rounded-lg border border-gray-800">
                            <ShieldCheck className="text-[var(--color-gold)]" size={24} />
                            <div className="text-xs">
                                <p className="font-bold text-white">FSC Regulated</p>
                                <p className="text-gray-400">Licence No. GB25204826</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Block 2: Regulatory Identity */}
                    <div className="bg-[#0a1629] p-6 rounded-lg border border-gray-800">
                        <h2 className="text-lg font-serif font-bold text-white mb-4 border-b border-gray-700 pb-2">
                            Regulatory Identity
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-[var(--color-gold)] mb-1 font-bold">Entity Name</p>
                                <p className="font-semibold text-gray-300">Radhika Capital Markets Ltd</p>
                                <p className="text-xs text-gray-500">Company No. 224657</p>
                            </div>
                            <div>
                                <p className="text-[var(--color-gold)] mb-1 font-bold">Regulator</p>
                                <p className="font-semibold text-gray-300">Financial Services Commission (FSC) of Mauritius</p>
                                <p className="text-xs text-gray-500">Licence No. GB25204826</p>
                            </div>
                            <div>
                                <p className="text-[var(--color-gold)] mb-1 font-bold">Authorization</p>
                                <p className="text-gray-300">Holder of Global Business Licence and Investment Dealer Licence</p>
                            </div>
                            <div>
                                <p className="text-[var(--color-gold)] mb-1 font-bold">Registered Office</p>
                                <p className="text-gray-300">Level 6, Ken Lee Building, 20 Edith Cavell Street,<br />Port Louis 11302, Mauritius</p>
                            </div>
                        </div>
                    </div>

                    {/* Block 3: The Risk Warning */}
                    <div className="border-l-4 border-red-500 bg-[#1a0f0f] p-6 rounded-r-lg">
                        <h2 className="text-red-500 font-bold mb-3 uppercase tracking-wide text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                            Risk Warning
                        </h2>
                        <p className="text-gray-300 leading-relaxed font-medium">
                            Trading in Forex, Commodities, and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work against you as well as for you. There is a possibility that you could sustain a loss of some or all of your initial investment.
                        </p>
                    </div>

                    {/* Block 4: Jurisdictional Restrictions */}
                    <div>
                        <h2 className="text-xl font-serif font-bold text-white mb-4">
                            Jurisdictional Restrictions
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Radhika Capital Markets Ltd is not licensed to provide services in jurisdictions where such distribution would be contrary to local law. It is the user's responsibility to comply with local regulations.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm bg-[#0a1629] p-4 rounded border border-[var(--color-gold)]/20">
                            <strong className="text-[var(--color-gold)]">Note:</strong> Services are explicitly restricted for residents of the USA, Canada, India, UAE, and other jurisdictions where local laws prohibit such services.
                        </p>
                    </div>

                    {/* Block 5: General Nature of Information */}
                    <div>
                        <h2 className="text-xl font-serif font-bold text-white mb-4">
                            General Nature of Information
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            All information on this website is of a general nature. It does not constitute personal financial advice or take into account your specific objectives or financial situation. You should seek independent advice if necessary.
                        </p>
                    </div>

                    {/* Block 6: Limitation of Liability */}
                    <div>
                        <h2 className="text-xl font-serif font-bold text-white mb-4">
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Radhika Capital Markets Ltd shall not be liable for any losses, damages, or costs incurred as a result of using the information or services provided on this website.
                        </p>
                    </div>

                </div>

                {/* Footer seal */}
                <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                    <div className="inline-block border-2 border-gray-800 rounded-full px-8 py-3">
                        <span className="font-serif italic text-gray-500">Official Document of Radhika Capital Markets Ltd</span>
                    </div>
                </div>
            </div>

            <style>
                {`
                    @media print {
                        .no-print {
                            display: none;
                        }
                        body {
                            background: white;
                        }
                        .container {
                            max-width: 100%;
                            padding: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default RiskDisclaimer;
