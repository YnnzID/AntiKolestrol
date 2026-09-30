'use client';

import CardNav, { type CardNavItem } from './CardNav';
import { BookOpen, Sparkles } from 'lucide-react';

export default function NavbarWrapper() {
    const NAV_OFFSET = 90;

    const scrollTo = (href: string) => {
        if (!href || href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const el = document.querySelector(href) as HTMLElement | null;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    // ⬇️ INI YANG PENTING: kasih tipe CardNavItem[]
    const items: CardNavItem[] = [
        {
            label: 'Belajar',
            bgColor: '#14532d',
            textColor: '#fff',
            links: [
                {
                    label: 'Materi',
                    ariaLabel: 'Materi',
                    href: '#materi',
                    onClick: (e) => {
                        e.preventDefault();
                        scrollTo('#materi');
                    },
                },
                {
                    label: 'Sejarah',
                    ariaLabel: 'Sejarah',
                    href: '#sejarah',
                    onClick: (e) => {
                        e.preventDefault();
                        scrollTo('#sejarah');
                    },
                },
            ],
        },
        {
            label: 'Interaktif',
            bgColor: '#166534',
            textColor: '#fff',
            links: [
                {
                    label: 'Video',
                    ariaLabel: 'Video',
                    href: '#video',
                    onClick: (e) => {
                        e.preventDefault();
                        scrollTo('#video');
                    },
                },
                {
                    label: 'Kuis',
                    ariaLabel: 'Kuis',
                    href: '#kuis',
                    onClick: (e) => {
                        e.preventDefault();
                        scrollTo('#kuis');
                    },
                },
            ],
        },
        {
            label: 'Lainnya',
            bgColor: '#15803d',
            textColor: '#fff',
            links: [
                {
                    label: 'Tim',
                    ariaLabel: 'Tim',
                    href: '#tim',
                    onClick: (e) => {
                        e.preventDefault();
                        scrollTo('#tim');
                    },
                },
                {
                    label: 'Tentang',
                    ariaLabel: 'Tentang',
                    href: '#about',
                    onClick: (e) => {
                        e.preventDefault();
                        scrollTo('#about');
                    },
                },
            ],
        },
    ];

    return (
        <CardNav
            logo={
                <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-green-800" />
                        <Sparkles className="w-3 h-3 text-lime-500 absolute -top-0.5 -right-0.5 animate-pulse" />
                    </div>
                    <span className="font-bold text-green-800 text-base">
                        Edukasya<span className="text-lime-500">Club</span>
                    </span>
                </div>
            }
            logoAlt="EdukasyaClub"
            items={items}
            baseColor="#ffffff"
            menuColor="#14532d"
            buttonBgColor="#14532d"
            buttonTextColor="#ffffff"
            ctaLabel="Mulai Belajar"
            onCtaClick={() => scrollTo('#materi')}
            ease="power3.out"
        />
    );
}