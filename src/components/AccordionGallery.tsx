"use client";
import React, { useState } from "react";

type Item = {
    image: string;
    label: string;
    link?: string;
    alt?: string;
};

type Props = {
    items: Item[];
    trigger?: "hover" | "click";
    defaultIndex?: number;
    expandRatio?: number;
    height?: number;
    gap?: number;
    radius?: number;
    accentColor?: string;
    overlayColor?: string;
    textColor?: string;
    grayscale?: boolean;
    showLabels?: boolean;
};

export function AccordionGallery({
    items,
    trigger = "hover",
    defaultIndex = 0,
    height = 460,
    gap = 10,
    radius = 16,
    accentColor = "#B5E048",
    overlayColor = "#1E3A1E",
    textColor = "#F5F1E8",
    grayscale = true,
    showLabels = true,
}: Props) {
    const [active, setActive] = useState(defaultIndex);

    return (
        <div
            className="flex w-full overflow-hidden"
            style={{ height, gap }}
        >
            {items.map((item, i) => {
                const isActive = i === active;

                return (
                    <div
                        key={i}
                        onMouseEnter={() => trigger === "hover" && setActive(i)}
                        onClick={() => trigger === "click" && setActive(i)}
                        className="relative flex-1 overflow-hidden transition-all duration-500 ease-out will-change-[flex]"
                        style={{
                            flexGrow: isActive ? 4 : 1,
                            borderRadius: radius,
                            cursor: trigger === "click" ? "pointer" : "default",
                        }}
                    >
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20"
                                aria-label={item.label}
                            />
                        ) : null}

                        <img
                            src={item.image}
                            alt={item.alt || item.label}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                            style={{
                                filter: grayscale && !isActive ? "grayscale(1)" : "grayscale(0)",
                                transform: isActive ? "scale(1.03)" : "scale(1)",
                            }}
                        />

                        {/* Overlay gradient */}
                        <div
                            className="absolute inset-0 transition-opacity duration-500"
                            style={{
                                background: `linear-gradient(to top, ${overlayColor}cc 0%, ${overlayColor}00 55%)`,
                                opacity: isActive ? 1 : 0.85,
                            }}
                        />

                        {/* Accent line */}
                        <div
                            className="absolute left-0 top-0 h-full transition-all duration-500"
                            style={{
                                width: isActive ? 4 : 0,
                                background: accentColor,
                            }}
                        />

                        {showLabels && (
                            <div
                                className="absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-500"
                                style={{
                                    opacity: isActive ? 1 : 0.7,
                                    color: textColor,
                                }}
                            >
                                <span className="font-sans text-xs uppercase tracking-widest font-bold">
                                    {item.label}
                                </span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default AccordionGallery;