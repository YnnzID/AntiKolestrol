// @ts-nocheck
"use client";
import { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import { Maximize2, X, ArrowLeft } from 'lucide-react';

export function VideoSection() {
  const [zoomed, setZoomed] = useState(false);

  // Escape untuk tutup
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false);
    };
    window.addEventListener('keydown', onKey);

    // Kunci scroll body saat zoom
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoomed]);

  return (
    <section className="relative bg-forest text-cream border-t border-forest/10 overflow-hidden py-16 md:py-20">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#2d5016 1px, transparent 1px), linear-gradient(90deg, #2d5016 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="MULTIMEDIA"
          nomor="09"
          judulBold="VIDEO"
          judulScript="Edukasi"
          dark
        />

        <FadeIn className="mt-8 flex justify-center">
          {/* Kotak awal 3:4 */}
          <div className="w-full max-w-[420px]">
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-lime/20 bg-black shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/kolestrol.mp4"
                poster="/videos/kolestrol-poster.jpg"
                controls
                playsInline
                preload="metadata"
              >
                Browser Anda tidak mendukung tag video.
              </video>

              <button
                type="button"
                onClick={() => setZoomed(true)}
                aria-label="Perbesar video"
                className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-forest/70 text-lime backdrop-blur-md border border-lime/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-lime hover:text-forest"
              >
                <Maximize2 className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="font-heading text-lg uppercase text-lime">
                Bahaya Kolesterol Tinggi
              </p>
              <p className="mt-1 font-sans text-xs text-cream/60">
                Klik tombol <span className="text-lime">⤢</span> untuk memperbesar
              </p>
              <a
                href="/videos/kolestrol.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-sans text-[10px] uppercase tracking-[0.25em] text-lime/80 border-b border-lime/40 hover:border-lime pb-0.5"
              >
                Buka di tab baru →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Overlay FULL SCREEN */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[999] bg-black flex flex-col"
          onClick={() => setZoomed(false)}
        >
          {/* Header overlay dengan tombol kembali */}
          <div
            className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-black/80 backdrop-blur-md border-b border-lime/20 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Kembali (kiri) */}
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Kembali"
              className="flex items-center gap-2 rounded-full bg-lime text-forest px-4 py-2 font-sans text-xs font-bold uppercase tracking-widest hover:bg-cream transition-colors"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              Kembali
            </button>

            {/* Judul (tengah) */}
            <p className="hidden md:block font-heading text-sm md:text-base uppercase text-lime tracking-wider">
              Bahaya Kolesterol Tinggi
            </p>

            {/* Tombol X (kanan) */}
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Tutup"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-lime hover:text-forest transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Area video full screen */}
          <div
            className="flex-1 flex items-center justify-center overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-contain"
              src="/videos/kolestrol.mp4"
              poster="/videos/kolestrol-poster.jpg"
              controls
              autoPlay
              playsInline
            >
              Browser Anda tidak mendukung tag video.
            </video>
          </div>

          {/* Footer hint (opsional, auto-hide di HP) */}
          <div
            className="hidden md:flex items-center justify-center px-6 py-3 bg-black/80 border-t border-lime/20 text-cream/50 text-[11px] font-sans shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            Tekan <kbd className="mx-1 px-2 py-0.5 rounded bg-white/10 text-cream/80 font-mono text-[10px]">ESC</kbd> untuk keluar
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;