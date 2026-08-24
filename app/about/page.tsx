'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { lang, t, isEn } = useLanguage();

  const values = [
    { 
      num: '01', 
      name: isEn ? 'Grateful' : 'Bersyukur', 
      desc: isEn 
        ? 'Always giving thanks for all blessings from God Almighty and striving to the utmost.' 
        : 'Senantiasa mensyukuri segala anugerah Tuhan Yang Maha Esa dan berikhtiar secara optimal.' 
    },
    { 
      num: '02', 
      name: isEn ? 'Honest & Responsible' : 'Jujur & Bertanggung Jawab', 
      desc: isEn 
        ? 'Upholding moral integrity, academic honesty, and professional responsibility in every endeavor.' 
        : 'Menjunjung tinggi kejujuran moral, integritas akademik, dan komitmen profesional.' 
    },
    { 
      num: '03', 
      name: isEn ? 'Polite & Courteous' : 'Sopan & Santun', 
      desc: isEn 
        ? 'Respecting fellow human beings with courteous speech and refined social demeanor.' 
        : 'Menghargai sesama manusia dengan tutur kata yang santun dan adab pergaulan mulia.' 
    },
    { 
      num: '04', 
      name: isEn ? 'Humble' : 'Rendah Hati', 
      desc: isEn 
        ? 'Remaining humble in the face of success and continuously open to new knowledge.' 
        : 'Tidak sombong atas prestasi dan senantiasa membuka diri terhadap ilmu pengetahuan baru.' 
    },
    { 
      num: '05', 
      name: isEn ? 'Socially Empathetic' : 'Berjiwa Sosial', 
      desc: isEn 
        ? 'Deeply caring for the welfare of others and responsive to community challenges.' 
        : 'Peduli terhadap kesejahteraan sesama dan tanggap terhadap problem kemasyarakatan.' 
    },
    { 
      num: '06', 
      name: isEn ? 'Helpful' : 'Suka Menolong', 
      desc: isEn 
        ? 'Offering selfless assistance and fostering solidarity for the greater good.' 
        : 'Memberikan bantuan tanpa pamrih dan bahu-membahu dalam kebaikan.' 
    },
    { 
      num: '07', 
      name: isEn ? 'Environmentally Conscious' : 'Cinta Lingkungan', 
      desc: isEn 
        ? 'Protecting the planet through green campus leadership, solar energy, and integrated waste management.' 
        : 'Menjaga kelestarian bumi melalui pelopor green campus dan bank sampah terpadu.' 
    },
    { 
      num: '08', 
      name: isEn ? 'Patriotic' : 'Cinta Tanah Air', 
      desc: isEn 
        ? 'Loyal to the Republic of Indonesia and passionately contributing to national advancement.' 
        : 'Setia pada Negara Kesatuan Republik Indonesia dan berkontribusi untuk kemajuan bangsa.' 
    },
    { 
      num: '09', 
      name: isEn ? 'Tenacious & Resilient' : 'Pantang Menyerah', 
      desc: isEn 
        ? 'Resilient against obstacles, constantly innovating, and relentlessly striving for excellence.' 
        : 'Tangguh menghadapi rintangan dan senantiasa berinovasi menciptakan solusi unggul.' 
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#fced17] border border-white/20">
            <i className="fa-solid fa-landmark"></i> {t('aboutPage.heroBadge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('aboutPage.heroTitle')}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t('aboutPage.heroDesc')}
          </p>
        </div>
      </section>

      {/* RECTOR'S WELCOME */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 text-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop" 
              alt="Rektor Universitas Budi Luhur" 
              className="w-64 sm:w-72 h-72 sm:h-80 object-cover rounded-3xl mx-auto border-4 border-[#fced17] shadow-xl" 
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-[#173860]">Prof. Dr. Ir. Wendi Usino, M.Sc., M.M.</h3>
              <p className="text-xs text-slate-500 font-semibold">
                {isEn ? 'Rector of Universitas Budi Luhur' : 'Rektor Universitas Budi Luhur'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-[#1ca3dc] font-black text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              {t('aboutPage.rectorBadge')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#173860] leading-snug">
              {t('aboutPage.rectorTitle')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('aboutPage.rectorGreeting1')}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('aboutPage.rectorGreeting2')}
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#0e243e] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6">
            <span className="bg-[#fced17] text-[#173860] font-black text-xs px-3.5 py-1.5 rounded-full uppercase">
              {t('aboutPage.visionBadge')}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-white">
              {t('aboutPage.visionTitle')}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('aboutPage.visionDesc')}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6">
            <span className="bg-[#1ca3dc] text-white font-black text-xs px-3.5 py-1.5 rounded-full uppercase">
              {t('aboutPage.missionBadge')}
            </span>
            <ul className="space-y-3.5 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#fced17] mt-1 shrink-0"></i>
                <span>
                  {isEn 
                    ? 'Delivering high-quality education with adaptive curriculum and state-of-the-art technologies.'
                    : 'Menyelenggarakan pendidikan tinggi berkualitas dengan kurikulum adaptif dan teknologi mutakhir.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#fced17] mt-1 shrink-0"></i>
                <span>
                  {isEn
                    ? 'Conducting impactful research and innovation beneficial to society and industry.'
                    : 'Melaksanakan riset dan inovasi aplikatif yang bermanfaat bagi masyarakat dan industri (Diktisaintek Berdampak).'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#fced17] mt-1 shrink-0"></i>
                <span>
                  {isEn
                    ? 'Inculcating and practicing the 9 Virtues of Kebudiluhuran across all academic endeavors.'
                    : 'Menanamkan dan mengamalkan 9 Nilai Kebudiluhuran dalam seluruh aktivitas tridharma perguruan tinggi.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#fced17] mt-1 shrink-0"></i>
                <span>
                  {isEn
                    ? 'Expanding national and global partnerships to strengthen international reputation.'
                    : 'Memperluas jejaring kerjasama nasional dan internasional untuk penguatan reputasi global.'}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* THE 9 VALUES OF KEBUDILUHURAN */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#1ca3dc] font-black text-xs tracking-widest uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            {t('aboutPage.valuesBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#173860] tracking-tight">
            {t('aboutPage.valuesTitle')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('aboutPage.valuesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v) => (
            <div 
              key={v.num} 
              className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-[#1ca3dc] hover:shadow-xl transition-all space-y-3.5 relative overflow-hidden group"
            >
              <span className="text-5xl font-black text-slate-100 group-hover:text-sky-50 transition-colors absolute -right-2 -bottom-2 select-none">
                {v.num}
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#173860] text-[#fced17] font-black flex items-center justify-center text-sm shadow">
                {v.num}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#173860] group-hover:text-[#1ca3dc] transition-colors">
                {v.name}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed relative z-10">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
