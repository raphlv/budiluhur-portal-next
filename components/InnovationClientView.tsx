'use client';

import { useLanguage } from '@/context/LanguageContext';

interface InnovationItem {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  specs: string;
  imageUrl: string;
  achievement: string;
}

export default function InnovationClientView({ innovations }: { innovations: InnovationItem[] }) {
  const { lang, t, isEn } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fced17] text-[#173860] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <i className="fa-solid fa-bolt"></i> {t('innovationPage.heroBadge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('innovationPage.heroTitle')}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t('innovationPage.heroDesc')}
          </p>
        </div>
      </section>

      {/* INNOVATION LIST */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        
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
              <div className="absolute top-4 left-4 bg-[#173860] text-[#fced17] font-black text-xs px-3.5 py-1.5 rounded-xl shadow border border-white/20">
                {inv.category}
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#173860] leading-tight">
                {inv.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {inv.description}
              </p>

              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
                <p className="text-slate-700">
                  <strong className="text-[#1ca3dc]">{isEn ? 'Technical Specifications:' : 'Spesifikasi Teknis:'}</strong> {inv.specs}
                </p>
                <p className="text-emerald-700">
                  <strong>{isEn ? 'Milestones & Records:' : 'Penghargaan & Rekor:'}</strong> {inv.achievement}
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="https://blitsindonesia.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-[#173860] hover:bg-[#1ca3dc] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
                >
                  <i className="fa-solid fa-globe"></i>
                  <span>{isEn ? 'Visit BLITS Research Portal' : 'Kunjungi Portal Riset BLITS'}</span>
                </a>
              </div>
            </div>
          </div>
        ))}

      </section>

    </div>
  );
}
