"use client";
import React from "react";

type Props = {
    children: React.ReactNode;
    color?: string;
    speed?: number;
    chaos?: number;
    borderRadius?: number;
    className?: string;
};

export function ElectricBorder({
    children,
    color = "#B5E048",
    borderRadius = 16,
    className = "",
}: Props) {
    return (
        <div className={`relative ${className}`} style={{ borderRadius }}>
            {/* Glow tipis — tidak bocor keluar card */}
            <div
                className="absolute inset-0 rounded-[inherit] opacity-30 blur-[2px] pointer-events-none"
                style={{ background: color }}
                aria-hidden="true"
            />

            {/* Border garis */}
            <div
                className="relative rounded-[inherit] p-[1.5px] h-full w-full"
                style={{ background: color }}
            >
                <div
                    className="rounded-[inherit] overflow-hidden h-full w-full"
                    style={{ borderRadius: Math.max(borderRadius - 2, 0) }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ElectricBorder;