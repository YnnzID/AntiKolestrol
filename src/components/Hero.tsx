import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-forest flex items-center justify-center overflow-hidden pt-20">

      {/* ==================== PREMIUM BACKGROUND ==================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Base gradient */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_15%_20%,rgba(200,230,120,0.10),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(200,230,120,0.06),transparent_30%)]
          "
        />

        {/* Large soft light - kiri */}
        <div
          className="
            absolute -left-40 -top-40
            h-[650px] w-[650px]
            rounded-full
            bg-lime/[0.07]
            blur-[140px]
          "
        />

        {/* Large soft light - kanan */}
        <div
          className="
            absolute -bottom-48 -right-48
            h-[650px] w-[650px]
            rounded-full
            bg-lime/[0.055]
            blur-[140px]
          "
        />

        {/* ==================== EDITORIAL GRID ==================== */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,230,120,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,230,120,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
          }}
        />

        {/* ==================== MAIN GLOW ==================== */}

        <div
          className="
            absolute left-[48%] top-[45%]
            h-[420px] w-[420px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-lime/[0.035]
            blur-[110px]
          "
        />

        {/* ==================== THIN EDITORIAL LINES ==================== */}

        <div
          className="
            absolute left-[7%] top-0
            h-full w-px
            bg-gradient-to-b
            from-transparent via-lime/[0.08] to-transparent
          "
        />

        <div
          className="
            absolute right-[7%] top-0
            h-full w-px
            bg-gradient-to-b
            from-transparent via-lime/[0.08] to-transparent
          "
        />

        <div
          className="
            absolute left-0 right-0 top-[16%]
            h-px
            bg-gradient-to-r
            from-transparent via-lime/[0.08] to-transparent
          "
        />

        <div
          className="
            absolute bottom-[12%] left-0 right-0
            h-px
            bg-gradient-to-r
            from-transparent via-lime/[0.08] to-transparent
          "
        />

        {/* ==================== CORNER DETAILS ==================== */}

        <div
          className="
            absolute left-8 top-24
            h-16 w-16
            border-l border-t
            border-lime/[0.12]
          "
        />

        <div
          className="
            absolute bottom-24 right-8
            h-16 w-16
            border-b border-r
            border-lime/[0.12]
          "
        />

        {/* ==================== SMALL DOT FIELD ==================== */}

        <div
          className="
            absolute right-[8%] top-[20%]
            h-[180px] w-[180px]
            opacity-[0.18]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,230,120,0.65) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
          }}
        />

        {/* ==================== SINGLE FLOATING ORBIT ==================== */}

        <div
          className="
            absolute right-[7%] top-[18%]
            h-[180px] w-[320px]
            rotate-[-22deg]
            rounded-[50%]
            border
            border-lime/[0.08]
          "
        >
          <div
            className="
              absolute left-[12%] top-1/2
              h-1.5 w-1.5
              rounded-full
              bg-lime/50
              shadow-[0_0_18px_rgba(200,230,120,0.5)]
            "
          />
        </div>

        {/* ==================== VERY SUBTLE PARTICLES ==================== */}

        <div className="absolute inset-0">
          <span
            className="
              absolute left-[18%] top-[28%]
              h-1 w-1
              rounded-full
              bg-lime/30
              animate-float-slow
            "
          />

          <span
            className="
              absolute left-[72%] top-[35%]
              h-1.5 w-1.5
              rounded-full
              bg-lime/20
              animate-float-slow
            "
            style={{ animationDelay: "1.5s" }}
          />

          <span
            className="
              absolute bottom-[28%] left-[62%]
              h-1 w-1
              rounded-full
              bg-lime/25
              animate-float-slow
            "
            style={{ animationDelay: "2.5s" }}
          />
        </div>

      </div>

      {/* ==================== KONTEN ==================== */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center">

            {/* ---------- JUDUL ---------- */}
            <h1 className="flex flex-col items-center text-center">
              {/* Baris 1: OBAT — gradient */}
              <span
                className="
                  relative
                  font-heading
                  text-[72px] md:text-[100px] lg:text-[120px]
                  text-white uppercase leading-[0.9] tracking-tight
                  bg-gradient-to-r from-white via-lime to-white
                  bg-clip-text text-transparent
                  animate-gradient
                "
              >
                OBAT
              </span>

              {/* Baris 2: Anti — script italic */}
              <span
                className="
                  relative
                  font-script italic text-lime
                  text-[80px] md:text-[100px] lg:text-[120px]
                  leading-[0.8] -mt-2 md:-mt-6
                  drop-shadow-[0_0_30px_rgba(200,230,120,0.5)]
                "
              >
                Anti
              </span>

              {/* Baris 3: KOLESTEROL — putih solid */}
              <span
                className="
                  font-heading
                  text-[72px] md:text-[100px] lg:text-[120px]
                  text-white uppercase leading-[0.9] tracking-tight
                  hover:text-lime transition-colors duration-500
                "
              >
                KOLESTEROL
              </span>
            </h1>

            {/* ---------- SUBTITLE ---------- */}
            <div className="flex items-center justify-center gap-3 mt-4 mb-6 opacity-80">
              <div className="w-8 h-[1px] bg-lime/60" />
            </div>

            {/* ---------- DESKRIPSI ---------- */}
            <p
              className="
                font-sans text-cream text-lg
                max-w-[560px] mx-auto mt-2 mb-10
                leading-relaxed opacity-90 text-center
                animate-fade-slide
              "
            >
              Di sini kita belajar{" "}
              <strong className="text-lime">
                Obat Anti Kolesterol &amp; Pencegahan Kolesterol
              </strong>{" "}
              — Pembahasannya mencakup golongan obat penurun LDL dan trigliserida, serta obat yang berperan menjaga HDL. Semua ini penting agar risiko penyakit jantung dan stroke bisa dicegah.
            </p>

            {/* ---------- TOMBOL ---------- */}
            <div className="flex flex-wrap gap-4 justify-center">

              {/* Tombol utama */}
              <a
                href="#materi"
                className="
                  group relative inline-block
                  px-8 py-4 bg-cream text-forest font-bold rounded-full
                  hover:-translate-y-1
                  hover:shadow-[0_0_40px_8px_rgba(200,230,120,0.5)]
                  transition-all duration-500
                  overflow-hidden
                "
              >
                <span
                  className="
                    absolute inset-0
                    bg-gradient-to-r from-transparent via-lime/60 to-transparent
                    -translate-x-full group-hover:translate-x-full
                    transition-transform duration-1000 pointer-events-none
                  "
                />
                <span className="relative z-10 flex items-center gap-2">
                  Pelajari Materi
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </a>

              {/* Tombol sekunder */}
              <a
                href="#tim"
                className="
                  group inline-block
                  px-8 py-4 bg-transparent
                  border-2 border-cream text-cream font-bold rounded-full
                  hover:-translate-y-1
                  hover:border-lime hover:text-lime
                  hover:shadow-[0_0_30px_4px_rgba(200,230,120,0.3)]
                  transition-all duration-500
                "
              >
                <span className="inline-flex items-center gap-2">
                  Lihat Tim
                </span>
              </a>
            </div>

            {/* ---------- SCROLL INDICATOR ---------- */}
            <div className="mt-16 hidden lg:flex items-center justify-center gap-4 opacity-60" />

          </div>
        </FadeIn>
      </div>

    </section>
  );
}