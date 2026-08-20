import prisma from '@/lib/prisma';
import Link from 'next/link';

export const metadata = {
  title: 'Kehidupan Kampus & Fasilitas | Universitas Budi Luhur',
  description: 'Fasilitas modern, UKM, organisasi mahasiswa, dan kegiatan kehidupan kampus di Universitas Budi Luhur Jakarta.',
};

export const revalidate = 0;

export default async function CampusLifePage() {
  const facilities = await prisma.facility.findMany({
    orderBy: { id: 'asc' },
  });

  const ukms = [
    { name: 'Budi Luhur TV (BLTV)', category: 'Media & Broadcasting', icon: 'fa-tv', desc: 'Komunitas produksi siaran televisi dan jurnalisme multimedia berstandar industri.' },
    { name: 'Radio Budi Luhur FM', category: 'Media & Audio', icon: 'fa-radio', desc: 'Stasiun radio mahasiswa yang mengudara program musik, edukasi, dan talkshow kampus.' },
    { name: 'Budi Luhur Robotics Club', category: 'Teknologi & Riset', icon: 'fa-robot', desc: 'Komunitas perancangan robot cerdas, drone, IoT, dan partisipasi kontes robot nasional.' },
    { name: 'Budi Luhur Basketball & Futsal', category: 'Olahraga', icon: 'fa-basketball', desc: 'Klub olahraga berprestasi yang rutin meraih gelar juara kompetisi liga mahasiswa nasional.' },
    { name: 'Paduan Suara & Orkestra UBL', category: 'Seni & Musik', icon: 'fa-music', desc: 'Wadah olah vokal dan instrumen musik dengan prestasi kejuaraan paduan suara internasional.' },
    { name: 'Mahasiswa Pencinta Alam (MAPALA)', category: 'Petualangan & Konservasi', icon: 'fa-mountain', desc: 'Ekspedisi penjelajahan alam bebas dan pelestarian flora fauna pegunungan nusantara.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FFE600] text-[#00255A] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <i className="fa-solid fa-users"></i> CAMPUS LIFE & FACILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Kehidupan Kampus & Fasilitas Modern
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Menghadirkan lingkungan belajar yang suportif, asri, dan inspiratif. Kembangkan potensi akademik dan minat bakat Anda melalui puluhan organisasi dan fasilitas berstandar tinggi.
          </p>
        </div>
      </section>

      {/* FACILITIES DIRECTORY */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-16">
        
        <div className="space-y-4">
          <span className="text-[#004FC2] font-black text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            SARANA & PRASARANA
          </span>
          <h2 className="text-3xl font-black text-[#00255A]">
            Fasilitas Penunjang Akademik & Kreativitas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => (
            <div 
              key={fac.id} 
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={fac.imageUrl} 
                  alt={fac.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-[#00255A] text-[#FFE600] text-xs font-bold px-3 py-1 rounded-xl shadow">
                  {fac.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#00255A]">{fac.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{fac.description}</p>
                <p className="text-[#004FC2] text-xs font-semibold pt-2 border-t border-slate-100 flex items-center gap-1.5">
                  <i className="fa-solid fa-map-pin text-red-500"></i> {fac.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* UKM & ORGANISASI MAHASISWA */}
        <div className="space-y-8 pt-12">
          <div className="space-y-3">
            <span className="text-emerald-700 font-black text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              STUDENT CLUBS & COMMUNITIES
            </span>
            <h2 className="text-3xl font-black text-[#00255A]">
              Unit Kegiatan Mahasiswa (UKM)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukms.map((ukm, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#004FC2] hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#004FC2] flex items-center justify-center text-xl">
                  <i className={`fa-solid ${ukm.icon}`}></i>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">{ukm.category}</span>
                  <h3 className="text-lg font-bold text-[#00255A]">{ukm.name}</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{ukm.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
