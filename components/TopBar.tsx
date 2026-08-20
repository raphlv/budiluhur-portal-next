'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopBar() {
  const [lang, setLang] = useState('ID');

  return (
    <div className="bg-[#001433] text-slate-300 text-xs py-2 px-6 lg:px-16 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: CAMPUS MEDIA & QUICK PORTAL LINKS */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <span className="text-[#FFE600] font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-graduation-cap"></i> Portal Mahasiswa:
            </span>
            <a href="https://student.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web Student</a>
            <span className="text-slate-600">|</span>
            <a href="https://kprs.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">KPRS Online</a>
            <span className="text-slate-600">|</span>
            <a href="https://elearning.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">E-Learning</a>
            <span className="text-slate-600">|</span>
            <a href="https://webdosen.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web Dosen</a>
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
            <a href="https://budiluhur.tv" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE600] font-semibold transition-colors flex items-center gap-1">
              <i className="fa-solid fa-tv text-red-400"></i> BLTV
            </a>
            <span className="text-slate-600">|</span>
            <a href="https://radio.rctiplus.com/radio-fm/20937/radio-budi-luhur/player" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE600] font-semibold transition-colors flex items-center gap-1">
              <i className="fa-solid fa-radio text-amber-400"></i> Radio BLU
            </a>
          </div>
        </div>

        {/* RIGHT: LANGUAGE SWITCHER & CONTACT */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-400">
            <i className="fa-solid fa-phone text-[#FFE600]"></i> +62 21 5853753
          </span>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLang('ID')}
              className={`px-2 py-0.5 rounded font-bold transition-colors ${lang === 'ID' ? 'bg-[#FFE600] text-[#00255A]' : 'text-slate-400 hover:text-white'}`}
            >
              🇮🇩 ID
            </button>
            <button 
              onClick={() => setLang('EN')}
              className={`px-2 py-0.5 rounded font-bold transition-colors ${lang === 'EN' ? 'bg-[#FFE600] text-[#00255A]' : 'text-slate-400 hover:text-white'}`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
