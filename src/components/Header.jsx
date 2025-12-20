import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Globe, Activity, Briefcase, BarChart2, Star, Flame, TrendingUp, PieChart, Repeat, DollarSign, Zap, Monitor, Award, Diamond, Check, Wallet, ArrowUpRight, Scale, Trophy, HelpCircle, Users, Mail, Clock, Calendar, Calculator } from 'lucide-react';
import Logo from '../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            name: 'About',
            icon: <User size={18} />,
            dropdown: [
                { name: 'Why RadhikaFX', icon: <Star size={16} />, path: '/about/why-radhikafx' },
                { name: 'About Us', icon: <User size={16} />, path: '/about-us' },
                { name: 'Regulations', icon: <Scale size={16} />, path: '/about/regulations' },
                { name: 'Achievements', icon: <Trophy size={16} />, path: '/about/achievements' },
                { name: 'Careers', icon: <Briefcase size={16} />, path: '/about/careers' },
                { name: "FAQ's", icon: <HelpCircle size={16} />, path: '/about/faqs' }
            ]
        },
        {
            name: 'Products',
            icon: <Globe size={18} />,
            dropdown: [
                { name: 'Forex', icon: <Repeat size={16} />, path: '/products/forex' },
                { name: 'Commodities', icon: <Flame size={16} />, path: '/products/commodities' },
                { name: 'Indices', icon: <TrendingUp size={16} />, path: '/products/indices' },
                { name: 'Shares', icon: <PieChart size={16} />, path: '/products/shares' },
                { name: 'Crypto', icon: <Zap size={16} />, path: '/products/crypto' }
            ]
        },
        {
            name: 'Platform',
            icon: <Activity size={18} />,
            dropdown: [
                { name: 'MetaTrader 5', icon: <Monitor size={16} />, path: '/platforms/mt5' }
            ]
        },
        {
            name: 'Accounts',
            icon: <Briefcase size={18} />,
            dropdown: [
                { name: 'Standard', icon: <User size={16} />, path: '/accounts/standard' },
                { name: 'Pro', icon: <Award size={16} />, path: '/accounts/pro' },
                { name: 'Pro X', icon: <Diamond size={16} />, path: '/accounts/pro-x' },
                { name: 'Compare Accounts', icon: <Check size={16} />, path: '/accounts/comparison' },
                { name: 'Fund Your Account', icon: <Wallet size={16} />, path: '/accounts/funding' },
                { name: 'Withdrawal', icon: <ArrowUpRight size={16} />, path: '/accounts/withdrawals' }
            ]
        },
        {
            name: 'Partnership',
            icon: <Users size={18} />,
            dropdown: [
                { name: 'IB Programme', icon: <Briefcase size={16} />, path: '/partnership/ib-programme' },
                { name: 'CPA Affiliate', icon: <TrendingUp size={16} />, path: '/partnership/cpa-affiliate' }
            ]
        },
        {
            name: 'Tools',
            icon: <BarChart2 size={18} />,
            dropdown: [
                { name: 'Trading Conditions', icon: <Scale size={16} />, path: '/tools/trading-conditions' },
                { name: 'Trading Hours', icon: <Clock size={16} />, path: '/tools/trading-hours' },
                { name: 'Economic Calendar', icon: <Calendar size={16} />, path: '/tools/economic-calendar' },
                { name: 'Calculators', icon: <Calculator size={16} />, path: '/tools/calculators' }
            ]
        },
        { name: 'Contact Us', icon: <Mail size={18} />, path: '/contact-us' }
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-navy)] shadow-lg' : 'bg-transparent backdrop-blur-sm'
                }`}
            style={{
                backgroundColor: scrolled ? 'var(--color-navy)' : 'var(--color-navy)',
                borderBottom: '1px solid var(--glass-border)'
            }}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img src={Logo} alt="RadhikaFX" className="h-14 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    className="flex items-center space-x-1 text-[var(--color-white)] hover:text-[var(--color-gold)] transition-colors font-medium"
                                >
                                    <span>{item.name}</span>
                                </Link>
                            ) : (
                                <>
                                    <button className="flex items-center space-x-1 text-[var(--color-white)] hover:text-[var(--color-gold)] transition-colors font-medium cursor-default">
                                        <span>{item.name}</span>
                                        <ChevronDown size={14} />
                                    </button>

                                    {/* Mega Menu / Dropdown */}
                                    <div className="absolute top-full left-0 mt-4 w-60 bg-[var(--color-navy)] border border-[var(--glass-border)] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                                        {item.dropdown ? (
                                            <div className="flex flex-col space-y-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] text-gray-300 hover:text-[var(--color-gold)] transition-colors"
                                                    >
                                                        <span className="text-[var(--color-gold)]">{subItem.icon}</span>
                                                        <span className="font-medium">{subItem.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-4 text-sm text-gray-400">
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    <a href="#" className="flex items-center space-x-1 text-[var(--color-white)] hover:text-[var(--color-gold)] transition-colors font-medium">
                        Partnership
                    </a>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        className="text-[var(--color-white)] hover:text-[var(--color-gold)] font-medium transition-colors"
                    >
                        Login
                    </button>
                    <button
                        className="px-6 py-2 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-full hover:bg-[var(--color-white)] transition-colors"
                    >
                        Open Live Account
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[var(--color-white)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-navy)] border-t border-[var(--glass-border)] p-6 flex flex-col space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                    {navItems.map((item) => (
                        <div key={item.name} className="flex flex-col">
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    className="text-[var(--color-white)] text-lg font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <>
                                    <span className="text-[var(--color-white)] text-lg font-medium py-2 opacity-50">{item.name}</span>
                                    {item.dropdown && (
                                        <div className="pl-4 flex flex-col space-y-2 border-l border-[rgba(255,255,255,0.1)] ml-2 mt-1">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="text-gray-300 py-1 hover:text-[var(--color-gold)]"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 flex flex-col space-y-3">
                        <button className="w-full py-2 border border-[var(--color-gold)] text-[var(--color-gold)] rounded-lg">Login</button>
                        <button className="w-full py-2 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-lg">Open Live Account</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
