import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-dark)] to-[var(--color-black)] -z-20"></div>

            {/* 3D Element */}
            <Hero3D />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-left md:pr-12">
                    <div className="inline-block px-4 py-1 mb-6 border border-[var(--color-gold)] rounded-full text-[var(--color-gold)] text-sm font-bold tracking-wide uppercase bg-[rgba(233,219,141,0.1)] backdrop-blur-sm">
                        Regulated & Licensed
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[var(--color-white)]">
                        Your Success is <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-white">Our Priority</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                        The World's Most Trusted Name in FX & CFD Trading. Experience ultra-low latency, zero commission, and institutional-grade security.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] text-lg font-bold rounded-lg shadow-lg shadow-[rgba(233,219,141,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            Open Live Account <ArrowRight size={20} />
                        </button>

                        <button className="px-8 py-4 bg-transparent border border-[var(--color-white)] text-[var(--color-white)] text-lg font-bold rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors flex items-center justify-center gap-2">
                            Try Free Demo <PlayCircle size={20} />
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-12 flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="h-8 w-24 bg-white/20 rounded"></div>
                        <div className="h-8 w-24 bg-white/20 rounded"></div>
                        <div className="h-8 w-24 bg-white/20 rounded"></div>
                    </div>
                </div>

                {/* Right Side Spacer for 3D Element on Desktop */}
                <div className="hidden md:block h-full">
                    {/* The 3D element is positioned absolutely, this is just to occupy grid space if needed, 
               but since 3D is absolute, we might want this empty or remove grid col. 
               The 3D component is absolute right half. So this empty div is fine to push content left? 
               Actually, the grid splits 50/50. The left col has text. The right col is empty. 
               The 3D Hero is absolute, covering right half. Perfect. */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
