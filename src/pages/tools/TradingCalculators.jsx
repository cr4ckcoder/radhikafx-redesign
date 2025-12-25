import React, { useEffect, memo } from 'react';
import { Calculator, PieChart, TrendingUp, Anchor, Shield, Smartphone, Zap, CheckCircle } from 'lucide-react';

// Reusable FXVerify Widget Wrapper
const FXVerifyWidget = memo(({ config }) => {
    useEffect(() => {
        // Function to load the remote script once if not already loaded
        const loadScript = () => {
            if (!document.getElementById('fxverify-remote-script')) {
                const script = document.createElement('script');
                script.id = 'fxverify-remote-script';
                script.src = 'https://fxverify.com/Content/remote/remote-widgets.js';
                script.async = true;
                script.onload = initializeWidget;
                document.body.appendChild(script);
            } else {
                initializeWidget();
            }
        };

        const initializeWidget = () => {
            if (window.RemoteCalc) {
                window.RemoteCalc(config);
            } else {
                // Retry if script loaded but function not ready (rare race condition)
                setTimeout(initializeWidget, 500);
            }
        };

        loadScript();
    }, [config]);

    return <div id={config.ContainerId} className="w-full min-h-[450px]"></div>;
});


const TradingCalculators = () => {
    // Configurations from user's widgetcodes.txt
    const pipConfig = { "Url": "https://fxverify.com", "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=", "BottomPaneStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7", "ButtonStyle": "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==", "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==", "TextboxStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7", "HighlightColor": "rgba(0,0,0,1.0)", "IsDisplayTitle": false, "IsShowChartLinks": false, "IsShowEmbedButton": false, "CompactType": "large", "Calculator": "pip-value-calculator", "ContainerId": "pip-value-calculator-640466" };

    const marginConfig = { "Url": "https://fxverify.com", "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=", "BottomPaneStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7", "ButtonStyle": "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==", "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==", "TextboxStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7", "HighlightColor": "rgba(0,0,0,1.0)", "IsDisplayTitle": false, "IsShowChartLinks": false, "IsShowEmbedButton": false, "CompactType": "large", "Calculator": "margin-calculator", "ContainerId": "margin-calculator-716937" };

    const profitConfig = { "Url": "https://fxverify.com", "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=", "BottomPaneStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7", "ButtonStyle": "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==", "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==", "TextboxStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7", "HighlightColor": "rgba(0,0,0,1.0)", "IsDisplayTitle": false, "IsShowChartLinks": false, "IsShowEmbedButton": false, "CompactType": "large", "Calculator": "profit-calculator", "ContainerId": "profit-calculator-89230" };

    const fibConfig = { "Url": "https://fxverify.com", "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=", "BottomPaneStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7", "ButtonStyle": "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==", "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==", "TextboxStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7", "HighlightColor": "rgba(0,0,0,1.0)", "IsDisplayTitle": false, "IsShowEmbedButton": false, "CompactType": "large", "Calculator": "fibonacci-calculator", "ContainerId": "fibonacci-calculator-318968" };

    const positionSizeConfig = { "Url": "https://fxverify.com", "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=", "BottomPaneStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7", "ButtonStyle": "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==", "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==", "TextboxStyle": "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7", "HighlightColor": "rgba(0,0,0,1.0)", "IsDisplayTitle": false, "IsShowChartLinks": false, "IsShowEmbedButton": false, "CompactType": "large", "Calculator": "position-size-calculator", "ContainerId": "position-size-calculator-544062" };

    return (
        <div className="bg-[var(--color-navy)] min-h-screen pt-20 md:pt-40 font-[var(--font-body)] text-white">

            {/* Block 1: The "Risk-First" Hero */}
            <section className="py-20 bg-[var(--color-navy)] border-b border-[var(--glass-border)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                        <Zap size={14} /> Real-Time Market Data
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)]">
                        Precision Tools for <br /> <span className="text-[var(--color-gold)]">Professional Risk Management</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Eliminate guesswork. Calculate your margins, pip values, and potential profits in seconds with our suite of integrated trading calculators.
                    </p>
                </div>
            </section>

            {/* Block 2: The "Big Three" Calculators */}
            <section className="py-20 bg-[#02040a]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Calculator 1: Pip Value */}
                        <div className="bg-[var(--color-navy)] rounded-xl border border-[var(--glass-border)] p-2 shadow-lg hover:shadow-2xl transition-all">
                            <div className="p-6 pb-2 border-b border-[var(--glass-border)] flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><Calculator size={20} className="stroke-gold-gradient" /> Pip Value Calculator</h3>
                                <div className="text-xs text-gray-500 font-mono">ID: PIP-01</div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-400 mb-4 px-2">Know exactly how much each movement is worth in your account currency.</p>
                                <FXVerifyWidget config={pipConfig} />
                            </div>
                        </div>

                        {/* Calculator 2: Margin */}
                        <div className="bg-[var(--color-navy)] rounded-xl border border-[var(--glass-border)] p-2 shadow-lg hover:shadow-2xl transition-all relative">
                            {/* Most Popular Tag */}
                            <div className="absolute top-[-10px] right-4 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-3 py-1 rounded-full border border-yellow-500 z-10 shadow-lg">
                                Essential
                            </div>
                            <div className="p-6 pb-2 border-b border-[var(--glass-border)] flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><PieChart size={20} className="stroke-gold-gradient" /> Margin Calculator</h3>
                                <div className="text-xs text-gray-500 font-mono">ID: MRG-02</div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-400 mb-4 px-2">Calculate the required collateral needed to open a position based on leverage.</p>
                                <FXVerifyWidget config={marginConfig} />
                            </div>
                        </div>

                        {/* Calculator 3: Profit */}
                        <div className="bg-[var(--color-navy)] rounded-xl border border-[var(--glass-border)] p-2 shadow-lg hover:shadow-2xl transition-all">
                            <div className="p-6 pb-2 border-b border-[var(--glass-border)] flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><TrendingUp size={20} className="stroke-gold-gradient" /> Profit Calculator</h3>
                                <div className="text-xs text-gray-500 font-mono">ID: PRF-03</div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-400 mb-4 px-2">Project your potential earnings or losses before you execute a trade.</p>
                                <FXVerifyWidget config={profitConfig} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Block 3: Technical Analysis Tools (Secondary) */}
            <section className="py-20 bg-[var(--color-navy)] border-t border-[var(--glass-border)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Technical Analysis Tools</h2>
                        <p className="text-gray-400 text-lg">Advanced identifiers for support, resistance, and retracement levels.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-[#02040a] rounded-xl border border-[var(--glass-border)] p-6">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><TrendingUp size={18} className="text-blue-400" /> Fibonacci Calculator</h3>
                            <div className="bg-[var(--color-navy)] rounded border border-[var(--glass-border)] overflow-hidden mt-4">
                                <FXVerifyWidget config={fibConfig} />
                            </div>
                        </div>
                        <div className="bg-[#02040a] rounded-xl border border-[var(--glass-border)] p-6">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Calculator size={18} className="text-green-400" /> Position Size Calculator</h3>
                            <div className="bg-[var(--color-navy)] rounded border border-[var(--glass-border)] overflow-hidden mt-4">
                                <FXVerifyWidget config={positionSizeConfig} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: Why Use & Safe Trading */}
            <section className="py-20 bg-[#02040a] border-t border-[var(--glass-border)]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Why Use Our Calculators */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Why Use Our Tools?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Real-Time Data Sync</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Our tools sync directly with live interbank market prices, ensuring your calculations are based on the immediate market reality, not delayed feeds.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center text-[var(--color-gold)] shrink-0">
                                        <Smartphone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Leverage Synchronization</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Calculators are pre-configured to match Radhika Capital Markets account leverage limits (up to 1:500 for Standard accounts), giving you accurate margin requirements.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 shrink-0">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">USDT Native Results</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Since our base accounts are USDT, all profit and value projections are instantly displayed in your precise account currency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Safe Trading Info Box */}
                        <div className="bg-gradient-to-br from-[var(--color-navy)] to-[#0a1629] rounded-2xl p-8 border border-[var(--glass-border)] flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]"></div>

                            <Shield className="stroke-gold-gradient mb-6 relative z-10" size={48} />

                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Pro Tip: Smart Risk Sizing</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                                Never risk more than <strong>1–2% of your account balance</strong> on a single trade. Professional traders prioritize capital preservation above all else.
                            </p>

                            <div className="bg-[#02040a]/50 p-6 rounded-xl border border-[var(--glass-border)] relative z-10">
                                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Example</div>
                                <p className="text-white font-mono text-sm">
                                    Account: $10,000 <br />
                                    Max Risk (2%): $200 <br />
                                    Stop Loss: 50 Pips <br />
                                    <span className="text-[var(--color-gold)]">Recommended Lot Size: ~0.40 Lots</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default TradingCalculators;
