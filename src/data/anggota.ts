export interface Anggota {
  id: number;
  nama: string;
  nis: string;
  kelas: string;
  jabatan: string;
  tugas: string;
  bagian: string;
  foto: string;
  ketua?: boolean;
}

export const anggota: Anggota[] = [
  {
    id: 1,
    nama: "Fikri Maulana Alfian",
    nis: "2210090652",
    kelas: "XII RPL 2",
    jabatan: "Ketua Kelompok",
    tugas: "Kordinator Pembuat Website",
    bagian: "semua",
    foto: "/images/foto1.jpg",
    ketua: true
  },
  {
    id: 2,
    nama: "Maulana Hisyam",
    nis: "221002",
    kelas: "XII RPL 2",
    jabatan: "Anggota",
    tugas: "Dokumentasi",
    bagian: "A",
    foto: "/images/codot.jpeg"
  },
  {
    id: 3,
    nama: "I'anatul Latifah",
    nis: "221003",
    kelas: "XII FKK",
    jabatan: "Anggota",
    tugas: "Materi B — Penggolongan",
    bagian: "B",
    foto: "/images/ian.jpeg"
  },
  {
    id: 4,
    nama: "Fika Khurotul Aini",
    nis: "221004",
    kelas: "XII RPL 1",
    jabatan: "Anggota",
    tugas: "Materi C — Aturan Pakai",
    bagian: "C",
    foto: "/images/fika.JPG"
  },
  {
    id: 5,
    nama: "Istiyan Kholifatul Mahmudah",
    nis: "221005",
    kelas: "XII FKK",
    jabatan: "Anggota",
    tugas: "Materi D — Efek Samping",
    bagian: "D",
    foto: "/images/fatul.jpeg"
  },
  {
    id: 6,
    nama: "Fauziya Akmalina",
    nis: "221006",
    kelas: "XII RPL 1",
    jabatan: "Anggota",
    tugas: "Materi E — Pola Hidup Sehat",
    bagian: "E",
    foto: "/images/ayak.jpeg"
  },
  {
    id: 7,
    nama: "Jamilah",
    nis: "221007",
    kelas: "XII FKK",
    jabatan: "Anggota",
    tugas: "Materi F & G — Pemasaran & Sejarah",
    bagian: "FG",
    foto: "/images/jamilah.jpeg"
  },
];
