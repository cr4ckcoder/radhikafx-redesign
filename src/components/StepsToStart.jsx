import React from 'react';
import { UserPlus, CreditCard, TrendingUp } from 'lucide-react';

const Step = ({ number, icon: Icon, title, description }) => {
    return (
        <div className="relative flex flex-col items-center text-center z-10 w-full max-w-xs mx-auto">
            <div className="w-20 h-20 rounded-full bg-[var(--color-navy)] border-2 border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)] mb-6 shadow-[0_0_20px_rgba(233,219,141,0.2)]">
                <Icon size={32} />
            </div>
            <div className="absolute top-0 right-0 bg-[var(--color-gold)] text-[var(--color-navy)] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transform translate-x-1/2 -translate-y-1/4">
                {number}
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-white)] mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const StepsToStart = () => {
    return (
        <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">
                        Start Trading in 3 Simple Steps
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <Step
                            number="1"
                            icon={UserPlus}
                            title="Register"
                            description="Fill out the simple registration form and verify your identity in minutes."
                        />
                        <Step
                            number="2"
                            icon={CreditCard}
                            title="Fund"
                            description="Deposit funds instantly via our secure payment methods with 0% fees."
                        />
                        <Step
                            number="3"
                            icon={TrendingUp}
                            title="Trade"
                            description="Access 500+ markets and start trading with competitive conditions."
                        />
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                        Create Account Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StepsToStart;
