import React from 'react';
import { Monitor, Smartphone, Globe } from 'lucide-react';

const Platform = () => {
    return (
        <section className="py-24 bg-[var(--color-navy)] overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Side */}
                <div className="order-2 md:order-1">
                    <div className="inline-block px-4 py-1 mb-6 border border-[var(--color-gold)] rounded-full text-[var(--color-gold)] text-sm font-bold tracking-wide uppercase">
                        World Class Trading Platform
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-white)] mb-6">
                        Multi-Asset Access on <span className="text-[var(--color-gold)]">MetaTrader 5</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Experience the power of MT5 with RadhikaFX's superior execution. Advanced charting, algorithmic trading, and depth of market at your fingertips.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="mt-1 mr-4 text-[var(--color-gold)]"><Monitor size={24} /></div>
                            <div>
                                <h4 className="text-xl font-bold text-[var(--color-white)]">Desktop & Web</h4>
                                <p className="text-gray-400">Full-featured trading on Windows, Mac, or directly in your browser.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="mt-1 mr-4 text-[var(--color-gold)]"><Smartphone size={24} /></div>
                            <div>
                                <h4 className="text-xl font-bold text-[var(--color-white)]">Mobile Trading</h4>
                                <p className="text-gray-400">Monitor and trade on the go with our top-rated iOS and Android apps.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <button className="px-8 py-3 bg-[var(--color-white)] text-[var(--color-navy)] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                            Download MT5
                        </button>
                    </div>
                </div>

                {/* Mockup Side */}
                <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 bg-[var(--color-gold)] opacity-10 filter blur-[80px] rounded-full"></div>
                    {/* Note: In a real scenario we import the generated image. 
              For now I will use a placeholder or the path if I knew it. 
              I'll assume the image will be placed in public/assets or similar.
              Since I am generating it, I need to copy it to the project.
              I'll add the image tag and assume 'mt5_mockup.png' exists in public.
          */}
                    <img
                        src="/mt5_device_mockup.png"
                        alt="MetaTrader 5 Platform on Laptop and Phone"
                        className="relative z-10 w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default Platform;
