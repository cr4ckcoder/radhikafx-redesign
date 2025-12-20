import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Zap, Percent, Clock } from 'lucide-react';

const Counter = ({ from, to, duration, label, suffix = '', icon: Icon }) => {
    const [count, setCount] = useState(from);
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = from;
            const end = to;
            const totalFrames = duration * 60;
            const increment = (end - start) / totalFrames;

            let currentFrame = 0;
            const counter = setInterval(() => {
                currentFrame++;
                start += increment;
                if (currentFrame >= totalFrames) {
                    setCount(end);
                    clearInterval(counter);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(counter);
        }
    }, [isInView, from, to, duration]);

    return (
        <div ref={ref} className="flex flex-col items-center p-6 bg-[rgba(14,35,78,0.5)] backdrop-blur-md rounded-xl border border-[var(--glass-border)] hover:border-[var(--color-gold)] transition-colors group">
            <div className="mb-3 p-3 bg-[rgba(233,219,141,0.1)] rounded-full text-[var(--color-gold)] group-hover:scale-110 transition-transform">
                <Icon size={24} />
            </div>
            <div className="text-4xl font-bold text-[var(--color-white)] mb-1">
                {count}{suffix}
            </div>
            <div className="text-sm text-gray-400 font-medium tracking-wider">{label}</div>
        </div>
    );
};

const StatsStrip = () => {
    return (
        <section className="py-10 bg-[var(--color-dark)] relative z-20 -mt-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Counter
                        from={0}
                        to={0}
                        duration={1}
                        label="COMMISSION"
                        suffix="%"
                        icon={Percent}
                    />
                    <Counter
                        from={0}
                        to={500}
                        duration={2}
                        label="LEVERAGE"
                        suffix=":1"
                        icon={Zap}
                    />
                    <Counter
                        from={0}
                        to={25}
                        duration={1.5}
                        label="EXECUTION SPEED (ms)"
                        suffix=""
                        icon={Clock}
                    />
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
