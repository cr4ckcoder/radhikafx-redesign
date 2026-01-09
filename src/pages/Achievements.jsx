import React from 'react';
import { Link } from 'react-router-dom';
import {
    Award, Star, Trophy, Users, Globe, ArrowRight, MapPin,
    Calendar, CheckCircle
} from 'lucide-react';

const Achievements = () => {
    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The Hero Section (The Statement) */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-black text-center px-6">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#091830] via-[rgba(2,4,10,0.8)] to-[rgba(2,4,10,0.4)]"></div>

                {/* Bokeh Golden Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,189,71,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>

                {/* Floating Particles/Stars */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--color-gold)] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[var(--color-gold)] rounded-full opacity-40 animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[var(--color-gold)] rounded-full opacity-20 animate-bounce-slow"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-[rgba(96,189,71,0.05)] border border-[rgba(96,189,71,0.2)] rounded-full mb-8 backdrop-blur-md">
                        <Trophy size={16} className="text-[var(--color-gold)]" />
                        <span className="text-gold-gradient text-xs font-bold uppercase tracking-[0.2em]">Excellence Defined</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-white mb-8 leading-tight">
                        Achievements & <br />
                        <span className="text-gold-gradient">Industry Recognition</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        At Radhika Capital Markets, we are proud to be recognized for our excellence and commitment to delivering exceptional services in the forex industry. Our dedication to providing top-tier trading experiences has earned us multiple prestigious awards.
                    </p>
                </div>
            </section>

            {/* Block 2: The Award Showcase (The "Golden Cards") */}
            <section className="py-24 bg-[#050505] relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {[
                            {
                                title: "BEST RETAIL FOREX BROKER OF THE YEAR 2025",
                                subtitle: "AT PROFX EXPO MENA, DUBAI",
                                icon: Trophy
                            },
                            {
                                title: "BEST FOREX TRADING EXPERIENCE 2025",
                                subtitle: "AWARDED AT FOREX TRADERS SUMMIT DUBAI",
                                icon: Award
                            },
                            {
                                title: "Active Participation in Forex Expo Dubai 2025",
                                subtitle: "Awarded for Forex Expo Dubai 2025",
                                icon: Users
                            }
                        ].map((award, index) => (
                            <div key={index} className="w-full bg-[#0a1629]/50 backdrop-blur-sm border border-[rgba(96,189,71,0.1)] rounded-2xl p-8 hover:border-[var(--color-gold)] transition-all duration-500 hover:transform hover:-translate-y-2 group shadow-2xl relative overflow-hidden flex flex-col items-center">
                                {/* Sash */}
                                <div className="absolute top-0 right-0 bg-[var(--color-gold)] text-black text-xs font-bold px-4 py-1 rounded-bl-lg z-20">
                                    2025 WINNER
                                </div>

                                <div className="relative z-10 w-full flex flex-col items-center flex-grow">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-gold)] to-[#4A8739] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(96,189,71,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <award.icon size={40} className="text-[#0a1629]" />
                                    </div>

                                    <h3 className="text-lg md:text-xl font-[var(--font-heading)] font-bold text-white text-center mb-3 uppercase leading-snug min-h-[3rem] flex items-center">{award.title}</h3>
                                    <div className="flex items-center justify-center gap-2 text-[var(--color-gold)] text-xs mb-0 font-semibold tracking-wide text-center uppercase">
                                        <MapPin size={12} /> {award.subtitle}
                                    </div>
                                </div>

                                {/* Background Texture */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-gold)] opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Block 3: The "In the Media" Logo Bar */}
            <section className="py-12 bg-black border-y border-gray-900">
                <div className="container mx-auto px-6">
                    <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-[0.3em] mb-8">Recognized By</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos with Text for now */}
                        <div className="text-2xl font-bold text-white font-[var(--font-heading)]">Pro<span className="text-gold-gradient">FX</span> Expo MENA, Dubai</div>
                        <div className="text-2xl font-bold text-white font-[var(--font-heading)]">FOREX <span className="text-gray-500">TRADERS</span> SUMMIT</div>
                        <div className="text-2xl font-bold text-white font-[var(--font-heading)]"><span className="text-gold-gradient">FOREX EXPO</span> Dubai </div>
                    </div>
                </div>
            </section>

            

            {/* Block 5: The "Next Chapter" Footer CTA */}
            <section className="py-24 bg-[#091830]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-[#4A8739] via-[var(--color-gold)] to-[#4A8739]">
                        <div className="bg-[#050505] rounded-[22px] px-8 py-16 text-center">
                            <h2 className="text-3xl md:text-5xl font-[var(--font-heading)] font-bold text-white mb-6">
                                Trade with an Award-Winning Broker.
                            </h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                                Experience the excellence that the industry is talking about. Join Radhika Capital Markets today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link to="/open-live-account" className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded hover:bg-white transition-colors shadow-lg shadow-green-900/20">
                                    Open Live Account
                                </Link>
                                <Link to="/contact-us" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded hover:bg-white/10 transition-colors">
                                    Contact Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Achievements;
