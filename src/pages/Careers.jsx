import React from 'react';
import {
    Users, Briefcase, TrendingUp, CheckCircle, ArrowRight,
    Upload, Globe, GraduationCap, Award
} from 'lucide-react';

const Careers = () => {
    return (
        <div className="pt-20 bg-[var(--color-navy)] font-[var(--font-body)]">

            {/* Block 1: The Visionary Hero */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#02040a]">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[rgba(2,4,10,0.8)] to-[rgba(2,4,10,0.4)]"></div>

                {/* Gold Glow */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[var(--color-gold)]/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 rounded-full mb-8 backdrop-blur-md">
                        <Globe size={16} className="text-[var(--color-gold)]" />
                        <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest">Global Opportunities</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Shape the Future of <br />
                        <span className="text-gold-gradient">Global Trading.</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join RadhikaFX, a leading global brokerage where innovation meets opportunity. We are looking for bold thinkers to help us empower traders worldwide.
                    </p>

                    <button
                        onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 btn-gold text-[var(--color-navy)] font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        View Open Positions
                    </button>
                </div>
            </section>

            {/* Block 2: The Core Values (Icon Grid) */}
            <section className="py-24 bg-[#050505] relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)]/50 transition-colors group">
                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Inclusive Culture</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                A diverse workplace where every voice is heard and valued. We believe that different perspectives drive innovation.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)]/50 transition-colors group">
                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Growth & Learning</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Continuous upskilling through specialist training and mentorship. We invest in your potential as much as our technology.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-gold)]/50 transition-colors group">
                            <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Rewards & Progression</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                A performance-driven environment that recognizes and celebrates excellence with competitive packages and career paths.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: The "Why RadhikaFX?" Section */}
            <section className="py-24 bg-[#02040a] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <div className="inline-block text-[var(--color-gold)] text-sm font-bold uppercase tracking-widest mb-4">Life at RadhikaFX</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                More Than Just a Job. <br />
                                <span className="text-gray-500">It's a Career.</span>
                            </h2>

                            <div className="space-y-6">
                                {[
                                    "International and culturally rich working environment.",
                                    "Specialist training and skill development programs.",
                                    "Attractive salary packages with performance rewards.",
                                    "Continuous professional growth opportunities.",
                                    "Positive and collaborative workplace culture."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1 min-w-[20px]">
                                            <CheckCircle size={20} className="text-[var(--color-gold)] group-hover:text-yellow-400 transition-colors" />
                                        </div>
                                        <p className="text-gray-300 text-lg">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                                <div className="absolute inset-0 bg-[var(--color-gold)]/10 mix-blend-overlay"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team Collaboration"
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--color-gold)]/20 rounded-full blur-2xl"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--color-gold)]/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: The Application Portal (The Form) */}
            <section id="application-form" className="py-24 bg-[#050505] relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join Our Team</h2>
                        <p className="text-gray-400">Ready to make an impact? Send us your application.</p>
                    </div>

                    <div className="bg-[#0a1629]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Full Name</label>
                                    <input type="text" className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Position of Interest</label>
                                    <select className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors">
                                        <option>Select a position...</option>
                                        <option>Software Engineer</option>
                                        <option>Marketing Specialist</option>
                                        <option>Customer Support</option>
                                        <option>Financial Analyst</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Years of Experience</label>
                                    <select className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors">
                                        <option>0-2 Years</option>
                                        <option>3-5 Years</option>
                                        <option>5-10 Years</option>
                                        <option>10+ Years</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Cover Letter / Message</label>
                                <textarea rows="4" className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Tell us why you're a great fit..."></textarea>
                            </div>

                            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-[var(--color-gold)]/50 transition-colors cursor-pointer bg-[#02040a]/50">
                                <Upload className="mx-auto text-gray-500 mb-2" size={32} />
                                <p className="text-gray-400 text-sm">Drag & drop your CV here, or <span className="text-[var(--color-gold)]">browse</span></p>
                                <p className="text-gray-600 text-xs mt-1">PDF or DOCX up to 5MB</p>
                            </div>

                            <button type="button" className="w-full py-4 btn-gold text-[var(--color-navy)] font-bold rounded hover:shadow-lg hover:shadow-[var(--color-gold)]/20 transition-all">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Block 5: The "What Happens Next?" (Process Transparency) */}
            <section className="py-24 bg-[#02040a] border-t border-gray-900">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row justify-between items-center relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>

                        {[
                            { step: "1", title: "Apply", desc: "Submit your CV via the form above." },
                            { step: "2", title: "Review", desc: "Our HR team evaluates your profile." },
                            { step: "3", title: "Interview", desc: "Shortlisted candidates are invited for a meeting." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center relative z-10 bg-[#02040a] px-4 py-6 md:py-0">
                                <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-gray-400 font-bold mb-4 group-hover:border-cyan-500 group-hover:text-cyan-500 transition-colors">
                                    {item.step}
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm max-w-[200px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 text-xs mt-16 italic">
                        *Only shortlisted candidates will be contacted for the next stage of the hiring process.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Careers;
