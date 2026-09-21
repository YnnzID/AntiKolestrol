'use client';
import { useEffect } from 'react';

export function ScrollReveal() {
    useEffect(() => {
        // Tunggu sampai semua render selesai
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll(
                'section:not([data-no-reveal])'
            );

            // Set initial state HANYA kalau elemen BELUM di viewport
            const elementsToAnimate: HTMLElement[] = [];

            elements.forEach((el) => {
                const htmlEl = el as HTMLElement;
                const rect = htmlEl.getBoundingClientRect();

                // Kalau elemen sudah di viewport → jangan animasi
                if (rect.top < window.innerHeight) return;

                // Skip navbar/footer
                if (htmlEl.closest('nav') || htmlEl.closest('footer')) return;

                htmlEl.style.opacity = '0';
                htmlEl.style.transform = 'translateY(40px)';
                htmlEl.style.transition =
                    'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';

                elementsToAnimate.push(htmlEl);
            });

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const el = entry.target as HTMLElement;
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                            observer.unobserve(el);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            elementsToAnimate.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return null;
}