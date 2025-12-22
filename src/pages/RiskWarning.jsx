import React from 'react';
import { AlertTriangle, AlertOctagon } from 'lucide-react';

const RiskWarning = () => {
    return (
        <div className="bg-[#02040a] min-h-screen pt-20 pb-16 font-sans text-gray-300">

            {/* Block 1: The Cautionary Banner (Hero) */}
            <div className="bg-gradient-to-b from-[var(--color-navy)] to-[#1a0f0f] border-b border-red-900/50 text-white py-16 px-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10 text-red-600">
                    <AlertTriangle size={300} />
                </div>
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 mb-6 bg-red-900/20 rounded-full border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                        <AlertOctagon size={32} className="text-red-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight text-white">
                        Risk Warning Notice
                    </h1>
                    <p className="text-red-200/80 font-mono text-sm tracking-wide uppercase opacity-80 mb-2">
                        Radhika Capital Markets Ltd | Company No. 224657
                    </p>
                    <p className="text-red-200/60 text-xs font-mono">
                        Version 1 | Effective Date: 18/08/2025
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-6 max-w-4xl -mt-8 relative z-20">
                <div className="bg-[#0a1629] rounded-lg shadow-2xl p-8 md:p-12 border-t-8 border-[var(--color-gold)] border border-gray-800">

                    {/* 1. GENERAL RISK DISCLOSURE */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-[var(--color-gold)] opacity-50">01.</span>
                            General Risk Disclosure
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            This notice is provided to you because you are considering dealing with Radhika Capital Markets Ltd (“the Company”) in Financial Instruments in the form of Foreign Exchange (Forex) and Contracts for Difference (CFDs).
                        </p>
                        <div className="bg-[#1a0f0f] border-l-4 border-red-500 p-4">
                            <p className="text-gray-300 font-medium leading-relaxed">
                                Trading in Forex and CFDs is highly speculative, involves a significant level of risk, and is not suitable for all investors. You should not engage in trading these products unless you understand the nature of the transactions you are entering into and the true extent of your exposure to the risk of loss.
                            </p>
                        </div>
                    </div>

                    {/* 2. THE NATURE OF CFDs AND LEVERAGE */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-[var(--color-gold)] opacity-50">02.</span>
                            The Nature of CFDs and Leverage
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            CFDs are complex financial instruments and do not involve the delivery of the underlying asset. They are traded on "Margin" or "Leverage," which means a small deposit (the Margin) can lead to a large position in the market.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[#050c18] p-6 rounded-lg border border-gray-800">
                                <h3 className="font-bold text-[var(--color-gold)] mb-2">Magnified Gains and Losses</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    While leverage can result in significant profits, it can also result in significant losses that can exceed your initial deposit.
                                </p>
                            </div>
                            <div className="bg-[#050c18] p-6 rounded-lg border border-gray-800">
                                <h3 className="font-bold text-[var(--color-gold)] mb-2">Volatility</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Financial markets can be highly volatile. Prices can move rapidly against your interests, particularly during economic news releases or global events.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. TECHNICAL AND EXECUTION RISKS */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-[var(--color-gold)] opacity-50">03.</span>
                            Technical and Execution Risks
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Trading through an electronic platform involves risks associated with system failure, including hardware and software failure and internet connectivity issues.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="min-w-[4px] bg-[var(--color-gold)]"></div>
                                <div>
                                    <strong className="block text-white">Slippage</strong>
                                    <span className="text-gray-400 text-sm">During periods of high volatility, the price at which a trade is executed may differ from the price requested. This is known as "Slippage."</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="min-w-[4px] bg-[var(--color-gold)]"></div>
                                <div>
                                    <strong className="block text-white">Gapping</strong>
                                    <span className="text-gray-400 text-sm">Prices may "Gap" (jump from one price to another without trading in between), especially when markets reopen after a weekend or holiday.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="min-w-[4px] bg-[var(--color-gold)]"></div>
                                <div>
                                    <strong className="block text-white">Execution Latency</strong>
                                    <span className="text-gray-400 text-sm">While the Company strives for ultra-low latency, delays in communication can affect the speed at which your orders are filled.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 4. MARKET RISKS AND LIQUIDITY */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-[var(--color-gold)] opacity-50">04.</span>
                            Market Risks and Liquidity
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            The Client should be aware that under certain market conditions, it may be difficult or impossible to liquidate a position. This may occur, for example, at times of rapid price movement if the price rises or falls in one trading session to such an extent that under the rules of the relevant exchange, trading is suspended or restricted.
                        </p>
                        <div className="bg-[#1a1005] p-4 border border-orange-900/30 rounded">
                            <strong className="block text-orange-400 mb-1">Currency Risk</strong>
                            <p className="text-sm text-orange-300/80">
                                If you trade in a currency other than your account base currency (USDT), your profits or losses may be affected by fluctuations in exchange rates.
                            </p>
                        </div>
                    </div>

                    {/* 5. NO FINANCIAL ADVICE */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-[var(--color-gold)] opacity-50">05.</span>
                            No Financial Advice
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Radhika Capital Markets Ltd provides an execution-only service. We do not provide financial, investment, legal, or tax advice. Any market analysis, news, or charts provided on our website or platforms are for general information purposes only and do not constitute a recommendation to buy or sell any financial instrument.
                        </p>
                    </div>

                    {/* 6. CLIENT RESPONSIBILITY */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-[var(--color-gold)] opacity-50">06.</span>
                            Client Responsibility
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">It is the Client’s responsibility to:</p>
                        <ul className="list-none space-y-2">
                            {['Maintain sufficient margin in their account to keep positions open.', 'Understand the mechanics of the MetaTrader 5 (MT5) platform.', 'Ensure the security of their login credentials and passwords.', 'Seek independent financial advice if they do not understand the risks involved.'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 7. REGULATORY DISCLOSURE */}
                    <div className="bg-[#050c18] p-8 rounded-lg text-center border border-gray-800">
                        <h2 className="text-xl font-bold text-white mb-2">07. Regulatory Disclosure</h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Radhika Capital Markets Ltd is authorized and regulated by the Financial Services Commission (FSC), Mauritius under Licence No. GB25204826. We operate under strict regulatory oversight to ensure transparency and client protection.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RiskWarning;
