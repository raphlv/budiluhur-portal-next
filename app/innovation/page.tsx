import prisma from '@/lib/prisma';
import Link from 'next/link';

export const metadata = {
  title: 'Inovasi & Riset Kendaraan Listrik | Universitas Budi Luhur',
  description: 'Showroom Inovasi Mobil Listrik BLITS, Motor Listrik Sport BLSEV-01, WVO, dan Bank Sampah Universitas Budi Luhur.',
};

export const revalidate = 0;

export default async function InnovationPage() {
  const innovations = await prisma.innovation.findMany({
    orderBy: { id: 'asc' },
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FFE600] text-[#00255A] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <i className="fa-solid fa-bolt"></i> PUSAT INOVASI & TEKNOLOGI NASIONAL
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Pelopor Kendaraan Listrik & Keberlanjutan Lingkungan
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Membawa riset akademis menjadi karya nyata yang berdampak. Dari mobil listrik penjelajah nusantara 15.000 KM hingga pengelolaan green campus mandiri.
          </p>
        </div>
      </section>

      {/* INNOVATION LIST */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-16">
        
        {innovations.map((inv, idx) => (
          <div 
            key={inv.id} 
            className={`bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:col-span-6 h-72 lg:h-full relative overflow-hidden bg-slate-900">
              <img 
                src={inv.imageUrl} 
                alt={inv.name} 
                className="w-full h-full object-cover opacity-90" 
              />
              <div className="absolute top-4 left-4 bg-[#00255A] text-[#FFE600] font-black text-xs px-3.5 py-1.5 rounded-xl shadow border border-white/20">
                {inv.category}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#00255A] leading-tight">
                {inv.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {inv.description}
              </p>

              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
                <p className="text-slate-700">
                  <strong className="text-[#004FC2]">Spesifikasi Teknis:</strong> {inv.specs}
                </p>
                <p className="text-emerald-700">
                  <strong>Penghargaan & Rekor:</strong> {inv.achievement}
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="https://blitsindonesia.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-[#00255A] hover:bg-[#004FC2] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
                >
                  <i className="fa-solid fa-globe"></i> Kunjungi Portal Riset BLITS
                </a>
              </div>
            </div>
          </div>
        ))}

      </section>

    </div>
  );
}
