// @ts-nocheck
"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import AccordionGallery from './AccordionGallery';
import ProdukCarousel from './ProdukCarousel';
import ElectricBorder from './ElectricBorder';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { StackingCardsParallax } from '@/components/ui/stacking-cards-parallax';
import {
  CheckCircle2, HeartPulse, Stethoscope, Target, Package,
  DollarSign, MapPin, Megaphone, Activity,
} from 'lucide-react';

/* ============================================================
   UTIL KOMPONEN
   ============================================================ */

function EkgLine({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 60" className={`w-full h-12 ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,30 L200,30 L220,30 L230,10 L240,50 L250,5 L260,55 L270,30 L290,30 L500,30 L520,30 L530,10 L540,50 L550,5 L560,55 L570,30 L590,30 L800,30 L820,30 L830,10 L840,50 L850,5 L860,55 L870,30 L890,30 L1200,30"
        fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-ekg"
      />
    </svg>
  );
}

function MedicalPattern() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(#2d5016 1px, transparent 1px), linear-gradient(90deg, #2d5016 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  );
}

/* ============================================================
   DATA
   ============================================================ */

const heroProducts = [
  { title: "Statin", link: "https://id.wikipedia.org/wiki/Statin", thumbnail: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80&auto=format&fit=crop" },
  { title: "Fibrat", link: "https://id.wikipedia.org/wiki/Fibrat", thumbnail: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80&auto=format&fit=crop" },
  { title: "Ezetimibe", link: "https://id.wikipedia.org/wiki/Ezetimibe", thumbnail: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80&auto=format&fit=crop" },
  { title: "Niacin", link: "https://id.wikipedia.org/wiki/Niasin", thumbnail: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&q=80&auto=format&fit=crop" },
  { title: "PCSK9", link: "https://id.wikipedia.org/wiki/PCSK9", thumbnail: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/09/14031322/Ketahui-X-Manfaat-Daun-Salam-untuk-Kesehatan-Tubuh-1.jpg" },
  { title: "Daun Salam", link: "https://id.wikipedia.org/wiki/Salam", thumbnail: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80&auto=format&fit=crop" },
  { title: "Herbal Tea", link: "https://id.wikipedia.org/wiki/Teh", thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80&auto=format&fit=crop" },
  { title: "Kapsul Herbal", link: "https://id.wikipedia.org/wiki/Tanaman_obat", thumbnail: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80&auto=format&fit=crop" },
  { title: "Kemasan", link: "https://id.wikipedia.org/wiki/Kemasan", thumbnail: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80&auto=format&fit=crop" },
  { title: "Apotek", link: "https://id.wikipedia.org/wiki/Apotek", thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&auto=format&fit=crop" },
  { title: "Nutrisi", link: "https://en.wikipedia.org/wiki/Nutrition", thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&auto=format&fit=crop" },
  { title: "Olahraga", link: "https://en.wikipedia.org/wiki/Physical_exercise", thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop" },
  { title: "Tidur", link: "https://en.wikipedia.org/wiki/Sleep", thumbnail: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80&auto=format&fit=crop" },
  { title: "Relaksasi", link: "https://en.wikipedia.org/wiki/Psychological_stress", thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop" },
  { title: "Stop Rokok", link: "https://en.wikipedia.org/wiki/Smoking_cessation", thumbnail: "https://images.unsplash.com/photo-1511225763421-2c4c8c0d8ea0?w=800&q=80&auto=format&fit=crop" },
];

const golonganData = [
  { n: "Statin", d: "Simvastatin, Atorvastatin, Rosuvastatin. Menghambat enzim HMG-CoA reduktase di hati.", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80&auto=format&fit=crop", a: "https://id.wikipedia.org/wiki/Statin" },
  { n: "Fibrat", d: "Fenofibrat, Gemfibrozil. Menurunkan trigliserida dan meningkatkan HDL.", img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80&auto=format&fit=crop", a: "https://id.wikipedia.org/wiki/Fibrat" },
  { n: "Bile Acid Sequestrant", d: "Kolestiramin. Mengikat asam empedu di usus.", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=80&auto=format&fit=crop", a: "https://id.wikipedia.org/wiki/Sequestran_asam_empedu" },
  { n: "Penghambat Absorpsi", d: "Ezetimibe. Menghambat penyerapan kolesterol di usus via NPC1L1.", img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&auto=format&fit=crop", a: "https://id.wikipedia.org/wiki/Ezetimibe" },
  { n: "Niacin", d: "Asam Nikotinat. Meningkatkan HDL dan menurunkan LDL.", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80&auto=format&fit=crop", a: "https://id.wikipedia.org/wiki/Niasin" },
  { n: "PCSK9 Inhibitor", d: "Evolokumab, Alirocumab. Antibodi monoklonal suntik.", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&q=80&auto=format&fit=crop", a: "https://id.wikipedia.org/wiki/PCSK9" },
];

const aturanPakaiData = [
  { t: "Waktu Minum", d: "Sebagian besar diminum malam hari, namun Ezetimibe bisa pagi atau malam." },
  { t: "Kombinasi", d: "Sering dikombinasikan dengan statin untuk hasil maksimal." },
  { t: "Cara Minum", d: "Tablet harus ditelan utuh dengan air, tidak boleh dikunyah." },
  { t: "Jika Lupa", d: "Segera minum saat teringat, kecuali mendekati jadwal berikutnya." },
];

const efekSampingData = [
  {
    t: 'Sakit Kepala',
    d: 'Kolesterol tinggi tidak langsung menimbulkan sakit kepala, sering disebut silent killer.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApqKCMAQuaz2sP1vBxTe3WjV1mE_Go9Tsn78mTTZ0lw&s=10',
    wiki: 'https://id.wikipedia.org/wiki/Sakit_kepala',
  },
  {
    t: 'Nyeri Otot',
    d: 'Nyeri otot umumnya efek samping obat penurun kolesterol golongan statin.',
    img: 'https://mandayahospitalgroup.com/wp-content/uploads/2025/11/555-1.jpg',
    wiki: 'https://id.wikipedia.org/wiki/Mialgia',
  },
  {
    t: 'Diare / Sembelit',
    d: 'Gangguan pencernaan sementara saat tubuh menyesuaikan diri dengan obat.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzCZpCzum_i76OzBM71kVhyLpFUJ7pdAyCmidWTVzJUxJA9IUUQVP9AA&s=10',
    wiki: 'https://id.wikipedia.org/wiki/Diare',
  },
  {
    t: 'Kelelahan',
    d: 'Rasa lelah yang tidak wajar dan berlangsung lebih lama dari biasanya.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAl7OPfsoVutG1CjQ6sYHdlgnXoQpC0DpLu527YQ01l-9VLNKOXk75yqLC&s=10',
    wiki: 'https://id.wikipedia.org/wiki/Kelelahan',
  },
  {
    t: 'Nyeri Perut',
    d: 'Ketidaknyamanan di area lambung yang biasanya ringan dan sementara.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYFr7hrvOHWvRNMWCizxQ7Lwo0osFBMA1PY6mgi0N6DkfqMSpy8L6dF29&s=10',
    wiki: 'https://id.wikipedia.org/wiki/Nyeri_perut',
  },
  {
    t: 'Pusing',
    d: 'Umumnya sementara dan akan mereda setelah beberapa hari penggunaan.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSias4fozfoRJSDRU2YVrxAt6SwRZCohftjuBMQ1OVKAkTgEk55Tq_-f7A9&s=10',
    wiki: 'https://id.wikipedia.org/wiki/Pusing',
  },
];

const pillarsData = [
  { no: '01', judul: 'Balanced Nutrition', judulId: 'Nutrisi Seimbang', isi: 'Eat more vegetables, fruits, whole grains, and omega-3-rich fish.', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&q=80&auto=format&fit=crop', wiki: 'https://en.wikipedia.org/wiki/Nutrition' },
  { no: '02', judul: 'Regular Physical Activity', judulId: 'Aktivitas Fisik Rutin', isi: 'At least 30 minutes of moderate exercise 5 times a week.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80&auto=format&fit=crop', wiki: 'https://en.wikipedia.org/wiki/Physical_exercise' },
  { no: '03', judul: 'Enough Rest', judulId: 'Istirahat Cukup', isi: 'Sleep 7–8 hours per day.', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&q=80&auto=format&fit=crop', wiki: 'https://en.wikipedia.org/wiki/Sleep' },
  { no: '04', judul: 'Manage Stress', judulId: 'Kelola Stres', isi: 'Practice meditation, yoga, or hobbies.', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80&auto=format&fit=crop', wiki: 'https://en.wikipedia.org/wiki/Psychological_stress' },
  { no: '05', judul: 'Avoid Smoking & Alcohol', judulId: 'Hindari Rokok & Alkohol', isi: 'Smoking lowers HDL and damages blood vessels.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXatPmW5zR8gKPBygFbs7aiqNAvhF5YajkWTL7jj8FQ_F-dEe9dCVW830&s=10', wiki: 'https://en.wikipedia.org/wiki/Smoking_cessation' },
];

const checklistData = [
  { en: 'Drink 8 glasses of water a day', id: 'Minum air putih 8 gelas sehari' },
  { en: 'Eat a nutritious breakfast', id: 'Sarapan dengan menu bergizi' },
  { en: 'Exercise for at least 30 minutes', id: 'Olahraga minimal 30 menit' },
  { en: 'Eat 5 servings of fruits and vegetables', id: 'Makan buah & sayur 5 porsi' },
  { en: 'Sleep 7–8 hours', id: 'Tidur 7–8 jam' },
  { en: 'Do not smoke & do not drink alcohol', id: 'Tidak merokok & tidak minum alkohol' },
  { en: 'Check blood pressure if needed', id: 'Cek tekanan darah bila perlu' },
  { en: 'Make time for relaxation', id: 'Luangkan waktu relaksasi' },
];

const marketingData = [
  { no: "01", icon: DollarSign, label: "Harga", isi: "Ditetapkan terjangkau untuk pasar herbal harian.", desc: "Strategi harga berlapis: kemasan refill dan hampers." },
  { no: "02", icon: MapPin, label: "Tempat", isi: "Pasar tradisional, toko herbal, apotek, marketplace.", desc: "Distribusi lewat mitra retail dan jalur resmi." },
  { no: "03", icon: Megaphone, label: "Promosi", isi: "Edukasi manfaat daun salam lewat media sosial.", desc: "Soft-selling melalui edukasi gaya hidup sehat." },
  { no: "04", icon: Target, label: "Sasaran", isi: "Masyarakat dewasa yang mencari minuman herbal alami.", desc: "Segmen prioritas yang mengutamakan bahan alami." },
];

/* ============================================================
   KOMPONEN UTAMA
   ============================================================ */

export function MateriSection() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(checklistData.length).fill(false));

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const checkedCount = checkedItems.filter(Boolean).length;

  return (
    <div className="bg-cream-darker">

      {/* ==================== MATERI A — 01 ==================== */}
      <section className="py-16 border-t border-forest/10 container mx-auto px-6 relative overflow-hidden">
        <MedicalPattern />
        <div className="absolute top-8 left-0 right-0 text-lime/20 pointer-events-none" aria-hidden="true">
          <EkgLine />
        </div>

        <div className="relative z-10">
          <SectionHeader badge="MATERI A" nomor="01" judulBold="PENGERTIAN" judulScript="Anti Kolesterol" />

          <FadeIn className="grid lg:grid-cols-2 gap-8 items-start mt-8">
            <div>
              <section className="relative overflow-hidden rounded-2xl border-l-4 border-forest bg-forest/5 p-6 mb-6 shadow-sm">
                <h3 className="text-2xl font-extrabold font-sans text-forest mb-3">
                  Apa Itu Obat Antikolesterol?
                </h3>
                <p className="text-base leading-relaxed font-sans text-gray-800 mb-4">
                  <strong className="text-forest">Obat antikolesterol</strong> adalah golongan
                  obat yang digunakan untuk menurunkan kadar kolesterol jahat (LDL) dan
                  trigliserida dalam darah, serta meningkatkan kolesterol baik (HDL).
                  Tujuannya adalah <strong className="text-forest">mencegah penyakit jantung dan stroke</strong>.
                </p>
                <div className="rounded-xl border border-forest/20 bg-white/70 p-4">
                  <h4 className="mb-2 text-sm font-bold text-forest">Cara Kerja Utama:</h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
                    <li>Menghambat enzim di hati.</li>
                    <li>Menghambat penyerapan kolesterol di usus.</li>
                    <li>Meningkatkan pembuangan kolesterol melalui empedu.</li>
                  </ul>
                </div>
              </section>

              <div className="bg-white p-6 rounded-3xl border border-grayish/20 shadow-sm">
                <h4 className="font-heading text-xl uppercase mb-4">5 Golongan Utama</h4>
                <ul className="space-y-3 font-sans text-sm">
                  <li className="flex justify-between border-b pb-2"><strong>Statin:</strong> <span>Simvastatin, Atorvastatin</span></li>
                  <li className="flex justify-between border-b pb-2"><strong>Fibrat:</strong> <span>Fenofibrat, Gemfibrozil</span></li>
                  <li className="flex justify-between border-b pb-2"><strong>Bile Acid Sequestrant:</strong> <span>Kolestiramin</span></li>
                  <li className="flex justify-between border-b pb-2"><strong>Penghambat Absorpsi:</strong> <span>Ezetimibe</span></li>
                  <li className="flex justify-between"><strong>PCSK9 Inhibitor:</strong> <span>Evolokumab, Alirocumab</span></li>
                </ul>
                <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-grayish/20">
                  <div className="text-center">
                    <p className="font-heading text-lg text-forest">LDL</p>
                    <p className="font-sans text-[9px] text-grayish uppercase tracking-widest">Diturunkan</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-lg text-forest">HDL</p>
                    <p className="font-sans text-[9px] text-grayish uppercase tracking-widest">Dijaga</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-lg text-forest">Trigliserida</p>
                    <p className="font-sans text-[9px] text-grayish uppercase tracking-widest">Diturunkan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[420px] rounded-[32px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&auto=format&fit=crop"
                alt="Obat Anti Kolesterol"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="font-script italic text-xl">Obat Anti Kolesterol</p>
                <p className="font-sans text-xs uppercase tracking-widest opacity-80">
                  Pencegahan Penyakit Jantung & Stroke
                </p>
              </div>
              <a
                href="https://id.wikipedia.org/wiki/Statin"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20"
                aria-label="Baca tentang Statin di Wikipedia"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MATERI B — 02 — STACKING CARDS ==================== */}
      <section className="py-16 border-t border-forest/10 bg-cream-darker relative">
        <MedicalPattern />
        <div className="relative z-10 container mx-auto px-6">
          <SectionHeader badge="MATERI B" nomor="02" judulBold="PENGGOLONGAN" judulScript="Anti Kolesterol" />

          <FadeIn className="max-w-3xl mx-auto text-center mt-6 mb-4">
            <p className="font-sans text-grayish leading-relaxed">
              Obat anti kolesterol terbagi menjadi <strong className="text-forest">6 golongan</strong> berdasarkan
              mekanisme kerjanya.
            </p>
            <p className="mt-2 font-sans text-xs italic text-grayish/60">
              ↓ Scroll untuk melihat tiap golongan ↓
            </p>
          </FadeIn>
        </div>

        <StackingCardsParallax
          items={golonganData.map((item, i) => ({
            title: item.n,
            description: item.d,
            image: item.img,
            link: item.a,
            badge: `Golongan ${String(i + 1).padStart(2, "0")}`,
            color: "#1E3A1E",
          }))}
        />
      </section>

      {/* ==================== MATERI C — 03 ==================== */}
      <section className="py-16 bg-forest text-cream relative overflow-hidden">
        <div className="absolute top-8 left-0 right-0 text-lime/15 pointer-events-none" aria-hidden="true">
          <EkgLine />
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-lime/15 pointer-events-none" aria-hidden="true">
          <EkgLine />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader badge="MATERI C" nomor="03" judulBold="ATURAN" judulScript="Pakai" dark />

          <div className="grid lg:grid-cols-3 gap-5 mt-8">
            <FadeIn className="col-span-1">
              <ElectricBorder color="#B5E048" speed={1.2} chaos={0.08} borderRadius={24}>
                <div className="bg-lime text-forest p-8 rounded-3xl relative overflow-hidden h-full">
                  <p className="font-sans text-xs uppercase tracking-[0.3em] mb-2">Contoh: Ezetimibe</p>
                  <h3 className="font-heading text-3xl mb-3">DOSIS UTAMA</h3>
                  <p className="font-script text-[64px] leading-none mb-3">10 mg</p>
                  <p className="font-sans font-bold uppercase tracking-widest text-xs">Satu Kali Sehari</p>
                  <a
                    href="https://id.wikipedia.org/wiki/Ezetimibe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label="Baca tentang Ezetimibe di Wikipedia"
                  />
                </div>
              </ElectricBorder>
            </FadeIn>

            <FadeIn delay={0.15} className="col-span-2 space-y-3">
              {aturanPakaiData.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center bg-forest-dark p-4 rounded-xl border border-lime/10 hover:border-lime/40 transition-all"
                >
                  <span className="font-heading text-2xl text-lime/60 shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-heading text-lime text-xs uppercase tracking-widest mb-0.5">{item.t}</p>
                    <p className="font-sans text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== CONTAINER SCROLL — VISUAL BREAK ==================== */}
      <section className="bg-forest overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-lime/70 mb-2">
                Pemahaman
              </p>
              <h2 className="text-3xl md:text-6xl font-bold text-cream leading-tight">
                Kenali <span className="font-script italic text-lime">Mekanisme</span>
                <br />
                <span className="text-3xl md:text-[5rem] leading-none">Kolesterol Tinggi</span>
              </h2>
            </>
          }
        >
          <Image
            src="/images/kolestrol.jpg"
            alt="Mekanisme Anti Kolesterol"
            width={1080}
            height={580}
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
            priority
          />
        </ContainerScroll>
      </section>

      {/* ==================== MATERI D — 04 ==================== */}
      <section className="py-16 bg-cream border-t border-forest/10 container mx-auto px-6 relative overflow-hidden">
        <MedicalPattern />
        <div className="relative z-10">
          <SectionHeader badge="MATERI D" nomor="04" judulBold="EFEK" judulScript="Samping" />

          <FadeIn className="bg-white rounded-2xl p-6 border border-grayish/20 mt-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 rounded-full bg-lime/20 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-forest" />
              </div>
              <p className="font-sans text-sm text-grayish leading-relaxed">
                Secara umum, obat anti kolesterol tergolong aman. Efek samping yang muncul
                biasanya ringan dan sementara. Namun tetap penting untuk mengetahui
                kemungkinan efek samping agar dapat segera berkonsultasi dengan tenaga
                kesehatan.
              </p>
            </div>
          </FadeIn>

          {/* ===== AccordionGallery — Efek Samping Umum (foto saja, hover) ===== */}
          <FadeIn className="mb-8">
            <h3 className="font-heading text-xl text-forest mb-5 flex items-center gap-2">
              <Activity className="w-5 h-5 text-lime" aria-hidden="true" /> Efek Samping Umum
              <span className="ml-auto font-sans text-[10px] uppercase tracking-[0.2em] text-grayish/70 hidden sm:inline">
                Hover untuk memperbesar →
              </span>
            </h3>

            <AccordionGallery
              trigger="hover"
              defaultIndex={2}
              expandRatio={0.52}
              height={460}
              gap={10}
              radius={16}
              accentColor="#B5E048"
              overlayColor="#1E3A1E"
              textColor="#F5F1E8"
              grayscale={true}
              showLabels={true}
              items={efekSampingData.map((item) => ({
                image: item.img,
                label: item.t,
                link: item.wiki,
                alt: item.t,
              }))}
            />
          </FadeIn>

          <FadeIn>
            <ElectricBorder color="#B5E048" speed={1.1} chaos={0.1} borderRadius={16}>
              <div className="bg-lime text-forest p-6 rounded-2xl">
                <h3 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 animate-pulse" aria-hidden="true" />
                  Kapan Harus ke Dokter?
                </h3>
                <p className="font-sans text-sm leading-relaxed">
                  Segera hubungi dokter jika efek samping <strong>tidak kunjung hilang</strong>,{' '}
                  <strong>semakin memburuk</strong>, atau muncul gejala seperti nyeri otot hebat,
                  kuning pada kulit, atau reaksi alergi.
                </p>
              </div>
            </ElectricBorder>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MATERI E — 05 ==================== */}
      <section className="py-16 bg-cream border-t border-forest/10 container mx-auto px-6 relative overflow-hidden">
        <MedicalPattern />
        <div className="relative z-10">
          <SectionHeader badge="MATERI E" nomor="05" judulBold="HEALTHY" judulScript="Lifestyle" />

          <FadeIn className="bg-white rounded-2xl border border-grayish/20 mt-6 mb-8 overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="relative md:col-span-2 aspect-[4/3] md:aspect-auto md:min-h-[220px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop"
                  alt="Healthy Lifestyle"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-3 p-6">
                <h3 className="font-heading text-xl text-forest mb-1">What is a Healthy Lifestyle?</h3>
                <p className="font-sans text-xs italic text-grayish/70 mb-3">Apa itu Pola Hidup Sehat?</p>
                <p className="font-sans text-sm text-grayish leading-relaxed">
                  A healthy lifestyle is a set of daily habits that support overall health. For people with{' '}
                  <strong className="text-forest">hypercholesterolemia</strong>, a healthy lifestyle is the
                  main key to keeping cholesterol under control.
                </p>
                <p className="font-sans italic text-xs text-grayish/70 leading-relaxed mt-2 border-l-2 border-lime/40 pl-3">
                  Pola hidup sehat adalah kebiasaan sehari-hari yang mendukung kesehatan tubuh
                  secara menyeluruh.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="mb-8">
            <h3 className="font-heading text-xl text-forest mb-1">5 Pillars of a Healthy Lifestyle</h3>
            <p className="font-sans italic text-xs text-grayish/70 mb-4">5 Pilar Pola Hidup Sehat</p>
            <div className="space-y-3">
              {pillarsData.map((item, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.05}
                  className="group flex gap-3 items-stretch bg-white rounded-xl relative border border-grayish/20 overflow-hidden hover:border-lime/50 hover:shadow-md transition-all"
                >
                  <div className="relative w-20 sm:w-24 shrink-0 overflow-hidden">
                    <Image src={item.img} alt={item.judul} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="flex gap-3 items-start p-3 flex-1">
                    <span className="font-script text-2xl italic text-lime leading-none shrink-0">
                      {item.no}
                    </span>
                    <div>
                      <h4 className="font-heading text-sm text-forest">{item.judul}</h4>
                      <p className="font-sans italic text-[10px] text-grayish/60">{item.judulId}</p>
                      <p className="text-xs font-sans text-grayish mt-1 leading-snug">{item.isi}</p>
                    </div>
                  </div>
                  <a
                    href={item.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label={`Baca tentang ${item.judul}`}
                  />
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <ElectricBorder color="#B5E048" speed={1} chaos={0.12} borderRadius={16}>
              <div className="bg-forest text-cream p-6 rounded-2xl relative overflow-hidden">
                <HeartPulse
                  className="absolute right-[-10px] top-[-10px] w-32 h-32 text-lime/10 animate-pulse"
                  aria-hidden="true"
                />
                <h3 className="font-heading text-lg text-lime mb-1 z-10 relative flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  Daily Healthy Lifestyle Checklist
                </h3>
                <p className="font-sans italic text-xs text-lime/60 mb-4 z-10 relative">
                  Checklist Harian Pola Hidup Sehat
                </p>

                <ul className="grid md:grid-cols-2 gap-2 text-xs font-sans z-10 relative">
                  {checklistData.map((item, i) => {
                    const isChecked = checkedItems[i];
                    return (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => toggleCheck(i)}
                          aria-pressed={isChecked}
                          className="w-full text-left group flex items-center gap-2 border-b border-cream/20 pb-1.5 hover:border-lime transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime/60 rounded"
                        >
                          <span
                            className={`flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${isChecked ? 'bg-lime border-lime' : 'border-cream/40 group-hover:border-lime'
                              }`}
                          >
                            {isChecked && (
                              <CheckCircle2 className="w-3 h-3 text-forest" strokeWidth={3} />
                            )}
                          </span>
                          <span className="flex-1">
                            <span
                              className={`block text-xs transition-all ${isChecked ? 'line-through text-cream/50' : ''
                                }`}
                            >
                              {item.en}
                            </span>
                            <span
                              className={`block text-[10px] italic transition-all ${isChecked ? 'line-through text-cream/30' : 'text-cream/50'
                                }`}
                            >
                              {item.id}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 relative z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-lime/70">
                      Daily Progress
                    </span>
                    <span className="font-heading text-lime text-xs">
                      {checkedCount} / {checklistData.length}
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full bg-cream/10 overflow-hidden"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={checklistData.length}
                    aria-valuenow={checkedCount}
                  >
                    <div
                      className="h-full bg-lime rounded-full transition-all duration-500"
                      style={{ width: `${(checkedCount / checklistData.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </ElectricBorder>
          </FadeIn>
        </div>
      </section>

      {/* ==================== MATERI F — 06 ==================== */}
      <section className="relative overflow-hidden border-t border-forest/10 bg-cream py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-lime/10 blur-[100px]" />
          <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-forest/[0.05] blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest font-heading text-xs text-lime">
                    06
                  </span>
                  <span className="h-px w-10 bg-forest/30" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-grayish">
                    Materi F · Anggota 6
                  </span>
                </div>
                <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.85] tracking-[-0.04em] text-forest">
                  PRODUK &
                  <span className="block pl-[6vw] font-script text-[1.1em] font-normal italic leading-[0.85] text-forest">
                    Strategi Pemasaran
                  </span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-lg font-sans text-sm leading-6 text-charcoal md:text-base">
                Berawal dari <span className="font-semibold text-forest">produk unggulan</span> daun salam,
                lalu dilanjutkan dengan <span className="font-semibold text-forest">strategi pemasaran</span>.
              </p>
            </FadeIn>
          </div>

          <FadeIn className="mt-10">
            <ElectricBorder color="#B5E048" speed={1.4} chaos={0.1} borderRadius={24}>
              <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-8 md:px-10 md:py-10">
                <span
                  className="pointer-events-none absolute -right-4 -top-10 font-heading text-[150px] leading-none text-white/[0.025]"
                  aria-hidden="true"
                >
                  06
                </span>
                <div className="absolute left-0 top-0 h-full w-1 bg-lime" />
                <div className="relative z-10">
                  <p className="mb-3 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-lime/70">
                    Kutipan
                  </p>
                  <h3 className="font-script text-[clamp(1.8rem,4vw,3.5rem)] italic leading-[0.95] text-lime">
                    "Salam Sehat,
                    <br />
                    Tubuh Lebih Bugar"
                  </h3>
                </div>
              </div>
            </ElectricBorder>
          </FadeIn>

          <FadeIn className="mt-12 mb-6">
            <div className="border-b border-forest/15 pb-4">
              <h3 className="font-heading text-2xl uppercase tracking-tight text-forest md:text-3xl">
                01 — Produk <span className="font-script font-normal italic text-forest">Unggulan</span>
              </h3>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-30px_rgba(30,58,30,0.35)] transition-all duration-500">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[340px] overflow-hidden lg:min-h-[520px]">
                  <Image
                    src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/09/14031322/Ketahui-X-Manfaat-Daun-Salam-untuk-Kesehatan-Tubuh-1.jpg"
                    alt="Daun Salam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-forest shadow-lg md:left-8 md:top-8">
                    <Package className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="mb-1 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-lime/90">
                      Produk
                    </p>
                    <h4 className="font-heading text-3xl uppercase leading-none text-white md:text-4xl">
                      Daun Salam
                    </h4>
                  </div>
                </div>

                <div className="relative flex flex-col justify-center p-6 md:p-10">
                  <span
                    className="pointer-events-none absolute -right-4 -top-8 font-heading text-[140px] leading-none text-forest/[0.04]"
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <div className="relative z-10">
                    <p className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-grayish">
                      Produk Unggulan
                    </p>
                    <p className="max-w-2xl font-sans text-lg font-semibold leading-relaxed text-charcoal md:text-xl">
                      Daun salam — diproduksi oleh{' '}
                      <span className="text-forest">SMK Al Syairiyah Limpung</span>.
                    </p>
                    <div className="my-5 h-px bg-forest/10" />
                    <p className="max-w-2xl font-sans text-sm leading-6 text-grayish">
                      Daun salam mengandung flavonoid, tanin, saponin, dan minyak atsiri yang berperan
                      sebagai antioksidan alami.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Daun Salam"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-forest/15 bg-cream px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-forest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="mt-12 mb-6">
            <div className="border-b border-forest/15 pb-4">
              <h3 className="font-heading text-2xl uppercase tracking-tight text-forest md:text-3xl">
                02 — Strategi <span className="font-script font-normal italic text-forest">Pemasaran</span>
              </h3>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {marketingData.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.no} delay={index * 0.06}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-forest/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-lime/60 md:p-6">
                    <span
                      className="absolute -right-2 -top-4 font-heading text-[80px] leading-none text-forest/[0.035]"
                      aria-hidden="true"
                    >
                      {item.no}
                    </span>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest text-lime transition-all duration-500 group-hover:bg-lime group-hover:text-forest">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <span className="font-mono text-[10px] text-grayish">{item.no} / 04</span>
                    </div>
                    <div className="relative z-10 mt-5">
                      <p className="mb-1 font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-grayish">
                        Strategi Pemasaran
                      </p>
                      <h4 className="font-heading text-xl uppercase text-forest md:text-2xl">
                        {item.label}
                      </h4>
                      <p className="mt-3 font-sans text-sm font-semibold leading-5 text-charcoal">
                        {item.isi}
                      </p>
                      <p className="mt-2 font-sans text-xs leading-5 text-grayish">{item.desc}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-all duration-500 group-hover:w-full" />
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