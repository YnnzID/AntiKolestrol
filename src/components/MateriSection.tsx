"use client";
import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import {
  CheckCircle2, AlertTriangle, Pill, HeartPulse, Stethoscope, Briefcase,
  Target, Package, DollarSign, MapPin, Megaphone,
  Activity, Dna, Droplet, Thermometer, Syringe, Heart
} from 'lucide-react';

// ==================== KOMPONEN MEDIS DEKORATIF ====================

// Garis EKG
function EkgLine({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      className={`w-full h-12 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0,30 L200,30 L220,30 L230,10 L240,50 L250,5 L260,55 L270,30 L290,30 
           L500,30 L520,30 L530,10 L540,50 L550,5 L560,55 L570,30 L590,30 
           L800,30 L820,30 L830,10 L840,50 L850,5 L860,55 L870,30 L890,30 L1200,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-ekg"
      />
    </svg>
  );
}

// Medical cross pattern
function MedicalPattern() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(#2d5016 1px, transparent 1px),
          linear-gradient(90deg, #2d5016 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  );
}

export function MateriSection() {
  // State checklist harian
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(8).fill(false)
  );

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const progress = checkedItems.filter(Boolean).length;
  const total = checkedItems.length;

  return (
    <div className="bg-cream-darker">

      {/* ==================== MATERI A — PENGERTIAN ==================== */}
      <section className="py-24 border-t border-forest/10 container mx-auto px-6 relative overflow-hidden">
        <MedicalPattern />

        <div className="absolute top-12 left-0 right-0 text-lime/20 pointer-events-none">
          <EkgLine />
        </div>

        <div className="relative z-10">
          <SectionHeader
            badge="MATERI A"
            nomor="02"
            judulBold="PENGERTIAN"
            judulScript="Anti Kolesterol"
          />



          <FadeIn className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <section className="relative overflow-hidden rounded-2xl border-l-4 border-forest bg-forest/5 p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute right-4 top-4 text-4xl opacity-10">💊</div>

                <h3 className="text-2xl md:text-3xl font-extrabold font-sans text-forest mb-4">
                  Apa Itu Obat Antikolesterol?
                </h3>

                <p className="text-lg leading-relaxed font-sans text-gray-800 mb-5">
                  <strong className="text-forest">Obat antikolesterol</strong> adalah golongan
                  obat yang digunakan untuk menurunkan kadar kolesterol jahat (LDL) dan
                  trigliserida dalam darah, serta meningkatkan kolesterol baik (HDL).
                  Tujuannya adalah <strong className="text-forest">mencegah penyakit jantung
                    dan stroke</strong>.
                </p>

                <div className="rounded-xl border border-forest/20 bg-white/70 p-4">
                  <h4 className="mb-2 text-base font-bold text-forest">Cara Kerja Utama:</h4>
                  <ul className="list-disc space-y-1 pl-5 text-base leading-relaxed text-gray-700">
                    <li>Menghambat enzim di hati.</li>
                    <li>Menghambat penyerapan kolesterol di usus.</li>
                    <li>Meningkatkan pembuangan kolesterol melalui empedu.</li>
                  </ul>
                </div>
              </section>
              {/* 5 Golongan Obat Anti Kolesterol */}
              <div className="bg-white p-8 rounded-3xl border border-grayish/20 shadow-sm
                              hover:shadow-xl hover:border-lime/40 transition-all duration-500">
                <h4 className="font-heading text-2xl uppercase mb-6 flex items-center gap-3">
                  5 Golongan Utama
                </h4>
                <ul className="space-y-4 font-sans text-sm">
                  <li className="flex justify-between border-b pb-2">
                    <strong>Statin:</strong> <span>Simvastatin, Atorvastatin</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <strong>Fibrat:</strong> <span>Fenofibrat, Gemfibrozil</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <strong>Bile Acid Sequestrant:</strong> <span>Kolestiramin</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <strong>Penghambat Absorpsi:</strong> <span>Ezetimibe</span>
                  </li>
                  <li className="flex justify-between">
                    <strong>PCSK9 Inhibitor:</strong> <span>Evolokumab, Alirocumab</span>
                  </li>
                </ul>

                {/* Stats medis */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-grayish/20">
                  <div className="text-center">

                    <p className="font-heading text-xl text-forest">LDL</p>
                    <p className="font-sans text-[10px] text-grayish uppercase tracking-widest">
                      Diturunkan
                    </p>
                  </div>
                  <div className="text-center">

                    <p className="font-heading text-xl text-forest">HDL</p>
                    <p className="font-sans text-[10px] text-grayish uppercase tracking-widest">
                      Dijaga
                    </p>
                  </div>
                  <div className="text-center">

                    <p className="font-heading text-xl text-forest">Trigliserida</p>
                    <p className="font-sans text-[10px] text-grayish uppercase tracking-widest">
                      Diturunkan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Foto dengan overlay medis */}
            <div className="relative h-full w-full min-h-[400px] rounded-[32px] overflow-hidden group">
              <img
                src="/images/obat.png"
                alt="Obat Anti Kolesterol"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="font-script italic text-xl">Obat Anti Kolesterol</p>
                <p className="font-sans text-xs uppercase tracking-widest opacity-80">
                  Pencegahan Penyakit Jantung & Stroke
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MATERI B — PENGGOLONGAN ==================== */}
      <section className="py-24 border-t border-forest/10 container mx-auto px-6 relative overflow-hidden">
        <MedicalPattern />

        <div className="relative z-10">
          <SectionHeader
            badge="MATERI B"
            nomor="03"
            judulBold="PENGGOLONGAN"
            judulScript="Anti Kolesterol"
          />

          {/* Intro */}
          <FadeIn className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-sans text-grayish leading-relaxed">
              Obat anti kolesterol terbagi menjadi <strong className="text-forest">6 golongan</strong> berdasarkan
              mekanisme kerjanya. Setiap golongan memiliki keunggulan dan indikasi penggunaan yang berbeda.
            </p>
          </FadeIn>

          <FadeIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                n: "Statin",
                d: "Simvastatin, Atorvastatin, Rosuvastatin. Menghambat enzim HMG-CoA reduktase di hati.",
                hl: false,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvP8uDHEopREGaCb9mIISk9Gv9HPPkOwhu1gyw1id7g&s=10"
              },
              {
                n: "Fibrat",
                d: "Fenofibrat, Gemfibrozil. Menurunkan trigliserida dan meningkatkan HDL.",
                hl: false,
                img: "https://images.alodokter.com/dk0z4ums3/image/upload/v1757666671/attached_image/profibrat.jpg"
              },
              {
                n: "Bile Acid Sequestrant",
                d: "Kolestiramin. Mengikat asam empedu di usus.",
                hl: false,
                icon: Syringe,
                img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop"
              },
              {
                n: "Penghambat Absorpsi",
                d: "Ezetimibe. Menghambat penyerapan kolesterol di usus via NPC1L1 (Fokus Utama).",
                hl: false,
                img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop"
              },
              {
                n: "Niacin",
                d: "Asam Nikotinat. Meningkatkan HDL dan menurunkan LDL.",
                hl: false,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFd5zuo_tZp-AWXQwArS61ZKdULYwmz84peelo_ilY47sqYVOSt6WObxf&s=10"
              },
              {
                n: "PCSK9 Inhibitor",
                d: "Evolokumab, Alirocumab. Antibodi monoklonal suntik.",
                hl: false,
                img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop"
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  className={`group rounded-[24px] overflow-hidden
                        transition-all duration-500 
                        hover:-translate-y-2 
                        border relative
                        ${item.hl
                      ? 'bg-forest text-cream border-lime/60 shadow-xl animate-glow'
                      : 'bg-white text-charcoal border-grayish/20 hover:border-lime/50 hover:shadow-2xl'
                    }`}
                >
                  {/* Foto Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.n}
                      loading="lazy"
                      className="w-full h-full object-cover 
                           transition-transform duration-700 
                           group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 
                              ${item.hl
                        ? 'bg-gradient-to-t from-forest via-forest/50 to-transparent'
                        : 'bg-gradient-to-t from-white via-white/30 to-transparent'
                      }`} />




                  </div>

                  {/* Konten */}
                  <div className="p-8 relative">
                    <div className="absolute inset-0 
                              bg-gradient-to-br from-lime/0 via-lime/10 to-lime/0 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-700 pointer-events-none" />

                    <h4 className="relative z-10 font-heading text-xl uppercase mb-3">
                      {item.n}
                    </h4>
                    <p className={`relative z-10 font-sans text-sm 
                             ${item.hl ? 'text-lime' : 'text-grayish'}`}>
                      {item.d}
                    </p>

                    {/* Nomor besar dekoratif bawah */}
                    <span className={`absolute bottom-2 right-4 font-heading text-6xl leading-none 
                                pointer-events-none
                                ${item.hl ? 'text-lime/20' : 'text-forest/5'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </FadeIn>
        </div>
      </section>
      {/* ==================== MATERI C — ATURAN PAKAI ==================== */}
      <section className="py-24 bg-forest text-cream relative overflow-hidden">
        <div className="absolute top-12 left-0 right-0 text-lime/15 pointer-events-none">
          <EkgLine />
        </div>
        <div className="absolute bottom-12 left-0 right-0 text-lime/15 pointer-events-none">
          <EkgLine />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            badge="MATERI C"
            nomor="04"
            judulBold="ATURAN"
            judulScript="Pakai"
            dark
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contoh Dosis — Ezetimibe */}
            <FadeIn className="col-span-1 bg-lime text-forest p-10 rounded-[32px] 
                                relative overflow-hidden group
                                hover:scale-[1.02] hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 
                              bg-gradient-to-r from-transparent via-white/40 to-transparent 
                              -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-1000 pointer-events-none" />

              <p className="font-sans text-xs uppercase tracking-[0.3em] mb-2 relative z-10">
                Contoh: Ezetimibe
              </p>
              <h3 className="font-heading text-4xl mb-4 relative z-10">DOSIS UTAMA</h3>
              <p className="font-script text-[80px] leading-none mb-4 relative z-10">10 mg</p>
              <p className="font-sans font-bold uppercase tracking-widest text-sm relative z-10">
                Satu Kali Sehari
              </p>

            </FadeIn>

            {/* Aturan Umum */}
            <FadeIn delay={0.2} className="col-span-2 space-y-6">
              {[
                { t: "Waktu Minum", d: "Sebagian besar obat anti kolesterol diminum malam hari, namun Ezetimibe bisa pagi atau malam." },
                { t: "Kombinasi", d: "Sering dikombinasikan dengan statin untuk hasil maksimal dalam menurunkan LDL." },
                { t: "Cara Minum", d: "Tablet harus ditelan utuh dengan air, tidak boleh dikunyah atau digerus." },
                { t: "Jika Lupa", d: "Segera minum saat teringat, kecuali jika sudah mendekati jadwal berikutnya." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-6 items-center bg-forest-dark p-6 rounded-2xl 
                             border border-lime/10 
                             transition-all duration-500 
                             hover:border-lime/40 hover:pl-8 hover:shadow-xl"
                >
                  <span className="font-heading text-3xl text-lime opacity-50 
                                   transition-all duration-500 
                                   group-hover:opacity-100 group-hover:scale-125">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-lime text-sm uppercase tracking-widest mb-1">
                      {item.t}
                    </p>
                    <p className="font-sans text-lg">{item.d}</p>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== MATERI D — EFEK SAMPING ==================== */}
      <section className="py-24 bg-cream border-t border-forest/10 container mx-auto px-6 relative overflow-hidden">
        <MedicalPattern />

        <div className="relative z-10">
          <SectionHeader
            badge="MATERI D"
            nomor="05"
            judulBold="EFEK"
            judulScript="Samping"
          />

          {/* Intro */}
          <FadeIn className="bg-white rounded-3xl p-8 border border-grayish/20 mb-10 
                              hover:shadow-lg transition-shadow duration-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-lime/20 
                              flex items-center justify-center animate-glow">
                <HeartPulse className="w-6 h-6 text-forest" />
              </div>
              <p className="font-sans text-grayish leading-relaxed">
                Secara umum, obat anti kolesterol
                tergolong aman dan dapat ditoleransi dengan baik. Efek samping yang muncul
                biasanya ringan dan bersifat sementara. Namun, tetap penting untuk mengetahui
                kemungkinan efek samping agar dapat segera berkonsultasi dengan tenaga
                kesehatan bila diperlukan.
              </p>
            </div>
          </FadeIn>

          {/* Efek Samping Umum */}
          <FadeIn className="mb-10">
            <h3 className="font-heading text-2xl text-forest mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-lime" />
              Efek Samping Umum
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { t: 'Sakit Kepala', d: 'Biasanya ringan dan hilang sendiri.', img: '/images/sakitkepala.png' },
                { t: 'Nyeri Otot', d: 'Terutama bila dikombinasikan dengan statin.', img: '/images/nyeriotot.png' },
                { t: 'Diare / Sembelit', d: 'Gangguan pencernaan sementara.', img: '/images/diare.png' },
                { t: 'Kelelahan', d: 'Rasa lelah yang tidak wajar.', img: '/images/kelelahan.png' },
                { t: 'Nyeri Perut', d: 'Ketidaknyamanan di area lambung.', img: '/images/nyeriperut.png' },
                { t: 'Pusing', d: 'Umumnya sementara setelah beberapa hari.', img: '/images/pusing.png' },
              ].map((item, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  className="group bg-white rounded-2xl border border-grayish/20 
                   overflow-hidden
                   transition-all duration-500 
                   hover:-translate-y-2 hover:shadow-xl hover:border-lime 
                   cursor-pointer relative"
                >
                  {/* Foto Lokal */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.t}
                      className="w-full h-full object-cover 
                       transition-transform duration-700 
                       group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />


                    {/* Judul di atas foto */}
                    <h4 className="absolute bottom-3 left-4 right-4 
                         font-heading text-lg text-cream 
                         transition-colors duration-300 
                         group-hover:text-lime">
                      {item.t}
                    </h4>
                  </div>

                  {/* Deskripsi */}
                  <div className="p-5">
                    <p className="text-xs font-sans text-grayish 
                        transition-colors duration-300 
                        group-hover:text-forest">
                      {item.d}
                    </p>
                  </div>

                  {/* Garis bawah animasi */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime 
                        transition-all duration-500 
                        group-hover:w-full" />
                </FadeIn>
              ))}
            </div>
          </FadeIn>


          {/* Kapan Harus ke Dokter */}
          <FadeIn className="bg-lime text-forest p-8 rounded-3xl 
                              transition-all duration-500 
                              hover:scale-[1.02] hover:shadow-2xl 
                              relative overflow-hidden group">
            <div className="absolute inset-0 
                            bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-1000 pointer-events-none" />

            <h3 className="font-heading text-2xl mb-4 flex items-center gap-3 relative z-10">
              <Stethoscope className="w-7 h-7 animate-pulse" />
              Kapan Harus ke Dokter?
            </h3>
            <p className="font-sans text-sm leading-relaxed relative z-10">
              Segera hubungi dokter atau apoteker jika Anda mengalami efek samping yang
              <strong> tidak kunjung hilang</strong>, <strong>semakin memburuk</strong>, atau
              muncul gejala seperti nyeri otot hebat, kuning pada kulit, atau reaksi alergi.
              Jangan menghentikan obat sendiri tanpa konsultasi — penghentian mendadak dapat
              mempengaruhi pengobatan kolesterol Anda.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MATERI E — POLA HIDUP SEHAT ==================== */}
      <section className="py-24 bg-cream border-t border-forest/10 container mx-auto px-6 relative overflow-hidden">
        <MedicalPattern />

        <div className="relative z-10">
          <SectionHeader
            badge="MATERI E"
            nomor="06"
            judulBold="POLA"
            judulScript="Hidup Sehat"
          />

          {/* ---------- 4 PILAR UTAMA (dengan foto) ---------- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              {
                t: 'MAKAN',
                d: 'Rendah lemak jenuh, tinggi serat',
                img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop',
              },
              {
                t: 'OLAHRAGA',
                d: '30 menit, 5x seminggu',
                img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop',
              },
              {
                t: 'HINDARI',
                d: 'Rokok, alkohol berlebih, stres',
                img: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=600&q=80&auto=format&fit=crop',
              },
              {
                t: 'CEGAH',
                d: 'Cek rutin 6 bulan sekali',
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop',
              },
            ].map((p, i) => {
              return (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  className="group bg-white rounded-3xl border border-grayish/20
                       overflow-hidden flex flex-col
                       transition-all duration-500
                       hover:-translate-y-2 hover:shadow-xl hover:border-lime/50"
                >
                  {/* Foto contoh */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={p.img}
                      alt={p.t}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />

                  </div>

                  {/* Teks */}
                  <div className="p-5 text-center flex flex-col items-center justify-center flex-1">
                    <h5 className="font-heading text-lg text-forest">{p.t}</h5>
                    <p className="text-xs font-sans mt-2 text-grayish leading-relaxed">{p.d}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* ---------- APA ITU POLA HIDUP SEHAT? (dengan foto) ---------- */}
          <FadeIn className="bg-white rounded-3xl border border-grayish/20 mb-10 overflow-hidden
                        hover:shadow-lg transition-shadow duration-500">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Foto */}
              <div className="relative md:col-span-2 aspect-[4/3] md:aspect-auto md:min-h-[280px] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop"
                  alt="Pola Hidup Sehat"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Teks */}
              <div className="md:col-span-3 p-8">
                <h3 className="font-heading text-2xl text-forest mb-4 flex items-center gap-3">
                  Apa itu Pola Hidup Sehat?
                </h3>
                <p className="font-sans text-grayish leading-relaxed">
                  Pola hidup sehat adalah serangkaian kebiasaan dan perilaku sehari-hari yang
                  mendukung kesehatan tubuh secara menyeluruh — mulai dari asupan makanan,
                  aktivitas fisik, istirahat, hingga pengelolaan stres. Bagi penderita
                  <strong className="text-forest"> hiperkolesterolemia</strong>, pola hidup sehat
                  menjadi kunci utama untuk menjaga kadar kolesterol tetap terkendali dan
                  mengurangi risiko penyakit jantung serta stroke.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ---------- 5 PILAR POLA HIDUP SEHAT (dengan foto) ---------- */}
          <FadeIn className="mb-10">
            <h3 className="font-heading text-2xl text-forest mb-6">5 Pilar Pola Hidup Sehat</h3>
            <div className="space-y-4">
              {[
                {
                  no: '01',
                  judul: 'Nutrisi Seimbang',
                  isi: 'Perbanyak sayur, buah, biji-bijian, dan ikan beromega-3. Kurangi gorengan, daging merah berlemak, dan makanan olahan.',
                  img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80&auto=format&fit=crop',
                },
                {
                  no: '02',
                  judul: 'Aktivitas Fisik Rutin',
                  isi: 'Minimal 30 menit olahraga sedang (jalan cepat, bersepeda, berenang) 5 kali seminggu.',
                  img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80&auto=format&fit=crop',
                },
                {
                  no: '03',
                  judul: 'Istirahat Cukup',
                  isi: 'Tidur 7–8 jam per hari untuk membantu tubuh memperbaiki sel dan mengatur hormon stres.',
                  img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80&auto=format&fit=crop',
                },
                {
                  no: '04',
                  judul: 'Kelola Stres',
                  isi: 'Lakukan meditasi, yoga, atau hobi. Stres kronis dapat meningkatkan tekanan darah dan kolesterol LDL.',
                  img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80&auto=format&fit=crop',
                },
                {
                  no: '05',
                  judul: 'Hindari Rokok & Alkohol',
                  isi: 'Rokok menurunkan HDL (kolesterol baik) dan merusak dinding pembuluh darah.',
                  img: 'https://d1bpj0tv6vfxyp.cloudfront.net/benarkah-rokok-dan-alkohol-pemicu-utama-kanker-laring.jpg',
                },
              ].map((item, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.08}
                  className="group flex gap-4 items-stretch bg-white rounded-2xl
                       border border-grayish/20 overflow-hidden
                       transition-all duration-500
                       hover:border-lime/50 hover:shadow-lg"
                >
                  {/* Foto samping */}
                  <div className="relative w-24 sm:w-32 md:w-40 shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={item.img}
                      alt={item.judul}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/0 transition-colors duration-500" />
                  </div>

                  {/* Konten */}
                  <div className="flex gap-4 items-start p-5 flex-1">
                    <span className="font-script text-3xl italic text-lime leading-none
                               transition-transform duration-500
                               group-hover:scale-125 group-hover:-rotate-12 shrink-0">
                      {item.no}
                    </span>
                    <div>
                      <h4 className="font-heading text-lg text-forest
                               transition-colors duration-300
                               group-hover:text-lime">
                        {item.judul}
                      </h4>
                      <p className="text-sm font-sans text-grayish mt-1 leading-relaxed">{item.isi}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* ---------- TABEL ANJURAN MAKANAN (dengan thumbnail) ---------- */}
          <FadeIn className="bg-white rounded-3xl p-8 border border-grayish/20 mb-10">
            <h3 className="font-heading text-2xl text-forest mb-6 flex items-center gap-3">
              Anjuran Makanan untuk Penderita Kolesterol
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-forest/20 text-left">
                    <th className="py-3 px-4 text-forest"> Dianjurkan</th>
                    <th className="py-3 px-4 text-forest"> Dihindari</th>
                  </tr>
                </thead>
                <tbody className="text-grayish">
                  {[
                    {
                      baik: 'Oatmeal, nasi merah',
                      buruk: 'Nasi putih berlebihan',
                      imgBaik: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=120&q=80&auto=format&fit=crop',
                      imgBuruk: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&q=80&auto=format&fit=crop',
                    },
                    {
                      baik: 'Ikan salmon, tuna',
                      buruk: 'Daging berlemak, jeroan',
                      imgBaik: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=120&q=80&auto=format&fit=crop',
                      imgBuruk: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=120&q=80&auto=format&fit=crop',
                    },
                    {
                      baik: 'Alpukat, kacang almond',
                      buruk: 'Gorengan, mentega',
                      imgBaik: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=120&q=80&auto=format&fit=crop',
                      imgBuruk: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=120&q=80&auto=format&fit=crop',
                    },
                    {
                      baik: 'Sayur hijau, buah beri',
                      buruk: 'Kue manis, soda',
                      imgBaik: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=120&q=80&auto=format&fit=crop',
                      imgBuruk: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=120&q=80&auto=format&fit=crop',
                    },
                    {
                      baik: 'Minyak zaitun',
                      buruk: 'Minyak kelapa sawit (jenuh)',
                      imgBaik: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=120&q=80&auto=format&fit=crop',
                      imgBuruk: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=120&q=80&auto=format&fit=crop',
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-grayish/10 hover:bg-lime/5 transition-colors duration-300"
                    >
                      {/* Kolom dianjurkan */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-lime/30 bg-gray-100">
                            <img
                              src={row.imgBaik}
                              alt={row.baik}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <span>

                            {row.baik}</span>
                        </div>
                      </td>

                      {/* Kolom dihindari */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-red-200 bg-gray-100">
                            <img
                              src={row.imgBuruk}
                              alt={row.buruk}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <span> {row.buruk}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* ---------- CHECKLIST HARIAN (dengan foto background) ---------- */}
          <FadeIn className="bg-forest text-cream p-10 rounded-[32px] relative overflow-hidden">
            {/* Foto background dengan overlay gelap */}
            <div className="absolute inset-0 opacity-15">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&auto=format&fit=crop"
                alt="Pola Hidup Sehat"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <HeartPulse className="absolute right-[-20px] top-[-20px] w-48 h-48 text-lime/10 animate-pulse" />

            <div className="absolute bottom-0 left-0 right-0 text-lime/10 pointer-events-none">
              <EkgLine />
            </div>

            <h3 className="font-heading text-2xl text-lime mb-6 z-10 relative flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              Checklist Harian Pola Hidup Sehat
            </h3>

            <ul className="grid md:grid-cols-2 gap-3 text-sm font-sans z-10 relative">
              {[
                'Minum air putih 8 gelas sehari',
                'Sarapan dengan menu bergizi',
                'Olahraga minimal 30 menit',
                'Makan buah & sayur 5 porsi',
                'Tidur 7–8 jam',
                'Tidak merokok & tidak alkohol',
                'Cek tekanan darah bila perlu',
                'Luangkan waktu relaksasi',
              ].map((item, i) => {
                const isChecked = checkedItems[i];
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => toggleCheck(i)}
                      aria-pressed={isChecked}
                      className="
                  w-full text-left
                  group flex items-center gap-3
                  border-b border-cream/20 pb-2
                  transition-all duration-300
                  hover:border-lime hover:pl-2
                  cursor-pointer
                "
                    >
                      <span
                        className={`
                    flex-shrink-0
                    w-5 h-5
                    rounded-md
                    border-2
                    flex items-center justify-center
                    transition-all duration-300
                    ${isChecked
                            ? 'bg-lime border-lime'
                            : 'border-cream/40 group-hover:border-lime'}
                  `}
                      >
                        {isChecked && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest" strokeWidth={3} />
                        )}
                      </span>

                      <span
                        className={`
                    transition-all duration-300
                    group-hover:text-lime
                    ${isChecked ? 'line-through text-cream/50' : ''}
                  `}
                      >
                        {item}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Progress bar */}
            <div className="mt-8 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-lime/70">
                  Progress Harian
                </span>
                <span className="font-heading text-lime text-sm">
                  {progress} / {total}
                </span>
              </div>
              <div className="h-2 rounded-full bg-cream/10 overflow-hidden">
                <div
                  className="h-full bg-lime rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(progress / total) * 100}%` }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MATERI F — STRATEGI PEMASARAN ==================== */}

      <section
        className="
    relative overflow-hidden
    border-t border-forest/10
    bg-cream
    py-24 md:py-32
  "
      >
        {/* Background editorial */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Soft circle */}
          <div
            className="
        absolute -right-40 -top-40
        h-[500px] w-[500px]
        rounded-full
        bg-lime/10
        blur-[100px]
      "
          />

          <div
            className="
        absolute -bottom-48 -left-40
        h-[500px] w-[500px]
        rounded-full
        bg-forest/[0.05]
        blur-[100px]
      "
          />

          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(#2D4A2D 1px, transparent 1px),
          linear-gradient(90deg, #2D4A2D 1px, transparent 1px)
        `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Vertical editorial line */}
          <div
            className="
        absolute left-[8%] top-0
        hidden h-full w-px
        bg-forest/[0.07]
        lg:block
      "
          />

          <div
            className="
        absolute right-[8%] top-0
        hidden h-full w-px
        bg-forest/[0.07]
        lg:block
      "
          />
        </div>

        <div className="container relative z-10 mx-auto px-6">

          {/* =========================================================
        HEADER
    ========================================================= */}

          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <FadeIn>
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span
                    className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-forest
                font-heading text-xs
                text-lime
              "
                  >
                    07
                  </span>

                  <span
                    className="
                h-px w-12
                bg-forest/30
              "
                  />

                  <span
                    className="
                font-sans text-[10px]
                font-bold uppercase
                tracking-[0.3em]
                text-grayish
              "
                  >
                    Materi F · Anggota 6
                  </span>
                </div>

                <h2
                  className="
              font-heading
              text-[clamp(3.5rem,8vw,7rem)]
              uppercase
              leading-[0.82]
              tracking-[-0.06em]
              text-forest
            "
                >
                  STRATEGI
                  <span
                    className="
                block
                pl-[8vw]
                font-script
                text-[1.15em]
                font-normal
                italic
                leading-[0.8]
                text-forest
              "
                  >
                    Pemasaran
                  </span>
                </h2>
              </div>
            </FadeIn>

            {/* RIGHT */}
            <FadeIn delay={0.15}>
              <div className="lg:pb-2">
                <p
                  className="
              mb-4
              font-sans text-[10px]
              font-bold uppercase
              tracking-[0.3em]
              text-grayish
            "
                >
                  Marketing Mix
                </p>

                <p
                  className="
              max-w-lg
              font-sans text-base
              leading-7
              text-charcoal
              md:text-lg
            "
                >
                  Strategi pemasaran obat anti kolesterol melalui pendekatan
                  produk, harga, distribusi, promosi, dan sasaran pasien.
                </p>
              </div>
            </FadeIn>

          </div>


          {/* =========================================================
        TAGLINE
    ========================================================= */}

          <FadeIn className="mt-16">
            <div
              className="
          relative overflow-hidden
          rounded-[32px]
          bg-forest
          px-7 py-10
          md:px-12 md:py-12
        "
            >
              {/* decorative number */}
              <span
                className="
            pointer-events-none
            absolute -right-4 -top-10
            font-heading
            text-[180px]
            leading-none
            text-white/[0.025]
          "
              >
                07
              </span>

              {/* lime line */}
              <div
                className="
            absolute left-0 top-0
            h-full w-1
            bg-lime
          "
              />

              <div className="relative z-10 max-w-4xl">
                <p
                  className="
              mb-5
              font-sans text-[10px]
              font-bold uppercase
              tracking-[0.3em]
              text-lime/70
            "
                >
                  Campaign Statement
                </p>

                <h3
                  className="
              max-w-3xl
              font-script
              text-[clamp(2.2rem,5vw,4.5rem)]
              italic
              leading-[0.95]
              text-lime
            "
                >
                  “Kolesterol Terkendali,
                  <br />
                  Hidup Lebih Tenang”
                </h3>
              </div>
            </div>
          </FadeIn>


          {/* =========================================================
        5P INTRO
    ========================================================= */}

          <FadeIn className="mt-20 mb-10">
            <div className="flex items-end justify-between border-b border-forest/15 pb-5">
              <div>
                <p
                  className="
              font-sans text-[10px]
              font-bold uppercase
              tracking-[0.3em]
              text-grayish
            "
                >
                  Framework
                </p>

                <h3
                  className="
              mt-2
              font-heading
              text-3xl
              uppercase
              tracking-tight
              text-forest
              md:text-4xl
            "
                >
                  The 5P
                  <span className="ml-2 font-script font-normal italic text-forest">
                    Strategy
                  </span>
                </h3>
              </div>

              <span
                className="
            hidden
            font-mono text-xs
            text-grayish
            sm:block
          "
              >
                05 ELEMENTS
              </span>
            </div>
          </FadeIn>


          {/* =========================================================
        FEATURED TARGET
    ========================================================= */}

          <FadeIn>
            <div
              className="
          group
          relative overflow-hidden
          rounded-[32px]
          bg-white
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_25px_70px_rgba(45,74,45,0.10)]
        "
            >
              <div className="grid lg:grid-cols-[0.32fr_0.68fr]">

                {/* NUMBER PANEL */}
                <div
                  className="
              relative
              overflow-hidden
              bg-forest
              p-8
              md:p-10
              lg:p-12
            "
                >
                  <span
                    className="
                absolute -bottom-10 -right-4
                font-heading
                text-[170px]
                leading-none
                text-lime/[0.08]
              "
                  >
                    01
                  </span>

                  <div className="relative z-10 flex h-full flex-col justify-between">

                    <div
                      className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-lime
                  text-forest
                "
                    >
                      <Target
                        className="h-7 w-7"
                        strokeWidth={2}
                      />
                    </div>

                    <div className="mt-12 lg:mt-20">
                      <p
                        className="
                    mb-2
                    font-sans text-[10px]
                    font-bold uppercase
                    tracking-[0.3em]
                    text-lime/60
                  "
                      >
                        01 / 05
                      </p>

                      <h4
                        className="
                    font-heading
                    text-4xl
                    uppercase
                    text-white
                  "
                      >
                        Target
                      </h4>
                    </div>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-8 md:p-10 lg:p-12">

                  <span
                    className="
                absolute right-8 top-7
                font-heading
                text-7xl
                leading-none
                text-forest/[0.04]
              "
                  >
                    01
                  </span>

                  <p
                    className="
                mb-3
                font-sans text-[10px]
                font-bold uppercase
                tracking-[0.25em]
                text-grayish
              "
                  >
                    Primary Audience
                  </p>

                  <p
                    className="
                max-w-2xl
                font-sans text-xl
                font-semibold
                leading-relaxed
                text-charcoal
                md:text-2xl
              "
                  >
                    Penderita hiperkolesterolemia dan pasien
                    yang intoleran terhadap statin.
                  </p>

                  <div className="my-7 h-px bg-forest/10" />

                  <p
                    className="
                max-w-2xl
                font-sans text-sm
                leading-7
                text-grayish
              "
                  >
                    Segmentasi utama yang membutuhkan alternatif
                    penurun kolesterol selain statin.
                  </p>

                </div>
              </div>
            </div>
          </FadeIn>


          {/* =========================================================
        OTHER 4P
    ========================================================= */}

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            {[
              {
                no: "02",
                icon: Package,
                label: "Product",
                isi: "Obat anti kolesterol: Ezetrol, Zetia. Kualitas tinggi, inovatif.",
                desc: "Mekanisme kerja unik via NPC1L1 — membedakan dari golongan statin.",
              },
              {
                no: "03",
                icon: DollarSign,
                label: "Price",
                isi: "Premium, namun tersedia versi generik (BPJS).",
                desc: "Strategi harga berlapis: brand premium + generik terjangkau lewat BPJS.",
              },
              {
                no: "04",
                icon: MapPin,
                label: "Place",
                isi: "Apotek berlisensi, Rumah Sakit.",
                desc: "Distribusi melalui jalur resmi untuk memastikan keaslian & keamanan obat.",
              },
              {
                no: "05",
                icon: Megaphone,
                label: "Promotion",
                isi: "Edukasi dokter (Medical Representative), simposium.",
                desc: "Pendekatan soft-selling lewat edukasi tenaga medis, bukan iklan langsung.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn
                  key={item.no}
                  delay={index * 0.08}
                >
                  <div
                    className="
                group
                relative h-full
                overflow-hidden
                rounded-[28px]
                border border-forest/10
                bg-white
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-lime/60
                hover:shadow-[0_20px_60px_rgba(45,74,45,0.08)]
                md:p-8
              "
                  >
                    {/* number */}
                    <span
                      className="
                  absolute -right-2 -top-5
                  font-heading
                  text-[110px]
                  leading-none
                  text-forest/[0.035]
                  transition-colors
                  duration-500
                  group-hover:text-lime/[0.12]
                "
                    >
                      {item.no}
                    </span>

                    {/* top */}
                    <div className="relative z-10 flex items-center justify-between">

                      <div
                        className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-forest
                    text-lime
                    transition-all
                    duration-500
                    group-hover:rotate-3
                    group-hover:bg-lime
                    group-hover:text-forest
                  "
                      >
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={2}
                        />
                      </div>

                      <span
                        className="
                    font-mono text-[10px]
                    text-grayish
                  "
                      >
                        {item.no} / 05
                      </span>
                    </div>

                    {/* content */}
                    <div className="relative z-10 mt-8">

                      <p
                        className="
                    mb-2
                    font-sans text-[9px]
                    font-bold uppercase
                    tracking-[0.3em]
                    text-grayish
                  "
                      >
                        Marketing Mix
                      </p>

                      <h4
                        className="
                    font-heading
                    text-2xl
                    uppercase
                    text-forest
                    transition-colors
                    duration-300
                    group-hover:text-forest
                    md:text-3xl
                  "
                      >
                        {item.label}
                      </h4>

                      <p
                        className="
                    mt-4
                    font-sans text-sm
                    font-semibold
                    leading-6
                    text-charcoal
                  "
                      >
                        {item.isi}
                      </p>

                      <p
                        className="
                    mt-3
                    font-sans text-sm
                    leading-6
                    text-grayish
                  "
                      >
                        {item.desc}
                      </p>
                    </div>

                    {/* bottom line */}
                    <div
                      className="
                  absolute
                  bottom-0 left-0
                  h-1 w-0
                  bg-lime
                  transition-all
                  duration-500
                  group-hover:w-full
                "
                    />
                  </div>
                </FadeIn>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}