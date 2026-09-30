"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "motion/react";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    // ⬇️ DIUBAH: dari [-700, 500] → [-300, 200] biar tidak terlalu jauh turun
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-300, 200]),
        springConfig
    );
    return (
        <div
            ref={ref}
            // ⬇️ DIUBAH: dari h-[300vh] → h-[180vh], dan py-40 → py-20
            className="h-[180vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

// ⬇️ DIUBAH TOTAL: header disesuaikan dengan tema kesehatan
export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-16 md:py-24 px-4 w-full left-0 top-0">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-lime/70 mb-3">
                Edukasi Kesehatan
            </p>
            <h1 className="text-3xl md:text-6xl font-bold text-forest leading-tight">
                Mengenal <span className="font-script italic text-forest">Anti Kolesterol</span>
                <br />
                Lebih Dekat
            </h1>
            <p className="max-w-2xl text-sm md:text-base mt-6 text-grayish leading-relaxed">
                Dari pengertian, penggolongan, aturan pakai, efek samping, hingga pola hidup sehat —
                semua yang perlu kamu tahu tentang obat anti kolesterol ada di sini.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-72 w-[24rem] relative shrink-0"
        >
            <a
                href={product.link}
                className="block group-hover/product:shadow-2xl"
            >
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black rounded-xl pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-heading text-lg uppercase">
                {product.title}
            </h2>
        </motion.div>
    );
};