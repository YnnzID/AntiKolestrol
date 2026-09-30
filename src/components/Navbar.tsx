'use client';

import { useEffect, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('#');

  const menu = [
    { label: 'Beranda', href: '#' },
    { label: 'Materi', href: '#materi' },
    { label: 'Sejarah', href: '#sejarah' },
    { label: 'Video', href: '#video' },
    { label: 'Kuis', href: '#kuis' },
    { label: 'Tim', href: '#tim' },
    { label: 'Tentang', href: '#about' },
  ];

  const NAV_OFFSET = 90;

  const scrollToSection = (href: string) => {
    if (!href || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', '#');
      return;
    }
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
    history.replaceState(null, '', href);
  };

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      if (y > lastY && y > 120) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      lastY = y;

      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min((y / total) * 100, 100) : 0);

      const sections = ['#tim', '#materi', '#sejarah', '#video', '#kuis', '#about'];
      const currentY = y + 140;
      let current = '#';
      for (const id of sections) {
        const element = document.querySelector(id) as HTMLElement | null;
        if (element && element.offsetTop <= currentY) current = id;
      }
      setActive(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${hidden && !mobileOpen ? '-translate-y-full' : 'translate-y-0'}
          ${scrolled
            ? 'bg-white/95 backdrop-blur-xl py-2 shadow-[0_4px_25px_rgba(20,83,45,0.12)]'
            : 'bg-gradient-to-b from-white via-white/95 to-white/80 py-2.5 sm:py-3'}
        `}
      >
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-green-800/20 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-lime-500 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-green-800" />
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-lime-500 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 animate-pulse" />
            </div>
            <span className="font-heading font-bold text-base sm:text-lg lg:text-xl tracking-tight text-green-800 whitespace-nowrap">
              Edukasya<span className="text-lime-500">Club</span>
            </span>
          </Link>

          <div className="hidden lg:flex relative items-center gap-0.5 xl:gap-1 p-1 rounded-full bg-green-800/[0.04] border border-green-800/10 backdrop-blur-xl">
            {menu.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className="relative px-3 xl:px-4 py-1.5 xl:py-2 rounded-full text-[10px] xl:text-[11px] font-bold tracking-[0.14em] xl:tracking-[0.16em] uppercase font-sans transition-colors duration-300 group whitespace-nowrap cursor-pointer"
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-green-800 shadow-[0_0_18px_rgba(22,101,52,0.25)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-green-800 opacity-0 transition-all duration-300 group-hover:opacity-10" />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-green-900/70 group-hover:text-green-900'
                      }`}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="lg:hidden relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-800/10 border border-green-800/30 flex items-center justify-center shrink-0 text-green-800 transition-all duration-300 hover:bg-green-800 hover:text-lime-400 active:scale-95"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-40 lg:hidden bg-green-900 transition-all duration-500
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 max-w-3xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="text-[9px] uppercase tracking-[0.35em] text-lime-400/60">
              NAVIGATION
            </span>
          </div>

          {menu.map((item, index) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item.href)}
                className={`
                  relative py-3.5 sm:py-4 md:py-5 border-b border-white/10
                  flex items-center gap-3 sm:gap-4 transition-all duration-500 cursor-pointer
                  ${mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
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
                    ${isActive ? 'text-lime-400 translate-x-2' : 'text-white/80'}
                  `}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;