import { Archivo_Black, Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';

const archivo = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-archivo' });
const instrument = Instrument_Serif({ weight: '400', style: 'italic', subsets: ['latin'], variable: '--font-instrument' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata = {
  title: 'EdukasyaClub',
  description: 'Website edukasi obat Anti Kolesterol untuk presentasi tugas sekolah',
  keywords: ['obat ezetimibe', 'ezetimibe', 'statin', 'hiperlipidemia', 'obat kolesterol', 'tugas biologi'],
  authors: [{ name: 'Kelompok 1' }],
  openGraph: {
    title: 'EdukasyaClub',
    description: 'Website edukasi obat Anti Kolesterol untuk presentasi tugas sekolah',
    images: [
      {
        url: '/images/icon.png',
        width: 1200,
        height: 630,
        alt: 'EdukasyaClub',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${archivo.variable} ${instrument.variable} ${manrope.variable} font-sans bg-cream text-charcoal antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}