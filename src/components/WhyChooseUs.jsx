import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingDown, Clock, Headphones, Globe, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, hoverStat, size = 'default', index = 0, isVisible = false }) => {
    return (
        <div
            style={{ animationDelay: `${index * 0.1}s` }}
            className={`p-8 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-gold)] transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative ${isVisible ? 'animate-slide-up' : 'opacity-0'} ${size === 'large' ? 'md:col-span-2' : ''
                } ${size === 'tall' ? 'md:row-span-2' : ''}`}>

            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] rounded-full filter blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 mb-6 rounded-lg bg-[rgba(14,35,78,0.5)] flex items-center justify-center text-[var(--color-navy)] group-hover:scale-110 transition-transform">
                        <Icon size={24} className="stroke-gold-gradient" />
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
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger animation once
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="py-24 bg-[var(--color-navy)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">
                        Why Trade with <span className="text-gold-gradient">Radhika Capital Markets</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We provide the infrastructure, security, and conditions you need to succeed in the global markets.
                    </p>
                </div>

                <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Shield}
                        title="Regulated & Reliable"
                        description="Fully licensed and regulated by the FSC Mauritius. Your funds are segregated and protected."
                        hoverStat="License #GB25204826"
                        size="large"
                        index={0}
                        isVisible={isVisible}
                    />
                    <FeatureCard
                        icon={TrendingDown}
                        title="Ultra-Low Spreads"
                        description="Trade with spreads starting from 0.0 pips on major pairs."
                        hoverStat="Raw Spreads from 0.0"
                        index={1}
                        isVisible={isVisible}
                    />
                    <FeatureCard
                        icon={Clock}
                        title="Instant Withdrawals"
                        description="Get access to your profits instantly with our automated processing system."
                        hoverStat="Processing < 1 Hour"
                        size="tall"
                        index={2}
                        isVisible={isVisible}
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Global Markets Access"
                        description="Trade Forex, Indices, Commodities, and Crypto from a single account."
                        hoverStat="500+ Tradable Assets"
                        index={3}
                        isVisible={isVisible}
                    />
                    <FeatureCard
                        icon={Lock}
                        title="Secure Funds"
                        description="Institutional-grade security with segregated accounts."
                        hoverStat="Tier-1 Bank Segregation"
                        index={4}
                        isVisible={isVisible}
                    />
                    <FeatureCard
                        icon={Headphones}
                        title="24/7 Support"
                        description="Dedicated support team available round the clock to assist you."
                        hoverStat="Response Speed < 30sec"
                        size="large"
                        index={5}
                        isVisible={isVisible}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
