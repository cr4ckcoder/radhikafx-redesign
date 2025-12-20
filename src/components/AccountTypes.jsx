import React from 'react';
import { Check } from 'lucide-react';

const AccountCard = ({ type, price, spread, commission, featured = false }) => {
    return (
        <div className={`relative p-8 rounded-2xl flex flex-col h-full border transition-all duration-300 ${featured
                ? 'bg-[rgba(14,35,78,0.8)] border-[var(--color-gold)] shadow-[0_0_30px_rgba(233,219,141,0.15)] scale-105 z-10'
                : 'bg-[rgba(255,255,255,0.03)] border-[var(--glass-border)] hover:bg-[rgba(255,255,255,0.05)]'
            }`}>
            {featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--color-gold)] text-[var(--color-navy)] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--color-white)] mb-2">{type}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-400">Min Deposit</span>
                    <span className="text-3xl font-bold text-[var(--color-gold)]">{price}</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-300">
                    <Check size={16} className="text-[var(--color-gold)] mr-3" />
                    <span>Spread from <strong className="text-white">{spread}</strong></span>
                </li>
                <li className="flex items-center text-gray-300">
                    <Check size={16} className="text-[var(--color-gold)] mr-3" />
                    <span>Commission <strong className="text-white">{commission}</strong></span>
                </li>
                <li className="flex items-center text-gray-300">
                    <Check size={16} className="text-[var(--color-gold)] mr-3" />
                    <span>Leverage up to 1:500</span>
                </li>
                <li className="flex items-center text-gray-300">
                    <Check size={16} className="text-[var(--color-gold)] mr-3" />
                    <span>Swap Free Available</span>
                </li>
                <li className="flex items-center text-gray-300">
                    <Check size={16} className="text-[var(--color-gold)] mr-3" />
                    <span>Min Lot Size 0.01</span>
                </li>
            </ul>

            <button className={`w-full py-3 rounded-lg font-bold transition-colors ${featured
                    ? 'bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-white)]'
                    : 'bg-transparent border border-[var(--color-white)] text-[var(--color-white)] hover:bg-[rgba(255,255,255,0.1)]'
                }`}>
                Open Account
            </button>
        </div>
    );
};

const AccountTypes = () => {
    return (
        <section className="py-24 bg-[var(--color-dark)] relative">
            {/* Background Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-navy)] rounded-full filter blur-[150px] opacity-20"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">
                        Account Types for Every Trader
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose the account that best suits your trading style and experience level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <AccountCard
                        type="Standard"
                        price="$50"
                        spread="1.2 pips"
                        commission="$0"
                    />
                    <AccountCard
                        type="Pro"
                        price="$500"
                        spread="0.0 pips"
                        commission="$7/lot"
                        featured={true}
                    />
                    <AccountCard
                        type="Pro X"
                        price="$20,000"
                        spread="0.0 pips"
                        commission="$3.5/lot"
                    />
                </div>
            </div>
        </section>
    );
};

export default AccountTypes;
