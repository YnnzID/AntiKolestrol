'use client';

import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import { videos } from '../data/video';
import { Play } from 'lucide-react';

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  // Video ID dari https://youtu.be/YYjgQS3DXQ8
  const YOUTUBE_ID = 'YYjgQS3DXQ8';
  const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_ID}`;

  return (
    <section className="py-24 bg-forest text-cream">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="MULTIMEDIA"
          nomor="09"
          judulBold="VIDEO"
          judulScript="Edukasi"
          dark
        />

        <FadeIn className="relative aspect-video w-full rounded-[32px] overflow-hidden bg-forest-dark border border-lime/20 mb-8">
          <div
            onClick={() => setPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setPlaying(true);
            }}
            className="absolute inset-0 w-full h-full cursor-pointer group"
          >
            {!playing ? (
              <>
                {/* Thumbnail dari YouTube */}
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                  alt={videos[0]?.title || 'Video Edukasi'}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  onError={(e) => {
                    // fallback kalau maxresdefault tidak tersedia
                    (e.currentTarget as HTMLImageElement).src =
                      `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;
                  }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-forest w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-forest-dark to-transparent pointer-events-none">
                  <h3 className="font-heading text-3xl uppercase">
                    {videos[0]?.title || 'Video Edukasi'}
                  </h3>
                  <p className="text-cream/60 text-sm mt-1">
                    Klik untuk memutar video
                  </p>
                </div>
              </>
            ) : (
              /* YouTube iframe */
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Video Edukasi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              />
            )}
          </div>
        </FadeIn>

        {/* Link fallback ke YouTube */}
        <FadeIn className="text-center">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-lime transition-colors text-sm font-sans"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Buka di YouTube jika video tidak muncul
          </a>
        </FadeIn>
      </div>
    </section>
  );
}