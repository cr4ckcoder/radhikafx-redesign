import React from 'react';

const GoldGradientDefs = () => (
    <svg width="0" height="0" className="absolute w-0 h-0 pointer-events-none">
        <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8f6b29" />
                <stop offset="25%" stopColor="#fde08d" />
                <stop offset="50%" stopColor="#df9f28" />
                <stop offset="75%" stopColor="#fde08d" />
                <stop offset="100%" stopColor="#8f6b29" />
            </linearGradient>
        </defs>
    </svg>
);

export default GoldGradientDefs;
