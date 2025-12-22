import React, { useState, useEffect } from 'react';
import {
    MessageSquare, Mail, Phone, MapPin, Clock,
    Globe, Send, HelpCircle, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
    // Simulated World Clock Time
    const [times, setTimes] = useState({
        dubai: '',
        mauritius: ''
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // Dubai is UTC+4
            const dubaiTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dubai" }));

            // Mauritius is UTC+4
            const mauritiusTime = new Date(now.toLocaleString("en-US", { timeZone: "Indian/Mauritius" }));

            setTimes({
                dubai: dubaiTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                mauritius: mauritiusTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pt-20 bg-[#02040a] font-[var(--font-body)]">

            {/* Block 1: The "We’re Here" Hero */}
            <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                {/* Abstract Support Visuals */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 rounded-full mb-8 backdrop-blur-md">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest">Support Active 24/7</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        How Can We Help You Today?
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a question about our platforms or need help with your account, our global support team is ready to assist.
                    </p>

                    {/* World Clock Widget */}
                    <div className="flex justify-center gap-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-[var(--color-gold)]" />
                            <span>Dubai: <span className="text-white font-mono">{times.dubai}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-[var(--color-gold)]" />
                            <span>Mauritius: <span className="text-white font-mono">{times.mauritius}</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: The "Quick Connect" Cards */}
            <section className="py-12 bg-[#02040a] relative z-10 -mt-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Live Chat */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors group text-center">
                            <div className="w-14 h-14 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <MessageSquare size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Instant Support</h3>
                            <p className="text-gray-400 text-sm mb-6">Chat with our experts in real-time.</p>
                            <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="text-[var(--color-gold)] font-bold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                Start Chat <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Email */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors group text-center">
                            <div className="w-14 h-14 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Detailed Inquiries</h3>
                            <p className="text-gray-400 text-sm mb-6">For technical or account support.</p>
                            <a href="mailto:support@radhikafx.com" className="text-[var(--color-gold)] font-bold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                support@radhikafx.com <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors group text-center">
                            <div className="w-14 h-14 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <Phone size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Speak to Us</h3>
                            <p className="text-gray-400 text-sm mb-6">Call our global dedicated line.</p>
                            <a href="tel:+447462103568" className="text-[var(--color-gold)] font-bold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                +44 7462 103568 <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3 & 4: Smart Contact Form & Global Presence */}
            <section className="py-24 bg-[#050505] border-t border-gray-900">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        <div id="contact-form">
                            <ContactForm />
                        </div>

                        {/* Map & Office Info */}
                        <div className="space-y-12 pt-8">
                            <div>
                                <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                                    <Globe className="text-[var(--color-gold)]" size={24} />
                                    Global Headquarters
                                </h3>
                                <div className="bg-[#0a1629] rounded-xl overflow-hidden border border-gray-800">
                                    {/* Placeholder Map Image */}
                                    <div className="h-48 bg-gray-800 relative">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea932a235c8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur">Dubai, UAE</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-white font-bold mb-2">Dubai Office</h4>
                                        <p className="text-gray-400 text-sm mb-4">Dubai, UAE.</p>
                                        <a href="https://www.google.com/maps/search/?api=1&query=Concord+Tower+Dubai+Media+City" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">View on Google Maps</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="bg-[#0a1629] rounded-xl overflow-hidden border border-gray-800">
                                    {/* Placeholder Map Image */}
                                    <div className="h-48 bg-gray-800 relative">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542259681-d2508c9081e7?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur">Mauritius</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-white font-bold mb-2">Registered Office</h4>
                                        <p className="text-gray-400 text-sm mb-4">Cybercati, Ebene, Mauritius.</p>
                                        <a href="https://www.google.com/maps/search/?api=1&query=Cybercati+Ebene+Mauritius" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">View on Google Maps</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Block 5: The "Self-Service" Alternative */}
            <section className="py-16 bg-[#02040a]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-[#0a1629] rounded-2xl p-8 md:p-12 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-blue-400">
                                <HelpCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Want a faster answer?</h3>
                                <p className="text-gray-400">Check out our FAQ Center for instant help with deposits, platform setup, and more.</p>
                            </div>
                        </div>
                        <Link to="/about/faqs" className="flex-shrink-0 px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
                            Visit Help Center
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;
