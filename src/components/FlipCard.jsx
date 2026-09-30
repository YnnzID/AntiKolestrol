// @ts-nocheck
'use client';

import { useState } from 'react';

export default function FlipCard({
    front = null,
    back = null,
    width = 280,
    height = 360,
    radius = 20,
    background = '#1E3A1E',
    color = '#F5F1E8',
    ariaLabel = 'Flip card',
    className = '',
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`relative select-none ${className}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                perspective: '1200px',
                cursor: 'pointer',
            }}
            onClick={() => setIsFlipped(f => !f)}
            role="button"
            tabIndex={0}
            aria-pressed={isFlipped}
            aria-label={ariaLabel}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsFlipped(f => !f);
                }
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.7s',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* DEPAN */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: `${radius}px`,
                        background,
                        color,
                        overflow: 'hidden',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        boxShadow: '0 10px 30px -18px rgba(0,0,0,0.8)',
                    }}
                >
                    {front}
                </div>

                {/* BELAKANG */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: `${radius}px`,
                        background,
                        color,
                        overflow: 'hidden',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        boxShadow: '0 10px 30px -18px rgba(0,0,0,0.8)',
                    }}
                >
                    {back}
                </div>
            </div>
        </div>
    );
}