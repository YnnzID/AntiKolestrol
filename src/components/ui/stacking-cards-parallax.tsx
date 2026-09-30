"use client";

import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";
// Kalau pakai `motion` package (bukan framer-motion), ganti jadi:
// import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

import Image from "next/image";

export type StackingCardItem = {
    title: string;
    description: string;
    color?: string;
    image?: string;
    link?: string;
    badge?: string;
    tags?: string[];
};

type CardProps = {
    i: number;
    item: StackingCardItem;
    total: number;
    progress: MotionValue<number>;
};

const Card = ({ i, item, total, progress }: CardProps) => {
    const targetScale = 1 - (total - i) * 0.05;
    const range: [number, number] = [i * (1 / total), 1];
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="sticky top-0 flex h-screen items-center justify-center">
            <motion.div
                style={{
                    backgroundColor: item.color ?? "#1E3A1E",
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="relative flex h-[500px] w-[90%] max-w-[1000px] flex-col rounded-[25px] p-8 md:p-12 text-cream [transform-origin:top] border border-lime/20 shadow-2xl"
            >
                {item.badge && (
                    <span className="absolute left-6 top-6 md:left-8 md:top-8 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-lime/70">
                        {item.badge}
                    </span>
                )}

                <span
                    className="pointer-events-none absolute right-4 top-2 font-heading text-[120px] leading-none text-white/[0.04] select-none"
                    aria-hidden="true"
                >
                    {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="m-0 text-center font-heading text-2xl md:text-[28px] font-semibold uppercase text-lime">
                    {item.title}
                </h2>

                <div className="mt-8 flex flex-col md:flex-row h-full gap-6 md:gap-12">
                    <div className="relative md:top-[10%] w-full md:w-2/5">
                        <p className="font-sans text-sm md:text-base leading-relaxed text-cream/90 whitespace-pre-line">
                            {item.description}
                        </p>

                        {item.tags && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-lime"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-lime underline decoration-lime/40 hover:decoration-lime transition-colors"
                            >
                                Selengkapnya
                                <svg
                                    width="22"
                                    height="12"
                                    viewBox="0 0 22 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        )}
                    </div>

                    <div className="relative h-48 md:h-full w-full md:w-3/5 overflow-hidden rounded-[25px] bg-black/20">
                        {item.image && (
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 90vw, 600px"
                                className="object-cover"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export function StackingCardsParallax({
    items,
}: {
    items: StackingCardItem[];
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className="relative w-full">
            {items.map((item, i) => (
                <Card
                    key={`${item.title}-${i}`}
                    i={i}
                    item={item}
                    total={items.length}
                    progress={scrollYProgress}
                />
            ))}
        </div>
    );
}

export default StackingCardsParallax;