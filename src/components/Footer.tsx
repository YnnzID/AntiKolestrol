export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream pt-24 pb-8 border-t-[16px] border-lime relative z-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <h2 className="font-heading text-4xl mb-4 tracking-tighter">EdukasyaClub</h2>
          <p className="font-sans text-cream/70 max-w-sm mb-6">
            Website edukasi interaktif untuk memenuhi tugas mid semester. Dibuat dengan dedikasi untuk menyajikan informasi medis yang akurat dan mudah dipahami.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cream/10 text-[11px] font-bold uppercase tracking-[0.15em]">
            <span>FKK X RPL</span>
            <span className="w-px h-3 bg-lime/50" />
            <span className="text-lime">SMK AL-SYA'IRIYAH LIMPUNG</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-lime mb-6 text-sm">Navigasi</h4>
          <ul className="space-y-3 font-sans text-cream/80 text-sm">
            <li><a href="#" className="hover:text-lime transition-colors">Beranda</a></li>
            <li><a href="#materi" className="hover:text-lime transition-colors">Materi Lengkap</a></li>
            <li><a href="#tim" className="hover:text-lime transition-colors">Tim Penyusun</a></li>
            <li><a href="#video" className="hover:text-lime transition-colors">Video Edukasi</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-lime mb-6 text-sm">Sumber</h4>
          <ul className="space-y-3 font-sans text-cream/80 text-sm">
            <li>Buku Paket Biologi Kelas 12</li>
            <li>Jurnal Medis Farmakologi</li>
            <li>Publikasi FDA & BPOM RI</li>
            <li>INTERNET</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-cream/10 pt-8 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
        {/* KIRI: Copyright + Author */}
        <p className="text-[12px] font-sans text-cream/50 text-center md:text-left">
          &copy; {new Date().getFullYear()} Tim Penyusun Tugas Mid Semester. Hak Cipta Dilindungi.
          <span className="mx-2 text-cream/20">|</span>
          Crafted by{' '}
          <a
            href="https://ynnz.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative z-20
              inline-block
              pointer-events-auto cursor-pointer
              px-1 py-0.5
              text-cream/60 hover:text-lime
              transition-colors duration-300
              underline decoration-cream/20 hover:decoration-lime
              underline-offset-2
            "
          >
            YnnzID
          </a>
          & Team
        </p>

        {/* KANAN: Disclaimer */}
        <p className="text-[12px] font-sans text-cream/50 text-center md:text-right max-w-lg">
          Disclaimer: Informasi pada website ini ditujukan untuk keperluan edukasi sekolah, bukan sebagai pengganti nasihat medis profesional. Silakan konsultasikan dengan dokter Anda.
        </p>
      </div>
    </footer>
  );
}