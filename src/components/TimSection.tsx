import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import ElectricBorder from './ElectricBorder';
import { anggota } from '../data/anggota';

export function TimSection() {
  const ketua = anggota.find(a => a.ketua);
  const anggotaLain = anggota.filter(a => !a.ketua);

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <SectionHeader badge="TIM PENYUSUN" nomor="09" judulBold="KENALI TIM" judulScript="Kami" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ⚡ Card Ketua */}
          <FadeIn className="lg:col-span-1 h-full">
            <ElectricBorder
              color="#B5E048"
              speed={1.3}
              chaos={0.1}
              borderRadius={32}
              className="h-full"
            >
              <div className="bg-forest text-cream rounded-[32px] p-8 h-full flex flex-col group relative">
                <span className="px-3 py-1 bg-lime text-forest text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block self-start">
                  KETUA
                </span>
                <img
                  src={ketua?.foto}
                  alt={ketua?.nama}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-lime grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <h3 className="font-heading text-3xl uppercase mb-2">{ketua?.nama}</h3>
                <p className="font-sans text-lime italic font-bold">{ketua?.kelas}</p>

                {/* Spacer */}
                <div className="mt-auto pt-8">
                  <div className="h-px bg-lime/20 mb-4" />
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-lime/60">
                    Koordinator Tim
                  </p>
                </div>

                <a
                  href="https://ynnz.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ynnz.my.id"
                  className="absolute inset-0 z-20"
                />
              </div>
            </ElectricBorder>
          </FadeIn>

          {/* ⚡ Grid Anggota */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {anggotaLain.map((a, i) => (
              <FadeIn key={a.id} delay={i * 0.1} className="h-full">
                <ElectricBorder
                  color="#B5E048"
                  speed={1}
                  chaos={0.06}
                  borderRadius={24}
                  className="h-full"
                >
                  <div className="bg-white rounded-[24px] p-6 flex items-center gap-6 hover:-translate-y-1 transition-transform group shadow-sm relative h-full">
                    <img
                      src={a.foto}
                      alt={a.nama}
                      className="w-20 h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 shrink-0"
                    />
                    <div>
                      <h4 className="font-heading text-xl uppercase mb-1">{a.nama}</h4>
                      <p className="text-xs text-grayish font-bold">{a.kelas}</p>
                    </div>
                  </div>
                </ElectricBorder>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}