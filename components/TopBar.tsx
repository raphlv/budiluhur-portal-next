'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TopBar() {
  const { lang, setLang, availableLanguages, currentLanguageOption, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#0e243e] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-12 border-b border-white/10 hidden md:block relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-6">
        
        {/* LEFT: CAMPUS MEDIA & QUICK PORTAL LINKS */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Student Portal Links */}
          <div className="flex items-center gap-2.5">
            <span className="text-[#fced17] font-bold flex items-center gap-1.5 shrink-0">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>{t('topbar.portalStudent')}</span>
            </span>
            <a 
              href="https://student.budiluhur.ac.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#fced17] transition-colors"
            >
              {t('topbar.webStudent')}
            </a>
            <span className="text-white/20 select-none">•</span>
            <a 
              href="https://kprs.budiluhur.ac.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#fced17] transition-colors"
            >
              {t('topbar.kprsOnline')}
            </a>
            <span className="text-white/20 select-none">•</span>
            <a 
              href="https://elearning.budiluhur.ac.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#fced17] transition-colors"
            >
              {t('topbar.eLearning')}
            </a>
            <span className="text-white/20 select-none">•</span>
            <a 
              href="https://webdosen.budiluhur.ac.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#fced17] transition-colors"
            >
              {t('topbar.webDosen')}
            </a>
          </div>

          {/* Campus Media (TV & Radio) */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/15">
            <a 
              href="https://budiluhur.tv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#fced17] font-semibold transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#de1f26]"></span>
              <i className="fa-solid fa-tv text-[#de1f26] text-xs"></i>
              <span>{t('topbar.bltv')}</span>
            </a>
            <span className="text-white/20 select-none">•</span>
            <a 
              href="https://radio.rctiplus.com/radio-fm/20937/radio-budi-luhur/player" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#fced17] font-semibold transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#1ca3dc]"></span>
              <i className="fa-solid fa-radio text-[#1ca3dc] text-xs"></i>
              <span>{t('topbar.radioBlu')}</span>
            </a>
          </div>
        </div>

        {/* RIGHT: CONTACT & MULTI-LANGUAGE SELECTOR */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+62215853753" 
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-phone text-[#fced17]"></i>
            <span className="font-semibold">+62 21 5853753</span>
          </a>

          <span className="text-white/20 select-none">|</span>

          {/* MULTI-LANGUAGE DROPDOWN SELECTOR */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 px-2.5 py-1 rounded-lg text-xs font-bold text-slate-200 hover:text-white transition-all shadow-inner"
              aria-label="Select Language"
            >
              <span className="text-sm">{currentLanguageOption.flag}</span>
              <span className="font-black text-[#fced17] uppercase tracking-wider">{currentLanguageOption.code}</span>
              <span className="text-[11px] text-slate-300 font-semibold hidden xl:inline">({currentLanguageOption.nativeName})</span>
              <i className={`fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {/* DROPDOWN MENU */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#0e243e] border border-white/20 rounded-2xl shadow-2xl overflow-hidden py-1.5 z-50 animate-fadeIn backdrop-blur-xl">
                <div className="px-3.5 py-1.5 text-[10px] font-black uppercase text-[#1ca3dc] tracking-wider border-b border-white/10 flex items-center justify-between">
                  <span>{t('topbar.selectLang')}</span>
                  <i className="fa-solid fa-globe text-xs"></i>
                </div>

                <div className="py-1">
                  {availableLanguages.map((item) => {
                    const isSelected = lang === item.code;
                    return (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLang(item.code);
                          setDropdownOpen(false);
                        }}
                        className={`w-full px-3.5 py-2 text-left flex items-center justify-between text-xs transition-colors ${
                          isSelected
                            ? 'bg-[#fced17] text-[#173860] font-black shadow-sm'
                            : 'text-slate-200 hover:bg-white/10 hover:text-white font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{item.flag}</span>
                          <div>
                            <div className="leading-none">{item.nativeName}</div>
                            <div className={`text-[10px] leading-tight ${isSelected ? 'text-[#173860]/80' : 'text-slate-400'}`}>
                              {item.name}
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <i className="fa-solid fa-check text-xs text-[#173860]"></i>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
