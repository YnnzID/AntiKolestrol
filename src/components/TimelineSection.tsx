"use client";

import * as React from "react";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import {
  Scroll,
  Ship,
  BookOpen,
  FlaskConical,
  Package,
  Sparkles,
  Leaf,
} from "lucide-react";

/* ============================================================
   MINI TIMELINE COMPONENTS (self-contained, no external dep)
   ============================================================ */

type TimelineCtx = { activeStep: number };
const TimelineCtx = React.createContext<TimelineCtx>({ activeStep: 1 });

function Timeline({
  defaultValue = 1,
  children,
  className = "",
}: {
  defaultValue?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TimelineCtx.Provider value={{ activeStep: defaultValue }}>
      <div className={`flex flex-col ${className}`}>{children}</div>
    </TimelineCtx.Provider>
  );
}

function TimelineItem({
  step,
  isLast,
  children,
  className = "",
}: {
  step: number;
  isLast?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const { activeStep } = TimelineCtx ? React.useContext(TimelineCtx) : { activeStep: 1 };
  const isCompleted = step < activeStep;
  const isCurrent = step === activeStep;

  return (
    <div
      className={`relative flex gap-5 ${!isLast ? "pb-12" : ""} ${className}`}
      data-completed={isCompleted || undefined}
      data-current={isCurrent || undefined}
    >
      {children}
    </div>
  );
}

function TimelineIndicator({
  children,
  state = "pending",
}: {
  children?: React.ReactNode;
  state?: "pending" | "current" | "completed";
}) {
  const base =
    "relative z-10 flex-shrink-0 size-12 rounded-full flex items-center justify-center transition-all duration-300 border-2";

  const styles: Record<string, string> = {
    pending: "bg-white border-forest/20 text-grayish",
    current:
      "bg-lime border-forest text-forest shadow-[0_0_0_4px_rgba(181,224,72,0.25)]",
    completed: "bg-forest border-lime text-lime shadow-lg shadow-forest/20",
  };

  return <div className={`${base} ${styles[state]}`}>{children}</div>;
}

function TimelineSeparator({ show = true }: { show?: boolean }) {
  if (!show) return null;
  return (
    <div
      className="absolute left-6 top-12 bottom-0 w-[2px] bg-gradient-to-b from-forest/30 to-transparent"
      aria-hidden="true"
    />
  );
}

function TimelineHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 min-w-0 pt-1">{children}</div>;
}

function TimelineDate({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-grayish">
      {children}
    </p>
  );
}

function TimelineTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-lg md:text-xl text-forest mt-1 leading-tight">
      {children}
    </h3>
  );
}

function TimelineContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-sm text-grayish leading-relaxed mt-3">
      {children}
    </p>
  );
}

/* ============================================================
   DATA & MAIN SECTION
   ============================================================ */

type Event = {
  y: string;
  periode: string;
  judul: string;
  d: string;
  icon: React.ReactNode;
};

export function TimelineSection() {
  const events: Event[] = [
    {
      y: "3000 SM – 1 M",
      periode: "Zaman Kuno",
      judul: "Tradisi Herbal Purba",
      d: "Daun salam telah lama digunakan dalam pengobatan tradisional. Bangsa Sumeria, Mesir, dan Tiongkok memanfaatkan dedaunan aromatik sebagai ramuan herbal. Di Nusantara, daun salam menjadi bagian resep warisan turun-temurun untuk menjaga kebugaran dan kesehatan pencernaan.",
      icon: <Scroll className="w-5 h-5" strokeWidth={2} />,
    },
    {
      y: "abad 7 – 1400-an",
      periode: "Jalur Rempah",
      judul: "Penyebaran di Nusantara",
      d: "Melalui jalur rempah, daun salam (Syzygium polyanthum) menyebar di kepulauan Nusantara. Masyarakat Jawa, Sunda, dan Melayu memakainya sebagai bumbu masakan sekaligus obat tradisional untuk asam urat, kolesterol, dan gangguan pencernaan.",
      icon: <Ship className="w-5 h-5" strokeWidth={2} />,
    },
    {
      y: "1700 – 1900-an",
      periode: "Kajian Ilmiah",
      judul: "Dokumentasi Botani",
      d: "Peneliti Eropa mulai mencatat klasifikasi ilmiah daun salam. Nama Syzygium polyanthum (Wight) Walp. dikenal dalam literatur botani. Kandungan minyak atsiri (sitral, eugenol) dan flavonoid mulai dipelajari secara ilmiah.",
      icon: <BookOpen className="w-5 h-5" strokeWidth={2} />,
    },
    {
      y: "1900 – 1970-an",
      periode: "Isolasi Senyawa",
      judul: "Penemuan Senyawa Aktif",
      d: "Penelitian menemukan senyawa aktif penting pada daun salam: flavonoid, tanin, saponin, alkaloid, dan minyak atsiri. Senyawa-senyawa ini terbukti memiliki aktivitas antioksidan, antibakteri, dan membantu menurunkan kadar gula serta kolesterol darah.",
      icon: <FlaskConical className="w-5 h-5" strokeWidth={2} />,
    },
    {
      y: "1980 – 2000-an",
      periode: "Herbal Terstandar",
      judul: "Era Produksi Modern",
      d: "Daun salam mulai diproduksi dalam bentuk kapsul, teh celup, dan ekstrak terstandar. Herbal ini mulai dikonsumsi rutin sebagai minuman kesehatan masyarakat modern di Indonesia.",
      icon: <Package className="w-5 h-5" strokeWidth={2} />,
    },
    {
      y: "2010 – kini",
      periode: "Inovasi Sekolah",
      judul: "Pemberdayaan & Produk Unggulan",
      d: "Inovasi pengolahan daun salam berkembang pesat. SMK Al Syairiyah Limpung memproduksi kapsul, kemasan, dan teh rebusan daun salam sebagai produk herbal unggulan, memberdayakan siswa sekaligus mengangkat kearifan lokal menjadi produk bernilai jual.",
      icon: <Sparkles className="w-5 h-5" strokeWidth={2} />,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream via-[#EFEAD8] to-cream overflow-hidden">
      {/* Ornamen background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-forest blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-lime blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="MATERI G"
          nomor="08"
          judulBold="SEJARAH"
          judulScript="Daun Salam"
        />

        {/* ---------- INTRO CARD ---------- */}
        <FadeIn className="max-w-3xl mx-auto mt-10 mb-16">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-7 md:p-9 border border-forest/10 shadow-[0_10px_40px_-15px_rgba(30,58,30,0.15)]">
            <div className="absolute -top-5 -left-3 md:-left-5 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-forest flex items-center justify-center shadow-lg rotate-[-8deg]">
              <Leaf className="w-6 h-6 md:w-7 md:h-7 text-lime" strokeWidth={2} />
            </div>
            <p className="font-sans text-grayish leading-relaxed text-sm md:text-base pl-8 md:pl-10">
              Perjalanan panjang <strong className="text-forest">daun salam</strong>{" "}
              — dari ramuan tradisional Nusantara hingga menjadi produk herbal
              unggulan yang diproduksi{" "}
              <strong className="text-forest">SMK Al Syairiyah Limpung</strong>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 pl-8 md:pl-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/20 text-forest text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                6 Era Sejarah
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/10 text-forest text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                5000+ Tahun
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ---------- TIMELINE ---------- */}
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <Timeline defaultValue={events.length}>
              {events.map((e, i) => {
                const step = i + 1;
                const isLast = i === events.length - 1;
                const isLatest = isLast;

                return (
                  <TimelineItem key={i} step={step} isLast={isLast}>
                    {/* Indicator */}
                    <div className="relative">
                      <TimelineIndicator state={isLatest ? "current" : "completed"}>
                        {e.icon}
                      </TimelineIndicator>
                      {!isLast && <TimelineSeparator />}
                    </div>

                    {/* Content block */}
                    <div className="flex-1 min-w-0 pt-1">
                      <TimelineDate>
                        {String(step).padStart(2, "0")} · {e.periode} · {e.y}
                      </TimelineDate>
                      <TimelineTitle>{e.judul}</TimelineTitle>
                      <TimelineContent>{e.d}</TimelineContent>
                    </div>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </FadeIn>

        {/* ---------- PENUTUP ---------- */}
        <FadeIn className="max-w-2xl mx-auto mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-forest text-cream">
            <Leaf className="w-4 h-4 text-lime" strokeWidth={2.5} />
            <p className="font-sans text-xs md:text-sm tracking-wide">
              <strong className="text-lime">Warisan Nusantara</strong> yang terus
              hidup dari generasi ke generasi
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default TimelineSection;