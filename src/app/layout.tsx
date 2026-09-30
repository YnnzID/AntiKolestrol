import { Archivo_Black, Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const instrument = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://edukasya.ynnz.my.id'),

  title: {
    default: 'EdukasyaClub',
    template: '%s | EdukasyaClub',
  },
  description:
    'Website edukasi obat Anti Kolesterol untuk presentasi tugas sekolah',
  keywords: [
    'obat ezetimibe',
    'ezetimibe',
    'statin',
    'hiperlipidemia',
    'obat kolesterol',
    'tugas biologi',
  ],
  authors: [{ name: 'Ynnz ID' }],
  creator: 'Ynnz ID',
  publisher: 'EdukasyaClub',

  // 🔥 FAVICON — semua format
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.png',
      },
    ],
  },

  openGraph: {
    title: 'EdukasyaClub',
    description:
      'Website edukasi obat Anti Kolesterol untuk presentasi tugas sekolah',
    url: 'https://edukasya.ynnz.my.id',
    siteName: 'EdukasyaClub',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/icon.png',
        width: 1200,
        height: 630,
        alt: 'EdukasyaClub',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'EdukasyaClub',
    description:
      'Website edukasi obat Anti Kolesterol untuk presentasi tugas sekolah',
    images: ['/images/icon.png'],
    creator: '@ynnzid',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#F5F1E8', // sesuaikan dengan warna cream-mu
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Fallback manual — kalau metadata di atas tidak jalan */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body
        className={`${archivo.variable} ${instrument.variable} ${manrope.variable} font-sans bg-cream text-charcoal antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}