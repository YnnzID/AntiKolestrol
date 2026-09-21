'use client';

import React, { useEffect, useState } from 'react';

interface PreloaderProps {
    onFinish?: () => void;
}

const Preloader = ({ onFinish }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onFinish?.(), 400);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-[9999] bg-[#F5F5F0] flex items-center justify-center">
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2D4A2D] to-[#C4E538] rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="relative flex flex-col items-center gap-4 p-8">
                    <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-[#2D4A2D] animate-spin"></div>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#2D4A2D] to-[#C4E538] rounded blur opacity-20"></div>
                        <span className="relative text-[#1A1A1A] text-sm font-medium tracking-wider uppercase">
                            Memuat... {progress}%
                        </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-48 h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-[#2D4A2D] to-[#C4E538] transition-all duration-100"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;