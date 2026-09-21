'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollProgress() {
    const [scroll, setScroll] = useState(0);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const current = window.scrollY;
            const percent = total > 0 ? (current / total) * 100 : 0;
            setScroll(percent);
            setShowTop(current > 400);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* ---------- PROGRESS BAR DI ATAS ---------- */}
            <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent pointer-events-none">
                <div
                    className="h-full bg-gradient-to-r from-forest via-lime to-forest 
                     shadow-[0_0_12px_2px_rgba(200,230,120,0.6)]
                     transition-[width] duration-150 ease-out
                     relative"
                    style={{ width: `${scroll}%` }}
                >
                    {/* Glow di ujung bar */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 
                          w-3 h-3 bg-lime rounded-full 
                          shadow-[0_0_16px_6px_rgba(200,230,120,0.9)]" />
                </div>
            </div>

            {/* ---------- TOMBOL BACK TO TOP ---------- */}
            <button
                onClick={scrollToTop}
                aria-label="Kembali ke atas"
                className={`fixed bottom-6 right-6 z-[100]
                    w-12 h-12 rounded-full 
                    bg-forest text-lime 
                    border-2 border-lime/40
                    flex items-center justify-center
                    shadow-[0_0_25px_6px_rgba(45,80,22,0.4)]
                    transition-all duration-500 
                    hover:scale-110 hover:bg-lime hover:text-forest 
                    hover:shadow-[0_0_35px_10px_rgba(200,230,120,0.5)]
                    ${showTop
                        ? 'translate-y-0 opacity-100 pointer-events-auto'
                        : 'translate-y-16 opacity-0 pointer-events-none'
                    }`}
            >
                <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
            </button>
        </>
    );
}