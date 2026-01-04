import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <div className="bg-[#02050a] min-h-screen pt-20 md:pt-40 font-[var(--font-body)] text-white flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm font-bold uppercase tracking-widest mb-8 animate-pulse">
                    <Clock size={16} /> Coming Soon
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 font-[var(--font-heading)]">
                    RadhikaFX <span className="text-green-500">Blogs</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    We are crafting a comprehensive library of market analysis, trading guides, and expert insights. Watch this space.
                </p>

                <div className="max-w-md mx-auto bg-[#0a1629] border border-[var(--glass-border)] p-8 rounded-2xl relative group hover:border-green-500/50 transition-colors">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#02050a] p-3 rounded-full border border-[var(--glass-border)] group-hover:border-green-500 transition-colors">
                        <BookOpen size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mt-4 mb-2">What to expect?</h3>
                    <ul className="text-gray-400 text-left space-y-3 mt-4">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Daily Market Analysis
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Trading Strategies & Tutorials
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Economic News breakdowns
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                        <ArrowRight className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Education;
