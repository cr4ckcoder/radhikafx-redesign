import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Layers, TrendingUp, Bitcoin, ArrowRight } from 'lucide-react';

const products = [
    {
        id: 'forex',
        title: 'Forex',
        icon: DollarSign,
        description: 'Trade 60+ currency pairs including Majors, Minors using our ultra-low spreads.',
        details: ['Spreads from 0.0 pips', 'Leverage up to 1:500', 'Deep Liquidity']
    },
    {
        id: 'commodities',
        title: 'Commodities',
        icon: Layers,
        description: 'Diversify your portfolio with Gold, Silver, Oil and other popular commodities.',
        details: ['No Commission on Gold', 'Long & Short Trading', 'Competitive Margins']
    },
    {
        id: 'indices',
        title: 'Indices',
        icon: TrendingUp,
        description: 'Access the world’s leading stock markets including S&P500, NASDAQ, and DAX.',
        details: ['Global Market Access', 'Fast Execution', 'Dividend Adjustments']
    },
    {
        id: 'crypto',
        title: 'Crypto',
        icon: Bitcoin,
        description: 'Trade the volatility of Bitcoin, Ethereum and other top cryptocurrencies 24/7.',
        details: ['Trade 24/7', 'No Digital Wallet Needed', 'Tight Spreads']
    }
];

const Products = () => {
    const [activeTab, setActiveTab] = useState(products[0].id);

    return (
        <section className="py-24 bg-[var(--color-dark)] relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[var(--color-navy)] opacity-30 transform -skew-y-3 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">
                        Trade the World's Markets
                    </h2>
                    <p className="text-gray-400">
                        One account, limiteless possibilities. Access major asset classes with superior conditions.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {products.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => setActiveTab(product.id)}
                            className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === product.id
                                    ? 'bg-[var(--color-gold)] text-[var(--color-navy)] shadow-lg shadow-[rgba(233,219,141,0.2)]'
                                    : 'bg-[rgba(255,255,255,0.05)] text-[var(--color-white)] hover:bg-[rgba(255,255,255,0.1)]'
                                }`}
                        >
                            <product.icon size={20} />
                            {product.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        {products.map((product) => (
                            product.id === activeTab && (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[rgba(14,35,78,0.6)] backdrop-blur-md rounded-2xl border border-[var(--glass-border)] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
                                >
                                    <div className="w-full md:w-1/3 flex justify-center">
                                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[rgba(233,219,141,0.1)] flex items-center justify-center text-[var(--color-gold)] shadow-[0_0_50px_rgba(233,219,141,0.2)]">
                                            <product.icon size={80} strokeWidth={1} />
                                        </div>
                                    </div>

                                    <div className="w-full md:w-2/3">
                                        <h3 className="text-3xl font-bold text-[var(--color-white)] mb-4">{product.title} Trading</h3>
                                        <p className="text-xl text-gray-300 mb-8">{product.description}</p>

                                        <ul className="mb-8 space-y-3">
                                            {product.details.map((detail, index) => (
                                                <li key={index} className="flex items-center text-gray-400">
                                                    <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full mr-3"></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>

                                        <button className="text-[var(--color-gold)] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                            Start Trading {product.title} <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Products;
