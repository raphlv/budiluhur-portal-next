'use client';

import { useLanguage } from '@/context/LanguageContext';

interface FacilityItem {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  imageUrl: string;
}

export default function CampusLifeClientView({ facilities }: { facilities: FacilityItem[] }) {
  const { lang, t, isEn } = useLanguage();

  const ukms = [
    { 
      name: 'Budi Luhur TV (BLTV)', 
      category: isEn ? 'Media & Broadcasting' : 'Media & Penyiaran', 
      icon: 'fa-tv', 
      desc: isEn 
        ? 'Broadcast television production community and industry-grade multimedia journalism.' 
        : 'Komunitas produksi siaran televisi dan jurnalisme multimedia berstandar industri.' 
    },
    { 
      name: 'Radio Budi Luhur FM', 
      category: isEn ? 'Media & Audio' : 'Media & Audio', 
      icon: 'fa-radio', 
      desc: isEn 
        ? 'Student radio station airing music programs, educational shows, and live campus podcasts.' 
        : 'Stasiun radio mahasiswa yang mengudara program musik, edukasi, dan talkshow kampus.' 
    },
    { 
      name: 'Budi Luhur Robotics Club', 
      category: isEn ? 'Tech & AI Research' : 'Teknologi & Riset', 
      icon: 'fa-robot', 
      desc: isEn 
        ? 'Robotics and IoT engineering club regularly competing in national robot contests.' 
        : 'Komunitas perancangan robot cerdas, drone, IoT, dan partisipasi kontes robot nasional.' 
    },
    { 
      name: 'Budi Luhur Basketball & Futsal', 
      category: isEn ? 'Sports League' : 'Olahraga', 
      icon: 'fa-basketball', 
      desc: isEn 
        ? 'Championship athletic clubs consistently winning national university sports league titles.' 
        : 'Klub olahraga berprestasi yang rutin meraih gelar juara kompetisi liga mahasiswa nasional.' 
    },
    { 
      name: 'Paduan Suara & Orkestra UBL', 
      category: isEn ? 'Music & Arts' : 'Seni & Musik', 
      icon: 'fa-music', 
      desc: isEn 
        ? 'Vocal and orchestral ensemble representing UBL in international choir competitions.' 
        : 'Wadah olah vokal dan instrumen musik dengan prestasi kejuaraan paduan suara internasional.' 
    },
    { 
      name: 'Mahasiswa Pencinta Alam (MAPALA)', 
      category: isEn ? 'Eco-Adventure' : 'Petualangan & Konservasi', 
      icon: 'fa-mountain', 
      desc: isEn 
        ? 'Outdoor expedition and ecological conservation club across the Indonesian archipelago.' 
        : 'Ekspedisi penjelajahan alam bebas dan pelestarian flora fauna pegunungan nusantara.' 
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fced17] text-[#173860] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <i className="fa-solid fa-users"></i> {t('campusLifePage.heroBadge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('campusLifePage.heroTitle')}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t('campusLifePage.heroDesc')}
          </p>
        </div>
      </section>

      {/* FACILITIES DIRECTORY */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        
        <div className="space-y-3">
          <span className="text-[#1ca3dc] font-black text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            {isEn ? 'FACILITIES & AMENITIES' : 'SARANA & PRASARANA'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#173860]">
            {isEn ? 'Campus Facilities Supporting Academic & Creative Growth' : 'Fasilitas Penunjang Akademik & Kreativitas'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => (
            <div 
              key={fac.id} 
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1ca3dc] transition-all group"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={fac.imageUrl} 
                  alt={fac.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-[#173860] text-[#fced17] text-xs font-black px-3 py-1 rounded-xl shadow">
                  {fac.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#173860]">{fac.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{fac.description}</p>
                <p className="text-[#1ca3dc] text-xs font-semibold pt-2 border-t border-slate-100 flex items-center gap-1.5">
                  <i className="fa-solid fa-map-pin text-[#de1f26]"></i> {fac.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* UKM & ORGANISASI MAHASISWA */}
        <div className="space-y-8 pt-10">
          <div className="space-y-3">
            <span className="text-emerald-700 font-black text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              {isEn ? 'STUDENT CLUBS & COMMUNITIES' : 'ORGANISASI KEMAHASISWAAN'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#173860]">
              {t('campusLifePage.ukmSectionTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukms.map((ukm, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#1ca3dc] hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#1ca3dc] flex items-center justify-center text-xl">
                  <i className={`fa-solid ${ukm.icon}`}></i>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black text-slate-400 uppercase">{ukm.category}</span>
                  <h3 className="text-lg font-bold text-[#173860]">{ukm.name}</h3>
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
