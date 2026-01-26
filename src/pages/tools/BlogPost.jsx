import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Loader2, AlertCircle, Share2, TrendingUp, List, ChevronRight } from 'lucide-react';
import heroBackground from '../../assets/hero-background.png';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tableOfContents, setTableOfContents] = useState([]);
    const [processedContent, setProcessedContent] = useState('');
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://blogs.radhikafx.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                
                if (data.length === 0) {
                    setError('Post not found');
                } else {
                    const fetchedPost = data[0];
                    // Process content to add IDs and extract TOC
                    const { html, toc } = processContent(fetchedPost.content.rendered);
                    setProcessedContent(html);
                    setTableOfContents(toc);
                    setPost(fetchedPost);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching blog post:', err);
                setError('Failed to load article. Please try again later.');
                setLoading(false);
            }
        };

        fetchPost();
        window.scrollTo(0, 0);
    }, [slug]);

    // Handle scroll spy for TOC
    useEffect(() => {
        const handleScroll = () => {
            const headings = document.querySelectorAll('h2[id]');
            let current = '';
            
            headings.forEach(heading => {
                const sectionTop = heading.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = heading.getAttribute('id');
                }
            });
            
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [processedContent]);

    // Update page title when post is loaded
    useEffect(() => {
        if (post && post.title && post.title.rendered) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.title.rendered;
            const decodedTitle = tempDiv.textContent || tempDiv.innerText || "";
            document.title = `${decodedTitle} | RadhikaFX`;
        }
        
        // Cleanup function to reset title is not strictly needed as PageMetadata handles route changes,
        // but good practice might be to not do anything as unmounting means navigation.
    }, [post]);

    const processContent = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const toc = [];
        
        doc.querySelectorAll('h2').forEach((heading, index) => {
            // Create a slug-like ID if none exists
            const id = heading.id || `section-${index}`;
            heading.id = id;
            toc.push({
                id: id,
                text: heading.textContent
            });
        });

        return {
            html: doc.body.innerHTML,
            toc: toc
        };
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <div className="bg-[#02050a] min-h-screen pt-40 flex flex-col items-center justify-center font-[var(--font-body)] text-white">
                <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
                <p className="text-gray-400">Loading article...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-[#02050a] min-h-screen pt-40 flex flex-col items-center justify-center font-[var(--font-body)] text-white text-center px-6">
                <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
                <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                <p className="text-gray-400 mb-8 text-lg">{error}</p>
                <Link 
                    to="/tools/education" 
                    className="px-8 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors inline-flex items-center gap-2"
                >
                    <ArrowLeft size={20} /> Back to Insights
                </Link>
            </div>
        );
    }

    if (!post) return null;

    const featuredImage = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] 
        ? post._embedded['wp:featuredmedia'][0].source_url 
        : heroBackground; // Fallback image

    return (
        <div className="bg-[#0a1629] min-h-screen pt-24 pb-20 font-[var(--font-body)] text-white relative">
            
            {/* Ambient Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            {/* Hero Section */}
            <div className="relative z-10 w-full mb-12">
                <div className="absolute inset-0 h-[500px] overflow-hidden">
                    <img src={featuredImage} alt="" className="w-full h-full object-cover opacity-20 blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a1629]/80 via-[#0a1629]/90 to-[#0a1629]"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 relative">
                    <Link to="/tools/education" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-green-500/10 text-gray-300 hover:text-green-500 rounded-full transition-all mb-8 group border border-white/10 hover:border-green-500/50 backdrop-blur-sm font-medium">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-6 text-sm mb-6">
                            <span className="bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded-full font-bold uppercase text-xs tracking-wider">
                                Market Analysis
                            </span>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Calendar size={14} className="text-green-500" />
                                {formatDate(post.date)}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Clock size={14} className="text-green-500" />
                                5 min read
                            </div>
                        </div>

                        <h1 
                            className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-[var(--font-heading)] bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        {/* Featured Image Display */}
                        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-[var(--glass-border)] bg-[#0a1629] relative group">
                            <img 
                                src={featuredImage} 
                                alt={post.title.rendered} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => { e.target.src = heroBackground; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1629] via-transparent to-transparent opacity-30"></div>
                        </div>

                        {/* Article Content */}
                        <div className="bg-[#0a1629]/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[var(--glass-border)]">
                            <style>{`
                                .blog-content h2 {
                                    font-size: 1.875rem;
                                    line-height: 2.25rem;
                                    font-weight: 700;
                                    color: white;
                                    margin-top: 3rem;
                                    margin-bottom: 1.5rem;
                                    font-family: var(--font-heading);
                                    border-left: 4px solid #22c55e;
                                    padding-left: 1rem;
                                    scroll-margin-top: 10rem;
                                }
                                .blog-content h3 {
                                    font-size: 1.5rem;
                                    line-height: 2rem;
                                    font-weight: 600;
                                    color: #4ade80;
                                    margin-top: 2.5rem;
                                    margin-bottom: 1rem;
                                }
                                .blog-content h4 {
                                    font-size: 1.25rem;
                                    font-weight: 600;
                                    color: white;
                                    margin-top: 2rem;
                                    margin-bottom: 1rem;
                                }
                                .blog-content p {
                                    color: #d1d5db;
                                    line-height: 1.8;
                                    margin-bottom: 1.5rem;
                                    font-size: 1.125rem;
                                }
                                .blog-content strong {
                                    color: white;
                                    font-weight: 700;
                                }
                                .blog-content ul {
                                    list-style-type: disc;
                                    padding-left: 1.5rem;
                                    margin-bottom: 2rem;
                                    color: #d1d5db;
                                }
                                .blog-content ol {
                                    list-style-type: decimal;
                                    padding-left: 1.5rem;
                                    margin-bottom: 2rem;
                                    color: #d1d5db;
                                }
                                .blog-content li {
                                    margin-bottom: 0.75rem;
                                    line-height: 1.7;
                                }
                                .blog-content blockquote {
                                    border-left: 4px solid #22c55e;
                                    background: rgba(10, 22, 41, 0.5);
                                    padding: 1.5rem;
                                    border-radius: 0 0.75rem 0.75rem 0;
                                    margin: 2rem 0;
                                    font-style: italic;
                                    color: #9ca3af;
                                }
                                .blog-content table {
                                    width: 100%;
                                    border-collapse: collapse;
                                    margin: 2rem 0;
                                    background: rgba(10, 22, 41, 0.5);
                                    border: 1px solid #1f2937;
                                    border-radius: 0.75rem;
                                    overflow: hidden;
                                }
                                .blog-content th {
                                    background: rgba(2, 5, 10, 0.8);
                                    color: #22c55e;
                                    font-weight: 700;
                                    text-transform: uppercase;
                                    font-size: 0.875rem;
                                    padding: 1rem;
                                    text-align: left;
                                    border-bottom: 1px solid #1f2937;
                                }
                                .blog-content td {
                                    padding: 1rem;
                                    border-bottom: 1px solid #1f2937;
                                    color: #d1d5db;
                                    vertical-align: top;
                                }
                                .blog-content img {
                                    border-radius: 1rem;
                                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                                    border: 1px solid #1f2937;
                                    margin: 3rem 0;
                                }
                                .blog-content a {
                                    color: #22c55e;
                                    text-decoration: none;
                                    transition: color 0.2s;
                                }
                                .blog-content a:hover {
                                    color: #4ade80;
                                    text-decoration: underline;
                                }
                            `}</style>
                            <div 
                                className="blog-content font-[var(--font-body)]"
                                dangerouslySetInnerHTML={{ __html: processedContent }}
                            />
                        </div>

                        {/* Bottom CTA Banner */}
                        <div className="mt-12 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-2xl p-8 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to Apply These Insights?</h3>
                            <p className="text-gray-400 mb-6 max-w-xl mx-auto relative z-10">Open a live account with RadhikaFX today and experience ultra-low latency execution.</p>
                            <Link to="/open-live-account" className="inline-flex items-center gap-2 bg-green-500 text-black font-bold px-8 py-3 rounded-full hover:bg-white transition-all relative z-10">
                                Start Trading Now <TrendingUp size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            {/* Table of Contents */}
                            {tableOfContents.length > 0 && (
                                <div className="bg-[#0a1629]/50 backdrop-blur-md rounded-2xl p-6 border border-[var(--glass-border)]">
                                    <h4 className="flex items-center gap-2 font-bold text-white mb-6 pb-4 border-b border-gray-800">
                                        <List size={18} className="text-green-500" />
                                        On this page
                                    </h4>
                                    <nav className="flex flex-col space-y-1">
                                        {tableOfContents.map((item) => (
                                            <a 
                                                key={item.id} 
                                                href={`#${item.id}`}
                                                className={`
                                                    flex items-center justify-between text-sm py-2 px-3 rounded-lg transition-all
                                                    ${activeSection === item.id 
                                                        ? 'bg-green-500/10 text-green-500 pl-4 font-medium' 
                                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                    }
                                                `}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                                    setActiveSection(item.id);
                                                }}
                                            >
                                                <span className="truncate">{item.text}</span>
                                                {activeSection === item.id && <ChevronRight size={14} />}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Share Card */}
                            <div className="bg-[#0a1629]/50 backdrop-blur-md rounded-2xl p-6 border border-[var(--glass-border)]">
                                <h4 className="font-bold text-white mb-4">Share this article</h4>
                                <div className="flex gap-4">
                                    <button className="p-3 bg-blue-600/20 text-blue-500 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> 
                                    </button>
                                    <button className="p-3 bg-blue-700/20 text-blue-600 rounded-xl hover:bg-blue-700 hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </button>
                                    <button className="p-3 bg-gray-700/20 text-gray-400 rounded-xl hover:bg-gray-700 hover:text-white transition-colors" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Sidebar CTA */}
                            <div className="bg-green-500 rounded-2xl p-6 shadow-xl text-[#02050a] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                                <h4 className="font-bold text-xl mb-2 relative z-10">Trade with Confidence</h4>
                                <p className="text-sm font-medium opacity-80 mb-6 relative z-10">
                                    Get access to 500+ instruments with spreads from 0.0 pips.
                                </p>
                                <Link to="/open-live-account" className="block w-full bg-[#02050a] text-white text-center font-bold py-3 rounded-xl hover:bg-gray-900 transition-colors relative z-10 shadow-lg">
                                    Open Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
