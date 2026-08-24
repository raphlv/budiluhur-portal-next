'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, availableLanguages, currentLanguageOption, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '/', icon: 'fa-house' },
    { name: t('nav.academic'), href: '/academic', icon: 'fa-graduation-cap' },
    { name: t('nav.about'), href: '/about', icon: 'fa-landmark' },
    { name: t('nav.admissions'), href: '/admissions', icon: 'fa-user-plus' },
    { name: t('nav.innovation'), href: '/innovation', icon: 'fa-bolt' },
    { name: t('nav.news'), href: '/news', icon: 'fa-newspaper' },
    { name: t('nav.campusLife'), href: '/campus-life', icon: 'fa-users' },
    { name: t('nav.contact'), href: '/contact', icon: 'fa-map-location-dot' },
  ];

  return (
    <header className="sticky top-0 w-full z-40 bg-[#173860] text-white shadow-xl border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        
        {/* 1. LOGO & ACCREDITATION INFO */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fced17] text-[#173860] flex items-center justify-center font-black text-2xl shadow-lg group-hover:scale-105 transition-transform shrink-0">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div>
            <div className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight leading-tight whitespace-nowrap">
              <span>{t('common.univPrefix')} </span>
              <span className="text-[#fced17]">{t('common.univSuffix')}</span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] bg-[#1ca3dc] text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                {t('nav.accreditationBadge')}
              </span>
              <span className="text-[11px] text-slate-300 hidden md:inline font-medium">
                {t('nav.tagline')}
              </span>
            </div>
          </div>
        </Link>

        {/* 2. DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-white/20 text-[#fced17] shadow-inner font-black border border-white/20'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* 3. PMB CTA BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* PMB CTA BUTTON */}
          <Link
            href="/admissions"
            className="hidden sm:inline-flex items-center gap-2 bg-[#fced17] hover:bg-white text-[#173860] px-4 lg:px-5 py-2.5 rounded-xl font-black text-xs lg:text-sm shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-0.5 transition-all whitespace-nowrap border border-[#fced17]"
          >
            <span className="w-2 h-2 bg-[#de1f26] rounded-full animate-ping"></span>
            <span>{t('nav.joinPmbBtn')}</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>

          {/* MOBILE MENU HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center text-lg hover:bg-white/20 transition-colors border border-white/15"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

      </div>

      {/* 4. MOBILE SLIDEOUT MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e243e] border-t border-white/10 px-6 py-6 space-y-5 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          
          {/* MOBILE LANGUAGE SELECTOR */}
          <div className="space-y-2 pb-3 border-b border-white/15">
            <div className="text-xs font-black uppercase text-[#1ca3dc] tracking-wider flex items-center justify-between">
              <span>{t('topbar.selectLang')}</span>
              <span className="text-[11px] text-slate-400">{currentLanguageOption.flag} {currentLanguageOption.nativeName}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {availableLanguages.map((item) => {
                const isSelected = lang === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => setLang(item.code)}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                      isSelected
                        ? 'bg-[#fced17] text-[#173860] border-[#fced17] font-black shadow-md'
                        : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span className="uppercase">{item.code}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="space-y-1">
            <div className="text-xs font-black uppercase text-[#1ca3dc] tracking-wider px-3 pb-1">
              {t('nav.menuTitle')}
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-white/15 text-[#fced17]'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <i className={`fa-solid ${link.icon} text-xs text-[#1ca3dc] w-5 text-center`}></i>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* MOBILE PMB CTA */}
          <div className="pt-2 border-t border-white/15 space-y-2.5">
            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center bg-[#fced17] text-[#173860] font-black py-3.5 rounded-xl shadow-md text-sm"
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span>{t('nav.joinPmbBtn')}</span>
            </Link>
            
            <a
              href="https://wa.me/62811803330"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-xs border border-white/20"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400"></i>
              <span>WhatsApp Hotline (+62 811-8033-30)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
