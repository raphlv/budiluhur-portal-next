import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Universitas Budi Luhur | Cerdas Berbudi Luhur',
  description: 'Situs resmi Universitas Budi Luhur Jakarta. Kampus berakreditasi UNGGUL dengan 5 Fakultas unggulan: FTI, FEB, FKDK, FISSIG, FTCB, dan Pascasarjana. Pelopor teknologi dan mobil listrik nasional.',
  keywords: 'Universitas Budi Luhur, UBL, Kampus Jakarta, FTI Budi Luhur, FEB, FKDK, Akreditasi Unggul, Mobil Listrik BLITS, PMB Budi Luhur',
  openGraph: {
    title: 'Universitas Budi Luhur | Akreditasi Unggul',
    description: 'Transforming Knowledge into Meaningful Impact. Kampus Cerdas Berbudi Luhur Jakarta.',
    url: 'https://www.budiluhur.ac.id',
    siteName: 'Universitas Budi Luhur',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#FFE600] selection:text-[#00255A]">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
