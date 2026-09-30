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
    q: "Apa tujuan utama dari obat anti kolesterol?",
    opsi: [
      "Menurunkan LDL & trigliserida serta meningkatkan HDL",
      "Menaikkan kadar trigliserida dalam darah",
      "Menghilangkan seluruh lemak tubuh secara instan",
      "Meningkatkan tekanan darah agar jantung lebih kuat",
    ],
    jawaban: 0,
    materi: "Materi A — Pengertian",
  },
  {
    q: "Berikut ini adalah cara kerja utama obat anti kolesterol, KECUALI...",
    opsi: [
      "Menghambat enzim di hati",
      "Menghambat penyerapan kolesterol di usus",
      "Meningkatkan pembuangan kolesterol melalui empedu",
      "Menghancurkan plak yang sudah menempel di pembuluh darah",
    ],
    jawaban: 3,
    materi: "Materi A — Pengertian",
  },
  {
    q: "Manakah yang BUKAN termasuk 5 golongan utama obat anti kolesterol?",
    opsi: ["Statin", "Fibrat", "Antibiotik", "PCSK9 Inhibitor"],
    jawaban: 2,
    materi: "Materi B — Penggolongan",
  },
  {
    q: "Simvastatin dan Atorvastatin merupakan contoh obat golongan...",
    opsi: ["Fibrat", "Statin", "Niacin", "Bile Acid Sequestrant"],
    jawaban: 1,
    materi: "Materi B — Penggolongan",
  },
  {
    q: "Ezetimibe bekerja dengan cara menghambat penyerapan kolesterol di usus, sehingga termasuk golongan...",
    opsi: [
      "Penghambat Absorpsi",
      "Fibrat",
      "Bile Acid Sequestrant",
      "PCSK9 Inhibitor",
    ],
    jawaban: 0,
    materi: "Materi B — Penggolongan",
  },
  {
    q: "Berapa dosis umum Ezetimibe yang biasa digunakan?",
    opsi: ["2,5 mg sekali sehari", "10 mg sekali sehari", "50 mg dua kali sehari", "100 mg sekali sehari"],
    jawaban: 1,
    materi: "Materi C — Aturan Pakai",
  },
  {
    q: "Bagaimana cara minum tablet obat anti kolesterol yang benar?",
    opsi: [
      "Dikunyah agar cepat larut",
      "Digerus lalu dicampur air",
      "Ditelan utuh dengan air",
      "Dilarutkan dalam minuman panas",
    ],
    jawaban: 2,
    materi: "Materi C — Aturan Pakai",
  },
  {
    q: "Manakah yang termasuk efek samping umum obat anti kolesterol?",
    opsi: [
      "Nyeri otot, sakit kepala, dan gangguan pencernaan",
      "Rambut memutih dan kuku membiru",
      "Penglihatan menjadi warna hijau",
      "Tinggi badan bertambah",
    ],
    jawaban: 0,
    materi: "Materi D — Efek Samping",
  },
  {
    q: "Menurut 5 Pilar Pola Hidup Sehat, berapa lama aktivitas fisik minimal yang dianjurkan setiap hari?",
    opsi: [
      "5 menit, 1 kali seminggu",
      "10 menit, 3 kali seminggu",
      "30 menit, 5 kali seminggu",
      "2 jam, setiap hari",
    ],
    jawaban: 2,
    materi: "Materi E — Pola Hidup Sehat",
  },
  {
    q: "Berapa durasi tidur yang cukup untuk membantu tubuh memperbaiki sel dan mengatur hormon stres?",
    opsi: ["3–4 jam per hari", "5–6 jam per hari", "7–8 jam per hari", "10–12 jam per hari"],
    jawaban: 2,
    materi: "Materi E — Pola Hidup Sehat",
  },
  {
    q: "Produk unggulan yang diproduksi oleh SMK Al Syairiyah Limpung adalah...",
    opsi: [
      "Kapsul, kemasan, dan teh rebusan daun salam",
      "Kapsul dan sirup daun sirsak",
      "Teh celup daun jambu biji",
      "Minyak kayu putih kemasan",
    ],
    jawaban: 0,
    materi: "Materi F — Produk Unggulan",
  },
  {
    q: "Pendekatan promosi produk daun salam dilakukan dengan cara...",
    opsi: [
      "Klaim medis berlebihan agar cepat laku",
      "Edukasi gaya hidup sehat (soft-selling) lewat media sosial, konten resep, dan seminar",
      "Menjanjikan penyembuhan total tanpa dokter",
      "Menjual hanya lewat iklan berbayar",
    ],
    jawaban: 1,
    materi: "Materi F — Strategi Pemasaran",
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
        <SectionHeader badge="INTERAKTIF" nomor="08" judulBold="KUIS" judulScript="Anti Kolesterol" />

        <FadeIn className="max-w-3xl mx-auto text-center mt-8 mb-12">
          <p className="font-sans text-grayish leading-relaxed">
            Uji seberapa jauh pemahamanmu tentang obat anti kolesterol & pola hidup sehat.
            Jawab {total} pertanyaan berikut.
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
                <BrainCircuit className="w-7 h-7 text-lime shrink-0 mt-1" />
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