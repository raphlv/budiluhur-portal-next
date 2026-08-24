'use client';

import { useLanguage } from '@/context/LanguageContext';

interface BranchItem {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  googleMapsUrl: string;
  isMainCampus: boolean;
  imageUrl: string;
}

export default function ContactClientView({ branches }: { branches: BranchItem[] }) {
  const { lang, t, isEn } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fced17] text-[#173860] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <i className="fa-solid fa-map-location-dot"></i> {t('contactPage.heroBadge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('contactPage.heroTitle')}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t('contactPage.heroDesc')}
          </p>
        </div>
      </section>

      {/* CAMPUS BRANCHES */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#1ca3dc] transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {branch.isMainCampus ? (
                  <span className="bg-[#173860] text-[#fced17] text-xs font-black px-3 py-1 rounded-full uppercase inline-block">
                    {t('contactPage.mainCampusBadge')}
                  </span>
                ) : (
                  <span className="bg-slate-100 text-slate-700 text-xs font-black px-3 py-1 rounded-full uppercase inline-block">
                    {t('contactPage.branchCampusBadge')}
                  </span>
                )}

                <h3 className="text-xl font-bold text-[#173860]">{branch.name}</h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  <i className="fa-solid fa-map-pin text-[#de1f26] mr-2"></i>
                  {branch.address}
                </p>

                <div className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                  <p><i className="fa-solid fa-phone text-[#1ca3dc] mr-2"></i> {branch.phone}</p>
                  <p><i className="fa-solid fa-envelope text-amber-500 mr-2"></i> {branch.email}</p>
                </div>
              </div>

              <a 
                href={branch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-slate-100 hover:bg-[#173860] text-[#173860] hover:text-white font-bold text-xs py-3 rounded-xl transition-all"
              >
                {t('contactPage.mapsDirection')} <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
              </a>
            </div>
          ))}
        </div>

        {/* MAP EMBED & CONTACT DETAILS */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 h-96 lg:h-auto min-h-[380px] bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1952046830725!2d106.74415847499052!3d-6.237984893750247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0e60897f1f7%3A0xc07a8cb404c5e3fe!2sUniversitas%20Budi%20Luhur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Universitas Budi Luhur"
              className="w-full h-full min-h-[380px]"
            ></iframe>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6">
            <span className="text-[#1ca3dc] font-black text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              {isEn ? 'INTEGRATED INFO CENTER' : 'PUSAT INFORMASI TERPADU'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#173860]">
              {isEn ? 'Visit Admissions & Media Center' : 'Kunjungi Media Center & Admisi'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEn 
                ? 'Admissions counseling and campus inquiries are open Monday - Saturday, 08:00 - 17:00 WIB at the Budi Luhur Student Service Center.'
                : 'Pelayanan admisi dan konsultasi program studi dibuka setiap hari Senin - Sabtu pukul 08:00 - 17:00 WIB di Gedung Pelayanan Mahasiswa Terpadu Budi Luhur.'}
            </p>

            <div className="space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
                <span><strong>WhatsApp Hotline:</strong> +62 811-8033-30</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-100 text-[#1ca3dc] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span><strong>Telepon:</strong> (021) 5853753</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span><strong>Email:</strong> info@budiluhur.ac.id / infopmb@budiluhur.ac.id</span>
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
