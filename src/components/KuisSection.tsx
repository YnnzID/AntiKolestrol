'use client';
import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionHeader } from './SectionHeader';
import { CheckCircle2, XCircle, RotateCcw, Trophy, BrainCircuit } from 'lucide-react';

type Soal = {
  q: string;
  opsi: string[];
  jawaban: number;
  materi: string;
};

const DAFTAR_SOAL: Soal[] = [
  {
    q: "Apa tujuan utama terapi obat anti kolesterol?",
    opsi: [
      "Menurunkan kadar LDL dan meningkatkan HDL",
      "Menaikkan kadar trigliserida dalam darah",
      "Menghilangkan seluruh lemak tubuh",
      "Meningkatkan tekanan darah",
    ],
    jawaban: 0,
    materi: "Materi A — Pengertian",
  },
  {
    q: "Obat golongan statin bekerja dengan cara...",
    opsi: [
      "Menghambat penyerapan lemak di usus",
      "Menghambat enzim HMG-CoA reduktase di hati",
      "Meningkatkan ekskresi empedu",
      "Menghancurkan plak di pembuluh darah",
    ],
    jawaban: 1,
    materi: "Materi B — Penggolongan",
  },
  {
    q: "Berikut ini yang termasuk golongan obat anti kolesterol, kecuali...",
    opsi: ["Statin", "Fibrat", "Ezetimibe", "Antibiotik"],
    jawaban: 3,
    materi: "Materi B — Penggolongan",
  },
  {
    q: "Kapan waktu terbaik minum obat statin agar efektif?",
    opsi: [
      "Pagi hari setelah makan",
      "Malam hari sebelum tidur",
      "Siang hari saat makan",
      "Kapan saja tanpa aturan",
    ],
    jawaban: 1,
    materi: "Materi C — Aturan Pakai",
  },
  {
    q: "Efek samping serius yang perlu diwaspadai dari obat statin adalah...",
    opsi: [
      "Nyeri otot berat & peningkatan enzim hati",
      "Rambut rontok ringan",
      "Sedikit mengantuk",
      "Warna kulit menjadi gelap",
    ],
    jawaban: 0,
    materi: "Materi D — Efek Samping",
  },
  {
    q: "Selain obat, pola hidup sehat untuk menurunkan kolesterol antara lain...",
    opsi: [
      "Konsumsi gorengan setiap hari",
      "Olahraga rutin & diet rendah lemak jenuh",
      "Merokok untuk melebarkan pembuluh darah",
      "Tidur kurang dari 4 jam",
    ],
    jawaban: 1,
    materi: "Materi E — Pola Hidup Sehat",
  },
  {
    q: "Target kadar LDL yang umumnya dianjurkan untuk pasien risiko tinggi adalah...",
    opsi: ["< 30 mg/dL", "< 70 mg/dL", "< 130 mg/dL", "< 200 mg/dL"],
    jawaban: 1,
    materi: "Materi F — Target Terapi",
  },
  {
    q: "Obat golongan PCSK9 inhibitor umumnya diberikan melalui...",
    opsi: ["Tablet oral", "Suntikan subkutan", "Inhalasi", "Tetes mata"],
    jawaban: 1,
    materi: "Materi G — Terapi Lanjutan",
  },
];

export function KuisSection() {
  const [current, setCurrent] = useState(0);
  const [pilihan, setPilihan] = useState<(number | null)[]>(Array(DAFTAR_SOAL.length).fill(null));
  const [selesai, setSelesai] = useState(false);

  const pilihJawaban = (idx: number) => {
    if (pilihan[current] !== null) return;
    const baru = [...pilihan];
    baru[current] = idx;
    setPilihan(baru);
  };

  const lanjut = () => {
    if (current < DAFTAR_SOAL.length - 1) setCurrent(current + 1);
    else setSelesai(true);
  };

  const ulang = () => {
    setCurrent(0);
    setPilihan(Array(DAFTAR_SOAL.length).fill(null));
    setSelesai(false);
  };

  const skor = pilihan.filter((p, i) => p === DAFTAR_SOAL[i].jawaban).length;
  const total = DAFTAR_SOAL.length;
  const persen = Math.round((skor / total) * 100);

  const getFeedback = () => {
    if (persen >= 90) return { label: "Luar Biasa! ", warna: "text-lime" };
    if (persen >= 70) return { label: "Bagus! ", warna: "text-lime" };
    if (persen >= 50) return { label: "Cukup, tingkatkan lagi ", warna: "text-yellow-500" };
    return { label: "Ayo baca materinya lagi ", warna: "text-red-400" };
  };

  return (
    <section className="py-24 bg-cream-darker">
      <div className="container mx-auto px-6">
        <SectionHeader badge="INTERAKTIF" nomor="10" judulBold="KUIS" judulScript="Anti Kolesterol" />

        <FadeIn className="max-w-3xl mx-auto text-center mt-8 mb-12">
          <p className="font-sans text-grayish leading-relaxed">
            Uji seberapa jauh pemahamanmu tentang obat anti kolesterol. Jawab {total} pertanyaan berikut.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {!selesai && (
            <FadeIn key={current} className="bg-white rounded-[32px] p-8 md:p-10 border border-grayish/20 shadow-lg">
              <div className="mb-8">
                <div className="flex justify-between text-xs font-sans text-grayish mb-2">
                  <span className="font-bold tracking-widest uppercase">Soal {current + 1} / {total}</span>
                  <span className="font-bold text-forest">{DAFTAR_SOAL[current].materi}</span>
                </div>
                <div className="h-2 bg-cream rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-forest to-lime transition-all duration-500"
                    style={{ width: `${((current + 1) / total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <h3 className="font-heading text-xl md:text-2xl text-forest leading-snug">
                  {DAFTAR_SOAL[current].q}
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {DAFTAR_SOAL[current].opsi.map((opsi, idx) => {
                  const sudahDijawab = pilihan[current] !== null;
                  const dipilih = pilihan[current] === idx;
                  const benar = idx === DAFTAR_SOAL[current].jawaban;

                  let cls = "w-full text-left p-5 rounded-2xl border-2 font-sans transition-all duration-300 ";
                  if (!sudahDijawab) cls += "border-grayish/20 hover:border-lime hover:bg-lime/5 cursor-pointer";
                  else if (benar) cls += "border-lime bg-lime/15 text-forest font-bold";
                  else if (dipilih) cls += "border-red-400 bg-red-50 text-red-700";
                  else cls += "border-grayish/10 text-grayish opacity-60";

                  return (
                    <button key={idx} onClick={() => pilihJawaban(idx)} disabled={sudahDijawab} className={cls}>
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold
                          ${!sudahDijawab ? 'bg-cream text-forest' : ''}
                          ${sudahDijawab && benar ? 'bg-lime text-forest' : ''}
                          ${sudahDijawab && dipilih && !benar ? 'bg-red-400 text-white' : ''}
                          ${sudahDijawab && !benar && !dipilih ? 'bg-cream text-grayish' : ''}
                        `}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{opsi}</span>
                        {sudahDijawab && benar && <CheckCircle2 className="w-5 h-5 text-forest" />}
                        {sudahDijawab && dipilih && !benar && <XCircle className="w-5 h-5 text-red-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {pilihan[current] !== null && (
                <FadeIn>
                  <button
                    onClick={lanjut}
                    className="w-full bg-forest text-cream py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-forest-dark transition-all"
                  >
                    {current < total - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil '}
                  </button>
                </FadeIn>
              )}
            </FadeIn>
          )}

          {selesai && (
            <FadeIn className="bg-forest text-cream rounded-[32px] p-10 md:p-12 relative overflow-hidden shadow-2xl">
              <Trophy className="absolute -right-10 -bottom-10 w-56 h-56 text-lime/10 animate-pulse" />
              <div className="text-center relative z-10">
                <Trophy className="w-16 h-16 text-lime mx-auto mb-4 animate-bounce" />
                <p className="font-sans text-xs uppercase tracking-widest text-cream/70 mb-2">Hasil Kuismu</p>
                <p className="font-script text-[80px] leading-none text-lime mb-2">{persen}%</p>
                <p className="font-heading text-2xl mb-2">{skor} / {total} Benar</p>
                <p className={`font-sans text-lg font-bold mb-8 ${getFeedback().warna}`}>{getFeedback().label}</p>

                <div className="text-left bg-forest-dark rounded-2xl p-6 mb-8 max-h-64 overflow-y-auto">
                  <p className="font-sans text-xs uppercase tracking-widest text-lime mb-3 font-bold">Ringkasan Jawaban</p>
                  <ul className="space-y-2 text-sm font-sans">
                    {DAFTAR_SOAL.map((s, i) => {
                      const bnr = pilihan[i] === s.jawaban;
                      return (
                        <li key={i} className="flex items-start gap-3 border-b border-cream/10 pb-2">
                          {bnr ? <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" /> : <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />}
                          <span className="flex-1 text-cream/80"><strong className="text-cream">{s.materi}:</strong> {s.q}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <button
                  onClick={ulang}
                  className="inline-flex items-center gap-2 bg-lime text-forest px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-all"
                >
                  <RotateCcw className="w-5 h-5" /> Coba Lagi
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}