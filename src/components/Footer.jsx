import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer>
            {/* CTA Block (Optional: Only show if not on Home/Contact? For now keep consistent) */}
            <div className="bg-gold-gradient py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.2)] transform skew-x-12 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between text-[var(--color-navy)]">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Start Trading?</h2>
                        <p className="text-lg font-medium opacity-80">Join thousands of traders worldwide.</p>
                    </div>
                    <Link to="/open-live-account" className="px-8 py-3 bg-[var(--color-navy)] text-[var(--color-white)] font-bold rounded-lg shadow-xl hover:scale-105 transition-transform">
                        Get Started Now
                    </Link>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="bg-[#0b0f19] pt-20 pb-10 border-t border-gray-800 text-gray-400">
                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Column 1: Brand & Contact */}
                        <div>
                            <Link to="/" className="flex items-center gap-2 mb-6">
                                <img src={Logo} alt="Radhika Capital Markets" className="h-32 w-auto object-contain" />
                            </Link>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Trade with a regulated global broker. Experience institutional-grade execution, 0.0 spreads, and 24/7 support.
                            </p>

                            <div className="space-y-4 text-sm mb-8">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-gold-gradient flex-shrink-0 mt-1" />
                                    <span>Dubai, UAE</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={18} className="text-gold-gradient flex-shrink-0 mt-1" />
                                    <a href="mailto:support@radhikafx.com" className="hover:text-white transition-colors">support@radhikafx.com</a>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-gradient hover:text-[var(--color-navy)] transition-colors">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <h4 className="text-[var(--color-white)] font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/about-us" className="hover:text-[var(--color-gold)] transition-colors">About Us</Link></li>
                                <li><Link to="/about/regulations" className="hover:text-[var(--color-gold)] transition-colors">Regulations</Link></li>
                                <li><Link to="/about/achievements" className="hover:text-[var(--color-gold)] transition-colors">Achievements</Link></li>
                                <li><Link to="/about/careers" className="hover:text-[var(--color-gold)] transition-colors">Careers</Link></li>
                                <li><Link to="/contact-us" className="hover:text-[var(--color-gold)] transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Markets */}
                        <div>
                            <h4 className="text-[var(--color-white)] font-bold mb-6">Markets</h4>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/products/forex" className="hover:text-[var(--color-gold)] transition-colors">Forex</Link></li>
                                <li><Link to="/products/indices" className="hover:text-[var(--color-gold)] transition-colors">Indices</Link></li>
                                <li><Link to="/products/commodities" className="hover:text-[var(--color-gold)] transition-colors">Commodities</Link></li>
                                <li><Link to="/products/crypto" className="hover:text-[var(--color-gold)] transition-colors">Crypto</Link></li>
                                <li><Link to="/products/shares" className="hover:text-[var(--color-gold)] transition-colors">Shares</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Partnership */}
                        <div>
                            <h4 className="text-[var(--color-white)] font-bold mb-6">Partnership</h4>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/partnership/ib-programme" className="hover:text-[var(--color-gold)] transition-colors">IB Programme</Link></li>
                                <li><Link to="/partnership/cpa-affiliate" className="hover:text-[var(--color-gold)] transition-colors">CPA Affiliate</Link></li>
                                <li><Link to="/about/faqs" className="hover:text-[var(--color-gold)] transition-colors">FAQ Center</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Disclaimer & Risk Warning (High Contrast) */}
                    <div className="pt-8 border-t border-gray-800">
                        <div className="bg-[#1a202c] p-6 rounded-lg border border-gray-700 mb-8">
                            <h5 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Risk Warning</h5>
                            <p className="text-xs text-gray-300 leading-relaxed text-justify">
                                Trading Leveraged Products such as Forex and Derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investments objectives and level of experience, before trading, and if necessary, seek independent advice. Please read the full Risk Disclosure and Terms and Conditions.
                            </p>
                        </div>

                        <p className="text-xs text-gray-500 leading-relaxed text-center mb-4">
                            Radhika Capital Markets Ltd operating under brand name Radhika Capital Markets is an Investment Dealer regulated by the Financial Services Commission (FSC) of Mauritius with a Global Business License and an Investment Dealer License number GB22200742 - Registration No. 190425 | Authorised Representative Number : 00000572.
                        </p>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 pt-4 border-t border-gray-800">
                            <p>&copy; {new Date().getFullYear()} Radhika Capital Markets. All rights reserved.</p>
                            <div className="flex gap-4">
                                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                                <Link to="/risk-disclaimer" className="hover:text-white transition-colors">Risk Disclaimer</Link>
                                <Link to="/risk-warning" className="hover:text-white transition-colors">Risk Warning</Link>
                                <Link to="/privacy-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
