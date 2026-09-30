// @ts-nocheck
"use client";
import { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import { Maximize2, X } from 'lucide-react';

export function VideoSection() {
  const [zoomed, setZoomed] = useState(false);

  // Tutup pakai Escape
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoomed(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
              <p className="font-heading text-lg uppercase text-lime">Bahaya Kolesterol Tinggi</p>
              <p className="mt-1 font-sans text-xs text-cream/60">
                Klik tombol <span className="text-lime">⤢</span> untuk memperbesar
              </p>
              <a
                href="/videos/bahaya-kolesterol-tinggi.mp4"
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

      {/* Overlay: video diperbesar, rasio tetap natural */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label="Tutup"
            className="absolute top-5 right-5 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-cream hover:bg-lime hover:text-forest transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Video tanpa wrapper aspect — ukuran natural, dibatasi viewport */}
          <video
            className="max-h-[90vh] max-w-[95vw] rounded-2xl border border-lime/20 bg-black shadow-2xl"
            src="/videos/bahaya-kolesterol-tinggi.mp4"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          >
            Browser Anda tidak mendukung tag video.
          </video>
        </div>
      )}
    </section>
  );
}
export default VideoSection;