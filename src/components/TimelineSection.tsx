import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import { Star, Sparkles } from 'lucide-react';

export function TimelineSection() {
  const events: Array<{ y: string; judul: string; d: string; lime?: boolean }> = [
    {
      y: "sejak 3000 SM – abad ke-1 M",
      judul: "Zaman Kuno & Tradisi Herbal",
      d: "Daun salam telah lama digunakan dalam pengobatan tradisional. Bangsa Sumeria, Mesir, dan Tiongkok memanfaatkan dedaunan aromatik sebagai ramuan herbal. Di Nusantara, daun salam menjadi bagian resep warisan turun-temurun untuk menjaga kebugaran dan kesehatan pencernaan.",
    },
    {
      y: "abad ke-7 – 1400-an",
      judul: "Jalur Rempah & Penyebaran Nusantara",
      d: "Melalui jalur rempah, daun salam (Syzygium polyanthum) menyebar di kepulauan Nusantara. Masyarakat Jawa, Sunda, dan Melayu memakainya sebagai bumbu masakan sekaligus obat tradisional untuk asam urat, kolesterol, dan gangguan pencernaan.",
    },
    {
      y: "1700-an – 1900-an",
      judul: "Kajian Botani & Dokumentasi Ilmiah",
      d: "Peneliti Eropa mulai mencatat klasifikasi ilmiah daun salam. Nama Syzygium polyanthum (Wight) Walp. dikenal dalam literatur botani. Kandungan minyak atsiri (sitral, eugenol) dan flavonoid mulai dipelajari secara ilmiah.",
    },
    {
      y: "1900-an – 1970-an",
      judul: "Isolasi Senyawa Aktif",
      d: "Penelitian menemukan senyawa aktif penting pada daun salam: flavonoid, tanin, saponin, alkaloid, dan minyak atsiri. Senyawa-senyawa ini terbukti memiliki aktivitas antioksidan, antibakteri, dan membantu menurunkan kadar gula serta kolesterol darah.",
    },
    {
      y: "1980-an – 2000-an",
      judul: "Era Herbal Terstandar",
      d: "Daun salam mulai diproduksi dalam bentuk kapsul, teh celup, dan ekstrak terstandar. Herbal ini mulai dikonsumsi rutin sebagai minuman kesehatan masyarakat modern di Indonesia.",
    },
    {
      y: "2010-an – kini",
      judul: "Inovasi Produk & Pemberdayaan Sekolah",
      d: "Inovasi pengolahan daun salam berkembang pesat. SMK Al Syairiyah Limpung memproduksi kapsul, kemasan, dan teh rebusan daun salam sebagai produk herbal unggulan, memberdayakan siswa sekaligus mengangkat kearifan lokal menjadi produk bernilai jual.",
      lime: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cream via-cream-darker to-cream relative overflow-hidden">

      {/* Ornamen background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-forest blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lime blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <SectionHeader
          badge="MATERI G"
          nomor="08"
          judulBold="SEJARAH"
          judulScript="Daun Salam"
        />

        {/* ---------- INTRO ---------- */}
        <FadeIn className="max-w-3xl mx-auto text-center mt-8 mb-20">
          <p className="font-sans text-grayish leading-relaxed">
            Perjalanan panjang <strong className="text-forest">daun salam</strong> —
            dari ramuan tradisional Nusantara hingga menjadi produk herbal unggulan
            yang diproduksi <strong className="text-forest">SMK Al Syairiyah Limpung</strong>.
          </p>
        </FadeIn>

        {/* ---------- TIMELINE VERTIKAL ---------- */}
        <div className="relative max-w-5xl mx-auto">

          {/* Garis vertikal tengah (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 
                          bg-gradient-to-b from-transparent via-forest/30 to-transparent 
                          hidden md:block" />

          {/* Garis vertikal kiri (mobile) */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[2px] 
                          bg-gradient-to-b from-transparent via-forest/30 to-transparent 
                          md:hidden" />

          {events.map((e, i) => {
            const isHighlight = e.lime;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative flex items-center mb-12 md:mb-16 
                            ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* ---------- KARTU ---------- */}
                <FadeIn
                  delay={i * 0.1}
                  className={`w-full pl-16 md:pl-0 md:w-[calc(50%-44px)] 
                              ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                >
                  <div
                    className={`group relative p-7 rounded-[26px] border 
                                transition-all duration-500 overflow-hidden
                                hover:-translate-y-2
                                ${isHighlight
                        ? 'bg-forest text-cream border-lime/50 shadow-xl shadow-lime/10'
                        : 'bg-white border-grayish/20 hover:border-lime/50 hover:shadow-2xl'
                      }`}
                  >
                    {/* Efek shine */}
                    <div className="absolute inset-0 
                                    bg-gradient-to-br from-lime/0 via-lime/10 to-lime/0 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-700 pointer-events-none" />

                    {/* Icon bintang (hanya highlight) */}
                    {isHighlight && (
                      <Star className="absolute top-4 right-4 w-5 h-5 text-lime animate-pulse" />
                    )}

                    {/* Badge tahun */}
                    <span
                      className={`inline-flex items-center gap-1.5 
                                  px-4 py-1.5 rounded-full 
                                  text-xs font-sans font-bold tracking-widest uppercase 
                                  mb-3 relative z-10 transition-colors duration-500
                                  ${isHighlight
                          ? 'bg-lime text-forest'
                          : 'bg-forest text-lime group-hover:bg-lime group-hover:text-forest'
                        }`}
                    >
                      {e.y}
                      {isHighlight && <Sparkles className="w-3.5 h-3.5 animate-pulse" />}
                    </span>

                    {/* Judul */}
                    <h3
                      className={`font-heading text-xl mb-2 relative z-10 
                                  transition-colors duration-500
                                  ${isHighlight
                          ? 'text-lime'
                          : 'text-forest group-hover:text-lime'
                        }`}
                    >
                      {isHighlight ? '⭐ ' : ''}{e.judul}
                    </h3>

                    {/* Deskripsi */}
                    <p
                      className={`font-sans text-sm leading-relaxed relative z-10 
                                  transition-colors duration-300
                                  ${isHighlight
                          ? 'text-cream/90'
                          : 'text-grayish group-hover:text-forest'
                        }`}
                    >
                      {e.d}
                    </p>

                    {/* Nomor urut besar */}
                    <span
                      className={`absolute -bottom-2 ${isLeft ? 'right-4' : 'left-4'} 
                                  font-heading text-6xl leading-none 
                                  transition-all duration-500 pointer-events-none
                                  ${isHighlight
                          ? 'text-lime/15'
                          : 'text-forest/5 group-hover:text-lime/15'
                        }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </FadeIn>

                {/* ---------- DOT TENGAH (desktop) ---------- */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 
                              w-12 h-12 rounded-full items-center justify-center 
                              z-10 transition-all duration-500 hover:scale-125
                              ${isHighlight
                      ? 'bg-lime border-4 border-forest shadow-[0_0_25px_6px_rgba(200,230,120,0.5)]'
                      : 'bg-cream border-4 border-forest hover:border-lime hover:shadow-[0_0_20px_4px_rgba(200,230,120,0.4)]'
                    }`}
                >
                  {isHighlight && (
                    <span className="absolute inset-0 rounded-full bg-lime/40 animate-ping" />
                  )}
                  {isHighlight ? (
                    <Star className="w-5 h-5 text-forest relative z-10" />
                  ) : (
                    <span className="font-heading text-forest text-sm relative z-10">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  )}
                </div>

                {/* ---------- DOT KIRI (mobile) ---------- */}
                <div
                  className={`md:hidden absolute left-[10px] top-6 
                              w-7 h-7 rounded-full flex items-center justify-center z-10
                              ${isHighlight
                      ? 'bg-lime border-2 border-forest shadow-[0_0_15px_3px_rgba(200,230,120,0.5)]'
                      : 'bg-cream border-2 border-forest'
                    }`}
                >
                  {isHighlight ? (
                    <Star className="w-3.5 h-3.5 text-forest" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-forest" />
                  )}
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-44px)]" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}