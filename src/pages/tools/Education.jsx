import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '../../assets/hero-background.png';

const Education = () => {
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const CACHE_KEY = 'radhikafx_blog_cache_v2';
        const CACHE_DURATION = 120000; // 2 minutes

        const fetchData = async () => {
            // Check cache first
            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
                const { posts: cachedPosts, tags: cachedTags, timestamp } = JSON.parse(cachedData);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setPosts(cachedPosts);
                    setTags(cachedTags);
                    setLoading(false);
                    return; // Return early if cache is valid
                }
            }

            try {
                // Fetch Posts and Tags in parallel
                const [postsResponse, tagsResponse] = await Promise.all([
                    fetch('https://blogs.radhikafx.com/wp-json/wp/v2/posts?_embed&per_page=100'),
                    fetch('https://blogs.radhikafx.com/wp-json/wp/v2/tags?per_page=100')
                ]);

                if (!postsResponse.ok || !tagsResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const postsData = await postsResponse.json();
                const tagsData = await tagsResponse.json();

                // Save to cache
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    posts: postsData,
                    tags: tagsData,
                    timestamp: Date.now()
                }));

                setPosts(postsData);
                setTags(tagsData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to load articles. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const getTagName = (tagId) => {
        const tag = tags.find(t => t.id === tagId);
        return tag ? tag.name : '';
    };

    const filteredPosts = selectedTag 
        ? posts.filter(post => post.tags.includes(selectedTag))
        : posts;

    return (
        <div className="bg-[#0a1629] min-h-screen font-[var(--font-body)] text-white relative overflow-hidden">
            
            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img src={heroBackground} alt="Education Background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a1629]/80 via-[#0a1629]/80 to-[#0a1629]"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[var(--font-heading)]">
                        RadhikaFX <span className="text-green-500">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Expert analysis, market updates, and educational guides to help you master the markets.
                    </p>
                </div>

                {/* Ambient Orbs */}
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                {/* Tag Filter Pills */}
                {!loading && !error && tags.length > 0 && (
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                                selectedTag === null
                                    ? 'bg-green-500 text-black border-green-500'
                                    : 'bg-[#0a1629] text-gray-400 border-gray-800 hover:border-green-500 hover:text-green-500'
                            }`}
                        >
                            All Posts
                        </button>
                        {tags.map(tag => (
                            <button
                                key={tag.id}
                                onClick={() => setSelectedTag(tag.id)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                                    selectedTag === tag.id
                                        ? 'bg-green-500 text-black border-green-500'
                                        : 'bg-[#0a1629] text-gray-400 border-gray-800 hover:border-green-500 hover:text-green-500'
                                }`}
                            >
                                {tag.name}
                            </button>
                        ))}
                    </div>
                )}

                {loading ? (
                    <div className="flex flex-col items-center justify-center min-h-[40vh]">
                        <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
                        <p className="text-gray-400">Loading insights...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
                        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Oops!</h3>
                        <p className="text-gray-400 mb-6">{error}</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="text-center py-20 bg-[#0a1629]/50 rounded-2xl border border-gray-800">
                        <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-300">No articles found</h3>
                        <p className="text-gray-500 mt-2">Try selecting a different category or check back soon.</p>
                        {selectedTag && (
                            <button 
                                onClick={() => setSelectedTag(null)}
                                className="mt-6 px-6 py-2 text-green-500 border border-green-500/30 rounded-full hover:bg-green-500/10 transition-colors"
                            >
                                Clear Filter
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <Link 
                                key={post.id} 
                                to={`/tools/education/${post.slug}`}
                                className="group bg-[#0a1629] border border-[var(--glass-border)] rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-900/10 flex flex-col h-full"
                            >
                                <div className="aspect-video w-full bg-gray-900 relative overflow-hidden">
                                    {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] ? (
                                        <img 
                                            src={post._embedded['wp:featuredmedia'][0].source_url} 
                                            alt={post.title.rendered}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.onerror = null; 
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-800');
                                                e.target.parentElement.innerHTML = '<svg class="w-12 h-12 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                            <BookOpen className="w-12 h-12 text-gray-700" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1629] via-transparent to-transparent opacity-60"></div>
                                    
                                    {/* Top Tags on Image */}
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {post.tags.slice(0, 2).map((tagId) => {
                                            const tagName = getTagName(tagId);
                                            return tagName ? (
                                                <span key={tagId} className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                                                    {tagName}
                                                </span>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-wider mb-3">
                                        <Calendar size={14} />
                                        {formatDate(post.date)}
                                    </div>
                                    
                                    <h2 
                                        className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-green-400 transition-colors"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                    
                                    <div 
                                        className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />
                                    
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center text-green-500 font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                                            Read Article <ArrowRight size={16} className="ml-2" />
                                        </div>
                                        
                                        {/* Optional: Show remaining tag count if tags > 2 */}
                                        {post.tags.length > 2 && (
                                            <span className="text-xs text-gray-500 font-medium">
                                                +{post.tags.length - 2} more tags
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Education;
