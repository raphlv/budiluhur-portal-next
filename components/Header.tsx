'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Academic', href: '/academic' },
    { name: 'About UBL', href: '/about' },
    { name: 'Admissions (PMB)', href: '/admissions' },
    { name: 'Innovation & EV', href: '/innovation' },
    { name: 'News & Impact', href: '/news' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-[#00255A] text-white shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-24 flex items-center justify-between">
        
        {/* LOGO & ACCREDITATION */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-2xl bg-[#FFE600] text-[#00255A] flex items-center justify-center font-black text-2xl shadow-lg group-hover:scale-105 transition-transform">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div>
            <span className="text-xl lg:text-2xl font-black tracking-tight block leading-tight">
              UNIVERSITAS <span className="text-[#FFE600]">BUDI LUHUR</span>
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] bg-[#10B981] text-white font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                AKREDITASI UNGGUL
              </span>
              <span className="text-[11px] text-slate-300 hidden sm:inline font-medium">
                Cerdas Berbudi Luhur
              </span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-white/15 text-[#FFE600] shadow-sm'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* PMB CTA BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            href="/admissions"
            className="hidden sm:inline-flex items-center gap-2 bg-[#FFE600] hover:bg-white text-[#00255A] px-5 py-3 rounded-xl font-extrabold text-sm shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
            <span>JOIN PMB 2026</span>
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center text-xl hover:bg-white/20 transition-colors"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

      </div>

      {/* MOBILE SLIDEOUT MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#00183C] border-t border-white/10 px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-[#FFE600] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-700">
            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#FFE600] text-[#00255A] font-extrabold py-3.5 rounded-xl shadow-md"
            >
              Pendaftaran Mahasiswa Baru (PMB)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
