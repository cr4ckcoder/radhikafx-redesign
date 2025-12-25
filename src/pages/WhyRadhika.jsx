import React, { useState } from 'react';
import {
    Shield, Zap, Globe, Lock, Cpu, Clock,
    ArrowRight, Check, ChevronDown, ChevronUp, Users,
    MessageCircle, Wallet, TrendingUp, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyChooseUsBg from '../assets/whychooseus.jpg';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className="border-b border-[var(--glass-border)]">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={toggle}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-gold-gradient' : 'text-gray-300 group-hover:text-white'}`}>
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="stroke-gold-gradient" />
                ) : (
                    <ChevronDown className="text-gray-500 group-hover:text-white" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-400 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const WhyRadhika = () => {
    const [openFAQ, setOpenFAQ] = useState(0);

    const stats = [
        { label: "Execution Speed", value: "< 30ms" },
        { label: "Spreads From", value: "0.0 Pips" },
        { label: "Leverage Up To", value: "1:200" },
        { label: "Support", value: "24/7 Human" },
    ];

    const advantages = [
        {
            icon: Shield,
            title: "Regulated Security",
            description: "Fully licensed by the FSC Mauritius. Your funds are segregated in top-tier banks.",
            link: "/about/regulations"
        },
        {
            icon: Cpu,
            title: "The MT5 Edge",
            description: "Institutional-grade infrastructure with No Requotes and deep liquidity for seamless execution.",
            link: ""
        },
        {
            icon: Wallet,
            title: "The USDT Pipeline",
            description: "Experience the speed of crypto funding. Instant deposits and same-day withdrawals via USDT.",
            link: ""
        },
        {
            icon: Activity,
            title: "Zero-Conflict Execution",
            description: "Pure ECN/STP execution model. We don't trade against you—your success is our business.",
            link: ""
        },
        {
            icon: Globe,
            title: "Global Market Access",
            description: "Trade Forex, Indices, Commodities, and Crypto from a single powerful account.",
            link: ""
        },
        {
            icon: TrendingUp,
            title: "Advanced Analytics",
            description: "Free access to Autochartist and premium market insights to sharpen your trading decisions.",
            link: ""
        }
    ];

    const faqs = [
        {
            q: "How fast is the account opening process?",
            a: "Our digital onboarding is streamlined and usually takes less than 3 minutes. Once your documents are verified, your account is activated instantly."
        },
        {
            q: "What deposit methods do you support?",
            a: "We support a wide range of methods including Bank Wire, Credit/Debit Cards, and Instant USDT (TRC20/ERC20) for immediate funding."
        },
        {
            q: "Is my capital safe with Radhika Capiter Markets?",
            a: "Absolutely. We are regulated by the FSC Mauritius and adhere to strict capital adequacy requirements. All client funds are held in segregated accounts."
        }
    ];

    return (
        <div className="pt-20 md:pt-40 bg-[var(--color-navy)] text-[var(--color-white)] font-[var(--font-body)]">

            {/* Block 1: Hero Section with Heatmap Animation */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Animation (Heatmap/Trading feel) */}
                {/* Background Animation (Heatmap/Trading feel) */}
                <div className="absolute inset-0 bg-[#02040a]">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 filter grayscale" style={{ backgroundImage: `url(${WhyChooseUsBg})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[rgba(2,4,10,0.8)] to-[rgba(2,4,10,0.4)]"></div>

                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(233,219,141,0.05)_0%,rgba(5,12,24,0)_50%)] animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(14,35,78,0.4)_0%,rgba(5,12,24,0)_70%)] blur-[100px]"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold)] opacity-5 rounded-full filter blur-[120px] animate-blob"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block mb-6 px-4 py-1 rounded-full border border-[var(--color-gold)] text-gold-gradient text-sm font-bold tracking-wide uppercase bg-[rgba(233,219,141,0.05)]">
                        Limitless Trading
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)] mb-6 leading-tight">
                        Trade the World with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">
                            Institutional Precision
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Experience a transparent, FSC-regulated environment built for traders who demand speed, security, and 24/7 reliability.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/open-live-account" className="px-10 py-4 btn-gold text-[var(--color-navy)] font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(233,219,141,0.3)]">
                            Open Live Account
                        </Link>
                        <Link to="/open-demo-account" className="px-10 py-4 bg-transparent border border-[var(--color-white)] text-[var(--color-white)] font-bold rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-all">
                            Try Free Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Block 2: At a Glance Stats */}
            {/* <div className="relative z-20 -mt-20 container mx-auto px-6">
                <div className="bg-[rgba(5,12,24,0.8)] backdrop-blur-md border border-[var(--glass-border)] rounded-2xl p-8 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
                    {stats.map((stat, index) => (
                        <div key={index} className={`text-center ${index % 2 !== 0 ? 'border-l border-gray-800 md:border-none' : ''}`}>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                            <p className="text-2xl md:text-3xl font-bold text-[var(--color-white)]">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Block 3: Radhika Advantage Grid */}
            <section className="py-24 bg-[var(--color-navy)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">The Radhika Advantage</h2>
                        <p className="text-gray-400">Why thousands of traders choose us as their primary venue.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((item, index) => (
                            <div key={index} className="group relative p-8 rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-gold)] transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-[rgba(14,35,78,0.5)] flex items-center justify-center text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--color-white)] mb-4">{item.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                                    {item.link && (
                                        <Link to={item.link} className="inline-flex items-center text-gold-gradient font-bold text-sm uppercase tracking-wider hover:underline">
                                            {item.title} <ArrowRight size={16} className="ml-2" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 4: Account Comparison Table */}
            <section className="py-24 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">Account Tiers</h2>
                        <p className="text-gray-400">Tailored conditions for every stage of your trading journey.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-[800px] grid grid-cols-4 gap-4 pt-6">
                            {/* Headers */}
                            <div className="col-span-1"></div>
                            <div className="p-6 text-center text-xl font-bold text-[var(--color-white)]">Standard</div>
                            <div className="p-6 text-center text-xl font-bold text-[var(--color-white)]">Pro</div>
                            <div className="p-6 text-center relative">
                                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span>
                                <span className="text-xl font-bold text-gold-gradient">Pro X</span>
                            </div>

                            {/* Row 1: Min Deposit */}
                            <div className="p-6 flex items-center font-bold text-gray-300 border-b border-[rgba(255,255,255,0.05)]">Min Deposit</div>
                            <div className="p-6 text-center text-[var(--color-white)] border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] rounded-lg">$50</div>
                            <div className="p-6 text-center text-[var(--color-white)] border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] rounded-lg">$500</div>
                            <div className="p-6 text-center text-gold-gradient text-xl font-bold border-b border-[rgba(255,255,255,0.05)] bg-[rgba(233,219,141,0.05)] border-[var(--color-gold)] rounded-lg">$20,000</div>

                            {/* Row 2: Spread */}
                            <div className="p-6 flex items-center font-bold text-gray-300 border-b border-[rgba(255,255,255,0.05)]">Target Spread</div>
                            <div className="p-6 text-center text-[var(--color-white)] border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] rounded-lg">From 1.2</div>
                            <div className="p-6 text-center text-[var(--color-white)] border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] rounded-lg">From 0.0</div>
                            <div className="p-6 text-center text-gold-gradient font-bold border-b border-[rgba(255,255,255,0.05)] bg-[rgba(233,219,141,0.05)] border-[var(--color-gold)] rounded-lg">Raw 0.0</div>

                            {/* Row 3: Commission */}
                            <div className="p-6 flex items-center font-bold text-gray-300">Commission</div>
                            <div className="p-6 text-center text-[var(--color-white)] bg-[rgba(255,255,255,0.02)] rounded-lg">None</div>
                            <div className="p-6 text-center text-[var(--color-white)] bg-[rgba(255,255,255,0.02)] rounded-lg">$7 / lot</div>
                            <div className="p-6 text-center text-gold-gradient font-bold bg-[rgba(233,219,141,0.05)] border-[var(--color-gold)] rounded-lg">$3.5 / lot</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Partnership/IB Ecosystem (Split Screen) */}
            <section className="flex flex-col md:flex-row min-h-[600px]">
                {/* Left Side: Traders */}
                <div className="md:w-1/2 p-12 md:p-20 bg-[#050c18] flex flex-col justify-center relative border-r border-[rgba(255,255,255,0.05)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold)]"></div>
                    <Users size={48} className="stroke-gold-gradient mb-8" />
                    <h3 className="text-4xl font-bold text-[var(--color-white)] mb-6">For Traders</h3>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Access world-class markets with conditions built to help you win. Scalping, hedging, and high-frequency trading allowed.
                    </p>
                    <Link to="/open-live-account" className="text-[var(--color-white)] font-bold uppercase tracking-wider flex items-center hover:text-[var(--color-gold)] transition-colors">
                        Start Trading <ArrowRight className="ml-2" />
                    </Link>
                </div>

                {/* Right Side: Partners */}
                <div className="md:w-1/2 p-12 md:p-20 bg-[#071122] flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[var(--color-gold)] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <Globe size={48} className="text-blue-400 mb-8" />
                    <h3 className="text-4xl font-bold text-[var(--color-white)] mb-6">For Partners (IB)</h3>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Grow as we grow. Join our Introducing Broker program and earn industry-leading rebates with real-time tracking and dedicated support.
                    </p>
                    <Link to="/partnership/ib-programme" className="text-blue-400 font-bold uppercase tracking-wider flex items-center hover:text-[var(--color-white)] transition-colors">
                        Become a Partner <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>

            {/* Block 6: Human-Centric Support & FAQ */}
            <section className="py-24 bg-[var(--color-dark)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-[rgba(34,197,94,0.1)] text-green-400 border border-green-400/20 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span>Live Chat: Online • Avg. Response 2 mins</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-white)] mb-4">We're Here to Help</h2>
                        <p className="text-gray-400">Personalized guidance for every client, every step of the way.</p>
                    </div>

                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFAQ === index}
                                toggle={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-6">Need more details about onboarding or education?</p>
                        <Link to="/contact-us" className="px-8 py-3 border border-[var(--color-glass-border)] hover:border-[var(--color-gold)] text-[var(--color-white)] rounded-lg transition-colors font-medium">
                            <MessageCircle className="inline-block mr-2" size={18} />
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyRadhika;
