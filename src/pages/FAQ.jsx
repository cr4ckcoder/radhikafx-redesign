import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, BookOpen, Monitor, CreditCard, TrendingUp, HelpCircle } from 'lucide-react';

const FAQData = [
    {
        id: 'getting-started',
        category: 'Getting Started',
        icon: <BookOpen size={20} />,
        questions: [
            {
                q: "Do I need to register with Radhika Capital Markets to access MT5?",
                a: "Yes. To use MetaTrader 5 (MT5)—the industry-leading platform for forex, commodities, indices, and CFDs—you'll need to register an account with Radhika Capital Markets. Registration gives you secure login access, live market data, and the ability to place trades with our competitive spreads and fast execution."
            },
            {
                q: "Can I open a demo account first?",
                a: "Absolutely. Radhika Capital Markets offers free demo accounts so you can explore MT5's features and test your strategies in a risk-free environment. Demo accounts mirror real-market conditions, giving you the confidence to transition into live trading when ready."
            },
            {
                q: "Is forex trading considered halal?",
                a: "Yes, we offer Swap-Free (Islamic) account options for traders who follow Sharia principles, ensuring no interest is earned or paid on overnight positions."
            }
        ]
    },
    {
        id: 'platforms-tools',
        category: 'Platforms & Tools',
        icon: <Monitor size={20} />,
        questions: [
            {
                q: "Is MT5 compatible with phones and tablets?",
                a: "Yes. MT5 works seamlessly across iOS, Android, and all desktop platforms, allowing you to trade anywhere with full functionality. Whether you prefer the convenience of a smartphone or the larger screen of a tablet or desktop, MT5 delivers real-time quotes, interactive charts, and advanced trading tools."
            },
            {
                q: "Which trading platforms are available in the UAE?",
                a: "Radhika Capital Markets provides the MetaTrader 5 (MT5) platform, which is fully accessible and highly popular among traders in the UAE and globally."
            },
            {
                q: "Why use VPS hosting for forex trading?",
                a: "A VPS (Virtual Private Server) provides stable connectivity and quick execution, ensuring your platform stays online 24/7. This is especially critical for traders using automated strategies or Expert Advisors (EAs)."
            }
        ]
    },
    {
        id: 'funding-withdrawals',
        category: 'Funding & Withdrawals',
        icon: <CreditCard size={20} />,
        questions: [
            {
                q: "What payment options are available?",
                a: "We currently accept USDT (Tether) via TRC20 and ERC20 networks. We are working on adding more payment methods to serve you better."
            },
            {
                q: "How long do withdrawals take?",
                a: "USDT withdrawals are typically processed within 24 hours. Once processed by our team, the blockchain transfer is usually confirmed in minutes."
            }
        ]
    },
    {
        id: 'trading-knowledge',
        category: 'Trading Knowledge & Strategies',
        icon: <TrendingUp size={20} />,
        questions: [
            {
                q: "What are the market hours for forex trading in the UAE?",
                a: "Forex runs 24 hours during the business week (Monday–Friday). Specific sessions like the London/New York overlap see the highest activity."
            },
            {
                q: "What is a non-repainting indicator?",
                a: "A non-repainting indicator doesn't change its past values or signals once a candle closes, making it more reliable for backtesting and day trading."
            },
            {
                q: "What are some common forex trading strategies?",
                a: "Examples include trend-following, range trading, and breakout setups. We recommend exploring our blog for deep dives into these strategies."
            },
            {
                q: "How does forex differ from commodity trading?",
                a: "They differ in market drivers (interest rates vs. supply/demand), volatility levels, and the actual instruments traded (currency pairs vs. physical goods like gold/oil)."
            }
        ]
    }
];

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState({}); // { categoryIndex: { questionIndex: boolean } }

    const toggleAccordion = (catIndex, qIndex) => {
        setOpenIndex(prev => ({
            ...prev,
            [catIndex]: {
                ...prev[catIndex],
                [qIndex]: !prev[catIndex]?.[qIndex]
            }
        }));
    };

    // Filter logic
    const filteredData = FAQData.map(category => {
        const filteredQuestions = category.questions.filter(q =>
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return { ...category, questions: filteredQuestions };
    }).filter(category => category.questions.length > 0);

    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)] min-h-screen">

            {/* Block 1: The Knowledge Hub Hero */}
            <section className="relative py-20 md:py-32 flex flex-col items-center justify-center text-center px-6 bg-[#02040a] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[rgba(2,4,10,0.8)] to-[rgba(2,4,10,0.4)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>

                <div className="relative z-10 max-w-3xl mx-auto w-full">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-8 backdrop-blur-md">
                        <HelpCircle size={16} className="text-[var(--color-gold)]" />
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Support Center</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        The Knowledge Hub
                    </h1>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="text-gray-400" size={20} />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-14 pr-6 py-5 bg-[#0a1629] border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] shadow-xl transition-all text-lg"
                            placeholder="Have a question? Search here..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar Navigation (Desktop) */}
                        <div className="hidden lg:block w-72 flex-shrink-0">
                            <div className="sticky top-32 bg-[#0a1629] rounded-2xl p-6 border border-gray-800 shadow-lg">
                                <h3 className="text-white font-bold mb-6 px-2">Jump to Category</h3>
                                <nav className="space-y-2">
                                    {FAQData.map((cat) => (
                                        <a
                                            key={cat.id}
                                            href={`#${cat.id}`}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors group"
                                        >
                                            <span className="group-hover:text-[var(--color-gold)] transition-colors">{cat.icon}</span>
                                            <span className="text-sm font-medium">{cat.category}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Questions Content */}
                        <div className="flex-grow space-y-16">
                            {filteredData.length > 0 ? (
                                filteredData.map((cat, catIndex) => (
                                    <div key={cat.id} id={cat.id} className="scroll-mt-32">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)]">
                                                {cat.icon}
                                            </div>
                                            <h2 className="text-2xl font-bold text-white">{cat.category}</h2>
                                        </div>

                                        <div className="space-y-4">
                                            {cat.questions.map((q, qIndex) => (
                                                <div
                                                    key={qIndex}
                                                    className="bg-[#0a1629] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700"
                                                >
                                                    <button
                                                        onClick={() => toggleAccordion(catIndex, qIndex)}
                                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                                    >
                                                        <span className="text-lg font-medium text-white pr-8">{q.q}</span>
                                                        {openIndex[catIndex]?.[qIndex] ? (
                                                            <ChevronDown className="text-[var(--color-gold)] flex-shrink-0" />
                                                        ) : (
                                                            <ChevronRight className="text-gray-500 flex-shrink-0" />
                                                        )}
                                                    </button>

                                                    <div
                                                        className={`px-6 pb-5 text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex[catIndex]?.[qIndex] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pb-0'}`}
                                                    >
                                                        <div className="border-t border-gray-800 pt-4">
                                                            {q.a}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-24 text-gray-500">
                                    <p className="text-xl">No results found for "{searchTerm}"</p>
                                    <p className="text-sm mt-2">Try searching for something else.</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-[#02040a] border-t border-gray-900 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl text-white font-bold mb-6">Still have questions?</h2>
                    <p className="text-gray-400 mb-8">Our support team is here to help you 24/7.</p>
                    <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-full hover:bg-white transition-colors">
                        Contact Support
                    </button>
                </div>
            </section>

        </div>
    );
};

export default FAQ;
