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

export interface Komentar {
  id: string;
  nama: string;
  peran: 'guru' | 'siswa' | 'umum';
  penilaian: number;
  pesan: string;
  suka: number;
  dibuat_pada: string;
}
