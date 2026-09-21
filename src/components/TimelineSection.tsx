import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import { Star, Sparkles } from 'lucide-react';

export function TimelineSection() {
  const events = [
    { y: "1897", judul: "Aspirin Disintesis", d: "Felix Hoffmann mensintesis asam asetilsalisilat di Bayer, membuka era obat sintetik modern." },
    { y: "1928", judul: "Penemuan Penisilin", d: "Alexander Fleming menemukan penisilin, awal era antibiotik yang menyelamatkan jutaan nyawa." },
    { y: "1950-an", judul: "Era Obat Sintetik", d: "Booming pengembangan obat sintetik dan pembentukan kerangka uji klinis modern." },
    { y: "1962", judul: "Amandemen Kefauver-Harris", d: "FDA mewajibkan bukti efikasi & keamanan sebelum obat dipasarkan ke publik.", lime: true },
    { y: "1978", judul: "Rekayasa Genetika", d: "Teknologi DNA rekombinan melahirkan insulin manusia pertama (Humulin)." },
    { y: "1990-an", judul: "Genomika & HTS", d: "High-Throughput Screening dan genomika mempercepat penemuan target obat baru." },
    { y: "2012", judul: "Terapi Gen Pertama", d: "Glybera disetujui di Eropa sebagai terapi gen pertama di dunia barat." },
    { y: "2020", judul: "Vaksin mRNA", d: "Vaksin mRNA COVID-19 disetujui darurat, tonggak baru bioteknologi farmasi." },
    { y: "2024", judul: "AI Drug Discovery", d: "Kecerdasan buatan mempercepat penemuan & desain molekul obat secara masif." },
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
          judulScript="Pengembangan Obat"
          credit="Anggota 6"
        />

        {/* ---------- INTRO ---------- */}
        <FadeIn className="max-w-3xl mx-auto text-center mt-8 mb-20">
          <p className="font-sans text-grayish leading-relaxed">
            Perjalanan panjang <strong className="text-forest">pengembangan obat</strong> dari
            sintesis pertama aspirin hingga era kecerdasan buatan — sebuah
            evolusi ilmu farmasi yang mengubah wajah pengobatan modern.
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