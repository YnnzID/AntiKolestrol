'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('#');

  const menu = [
    { label: 'Beranda', href: '#' },
    { label: 'Tim', href: '#tim' },
    { label: 'Materi', href: '#materi' },
    { label: 'Sejarah', href: '#sejarah' },
    { label: 'Video', href: '#video' },
    { label: 'Kuis', href: '#kuis' },
  ];

  /* =========================
     SCROLL
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);

      const sections = ['#tim', '#materi', '#sejarah', '#video', '#kuis'];
      const currentY = y + 140;
      let current = '#';

      for (const id of sections) {
        const element = document.querySelector(id) as HTMLElement | null;
        if (element && element.offsetTop <= currentY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* =========================
     MOBILE SCROLL LOCK
  ========================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMenuClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? 'bg-white/95 backdrop-blur-xl py-2.5 sm:py-3 shadow-[0_4px_25px_rgba(20,83,45,0.12)]'
            : 'bg-gradient-to-b from-white via-white/95 to-white/80 py-4 sm:py-5 lg:py-6'}
        `}
      >
        {/* subtle bottom line */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 h-px
            bg-green-800/20 transition-opacity duration-500
            ${scrolled ? 'opacity-100' : 'opacity-0'}
          `}
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">

          {/* =================================================
              LOGO
          ================================================== */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            {/* Ikon Buku + Sparkles */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-green-800" />
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-500 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 animate-pulse" />
            </div>

            {/* Teks EdukasyaClub */}
            <span className="font-heading font-bold text-base sm:text-lg lg:text-xl tracking-tight text-green-800 whitespace-nowrap">
              Edukasya<span className="text-lime-500">Club</span>
            </span>
          </Link>

          {/* =================================================
              DESKTOP MENU (muncul di lg, bukan md)
          ================================================== */}
          <div
            className="
              hidden lg:flex relative items-center gap-0.5 xl:gap-1
              p-1 rounded-full
              bg-green-800/[0.04] border border-green-800/10
              backdrop-blur-xl
            "
          >
            {menu.map((item) => {
              const isActive = active === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="
                    relative px-3 xl:px-4 py-2 xl:py-2.5 rounded-full
                    text-[10px] xl:text-[11px] font-bold tracking-[0.14em] xl:tracking-[0.16em] uppercase font-sans
                    transition-colors duration-300
                    group whitespace-nowrap
                  "
                >
                  {/* ACTIVE SELECTOR */}
                  {isActive && (
                    <span
                      className="
                        absolute inset-0 rounded-full bg-green-800
                        shadow-[0_0_18px_rgba(22,101,52,0.25)]
                        transition-all duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                      "
                    />
                  )}

                  {/* hover background */}
                  {!isActive && (
                    <span
                      className="
                        absolute inset-0 rounded-full bg-green-800
                        opacity-0 transition-all duration-300
                        group-hover:opacity-10
                      "
                    />
                  )}

                  {/* TEXT */}
                  <span
                    className={`
                      relative z-10 transition-colors duration-300
                      ${isActive
                        ? 'text-white'
                        : 'text-green-900/70 group-hover:text-green-900'
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* =================================================

          {/* =================================================
              MOBILE / TABLET BUTTON (muncul di bawah lg)
          ================================================== */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="
              lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 rounded-full
              bg-green-800/10 border border-green-800/30
              flex items-center justify-center shrink-0
              text-green-800
              transition-all duration-300
              hover:bg-green-800 hover:text-lime-400
              active:scale-95
            "
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE / TABLET MENU
      ====================================================== */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          bg-green-900
          transition-all duration-500
          ${mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* subtle background pattern */}
        <div
          className="
            absolute inset-0 opacity-[0.05]
            bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
            bg-[size:24px_24px]
          "
        />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 max-w-3xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="text-[9px] uppercase tracking-[0.35em] text-lime-400/60">
              NAVIGATION
            </span>
          </div>

          {menu.map((item, index) => {
            const isActive = active === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleMenuClick(item.href)}
                className={`
                  relative py-3.5 sm:py-4 md:py-5 border-b border-white/10
                  flex items-center gap-3 sm:gap-4
                  transition-all duration-500
                  ${mobileOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                  }
                `}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="text-[9px] font-mono text-white/20 w-5 shrink-0">
                  0{index + 1}
                </span>

                <span
                  className={`
                    font-heading text-xl sm:text-2xl md:text-3xl uppercase tracking-wide
                    transition-all duration-300
                    ${isActive
                      ? 'text-lime-400 translate-x-2'
                      : 'text-white/80'
                    }
                  `}
                >
                  {item.label}
                </span>

                {isActive && (
                  <span
                    className="
                      ml-auto w-2 h-2 rounded-full bg-lime-400
                      shadow-[0_0_12px_rgba(163,230,53,0.7)]
                    "
                  />
                )}
              </Link>
            );
          })}


        </div>
      </div>
    </>
  );
}