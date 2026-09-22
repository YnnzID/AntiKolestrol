import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import { anggota } from '../data/anggota';

export function TimSection() {
  const ketua = anggota.find(a => a.ketua);
  const anggotaLain = anggota.filter(a => !a.ketua);

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <SectionHeader badge="TIM PENYUSUN" nomor="01" judulBold="KENALI TIM" judulScript="Kami" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card Ketua */}
          <FadeIn className="lg:col-span-1">
            <div className="bg-forest text-cream rounded-[32px] p-8 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform group">
              <div>
                <span className="px-3 py-1 bg-lime text-forest text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">KETUA</span>
                <img src={ketua?.foto} alt={ketua?.nama} className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-lime grayscale group-hover:grayscale-0 transition-all duration-500" />
                <h3 className="font-heading text-3xl uppercase mb-2">{ketua?.nama}</h3>
                <p className="font-sans text-lime italic font-bold mb-4">{ketua?.kelas}</p>
                <p className="font-sans text-cream/80 text-sm leading-relaxed">{ketua?.tugas}</p>
                <a
                  href="https://ynnz.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ynnz.my.id"
                  className="absolute inset-0 z-20"
                />
              </div>
            </div>
          </FadeIn>

          {/* Grid Anggota */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {anggotaLain.map((a, i) => (
              <FadeIn key={a.id} delay={i * 0.1}>
                <div className="bg-white border border-grayish/20 rounded-[24px] p-6 flex items-center gap-6 hover:-translate-y-1 transition-transform group shadow-sm hover:shadow-md">
                  <img src={a.foto} alt={a.nama} className="w-20 h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <div>
                    <h4 className="font-heading text-xl uppercase mb-1">{a.nama}</h4>
                    <p className="text-xs text-grayish font-bold mb-2"> {a.kelas}</p>
                    <p className="text-sm font-sans text-forest bg-lime/20 px-2 py-1 rounded inline-block">{a.tugas}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
