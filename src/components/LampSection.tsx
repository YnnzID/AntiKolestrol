"use client";

import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export function LampSection() {
    return (
        <LampContainer className="bg-forest">
            <motion.h2
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="
          mt-8 py-4
          bg-gradient-to-br from-lime via-white to-lime
          bg-clip-text text-center
          text-4xl md:text-6xl lg:text-7xl
          font-heading font-medium tracking-tight
          text-transparent
        "
            >
                Kenali <br /> Obat Anti Kolesterol
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                className="
          mt-6 max-w-xl text-center
          font-sans text-cream/80 text-base md:text-lg
          leading-relaxed
        "
            >
                Dari golongan statin, fibrat, hingga penghambat penyerapan kolesterol —
                pahami cara kerjanya sebelum dikonsumsi.
            </motion.p>

            <motion.a
                href="#materi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: "easeInOut" }}
                className="
          group mt-8 inline-flex items-center gap-2
          px-8 py-4 rounded-full
          bg-lime text-forest font-bold
          hover:-translate-y-1
          hover:shadow-[0_0_40px_8px_rgba(200,230,120,0.5)]
          transition-all duration-500
        "
            >
                Mulai Belajar
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                </span>
            </motion.a>
        </LampContainer>
    );
}