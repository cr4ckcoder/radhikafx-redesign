import React from 'react';
import { Shield, TrendingDown, Clock, Headphones, Globe, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, hoverStat, size = 'default' }) => {
    return (
        <div className={`p-8 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-gold)] transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative ${size === 'large' ? 'md:col-span-2' : ''
            } ${size === 'tall' ? 'md:row-span-2' : ''}`}>

            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] rounded-full filter blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 mb-6 rounded-lg bg-[rgba(14,35,78,0.5)] flex items-center justify-center text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-white)] mb-3">{title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">{description}</p>

                    {/* Interactive Hover Content */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <div className="pt-4 border-t border-[var(--glass-border)] flex items-center gap-3">
                            <div className="h-1 w-8 bg-[var(--color-gold)] rounded-full"></div>
                            <span className="text-[var(--color-gold)] font-bold text-sm tracking-wider uppercase">{hoverStat}</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-[var(--color-navy)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">
                        Why Trade with <span className="text-[var(--color-gold)]">Radhika Capital Markets</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We provide the infrastructure, security, and conditions you need to succeed in the global markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Shield}
                        title="Regulated & Reliable"
                        description="Fully licensed and regulated by the FSC Mauritius. Your funds are segregated and protected."
                        hoverStat="License #GB25204826"
                        size="large"
                    />
                    <FeatureCard
                        icon={TrendingDown}
                        title="Ultra-Low Spreads"
                        description="Trade with spreads starting from 0.0 pips on major pairs."
                        hoverStat="Raw Spreads from 0.0"
                    />
                    <FeatureCard
                        icon={Clock}
                        title="Instant Withdrawals"
                        description="Get access to your profits instantly with our automated processing system."
                        hoverStat="Processing < 1 Hour"
                        size="tall"
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Global Markets Access"
                        description="Trade Forex, Indices, Commodities, and Crypto from a single account."
                        hoverStat="500+ Tradable Assets"
                    />
                    <FeatureCard
                        icon={Lock}
                        title="Secure Funds"
                        description="Institutional-grade security with segregated accounts."
                        hoverStat="Tier-1 Bank Segregation"
                    />
                    <FeatureCard
                        icon={Headphones}
                        title="24/7 Support"
                        description="Dedicated support team available round the clock to assist you."
                        hoverStat="Response Speed < 30sec"
                        size="large"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
