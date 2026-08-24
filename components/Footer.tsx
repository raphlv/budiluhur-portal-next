'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0e243e] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* TOP ROW: LOGO & ACCREDITATION INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800">
          
          {/* CAMPUS PROFILE & SOCIALS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#fced17] text-[#173860] flex items-center justify-center font-black text-2xl shadow-lg shrink-0">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight block">
                  <span>{t('common.univPrefix')} </span>
                  <span className="text-[#fced17]">{t('common.univSuffix')}</span>
                </span>
                <span className="text-xs text-[#1ca3dc] font-bold">
                  {t('footer.accreditationNotice')}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.campusDescription')}
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://youtube.com/@budiluhurtv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#de1f26] text-white flex items-center justify-center transition-all hover:scale-105"
                title="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a 
                href="https://www.instagram.com/kampusbudiluhur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 text-white flex items-center justify-center transition-all hover:scale-105"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://www.facebook.com/kampusbudiluhur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1ca3dc] text-white flex items-center justify-center transition-all hover:scale-105"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@budiluhurtv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105"
                title="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a 
                href="https://wa.me/62811803330" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all hover:scale-105"
                title="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* FACULTIES & ACADEMIC */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm tracking-wider uppercase border-b border-white/15 pb-2.5 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-[#fced17]"></i>
              <span>{t('footer.facultiesTitle')}</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/academic/fti" className="hover:text-[#fced17] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#1ca3dc] text-xs"></i>
                  <span>{t('footer.fti')}</span>
                </Link>
              </li>
              <li>
                <Link href="/academic/feb" className="hover:text-[#fced17] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#1ca3dc] text-xs"></i>
                  <span>{t('footer.feb')}</span>
                </Link>
              </li>
              <li>
                <Link href="/academic/fkdk" className="hover:text-[#fced17] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#1ca3dc] text-xs"></i>
                  <span>{t('footer.fkdk')}</span>
                </Link>
              </li>
              <li>
                <Link href="/academic/fissig" className="hover:text-[#fced17] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#1ca3dc] text-xs"></i>
                  <span>{t('footer.fissig')}</span>
                </Link>
              </li>
              <li>
                <Link href="/academic/ftcb" className="hover:text-[#fced17] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#1ca3dc] text-xs"></i>
                  <span>{t('footer.ftcb')}</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors flex items-center gap-2 font-bold text-[#fced17]">
                  <i className="fa-solid fa-star text-xs"></i>
                  <span>{t('footer.postgraduate')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* STUDENT & CAMPUS SERVICES */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold text-sm tracking-wider uppercase border-b border-white/15 pb-2.5 flex items-center gap-2">
              <i className="fa-solid fa-compass text-[#1ca3dc]"></i>
              <span>{t('footer.campusServicesTitle')}</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://student.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#fced17] transition-colors">
                  {t('topbar.webStudent')}
                </a>
              </li>
              <li>
                <a href="https://kprs.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#fced17] transition-colors">
                  {t('topbar.kprsOnline')}
                </a>
              </li>
              <li>
                <a href="https://elearning.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#fced17] transition-colors">
                  {t('topbar.eLearning')}
                </a>
              </li>
              <li>
                <a href="https://webdosen.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#fced17] transition-colors">
                  {t('topbar.webDosen')}
                </a>
              </li>
              <li>
                <a href="https://pustaka.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#fced17] transition-colors">
                  {t('footer.library')}
                </a>
              </li>
              <li>
                <a href="https://budiluhur.tv" target="_blank" rel="noopener noreferrer" className="hover:text-[#fced17] transition-colors">
                  {t('topbar.bltv')}
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#fced17] transition-colors text-xs text-slate-500">
                  {t('footer.adminCms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* LOCATION & CONTACT */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm tracking-wider uppercase border-b border-white/15 pb-2.5 flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-[#de1f26]"></i>
              <span>{t('footer.mainCampusTitle')}</span>
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs space-y-2">
              <p className="font-bold text-white flex items-center gap-1.5">
                <i className="fa-solid fa-map-pin text-[#de1f26]"></i>
                <span>{t('footer.mainCampusName')}</span>
              </p>
              <p className="text-slate-400 leading-relaxed">
                {t('footer.mainCampusAddress')}
              </p>
              <a 
                href="https://maps.app.goo.gl/yaFw9h4AGJN2ypiz5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-[#fced17] font-bold hover:underline pt-1"
              >
                <i className="fa-solid fa-location-arrow"></i>
                <span>{t('contactPage.mapsDirection')}</span>
              </a>
            </div>
            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <p><strong>Hotline PMB:</strong> +62 811-8033-30</p>
              <p><strong>Email:</strong> info@budiluhur.ac.id</p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">{t('footer.aboutUs')}</Link>
            <Link href="/admissions" className="hover:text-white transition-colors">{t('footer.admissionsLink')}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{t('footer.contactUs')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
